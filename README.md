# Stream Elements Custom Chat

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![StreamElements](https://img.shields.io/badge/StreamElements-Custom%20Widget-6441A5?logo=twitch&logoColor=white)
![Made with](https://img.shields.io/badge/JS-79.7%25-yellow) ![CSS](https://img.shields.io/badge/CSS-19.1%25-blue) ![HTML](https://img.shields.io/badge/HTML-1.2%25-orange)

Кастомный виджет чата для StreamElements (Twitch) с гибкими настройками оформления: баннеры, шрифты, анимации сообщений, поддержка эмотов (Twitch / BTTV / FFZ), режимы прокрутки длинных сообщений и позиционирование текста поверх изображения.

Custom StreamElements (Twitch) chat widget with flexible styling options: banners, fonts, message animations, emote support (Twitch / BTTV / FFZ), scrolling modes for long messages, and text positioning over an image.

---

## Содержание / Table of Contents

- [Структура файлов / File structure](#-русский)
- [Возможности / Features](#возможности)
- [Установка / Installation](#установка-в-streamelements)
- [Настройка полей / Field configuration](#-настройка-полей--field-configuration)
- [Требования / Requirements](#-требования--requirements)
- [Известные ограничения / Known limitations](#-известные-ограничения--known-limitations)
- [Вклад в проект / Contributing](#-вклад-в-проект--contributing)
- [Лицензия / License](#license)

---

## 🇷🇺 Русский

### Структура файлов

| Файл | Назначение |
|---|---|
| `stream.html` | Разметка виджета — контейнер чата и баннеры |
| `stream.css` | Стили: анимации, позиционирование, режимы прокрутки |
| `javascript.js` | Логика виджета: обработка событий SE, эмоты, значки, рендер сообщений |
| `fields.js` / `fields/fields.js` | Описание полей настройки для редактора StreamElements (на русском) |
| `streamdata.js` | Тестовые данные (JSON) для превью виджета в редакторе |
| `LICENSE` | MIT-лицензия |

### Возможности

- **Баннеры** — изображения сверху/снизу с настраиваемой высотой и скруглением.
- **Шрифты** — выбор из Google Fonts или подключение своего шрифта по URL (CSS-таблица или файл шрифта).
- **Анимации появления сообщений** — снизу вверх, плавное появление, слева/справа, масштабирование, без анимации.
- **Эмоты** — поддержка Twitch, BTTV, FFZ через универсальный формат `urls`.
- **Значки (badges)** — модератор, подписчик и т.д.
- **Длинные сообщения** — три режима: горизонтальный тикер, вертикальная прокрутка, полное разворачивание или обрезка.
- **Режим «текст поверх картинки»** — если задан `message_bg_image`, никнейм и текст сообщения позиционируются независимо друг от друга (9 позиций + точный пиксельный сдвиг).
- **Модерация** — обработка событий `delete-message` и `delete-messages` (таймаут/бан удаляет сообщения пользователя).
- **Безопасность** — весь пользовательский текст экранируется перед вставкой в DOM (защита от XSS).

### Установка в StreamElements

1. В редакторе оверлея добавьте виджет **Custom Widget**.
2. Вкладка **HTML** → содержимое `stream.html`.
3. Вкладка **CSS** → содержимое `stream.css`.
4. Вкладка **JS** → содержимое `javascript.js`.
5. Вкладка **Fields** → содержимое `fields.js`.
6. Вкладка **Data** (JSON для превью) → содержимое `streamdata.js` (по желанию, для тестового отображения в редакторе).
7. Сохраните и настройте параметры в панели виджета.

### 🔧 Настройка полей / Field configuration

Все доступные параметры виджета (баннеры, шрифты, анимации, режимы прокрутки, позиционирование текста) описаны в `fields.js` и отображаются в виде удобной панели прямо в редакторе StreamElements — никаких правок кода не требуется для базовой настройки внешнего вида. Если нужно изменить логику поведения (например, добавить новый режим анимации или источник эмотов), правки вносятся в `javascript.js`.

### 📋 Требования / Requirements

- Аккаунт StreamElements, подключённый к каналу Twitch.
- Права на редактирование оверлея (Editor / Owner канала).
- Современный браузер для предпросмотра в редакторе (Chrome/Edge/Firefox); в OBS/browser source виджет использует Chromium Embedded Framework, входящий в состав большинства стриминговых программ.

### ⚠️ Известные ограничения / Known limitations

- Виджет рассчитан на StreamElements и не тестировался с другими оверлей-платформами (Streamlabs и т.д.).
- Для отображения кастомных шрифтов по URL источник должен разрешать CORS-загрузку.
- Тестовые данные в `streamdata.js` предназначены только для превью в редакторе и не влияют на прод-режим.

### 🤝 Вклад в проект / Contributing

Issues и Pull Request'ы приветствуются. Перед отправкой PR убедитесь, что:

- изменения проверены в редакторе StreamElements (вкладка Preview);
- сохранена поддержка эмотов Twitch/BTTV/FFZ и экранирование пользовательского текста;
- стиль кода соответствует существующему (без внешних зависимостей/сборщиков — чистый HTML/CSS/JS).

---

## 🇬🇧 English

### File structure

| File | Purpose |
|---|---|
| `stream.html` | Widget markup — chat container and banners |
| `stream.css` | Styles: animations, positioning, scroll modes |
| `javascript.js` | Widget logic: SE event handling, emotes, badges, message rendering |
| `fields.js` / `fields/fields.js` | Field definitions for the StreamElements editor (labels in Russian) |
| `streamdata.js` | Sample JSON data for previewing the widget in the editor |
| `LICENSE` | MIT license |

### Features

- **Banners** — top/bottom images with adjustable height and border radius.
- **Fonts** — pick from Google Fonts or load a custom font via URL (CSS stylesheet or font file).
- **Message entrance animations** — slide up, fade, slide left/right, pop, or none.
- **Emotes** — Twitch, BTTV, and FFZ support via a unified `urls` format.
- **Badges** — moderator, subscriber, etc.
- **Long messages** — four modes: horizontal ticker, vertical scroll, full expand, or truncate.
- **"Text over image" mode** — when `message_bg_image` is set, the author name and message text are positioned independently (9 anchor points plus precise pixel offsets).
- **Moderation** — handles `delete-message` and `delete-messages` events (timeouts/bans remove a user's messages).
- **Security** — all user-supplied text is HTML-escaped before being inserted into the DOM (XSS protection).

### Installing in StreamElements

1. In the overlay editor, add a **Custom Widget**.
2. **HTML** tab → paste the contents of `stream.html`.
3. **CSS** tab → paste the contents of `stream.css`.
4. **JS** tab → paste the contents of `javascript.js`.
5. **Fields** tab → paste the contents of `fields.js`.
6. **Data** tab (preview JSON) → optionally paste `streamdata.js` to preview test messages in the editor.
7. Save and configure the settings in the widget panel.

### 🔧 Field configuration

All widget options (banners, fonts, animations, scroll modes, text positioning) are defined in `fields.js` and rendered as an easy-to-use panel directly inside the StreamElements editor — no code changes are needed for basic styling. To change behavior (e.g. add a new animation mode or emote source), edit `javascript.js`.

### 📋 Requirements

- A StreamElements account linked to a Twitch channel.
- Overlay edit permissions (channel Editor/Owner).
- A modern browser for the editor preview (Chrome/Edge/Firefox); in OBS/browser source the widget runs on the Chromium Embedded Framework bundled with most streaming software.

### ⚠️ Known limitations

- Built for StreamElements; not tested on other overlay platforms (Streamlabs, etc.).
- Custom fonts loaded by URL require the source to allow CORS.
- Sample data in `streamdata.js` is for editor preview only and has no effect in production.

### 🤝 Contributing

Issues and pull requests are welcome. Before submitting a PR, please make sure:

- changes are verified in the StreamElements editor preview tab;
- Twitch/BTTV/FFZ emote support and user-text escaping remain intact;
- code style matches the existing codebase (no external build tools/dependencies — plain HTML/CSS/JS).

---

## License

MIT
