__d("LegacyHidden", [
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "ref"
    ];
    let s;
    const u = s || (s = o("react"));
    const UnstableLegacyHidden = u.unstable_LegacyHidden;
    function LegacyHidden(t) {
        const n = o("react-compiler-runtime").c(12);
        let ref;
        let a;
        if (n[0] !== t) {
            ref = t.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = ref;
            n[2] = a;
        } else {
            ref = n[1];
            a = n[2];
        }
        const i = a;
        const { children, htmlAttributes, mode, suppressHydrationWarning } = i;
        const hidden = mode === "hidden" ? true : undefined;
        const mode_1 = mode === "hidden" ? "unstable-defer-without-hiding" : mode;
        let children_1;
        if (n[3] !== children || n[4] !== mode_1) {
            children_1 = <UnstableLegacyHidden mode={mode_1}>{children}</UnstableLegacyHidden>;
            n[3] = children;
            n[4] = mode_1;
            n[5] = children_1;
        } else {
            children_1 = n[5];
        }
        let g;
        if (n[6] !== ref || n[7] !== htmlAttributes || n[8] !== suppressHydrationWarning || n[9] !== hidden || n[10] !== children_1) {
            g = <div {...babelHelpers.extends({}, htmlAttributes, {
                hidden,
                ref,
                suppressHydrationWarning,
                children: children_1
            })}/>;
            n[6] = ref;
            n[7] = htmlAttributes;
            n[8] = suppressHydrationWarning;
            n[9] = hidden;
            n[10] = children_1;
            n[11] = g;
        } else {
            g = n[11];
        }
        return g;
    }
    LegacyHidden.displayName = "LegacyHidden";
    l.default = LegacyHidden;
}, 98);