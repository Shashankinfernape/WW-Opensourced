__d("WAWebMessageViaAdIndicator.react", [
    "fbt",
    "WAWebAdAttributionUtils",
    "WAWebClassnames",
    "WAWebFrontendMsgGetters",
    "WAWebMessageTopIndicatorText.react",
    "WAWebMsgGetters",
    "WDSIconWdsIcChat.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = {
        icon: {
            display: "x1rg5ohu",
            color: "xhslqc4",
            $$css: true
        },
        container: {
            height: "xhvdbge",
            lineHeight: "x17fgdl5",
            $$css: true
        },
        marginVert4: {
            marginTop: "xav9cv8",
            marginBottom: "x4tpdpg",
            $$css: true
        },
        marginEnd4: {
            marginInlineEnd: "x7g7pl8",
            $$css: true
        },
        marginStart8: {
            marginInlineStart: "x150mmf0",
            $$css: true
        }
    };
    function MComponent(t) {
        const n = o("react-compiler-runtime").c(8);
        const { className, msgKey, xstyle } = t;
        let u;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            u = [
                o("WAWebFrontendMsgGetters").getShouldShowForwarded,
                o("WAWebMsgGetters").getCtwaContext
            ];
            n[0] = u;
        } else {
            u = n[0];
        }
        const m = o("useWAWebMsgValues").useMsgValues(msgKey, u);
        const p = m[0];
        const _ = m[1];
        if (!o("WAWebAdAttributionUtils").shouldShowAdAttributionFor(p, _)) {
            return null;
        }
        let f;
        if (n[1] !== className || n[2] !== xstyle) {
            f = o("WAWebClassnames").classnamesConvertMeToStylexPlease((e || (e = r("stylex")))(d.container, d.marginVert4, d.marginEnd4, d.marginStart8, xstyle), className);
            n[1] = className;
            n[2] = xstyle;
            n[3] = f;
        } else {
            f = n[3];
        }
        let g;
        if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
            g = c.jsx(r("WDSIconWdsIcChat.react"), {
                xstyle: d.icon,
                height: 16,
                width: 16
            });
            n[4] = g;
        } else {
            g = n[4];
        }
        let h;
        if (n[5] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WAWebMessageTopIndicatorText.react");
            h = <Component>{s._("Message via ad")}</Component>;
            n[5] = h;
        } else {
            h = n[5];
        }
        let y;
        if (n[6] !== f) {
            y = <div className={f}>{g}{h}</div>;
            n[6] = f;
            n[7] = y;
        } else {
            y = n[7];
        }
        return y;
    }
    l.default = MComponent;
}, 226);