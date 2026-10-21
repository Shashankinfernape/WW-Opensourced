__d("WDSSvgComponentBase.react", [
    "Locale",
    "WDSColorStyles.stylex",
    "err",
    "react",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "children"
    ];
    const s = [
        "aria-hidden",
        "aria-label",
        "colorName",
        "containerRef",
        "directional",
        "displayInline",
        "overrideDirection",
        "testid",
        "xstyle"
    ];
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = {
        reverse: {
            display: "x1lliihq",
            transform: "xpk2tj9",
            $$css: true
        },
        inline: {
            display: "x1rg5ohu",
            verticalAlign: "x11njtxf",
            $$css: true
        }
    };
    function p(t) {
        const t_children = t.children;
        const a = babelHelpers.objectWithoutPropertiesLoose(t, e);
        if (t_children == null) {
            throw r("err")("Cannot use WDSBaseSvgSpan without SVG children");
        }
        const { "aria-hidden": aria_hidden, "aria-label": aria_label, colorName, containerRef, directional, displayInline, overrideDirection, testid, xstyle } = a;
        const C = babelHelpers.objectWithoutPropertiesLoose(a, s);
        let b;
        if (overrideDirection != null) {
            b = overrideDirection === "rtl";
        } else {
            b = directional === true ? o("Locale").isRTL() : false;
        }
        const v = colorName != null ? o("WDSColorStyles.stylex").WDSColorStyles[colorName] : null;
        const S = [
            b ? m.reverse : null,
            displayInline === true && m.inline,
            v,
            xstyle
        ];
        const R = aria_hidden === false ? false : aria_label == null;
        return <span {...babelHelpers.extends({
            "data-testid": undefined,
            "aria-hidden": R,
            "aria-label": aria_label,
            ref: containerRef
        }, C, (u || (u = r("stylex"))).props(S), {
            children: t_children
        })}/>;
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    l.default = p;
}, 98);