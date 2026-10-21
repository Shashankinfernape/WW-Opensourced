__d("WAWebSendOrRequestPaymentMessage.react", [
    "WAWebEmojiText.react",
    "WAWebFormatConfigurationConversation",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebMediaBubble.react",
    "WAWebMessageMeta.react",
    "WAWebMessageSpacerText.react",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebMsgMentionMap",
    "WAWebMsgPhoneNumbers",
    "WDSPaddings.stylex",
    "react",
    "stylex",
    "useWAWebIsMsgTrusted",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        paddingTop7: {
            paddingTop: "xm7lytj",
            $$css: true
        },
        paddingBottom6: {
            paddingBottom: "x10b6aqq",
            $$css: true
        },
        paddingInlineStart6: {
            paddingInlineStart: "x25sj25",
            $$css: true
        }
    };
    function d(t) {
        let n;
        const t_msgKey = t.msgKey;
        const i = o("useWAWebMsgValues").useMsgValues(t_msgKey, [
            o("WAWebFrontendMsgGetters").getRtl,
            o("WAWebFrontendMsgGetters").getDir,
            (n = o("WAWebMsgGetters")).getIsGroupMsg,
            n.getIsSentByMe,
            n.getPaymentNoteMsg,
            o("WAWebFrontendMsgGetters").getText,
            n.getSender,
            n.getInitialPageSize,
            n.getMentionedJidList,
            n.getGroupMentions
        ]);
        const l = i[0];
        const s = i[1];
        const d = i[2];
        const m = i[3];
        const p = i[4];
        const _ = i[5];
        const f = i[6];
        const g = i[7];
        const h = i[8];
        const y = i[9];
        const C = r("useWAWebIsMsgTrusted")(t_msgKey);
        const b = p?.body;
        const v = !b;
        let S = null;
        let R;
        if (b != null && b !== "") {
            const L = o("WAWebFormatConfigurationConversation").Conversation({
                mentions: o("WAWebMsgMentionMap").calculateMsgMentionMap({
                    mentionedJidList: h
                }),
                groupMentions: o("WAWebMsgMentionMap").calculateMsgGroupMentionMap({
                    groupMentions: y
                }),
                phoneNumbers: _ == null ? [] : o("WAWebMsgPhoneNumbers").getPhoneNumbersFromText(_, g + 1),
                links: _ == null ? [] : o("WAWebMsgLinks").getLinksFromText(_, f, g + 1),
                trusted: C,
                fromMe: t_msgKey.fromMe
            });
            const Component = r("WAWebMessageSpacerText.react");
            S = <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props([
                c.paddingTop7,
                o("WDSPaddings.stylex").wdsPaddings.paddingEnd4,
                c.paddingBottom6,
                c.paddingInlineStart6
            ]), {
                children: <Component msgKey={t_msgKey}>{u.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: b,
                    selectable: true,
                    formatters: L,
                    dirMismatch: l !== r("WAWebL10N").isRTL(),
                    direction: s
                })}</Component>
            })}/>;
        } else {
            R = <div className="x10l6tqk x11dcrhx xrb244j">{u.jsx(o("WAWebMessageMeta.react").Meta, {
                msgKey: t_msgKey
            })}</div>;
        }
        const Component = r("WAWebMediaBubble.react");
        return <Component displayAuthor={t.displayAuthor} displayType={t.displayType} hasCaption={!!S} msgKey={t_msgKey} quotedMsg={t.quotedMsg} hideMeta={v}>{t.paymentInfo}{R}{S}</Component>;
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    l.default = d;
}, 98);