__d("WAWebGetters", [
    "WAWebABProps",
    "err"
], function(t, n, r, o, a, i, l) {
    const e = -1;
    const s = function() {
        const e = u;
        u++;
        return e;
    };
    var u = 0;
    const c = [];
    function d() {
        let e = 0;
        for (const n of c){
            e += n.size;
            n.clear();
        }
        return e;
    }
    function m(t) {
        const n = t || {};
        const { root: a, rootEqualityCheck: i, createCache: l } = n;
        const u = l === void 0 ? k : l;
        const d = u();
        c.push(d);
        const m = s();
        const f = function() {
            const e = g;
            g++;
            return e;
        };
        var g = 0;
        let h = [];
        let y = false;
        const C = function() {
            const e = h;
            if (e != null && (h = null, y = o("WAWebABProps").getABPropConfigValue("web_getters_lazy_slot_allocation"), !y)) {
                for(let t = 0; t < e.length; t++){
                    v(e[t], f());
                }
            }
        };
        const b = function() {
            const t = {
                prevResultIndex: e,
                changedAtIndex: e,
                checkedAtIndex: e,
                allocateGetterId: f,
                resolveAllocationOrder: C
            };
            if (h != null) {
                h.push(t);
            } else if (!y) {
                v(t, f());
            }
            return t;
        };
        const S = a ?? _({
            getterGroupId: m,
            slots: b(),
            resultEqualityCheck: i ?? E,
            cache: d
        });
        if (S.kind !== "identity") {
            throw r("err")(`root must be an identity getter but got kind ${S.kind}`);
        }
        return {
            field: function(t, n) {
                const e = n || {};
                const { default: r, getDefault: o, resultEqualityCheck: a } = e;
                const i = a === void 0 ? E : a;
                let l;
                if (o != null) {
                    l = function([r]) {
                        return r[t] ?? o();
                    };
                } else if (r === void 0) {
                    l = function([e]) {
                        return e[t];
                    };
                } else {
                    l = function([o]) {
                        return o[t] ?? r;
                    };
                }
                return p({
                    getterGroupId: m,
                    slots: b(),
                    root: S,
                    cache: d,
                    resultFunc: l,
                    resultEqualityCheck: i,
                    props: {
                        kind: "field",
                        dependencyKey: t,
                        dependencies: [
                            S
                        ]
                    }
                });
            },
            computed: function(t, n, r) {
                const e = r || {};
                const o = e.resultEqualityCheck;
                const a = o === void 0 ? E : o;
                return p({
                    getterGroupId: m,
                    slots: b(),
                    root: S,
                    cache: d,
                    resultFunc: t,
                    resultEqualityCheck: a,
                    props: {
                        kind: "computed",
                        dependencies: n
                    }
                });
            },
            unsafeIdentityGetter: S,
            clearCacheFor: function(t) {
                d.delete(I(t));
            }
        };
    }
    function p({ cache: t, getterGroupId: n, props: o, resultEqualityCheck: a, resultFunc: i, root: l, slots: s }) {
        const u = o.dependencies;
        const c = u.length;
        return f({
            getterGroupId: n,
            slots: s,
            root: l,
            cache: t,
            props: babelHelpers.extends({}, o, {
                resultFunc: i
            }),
            recomputeIfNeeded: function(t, o, l) {
                b(s);
                const { changedAtIndex: e, checkedAtIndex: d, prevResultIndex: m } = s;
                const p = l[n];
                const _ = p[e];
                const f = p[d];
                if (f != null && _ != null) {
                    if (f === o) {
                        return _;
                    }
                    if (f != null && c > 0) {
                        let g = false;
                        for(let h = 0; h < c; h++){
                            const y = u[h];
                            const C = y.$$extractChangedAt(l[y.$$getterGroupId]);
                            g = C == null || C > f;
                            if (g) {
                                break;
                            }
                        }
                        if (!g) {
                            p[d] = o;
                            return _;
                        }
                    }
                }
                const v = new Array(c);
                for(let S = 0; S < c; S++){
                    const L = u[S];
                    const E = L.$$extractResult(l[L.$$getterGroupId]);
                    if (E === void 0) {
                        throw r("err")("No result was stored");
                    }
                    v[S] = T(E);
                }
                const k = i(v);
                const I = p[m];
                if (_ != null && I !== void 0 && a(k, T(I))) {
                    p[d] = o;
                    return _;
                }
                p[m] = k === void 0 ? R : k;
                p[e] = o;
                p[d] = o;
                return o;
            }
        });
    }
    function _({ cache: t, getterGroupId: n, resultEqualityCheck: r, slots: o }) {
        return f({
            getterGroupId: n,
            slots: o,
            root: null,
            cache: t,
            props: {
                kind: "identity",
                dependencies: []
            },
            recomputeIfNeeded: function(t, a, i) {
                b(o);
                const { changedAtIndex: e, checkedAtIndex: l, prevResultIndex: s } = o;
                const u = i[n];
                const c = u[s];
                const d = t;
                const m = u[l];
                const p = t == null ? 0 : t.revisionNumber || 0;
                if (c !== void 0 && m === p && r(d, T(c))) {
                    return a;
                }
                const _ = a + 1;
                u[s] = d === void 0 ? R : d;
                u[e] = _;
                u[l] = p;
                return _;
            }
        });
    }
    function f({ cache: n, getterGroupId: o, props: a, recomputeIfNeeded: i, root: l, slots: s }) {
        for(var u = a.dependencies, c = 0, d = {}, m = function(t) {
            b(s);
            const e = I(t);
            const n = c === 0 ? d : {};
            c++;
            try {
                return p(t, e, n);
            } finally{
                c--;
                if (n === d) {
                    for(let r = 0; r < v.length; r++){
                        d[v[r]] = L;
                    }
                }
            }
        }, p = function(t, n, a) {
            for (const i of v){
                const l = C[i];
                let u = l.get(n);
                if (u == null) {
                    u = {};
                    l.set(n, u);
                }
                a[i] = u;
            }
            const c = h.$$recomputeIfNeeded(t, h.$$extractChangedAt(a[h.$$getterGroupId]) || 0, a);
            const d = a[o];
            const m = d[s.checkedAtIndex];
            if (m == null || c > m) {
                for(let p = 0; p < f.length; p++){
                    let _ = m != null;
                    for(let g = f[p], y = 0; y < g.length; y++){
                        const b = g[y].$$recomputeIfNeeded(t, c, a);
                        if (m == null || b > m) {
                            _ = false;
                        }
                    }
                    if (_) {
                        break;
                    }
                }
            }
            const S = d[s.prevResultIndex];
            if (S === void 0) {
                throw r("err")("No result was stored");
            }
            return T(S);
        }, _ = Object.assign(m, {
            kind: a.kind,
            dependencies: u,
            dependencyKey: a.dependencyKey,
            resultFunc: a.resultFunc,
            $$getterGroupId: o,
            $$root: l || m,
            $$cache: n,
            $$recomputeIfNeeded: i,
            $$extractChangedAt: function(t) {
                return t[s.changedAtIndex];
            },
            $$extractResult: function(t) {
                return t[s.prevResultIndex];
            }
        }), f = g(_), h = _.$$root, y = 0; y < u.length; y++){
            if (u[y].$$root !== h) {
                throw r("err")("Getter created with multiple roots. This means you used getters that came from different `createGetterFactories()` calls as dependencies in a `computed()` getter. If you want to do this, you must pass the identity getter created by one of the `createGetterFactories()` calls as the `root` option to the other.");
            }
        }
        var C = {
            [h.$$getterGroupId]: h.$$cache
        };
        var v = [
            h.$$getterGroupId
        ];
        for(let S = 0; S < f.length; S++){
            for(let R = 0; R < f[S].length; R++){
                const E = f[S][R];
                const { $$cache: k, $$getterGroupId: D } = E;
                if (C[D] == null) {
                    v.push(D);
                    C[D] = k;
                }
            }
        }
        return _;
    }
    function g(e) {
        for(var t = [
            e
        ], n = 0; n < t.length; n++){
            const r = t[n];
            if (r.dependencies != null) {
                t.push(...r.dependencies);
            }
        }
        for(var o = Array.from(new Set(t.reverse())), a = [], i = [], l = 0; l < o.length; l++){
            const s = o[l];
            e: {
                if (s.kind === "identity") {
                    break e;
                }
                if (s.kind === "field") {
                    a.push(s);
                    break e;
                }
                if (s.kind === "computed") {
                    i.push(s);
                    break e;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${s.kind}`);
            }
        }
        return [
            a,
            i
        ].filter((e)=>e.length > 0);
    }
    const h = function(t) {
        return 3 * t;
    };
    const y = function(t) {
        return 3 * t + 1;
    };
    const C = function(t) {
        return 3 * t + 2;
    };
    function b(t) {
        if (t.prevResultIndex === e) {
            t.resolveAllocationOrder();
            if (t.prevResultIndex === e) {
                v(t, t.allocateGetterId());
            }
        }
    }
    function v(e, t) {
        e.prevResultIndex = h(t);
        e.changedAtIndex = y(t);
        e.checkedAtIndex = C(t);
    }
    const S = (()=>{
        function e() {}
        const t = e.prototype;
        t.toString = function() {
            return "UndefinedSentinel";
        };
        return e;
    })();
    var R = new S;
    var L = Object.freeze({});
    function E(e, t) {
        return e === t;
    }
    function k() {
        return new Map;
    }
    function I(e) {
        if (e == null) {
            throw r("err")(`Getter was called with ${String(e)} data.`);
        }
        const t = e.id;
        if (t == null) {
            throw r("err")(`Data passed to getter must include an id property (it's how we memoize) but got ${String(t)}`);
        }
        return t.toString();
    }
    function T(e) {
        if (e === R) {
            return void 0;
        }
        return e;
    }
    l.clearAllGetterCaches = d;
    l.createGetterFactories = m;
}, 98);