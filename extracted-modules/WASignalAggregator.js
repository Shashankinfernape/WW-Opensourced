__d("WASignalAggregator", [
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    class e {
        constructor(){
            var e = this;
            this.$1 = false;
            this.$2 = new AbortController;
            this.$3 = new Set;
            this.signal = this.$2.signal;
            this.$5 = function(t) {
                e.delete(t.currentTarget);
                e.$6();
            };
        }
        add(...t) {
            this.$4();
            for (const r of t){
                if (!r.aborted) {
                    r.addEventListener("abort", this.$5);
                    this.$3.add(r);
                }
            }
            this.$6();
        }
        $6() {
            if (!this.$1) {
                const e = Array.from(this.$3).every((e)=>e.aborted);
                if (e) {
                    this.dispose();
                    this.$2.abort();
                }
            }
        }
        delete() {
            this.$4();
            this.$7(...arguments);
        }
        $7(...n) {
            let e = false;
            for (const o of n){
                if (this.$3.delete(o)) {
                    e = true;
                    o.removeEventListener("abort", this.$5);
                }
            }
            if (e) {
                this.$6();
            }
        }
        $4() {
            if (this.$1) {
                throw r("err")("Attempt to modify disposed SignalAggregator");
            }
        }
        dispose() {
            if (!this.$1) {
                this.$1 = true;
                for (const e of this.$3){
                    this.$7(e);
                }
            }
        }
        getSignals__INTERNAL() {
            return this.$3;
        }
    }
    l.default = e;
}, 98);