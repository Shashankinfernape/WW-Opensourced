__d("WAWebVoipVideoCameraCapture", [
    "WALogger",
    "WAWebBackendApi",
    "WAWebEventEmitter",
    "WAWebNoop",
    "WAWebUA",
    "WAWebUserPrefsVoip",
    "WAWebVoipCameraFingerprintLogging",
    "WAWebVoipCaptureCap",
    "WAWebVoipPopoutWindowState",
    "WAWebVoipPthreadHardening",
    "WAWebVoipResolutionCap",
    "WAWebVoipStackInterface",
    "WAWebVoipVideoCaptureBase",
    "WAWebVoipVideoRenderSource",
    "WAWebVoipVideoRendererRegistry",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "isStringNullOrEmpty",
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
    let ne;
    let re;
    let oe;
    let ae;
    let ie;
    let le;
    let se;
    let ue;
    let ce;
    let de;
    let me;
    let pe;
    let _e;
    let fe;
    let ge;
    let he;
    let ye;
    const Ce = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(r("WAWebEventEmitter"));
    const be = new Ce;
    const ve = new Set;
    const Se = 2000;
    const Re = 2000;
    const Le = o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderSource.self(o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderStream.CAMERA);
    function Ee(t) {
        let n = 0;
        let r = 0;
        for (const a of ve){
            const i = a.getTracks().filter((e)=>e.readyState === "live");
            if (i.length > 0) {
                i.forEach((e)=>e.stop());
                r++;
                n += i.length;
            }
            ve.delete(a);
        }
        if (n > 0) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:cameraReconciliation] ",
                ": stopped ",
                " leaked live camera track(s) across ",
                " stream(s) that survived teardown"
            ])), t, n, r).sendLogs("voip-camera-stream-leak");
        } else {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:cameraReconciliation] ",
                ": clean — no live camera tracks after teardown"
            ])), t);
        }
    }
    function ke(e, currentDeviceId) {
        if (e.readyState !== "live" || e.muted) {
            return false;
        }
        const deviceId = e.getSettings().deviceId;
        return r("isStringNullOrEmpty")(deviceId) || deviceId === currentDeviceId;
    }
    const Ie = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.name = "camera";
            t.captureParams = null;
            t.$WAWebVoipVideoCameraCaptureImpl$p_1 = null;
            t.currentDeviceId = null;
            t.currentFacing = null;
            t.__lastCapturedStream = null;
            t.__lastTargetWindow = null;
            t.__frameMonitorCleanup = null;
            t.__healthCheckRetryCount = 0;
            t.__stopping = false;
            t.__stopGeneration = 0;
            t.__callEndGeneration = 0;
            t.__stackCaptureWanted = false;
            t.__facingFlipActive = false;
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.startCameraCapture = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                const { camera_id_requested, facingModeRequested, height, isAVUpgrade, isStackRequest, max_fps, stopGeneration, targetWindow, width } = e;
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:startCameraCapture] cam=",
                    " facing=",
                    " w=",
                    " h=",
                    " fps=",
                    " upgrade=",
                    " targetWindow=",
                    ""
                ])), camera_id_requested, facingModeRequested ?? "none", width, height, max_fps, isAVUpgrade, String(targetWindow != null));
                if (isStackRequest === true) {
                    this.__stackCaptureWanted = true;
                }
                const R = stopGeneration ?? this.__takeStopGeneration();
                if (R == null) {
                    this.__recordStartRequest(camera_id_requested, facingModeRequested, targetWindow);
                }
                const L = yield this.__resolveCameraCaptureId({
                    camera_id_requested,
                    facingModeRequested,
                    targetWindow
                });
                if (this.__stopBeganSince(R)) {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:startCameraCapture] stop began while resolving the camera, not acquiring"
                    ])));
                    return;
                }
                if (R != null) {
                    this.__recordStartRequest(camera_id_requested, facingModeRequested, targetWindow);
                }
                this.captureParams = o("WAWebVoipResolutionCap").applyLowEndResolutionCap({
                    width,
                    height,
                    maxFps: max_fps
                });
                const E = r("nullthrows")(this.getOpenCaptureParams());
                let k = null;
                let I = null;
                const getMediaStream = (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                            const e = yield o("WAWebBackendApi").frontendSendAndReceive("voipAcquireMediaStream", {
                                type: "camera",
                                selectedDeviceId: L,
                                params: E,
                                isAVUpgrade,
                                targetWindow,
                                facingMode: facingModeRequested
                            });
                            if (e == null) {
                                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                    "[AV:getCameraMediaStream] getUserMedia failed, muting video"
                                ])));
                                const a = yield o("WAWebVoipStackInterface").getVoipStackInterface();
                                if (a?.type === "web") {
                                    yield a.setCallVideoMute(true);
                                }
                                return null;
                            }
                            t.__lastCapturedStream = e;
                            ve.add(e);
                            const l = e.getVideoTracks().at(0);
                            if (l != null) {
                                const g = l.getSettings();
                                if (g.deviceId != null && g.deviceId !== "") {
                                    k = g.deviceId;
                                }
                                if (g.facingMode === "user" || g.facingMode === "environment") {
                                    I = g.facingMode;
                                }
                                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                                    "[AV:getCameraMediaStream] track acquired: readyState=",
                                    ", muted=",
                                    ", enabled=",
                                    ", deviceId=",
                                    ", facingMode=",
                                    ", resolution=",
                                    "x",
                                    ""
                                ])), l.readyState, String(l.muted), String(l.enabled), g.deviceId ?? "unknown", g.facingMode ?? "unknown", String(g.width), String(g.height));
                            } else {
                                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                                    "[AV:getCameraMediaStream] stream acquired but no video track found"
                                ])));
                            }
                            l?.addEventListener("ended", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                                if (o("WAWebVoipPopoutWindowState").getIsCameraStreamReacquisitionInProgress() || t.__lastCapturedStream !== e) {
                                    o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                                        "[AV:getCameraMediaStream] ignoring 'ended' during popout stream swap"
                                    ])));
                                    return;
                                }
                                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                                    "[AV:getCameraMediaStream] stream ended, muting video"
                                ])));
                                const n = yield o("WAWebVoipStackInterface").getVoipStackInterface();
                                if (n?.type === "web") {
                                    yield n.setCallVideoMute(true);
                                }
                            }));
                            return e;
                        }
                        throw r("err")("getUserMedia not supported");
                    });
                    return function() {
                        return e.apply(this, arguments);
                    };
                })();
                yield this.__startCapture(babelHelpers.extends({
                    getMediaStream,
                    isStopped: function() {
                        return t.__stopBeganSince(R);
                    },
                    onVideoDataFnType: "onVideoDataFromJs"
                }, E));
                if (this.__stopBeganSince(R)) {
                    o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:startCameraCapture] stop began while acquiring, not monitoring"
                    ])));
                    return;
                }
                const __lastCapturedStream = this.__lastCapturedStream;
                if (__lastCapturedStream != null) {
                    o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.resetFirstFrameReceivedForSource(Le);
                    this.__monitorFrameProduction(__lastCapturedStream);
                    be.trigger("cameraCaptureStarted");
                }
                const x = this.__updateDeviceFromAcquiredTrack(k, L);
                o("WAWebVoipCameraFingerprintLogging").retryCameraFingerprint();
                this.__updateFacingFromAcquiredTrack(I, facingModeRequested, x);
                if (o("WAWebUA").UA.isFirefox && targetWindow != null) {
                    be.trigger("deviceListRefreshRequested");
                    o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:startCameraCapture] Firefox popout camera capture ready, refreshing device list"
                    ])));
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.__recordStartRequest = function(t, n, o) {
            this.__lastTargetWindow = o ?? null;
            if (n != null) {
                this.__facingFlipActive = true;
            } else if (!r("isStringNullOrEmpty")(t)) {
                this.__facingFlipActive = false;
            }
        };
        t_prototype.__takeStopGeneration = function() {
            if (o("WAWebVoipPthreadHardening").isVoipWorkerLifecycleHardeningEnabled()) {
                if (this.__stopping) {
                    return this.__stopGeneration - 1;
                }
                return this.__stopGeneration;
            }
            return null;
        };
        t_prototype.__stopBeganSince = function(t) {
            if (t == null || this.__stopGeneration === t) {
                return false;
            }
            return this.__callEndGeneration > t || !this.__stackCaptureWanted;
        };
        t_prototype.__resolveCameraCaptureId = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ camera_id_requested, facingModeRequested, targetWindow }) {
                if (facingModeRequested != null) {
                    return "";
                }
                let i = camera_id_requested;
                if (r("isStringNullOrEmpty")(i)) {
                    const l = o("WAWebUserPrefsVoip").getLandingPageVideoDeviceId();
                    if (l != null) {
                        i = l;
                        o("WAWebUserPrefsVoip").clearLandingPageVideoDeviceId();
                    }
                }
                if (r("isStringNullOrEmpty")(i) && this.currentDeviceId != null) {
                    i = this.currentDeviceId;
                }
                if (r("isStringNullOrEmpty")(i)) {
                    const s = o("WAWebUserPrefsVoip").getSelectedVideoInputDevice();
                    if (s != null) {
                        i = s;
                    }
                }
                return yield this.__validateResolvedCameraId(i, targetWindow);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.__validateResolvedCameraId = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                if (r("isStringNullOrEmpty")(e)) {
                    return e;
                }
                const n = t ?? (o("WAWebUA").UA.isFirefox ? o("WAWebVoipPopoutWindowState").getPopoutWindow() : null);
                try {
                    const a = yield o("WAWebBackendApi").frontendSendAndReceive("getIsValidVideoDevice", {
                        deviceId: e,
                        targetWindow: n,
                        isInActiveCall: true
                    });
                    if (!a) {
                        o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                            "[AV:startCameraCapture] device ",
                            " no longer available, falling back to default"
                        ])), e);
                        return "";
                    }
                } catch (error) {
                    o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:startCameraCapture] device validation failed, proceeding with ",
                        ": ",
                        ""
                    ])), e, error);
                }
                return e;
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.__updateDeviceFromAcquiredTrack = function(t, n) {
            const e = t ?? n;
            if (this.currentDeviceId === e) {
                return false;
            }
            this.currentDeviceId = e;
            if (!this.__facingFlipActive && !r("isStringNullOrEmpty")(e)) {
                o("WAWebUserPrefsVoip").setSelectedVideoInputDevice(e);
            }
            be.trigger("deviceSelectionChanged", e);
            o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                "[AV:startCameraCapture] device changed: requested=",
                ", actual=",
                ""
            ])), n, e);
            return true;
        };
        t_prototype.__updateFacingFromAcquiredTrack = function(t, n, r) {
            const a = t ?? n ?? (r ? null : this.currentFacing);
            if (this.currentFacing !== a) {
                this.currentFacing = a;
                be.trigger("facingChanged", a);
                o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:startCameraCapture] facing changed: ",
                    ""
                ])), a ?? "unknown");
            }
        };
        t_prototype.startWithStream = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, a, maxFps, l = false) {
                const s = this;
                o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:startWithStream] w=",
                    " h=",
                    " fps=",
                    " track=",
                    ""
                ])), t, a, maxFps, String(l));
                const u = this.__takeStopGeneration();
                this.captureParams = {
                    width: t,
                    height: a,
                    maxFps
                };
                this.__lastTargetWindow = null;
                yield this.__startCapture({
                    getMediaStream: (()=>{
                        const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                            return e;
                        });
                        function r() {
                            return t.apply(this, arguments);
                        }
                        return r;
                    })(),
                    isStopped: function() {
                        return s.__stopBeganSince(u);
                    },
                    onVideoDataFnType: "onVideoDataFromJs",
                    width: t,
                    height: a,
                    maxFps
                });
                if (this.__stopBeganSince(u)) {
                    o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:startWithStream] stop began during the start, releasing the stream"
                    ])));
                    e.getTracks().forEach((e)=>e.stop());
                    return;
                }
                o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.resetFirstFrameReceivedForSource(Le);
                if (l) {
                    const c = this.__lastCapturedStream;
                    if (c != null && c !== e) {
                        ve.delete(c);
                    }
                    this.__lastCapturedStream = e;
                    ve.add(e);
                    const d = e.getVideoTracks().at(0);
                    d?.addEventListener("ended", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                        if (!(o("WAWebVoipPopoutWindowState").getIsCameraStreamReacquisitionInProgress() || s.__lastCapturedStream !== e)) {
                            o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                                "[AV:startWithStream] stream ended, muting video"
                            ])));
                            try {
                                const t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
                                if (t?.type === "web") {
                                    yield t.setCallVideoMute(true);
                                }
                            } catch (error) {
                                o("WALogger").ERROR(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                                    "[AV:startWithStream] mute on stream-ended failed"
                                ]))).catching(r("getErrorSafe")(error)).sendLogs("voip-popout-reuse-ended-mute-failed");
                            }
                        }
                    }));
                }
            });
            function t(t, n, r, o, a) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.setCaptureCap = function(t) {
            const $WAWebVoipVideoCameraCaptureImpl$p_1 = this.$WAWebVoipVideoCameraCaptureImpl$p_1;
            this.$WAWebVoipVideoCameraCaptureImpl$p_1 = t;
            const captureParams = this.captureParams;
            if (captureParams == null) {
                return null;
            }
            const r = o("WAWebVoipCaptureCap").applyCaptureCap(captureParams, $WAWebVoipVideoCameraCaptureImpl$p_1);
            const a = o("WAWebVoipCaptureCap").applyCaptureCap(captureParams, t);
            if (r.width === a.width && r.height === a.height) {
                return null;
            }
            return a;
        };
        t_prototype.getOpenCaptureParams = function() {
            const captureParams = this.captureParams;
            if (captureParams == null) {
                return null;
            }
            return o("WAWebVoipCaptureCap").applyCaptureCap(captureParams, this.$WAWebVoipVideoCameraCaptureImpl$p_1);
        };
        t_prototype.getLastCapturedStream = function() {
            return this.__lastCapturedStream;
        };
        t_prototype.isDeliveringFramesForCurrentDevice = function() {
            const currentDeviceId = this.currentDeviceId;
            if (r("isStringNullOrEmpty")(currentDeviceId)) {
                return false;
            }
            const i = this.__lastCapturedStream?.getVideoTracks() ?? [];
            if (!i.some((e)=>ke(e, currentDeviceId))) {
                return false;
            }
            const l = o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.getDecodeStatsForSource(Le)?.lastFrameTimestampMs;
            return l != null && window.performance.now() - l < Re;
        };
        t_prototype.isStackCaptureWanted = function() {
            return this.__stackCaptureWanted;
        };
        t_prototype.switchVideoDevice = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const n = `voip: switchVideoDevice (${this.name})`;
                o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " switching to device: ",
                    ""
                ])), n, e);
                const r = this.__takeStopGeneration();
                if (!(yield this.__ensureRestartableForSwitch(n))) {
                    return false;
                }
                const captureParams = this.captureParams;
                if (captureParams == null) {
                    o("WALogger").ERROR(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " capture params not available"
                    ])), n);
                    return false;
                }
                const i = yield o("WAWebBackendApi").frontendSendAndReceive("getIsValidVideoDevice", {
                    deviceId: e,
                    targetWindow: t,
                    isInActiveCall: true
                });
                if (!i) {
                    o("WALogger").ERROR(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " device not found in available devices: ",
                        ""
                    ])), n, e);
                    return false;
                }
                if (this.__stopBeganSince(r)) {
                    o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " stop started before the switch cleaned up, aborting"
                    ])), n);
                    return false;
                }
                const currentDeviceId = this.currentDeviceId;
                this.__healthCheckRetryCount = 0;
                try {
                    yield this.__cleanup();
                    if (this.__stopBeganSince(r)) {
                        o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " stop started during switch, aborting before re-acquire"
                        ])), n);
                        return false;
                    }
                    yield this.startCameraCapture({
                        camera_id_requested: e,
                        height: captureParams.height,
                        isAVUpgrade: false,
                        max_fps: captureParams.maxFps,
                        stopGeneration: r,
                        targetWindow: t,
                        width: captureParams.width
                    });
                    if (this.__stopBeganSince(r)) {
                        o("WALogger").LOG($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " stop started during switch, device not acquired"
                        ])), n);
                        return false;
                    }
                } catch (error) {
                    o("WALogger").ERROR(P || (P = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchVideoDevice] error switching device: ",
                        ""
                    ])), error);
                    if (currentDeviceId != null && currentDeviceId !== "") {
                        o("WALogger").LOG(N || (N = babelHelpers.taggedTemplateLiteralLoose([
                            "[AV:switchVideoDevice] rollback to: ",
                            ""
                        ])), currentDeviceId);
                        try {
                            const s = this.captureParams;
                            if (s != null) {
                                yield this.startCameraCapture({
                                    camera_id_requested: currentDeviceId,
                                    height: s.height,
                                    isAVUpgrade: false,
                                    max_fps: s.maxFps,
                                    stopGeneration: r,
                                    targetWindow: t,
                                    width: s.width
                                });
                            }
                        } catch (err) {
                            o("WALogger").ERROR(M || (M = babelHelpers.taggedTemplateLiteralLoose([
                                "[AV:switchVideoDevice] rollback failed: ",
                                ""
                            ])), err);
                        }
                    }
                    return false;
                }
                o("WALogger").LOG(w || (w = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:switchVideoDevice] switched to: ",
                    ""
                ])), e);
                return true;
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.switchVideoFacing = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(facingModeRequested, t) {
                const n = `voip: switchVideoFacing (${this.name})`;
                o("WALogger").LOG(A || (A = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " switching to facing: ",
                    ""
                ])), n, facingModeRequested);
                if (this.__stopping) {
                    o("WALogger").LOG(F || (F = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " stop in progress, skipping flip"
                    ])), n);
                    return false;
                }
                const r = this.__takeStopGeneration();
                if (!(yield this.__ensureRestartableForSwitch(n))) {
                    return false;
                }
                const captureParams = this.captureParams;
                if (captureParams == null) {
                    o("WALogger").ERROR(O || (O = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " capture params not available"
                    ])), n).sendLogs("voip-switch-video-facing-no-params");
                    return false;
                }
                if (this.__stopBeganSince(r)) {
                    o("WALogger").LOG(B || (B = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " stop started before the flip cleaned up, aborting"
                    ])), n);
                    return false;
                }
                const currentDeviceId = this.currentDeviceId;
                const currentFacing = this.currentFacing;
                const __facingFlipActive = this.__facingFlipActive;
                this.__healthCheckRetryCount = 0;
                try {
                    yield this.__cleanup();
                    if (this.__stopping || this.__stopBeganSince(r)) {
                        o("WALogger").LOG(W || (W = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " stop started during flip, aborting before re-acquire"
                        ])), n);
                        return false;
                    }
                    yield this.startCameraCapture({
                        camera_id_requested: "",
                        height: captureParams.height,
                        isAVUpgrade: false,
                        max_fps: captureParams.maxFps,
                        stopGeneration: r,
                        targetWindow: t,
                        width: captureParams.width,
                        facingModeRequested
                    });
                    if (this.__stopBeganSince(r)) {
                        o("WALogger").LOG(q || (q = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " stop started during flip, camera not acquired"
                        ])), n);
                        return false;
                    }
                } catch (error) {
                    o("WALogger").ERROR(U || (U = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchVideoFacing] error switching facing to ",
                        ": ",
                        ""
                    ])), facingModeRequested, error).sendLogs("voip-switch-video-facing-failed");
                    yield this.__rollbackAfterFacingSwitchFailure({
                        params: captureParams,
                        previousDeviceId: currentDeviceId,
                        previousFacing: currentFacing,
                        previousFacingFlipActive: __facingFlipActive,
                        stopGenerationBefore: r,
                        targetWindow: t
                    });
                    return false;
                }
                o("WALogger").LOG(V || (V = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:switchVideoFacing] switched to: ",
                    ""
                ])), facingModeRequested);
                return true;
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.__rollbackAfterFacingSwitchFailure = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ params, previousDeviceId, previousFacing, previousFacingFlipActive, stopGenerationBefore, targetWindow }) {
                if (this.__stopping || this.__stopBeganSince(stopGenerationBefore)) {
                    o("WALogger").LOG(H || (H = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:switchVideoFacing] stop in progress, skipping rollback"
                    ])));
                    return;
                }
                const u = !r("isStringNullOrEmpty")(previousDeviceId);
                if (!(!u && previousFacing == null)) {
                    const c = !u || previousFacingFlipActive && previousFacing != null;
                    o("WALogger").LOG(G || (G = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:switchVideoFacing] rollback to previous camera (facing=",
                        ", device=",
                        ", byFacing=",
                        ")"
                    ])), previousFacing ?? "none", previousDeviceId ?? "none", String(c));
                    try {
                        yield this.startCameraCapture({
                            camera_id_requested: c ? "" : r("nullthrows")(previousDeviceId),
                            height: params.height,
                            isAVUpgrade: false,
                            max_fps: params.maxFps,
                            stopGeneration: stopGenerationBefore,
                            targetWindow,
                            width: params.width,
                            facingModeRequested: c ? previousFacing : null
                        });
                    } catch (error) {
                        o("WALogger").ERROR(z || (z = babelHelpers.taggedTemplateLiteralLoose([
                            "[AV:switchVideoFacing] rollback failed: ",
                            ""
                        ])), error).sendLogs("voip-switch-video-facing-rollback-failed");
                    }
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.__ensureRestartableForSwitch = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                if (this.captureInitState === o("WAWebVoipVideoCaptureBase").CaptureInitState.Initializing && this.captureInitResolvable != null) {
                    const t = this.captureInitResolvable;
                    o("WALogger").LOG(j || (j = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " capture still initializing, waiting for ready"
                    ])), e);
                    let n = false;
                    try {
                        yield t.promise;
                    } catch (t) {
                        n = true;
                        o("WALogger").ERROR(K || (K = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " capture initialization failed while waiting"
                        ])), e);
                    }
                    if (this.captureInitResolvable !== t) {
                        o("WALogger").LOG(Q || (Q = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " capture init resolvable changed while waiting, aborting switch"
                        ])), e);
                        return false;
                    }
                    if (!n && this.captureInitState !== o("WAWebVoipVideoCaptureBase").CaptureInitState.Ready) {
                        o("WALogger").LOG(X || (X = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " capture not ready after init wait, aborting switch"
                        ])), e);
                        return false;
                    }
                    if (n) {
                        o("WALogger").LOG(Y || (Y = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " continuing switch after failed capture initialization"
                        ])), e);
                    }
                }
                if (this.captureInitState !== o("WAWebVoipVideoCaptureBase").CaptureInitState.Ready && this.captureInitState !== o("WAWebVoipVideoCaptureBase").CaptureInitState.Error && this.captureInitState !== o("WAWebVoipVideoCaptureBase").CaptureInitState.Uninitialized) {
                    o("WALogger").ERROR(J || (J = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " video capture not restartable,\n      current state: ",
                        ""
                    ])), e, this.captureInitState);
                    return false;
                }
                if (this.captureInitState !== o("WAWebVoipVideoCaptureBase").CaptureInitState.Ready) {
                    o("WALogger").LOG(Z || (Z = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " restarting capture from state: ",
                        ""
                    ])), e, this.captureInitState);
                }
                return true;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.__monitorFrameProduction = function(t) {
            const l = this;
            this.__frameMonitorCleanup?.();
            this.__frameMonitorCleanup = null;
            const s = 2000;
            const u = 15000;
            const c = this.__healthCheckRetryCount === 0;
            const d = c ? u : s;
            const m = 5;
            let p = 0;
            const _ = o("WAWebVoipPopoutWindowState").getPopoutWindow()?.document ?? null;
            const f = _ ?? document;
            o("WALogger").LOG(ee || (ee = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [CameraHealthCheck] monitoring frame production (doc=",
                ")"
            ])), _ != null ? "popout" : "main");
            const g = f.createElement("video");
            g.setAttribute("playsinline", "");
            g.setAttribute("aria-hidden", "true");
            g.muted = true;
            g.style.cssText = "position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;pointer-events:none;";
            g.srcObject = t;
            const h = f.body ?? document.body;
            if (h == null) {
                o("WALogger").ERROR(te || (te = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [CameraHealthCheck] no document body to host probe video; skipping monitor"
                ]))).sendLogs("voip-camera-health-check-no-body");
                g.srcObject = null;
                return;
            }
            h.appendChild(g);
            let y = false;
            let C = null;
            const b = function() {
                if (!y) {
                    y = true;
                    if (C != null) {
                        self.clearTimeout(C);
                        C = null;
                    }
                    g.srcObject = null;
                    g.remove();
                    if (l.__frameMonitorCleanup === b) {
                        l.__frameMonitorCleanup = null;
                    }
                }
            };
            this.__frameMonitorCleanup = b;
            const v = function() {
                if (!y) {
                    o("WALogger").LOG(ne || (ne = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraHealthCheck] frame received"
                    ])));
                    be.trigger("cameraFrameReceived");
                    b();
                }
            };
            const S = function() {
                if (!y) {
                    if (o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.hasReceivedFirstFrameForSource(Le)) {
                        o("WALogger").LOG(re || (re = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [CameraHealthCheck] self preview already rendered a frame"
                        ])));
                        v();
                        return;
                    }
                    if (!o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.hasCanvasForSource(Le) && p < m) {
                        p++;
                        o("WALogger").LOG(oe || (oe = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [CameraHealthCheck] no consumer canvas yet, deferring verdict (deferral=",
                            "/",
                            ")"
                        ])), p, m);
                        C = self.setTimeout(S, s);
                        return;
                    }
                    o("WALogger").LOG(ae || (ae = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraHealthCheck] no frames within timeout (retryCount=",
                        ")"
                    ])), l.__healthCheckRetryCount);
                    be.trigger("cameraNotProducingFrames");
                    b();
                    if (l.__healthCheckRetryCount === 0) {
                        l.__healthCheckRetryCount = 1;
                        o("WALogger").LOG(ie || (ie = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [CameraHealthCheck] auto-retrying camera capture"
                        ])));
                        l.retryCameraCapture();
                    } else {
                        o("WALogger").LOG(le || (le = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [CameraHealthCheck] retry exhausted, notifying UI"
                        ])));
                        be.trigger("cameraHealthCheckFailed");
                    }
                }
            };
            C = self.setTimeout(S, d);
            if (typeof g.requestVideoFrameCallback === "function") {
                g.requestVideoFrameCallback(v);
            } else {
                o("WALogger").LOG(se || (se = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [CameraHealthCheck] requestVideoFrameCallback not available, relying on timeout"
                ])));
            }
            g.play().then(()=>{
                if (!(!c || y)) {
                    if (C != null) {
                        self.clearTimeout(C);
                    }
                    C = self.setTimeout(S, s);
                }
            }, r("WAWebNoop"));
        };
        t_prototype.stopCapture = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t = false) {
                this.__stopping = true;
                this.__stopGeneration++;
                this.__stackCaptureWanted = false;
                this.__frameMonitorCleanup?.();
                this.__frameMonitorCleanup = null;
                const __lastCapturedStream = this.__lastCapturedStream;
                this.__lastCapturedStream = null;
                this.__healthCheckRetryCount = 0;
                if (__lastCapturedStream != null) {
                    const a = __lastCapturedStream.getTracks();
                    o("WALogger").LOG(ue || (ue = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:stopCapture] stopping ",
                        " track(s): ",
                        ""
                    ])), a.length, a.map((e)=>`${e.kind}:${e.readyState}`).join(", "));
                }
                try {
                    yield e.prototype.stopCapture.call(this, t);
                } finally{
                    this.__frameMonitorCleanup?.();
                    this.__frameMonitorCleanup = null;
                    const l = this.__lastCapturedStream;
                    this.__lastCapturedStream = null;
                    this.__lastTargetWindow = null;
                    if (__lastCapturedStream != null) {
                        const s = [];
                        let u = 0;
                        __lastCapturedStream.getTracks().forEach((e)=>{
                            const e_readyState = e.readyState;
                            e.stop();
                            u++;
                            if (s.length < 3) {
                                s.push(`${e.kind}:${e_readyState}->${e.readyState}`);
                            }
                        });
                        if (u > 0) {
                            o("WALogger").LOG(ce || (ce = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:stopCapture] stopped ",
                                " track(s) => ",
                                ""
                            ])), u, s);
                        }
                    }
                    if (l != null && l !== __lastCapturedStream) {
                        o("WALogger").LOG(de || (de = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:stopCapture] cleaning up stream leaked during stop"
                        ])));
                        const c = [];
                        let d = 0;
                        l.getTracks().forEach((e)=>{
                            e.stop();
                            d++;
                            if (c.length < 3) {
                                c.push(`${e.kind}:${e.readyState}`);
                            }
                        });
                        if (d > 0) {
                            o("WALogger").LOG(me || (me = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:stopCapture] stopped ",
                                " leaked track(s) => ",
                                ""
                            ])), d, c);
                        }
                    }
                    Ee("stopCapture");
                    o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.resetFirstFrameReceivedForSource(Le);
                    if (this.currentFacing != null) {
                        this.currentFacing = null;
                        be.trigger("facingChanged", null);
                    }
                    if (this.__facingFlipActive) {
                        this.currentDeviceId = null;
                    }
                    this.__facingFlipActive = false;
                    this.__stopping = false;
                }
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        t_prototype.retryCameraCapture = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                o("WALogger").LOG(pe || (pe = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [CameraHealthCheck] retrying camera capture"
                ])));
                if (this.__stopping) {
                    o("WALogger").LOG(_e || (_e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraHealthCheck] stop in progress, skipping retry"
                    ])));
                    return false;
                }
                if (this.captureParams == null) {
                    o("WALogger").ERROR(fe || (fe = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraHealthCheck] cannot retry, no capture params"
                    ])));
                    return false;
                }
                const captureParams = this.captureParams;
                const __lastTargetWindow = this.__lastTargetWindow;
                const n = __lastTargetWindow != null && __lastTargetWindow.document != null ? __lastTargetWindow : null;
                const r = this.__takeStopGeneration();
                try {
                    yield this.__cleanup();
                    if (this.__stopBeganSince(r)) {
                        o("WALogger").LOG(ge || (ge = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [CameraHealthCheck] stop started during retry, aborting before re-acquire"
                        ])));
                        return false;
                    }
                    yield this.startCameraCapture({
                        camera_id_requested: this.currentDeviceId ?? "",
                        height: captureParams.height,
                        isAVUpgrade: false,
                        max_fps: captureParams.maxFps,
                        stopGeneration: r,
                        targetWindow: n,
                        width: captureParams.width
                    });
                    return !this.__stopBeganSince(r);
                } catch (error) {
                    o("WALogger").ERROR(he || (he = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraHealthCheck] retry failed: ",
                        ""
                    ])), error);
                    be.trigger("cameraHealthCheckFailed");
                    return false;
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.recordCallEnd = function() {
            this.__callEndGeneration = ++this.__stopGeneration;
            if (o("WAWebVoipPthreadHardening").isVoipWorkerLifecycleHardeningEnabled()) {
                this.__frameMonitorCleanup?.();
                this.__frameMonitorCleanup = null;
            }
        };
        t_prototype.scheduleCallEndCameraRelease = function() {
            const e = Array.from(ve);
            if (e.length !== 0) {
                self.setTimeout(function() {
                    let t = 0;
                    let n = 0;
                    for (const r of e){
                        const a = r.getTracks().filter((e)=>e.readyState === "live");
                        if (a.length > 0) {
                            a.forEach((e)=>e.stop());
                            n++;
                            t += a.length;
                        }
                        ve.delete(r);
                    }
                    if (t > 0) {
                        o("WALogger").WARN(ye || (ye = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:cameraReconciliation] callEndBackstop: stopped ",
                            " leaked live camera track(s) across ",
                            " stream(s) the WASM teardown never released"
                        ])), t, n).sendLogs("voip-camera-callend-backstop");
                    }
                }, Se);
            }
        };
        return t;
    })(o("WAWebVoipVideoCaptureBase").WAWebVoipVideoCaptureBase);
    const Te = new Ie;
    l.VideoDeviceEvents = be;
    l.WAWebVoipVideoCameraCapture = Te;
}, 98);