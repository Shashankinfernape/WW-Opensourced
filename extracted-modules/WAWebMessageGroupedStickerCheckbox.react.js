__d("WAWebMessageGroupedStickerCheckbox.react", [
    "WAWebCheckBox.react",
    "WAWebStopEvent",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(12);
        const { ariaLabel, checked, onClick, ref } = e;
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = {
                className: "x10l6tqk x1rozsjd xh8yej3 x5yr21d x1ypdohk"
            };
            t[0] = l;
        } else {
            l = t[0];
        }
        let u;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            u = {
                className: "x10l6tqk xxk6nc9 x1ro0b6g"
            };
            t[1] = u;
        } else {
            u = t[1];
        }
        let c;
        if (t[2] !== ariaLabel) {
            c = ariaLabel != null ? {
                ariaLabel
            } : {};
            t[2] = ariaLabel;
            t[3] = c;
        } else {
            c = t[3];
        }
        let d;
        if (t[4] !== checked || t[5] !== onClick || t[6] !== c) {
            d = <div {...babelHelpers.extends({}, u, {
                onClick: o("WAWebStopEvent").stopPropagation,
                children: s.jsx(o("WAWebCheckBox.react").CheckBox, babelHelpers.extends({
                    onChange: onClick,
                    checked
                }, c))
            })}/>;
            t[4] = checked;
            t[5] = onClick;
            t[6] = c;
            t[7] = d;
        } else {
            d = t[7];
        }
        let m;
        if (t[8] !== onClick || t[9] !== ref || t[10] !== d) {
            m = <div {...babelHelpers.extends({
                ref
            }, l, {
                onClick,
                children: d
            })}/>;
            t[8] = onClick;
            t[9] = ref;
            t[10] = d;
            t[11] = m;
        } else {
            m = t[11];
        }
        return m;
    }
    l.default = u;
}, 98);