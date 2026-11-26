/*
 * SPDX-License-Identifier: MIT
 * SPDX-FileCopyrightText: Copyright (c) 2015 Karl Stavestrand
 * SPDX-FileCopyrightText: Copyright (c) 2026 Maulik Mistry
 *
 * northern_lights_catppuccin.frag - CAVA Northern Lights shader adapted
 * to support configurable multicolor gradients.
 *
 * Author: Maulik Mistry
 * Please share support: https://www.paypal.com/paypalme/m1st0
 *                       https://venmo.com/code?user_id=3319592654995456106
 *
 * Original project: https://github.com/karlstav/cavai
 * Color palette inspired by Catppuccin Mocha.
 * https://github.com/catppuccin/catppuccin
 */


#version 330

in vec2 fragCoord;
out vec4 fragColor;

uniform float bars[512];
uniform int bars_count;
uniform vec3 u_resolution;
uniform vec3 bg_color;
uniform vec3 fg_color;

uniform int gradient_count;
uniform vec3 gradient_colors[8];

vec3 gradient(float y)
{
    if (gradient_count <= 1)
        return fg_color;

    float pos = clamp(y, 0.0, 1.0) * (gradient_count - 1);
    int index = int(pos);
    int next_index = min(index + 1, gradient_count - 1);

    return mix(gradient_colors[index], gradient_colors[next_index], fract(pos));
}

void main()
{
    int bar = int(bars_count * fragCoord.x);

    float bar_y = 1.0 - abs((fragCoord.y - 0.5)) * 2.0;
    float y = bars[bar] * bar_y;

    float bar_x = (fragCoord.x - float(bar) / float(bars_count)) * bars_count;
    float bar_r = 1.0 - abs((bar_x - 0.5)) * 2.0;

    bar_r = bar_r * bar_r * 2.0;

    vec3 color = gradient(fragCoord.y);

    fragColor = vec4(color * y * bar_r, 1.0);
}
