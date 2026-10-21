__d("WAWebBizBotLearnMoreContent.react", [
    "fbt",
    "WAWebBizBotConsumerContentVariant",
    "WAWebBox.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebText.react",
    "WDSIconIcBolt.react",
    "WDSIconIcSyncAlt.react",
    "WDSIconWdsIcAiFilled.react",
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
        iconUpdatedUI: {
            color: "xrfrzu4",
            $$css: true
        },
        sectionIcon: {
            width: "xvy4d1p",
            $$css: true
        },
        sectionDescription: {
            color: "x14ug900",
            $$css: true
        }
    };
    function MComponent() {
        const e = o("react-compiler-runtime").c(6);
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
            i = function() {
                const Component = o("WAWebExternalLink.react").ExternalLink;
                const Component_1 = o("WAWebExternalLink.react").ExternalLink;
                const e = t === o("WAWebBizBotConsumerContentVariant").BizBotConsumerContentVariant.BRAZIL ? s._("WhatsApp's parent company Meta receives messages when you chat with a business that uses AI from Meta. They may be used to help {=m2} get better and safer.", [
                    s._implicitParam("=m2", <Component href={o("WAWebFaqUrl").getMetaGenAiGuideUrl()}>{s._("AI at Meta")}</Component>)
                ]) : t === o("WAWebBizBotConsumerContentVariant").BizBotConsumerContentVariant.EU_UK ? s._("WhatsApp's parent company Meta receives messages when you chat with a business that uses AI from Meta.") : s._("WhatsApp's parent company Meta receives messages when you chat with a business that uses AI from Meta. This helps {=m2} get better and safer.", [
                    s._implicitParam("=m2", <Component_1 href={o("WAWebFaqUrl").getMetaGenAiGuideUrl()}>{s._("AI at Meta")}</Component_1>)
                ]);
                const Component_2 = o("WAWebText.react").WAWebTextLarge;
                const Component_3 = o("WAWebText.react").WAWebTextTitle;
                return <><Component_2 weight="medium">{s._("About business chats that use AI from Meta")}</Component_2><Component_3 testid="biz-bot-tos-subheader">{e}</Component_3></>;
            };
            e[1] = i;
        } else {
            i = e[1];
        }
        const l = i;
        let c;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            c = {
                icon: u.jsx(r("WDSIconIcBolt.react"), {
                    width: 24,
                    height: 24,
                    iconXstyle: d.iconUpdatedUI
                }),
                title: s._("Businesses use AI to provide help 24\/7 and offer customised experiences.")
            };
            e[2] = c;
        } else {
            c = e[2];
        }
        const m = c;
        let _;
        if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
            _ = t === o("WAWebBizBotConsumerContentVariant").BizBotConsumerContentVariant.EU_UK ? {
                icon: u.jsx(r("WDSIconWdsIcMetaDataDoubleChevron.react"), {
                    width: 24,
                    height: 24,
                    iconXstyle: d.iconUpdatedUI,
                    testid: "double-chevron-in-circle"
                }),
                title: s._("This icon means WhatsApp's parent company Meta receives these chats even when you are chatting with the business. Meta may use service providers to support this experience. You can stop chatting at any time.")
            } : t === o("WAWebBizBotConsumerContentVariant").BizBotConsumerContentVariant.ROW ? {
                icon: u.jsx(r("WDSIconWdsIcMetaDataDoubleChevron.react"), {
                    width: 24,
                    height: 24,
                    iconXstyle: d.iconUpdatedUI,
                    testid: "double-chevron-in-circle"
                }),
                title: s._("This icon means Meta receives messages to improve AI quality. Meta may use service providers to support this experience. You can stop chatting at any time.")
            } : t === o("WAWebBizBotConsumerContentVariant").BizBotConsumerContentVariant.INDIA ? {
                icon: u.jsx(r("WDSIconIcSyncAlt.react"), {
                    width: 24,
                    height: 24,
                    iconXstyle: d.iconUpdatedUI,
                    testid: "business-data-sharing"
                }),
                title: s._("Meta receives messages to improve AI quality. Meta may use service providers to support this experience. You can stop chatting at any time.")
            } : t === o("WAWebBizBotConsumerContentVariant").BizBotConsumerContentVariant.BRAZIL ? {
                icon: u.jsx(r("WDSIconWdsIcMetaDataDoubleChevron.react"), {
                    width: 24,
                    height: 24,
                    iconXstyle: d.iconUpdatedUI,
                    testid: "double-chevron-in-circle"
                }),
                title: s._("This icon means Meta receives messages and may use them to improve AI quality. Meta may use service providers to support this experience. You can stop chatting at any time.")
            } : (()=>{
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t}`);
            })();
            e[3] = _;
        } else {
            _ = e[3];
        }
        const f = _;
        let g;
        if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
            g = {
                icon: u.jsx(r("WDSIconWdsIcAiFilled.react"), {
                    width: 24,
                    height: 24,
                    iconXstyle: d.iconUpdatedUI
                }),
                title: s._("Messages generated by AI from Meta are marked and may be inaccurate or inappropriate.")
            };
            e[4] = g;
        } else {
            g = e[4];
        }
        const h = g;
        let y;
        if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WAWebBox.react");
            y = <>{a}<Component flex direction="vertical" rowGap={8} xstyle={[
                o("WDSMargins.stylex").wdsMargins.marginTop16,
                o("WDSMargins.stylex").wdsMargins.marginBottom8
            ]}>{l()}</Component>{[
                m,
                f,
                h
            ].filter(Boolean).map(PComponent)}</>;
            e[5] = y;
        } else {
            y = e[5];
        }
        return y;
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
    l.default = MComponent;
}, 226);