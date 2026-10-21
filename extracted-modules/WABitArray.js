__d("WABitArray", [
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 8;
    class s {
        constructor(t){
            if (t <= 0) {
                throw r("err")("BitArray:numBits should be positive");
            }
            this.$1 = t;
            this.$2 = new Uint8Array(Math.ceil(this.$1 / e));
        }
        get(t) {
            const e = this.$3(t);
            const n = e[0];
            const r = e[1];
            return !!(this.$2[n] >> r & 1);
        }
        set(t) {
            const e = this.$3(t);
            const n = e[0];
            const r = e[1];
            this.$2[n] |= 1 << r;
        }
        unset(t) {
            const e = this.$3(t);
            const n = e[0];
            const r = e[1];
            this.$2[n] &= ~(1 << r);
        }
        toggle(t) {
            const e = this.$3(t);
            const n = e[0];
            const r = e[1];
            this.$2[n] ^= 1 << r;
        }
        clear() {
            this.$2 = new Uint8Array(Math.ceil(this.$1 / e));
        }
        toArray() {
            const e = [];
            for(let t = 0; t < this.$1; t++){
                e.push(this.get(t));
            }
            return e;
        }
        toString() {
            return this.toArray().map((e)=>{
                if (e) {
                    return "1";
                }
                return "0";
            }).join("");
        }
        toNumber() {
            return parseInt(this.toString(), 2);
        }
        $3(n) {
            if (n < 0 || n >= this.$1) {
                throw r("err")("BitArray:index out of bounds");
            }
            const t = Math.floor(n / e);
            const o = n - t * e;
            return [
                t,
                o
            ];
        }
    }
    l.default = s;
}, 98);