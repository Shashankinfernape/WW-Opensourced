__d("WAWebVoipVideoRendererRegistry", [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebAudioDeviceEvents",
    "WAWebBackendApi",
    "WAWebVoipAVSyncController",
    "WAWebVoipAudioCaptureAndPlayback",
    "WAWebVoipAudioPlaybackState",
    "WAWebVoipGatingUtils",
    "WAWebVoipMediaEnums",
    "WAWebVoipPerfMeasurement",
    "WAWebVoipStackInterface",
    "WAWebVoipVideoDecodeOrderTracker",
    "WAWebVoipVideoOffThreadRendererStub",
    "WAWebVoipVideoRasterRenderer",
    "WAWebVoipVideoRenderSource",
    "WAWebVoipVideoRendererInterface",
    "WAWebVoipVideoWebCodecsRenderer",
    "WAWebVoipVideoWebGLRenderer",
    "WAWebVoipVideoWebGPURenderer",
    "WAWebVoipWindowMetrics",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
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
    const U = 30;
    const V = 5000;
    const H = 500;
    function G(e) {
        const r = e.wid?.toLogString() ?? "self";
        if (e.isScreenShare()) {
            return `${r} (screen share)`;
        }
        return r;
    }
    function z(e) {
        const t = Number.parseFloat(e);
        if (Number.isFinite(t)) {
            return Math.min(1, Math.max(0, t));
        }
        return 0;
    }
    const j = (()=>{
        function t() {
            this.$14 = new Map;
            this.$9 = new Map;
            this.$7 = new Map;
            this.$8 = new WeakSet;
            this.$32 = new Map;
            this.$1 = null;
            this.$3 = null;
            this.$44 = {
                brightness: 0,
                sharpening: 0
            };
            this.$46 = false;
            this.$47 = 0;
            this.$24 = new Map;
            this.$25 = new Set;
            this.$30 = new Map;
            this.$22 = new Map;
            this.$29 = new Map;
            this.$10 = new Set;
            this.$31 = new Set;
            this.$12 = new (o("WAWebVoipAVSyncController")).WAWebVoipAVSyncController;
            this.$26 = false;
            this.$49 = null;
            this.$5 = [];
            this.$16 = new Map;
            this.$19 = new Map;
            this.$36 = new Map;
            this.$35 = new Set;
            this.$34 = new Set;
            this.$50 = 0;
            this.$17 = new (o("WAWebVoipVideoDecodeOrderTracker")).WAWebVoipVideoDecodeOrderTracker;
            this.$41 = 0;
        }
        const t_prototype = t.prototype;
        t_prototype.init = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const t = this;
                try {
                    this.$1 = yield this.$2();
                } catch (error) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[VideoRendererRegistry] detection failed, fallback RASTER: ",
                        ""
                    ])), error);
                    this.$1 = o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType.RASTER;
                }
                this.$3 = this.$4(this.$1);
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[VideoRendererRegistry] init type=",
                    " mode=",
                    ""
                ])), this.$1, this.$3);
                if (this.$1 != null) {
                    o("WAWebVoipWindowMetrics").setRendererType(this.$1, this.$3);
                }
                if (this.$3 === o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererThreadingMode.MAIN_THREAD) {
                    o("WAWebVoipVideoWebCodecsRenderer").setFatalErrorCallback(function() {
                        return t.onDecoderFatalError();
                    });
                }
                if (this.$5.length > 0) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[VideoRendererRegistry] flushing ",
                        " pending"
                    ])), this.$5.length);
                    for (const n of this.$5){
                        const { canvas, portalMode } = n;
                        this.$6(canvas, portalMode);
                    }
                    this.$5 = [];
                }
            });
            function r() {
                return t.apply(this, arguments);
            }
            return r;
        })();
        t_prototype.getRendererType = function() {
            const e = this.$1;
            if (e == null) {
                throw r("err")("init() must be called before getRendererType");
            }
            return e;
        };
        t_prototype.registerVideoCanvas = function(t, n) {
            if (this.$1 == null || this.$3 == null) {
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[VideoRendererRegistry] init() pending, queuing canvas"
                ])));
                this.$5.push({
                    canvas: t,
                    portalMode: n
                });
                return;
            }
            this.$6(t, n);
        };
        t_prototype.assignSourceToCanvas = function({ canvas, mirror, source }) {
            const a = this.$7.get(canvas);
            if (a != null && a !== source) {
                o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[VideoRendererRegistry] reassign ",
                    " from ",
                    ""
                ])), source.key, a.key);
                this.unassignSourceFromCanvas(a, canvas);
            }
            if (a !== source) {
                this.$8.delete(canvas);
            }
            const i = this.$9.get(source);
            const l = i == null || i.size === 0;
            if (l && this.$10.delete(source)) {
                this.$11(source);
            }
            if (i) {
                i.set(canvas, mirror);
            } else {
                this.$9.set(source, new Map([
                    [
                        canvas,
                        mirror
                    ]
                ]));
            }
            this.$7.set(canvas, source);
            this.$12.removeParticipant(source);
            this.$13(source, "assign_canvas");
        };
        t_prototype.unassignSourceFromCanvas = function(t, n) {
            const e = this.$9.get(t);
            if (!(e == null || !e.has(n))) {
                e.delete(n);
                this.$7.delete(n);
                this.$8.delete(n);
                const r = this.$14.get(n);
                r?.reset();
                if (e.size === 0) {
                    this.$15(t);
                }
            }
        };
        t_prototype.unassignCanvas = function(t) {
            const e = this.$7.get(t);
            if (e != null) {
                this.unassignSourceFromCanvas(e, t);
            } else {
                o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: VideoRendererRegistry: Canvas not found in registry"
                ])));
            }
        };
        t_prototype.pauseRenderingForSource = function(t) {
            this.$16.set(t, false);
            this.$17.resetSource(t, window.performance.now());
            this.$18(t);
        };
        t_prototype.resumeRenderingForSource = function(t) {
            const e = this.$16.get(t);
            if (e != null) {
                this.$16.delete(t);
                if (e || this.$19.has(t)) {
                    this.$13(t, "resume_rendering");
                }
            }
        };
        t_prototype.onPeerVideoInactive = function(t) {
            this.$17.resetSource(t, window.performance.now());
        };
        t_prototype.$18 = function(t) {
            if (!(this.$1 !== o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType.WEBCODECS_H264 || o("WAWebABProps").getABPropConfigValue("enable_webcodec_require_keyframe") !== true)) {
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[VideoRendererRegistry] resetWebCodecs ",
                    " — await keyframe"
                ])), t.key);
                this.$17.resetSource(t, window.performance.now());
                this.$20(t);
            }
        };
        t_prototype.$20 = function(t) {
            this.$19.set(t, 0);
            const e = this.$9.get(t);
            if (e) {
                for (const [a] of e){
                    const i = this.$14.get(a);
                    if (i instanceof o("WAWebVoipVideoWebCodecsRenderer").WAWebVoipVideoWebCodecsRenderer || i instanceof r("WAWebVoipVideoOffThreadRendererStub")) {
                        i.requireKeyframe();
                    }
                }
            }
        };
        t_prototype.unregisterVideoCanvas = function(t) {
            this.unassignCanvas(t);
            this.$21(t);
            this.$5 = this.$5.filter((e)=>e.canvas !== t);
        };
        t_prototype.onVideoFrameWasmToJs = function(t, frameBuffer, r, a, i, l, s, u) {
            if (t.isSelf()) {
                o("WAWebVoipPerfMeasurement").endMeasurement(o("WAWebVoipPerfMeasurement").PerfMeasurement.FIRST_CAMERA_FRAME);
            } else {
                o("WAWebVoipPerfMeasurement").endMeasurement(o("WAWebVoipPerfMeasurement").PerfMeasurement.FIRST_PEER_FRAME);
            }
            const d = this.$22.get(t);
            if (d != null) {
                d.frameCount += 1;
                d.lastFrameTimestampMs = window.performance.now();
                d.lastWidth = r;
                d.lastHeight = a;
            } else {
                this.$22.set(t, {
                    frameCount: 1,
                    lastFrameTimestampMs: window.performance.now(),
                    lastWidth: r,
                    lastHeight: a
                });
            }
            const m = o("WAWebVoipMediaEnums").Orientation.cast(i) ?? o("WAWebVoipMediaEnums").Orientation.Normal;
            this.$23(t, m, r, a);
            const p = m === o("WAWebVoipMediaEnums").Orientation.Rotate90 || m === o("WAWebVoipMediaEnums").Orientation.Rotate270;
            const _ = p ? a : r;
            const f = p ? r : a;
            const g = this.$24.get(t);
            if (g == null || g.width !== _ || g.height !== f) {
                this.$24.set(t, {
                    width: _,
                    height: f
                });
                for (const h of this.$25){
                    h(t, _, f);
                }
            }
            const y = o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.cast(l) ?? o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.UNKNOWN;
            if (!t.isSelf() && !this.$26 && !this.$12.isEnabled()) {
                this.$27();
            }
            if (this.$12.isEnabled() && !t.isSelf()) {
                this.$12.enqueueVideoFrame({
                    source: t,
                    frameBuffer,
                    width: r,
                    height: a,
                    orientation: i,
                    format: y,
                    timestamp: s,
                    isKeyFrame: u
                });
                return;
            }
            this.$28(t, frameBuffer, r, a, i, y, s, u);
        };
        t_prototype.$23 = function(t, n, r, a) {
            const e = this.$29.get(t);
            const loggedAtMs = Date.now();
            const l = e == null || e.orientation !== n;
            if (o("WAWebVoipMediaEnums").shouldLogOrientationDiagnostics({
                elapsedMsSinceLastLog: e == null ? 0 : loggedAtMs - e.loggedAtMs,
                hasLoggedSnapshot: e != null,
                orientationStateChanged: l
            })) {
                this.$29.set(t, {
                    loggedAtMs,
                    orientation: n
                });
                const s = t.isSelf() ? 1 : 0;
                const u = n;
                if (l) {
                    o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [orient_render_v1] self=",
                        " orientation=",
                        " coded=",
                        "x",
                        ""
                    ])), s, u, r, a);
                } else {
                    o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [orient_render_v1] self=",
                        " orientation=",
                        " coded=",
                        "x",
                        ""
                    ])), s, u, r, a);
                }
            }
        };
        t_prototype.getVideoDimensions = function(t) {
            return this.$24.get(t) ?? null;
        };
        t_prototype.hasCanvasForSource = function(t) {
            const e = this.$9.get(t);
            return e != null && e.size > 0;
        };
        t_prototype.getDecodeStatsForSource = function(t) {
            return this.$22.get(t) ?? null;
        };
        t_prototype.getLastPaintTimestampMsForSource = function(t) {
            return this.$30.get(t) ?? null;
        };
        t_prototype.addVideoDimensionChangeListener = function(t) {
            const e = this;
            this.$25.add(t);
            return function() {
                e.$25.delete(t);
            };
        };
        t_prototype.hasReceivedFirstFrameForSource = function(t) {
            return this.$10.has(t);
        };
        t_prototype.resetFirstFrameReceivedForSource = function(t) {
            if (this.$10.delete(t)) {
                this.$11(t);
            }
        };
        t_prototype.addFirstFrameReceivedListener = function(t) {
            const e = this;
            this.$31.add(t);
            return function() {
                e.$31.delete(t);
            };
        };
        t_prototype.hasRenderedFirstFrameForCanvas = function(t) {
            return this.$8.has(t);
        };
        t_prototype.addFirstFrameRenderedListenerForCanvas = function(t, n) {
            const e = this;
            let r = this.$32.get(t);
            if (r == null) {
                r = new Set;
                this.$32.set(t, r);
            }
            r.add(n);
            return function() {
                r?.delete(n);
                if (r?.size === 0 && e.$32.get(t) === r) {
                    e.$32.delete(t);
                }
            };
        };
        t_prototype.$11 = function(t) {
            for (const e of this.$31){
                try {
                    e(t);
                } catch (error) {
                    o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: VideoRendererRegistry: firstFrameReceivedListener error: ",
                        ""
                    ])), error);
                }
            }
        };
        t_prototype.$33 = function(t) {
            if (!(!this.$7.has(t) || this.$8.has(t))) {
                this.$8.add(t);
                const n = Array.from(this.$32.get(t) ?? []);
                for (const r of n){
                    try {
                        r();
                    } catch (error) {
                        o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: VideoRendererRegistry: canvas first-frame listener error: ",
                            ""
                        ])), error);
                    }
                }
            }
        };
        t_prototype.onCanvasResize = function(t, n, r) {
            try {
                const e = this.$14.get(t);
                if (!e) {
                    return;
                }
                e.onCanvasResize(n, r);
            } catch (error) {
                o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: VideoRendererRegistry: onCanvasResize : ",
                    ""
                ])), error);
            }
        };
        t_prototype.setCoverFit = function(t, n) {
            try {
                const e = this.$14.get(t);
                if (!e) {
                    return;
                }
                e.setCoverFit(n);
            } catch (error) {
                o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: VideoRendererRegistry: setCoverFit : ",
                    ""
                ])), error);
            }
        };
        t_prototype.requestKeyFrameForCanvas = function(t) {
            const e = this.$7.get(t);
            if (e != null) {
                this.$13(e, "canvas_request");
            }
        };
        t_prototype.$13 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t = "unspecified") {
                const e_wid = e.wid;
                if (e_wid != null) {
                    if (!e_wid.isUser()) {
                        if (!this.$34.has(e)) {
                            this.$34.add(e);
                            o("WALogger").WARN(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: VideoRendererRegistry: keyframe request unsupported for non-user source=",
                                " reason=",
                                ""
                            ])), e.key, t).sendLogs("voip-keyframe-request-non-user-source");
                        }
                        return;
                    }
                    const a = Date.now();
                    if (!this.$35.has(e)) {
                        const i = this.$36.get(e);
                        if (!(i != null && a - i < H)) {
                            this.$35.add(e);
                            this.$36.set(e, a);
                            try {
                                const l = yield o("WAWebVoipStackInterface").getVoipStackInterface();
                                if (l?.type !== "web") {
                                    return;
                                }
                                const s = yield l.requestKeyFrame(e_wid, e.isScreenShare());
                                if (s !== 0) {
                                    o("WALogger").ERROR(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                                        "voip: VideoRendererRegistry: requestKeyFrameForSource failed: ",
                                        ""
                                    ])), s);
                                }
                            } catch (error) {
                                o("WALogger").ERROR(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                                    "voip: VideoRendererRegistry: requestKeyFrameForSource threw reason=",
                                    ""
                                ])), t).catching(r("getErrorSafe")(error)).sendLogs("voip-keyframe-request-threw", {
                                    sampling: 0.01
                                });
                            } finally{
                                this.$35.delete(e);
                            }
                        }
                    }
                }
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$28 = function(t, n, r, o, a, i, l, s) {
            const e = this.$9.get(t);
            if (e && !this.$37(t, r, o, s)) {
                const u = window.performance.now();
                this.$38(e, t, i, l, s, u);
                const c = this.$39(e, t, n, r, o, a, i, l, s);
                if (c) {
                    this.$30.set(t, u);
                    if (!t.isSelf()) {
                        this.$17.markRendered(t, u);
                    }
                }
                if (c && !this.$10.has(t)) {
                    this.$10.add(t);
                    this.$11(t);
                }
            }
        };
        t_prototype.$37 = function(t, n, r, a) {
            if (this.$16.has(t)) {
                if (a) {
                    this.$16.set(t, true);
                }
                return true;
            }
            const e = this.$19.get(t);
            if (e != null) {
                if (a) {
                    o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                        "[VideoRendererRegistry] keyframe rcvd ",
                        " after ",
                        " drops — resume"
                    ])), t.key, e);
                    this.$19.delete(t);
                } else {
                    if (e < U) {
                        this.$19.set(t, e + 1);
                        return true;
                    }
                    o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                        "[VideoRendererRegistry] keyframe timeout ",
                        " ",
                        " drops — reactive"
                    ])), t.key, U);
                    this.$19.delete(t);
                }
            }
            if (n % 2 !== 0 || r % 2 !== 0) {
                o("WALogger").ERROR(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                    "[VideoRendererRegistry] renderFrame: odd frame ",
                    "x",
                    ""
                ])), n, r);
                return true;
            }
            return false;
        };
        t_prototype.$38 = function(t, n, r, rtpTimestamp, i, nowMs) {
            if (!(n.isSelf() || r !== o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.H264 || !this.$40(t))) {
                if (this.$41 === 0) {
                    this.$42();
                }
                this.$41++;
                const e = this.$17.observe({
                    isKeyFrame: i,
                    nowMs,
                    rtpTimestamp,
                    source: n
                });
                const s = e.episodeStarted;
                if (s) {
                    o("WALogger").WARN(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: VideoRendererRegistry: out-of-order delta frame for ",
                        " ts=",
                        ", decoder reference chain broken until next keyframe"
                    ])), G(n), rtpTimestamp);
                }
            }
        };
        t_prototype.$42 = function() {
            const e = o("WAWebVoipGatingUtils").isAvSyncStrictFifoDrainEnabled() ? 1 : 0;
            this.$17.setOrderingMode(e);
            return e;
        };
        t_prototype.$40 = function(t) {
            for (const e of t.keys()){
                if (this.$14.has(e)) {
                    return true;
                }
            }
            return false;
        };
        t_prototype.$39 = function(t, n, frameBuffer, a, i, l, format, u, c) {
            let e = false;
            for (const [m, mirror] of t.entries()){
                const _ = this.$14.get(m);
                if (_) {
                    try {
                        _.renderFrame({
                            format,
                            frameBuffer,
                            height: i,
                            isKeyFrame: c,
                            mirror,
                            orientation: o("WAWebVoipMediaEnums").Orientation.cast(l) ?? o("WAWebVoipMediaEnums").Orientation.Normal,
                            timestamp: u,
                            width: a
                        });
                        e = true;
                    } catch (error) {
                        if (error instanceof o("WAWebVoipVideoWebCodecsRenderer").KeyFrameNeededError) {
                            this.$13(n, "renderer_need_keyframe");
                            continue;
                        }
                        o("WALogger").ERROR(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: VideoRendererRegistry: renderFrame: ",
                            ""
                        ])), error);
                    }
                }
            }
            return e;
        };
        t_prototype.$4 = function(t) {
            let e;
            if (r("WAWebVoipVideoOffThreadRendererStub").checkAvailability()) {
                if (t === o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType.WEBGL) {
                    e = o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererThreadingMode.POOLED_WORKERS;
                } else {
                    e = o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererThreadingMode.SINGLE_WORKER;
                }
            } else {
                e = o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererThreadingMode.MAIN_THREAD;
            }
            o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                "[VideoRendererRegistry] threadingMode=",
                " (compat)"
            ])), e);
            return e;
        };
        t_prototype.$2 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                let e;
                if (yield o("WAWebVoipVideoWebCodecsRenderer").WAWebVoipVideoWebCodecsRenderer.checkAvailability()) {
                    e = o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType.WEBCODECS_H264;
                } else if (yield r("WAWebVoipVideoWebGPURenderer").checkAvailability()) {
                    e = o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType.WEBGPU;
                } else if (r("WAWebVoipVideoWebGLRenderer").checkAvailability()) {
                    e = o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType.WEBGL;
                } else if (yield o("WAWebVoipVideoRasterRenderer").WAWebVoipVideoFrameRenderer.checkAvailability()) {
                    e = o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType.VIDEOFRAME;
                } else {
                    e = o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType.RASTER;
                }
                o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                    "[VideoRendererRegistry] rendererType=",
                    " (compat)"
                ])), e);
                return e;
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$6 = function(t, n) {
            try {
                if (this.$14.has(t)) {
                    throw r("err")("canvas already registered");
                }
                const a = this.$1;
                const threadingMode = this.$3;
                if (a == null || threadingMode == null) {
                    throw r("err")("init() must be called before registering canvases");
                }
                if (threadingMode !== o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererThreadingMode.MAIN_THREAD) {
                    o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose([
                        "[VideoRendererRegistry] offthread ",
                        " ",
                        " portal=",
                        ""
                    ])), a, threadingMode, n);
                    const l = new (r("WAWebVoipVideoOffThreadRendererStub"))({
                        canvas: t,
                        portalMode: n,
                        rendererType: a,
                        threadingMode
                    });
                    this.$14.set(t, l);
                    this.$43(t, l);
                    return;
                }
                const s = t.ownerDocument?.defaultView;
                const u = s != null && s !== self && typeof s.VideoDecoder === "function" ? s.VideoDecoder : undefined;
                const c = a === o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType.WEBCODECS_H264 ? new (o("WAWebVoipVideoWebCodecsRenderer")).WAWebVoipVideoWebCodecsRenderer(t, u) : a === o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType.WEBGPU ? new (r("WAWebVoipVideoWebGPURenderer"))(t) : a === o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType.WEBGL ? new (r("WAWebVoipVideoWebGLRenderer"))(t) : a === o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType.VIDEOFRAME ? new (o("WAWebVoipVideoRasterRenderer")).WAWebVoipVideoFrameRenderer(t) : new (o("WAWebVoipVideoRasterRenderer")).WAWebVoipVideoRasterRenderer(t);
                this.$14.set(t, c);
                this.$43(t, c);
            } catch (error) {
                o("WALogger").ERROR($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: VideoRendererRegistry: registerCanvasToRegistry: ",
                    ""
                ])), error);
            }
        };
        t_prototype.$43 = function(t, n) {
            const e = this;
            n.setRenderCallback(function() {
                e.$33(t);
            });
            n.setVideoEnhancement(this.$44.brightness, this.$44.sharpening);
            this.$45();
        };
        t_prototype.$45 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (!this.$46) {
                    this.$46 = true;
                    const e = this.$47;
                    try {
                        const t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
                        if (t?.type !== "web") {
                            return;
                        }
                        const r = yield (q || (q = n("Promise"))).all([
                            t.getVoipParam("options.video_brightness_setting"),
                            t.getVoipParam("options.video_sharpening_setting")
                        ]);
                        const a = r[0];
                        const i = r[1];
                        if (e !== this.$47) {
                            return;
                        }
                        const brightness = z(a);
                        const sharpening = z(i);
                        this.$44 = {
                            brightness,
                            sharpening
                        };
                        o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose([
                            "[VideoRendererRegistry] video enhancement brightness=",
                            " sharpening=",
                            ""
                        ])), brightness, sharpening);
                        for (const u of this.$14.values()){
                            u.setVideoEnhancement(brightness, sharpening);
                        }
                    } catch (error) {
                        o("WALogger").ERROR(N || (N = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: VideoRendererRegistry: loadVideoEnhancement failed: ",
                            ""
                        ])), error);
                    }
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.resetVideoEnhancementState = function() {
            this.$47++;
            this.$46 = false;
            this.$44 = {
                brightness: 0,
                sharpening: 0
            };
            this.$29.clear();
            for (const e of this.$14.values()){
                e.setVideoEnhancement(0, 0);
            }
        };
        t_prototype.reloadVideoEnhancement = function() {
            this.$47++;
            this.$46 = false;
            this.$45();
        };
        t_prototype.$48 = function(t, n) {
            const e = this;
            const strictFifoDrain = o("WAWebVoipGatingUtils").isAvSyncStrictFifoDrainEnabled();
            const a = this.$42();
            o("WALogger").LOG(M || (M = babelHelpers.taggedTemplateLiteralLoose([
                "voip: VideoRendererRegistry: enabling A/V sync, sampleRate=",
                " orderingMode=",
                ""
            ])), t, a);
            this.$12.enable(t, function(t, n, r, o, a, i, l, s) {
                e.$28(t, n, r, o, a, i, l, s);
            }, n, function(t) {
                o("WALogger").WARN(w || (w = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: VideoRendererRegistry: AV sync video reset for ",
                    ", requesting keyframe"
                ])), t.key);
                e.$18(t);
                e.$13(t, "av_sync_video_reset");
            }, {
                strictFifoDrain
            });
            this.$49 = function(t) {
                e.$12.reset();
            };
            o("WAWebAudioDeviceEvents").AudioDeviceEvents.on("speakerDeviceSelectionChanged", this.$49);
        };
        t_prototype.disableAVSync = function() {
            if (this.$12.isEnabled()) {
                o("WALogger").LOG(A || (A = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: VideoRendererRegistry: disabling A/V sync"
                ])));
                this.$12.disable();
            }
            const $49 = this.$49;
            if ($49 != null) {
                o("WAWebAudioDeviceEvents").AudioDeviceEvents.off("speakerDeviceSelectionChanged", $49);
                this.$49 = null;
            }
            this.$26 = false;
        };
        t_prototype.consumeAVSyncMetrics = function() {
            return this.$12.consumeMetrics();
        };
        t_prototype.peekPerParticipantAVSyncMetrics = function(t) {
            return this.$12.peekPerParticipantMetrics(t);
        };
        t_prototype.onDecoderFatalError = function() {
            this.$50++;
        };
        t_prototype.consumeWebCodecsFatalErrorCount = function() {
            const $50 = this.$50;
            this.$50 = 0;
            return $50;
        };
        t_prototype.consumeWebCodecsDecodeOrderMetrics = function() {
            const e = this.$17.consume(window.performance.now());
            const $41 = this.$41;
            this.$41 = 0;
            if ($41 === 0) {
                return null;
            }
            return e;
        };
        t_prototype.removeParticipantAVSync = function(t) {
            const e = window.performance.now();
            for (const n of [
                o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderStream.CAMERA,
                o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderStream.SCREEN_SHARE
            ]){
                const r = o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderSource.peer(t, n);
                this.$12.removeParticipant(r);
                this.$17.resetSource(r, e);
            }
        };
        t_prototype.$27 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                this.$26 = true;
                try {
                    const t = yield o("WAWebVoipAudioCaptureAndPlayback").waitForPlaybackStart(V);
                    if (!t) {
                        this.$26 = false;
                        o("WALogger").WARN(F || (F = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: VideoRendererRegistry: timed out waiting ",
                            "ms for audio playback start before enabling A/V sync"
                        ])), V);
                        return;
                    }
                    const n = yield o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm");
                    const r = o("WAWebVoipAudioPlaybackState").getPlaybackSampleRate() ?? 16000;
                    this.$48(r, function() {
                        const e = n.getAudioPlaybackTimestamp();
                        const t = o("WAWebVoipAudioCaptureAndPlayback").getEstimatedPlaybackOutputLagSamples();
                        return Math.max(0, e - t);
                    });
                } catch (error) {
                    this.$26 = false;
                    o("WALogger").ERROR(O || (O = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: VideoRendererRegistry: initAVSync failed: ",
                        ""
                    ])), error);
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$15 = function(t) {
            this.$51(t);
            if (this.$10.delete(t)) {
                this.$11(t);
            }
        };
        t_prototype.$51 = function(t) {
            this.$9.delete(t);
            this.$16.delete(t);
            this.$19.delete(t);
            this.$36.delete(t);
            this.$35.delete(t);
            this.$34.delete(t);
            this.$24.delete(t);
            this.$29.delete(t);
            this.$22.delete(t);
            this.$30.delete(t);
            this.$17.resetSource(t, window.performance.now());
        };
        t_prototype.$21 = function(t) {
            try {
                const e = this.$14.get(t);
                if (!e) {
                    return;
                }
                e.cleanup();
                this.$14.delete(t);
                this.$8.delete(t);
                this.$32.delete(t);
                const n = this.$7.get(t);
                if (n != null) {
                    this.$7.delete(t);
                    const r = this.$9.get(n);
                    if (r != null) {
                        r.delete(t);
                        if (r.size === 0) {
                            this.$51(n);
                            this.$10.delete(n);
                        }
                    }
                }
                o("WALogger").LOG(B || (B = babelHelpers.taggedTemplateLiteralLoose([
                    "[VideoRendererRegistry] unregister canvas, left=",
                    ""
                ])), this.$14.size);
            } catch (error) {
                o("WALogger").ERROR(W || (W = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: VideoRendererRegistry: unregisterCanvasFromRegistry: ",
                    ""
                ])), error);
            }
        };
        return t;
    })();
    const K = new j;
    l.WAWebVoipVideoRendererRegistry = j;
    l.videoRendererRegistry = K;
}, 98);