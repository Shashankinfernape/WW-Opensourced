__d("deferredLoadComponentBase", [
    "ExecutionEnvironment",
    "Promise",
    "PromiseAnnotate",
    "react",
    "suspendOrThrowIfUsedInSSR"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    const s = [
        "loadImmediately"
    ];
    let u;
    let c;
    let d;
    let m;
    let p;
    const _ = p || (p = o("react"));
    const f = {};
    const g = {};
    const h = new Map;
    function y(e, t) {
        h.set(e, t);
    }
    function C(e) {
        return h.get(e);
    }
    function b(t, a) {
        const l = C(t);
        if (l) {
            return l;
        }
        let p;
        const h = t.getModuleId();
        function b() {
            let e = g[h];
            if (!e) {
                e = g[h] = new (m || (m = n("Promise")))(function(e) {
                    t.loadImmediately(function(t) {
                        delete g[h];
                        p = a(t);
                        e();
                    });
                });
            }
            return e;
        }
        function v() {
            let e = f[h];
            if (!e) {
                e = f[h] = new (m || (m = n("Promise")))(function(e) {
                    t.onReady(function(t) {
                        p = a(t);
                        delete f[h];
                        e();
                    });
                });
            }
            return e;
        }
        function S(n) {
            const n_ref = n.ref;
            const l = babelHelpers.objectWithoutPropertiesLoose(n, e);
            const l_loadImmediately = l.loadImmediately;
            const f = babelHelpers.objectWithoutPropertiesLoose(l, s);
            if (!p) {
                const g = t.getModuleIfRequireable();
                if (g != null) {
                    p = a(g);
                }
                if (!p) {
                    if (!(u || (u = r("ExecutionEnvironment"))).isInBrowser && !t.isAvailableInSSR_DO_NOT_USE()) {
                        (d || (d = r("suspendOrThrowIfUsedInSSR")))("Loading bootloaded and T3 components are disabled during SSR");
                    }
                    const h = l_loadImmediately === true ? b() : v();
                    (c || (c = o("PromiseAnnotate"))).setDisplayName(h, S.displayName);
                    throw h;
                }
            }
            return _.jsx(p, babelHelpers.extends({}, f, {
                ref: n_ref
            }));
        }
        S.displayName = `${S.name} [from ${i.id}]`;
        let R = t.getModuleId();
        if (t.isRequireDeferredForDisplay() === true) {
            R = `requireDeferredForDisplay${`(${t.getModuleId()})`}`;
        } else if (t.isRequireDeferredForDisplay() === false) {
            R = `requireDeferred${`(${t.getModuleId()})`}`;
        }
        S.displayName = `deferredLoadComponent(${R})`;
        const L = S;
        y(t, L);
        return L;
    }
    l.default = b;
}, 98);