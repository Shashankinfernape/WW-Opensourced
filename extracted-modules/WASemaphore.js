__d("WASemaphore", [
    "Promise",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = (()=>{
        function t(e = 1) {
            this.$1 = 0;
            this.$3 = [];
            this.$2 = e;
        }
        const o = t.prototype;
        o.acquire = function() {
            const t = this;
            return new (e || (e = n("Promise")))(function(e, n) {
                t.$4(e, n);
            });
        };
        o.availablePermits = function() {
            return this.$2 - this.$1;
        };
        o.$5 = function() {
            this.$1--;
            this.$6();
        };
        o.$4 = function(t, n) {
            const e = this;
            if (this.$1 < this.$2) {
                this.$1++;
                let o = false;
                t({
                    release: function() {
                        if (o) {
                            throw r("err")("Permit has already been released");
                        }
                        o = true;
                        e.$5();
                    }
                });
            } else {
                this.$7(t, n);
            }
        };
        o.$7 = function(t, n) {
            this.$3.push([
                t,
                n
            ]);
        };
        o.$6 = function() {
            if (this.$3.length !== 0) {
                const e = this.$3.shift();
                const t = e[0];
                const n = e[1];
                this.$4(t, n);
            }
        };
        return t;
    })();
    l.Semaphore = s;
}, 98);