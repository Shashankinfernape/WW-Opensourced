__d("WAWebOpenBotGroupOpenAddedModal.react", [
    "fbt",
    "WAWebBox.react",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebText.react",
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
        },
        sectionTitle: {
            width: "xdzyupr",
            lineHeight: "x1o2sk6j",
            $$css: true
        }
    };
    function d() {
        const e = o("react-compiler-runtime").c(15);
        const t = m;
        const n = r("useWAWebFocusOnMount")();
        let a;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = s._("A group member added Meta AI to this chat");
            e[0] = a;
        } else {
            a = e[0];
        }
        const i = a;
        let l;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            l = s._("Learn more");
            e[1] = l;
        } else {
            l = e[1];
        }
        let d;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            d = s._("Close");
            e[2] = d;
        } else {
            d = e[2];
        }
        let p;
        if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
            p = [
                o("WDSMargins.stylex").wdsMargins.marginVerAuto,
                o("WDSPaddings.stylex").wdsPaddings.paddingBottom16
            ];
            e[3] = p;
        } else {
            p = e[3];
        }
        let _;
        if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebText.react").WAWebTextLarge;
            const Component_1 = r("WAWebBox.react");
            _ = <Component_1 xstyle={[
                c.headerText,
                o("WDSMargins.stylex").wdsMargins.marginHor8,
                o("WDSMargins.stylex").wdsMargins.marginTop16,
                o("WDSMargins.stylex").wdsMargins.marginBottom8
            ]}><Component weight="bold">{i}</Component></Component_1>;
            e[4] = _;
        } else {
            _ = e[4];
        }
        let f;
        if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
            f = [
                o("WDSMargins.stylex").wdsMargins.marginHor8,
                o("WDSMargins.stylex").wdsMargins.marginVer16
            ];
            e[5] = f;
        } else {
            f = e[5];
        }
        let g;
        if (e[6] === Symbol.for("react.memo_cache_sentinel")) {
            g = [
                o("WDSPaddings.stylex").wdsPaddings.paddingHor8,
                c.sectionTitle
            ];
            e[6] = g;
        } else {
            g = e[6];
        }
        let h;
        if (e[7] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebText.react").WAWebTextTitle;
            h = <Component>{s._("Meta AI is a member")}</Component>;
            e[7] = h;
        } else {
            h = e[7];
        }
        let y;
        if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebText.react").WAWebTextMuted;
            const Component_1 = o("WAWebFlex.react").FlexItem;
            const Component_2 = o("WAWebFlex.react").FlexRow;
            y = <Component_2 xstyle={f}><Component_1 xstyle={g}>{h}<Component>{s._("Meta AI can read and respond to new messages in this chat, and Meta can access these messages.")}</Component></Component_1></Component_2>;
            e[8] = y;
        } else {
            y = e[8];
        }
        let C;
        if (e[9] === Symbol.for("react.memo_cache_sentinel")) {
            C = [
                o("WDSMargins.stylex").wdsMargins.marginHor8,
                o("WDSMargins.stylex").wdsMargins.marginVer16
            ];
            e[9] = C;
        } else {
            C = e[9];
        }
        let b;
        if (e[10] === Symbol.for("react.memo_cache_sentinel")) {
            b = [
                o("WDSPaddings.stylex").wdsPaddings.paddingHor8,
                c.sectionTitle
            ];
            e[10] = b;
        } else {
            b = e[10];
        }
        let v;
        if (e[11] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebText.react").WAWebTextTitle;
            v = <Component>{s._("Group admins are in control")}</Component>;
            e[11] = v;
        } else {
            v = e[11];
        }
        let S;
        if (e[12] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebText.react").WAWebTextMuted;
            const Component_1 = o("WAWebFlex.react").FlexItem;
            const Component_2 = o("WAWebFlex.react").FlexRow;
            const Component_3 = o("WAWebFlex.react").FlexColumn;
            S = <Component_3 align="center" xstyle={p}>{_}{y}<Component_2 xstyle={C}><Component_1 xstyle={b}>{v}<Component>{s._("Admins can remove Meta AI from the group at any time.")}</Component></Component_1></Component_2></Component_3>;
            e[12] = S;
        } else {
            S = e[12];
        }
        let R;
        if (e[13] !== n) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            R = <Component okText={l} onOK={t} cancelText={d} onCancel={o("WAWebModalManager").closeModalManager} type={o("WAWebModal.react").ModalTheme.Promote} ref={n}>{S}</Component>;
            e[13] = n;
            e[14] = R;
        } else {
            R = e[14];
        }
        return R;
    }
    function m() {
        o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getOpenGroupLearnMoreUrl());
        o("WAWebModalManager").ModalManager.close();
    }
    l.default = d;
}, 226);