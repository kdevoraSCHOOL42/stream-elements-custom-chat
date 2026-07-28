# Stream Elements Custom Chat

[Русский](README.md) | [English](README.en.md) | **Español**

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![StreamElements](https://img.shields.io/badge/StreamElements-Custom%20Widget-6441A5?logo=twitch&logoColor=white)
![Made with](https://img.shields.io/badge/JS-80%25-yellow) ![CSS](https://img.shields.io/badge/CSS-18.9%25-blue) ![HTML](https://img.shields.io/badge/HTML-1.1%25-orange)

Widget de chat personalizado para StreamElements (Twitch y YouTube) con opciones de estilo flexibles: banners, fuentes, animaciones de mensajes, soporte de emotes (Twitch / BTTV / FFZ), modos de desplazamiento para mensajes largos y posicionamiento de texto sobre una imagen.

---

## Índice

- [Estructura de archivos](#estructura-de-archivos)
- [Características](#características)
- [Instalación en StreamElements](#instalación-en-streamelements)
- [Configuración de campos](#-configuración-de-campos)
- [Requisitos](#-requisitos)
- [Limitaciones conocidas](#️-limitaciones-conocidas)
- [Contribuir](#-contribuir)
- [Registro de cambios](#️-registro-de-cambios)
- [Licencia](#license)

---

### Estructura de archivos

| Archivo | Función |
|---|---|
| `stream.html` | Estructura del widget — contenedor del chat y banners |
| `stream.css` | Estilos: animaciones, posicionamiento, modos de desplazamiento |
| `javascript.js` | Lógica del widget: manejo de eventos de SE, emotes, insignias, renderizado de mensajes |
| `fields.js` | Definición de campos para el editor de StreamElements — ruso (por defecto) |
| `fields.en.js` | Los mismos campos, etiquetas en inglés |
| `fields.es.js` | Los mismos campos, etiquetas en español |
| `streamdata.js` | Datos de ejemplo (JSON) para previsualizar el widget en el editor |
| `LICENSE` | Licencia MIT |

### Características

- **Banners** — imágenes superior/inferior con altura y bordes redondeados ajustables.
- **Fuentes** — elige entre Google Fonts o carga tu propia fuente por URL (hoja de estilos CSS o archivo de fuente).
- **Animaciones de entrada de mensajes** — deslizar hacia arriba, aparición gradual, deslizar izquierda/derecha, aparición con escala, o sin animación.
- **Emotes** — soporte para Twitch, BTTV y FFZ mediante un formato unificado `urls`.
- **Insignias** — moderador, suscriptor, etc. en Twitch; en YouTube, insignias de emoji sintéticas (propietario/moderador/miembro del canal/verificado), ya que la plataforma no proporciona iconos propios.
- **Chat de YouTube** — el widget también funciona con transmisiones de YouTube conectadas mediante StreamElements (el mismo evento `onEventReceived`/`message`), incluyendo avatares y un color de nombre estable por autor (YouTube no envía color de nombre, así que se asigna de forma determinista según el ID del autor).
- **Avatares de Twitch** — las imágenes de perfil actuales se obtienen por el nombre de usuario de cada participante y se almacenan en caché durante la sesión del widget; si StreamElements ya proporciona una URL de avatar, esa URL tiene prioridad.
- **Filtrado del chat** — se pueden ocultar los comandos que empiezan por `!` y todos los mensajes de los bots seleccionados. Los nombres de los bots se introducen separados por comas en el campo «Ocultar mensajes de bots».
- **Mensajes largos** — cuatro modos: ticker horizontal, desplazamiento vertical, expansión completa o truncado.
- **Modo "texto sobre imagen"** — si se define `message_bg_image`, el nombre de usuario y el texto del mensaje se posicionan de forma independiente (9 puntos de anclaje más desplazamiento en píxeles).
- **Fondo del chat** — una imagen de fondo detrás de toda la lista de mensajes (grupo de campos separado "Fondo del chat"): URL de la imagen, ajuste cover/contain/stretch, opacidad (0-100), desenfoque (px). No confundir con `message_bg_image`, que se coloca detrás de cada mensaje individual y no detrás de toda la lista del chat.
- **Moderación** — gestiona los eventos `delete-message` y `delete-messages` (los timeouts/baneos eliminan los mensajes del usuario).
- **Seguridad** — todo el texto proporcionado por los usuarios se escapa antes de insertarse en el DOM (protección contra XSS).

### Instalación en StreamElements

1. En el editor de overlay, añade un **Custom Widget**.
2. Pestaña **HTML** → pega el contenido de `stream.html`.
3. Pestaña **CSS** → pega el contenido de `stream.css`.
4. Pestaña **JS** → pega el contenido de `javascript.js`.
5. Pestaña **Fields** → pega el contenido de `fields.js` (o de `fields.en.js` / `fields.es.js` si prefieres el panel de ajustes en inglés/español — StreamElements no puede detectar el idioma del navegador en esta pestaña, así que hay que elegir el archivo manualmente).
6. Pestaña **Data** (JSON de vista previa) → opcionalmente pega `streamdata.js` para previsualizar mensajes de prueba en el editor.
7. Guarda y configura los parámetros en el panel del widget.

### 🔧 Configuración de campos

Todas las opciones del widget (banners, fuentes, animaciones, modos de desplazamiento, posicionamiento de texto y filtrado del chat) están definidas en `fields.js` y se muestran como un panel fácil de usar directamente dentro del editor de StreamElements — no se necesita modificar código para la configuración básica. Activa «Ocultar comandos» para eliminar mensajes que empiezan por `!`; introduce los nombres de usuario separados por comas en «Ocultar mensajes de bots» (valor predeterminado: `Nightbot, StreamElements`). Para cambiar el comportamiento (por ejemplo, añadir un nuevo modo de animación o fuente de emotes), las modificaciones se hacen en `javascript.js`.

**Idioma del panel de ajustes.** La pestaña Fields del editor de StreamElements solo lee un JSON estático — no ejecuta código, así que no puede detectar automáticamente el idioma del navegador del streamer. En vez de un único archivo en ruso, el repositorio incluye tres archivos con la misma estructura — `fields.js` (ru), `fields.en.js` (en), `fields.es.js` (es). Pega el que coincida con tu idioma en la pestaña Fields.

### 📋 Requisitos

- Una cuenta de StreamElements vinculada a un canal de Twitch y/o YouTube.
- Permisos de edición del overlay (Editor/Propietario del canal).
- Un navegador moderno para la vista previa en el editor (Chrome/Edge/Firefox); en OBS/browser source el widget funciona sobre el Chromium Embedded Framework incluido en la mayoría de los programas de streaming.

### ⚠️ Limitaciones conocidas

- Diseñado para StreamElements; no probado en otras plataformas de overlay (Streamlabs, etc.).
- Las fuentes personalizadas cargadas por URL requieren que el origen permita CORS.
- Los datos de ejemplo en `streamdata.js` son solo para la vista previa del editor y no afectan a producción.
- En YouTube, los emotes llegan desde StreamElements como un código de texto (por ejemplo, `:face-blue-smiling:`) en lugar de una imagen — la plataforma no proporciona al widget una URL de imagen para ellos, por lo que se muestran como texto plano.

### 🤝 Contribuir

Los issues y pull requests son bienvenidos. Antes de enviar un PR, asegúrate de que:

- los cambios se han verificado en la pestaña de vista previa del editor de StreamElements;
- se mantiene el soporte de emotes de Twitch/BTTV/FFZ y el escapado del texto de usuario;
- el estilo de código coincide con el existente (sin dependencias externas ni herramientas de compilación — HTML/CSS/JS puro).

### 🙌 Créditos

Widget creado en colaboración con [twitch.tv/hlaaluhelseth](https://www.twitch.tv/hlaaluhelseth).

### 🗒️ Registro de cambios

- **[2026-07-28]** El filtrado de comandos ahora se ejecuta en el único punto de inserción de mensajes. Con «Ocultar comandos» activado, se oculta cualquier mensaje cuyo texto empiece por `!` después de posibles espacios iniciales, incluidos los mensajes de vista previa integrados y el usuario de prueba `!CommandUser`.
- **[2026-07-28]** Los avatares de usuario ahora se muestran en ambos diseños: el cuadro de mensaje estándar y la superposición personalizada `message_bg_image`. En el modo de imagen, el avatar aparece junto al nombre de usuario y sigue controlado por la opción «Mostrar avatares».
- **[2026-07-28]** Se corrigieron los avatares de Twitch: se eliminó el endpoint no válido `avatars.twitch.tv`, se añadió la resolución por nombre de usuario de la URL actual de la imagen CDN con caché y se mantuvo la prioridad de las URL de avatar proporcionadas por StreamElements. La corrección funciona para todos los participantes sin una lista previa de usuarios.
- **[2026-07-28]** Se mejoró el filtrado de mensajes: los comandos que empiezan por `!` se detectan incluso después de espacios iniciales; se añadió el campo `hidden_bots` para ocultar todos los mensajes de los bots seleccionados sin distinguir mayúsculas de minúsculas. El filtro se aplica tanto a eventos normales como de prueba de StreamElements. Los valores predeterminados son `Nightbot` y `StreamElements`.
- **[2026-07-15]** Se añadió soporte para el chat de YouTube: color de nombre estable por autor derivado del ID del autor (YouTube no envía color de nombre), e insignias de emoji sintéticas por rol (propietario/moderador/miembro del canal/verificado) en lugar de los iconos de Twitch. También se corrigió la inestabilidad de las animaciones de entrada de mensajes bajo ráfagas rápidas, y se añadió un modo `expand` funcional para mensajes largos.
- **[2026-07-15]** Se añadió una capa de fondo para todo el chat (nuevo grupo de campos "Fondo del chat"): URL de imagen, ajuste cover/contain/stretch, opacidad y desenfoque. Se renderiza como una capa independiente detrás de la lista de mensajes; no afecta al fondo existente por mensaje (`message_bg_image`).

---

## License

MIT
