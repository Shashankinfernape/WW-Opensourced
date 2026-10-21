__d("WAWebModelUtils", [
    "WAMemoizeCache",
    "WATypeUtils",
    "err",
    "isEmptyObject",
    "isPlainObject",
    "nullthrows",
    "omit"
], function(t, n, r, o, a, i, l) {
    const e = [
        "collections",
        "derived",
        "name",
        "props",
        "session"
    ];
    const s = {
        sentinel: "DEFAULT VALUE PLACEHOLDER"
    };
    const u = {
        PROP: "PROP",
        SESSION: "SESSION",
        DERIVED: "DERIVED"
    };
    const c = Symbol("NO_DEFAULT_VALUE");
    const d = {
        PROPS: "Props",
        SESSION: "Session",
        DERIVED: "Derived",
        GETTER: "Getter",
        COLLECTION: "Collection"
    };
    function m(e = c) {
        const t = {
            defaultValue: e,
            type: d.PROPS
        };
        return t;
    }
    function p(e = c) {
        const t = {
            defaultValue: e,
            type: d.SESSION
        };
        return t;
    }
    function _(e, deps) {
        const n = {
            fn: e,
            deps,
            type: d.DERIVED
        };
        return n;
    }
    function f(e) {
        const t = {
            fn: e,
            type: d.GETTER
        };
        return t;
    }
    function g(val) {
        const t = {
            val,
            type: d.COLLECTION
        };
        return t;
    }
    function h({ defaultValue }) {
        if (defaultValue === c) {
            return {};
        }
        return {
            defaultValue
        };
    }
    const y = "__x_";
    function C(e) {
        return y + e;
    }
    function b(e, t, n, attr) {
        if (!r("isPlainObject")(n)) {
            throw r("err")("Invalid Prop/Session definition.");
        }
        const i = {
            sk: C(t),
            evt: `change:${t}`,
            attr
        };
        if (n.defaultValue !== undefined) {
            i.defaultValue = n.defaultValue;
        }
        e._definition[t] = i;
        const l = o("WATypeUtils").isFunction(i.defaultValue);
        if (i.defaultValue != null && !l) {
            if (Array.isArray(i.defaultValue)) {
                throw r("err")("Do not return mutable types as default values as they are shared. Type: Array provided.");
            }
            if (r("isPlainObject")(i.defaultValue)) {
                throw r("err")("Do not return mutable types as default values as they are shared. Type: Object provided.");
            }
        }
        const u = i.sk;
        Object.defineProperty(e, t, {
            set: function(n) {
                this.set(t, n);
            },
            get: function() {
                const e = this[u];
                if (e !== s) {
                    return e;
                }
                if (l) {
                    return this[u] = i.defaultValue();
                }
                return i.defaultValue;
            }
        });
    }
    function v(e, t, n) {
        const sk = C(t);
        const o = n.fn;
        e._definition[t] = e._derived[t] = {
            sk,
            evt: `change:${t}`,
            attr: u.DERIVED,
            fn: o,
            deps: n.deps
        };
        Object.defineProperty(e, t, {
            get: function() {
                const e = this[sk];
                if (e !== s) {
                    return e;
                }
                const t = o.call(this);
                this[sk] = t;
                return t;
            },
            set: function() {
                const e = new TypeError(`'${t}' is a derived property, it can't be set directly.`);
                e.stack;
                throw e;
            }
        });
    }
    function S(e) {
        const t = [];
        for(const n in e){
            if (typeof e[n] !== "function") {
                t.push([
                    n,
                    e[n]
                ]);
            }
        }
        return t;
    }
    function R(e) {
        const t = {};
        const n = Object.getPrototypeOf({});
        let r = e;
        for(Object.getOwnPropertyNames(r).forEach((e)=>{
            if (typeof r[e] === "function") {
                t[e] = r[e];
            }
        }); (r = Object.getPrototypeOf(r)) && r !== n;){
            Object.getOwnPropertyNames(r).forEach((e)=>{
                if (!(e in t)) {
                    t[e] = r[e];
                }
            });
        }
        return t;
    }
    function L(e) {
        const t = new e({}, {
            _internalInitializationDoNotUse: true
        });
        const n = {
            name: e.name || "Unknown",
            props: {},
            session: {},
            derived: {},
            collections: {},
            isIdType: e.isIdType
        };
        if (e.Collection) {
            n.Collection = e.Collection;
        }
        if (e.idClass) {
            n.idClass = e.idClass;
        }
        if (e.allowedIds) {
            n.allowedIds = e.allowedIds;
        }
        const a = new Set([
            "constructor"
        ]);
        const i = new Set([
            "collection",
            "parent",
            "revisionNumber",
            "__changes",
            "__fired",
            "__initialized"
        ]);
        const l = new Map(S(t).filter(([t, n])=>!i.has(t) && n?.type === d.GETTER).map((e)=>{
            const t = e[0];
            const n = e[1].fn;
            return [
                n,
                t
            ];
        }));
        const s = new Map;
        let u = 0;
        var c = o("WAMemoizeCache").memoizeWithArgs(function(e) {
            const n = (e.dependencies ?? []).flatMap((e)=>{
                if (e.dependencyKey != null) {
                    return [
                        e.dependencyKey
                    ];
                }
                const t = l.get(e);
                if (t != null) {
                    return [
                        t
                    ];
                }
                return c(e);
            });
            return Array.from(new Set(n));
        }, function(e) {
            let t = s.get(e);
            if (t == null) {
                t = (u++).toString();
                s.set(e, t);
            }
            return t;
        });
        S(t).forEach(([o, l])=>{
            if (!(i.has(o) || l == null)) {
                switch(l.type){
                    case d.PROPS:
                        n.props[o] = h(l);
                        break;
                    case d.SESSION:
                        n.session[o] = h(l);
                        break;
                    case d.DERIVED:
                        n.derived[o] = r("omit")(l, [
                            "type"
                        ]);
                        a.add(l.fn.name);
                        break;
                    case d.GETTER:
                        {
                            const s = l.fn;
                            n.derived[o] = {
                                fn: function() {
                                    return s(this);
                                },
                                deps: c(s)
                            };
                            a.add(s.name);
                            break;
                        }
                    case d.COLLECTION:
                        n.collections[o] = l.val;
                        break;
                    default:
                        throw r("err")(`Invalid defineModel Class type for ${e.name}:${o}.`);
                }
            }
        });
        const m = R(t);
        a.forEach((e)=>{
            delete m[e];
        });
        Object.assign(n, m);
        return n;
    }
    function E(e, t) {
        const r = {
            [t]: ((e)=>{
                function t() {
                    return e.apply(this, arguments) || this;
                }
                babelHelpers.inheritsLoose(t, e);
                return t;
            })(e)
        }[t];
        return r;
    }
    function k(t, n) {
        const o = r("nullthrows")(n.name);
        delete n.name;
        const a = E(t, o);
        const a_prototype = a.prototype;
        const l = a_prototype.__props = [];
        const c = a_prototype.__session = [];
        const d = a_prototype.__derived = [];
        const m = a_prototype._collections = {};
        const p = a_prototype._definition = {};
        const _ = a_prototype._derived = {};
        Object.keys(n.props).forEach((e)=>{
            l.push(e);
            b(a_prototype, e, n.props[e], u.PROP);
        });
        Object.keys(n.session).forEach((e)=>{
            c.push(e);
            b(a_prototype, e, n.session[e], u.SESSION);
        });
        Object.keys(n.derived).forEach((e)=>{
            d.push(e);
            v(a_prototype, e, n.derived[e]);
        });
        Object.keys(n.collections).forEach((e)=>{
            m[e] = n.collections[e];
        });
        const { collections, derived, name, props, session } = n;
        const S = babelHelpers.objectWithoutPropertiesLoose(n, e);
        Object.assign(a_prototype, S);
        const R = l.concat(c);
        const R_length = R.length;
        Object.defineProperties(a_prototype, {
            attributes: {
                get: function() {
                    const e = {};
                    for(let t = 0; t < R_length; ++t){
                        e[R[t]] = this[R[t]];
                    }
                    return e;
                }
            },
            isState: {
                get: function() {
                    return true;
                },
                set: function() {
                    throw r("err")("attempt to set isState");
                }
            }
        });
        const k = {};
        for(let T = 0; T < R_length; T++){
            const D = R[T];
            if ("defaultValue" in p[D]) {
                k[D] = s;
            }
        }
        if (!r("isEmptyObject")(k)) {
            a_prototype.__defaults = k;
        }
        if (d.length) {
            const x = [];
            const $ = {};
            const P = {};
            Object.keys(_).forEach((e)=>{
                const n = _[e];
                P[e] = true;
                (n.deps ?? []).forEach((t)=>{
                    P[t] = true;
                    ($[t] || ($[t] = [])).push(e);
                    x.push([
                        e,
                        t
                    ]);
                });
            });
            if (x.length) {
                a_prototype._deps = $;
                a_prototype._topo = I(Object.keys(P), _);
                a_prototype._topoIndexMap = new Map(a_prototype._topo.map((e, t)=>[
                        e,
                        t
                    ]));
            }
        }
        return a;
    }
    function I(e, t) {
        const n = [];
        const o = new Set;
        function a(e, i) {
            if (i.includes(e)) {
                throw r("err")(`Cyclic dependency: ${JSON.stringify(e)}`);
            }
            if (!o.has(e)) {
                o.add(e);
                const u = t[e]?.deps ?? [];
                for(let c = u.length - 1; c >= 0; c--){
                    a(u[c], [].concat(i, [
                        e
                    ]));
                }
                n.push(e);
            }
        }
        for(let i = e.length - 1; i >= 0; i--){
            a(e[i], []);
        }
        return n;
    }
    l.INIT = s;
    l.Attr = u;
    l.prop = m;
    l.session = p;
    l.derived = _;
    l.getter = f;
    l.collection = g;
    l.convert = L;
    l.stateExtend = k;
}, 98);