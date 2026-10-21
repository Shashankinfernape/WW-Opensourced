__d("IntervalTrackingBoundedBuffer", [
    "CircularBuffer",
    "ErrorPubSub",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 5000;
    class u {
        constructor(e){
            var t = this;
            this.$6 = 0;
            if (e != null && e <= 0) {
                var n = new Error("Size for a buffer must be greater than zero.");
                n.stack;
                throw n;
            }
            var o = e ?? s;
            this.$4 = o;
            this.$1 = new (r("CircularBuffer"))(o);
            this.$1.onEvict(function() {
                t.$6++;
            });
            this.$2 = [];
            this.$3 = 1;
            this.$5 = 0;
        }
        open() {
            const e = this;
            const t = this.$3++;
            let n = false;
            let r;
            const startIdx = this.$5;
            var a = {
                id: t,
                startIdx,
                hasOverflown: function() {
                    return a.getOverflowSize() > 0;
                },
                getOverflowSize: function() {
                    return r ?? Math.max(e.$6 - startIdx, 0);
                },
                close: function() {
                    if (n) {
                        return [];
                    }
                    n = true;
                    r = e.$6 - startIdx;
                    return e.$7(t);
                }
            };
            this.$2.push(a);
            return a;
        }
        pushElement(t) {
            if (this.$2.length > 0) {
                this.$1.write(t);
                this.$5++;
            }
            return this;
        }
        isActive() {
            return this.$2.length > 0;
        }
        $8(t) {
            return Math.max(t - this.$6, 0);
        }
        $7(n) {
            let t;
            let o;
            let a;
            let i;
            for(let l = 0; l < this.$2.length; l++){
                const s = this.$2[l];
                const { id, startIdx } = s;
                if (id === n) {
                    a = l;
                    i = startIdx;
                } else if (o == null || startIdx < o) {
                    o = startIdx;
                }
                if (t == null || startIdx < t) {
                    t = startIdx;
                }
            }
            if (a == null || t == null || i == null) {
                (e || (e = r("ErrorPubSub"))).reportError(r("err")("messed up state inside IntervalTrackingBoundedBuffer"));
                return [];
            }
            this.$2.splice(a, 1);
            const d = this.$8(i);
            const m = this.$1.read().slice(d);
            const p = this.$8(o ?? this.$5) - this.$8(t);
            if (p > 0) {
                this.$1.dropFirst(p);
                this.$6 += p;
            }
            return m;
        }
    }
    l.default = u;
}, 98);