__d("WAWebVoipStatsTracker", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = 10000;
    function l(e) {
        return {
            min: e,
            max: e,
            total: e,
            samples: 1
        };
    }
    class s {
        constructor(){
            this.$1 = new Map;
            this.$2 = null;
            this.$3 = null;
        }
        record(t, n) {
            const e = this.$1.get(t);
            if (e == null) {
                this.$1.set(t, l(n));
            } else {
                e.min = Math.min(e.min, n);
                e.max = Math.max(e.max, n);
                e.total += n;
                e.samples++;
            }
        }
        getStats(t) {
            return this.$1.get(t);
        }
        getMostActiveId() {
            let e = null;
            let t = 0;
            for (const [r, o] of this.$1){
                if (o.samples > t) {
                    t = o.samples;
                    e = r;
                }
            }
            return e;
        }
        formatStats(t) {
            const e = this.$1.get(t);
            if (e == null || e.samples === 0) {
                return null;
            }
            const n = Math.round(e.total / e.samples);
            return `min=${e.min}, max=${e.max}, avg=${n}, samples=${e.samples}`;
        }
        formatSummary() {
            const e = this.getMostActiveId();
            if (e == null) {
                return null;
            }
            const t = this.$1.get(e);
            if (t == null || t.samples === 0) {
                return null;
            }
            const n = Math.round(t.total / t.samples);
            return `${t.samples} samples, min=${t.min}, max=${t.max}, avg=${n}`;
        }
        resetAll() {
            for (const e of this.$1.values()){
                e.min = Infinity;
                e.max = 0;
                e.total = 0;
                e.samples = 0;
            }
        }
        remove(t) {
            this.$1.delete(t);
        }
        clear() {
            this.$1.clear();
        }
        startPolling(t) {
            const e = this;
            if (this.$3 == null) {
                this.$2 = t;
                this.$3 = globalThis.setInterval(function() {
                    t.onInterval(e);
                    if (t.resetPerInterval === true) {
                        e.resetAll();
                    }
                }, t.intervalMs);
            }
        }
        stopPolling() {
            if (this.$3 != null) {
                globalThis.clearInterval(this.$3);
                this.$3 = null;
            }
            this.$2 = null;
            const e = this.formatSummary();
            this.clear();
            return e;
        }
        isPolling() {
            return this.$3 != null;
        }
    }
    i.DEFAULT_POLL_INTERVAL_MS = e;
    i.VoipStatsTracker = s;
}, 66);