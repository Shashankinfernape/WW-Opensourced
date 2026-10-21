__d("WAWebBotLearnMore.react", [
    "fbt",
    "WAWebBotBaseGating",
    "WAWebBox.react",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebText.react",
    "WDSIconIcLockFilled.react",
    "WDSIconWdsIcAiFilled.react",
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
        },
        icon: {
            color: "xhslqc4",
            $$css: true
        },
        sectionIcon: {
            width: "xvy4d1p",
            $$css: true
        },
        sectionTitle: {
            width: "xdzyupr",
            lineHeight: "x1o2sk6j",
            $$css: true
        }
    };
    function d() {
        return {
            icon: u.jsx(r("WDSIconIcLockFilled.react"), {
                width: 24,
                height: 24,
                iconXstyle: c.icon,
                testid: "lock"
            }),
            title: s._("Your conversation stays private"),
            subtitle: o("WAWebBotBaseGating").isBotEnabled() ? s._("When you share with or mention \u0040Meta AI, the AI generates a response. Meta can't read or listen to the other messages and calls in this chat, because they are end-to-end encrypted.") : s._("When you mention \u0040Meta AI, the AI generates a response. Meta can't read or listen to the other messages and calls in this chat, because they are end-to-end encrypted.")
        };
    }
    function m() {
        return {
            icon: u.jsx(r("WDSIconIcLockFilled.react"), {
                width: 24,
                height: 24,
                iconXstyle: c.icon,
                testid: "lock"
            }),
            title: s._("Improving AI quality"),
            subtitle: s._("Meta may use your AI messages to improve AI quality. But your personal messages are never sent to Meta. They can't be read and remain end-to-end encrypted.")
        };
    }
    function p() {
        return {
            icon: u.jsx(r("WDSIconWdsIcAiFilled.react"), {
                width: 24,
                height: 24,
                iconXstyle: c.icon
            }),
            title: s._("What is generative AI?"),
            subtitle: s._("Generative AI is a computer model that has learnt data patterns, so people can use it to create something new like text or images.")
        };
    }
    function Component(e) {
        const t = o("react-compiler-runtime").c(16);
        const e_fromInvoke = e.fromInvoke;
        const a = g;
        const i = r("useWAWebFocusOnMount")();
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexItem;
            l = <Component>{u.jsx(r("WDSIllustrationWdsPictoAi.react"), {
                testid: "wds-picto-ai"
            })}</Component>;
            t[0] = l;
        } else {
            l = t[0];
        }
        const _ = l;
        let h;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            h = s._("About AI messages");
            t[1] = h;
        } else {
            h = t[1];
        }
        const y = h;
        let C;
        if (t[2] !== e_fromInvoke) {
            C = e_fromInvoke ? d() : m();
            t[2] = e_fromInvoke;
            t[3] = C;
        } else {
            C = t[3];
        }
        let b;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            b = p();
            t[4] = b;
        } else {
            b = t[4];
        }
        let v;
        if (t[5] !== C) {
            v = [
                C,
                b
            ];
            t[5] = C;
            t[6] = v;
        } else {
            v = t[6];
        }
        const S = v;
        let R;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            R = s._("Learn more");
            t[7] = R;
        } else {
            R = t[7];
        }
        let L;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            L = s._("Close");
            t[8] = L;
        } else {
            L = t[8];
        }
        let E;
        if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
            E = [
                o("WDSMargins.stylex").wdsMargins.marginVerAuto,
                o("WDSPaddings.stylex").wdsPaddings.paddingBottom16
            ];
            t[9] = E;
        } else {
            E = t[9];
        }
        let k;
        if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebText.react").WAWebTextLarge;
            const Component_1 = r("WAWebBox.react");
            k = <Component_1 xstyle={[
                c.headerText,
                o("WDSMargins.stylex").wdsMargins.marginHor8,
                o("WDSMargins.stylex").wdsMargins.marginTop16,
                o("WDSMargins.stylex").wdsMargins.marginBottom8
            ]}><Component weight="bold">{y}</Component></Component_1>;
            t[10] = k;
        } else {
            k = t[10];
        }
        let I;
        if (t[11] !== S) {
            const Component = o("WAWebFlex.react").FlexColumn;
            I = <Component align="center" xstyle={E}>{_}{k}{S.map(FComponent)}</Component>;
            t[11] = S;
            t[12] = I;
        } else {
            I = t[12];
        }
        let T;
        if (t[13] !== i || t[14] !== I) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            T = <Component okText={R} onOK={a} cancelText={L} onCancel={o("WAWebModalManager").closeModalManager} type={o("WAWebModal.react").ModalTheme.Promote} ref={i}>{I}</Component>;
            t[13] = i;
            t[14] = I;
            t[15] = T;
        } else {
            T = t[15];
        }
        return T;
    }
    function FComponent({ icon, subtitle, title }, t) {
        const Component = o("WAWebFlex.react").FlexItem;
        const Component_1 = o("WAWebText.react").WAWebTextTitle;
        const Component_2 = o("WAWebText.react").WAWebTextMuted;
        const Component_3 = o("WAWebFlex.react").FlexItem;
        const Component_4 = o("WAWebFlex.react").FlexRow;
        return <Component_4 key={t} xstyle={[
            o("WDSMargins.stylex").wdsMargins.marginHor8,
            o("WDSMargins.stylex").wdsMargins.marginVer16
        ]}><Component xstyle={[
            o("WDSPaddings.stylex").wdsPaddings.paddingHor8,
            c.sectionIcon
        ]}>{icon}</Component><Component_3 xstyle={[
            o("WDSPaddings.stylex").wdsPaddings.paddingHor8,
            c.sectionTitle
        ]}><Component_1>{title}</Component_1><Component_2>{subtitle}</Component_2></Component_3></Component_4>;
    }
    FComponent.displayName = `${FComponent.name} [from ${i.id}]`;
    function g() {
        o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getBotLearnMoreUrl());
        o("WAWebModalManager").ModalManager.close();
    }
    l.default = Component;
}, 226);