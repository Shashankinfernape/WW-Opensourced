__d("WABridgeBatcher", [
    "WAShiftTimer"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 20;
    const s = 1000;
    const u = (()=>{
        function t(t, n, r) {
            const a = this;
            this.$1 = null;
            this.$6 = Date.now();
            this.$7 = new (o("WAShiftTimer")).ShiftTimer(function() {
                const e = a.$1;
                if (e != null) {
                    a.$1 = null;
                    a.$2(e);
                }
            });
            this.$2 = n;
            this.$3 = t;
            this.$5 = r ?? e;
            this.$4 = this.$5;
        }
        const n = t.prototype;
        n.addEvent = function(t) {
            const e = this.$1;
            this.$1 = e ? this.$3(e, t) : [
                t
            ];
            if (!this.$7.isScheduled()) {
                let n = this.$4;
                if (n < 1) {
                    const r = Date.now();
                    const o = Math.max(r - this.$6, 0) / s;
                    n = Math.min(n + o, this.$5);
                    this.$4 = n;
                    this.$6 = r;
                }
                let a;
                if (n >= 1) {
                    a = 0;
                    this.$4 = n - 1;
                } else {
                    a = Math.ceil(s * (1 - n));
                    this.$4 = 0;
                }
                this.$7.onOrBefore(a);
            }
        };
        n.cancel = function() {
            this.$1 = null;
            this.$7.cancel();
        };
        return t;
    })();
    l.BridgeBatcher = u;
}, 98);