__d("WAWebProgressRing.react", [
    "WAWebL10N",
    "WAWebSpinner.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(19);
        const { color, labelTestid, percentage, size, stroke, testid, textType } = e;
        const m = color === undefined ? "progress" : color;
        const p = labelTestid === undefined ? "progress_ring_label" : labelTestid;
        const _ = stroke === undefined ? 3 : stroke;
        const f = testid === undefined ? "progress_ring" : testid;
        let g;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            g = {
                className: "x6s0dn4 x3nfvp2 xl56j7k x1n2onr6"
            };
            t[0] = g;
        } else {
            g = t[0];
        }
        let h;
        if (t[1] !== m || t[2] !== percentage || t[3] !== size || t[4] !== _) {
            h = s.jsx(o("WAWebSpinner.react").Spinner, {
                value: percentage,
                max: 100,
                size,
                stroke: _,
                color: m
            });
            t[1] = m;
            t[2] = percentage;
            t[3] = size;
            t[4] = _;
            t[5] = h;
        } else {
            h = t[5];
        }
        let y;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            y = {
                className: "x6s0dn4 x1ey2m1c x78zum5 x1o0tod xtijo5x xl56j7k x10l6tqk x13vifvy"
            };
            t[6] = y;
        } else {
            y = t[6];
        }
        let C;
        if (t[7] !== percentage) {
            C = r("WAWebL10N").n(percentage / 100, undefined, {
                style: "percent",
                maximumFractionDigits: 0
            });
            t[7] = percentage;
            t[8] = C;
        } else {
            C = t[8];
        }
        let b;
        if (t[9] !== C || t[10] !== textType) {
            const Component = r("WDSText.react");
            b = <Component type={textType} colorName="contentDefault">{C}</Component>;
            t[9] = C;
            t[10] = textType;
            t[11] = b;
        } else {
            b = t[11];
        }
        let v;
        if (t[12] !== p || t[13] !== b) {
            v = <div {...babelHelpers.extends({
                "data-testid": p
            }, y, {
                children: b
            })}/>;
            t[12] = p;
            t[13] = b;
            t[14] = v;
        } else {
            v = t[14];
        }
        let S;
        if (t[15] !== v || t[16] !== h || t[17] !== f) {
            S = <div {...babelHelpers.extends({
                "data-testid": f
            }, g, {
                children: [
                    h,
                    v
                ]
            })}/>;
            t[15] = v;
            t[16] = h;
            t[17] = f;
            t[18] = S;
        } else {
            S = t[18];
        }
        return S;
    }
    l.default = u;
}, 98);