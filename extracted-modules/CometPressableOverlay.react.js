__d("CometPressableOverlay.react", [
    "CometPressableOverlayContainer.react",
    "VisualCompletionAttributes",
    "XPlatReactEnvironment",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const e_useState = e.useState;
    const c = {
        circle: {
            borderStartStartRadius: "x1iwo8zk",
            borderStartEndRadius: "x1033uif",
            borderEndEndRadius: "x179ill4",
            borderEndStartRadius: "x1b60jn0",
            $$css: true
        },
        defaultHoveredStyle: {
            backgroundColor: "x1wpzbip",
            $$css: true
        },
        defaultPressedStyle: {
            backgroundColor: "x1iutvsz",
            $$css: true
        },
        focusRing: {
            boxShadow: "x18bame2",
            outline: "x1a2a7pz xvetz19",
            $$css: true
        },
        focusRingInset: {
            boxShadow: "xpud6h4",
            $$css: true
        },
        overlay: {
            bottom: "x1ey2m1c",
            insetInlineEnd: "xtijo5x",
            insetInlineStart: "x1o0tod",
            left: null,
            right: null,
            opacity: "xg01cxk",
            pointerEvents: "x47corl",
            position: "x10l6tqk",
            top: "x13vifvy",
            transitionDuration: "x1ebt8du",
            transitionProperty: "x19991ni",
            transitionTimingFunction: "x1dhq9h",
            $$css: true
        },
        overlayVisible: {
            opacity: "x1hc1fzr",
            transitionDuration: "x1mq3mr6",
            $$css: true
        },
        overlayWeb: {
            borderStartStartRadius: "x1fmog5m",
            borderStartEndRadius: "xu25z0z",
            borderEndEndRadius: "x140muxe",
            borderEndStartRadius: "xo1y3bh",
            $$css: true
        }
    };
    function d(e) {
        "use no forget";
        const e_focusRingPosition = e.focusRingPosition;
        const n = e_focusRingPosition === undefined ? "default" : e_focusRingPosition;
        const e_focusVisible = e.focusVisible;
        const i = e_focusVisible === undefined ? false : e_focusVisible;
        const { focusVisibleStyle, hovered } = e;
        const m = hovered === undefined ? false : hovered;
        const e_hoveredStyle = e.hoveredStyle;
        const _ = e_hoveredStyle === undefined ? c.defaultHoveredStyle : e_hoveredStyle;
        const { offset, pressed } = e;
        const h = pressed === undefined ? false : pressed;
        const e_pressedStyle = e.pressedStyle;
        const C = e_pressedStyle === undefined ? c.defaultPressedStyle : e_pressedStyle;
        const { radius, showFocusRing } = e;
        const S = showFocusRing === undefined ? false : showFocusRing;
        const e_xstyle = e.xstyle;
        const L = e_useState();
        const E = L[0];
        const k = L[1];
        if (h) {
            if (E !== "pressed") {
                k("pressed");
            }
        } else if (i) {
            if (E !== "focused") {
                k("focused");
            }
        } else if (m && E !== "hovered") {
            k("hovered");
        }
        let I = 0;
        let T = 0;
        let right = 0;
        let x = 0;
        if (offset != null) {
            if (typeof offset === "number") {
                I = -offset;
                T = -offset;
                right = -offset;
                x = -offset;
            } else {
                I = -offset.bottom;
                T = -offset.left;
                right = -offset.right;
                x = -offset.top;
            }
        }
        const $ = (E === "focused" || E === "pressed" && i) && S ? n === "default" ? c.focusRing : c.focusRingInset : undefined;
        return s.jsx(r("CometPressableOverlayContainer.react"), babelHelpers.extends({
            style: E != null ? babelHelpers.extends({}, typeof radius === "number" ? {
                borderRadius: radius
            } : {}, {
                bottom: I,
                left: T,
                right,
                top: x
            }) : undefined,
            xstyle: [
                c.overlay,
                o("XPlatReactEnvironment").isWeb() && c.overlayWeb,
                e_xstyle,
                (h || i || m) && [
                    c.overlayVisible,
                    E === "pressed" && C,
                    E === "focused" && (focusVisibleStyle ?? _),
                    E === "hovered" && _
                ],
                $,
                radius === "50%" && c.circle
            ]
        }, r("VisualCompletionAttributes").IGNORE, {
            role: "none",
            children: null
        }));
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    l.default = d;
}, 98);