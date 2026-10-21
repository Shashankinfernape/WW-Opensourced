__d("hyperionCore", [
    "Promise",
    "__debug",
    "hyperionGlobals",
    "hyperionHook"
], function(t, n, r, o, a, i, l) {
    let c;
    let d;
    const m = (()=>{
        function e(e) {
            this.status = 0;
            this.name = e;
        }
        const e_prototype = e.prototype;
        e_prototype.interceptObjectOwnProperties = function(t) {};
        return e;
    })();
    function p(e, t) {
        for(var n; e && !n;){
            n = Object.getOwnPropertyDescriptor(e, t);
            if (n) {
                n.container = e;
            }
            e = Object.getPrototypeOf(e);
        }
        return n;
    }
    function _(container, name, n) {
        try {
            Object.defineProperty(container, name, n);
        } catch (e) {}
    }
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    function g(e, t) {
        return hasOwnProperty.call(e, t);
    }
    function h(e, t, n) {
        if (!(!e || !t)) {
            const r = Object.getOwnPropertyNames(e);
            for(let a = 0, i = r.length; a < i; ++a){
                const l = r[a];
                if (!(l in t)) {
                    const s = Object.getOwnPropertyDescriptor(e, l);
                    o("hyperionGlobals").assert(s != null, `Unexpected situation, we should have own property for ${l}`);
                    try {
                        Object.defineProperty(t, l, s);
                    } catch (e) {}
                }
            }
            {
                t.toString = function() {
                    return e.toString();
                };
                if (Object.prototype.hasOwnProperty.call(e, "valueOf")) {
                    t.valueOf = function() {
                        return e.valueOf();
                    };
                }
                t.prototype = e.prototype;
                const u = Object.getOwnPropertyDescriptor(e, "name");
                try {
                    Object.defineProperty(t, "name", u);
                } catch (e) {}
            }
        }
    }
    const y = "__ext";
    const C = "__sproto";
    let b = 0;
    const v = [];
    function S(e) {
        v.push(e);
        return function() {
            const t = v.indexOf(e);
            if (t > -1) {
                v.splice(t, 1);
            }
        };
    }
    function R(e) {
        const t = Object.getOwnPropertyDescriptor(e, C);
        return t?.value;
    }
    function L(e, t) {
        Object.defineProperty(e, C, {
            value: t
        });
        return t;
    }
    const E = {};
    function k(e) {
        const t = typeof e;
        return e && (t === "object" || t === "function");
    }
    function I(e) {
        return g(e, y);
    }
    function T(e, t) {
        if (k(e) && !I(e)) {
            for(var shadowPrototype = t, r = 0; !shadowPrototype && r < v.length; ++r){
                shadowPrototype = v[r](e);
            }
            if (!shadowPrototype) {
                shadowPrototype = e[C];
            }
            if (shadowPrototype) {
                const o = {
                    virtualPropertyValues: {},
                    shadowPrototype,
                    id: b++
                };
                E.value = o;
                Object.defineProperty(e, y, E);
                shadowPrototype.interceptObject(e);
            }
        }
        return e;
    }
    function D(e, t) {
        let n = e[y];
        if (!n && t) {
            T(e);
            n = e[y];
        }
        return n;
    }
    function x(e, t) {
        const n = D(e, true);
        return n?.virtualPropertyValues[t];
    }
    function $(e, t, n) {
        const r = D(e, true);
        if (r) {
            r.virtualPropertyValues[t] = n;
        } else {
            o("hyperionGlobals").assert(!!r, "Could not get extension for the object");
        }
        return n;
    }
    const P = "__ext";
    const N = function() {};
    const M = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.createMultiCallbackCall = function(t) {
            return function(e) {
                let n = e;
                for(let r = 0, o = t.length; r < o; ++r){
                    n = t[r].call(this, n);
                }
                return n;
            };
        };
        return t;
    })((d || (d = o("hyperionHook"))).Hook);
    const w = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.createMultiCallbackCall = function(t) {
            return function() {
                let e = false;
                for(let n = 0, r = t.length; n < r; ++n){
                    const o = t[n];
                    e = o.apply(this, arguments) || e;
                }
                return e;
            };
        };
        return t;
    })(d.Hook);
    const A = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.createMultiCallbackCall = function(t) {
            return function(e) {
                let n = e;
                for(let r = 0, o = t.length; r < o; ++r){
                    n = t[r].call(this, n);
                }
                return n;
            };
        };
        return t;
    })(d.Hook);
    const F = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(d.Hook);
    const O = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.createMultiCallbackCall = function(t) {
            return function() {
                const e = [];
                for(let n = 0, r = t.length; n < r; ++n){
                    const o = t[n];
                    e.push(o.apply(this, arguments));
                }
                return function(t) {
                    let n = t;
                    for(let r = 0, o = e.length; r < o; ++r){
                        const a = e[r];
                        n = a.call(this, n);
                    }
                    return n;
                };
            };
        };
        return t;
    })(d.Hook);
    const B = ((e)=>{
        function t(t, n = N, r = false) {
            let o;
            o = e.call(this, t) || this;
            o.original = N;
            const a = o;
            o.interceptor = r ? function() {
                const e = a.dispatcherFunc.apply(this, arguments);
                return T(e);
            } : function() {
                const e = a.dispatcherFunc.apply(this, arguments);
                return e;
            };
            q(o.interceptor, o);
            o.implementation = n;
            o.dispatcherFunc = o.original;
            o.setOriginal(n);
            return o;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.getOriginal = function() {
            return this.original;
        };
        t_prototype.setOriginal = function(t) {
            if (this.original !== t) {
                this.original = t;
                if (!this.customFunc) {
                    this.implementation = t;
                }
                h(t, this.interceptor);
                q(t, this);
                this.updateDispatcherFunc();
            }
        };
        t_prototype.setCustom = function(t) {
            this.customFunc = t;
            this.implementation = t;
            this.updateDispatcherFunc();
        };
        t_prototype.updateDispatcherFunc = function() {
            let e = 0;
            e |= this.onBeforeCallMapper ? 8 : 0;
            e |= this.onBeforeCallObserver ? 4 : 0;
            e |= this.onAfterCallMapper ? 2 : 0;
            e |= this.onAfterCallObserver ? 1 : 0;
            e |= this.onBeforeAndAterCallMapper ? 16 : 0;
            const n = t.dispatcherCtors[e];
            o("hyperionGlobals").assert(!!n, `unhandled interceptor state ${e}`);
            this.dispatcherFunc = n(this);
        };
        t_prototype.onBeforeCallMapperAdd = function(t) {
            if (!this.onBeforeCallMapper) {
                this.onBeforeCallMapper = new M;
                this.updateDispatcherFunc();
            }
            return this.onBeforeCallMapper.add(t);
        };
        t_prototype.onBeforeCallMapperRemove = function(t) {
            let e;
            if ((e = this.onBeforeCallMapper) != null && e.remove(t)) {
                if (!this.onBeforeCallMapper.hasCallback()) {
                    this.onBeforeCallMapper = null;
                }
                this.updateDispatcherFunc();
            }
            return t;
        };
        t_prototype.onBeforeCallObserverAdd = function(t) {
            if (!this.onBeforeCallObserver) {
                this.onBeforeCallObserver = new w;
                this.updateDispatcherFunc();
            }
            return this.onBeforeCallObserver.add(t);
        };
        t_prototype.onBeforeCallObserverRemove = function(t) {
            let e;
            if ((e = this.onBeforeCallObserver) != null && e.remove(t)) {
                if (!this.onBeforeCallObserver.hasCallback()) {
                    this.onBeforeCallObserver = null;
                }
                this.updateDispatcherFunc();
            }
            return t;
        };
        t_prototype.onAfterCallMapperAdd = function(t) {
            if (!this.onAfterCallMapper) {
                this.onAfterCallMapper = new A;
                this.updateDispatcherFunc();
            }
            return this.onAfterCallMapper.add(t);
        };
        t_prototype.onAfterCallMapperRemove = function(t) {
            let e;
            if ((e = this.onAfterCallMapper) != null && e.remove(t)) {
                if (!this.onAfterCallMapper.hasCallback()) {
                    this.onAfterCallMapper = null;
                }
                this.updateDispatcherFunc();
            }
            return t;
        };
        t_prototype.onAfterCallObserverAdd = function(t) {
            if (!this.onAfterCallObserver) {
                this.onAfterCallObserver = new F;
                this.updateDispatcherFunc();
            }
            return this.onAfterCallObserver.add(t);
        };
        t_prototype.onAfterCallObserverRemove = function(t) {
            let e;
            if ((e = this.onAfterCallObserver) != null && e.remove(t)) {
                this.updateDispatcherFunc();
            }
            return t;
        };
        t_prototype.onBeforeAndAfterCallMapperAdd = function(t) {
            if (!this.onBeforeAndAterCallMapper) {
                this.onBeforeAndAterCallMapper = new O;
                this.updateDispatcherFunc();
            }
            return this.onBeforeAndAterCallMapper.add(t);
        };
        t_prototype.onBeforeAndAfterCallMapperRemove = function(t) {
            let e;
            if ((e = this.onBeforeAndAterCallMapper) != null && e.remove(t)) {
                if (!this.onBeforeAndAterCallMapper.hasCallback()) {
                    this.onBeforeAndAterCallMapper = null;
                }
                this.updateDispatcherFunc();
            }
            return t;
        };
        t_prototype.getData = function(t) {
            return this.data?.[t];
        };
        t_prototype.setData = function(t, n) {
            if (!this.data) {
                this.data = {};
            }
            this.data[t] = n;
        };
        t_prototype.testAndSet = function(t) {
            const e = this.getData(t) || false;
            if (!e) {
                this.setData(t, true);
            }
            return e;
        };
        return t;
    })(m);
    B.dispatcherCtors = ((e)=>{
        e = {};
        e[0] = function(t) {
            return t.customFunc ?? t.original;
        };
        e[1] = function(t) {
            return function() {
                let e;
                e = t.implementation.apply(this, arguments);
                t.onAfterCallObserver.call.call(this, e);
                return e;
            };
        };
        e[2] = function(t) {
            return function() {
                let e;
                e = t.implementation.apply(this, arguments);
                e = t.onAfterCallMapper.call.call(this, e);
                return e;
            };
        };
        e[3] = function(t) {
            return function() {
                let e;
                e = t.implementation.apply(this, arguments);
                e = t.onAfterCallMapper.call.call(this, e);
                t.onAfterCallObserver.call.call(this, e);
                return e;
            };
        };
        e[4] = function(t) {
            return function() {
                let e;
                if (!t.onBeforeCallObserver.call.apply(this, arguments)) {
                    e = t.implementation.apply(this, arguments);
                }
                return e;
            };
        };
        e[5] = function(t) {
            return function() {
                let e;
                if (!t.onBeforeCallObserver.call.apply(this, arguments)) {
                    e = t.implementation.apply(this, arguments);
                    t.onAfterCallObserver.call.call(this, e);
                }
                return e;
            };
        };
        e[6] = function(t) {
            return function() {
                let e;
                if (!t.onBeforeCallObserver.call.apply(this, arguments)) {
                    e = t.implementation.apply(this, arguments);
                    e = t.onAfterCallMapper.call.call(this, e);
                }
                return e;
            };
        };
        e[7] = function(t) {
            return function() {
                let e;
                if (!t.onBeforeCallObserver.call.apply(this, arguments)) {
                    e = t.implementation.apply(this, arguments);
                    e = t.onAfterCallMapper.call.call(this, e);
                    t.onAfterCallObserver.call.call(this, e);
                }
                return e;
            };
        };
        e[8] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeCallMapper.call.call(this, arguments);
                e = t.implementation.apply(this, n);
                return e;
            };
        };
        e[9] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeCallMapper.call.call(this, arguments);
                e = t.implementation.apply(this, n);
                t.onAfterCallObserver.call.call(this, e);
                return e;
            };
        };
        e[10] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeCallMapper.call.call(this, arguments);
                e = t.implementation.apply(this, n);
                e = t.onAfterCallMapper.call.call(this, e);
                return e;
            };
        };
        e[11] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeCallMapper.call.call(this, arguments);
                e = t.implementation.apply(this, n);
                e = t.onAfterCallMapper.call.call(this, e);
                t.onAfterCallObserver.call.call(this, e);
                return e;
            };
        };
        e[12] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeCallMapper.call.call(this, arguments);
                if (!t.onBeforeCallObserver.call.apply(this, n)) {
                    e = t.implementation.apply(this, n);
                }
                return e;
            };
        };
        e[13] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeCallMapper.call.call(this, arguments);
                if (!t.onBeforeCallObserver.call.apply(this, n)) {
                    e = t.implementation.apply(this, n);
                    t.onAfterCallObserver.call.call(this, e);
                }
                return e;
            };
        };
        e[14] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeCallMapper.call.call(this, arguments);
                if (!t.onBeforeCallObserver.call.apply(this, n)) {
                    e = t.implementation.apply(this, n);
                    e = t.onAfterCallMapper.call.call(this, e);
                }
                return e;
            };
        };
        e[15] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeCallMapper.call.call(this, arguments);
                if (!t.onBeforeCallObserver.call.apply(this, n)) {
                    e = t.implementation.apply(this, n);
                    e = t.onAfterCallMapper.call.call(this, e);
                    t.onAfterCallObserver.call.call(this, e);
                }
                return e;
            };
        };
        e[16] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeAndAterCallMapper.call.call(this, arguments);
                e = t.implementation.apply(this, arguments);
                e = n.call(this, e);
                return e;
            };
        };
        e[17] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeAndAterCallMapper.call.call(this, arguments);
                e = t.implementation.apply(this, arguments);
                t.onAfterCallObserver.call.call(this, e);
                e = n.call(this, e);
                return e;
            };
        };
        e[18] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeAndAterCallMapper.call.call(this, arguments);
                e = t.implementation.apply(this, arguments);
                e = t.onAfterCallMapper.call.call(this, e);
                e = n.call(this, e);
                return e;
            };
        };
        e[19] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeAndAterCallMapper.call.call(this, arguments);
                e = t.implementation.apply(this, arguments);
                e = t.onAfterCallMapper.call.call(this, e);
                t.onAfterCallObserver.call.call(this, e);
                e = n.call(this, e);
                return e;
            };
        };
        e[20] = function(t) {
            return function() {
                let e;
                if (!t.onBeforeCallObserver.call.apply(this, arguments)) {
                    const n = t.onBeforeAndAterCallMapper.call.call(this, arguments);
                    e = t.implementation.apply(this, arguments);
                    e = n.call(this, e);
                }
                return e;
            };
        };
        e[21] = function(t) {
            return function() {
                let e;
                if (!t.onBeforeCallObserver.call.apply(this, arguments)) {
                    const n = t.onBeforeAndAterCallMapper.call.call(this, arguments);
                    e = t.implementation.apply(this, arguments);
                    t.onAfterCallObserver.call.call(this, e);
                    e = n.call(this, e);
                }
                return e;
            };
        };
        e[22] = function(t) {
            return function() {
                let e;
                if (!t.onBeforeCallObserver.call.apply(this, arguments)) {
                    const n = t.onBeforeAndAterCallMapper.call.call(this, arguments);
                    e = t.implementation.apply(this, arguments);
                    e = t.onAfterCallMapper.call.call(this, e);
                    e = n.call(this, e);
                }
                return e;
            };
        };
        e[23] = function(t) {
            return function() {
                let e;
                if (!t.onBeforeCallObserver.call.apply(this, arguments)) {
                    const n = t.onBeforeAndAterCallMapper.call.call(this, arguments);
                    e = t.implementation.apply(this, arguments);
                    e = t.onAfterCallMapper.call.call(this, e);
                    t.onAfterCallObserver.call.call(this, e);
                    e = n.call(this, e);
                }
                return e;
            };
        };
        e[24] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeCallMapper.call.call(this, arguments);
                const r = t.onBeforeAndAterCallMapper.call.call(this, arguments);
                e = t.implementation.apply(this, n);
                e = r.call(this, e);
                return e;
            };
        };
        e[25] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeCallMapper.call.call(this, arguments);
                const r = t.onBeforeAndAterCallMapper.call.call(this, arguments);
                e = t.implementation.apply(this, n);
                t.onAfterCallObserver.call.call(this, e);
                e = r.call(this, e);
                return e;
            };
        };
        e[26] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeCallMapper.call.call(this, arguments);
                const r = t.onBeforeAndAterCallMapper.call.call(this, arguments);
                e = t.implementation.apply(this, n);
                e = t.onAfterCallMapper.call.call(this, e);
                e = r.call(this, e);
                return e;
            };
        };
        e[27] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeCallMapper.call.call(this, arguments);
                const r = t.onBeforeAndAterCallMapper.call.call(this, arguments);
                e = t.implementation.apply(this, n);
                e = t.onAfterCallMapper.call.call(this, e);
                t.onAfterCallObserver.call.call(this, e);
                e = r.call(this, e);
                return e;
            };
        };
        e[28] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeCallMapper.call.call(this, arguments);
                if (!t.onBeforeCallObserver.call.apply(this, n)) {
                    const r = t.onBeforeAndAterCallMapper.call.call(this, arguments);
                    e = t.implementation.apply(this, n);
                    e = r.call(this, e);
                }
                return e;
            };
        };
        e[29] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeCallMapper.call.call(this, arguments);
                if (!t.onBeforeCallObserver.call.apply(this, n)) {
                    const r = t.onBeforeAndAterCallMapper.call.call(this, arguments);
                    e = t.implementation.apply(this, n);
                    t.onAfterCallObserver.call.call(this, e);
                    e = r.call(this, e);
                }
                return e;
            };
        };
        e[30] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeCallMapper.call.call(this, arguments);
                if (!t.onBeforeCallObserver.call.apply(this, n)) {
                    const r = t.onBeforeAndAterCallMapper.call.call(this, arguments);
                    e = t.implementation.apply(this, n);
                    e = t.onAfterCallMapper.call.call(this, e);
                    e = r.call(this, e);
                }
                return e;
            };
        };
        e[31] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeCallMapper.call.call(this, arguments);
                if (!t.onBeforeCallObserver.call.apply(this, n)) {
                    const r = t.onBeforeAndAterCallMapper.call.call(this, arguments);
                    e = t.implementation.apply(this, n);
                    e = t.onAfterCallMapper.call.call(this, e);
                    t.onAfterCallObserver.call.call(this, e);
                    e = r.call(this, e);
                }
                return e;
            };
        };
        return e;
    })();
    function W(e) {
        return e?.[P];
    }
    function q(e, t) {
        Object.defineProperty(e, P, {
            value: t,
            writable: false,
            enumerable: false,
            configurable: false
        });
    }
    function U(e, t = false, n, r = "_annonymous") {
        o("hyperionGlobals").assert(typeof e === "function", "cannot intercept non-function input");
        let a = W(e);
        if (!a) {
            a = n ? new n(r, e, t) : new B(r, e, t);
        }
        return a;
    }
    const V = ((e)=>{
        function t(t, n, r = false, o) {
            let a;
            a = e.call(this, t, undefined, r) || this;
            a.interceptProperty(n.targetPrototype, false, o);
            if (a.status !== 1) {
                n.addPendingPropertyInterceptor(a);
            }
            return a;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.interceptProperty = function(t, n, r) {
            r = r ?? p(t, this.name);
            if (n) {
                let e;
                if (r) {
                    if (r.writable && (r.value || Object.prototype.hasOwnProperty.call(r, "value"))) {
                        e = r.value;
                        delete r.value;
                        delete r.writable;
                        r.get = function() {
                            return e;
                        };
                        r.set = function(t) {
                            e = t;
                        };
                        r.configurable = true;
                    }
                } else {
                    r = {
                        get: function() {
                            return e;
                        },
                        set: function(n) {
                            e = n;
                        },
                        enumerable: true,
                        configurable: true,
                        container: t
                    };
                }
            }
            if (r) {
                if (r.value) {
                    this.setOriginal(r.value);
                    r.value = this.interceptor;
                    _(r.container, this.name, r);
                    this.status = 1;
                } else if (r.get || r.set) {
                    const o = this;
                    const a = r;
                    const { get, set } = a;
                    if (get) {
                        r.get = function() {
                            const e = get.call(this);
                            if (typeof e !== "function") {
                                return e;
                            }
                            if (e !== o.interceptor) {
                                o.setOriginal(e);
                            }
                            return o.interceptor;
                        };
                        q(r.get, o);
                    }
                    if (set) {
                        r.set = function(e) {
                            set.call(this, o.interceptor);
                            if (e !== o.interceptor && e !== o.original) {
                                o.setOriginal(e);
                            }
                            return o.interceptor;
                        };
                        q(r.set, o);
                    }
                    _(r.container, this.name, r);
                    this.status = r.configurable ? 1 : 4;
                } else {
                    if (Object.prototype.hasOwnProperty.call(r, "value")) {
                        this.status = 1;
                    }
                }
            } else {
                this.status = 2;
            }
        };
        t_prototype.interceptObjectOwnProperties = function(t) {
            this.interceptProperty(t, true);
        };
        return t;
    })(B);
    function H(e, t) {
        const n = p(t.targetPrototype, e);
        let r;
        if (n) {
            r = W(n.value);
            if (!r) {
                const a = W(n.get);
                const i = W(n.set);
                o("hyperionGlobals").assert(!(a && i) || a === i, `Getter/Setter of method ${e} have differnt interceptors`);
                r = a ?? i;
            }
            n.interceptor = r;
        }
        return n;
    }
    function G(e, t, n = false, r) {
        const a = H(e, t);
        return a?.interceptor ?? new (r ?? V)(e, t, n, a);
    }
    function z(e) {
        const t = function(...args) {
            let t;
            switch(args.length){
                case 0:
                    t = new e;
                    break;
                case 1:
                    t = new e(args[0]);
                    break;
                case 2:
                    t = new e(args[0], args[1]);
                    break;
                case 3:
                    t = new e(args[0], args[1], args[2]);
                    break;
                case 4:
                    t = new e(args[0], args[1], args[2], args[3]);
                    break;
                case 5:
                    t = new e(args[0], args[1], args[2], args[3], args[4]);
                    break;
                case 6:
                    t = new e(args[0], args[1], args[2], args[3], args[4], args[5]);
                    break;
                default:
                    throw "Unsupported case!";
            }
            return t;
        };
        h(e, t);
        return t;
    }
    const j = ((e)=>{
        function t(t, n) {
            let r;
            r = e.call(this, t, n, true) || this;
            r.ctorInterceptor = null;
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.setOriginal = function(n) {
            this.ctorInterceptor = z(n);
            return e.prototype.setOriginal.call(this, this.ctorInterceptor);
        };
        return t;
    })(B);
    function K(e, t = "_annonymousCtor") {
        return U(e, true, j, t);
    }
    const Q = ((e)=>{
        function t(t, n, r) {
            let o;
            o = e.call(this, t, n, true, r) || this;
            o.ctorInterceptor = null;
            return o;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.setOriginal = function(n) {
            this.ctorInterceptor = z(n);
            return e.prototype.setOriginal.call(this, this.ctorInterceptor);
        };
        return t;
    })(V);
    function X(e, t) {
        const r = H(e, t);
        return r?.interceptor ?? new Q(e, t, r);
    }
    function Y(e, extension) {
        if (extension != null && extension.useCaseInsensitivePropertyName) {
            return `${e}`.toLocaleLowerCase();
        }
        return e;
    }
    class J {
        constructor(e, t){
            this.onBeforInterceptObj = new (d || (d = o("hyperionHook"))).Hook;
            this.onAfterInterceptObj = new d.Hook;
            this.targetPrototype = e;
            this.parentShadowPrototype = t;
            this.extension = Object.create(t?.extension ?? null);
            if (this.parentShadowPrototype) {
                for(var r = this.targetPrototype, a = this.parentShadowPrototype.targetPrototype, i = false; r && !i;){
                    i = r === a;
                    r = Object.getPrototypeOf(r);
                }
                o("hyperionGlobals").assert(i, "Invalid prototype chain");
            }
        }
        callOnBeforeInterceptObject(t) {
            let n;
            this.parentShadowPrototype?.callOnBeforeInterceptObject(t);
            if ((n = this.onBeforInterceptObj) != null) {
                n.call(t);
            }
        }
        callOnAfterInterceptObject(t) {
            let n;
            this.parentShadowPrototype?.callOnAfterInterceptObject(t);
            if ((n = this.onAfterInterceptObj) != null) {
                n.call(t);
            }
        }
        interceptObjectItself(t) {
            this.parentShadowPrototype?.interceptObjectItself(t);
            if (this.pendingPropertyInterceptors) {
                for (const n of this.pendingPropertyInterceptors){
                    n.interceptObjectOwnProperties(t);
                }
            }
        }
        interceptObject(t) {
            this.callOnBeforeInterceptObject(t);
            this.interceptObjectItself(t);
            this.callOnAfterInterceptObject(t);
        }
        addPendingPropertyInterceptor(t) {
            if (!this.pendingPropertyInterceptors) {
                this.pendingPropertyInterceptors = [];
            }
            this.pendingPropertyInterceptors.push(t);
        }
        getVirtualProperty(t) {
            const extension = this.extension;
            const n = Y(t, extension);
            return extension[n];
        }
        setVirtualProperty(t, n) {
            const extension = this.extension;
            const r = Y(t, extension);
            extension[r] = n;
            return n;
        }
        removeVirtualPropery(t, n) {
            const extension = this.extension;
            const r = Y(t, extension);
            if (extension[r] === n) {
                delete extension[r];
            } else {
                `${t}`;
            }
        }
    }
    const Z = (()=>{
        function e() {}
        const e_prototype = e.prototype;
        e_prototype.getExports = function(t) {
            return null;
        };
        e_prototype.updateExports = function(t, n, r, o) {};
        return e;
    })();
    const ee = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this) || this;
            n.$WebpackModuleRuntime1 = t;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.getExports = function(t) {
            const e = this;
            const o = new RegExp(`${t}(?:/index)?[.]js\$`);
            const a = Object.keys(this.$WebpackModuleRuntime1).filter((e)=>o.test(e)).map((t)=>e.$WebpackModuleRuntime1[t]);
            return a[0]?.exports ?? null;
        };
        return t;
    })(Z);
    const te = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this) || this;
            n.$MetaModuleRuntime1 = t;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.updateExports = function(t, n, r, o) {
            if (r.default != null) {
                this.$MetaModuleRuntime1.modulesMap[t].defaultExport = n.default;
            }
        };
        return t;
    })(Z);
    const ne = (()=>{
        if (typeof n === "function") {
            try {
                const e = n("__debug");
                if (typeof e === "object") {
                    return new te(e);
                }
            } catch (e) {}
        }
        if (typeof __webpack_module_cache__ === "object") {
            return new ee(__webpack_module_cache__);
        }
        return new Z;
    })();
    function interceptModuleExports(e, t, n, r) {
        let o = t;
        const a = ne.getExports(e);
        if (a && a !== o) {
            o = a;
        }
        const i = new J(o, null);
        const l = {};
        for (const u of n){
            l[u] = G(u, i);
        }
        ne.updateExports(e, t, l, r);
        validateModuleInterceptor(e, t, l, r);
        return l;
    }
    function validateModuleInterceptor(e, t, n, r) {
        if (Array.isArray(r)) {
            for(let a = Object.keys(n), i = 0; i < a.length; ++i){
                const l = a[i];
                if (t[l] !== n[l].interceptor) {
                    r.push(l);
                }
            }
            o("hyperionGlobals").assert(r.length === 0, r.map((t)=>`could not intercept ${e}.${t}`).join("\n"));
        }
    }
    const ae = Object.freeze({
        __proto__: null,
        interceptModuleExports,
        validateModuleInterceptor
    });
    const ie = R(o("hyperionGlobals").globalScope) ?? new J(o("hyperionGlobals").globalScope, null);
    const setInterval = G("setInterval", ie);
    const setTimeout = G("setTimeout", ie);
    const IPromiseConstructor = X("Promise", ie);
    const ce = Object.freeze({
        __proto__: null,
        IPromiseConstructor,
        setInterval,
        setTimeout
    });
    const de = Object.getPrototypeOf((c || (c = n("Promise"))).resolve());
    const IPromisePrototype = R(de) ?? L(de, new J(de, null));
    const constructor = IPromiseConstructor;
    const then = G("then", IPromisePrototype);
    const Catch = G("catch", IPromisePrototype);
    const Finally = G("finally", IPromisePrototype);
    const he = R(c || (c = n("Promise"))) ?? L(c || (c = n("Promise")), new J(c || (c = n("Promise")), null));
    const all = G("all", he);
    const allSettled = G("allSettled", he);
    const any = G("any", he);
    const race = G("race", he);
    const reject = G("reject", he);
    const resolve = G("resolve", he);
    const Le = Object.freeze({
        __proto__: null,
        Catch,
        Finally,
        IPromisePrototype,
        all,
        allSettled,
        any,
        constructor,
        race,
        reject,
        resolve,
        then
    });
    const Ee = "__attributeInterceptor";
    const ke = ((e)=>{
        function t(t, n, r) {
            let o;
            o = e.call(this, t) || this;
            o.getter = new B(t, n);
            o.setter = new B(t, r);
            o.getter.setData(Ee, o);
            o.setter.setData(Ee, o);
            return o;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(m);
    const Ie = ((e)=>{
        function t(t, n, r) {
            let o;
            o = e.call(this, t) || this;
            o.interceptProperty(n.targetPrototype, false, r);
            if (o.status !== 1) {
                n.addPendingPropertyInterceptor(o);
            }
            return o;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.interceptProperty = function(t, n, r) {
            r = r ?? p(t, this.name);
            if (n) {
                let e;
                const o = function() {
                    return e;
                };
                const set = function(n) {
                    e = n;
                };
                if (r) {
                    if (r.value && r.writable) {
                        e = r.value;
                        delete r.value;
                        delete r.writable;
                        r.get = o;
                        r.set = set;
                        r.configurable = true;
                    }
                } else {
                    r = {
                        get: o,
                        set,
                        enumerable: true,
                        configurable: true,
                        container: t
                    };
                }
            }
            if (r) {
                if (r.get || r.set) {
                    const i = r;
                    const { get, set } = i;
                    if (get) {
                        this.getter.setOriginal(get);
                        r.get = this.getter.interceptor;
                    }
                    if (set) {
                        this.setter.setOriginal(set);
                        r.set = this.setter.interceptor;
                    }
                    _(r.container, this.name, r);
                    this.status = r.configurable ? 1 : 4;
                } else {
                    if (r.value) {
                        `${this.name}`;
                        this.status = 3;
                    }
                }
            } else {
                this.status = 2;
            }
        };
        t_prototype.interceptObjectOwnProperties = function(t) {
            return this.interceptProperty(t, true);
        };
        return t;
    })(ke);
    function Te(e, t) {
        const n = p(t.targetPrototype, e);
        if (n) {
            const r = W(n.get);
            const a = W(n.set);
            const i = r?.getData(Ee);
            const l = a?.getData(Ee);
            o("hyperionGlobals").assert(!(i && l) || i === l, `Getter/Setter of attribute ${e} have differnt interceptors`);
            n.interceptor = i ?? l;
        }
        return n;
    }
    function De(e, t, n) {
        const o = Te(e, t);
        return o?.interceptor ?? new n(e, t, o);
    }
    function xe(e, t) {
        return De(e, t, Ie);
    }
    l.AttributeInterceptor = Ie;
    l.AttributeInterceptorBase = ke;
    l.Catch = Catch;
    l.IGlobalThis = ce;
    l.IPromise = Le;
    l.IPromisePrototype = IPromisePrototype;
    l.IRequire = ae;
    l.ShadowPrototype = J;
    l.all = all;
    l.allSettled = allSettled;
    l.any = any;
    l.constructor = constructor;
    l.getFunctionInterceptor = W;
    l.getObjectExtension = D;
    l.getOwnShadowPrototypeOf = R;
    l.getVirtualPropertyValue = x;
    l.intercept = T;
    l.interceptAttribute = xe;
    l.interceptAttributeBase = De;
    l.interceptConstructor = K;
    l.interceptConstructorMethod = X;
    l.interceptFunction = U;
    l.interceptMethod = G;
    l.interceptModuleExports = interceptModuleExports;
    l.race = race;
    l.registerShadowPrototype = L;
    l.registerShadowPrototypeGetter = S;
    l.reject = reject;
    l.resolve = resolve;
    l.setInterval = setInterval;
    l.setTimeout = setTimeout;
    l.setVirtualPropertyValue = $;
    l.then = then;
    l.validateModuleInterceptor = validateModuleInterceptor;
}, 98);