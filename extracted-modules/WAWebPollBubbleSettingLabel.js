__d("WAWebPollBubbleSettingLabel", [
    "WAWebFlex.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = {
        container: {
            flex: "x3psx0u",
            paddingTop: "x1iorvi4",
            paddingBottom: "xjkvuk6",
            $$css: true
        }
    };
    function c(e) {
        const t = o("react-compiler-runtime").c(12);
        const { icon, isEmphasized, label, testid, trailingSeparator } = e;
        const c = isEmphasized === undefined ? false : isEmphasized;
        let d;
        if (t[0] !== c) {
            d = ({
                0: {
                    className: "x1pg5gke x1d3mw78 x1bvqhpb xaso8d8"
                },
                1: {
                    className: "x1pg5gke x1d3mw78 x30a034 xaso8d8"
                }
            })[!!c << 0];
            t[0] = c;
            t[1] = d;
        } else {
            d = t[1];
        }
        let m;
        if (t[2] !== trailingSeparator) {
            m = trailingSeparator ? <span className="x135b78x x11lfxj5">·</span> : null;
            t[2] = trailingSeparator;
            t[3] = m;
        } else {
            m = t[3];
        }
        let p;
        if (t[4] !== label || t[5] !== d || t[6] !== m) {
            p = <span {...babelHelpers.extends({}, d, {
                children: [
                    label,
                    m
                ]
            })}/>;
            t[4] = label;
            t[5] = d;
            t[6] = m;
            t[7] = p;
        } else {
            p = t[7];
        }
        let _;
        if (t[8] !== icon || t[9] !== p || t[10] !== testid) {
            const Component = o("WAWebFlex.react").FlexRow;
            _ = <Component align="center" xstyle={u.container} testid={testid}>{icon}{p}</Component>;
            t[8] = icon;
            t[9] = p;
            t[10] = testid;
            t[11] = _;
        } else {
            _ = t[11];
        }
        return _;
    }
    l.default = c;
}, 98);