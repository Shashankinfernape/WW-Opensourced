__d("WAWebBotTaskCard.react", [
    "WAWebClickable.react",
    "WDSIconIcCalendarMonth.react",
    "WDSText.react",
    "isStringNotNullAndNotWhitespaceOnly",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "onPress"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = 40;
    const d = 20;
    const m = {
        card: {
            alignItems: "x6s0dn4",
            backgroundColor: "x4wrhlh",
            borderStartStartRadius: "xyi3aci",
            borderStartEndRadius: "xwf5gio",
            borderEndEndRadius: "x1p453bz",
            borderEndStartRadius: "x1suzm8a",
            display: "x78zum5",
            flexDirection: "x1q0g3np",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            $$css: true
        },
        pressable: {
            cursor: "x1ypdohk",
            ":hover_backgroundColor": "x1nsvvxn",
            $$css: true
        }
    };
    function PComponent(t) {
        const n = o("react-compiler-runtime").c(20);
        let a;
        let i;
        if (n[0] !== t) {
            a = t.onPress;
            i = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        const l = i;
        const { subtitle, title } = l;
        let p;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            p = {
                className: "x78zum5 x2lah0s x12xbjc7 x1uc92m x12w63v0 x16ovd2e"
            };
            n[3] = p;
        } else {
            p = n[3];
        }
        let _;
        let f;
        if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
            _ = <div {...babelHelpers.extends({}, p, {
                "data-testid": "bot_ur_task_card_icon",
                children: <div className="x6s0dn4 x16w0wmm xt8t1vi x1xc408v x129tdwq x15urzxu x14ug900 x78zum5 x1vqgdyp xl56j7k x100vrsf">{u.jsx(r("WDSIconIcCalendarMonth.react"), {
                    height: d,
                    width: d
                })}</div>
            })}/>;
            f = {
                className: "x78zum5 xdt5ytf x1iyjqo2 xeuugli x16ovd2e x1nzty39 x12xbjc7 x12w63v0"
            };
            n[4] = _;
            n[5] = f;
        } else {
            _ = n[4];
            f = n[5];
        }
        let g;
        if (n[6] !== title) {
            const Component = r("WDSText.react");
            g = r("isStringNotNullAndNotWhitespaceOnly")(title) && <Component type="Body2Emphasized" colorName="contentDefault" maxLines={1}>{title}</Component>;
            n[6] = title;
            n[7] = g;
        } else {
            g = n[7];
        }
        let h;
        if (n[8] !== subtitle) {
            const Component = r("WDSText.react");
            h = r("isStringNotNullAndNotWhitespaceOnly")(subtitle) && <Component type="Body3" colorName="contentDefault" maxLines={1}>{subtitle}</Component>;
            n[8] = subtitle;
            n[9] = h;
        } else {
            h = n[9];
        }
        let y;
        if (n[10] !== g || n[11] !== h) {
            y = <>{_}<div {...babelHelpers.extends({}, f, {
                "data-testid": "bot_ur_task_card_text",
                children: [
                    g,
                    h
                ]
            })}/></>;
            n[10] = g;
            n[11] = h;
            n[12] = y;
        } else {
            y = n[12];
        }
        const C = y;
        if (a == null) {
            let b;
            if (n[13] === Symbol.for("react.memo_cache_sentinel")) {
                b = {
                    className: "x6s0dn4 x4wrhlh xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 x1q0g3np x6ikm8r x10wlt62"
                };
                n[13] = b;
            } else {
                b = n[13];
            }
            let v;
            if (n[14] !== C) {
                v = <div {...babelHelpers.extends({}, b, {
                    "data-testid": "bot_ur_task_card",
                    children: C
                })}/>;
                n[14] = C;
                n[15] = v;
            } else {
                v = n[15];
            }
            return v;
        }
        let S;
        if (n[16] === Symbol.for("react.memo_cache_sentinel")) {
            S = [
                m.card,
                m.pressable
            ];
            n[16] = S;
        } else {
            S = n[16];
        }
        let R;
        if (n[17] !== C || n[18] !== a) {
            const Component = o("WAWebClickable.react").Clickable;
            R = <Component dataTestId="bot_ur_task_card" onClick={a} preventDefaultKeyboard xstyle={S}>{C}</Component>;
            n[17] = C;
            n[18] = a;
            n[19] = R;
        } else {
            R = n[19];
        }
        return R;
    }
    l.default = PComponent;
}, 98);