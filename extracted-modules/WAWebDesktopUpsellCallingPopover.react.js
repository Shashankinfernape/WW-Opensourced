__d("WAWebDesktopUpsellCallingPopover.react", [
    "WAWebButton.react",
    "WAWebDesktopUpsellCommonStrings",
    "WAWebFlex.react",
    "WAWebText.react",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        paddingBottom14: {
            paddingBottom: "x1g2khh7",
            $$css: true
        }
    };
    const c = {
        container: {
            minWidth: "x1h80ny7",
            $$css: true
        },
        textContainer: {
            maxWidth: "x1jkqq1h",
            $$css: true
        },
        buttonContainer: {
            height: "x5yr21d",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(14);
        const { body, onClick, title } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = [
                c.container,
                o("WDSPaddings.stylex").wdsPaddings.paddingHor20,
                u.paddingBottom14,
                o("WDSPaddings.stylex").wdsPaddings.paddingTop12
            ];
            t[0] = i;
        } else {
            i = t[0];
        }
        let l;
        if (t[1] !== title) {
            const Component = o("WAWebText.react").WAWebTextTitle;
            const Component_1 = o("WAWebFlex.react").FlexItem;
            l = <Component_1><Component>{title}</Component></Component_1>;
            t[1] = title;
            t[2] = l;
        } else {
            l = t[2];
        }
        let d;
        if (t[3] !== body) {
            const Component = o("WAWebText.react").WAWebTextMuted;
            const Component_1 = o("WAWebFlex.react").FlexItem;
            d = <Component_1 xstyle={o("WDSMargins.stylex").wdsMargins.marginTop2}><Component>{body}</Component></Component_1>;
            t[3] = body;
            t[4] = d;
        } else {
            d = t[4];
        }
        let m;
        if (t[5] !== l || t[6] !== d) {
            const Component = o("WAWebFlex.react").FlexColumn;
            m = <Component xstyle={c.textContainer}>{l}{d}</Component>;
            t[5] = l;
            t[6] = d;
            t[7] = m;
        } else {
            m = t[7];
        }
        let p;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            p = o("WAWebDesktopUpsellCommonStrings").getDesktopAppDownloadBtnLabel();
            t[8] = p;
        } else {
            p = t[8];
        }
        let _;
        if (t[9] !== onClick) {
            const Component = o("WAWebButton.react").WAWebButtonPrimary;
            const Component_1 = o("WAWebFlex.react").FlexItem;
            const Component_2 = o("WAWebFlex.react").FlexColumn;
            _ = <Component_2 xstyle={c.buttonContainer} align="center" justify="center"><Component_1 xstyle={o("WDSMargins.stylex").wdsMargins.marginStart16}><Component onClick={onClick}>{p}</Component></Component_1></Component_2>;
            t[9] = onClick;
            t[10] = _;
        } else {
            _ = t[10];
        }
        let f;
        if (t[11] !== m || t[12] !== _) {
            const Component = o("WAWebFlex.react").FlexRow;
            f = <Component xstyle={i} align="center" justify="all">{m}{_}</Component>;
            t[11] = m;
            t[12] = _;
            t[13] = f;
        } else {
            f = t[13];
        }
        return f;
    }
    l.default = d;
}, 98);