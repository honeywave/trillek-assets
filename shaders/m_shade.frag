// fragment shader
#version 330

in vec4 ex_color;
in vec3 ex_nvect;
in vec3 ex_cvect;
in vec2 ex_tex1;
in vec2 ex_depth;

out vec4 out_col;
out vec4 out_norm;

uniform sampler2D texUnit;

void main(void)
{
    vec4 tci;

    tci = texture(texUnit, ex_tex1);
    if(tci == 0) {
        discard;
    }

    out_col = tci;
    out_norm = vec4(ex_nvect * 0.5 + 0.5, 0.02);
    gl_FragDepth = ex_depth.x / ex_depth.y;
}
