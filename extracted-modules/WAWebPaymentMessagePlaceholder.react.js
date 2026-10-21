__d("WAWebPaymentMessagePlaceholder.react", [
    "fbt",
    "WAWebEmojiText.react",
    "WAWebFormatConfigurationConversation",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebMessagePlaceholder.react",
    "WAWebMessageSpacerText.react",
    "WAWebMessageTextBubble.react",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebMsgMentionMap",
    "WAWebMsgPhoneNumbers",
    "WDSIconIcSchedule.react",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "react",
    "stylex",
    "useWAWebIsMsgTrusted",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = {
        marginTop5: {
            marginTop: "x1ok221b",
            $$css: true
        },
        marginBottom10: {
            marginBottom: "xyorhqc",
            $$css: true
        },
        paddingTop5: {
            paddingTop: "x123j3cw",
            $$css: true
        },
        paddingInlineEnd3: {
            paddingInlineEnd: "x1im30kd",
            $$css: true
        },
        paddingBottom10: {
            paddingBottom: "x1a8lsjc",
            $$css: true
        },
        marginBottom14: {
            marginBottom: "x1u7kmwd",
            $$css: true
        }
    };
    const m = {
        quote: {
            marginTop: "x1198e8h",
            marginInlineEnd: "xv9t0rm",
            marginBottom: "xyorhqc",
            marginInlineStart: "xw01apr",
            $$css: true
        },
        hasText: {
            borderBottomWidth: "xso031l",
            borderBottomStyle: "x1q0q8m5",
            borderBottomColor: "x120ee7l",
            $$css: true
        }
    };
    function p({ displayAuthor, msgKey, paymentInfo, placeholderText, quotedMsg }) {
        let n;
        let a;
        const f = o("useWAWebMsgValues").useMsgValues(msgKey, [
            (n = o("WAWebFrontendMsgGetters")).getRtl,
            n.getDir,
            (a = o("WAWebMsgGetters")).getPaymentNoteMsg,
            n.getText,
            a.getSender,
            a.getInitialPageSize,
            a.getMentionedJidList,
            a.getGroupMentions,
            n.getShouldShowForwarded
        ]);
        const g = f[0];
        const direction = f[1];
        const y = f[2];
        const C = f[3];
        const b = f[4];
        const v = f[5];
        const mentionedJidList = f[6];
        const groupMentions = f[7];
        const L = f[8];
        const trusted = r("useWAWebIsMsgTrusted")(msgKey);
        let k;
        const I = y?.body;
        if (I != null && I !== "") {
            const T = o("WAWebFormatConfigurationConversation").Conversation({
                mentions: o("WAWebMsgMentionMap").calculateMsgMentionMap({
                    mentionedJidList
                }),
                groupMentions: o("WAWebMsgMentionMap").calculateMsgGroupMentionMap({
                    groupMentions
                }),
                links: C == null ? [] : o("WAWebMsgLinks").getLinksFromText(C, b, v + 1),
                phoneNumbers: C == null ? [] : o("WAWebMsgPhoneNumbers").getPhoneNumbersFromText(C, v + 1),
                trusted,
                fromMe: msgKey.fromMe
            });
            const Component = r("WAWebMessageSpacerText.react");
            k = <Component msgKey={msgKey}>{c.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: I,
                selectable: true,
                formatters: T,
                dirMismatch: g !== r("WAWebL10N").isRTL(),
                direction
            })}</Component>;
        }
        let D;
        if (quotedMsg) {
            const x = (e || (e = r("stylex")))(m.quote, displayAuthor || L && d.marginTop5);
            D = <div className={x}>{quotedMsg}</div>;
        }
        let $;
        let P = s._("Payment message • Amount unavailable");
        if (placeholderText != null && placeholderText !== "") {
            $ = c.jsx(r("WDSIconIcSchedule.react"), {
                height: 24,
                width: 24
            });
            P = placeholderText;
        }
        const N = (e || (e = r("stylex")))(k ? [
            m.hasText,
            d.marginBottom10,
            d.paddingTop5,
            d.paddingInlineEnd3,
            d.paddingBottom10,
            o("WDSPaddings.stylex").wdsPaddings.paddingStart0
        ] : [
            o("WDSMargins.stylex").wdsMargins.marginTop4,
            d.marginBottom14
        ]);
        const Component = r("WAWebMessagePlaceholder.react");
        const Component_1 = r("WAWebMessageTextBubble.react");
        return <Component_1 msgKey={msgKey} displayAuthor={displayAuthor}>{D}{paymentInfo}<div className={N}><Component hasCaption={!!k} Icon={$} msgKey={msgKey}>{P}</Component></div>{k}</Component_1>;
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    l.default = p;
}, 226);