__d("WAWebVoipVideoCaptureBase", [
    "$InternalEnum",
    "Promise",
    "WALogger",
    "WAResolvable",
    "WAWebABProps",
    "WAWebNoop",
    "WAWebVoipVideoCaptureCanvas",
    "WAWebVoipVideoCaptureOffThread",
    "WAWebVoipVideoCaptureWebGL",
    "WAWebVoipVideoCaptureWebGPU",
    "WAWebVoipWebCodecsEncoderState",
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
    let f;
    let g;
    let h;
    let y;
    let C;
    let b;
    let v;
    let S;
    let R;
    let L;
    let E;
    let k;
    let I;
    let T;
    let D;
    let x;
    let $;
    let P;
    let N;
    const M = n("$InternalEnum").Mirrored([
        "Uninitialized",
        "Initializing",
        "Ready",
        "Error"
    ]);
    const w = n("$InternalEnum")({
        DEFAULT: 0,
        CANVAS_CPU: 1,
        CANVAS_WEBGL: 2,
        CANVAS_WEBGPU: 3,
        OFF_THREAD_MSTP: 4
    });
    function A() {
        return F.apply(this, arguments);
    }
    function F() {
        F = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebVoipVideoCaptureWebGPU").WAWebVoipVideoCaptureWebGPU.isAvailable();
            if (e) {
                o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Using WebGPU for video capture (default selected)"
                ])));
                return new (o("WAWebVoipVideoCaptureWebGPU")).WAWebVoipVideoCaptureWebGPU;
            }
            if (o("WAWebVoipVideoCaptureWebGL").WAWebVoipVideoCaptureWebGL.isAvailable()) {
                o("WALogger").LOG($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Using WebGL for video capture (default selected)"
                ])));
                return new (o("WAWebVoipVideoCaptureWebGL")).WAWebVoipVideoCaptureWebGL;
            }
            o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose([
                "voip: WebGPU/WebGL unavailable, using Canvas CPU"
            ])));
            return new (o("WAWebVoipVideoCaptureCanvas")).WAWebVoipVideoCaptureCanvas;
        });
        return F.apply(this, arguments);
    }
    const O = (()=>{
        function t() {
            this.name = "base";
            this.captureInitState = M.Uninitialized;
            this.captureInitResolvable = null;
            const t = o("WAWebABProps").getABPropConfigValue("web_voip_video_capture_impl");
            const n = w.cast(t) ?? w.DEFAULT;
            this.captureImplementation = n === w.CANVAS_CPU ? new (o("WAWebVoipVideoCaptureCanvas")).WAWebVoipVideoCaptureCanvas : n === w.OFF_THREAD_MSTP ? new (o("WAWebVoipVideoCaptureOffThread")).WAWebVoipVideoCaptureOffThread : n === w.CANVAS_WEBGL ? new (o("WAWebVoipVideoCaptureWebGL")).WAWebVoipVideoCaptureWebGL : n === w.CANVAS_WEBGPU ? new (o("WAWebVoipVideoCaptureWebGPU")).WAWebVoipVideoCaptureWebGPU : A();
        }
        const t_prototype = t.prototype;
        t_prototype.__cleanup = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const t = `voip: cleanupVideoCapture (${this.name})`;
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ""
                ])), t);
                try {
                    const n = yield this.captureImplementation;
                    yield n.stopVideoCapture();
                    this.captureInitState = M.Uninitialized;
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: cleanupCapture completed successfully"
                    ])));
                } catch (error) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " error: ",
                        ""
                    ])), t, error);
                }
            });
            function r() {
                return t.apply(this, arguments);
            }
            return r;
        })();
        t_prototype.__startCapture = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                const { getMediaStream, height, isStopped, maxFps, onVideoDataFnType, width } = e;
                const L = `voip: wasm: [AV:startCapture (${this.name})]`;
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ""
                ])), L);
                const E = o("WAWebVoipWebCodecsEncoderState").isWebCodecsEncoderEnabled();
                const enableWebCodecsEncoderOutputWatchdog = E && o("WAWebABProps").getABPropConfigValue("enable_webcodec_video_encoder_output_watchdog");
                if (this.captureInitState !== M.Uninitialized && (o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " cleaning up existing capture (state=",
                    ")"
                ])), L, this.captureInitState), yield this.__cleanup(), isStopped?.() === true)) {
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " stop began during cleanup, not acquiring"
                    ])), L);
                    return;
                }
                if (E && !(this.captureImplementation instanceof o("WAWebVoipVideoCaptureOffThread").WAWebVoipVideoCaptureOffThread)) {
                    const D = this.captureImplementation instanceof (N || (N = n("Promise"))) ? "pending-async" : this.captureImplementation?.constructor?.name ?? "unknown";
                    o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [webcodec-encode] capture->OffThread (was ",
                        ")"
                    ])), D);
                    this.captureImplementation = new (o("WAWebVoipVideoCaptureOffThread")).WAWebVoipVideoCaptureOffThread;
                } else {
                    if (E) {
                        o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [webcodec-encode] reusing existing OffThread instance"
                        ])));
                    }
                }
                const x = new (o("WAResolvable")).Resolvable;
                this.captureInitState = M.Initializing;
                this.captureInitResolvable = x;
                x.promise.catch(r("WAWebNoop"));
                let stream = null;
                try {
                    stream = yield getMediaStream();
                    if (stream == null) {
                        throw new B;
                    }
                    if (this.captureInitResolvable !== x) {
                        o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " superseded by newer capture, releasing stream"
                        ])), L);
                        return;
                    }
                    if (isStopped?.() === true) {
                        o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " stop began while acquiring, releasing stream"
                        ])), L);
                        this.captureInitState = M.Uninitialized;
                        x.resolve();
                        return;
                    }
                    o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " got video media stream"
                    ])), L);
                    const w = yield this.captureImplementation;
                    const A = 10000;
                    let F = null;
                    const O = w.startVideoCapture({
                        stream,
                        onVideoDataFnType,
                        width,
                        height,
                        maxFps,
                        enableWebCodecsEncoderOutputWatchdog
                    });
                    O.catch(r("WAWebNoop"));
                    yield (N || (N = n("Promise"))).race([
                        O,
                        new N(function(e, t) {
                            F = self.setTimeout(function() {
                                t(r("err")(`startVideoCapture timed out after ${A}ms`));
                            }, A);
                        })
                    ]).finally(()=>{
                        if (F != null) {
                            self.clearTimeout(F);
                        }
                    });
                    stream = null;
                    this.captureInitState = M.Ready;
                    this.captureInitResolvable?.resolve();
                    o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " video capture prepared successfully"
                    ])), L);
                } catch (error) {
                    if (error instanceof B) {
                        o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: wasm: [AV:startCapture (",
                            ")] no media stream acquired"
                        ])), this.name);
                    } else {
                        o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " error: ",
                            ""
                        ])), L, error).sendLogs("voip: wasm: error in startVideoCaptureJSImpl");
                    }
                    this.captureInitState = M.Error;
                    try {
                        yield this.__cleanup();
                    } finally{
                        x.reject(error);
                    }
                } finally{
                    if (stream != null) {
                        o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: wasm: [AV:startCapture (",
                            ")] safety net: releasing ",
                            " orphaned track(s)"
                        ])), this.name, stream.getTracks().length);
                        stream.getTracks().forEach((e)=>{
                            o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: wasm: [AV:startCapture (",
                                ")] safety net: stopping ",
                                " track (readyState=",
                                ")"
                            ])), t.name, e.kind, e.readyState);
                            e.stop();
                        });
                    }
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.stopCapture = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e = false) {
                const t = `voip: wasm: [AV:stopCapture (${this.name})]`;
                o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ""
                ])), t);
                if (!e && this.captureInitState === M.Uninitialized && this.captureInitResolvable == null) {
                    o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " already stopped, skipping"
                    ])), t);
                    return;
                }
                try {
                    if (!e && this.captureInitState !== M.Ready && this.captureInitState !== M.Error) {
                        o("WALogger").WARN(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " invalid initialization. state = ",
                            ". Waiting for init..."
                        ])), t, this.captureInitState);
                        yield this.captureInitResolvable?.promise;
                        o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " init complete. Cleaning up capture"
                        ])), t);
                    }
                } catch (error) {
                    if (error instanceof B) {
                        o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: wasm: [AV:stopCapture (",
                            ")] no stream, cleanup"
                        ])), this.name);
                    } else {
                        throw error;
                    }
                }
                try {
                    yield this.__cleanup();
                    this.captureInitResolvable = null;
                    o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " completed successfully"
                    ])), t);
                } catch (error) {
                    o("WALogger").ERROR(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " error: ",
                        ""
                    ])), t, error);
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })();
    var B = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    l.CaptureInitState = M;
    l.WAWebVoipVideoCaptureBase = O;
}, 98);