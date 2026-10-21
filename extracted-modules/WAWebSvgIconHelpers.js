__d("WAWebSvgIconHelpers", [
    "WAWebSvgComponentBase",
    "WDSSvgIconHelpers",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    const e = [
        "height",
        "iconXstyle",
        "innerStyles",
        "name",
        "viewBox",
        "width"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    function d(height, width, viewBox, r, o, a) {
        const i = height != null || width != null;
        let l = a;
        if (viewBox != null) {
            const s = viewBox.height;
            const u = s === undefined ? 0 : s;
            const c = viewBox.width;
            const d = c === undefined ? 0 : c;
            const m = viewBox.x;
            const p = m === undefined ? 0 : m;
            const _ = viewBox.y;
            const f = _ === undefined ? 0 : _;
            l = [
                p,
                f,
                d,
                u
            ].join(" ");
        }
        return {
            height: i ? height : r,
            width: i ? width : o,
            viewBox: l
        };
    }
    function m(t, n, r, o, a) {
        const { height, iconXstyle, innerStyles, name, viewBox, width } = t;
        const p = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const _ = d(height, width, viewBox, r, o, a);
        const { height: height_1, viewBox: viewBox_1, width: width_1 } = _;
        return {
            height: height_1,
            iconName: name ?? n,
            iconXstyle,
            otherProps: p,
            viewBox: viewBox_1,
            width: width_1
        };
    }
    function p(e, t, n, a, i, l) {
        const u = o("WDSSvgIconHelpers").createSvgIconChildren(l);
        function d(l) {
            const d = o("react-compiler-runtime").c(24);
            let p;
            let _;
            let f;
            let g;
            let h;
            let preserveAspectRatio;
            let C;
            let b;
            let v;
            if (d[0] !== l) {
                _ = m(l, e, t, n, a);
                p = o("WAWebSvgComponentBase").BaseSvgSpan;
                b = _.otherProps;
                v = _.iconName;
                f = _.viewBox;
                g = _.height;
                h = _.width;
                preserveAspectRatio = "xMidYMid meet";
                C = (s || (s = r("stylex")))(_.iconXstyle);
                d[0] = l;
                d[1] = p;
                d[2] = _;
                d[3] = f;
                d[4] = g;
                d[5] = h;
                d[6] = preserveAspectRatio;
                d[7] = C;
                d[8] = b;
                d[9] = v;
            } else {
                p = d[1];
                _ = d[2];
                f = d[3];
                g = d[4];
                h = d[5];
                preserveAspectRatio = d[6];
                C = d[7];
                b = d[8];
                v = d[9];
            }
            let S;
            if (d[10] !== _.iconName) {
                S = <title>{_.iconName}</title>;
                d[10] = _.iconName;
                d[11] = S;
            } else {
                S = d[11];
            }
            let R;
            if (d[12] !== f || d[13] !== g || d[14] !== h || d[15] !== preserveAspectRatio || d[16] !== C || d[17] !== S) {
                R = <svg {...babelHelpers.extends({
                    viewBox: f,
                    height: g,
                    width: h,
                    preserveAspectRatio,
                    className: C
                }, i, {
                    children: [
                        S,
                        u
                    ]
                })}/>;
                d[12] = f;
                d[13] = g;
                d[14] = h;
                d[15] = preserveAspectRatio;
                d[16] = C;
                d[17] = S;
                d[18] = R;
            } else {
                R = d[18];
            }
            let L;
            if (d[19] !== p || d[20] !== b || d[21] !== v || d[22] !== R) {
                L = c.jsx(p, babelHelpers.extends({}, b, {
                    name: v,
                    children: R
                }));
                d[19] = p;
                d[20] = b;
                d[21] = v;
                d[22] = R;
                d[23] = L;
            } else {
                L = d[23];
            }
            return L;
        }
        return d;
    }
    l.resolveSvgIcon = m;
    l.createWAWebIcon = p;
}, 98);