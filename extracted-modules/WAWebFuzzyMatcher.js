__d("WAWebFuzzyMatcher", [
    "WAWebFuzzySearchMatchResult",
    "WAWebIdentityFunction",
    "WAWebL10NIsWordSeparator"
], function(t, n, r, o, a, i, l) {
    const e = (()=>{
        function e(e, t) {
            this.length = e;
            this.cost = t;
        }
        const t = e.prototype;
        t.compareTo = function(t) {
            if (this.cost !== t.cost) {
                return this.cost - t.cost;
            }
            return t.length - this.length;
        };
        t.plus = function(n, r) {
            return new e(this.length + n, this.cost + r);
        };
        return e;
    })();
    const s = 1;
    const u = 1;
    const c = 1;
    const d = 1;
    const m = Object.freeze(new e(0, 0));
    function p({ dataCharIndex: t, input: n, query: r, queryCharIndex: o }) {
        if (n[t].toLowerCase() === r[o].toLowerCase()) {
            return 0;
        }
        return c;
    }
    function _({ costTolerance: n, input: r, prefixCost: a, query: i, separatorFunction: l }) {
        for(var c = i.length, _ = r.length, f = new Array(c + 1).fill(m), g = new Array(c + 1).fill(m), h = new Array(c + 1).fill(m), y = new (o("WAWebFuzzySearchMatchResult")).WAWebFuzzySearchMatchResult(0, _, _), C = [
            m,
            m,
            m,
            m
        ], b = 0; b < c; b++){
            f[b] = new e(0, b * u);
            g[b] = new e(0, b * u);
        }
        f[c] = new e(0, c * u);
        g[c] = new e(0, c * u);
        for(let v = 0; v < _; v++){
            const S = r[v];
            const R = l(S) ? 0 : a;
            h[0] = new e(0, R);
            for(let L = 0; L < c; L++){
                const E = g[L + 1].plus(1, s);
                const k = h[L].plus(0, u);
                const I = g[L].plus(1, p({
                    dataCharIndex: v,
                    input: r,
                    query: i,
                    queryCharIndex: L
                }));
                let T = void 0;
                if (L > 0 && v > 0) {
                    const D = p({
                        dataCharIndex: v,
                        input: r,
                        query: i,
                        queryCharIndex: L - 1
                    }) + p({
                        dataCharIndex: v - 1,
                        input: r,
                        query: i,
                        queryCharIndex: L
                    }) + d;
                    T = f[L - 1].plus(2, D);
                } else {
                    T = new e(0, Number.MAX_SAFE_INTEGER);
                }
                C[0] = E;
                C[1] = k;
                C[2] = I;
                C[3] = T;
                C.sort((e, t)=>e.compareTo(t));
                h[L + 1] = C[0];
            }
            const x = h[c];
            const $ = new (o("WAWebFuzzySearchMatchResult")).WAWebFuzzySearchMatchResult(v - x.length + 1, x.length, x.cost);
            if ($.compareTo(y) < 0) {
                y = $;
            }
            const P = f;
            f = g;
            g = h;
            h = P;
        }
        if (y.cost <= n) {
            return y;
        }
        return o("WAWebFuzzySearchMatchResult").WAWebFuzzySearchMatchResult.noMatch();
    }
    function f({ costTolerance: n = 0, input: r, normalizationFunction: i = o("WAWebIdentityFunction").identityFunction, prefixCost: s = 0, query: u, separatorFunction: d = o("WAWebL10NIsWordSeparator").isWordSeparator }) {
        if (r == null || r.trim() === "" || u == null || u.trim() === "") {
            return o("WAWebFuzzySearchMatchResult").WAWebFuzzySearchMatchResult.noMatch();
        }
        const m = i(r);
        const p = i(u);
        if (p.length - m.length > n) {
            return o("WAWebFuzzySearchMatchResult").WAWebFuzzySearchMatchResult.noMatch();
        }
        return _({
            costTolerance: n,
            input: m,
            prefixCost: s,
            query: p,
            separatorFunction: d
        });
    }
    l.fuzzyMatch = f;
}, 98);