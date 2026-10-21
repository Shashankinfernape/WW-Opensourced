__d("WAWebPonyfillsHeaders", [
    "WAIterableOperators",
    "WAWebPonyfillsSymbol"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        throw new TypeError(`"${e}" is read-only`);
    }
    const c = "Headers" in window && Headers ? Headers : (s = typeof r("WAWebPonyfillsSymbol") === "function" ? r("WAWebPonyfillsSymbol").iterator : "@@iterator", e = (()=>{
        function e(t) {
            const n = this;
            this.$1 = {};
            if (t instanceof e) {
                const r = function() {
                    const e = o[0];
                    const t = o[1];
                    const r = t.split(", ");
                    r.forEach((t)=>{
                        n.append(e, t);
                    });
                };
                for (var o of t.entries()){
                    r();
                }
            } else if (typeof t === "object") {
                const a = function(r) {
                    const e = t[r];
                    const o = e.split(", ");
                    o.forEach((e)=>{
                        n.append(r, e);
                    });
                };
                for(const i in t){
                    a(i);
                }
            }
        }
        const t = e.prototype;
        t.append = function(t, n) {
            const e = t.toLowerCase();
            if (e in this.$1) {
                this.$1[e].push(n);
            } else {
                this.$1[e] = [
                    n
                ];
            }
        };
        t.delete = function(t) {
            const e = t.toLowerCase();
            delete this.$1[e];
        };
        t.entries = function() {
            const e = this;
            const t = Object.keys(this.$1).map((t)=>[
                    t,
                    e.get(t) || ""
                ]);
            return o("WAIterableOperators").iteratorFromArray(t);
        };
        t.get = function(t) {
            const e = t.toLowerCase();
            if (e in this.$1) {
                return this.$1[e].join(", ");
            }
            return null;
        };
        t.has = function(t) {
            const e = t.toLowerCase();
            return e in this.$1;
        };
        t.keys = function() {
            return o("WAIterableOperators").mapIterator(this.entries(), function([t]) {
                return t;
            });
        };
        t.set = function(t, n) {
            const e = t.toLowerCase();
            this.$1[e] = [
                n
            ];
        };
        t.values = function() {
            return o("WAIterableOperators").mapIterator(this.entries(), function([t, n]) {
                return n;
            });
        };
        t[s] = function() {
            return this.entries();
        };
        t.toString = function() {
            return "[Object Headers]";
        };
        return e;
    })(), e);
    l.default = c;
}, 98);