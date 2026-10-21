__d("lazyLoadComponent", [
    "BootloaderResource",
    "cr:2448",
    "cr:38536",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    const s = [
        "ref"
    ];
    let u;
    const c = u || (u = o("react"));
    const d = new Map;
    function m(e, t, n) {
        let r = d.get(e);
        if (r == null) {
            r = new Map;
            d.set(e, r);
        }
        r.set(t, n);
    }
    function p(e, t) {
        return d.get(e)?.get(t);
    }
    function _(t, r) {
        const a = p(t, r);
        if (a) {
            return a;
        }
        function IComponent(r) {
            const a = o("react-compiler-runtime").c(7);
            let i;
            let l;
            if (a[0] !== r) {
                l = r.ref;
                i = babelHelpers.objectWithoutPropertiesLoose(r, e);
                a[0] = r;
                a[1] = i;
                a[2] = l;
            } else {
                i = a[1];
                l = a[2];
            }
            const s = l === undefined ? undefined : l;
            let u;
            if (a[3] === Symbol.for("react.memo_cache_sentinel")) {
                u = o("BootloaderResource").read(t);
                a[3] = u;
            } else {
                u = a[3];
            }
            const D = u;
            n("cr:2448")(t);
            let m;
            if (a[4] !== i || a[5] !== s) {
                m = <D {...babelHelpers.extends({}, i, {
                    ref: s
                })}/>;
                a[4] = i;
                a[5] = s;
                a[6] = m;
            } else {
                m = a[6];
            }
            return m;
        }
        IComponent.displayName = `lazyLoadComponent(${t.getModuleId()})`;
        let l = IComponent;
        if (n("cr:38536") != null && r !== "no-error-boundary") {
            const u = function(t) {
                const e = o("react-compiler-runtime").c(6);
                let n;
                let r;
                if (e[0] !== t) {
                    r = t.ref;
                    n = babelHelpers.objectWithoutPropertiesLoose(t, s);
                    e[0] = t;
                    e[1] = n;
                    e[2] = r;
                } else {
                    n = e[1];
                    r = e[2];
                }
                const a = r === undefined ? undefined : r;
                let l;
                if (e[3] !== n || e[4] !== a) {
                    l = <_ description={d} fallback={fallback} fallbackComponent={fallbackComponent} moduleName={d}><IComponent {...babelHelpers.extends({}, n, {
                        ref: a
                    })}/></_>;
                    e[3] = n;
                    e[4] = a;
                    e[5] = l;
                } else {
                    l = e[5];
                }
                return l;
            };
            var d = t.getModuleId();
            var _ = n("cr:38536");
            var fallbackComponent = r;
            var fallback = fallbackComponent == null ? undefined : function(e, moduleName) {
                return c.jsx(fallbackComponent, {
                    error: e,
                    moduleName
                });
            };
            u.displayName = `lazyLoadComponent(${d})[ErrorBoundary]`;
            l = u;
        }
        m(t, r, l);
        return l;
    }
    l.default = _;
}, 98);