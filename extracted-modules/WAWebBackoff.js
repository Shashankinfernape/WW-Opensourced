__d("WAWebBackoff", [
    "err"
], function(t, n, r, o, a, i, l) {
    class e {
        constructor(e, t){
            this.backoffIntervals = [].concat(e);
            this.cache = new Map;
            this.resetInterval = t?.resetInterval ?? null;
        }
        add(t) {
            if (this.get(t)) {
                throw r("err")("This entry already exists in the backoff cache");
            }
            this.cache.set(t, {
                lastAttempt: Date.now(),
                intervals: [].concat(this.backoffIntervals),
                attempts: 1
            });
        }
        remove(t) {
            this.cache.delete(t);
        }
        get(t) {
            return this.cache.get(t);
        }
        reset(t) {
            this.remove(t);
            this.add(t);
        }
        shouldBackoff(t) {
            const e = this.get(t);
            if (this.resetInterval != null && e != null) {
                const n = this.resetInterval;
                const r = Date.now() - e.lastAttempt;
                if (r >= n) {
                    this.remove(t);
                    return false;
                }
            }
            if (e != null) {
                const o = e.intervals[0];
                if (o != null) {
                    const a = Date.now() - e.lastAttempt;
                    if (a < o) {
                        return true;
                    }
                }
            }
            return false;
        }
        markAttemptAndShiftInterval(t) {
            const e = this.get(t);
            if (e != null) {
                e.lastAttempt = Date.now();
                e.intervals.shift();
                e.attempts++;
            }
        }
        test(t) {
            if (this.shouldBackoff(t)) {
                return true;
            }
            if (this.get(t) != null) {
                this.markAttemptAndShiftInterval(t);
            } else {
                this.add(t);
            }
            return false;
        }
        getCurrentInterval(t) {
            const e = this.get(t);
            if (e != null) {
                return e.intervals[0];
            }
        }
    }
    l.BackoffCache = e;
}, 98);