__d("styleq-0.2.1", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = {};
    const l = {
        exports: e
    };
    function s() {
        Object.defineProperty(e, "__esModule", {
            value: true
        });
        e.styleq = undefined;
        const t = new WeakMap;
        const n = "$$css";
        function r(e) {
            let r;
            let o;
            let a;
            if (e != null) {
                r = e.disableCache === true;
                o = e.disableMix === true;
                a = e.transform;
            }
            return function(...args) {
                const e = [];
                let i = "";
                let l = null;
                let s = "";
                let u = r ? null : t;
                const c = new Array(args.length);
                for(let d = 0; d < args.length; d++){
                    c[d] = args[d];
                }
                while(c.length > 0){
                    const m = c.pop();
                    if (!(m == null || m === false)) {
                        if (Array.isArray(m)) {
                            for(let p = 0; p < m.length; p++){
                                c.push(m[p]);
                            }
                            continue;
                        }
                        const _ = a != null ? a(m) : m;
                        if (_.$$css != null) {
                            let f = "";
                            if (u != null && u.has(_)) {
                                const g = u.get(_);
                                if (g != null) {
                                    f = g[0];
                                    s = g[2];
                                    e.push(...g[1]);
                                    u = g[3];
                                }
                            } else {
                                const h = [];
                                for(const y in _){
                                    const C = _[y];
                                    if (y === n) {
                                        const b = _[y];
                                        if (b !== true) {
                                            s = s ? `${b}; ${s}` : b;
                                        }
                                        continue;
                                    }
                                    if (typeof C === "string" || C === null) {
                                        if (!e.includes(y)) {
                                            e.push(y);
                                            if (u != null) {
                                                h.push(y);
                                            }
                                            if (typeof C === "string") {
                                                f += f ? ` ${C}` : C;
                                            }
                                        }
                                    } else {
                                        `styleq: ${y} typeof ${String(C)} is not "string" or "null".`;
                                    }
                                }
                                if (u != null) {
                                    const v = new WeakMap;
                                    u.set(_, [
                                        f,
                                        h,
                                        s,
                                        v
                                    ]);
                                    u = v;
                                }
                            }
                            if (f) {
                                i = i ? `${f} ${i}` : f;
                            }
                        } else if (o) {
                            if (l == null) {
                                l = {};
                            }
                            l = {
                                ..._,
                                ...l
                            };
                        } else {
                            let S = null;
                            for(const R in _){
                                const L = _[R];
                                if (L !== undefined) {
                                    if (!e.includes(R)) {
                                        if (L != null) {
                                            if (l == null) {
                                                l = {};
                                            }
                                            if (S == null) {
                                                S = {};
                                            }
                                            S[R] = L;
                                        }
                                        e.push(R);
                                        u = null;
                                    }
                                }
                            }
                            if (S != null) {
                                l = Object.assign(S, l);
                            }
                        }
                    }
                }
                const E = [
                    i,
                    l,
                    s
                ];
                return E;
            };
        }
        const o = e.styleq = r();
        o.factory = r;
    }
    let u = false;
    function c() {
        if (!u) {
            u = true;
            s();
        }
        return l.exports;
    }
    const d = {};
    const m = {
        exports: d
    };
    function p() {
        m.exports = c();
    }
    let _ = false;
    function f() {
        if (!_) {
            _ = true;
            p();
        }
        return m.exports;
    }
    function g(e) {
        switch(e){
            case undefined:
                return f();
        }
    }
    a.exports = g;
}, null);