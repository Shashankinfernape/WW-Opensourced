__d("WDSTooltipConfig.react", [
    "BaseTooltipImpl.react",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "headline",
        "tooltip"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = {
        container: {
            maxWidth: "x1ncir08",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            minHeight: "xjwf9q1",
            backgroundColor: "xpip370",
            borderStartStartRadius: "xjwep3j",
            borderStartEndRadius: "x1t39747",
            borderEndEndRadius: "x1wcsgtt",
            borderEndStartRadius: "x1pczhz8",
            boxShadow: "x1agd393",
            pointerEvents: "x47corl",
            $$css: true
        },
        alignOffset: {
            marginTop: "xr9ek0c",
            marginInlineEnd: "xnnr8r",
            marginBottom: "xjpr12u",
            marginInlineStart: "xwklpps",
            $$css: true
        },
        contextualLayerXstyle: {
            zIndex: "xoz0ns6",
            pointerEvents: "x47corl",
            $$css: true
        }
    };
    function d(t) {
        const { headline, tooltip } = t;
        const a = babelHelpers.objectWithoutPropertiesLoose(t, e);
        return u.jsx(r("BaseTooltipImpl.react"), babelHelpers.extends({}, a, {
            tooltip,
            alignOffsetXstyle: c.alignOffset,
            xstyle: c.container,
            contextualLayerXstyle: c.contextualLayerXstyle
        }));
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    l.default = d;
}, 98);