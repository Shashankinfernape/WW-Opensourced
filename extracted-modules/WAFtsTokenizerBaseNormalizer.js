__d("WAFtsTokenizerBaseNormalizer", [], function(t, n, r, o, a, i) {
    "use strict";
    class e {
        constructor(e){
            var t = this;
            var n = [];
            this.$1 = new Map;
            e.forEach(([r, o])=>{
                t.$1.set(r, o);
                n.push(r);
            });
            this.$2 = new RegExp(n.join("|"), "g");
        }
        normalize(t = "") {
            const e = this;
            return t.replace(this.$2, (t)=>{
                const n = e.$1.get(t);
                return n ?? t;
            });
        }
    }
    i.default = e;
}, 66);