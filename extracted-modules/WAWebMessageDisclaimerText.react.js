__d("WAWebMessageDisclaimerText.react", [
    "WAWebFlex.react",
    "WAWebMsgGetters",
    "WDSIconIcInfo.react",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        container: {
            color: "xhslqc4",
            paddingBottom: "xxbrewl",
            $$css: true
        },
        icon: {
            display: "x3nfvp2",
            alignItems: "x6s0dn4",
            $$css: true
        },
        paddingTop8: {
            paddingTop: "x16ovd2e",
            $$css: true
        }
    };
    function c(e) {
        const t = o("react-compiler-runtime").c(6);
        const e_msgKey = e.msgKey;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                o("WAWebMsgGetters").getBotMessageDisclaimerText
            ];
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = o("useWAWebMsgValues").useMsgValues(e_msgKey, a);
        const l = i[0];
        if (r("isStringNullOrEmpty")(l)) {
            return null;
        }
        let c;
        let d;
        let m;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            c = [
                u.container,
                u.paddingTop8
            ];
            d = s.jsx(r("WDSIconIcInfo.react"), {
                width: 16,
                height: 16,
                xstyle: u.icon
            });
            m = {
                className: "x1n2onr6 x1f6kntn x1k4tb9n"
            };
            t[1] = c;
            t[2] = d;
            t[3] = m;
        } else {
            c = t[1];
            d = t[2];
            m = t[3];
        }
        let p;
        if (t[4] !== l) {
            const Component = o("WAWebFlex.react").FlexRow;
            p = <Component align="center" columnGap={8} xstyle={c}>{d}<span {...babelHelpers.extends({}, m, {
                children: l
            })}/></Component>;
            t[4] = l;
            t[5] = p;
        } else {
            p = t[5];
        }
        return p;
    }
    l.default = c;
}, 98);