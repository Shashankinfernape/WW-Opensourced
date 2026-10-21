__d("useCometPressableStyles", [
    "CometContainerPressableContext",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useContext = (e || (e = o("react"))).useContext;
    const u = {
        defaultCursor: {
            cursor: "xt0e3qv",
            $$css: true
        },
        expanding: {
            display: "x78zum5",
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
        hideOutline: {
            outline: "x1a2a7pz",
            $$css: true
        },
        linkBase: {
            display: "x1rg5ohu",
            $$css: true
        },
        root: {
            borderStartStartRadius: "x1fmog5m",
            borderStartEndRadius: "xu25z0z",
            borderEndEndRadius: "x140muxe",
            borderEndStartRadius: "xo1y3bh",
            display: "x3nfvp2",
            flexDirection: "x1q0g3np",
            userSelect: "x87ps6o",
            ":hover_textDecoration": "x1lku1pv",
            $$css: true
        },
        root_DEPRECATED: {
            borderStartStartRadius: "x1fmog5m",
            borderStartEndRadius: "xu25z0z",
            borderEndEndRadius: "x140muxe",
            borderEndStartRadius: "xo1y3bh",
            position: "x1n2onr6",
            userSelect: "x87ps6o",
            ":hover_textDecoration": "x1lku1pv",
            $$css: true
        },
        zIndex: {
            zIndex: "x1vjfegm",
            $$css: true
        }
    };
    function useC({ cursorDisabled, display, disabled = false, expanding = display === "block", focused, focusVisible, hideFocusOverlay = false, hovered, overlayDisabled = false, pressed, suppressFocusRing = false, isLink, pressedStyleValue, overlayFocusRingPosition, xstyle }) {
        const L = typeof xstyle === "function" ? xstyle({
            disabled,
            focused,
            focusVisible,
            hovered,
            pressed
        }) : xstyle;
        const E = useContext(r("CometContainerPressableContext"));
        const k = focusVisible && (hideFocusOverlay || overlayDisabled) && !suppressFocusRing;
        const I = [
            display === "inline" ? u.root_DEPRECATED : u.root,
            cursorDisabled === true && u.defaultCursor,
            expanding && u.expanding,
            isLink && u.linkBase,
            !focusVisible && u.hideOutline,
            L,
            k && (overlayFocusRingPosition === "inset" ? u.focusRingInset : u.focusRing),
            E != null && u.zIndex
        ];
        let pressedStyle = {};
        if (pressed && pressedStyleValue != null) {
            const { opacity, scale } = pressedStyleValue;
            if (opacity != null) {
                pressedStyle = {
                    opacity
                };
            }
            if (scale != null) {
                pressedStyle = babelHelpers.extends({}, pressedStyle, {
                    transform: `scale(${scale})`
                });
            }
        }
        return {
            pressedStyle,
            xstyle: I
        };
    }
    l.default = useC;
}, 98);