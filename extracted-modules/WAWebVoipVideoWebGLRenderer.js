__d("WAWebVoipVideoWebGLRenderer", [
    "$InternalEnum",
    "WAWebVoipMediaEnums",
    "WAWebVoipVideoEnhancementShader",
    "WAWebVoipVideoRendererInterface",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = n("$InternalEnum").Mirrored([
        "Direct",
        "OffscreenTransfer",
        "OffscreenDraw"
    ]);
    class s {
        constructor(t){
            this.$4 = 0;
            this.$5 = 0;
            this.canvas = t;
            var n = e.OffscreenTransfer;
            this.mode = n;
            if (n === e.Direct) {
                this.renderer = new b(t);
            } else {
                this.offscreenCanvas = new OffscreenCanvas(t.width, t.height);
                this.renderer = new b(this.offscreenCanvas);
                if (n === e.OffscreenTransfer) {
                    this.transferContext = t.getContext("bitmaprenderer");
                    if (!this.transferContext) {
                        throw r("err")("Failed to create context for canvas");
                    }
                } else if (n === e.OffscreenDraw && (this.drawContext = t.getContext("2d"), !this.drawContext)) {
                    throw r("err")("Failed to create context for canvas");
                }
            }
            this.$1 = o("WAWebVoipVideoRendererInterface").onRenderCallbackNoop;
            this.$2 = false;
        }
        static checkAvailability() {
            return !!(window.WebGLRenderingContext && window.OffscreenCanvas);
        }
        reset() {
            const e = new Uint8Array([
                0,
                0,
                0,
                255
            ]);
            this.renderFrame({
                format: o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGBA,
                frameBuffer: e.buffer,
                height: 1,
                isKeyFrame: false,
                mirror: false,
                orientation: o("WAWebVoipMediaEnums").Orientation.Normal,
                timestamp: 0,
                width: 1
            });
            this.renderer.clearNV12Textures();
        }
        cleanup() {
            this.renderer.cleanup();
        }
        onCanvasResize(t, n) {
            this.pendingResize = {
                width: t,
                height: n
            };
        }
        $3() {
            if (this.pendingResize != null) {
                const t = this.pendingResize;
                const { height, width } = t;
                this.pendingResize = null;
                if (this.mode !== e.Direct && this.offscreenCanvas) {
                    this.offscreenCanvas.width = width;
                    this.offscreenCanvas.height = height;
                }
                this.canvas.width = width;
                this.canvas.height = height;
            }
        }
        renderFrame({ format, frameBuffer, height, isKeyFrame, mirror, orientation, timestamp, width }) {
            this.$3();
            this.renderer.render(new Uint8Array(frameBuffer), width, height, orientation, mirror, format, this.$2, this.$4, this.$5);
            if (this.mode === e.Direct || !this.offscreenCanvas) {
                this.$1();
                return;
            }
            const c = this.offscreenCanvas.transferToImageBitmap();
            e: {
                const d = this.mode;
                if (d === e.Direct) {
                    break e;
                }
                if (d === e.OffscreenTransfer) {
                    this.transferContext?.transferFromImageBitmap(c);
                    break e;
                }
                if (d === e.OffscreenDraw) {
                    this.drawContext?.drawImage(c, 0, 0);
                    c.close();
                    break e;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${d}`);
            }
            this.$1();
        }
        setRenderCallback(t) {
            this.$1 = t;
        }
        setCoverFit(t) {
            this.$2 = t;
        }
        setVideoEnhancement(t, n) {
            this.$4 = t;
            this.$5 = n;
        }
    }
    function u({ gl, source, type }) {
        const a = gl.createShader(type);
        if (!a) {
            throw r("err")("Failed to create shader");
        }
        gl.shaderSource(a, source);
        gl.compileShader(a);
        const i = gl.getShaderParameter(a, gl.COMPILE_STATUS);
        if (!i) {
            const l = gl.getShaderInfoLog(a);
            gl.deleteShader(a);
            throw r("err")(`Failed to compile shader: ${l ?? ""}`);
        }
        return a;
    }
    function c(e, t) {
        const n = e.createProgram();
        if (!n) {
            throw r("err")("Failed to create program");
        }
        t.map((t)=>e.attachShader(n, t));
        e.linkProgram(n);
        e.useProgram(n);
        return n;
    }
    function d(e, t) {
        const n = e.createBuffer();
        e.bindBuffer(e.ARRAY_BUFFER, n);
        e.bufferData(e.ARRAY_BUFFER, new Float32Array([
            0,
            0,
            0,
            1,
            1,
            0,
            1,
            1
        ]), e.STATIC_DRAW);
        const r = e.getAttribLocation(t, "a_position");
        e.enableVertexAttribArray(r);
        e.vertexAttribPointer(r, 2, e.FLOAT, false, 0, 0);
    }
    function m(e, t, n, o) {
        const a = e.createTexture();
        if (!a) {
            throw r("err")("Failed to create texture");
        }
        e.bindTexture(e.TEXTURE_2D, a);
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR);
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR);
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE);
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
        e.uniform1i(e.getUniformLocation(t, o), n);
        return a;
    }
    const p = {
        preserveDrawingBuffer: false,
        alpha: true,
        depth: false,
        stencil: false,
        antialias: false
    };
    const _ = "\n    attribute vec2 a_position;\n    varying vec2 v_texCoord;\n    uniform mat2 u_matrix;\n    void main() {\n     gl_Position = vec4(u_matrix * ((a_position * 2.0 - 1.0) * vec2(1, -1)), 0, 1);\n     v_texCoord = a_position;\n    }\n    ";
    const f = `
     precision mediump float;
     uniform sampler2D textureRGB;
     varying vec2 v_texCoord;

     vec3 sampleRGB(vec2 coord) {
      // I saw that [R G B] is actually laid out as [B G R] in the GPU memory
      return texture2D(textureRGB, coord).rgb;
     }
     ${o("WAWebVoipVideoEnhancementShader").GLSL_ENHANCEMENT_HELPERS}
     void main() {
      vec3 color = applyEnhancements(sampleRGB(v_texCoord), v_texCoord);
      gl_FragColor = vec4(color, 1.0);
     }`;
    const g = `
    precision mediump float;
    uniform sampler2D videoFrameY;
    uniform sampler2D videoFrameUV;
    varying vec2 v_texCoord;

    vec3 sampleRGB(vec2 coord) {
      float y = texture2D(videoFrameY, coord).r * 1.164;
      float u = texture2D(videoFrameUV, coord).r;
      float v = texture2D(videoFrameUV, coord).a;
      return clamp(
        vec3(
          y + 1.59375 * v - 0.871078431372549,
          y - 0.390625 * u - v * 0.8125 + 0.532843137254902,
          y + 2.0 * u - 1.075
        ),
        0.0,
        1.0
      );
    }
    ${o("WAWebVoipVideoEnhancementShader").GLSL_ENHANCEMENT_HELPERS}
    void main() {
      vec3 color = applyEnhancements(sampleRGB(v_texCoord), v_texCoord);
      gl_FragColor = vec4(color, 1.0);
    }`;
    function h(e, program) {
        const matrixLocation = e.getUniformLocation(program, "u_matrix");
        if (!matrixLocation) {
            throw r("err")("Failed to get matrix location");
        }
        return {
            program,
            matrixLocation,
            brightnessLocation: e.getUniformLocation(program, "uBrightness"),
            sharpenLocation: e.getUniformLocation(program, "uSharpen"),
            textureSizeLocation: e.getUniformLocation(program, "uTextureSize")
        };
    }
    const y = [
        1,
        0,
        0,
        1
    ];
    const C = [
        [
            y,
            [
                0,
                -1,
                1,
                0
            ],
            [
                -1,
                0,
                0,
                -1
            ],
            [
                0,
                1,
                -1,
                0
            ]
        ],
        [
            [
                -1,
                0,
                0,
                1
            ],
            [
                0,
                1,
                1,
                0
            ],
            [
                -1,
                0,
                0,
                -1
            ],
            [
                0,
                -1,
                -1,
                0
            ]
        ]
    ];
    class b {
        constructor(e){
            var t = e.getContext("webgl", p);
            if (!t) {
                throw r("err")("WebGL not supported");
            }
            this.gl = t;
            this.vertexShader_ = u({
                gl: t,
                source: _,
                type: t.VERTEX_SHADER
            });
            this.rgbShader_ = u({
                gl: t,
                source: f,
                type: t.FRAGMENT_SHADER
            });
            var n = c(t, [
                this.vertexShader_,
                this.rgbShader_
            ]);
            d(t, n);
            this.textureRGB_ = m(this.gl, n, 3, "textureRGB");
            var a = h(this.gl, n);
            this.nv12Shader_ = u({
                gl: t,
                source: g,
                type: t.FRAGMENT_SHADER
            });
            var i = c(t, [
                this.vertexShader_,
                this.nv12Shader_
            ]);
            d(t, i);
            this.textureY_ = m(this.gl, i, 4, "videoFrameY");
            this.textureUV_ = m(this.gl, i, 5, "videoFrameUV");
            var l = new Uint8Array([
                0
            ]);
            var s = new Uint8Array([
                128,
                128
            ]);
            this.gl.activeTexture(this.gl.TEXTURE4);
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.textureY_);
            this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.LUMINANCE, 1, 1, 0, this.gl.LUMINANCE, this.gl.UNSIGNED_BYTE, l);
            this.gl.activeTexture(this.gl.TEXTURE5);
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.textureUV_);
            this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.LUMINANCE_ALPHA, 1, 1, 0, this.gl.LUMINANCE_ALPHA, this.gl.UNSIGNED_BYTE, s);
            var y = h(this.gl, i);
            this.programs_ = new Map([
                [
                    o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGB24,
                    a
                ],
                [
                    o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGBA,
                    a
                ],
                [
                    o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.NV12,
                    y
                ]
            ]);
        }
        cleanup() {
            const e = this;
            this.programs_.forEach((t, n)=>{
                e.gl.deleteProgram(t.program);
            });
            this.programs_.clear();
            this.gl.deleteShader(this.vertexShader_);
            this.gl.deleteShader(this.rgbShader_);
            this.gl.deleteShader(this.nv12Shader_);
            this.gl.deleteTexture(this.textureRGB_);
            this.gl.deleteTexture(this.textureUV_);
            this.gl.deleteTexture(this.textureY_);
        }
        clearNV12Textures() {
            const e = new Uint8Array([
                0
            ]);
            const t = new Uint8Array([
                128,
                128
            ]);
            this.gl.activeTexture(this.gl.TEXTURE4);
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.textureY_);
            this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.LUMINANCE, 1, 1, 0, this.gl.LUMINANCE, this.gl.UNSIGNED_BYTE, e);
            this.gl.activeTexture(this.gl.TEXTURE5);
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.textureUV_);
            this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.LUMINANCE_ALPHA, 1, 1, 0, this.gl.LUMINANCE_ALPHA, this.gl.UNSIGNED_BYTE, t);
        }
        render(t, n, a, i, l, s, u, c, d) {
            const e = this.programs_.get(s);
            if (!e) {
                throw r("err")(`[webgl]: Invalid video format: ${o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.getName(s)}`);
            }
            const { brightnessLocation, matrixLocation, program, sharpenLocation, textureSizeLocation } = e;
            this.gl.useProgram(program);
            const h = this.gl.canvas.width / this.gl.canvas.height;
            const b = i.valueOf() % 2 === 1 ? n / a : a / n;
            if (u) {
                if (h > b) {
                    this.gl.viewport(0, (this.gl.canvas.height - this.gl.canvas.width / b) / 2, this.gl.canvas.width, this.gl.canvas.width / b);
                } else {
                    this.gl.viewport((this.gl.canvas.width - this.gl.canvas.height * b) / 2, 0, this.gl.canvas.height * b, this.gl.canvas.height);
                }
            } else if (h > b) {
                this.gl.viewport((this.gl.canvas.width - this.gl.canvas.height * b) / 2, 0, this.gl.canvas.height * b, this.gl.canvas.height);
            } else {
                this.gl.viewport(0, (this.gl.canvas.height - this.gl.canvas.width / b) / 2, this.gl.canvas.width, this.gl.canvas.width / b);
            }
            if (s === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGB24 || s === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGBA) {
                const v = new Uint8Array(t.buffer, 0, t.length);
                this.gl.activeTexture(this.gl.TEXTURE3);
                this.gl.bindTexture(this.gl.TEXTURE_2D, this.textureRGB_);
                this.gl.texImage2D(this.gl.TEXTURE_2D, 0, s === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGB24 ? this.gl.RGB : this.gl.RGBA, n, a, 0, s === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGB24 ? this.gl.RGB : this.gl.RGBA, this.gl.UNSIGNED_BYTE, v);
            } else if (s === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.NV12) {
                const S = new Uint8Array(t.buffer, 0, n * a);
                this.gl.activeTexture(this.gl.TEXTURE4);
                this.gl.bindTexture(this.gl.TEXTURE_2D, this.textureY_);
                this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.LUMINANCE, n, a, 0, this.gl.LUMINANCE, this.gl.UNSIGNED_BYTE, S);
                const R = new Uint8Array(t.buffer, n * a, n * a / 2);
                this.gl.activeTexture(this.gl.TEXTURE5);
                this.gl.bindTexture(this.gl.TEXTURE_2D, this.textureUV_);
                this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.LUMINANCE_ALPHA, n / 2, a / 2, 0, this.gl.LUMINANCE_ALPHA, this.gl.UNSIGNED_BYTE, R);
            }
            this.gl.uniform1f(brightnessLocation, c);
            this.gl.uniform1f(sharpenLocation, d);
            this.gl.uniform2f(textureSizeLocation, n, a);
            const L = C[l ? 1 : 0][i.valueOf() - 1] || y;
            this.gl.uniformMatrix2fv(matrixLocation, false, L);
            this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);
        }
    }
    l.default = s;
}, 98);