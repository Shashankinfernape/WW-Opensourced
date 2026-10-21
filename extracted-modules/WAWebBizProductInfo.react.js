__d("WAWebBizProductInfo.react", [
    "WAWebDisplayType",
    "WAWebEmojiText.react",
    "WAWebFormatConfigurationConversation",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebMsgMentionMap",
    "WAWebMsgPhoneNumbers",
    "WAWebProductCatalogProductPriceInfoText.react",
    "WAWebSpacerText.react",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "react",
    "stylex",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        paddingBlock6: {
            paddingTop: "x1yrsyyn",
            paddingBottom: "x10b6aqq",
            $$css: true
        }
    };
    const d = {
        productInfo: {
            boxSizing: "x9f619",
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            cursor: "x1ypdohk",
            borderEndStartRadius: "x11ecxm0",
            borderEndEndRadius: "xd15eu0",
            $$css: true
        },
        bubbleIn: {
            backgroundColor: "x1bu39yj",
            $$css: true
        },
        bubbleOut: {
            backgroundColor: "x1bu39yj",
            $$css: true
        },
        title: {
            fontSize: "x1f6kntn",
            $$css: true
        },
        subtitle: {
            fontSize: "x1pg5gke",
            color: "xhslqc4",
            overflowWrap: "x1mzt3pk",
            $$css: true
        }
    };
    function m(t) {
        let n;
        const { displayType, onClick, trusted } = t;
        const s = o("useWAWebMsgValues").useMsgValues(t.msgKey, [
            (n = o("WAWebMsgGetters")).getCurrencyCode,
            n.getDescription,
            n.getIsSentByMe,
            n.getPriceAmount1000,
            n.getSalePriceAmount1000,
            n.getTitle,
            o("WAWebFrontendMsgGetters").getText,
            n.getSender,
            n.getInitialPageSize,
            n.getMentionedJidList
        ]);
        const m = s[0];
        const p = s[1];
        const _ = s[2];
        const priceAmount1000 = s[3];
        const salePriceAmount1000 = s[4];
        const h = s[5];
        const y = s[6];
        const C = s[7];
        const b = s[8];
        const v = s[9];
        const S = o("WAWebDisplayType").isWideDisplay(displayType);
        const R = o("WAWebFormatConfigurationConversation").Conversation({
            mentions: o("WAWebMsgMentionMap").calculateMsgMentionMap({
                mentionedJidList: v
            }),
            phoneNumbers: y != null ? o("WAWebMsgPhoneNumbers").getPhoneNumbersFromText(y, b + 1) : undefined,
            links: y != null ? o("WAWebMsgLinks").getLinksFromText(y, C, b + 1) : undefined,
            selectable: true,
            trusted: trusted === true,
            fromMe: t.msgKey.fromMe
        });
        let L;
        if (priceAmount1000 != null && m != null) {
            L = u.jsx(r("WAWebProductCatalogProductPriceInfoText.react"), {
                product: {
                    currency: m,
                    priceAmount1000,
                    salePriceAmount1000
                },
                direction: "inherit",
                selectable: true
            });
        } else if (p != null) {
            const E = 70;
            L = u.jsx(o("WAWebEmojiText.react").EmojiText, {
                direction: "inherit",
                selectable: true,
                text: p,
                formatters: R,
                textLimit: E
            });
        }
        const Component = r("WAWebSpacerText.react");
        return <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(d.productInfo, _ && !S && d.bubbleOut, (!_ || S) && d.bubbleIn, c.paddingBlock6, o("WDSPaddings.stylex").wdsPaddings.paddingHor8), {
            onClick,
            children: [
                u.jsx(o("WAWebEmojiText.react").EmojiText, {
                    direction: "inherit",
                    selectable: true,
                    text: h,
                    formatters: R,
                    ellipsify: true,
                    xstyle: d.title
                }),
                L ? <Component msgKey={t.msgKey} xstyle={[
                    d.subtitle,
                    o("WDSMargins.stylex").wdsMargins.marginTop2
                ]}>{L}</Component> : null
            ]
        })}/>;
    }
    m.displayName = `${m.name} [from ${i.id}]`;
    l.default = m;
}, 98);