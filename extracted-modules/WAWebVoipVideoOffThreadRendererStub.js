__d("WAWebVoipVideoOffThreadRendererStub", [
    "WALogger",
    "WAWebABProps",
    "WAWebUA",
    "WAWebVoipVideoRendererInterface",
    "WAWebVoipVideoRendererLogging",
    "WAWebVoipVideoRendererRegistry",
    "WAWebVoipVideoRendererWorkerResource",
    "WorkerBundleResource",
    "WorkerMessagePort",
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
    const _ = 4;
    const f = 5000;
    const g = (()=>{
        function t({ canvas, portalMode, rendererType, threadingMode }) {
            this.$11 = false;
            this.$10 = o("WAWebVoipVideoRendererInterface").onRenderCallbackNoop;
            const rendererId = t.rendererIdCounter++;
            const generation = 0;
            this.$1 = rendererId;
            this.$2 = generation;
            const offscreenCanvas = portalMode ? new OffscreenCanvas(canvas.width, canvas.height) : canvas.transferControlToOffscreen();
            this.$3 = canvas;
            this.$4 = offscreenCanvas;
            this.$5 = this.$6(threadingMode);
            this.$5.postMessage({
                type: "registerCanvas",
                rendererId,
                generation,
                offscreenCanvas,
                rendererType,
                portalMode
            }, [
                offscreenCanvas
            ]);
        }
        t.checkAvailability = function() {
            if (o("WAWebUA").UA.isSafari) {
                return false;
            }
            return !!window.OffscreenCanvas && !!window.Worker;
        };
        t.$7 = function(n, r) {
            return t.workerPool.get(n)?.get(r) ?? null;
        };
        const t_prototype = t.prototype;
        t_prototype.$8 = function(a) {
            const n = this;
            const i = new (o("WorkerMessagePort")).WorkerMessagePort(o("WorkerBundleResource").createDedicatedWebWorker(r("WAWebVoipVideoRendererWorkerResource")), "WAWebVoipVideoRendererWorker");
            const l = Date.now();
            let p = false;
            let _ = false;
            i.onMessage.add(function() {
                if (!p) {
                    p = true;
                    const t = Date.now() - l;
                    if (_) {
                        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: VideoRendererWorker recovered ",
                            "ms (watchdog)"
                        ])), t);
                    } else {
                        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: VideoRendererWorker first message received in ",
                            "ms"
                        ])), t);
                    }
                }
            });
            i.onError.add(function(e) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: VideoRendererWorker port error: ",
                    ""
                ])), e?.message ?? String(e));
            });
            const g = window.setTimeout(function() {
                if (!p) {
                    _ = true;
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: VideoRendererWorker silent >",
                        "ms, may stay gray"
                    ])), f);
                }
            }, f);
            i.addMessageListener("shutdown", function() {
                window.clearTimeout(g);
                const e = t.workerPool.get(i);
                if (e != null) {
                    if (e.size > 0) {
                        return;
                    }
                    t.workerPool.delete(i);
                }
                i.close();
            });
            i.addMessageListener("loggingCallback", function({ level, message }) {
                o("WAWebVoipVideoRendererLogging").handleLog(level, message);
            });
            i.addMessageListener("mainThreadRender", function({ bitmap, generation, isReadyFrame, rendererId }) {
                const m = a ? t.$7(i, rendererId) : n;
                if (!m || generation !== m.$2) {
                    bitmap.close();
                    return;
                }
                const p = m.$3;
                if (p == null) {
                    bitmap.close();
                    return;
                }
                try {
                    const _ = p.getContext("bitmaprenderer");
                    if (!_) {
                        throw r("err")(`Could not get bitmaprenderer context for ${rendererId}`);
                    }
                    _.transferFromImageBitmap(bitmap);
                } catch (error) {
                    o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: VideoRendererWorker: main thread render failed: ",
                        ""
                    ])), error);
                    bitmap.close();
                    return;
                }
                if (isReadyFrame) {
                    m.$9();
                }
            });
            i.addMessageListener("frameRendered", function({ generation, rendererId }) {
                const l = a ? t.$7(i, rendererId) : n;
                if (l != null && generation === l.$2) {
                    l.$9();
                }
            });
            i.addMessageListener("requestKeyFrame", function({ rendererId }) {
                try {
                    const l = a ? t.$7(i, rendererId) : n;
                    if (!l) {
                        return;
                    }
                    const s = l.$3;
                    if (s == null) {
                        return;
                    }
                    o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.requestKeyFrameForCanvas(s);
                } catch (error) {
                    o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: VideoRendererWorker: Failed to request key frame: ",
                        ""
                    ])), error);
                }
            });
            i.addMessageListener("decoderFatalError", function() {
                o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.onDecoderFatalError();
            });
            return i;
        };
        t_prototype.$6 = function(n) {
            if (n === o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererThreadingMode.SINGLE_WORKER || n === o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererThreadingMode.POOLED_WORKERS) {
                const e = n === o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererThreadingMode.SINGLE_WORKER ? Infinity : _;
                for (const [a, i] of t.workerPool){
                    if (i.size < e) {
                        i.set(this.$1, this);
                        return a;
                    }
                }
                const l = this.$8(true);
                t.workerPool.set(l, new Map([
                    [
                        this.$1,
                        this
                    ]
                ]));
                return l;
            }
            return this.$8(false);
        };
        t_prototype.cleanup = function() {
            this.$2 += 1;
            const e = t.workerPool.get(this.$5);
            if (e != null) {
                e.delete(this.$1);
            }
            this.$5.postMessage({
                type: "unregisterCanvas",
                rendererId: this.$1
            });
            if (o("WAWebABProps").getABPropConfigValue("web_memlab_fixes_3")) {
                this.$3 = null;
                this.$10 = o("WAWebVoipVideoRendererInterface").onRenderCallbackNoop;
            }
        };
        t_prototype.reset = function() {
            this.$2 += 1;
            this.$11 = false;
            this.$5.postMessage({
                type: "reset",
                rendererId: this.$1,
                generation: this.$2
            });
        };
        t_prototype.requireKeyframe = function() {
            this.$5.postMessage({
                type: "requireKeyframe",
                rendererId: this.$1
            });
        };
        t_prototype.onCanvasResize = function(t, n) {
            this.$5.postMessage({
                type: "onCanvasResize",
                rendererId: this.$1,
                width: t,
                height: n
            });
        };
        t_prototype.setCoverFit = function(t) {
            this.$5.postMessage({
                type: "setCoverFit",
                rendererId: this.$1,
                enabled: t
            });
        };
        t_prototype.setVideoEnhancement = function(brightness, sharpening) {
            this.$5.postMessage({
                type: "setVideoEnhancement",
                rendererId: this.$1,
                brightness,
                sharpening
            });
        };
        t_prototype.renderFrame = function({ format, frameBuffer, height, isKeyFrame, mirror, orientation, timestamp, width }) {
            this.$5.postMessage({
                type: "onVideoFrame",
                rendererId: this.$1,
                frameBuffer,
                width,
                height,
                orientation,
                mirror,
                format,
                timestamp,
                isKeyFrame
            });
        };
        t_prototype.setRenderCallback = function(t) {
            this.$10 = t;
        };
        t_prototype.$9 = function() {
            if (!this.$11) {
                this.$11 = true;
                try {
                    this.$10();
                } catch (error) {
                    o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: VideoRendererWorker: render callback failed: ",
                        ""
                    ])), error);
                }
            }
        };
        return t;
    })();
    g.rendererIdCounter = 0;
    g.workerPool = new Map;
    l.default = g;
}, 98);