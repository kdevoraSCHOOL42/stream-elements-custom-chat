{
  "top_image_url": {
    "type": "text",
    "label": "Ссылка на изображение (верх)",
    "value": "",
    "group": "Баннеры"
  },
  "bottom_image_url": {
    "type": "text",
    "label": "Ссылка на изображение (низ)",
    "value": "",
    "group": "Баннеры"
  },
  "banner_height": {
    "type": "number",
    "label": "Высота баннеров (px)",
    "value": 80,
    "min": 20,
    "max": 300,
    "group": "Баннеры"
  },
  "banner_radius": {
    "type": "number",
    "label": "Скругление баннеров (px)",
    "value": 6,
    "min": 0,
    "max": 40,
    "group": "Баннеры"
  },
  "font_family": {
    "type": "googleFont",
    "label": "Шрифт (Google Fonts)",
    "value": "Roboto",
    "group": "Текст"
  },
  "font_url": {
    "type": "text",
    "label": "Шрифт из URL (перекрывает Google Fonts)",
    "value": "",
    "group": "Текст"
  },
  "font_size": {
    "type": "number",
    "label": "Размер шрифта (px)",
    "value": 15,
    "min": 10,
    "max": 36,
    "group": "Текст"
  },
  "text_color": {
    "type": "colorpicker",
    "label": "Цвет текста сообщений",
    "value": "#ffffff",
    "group": "Текст"
  },
  "name_color": {
    "type": "colorpicker",
    "label": "Цвет никнеймов (пусто = цвет Twitch)",
    "value": "",
    "group": "Текст"
  },
  "msg_animation": {
    "type": "dropdown",
    "label": "Анимация появления сообщений",
    "value": "slide-up",
    "options": [
      { "label": "↑ Снизу вверх (по умолчанию)", "value": "slide-up"    },
      { "label": "◎ Плавное появление",           "value": "fade"        },
      { "label": "← Справа",                      "value": "slide-right" },
      { "label": "→ Слева",                        "value": "slide-left"  },
      { "label": "⊕ Масштабирование",             "value": "pop"         },
      { "label": "✕ Без анимации",                "value": "none"        }
    ],
    "group": "Сообщения"
  },
  "msg_animation_speed": {
    "type": "number",
    "label": "Скорость анимации появления (сек)",
    "value": 0.25,
    "min": 0.05,
    "max": 3,
    "group": "Сообщения"
  },
  "message_bg": {
    "type": "text",
    "label": "Цвет фона сообщения (CSS / rgba)",
    "value": "rgba(0,0,0,0.55)",
    "group": "Сообщения"
  },
  "message_bg_image": {
    "type": "text",
    "label": "Ссылка на картинку фона сообщения",
    "value": "",
    "group": "Сообщения"
  },
  "author_position": {
    "type": "dropdown",
    "label": "Ник: положение на изображении",
    "value": "top-left",
    "options": [
      { "label": "↖ Сверху слева",    "value": "top-left"      },
      { "label": "↑ Сверху по центру","value": "top-center"    },
      { "label": "↗ Сверху справа",   "value": "top-right"     },
      { "label": "← По центру слева", "value": "middle-left"   },
      { "label": "✛ По центру",       "value": "middle-center" },
      { "label": "→ По центру справа","value": "middle-right"  },
      { "label": "↙ Снизу слева",     "value": "bottom-left"   },
      { "label": "↓ Снизу по центру", "value": "bottom-center" },
      { "label": "↘ Снизу справа",    "value": "bottom-right"  }
    ],
    "group": "Текст на изображении"
  },
  "author_offset_x": {
    "type": "number",
    "label": "Ник: точное смещение по X (px)",
    "value": 8,
    "min": -500,
    "max": 500,
    "group": "Текст на изображении"
  },
  "author_offset_y": {
    "type": "number",
    "label": "Ник: точное смещение по Y (px)",
    "value": 8,
    "min": -500,
    "max": 500,
    "group": "Текст на изображении"
  },
  "author_bg": {
    "type": "text",
    "label": "Ник: фон подложки (transparent или rgba(...))",
    "value": "transparent",
    "group": "Текст на изображении"
  },
  "text_position": {
    "type": "dropdown",
    "label": "Сообщение: положение на изображении",
    "value": "bottom-left",
    "options": [
      { "label": "↖ Сверху слева",    "value": "top-left"      },
      { "label": "↑ Сверху по центру","value": "top-center"    },
      { "label": "↗ Сверху справа",   "value": "top-right"     },
      { "label": "← По центру слева", "value": "middle-left"   },
      { "label": "✛ По центру",       "value": "middle-center" },
      { "label": "→ По центру справа","value": "middle-right"  },
      { "label": "↙ Снизу слева",     "value": "bottom-left"   },
      { "label": "↓ Снизу по центру", "value": "bottom-center" },
      { "label": "↘ Снизу справа",    "value": "bottom-right"  }
    ],
    "group": "Текст на изображении"
  },
  "text_offset_x": {
    "type": "number",
    "label": "Сообщение: точное смещение по X (px)",
    "value": 8,
    "min": -500,
    "max": 500,
    "group": "Текст на изображении"
  },
  "text_offset_y": {
    "type": "number",
    "label": "Сообщение: точное смещение по Y (px)",
    "value": -8,
    "min": -500,
    "max": 500,
    "group": "Текст на изображении"
  },
  "text_bg": {
    "type": "text",
    "label": "Сообщение: фон подложки (transparent или rgba(...))",
    "value": "transparent",
    "group": "Текст на изображении"
  },
  "message_radius": {
    "type": "number",
    "label": "Скругление сообщений (px)",
    "value": 8,
    "min": 0,
    "max": 30,
    "group": "Сообщения"
  },
  "message_gap": {
    "type": "number",
    "label": "Отступ между сообщениями (px)",
    "value": 6,
    "min": 0,
    "max": 40,
    "group": "Сообщения"
  },
  "max_messages": {
    "type": "number",
    "label": "Максимум сообщений на экране",
    "value": 50,
    "min": 3,
    "max": 200,
    "group": "Сообщения"
  },
  "fade_out_delay": {
    "type": "number",
    "label": "Удалять сообщение через (сек, 0 = не удалять)",
    "value": 0,
    "min": 0,
    "max": 120,
    "group": "Сообщения"
  },
  "long_msg_threshold": {
    "type": "number",
    "label": "Длинное сообщение (символов)",
    "value": 200,
    "min": 50,
    "max": 1000,
    "group": "Прокрутка"
  },
  "long_msg_scroll": {
    "type": "dropdown",
    "label": "Способ отображения длинных сообщений",
    "value": "ticker",
    "options": [
      { "label": "⟺ Горизонтальный тикер",     "value": "ticker"   },
      { "label": "↕ Вертикальная прокрутка",    "value": "vertical" },
      { "label": "↕ Развернуть полностью",       "value": "expand"   },
      { "label": "— Обрезать (одна строка)",    "value": "none"     }
    ],
    "group": "Прокрутка"
  },
  "long_msg_max_height": {
    "type": "number",
    "label": "Высота окна (px) — только для «Вертикальная прокрутка»",
    "value": 80,
    "min": 30,
    "max": 300,
    "group": "Прокрутка"
  },
  "scroll_speed": {
    "type": "number",
    "label": "Скорость прокрутки (сек)",
    "value": 8,
    "min": 2,
    "max": 30,
    "group": "Прокрутка"
  },
  "show_avatars": {
    "type": "checkbox",
    "label": "Показывать аватары",
    "value": false,
    "group": "Дополнительно"
  },
  "avatar_size": {
    "type": "number",
    "label": "Размер аватара (px)",
    "value": 28,
    "min": 16,
    "max": 64,
    "group": "Дополнительно"
  },
  "show_badges": {
    "type": "checkbox",
    "label": "Показывать значки (badges)",
    "value": true,
    "group": "Дополнительно"
  }
}
