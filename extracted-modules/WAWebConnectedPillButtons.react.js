__d("WAWebConnectedPillButtons.react", [
    "WAWebFlex.react",
    "WAWebUnstyledButton.react",
    "WDSIconIcCheck.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        marginInline6: {
            marginInlineStart: "xdzw4kq",
            marginInlineEnd: "xbelrpt",
            marginLeft: null,
            marginRight: null,
            $$css: true
        },
        marginInlineEnd7: {
            marginInlineEnd: "xcknrev",
            $$css: true
        }
    };
    const c = {
        isSelected: {
            color: "xk4n5i7",
            $$css: true
        },
        singlePill: {
            minWidth: "xm5golx",
            height: "x1vqgdyp",
            borderTopColor: "xx42vgk",
            borderInlineEndColor: "xbogo7e",
            borderBottomColor: "x120ee7l",
            borderInlineStartColor: "x1vb5itz",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            fontSize: "x1f6kntn",
            whiteSpace: "xuxw1ft",
            $$css: true
        },
        isSelectedBackground: {
            backgroundColor: "x1abdmlv",
            $$css: true
        },
        middle: {
            marginInlineEnd: "xjn30re",
            $$css: true
        },
        first: {
            borderStartStartRadius: "x12ol6y4",
            borderStartEndRadius: "x1ga7v0g",
            borderEndEndRadius: "x16uus16",
            borderEndStartRadius: "x709u02",
            $$css: true
        },
        last: {
            borderStartStartRadius: "x15mokao",
            borderStartEndRadius: "x180vkcf",
            borderEndEndRadius: "x1khw62d",
            borderEndStartRadius: "xbiv7yw",
            $$css: true
        }
    };
    const d = 18;
    function M7Component(e) {
        const t = o("react-compiler-runtime").c(18);
        const { isSelected, onClick, testid, title, xstyle } = e;
        const p = isSelected && c.isSelectedBackground;
        let _;
        if (t[0] !== p || t[1] !== xstyle) {
            _ = [
                c.singlePill,
                xstyle,
                p
            ];
            t[0] = p;
            t[1] = xstyle;
            t[2] = _;
        } else {
            _ = t[2];
        }
        let f;
        if (t[3] !== isSelected) {
            f = isSelected && s.jsx(r("WDSIconIcCheck.react"), {
                width: d,
                height: d,
                testid: "checkmark",
                xstyle: [
                    u.marginInlineEnd7,
                    c.isSelected
                ]
            });
            t[3] = isSelected;
            t[4] = f;
        } else {
            f = t[4];
        }
        let g;
        if (t[5] !== isSelected) {
            g = ({
                0: {},
                1: {
                    className: "xk4n5i7"
                }
            })[!!isSelected << 0];
            t[5] = isSelected;
            t[6] = g;
        } else {
            g = t[6];
        }
        let h;
        if (t[7] !== g || t[8] !== title) {
            h = <span {...babelHelpers.extends({}, g, {
                children: title
            })}/>;
            t[7] = g;
            t[8] = title;
            t[9] = h;
        } else {
            h = t[9];
        }
        let y;
        if (t[10] !== f || t[11] !== h) {
            const Component = o("WAWebFlex.react").FlexRow;
            y = <Component align="center" justify="center" xstyle={u.marginInline6}>{f}{h}</Component>;
            t[10] = f;
            t[11] = h;
            t[12] = y;
        } else {
            y = t[12];
        }
        let C;
        if (t[13] !== onClick || t[14] !== _ || t[15] !== y || t[16] !== testid) {
            const Component = r("WAWebUnstyledButton.react");
            C = <Component xstyle={_} testid={testid} onClick={onClick}>{y}</Component>;
            t[13] = onClick;
            t[14] = _;
            t[15] = y;
            t[16] = testid;
            t[17] = C;
        } else {
            C = t[17];
        }
        return C;
    }
    function p(e) {
        const t = o("react-compiler-runtime").c(11);
        const { currentlySelected, onChange, pills } = e;
        if (pills.length < 2) {
            let i;
            if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                i = <></>;
                t[0] = i;
            } else {
                i = t[0];
            }
            return i;
        }
        let l;
        if (t[1] !== currentlySelected || t[2] !== onChange || t[3] !== pills) {
            let u;
            if (t[5] !== currentlySelected || t[6] !== onChange || t[7] !== pills.length) {
                u = function(t, o) {
                    return <M7Component key={`connected-pill-button-${t.id.toString()}`} onClick={function() {
                        return onChange(t.id);
                    }} isSelected={t.id === currentlySelected} title={t.title} testid={`pill-button-${t.id}`} xstyle={[
                        o === 0 && c.first,
                        o !== pills.length - 1 && c.middle,
                        o === pills.length - 1 && c.last
                    ]}/>;
                };
                t[5] = currentlySelected;
                t[6] = onChange;
                t[7] = pills.length;
                t[8] = u;
            } else {
                u = t[8];
            }
            l = pills.map(u);
            t[1] = currentlySelected;
            t[2] = onChange;
            t[3] = pills;
            t[4] = l;
        } else {
            l = t[4];
        }
        let d;
        if (t[9] !== l) {
            const Component = o("WAWebFlex.react").FlexRow;
            d = <Component>{l}</Component>;
            t[9] = l;
            t[10] = d;
        } else {
            d = t[10];
        }
        return d;
    }
    l.default = p;
}, 98);