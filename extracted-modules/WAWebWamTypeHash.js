__d("WAWebWamTypeHash", [
    "WALogger",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = (()=>{
        function e() {}
        const t = e.prototype;
        t.set = function(t) {
            for(const e in t){
                this[e] = t[e];
            }
        };
        return e;
    })();
    function u(e, t, n) {
        const o = {
            $className: {
                value: e
            }
        };
        for(const a in t){
            const i = t[a];
            const l = typeof i === "string" || typeof i === "function" ? {
                type: i
            } : i;
            if (l == null || typeof l !== "object") {
                throw r("err")(`${e} specified with non-object ${JSON.stringify(l) ?? "undefined"}`);
            }
            o[a] = {
                enumerable: true,
                get: c(a, l),
                set: d(a, l)
            };
        }
        const u = ((e)=>{
            function t(t) {
                let n;
                n = e.call(this) || this;
                n.all = {};
                if (t) {
                    n.set(t);
                }
                return n;
            }
            babelHelpers.inheritsLoose(t, e);
            return t;
        })(n);
        Object.defineProperties(u.prototype, o);
        return u;
    }
    function c(e, t) {
        return function() {
            return this.all[e];
        };
    }
    function d(t, { type, set: a }) {
        return function(i) {
            if (i !== this.all[t]) {
                if (i != null) {
                    if (typeof type === "function") {
                        if (!type(i)) {
                            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "type-validator fails ",
                                ""
                            ])), i);
                            const n = new TypeError(`${this.$className}.${t} type-validator failed`);
                            n.stack;
                            throw n;
                        }
                    } else if (typeof i !== type) {
                        const l = new TypeError(`${this.$className}.${t} requires type ${type}, got ${String(i)}`);
                        l.stack;
                        throw l;
                    }
                }
                if (a) {
                    a.call(this, i);
                }
                this.all[t] = i;
            }
        };
    }
    l.TypeHash = s;
    l.defineTypeHash = u;
}, 98);