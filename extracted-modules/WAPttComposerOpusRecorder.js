__d("WAPttComposerOpusRecorder", [
    "$InternalEnum",
    "Promise",
    "WAGetUserMedia",
    "WAOpusRecorderWorkerClient",
    "asyncToGeneratorRuntime",
    "err",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = {
        bitRate: 16000,
        bufferLength: 4096,
        numberOfChannels: 1,
        encoderSampleRate: 16000,
        maxBuffersPerPage: 40,
        encoderApplication: 2048,
        encoderFrameSize: 20,
        streamOptions: {
            optional: [],
            mandatory: {
                googEchoCancellation: false,
                googAutoGainControl: false,
                googNoiseSuppression: false,
                googHighpassFilter: false
            }
        }
    };
    const u = n("$InternalEnum").Mirrored([
        "INACTIVE",
        "RECORDING",
        "PAUSED",
        "STOPPED"
    ]);
    const c = (()=>{
        function t(t) {
            const o = this;
            this._duration = 0;
            this._recordedPages = [];
            this._state = u.INACTIVE;
            this._isFirstBuffer = false;
            this._requestCount = 0;
            this._pendingFlushResolvers = new Map;
            this._handleEncoderMessage = function({ data }) {
                switch(data.message){
                    case "page":
                        o._storePage(data.page);
                        break;
                    case "flushed":
                        o._handleFlushed(data.requestId);
                        break;
                    default:
                        throw r("err")(`Invalid message event type: ${data.message}`);
                }
            };
            if (!m()) {
                throw r("err")("Recording is not supported in this browser");
            }
            this._createStream = t.createStream;
            this._onDuration = t.onDuration;
            this._onPause = t.onPause;
            this._onResume = t.onResume;
            this._onStart = t.onStart;
            this._onStop = t.onStop;
            this._handlePage = t.onPage;
            this._completeRecordingPromise = new (e || (e = n("Promise")))(function(e) {
                o._resolveCompleteRecordingPromise = e;
            });
            this._audioContext = new AudioContext;
            this._encoderNode = this._audioContext.createScriptProcessor(s.bufferLength, s.numberOfChannels, s.numberOfChannels);
            this._encoderNode.onaudioprocess = function(e) {
                o._encodeBuffers(e.inputBuffer);
            };
            this._monitorNode = this._audioContext.createGain();
        }
        const t_prototype = t.prototype;
        t_prototype.getState = function() {
            return this._state;
        };
        t_prototype.start = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                switch(this._state){
                    case u.RECORDING:
                        return true;
                    case u.STOPPED:
                        return false;
                    case u.PAUSED:
                        return this.resume();
                    case u.INACTIVE:
                        break;
                }
                this._recordedPages = [];
                this._isFirstBuffer = true;
                this._duration = 0;
                const n = o("WAOpusRecorderWorkerClient").getOpusEncoderWorker();
                this._encoder = n;
                n.addEventListener("message", this._handleEncoderMessage);
                const r = yield this._startRecording();
                if (r) {
                    this._onStart?.();
                    this._onDuration?.(this._duration);
                    n.postMessage({
                        command: "encode-init",
                        config: babelHelpers.extends({}, s, {
                            originalSampleRate: this._audioContext.sampleRate
                        })
                    });
                    this._encoderNode.connect(this._audioContext.destination);
                    return true;
                }
                return false;
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.stop = function() {
            let e;
            let t;
            if (this._state !== u.STOPPED) {
                this._state = u.STOPPED;
                if ((e = this._recordingAbortController) != null) {
                    e.abort();
                }
                if (this._audioContext.close) {
                    this._audioContext.close();
                }
                this._monitorNode.disconnect();
                this._encoderNode.disconnect();
                if ((t = this._encoder) != null) {
                    t.postMessage({
                        command: "encode-done"
                    });
                }
            }
        };
        t_prototype.pause = function() {
            let e;
            let t;
            if (this._state === u.RECORDING) {
                this._state = u.PAUSED;
                if ((e = this._recordingAbortController) != null) {
                    e.abort();
                }
                if ((t = this._onPause) != null) {
                    t.call(this);
                }
            }
        };
        t_prototype.resume = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                switch(this._state){
                    case u.RECORDING:
                        return true;
                    case u.STOPPED:
                        return false;
                    case u.INACTIVE:
                        throw r("err")("Attempting to resume recording that hasn't started");
                    case u.PAUSED:
                        break;
                }
                const t = yield this._startRecording();
                if (t) {
                    this._onResume?.();
                    return true;
                }
                return false;
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.getDuration = function() {
            return this._duration;
        };
        t_prototype.getMonitorNode = function() {
            return this._monitorNode;
        };
        t_prototype._encodeBuffers = function(t) {
            if (this._isFirstBuffer) {
                this._isFirstBuffer = false;
                return;
            }
            if (this._state === u.RECORDING) {
                const buffers = [];
                for(let o = 0; o < t.numberOfChannels; o++){
                    buffers[o] = t.getChannelData(o);
                }
                const a = r("nullthrows")(this._encoder);
                a.postMessage({
                    command: "encode",
                    buffers
                });
                this._duration += t.duration;
                this._onDuration?.(this._duration);
            }
        };
        t_prototype._getNextRequestId = function() {
            this._requestCount++;
            return this._requestCount;
        };
        t_prototype._startRecording = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                this._state = u.RECORDING;
                this._recordingAbortController = new AbortController;
                const e = yield p(this._createStream, this._audioContext, [
                    this._encoderNode,
                    this._monitorNode
                ], this._recordingAbortController.signal);
                if (e) {
                    return true;
                }
                this.stop();
                return false;
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype._storePage = function(t) {
            this._recordedPages.push(t);
            if (t[5] & 4) {
                this._handlePage?.(t, true);
                const a = r("nullthrows")(this._encoder);
                a.removeEventListener("message", this._handleEncoderMessage);
                this._resolveCompleteRecordingPromise(d(this._recordedPages));
                this._recordedPages = [];
                this._onStop?.();
                return;
            }
            this._handlePage?.(t, false);
        };
        t_prototype._handleFlushed = function(t) {
            const e = r("nullthrows")(this._pendingFlushResolvers.get(t));
            this._pendingFlushResolvers.delete(t);
            e(d(this._recordedPages));
        };
        t_prototype.getPartialRecording = function() {
            const t = this;
            const o = this._getNextRequestId();
            const a = new (e || (e = n("Promise")))(function(e) {
                t._pendingFlushResolvers.set(o, e);
            });
            const i = r("nullthrows")(this._encoder);
            i.postMessage({
                command: "flush",
                requestId: o
            });
            return a;
        };
        t_prototype.getCompleteRecording = function() {
            return this._completeRecordingPromise;
        };
        return t;
    })();
    function d(_recordedPages) {
        const t = _recordedPages.reduce((acc, _recordedPage)=>acc + _recordedPage.length, 0);
        const n = new Uint8Array(t);
        let r = 0;
        for (const o of _recordedPages){
            n.set(o, r);
            r += o.length;
        }
        return new Blob([
            n
        ], {
            type: "audio/ogg; codecs=opus"
        });
    }
    function m() {
        return !!(window.AudioContext && o("WAGetUserMedia").getUserMedia);
    }
    function p(e, t, n, r) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r) {
            const o = yield e(r);
            if (r.aborted || o == null) {
                return false;
            }
            const a = t.createMediaStreamSource(o);
            n.forEach((e)=>{
                a.connect(e);
            });
            r.addEventListener("abort", function() {
                o.getTracks().forEach((e)=>{
                    e.stop();
                });
                a.disconnect();
            }, {
                once: true
            });
            return true;
        });
        return _.apply(this, arguments);
    }
    l.OpusRecorder = c;
}, 98);