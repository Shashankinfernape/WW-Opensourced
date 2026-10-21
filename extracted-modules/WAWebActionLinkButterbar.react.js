__d("WAWebActionLinkButterbar.react", [
    "WAWebClickable.react",
    "WDSIconIcChevronRight.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        chevron: {
            display: "x1rg5ohu",
            verticalAlign: "x16dsc37",
            $$css: true
        }
    };
    function c(e) {
        const t = o("react-compiler-runtime").c(17);
        const { action, children, dataTab, inline, overrideDirection } = e;
        const overrideDirection_1 = overrideDirection === undefined ? null : overrideDirection;
        let m;
        if (t[0] !== action) {
            m = function() {
                action?.();
            };
            t[0] = action;
            t[1] = m;
        } else {
            m = t[1];
        }
        let p;
        if (t[2] !== inline) {
            p = ({
                0: {},
                1: {
                    className: "x1lliihq"
                }
            })[!inline << 0];
            t[2] = inline;
            t[3] = p;
        } else {
            p = t[3];
        }
        let _;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            _ = {
                className: "xt0b8zv x1277o0a"
            };
            t[4] = _;
        } else {
            _ = t[4];
        }
        let f;
        if (t[5] !== children) {
            f = <span {...babelHelpers.extends({}, _, {
                children
            })}/>;
            t[5] = children;
            t[6] = f;
        } else {
            f = t[6];
        }
        let g;
        if (t[7] !== overrideDirection_1) {
            g = s.jsx(r("WDSIconIcChevronRight.react"), {
                xstyle: u.chevron,
                directional: false,
                height: 20,
                width: 18,
                overrideDirection: overrideDirection_1
            });
            t[7] = overrideDirection_1;
            t[8] = g;
        } else {
            g = t[8];
        }
        let h;
        if (t[9] !== p || t[10] !== f || t[11] !== g) {
            h = <span {...babelHelpers.extends({}, p, {
                children: [
                    f,
                    g
                ]
            })}/>;
            t[9] = p;
            t[10] = f;
            t[11] = g;
            t[12] = h;
        } else {
            h = t[12];
        }
        let y;
        if (t[13] !== dataTab || t[14] !== m || t[15] !== h) {
            const Component = o("WAWebClickable.react").Clickable;
            y = <Component data-tab={dataTab} onClick={m}>{h}</Component>;
            t[13] = dataTab;
            t[14] = m;
            t[15] = h;
            t[16] = y;
        } else {
            y = t[16];
        }
        return y;
    }
    l.default = c;
}, 98);