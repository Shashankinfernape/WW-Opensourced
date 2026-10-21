__d("WAWebMessageForwardedIndicator.react", [
    "WAWebClassnames",
    "WAWebForwardUtils",
    "WAWebForwardedAiBotMessageInfoHeader.react",
    "WAWebForwardedNewsletterMessageInfoHeader.react",
    "WAWebFrontendMsgGetters",
    "WAWebMessageForwardedIndicatorSearchTheWeb.react",
    "WAWebMessageTopIndicatorText.react",
    "WAWebMsgGetters",
    "WDSIconIcFastForward.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        icon: {
            display: "x1rg5ohu",
            verticalAlign: "x16dsc37",
            color: "xhslqc4",
            $$css: true
        },
        container: {
            marginInlineStart: "xe9ewy2",
            $$css: true
        }
    };
    function d(t) {
        const n = o("react-compiler-runtime").c(19);
        const { className, msgKey, xstyle } = t;
        let s;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            s = [
                o("WAWebMsgGetters").getIsFrequentlyForwarded,
                o("WAWebFrontendMsgGetters").getShouldShowForwarded
            ];
            n[0] = s;
        } else {
            s = n[0];
        }
        const d = o("useWAWebMsgValues").useMsgValues(msgKey, s);
        const m = d[0];
        const p = d[1];
        if (!p) {
            return null;
        }
        let _;
        if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
            _ = u.jsx(r("WDSIconIcFastForward.react"), {
                directional: true,
                width: 16,
                height: 16,
                xstyle: c.icon,
                testid: "forward-refreshed"
            });
            n[1] = _;
        } else {
            _ = n[1];
        }
        const f = _;
        let g;
        if (n[2] !== className || n[3] !== xstyle) {
            g = o("WAWebClassnames").classnamesConvertMeToStylexPlease((e || (e = r("stylex")))(c.container, xstyle), className);
            n[2] = className;
            n[3] = xstyle;
            n[4] = g;
        } else {
            g = n[4];
        }
        let h;
        if (n[5] !== m) {
            h = o("WAWebForwardUtils").getForwardedIndicatorText(m);
            n[5] = m;
            n[6] = h;
        } else {
            h = n[6];
        }
        let y;
        if (n[7] !== h) {
            const Component = r("WAWebMessageTopIndicatorText.react");
            y = <Component>{h}</Component>;
            n[7] = h;
            n[8] = y;
        } else {
            y = n[8];
        }
        let C;
        let b;
        let v;
        if (n[9] !== msgKey) {
            C = u.jsx(r("WAWebMessageForwardedIndicatorSearchTheWeb.react"), {
                msgKey
            });
            b = u.jsx(r("WAWebForwardedNewsletterMessageInfoHeader.react"), {
                msgKey
            });
            v = u.jsx(r("WAWebForwardedAiBotMessageInfoHeader.react"), {
                msgKey
            });
            n[9] = msgKey;
            n[10] = C;
            n[11] = b;
            n[12] = v;
        } else {
            C = n[10];
            b = n[11];
            v = n[12];
        }
        let S;
        if (n[13] !== g || n[14] !== y || n[15] !== C || n[16] !== b || n[17] !== v) {
            S = <div data-testid="forwarded-header" className={g}>{f}{y}{C}{b}{v}</div>;
            n[13] = g;
            n[14] = y;
            n[15] = C;
            n[16] = b;
            n[17] = v;
            n[18] = S;
        } else {
            S = n[18];
        }
        return S;
    }
    l.default = d;
}, 98);