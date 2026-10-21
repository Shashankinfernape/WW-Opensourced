__d("WAPriorityQueue", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = (()=>{
        function e(e, t) {
            this.$2 = e;
            this.$1 = [];
            this.$3(t);
        }
        const t = e.prototype;
        t.size = function() {
            return this.$1.length;
        };
        t.$3 = function(t) {
            const e = this;
            if (t != null && t.length) {
                t.forEach((t)=>{
                    e.push(t);
                });
            }
        };
        t.$4 = function(t, n) {
            const e = this.$1[n];
            this.$1[n] = this.$1[t];
            this.$1[t] = e;
        };
        t.$5 = function(t = 0) {
            if (t !== 0) {
                const e = this.$6(t);
                const n = e * 2 + 1;
                const r = e * 2 + 2;
                const o = this.$1.length;
                if (!(t >= o)) {
                    let a = this.$7(e);
                    let i = e;
                    if (n < o) {
                        const l = this.$7(n);
                        if (a > l) {
                            i = n;
                            a = l;
                        }
                    }
                    if (r < o) {
                        const s = this.$7(r);
                        if (a > s) {
                            i = r;
                        }
                    }
                    if (i !== e) {
                        this.$4(i, e);
                        this.$5(e);
                    }
                }
            }
        };
        t.$8 = function(t = 0) {
            const e = t * 2 + 1;
            const n = t * 2 + 2;
            const r = this.$1.length;
            if (!(t >= r)) {
                let o = this.$7(t);
                let a = t;
                if (e < r) {
                    const i = this.$7(e);
                    if (o > i) {
                        a = e;
                        o = i;
                    }
                }
                if (n < r) {
                    const l = this.$7(n);
                    if (o > l) {
                        a = n;
                    }
                }
                if (a !== t) {
                    this.$4(a, t);
                }
                if (e < r) {
                    this.$8(e);
                }
                if (n < r) {
                    this.$8(n);
                }
            }
        };
        t.$7 = function(t) {
            return this.$2(this.$1[t]);
        };
        t.$6 = function(t) {
            if (t % 2 === 0) {
                return (t - 2) / 2;
            }
            return (t - 1) / 2;
        };
        t.push = function(t) {
            this.$1.push(t);
            const e = this.$1.length - 1;
            this.$5(e);
        };
        t.pull = function() {
            const e = this.$1.shift();
            this.heapify();
            return e;
        };
        t.heapify = function() {
            this.$8(0);
        };
        t.peek = function() {
            return this.$1[0];
        };
        return e;
    })();
    i.default = e;
}, 66);