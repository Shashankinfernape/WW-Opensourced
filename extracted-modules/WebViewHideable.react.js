__d("WebViewHideable.react", [
    "cr:35629",
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
        hidden: {
            display: "x1s85apg",
            $$css: true
        },
        root: {
            boxSizing: "x9f619",
            position: "x1n2onr6",
            zIndex: "x1ja2u2z",
            $$css: true
        }
    };
    function PComponent(t) {
        const t_ref = t.ref;
        const a = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { children, suppressHydrationWarning, testid, xstyle } = a;
        const _ = babelHelpers.objectWithoutPropertiesLoose(a, s);
        const f = _.hidden === true;
        const Component = n("cr:35629");
        return <Component htmlAttributes={babelHelpers.extends({}, _, r("testID")(testid), (u || (u = r("stylex"))).props(m.root, xstyle, f && m.hidden))} mode={f ? "hidden" : "visible"} ref={t_ref} suppressHydrationWarning={suppressHydrationWarning}>{children}</Component>;
    }
    PComponent.displayName = `${PComponent.name} [from ${i.id}]`;
    l.default = PComponent;
}, 98);