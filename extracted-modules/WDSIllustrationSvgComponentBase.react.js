__d("WDSIllustrationSvgComponentBase.react", [
    "WDSSvgComponentBase.react",
    "err",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "children"
    ];
    let s;
    const u = s || (s = o("react"));
    function c(t) {
        const n = t.children;
        const o = babelHelpers.objectWithoutPropertiesLoose(t, e);
        if (n == null) {
            throw r("err")("Cannot use WDSBaseIllustrationSpan without SVG children");
        }
        const { "aria-hidden": a, "aria-label": i, containerRef: l, directional: s, displayInline: c, overrideDirection: d, testid: m, xstyle: p } = o;
        const Component = r("WDSSvgComponentBase.react");
        return <Component aria-hidden={a} aria-label={i} containerRef={l} directional={s} displayInline={c} overrideDirection={d} testid={void 0} xstyle={p}>{n}</Component>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = c;
}, 98);