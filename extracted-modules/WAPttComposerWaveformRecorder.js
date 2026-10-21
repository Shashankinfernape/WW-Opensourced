__d("WAPttComposerWaveformRecorder", [
    "WAPttComposerRecorderPollableTimer",
    "WAPttComposerScaleWaveform",
    "WAStartAnimationLoop",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    class e {
        constructor(e, t){
            var n = this;
            this.$2 = new (r("WAPttComposerRecorderPollableTimer"));
            this.$3 = [];
            this.$4 = [];
            this.$5 = 0;
            this.$10 = function() {
                n.$5 = Math.max(n.$5, n.$11());
                const e = n.$3.length / n.$1;
                const t = Math.floor((n.getDuration() - e) * n.$1);
                if (t !== 0) {
                    for(let r = 0; r < t; r++){
                        n.$3.push(n.$5);
                    }
                    n.$5 = 0;
                }
            };
            this.$12 = 0;
            this.$7 = s(e);
            e.connect(this.$7);
            this.$1 = t;
        }
        start() {
            this.$2.start();
            this.$9();
        }
        stop() {
            this.$2.stop();
            this.$6?.();
        }
        pause() {
            this.$2.pause();
            this.$6?.();
        }
        resume() {
            this.$2.resume();
            this.$9();
        }
        $9() {
            this.$6 = o("WAStartAnimationLoop").startAnimationLoop(this.$10);
        }
        $11() {
            const t = r("nullthrows")(this.$7);
            this.$8 = this.$8 ?? new Uint8Array(t.frequencyBinCount);
            const n = this.$8;
            t.getByteFrequencyData(n);
            return Math.max(...Array.from(n)) / 255;
        }
        commitSamples(t) {
            const e = Math.floor(t * this.$1);
            const n = e - this.$4.length;
            const o = this.$3.length - this.$12;
            if (!(n === 0 || o === 0)) {
                const a = this.$3.slice(this.$12, this.$3.length);
                const i = r("WAPttComposerScaleWaveform")(a, n);
                for (const l of i){
                    this.$4.push(l);
                }
                this.$12 = this.$3.length;
            }
        }
        getSamples() {
            return this.$3;
        }
        getDuration() {
            const t = this.$2.getTime() ?? 0;
            return t / 1000;
        }
        getCorrectedSamples() {
            return this.$4;
        }
    }
    function s(e) {
        const t = e.context.createAnalyser();
        t.fftSize = 32;
        t.smoothingTimeConstant = 0;
        t.minDecibels = -60;
        t.maxDecibels = -10;
        return t;
    }
    l.default = e;
}, 98);