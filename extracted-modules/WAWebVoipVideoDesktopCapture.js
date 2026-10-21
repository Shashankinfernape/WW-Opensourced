__d("WAWebVoipVideoDesktopCapture", [
    "Promise",
    "WALogger",
    "WAPromiseDelays",
    "WAWebAudioUtility",
    "WAWebBackendApi",
    "WAWebBoolFunc",
    "WAWebNoop",
    "WAWebVoipAudioCaptureAndPlayback",
    "WAWebVoipAudioCaptureSharedBufferWorklet",
    "WAWebVoipPthreadHardening",
    "WAWebVoipScreenShareSurfaceState",
    "WAWebVoipSharedBufferCaptureProcessorConfig",
    "WAWebVoipStackInterface",
    "WAWebVoipVideoCameraCapture",
    "WAWebVoipVideoCaptureBase",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe"
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
    const R = 8192;
    const L = ((t)=>{
        function a(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.name = "desktop";
            e.captureParams = null;
            e.desktopStream = null;
            e.activeDesktopStream = null;
            e.systemAudioContext = null;
            e.systemAudioSourceNode = null;
            e.systemAudioWorkletNode = null;
            e.systemAudioSabBuffer = null;
            e.systemAudioTracks = [];
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.preflightAcquireDesktopStream = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                this.desktopStream = {
                    streamPromise: o("WAWebBackendApi").frontendSendAndReceive("voipAcquireMediaStream", {
                        type: "desktop",
                        params: o("WAWebVoipVideoCameraCapture").WAWebVoipVideoCameraCapture.captureParams ?? undefined,
                        targetWindow: e
                    })
                };
                return this.desktopStream.streamPromise;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.startDesktopCapture = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ height, maxFps, width }) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:startDesktopCapture] w=",
                    " h=",
                    " fps=",
                    ""
                ])), width, height, maxFps);
                const _ = yield this.$WAWebVoipVideoDesktopCaptureImpl$p_1();
                if (_ == null) {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:startDesktopCapture] stream failed, canceling"
                    ])));
                    yield this.$WAWebVoipVideoDesktopCaptureImpl$p_2();
                    return;
                }
                const f = _.getVideoTracks().at(0);
                const g = f?.getSettings();
                const h = g?.width ?? width;
                const y = g?.height ?? height;
                if (h !== width || y !== height) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:startDesktopCapture] actual=",
                        "x",
                        " req=",
                        "x",
                        ""
                    ])), h, y, width, height);
                }
                this.captureParams = {
                    width: h,
                    height: y,
                    maxFps
                };
                const C = _.clone();
                yield this.__startCapture({
                    getMediaStream: (()=>{
                        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                            return C;
                        });
                        function t() {
                            return e.apply(this, arguments);
                        }
                        return t;
                    })(),
                    onVideoDataFnType: "onDesktopCaptureDataFromJs",
                    width: h,
                    height: y,
                    maxFps
                });
                if (this.captureInitState !== o("WAWebVoipVideoCaptureBase").CaptureInitState.Ready) {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:startDesktopCapture] capture pipeline not ready, canceling share"
                    ])));
                    this.releaseDesktopStream();
                    yield this.$WAWebVoipVideoDesktopCaptureImpl$p_2();
                    return;
                }
                const b = C.getAudioTracks();
                if (b.length > 0) {
                    try {
                        yield this.$WAWebVoipVideoDesktopCaptureImpl$p_3(C);
                    } catch (error) {
                        yield this.$WAWebVoipVideoDesktopCaptureImpl$p_4();
                        o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[AV:systemAudio] failed to start"
                        ]))).catching(r("getErrorSafe")(error)).sendLogs("system-audio-start-failed");
                    }
                }
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        a_prototype.$WAWebVoipVideoDesktopCaptureImpl$p_1 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const a = this;
                if (this.desktopStream == null) {
                    const i = this.activeDesktopStream;
                    const l = i == null ? undefined : i.getVideoTracks().at(0);
                    if (i != null && l?.readyState === "live") {
                        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "[AV:startDesktopCapture] reusing session stream across driver restart"
                        ])));
                        return i;
                    }
                }
                this.releaseDesktopStream();
                if (!this.desktopStream) {
                    yield this.preflightAcquireDesktopStream();
                }
                const s = (yield this.desktopStream?.streamPromise) ?? null;
                this.desktopStream = null;
                if (s == null) {
                    return null;
                }
                this.activeDesktopStream = s;
                const u = s.getVideoTracks().at(0)?.getSettings();
                o("WAWebVoipScreenShareSurfaceState").setSelfScreenShareSurface(u?.displaySurface);
                s.getVideoTracks().at(0)?.addEventListener("ended", function() {
                    o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:startDesktopCapture] stream ended, stopping"
                    ])));
                    a.$WAWebVoipVideoDesktopCaptureImpl$p_2();
                });
                return s;
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.$WAWebVoipVideoDesktopCaptureImpl$p_2 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
                if (e?.type === "web") {
                    yield e.stopScreenShare();
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.releaseDesktopStream = function() {
            const activeDesktopStream = this.activeDesktopStream;
            if (activeDesktopStream != null) {
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:releaseDesktopStream] releasing screen-share stream"
                ])));
                for (const t of activeDesktopStream.getTracks()){
                    t.stop();
                }
                this.activeDesktopStream = null;
                o("WAWebVoipScreenShareSurfaceState").setSelfScreenShareSurface(null);
            }
        };
        a_prototype.releasePreflightDesktopStream = function() {
            const desktopStream = this.desktopStream;
            if (desktopStream != null) {
                this.desktopStream = null;
                desktopStream.streamPromise.then((e)=>{
                    if (e != null) {
                        o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                            "[AV:releasePreflightDesktopStream] releasing unconsumed screen-share stream"
                        ])));
                        for (const t of e.getTracks()){
                            t.stop();
                        }
                    }
                }).catch(r("WAWebNoop"));
            }
        };
        a_prototype.$WAWebVoipVideoDesktopCaptureImpl$p_3 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = e.getAudioTracks();
                if (t.length !== 0) {
                    this.systemAudioTracks = t;
                    const a = o("WAWebVoipAudioCaptureAndPlayback").getCaptureParams();
                    const { framesPerChunk, sampleRate } = a;
                    const s = R;
                    o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:systemAudio] starting capture"
                    ])));
                    const u = o("WAWebAudioUtility").getCachedWasmModule();
                    if (!u) {
                        throw r("err")("WASM module not initialized");
                    }
                    const c = new AudioContext({
                        sampleRate
                    });
                    this.systemAudioContext = c;
                    const d = c.createMediaStreamSource(e);
                    this.systemAudioSourceNode = d;
                    const m = 8;
                    const p = m + s * Float32Array.BYTES_PER_ELEMENT;
                    const _ = yield o("WAWebAudioUtility").mallocWasmBuffer(p);
                    this.systemAudioSabBuffer = _;
                    const f = u.GROWABLE_HEAP_U8();
                    f.fill(0, _, _ + p);
                    const y = r("WAWebVoipSharedBufferCaptureProcessorConfig").module_url;
                    if (y === "") {
                        throw r("err")("voip: [AV:SystemAudio] Missing worklet module url");
                    }
                    yield c.audioWorklet.addModule(y);
                    const C = new AudioWorkletNode(c, "voip-shared-buffer-capture-processor", {
                        numberOfInputs: 1,
                        numberOfOutputs: 0
                    });
                    this.systemAudioWorkletNode = C;
                    const b = new (S || (S = n("Promise")))(function(e) {
                        C.port.onmessage = function({ data }) {
                            if (!(typeof data !== "object" || data == null)) {
                                if (data.type === "ready") {
                                    e();
                                } else {
                                    o("WAWebVoipAudioCaptureSharedBufferWorklet").handleSharedBufferWorkletDiagnostics(data, "SystemAudio");
                                }
                            }
                        };
                    });
                    const v = yield o("WAPromiseDelays").withTimeout(b, 5000, o("WAWebBoolFunc").returnFalse);
                    if (v === false) {
                        throw r("err")("AudioWorklet processor not ready within 5s");
                    }
                    const L = u.GROWABLE_HEAP_F32();
                    C.port.postMessage({
                        type: "initSharedBuffer",
                        heapBuffer: L.buffer,
                        heapBufferOffset: _,
                        bufferSize: s,
                        targetSampleRate: sampleRate
                    });
                    d.connect(C);
                    const E = u.startSystemAudioReaderThread(_, s, framesPerChunk);
                    if (!E) {
                        throw r("err")("Failed to start system audio reader thread");
                    }
                    C.port.postMessage({
                        type: "start"
                    });
                    o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:systemAudio] capture started"
                    ])));
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.$WAWebVoipVideoDesktopCaptureImpl$p_4 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const systemAudioWorkletNode = this.systemAudioWorkletNode;
                if (systemAudioWorkletNode) {
                    systemAudioWorkletNode.port.postMessage({
                        type: "stop"
                    });
                    systemAudioWorkletNode.disconnect();
                    this.systemAudioWorkletNode = null;
                    try {
                        o("WAWebAudioUtility").getCachedWasmModule()?.stopSystemAudioReaderThread();
                    } catch (error) {
                        o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                            "[AV:systemAudio] reader stop failed"
                        ]))).catching(r("getErrorSafe")(error)).sendLogs("system-audio-reader-stop-failed");
                    }
                }
                for (const n of this.systemAudioTracks){
                    n.stop();
                }
                this.systemAudioTracks = [];
                if (this.systemAudioSourceNode) {
                    this.systemAudioSourceNode.disconnect();
                    this.systemAudioSourceNode = null;
                }
                if (this.systemAudioContext) {
                    this.systemAudioContext.close().catch((e)=>{
                        o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                            "[AV:systemAudio] context close failed"
                        ]))).catching(r("getErrorSafe")(e)).sendLogs("system-audio-context-close-failed");
                    });
                    this.systemAudioContext = null;
                }
                if (this.systemAudioSabBuffer != null) {
                    try {
                        yield o("WAWebAudioUtility").freeWasmBuffer(this.systemAudioSabBuffer);
                    } catch (error) {
                        o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                            "[AV:systemAudio] buffer free failed"
                        ]))).catching(r("getErrorSafe")(error)).sendLogs("system-audio-buffer-free-failed");
                    }
                    this.systemAudioSabBuffer = null;
                }
                o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:systemAudio] capture stopped"
                ])));
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.__cleanup = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const desktopStream = this.desktopStream;
                yield this.$WAWebVoipVideoDesktopCaptureImpl$p_4();
                yield t.prototype.__cleanup.call(this);
                if (!o("WAWebVoipPthreadHardening").isVoipWorkerLifecycleHardeningEnabled() || this.desktopStream === desktopStream) {
                    this.desktopStream = null;
                }
            });
            function r() {
                return e.apply(this, arguments);
            }
            return r;
        })();
        return a;
    })(o("WAWebVoipVideoCaptureBase").WAWebVoipVideoCaptureBase);
    const E = new L;
    l.WAWebVoipVideoDesktopCapture = E;
}, 98);