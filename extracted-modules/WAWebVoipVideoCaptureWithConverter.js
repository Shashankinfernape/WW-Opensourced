__d("WAWebVoipVideoCaptureWithConverter", [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebCoreActionsODS",
    "WAWebNoop",
    "WAWebUA",
    "WAWebVoipDualStreamScreenShareState",
    "WAWebVoipEncodeTargetFpsState",
    "WAWebVoipMediaEnums",
    "WAWebVoipPopoutWindowState",
    "WAWebVoipPresentationFrameNormalizer",
    "WAWebVoipVideoCaptureSourceRect",
    "WAWebVoipVideoRenderSource",
    "WAWebVoipVideoRendererRegistry",
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
    const X = 3;
    const Y = 15;
    const J = 30;
    const Z = 2;
    const ee = 0.9;
    const te = "orientation";
    function ne({ isBackCamera, isScreenShare, requestedHeight, requestedWidth, screenAngle, screenType, sensorOffset, sensorOffsetInitialized, videoHeight, videoWidth }) {
        if (isScreenShare || !sensorOffsetInitialized) {
            return null;
        }
        const m = o("WAWebVoipMediaEnums").computeVideoOrientationForAngle(sensorOffset, isBackCamera, screenAngle);
        const p = o("WAWebVoipPresentationFrameNormalizer").resolvePresentationFrameTransform({
            fallbackOrientation: m,
            frameHeight: videoHeight,
            frameRotation: 0,
            frameWidth: videoWidth,
            isScreenShare,
            requestedHeight,
            requestedWidth,
            screenType,
            sensorOffsetInitialized
        });
        if (p == null || p.counterRotationDegrees === 180) {
            return null;
        }
        return {
            counterRotationDegrees: p.counterRotationDegrees,
            orientation: m,
            outputHeight: o("WAWebVoipVideoCaptureSourceRect").closestEven(p.outputHeight),
            outputWidth: o("WAWebVoipVideoCaptureSourceRect").closestEven(p.outputWidth)
        };
    }
    const re = (()=>{
        function t() {
            this.converter = null;
            this.mediaCaptureStream = null;
            this.animationFrameId = null;
            this.animationFrameWindow = null;
            this.timeoutFrameId = null;
            this.timeoutFrameWindow = null;
            this.visibilityChangeListener = null;
            this.popoutVisibilityChangeListener = null;
            this.videoBuffer = null;
            this.videoBufferSize = 0;
            this.$1 = 0;
            this.$2 = false;
            this.$3 = 0;
            this.$4 = false;
            this.$5 = 0;
            this.$6 = 0;
            this.$7 = null;
            this.$8 = null;
            this.$9 = false;
            this.$10 = null;
            this.$11 = null;
            this.$12 = null;
            this.$13 = 0;
            this.isStopped = false;
            this.isCaptureInProgress = false;
            this.primaryConverter = null;
            this.fallbackConverter = null;
            this.converterSwitchInProgress = false;
            this.numReconcileRequested = 0;
            this.usingFallback = false;
            this.width = 0;
            this.height = 0;
            this.lastCaptureTime = 0;
            this.consecutiveErrors = 0;
        }
        const t_prototype = t.prototype;
        t_prototype.$14 = function(n, r) {
            if (!(this.$12 != null || this.$13 >= o("WAWebVoipVideoCaptureSourceRect").MAX_SOURCE_CONTENT_RECT_DETECTION_ATTEMPTS)) {
                const t = o("WAWebVoipVideoCaptureSourceRect").probeVideoSourceContentRect(n, this.$13);
                this.$13 = t.detectionAttempts;
                const a = this.$13;
                const i = t.sourceContentRect;
                if (i != null) {
                    this.$12 = i;
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " source content rect detected by frame ",
                        ": origin=",
                        ",",
                        " display=",
                        "x",
                        " coded=",
                        "x",
                        ""
                    ])), r, a, i.x, i.y, i.width, i.height, i.codedWidth, i.codedHeight);
                }
            }
        };
        t_prototype.handleCaptureError = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ error, frameInterval, logPrefix, requestCallback }) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " video processing error: ",
                    ""
                ])), logPrefix, error);
                this.consecutiveErrors++;
                if (this.consecutiveErrors >= X && !this.isStopped) {
                    const i = yield this.attemptFallbackRecovery(logPrefix);
                    if (i) {
                        requestCallback(frameInterval);
                    }
                    return;
                }
                if (!this.isStopped && this.mediaCaptureStream != null && this.converter != null) {
                    requestCallback(frameInterval);
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$15 = function({ height, videoElement, width }) {
            const $10 = this.$10;
            if ($10 != null && $10.width === width && $10.height === height) {
                return $10;
            }
            this.$16();
            const a = videoElement.ownerDocument.createElement("canvas");
            a.width = width;
            a.height = height;
            const i = a.getContext("2d");
            if (i == null) {
                return null;
            }
            i.imageSmoothingEnabled = true;
            this.$10 = a;
            this.$11 = i;
            return a;
        };
        t_prototype.$16 = function() {
            const $10 = this.$10;
            if ($10 != null) {
                $10.width = 0;
                $10.height = 0;
            }
            this.$10 = null;
            this.$11 = null;
        };
        t_prototype.$17 = function() {
            const e = this.$7;
            if (e != null) {
                e.width = 0;
                e.height = 0;
            }
            this.$7 = null;
            this.$8 = null;
        };
        t_prototype.$18 = function(t, n) {
            if (this.$9) {
                return null;
            }
            if (!this.$4) {
                const { videoWidth, videoHeight } = t;
                if (videoWidth > 0 && videoHeight > 0) {
                    this.$3 = o("WAWebVoipMediaEnums").detectSensorOffset({
                        trackHeight: this.$6,
                        trackWidth: this.$5,
                        videoElHeight: videoHeight,
                        videoElWidth: videoWidth
                    });
                    this.$4 = true;
                }
            }
            const globalThis_screen = globalThis.screen;
            const s = globalThis_screen != null ? globalThis_screen[te] : null;
            return ne({
                isBackCamera: this.$2,
                isScreenShare: n,
                requestedHeight: this.$6,
                requestedWidth: this.$5,
                screenAngle: s?.angle ?? null,
                screenType: s?.type ?? null,
                sensorOffset: this.$3,
                sensorOffsetInitialized: this.$4,
                videoHeight: t.videoHeight,
                videoWidth: t.videoWidth
            });
        };
        t_prototype.$19 = function(t, { counterRotationDegrees, outputHeight, outputWidth }) {
            if (this.$7 == null || this.$7.width !== outputWidth || this.$7.height !== outputHeight) {
                this.$17();
                const a = t.ownerDocument.createElement("canvas");
                a.width = outputWidth;
                a.height = outputHeight;
                const i = a.getContext("2d");
                if (i == null) {
                    return null;
                }
                i.imageSmoothingEnabled = true;
                this.$7 = a;
                this.$8 = i;
            }
            const l = this.$8;
            if (l == null) {
                return null;
            }
            l.setTransform(1, 0, 0, 1, 0, 0);
            l.clearRect(0, 0, outputWidth, outputHeight);
            switch(counterRotationDegrees){
                case 90:
                    l.translate(outputWidth, 0);
                    l.rotate(Math.PI / 2);
                    break;
                case 180:
                    l.translate(outputWidth, outputHeight);
                    l.rotate(Math.PI);
                    break;
                default:
                    l.translate(0, outputHeight);
                    l.rotate(-Math.PI / 2);
            }
            l.drawImage(t, 0, 0, t.videoWidth, t.videoHeight);
            l.setTransform(1, 0, 0, 1, 0, 0);
            return this.$7;
        };
        t_prototype.$20 = function({ height, maxFps, nv12Data, onVideoDataFnType, orientation, voipWasm, width }) {
            if (this.videoBuffer != null) {
                const c = this.videoBuffer;
                voipWasm.GROWABLE_HEAP_U8().set(nv12Data, c);
                voipWasm[onVideoDataFnType](c, nv12Data.length, width, height, maxFps, o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.NV12, orientation);
            } else {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: wasm: video buffer not initialized"
                ]))).sendLogs("voip: wasm: video buffer not initialized");
            }
            const d = o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderSource.self(onVideoDataFnType === "onDesktopCaptureDataFromJs" && o("WAWebVoipDualStreamScreenShareState").isSelfDualStreamScreenShareActive() ? o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderStream.SCREEN_SHARE : o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderStream.CAMERA);
            o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.onVideoFrameWasmToJs(d, nv12Data.buffer, width, height, orientation, o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.NV12, 0, false);
        };
        t_prototype.$21 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ counterRotation, element, frameInterval, height, logPrefix, maxFps, onVideoDataFnType, requestCallback, voipWasm, width }) {
                const f = this.$19(element, counterRotation);
                if (f == null) {
                    this.$9 = true;
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " counter-rotation canvas unavailable; falling back to legacy crop path (video may be cropped/mis-rotated)"
                    ])), logPrefix).sendLogs("voip-withconverter-rotation-canvas-unavailable");
                    return false;
                }
                const { orientation, outputHeight, outputWidth } = counterRotation;
                if (outputWidth !== width || outputHeight !== height) {
                    yield this.__initVideoCapture({
                        height: outputHeight,
                        width: outputWidth
                    });
                    yield this.ensureVideoBufferCapacity(t.getNV12FrameSize(this.width, this.height), logPrefix);
                    this.consecutiveErrors = 0;
                    requestCallback(frameInterval);
                    return true;
                }
                const converter = this.converter;
                if (converter == null) {
                    return true;
                }
                let nv12Data;
                try {
                    nv12Data = yield converter.convertVideoToNV12(f);
                } catch (error) {
                    yield this.handleCaptureError({
                        error,
                        frameInterval,
                        logPrefix,
                        requestCallback
                    });
                    return true;
                }
                this.consecutiveErrors = 0;
                if (!(this.isStopped || this.converter == null || (this.$1 < 3 && (this.$1++, o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " [orient] frame#",
                    " sent=",
                    " reason=counter-rotated converter=",
                    "x",
                    " counterRotation=",
                    ""
                ])), logPrefix, this.$1, orientation, width, height, counterRotation.counterRotationDegrees)), !(yield this.ensureVideoBufferCapacity(nv12Data.byteLength, logPrefix))) || this.isStopped || this.converter == null)) {
                    this.$20({
                        height,
                        maxFps,
                        nv12Data,
                        onVideoDataFnType,
                        orientation,
                        voipWasm,
                        width
                    });
                    requestCallback(frameInterval);
                }
                return true;
            });
            function r(t) {
                return e.apply(this, arguments);
            }
            return r;
        })();
        t_prototype.attemptFallbackRecovery = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                if (this.usingFallback) {
                    o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " already on fallback converter, stopping capture loop"
                    ])), e);
                    this.isStopped = true;
                    return false;
                }
                o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " ",
                    " consecutive errors, attempting fallback converter"
                ])), e, this.consecutiveErrors);
                const converter = this.converter;
                try {
                    const a = this.fallbackConverter != null && this.fallbackConverter !== converter ? this.fallbackConverter : yield this.createFallbackConverter(this.width, this.height);
                    if (a != null) {
                        if (this.isStopped) {
                            if (a !== this.fallbackConverter) {
                                (Q || (Q = n("Promise"))).resolve(a.cleanup()).catch(r("WAWebNoop"));
                            }
                            return false;
                        }
                        this.converter = a;
                        this.primaryConverter = null;
                        this.usingFallback = true;
                        if (this.fallbackConverter != null && this.fallbackConverter !== a) {
                            (Q || (Q = n("Promise"))).resolve(this.fallbackConverter.cleanup()).catch(r("WAWebNoop"));
                        }
                        this.fallbackConverter = null;
                        this.consecutiveErrors = 0;
                        o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " switched to fallback converter: ",
                            ""
                        ])), e, a.getConverterName());
                        if (converter != null) {
                            (Q || (Q = n("Promise"))).resolve(converter.cleanup()).catch((t)=>{
                                o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                                    "",
                                    " old converter cleanup error: ",
                                    ""
                                ])), e, t);
                            });
                        }
                        return true;
                    }
                } catch (error) {
                    o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " fallback converter creation failed: ",
                        ""
                    ])), e, error);
                }
                o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " no fallback available, stopping capture loop"
                ])), e);
                this.isStopped = true;
                return false;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.createConverter = function(t, n) {
            throw r("err")("createConverter not implemented by subclass");
        };
        t_prototype.clearScheduledCapture = function() {
            if (this.animationFrameId != null) {
                (this.animationFrameWindow ?? window).cancelAnimationFrame(this.animationFrameId);
                this.animationFrameId = null;
                this.animationFrameWindow = null;
            }
            if (this.timeoutFrameId != null) {
                (this.timeoutFrameWindow ?? window).clearTimeout(this.timeoutFrameId);
                this.timeoutFrameId = null;
                this.timeoutFrameWindow = null;
            }
        };
        t_prototype.getCaptureSchedulerWindow = function() {
            let e;
            if (o("WAWebVoipPopoutWindowState").getIsPopoutWindowActiveAndVisible() && (e = o("WAWebVoipPopoutWindowState").getPopoutWindow()) != null) {
                return e;
            }
            return window;
        };
        t_prototype.shouldScheduleWithAnimationFrame = function(t) {
            if (t === window) {
                return document.visibilityState === "visible";
            }
            try {
                return t.document.visibilityState === "visible";
            } catch (e) {
                return false;
            }
        };
        t_prototype.createFallbackConverter = function(t, n) {
            return null;
        };
        t_prototype.ensureVideoBufferCapacity = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                if (this.videoBuffer != null && this.videoBufferSize >= e) {
                    return true;
                }
                const videoBuffer = this.videoBuffer;
                const videoBufferSize = this.videoBufferSize;
                this.videoBuffer = null;
                this.videoBufferSize = 0;
                if (videoBuffer != null) {
                    yield le(videoBuffer);
                }
                const a = yield ae(e);
                if (this.isStopped) {
                    yield le(a);
                    return false;
                }
                this.videoBuffer = a;
                this.videoBufferSize = e;
                if (videoBufferSize > 0) {
                    o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " resized WASM video buffer ",
                        " -> ",
                        ""
                    ])), t, videoBufferSize, e);
                }
                return true;
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.__initVideoCapture = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ height, width }) {
                this.width = o("WAWebVoipVideoCaptureSourceRect").closestEven(width);
                this.height = o("WAWebVoipVideoCaptureSourceRect").closestEven(height);
                const i = [];
                if (this.converter) {
                    i.push(this.converter.cleanup());
                }
                if (this.fallbackConverter) {
                    i.push(this.fallbackConverter.cleanup());
                }
                yield (Q || (Q = n("Promise"))).all(i);
                let l;
                let s = false;
                try {
                    l = yield this.createConverter(this.width, this.height);
                    if (l.isAlive?.() === false) {
                        throw r("err")("primary converter device is not alive");
                    }
                } catch (error) {
                    o("WALogger").WARN(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:initVideoCapture] primary failed, using fallback: ",
                        ""
                    ])), error);
                    const u = yield this.createFallbackConverter(this.width, this.height);
                    if (u != null) {
                        l = u;
                        s = true;
                        o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:initVideoCapture] Using fallback converter: ",
                            ""
                        ])), l.getConverterName());
                    } else {
                        throw error;
                    }
                }
                if (this.isStopped) {
                    yield l.cleanup();
                    return;
                }
                this.converter = l;
                this.primaryConverter = l;
                if (o("WAWebUA").UA.isSafari && !s) {
                    const c = yield this.createFallbackConverter(this.width, this.height);
                    if (c != null) {
                        this.fallbackConverter = c;
                    }
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.startVideoCapture = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                let a;
                const u = this;
                const { height, maxFps, onVideoDataFnType, stream, width } = e;
                this.isStopped = false;
                this.isCaptureInProgress = false;
                this.lastCaptureTime = 0;
                this.consecutiveErrors = 0;
                this.usingFallback = false;
                this.$1 = 0;
                this.$16();
                this.$17();
                this.$9 = false;
                this.$4 = false;
                this.$3 = 0;
                this.$5 = width;
                this.$6 = height;
                this.$12 = null;
                this.$13 = 0;
                o("WAWebVoipEncodeTargetFpsState").resetEncodeTargetFps();
                yield this.__initVideoCapture({
                    width,
                    height
                });
                const f = stream.getVideoTracks()[0];
                const g = f == null || f.getSettings == null || (a = f.getSettings()) == null ? undefined : a.facingMode;
                this.$2 = g === "environment";
                const h = r("nullthrows")(this.converter).getConverterName();
                const logPrefix = `voip: [AV:startVideoCapture (${h})]`;
                o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " facingMode=",
                    ""
                ])), logPrefix, g ?? "unknown");
                const C = o("WAWebVoipPopoutWindowState").getPopoutWindow()?.document ?? null;
                const b = C ?? document;
                o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " video element owner: ",
                    ""
                ])), logPrefix, C != null ? "popout" : "main");
                const $ = oe();
                if ($) {
                    const P = this.mediaCaptureStream;
                    if (P != null) {
                        P.videoElement.srcObject = null;
                        P.videoElement.remove();
                    }
                }
                this.mediaCaptureStream = {
                    mediaStream: stream,
                    videoElement: b.createElement("video")
                };
                const videoElement = this.mediaCaptureStream.videoElement;
                videoElement.srcObject = stream;
                videoElement.autoplay = true;
                videoElement.muted = true;
                videoElement.playsInline = true;
                if ($) {
                    videoElement.setAttribute("aria-hidden", "true");
                    videoElement.style.cssText = "position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;pointer-events:none;";
                    const M = b.body;
                    if (M == null) {
                        o("WALogger").ERROR(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " no document body to host capture video"
                        ])), logPrefix).sendLogs("voip-withconverter-capture-no-body");
                        throw r("err")("No document body to host capture video");
                    }
                    M.appendChild(videoElement);
                }
                o("WAWebCoreActionsODS").logCallVideoCaptureWithConverterPlayAttempt($);
                try {
                    yield this.mediaCaptureStream?.videoElement.play();
                    o("WAWebCoreActionsODS").logCallVideoCaptureWithConverterPlaySuccess($);
                } catch (error) {
                    o("WAWebCoreActionsODS").logCallVideoCaptureWithConverterPlayFailure($);
                    throw error;
                }
                this.$14(videoElement, logPrefix);
                o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " video element ready"
                ])), logPrefix);
                if (yield this.ensureVideoBufferCapacity(t.getNV12FrameSize(this.width, this.height), logPrefix)) {
                    const A = this.mediaCaptureStream?.videoElement;
                    const voipWasm = yield o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm");
                    const O = (()=>{
                        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(requestCallback) {
                            if (!u.isCaptureInProgress) {
                                u.isCaptureInProgress = true;
                                const { width, height } = u;
                                const frameInterval = 1000 / maxFps;
                                try {
                                    if (u.isStopped) {
                                        return;
                                    }
                                    if (!u.mediaCaptureStream || !A || !u.converter) {
                                        o("WALogger").ERROR(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                                            "",
                                            ": Video capture not ready, canceling frame capture"
                                        ])), logPrefix);
                                        return;
                                    }
                                    if (A.readyState < A.HAVE_CURRENT_DATA) {
                                        o("WALogger").WARN(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                                            "",
                                            " Video not ready yet, skipping frame capture"
                                        ])), logPrefix);
                                        requestCallback(frameInterval);
                                        return;
                                    }
                                    if (A.readyState < 2 || A.videoWidth === 0 || A.videoHeight === 0) {
                                        throw r("err")("Video element not ready for capture");
                                    }
                                    const l = o("WAWebVoipEncodeTargetFpsState").getEncodeTargetFps();
                                    if (l > 0) {
                                        const s = Math.max(Y, Math.min(J, l + Z));
                                        const c = 1000 / s * ee;
                                        const p = self.performance.now();
                                        const _ = p - u.lastCaptureTime;
                                        if (_ < c) {
                                            requestCallback(frameInterval);
                                            return;
                                        }
                                        u.lastCaptureTime = p;
                                    }
                                    let f = A;
                                    try {
                                        const C = onVideoDataFnType === "onDesktopCaptureDataFromJs";
                                        const counterRotation = u.$18(A, C);
                                        if (counterRotation != null) {
                                            const v = yield u.$21({
                                                counterRotation,
                                                element: A,
                                                frameInterval,
                                                height,
                                                logPrefix,
                                                maxFps,
                                                onVideoDataFnType,
                                                requestCallback,
                                                voipWasm,
                                                width
                                            });
                                            if (v) {
                                                return;
                                            }
                                        }
                                        u.$14(A, logPrefix);
                                        const S = u.$12;
                                        const R = S != null ? o("WAWebVoipVideoCaptureSourceRect").getVideoElementSourceCropRect(A, S) : null;
                                        const L = S?.width ?? A.videoWidth;
                                        const $ = S?.height ?? A.videoHeight;
                                        const P = o("WAWebVoipVideoCaptureSourceRect").closestEven(L);
                                        const N = o("WAWebVoipVideoCaptureSourceRect").closestEven($);
                                        const M = R != null || P !== A.videoWidth || N !== A.videoHeight;
                                        if (P !== width || N !== height) {
                                            o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                                                "Video dims ",
                                                "x",
                                                " mismatch ",
                                                "x",
                                                ", skip"
                                            ])), P, N, width, height);
                                            yield u.__initVideoCapture({
                                                width: P,
                                                height: N
                                            });
                                            if (!(yield u.ensureVideoBufferCapacity(t.getNV12FrameSize(u.width, u.height), logPrefix))) {
                                                return;
                                            }
                                            u.consecutiveErrors = 0;
                                            requestCallback(frameInterval);
                                            return;
                                        }
                                        if (R != null) {
                                            const w = u.$15({
                                                height: N,
                                                videoElement: A,
                                                width: P
                                            });
                                            const O = u.$11;
                                            if (w != null && O != null) {
                                                O.drawImage(A, R.x, R.y, R.width, R.height, 0, 0, P, N);
                                                f = w;
                                            } else {
                                                const B = o("WAWebVoipVideoCaptureSourceRect").getImageBitmapResizeOptionsForSourceCropRect(R, P, N);
                                                const W = yield createImageBitmap(A, R.x, R.y, R.width, R.height);
                                                if (B == null) {
                                                    f = W;
                                                } else {
                                                    try {
                                                        f = yield createImageBitmap(W, B);
                                                    } finally{
                                                        W.close();
                                                    }
                                                }
                                            }
                                            if (u.isStopped || !u.converter) {
                                                return;
                                            }
                                        } else if (M) {
                                            f = yield createImageBitmap(A, S?.x ?? 0, S?.y ?? 0, P, N);
                                            if (u.isStopped || !u.converter) {
                                                return;
                                            }
                                        }
                                        if (!u.converter) {
                                            return;
                                        }
                                        let V;
                                        try {
                                            V = yield u.converter.convertVideoToNV12(f);
                                        } catch (error) {
                                            yield u.handleCaptureError({
                                                error,
                                                frameInterval,
                                                logPrefix,
                                                requestCallback
                                            });
                                            return;
                                        }
                                        u.consecutiveErrors = 0;
                                        const H = o("WAWebVoipMediaEnums").Orientation.Normal;
                                        if (u.$1 < 3) {
                                            u.$1++;
                                            o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                                                "",
                                                " [orient] frame#",
                                                " sent=",
                                                " reason=display-upright converter=",
                                                "x",
                                                ""
                                            ])), logPrefix, u.$1, H, width, height);
                                        }
                                        if (!(yield u.ensureVideoBufferCapacity(V.byteLength, logPrefix))) {
                                            return;
                                        }
                                        if (u.videoBuffer != null) {
                                            const G = u.videoBuffer;
                                            voipWasm.GROWABLE_HEAP_U8().set(V, G);
                                            voipWasm[onVideoDataFnType](G, V.length, width, height, maxFps, o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.NV12, H);
                                        } else {
                                            o("WALogger").ERROR(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                                                "",
                                                " video buffer not initialized"
                                            ])), logPrefix).sendLogs("voip: wasm: video buffer not initialized");
                                        }
                                        const z = o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderSource.self(onVideoDataFnType === "onDesktopCaptureDataFromJs" && o("WAWebVoipDualStreamScreenShareState").isSelfDualStreamScreenShareActive() ? o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderStream.SCREEN_SHARE : o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderStream.CAMERA);
                                        o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.onVideoFrameWasmToJs(z, V.buffer, width, height, H, o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.NV12, 0, false);
                                        requestCallback(frameInterval);
                                    } finally{
                                        if (f instanceof ImageBitmap) {
                                            f.close();
                                        }
                                    }
                                } catch (error) {
                                    o("WALogger").ERROR(x || (x = babelHelpers.taggedTemplateLiteralLoose([
                                        "",
                                        " video processing error: ",
                                        ""
                                    ])), logPrefix, error);
                                    if (!u.isStopped && u.mediaCaptureStream != null && u.converter != null) {
                                        requestCallback(frameInterval);
                                    }
                                } finally{
                                    u.isCaptureInProgress = false;
                                }
                            }
                        });
                        return function(n) {
                            return e.apply(this, arguments);
                        };
                    })();
                    if (A && A.readyState >= A.HAVE_CURRENT_DATA) {
                        window.setTimeout(function() {
                            return u.$22(O);
                        }, 0);
                    } else if (A) {
                        A.addEventListener("loadeddata", function() {
                            return u.$22(O);
                        }, {
                            once: true
                        });
                    }
                }
            });
            function a(t) {
                return e.apply(this, arguments);
            }
            return a;
        })();
        t_prototype.$22 = function(t) {
            const e = this;
            let r = document.visibilityState === "visible";
            const a = ()=>{
                (Q || (Q = n("Promise"))).resolve(t(i)).catch((e)=>{
                    o("WALogger").WARN($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:captureFrame] unhandled error: ",
                        ""
                    ])), e);
                });
            };
            var i = function(n) {
                if (!e.isStopped) {
                    e.clearScheduledCapture();
                    const t = e.getCaptureSchedulerWindow();
                    const r = e.shouldScheduleWithAnimationFrame(t);
                    if (r) {
                        e.animationFrameWindow = t;
                        e.animationFrameId = t.requestAnimationFrame(function() {
                            e.animationFrameId = null;
                            e.animationFrameWindow = null;
                            e.timeoutFrameWindow = t;
                            e.timeoutFrameId = t.setTimeout(function() {
                                e.timeoutFrameId = null;
                                e.timeoutFrameWindow = null;
                                a();
                            }, n);
                        });
                    } else {
                        e.timeoutFrameWindow = t;
                        e.timeoutFrameId = t.setTimeout(function() {
                            e.timeoutFrameId = null;
                            e.timeoutFrameWindow = null;
                            a();
                        }, n);
                    }
                }
            };
            if (this.visibilityChangeListener) {
                document.removeEventListener("visibilitychange", this.visibilityChangeListener);
            }
            if (this.popoutVisibilityChangeListener) {
                o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.off("popoutWindowVisibilityChanged", this.popoutVisibilityChangeListener);
            }
            const l = (n)=>{
                e.clearScheduledCapture();
                r = document.visibilityState === "visible";
                const l = o("WAWebVoipPopoutWindowState").getIsPopoutWindowActiveAndVisible();
                const s = r || l;
                const u = e.getCaptureSchedulerWindow();
                o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:VideoCapture] ",
                    " visible=",
                    " popout=",
                    " converter=",
                    " scheduler=",
                    ""
                ])), n, String(r), String(l), e.converter?.getConverterName() ?? "none", u === window ? "main" : "popout");
                const c = function() {
                    if (!e.isStopped) {
                        if (o("WAWebUA").UA.isSafari && e.fallbackConverter) {
                            if (!s && !e.usingFallback) {
                                e.switchToFallbackConverter().catch((e)=>{
                                    o("WALogger").WARN(N || (N = babelHelpers.taggedTemplateLiteralLoose([
                                        "voip: [AV:VideoCapture] switchToFallback error: ",
                                        ""
                                    ])), e);
                                });
                            } else if (s && e.usingFallback) {
                                e.switchBackToPrimaryConverter().catch((e)=>{
                                    o("WALogger").WARN(M || (M = babelHelpers.taggedTemplateLiteralLoose([
                                        "voip: [AV:VideoCapture] switchBackToPrimary error: ",
                                        ""
                                    ])), e);
                                });
                            }
                        }
                        a();
                    }
                };
                try {
                    u.setTimeout(c, 0);
                } catch (e) {
                    window.setTimeout(c, 0);
                }
            };
            this.visibilityChangeListener = function() {
                l("visibilitychange");
            };
            document.addEventListener("visibilitychange", this.visibilityChangeListener);
            this.popoutVisibilityChangeListener = function(e) {
                l(`popoutVisibilitychange=${e.visibilityState}`);
            };
            o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.on("popoutWindowVisibilityChanged", this.popoutVisibilityChangeListener);
            a();
        };
        t_prototype.switchToFallbackConverter = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (!(!this.fallbackConverter || this.usingFallback || this.converterSwitchInProgress)) {
                    this.converterSwitchInProgress = true;
                    try {
                        o("WALogger").LOG(w || (w = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:VideoCapture] Switching to fallback converter ",
                            ""
                        ])), this.fallbackConverter.getConverterName());
                        const e = this.primaryConverter;
                        this.converter = this.fallbackConverter;
                        this.usingFallback = true;
                        if (e) {
                            yield e.cleanup();
                        }
                    } finally{
                        this.converterSwitchInProgress = false;
                        this.numReconcileRequested++;
                        try {
                            yield this.reconcileState();
                        } finally{
                            this.numReconcileRequested--;
                        }
                    }
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.switchBackToPrimaryConverter = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (!(!this.primaryConverter || !this.usingFallback || this.converterSwitchInProgress)) {
                    this.converterSwitchInProgress = true;
                    try {
                        const e = yield this.createConverter(this.width, this.height);
                        const t = this.primaryConverter;
                        this.primaryConverter = e;
                        this.converter = e;
                        this.usingFallback = false;
                        o("WALogger").LOG(A || (A = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:VideoCapture] Switched back to primary converter ",
                            ""
                        ])), e.getConverterName());
                        if (t) {
                            yield t.cleanup();
                        }
                    } finally{
                        this.converterSwitchInProgress = false;
                        this.numReconcileRequested++;
                        try {
                            yield this.reconcileState();
                        } finally{
                            this.numReconcileRequested--;
                        }
                    }
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.reconcileState = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (!this.converterSwitchInProgress) {
                    if (this.numReconcileRequested > 1) {
                        o("WALogger").LOG(F || (F = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:VideoCapture] max reconcile limit, skip"
                        ])));
                        return;
                    }
                    const e = document.visibilityState !== "visible" && !o("WAWebVoipPopoutWindowState").getIsPopoutWindowActiveAndVisible();
                    if (e && !this.usingFallback && this.fallbackConverter) {
                        o("WALogger").LOG(O || (O = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:VideoCapture] reconcile -> CPU fallback"
                        ])));
                        yield this.switchToFallbackConverter();
                    } else if (!e && this.usingFallback && this.primaryConverter) {
                        o("WALogger").LOG(B || (B = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:VideoCapture] reconcile -> primary"
                        ])));
                        yield this.switchBackToPrimaryConverter();
                    }
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.stopVideoCapture = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const n = this.converter?.getConverterName() ?? "unknown";
                const r = `voip: stopVideoCapture (${n})`;
                o("WALogger").LOG(W || (W = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ""
                ])), r);
                this.isStopped = true;
                this.lastCaptureTime = 0;
                o("WAWebVoipEncodeTargetFpsState").resetEncodeTargetFps();
                this.$17();
                this.$4 = false;
                try {
                    this.clearScheduledCapture();
                    if (this.visibilityChangeListener) {
                        document.removeEventListener("visibilitychange", this.visibilityChangeListener);
                        this.visibilityChangeListener = null;
                    }
                    if (this.popoutVisibilityChangeListener) {
                        o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.off("popoutWindowVisibilityChanged", this.popoutVisibilityChangeListener);
                        this.popoutVisibilityChangeListener = null;
                    }
                    const a = this.mediaCaptureStream;
                    if (a) {
                        const i = a.mediaStream.getTracks();
                        i.forEach((e)=>{
                            e.stop();
                        });
                        o("WALogger").LOG(q || (q = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " stopped ",
                            " tracks: ",
                            ""
                        ])), r, i.length, i.slice(0, 3).map((e)=>e.kind));
                        const l = a.videoElement;
                        l.srcObject = null;
                        l.remove();
                        this.mediaCaptureStream = null;
                        o("WALogger").LOG(U || (U = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " stopped video stream"
                        ])), r);
                    }
                    const s = this.primaryConverter;
                    const u = this.converter;
                    const c = this.fallbackConverter;
                    const d = new Set;
                    if (s != null) {
                        yield s.cleanup();
                        d.add(s);
                        o("WALogger").LOG(V || (V = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " cleaned up primary converter"
                        ])), r);
                    }
                    if (u != null && !d.has(u)) {
                        yield u.cleanup();
                        d.add(u);
                        o("WALogger").LOG(H || (H = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " cleaned up active converter"
                        ])), r);
                    }
                    if (c != null && !d.has(c)) {
                        yield c.cleanup();
                        o("WALogger").LOG(G || (G = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " cleaned up fallback converter"
                        ])), r);
                    }
                    this.primaryConverter = null;
                    this.converter = null;
                    this.fallbackConverter = null;
                } finally{
                    if (this.videoBuffer != null) {
                        try {
                            yield le(this.videoBuffer);
                            o("WALogger").LOG(z || (z = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                " freed WASM video buffer"
                            ])), r);
                        } catch (error) {
                            o("WALogger").WARN(j || (j = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                " error freeing WASM video buffer: ",
                                ""
                            ])), r, error);
                        }
                    }
                    this.videoBuffer = null;
                    this.videoBufferSize = 0;
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t.getNV12FrameSize = function(t, n) {
            return Math.floor(t * n * 1.5);
        };
        return t;
    })();
    function oe() {
        return o("WAWebABProps").getABPropConfigValue("enable_web_voip_video_capture_dom_attach") !== false;
    }
    function ae(e) {
        return ie.apply(this, arguments);
    }
    function ie() {
        ie = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm");
            return t._malloc(e);
        });
        return ie.apply(this, arguments);
    }
    function le(e) {
        return se.apply(this, arguments);
    }
    function se() {
        se = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm");
            t._free(e);
        });
        return se.apply(this, arguments);
    }
    l.getImageBitmapResizeOptionsForSourceCropRect = (K = o("WAWebVoipVideoCaptureSourceRect")).getImageBitmapResizeOptionsForSourceCropRect;
    l.getVideoElementSourceCropRect = K.getVideoElementSourceCropRect;
    l.getVideoSourceContentRect = K.getVideoSourceContentRect;
    l.probeVideoSourceContentRect = K.probeVideoSourceContentRect;
    l.resolveConverterCaptureRotation = ne;
    l.WAWebVoipVideoCaptureWithConverter = re;
}, 98);