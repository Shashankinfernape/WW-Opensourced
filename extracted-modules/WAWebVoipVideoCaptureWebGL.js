__d("WAWebVoipVideoCaptureWebGL", [
    "WALogger",
    "WAWebVoipVideoCaptureCanvas",
    "WAWebVoipVideoCaptureWithConverter",
    "err",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    const f = {
        preserveDrawingBuffer: true,
        alpha: false,
        depth: false,
        stencil: false,
        antialias: false
    };
    const g = "\n  attribute vec2 a_position;\n  varying vec2 v_texCoord;\n  void main() {\n    gl_Position = vec4(a_position * 2.0 - 1.0, 0, 1);\n    v_texCoord = a_position;\n  }\n";
    function h(t) {
        const n = t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT);
        if (n && n.precision > 0) {
            return "mediump";
        }
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: WebGL mediump not supported, falling back to lowp"
        ])));
        return "lowp";
    }
    function y(e, useYPacking) {
        if (useYPacking) {
            return `
  precision ${e} float;
  uniform sampler2D u_videoTexture;
  uniform vec2 u_texelSize;
  varying vec2 v_texCoord;
  void main() {
    vec4 rgba0 = texture2D(u_videoTexture, v_texCoord);
    vec4 rgba1 = texture2D(u_videoTexture, v_texCoord + vec2(u_texelSize.x, 0.0));
    vec4 rgba2 = texture2D(u_videoTexture, v_texCoord + vec2(u_texelSize.x * 2.0, 0.0));
    vec4 rgba3 = texture2D(u_videoTexture, v_texCoord + vec2(u_texelSize.x * 3.0, 0.0));

    // Convert RGB to Y' using BT.601 formula for limited range.
    // https://en.wikipedia.org/wiki/YCbCr#ITU-R_BT.601_conversion
    float y0 = 0.2568 * rgba0.r + 0.5041 * rgba0.g + 0.0979* rgba0.b + 0.06275;
    float y1 = 0.2568 * rgba1.r + 0.5041 * rgba1.g + 0.0979 * rgba1.b + 0.06275;
    float y2 = 0.2568 * rgba2.r + 0.5041 * rgba2.g + 0.0979 * rgba2.b + 0.06275;
    float y3 = 0.2568 * rgba3.r + 0.5041 * rgba3.g + 0.0979 * rgba3.b + 0.06275;

    gl_FragColor = vec4(y0, y1, y2, y3);
  }
`;
        }
        return `
  precision ${e} float;
  uniform sampler2D u_videoTexture;
  varying vec2 v_texCoord;
  void main() {
    vec4 rgba = texture2D(u_videoTexture, v_texCoord);
    // Convert RGB to Y' using BT.601 formula for limited range.
    // https://en.wikipedia.org/wiki/YCbCr#ITU-R_BT.601_conversion
    float y = 0.2568 * rgba.r + 0.5041 * rgba.g + 0.0979 * rgba.b + 0.06275;
    gl_FragColor = vec4(y, y, y, 1.0);
  }
`;
    }
    function C(e, useUVPacking) {
        if (useUVPacking) {
            return `
  precision ${e} float;
  uniform sampler2D u_videoTexture;
  uniform vec2 u_texelSize;
  varying vec2 v_texCoord;
  void main() {
    vec2 offset = u_texelSize * 0.5;

    vec4 rgba00_0 = texture2D(u_videoTexture, v_texCoord - offset);
    vec4 rgba10_0 = texture2D(u_videoTexture, v_texCoord + vec2(offset.x, -offset.y));
    vec4 rgba01_0 = texture2D(u_videoTexture, v_texCoord + vec2(-offset.x, offset.y));
    vec4 rgba11_0 = texture2D(u_videoTexture, v_texCoord + offset);
    vec4 avg0 = (rgba00_0 + rgba10_0 + rgba01_0 + rgba11_0) * 0.25;

    vec2 coord1 = v_texCoord + vec2(u_texelSize.x * 2.0, 0.0);
    vec4 rgba00_1 = texture2D(u_videoTexture, coord1 - offset);
    vec4 rgba10_1 = texture2D(u_videoTexture, coord1 + vec2(offset.x, -offset.y));
    vec4 rgba01_1 = texture2D(u_videoTexture, coord1 + vec2(-offset.x, offset.y));
    vec4 rgba11_1 = texture2D(u_videoTexture, coord1 + offset);
    vec4 avg1 = (rgba00_1 + rgba10_1 + rgba01_1 + rgba11_1) * 0.25;

    float u0 = -0.1482 * avg0.r - 0.291 * avg0.g + 0.4392 * avg0.b + 0.5;
    float v0 = 0.4392 * avg0.r - 0.3678 * avg0.g - 0.0714 * avg0.b + 0.5;
    float u1 = -0.1482 * avg1.r - 0.291 * avg1.g + 0.4392 * avg1.b + 0.5;
    float v1 = 0.4392 * avg1.r - 0.3678 * avg1.g - 0.0714 * avg1.b + 0.5;

    gl_FragColor = vec4(u0, v0, u1, v1);
  }
`;
        }
        return `
  precision ${e} float;
  uniform sampler2D u_videoTexture;
  uniform vec2 u_texelSize;
  varying vec2 v_texCoord;
  void main() {
    vec2 offset = u_texelSize * 0.5;
    vec4 rgba00 = texture2D(u_videoTexture, v_texCoord - offset);
    vec4 rgba10 = texture2D(u_videoTexture, v_texCoord + vec2(offset.x, -offset.y));
    vec4 rgba01 = texture2D(u_videoTexture, v_texCoord + vec2(-offset.x, offset.y));
    vec4 rgba11 = texture2D(u_videoTexture, v_texCoord + offset);
    vec4 avg = (rgba00 + rgba10 + rgba01 + rgba11) * 0.25;
    // Convert RGB to Y' using BT.601 formula for limited range.
    // https://en.wikipedia.org/wiki/YCbCr#ITU-R_BT.601_conversion
    float u = -0.1482 * avg.r - 0.291 * avg.g + 0.4392 * avg.b + 0.5;
    float v = 0.4392 * avg.r - 0.3678 * avg.g - 0.0714 * avg.b + 0.5;
    gl_FragColor = vec4(u, v, 0.0, 1.0);
  }
`;
    }
    class b {
        constructor(e, t){
            var n = this;
            this.videoTexture = null;
            this.programY = null;
            this.programUV = null;
            this.framebufferY = null;
            this.framebufferUV = null;
            this.textureY = null;
            this.textureUV = null;
            this.vertexBuffer = null;
            this.texelSizeLocationY = null;
            this.useYPacking = true;
            this.useUVPacking = true;
            this.positionLocationY = null;
            this.videoTextureLocationY = null;
            this.positionLocationUV = null;
            this.videoTextureLocationUV = null;
            this.texelSizeLocationUV = null;
            var a = document.createElement("canvas");
            a.width = e;
            a.height = t;
            var i = a.getContext("webgl", f);
            if (!i) {
                throw r("err")("Failed to create WebGL context");
            }
            this.canvas = a;
            this.gl = i;
            this.width = e;
            this.height = t;
            a.addEventListener("webglcontextlost", function(e) {
                e.preventDefault();
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: WebGL context lost"
                ])));
            }, false);
            a.addEventListener("webglcontextrestored", function() {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: WebGL context restored, re-initializing resources"
                ])));
                try {
                    n.initializeWebGLResources();
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: WebGL resources re-initialized successfully"
                    ])));
                } catch (error) {
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: Failed to re-initialize WebGL resources: ",
                        ""
                    ])), String(error));
                }
            }, false);
            var l = e * t;
            var _ = Math.floor(e / 2);
            var g = Math.floor(t / 2);
            var h = _ * g * 2;
            if (e % 4 !== 0) {
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Y/UV packing disabled - width ",
                    " not /4"
                ])), e);
                this.useYPacking = false;
                this.useUVPacking = false;
            }
            if (this.useYPacking) {
                this.yPackedWidth = Math.floor(e / 4);
                this.yDataRGBA = new Uint8Array(this.yPackedWidth * t * 4);
            } else {
                this.yPackedWidth = e;
                this.yDataRGBA = new Uint8Array(l * 4);
            }
            this.yData = new Uint8Array(l);
            if (this.useUVPacking) {
                this.uvPackedWidth = Math.floor(_ / 2);
                this.uvDataRGBA = new Uint8Array(this.uvPackedWidth * g * 4);
            } else {
                this.uvPackedWidth = _;
                this.uvDataRGBA = new Uint8Array(_ * g * 4);
            }
            this.uvData = new Uint8Array(h);
            this.nv12Data = new Uint8Array(l + h);
            if (this.useYPacking && this.useUVPacking) {
                this.nv12YView = new Uint8Array(this.nv12Data.buffer, 0, l);
                this.nv12UVView = new Uint8Array(this.nv12Data.buffer, l, h);
            }
            this.initializeWebGLResources();
            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: WebGLCapture: Initialized for ",
                "x",
                ""
            ])), e, t);
        }
        initializeWebGLResources() {
            const e = this.gl;
            const width = this.width;
            const height = this.height;
            const o = h(e);
            const a = this.compileShader(e.VERTEX_SHADER, g);
            const i = this.compileShader(e.FRAGMENT_SHADER, y(o, this.useYPacking));
            const l = this.compileShader(e.FRAGMENT_SHADER, C(o, this.useUVPacking));
            this.programY = this.createProgram(a, i);
            this.programUV = this.createProgram(a, l);
            const s = new Float32Array([
                0,
                0,
                0,
                1,
                1,
                0,
                1,
                1
            ]);
            const u = e.createBuffer();
            if (!u) {
                throw r("err")("Failed to create vertex buffer");
            }
            this.vertexBuffer = u;
            e.bindBuffer(e.ARRAY_BUFFER, u);
            e.bufferData(e.ARRAY_BUFFER, s, e.STATIC_DRAW);
            const c = e.createTexture();
            if (!c) {
                throw r("err")("Failed to create video texture");
            }
            this.videoTexture = c;
            e.bindTexture(e.TEXTURE_2D, c);
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE);
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR);
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR);
            const d = e.createTexture();
            if (!d) {
                throw r("err")("Failed to create Y texture");
            }
            this.textureY = d;
            e.bindTexture(e.TEXTURE_2D, d);
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE);
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST);
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST);
            const m = this.useYPacking ? this.yPackedWidth : width;
            e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, m, height, 0, e.RGBA, e.UNSIGNED_BYTE, null);
            const p = e.createFramebuffer();
            if (!p) {
                throw r("err")("Failed to create Y framebuffer");
            }
            this.framebufferY = p;
            e.bindFramebuffer(e.FRAMEBUFFER, p);
            e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, d, 0);
            const _ = Math.floor(width / 2);
            const f = Math.floor(height / 2);
            const b = e.createTexture();
            if (!b) {
                throw r("err")("Failed to create UV texture");
            }
            this.textureUV = b;
            e.bindTexture(e.TEXTURE_2D, b);
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE);
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST);
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST);
            const v = this.useUVPacking ? this.uvPackedWidth : _;
            e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, v, f, 0, e.RGBA, e.UNSIGNED_BYTE, null);
            const S = e.createFramebuffer();
            if (!S) {
                throw r("err")("Failed to create UV framebuffer");
            }
            this.framebufferUV = S;
            e.bindFramebuffer(e.FRAMEBUFFER, S);
            e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, b, 0);
            e.bindFramebuffer(e.FRAMEBUFFER, null);
            e.bindTexture(e.TEXTURE_2D, null);
            if (!this.programY || !this.programUV) {
                throw r("err")("WebGL programs not initialized");
            }
            const programY = this.programY;
            const programUV = this.programUV;
            const E = e.getAttribLocation(programY, "a_position");
            if (E === -1) {
                throw r("err")("Failed to get a_position location for Y program");
            }
            this.positionLocationY = E;
            const k = e.getUniformLocation(programY, "u_videoTexture");
            if (!k) {
                throw r("err")("Failed to get u_videoTexture location for Y program");
            }
            this.videoTextureLocationY = k;
            if (this.useYPacking) {
                const I = e.getUniformLocation(programY, "u_texelSize");
                if (!I) {
                    throw r("err")("Failed to get u_texelSize location for Y program");
                }
                this.texelSizeLocationY = I;
            }
            const T = e.getAttribLocation(programUV, "a_position");
            if (T === -1) {
                throw r("err")("Failed to get a_position location for UV program");
            }
            this.positionLocationUV = T;
            const D = e.getUniformLocation(programUV, "u_videoTexture");
            if (!D) {
                throw r("err")("Failed to get u_videoTexture location for UV program");
            }
            this.videoTextureLocationUV = D;
            const x = e.getUniformLocation(programUV, "u_texelSize");
            if (!x) {
                throw r("err")("Failed to get u_texelSize location for UV program");
            }
            this.texelSizeLocationUV = x;
            this.warmUpPipeline();
        }
        warmUpPipeline() {
            const e = this.gl;
            const width = this.width;
            const height = this.height;
            if (!this.framebufferY || !this.programY || !this.vertexBuffer || this.positionLocationY == null || !this.videoTexture || !this.videoTextureLocationY || !this.framebufferUV || !this.programUV || this.positionLocationUV == null || !this.videoTextureLocationUV || !this.texelSizeLocationUV) {
                throw r("err")("WebGL resources not fully initialized for warm-up");
            }
            const framebufferY = this.framebufferY;
            const programY = this.programY;
            const vertexBuffer = this.vertexBuffer;
            const positionLocationY = this.positionLocationY;
            const videoTexture = this.videoTexture;
            const videoTextureLocationY = this.videoTextureLocationY;
            const framebufferUV = this.framebufferUV;
            const programUV = this.programUV;
            const positionLocationUV = this.positionLocationUV;
            const videoTextureLocationUV = this.videoTextureLocationUV;
            const texelSizeLocationUV = this.texelSizeLocationUV;
            e.bindFramebuffer(e.FRAMEBUFFER, framebufferY);
            e.viewport(0, 0, width, height);
            e.useProgram(programY);
            e.bindBuffer(e.ARRAY_BUFFER, vertexBuffer);
            e.enableVertexAttribArray(positionLocationY);
            e.vertexAttribPointer(positionLocationY, 2, e.FLOAT, false, 0, 0);
            e.activeTexture(e.TEXTURE0);
            e.bindTexture(e.TEXTURE_2D, videoTexture);
            e.uniform1i(videoTextureLocationY, 0);
            e.drawArrays(e.TRIANGLE_STRIP, 0, 4);
            const f = Math.floor(width / 2);
            const g = Math.floor(height / 2);
            e.bindFramebuffer(e.FRAMEBUFFER, framebufferUV);
            const h = this.useUVPacking ? this.uvPackedWidth : f;
            e.viewport(0, 0, h, g);
            e.useProgram(programUV);
            e.enableVertexAttribArray(positionLocationUV);
            e.vertexAttribPointer(positionLocationUV, 2, e.FLOAT, false, 0, 0);
            e.uniform1i(videoTextureLocationUV, 0);
            e.uniform2f(texelSizeLocationUV, 1 / width, 1 / height);
            e.drawArrays(e.TRIANGLE_STRIP, 0, 4);
            e.disableVertexAttribArray(positionLocationY);
            e.disableVertexAttribArray(positionLocationUV);
            e.bindBuffer(e.ARRAY_BUFFER, null);
            e.bindFramebuffer(e.FRAMEBUFFER, null);
            e.bindTexture(e.TEXTURE_2D, null);
            e.useProgram(null);
        }
        checkWebGLError(t) {}
        compileShader(t, n) {
            const e = this.gl;
            const o = e.createShader(t);
            if (!o) {
                throw r("err")("Failed to create shader");
            }
            e.shaderSource(o, n);
            e.compileShader(o);
            if (!e.getShaderParameter(o, e.COMPILE_STATUS)) {
                const a = e.getShaderInfoLog(o);
                e.deleteShader(o);
                throw r("err")(`Shader compilation failed: ${a ?? "unknown error"}`);
            }
            return o;
        }
        createProgram(t, n) {
            const e = this.gl;
            const o = e.createProgram();
            if (!o) {
                throw r("err")("Failed to create program");
            }
            e.attachShader(o, t);
            e.attachShader(o, n);
            e.linkProgram(o);
            if (!e.getProgramParameter(o, e.LINK_STATUS)) {
                const a = e.getProgramInfoLog(o);
                e.deleteProgram(o);
                throw r("err")(`Program linking failed: ${a ?? "unknown error"}`);
            }
            return o;
        }
        convertVideoToNV12(t) {
            const e = this.gl;
            const width = this.width;
            const height = this.height;
            if (!this.videoTexture || !this.vertexBuffer || !this.framebufferY || !this.programY || this.positionLocationY == null || !this.videoTextureLocationY || !this.framebufferUV || !this.programUV || this.positionLocationUV == null || !this.videoTextureLocationUV || !this.texelSizeLocationUV) {
                throw r("err")("WebGL resources not fully initialized");
            }
            const videoTexture = this.videoTexture;
            const vertexBuffer = this.vertexBuffer;
            const framebufferY = this.framebufferY;
            const programY = this.programY;
            const positionLocationY = this.positionLocationY;
            const videoTextureLocationY = this.videoTextureLocationY;
            const framebufferUV = this.framebufferUV;
            const programUV = this.programUV;
            const positionLocationUV = this.positionLocationUV;
            const videoTextureLocationUV = this.videoTextureLocationUV;
            const texelSizeLocationUV = this.texelSizeLocationUV;
            e.activeTexture(e.TEXTURE0);
            e.bindTexture(e.TEXTURE_2D, videoTexture);
            e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t);
            e.bindBuffer(e.ARRAY_BUFFER, vertexBuffer);
            e.bindFramebuffer(e.FRAMEBUFFER, framebufferY);
            if (this.useYPacking) {
                e.viewport(0, 0, this.yPackedWidth, height);
            } else {
                e.viewport(0, 0, width, height);
            }
            e.useProgram(programY);
            e.enableVertexAttribArray(positionLocationY);
            e.vertexAttribPointer(positionLocationY, 2, e.FLOAT, false, 0, 0);
            e.uniform1i(videoTextureLocationY, 0);
            if (this.useYPacking && this.texelSizeLocationY) {
                e.uniform2f(this.texelSizeLocationY, 1 / width, 1 / height);
            }
            e.drawArrays(e.TRIANGLE_STRIP, 0, 4);
            this.checkWebGLError("drawArrays (Y plane)");
            const g = width * height;
            const h = Math.floor(width / 2);
            const y = Math.floor(height / 2);
            if (this.useYPacking && this.useUVPacking) {
                e.readPixels(0, 0, this.yPackedWidth, height, e.RGBA, e.UNSIGNED_BYTE, r("nullthrows")(this.nv12YView));
            } else {
                e.readPixels(0, 0, width, height, e.RGBA, e.UNSIGNED_BYTE, this.yDataRGBA);
            }
            this.checkWebGLError("readPixels (Y data)");
            e.bindFramebuffer(e.FRAMEBUFFER, framebufferUV);
            const C = this.useUVPacking ? this.uvPackedWidth : h;
            e.viewport(0, 0, C, y);
            e.useProgram(programUV);
            e.enableVertexAttribArray(positionLocationUV);
            e.vertexAttribPointer(positionLocationUV, 2, e.FLOAT, false, 0, 0);
            e.uniform1i(videoTextureLocationUV, 0);
            e.uniform2f(texelSizeLocationUV, 1 / width, 1 / height);
            e.drawArrays(e.TRIANGLE_STRIP, 0, 4);
            this.checkWebGLError("drawArrays (UV plane)");
            if (this.useYPacking && this.useUVPacking) {
                e.readPixels(0, 0, this.uvPackedWidth, y, e.RGBA, e.UNSIGNED_BYTE, r("nullthrows")(this.nv12UVView));
            } else {
                e.readPixels(0, 0, h, y, e.RGBA, e.UNSIGNED_BYTE, this.uvDataRGBA);
            }
            this.checkWebGLError("readPixels (UV data)");
            if (!(this.useYPacking && this.useUVPacking)) {
                const b = this.yDataRGBA;
                const v = this.yData;
                for(let S = 0, R = 0; S < g; S++, R += 4){
                    v[S] = b[R];
                }
                const L = this.uvDataRGBA;
                const E = this.uvData;
                for(let k = h * y, I = 0, T = 0, D = 0; I < k; I++, T += 4, D += 2){
                    E[D] = L[T];
                    E[D + 1] = L[T + 1];
                }
                this.nv12Data.set(this.yData, 0);
                this.nv12Data.set(this.uvData, g);
            }
            e.bindFramebuffer(e.FRAMEBUFFER, null);
            e.bindTexture(e.TEXTURE_2D, null);
            return this.nv12Data;
        }
        cleanup() {
            const e = this.gl;
            e.deleteTexture(this.videoTexture);
            e.deleteTexture(this.textureY);
            e.deleteTexture(this.textureUV);
            e.deleteFramebuffer(this.framebufferY);
            e.deleteFramebuffer(this.framebufferUV);
            e.deleteBuffer(this.vertexBuffer);
            e.deleteProgram(this.programY);
            e.deleteProgram(this.programUV);
            this.canvas.remove();
            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: WebGLCapture: Cleaned up"
            ])));
        }
        getConverterName() {
            return "webgl";
        }
    }
    const v = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.createConverter = function(t, n) {
            return new b(t, n);
        };
        t_prototype.createFallbackConverter = function(t, n) {
            return new (o("WAWebVoipVideoCaptureCanvas")).CanvasVideoConverter(t, n);
        };
        t.isAvailable = function() {
            try {
                const e = document.createElement("canvas");
                const t = e.getContext("webgl", f);
                return t != null;
            } catch (e) {
                return false;
            }
        };
        return t;
    })(o("WAWebVoipVideoCaptureWithConverter").WAWebVoipVideoCaptureWithConverter);
    l.WebGLVideoConverter = b;
    l.WAWebVoipVideoCaptureWebGL = v;
}, 98);