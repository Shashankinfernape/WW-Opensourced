__d("WAShiftTimer", [
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = (()=>{
        function e(e) {
            const t = this;
            this.$2 = 0;
            this.$3 = 0;
            this.ts = 0;
            this.$4 = 0;
            this.$5 = 0;
            this.$6 = 0;
            this.$7 = void 0;
            this.$8 = function() {
                const { $7: e, $1: n } = t;
                t.$3 = 0;
                t.$2 = 0;
                t.ts = 0;
                t.$4 = 0;
                t.$5 = 0;
                t.$6 = 0;
                t.$7 = void 0;
                n(e);
            };
            this.onOrBefore = function(e, n) {
                s(e);
                const r = Date.now();
                const o = r + e;
                const a = t.$5;
                if (!(a !== 0 && a < o)) {
                    const i = t.$6;
                    if (!(i !== 0 && o < i)) {
                        t.$5 = o;
                        if (t.$3 === 0 && (t.$2 === 0 || o < t.ts)) {
                            t.$9(o, e, n);
                        }
                    }
                }
            };
            this.forceRunNow = function(e) {
                if (t.$2 !== 0) {
                    clearTimeout(t.$2);
                }
                if (t.$3 !== 0) {
                    cancelAnimationFrame(t.$3);
                }
                t.$7 = e;
                t.$8();
            };
            this.cancel = function() {
                if (t.$2 !== 0) {
                    clearTimeout(t.$2);
                }
                if (t.$3 !== 0) {
                    cancelAnimationFrame(t.$3);
                }
                t.$2 = 0;
                t.$3 = 0;
                t.ts = 0;
                t.$4 = 0;
                t.$5 = 0;
                t.$6 = 0;
                t.$7 = void 0;
            };
            this.$1 = e;
        }
        const t = e.prototype;
        t.onOrBeforeRepaint = function(t) {
            if (this.$3 === 0) {
                const e = Date.now();
                const n = this.$6;
                if (!(n !== 0 && e < n)) {
                    const r = this.$5;
                    if (r === 0 || e < r) {
                        this.$5 = e;
                    }
                    if (this.$2 !== 0) {
                        clearTimeout(this.$2);
                        this.$2 = 0;
                    }
                    if (!this.ts || this.ts > e) {
                        this.ts = e;
                    }
                    this.$7 = t;
                    this.$3 = requestAnimationFrame(this.$8);
                }
            }
        };
        t.onOrAfter = function(t, n) {
            s(t);
            const e = Date.now();
            const r = e + t;
            const o = this.$6;
            if (!(o !== 0 && r < o)) {
                const a = this.$5;
                if (!(a !== 0 && a < r)) {
                    this.$6 = r;
                    if (this.$2 === 0 || this.ts < r) {
                        this.$9(r, t, n);
                    }
                }
            }
        };
        t.debounce = function(t, n) {
            s(t);
            this.$10(Date.now(), t, n);
        };
        t.debounceAndCap = function(t, n, r) {
            s(t);
            s(n);
            const e = Date.now();
            const o = e + n;
            const a = this.$6;
            const i = this.$5;
            if ((a === 0 || a <= o) && (i === 0 || o < i)) {
                this.$5 = o;
            }
            this.$10(e, t, r);
        };
        t.forceRunNowIfScheduled = function() {
            if (this.$2 !== 0) {
                clearTimeout(this.$2);
                this.$8();
            } else if (this.$3 !== 0) {
                cancelAnimationFrame(this.$3);
                this.$8();
            }
        };
        t.isScheduled = function() {
            return this.$2 !== 0 || this.$3 !== 0;
        };
        t.$10 = function(t, n, r) {
            const e = t + n;
            const o = this.$6;
            if (!(o !== 0 && e < o)) {
                const a = this.ts;
                const i = this.$5;
                if (i !== 0 && i < e) {
                    if (a < i) {
                        this.$9(i, i - t, r);
                    }
                } else if (a < e) {
                    this.$9(e, n, r);
                }
            }
        };
        t.$9 = function(t, n, r) {
            if (this.$3 !== 0) {
                cancelAnimationFrame(this.$3);
                this.$3 = 0;
            }
            this.$7 = r;
            this.ts = t;
            if (this.$2 !== 0) {
                const e = t - this.$4;
                if (e > -16 && e < 16) {
                    return;
                }
                clearTimeout(this.$2);
            }
            this.$2 = setTimeout(this.$8, n);
            this.$4 = t;
        };
        return e;
    })();
    function s(e) {
        if (!(e >= 0)) {
            throw r("err")("ShiftTimer must be given delayMs >= 0");
        }
    }
    l.ShiftTimer = e;
}, 98);