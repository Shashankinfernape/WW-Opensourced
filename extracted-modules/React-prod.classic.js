__d("React-prod.classic", [
    "ReactFeatureFlags"
], function(t, n, r, o, a, i) {
    "use strict";
    const SYMBOL_REACT_TRANSITIONAL_ELEMENT = Symbol.for("react.transitional.element");
    const SYMBOL_REACT_PORTAL = Symbol.for("react.portal");
    const SYMBOL_REACT_FRAGMENT = Symbol.for("react.fragment");
    const SYMBOL_REACT_STRICT_MODE = Symbol.for("react.strict_mode");
    const SYMBOL_REACT_PROFILER = Symbol.for("react.profiler");
    const SYMBOL_REACT_CONSUMER = Symbol.for("react.consumer");
    const SYMBOL_REACT_CONTEXT = Symbol.for("react.context");
    const SYMBOL_REACT_FORWARD_REF = Symbol.for("react.forward_ref");
    const SYMBOL_REACT_SUSPENSE = Symbol.for("react.suspense");
    const SYMBOL_REACT_SUSPENSE_LIST = Symbol.for("react.suspense_list");
    const SYMBOL_REACT_MEMO = Symbol.for("react.memo");
    const SYMBOL_REACT_LAZY = Symbol.for("react.lazy");
    const SYMBOL_REACT_SCOPE = Symbol.for("react.scope");
    const SYMBOL_REACT_ACTIVITY = Symbol.for("react.activity");
    const SYMBOL_REACT_LEGACY_HIDDEN = Symbol.for("react.legacy_hidden");
    const SYMBOL_REACT_TRACING_MARKER = Symbol.for("react.tracing_marker");
    const SYMBOL_REACT_VIEW_TRANSITION = Symbol.for("react.view_transition");
    const R = typeof Symbol === "function" ? Symbol.iterator : "@@iterator";
    function L(e) {
        if (e === null || typeof e !== "object") {
            return null;
        }
        e = R && e[R] || e["@@iterator"];
        if (typeof e === "function") {
            return e;
        }
        return null;
    }
    const E = {
        isMounted: function() {
            return false;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    };
    const I = {};
    class T {
        constructor(e, t, n){
            this.props = e;
            this.context = t;
            this.refs = I;
            this.updater = n || E;
        }
        setState(e, t) {
            if (typeof e !== "object" && typeof e !== "function" && e != null) {
                throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
            }
            this.updater.enqueueSetState(this, e, t, "setState");
        }
        forceUpdate(e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }
    }
    T.prototype.isReactComponent = {};
    function D() {}
    D.prototype = T.prototype;
    function x(e, t, n) {
        this.props = e;
        this.context = t;
        this.refs = I;
        this.updater = n || E;
    }
    const $ = x.prototype = new D;
    $.constructor = x;
    Object.assign($, T.prototype);
    $.isPureReactComponent = true;
    function N() {}
    const enableTransitionTracing = n("ReactFeatureFlags").enableTransitionTracing;
    const enableViewTransition = n("ReactFeatureFlags").enableViewTransition;
    const A = {
        H: null,
        A: null,
        T: null,
        S: null
    };
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    function O(t, key, props) {
        const r_ref = props.ref;
        return {
            $$typeof: SYMBOL_REACT_TRANSITIONAL_ELEMENT,
            type: t,
            key,
            ref: r_ref !== undefined ? r_ref : null,
            props
        };
    }
    function B(e, t, n) {
        let r = null;
        if (n !== undefined) {
            r = `${n}`;
        }
        if (t.key !== undefined) {
            r = `${t.key}`;
        }
        if ("key" in t) {
            n = {};
            for(const o in t){
                if (o !== "key") {
                    n[o] = t[o];
                }
            }
        } else {
            n = t;
        }
        return O(e, r, n);
    }
    function W(e, t) {
        return O(e.type, t, e.props);
    }
    function q(t) {
        return typeof t === "object" && t !== null && t.$$typeof === SYMBOL_REACT_TRANSITIONAL_ELEMENT;
    }
    function U(e) {
        const t = {
            "=": "=0",
            ":": "=2"
        };
        return `\$${e.replace(/[=:]/g, (e)=>t[e])}`;
    }
    const V = /\/+/g;
    function H(e, t) {
        if (typeof e === "object" && e !== null && e.key != null) {
            return U(`${e.key}`);
        }
        return t.toString(36);
    }
    function G(e) {
        switch(e.status){
            case "fulfilled":
                return e.value;
            case "rejected":
                throw e.reason;
            default:
                if (typeof e.status === "string") {
                    e.then(N, N);
                } else {
                    e.status = "pending";
                    e.then((t)=>{
                        if (e.status === "pending") {
                            e.status = "fulfilled";
                            e.value = t;
                        }
                    }, (t)=>{
                        if (e.status === "pending") {
                            e.status = "rejected";
                            e.reason = t;
                        }
                    });
                }
                switch(e.status){
                    case "fulfilled":
                        return e.value;
                    case "rejected":
                        throw e.reason;
                }
        }
        throw e;
    }
    function z(t, n, r, o, a) {
        let i = typeof t;
        if (i === "undefined" || i === "boolean") {
            t = null;
        }
        let s = false;
        if (t === null) {
            s = true;
        } else {
            switch(i){
                case "bigint":
                case "string":
                case "number":
                    s = true;
                    break;
                case "object":
                    switch(t.$$typeof){
                        case SYMBOL_REACT_TRANSITIONAL_ELEMENT:
                        case SYMBOL_REACT_PORTAL:
                            s = true;
                            break;
                        case SYMBOL_REACT_LAZY:
                            s = t._init;
                            return z(s(t._payload), n, r, o, a);
                    }
            }
        }
        if (s) {
            a = a(t);
            s = o === "" ? `.${H(t, 0)}` : o;
            if (Array.isArray(a)) {
                r = "";
                if (s != null) {
                    r = `${s.replace(V, "$&/")}/`;
                }
                z(a, n, r, "", function(e) {
                    return e;
                });
            } else if (a != null) {
                if (q(a)) {
                    a = W(a, r + (a.key == null || t && t.key === a.key ? "" : `${`${a.key}`.replace(V, "$&/")}/`) + s);
                }
                n.push(a);
            }
            return 1;
        }
        s = 0;
        const u = o === "" ? "." : `${o}:`;
        if (Array.isArray(t)) {
            for(var c = 0; c < t.length; c++){
                o = t[c];
                i = u + H(o, c);
                s += z(o, n, r, i, a);
            }
        } else {
            c = L(t);
            if (typeof c === "function") {
                t = c.call(t);
                for(c = 0; !(o = t.next()).done;){
                    o = o.value;
                    i = u + H(o, c++);
                    s += z(o, n, r, i, a);
                }
            } else if (i === "object") {
                if (typeof t.then === "function") {
                    return z(G(t), n, r, o, a);
                }
                n = String(t);
                throw Error(`Objects are not valid as a React child (found: ${n === "[object Object]" ? `object with keys {${Object.keys(t).join(", ")}}` : n}). If you meant to render a collection of children, use an array instead.`);
            }
        }
        return s;
    }
    function map(e, t, n) {
        if (e == null) {
            return e;
        }
        const r = [];
        let o = 0;
        z(e, r, "", "", function(e) {
            return t.call(n, e, o++);
        });
        return r;
    }
    function _init(e) {
        if (e._status === -1) {
            const t = e._result;
            const n = t();
            n.then((t)=>{
                if (e._status === 0 || e._status === -1) {
                    e._status = 1;
                    e._result = t;
                    if (n.status === undefined) {
                        n.status = "fulfilled";
                        n.value = t;
                    }
                }
            }, (t)=>{
                if (e._status === 0 || e._status === -1) {
                    e._status = 2;
                    e._result = t;
                    if (n.status === undefined) {
                        n.status = "rejected";
                        n.reason = t;
                    }
                }
            });
            if (e._status === -1) {
                e._status = 0;
                e._result = n;
            }
        }
        if (e._status === 1) {
            return e._result.default;
        }
        throw e._result;
    }
    function c(e) {
        return A.H.useMemoCache(e);
    }
    function X(e) {
        return A.H.useEffectEvent(e);
    }
    const Y = typeof reportError === "function" ? reportError : function(error) {
        if (typeof window === "object" && typeof window.ErrorEvent === "function") {
            const t = new window.ErrorEvent("error", {
                bubbles: true,
                cancelable: true,
                message: typeof error === "object" && error !== null && typeof error.message === "string" ? String(error.message) : String(error),
                error
            });
            if (!window.dispatchEvent(t)) {
                return;
            }
        } else if (typeof process === "object" && typeof process.emit === "function") {
            process.emit("uncaughtException", error);
            return;
        }
    };
    function J(e, t) {
        const n = A.T;
        const r = {};
        if (enableViewTransition) {
            r.types = n !== null ? n.types : null;
        }
        if (enableTransitionTracing) {
            r.name = t !== undefined && t.name !== undefined ? t.name : null;
            r.startTime = -1;
        }
        A.T = r;
        try {
            const o = e();
            const a = A.S;
            if (a !== null) {
                a(r, o);
            }
            if (typeof o === "object" && o !== null && typeof o.then === "function") {
                o.then(N, Y);
            }
        } catch (error) {
            Y(error);
        } finally{
            if (n !== null && r.types !== null) {
                n.types = r.types;
            }
            A.T = n;
        }
    }
    function Z(e) {
        if (enableViewTransition) {
            const t = A.T;
            if (t !== null) {
                const n = t.types;
                if (n === null) {
                    t.types = [
                        e
                    ];
                } else if (n.indexOf(e) === -1) {
                    n.push(e);
                }
            } else {
                J(Z.bind(null, e));
            }
        }
    }
    const ee = {
        __proto__: null,
        c
    };
    const te = {
        map,
        forEach: function(e, t, n) {
            map(e, function() {
                t.apply(this, arguments);
            }, n);
        },
        count: function(e) {
            let t = 0;
            map(e, ()=>{
                t++;
            });
            return t;
        },
        toArray: function(e) {
            return map(e, (e)=>e) || [];
        },
        only: function(e) {
            if (!q(e)) {
                throw Error("React.Children.only expected to receive a single React element child.");
            }
            return e;
        }
    };
    i.Activity = SYMBOL_REACT_ACTIVITY;
    i.Children = te;
    i.Component = T;
    i.Fragment = SYMBOL_REACT_FRAGMENT;
    i.Profiler = SYMBOL_REACT_PROFILER;
    i.PureComponent = x;
    i.StrictMode = SYMBOL_REACT_STRICT_MODE;
    i.Suspense = SYMBOL_REACT_SUSPENSE;
    i.ViewTransition = SYMBOL_REACT_VIEW_TRANSITION;
    i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = A;
    i.__COMPILER_RUNTIME = ee;
    i.act = function() {
        throw Error("act(...) is not supported in production builds of React.");
    };
    i.addTransitionType = Z;
    i.c = c;
    i.cache = function(e) {
        return function() {
            return e(...arguments);
        };
    };
    i.cacheSignal = function() {
        return null;
    };
    i.captureOwnerStack = undefined;
    i.cloneElement = function(e, t, n) {
        if (e == null) {
            throw Error(`The argument must be a React element, but you passed ${e}.`);
        }
        const r = Object.assign({}, e.props);
        let e_key = e.key;
        if (t != null) {
            if (t.key !== undefined) {
                e_key = `${t.key}`;
            }
            for(a in t){
                if (!(!hasOwnProperty.call(t, a) || a === "key" || a === "__self" || a === "__source" || a === "ref" && t.ref === undefined)) {
                    r[a] = t[a];
                }
            }
        }
        var a = arguments.length - 2;
        if (a === 1) {
            r.children = n;
        } else if (a > 1) {
            const i = Array(a);
            for(let l = 0; l < a; l++){
                i[l] = arguments[l + 2];
            }
            r.children = i;
        }
        return O(e.type, e_key, r);
    };
    i.createContext = function(e) {
        e = {
            $$typeof: SYMBOL_REACT_CONTEXT,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        };
        e.Provider = e;
        e.Consumer = {
            $$typeof: SYMBOL_REACT_CONSUMER,
            _context: e
        };
        return e;
    };
    i.createElement = function(e, t, n) {
        let r;
        const o = {};
        let a = null;
        if (t != null) {
            if (t.key !== undefined) {
                a = `${t.key}`;
            }
            for(r in t){
                if (hasOwnProperty.call(t, r) && r !== "key" && r !== "__self" && r !== "__source") {
                    o[r] = t[r];
                }
            }
        }
        let i = arguments.length - 2;
        if (i === 1) {
            o.children = n;
        } else if (i > 1) {
            const l = Array(i);
            for(let s = 0; s < i; s++){
                l[s] = arguments[s + 2];
            }
            o.children = l;
        }
        if (e && e.defaultProps) {
            i = e.defaultProps;
            for(r in i){
                if (o[r] === undefined) {
                    o[r] = i[r];
                }
            }
        }
        return O(e, a, o);
    };
    i.createRef = function() {
        return {
            current: null
        };
    };
    i.experimental_useEffectEvent = X;
    i.forwardRef = function(render) {
        return {
            $$typeof: SYMBOL_REACT_FORWARD_REF,
            render
        };
    };
    i.isValidElement = q;
    i.jsx = B;
    i.jsxDEV = undefined;
    i.jsxs = B;
    i.lazy = function(_result) {
        return {
            $$typeof: SYMBOL_REACT_LAZY,
            _payload: {
                _status: -1,
                _result
            },
            _init
        };
    };
    i.memo = function(e, t) {
        return {
            $$typeof: SYMBOL_REACT_MEMO,
            type: e,
            compare: t === undefined ? null : t
        };
    };
    i.startTransition = J;
    i.unstable_Activity = SYMBOL_REACT_ACTIVITY;
    i.unstable_LegacyHidden = SYMBOL_REACT_LEGACY_HIDDEN;
    i.unstable_Scope = SYMBOL_REACT_SCOPE;
    i.unstable_SuspenseList = SYMBOL_REACT_SUSPENSE_LIST;
    i.unstable_TracingMarker = SYMBOL_REACT_TRACING_MARKER;
    i.unstable_ViewTransition = SYMBOL_REACT_VIEW_TRANSITION;
    i.unstable_addTransitionType = Z;
    i.unstable_getCacheForType = function(e) {
        const t = A.A;
        if (t) {
            return t.getCacheForType(e);
        }
        return e();
    };
    i.unstable_useCacheRefresh = function() {
        return A.H.useCacheRefresh();
    };
    i.unstable_useMemoCache = c;
    i.use = function(e) {
        return A.H.use(e);
    };
    i.useActionState = function(e, t, n) {
        return A.H.useActionState(e, t, n);
    };
    i.useCallback = function(e, t) {
        return A.H.useCallback(e, t);
    };
    i.useContext = function(e) {
        return A.H.useContext(e);
    };
    i.useDebugValue = function() {};
    i.useDeferredValue = function(e, t) {
        return A.H.useDeferredValue(e, t);
    };
    i.useEffect = function(e, t) {
        return A.H.useEffect(e, t);
    };
    i.useEffectEvent = X;
    i.useId = function() {
        return A.H.useId();
    };
    i.useImperativeHandle = function(e, t, n) {
        return A.H.useImperativeHandle(e, t, n);
    };
    i.useInsertionEffect = function(e, t) {
        return A.H.useInsertionEffect(e, t);
    };
    i.useLayoutEffect = function(e, t) {
        return A.H.useLayoutEffect(e, t);
    };
    i.useMemo = function(e, t) {
        return A.H.useMemo(e, t);
    };
    i.useOptimistic = function(e, t) {
        return A.H.useOptimistic(e, t);
    };
    i.useReducer = function(e, t, n) {
        return A.H.useReducer(e, t, n);
    };
    i.useRef = function(e) {
        return A.H.useRef(e);
    };
    i.useState = function(e) {
        return A.H.useState(e);
    };
    i.useSyncExternalStore = function(e, t, n) {
        return A.H.useSyncExternalStore(e, t, n);
    };
    i.useTransition = function() {
        return A.H.useTransition();
    };
    i.version = "19.3.0-www-classic-a6792708-20261019";
}, null);