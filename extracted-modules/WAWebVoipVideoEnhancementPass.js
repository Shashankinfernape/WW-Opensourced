__d("WAWebVoipVideoEnhancementPass", [
    "WAWebVoipVideoEnhancementShader",
    "WAWebVoipVideoRendererLogging",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = "\n    attribute vec2 a_position;\n    varying vec2 v_uv;\n    void main() {\n      v_uv = vec2(a_position.x * 0.5 + 0.5, 0.5 - a_position.y * 0.5);\n      gl_Position = vec4(a_position, 0.0, 1.0);\n    }";
    const u = `
    precision mediump float;
    uniform sampler2D uTexture;
    varying vec2 v_uv;

    vec3 sampleRGB(vec2 coord) {
      return texture2D(uTexture, coord).rgb;
    }
    ${o("WAWebVoipVideoEnhancementShader").GLSL_ENHANCEMENT_HELPERS}
    void main() {
      gl_FragColor = vec4(applyEnhancements(sampleRGB(v_uv), v_uv), 1.0);
    }`;
    const c = {
        preserveDrawingBuffer: false,
        alpha: false,
        depth: false,
        stencil: false,
        antialias: false
    };
    function d({ gl, source, type }) {
        const a = gl.createShader(type);
        if (!a) {
            throw r("err")("Failed to create enhancement shader");
        }
        gl.shaderSource(a, source);
        gl.compileShader(a);
        if (!gl.getShaderParameter(a, gl.COMPILE_STATUS)) {
            const i = gl.getShaderInfoLog(a);
            gl.deleteShader(a);
            throw r("err")(`Failed to compile enhancement shader: ${i ?? ""}`);
        }
        return a;
    }
    class m {
        constructor(){
            var t = new OffscreenCanvas(1, 1);
            var n = t.getContext("webgl", c);
            if (!n) {
                throw r("err")("WebGL not supported for enhancement pass");
            }
            this.$1 = t;
            this.$2 = n;
            var a = null;
            var i = null;
            var l = null;
            var m = null;
            var p = null;
            try {
                a = n.createProgram();
                if (!a) {
                    throw r("err")("Failed to create enhancement program");
                }
                i = d({
                    gl: n,
                    source: s,
                    type: n.VERTEX_SHADER
                });
                l = d({
                    gl: n,
                    source: u,
                    type: n.FRAGMENT_SHADER
                });
                n.attachShader(a, i);
                n.attachShader(a, l);
                n.linkProgram(a);
                if (!n.getProgramParameter(a, n.LINK_STATUS)) {
                    var _ = n.getProgramInfoLog(a);
                    throw r("err")(`Failed to link enhancement program: ${_ ?? ""}`);
                }
                n.deleteShader(i);
                n.deleteShader(l);
                i = null;
                l = null;
                n.useProgram(a);
                this.$3 = a;
                m = n.createBuffer();
                if (!m) {
                    throw r("err")("Failed to create enhancement vertex buffer");
                }
                this.$4 = m;
                n.bindBuffer(n.ARRAY_BUFFER, m);
                n.bufferData(n.ARRAY_BUFFER, new Float32Array([
                    -1,
                    -1,
                    1,
                    -1,
                    -1,
                    1,
                    1,
                    1
                ]), n.STATIC_DRAW);
                var f = n.getAttribLocation(a, "a_position");
                n.enableVertexAttribArray(f);
                n.vertexAttribPointer(f, 2, n.FLOAT, false, 0, 0);
                p = n.createTexture();
                if (!p) {
                    throw r("err")("Failed to create enhancement texture");
                }
                n.bindTexture(n.TEXTURE_2D, p);
                n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR);
                n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR);
                n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE);
                n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE);
                this.$5 = p;
                n.uniform1i(n.getUniformLocation(a, "uTexture"), 0);
                this.$6 = n.getUniformLocation(a, "uBrightness");
                this.$7 = n.getUniformLocation(a, "uSharpen");
                this.$8 = n.getUniformLocation(a, "uTextureSize");
            } catch (error) {
                n.deleteShader(i);
                n.deleteShader(l);
                n.deleteBuffer(m);
                n.deleteTexture(p);
                n.deleteProgram(a);
                throw error;
            }
            o("WAWebVoipVideoRendererLogging").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: WAWebVoipVideoEnhancementPass: initialized"
            ])));
        }
        render(t, n, r, o, a) {
            const e = this.$2;
            if (this.$1.width !== n || this.$1.height !== r) {
                this.$1.width = n;
                this.$1.height = r;
            }
            e.viewport(0, 0, n, r);
            e.bindTexture(e.TEXTURE_2D, this.$5);
            e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t);
            e.uniform1f(this.$6, o);
            e.uniform1f(this.$7, a);
            e.uniform2f(this.$8, n, r);
            e.drawArrays(e.TRIANGLE_STRIP, 0, 4);
            return this.$1;
        }
        cleanup() {
            const e = this.$2;
            e.deleteTexture(this.$5);
            e.deleteBuffer(this.$4);
            e.deleteProgram(this.$3);
        }
    }
    l.default = m;
}, 98);