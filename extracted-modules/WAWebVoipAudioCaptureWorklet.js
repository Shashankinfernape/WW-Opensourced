__d("WAWebVoipAudioCaptureWorklet", [
    "Promise",
    "WALogger",
    "WAWebAudioRingBuffer",
    "WAWebAudioUtility",
    "WAWebVoipAudioCaptureBase",
    "WAWebVoipAudioCaptureWorkletProcessorConfig",
    "WAWebVoipMicrophoneLevelReporter",
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
    const v = (()=>{
        function t() {
            const t = this;
            this.audioWorkletNode = null;
            this.audioBuffer = null;
            this.captureRingBuffer = null;
            this.captureParams = null;
            this.isProcessorReady = false;
            this.mediaStreamSource = null;
            this.workletPreloadPromise = null;
            this.isWorkletPreloaded = false;
            this.inputLevelReporter = null;
            this.preloadWorkletModule = function(n) {
                const module_url = r("WAWebVoipAudioCaptureWorkletProcessorConfig").module_url;
                if (module_url === "") {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:Worklet:Capture] Missing worklet module url, skipping preload"
                    ])));
                    return;
                }
                const i = n.audioWorklet.addModule(module_url).then(()=>{
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:Worklet:Capture] worklet processor module preloaded"
                    ])));
                    t.isWorkletPreloaded = true;
                    t.workletPreloadPromise = null;
                }).catch((e)=>{
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:Worklet:Capture] worklet preload failed, will load during start: ",
                        ""
                    ])), e);
                    t.isWorkletPreloaded = false;
                    t.workletPreloadPromise = null;
                });
                t.workletPreloadPromise = i;
            };
        }
        const t_prototype = t.prototype;
        t_prototype.startAudioCapture = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                const { audioBuffer, audioContext, channels, framesPerChunk, mediaStreamSource, onInputLevel, sampleRate } = e;
                this.audioBuffer = audioBuffer;
                this.mediaStreamSource = mediaStreamSource;
                this.captureParams = {
                    sampleRate,
                    channels,
                    framesPerChunk
                };
                this.inputLevelReporter = onInputLevel != null ? new (o("WAWebVoipMicrophoneLevelReporter")).WAWebVoipMicrophoneLevelReporter(onInputLevel, "Worklet:Capture") : null;
                const f = 128;
                this.captureRingBuffer = new (o("WAWebAudioRingBuffer")).WAWebAudioRingBuffer(f, framesPerChunk, "CaptureWorklet");
                try {
                    if (this.workletPreloadPromise != null) {
                        yield this.workletPreloadPromise;
                    }
                    if (!this.isWorkletPreloaded) {
                        const g = r("WAWebVoipAudioCaptureWorkletProcessorConfig").module_url;
                        if (g === "") {
                            throw r("err")("voip: [AV:Worklet:Capture] Missing worklet module url");
                        }
                        yield audioContext.audioWorklet.addModule(g);
                        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:Worklet:Capture] worklet processor module loaded"
                        ])));
                    }
                    this.audioWorkletNode = new AudioWorkletNode(audioContext, "voip-capture-worklet-processor", {
                        numberOfInputs: 1,
                        numberOfOutputs: 0,
                        processorOptions: {
                            channels
                        }
                    });
                    const h = this.audioWorkletNode;
                    if (h != null) {
                        h.port.onmessage = function({ data }) {
                            if (!(typeof data !== "object" || data == null)) {
                                const r = data;
                                const a = r.type;
                                if (a === "ready") {
                                    t.isProcessorReady = true;
                                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                        "voip: [AV:Worklet:Capture] processor ready"
                                    ])));
                                } else if (a === "audioData") {
                                    const i = r;
                                    const { audioData, sampleRate, channelCount } = i;
                                    if (audioData instanceof Float32Array && typeof sampleRate === "number") {
                                        t.handleAudioData(audioData, sampleRate, typeof channelCount === "number" && channelCount >= 1 ? channelCount : null);
                                    }
                                }
                            }
                        };
                    }
                    yield this.waitForProcessorReady();
                    if (this.audioWorkletNode != null) {
                        mediaStreamSource.connect(this.audioWorkletNode);
                    }
                    if (this.audioWorkletNode != null) {
                        this.audioWorkletNode.port.postMessage({
                            type: "start"
                        });
                    }
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:Worklet:Capture] capture started +"
                    ])));
                } catch (error) {
                    o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:Worklet:Capture] failed to start capture: ",
                        ""
                    ])), error);
                    throw error;
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.waitForProcessorReady = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = this;
                const t = 50;
                return new (b || (b = n("Promise")))(function(n) {
                    const r = function() {
                        if (e.isProcessorReady) {
                            n();
                        } else {
                            window.setTimeout(r, t);
                        }
                    };
                    r();
                });
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.handleAudioData = function(t, n, r) {
            const captureParams = this.captureParams;
            const audioBuffer = this.audioBuffer;
            const captureRingBuffer = this.captureRingBuffer;
            if (!(captureParams == null || audioBuffer == null || captureRingBuffer == null)) {
                try {
                    const s = o("WAWebAudioUtility").maybeDownsampleBuffer(t, n, captureParams.sampleRate);
                    captureRingBuffer.write(s);
                    o("WAWebVoipAudioCaptureBase").WAWebVoipAudioCaptureBase.processCapturedAudioChunks(captureRingBuffer, audioBuffer, captureParams.framesPerChunk, captureParams.channels, t.length, "Worklet:Capture");
                } catch (error) {
                    o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:Worklet:Capture] error handling audio data: ",
                        ""
                    ])), error);
                }
                this.inputLevelReporter?.report(t, r ?? captureParams.channels);
            }
        };
        t_prototype.stopAudioCapture = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:Worklet:Capture] stopping audio capture"
                ])));
                try {
                    if (this.audioWorkletNode != null) {
                        this.audioWorkletNode.port.postMessage({
                            type: "stop"
                        });
                    }
                    if (this.audioWorkletNode) {
                        this.audioWorkletNode.disconnect();
                        this.audioWorkletNode = null;
                        o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:Worklet:Capture] disconnected worklet node"
                        ])));
                    }
                    this.captureRingBuffer?.reset();
                    this.captureRingBuffer = null;
                    this.audioBuffer = null;
                    this.captureParams = null;
                    this.mediaStreamSource = null;
                    this.isProcessorReady = false;
                    this.isWorkletPreloaded = false;
                    this.workletPreloadPromise = null;
                    this.inputLevelReporter = null;
                    o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:Worklet:Capture] cleanup completed"
                    ])));
                } catch (error) {
                    o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:Worklet:Capture] cleanup error: ",
                        ""
                    ])), error);
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.reconnect = function(t) {
            if (this.audioWorkletNode && t) {
                t.connect(this.audioWorkletNode);
                o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:Worklet:Capture] reconnected to new stream"
                ])));
            }
        };
        return t;
    })();
    l.WAWebVoipAudioCaptureWorklet = v;
}, 98);