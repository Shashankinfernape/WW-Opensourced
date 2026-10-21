__d("BaseFocusRing.react", [
    "FocusWithinHandler.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = {
        focused: {
            boxShadow: "x18bame2",
            outline: "x1a2a7pz xvetz19",
            $$css: true
        },
        focusedInset: {
            boxShadow: "xpud6h4",
            $$css: true
        },
        unfocused: {
            outline: "x1a2a7pz",
            $$css: true
        }
    };
    function CComponent(e) {
        const t = o("react-compiler-runtime").c(11);
        const { children, focusRingPosition, focusVisibleXStyle, mode, onFocusVisibleChange, suppressFocusRing, testOnly, xstyle } = e;
        const _ = focusRingPosition === undefined ? "default" : focusRingPosition;
        const f = mode === undefined ? "focus-visible" : mode;
        const g = suppressFocusRing === undefined ? false : suppressFocusRing;
        let h;
        if (t[0] !== children || t[1] !== _ || t[2] !== focusVisibleXStyle || t[3] !== f || t[4] !== onFocusVisibleChange || t[5] !== g || t[6] !== xstyle) {
            h = function(t, r) {
                const e = !g && t && (r || f === "focus");
                onFocusVisibleChange?.(r);
                const o = [];
                if (e) {
                    o.push(_ === "inset" ? u.focusedInset : u.focused);
                } else {
                    o.push(u.unfocused);
                }
                return children([].concat(o, [
                    xstyle,
                    e ? focusVisibleXStyle : undefined
                ]));
            };
            t[0] = children;
            t[1] = _;
            t[2] = focusVisibleXStyle;
            t[3] = f;
            t[4] = onFocusVisibleChange;
            t[5] = g;
            t[6] = xstyle;
            t[7] = h;
        } else {
            h = t[7];
        }
        let y;
        if (t[8] !== h || t[9] !== testOnly) {
            const Component = r("FocusWithinHandler.react");
            y = <Component testOnly={testOnly}>{h}</Component>;
            t[8] = h;
            t[9] = testOnly;
            t[10] = y;
        } else {
            y = t[10];
        }
        return y;
    }
    l.default = CComponent;
}, 98);