__d("BitMap", [], function(t, n, r, o, a, i) {
    const e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
    class l {
        constructor(){
            this.$1 = [];
            this.$2 = null;
        }
        set(t) {
            if (this.$2 != null && !this.$1[t]) {
                this.$2 = null;
            }
            this.$1[t] = 1;
            return this;
        }
        toString() {
            const e = [];
            for(let t = 0; t < this.$1.length; t++){
                e.push(this.$1[t] ? 1 : 0);
            }
            if (e.length) {
                return u(e.join(""));
            }
            return "";
        }
        toCompressedString() {
            if (this.$1.length === 0) {
                return "";
            }
            if (this.$2 != null) {
                return this.$2;
            }
            const e = [];
            let t = 1;
            let n = this.$1[0] || 0;
            const r = n.toString(2);
            for(let o = 1; o < this.$1.length; o++){
                const a = this.$1[o] || 0;
                if (a === n) {
                    t++;
                } else {
                    e.push(s(t));
                    n = a;
                    t = 1;
                }
            }
            if (t) {
                e.push(s(t));
            }
            return this.$2 = u(r + e.join(""));
        }
    }
    function s(e) {
        const t = e.toString(2);
        const n = "0".repeat(t.length - 1);
        return n + t;
    }
    function u(t) {
        for(var n = `${t}00000`.match(/[01]{6}/g), r = "", o = 0; n != null && o < n.length; o++){
            r += e[parseInt(n[o], 2)];
        }
        return r;
    }
    i.default = l;
}, 66);