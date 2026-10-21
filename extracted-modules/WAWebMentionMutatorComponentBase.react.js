__d("WAWebMentionMutatorComponentBase.react", [
    "WABidi",
    "WAWebABProps",
    "WAWebCopyPasteSelectable.react",
    "WAWebDisplayType",
    "WAWebEmojiFormatMutator",
    "WAWebFormat",
    "WAWebGroupMetadataContext",
    "WAWebJsxSerializer.react",
    "WAWebMentionDisplayUtils",
    "WAWebMentionMessageContext",
    "WAWebMentionPill.react",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWrapperDisplayTypeContext",
    "react",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const s_use = s.use;
    const d = {
        gallery: {
            color: "x1heor9g",
            $$css: true
        },
        matchedMention: {
            cursor: "x1ypdohk",
            color: "x1ph7ams",
            $$css: true
        },
        lastMessage: {
            fontWeight: "xk50ysn",
            $$css: true
        },
        matchedMentionRefresh: {
            color: "xo1mcw5",
            fontWeight: "x1xlr1w8",
            textDecoration: "x1hl2dhg",
            ":hover_textDecoration": "xt0b8zv",
            ":focus-visible_textDecoration": "xbvygy2",
            ":focus-visible_color": "x17f7hit",
            ":focus-visible_backgroundColor": "xp30eni",
            ":focus-visible_textUnderlineOffset": "xhmieyt",
            $$css: true
        }
    };
    function m(t) {
        const l = s_use(r("WAWebWrapperDisplayTypeContext"));
        const s = s_use(r("WAWebGroupMetadataContext"));
        const m = s_use(r("WAWebMentionMessageContext"));
        const { isOutgoing, isRead } = m;
        const { ariaLabel, jid, lastMessage, onClick, selectable, text, theme } = t;
        const S = text ?? "";
        const R = S.startsWith("@") ? S.slice(1) : S;
        const L = o("WABidi").bidiDir(R) || "auto";
        const isQuoted = theme?.quoted ?? false;
        const k = r("WAWebFormat")(R, [
            [
                [
                    r("WAWebEmojiFormatMutator"),
                    {
                        selectable
                    }
                ]
            ]
        ], r("WAWebJsxSerializer.react"));
        const I = onClick && !isQuoted;
        const T = l === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY;
        const D = s?.participants?.length ?? 0;
        const x = o("WAWebABProps").getABPropConfigValue("wa_web_highlight_me_mention");
        const isMe = jid != null && (r("WAWebWid").isUser(jid) && o("WAWebUserPrefsMeUser").isSerializedWidMe(jid) || jid === "@all") && x && D > o("WAWebABProps").getABPropConfigValue("wa_web_highlight_me_mention_groupsize_threshold");
        const P = [
            I === true && d.matchedMention,
            lastMessage === true && d.lastMessage,
            I === true && lastMessage !== true && d.matchedMentionRefresh,
            T && d.gallery
        ];
        const Component = r("WAWebMentionPill.react");
        const Component_1 = o("WAWebCopyPasteSelectable.react").SelectableSpan;
        return <Component_1 dir="auto" className={(e || (e = r("stylex")))(P)} onClick={x ? undefined : onClick} plainText={o("WAWebMentionDisplayUtils").addAtPrefixForMention(R)} selectable={selectable} aria-label={ariaLabel} selectAll tabIndex={x ? -1 : undefined} appTextTemplate={`​${jid}​`}>{x ? <Component isMe={isMe} isOutgoing={isOutgoing} isQuoted={isQuoted} isRead={isRead} onClick={onClick}><span dir={L}>{k}</span></Component> : <>@<span dir={L}>{k}</span></>}</Component_1>;
    }
    m.displayName = `${m.name} [from ${i.id}]`;
    l.default = m;
}, 98);