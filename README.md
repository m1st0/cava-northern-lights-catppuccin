<!--
SPDX-License-Identifier: MIT
SPDX-FileCopyrightText: Copyright (c) 2026 Maulik Mistry
-->
# CAVA Northern Lights Catppuccin

A multicolor Catppuccin Mocha gradient adaptation of CAVA's Northern Lights GLSL shader.

## Features

- Catppuccin Mocha-inspired multicolor gradient
- Uses CAVA's configured gradient colors
- GLSL shader for CAVA's SDL/OpenGL output

## Installation

Copy `northern_lights_catppuccin.frag` into:

`~/.config/cava/shaders/`

Configure CAVA's `[output]` section:

```ini
method = sdl_glsl
vertex_shader = pass_through.vert
fragment_shader = northern_lights_catppuccin.frag
```

Restart CAVA to load the shader.

## Credits

- Original shader: [CAVA](https://github.com/karlstav/cava)
- Color palette inspiration: [Catppuccin](https://github.com/catppuccin/catppuccin)

## License

MIT. See `LICENSE` for details.

