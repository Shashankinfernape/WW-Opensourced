__d("WAWebVoipAudioPlaybackWorklet", [
    "WALogger",
    "WAResolvable",
    "WAWebAudioDeviceManager",
    "WAWebAudioUtility",
    "WAWebVoipAudioPlaybackWorkletProcessorConfig",
    "WAWebVoipCallAudioUnlock",
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
    const _ = (()=>{
        function t() {
            const t = this;
            this.audioWorkletNode = null;
            this.playbackBuffer = null;
            this.playbackAudioElement = null;
            this.playbackMediaStreamDestination = null;
            this.playbackParams = null;
            this.isProcessorReady = false;
            this.processorReadyResolvable = null;
            this.workletPreloadPromise = null;
            this.isWorkletPreloaded = false;
            this.preloadWorkletModule = function(n) {
                const module_url = r("WAWebVoipAudioPlaybackWorkletProcessorConfig").module_url;
                if (module_url === "") {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:Worklet:Playback] Missing worklet module url, skipping preload"
                    ])));
                    return;
                }
                const i = n.audioWorklet.addModule(module_url).then(()=>{
                    t.isWorkletPreloaded = true;
                    t.workletPreloadPromise = null;
                }).catch((e)=>{
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:Worklet:Playback] worklet preload failed, will load during start: ",
                        ""
                    ])), e);
                    t.isWorkletPreloaded = false;
                    t.workletPreloadPromise = null;
                });
                t.workletPreloadPromise = i;
            };
        }
        const t_prototype = t.prototype;
        t_prototype.startAudioPlayback = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                const { audioContext, channels, framesPerChunk, playbackBuffer, sampleRate } = e;
                this.playbackBuffer = playbackBuffer;
                this.playbackParams = {
                    sampleRate,
                    channels,
                    framesPerChunk
                };
                try {
                    if (this.workletPreloadPromise != null) {
                        yield this.workletPreloadPromise;
                    }
                    if (!this.isWorkletPreloaded) {
                        const m = r("WAWebVoipAudioPlaybackWorkletProcessorConfig").module_url;
                        if (m === "") {
                            throw r("err")("voip: [AV:Worklet:Playback] Missing worklet module url");
                        }
                        yield audioContext.audioWorklet.addModule(m);
                    }
                    this.audioWorkletNode = new AudioWorkletNode(audioContext, "voip-playback-worklet-processor", {
                        numberOfInputs: 0,
                        numberOfOutputs: 1,
                        outputChannelCount: [
                            channels
                        ],
                        processorOptions: {
                            bufferSize: 8192
                        }
                    });
                    const p = this.audioWorkletNode;
                    if (p != null) {
                        p.port.onmessage = function({ data }) {
                            if (!(typeof data !== "object" || data == null)) {
                                const r = data;
                                const a = r.type;
                                if (a === "ready") {
                                    t.isProcessorReady = true;
                                    t.processorReadyResolvable?.resolve();
                                    t.processorReadyResolvable = null;
                                } else if (a === "requestPlaybackData") {
                                    t.sendAudioChunk();
                                } else if (a === "underrun") {
                                    const l = r.count;
                                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                        "voip: [AV:Worklet:Playback] audio underrun detected, count=",
                                        ""
                                    ])), l);
                                }
                            }
                        };
                    }
                    const _ = Date.now();
                    yield this.waitForProcessorReady();
                    const f = Date.now() - _;
                    this.playbackMediaStreamDestination = audioContext.createMediaStreamDestination();
                    if (this.audioWorkletNode != null) {
                        this.audioWorkletNode.connect(this.playbackMediaStreamDestination);
                    }
                    this.playbackAudioElement = o("WAWebVoipCallAudioUnlock").createCallPlaybackElement();
                    if (this.playbackMediaStreamDestination != null) {
                        this.playbackAudioElement.srcObject = this.playbackMediaStreamDestination.stream;
                    }
                    this.playbackAudioElement.play().catch((e)=>{
                        o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:Worklet:Playback] audio element play failed: ",
                            ""
                        ])), e);
                    });
                    if (this.playbackAudioElement != null) {
                        yield o("WAWebAudioDeviceManager").applyPreferredAudioOutputSink(this.playbackAudioElement, "AV:Worklet:Playback");
                    }
                    if (this.audioWorkletNode != null) {
                        this.audioWorkletNode.port.postMessage({
                            type: "start"
                        });
                    }
                } catch (error) {
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:Worklet:Playback] failed to start playback: ",
                        ""
                    ])), error);
                    throw r("err")("voip: [AV:Worklet:Playback] failed to start playback");
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
                const t = 5000;
                if (!this.isProcessorReady) {
                    this.processorReadyResolvable = new (o("WAResolvable")).Resolvable;
                    const n = window.setTimeout(function() {
                        if (e.processorReadyResolvable != null) {
                            e.processorReadyResolvable.reject(r("err")("voip: [AV:Worklet:Playback] processor failed to become ready within 5 second timeout"));
                            e.processorReadyResolvable = null;
                        }
                    }, t);
                    try {
                        yield this.processorReadyResolvable?.promise;
                    } catch (error) {
                        throw error;
                    } finally{
                        window.clearTimeout(n);
                    }
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.sendAudioChunk = function() {
            const playbackParams = this.playbackParams;
            const playbackBuffer = this.playbackBuffer;
            const audioWorkletNode = this.audioWorkletNode;
            if (!(playbackParams == null || playbackBuffer == null || audioWorkletNode == null)) {
                try {
                    const r = playbackParams.framesPerChunk * 4;
                    const a = o("WAWebAudioUtility").requestAudioFromWasm(playbackBuffer, r);
                    const audioData = new Float32Array(a);
                    audioWorkletNode.port.postMessage({
                        type: "audioData",
                        audioData
                    }, [
                        audioData.buffer
                    ]);
                } catch (error) {
                    o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:Worklet:Playback] error sending audio chunk: ",
                        ""
                    ])), error);
                }
            }
        };
        t_prototype.stopAudioPlayback = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                try {
                    if (this.audioWorkletNode != null) {
                        this.audioWorkletNode.port.postMessage({
                            type: "stop"
                        });
                    }
                    if (this.playbackAudioElement != null) {
                        const e = this.playbackAudioElement;
                        e.pause();
                        e.srcObject = null;
                        this.playbackAudioElement = null;
                    }
                    if (this.audioWorkletNode) {
                        this.audioWorkletNode.disconnect();
                        this.audioWorkletNode = null;
                    }
                    if (this.playbackMediaStreamDestination) {
                        this.playbackMediaStreamDestination.disconnect();
                        this.playbackMediaStreamDestination = null;
                    }
                    this.playbackBuffer = null;
                    this.playbackParams = null;
                    this.isProcessorReady = false;
                    this.processorReadyResolvable = null;
                    this.isWorkletPreloaded = false;
                    this.workletPreloadPromise = null;
                } catch (error) {
                    o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:Worklet:Playback] cleanup error: ",
                        ""
                    ])), error);
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.getAudioElement = function() {
            return this.playbackAudioElement;
        };
        t_prototype.getEstimatedOutputLagSamples = function() {
            return 0;
        };
        return t;
    })();
    l.WAWebVoipAudioPlaybackWorklet = _;
}, 98);