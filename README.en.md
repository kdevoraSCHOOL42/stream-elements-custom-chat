# Stream Elements Custom Chat

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![StreamElements](https://img.shields.io/badge/StreamElements-Custom%20Widget-6441A5?logo=twitch&logoColor=white)
![Made with](https://img.shields.io/badge/JS-79.7%25-yellow) ![CSS](https://img.shields.io/badge/CSS-19.1%25-blue) ![HTML](https://img.shields.io/badge/HTML-1.2%25-orange)

Custom StreamElements (Twitch and YouTube) chat widget with flexible styling options: banners, fonts, message animations, emote support (Twitch / BTTV / FFZ), scrolling modes for long messages, and text positioning over an image.

---

## Table of Contents

- [File structure](#file-structure)
- [Features](#features)
- [Installing in StreamElements](#installing-in-streamelements)
- [Field configuration](#-field-configuration)
- [Requirements](#-requirements)
- [Known limitations](#️-known-limitations)
- [Contributing](#-contributing)
- [Changelog](#️-changelog)
- [License](#license)

---

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
- **Badges** — moderator, subscriber, etc. on Twitch; synthetic emoji badges (owner/moderator/channel member/verified) on YouTube, since the platform doesn't provide ready-made icons.
- **YouTube chat** — the widget also works with YouTube streams connected through StreamElements (same `onEventReceived`/`message` event), including avatars and a stable per-author name color (YouTube sends no name color, so one is assigned deterministically from the author's ID).
- **Long messages** — four modes: horizontal ticker, vertical scroll, full expand, or truncate.
- **"Text over image" mode** — when `message_bg_image` is set, the author name and message text are positioned independently (9 anchor points plus precise pixel offsets).
- **Chat background** — a photo backdrop behind the entire message list (separate "Chat background" field group): image URL, cover/contain/stretch sizing, opacity (0-100), blur (px). Not to be confused with `message_bg_image`, which sits behind each individual message rather than the whole chat list.
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

- A StreamElements account linked to a Twitch and/or YouTube channel.
- Overlay edit permissions (channel Editor/Owner).
- A modern browser for the editor preview (Chrome/Edge/Firefox); in OBS/browser source the widget runs on the Chromium Embedded Framework bundled with most streaming software.

### ⚠️ Known limitations

- Built for StreamElements; not tested on other overlay platforms (Streamlabs, etc.).
- Custom fonts loaded by URL require the source to allow CORS.
- Sample data in `streamdata.js` is for editor preview only and has no effect in production.
- On YouTube, emotes arrive from StreamElements as a text shortcode (e.g. `:face-blue-smiling:`) rather than an image — the platform doesn't give the widget an image URL for them, so they render as plain text.

### 🤝 Contributing

Issues and pull requests are welcome. Before submitting a PR, please make sure:

- changes are verified in the StreamElements editor preview tab;
- Twitch/BTTV/FFZ emote support and user-text escaping remain intact;
- code style matches the existing codebase (no external build tools/dependencies — plain HTML/CSS/JS).

### 🙌 Credits

Built in collaboration with [twitch.tv/hlaaluhelseth](https://www.twitch.tv/hlaaluhelseth).

### 🗒️ Changelog

- **[2026-07-15]** Added YouTube chat support: stable per-author name color derived from the author's ID (YouTube sends no name color), and synthetic emoji role badges (owner/moderator/channel member/verified) in place of Twitch's icon badges. Also fixed flaky message entrance animations under rapid message bursts, and added a working `expand` mode for long messages.
- **[2026-07-15]** Added a full chat-wide background layer (new "Chat background" field group): image URL, cover/contain/stretch sizing, opacity, and blur. Rendered as a separate layer behind the message list; does not affect the existing per-message background (`message_bg_image`).

---

## License

MIT
