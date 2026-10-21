__d("useWAWebSet", [
    "Promise",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const { useCallback, useState } = u;
    function m(t) {
        const r = o("react-compiler-runtime").c(9);
        let a;
        if (r[0] !== t) {
            a = t ? t() : p;
            r[0] = t;
            r[1] = a;
        } else {
            a = r[1];
        }
        const i = useState(a);
        const l = i[0];
        const s = i[1];
        let u;
        if (r[2] === Symbol.for("react.memo_cache_sentinel")) {
            u = function(r) {
                return new (e || (e = n("Promise")))(function(e) {
                    s(function(t) {
                        const n = new Set(t);
                        n.add(r);
                        e(n);
                        return n;
                    });
                });
            };
            r[2] = u;
        } else {
            u = r[2];
        }
        const add = u;
        let m;
        if (r[3] === Symbol.for("react.memo_cache_sentinel")) {
            m = function(r) {
                return new (e || (e = n("Promise")))(function(e) {
                    s(function(t) {
                        const n = new Set(t);
                        n.delete(r);
                        e(n);
                        return n;
                    });
                });
            };
            r[3] = m;
        } else {
            m = r[3];
        }
        const remove = m;
        let f;
        if (r[4] === Symbol.for("react.memo_cache_sentinel")) {
            f = function(r) {
                return new (e || (e = n("Promise")))(function(e) {
                    s(function(t) {
                        const n = new Set(t);
                        if (n.has(r)) {
                            n.delete(r);
                        } else {
                            n.add(r);
                        }
                        e(n);
                        return n;
                    });
                });
            };
            r[4] = f;
        } else {
            f = r[4];
        }
        const toggle = f;
        let h;
        if (r[5] === Symbol.for("react.memo_cache_sentinel")) {
            h = function(r) {
                const t = r === undefined ? [] : r;
                return new (e || (e = n("Promise")))(function(e) {
                    s(function() {
                        const n = new Set(t);
                        e(n);
                        return n;
                    });
                });
            };
            r[5] = h;
        } else {
            h = r[5];
        }
        const clear = h;
        let C;
        if (r[6] === Symbol.for("react.memo_cache_sentinel")) {
            C = {
                add,
                remove,
                toggle,
                clear
            };
            r[6] = C;
        } else {
            C = r[6];
        }
        let b;
        if (r[7] !== l) {
            b = [
                l,
                C
            ];
            r[7] = l;
            r[8] = b;
        } else {
            b = r[8];
        }
        return b;
    }
    function p() {
        return new Set;
    }
    l.useSet = m;
}, 98);