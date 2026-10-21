__d("WAPttComposerRecorder", [
    "WAPttComposerOpusRecorder",
    "WAPttComposerWaveformRecorder",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = (()=>{
        function e(e) {
            const t = this;
            this._handleOpusRecorderDuration = function() {
                t._waveformRecorder.commitSamples(t.getDuration());
                t._onDuration?.(t.getDuration());
            };
            this._onDuration = e.onDuration;
            this._opusRecorder = new (o("WAPttComposerOpusRecorder")).OpusRecorder({
                createStream: e.createStream,
                onDuration: this._handleOpusRecorderDuration,
                onPage: function(n, r) {
                    e.onPage?.(n, r);
                }
            });
            this._waveformRecorder = new (r("WAPttComposerWaveformRecorder"))(this._opusRecorder.getMonitorNode(), e.waveformSampleRate);
        }
        const e_prototype = e.prototype;
        e_prototype.start = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = yield this._opusRecorder.start();
                if (e) {
                    this._waveformRecorder.start();
                    return true;
                }
                return false;
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        e_prototype.stop = function() {
            this._opusRecorder.stop();
            this._waveformRecorder.stop();
        };
        e_prototype.pause = function() {
            this._opusRecorder.pause();
            this._waveformRecorder.pause();
        };
        e_prototype.resume = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = yield this._opusRecorder.resume();
                if (e) {
                    this._waveformRecorder.resume();
                    return true;
                }
                return false;
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        e_prototype.getDuration = function() {
            return this._opusRecorder.getDuration();
        };
        e_prototype.getPreciseDuration = function() {
            return this._waveformRecorder.getDuration() ?? 0;
        };
        e_prototype.getLiveWaveformSamples = function() {
            return this._waveformRecorder.getSamples();
        };
        e_prototype.getCorrectedWaveformSamples = function() {
            return this._waveformRecorder.getCorrectedSamples();
        };
        e_prototype.getPartialRecording = function() {
            return this._opusRecorder.getPartialRecording();
        };
        e_prototype.getCompleteRecording = function() {
            return this._opusRecorder.getCompleteRecording();
        };
        return e;
    })();
    l.default = e;
}, 98);