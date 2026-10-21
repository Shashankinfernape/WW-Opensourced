__d("WAWebVoipMicrophoneLevelAccumulator", [
    "WAWebVoipMicrophoneInputState"
], function(t, n, r, o, a, i, l) {
    "use strict";
    class e {
        constructor(){
            this.$1 = 0;
            this.$2 = 0;
            this.$3 = 0;
            this.$4 = null;
        }
        add(t, n, r) {
            if (this.$4 == null) {
                this.$4 = r;
            }
            const e = Number.isFinite(n) ? Math.max(1, Math.floor(n)) : 1;
            for(var o = Math.floor(t.length / e), a = 0, i = 0, l = 0; l < o; l++){
                const s = l * e;
                let u = 0;
                for(let c = 0; c < e; c++){
                    u += t[s + c];
                }
                u /= e;
                a += u;
                i += u * u;
            }
            this.$1 += a;
            this.$2 += i;
            this.$3 += o;
        }
        flushIfDue(t) {
            const e = this.$4;
            if (e == null || t - e < o("WAWebVoipMicrophoneInputState").LEVEL_REPORT_INTERVAL_MS) {
                return null;
            }
            const n = u(this.$1, this.$2, this.$3);
            this.$1 = 0;
            this.$2 = 0;
            this.$3 = 0;
            const r = t - e;
            this.$4 = t - r % o("WAWebVoipMicrophoneInputState").LEVEL_REPORT_INTERVAL_MS;
            return n;
        }
    }
    const s = -120;
    function u(e, t, n) {
        if (n === 0) {
            return s;
        }
        const r = e / n;
        const o = t / n - r * r;
        if (!(o > 0) || !Number.isFinite(o)) {
            return s;
        }
        return Math.max(s, 10 * Math.log10(o));
    }
    l.WAWebVoipMicrophoneLevelAccumulator = e;
    l.SILENCE_RMS_DBFS = s;
    l.computeRmsDbfs = u;
}, 98);