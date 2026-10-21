__d("useWAWebHandlerProps", [
    "WAWebKeyboardIsKeyActivation",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("react-compiler-runtime").c(9);
        let n;
        if (t[0] !== e.disabled || t[1] !== e.onBlur || t[2] !== e.onClick || t[3] !== e.onFocus || t[4] !== e.onMouseEnter || t[5] !== e.onMouseLeave || t[6] !== e.role || t[7] !== e.tabIndex) {
            n = {
                onMouseLeave: e.onMouseLeave,
                onMouseEnter: e.onMouseEnter
            };
            if (typeof e.role === "string") {
                n.role = e.role;
                if (e.disabled !== true) {
                    n.onClick = e.onClick;
                    n.onBlur = e.onBlur;
                    n.onFocus = e.onFocus;
                    if (n.onClick != null) {
                        n.onKeyPress = s;
                    }
                }
                n.tabIndex = e.tabIndex ?? 0;
                n.disabled = e.disabled ?? void 0;
                n["aria-disabled"] = n.disabled;
            }
            t[0] = e.disabled;
            t[1] = e.onBlur;
            t[2] = e.onClick;
            t[3] = e.onFocus;
            t[4] = e.onMouseEnter;
            t[5] = e.onMouseLeave;
            t[6] = e.role;
            t[7] = e.tabIndex;
            t[8] = n;
        } else {
            n = t[8];
        }
        return n;
    }
    function s(e) {
        if (r("WAWebKeyboardIsKeyActivation")(e)) {
            e.stopPropagation();
            e.preventDefault();
            e.currentTarget.click();
        }
    }
    l.useHandlerProps = e;
}, 98);