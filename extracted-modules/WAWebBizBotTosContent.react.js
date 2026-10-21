__d("WAWebBizBotTosContent.react", [
    "fbt",
    "WAWebBizBotConsumerContentVariant",
    "WAWebBox.react",
    "WAWebExternalLink.react",
    "WAWebFlex.react",
    "WAWebL10N",
    "WAWebText.react",
    "WDSIconIcSyncAlt.react",
    "WDSIconWdsIcAi.react",
    "WDSIconWdsIcMetaDataDoubleChevron.react",
    "WDSIllustrationWdsPictoMetaDataDoubleChevron.react",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const c = {
        marginBlock10: {
            marginTop: "x1anpbxc",
            marginBottom: "xyorhqc",
            $$css: true
        }
    };
    const d = {
        centerText: {
            textAlign: "x2b8uid",
            $$css: true
        },
        iconUpdatedUI: {
            color: "xrfrzu4",
            $$css: true
        },
        sectionDescription: {
            color: "x14ug900",
            $$css: true
        },
        sectionIcon: {
            width: "xvy4d1p",
            $$css: true
        }
    };
    function MComponent() {
        const e = o("react-compiler-runtime").c(8);
        const t = o("WAWebBizBotConsumerContentVariant").getBizBotConsumerContentVariant();
        let n;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexItem;
            n = t === o("WAWebBizBotConsumerContentVariant").BizBotConsumerContentVariant.INDIA ? null : <Component xstyle={o("WDSMargins.stylex").wdsMargins.marginVer16}>{u.jsx(r("WDSIllustrationWdsPictoMetaDataDoubleChevron.react"), {
                testid: "wds-picto-meta-data-double-chevron"
            })}</Component>;
            e[0] = n;
        } else {
            n = e[0];
        }
        const a = n;
        let i;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebText.react").WAWebTextLarge;
            i = <Component weight="medium" textAlign="center">{s._("Get quick help from business chats that use AI from Meta")}</Component>;
            e[1] = i;
        } else {
            i = e[1];
        }
        const l = i;
        let c;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            c = {
                icon: u.jsx(r("WDSIconWdsIcAi.react"), {
                    width: 24,
                    height: 24,
                    iconXstyle: d.iconUpdatedUI
                }),
                title: s._("Businesses teach AI to give you helpful answers about their products and services.")
            };
            e[2] = c;
        } else {
            c = e[2];
        }
        const m = c;
        let S;
        if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebExternalLink.react").ExternalLink;
            const Component_1 = o("WAWebExternalLink.react").ExternalLink;
            const Component_2 = o("WAWebExternalLink.react").ExternalLink;
            const Component_3 = o("WAWebExternalLink.react").ExternalLink;
            const Component_4 = o("WAWebExternalLink.react").ExternalLink;
            const Component_5 = o("WAWebExternalLink.react").ExternalLink;
            const Component_6 = o("WAWebExternalLink.react").ExternalLink;
            S = t === o("WAWebBizBotConsumerContentVariant").BizBotConsumerContentVariant.EU_UK ? {
                icon: u.jsx(r("WDSIconWdsIcMetaDataDoubleChevron.react"), {
                    width: 24,
                    height: 24,
                    iconXstyle: d.iconUpdatedUI,
                    testid: "double-chevron-in-circle"
                }),
                title: s._("This icon means WhatsApp's parent company Meta receives these chats even when you are chatting with the business. You can stop chatting at any time. {=m2}", [
                    s._implicitParam("=m2", <Component href={_()}>{s._("Learn more")}</Component>)
                ])
            } : t === o("WAWebBizBotConsumerContentVariant").BizBotConsumerContentVariant.ROW ? {
                icon: u.jsx(r("WDSIconWdsIcMetaDataDoubleChevron.react"), {
                    width: 24,
                    height: 24,
                    iconXstyle: d.iconUpdatedUI,
                    testid: "double-chevron-in-circle"
                }),
                title: s._("This icon means WhatsApp's parent company Meta receives these chats to improve {=m2}. You can stop chatting at any time. {=m5}", [
                    s._implicitParam("=m2", <Component_1 href={h()}>{s._("AI at Meta")}</Component_1>),
                    s._implicitParam("=m5", <Component_2 href={_()}>{s._("Learn more")}</Component_2>)
                ])
            } : t === o("WAWebBizBotConsumerContentVariant").BizBotConsumerContentVariant.INDIA ? {
                icon: u.jsx(r("WDSIconIcSyncAlt.react"), {
                    width: 24,
                    height: 24,
                    iconXstyle: d.iconUpdatedUI,
                    testid: "business-data-sharing"
                }),
                title: s._("WhatsApp's parent company Meta receives these chats to improve {=m2}. You can stop chatting at any time. {=m5}", [
                    s._implicitParam("=m2", <Component_3 href={h()}>{s._("AI at Meta")}</Component_3>),
                    s._implicitParam("=m5", <Component_4 href={_()}>{s._("Learn more")}</Component_4>)
                ])
            } : t === o("WAWebBizBotConsumerContentVariant").BizBotConsumerContentVariant.BRAZIL ? {
                icon: u.jsx(r("WDSIconWdsIcMetaDataDoubleChevron.react"), {
                    width: 24,
                    height: 24,
                    iconXstyle: d.iconUpdatedUI,
                    testid: "double-chevron-in-circle"
                }),
                title: s._("This icon means WhatsApp's parent company Meta receives these chats and may use them to improve {=m2}. You can stop chatting at any time. {=m5}", [
                    s._implicitParam("=m2", <Component_5 href={h()}>{s._("AI at Meta")}</Component_5>),
                    s._implicitParam("=m5", <Component_6 href={_()}>{s._("Learn more")}</Component_6>)
                ])
            } : (()=>{
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t}`);
            })();
            e[3] = S;
        } else {
            S = e[3];
        }
        const R = S;
        let L;
        if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebExternalLink.react").ExternalLink;
            const Component_1 = o("WAWebExternalLink.react").ExternalLink;
            const Component_2 = o("WAWebExternalLink.react").ExternalLink;
            const Component_3 = o("WAWebExternalLink.react").ExternalLink;
            const Component_4 = o("WAWebExternalLink.react").ExternalLink;
            const Component_5 = o("WAWebExternalLink.react").ExternalLink;
            const Component_6 = o("WAWebExternalLink.react").ExternalLink;
            const Component_7 = o("WAWebExternalLink.react").ExternalLink;
            const Component_8 = o("WAWebExternalLink.react").ExternalLink;
            const Component_9 = o("WAWebExternalLink.react").ExternalLink;
            L = t === o("WAWebBizBotConsumerContentVariant").BizBotConsumerContentVariant.BRAZIL ? s._("Your personal messages remain end-to-end encrypted. By chatting, you agree to Meta's {=m2} and {=m5}. Learn more about your {=m7} and how to {=m11}. Your use of WhatsApp is governed by {=m14}.", [
                s._implicitParam("=m2", <Component href={g()}>{s._("AI Terms")}</Component>),
                s._implicitParam("=m5", <Component_1 href={f()}>{s._("Privacy Policy")}</Component_1>),
                s._implicitParam("=m7", <Component_2 href={C()}>{s._("rights")}</Component_2>),
                s._implicitParam("=m11", <Component_3 href={y()}>{s._("object")}</Component_3>),
                s._implicitParam("=m14", <Component_4 href={v()}>{s._("WhatsApp's Privacy Policy")}</Component_4>)
            ]) : t === o("WAWebBizBotConsumerContentVariant").BizBotConsumerContentVariant.EU_UK ? s._("Your personal messages remain end-to-end encrypted. By chatting, you agree to Meta's {=m2}. Your use is covered by Meta's {=m5}. Your use of WhatsApp is covered by WhatsApp's {business_app_privacy_policy_link}.", [
                s._param("business_app_privacy_policy_link", <Component_5 href={b()}>Privacy Policy</Component_5>),
                s._implicitParam("=m2", <Component_6 href={g()}>{s._("AI Terms")}</Component_6>),
                s._implicitParam("=m5", <Component_7 href={f()}>{s._("Privacy Policy")}</Component_7>)
            ]) : s._("Your personal messages remain end-to-end encrypted. By chatting, you agree to Meta's {=m2} and {=m5}.", [
                s._implicitParam("=m2", <Component_8 href={g()}>{s._("AI Terms")}</Component_8>),
                s._implicitParam("=m5", <Component_9 href={f()}>{s._("Privacy Policy")}</Component_9>)
            ]);
            e[4] = L;
        } else {
            L = e[4];
        }
        const E = L;
        let k;
        let I;
        if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WAWebBox.react");
            k = <Component flex direction="vertical" rowGap={8} xstyle={[
                o("WDSMargins.stylex").wdsMargins.marginTop16,
                o("WDSMargins.stylex").wdsMargins.marginBottom8
            ]}>{l}</Component>;
            I = [
                m,
                R
            ].filter(Boolean).map(PComponent);
            e[5] = k;
            e[6] = I;
        } else {
            k = e[5];
            I = e[6];
        }
        let T;
        if (e[7] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebText.react").WAWebTextMuted;
            const Component_1 = r("WAWebBox.react");
            const Component_2 = o("WAWebFlex.react").FlexColumn;
            T = <Component_2 align="center" xstyle={o("WDSMargins.stylex").wdsMargins.marginVerAuto}>{a}{k}{I}<Component_1 xstyle={o("WDSMargins.stylex").wdsMargins.marginVer8}><Component xstyle={d.centerText}>{E}</Component></Component_1></Component_2>;
            e[7] = T;
        } else {
            T = e[7];
        }
        return T;
    }
    function PComponent({ icon, title }, t) {
        const Component = o("WAWebFlex.react").FlexItem;
        const Component_1 = o("WAWebFlex.react").FlexItem;
        const Component_2 = o("WAWebFlex.react").FlexRow;
        return <Component_2 key={t} columnGap={24} xstyle={[
            c.marginBlock10,
            o("WDSPaddings.stylex").wdsPaddings.paddingHor8
        ]} align="center"><Component shrink={0} xstyle={d.sectionIcon}>{icon}</Component><Component_1 xstyle={d.sectionDescription}>{title}</Component_1></Component_2>;
    }
    PComponent.displayName = `${PComponent.name} [from ${i.id}]`;
    function _() {
        return `https://faq.whatsapp.com/6485307734928964?lang=${r("WAWebL10N").getNormalizedLocale()}`;
    }
    function f() {
        return "https://www.facebook.com/privacy/policy";
    }
    function g() {
        return "https://www.facebook.com/legal/ai-terms";
    }
    function h() {
        return "https://www.facebook.com/privacy/genai/";
    }
    function y() {
        return "https://www.facebook.com/help/contact/2503286619871400";
    }
    function C() {
        return "https://www.facebook.com/privacy/genai";
    }
    function b() {
        return "https://www.whatsapp.com/legal/business-app-privacy-policy/";
    }
    function v() {
        return "https://www.whatsapp.com/legal/brazil-privacy-notice/why-and-how-we-process-data";
    }
    l.default = MComponent;
}, 226);