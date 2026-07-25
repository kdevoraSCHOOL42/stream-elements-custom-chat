{
  "top_image_url": {
    "type": "text",
    "label": "Image URL (top)",
    "value": "",
    "group": "Banners"
  },
  "bottom_image_url": {
    "type": "text",
    "label": "Image URL (bottom)",
    "value": "",
    "group": "Banners"
  },
  "banner_height": {
    "type": "number",
    "label": "Banner height (px)",
    "value": 80,
    "min": 20,
    "max": 300,
    "group": "Banners"
  },
  "banner_radius": {
    "type": "number",
    "label": "Banner corner radius (px)",
    "value": 6,
    "min": 0,
    "max": 40,
    "group": "Banners"
  },
  "font_family": {
    "type": "googleFont",
    "label": "Font (Google Fonts)",
    "value": "Roboto",
    "group": "Text"
  },
  "font_url": {
    "type": "text",
    "label": "Font from URL (overrides Google Fonts)",
    "value": "",
    "group": "Text"
  },
  "font_size": {
    "type": "number",
    "label": "Font size (px)",
    "value": 15,
    "min": 10,
    "max": 36,
    "group": "Text"
  },
  "text_color": {
    "type": "colorpicker",
    "label": "Message text color",
    "value": "#ffffff",
    "group": "Text"
  },
  "name_color": {
    "type": "colorpicker",
    "label": "Username color (empty = Twitch color)",
    "value": "",
    "group": "Text"
  },
  "msg_animation": {
    "type": "dropdown",
    "label": "Message appear animation",
    "value": "slide-up",
    "options": [
      { "label": "↑ Slide up (default)",   "value": "slide-up"    },
      { "label": "◎ Fade in",              "value": "fade"        },
      { "label": "← From right",           "value": "slide-right" },
      { "label": "→ From left",            "value": "slide-left"  },
      { "label": "⊕ Scale (pop)",          "value": "pop"         },
      { "label": "✕ No animation",         "value": "none"        }
    ],
    "group": "Messages"
  },
  "msg_animation_speed": {
    "type": "number",
    "label": "Appear animation speed (sec)",
    "value": 0.25,
    "min": 0.05,
    "max": 3,
    "group": "Messages"
  },
  "chat_bg_image": {
    "type": "text",
    "label": "Chat background image URL",
    "value": "",
    "group": "Chat Background"
  },
  "chat_bg_size": {
    "type": "dropdown",
    "label": "Display mode",
    "value": "cover",
    "options": [
      { "label": "Cover",           "value": "cover"   },
      { "label": "Contain (fit whole image)", "value": "contain" },
      { "label": "Stretch",         "value": "stretch" }
    ],
    "group": "Chat Background"
  },
  "chat_bg_opacity": {
    "type": "number",
    "label": "Opacity (0-100)",
    "value": 100,
    "min": 0,
    "max": 100,
    "group": "Chat Background"
  },
  "chat_bg_blur": {
    "type": "number",
    "label": "Blur (px)",
    "value": 0,
    "min": 0,
    "max": 40,
    "group": "Chat Background"
  },
  "message_bg": {
    "type": "text",
    "label": "Message background color (CSS / rgba)",
    "value": "rgba(0,0,0,0.55)",
    "group": "Messages"
  },
  "message_bg_image": {
    "type": "text",
    "label": "Message background image URL",
    "value": "",
    "group": "Messages"
  },
  "author_position": {
    "type": "dropdown",
    "label": "Username: position on image",
    "value": "top-left",
    "options": [
      { "label": "↖ Top left",      "value": "top-left"      },
      { "label": "↑ Top center",    "value": "top-center"    },
      { "label": "↗ Top right",     "value": "top-right"     },
      { "label": "← Middle left",   "value": "middle-left"   },
      { "label": "✛ Middle center", "value": "middle-center" },
      { "label": "→ Middle right",  "value": "middle-right"  },
      { "label": "↙ Bottom left",   "value": "bottom-left"   },
      { "label": "↓ Bottom center", "value": "bottom-center" },
      { "label": "↘ Bottom right",  "value": "bottom-right"  }
    ],
    "group": "Text on Image"
  },
  "author_offset_x": {
    "type": "number",
    "label": "Username: exact X offset (px)",
    "value": 8,
    "min": -500,
    "max": 500,
    "group": "Text on Image"
  },
  "author_offset_y": {
    "type": "number",
    "label": "Username: exact Y offset (px)",
    "value": 8,
    "min": -500,
    "max": 500,
    "group": "Text on Image"
  },
  "author_bg": {
    "type": "text",
    "label": "Username: backdrop background (transparent or rgba(...))",
    "value": "transparent",
    "group": "Text on Image"
  },
  "text_position": {
    "type": "dropdown",
    "label": "Message: position on image",
    "value": "bottom-left",
    "options": [
      { "label": "↖ Top left",      "value": "top-left"      },
      { "label": "↑ Top center",    "value": "top-center"    },
      { "label": "↗ Top right",     "value": "top-right"     },
      { "label": "← Middle left",   "value": "middle-left"   },
      { "label": "✛ Middle center", "value": "middle-center" },
      { "label": "→ Middle right",  "value": "middle-right"  },
      { "label": "↙ Bottom left",   "value": "bottom-left"   },
      { "label": "↓ Bottom center", "value": "bottom-center" },
      { "label": "↘ Bottom right",  "value": "bottom-right"  }
    ],
    "group": "Text on Image"
  },
  "text_offset_x": {
    "type": "number",
    "label": "Message: exact X offset (px)",
    "value": 8,
    "min": -500,
    "max": 500,
    "group": "Text on Image"
  },
  "text_offset_y": {
    "type": "number",
    "label": "Message: exact Y offset (px)",
    "value": -8,
    "min": -500,
    "max": 500,
    "group": "Text on Image"
  },
  "text_bg": {
    "type": "text",
    "label": "Message: backdrop background (transparent or rgba(...))",
    "value": "transparent",
    "group": "Text on Image"
  },
  "message_radius": {
    "type": "number",
    "label": "Message corner radius (px)",
    "value": 8,
    "min": 0,
    "max": 30,
    "group": "Messages"
  },
  "message_gap": {
    "type": "number",
    "label": "Gap between messages (px)",
    "value": 6,
    "min": 0,
    "max": 40,
    "group": "Messages"
  },
  "max_messages": {
    "type": "number",
    "label": "Max messages on screen",
    "value": 50,
    "min": 3,
    "max": 200,
    "group": "Messages"
  },
  "fade_out_delay": {
    "type": "number",
    "label": "Remove message after (sec, 0 = never)",
    "value": 0,
    "min": 0,
    "max": 120,
    "group": "Messages"
  },
  "long_msg_threshold": {
    "type": "number",
    "label": "Long message threshold (characters)",
    "value": 200,
    "min": 50,
    "max": 1000,
    "group": "Scrolling"
  },
  "long_msg_scroll": {
    "type": "dropdown",
    "label": "Long message display mode",
    "value": "ticker",
    "options": [
      { "label": "⟺ Horizontal ticker",       "value": "ticker"   },
      { "label": "↕ Vertical scroll",         "value": "vertical" },
      { "label": "↕ Expand fully",            "value": "expand"   },
      { "label": "— Truncate (single line)",  "value": "none"     }
    ],
    "group": "Scrolling"
  },
  "long_msg_max_height": {
    "type": "number",
    "label": "Window height (px) — for \"Vertical scroll\", and initial (collapsed) height for \"Expand fully\"",
    "value": 80,
    "min": 30,
    "max": 300,
    "group": "Scrolling"
  },
  "scroll_speed": {
    "type": "number",
    "label": "Scroll speed (sec)",
    "value": 8,
    "min": 2,
    "max": 30,
    "group": "Scrolling"
  },
  "show_avatars": {
    "type": "checkbox",
    "label": "Show avatars",
    "value": false,
    "group": "Extra"
  },
  "avatar_size": {
    "type": "number",
    "label": "Avatar size (px)",
    "value": 28,
    "min": 16,
    "max": 64,
    "group": "Extra"
  },
  "show_badges": {
    "type": "checkbox",
    "label": "Show badges",
    "value": true,
    "group": "Extra"
  },
  "hide_commands": {
    "type": "checkbox",
    "label": "Hide commands (starting with !)",
    "value": false,
    "group": "Extra"
  },
  "emote_size": {
    "type": "number",
    "label": "Emote height (px)",
    "value": 28,
    "min": 16,
    "max": 64,
    "group": "Extra"
  }
}
