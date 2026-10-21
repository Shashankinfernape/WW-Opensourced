__d("WAWebLinkDeviceInstructionsList.react", [
    "WAWebEnvironment",
    "WAWebHybridRegGating",
    "WAWebRoundShape.react",
    "WDSMargins.stylex",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        list: {
            listStyleType: "x3yw8vx",
            lineHeight: "xgif2c7",
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            rowGap: "x1kb72lq",
            position: "x1n2onr6",
            $$css: true
        },
        listLineHeightOverride: {
            lineHeight: "x1o2sk6j",
            $$css: true
        },
        stepperContainer: {
            width: "xvy4d1p",
            height: "xxk0z11",
            flexShrink: "x2lah0s",
            boxShadow: "x1gnnqk1",
            backgroundColor: "x12peec7",
            color: "x1mqxbix",
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopColor: "xpypsur",
            borderInlineEndColor: "x1fe0zbt",
            borderBottomColor: "x249io5",
            borderInlineStartColor: "xtq6bvn",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            $$css: true
        },
        stepperContainerThemed: {
            backgroundColor: "x1280gxy",
            color: "x14ug900",
            borderTopColor: "x1pyc6se",
            borderInlineEndColor: "x1mlb2bo",
            borderBottomColor: "x16pkwpw",
            borderInlineStartColor: "xqe4bef",
            $$css: true
        }
    };
    function D2(e) {
        const t = o("react-compiler-runtime").c(10);
        const { shouldUseWDS: n, step: a } = e;
        const i = n === void 0 ? false : n;
        let l;
        if (t[0] !== i) {
            l = i || o("WAWebHybridRegGating").isHybridRegEnabled();
            t[0] = i;
            t[1] = l;
        } else {
            l = t[1];
        }
        const d = l && c.stepperContainerThemed;
        let m;
        if (t[2] !== d) {
            m = [
                c.stepperContainer,
                d
            ];
            t[2] = d;
            t[3] = m;
        } else {
            m = t[3];
        }
        let p;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            p = {
                className: "x1f6kntn x1k70j0n x2fvf9 xzueoph xdwrcjd"
            };
            t[4] = p;
        } else {
            p = t[4];
        }
        let _;
        if (t[5] !== a) {
            _ = <div {...babelHelpers.extends({}, p, {
                children: a
            })}/>;
            t[5] = a;
            t[6] = _;
        } else {
            _ = t[6];
        }
        let f;
        if (t[7] !== m || t[8] !== _) {
            const Component = r("WAWebRoundShape.react");
            f = <Component xstyle={m}>{_}</Component>;
            t[7] = m;
            t[8] = _;
            t[9] = f;
        } else {
            f = t[9];
        }
        return f;
    }
    function m(t) {
        const n = o("react-compiler-runtime").c(19);
        const { instructions: a, instructionSource: i, shouldUseWDS: l } = t;
        const s = l === void 0 ? false : l;
        let m;
        if (n[0] !== s) {
            m = s || o("WAWebHybridRegGating").isHybridRegEnabled() || r("WAWebEnvironment").isWindows;
            n[0] = s;
            n[1] = m;
        } else {
            m = n[1];
        }
        const p = m;
        let _;
        if (n[2] !== i || n[3] !== a || n[4] !== p || n[5] !== s) {
            let f;
            if (n[7] !== i || n[8] !== p || n[9] !== s) {
                f = function(t, n) {
                    return <li key={`${i}_i#${n}`} {...babelHelpers.extends({}, {
                        0: {
                            className: "x1c3i2sq x1yc453h x78zum5 x7a106z x1aj3ljl x1jxy7q1 xoegz02 x1hql6x6"
                        },
                        1: {
                            className: "x1c3i2sq x1yc453h x78zum5 x7a106z x1aj3ljl x1jxy7q1 xoegz02 x14ug900"
                        }
                    }[!!p << 0], {
                        children: [
                            <D2 shouldUseWDS={s} step={n + 1}/>,
                            <div>{t}</div>
                        ]
                    })}/>;
                };
                n[7] = i;
                n[8] = p;
                n[9] = s;
                n[10] = f;
            } else {
                f = n[10];
            }
            _ = a.map(f);
            n[2] = i;
            n[3] = a;
            n[4] = p;
            n[5] = s;
            n[6] = _;
        } else {
            _ = n[6];
        }
        const g = _;
        let h;
        if (n[11] === Symbol.for("react.memo_cache_sentinel")) {
            h = (e || (e = r("stylex"))).props(c.list, c.listLineHeightOverride, o("WDSMargins.stylex").wdsMargins.margin0);
            n[11] = h;
        } else {
            h = n[11];
        }
        let y;
        if (n[12] !== p) {
            y = ({
                0: {
                    className: "x10l6tqk x1i1rx1s x1vpr2pd x42x0ya x6s0dn4 xdj266r xsb47vp xat24cr x1gpu1cy x1vjfegm"
                },
                1: {
                    className: "x10l6tqk x1i1rx1s x1vpr2pd x6s0dn4 xdj266r xsb47vp xat24cr x1gpu1cy x1vjfegm xs7vtfe"
                }
            })[!!p << 0];
            n[12] = p;
            n[13] = y;
        } else {
            y = n[13];
        }
        let C;
        if (n[14] !== y) {
            C = <div {...babelHelpers.extends({}, y)}/>;
            n[14] = y;
            n[15] = C;
        } else {
            C = n[15];
        }
        let b;
        if (n[16] !== g || n[17] !== C) {
            b = <ol {...babelHelpers.extends({
                id: "link-device-instructions-list"
            }, h, {
                children: [
                    g,
                    C
                ]
            })}/>;
            n[16] = g;
            n[17] = C;
            n[18] = b;
        } else {
            b = n[18];
        }
        return b;
    }
    l.default = m;
}, 98);