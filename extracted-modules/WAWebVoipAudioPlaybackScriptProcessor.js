__d("WAWebVoipAudioPlaybackScriptProcessor", [
    "WALogger",
    "WAWebAudioDeviceManager",
    "WAWebAudioRingBuffer",
    "WAWebBackendApi",
    "WAWebNoop",
    "WAWebVoipCallAudioUnlock",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = (()=>{
        function t() {
            this.playbackScriptProcessor = null;
            this.playbackRingBuffer = null;
            this.playbackBuffer = null;
            this.playbackAudioElement = null;
            this.playbackMediaStreamDestination = null;
            this.playbackParams = null;
            this.isActive = false;
        }
        const t_prototype = t.prototype;
        t_prototype.startAudioPlayback = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const n = this;
                const { audioContext, channels, framesPerChunk, playbackBuffer, sampleRate } = t;
                this.playbackBuffer = playbackBuffer;
                this.playbackParams = {
                    sampleRate,
                    channels,
                    framesPerChunk
                };
                const p = 256;
                const _ = yield o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm");
                this.playbackRingBuffer = new (o("WAWebAudioRingBuffer")).WAWebAudioRingBuffer(p, framesPerChunk, "Playback");
                const channelCount = audioContext.destination.channelCount;
                this.playbackScriptProcessor = audioContext.createScriptProcessor(p, 1, channelCount);
                const playbackScriptProcessor = this.playbackScriptProcessor;
                const playbackRingBuffer = this.playbackRingBuffer;
                const playbackBuffer_1 = this.playbackBuffer;
                const C = framesPerChunk * 4;
                if (playbackScriptProcessor != null) {
                    playbackScriptProcessor.onaudioprocess = function(t) {
                        try {
                            if (!n.isActive) {
                                return;
                            }
                            if (playbackBuffer_1 == null) {
                                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                    "voip: [AV:ScriptProcessor:Playback] playback buffer is null"
                                ])));
                                return;
                            }
                            const i = t.outputBuffer;
                            const l = i.length;
                            const d = playbackRingBuffer?.getDataLength() ?? 0;
                            const m = l;
                            const p = l * 2;
                            if (d < m && playbackBuffer_1 != null) {
                                const f = playbackBuffer_1;
                                _.requestAudioDataFromWasmVoip(f, C);
                                const g = Math.floor(f / 4);
                                const b = C / 4;
                                const v = _.GROWABLE_HEAP_F32().subarray(g, g + b);
                                const S = d + v.length > p;
                                if (!S && playbackRingBuffer != null) {
                                    playbackRingBuffer.write(v);
                                } else {
                                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                        "voip: [AV:ScriptProcessor:Playback] buffer overflow detected,\n                requested=",
                                        ", available=",
                                        ", max=",
                                        ""
                                    ])), v.length, d, p);
                                }
                            }
                            const R = playbackRingBuffer?.read(l) ?? new Float32Array(0);
                            for(let L = 0; L < i.numberOfChannels; L++){
                                i.getChannelData(L).set(R);
                            }
                            if (R.length < l) {
                                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                    "voip: [AV:ScriptProcessor:Playback] under-run detected, requested=\n              ",
                                    ", available=",
                                    ""
                                ])), l, R.length);
                            }
                        } catch (error) {
                            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:ScriptProcessor:Playback] audio processing error: ",
                                ""
                            ])), error);
                        }
                    };
                }
                this.playbackMediaStreamDestination = audioContext.createMediaStreamDestination();
                if (this.playbackScriptProcessor != null) {
                    this.playbackScriptProcessor.connect(this.playbackMediaStreamDestination);
                }
                this.playbackAudioElement = o("WAWebVoipCallAudioUnlock").createCallPlaybackElement();
                if (this.playbackMediaStreamDestination != null) {
                    this.playbackAudioElement.srcObject = this.playbackMediaStreamDestination.stream;
                }
                this.playbackAudioElement.play().catch((e)=>{
                    o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:ScriptProcessor:Playback] audio element play failed: ",
                        ""
                    ])), e);
                });
                if (this.playbackAudioElement != null) {
                    yield o("WAWebAudioDeviceManager").applyPreferredAudioOutputSink(this.playbackAudioElement, "AV:ScriptProcessor:Playback");
                }
                this.isActive = true;
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        t_prototype.stopAudioPlayback = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                this.isActive = false;
                try {
                    if (this.playbackAudioElement != null) {
                        const t = this.playbackAudioElement;
                        t.pause();
                        t.srcObject = null;
                        this.playbackAudioElement = null;
                    }
                    if (this.playbackScriptProcessor) {
                        this.playbackScriptProcessor.onaudioprocess = r("WAWebNoop");
                        this.playbackScriptProcessor.disconnect();
                        this.playbackScriptProcessor = null;
                    }
                    if (this.playbackMediaStreamDestination) {
                        this.playbackMediaStreamDestination.disconnect();
                        this.playbackMediaStreamDestination = null;
                    }
                    this.playbackRingBuffer?.reset();
                    this.playbackRingBuffer = null;
                    this.playbackBuffer = null;
                    this.playbackParams = null;
                } catch (error) {
                    o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:ScriptProcessor:Playback] cleanup error: ",
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
    l.WAWebVoipAudioPlaybackScriptProcessor = p;
}, 98);