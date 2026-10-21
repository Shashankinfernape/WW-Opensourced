__d("WAWebVoipAudioCaptureScriptProcessor", [
    "WALogger",
    "WAWebAudioRingBuffer",
    "WAWebAudioUtility",
    "WAWebNoop",
    "WAWebVoipAudioCaptureBase",
    "WAWebVoipMicrophoneLevelReporter",
    "asyncToGeneratorRuntime"
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
            this.scriptProcessor = null;
            this.captureRingBuffer = null;
            this.audioBuffer = null;
            this.captureParams = null;
            this.inputLevelReporter = null;
        }
        const t_prototype = t.prototype;
        t_prototype.startAudioCapture = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const n = this;
                const { audioBuffer, audioContext, channels, framesPerChunk, mediaStreamSource, onInputLevel, sampleRate } = t;
                this.audioBuffer = audioBuffer;
                this.captureParams = {
                    sampleRate,
                    channels,
                    framesPerChunk
                };
                this.inputLevelReporter = onInputLevel != null ? new (o("WAWebVoipMicrophoneLevelReporter")).WAWebVoipMicrophoneLevelReporter(onInputLevel, "ScriptProcessor") : null;
                const m = 256;
                this.captureRingBuffer = new (o("WAWebAudioRingBuffer")).WAWebAudioRingBuffer(m, framesPerChunk, "Capture");
                this.scriptProcessor = audioContext.createScriptProcessor(m, channels, channels);
                mediaStreamSource.connect(this.scriptProcessor);
                if (this.scriptProcessor != null) {
                    this.scriptProcessor.connect(audioContext.destination);
                }
                if (this.scriptProcessor != null) {
                    this.scriptProcessor.onaudioprocess = function(t) {
                        const { captureParams, audioBuffer, captureRingBuffer } = n;
                        if (!(!captureParams || audioBuffer == null)) {
                            let l = null;
                            try {
                                const s = t.inputBuffer.sampleRate;
                                const u = [];
                                for(let c = 0; c < captureParams.channels; c++){
                                    u.push(t.inputBuffer.getChannelData(c));
                                }
                                l = o("WAWebAudioUtility").interleaveTypedArrays(Float32Array, u);
                                const d = o("WAWebAudioUtility").maybeDownsampleBuffer(l, s, captureParams.sampleRate);
                                if (captureRingBuffer != null) {
                                    captureRingBuffer.write(d);
                                }
                                if (captureRingBuffer != null && audioBuffer != null) {
                                    o("WAWebVoipAudioCaptureBase").WAWebVoipAudioCaptureBase.processCapturedAudioChunks(captureRingBuffer, audioBuffer, captureParams.framesPerChunk, captureParams.channels, l.length, "ScriptProcessor");
                                }
                            } catch (error) {
                                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                    "voip: [AV:ScriptProcessor] audio processing error: ",
                                    ""
                                ])), error);
                            }
                            if (l != null) {
                                n.inputLevelReporter?.report(l, captureParams.channels);
                            }
                        }
                    };
                }
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:ScriptProcessor] audio capture started +"
                ])));
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        t_prototype.stopAudioCapture = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:ScriptProcessor] stopping audio capture"
                ])));
                try {
                    if (this.scriptProcessor) {
                        this.scriptProcessor.onaudioprocess = r("WAWebNoop");
                        this.scriptProcessor.disconnect();
                        this.scriptProcessor = null;
                        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:ScriptProcessor] disconnected script processor"
                        ])));
                    }
                    this.captureRingBuffer?.reset();
                    this.captureRingBuffer = null;
                    this.audioBuffer = null;
                    this.captureParams = null;
                    this.inputLevelReporter = null;
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:ScriptProcessor] cleanup completed"
                    ])));
                } catch (error) {
                    o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:ScriptProcessor] cleanup error: ",
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
            if (this.scriptProcessor && t) {
                t.connect(this.scriptProcessor);
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:ScriptProcessor] reconnected to new stream src"
                ])));
            }
        };
        return t;
    })();
    l.WAWebVoipAudioCaptureScriptProcessor = _;
}, 98);