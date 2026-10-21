__d("react-is-16.8.6", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = {};
    const l = {
        exports: e
    };
    function s() {
        Object.defineProperty(e, "__esModule", {
            value: true
        });
        const t = typeof Symbol === "function" && Symbol.for;
        const n = t ? Symbol.for("react.transitional.element") : 60103;
        const r = t ? Symbol.for("react.portal") : 60106;
        const o = t ? Symbol.for("react.fragment") : 60107;
        const a = t ? Symbol.for("react.strict_mode") : 60108;
        const i = t ? Symbol.for("react.profiler") : 60114;
        const l = t ? Symbol.for("react.provider") : 60109;
        const s = t ? Symbol.for("react.context") : 60110;
        const u = t ? Symbol.for("react.async_mode") : 60111;
        const c = t ? Symbol.for("react.concurrent_mode") : 60111;
        const d = t ? Symbol.for("react.forward_ref") : 60112;
        const m = t ? Symbol.for("react.suspense") : 60113;
        const p = t ? Symbol.for("react.memo") : 60115;
        const _ = t ? Symbol.for("react.lazy") : 60116;
        function f(e) {
            if (typeof e === "object" && e !== null) {
                const t = e.$$typeof;
                switch(t){
                    case n:
                        e = e.type;
                        switch(e){
                            case u:
                            case c:
                            case o:
                            case i:
                            case a:
                            case m:
                                return e;
                            default:
                                e = e && e.$$typeof;
                                switch(e){
                                    case s:
                                    case d:
                                    case l:
                                        return e;
                                    default:
                                        return t;
                                }
                        }
                    case _:
                    case p:
                    case r:
                        return t;
                }
            }
        }
        function g(e) {
            return f(e) === c;
        }
        e.typeOf = f;
        e.AsyncMode = u;
        e.ConcurrentMode = c;
        e.ContextConsumer = s;
        e.ContextProvider = l;
        e.Element = n;
        e.ForwardRef = d;
        e.Fragment = o;
        e.Lazy = _;
        e.Memo = p;
        e.Portal = r;
        e.Profiler = i;
        e.StrictMode = a;
        e.Suspense = m;
        e.isValidElementType = function(e) {
            return typeof e === "string" || typeof e === "function" || e === o || e === c || e === i || e === a || e === m || typeof e === "object" && e !== null && (e.$$typeof === _ || e.$$typeof === p || e.$$typeof === l || e.$$typeof === s || e.$$typeof === d);
        };
        e.isAsyncMode = function(e) {
            return g(e) || f(e) === u;
        };
        e.isConcurrentMode = g;
        e.isContextConsumer = function(e) {
            return f(e) === s;
        };
        e.isContextProvider = function(e) {
            return f(e) === l;
        };
        e.isElement = function(e) {
            return typeof e === "object" && e !== null && e.$$typeof === n;
        };
        e.isForwardRef = function(e) {
            return f(e) === d;
        };
        e.isFragment = function(e) {
            return f(e) === o;
        };
        e.isLazy = function(e) {
            return f(e) === _;
        };
        e.isMemo = function(e) {
            return f(e) === p;
        };
        e.isPortal = function(e) {
            return f(e) === r;
        };
        e.isProfiler = function(e) {
            return f(e) === i;
        };
        e.isStrictMode = function(e) {
            return f(e) === a;
        };
        e.isSuspense = function(e) {
            return f(e) === m;
        };
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
            case void 0:
                return f();
        }
    }
    a.exports = g;
}, null);