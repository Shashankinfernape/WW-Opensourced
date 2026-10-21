__d("react-forget-runtime", [
    "invariant",
    "DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE",
    "FBLogger",
    "err"
], function(t, n, r, o, a, i, l, s) {
    let e = null;
    let u = null;
    let c = false;
    const t_console = t.console;
    const m = [];
    const p = {};
    const _ = "Jest-Only Fatal: ";
    const f = "";
    function g(e) {
        if (!c) {
            const t = r("err")(_ + e);
            t_console.error(`${_ + e}
${t.stack}`);
            c = true;
            r("FBLogger")("React").warn("React compiler guard functions used in production.");
        }
    }
    [
        "useCallback",
        "useContext",
        "useEffect",
        "useImperativeHandle",
        "useInsertionEffect",
        "useLayoutEffect",
        "useMemo",
        "useReducer",
        "useRef",
        "useState",
        "useDebugValue",
        "useDeferredValue",
        "useTransition",
        "useMutableSource",
        "useSyncExternalStore",
        "useId",
        "useCacheRefresh",
        "useOptimistic"
    ].forEach((e)=>{
        p[e] = function() {
            const e = "[React] Unexpected React hook call {name} from a React Forget compiled function. Check that all hooks are called directly and named according to convention ('use[A-Z]') ";
            g(e);
        };
    });
    const h = (t)=>{
        p[t] = function() {
            if (u == null) {
                throw r("FBLogger")("React").mustfixThrow("React Forget internal error: unexpected null dispatcher");
            }
            return u[t](...arguments);
        };
    };
    for (const y of [
        "useMemoCache",
        "unstable_useMemoCache",
        "readContext",
        "unstable_isNewReconciler",
        "getCacheSignal",
        "getCacheForType",
        "use"
    ]){
        h(y);
    }
    function C(t) {
        e.H == null;
        const n = e.H;
        if (n != null) {
            if (t === 0) {
                m.push(n);
                if (m.length === 1) {
                    u = n;
                }
                if (n === p) {
                    const o = "[React] Unexpected call to custom hook or component from a React Forget compiled function. Check that (1) all hooks are called directly and named according to convention ('use[A-Z]') and (2) components are returned as JSX instead of being directly invoked.";
                    g(o);
                }
                e.H = p;
            } else if (t === 1) {
                const a = m.pop();
                if (a == null) {
                    throw r("FBLogger")("React").mustfixThrow("React Forget internal error: unexpected null in guard stack");
                }
                if (m.length === 0) {
                    u = null;
                }
                e.H = a;
            } else if (t === 2) {
                m.push(n);
                if (u != null) {
                    e.H = u;
                }
            } else if (t === 3) {
                const i = m.pop();
                if (i == null) {
                    throw r("FBLogger")("React").mustfixThrow("React Forget internal error: unexpected null in guard stack");
                }
                e.H = i;
            }
        }
    }
    function b(t) {
        R = t.isValidElement;
        e = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    }
    const v = false;
    function S(e, t) {
        t_console.log(e, t);
    }
    var R = null;
    function L(e) {
        return R?.(e) ?? false;
    }
    const E = new Set;
    function k(e, t, n, o, a, i) {
        function l(e, t, r, l) {
            const s = `${f}Forget change detection: ${a}:${i} [${o}]: ${n}${r} changed from ${e} to ${t} (depth ${l})`;
            if (!E.has(s)) {
                E.add(s);
                t_console.error(s);
            }
        }
        const u = 2;
        function c(e, t, n, o) {
            if (!(o > u)) {
                if (e === t) {
                    return;
                }
                if (typeof e != typeof t) {
                    l(`type ${typeof e}`, `type ${typeof t}`, n, o);
                } else if (typeof e === "object") {
                    if (typeof t !== "object") {
                        s(0, 18576);
                    }
                    if (e === null || t === null) {
                        if (e !== null || t !== null) {
                            l(`type ${e === null ? "null" : "object"}`, `type ${t === null ? "null" : "object"}`, n, o);
                        }
                    } else if (e instanceof Map) {
                        if (!(t instanceof Map)) {
                            l("Map instance", "other value", n, o);
                        } else if (e.size !== t.size) {
                            l(`Map instance with size ${e.size}`, `Map instance with size ${t.size}`, n, o);
                        } else {
                            for (const [i, d] of e){
                                if (t.has(i)) {
                                    c(d, t.get(i), `${n}.get(${String(i)})`, o + 1);
                                } else {
                                    l(`Map instance with key ${String(i)}`, `Map instance without key ${String(d)}`, n, o);
                                }
                            }
                        }
                    } else if (t instanceof Map) {
                        l("other value", "Map instance", n, o);
                    } else if (e instanceof Set) {
                        if (!(t instanceof Set)) {
                            l("Set instance", "other value", n, o);
                        } else if (e.size !== t.size) {
                            l(`Set instance with size ${e.size}`, `Set instance with size ${t.size}`, n, o);
                        } else {
                            for (const m of t){
                                if (!e.has(m)) {
                                    l(`Set instance without element ${String(m)}`, `Set instance with element ${String(m)}`, n, o);
                                }
                            }
                        }
                    } else if (t instanceof Set) {
                        l("other value", "Set instance", n, o);
                    } else if (Array.isArray(e) || Array.isArray(t)) {
                        if (!Array.isArray(e) || !Array.isArray(t)) {
                            l(`type ${Array.isArray(e) ? "array" : "object"}`, `type ${Array.isArray(t) ? "array" : "object"}`, n, o);
                        } else if (e.length !== t.length) {
                            l(`array with length ${e.length}`, `array with length ${t.length}`, n, o);
                        } else {
                            for(let p = 0; p < e.length; p++){
                                c(e[p], t[p], `${n}[${p}]`, o + 1);
                            }
                        }
                    } else if (L(e) || L(t)) {
                        if (!L(e) || !L(t)) {
                            l(`type ${L(e) ? "React element" : "object"}`, `type ${L(t) ? "React element" : "object"}`, n, o);
                        } else if (r("DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE")(e).type !== r("DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE")(t).type) {
                            l(`React element of type ${String(r("DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE")(e).type.name)}`, `React element of type ${String(r("DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE")(t).type.name)}`, n, o);
                        } else {
                            c(r("DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE")(e).props, r("DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE")(t).props, `[props of ${n}]`, o + 1);
                        }
                    } else {
                        for(const _ in t){
                            if (!(_ in e)) {
                                l(`object without key ${_}`, `object with key ${_}`, n, o);
                            }
                        }
                        for(const f in e){
                            if (f in t) {
                                c(e[f], t[f], `${n}.${f}`, o + 1);
                            } else {
                                l(`object with key ${f}`, `object without key ${f}`, n, o);
                            }
                        }
                    }
                } else {
                    if (typeof e === "function") {
                        return;
                    }
                    if (isNaN(e) || isNaN(t)) {
                        if (isNaN(e) !== isNaN(t)) {
                            l(isNaN(e) ? "NaN" : "non-NaN value", isNaN(t) ? "NaN" : "non-NaN value", n, o);
                        }
                    } else if (e !== t) {
                        l(String(e), String(t), n, o);
                    }
                }
            }
        }
        c(e, t, "", 0);
    }
    l.$dispatcherGuard = C;
    l.initReactForgetRuntime = b;
    l.shouldLogRender = v;
    l.logRender = S;
    l.$structuralCheck = k;
}, 98);