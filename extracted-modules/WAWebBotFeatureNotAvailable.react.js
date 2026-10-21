__d("WAWebBotFeatureNotAvailable.react", [
    "fbt",
    "WAWebBox.react",
    "WAWebConfirmPopup.react",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebText.react",
    "WDSIllustrationWdsPictoAi.react",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "useWAWebFocusOnMount"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        headerText: {
            textAlign: "x2b8uid",
            $$css: true
        }
    };
    function d() {
        const e = o("react-compiler-runtime").c(6);
        const t = r("useWAWebFocusOnMount")();
        let n;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexItem;
            n = <Component>{u.jsx(r("WDSIllustrationWdsPictoAi.react"), {
                testid: "wds-picto-ai"
            })}</Component>;
            e[0] = n;
        } else {
            n = e[0];
        }
        const a = n;
        let i;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            i = s._("AI chats aren't available for you yet");
            e[1] = i;
        } else {
            i = e[1];
        }
        const l = i;
        let d;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            d = [
                o("WDSMargins.stylex").wdsMargins.marginVerAuto,
                o("WDSPaddings.stylex").wdsPaddings.paddingBottom16
            ];
            e[2] = d;
        } else {
            d = e[2];
        }
        let m;
        if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebText.react").WAWebTextLarge;
            const Component_1 = r("WAWebBox.react");
            const Component_2 = o("WAWebFlex.react").FlexColumn;
            m = <Component_2 align="center" xstyle={d}>{a}<Component_1 xstyle={[
                c.headerText,
                o("WDSMargins.stylex").wdsMargins.marginHor8,
                o("WDSMargins.stylex").wdsMargins.marginTop16,
                o("WDSMargins.stylex").wdsMargins.marginBottom8
            ]}><Component weight="bold">{l}</Component></Component_1></Component_2>;
            e[3] = m;
        } else {
            m = e[3];
        }
        let p;
        if (e[4] !== t) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            p = <Component onOK={o("WAWebModalManager").closeModalManager} type={o("WAWebModal.react").ModalTheme.Promote} ref={t}>{m}</Component>;
            e[4] = t;
            e[5] = p;
        } else {
            p = e[5];
        }
        return p;
    }
    l.default = d;
}, 226);