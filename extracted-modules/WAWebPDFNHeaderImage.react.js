__d("WAWebPDFNHeaderImage.react", [
    "WAWebPDFNSanitizedSvg.react",
    "WAWebPDFNUtils",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        paddingAuto: {
            paddingTop: null,
            paddingInlineEnd: null,
            paddingBottom: null,
            paddingInlineStart: null,
            $$css: true
        }
    };
    const d = {
        topIcon: {
            display: "x78zum5",
            justifyContent: "xl56j7k",
            $$css: true
        },
        pngHeader: {
            height: "x1b51vyi",
            $$css: true
        }
    };
    function m(t) {
        const n = o("react-compiler-runtime").c(17);
        const { content, xstyle } = t;
        const { icon, iconDescription, iconSvg } = content;
        const _ = o("WAWebPDFNUtils").usePDFNThemedIcon(iconSvg);
        if (icon?.type === "lottie") {
            return null;
        }
        let f;
        let g;
        let iconSvg_1;
        let y;
        let C;
        if (n[0] !== iconDescription || n[1] !== iconSvg || n[2] !== _ || n[3] !== xstyle) {
            g = p(_);
            const b = [
                d.topIcon,
                c.paddingAuto,
                g && d.pngHeader,
                xstyle
            ];
            f = r("WAWebPDFNSanitizedSvg.react");
            iconSvg_1 = iconSvg;
            y = iconDescription;
            C = (e || (e = r("stylex")))(b);
            n[0] = iconDescription;
            n[1] = iconSvg;
            n[2] = _;
            n[3] = xstyle;
            n[4] = f;
            n[5] = g;
            n[6] = iconSvg_1;
            n[7] = y;
            n[8] = C;
        } else {
            f = n[4];
            g = n[5];
            iconSvg_1 = n[6];
            y = n[7];
            C = n[8];
        }
        let v;
        if (n[9] !== f || n[10] !== iconSvg_1 || n[11] !== y || n[12] !== C) {
            v = u.jsx(f, {
                iconSvg: iconSvg_1,
                ariaLabel: y,
                classNames: C
            });
            n[9] = f;
            n[10] = iconSvg_1;
            n[11] = y;
            n[12] = C;
            n[13] = v;
        } else {
            v = n[13];
        }
        const S = v;
        if (g) {
            let R;
            if (n[14] === Symbol.for("react.memo_cache_sentinel")) {
                R = {
                    className: "x78zum5 xl56j7k"
                };
                n[14] = R;
            } else {
                R = n[14];
            }
            let L;
            if (n[15] !== S) {
                L = <div {...babelHelpers.extends({}, R, {
                    children: S
                })}/>;
                n[15] = S;
                n[16] = L;
            } else {
                L = n[16];
            }
            return L;
        }
        return S;
    }
    var p = (t)=>{
        if (t == null) {
            return false;
        }
        return t.startsWith("data:image/png");
    };
    l.default = m;
}, 98);