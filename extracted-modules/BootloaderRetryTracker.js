__d("BootloaderRetryTracker", [
    "ErrorGuard",
    "performanceAbsoluteNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    class u {
        constructor(e){
            this.$2 = [];
            this.$3 = new Map;
            this.$1 = e;
            this.$4 = this.$1.retries.length > 0;
        }
        getAllRetryAttempts_FOR_DEBUG_ONLY() {
            return this.$3;
        }
        getNumRetriesForSource(t) {
            return this.$3.get(t) ?? 0;
        }
        maybeScheduleRetry(o, a, i) {
            const n = this;
            const l = this.getNumRetriesForSource(o);
            if (!this.$5() || l >= this.$1.retries.length) {
                i();
                return;
            }
            this.$2.push((e || (e = r("performanceAbsoluteNow")))());
            this.$3.set(o, l + 1);
            t.setTimeout(function() {
                if (n.$5()) {
                    a();
                } else {
                    i();
                }
            }, this.$1.retries[l]);
        }
        maybeRetryImmediately(n, o, a) {
            const t = this.getNumRetriesForSource(n);
            if (!this.$5() || t >= this.$1.retries.length) {
                a();
                return;
            }
            this.$2.push((e || (e = r("performanceAbsoluteNow")))());
            this.$3.set(n, t + 1);
            o();
        }
        $5() {
            if (!this.$4) {
                return false;
            }
            const length = this.$2.length;
            if (length < this.$1.abortNum) {
                return true;
            }
            const t = this.$2[length - 1] - this.$2[length - this.$1.abortNum];
            if (t < this.$1.abortTime) {
                (s || (s = r("ErrorGuard"))).applyWithGuard(this.$1.abortCallback, null, []);
                this.$4 = false;
            }
            return this.$4;
        }
    }
    l.default = u;
}, 98);