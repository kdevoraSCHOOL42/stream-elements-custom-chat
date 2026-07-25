{
  "top_image_url": {
    "type": "text",
    "label": "URL de la imagen (superior)",
    "value": "",
    "group": "Banners"
  },
  "bottom_image_url": {
    "type": "text",
    "label": "URL de la imagen (inferior)",
    "value": "",
    "group": "Banners"
  },
  "banner_height": {
    "type": "number",
    "label": "Altura de los banners (px)",
    "value": 80,
    "min": 20,
    "max": 300,
    "group": "Banners"
  },
  "banner_radius": {
    "type": "number",
    "label": "Radio de esquina de los banners (px)",
    "value": 6,
    "min": 0,
    "max": 40,
    "group": "Banners"
  },
  "font_family": {
    "type": "googleFont",
    "label": "Fuente (Google Fonts)",
    "value": "Roboto",
    "group": "Texto"
  },
  "font_url": {
    "type": "text",
    "label": "Fuente desde URL (anula Google Fonts)",
    "value": "",
    "group": "Texto"
  },
  "font_size": {
    "type": "number",
    "label": "Tamaño de fuente (px)",
    "value": 15,
    "min": 10,
    "max": 36,
    "group": "Texto"
  },
  "text_color": {
    "type": "colorpicker",
    "label": "Color del texto de los mensajes",
    "value": "#ffffff",
    "group": "Texto"
  },
  "name_color": {
    "type": "colorpicker",
    "label": "Color del nombre de usuario (vacío = color de Twitch)",
    "value": "",
    "group": "Texto"
  },
  "msg_animation": {
    "type": "dropdown",
    "label": "Animación de aparición de mensajes",
    "value": "slide-up",
    "options": [
      { "label": "↑ Deslizar hacia arriba (por defecto)", "value": "slide-up"    },
      { "label": "◎ Aparición suave",                     "value": "fade"        },
      { "label": "← Desde la derecha",                    "value": "slide-right" },
      { "label": "→ Desde la izquierda",                  "value": "slide-left"  },
      { "label": "⊕ Escalado",                            "value": "pop"         },
      { "label": "✕ Sin animación",                       "value": "none"        }
    ],
    "group": "Mensajes"
  },
  "msg_animation_speed": {
    "type": "number",
    "label": "Velocidad de la animación de aparición (seg)",
    "value": 0.25,
    "min": 0.05,
    "max": 3,
    "group": "Mensajes"
  },
  "chat_bg_image": {
    "type": "text",
    "label": "URL de la imagen de fondo del chat",
    "value": "",
    "group": "Fondo del chat"
  },
  "chat_bg_size": {
    "type": "dropdown",
    "label": "Modo de visualización",
    "value": "cover",
    "options": [
      { "label": "Cubrir (cover)",             "value": "cover"   },
      { "label": "Ajustar completo (contain)", "value": "contain" },
      { "label": "Estirar (stretch)",          "value": "stretch" }
    ],
    "group": "Fondo del chat"
  },
  "chat_bg_opacity": {
    "type": "number",
    "label": "Opacidad (0-100)",
    "value": 100,
    "min": 0,
    "max": 100,
    "group": "Fondo del chat"
  },
  "chat_bg_blur": {
    "type": "number",
    "label": "Desenfoque (px)",
    "value": 0,
    "min": 0,
    "max": 40,
    "group": "Fondo del chat"
  },
  "message_bg": {
    "type": "text",
    "label": "Color de fondo del mensaje (CSS / rgba)",
    "value": "rgba(0,0,0,0.55)",
    "group": "Mensajes"
  },
  "message_bg_image": {
    "type": "text",
    "label": "URL de la imagen de fondo del mensaje",
    "value": "",
    "group": "Mensajes"
  },
  "author_position": {
    "type": "dropdown",
    "label": "Nombre: posición sobre la imagen",
    "value": "top-left",
    "options": [
      { "label": "↖ Arriba izquierda",  "value": "top-left"      },
      { "label": "↑ Arriba centro",     "value": "top-center"    },
      { "label": "↗ Arriba derecha",    "value": "top-right"     },
      { "label": "← Centro izquierda",  "value": "middle-left"   },
      { "label": "✛ Centro",           "value": "middle-center" },
      { "label": "→ Centro derecha",    "value": "middle-right"  },
      { "label": "↙ Abajo izquierda",   "value": "bottom-left"   },
      { "label": "↓ Abajo centro",      "value": "bottom-center" },
      { "label": "↘ Abajo derecha",     "value": "bottom-right"  }
    ],
    "group": "Texto sobre la imagen"
  },
  "author_offset_x": {
    "type": "number",
    "label": "Nombre: desplazamiento exacto en X (px)",
    "value": 8,
    "min": -500,
    "max": 500,
    "group": "Texto sobre la imagen"
  },
  "author_offset_y": {
    "type": "number",
    "label": "Nombre: desplazamiento exacto en Y (px)",
    "value": 8,
    "min": -500,
    "max": 500,
    "group": "Texto sobre la imagen"
  },
  "author_bg": {
    "type": "text",
    "label": "Nombre: fondo de la placa (transparent o rgba(...))",
    "value": "transparent",
    "group": "Texto sobre la imagen"
  },
  "text_position": {
    "type": "dropdown",
    "label": "Mensaje: posición sobre la imagen",
    "value": "bottom-left",
    "options": [
      { "label": "↖ Arriba izquierda",  "value": "top-left"      },
      { "label": "↑ Arriba centro",     "value": "top-center"    },
      { "label": "↗ Arriba derecha",    "value": "top-right"     },
      { "label": "← Centro izquierda",  "value": "middle-left"   },
      { "label": "✛ Centro",           "value": "middle-center" },
      { "label": "→ Centro derecha",    "value": "middle-right"  },
      { "label": "↙ Abajo izquierda",   "value": "bottom-left"   },
      { "label": "↓ Abajo centro",      "value": "bottom-center" },
      { "label": "↘ Abajo derecha",     "value": "bottom-right"  }
    ],
    "group": "Texto sobre la imagen"
  },
  "text_offset_x": {
    "type": "number",
    "label": "Mensaje: desplazamiento exacto en X (px)",
    "value": 8,
    "min": -500,
    "max": 500,
    "group": "Texto sobre la imagen"
  },
  "text_offset_y": {
    "type": "number",
    "label": "Mensaje: desplazamiento exacto en Y (px)",
    "value": -8,
    "min": -500,
    "max": 500,
    "group": "Texto sobre la imagen"
  },
  "text_bg": {
    "type": "text",
    "label": "Mensaje: fondo de la placa (transparent o rgba(...))",
    "value": "transparent",
    "group": "Texto sobre la imagen"
  },
  "message_radius": {
    "type": "number",
    "label": "Radio de esquina de los mensajes (px)",
    "value": 8,
    "min": 0,
    "max": 30,
    "group": "Mensajes"
  },
  "message_gap": {
    "type": "number",
    "label": "Espacio entre mensajes (px)",
    "value": 6,
    "min": 0,
    "max": 40,
    "group": "Mensajes"
  },
  "max_messages": {
    "type": "number",
    "label": "Máximo de mensajes en pantalla",
    "value": 50,
    "min": 3,
    "max": 200,
    "group": "Mensajes"
  },
  "fade_out_delay": {
    "type": "number",
    "label": "Eliminar mensaje tras (seg, 0 = nunca)",
    "value": 0,
    "min": 0,
    "max": 120,
    "group": "Mensajes"
  },
  "long_msg_threshold": {
    "type": "number",
    "label": "Mensaje largo (caracteres)",
    "value": 200,
    "min": 50,
    "max": 1000,
    "group": "Desplazamiento"
  },
  "long_msg_scroll": {
    "type": "dropdown",
    "label": "Modo de visualización de mensajes largos",
    "value": "ticker",
    "options": [
      { "label": "⟺ Ticker horizontal",         "value": "ticker"   },
      { "label": "↕ Desplazamiento vertical",   "value": "vertical" },
      { "label": "↕ Expandir completo",         "value": "expand"   },
      { "label": "— Recortar (una línea)",      "value": "none"     }
    ],
    "group": "Desplazamiento"
  },
  "long_msg_max_height": {
    "type": "number",
    "label": "Altura de la ventana (px) — para «Desplazamiento vertical» y altura inicial (contraída) para «Expandir completo»",
    "value": 80,
    "min": 30,
    "max": 300,
    "group": "Desplazamiento"
  },
  "scroll_speed": {
    "type": "number",
    "label": "Velocidad de desplazamiento (seg)",
    "value": 8,
    "min": 2,
    "max": 30,
    "group": "Desplazamiento"
  },
  "show_avatars": {
    "type": "checkbox",
    "label": "Mostrar avatares",
    "value": false,
    "group": "Adicional"
  },
  "avatar_size": {
    "type": "number",
    "label": "Tamaño del avatar (px)",
    "value": 28,
    "min": 16,
    "max": 64,
    "group": "Adicional"
  },
  "show_badges": {
    "type": "checkbox",
    "label": "Mostrar insignias (badges)",
    "value": true,
    "group": "Adicional"
  },
  "hide_commands": {
    "type": "checkbox",
    "label": "Ocultar comandos (empiezan con !)",
    "value": false,
    "group": "Adicional"
  },
  "emote_size": {
    "type": "number",
    "label": "Altura de los emotes (px)",
    "value": 28,
    "min": 16,
    "max": 64,
    "group": "Adicional"
  }
}
