__d("WAWebVoipVideoRasterRenderer", [
    "WAWebRuntimeEnvironmentUtils",
    "WAWebVoipMediaEnums",
    "WAWebVoipVideoEnhancementPass",
    "WAWebVoipVideoRendererInterface",
    "WAWebVoipVideoRendererLogging",
    "asyncToGeneratorRuntime",
    "err"
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
    const f = 0.01;
    class g {
        constructor(e){
            this.$5 = null;
            this.$7 = false;
            this.$10 = false;
            this.$8 = 0;
            this.$9 = 0;
            this.$1 = e;
            this.canvas = e;
            this.$2 = v(e);
            this.$3 = o("WAWebVoipVideoRendererInterface").onRenderCallbackNoop;
            this.$4 = false;
        }
        static checkAvailability = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return typeof window !== "undefined" && typeof window.VideoFrame === "function";
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        cleanup() {
            this.$5?.cleanup();
            this.$5 = null;
        }
        reset() {
            this.$2.clearRect(0, 0, this.$1.width, this.$1.height);
        }
        onCanvasResize(t, n) {
            this.pendingResize = {
                width: t,
                height: n
            };
        }
        applyPendingResize() {
            if (this.pendingResize != null) {
                const e = this.pendingResize;
                const { height, width } = e;
                this.pendingResize = null;
                this.$1.width = width;
                this.$1.height = height;
            }
        }
        renderFrame({ format, frameBuffer, height, isKeyFrame, mirror, orientation, timestamp, width }) {
            this.applyPendingResize();
            const _ = o("WAWebVoipMediaEnums").videoFrameFormatFromFormatEnum(format);
            if (!_) {
                o("WAWebVoipVideoRendererLogging").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "renderFrame: unsupported format: ",
                    ""
                ])), format);
                return;
            }
            const f = new Uint8Array(frameBuffer);
            const g = true;
            const colorSpace = {
                matrix: "smpte170m",
                primaries: "smpte170m",
                transfer: "smpte170m",
                fullRange: false
            };
            try {
                const y = new window.VideoFrame(f, {
                    format: _,
                    codedWidth: width,
                    codedHeight: height,
                    timestamp: Date.now() * 1000,
                    colorSpace
                });
                if (y) {
                    try {
                        this.renderVideoFrameToCanvas(y, width, height, orientation, mirror, g);
                    } catch (error) {
                        o("WAWebVoipVideoRendererLogging").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "onVideoFrameWasmToJs: error rendering to canvas: ",
                            ""
                        ])), error);
                    } finally{
                        y.close();
                    }
                } else {
                    throw r("err")("VideoFrame API not supported");
                }
            } catch (error) {
                o("WAWebVoipVideoRendererLogging").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "onVideoFrameWasmToJs: error creating VideoFrame with NV12: ",
                    ""
                ])), error);
            }
        }
        renderVideoFrameToCanvas(t, n, r, o, a, i = false) {
            y(this.$1, this.$2, n, r, o, a, i, this.$6(t, n, r), this.$4);
            this.$3();
        }
        $6(t, n, a) {
            if (this.$7 || Math.abs(this.$8) < f && Math.abs(this.$9) < f) {
                if (this.$5 != null) {
                    this.$5.cleanup();
                    this.$5 = null;
                }
                return t;
            }
            try {
                if (this.$5 == null) {
                    this.$5 = new (r("WAWebVoipVideoEnhancementPass"));
                }
                const e = this.$5.render(t, n, a, this.$8, this.$9);
                if (!this.$10) {
                    this.$10 = true;
                    o("WAWebVoipVideoRendererLogging").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: WAWebVoipVideoFrameRenderer: video enhancement applied brightness=",
                        " sharpening=",
                        " at ",
                        "x",
                        ""
                    ])), this.$8, this.$9, n, a);
                }
                return e;
            } catch (error) {
                this.$7 = true;
                this.$5?.cleanup();
                this.$5 = null;
                o("WAWebVoipVideoRendererLogging").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: WAWebVoipVideoFrameRenderer: enhancement pass failed, rendering raw frame: ",
                    ""
                ])), error);
                return t;
            }
        }
        setRenderCallback(t) {
            this.$3 = t;
        }
        setCoverFit(t) {
            this.$4 = t;
        }
        setVideoEnhancement(t, n) {
            this.$8 = t;
            this.$9 = n;
        }
    }
    class h {
        constructor(e){
            this.$1 = e;
            this.$2 = v(e);
            if (o("WAWebRuntimeEnvironmentUtils").isWorker()) {
                this.$3 = new OffscreenCanvas(e.width, e.height);
            } else {
                this.$3 = document.createElement("canvas");
            }
            this.$4 = v(this.$3);
            this.$5 = o("WAWebVoipVideoRendererInterface").onRenderCallbackNoop;
            this.$6 = false;
        }
        static checkAvailability() {
            return true;
        }
        cleanup() {}
        reset() {
            this.$2.clearRect(0, 0, this.$1.width, this.$1.height);
        }
        onCanvasResize(t, n) {
            this.$7 = {
                width: t,
                height: n
            };
        }
        $8() {
            if (this.$7 != null) {
                const e = this.$7;
                const { height, width } = e;
                this.$7 = null;
                this.$1.width = width;
                this.$1.height = height;
            }
        }
        renderFrame({ format, frameBuffer, height, isKeyFrame, mirror, orientation, timestamp, width }) {
            this.$8();
            const nv12Buffer = new Uint8Array(frameBuffer);
            const d = format === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.NV12 ? b({
                height,
                nv12Buffer,
                width
            }) : format === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGBA ? nv12Buffer : null;
            if (!d) {
                o("WAWebVoipVideoRendererLogging").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "renderFrame: unsupported format: ",
                    ""
                ])), format);
                return;
            }
            const _ = true;
            try {
                this.renderRgbaWithImageData(d, width, height, orientation, mirror, _);
            } catch (error) {
                o("WAWebVoipVideoRendererLogging").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "onVideoFrameWasmToJs: NV12 conversion fallback failed: ",
                    ""
                ])), error);
            }
        }
        renderRgbaWithImageData(t, n, r, a, i, l = false) {
            try {
                const e = this.$4.createImageData(n, r);
                e.data.set(t);
                this.$3.width = n;
                this.$3.height = r;
                this.$4.putImageData(e, 0, 0);
                y(this.$1, this.$2, n, r, a, i, l, this.$3, this.$6);
                this.$5();
            } catch (error) {
                o("WAWebVoipVideoRendererLogging").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "renderRgbaWithImageData: error rendering to canvas: ",
                    ""
                ])), error);
            }
        }
        setRenderCallback(t) {
            this.$5 = t;
        }
        setCoverFit(t) {
            this.$6 = t;
        }
        setVideoEnhancement(t, n) {}
    }
    function y(e, t, sourceWidth, sourceHeight, o, a, preserveAspectRatio, l, coverFit) {
        const u = C({
            canvasHeight: e.height,
            canvasWidth: e.width,
            coverFit,
            orientation: o,
            preserveAspectRatio,
            sourceHeight,
            sourceWidth
        });
        const { renderHeight, renderWidth } = u;
        t.save();
        try {
            t.clearRect(0, 0, e.width, e.height);
            t.translate(e.width / 2, e.height / 2);
            t.scale(a ? -1 : 1, 1);
            t.rotate(Math.PI * (o.valueOf() - 1) / 2);
            t.translate(-renderWidth / 2, -renderHeight / 2);
            t.drawImage(l, 0, 0, renderWidth, renderHeight);
        } finally{
            t.restore();
        }
    }
    function C({ canvasHeight, canvasWidth, coverFit, orientation, preserveAspectRatio, sourceHeight, sourceWidth }) {
        const u = orientation === o("WAWebVoipMediaEnums").Orientation.Rotate90 || orientation === o("WAWebVoipMediaEnums").Orientation.Rotate270;
        const c = u ? canvasHeight : canvasWidth;
        const d = u ? canvasWidth : canvasHeight;
        if (!preserveAspectRatio) {
            return {
                renderWidth: c,
                renderHeight: d
            };
        }
        const m = sourceWidth / sourceHeight;
        const p = c / d;
        let _;
        let f;
        if (coverFit) {
            if (m > p) {
                f = d;
                _ = d * m;
            } else {
                _ = c;
                f = c / m;
            }
        } else if (m > p) {
            _ = c;
            f = c / m;
        } else {
            f = d;
            _ = d * m;
        }
        return {
            renderWidth: _,
            renderHeight: f
        };
    }
    function b(e) {
        for(var t = e.height, n = e.nv12Buffer, r = e.width, o = new Uint8Array(r * t * 4), a = r * t, i = a, l = 0; l < t; l++){
            for(let s = 0; s < r; s++){
                const u = l * r + s;
                const c = u * 4;
                const d = n[u];
                const m = Math.floor(l / 2);
                const p = Math.floor(s / 2);
                const _ = i + m * r + p * 2;
                let f;
                let g;
                if (_ + 1 >= n.length || _ < i) {
                    f = 128;
                    g = 128;
                } else {
                    f = n[_];
                    g = n[_ + 1];
                }
                const h = d - 16;
                const y = f - 128;
                const C = g - 128;
                let b = Math.round((298 * h + 409 * C) / 256);
                let v = Math.round((298 * h - 100 * y - 208 * C) / 256);
                let S = Math.round((298 * h + 516 * y) / 256);
                b = Math.max(0, Math.min(255, b));
                v = Math.max(0, Math.min(255, v));
                S = Math.max(0, Math.min(255, S));
                o[c] = b;
                o[c + 1] = v;
                o[c + 2] = S;
                o[c + 3] = 255;
            }
        }
        return o;
    }
    function v(e) {
        const t = e.getContext("2d");
        if (t == null) {
            throw r("err")("Failed to create context for canvas");
        }
        return t;
    }
    l.WAWebVoipVideoFrameRenderer = g;
    l.WAWebVoipVideoRasterRenderer = h;
}, 98);