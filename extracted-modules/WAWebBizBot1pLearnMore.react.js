__d("WAWebBizBot1pLearnMore.react", [
    "fbt",
    "WAWebBizBotLearnMoreContent.react",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "useWAWebFocusOnMount"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c() {
        const e = o("react-compiler-runtime").c(5);
        const t = r("useWAWebFocusOnMount")();
        const n = d;
        let a;
        let i;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = s._("Close");
            i = s._("Learn more");
            e[0] = a;
            e[1] = i;
        } else {
            a = e[0];
            i = e[1];
        }
        let l;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexColumn;
            l = <Component align="center" xstyle={[
                o("WDSMargins.stylex").wdsMargins.marginVerAuto,
                o("WDSPaddings.stylex").wdsPaddings.paddingBottom16
            ]}>{u.jsx(r("WAWebBizBotLearnMoreContent.react"), {})}</Component>;
            e[2] = l;
        } else {
            l = e[2];
        }
        let c;
        if (e[3] !== t) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            c = <Component cancelText={a} okText={i} onCancel={o("WAWebModalManager").closeModalManager} onOK={n} ref={t}>{l}</Component>;
            e[3] = t;
            e[4] = c;
        } else {
            c = e[4];
        }
        return c;
    }
    function d() {
        o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getBizBot1pLearnMoreUrl());
    }
    l.default = c;
}, 226);