__d("BaseContextualLayerAnchorRoot.react", [
    "BaseContextualLayerAnchorRootContext",
    "BaseDOMContainer.react",
    "ExecutionEnvironment",
    "react",
    "react-compiler-runtime",
    "useStable",
    "useUnsafeRef_DEPRECATED"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    const c = u || (u = o("react"));
    function d(t) {
        const n = o("react-compiler-runtime").c(8);
        const t_children = t.children;
        const i = r("useStable")(m);
        const l = (e || (e = r("useUnsafeRef_DEPRECATED")))(i);
        let s;
        if (n[0] !== l || n[1] !== t_children) {
            const Component = r("BaseContextualLayerAnchorRootContext").Provider;
            s = <Component value={l}>{t_children}</Component>;
            n[0] = l;
            n[1] = t_children;
            n[2] = s;
        } else {
            s = n[2];
        }
        let u;
        if (n[3] !== i) {
            u = c.jsx(r("BaseDOMContainer.react"), {
                node: i
            });
            n[3] = i;
            n[4] = u;
        } else {
            u = n[4];
        }
        let d;
        if (n[5] !== s || n[6] !== u) {
            d = <>{s}{u}</>;
            n[5] = s;
            n[6] = u;
            n[7] = d;
        } else {
            d = n[7];
        }
        return d;
    }
    function m() {
        if ((s || (s = r("ExecutionEnvironment"))).canUseDOM) {
            return document.createElement("div");
        }
        return null;
    }
    l.default = d;
}, 98);