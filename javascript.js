/* ============================================================
   StreamElements Chat Widget — widget.js
   ============================================================ */

/* ---- Настройки по умолчанию (перезаписываются полями SE) ---- */
const DEFAULTS = {
  top_image_url: '',
  bottom_image_url: '',
  banner_height: 80,
  banner_radius: 6,
  font_family: 'Roboto',
  font_url: '',              // URL шрифта — перекрывает Google Font (файл или CSS-таблица)
  font_size: 15,
  text_color: '#ffffff',
  name_color: '',            // '' = цвет чата Twitch
  message_bg: 'rgba(0,0,0,0.55)',
  message_bg_image: '',          // URL картинки фона сообщения
  emote_size: 28,            // высота эмотов (px)
  hide_commands: false,      // скрывать сообщения начинающиеся с «!»

  // ── Никнейм на изображении ──
  author_position:  'top-left',  // 9-позиций: top/middle/bottom + left/center/right
  author_offset_x:  8,           // пиксельный сдвиг по X
  author_offset_y:  8,           // пиксельный сдвиг по Y
  author_bg:        'transparent', // фон подложки: 'transparent' или rgba(...)

  // ── Текст сообщения на изображении ──
  text_position:    'bottom-left',
  text_offset_x:    8,
  text_offset_y:    -8,
  text_bg:          'transparent', // фон подложки: 'transparent' или rgba(...)
  message_radius: 8,
  message_padding: '6px 10px',
  message_gap: 6,
  list_padding: 8,
  max_messages: 50,
  avatar_size: 28,
  show_avatars: false,
  show_badges: true,
  msg_animation: 'slide-up',      // анимация появления: slide-up | fade | slide-right | slide-left | pop | none
  msg_animation_speed: 0.25,     // секунд — длительность анимации появления
  long_msg_threshold: 200,   // символов
  long_msg_scroll: 'ticker', // способ: ticker | vertical | expand | none
  long_msg_max_height: 80,   // px — высота окна для режима vertical
  scroll_speed: 8,           // секунд на полный цикл
  fade_out_delay: 0,         // 0 = сообщения не исчезают
  max_width: '100%',
};

/* ---- Утилиты ---- */
const $ = id => document.getElementById(id);
const chatList = $('chat-list');

let cfg = { ...DEFAULTS };

/* ---- Загрузка шрифта ---- */

/** Вспомогательная: загружает шрифт по имени через Google Fonts */
function loadGoogleFont(family) {
  if (!family) return;
  const id = 'gf-widget-link';
  let link = document.getElementById(id);
  if (!link) {
    link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }
  const name = encodeURIComponent(family).replace(/%20/g, '+');
  link.href = `https://fonts.googleapis.com/css2?family=${name}:ital,wght@0,400;0,700;1,400&display=swap&subset=latin,cyrillic`;
}

/**
 * Основная функция применения шрифта.
 * Логика:
 *  1. font_url задан + это CSS/таблица → <link> (Google Fonts, Bunny, self-hosted CSS)
 *  2. font_url задан + это файл шрифта → @font-face с именем из font_family
 *  3. font_url пуст → загрузка через Google Fonts по имени font_family
 */
function applyFont() {
  const family = (cfg.font_family || 'Roboto').trim();
  const url    = (cfg.font_url    || '').trim();
  const root   = document.documentElement.style;

  // CSS-переменная всегда равна font_family (пользователь сам называет шрифт)
  root.setProperty('--font-family', `'${family}', sans-serif`);

  const gfLink     = document.getElementById('gf-widget-link');
  const customLink = document.getElementById('custom-font-link');
  const customSt   = document.getElementById('custom-font-style');

  if (url && /^https?:\/\//i.test(url)) {
    // Определяем: CSS-таблица или файл шрифта.
    // Важно: fonts.gstatic.com — это хостинг ФАЙЛОВ шрифтов (.woff2 и т.д.), НЕ CSS.
    const isCss = /\.css(\?|#|$)/i.test(url) ||
                  /fonts\.googleapis\.com|fonts\.bunny\.net/i.test(url);

    if (isCss) {
      // ── CSS-таблица (Google Fonts, Bunny, самохостинг) ──
      let lk = customLink;
      if (!lk) {
        lk = document.createElement('link');
        lk.id  = 'custom-font-link';
        lk.rel = 'stylesheet';
        document.head.appendChild(lk);
      }
      lk.href = url;
      if (customSt) customSt.textContent = '';

      // Для Google Fonts CSS — автоматически извлекаем первое имя шрифта из ?family=
      // Пример: ?family=Open+Sans:wght@400;700  →  "Open Sans"
      //         ?family=Montserrat:ital,wght@0,400 →  "Montserrat"
      // [^:&;]+ захватывает имя включая «+» (пробелы), останавливаясь перед вариантом/разделителем
      const gfMatch = url.match(/[?&]family=([^:&;]+)/);
      if (gfMatch) {
        const autoFamily = decodeURIComponent(gfMatch[1].replace(/\+/g, ' ')).trim();
        if (autoFamily) root.setProperty('--font-family', `'${autoFamily}', sans-serif`);
      }
    } else {
      // ── Прямой файл шрифта (.ttf / .woff / .woff2 / .otf / любой другой) ──
      let st = customSt;
      if (!st) {
        st = document.createElement('style');
        st.id = 'custom-font-style';
        document.head.appendChild(st);
      }
      const safeUrl    = url.replace(/'/g, '%27');
      const safeFamily = family.replace(/'/g, "\\'");
      // Два @font-face (400 и 700) — работает как для обычных, так и для variable-шрифтов.
      // Браузер будет использовать один и тот же файл для normal и bold,
      // применяя синтетическое жирное начертание при необходимости.
      const face = `@font-face{font-family:'${safeFamily}';src:url('${safeUrl}');font-weight:WEIGHT;font-style:normal;}`;
      st.textContent = face.replace('WEIGHT', '400') + face.replace('WEIGHT', '700');
      if (customLink) customLink.href = '';
    }
    // Отключаем автозагрузку Google Fonts
    if (gfLink) gfLink.href = '';
  } else {
    // ── URL не задан — используем Google Fonts по имени ──
    if (customLink) customLink.href = '';
    if (customSt)   customSt.textContent = '';
    loadGoogleFont(family);
  }
}

/* Применить CSS-переменные */
function applyVars() {
  const root = document.documentElement.style;

  // ── Шрифт (Google Fonts или кастомный URL) ──
  applyFont();

  // ── Анимация появления сообщений ──
  const animMap = {
    'slide-up':    'msgSlideUp',
    'fade':        'msgFade',
    'slide-right': 'msgSlideRight',
    'slide-left':  'msgSlideLeft',
    'pop':         'msgPop',
    'none':        'msgInstant',
  };
  root.setProperty('--msg-anim',       animMap[cfg.msg_animation] || 'msgSlideUp');
  root.setProperty('--msg-anim-speed', `${Math.max(0.05, Number(cfg.msg_animation_speed) || 0.25)}s`);

  root.setProperty('--font-size',            `${cfg.font_size}px`);
  root.setProperty('--text-color',            cfg.text_color);
  root.setProperty('--message-bg',            cfg.message_bg);
  root.setProperty('--message-radius',       `${cfg.message_radius}px`);
  root.setProperty('--message-padding',       cfg.message_padding);
  root.setProperty('--message-gap',          `${cfg.message_gap}px`);
  root.setProperty('--list-padding',         `${cfg.list_padding}px`);
  root.setProperty('--avatar-size',          `${cfg.avatar_size}px`);
  root.setProperty('--banner-height',        `${cfg.banner_height}px`);
  root.setProperty('--banner-radius',        `${cfg.banner_radius}px`);
  root.setProperty('--scroll-speed',         `${cfg.scroll_speed}s`);
  root.setProperty('--long-msg-max-height',  `${cfg.long_msg_max_height || 80}px`);
  root.setProperty('--name-size',            `${Math.max(10, cfg.font_size - 2)}px`);
  root.setProperty('--max-width',             cfg.max_width);
  root.setProperty('--emote-size',           `${cfg.emote_size || 28}px`);

  // ── Фоновое изображение сообщений ──
  applyMessageBgImage();
}

/* Задаём CSS-переменные для оверлеев изображения */
function applyMessageBgImage() {
  const root = document.documentElement.style;
  root.setProperty('--overlay-radius', `${Math.max(0, cfg.message_radius - 2)}px`);
}

/* Обновить баннеры */
function applyBanners() {
  const top = $('top-banner');
  const topImg = $('top-banner-img');
  const bot = $('bottom-banner');
  const botImg = $('bottom-banner-img');

  const topUrl = (cfg.top_image_url || '').trim();
  const botUrl = (cfg.bottom_image_url || '').trim();

  if (topUrl) {
    topImg.src = topUrl;
    top.classList.add('visible');
  } else {
    topImg.src = '';
    top.classList.remove('visible');
  }

  if (botUrl) {
    botImg.src = botUrl;
    bot.classList.add('visible');
  } else {
    botImg.src = '';
    bot.classList.remove('visible');
  }
}

/* Обновить аватары (класс на #chat-list) */
function applyAvatars() {
  if (cfg.show_avatars) {
    chatList.classList.add('show-avatars');
  } else {
    chatList.classList.remove('show-avatars');
  }
}

/* ---- Инициализация ---- */
function init(fieldData) {
  // Объединяем дефолты с данными полей
  cfg = { ...DEFAULTS };
  for (const key in fieldData) {
    if (key in DEFAULTS || key in cfg) {
      cfg[key] = fieldData[key];
    }
  }
  applyVars();
  applyBanners();
  applyAvatars();
}

/* ---- Обработка значков (badges) ---- */
function buildBadges(badges) {
  if (!cfg.show_badges || !badges || !badges.length) return '';
  return badges.map(b => {
    if (b.url) {
      return `<img class="badge" src="${escapeAttr(b.url)}" title="${escapeAttr(b.description || '')}" />`;
    }
    return '';
  }).join('');
}

/* ---- Экранирование ---- */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
function escapeAttr(str) {
  return String(str).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

/* ---- Разбор текста: эмоты Twitch / BTTV / FFZ ---- */
/**
 * Строит безопасный HTML сообщения с эмотами.
 *
 * SE передаёт emotes[].urls как объект { "1": url, "2": url, "4": url }.
 * Старые версии SE могут передавать e.url или e.gif — они тоже поддержаны.
 *
 * Алгоритм: сортируем по возрастанию start, идём посегментно —
 * каждый текстовый участок между эмотами экранируется отдельно.
 * Это гарантирует XSS-безопасность даже при наличии эмотов.
 *
 * Индексы start/end — JS-строковые (UTF-16 code units), как и в SE.
 */
function buildMessageHtml(msgObj) {
  if (!msgObj) return '';

  const raw    = msgObj.text || '';
  const emotes = msgObj.emotes || [];

  // Нет эмотов — просто экранируем и возвращаем
  if (!emotes.length) return escapeHtml(raw);

  // Сортируем по ВОЗРАСТАНИЮ start для последовательного обхода
  const sorted = [...emotes].sort((a, b) => a.start - b.start);

  let result = '';
  let cursor = 0;

  for (const e of sorted) {
    const start = Number(e.start);
    // Ограничиваем end длиной строки (защита от кривых данных)
    const end   = Math.min(Number(e.end), raw.length - 1);

    // Пропускаем перекрывающиеся или некорректные эмоты
    if (start < cursor || start > end || start >= raw.length) continue;

    // Экранируем текст ДО эмота
    result += escapeHtml(raw.slice(cursor, start));

    // URL: новый формат SE — urls["1"] / ["2"] / ["4"]; старый — e.url / e.gif
    const url =
      (e.urls && (e.urls['1'] || e.urls['2'] || e.urls['4'])) ||
      e.url || e.gif || '';

    if (url) {
      result +=
        `<img class="emote" ` +
        `src="${escapeAttr(url)}" ` +
        `alt="${escapeAttr(e.name || '')}" ` +
        `title="${escapeAttr(e.name || '')}" ` +
        `loading="lazy" ` +
        `onerror="this.style.display='none'" />`;
    } else {
      // URL неизвестен — показываем текст эмота как есть
      result += escapeHtml(raw.slice(start, end + 1));
    }

    cursor = end + 1;
  }

  // Остаток строки после последнего эмота
  result += escapeHtml(raw.slice(cursor));

  return result;
}

/* ---- Создание элемента сообщения ---- */
function createMessageEl(data) {
  const li = document.createElement('li');
  li.className = 'chat-message';

  // Атрибуты для модерации: delete-message / delete-messages
  if (data.msgId)  li.dataset.msgId  = data.msgId;
  if (data.userId) li.dataset.userId = data.userId;


  const authorColor = cfg.name_color
    || (data.displayColor || data.color || '#e879f9');
  const authorName  = escapeHtml(data.displayName || data.name || 'Аноним');
  const badgesHtml  = buildBadges(data.badges || []);
  const msgHtml     = buildMessageHtml(data);
  const isLong      = (data.text || '').length > cfg.long_msg_threshold;
  const imgUrl      = (cfg.message_bg_image || '').trim();

  /* ── Режим: сообщение поверх картинки ── */
  if (imgUrl) {
    li.classList.add('has-bg-image');

    // Позиция + пиксельный сдвиг для никнейма
    const aPos  = `pos-${cfg.author_position  || 'top-left'}`;
    const aOffX = `${Number(cfg.author_offset_x) || 0}px`;
    const aOffY = `${Number(cfg.author_offset_y) || 0}px`;
    const aBg   = cfg.author_bg || 'transparent';

    // Позиция + пиксельный сдвиг для текста сообщения
    const tPos  = `pos-${cfg.text_position    || 'bottom-left'}`;
    const tOffX = `${Number(cfg.text_offset_x) || 0}px`;
    const tOffY = `${Number(cfg.text_offset_y) || 0}px`;
    const tBg   = cfg.text_bg || 'transparent';

    li.innerHTML = `
      <img class="msg-bg-img"
           src="${escapeAttr(imgUrl)}"
           alt=""
           onerror="this.style.opacity='0'" />

      <!-- Оверлей: никнейм (независимо позиционирован) -->
      <div class="msg-author-overlay ${aPos}"
           style="--a-off-x:${aOffX};--a-off-y:${aOffY}">
        <div class="msg-overlay-pill" style="background:${escapeAttr(aBg)}">
          <span class="chat-badges">${badgesHtml}</span><span
            class="chat-author"
            style="color:${escapeAttr(authorColor)}">${authorName}</span>
        </div>
      </div>

      <!-- Оверлей: текст сообщения (независимо позиционирован) -->
      <div class="msg-text-overlay ${tPos}"
           style="--t-off-x:${tOffX};--t-off-y:${tOffY}">
        <div class="msg-overlay-pill" style="background:${escapeAttr(tBg)}">
          <span class="chat-text">${msgHtml}</span>
        </div>
      </div>
    `;

  /* ── Обычный режим ── */
  } else {
    const avatarUrl  = data.avatar || data.profileImage || '';
    const avatarHtml = `<img class="chat-avatar" src="${escapeAttr(avatarUrl)}" alt="" onerror="this.style.display='none'" />`;

    if (isLong) li.classList.add('long-message');

    // Контент одинаков для всех режимов, но для тикера оборачиваем в .ticker-inner —
    // это позволяет точно измерить scrollWidth и анимировать без проблем с flex-layout
    const innerContent = `<span class="chat-badges">${badgesHtml}</span><span
          class="chat-author"
          style="color:${escapeAttr(authorColor)}">${authorName}</span><span
          style="color:var(--text-color,#fff)">: </span><span
          class="chat-text-wrap"><span class="chat-text">${msgHtml}</span></span>`;

    const useTicker = isLong && cfg.long_msg_scroll === 'ticker';

    li.innerHTML = `
      ${avatarHtml}
      <div class="chat-content">
        ${useTicker ? `<span class="ticker-inner">${innerContent}</span>` : innerContent}
      </div>
    `;

    /* Прокрутку запустит addMessage() после измерения ширины */
  }

  /* Автоудаление */
  if (cfg.fade_out_delay > 0) {
    setTimeout(() => removeMessage(li), cfg.fade_out_delay * 1000);
  }

  return li;
}

/* ---- Добавить сообщение в список ---- */
function addMessage(data) {
  const el = createMessageEl(data);
  chatList.appendChild(el);

  // Обрезать старые сообщения
  while (chatList.children.length > cfg.max_messages) {
    chatList.removeChild(chatList.firstChild);
  }

  // Прокрутить список вниз
  requestAnimationFrame(() => {
    chatList.scrollTop = chatList.scrollHeight;
  });

  // Для длинных сообщений: применяем режим прокрутки
  if (el.classList.contains('long-message')) {
    const mode = cfg.long_msg_scroll || 'ticker';
    el.classList.add(`scroll-${mode}`);

    if (mode === 'ticker') {
      // Горизонтальный тикер: ждём загрузки шрифтов → один rAF для layout → измеряем.
      // Меряем .ticker-inner (inline-block, auto-width) относительно .chat-content (overflow:hidden).
      document.fonts.ready.then(() => requestAnimationFrame(() => {
        if (!el.parentNode) return;
        const content = el.querySelector('.chat-content');
        const inner   = el.querySelector('.ticker-inner');
        if (!content || !inner) return;
        const overflow = inner.scrollWidth - content.clientWidth;
        if (overflow > 4) {
          el.style.setProperty('--scroll-amount', `-${overflow}px`);
          el.classList.add('scrolling');
        }
      }));

    } else if (mode === 'vertical') {
      // Вертикальная прокрутка: запускаем с задержкой для первого прочтения
      setTimeout(() => el.classList.add('scrolling'), 800);

    }
    // expand: ничего дополнительного не нужно — пузырь сам растягивается
    // none:   ничего — текст просто обрезается CSS
  }

  return el;
}

/* ---- Удаление сообщения ---- */
function removeMessage(el) {
  if (!el || !el.parentNode) return;
  el.style.transition = 'opacity 0.4s';
  el.style.opacity = '0';
  setTimeout(() => {
    if (el.parentNode) el.parentNode.removeChild(el);
  }, 420);
}

/* ---- StreamElements события ---- */
window.addEventListener('onWidgetLoad', e => {
  const { fieldData } = e.detail;
  init(fieldData || {});
});

window.addEventListener('onEventReceived', e => {
  const { listener, event } = e.detail;

  if (listener === 'message') {
    /* ---- Новое сообщение чата ---- */
    const d = event.data;
    if (!d) return;

    // Фильтр команд — только если включён в настройках
    if (cfg.hide_commands && (d.text || '').startsWith('!')) return;

    addMessage(d);

  } else if (listener === 'delete-message') {
    /* ---- Удаление одного сообщения ---- */
    const msgId = event.msgId || (event.data && event.data.msgId);
    if (!msgId) return;
    const el = chatList.querySelector(`[data-msg-id="${CSS.escape(msgId)}"]`);
    if (el) removeMessage(el);

  } else if (listener === 'delete-messages') {
    /* ---- Тайм-аут / бан — удалить все сообщения пользователя ---- */
    const userId = event.userId || (event.data && event.data.userId);
    if (!userId) return;
    const els = chatList.querySelectorAll(`[data-user-id="${CSS.escape(userId)}"]`);
    els.forEach(removeMessage);

  } else if (listener === 'event:test') {
    /* ---- Тестовые события из SE ---- */
    if (event && event.listener === 'message') {
      const td = event.event && event.event.data;
      if (!td) return;
      if (cfg.hide_commands && (td.text || '').startsWith('!')) return;
      addMessage(td);
    }
  }
});

/* ---- Отладка в браузере (без SE) ---- */
if (typeof window.StreamElements === 'undefined') {
  setTimeout(() => {
    const testMessages = [
      {
        displayName: 'StreamerFan', displayColor: '#ff6b6b',
        text: 'Привет! Это тест виджета чата 👋',
        emotes: [], badges: [],
      },
      {
        displayName: 'KappaUser', displayColor: '#ff9f43',
        text: 'Kappa это было круто BibleThump',
        badges: [],
        emotes: [
          { type: 'twitch', name: 'Kappa',      id: '25', start: 0,  end: 4,
            urls: { '1': 'https://static-cdn.jtvnw.net/emoticons/v2/25/default/dark/1.0' } },
          { type: 'twitch', name: 'BibleThump', id: '86', start: 22, end: 31,
            urls: { '1': 'https://static-cdn.jtvnw.net/emoticons/v2/86/default/dark/1.0' } },
        ],
      },
      {
        displayName: 'Viewer42', displayColor: '#4ecdc4',
        text: 'Очень длинное сообщение для проверки автоматической прокрутки текста — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus.',
        emotes: [], badges: [],
      },
      {
        displayName: 'ModeratorX', displayColor: '#ffe66d',
        text: 'PogChamp PogChamp стрим огонь!',
        badges: [{ url: 'https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d6/1', description: 'Moderator' }],
        emotes: [
          { type: 'twitch', name: 'PogChamp', id: '305954156', start: 0,  end: 7,
            urls: { '1': 'https://static-cdn.jtvnw.net/emoticons/v2/305954156/default/dark/1.0' } },
          { type: 'twitch', name: 'PogChamp', id: '305954156', start: 9,  end: 16,
            urls: { '1': 'https://static-cdn.jtvnw.net/emoticons/v2/305954156/default/dark/1.0' } },
        ],
      },
      {
        displayName: 'BTTVuser', displayColor: '#a8e6cf',
        text: 'monkaS когда дедлайн завтра OMEGALUL',
        emotes: [
          { type: 'bttv', name: 'monkaS',   id: '56e9f494fff3cc5c35e5287e', start: 0,  end: 5,
            urls: { '1': 'https://cdn.betterttv.net/emote/56e9f494fff3cc5c35e5287e/1x' } },
          { type: 'bttv', name: 'OMEGALUL', id: '583089f4737a8e61abb0186b',  start: 28, end: 35,
            urls: { '1': 'https://cdn.betterttv.net/emote/583089f4737a8e61abb0186b/1x' } },
        ],
        badges: [],
      },
      {
        displayName: '!CommandUser', displayColor: '#c0c0c0',
        text: '!команда (это сообщение скрыто если включён hide_commands)',
        emotes: [], badges: [],
      },
    ];
    let i = 0;
    const send = () => {
      if (i < testMessages.length) {
        addMessage(testMessages[i++]);
        setTimeout(send, 1400);
      }
    };
    send();
  }, 500);
}
