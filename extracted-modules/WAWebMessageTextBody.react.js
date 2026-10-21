__d("WAWebMessageTextBody.react", [
    "WAWebBizCtwaAGMUtils",
    "WAWebDisplayType",
    "WAWebEmoji",
    "WAWebEmojiText.react",
    "WAWebExpandableText.react",
    "WAWebFormatConfigurationConversation",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebMessageMultiEmoji.react",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebMsgMentionMap",
    "WAWebMsgPhoneNumbers",
    "WAWebQbmMessageLevelActionEvent",
    "WAWebSpoilerRevealLogger",
    "WAWebWamEnumMessageActionEntryPoint",
    "WAWebWamEnumMessageLevelAction",
    "WDSFontTokenStyles",
    "react",
    "useWAWebMessageHighlightTerms",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = {
        templateBold: {
            opacity: "x16vickp",
            $$css: true
        },
        codeFontSize: {
            fontSize: "x1nxh6w3",
            $$css: true
        }
    };
    function c({ botCommands, botMsgTextToRender, displayType, handleLinkClick, linkXstyle, msgKey, trusted }) {
        let t;
        const p = r("useWAWebMessageHighlightTerms")(msgKey);
        const _ = o("useWAWebMsgValues").useMsgValues(msgKey, [
            (t = o("WAWebMsgGetters")).getIsSpoiler,
            t.getBody,
            o("WAWebFrontendMsgGetters").getText,
            t.getCtwaContext,
            t.getSubtype,
            t.getType,
            t.getIsMetaBotResponse,
            t.getInitialPageSize,
            t.getMentionedJidList,
            t.getGroupMentions,
            t.getHasMentionAll,
            t.getIsFromTemplate,
            o("WAWebFrontendMsgGetters").getRtl,
            o("WAWebFrontendMsgGetters").getDir,
            t.getLastBotEditBodyLength,
            t.getSender,
            t.getIsSentByMe
        ]);
        const f = _[0];
        const g = _[1];
        const h = _[2];
        const y = _[3];
        const msgSubtype = _[4];
        const msgType = _[5];
        const v = _[6];
        const S = _[7];
        const R = _[8];
        const L = _[9];
        const hasMentionAll = _[10];
        const k = _[11];
        const I = _[12];
        const T = _[13];
        const lastBotEditBodyLength = _[14];
        const x = _[15];
        const $ = _[16];
        const emojis = o("WAWebEmoji").EmojiUtil.matchLargeEmojiPattern(g);
        if (emojis) {
            const animation = emojis.length === 1 && o("WAWebEmoji").EmojiUtil.getHeartEmojis().some((e)=>o("WAWebEmoji").EmojiUtil.normalizeEmoji(e) === o("WAWebEmoji").EmojiUtil.normalizeEmoji(emojis[0]));
            return s.jsx(r("WAWebMessageMultiEmoji.react"), {
                animation,
                emojis
            });
        }
        const M = true;
        const w = !o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage({
            isAGMShown: y?.automatedGreetingMessageShown,
            msgSource: y?.sourceApp,
            msgSubtype,
            msgType
        }) && botMsgTextToRender != null && v ? botMsgTextToRender : g;
        const Component = o("WAWebExpandableText.react").ExpandableText;
        return <Component text={w} textLimit={S}>{function({ textLimit }) {
            const a = o("WAWebFormatConfigurationConversation").Conversation({
                mentions: o("WAWebMsgMentionMap").calculateMsgMentionMap({
                    mentionedJidList: R
                }),
                groupMentions: o("WAWebMsgMentionMap").calculateMsgGroupMentionMap({
                    groupMentions: L
                }),
                hasMentionAll,
                links: h != null ? o("WAWebMsgLinks").getLinksFromText(h, x, textLimit) : undefined,
                linkXstyle,
                phoneNumbers: h != null ? o("WAWebMsgPhoneNumbers").getPhoneNumbersFromText(h, textLimit) : undefined,
                selectable: M,
                trusted: trusted === true,
                fromMe: msgKey.fromMe,
                fromChatWid: msgKey.remote,
                commands: displayType === o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION ? botCommands : null,
                parseLists: true,
                parseQuotes: true,
                parseInlineCode: true,
                messageHasSpoiler: f,
                spoilerRevealContext: o("WAWebSpoilerRevealLogger").getSpoilerRevealContextFromValues(msgKey.remote, $),
                codeXstyle: u.codeFontSize,
                boldXstyle: k ? u.templateBold : undefined,
                onLinkClick: function(t) {
                    if (handleLinkClick) {
                        handleLinkClick(t);
                        const e = o("WAWebMsgCollection").MsgCollection.get(msgKey);
                        if (e == null) {
                            return;
                        }
                        o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
                            msg: e,
                            chat: o("WAWebFrontendMsgGetters").getChat(e),
                            messageLevelAction: o("WAWebWamEnumMessageLevelAction").MESSAGE_LEVEL_ACTION.URL_FRICTION_BANNER_VIEW,
                            messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint").MESSAGE_ACTION_ENTRY_POINT.URL_CLICK_BANNER
                        });
                    }
                },
                terms: p ?? null
            });
            const Component = o("WAWebEmojiText.react").EmojiText;
            return <Component text={w} lastBotEditBodyLength={lastBotEditBodyLength} className={displayType === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY ? "x1rg5ohu x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft" : ""} xstyle={o("WDSFontTokenStyles").WDSFontTokenStyles.Body2} dirMismatch={I !== r("WAWebL10N").isRTL()} direction={T} inferLinesDirection formatters={a} selectable={M} textLimit={textLimit}/>;
        }}</Component>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = c;
}, 98);