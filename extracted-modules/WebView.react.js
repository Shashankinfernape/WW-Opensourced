__d("WebView.react", [
    "react",
    "stylex",
    "testID"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "ref"
    ];
    const s = [
        "children",
        "suppressHydrationWarning",
        "testid",
        "xstyle"
    ];
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = {
        root: {
            boxSizing: "x9f619",
            position: "x1n2onr6",
            zIndex: "x1ja2u2z",
            $$css: true
        }
    };
    function p(t) {
        const t_ref = t.ref;
        const o = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { children, suppressHydrationWarning, testid, xstyle } = o;
        const p = babelHelpers.objectWithoutPropertiesLoose(o, s);
        return <div {...babelHelpers.extends({}, p, r("testID")(testid), (u || (u = r("stylex"))).props(m.root, xstyle), {
            ref: t_ref,
            suppressHydrationWarning,
            children
        })}/>;
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    l.default = p;
}, 98);