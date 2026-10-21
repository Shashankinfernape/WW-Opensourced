__d("WAWebVoipVideoCaptureOffThread", [
    "$InternalEnum",
    "Promise",
    "WALogger",
    "WAWebUA",
    "WAWebVoipJsWorkerThread",
    "WAWebVoipMediaEnums",
    "WAWebVoipPopoutWindowState",
    "WAWebVoipPthreadHardening",
    "WAWebVoipPthreadWorkerFields",
    "WAWebVoipVideoFrameConsumedSignal",
    "WAWebVoipVideoFrameCtor",
    "WAWebVoipVideoRendererInterface",
    "WAWebVoipWebCodecsEncoderState",
    "asyncToGeneratorRuntime",
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
    let M;
    let w;
    let A;
    let F;
    let O;
    let B;
    let W;
    let q;
    let U;
    let V;
    let H;
    let G;
    let z;
    let j;
    let K;
    let Q;
    let X;
    let Y;
    let J;
    let Z;
    let ee;
    let te;
    function ne(e, ...n) {
        self.WhatsAppVoipWasmWorkerCompatibleCallbacks.loggingCallback({
            level: 3,
            message: String.raw({
                raw: e
            }, ...n)
        });
    }
    function re(e, ...n) {
        self.WhatsAppVoipWasmWorkerCompatibleCallbacks.loggingCallback({
            level: 1,
            message: String.raw({
                raw: e
            }, ...n)
        });
    }
    const level = 2;
    function ae(e, ...n) {
        self.WhatsAppVoipWasmWorkerCompatibleCallbacks.loggingCallback({
            level,
            message: String.raw({
                raw: e
            }, ...n)
        });
    }
    const ie = "orientation";
    function le(e, t, n) {
        if (o("WAWebVoipPthreadHardening").isVoipWorkerLifecycleHardeningEnabled()) {
            e.worker.postMessage(babelHelpers.extends({
                type: "cmd",
                cmd: "jsWorkerCmd"
            }, t), n);
            return;
        }
        e.worker.postMessage(babelHelpers.extends({
            type: "jsWorkerCmd"
        }, t), n);
    }
    const se = n("$InternalEnum").Mirrored([
        "Uninitialized",
        "Initializing",
        "Ready",
        "Error"
    ]);
    const ue = (()=>{
        function t() {
            this.thread = null;
            this.track = null;
            this.$1 = null;
            this.$2 = null;
            this.$3 = null;
            this.$4 = 0;
            this.$5 = false;
            this.$6 = 0;
            this.$7 = 0;
            this.$8 = false;
            this.$9 = null;
            this.$10 = false;
            this.$11 = true;
            this.$12 = null;
            this.$13 = null;
            this.$14 = null;
            this.$15 = null;
            this.$16 = null;
            this.$17 = false;
            this.$18 = false;
            this.$19 = 0;
            this.$20 = -1;
            this.$21 = -1;
            this.$22 = 0;
        }
        const t_prototype = t.prototype;
        t_prototype.startVideoCapture = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                let n;
                const a = this;
                const t_enableWebCodecsEncoderOutputWatchdog = t.enableWebCodecsEncoderOutputWatchdog;
                const enableWebCodecsEncoderOutputWatchdog = t_enableWebCodecsEncoderOutputWatchdog === undefined ? false : t_enableWebCodecsEncoderOutputWatchdog;
                const { height, maxFps, onVideoDataFnType, stream, width } = t;
                const k = "voip: wasm: [AV:startVideoCapture (offthread)]";
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ""
                ])), k);
                const I = this.$1;
                if (I != null) {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " waiting for a stop in flight"
                    ])), k);
                    yield I;
                }
                const T = {
                    width,
                    height,
                    maxFps
                };
                const useWebCodecsEncoder = o("WAWebVoipWebCodecsEncoderState").isWebCodecsEncoderEnabled();
                const x = onVideoDataFnType === "onDesktopCaptureDataFromJs";
                const $ = useWebCodecsEncoder && o("WAWebUA").UA.isSafari && x;
                const P = useWebCodecsEncoder && !$;
                this.$8 = P && !x;
                const capturePath = ((e)=>{
                    if ((typeof e === "object" && e !== null || typeof e === "function") && e.useVideoElementCapture === true) {
                        return o("WAWebVoipMediaEnums").VideoCapturePath.VideoElementWebCodecs;
                    }
                    if ((typeof e === "object" && e !== null || typeof e === "function") && e.useVideoElementCapture === false && e.useWebCodecsEncoder === true) {
                        return o("WAWebVoipMediaEnums").VideoCapturePath.WorkerWebCodecs;
                    }
                    return o("WAWebVoipMediaEnums").VideoCapturePath.WorkerRaw;
                })({
                    useVideoElementCapture: P,
                    useWebCodecsEncoder
                });
                const M = "requestVideoFrameCallback" in HTMLVideoElement.prototype;
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " capture path: webcodecs=",
                    " outputWatchdog=",
                    " videoElement=",
                    " presentationOrientationFix=",
                    " safariScreenShareWorkerMSTP=",
                    " rVFC=",
                    " MSTP=",
                    ""
                ])), k, String(useWebCodecsEncoder), String(enableWebCodecsEncoderOutputWatchdog), String(P), String(this.$8), String($), String(M), String(!P && "MediaStreamTrackProcessor" in window));
                this.track = stream.getVideoTracks()[0];
                const w = (n = this.track) == null || n.getSettings == null ? undefined : n.getSettings();
                const A = w?.height;
                const F = w?.width;
                const O = w?.facingMode;
                const isBackCamera = O === "environment";
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " got video track, facingMode=",
                    ""
                ])), k, O ?? "unknown");
                let captureObject = null;
                if (P) {
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " using video-element capture (WebCodecs)"
                    ])), k);
                } else if (!$ && "MediaStreamTrackProcessor" in window) {
                    const q = this.track;
                    if (q == null) {
                        o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " track is null when creating MediaStreamTrackProcessor"
                        ])), k).sendLogs("voip: off-thread: track null for processor");
                        return;
                    }
                    captureObject = {
                        readable: yield new MediaStreamTrackProcessor({
                            track: q
                        }).readable
                    };
                    o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " (Chrome) got MediaStreamTrackProcessor readable"
                    ])), k);
                } else {
                    const U = this.track;
                    if (U == null) {
                        o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " track is null for Safari capture path"
                        ])), k).sendLogs("voip: off-thread: track null for safari");
                        return;
                    }
                    captureObject = {
                        track: U
                    };
                    this.track = null;
                }
                const V = yield r("WAWebVoipJsWorkerThread").create();
                this.thread = V;
                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " Created worker thread"
                ])), k);
                this.$6 = width;
                this.$7 = height;
                this.$4 = 0;
                this.$5 = false;
                o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " requested=",
                    "x",
                    " actualTrack=",
                    "x",
                    " isBackCamera=",
                    ""
                ])), k, this.$6, this.$7, String(F ?? "na"), String(A ?? "na"), String(isBackCamera));
                const initialOrientationValue = o("WAWebVoipMediaEnums").computeVideoOrientation(0, isBackCamera);
                o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " initial device orientation: ",
                    ""
                ])), k, initialOrientationValue);
                le(V, {
                    jsWorkerCmd: "startVideoCapture",
                    params: T,
                    captureObject,
                    onVideoDataFnType,
                    useWebCodecsEncoder,
                    videoElementCapture: P,
                    enableWebCodecsEncoderOutputWatchdog,
                    normalizeVideoElementPresentationFrames: this.$8,
                    initialOrientationValue,
                    isScreenShare: x,
                    interruptCaptureOnStop: o("WAWebVoipPthreadHardening").isVoipWorkerLifecycleHardeningEnabled()
                }, captureObject != null ? Object.values(captureObject) : []);
                o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " Sent startVideoCapture message to worker thread"
                ])), k);
                const G = function() {
                    const orientationValue = o("WAWebVoipMediaEnums").computeVideoOrientation(a.$4, isBackCamera);
                    const globalThis_screen = globalThis.screen;
                    const c = globalThis_screen != null ? globalThis_screen[ie] : null;
                    const d = c?.angle;
                    const m = a.$9?.videoHeight;
                    const p = a.$9?.videoWidth;
                    const diagnostics = {
                        actualTrackHeight: typeof A === "number" ? A : null,
                        actualTrackWidth: typeof F === "number" ? F : null,
                        capturePath,
                        isBackCamera,
                        isScreenShare: x,
                        maxTouchPoints: globalThis.navigator?.maxTouchPoints ?? 0,
                        requestedHeight: a.$7,
                        requestedWidth: a.$6,
                        screenAngle: typeof d === "number" ? d : null,
                        screenType: c?.type ?? null,
                        sensorOffset: a.$4,
                        videoHeight: typeof m === "number" && m > 0 ? m : null,
                        videoWidth: typeof p === "number" && p > 0 ? p : null
                    };
                    o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " [orient] screenAngle=",
                        " screenType=",
                        " sent=",
                        " sensorOffset=",
                        " isBackCamera=",
                        " capturePath=",
                        ""
                    ])), k, String(d), diagnostics.screenType ?? "unknown", orientationValue, a.$4, String(isBackCamera), capturePath);
                    le(V, {
                        jsWorkerCmd: "updateDeviceOrientation",
                        diagnostics,
                        orientationValue
                    });
                };
                this.$3 = G;
                window.addEventListener("orientationchange", G);
                try {
                    const z = globalThis.screen;
                    const j = z != null ? z[ie] : null;
                    j?.addEventListener("change", G);
                } catch (e) {}
                G();
                if (this.$2 != null) {
                    this.$2();
                }
                if (useWebCodecsEncoder) {
                    this.$2 = o("WAWebVoipWebCodecsEncoderState").subscribeToEncodeParamsChanges(function(e) {
                        le(V, {
                            jsWorkerCmd: "updateWebCodecsEncodeParams",
                            params: e
                        });
                    });
                    const K = o("WAWebVoipWebCodecsEncoderState").getAllWebCodecsEncodeParams();
                    for (const [X, Y] of K){
                        o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " seeding encode params for stream ",
                            ": ",
                            "x",
                            " ",
                            "bps ",
                            "fps"
                        ])), k, X, Y.targetWidth, Y.targetHeight, Y.targetBitrateBps, Y.targetFps);
                        le(V, {
                            jsWorkerCmd: "updateWebCodecsEncodeParams",
                            params: Y
                        });
                    }
                }
                if (P) {
                    this.$23(stream, V, M, isBackCamera);
                }
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        t_prototype.$23 = function(t, n, r, a) {
            const s = this;
            const u = "voip: [AV:videoElementCapture]";
            this.$10 = false;
            this.$11 = true;
            this.$17 = false;
            this.$18 = false;
            this.$20 = -1;
            this.$21 = -1;
            this.$22 = 0;
            if (this.$9 != null) {
                this.$9.srcObject = null;
                this.$9.remove();
                this.$9 = null;
            }
            const c = o("WAWebVoipPopoutWindowState").getPopoutWindow()?.document ?? null;
            const d = c ?? document;
            const m = d.createElement("video");
            o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " video element owner: ",
                ""
            ])), u, c != null ? "popout" : "main");
            m.srcObject = t;
            m.autoplay = true;
            m.muted = true;
            m.playsInline = true;
            m.setAttribute("aria-hidden", "true");
            m.style.cssText = "position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;pointer-events:none;";
            const p = d.body ?? document.body;
            if (p == null) {
                o("WALogger").ERROR(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " no document body to host capture video; first-frame may stall"
                ])), u).sendLogs("voip-offthread-capture-no-body");
            } else {
                p.appendChild(m);
            }
            this.$9 = m;
            m.addEventListener("loadedmetadata", function() {
                s.$4 = o("WAWebVoipMediaEnums").detectSensorOffset({
                    trackHeight: s.$7,
                    trackWidth: s.$6,
                    videoElHeight: m.videoHeight,
                    videoElWidth: m.videoWidth
                });
                s.$5 = true;
                o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [orient] sensorOffset cached: ",
                    " track=",
                    "x",
                    " videoEl=",
                    "x",
                    ""
                ])), s.$4, s.$6, s.$7, m.videoWidth, m.videoHeight);
                if (s.$3 != null) {
                    s.$3();
                }
            }, {
                once: true
            });
            m.addEventListener("resize", function() {
                if (s.$3 != null) {
                    s.$3();
                }
            });
            if (this.$12 != null) {
                this.$12();
            }
            this.$12 = o("WAWebVoipVideoFrameConsumedSignal").subscribeToVideoFrameConsumed(function() {
                s.$11 = true;
            });
            const _ = 33;
            const f = ++this.$19;
            const g = (t)=>{
                if (!(s.$10 || t !== s.$19) && (s.$24(m, n, a), !(s.$10 || t !== s.$19))) {
                    const e = document.visibilityState === "visible";
                    const i = o("WAWebVoipPopoutWindowState").getIsPopoutWindowActiveAndVisible();
                    const l = e || i;
                    const u = c != null ? i : e;
                    if (r && u) {
                        m.requestVideoFrameCallback(function(e, n) {
                            const n_presentationTime = n.presentationTime;
                            s.$20 = typeof n_presentationTime === "number" ? n_presentationTime : -1;
                            const n_captureTime = n.captureTime;
                            s.$21 = typeof n_captureTime === "number" ? n_captureTime : -1;
                            g(t);
                        });
                    } else if (l) {
                        let d;
                        s.$20 = -1;
                        s.$21 = -1;
                        const p = i && (d = o("WAWebVoipPopoutWindowState").getPopoutWindow()) != null ? d : window;
                        p.requestAnimationFrame(function() {
                            return g(t);
                        });
                    } else {
                        s.$20 = -1;
                        s.$21 = -1;
                        s.$16 = window.setTimeout(function() {
                            return g(t);
                        }, _);
                    }
                }
            };
            const h = function() {
                o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " video element playing, rVFC=",
                    ""
                ])), u, String(r));
                g(f);
            };
            this.$14 = function() {
                const e = document.visibilityState === "visible";
                o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " visibility changed: ",
                    ""
                ])), u, e ? "visible" : "hidden");
                s.$20 = -1;
                s.$21 = -1;
                if (s.$16 != null) {
                    window.clearTimeout(s.$16);
                    s.$16 = null;
                }
                const t = ++s.$19;
                if (!s.$10) {
                    g(t);
                }
            };
            document.addEventListener("visibilitychange", this.$14);
            this.$15 = function(e) {
                o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " popout visibility changed: ",
                    " active=",
                    " hasWindow=",
                    ""
                ])), u, e.visibilityState, String(e.isCallActiveInPopoutWindow), String(e.hasPopoutWindow));
                s.$20 = -1;
                s.$21 = -1;
                if (s.$16 != null) {
                    window.clearTimeout(s.$16);
                    s.$16 = null;
                }
                const t = ++s.$19;
                if (!s.$10) {
                    g(t);
                }
            };
            o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.on("popoutWindowVisibilityChanged", this.$15);
            m.play().then(h, (e)=>{
                o("WALogger").ERROR(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " video element play failed, retrying: ",
                    ""
                ])), u, e);
                s.$13 = window.setTimeout(function() {
                    s.$13 = null;
                    if (!s.$10) {
                        m.play().then(h, (e)=>{
                            o("WALogger").ERROR(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                " play retry failed, no frames: ",
                                ""
                            ])), u, e);
                        });
                    }
                }, 500);
            });
        };
        t_prototype.$24 = function(t, n, a) {
            if (this.$11 && !(t.readyState < t.HAVE_CURRENT_DATA || t.videoWidth === 0 || t.videoHeight === 0)) {
                try {
                    let i = window.performance;
                    try {
                        const s = t.ownerDocument.defaultView;
                        i = s?.performance ?? window.performance;
                    } catch (error) {
                        if (!this.$17) {
                            o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:capture-skew] owner-window performance unavailable, using main window performance: ",
                                ""
                            ])), error);
                            this.$17 = true;
                        }
                    }
                    const u = i.now();
                    const c = i.timeOrigin;
                    const d = typeof c === "number" && c > 0;
                    const m = d ? c : Date.now() - u;
                    if (!d && !this.$18) {
                        o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:capture-skew] performance.timeOrigin unavailable, using Date.now fallback"
                        ])));
                        this.$18 = true;
                    }
                    let p = u;
                    let _ = "construct";
                    if (this.$21 > 0) {
                        p = this.$21;
                        _ = "capture";
                    } else if (this.$20 > 0) {
                        p = this.$20;
                        _ = "presentation";
                    }
                    const f = m + p;
                    const g = r("WAWebVoipVideoFrameCtor")();
                    if (g == null) {
                        return;
                    }
                    const frame = new g(t, {
                        timestamp: Math.round(f * 1000)
                    });
                    const y = globalThis.screen;
                    const C = y != null ? y[ie] : null;
                    const b = C?.angle;
                    const v = Pe(frame);
                    const frameMetadata = this.$8 ? {
                        fallbackOrientation: o("WAWebVoipMediaEnums").computeVideoOrientationForAngle(this.$4, a, typeof b === "number" ? b : null),
                        frameRotation: 0,
                        screenAngle: typeof b === "number" ? b : null,
                        screenType: C?.type ?? null,
                        sensorOffsetInitialized: this.$5
                    } : undefined;
                    this.$22++;
                    if (frameMetadata != null && this.$22 <= 3) {
                        o("WALogger").LOG($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [orient_pretransfer_v1] frame=",
                            "x",
                            " frameRot=",
                            " rawFrameRot=",
                            " fallback=",
                            " screenAngle=",
                            " screenType=",
                            " sensorReady=",
                            " normalize=",
                            ""
                        ])), frame.displayWidth, frame.displayHeight, String(frameMetadata.frameRotation ?? "na"), String(v ?? "na"), frameMetadata.fallbackOrientation, String(frameMetadata.screenAngle ?? "na"), frameMetadata.screenType ?? "na", frameMetadata.sensorOffsetInitialized ? 1 : 0, this.$8 ? 1 : 0);
                    }
                    if (this.$22 % 150 === 0) {
                        const k = this.$20 > 0 ? `${(u - this.$20).toFixed(1)}ms` : "n/a";
                        const I = this.$21 > 0 ? `${(u - this.$21).toFixed(1)}ms` : "n/a";
                        o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:capture-skew] video frame#",
                            " presentToConstruct=",
                            " captureToConstruct=",
                            " tsSource=",
                            " tsEpochMs=",
                            " nowMs=",
                            ""
                        ])), this.$22, k, I, _, f.toFixed(2), u.toFixed(2));
                    }
                    this.$11 = false;
                    le(n, {
                        jsWorkerCmd: "deliverVideoFrame",
                        frame,
                        frameMetadata
                    }, [
                        frame
                    ]);
                } catch (error) {
                    o("WALogger").ERROR(N || (N = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:videoElementCapture] frame capture failed, stopping loop: ",
                        ""
                    ])), error);
                    this.$10 = true;
                }
            }
        };
        t_prototype.stopVideoCapture = function() {
            const e = this;
            if (!o("WAWebVoipPthreadHardening").isVoipWorkerLifecycleHardeningEnabled()) {
                return this.$25();
            }
            const t = this.$1;
            if (t != null) {
                return t;
            }
            var n = this.$25().finally(()=>{
                if (e.$1 === n) {
                    e.$1 = null;
                }
            });
            this.$1 = n;
            return n;
        };
        t_prototype.$25 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = "voip: stopVideoCapture (offthread)";
                o("WALogger").LOG(M || (M = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ""
                ])), e);
                this.$10 = true;
                this.$5 = false;
                if (this.$9 != null) {
                    this.$9.srcObject = null;
                    this.$9.remove();
                    this.$9 = null;
                }
                if (this.$12 != null) {
                    this.$12();
                    this.$12 = null;
                }
                if (this.$13 != null) {
                    window.clearTimeout(this.$13);
                    this.$13 = null;
                }
                if (this.$16 != null) {
                    window.clearTimeout(this.$16);
                    this.$16 = null;
                }
                if (this.$14 != null) {
                    document.removeEventListener("visibilitychange", this.$14);
                    this.$14 = null;
                }
                if (this.$15 != null) {
                    o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.off("popoutWindowVisibilityChanged", this.$15);
                    this.$15 = null;
                }
                const t = this.$3;
                if (t != null) {
                    window.removeEventListener("orientationchange", t);
                    try {
                        screen?.orientation?.removeEventListener("change", t);
                    } catch (e) {}
                    this.$3 = null;
                }
                if (this.$2 != null) {
                    this.$2();
                    this.$2 = null;
                }
                if (!o("WAWebVoipPthreadHardening").isVoipWorkerLifecycleHardeningEnabled()) {
                    yield this.$26();
                    return;
                }
                if (this.track != null) {
                    this.track.stop();
                    this.track = null;
                }
                yield this.$27();
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$27 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const thread = this.thread;
                if (thread != null) {
                    this.thread = null;
                    const t = ()=>(te || (te = n("Promise"))).resolve().then(()=>thread.joinJsWorkerThread()).catch((e)=>{
                            o("WALogger").WARN(w || (w = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: stopVideoCapture (offthread) join failed: ",
                                ""
                            ])), String(e));
                        });
                    try {
                        le(thread, {
                            jsWorkerCmd: "stopVideoCapture"
                        });
                    } catch (error) {
                        o("WALogger").WARN(A || (A = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: stopVideoCapture (offthread) could not post stop: ",
                            ""
                        ])), String(error));
                    }
                    if (!o("WAWebVoipPthreadWorkerFields").isPthreadWorkerLoaded(thread.worker)) {
                        o("WALogger").LOG(F || (F = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: stopVideoCapture (offthread) worker never loaded; not waiting for the join"
                        ])));
                        t();
                        return;
                    }
                    yield t();
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$26 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                try {
                    if (this.thread != null) {
                        const e = this.thread;
                        le(e, {
                            jsWorkerCmd: "stopVideoCapture"
                        });
                        yield e.joinJsWorkerThread();
                        this.thread = null;
                    }
                } finally{
                    if (this.track != null) {
                        this.track.stop();
                        this.track = null;
                    }
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })();
    let ce = false;
    let de = false;
    let me = [];
    let pe = null;
    let _e = null;
    const fe = 0;
    let ge = 1;
    let he = {
        actualTrackHeight: null,
        actualTrackWidth: null,
        capturePath: o("WAWebVoipMediaEnums").VideoCapturePath.Unknown,
        isBackCamera: false,
        isScreenShare: false,
        maxTouchPoints: 0,
        requestedHeight: fe,
        requestedWidth: fe,
        screenAngle: null,
        screenType: null,
        sensorOffset: 0,
        videoHeight: null,
        videoWidth: null
    };
    let ye = 0;
    let Ce = null;
    function be(e, t) {
        if (e !== ge) {
            ne(O || (O = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [orient] worker orientation changed: ",
                " -> ",
                ""
            ])), ge, e);
        }
        ge = e;
        if (t != null) {
            he = t;
        }
    }
    const ve = new Map;
    function Se() {
        return ce;
    }
    function Re() {
        return de;
    }
    function Le(e) {
        de = e;
    }
    function Ee(e) {
        ce = e;
        if (e) {
            const t = me;
            me = [];
            t.forEach((e)=>e());
        }
    }
    function ke() {
        if (ce) {
            return (te || (te = n("Promise"))).resolve();
        }
        return new (te || (te = n("Promise")))(function(e) {
            me.push(e);
        });
    }
    function Ie(e, t) {
        pe = e;
        _e = t;
    }
    function Te() {
        pe = null;
        _e = null;
    }
    function De() {
        return ge;
    }
    function xe(e) {
        ge = e;
    }
    function $e(e, t, n, r) {
        const p = he;
        const _ = r?.screenAngle ?? p.screenAngle;
        const f = r?.screenType ?? p.screenType;
        if (!(p.capturePath === o("WAWebVoipMediaEnums").VideoCapturePath.Unknown || p.isScreenShare || p.requestedHeight === fe || p.requestedWidth === fe)) {
            const g = [
                t.frameRotation,
                t.orientation,
                t.source,
                n,
                p.isBackCamera,
                p.maxTouchPoints,
                _,
                f,
                p.sensorOffset
            ].join("|");
            const h = Date.now();
            const y = g !== Ce;
            const hasLoggedSnapshot = Ce != null;
            if (o("WAWebVoipMediaEnums").shouldLogOrientationDiagnostics({
                elapsedMsSinceLastLog: h - ye,
                hasLoggedSnapshot,
                orientationStateChanged: y
            })) {
                Ce = g;
                ye = h;
                const b = p.capturePath;
                const v = t.source;
                const S = `voip: [orient_snapshot_v1] path=${b} frameRot=${String(t.frameRotation ?? "na")} fallback=${n} chosen=${t.orientation} source=${v} screenAngle=${String(_ ?? "na")} screenType=${f ?? "na"} sensorOffset=${p.sensorOffset} back=${p.isBackCamera ? 1 : 0} touchPoints=${p.maxTouchPoints} screenShare=${p.isScreenShare ? 1 : 0} requested=${p.requestedWidth}x${p.requestedHeight} actualTrack=${String(p.actualTrackWidth ?? "na")}x${String(p.actualTrackHeight ?? "na")} video=${String(p.videoWidth ?? "na")}x${String(p.videoHeight ?? "na")} format=${e.format ?? "na"} coded=${e.codedWidth}x${e.codedHeight} display=${e.displayWidth}x${e.displayHeight}`;
                if (y) {
                    ae(B || (B = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        ""
                    ])), S);
                } else {
                    ne(W || (W = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        ""
                    ])), S);
                }
            }
        }
    }
    function Pe({ rotation }) {
        if (typeof rotation === "number") {
            return rotation;
        }
        return null;
    }
    function Ne(e, t, n) {
        const a = t != null ? t.frameRotation : Pe(e);
        const i = n ?? t?.fallbackOrientation ?? ge;
        const l = o("WAWebVoipMediaEnums").resolveVideoFrameOrientation(a, i);
        $e(e, l, i, t);
        return l.orientation;
    }
    let Me = null;
    function we(e) {
        Me = e;
    }
    function Ae(e, t) {
        const n = Me;
        if (n == null) {
            e.close();
            return;
        }
        n(e, t).catch((e)=>{
            re(q || (q = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [webcodec-encode] deliverVideoFrame error: ",
                ""
            ])), e);
        }).finally(()=>{
            try {
                e.close();
            } catch (e) {}
            globalThis.postMessage({
                type: "waWasmWorkerCompatibleCallback",
                __name: "videoFrameConsumed"
            });
        });
    }
    function Fe(e) {
        return Oe.apply(this, arguments);
    }
    function Oe() {
        Oe = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ captureObject, initialOrientationValue, onVideoDataFnType, params, voipWasm }) {
            const u = "voip: wasm: [AV:startVideoCaptureInWorker]";
            const c = onVideoDataFnType === "onDesktopCaptureDataFromJs";
            try {
                const d = (width, height)=>{
                    ne(G || (G = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " raw frame size changed: ",
                        "x",
                        " -> ",
                        "x",
                        ""
                    ])), u, p, _, width, height);
                    p = width;
                    _ = height;
                    f = Math.floor(width * height * 1.5);
                    voipWasm._free(g);
                    g = voipWasm._malloc(f);
                    h = new Uint8Array(f);
                };
                const m = (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        try {
                            const t = o("WAWebVoipMediaEnums").formatEnumFromVideoFrameFormat(e.format);
                            if (t !== o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.NV12) {
                                throw r("err")(`Unsupported video frame format ${e.format ?? "null"}`);
                            }
                            const a = r("nullthrows")(e.visibleRect);
                            const { height, width } = a;
                            if (width !== p || height !== _) {
                                d(width, height);
                            }
                            const b = Ne(e, undefined, o("WAWebVoipMediaEnums").Orientation.Normal);
                            if (y < 3) {
                                y++;
                                ne(z || (z = babelHelpers.taggedTemplateLiteralLoose([
                                    "",
                                    " [orient] frame#",
                                    " orientation=",
                                    " frameSize=",
                                    "x",
                                    ""
                                ])), u, y, b, p, _);
                            }
                            yield e.copyTo(h);
                            voipWasm.GROWABLE_HEAP_U8().set(h, g);
                            voipWasm[onVideoDataFnType](g, f, p, _, params.maxFps, t, b);
                            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.onVideoFrameWasmToJs({
                                userJid: o("WAWebVoipVideoRendererInterface").selfPreviewJid,
                                frameBuffer: h.buffer,
                                width: p,
                                height: _,
                                format: t,
                                orientation: b,
                                timestamp: 0,
                                isKeyFrame: false,
                                isScreenShare: c
                            });
                        } catch (error) {
                            re(j || (j = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                " video processing error: ",
                                ""
                            ])), u, error);
                        }
                    });
                    return function(n) {
                        return e.apply(this, arguments);
                    };
                })();
                ne(V || (V = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ""
                ])), u);
                ce = false;
                if (initialOrientationValue != null) {
                    ge = initialOrientationValue;
                    ne(H || (H = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " initial orientation: ",
                        ""
                    ])), u, initialOrientationValue);
                }
                var p = params.width;
                var _ = params.height;
                var f = Math.floor(p * _ * 1.5);
                var g = voipWasm._malloc(f);
                var h = new Uint8Array(f);
                var y = 0;
                try {
                    const b = captureObject.readable || (yield new MediaStreamTrackProcessor({
                        track: captureObject.track
                    }).readable);
                    ne(K || (K = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " got MediaStreamTrackProcessor readable"
                    ])), u);
                    const v = b.getReader();
                    Ie(v, captureObject.track ?? null);
                    ne(Q || (Q = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " starting capture loop"
                    ])), u);
                    while(!ce){
                        const S = yield v.read();
                        const { done, value } = S;
                        try {
                            if (done || !value) {
                                Ee(true);
                                break;
                            }
                            yield m(value);
                        } finally{
                            if (value) {
                                value.close();
                            }
                        }
                    }
                } finally{
                    Te();
                    if (de) {
                        captureObject.track?.stop();
                    }
                    voipWasm._free(g);
                }
            } catch (error) {
                re(X || (X = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " video capture error: ",
                    ""
                ])), u, error);
            } finally{
                try {
                    voipWasm.exitJsWorkerThread();
                } catch (error) {
                    re(Y || (Y = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " exitJsWorkerThread error: ",
                        ""
                    ])), u, error);
                }
                ne(J || (J = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " exit capture worker thread"
                ])), u);
            }
        });
        return Oe.apply(this, arguments);
    }
    function Be() {
        return We.apply(this, arguments);
    }
    function We() {
        We = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = "voip: wasm: [AV:stopVideoCaptureInWorker]";
            ne(Z || (Z = babelHelpers.taggedTemplateLiteralLoose([
                "",
                ""
            ])), e);
            Ee(true);
            if (de) {
                qe(e);
            }
            ge = 1;
            he = {
                actualTrackHeight: null,
                actualTrackWidth: null,
                capturePath: o("WAWebVoipMediaEnums").VideoCapturePath.Unknown,
                isBackCamera: false,
                isScreenShare: false,
                maxTouchPoints: 0,
                requestedHeight: fe,
                requestedWidth: fe,
                screenAngle: null,
                screenType: null,
                sensorOffset: 0,
                videoHeight: null,
                videoWidth: null
            };
            ve.clear();
            ye = 0;
            Ce = null;
            ne(ee || (ee = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " completed successfully"
            ])), e);
        });
        return We.apply(this, arguments);
    }
    function qe(e) {
        const t = _e;
        if (t != null) {
            t.stop();
        }
        const n = pe;
        if (n != null) {
            n.cancel().catch((t)=>{
                ne(U || (U = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " reader cancel failed: ",
                    ""
                ])), e, String(t));
            });
        }
    }
    l.WORKER_LOG = ne;
    l.WORKER_ERROR = re;
    l.CaptureInitState = se;
    l.WAWebVoipVideoCaptureOffThread = ue;
    l.updateDeviceOrientationInWorker = be;
    l.encodedFrameOrientations = ve;
    l.getStopCapture = Se;
    l.getInterruptCaptureOnStop = Re;
    l.updateInterruptCaptureOnStop = Le;
    l.updateStopCapture = Ee;
    l.waitForStopCapture = ke;
    l.registerActiveCapture = Ie;
    l.clearActiveCapture = Te;
    l.getCurrentWorkerOrientation = De;
    l.updateCurrentWorkerOrientation = xe;
    l.getVideoFrameRotation = Pe;
    l.getFrameOrientation = Ne;
    l.registerCaptureAndEncodeFn = we;
    l.deliverVideoFrameToWorker = Ae;
    l.startVideoCaptureInWorker = Fe;
    l.stopVideoCaptureInWorker = Be;
}, 98);