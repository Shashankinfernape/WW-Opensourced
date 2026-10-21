__d("WAWebMessageCaption.react", [
    "WAWebBizSuspiciousLabel.react",
    "WAWebEmojiText.react",
    "WAWebExpandableText.react",
    "WAWebFormatConfigurationConversation",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebLogChannelPostInteraction",
    "WAWebMessageSpacerText.react",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebMsgMentionMap",
    "WAWebMsgPhoneNumbers",
    "WAWebSpoilerRevealLogger",
    "WAWebWamEnumChannelPostInteractionType",
    "react",
    "react-compiler-runtime",
    "useWAWebMessageHighlightTerms",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
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
    function c(e) {
        const t = o("react-compiler-runtime").c(41);
        const { highlightText, msgKey, overflowVisible, reserveAiContentLabel, shouldFormatLinks, spacer, testId, trusted } = e;
        const _ = r("useWAWebMessageHighlightTerms")(msgKey);
        let f;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            let g;
            f = [
                (g = o("WAWebMsgGetters")).getT,
                g.getId,
                o("WAWebFrontendMsgGetters").getDir,
                o("WAWebFrontendMsgGetters").getRtl,
                o("WAWebFrontendMsgGetters").getText,
                g.getInitialPageSize,
                g.getFooter,
                g.getCtwaContext,
                g.getIsSpoiler,
                g.getMentionedJidList,
                g.getGroupMentions,
                g.getHasMentionAll,
                g.getIsFromTemplate,
                g.getSender,
                g.getIsSentByMe
            ];
            t[0] = f;
        } else {
            f = t[0];
        }
        const h = o("useWAWebMsgValues").useMsgValues(msgKey, f);
        const y = h[1];
        const C = h[2];
        const b = h[3];
        const v = h[4];
        const S = h[5];
        const R = h[7];
        const messageHasSpoiler = h[8];
        const E = h[9];
        const k = h[10];
        const hasMentionAll = h[11];
        const T = h[12];
        const D = h[13];
        const x = h[14];
        if (v == null || v === "") {
            return null;
        }
        let $;
        if (t[1] !== C || t[2] !== b) {
            $ = C && b !== r("WAWebL10N").isRTL();
            t[1] = C;
            t[2] = b;
            t[3] = $;
        } else {
            $ = t[3];
        }
        const dirMismatch = !!$;
        let N;
        if (t[4] !== R || t[5] !== msgKey) {
            N = !R && s.jsx(o("WAWebBizSuspiciousLabel.react").SuspiciousLabel, {
                msgKey
            });
            t[4] = R;
            t[5] = msgKey;
            t[6] = N;
        } else {
            N = t[6];
        }
        let M;
        if (t[7] !== C || t[8] !== dirMismatch || t[9] !== k || t[10] !== hasMentionAll || t[11] !== _ || t[12] !== highlightText || t[13] !== y.fromMe || t[14] !== y.remote || t[15] !== S || t[16] !== T || t[17] !== x || t[18] !== messageHasSpoiler || t[19] !== E || t[20] !== msgKey || t[21] !== D || t[22] !== shouldFormatLinks || t[23] !== testId || t[24] !== v || t[25] !== trusted) {
            M = function({ textLimit }) {
                const r = highlightText != null ? highlightText.toLowerCase().split(" ") : _;
                const i = o("WAWebFormatConfigurationConversation").Conversation({
                    mentions: o("WAWebMsgMentionMap").calculateMsgMentionMap({
                        mentionedJidList: E
                    }),
                    groupMentions: o("WAWebMsgMentionMap").calculateMsgGroupMentionMap({
                        groupMentions: k
                    }),
                    hasMentionAll,
                    links: shouldFormatLinks === false ? undefined : o("WAWebMsgLinks").getLinksFromText(v, D, textLimit),
                    phoneNumbers: o("WAWebMsgPhoneNumbers").getPhoneNumbersFromText(v, S + 1),
                    selectable: true,
                    trusted: trusted === true,
                    fromMe: y.fromMe,
                    fromChatWid: y.remote,
                    parseLists: true,
                    parseQuotes: true,
                    parseInlineCode: true,
                    messageHasSpoiler,
                    spoilerRevealContext: o("WAWebSpoilerRevealLogger").getSpoilerRevealContextFromValues(y.remote, x),
                    codeXstyle: u.codeFontSize,
                    boldXstyle: T ? u.templateBold : undefined,
                    onLinkClick: function(rawUrl) {
                        const e = o("WAWebMsgCollection").MsgCollection.get(msgKey);
                        if (e != null) {
                            o("WAWebLogChannelPostInteraction").logChannelPostInteraction({
                                interactionType: o("WAWebWamEnumChannelPostInteractionType").CHANNEL_POST_INTERACTION_TYPE.EXTERNAL_LINK_OPEN_TAP,
                                msg: e,
                                rawUrl
                            });
                        }
                    },
                    terms: r ?? null
                });
                return s.jsx(o("WAWebEmojiText.react").EmojiText, {
                    testid: testId,
                    direction: C,
                    dirMismatch,
                    formatters: i,
                    inferLinesDirection: true,
                    selectable: true,
                    text: v,
                    textLimit
                });
            };
            t[7] = C;
            t[8] = dirMismatch;
            t[9] = k;
            t[10] = hasMentionAll;
            t[11] = _;
            t[12] = highlightText;
            t[13] = y.fromMe;
            t[14] = y.remote;
            t[15] = S;
            t[16] = T;
            t[17] = x;
            t[18] = messageHasSpoiler;
            t[19] = E;
            t[20] = msgKey;
            t[21] = D;
            t[22] = shouldFormatLinks;
            t[23] = testId;
            t[24] = v;
            t[25] = trusted;
            t[26] = M;
        } else {
            M = t[26];
        }
        let w;
        if (t[27] !== S || t[28] !== M || t[29] !== v) {
            const Component = o("WAWebExpandableText.react").ExpandableText;
            w = <Component text={v} textLimit={S}>{M}</Component>;
            t[27] = S;
            t[28] = M;
            t[29] = v;
            t[30] = w;
        } else {
            w = t[30];
        }
        let A;
        if (t[31] !== y || t[32] !== msgKey || t[33] !== overflowVisible || t[34] !== reserveAiContentLabel || t[35] !== spacer || t[36] !== w) {
            const Component = r("WAWebMessageSpacerText.react");
            A = <Component overflowVisible={overflowVisible} msgKey={msgKey} reserveAiContentLabel={reserveAiContentLabel} data-id={y} spacer={spacer}>{w}</Component>;
            t[31] = y;
            t[32] = msgKey;
            t[33] = overflowVisible;
            t[34] = reserveAiContentLabel;
            t[35] = spacer;
            t[36] = w;
            t[37] = A;
        } else {
            A = t[37];
        }
        let F;
        if (t[38] !== N || t[39] !== A) {
            F = <>{N}{A}</>;
            t[38] = N;
            t[39] = A;
            t[40] = F;
        } else {
            F = t[40];
        }
        return F;
    }
    l.default = c;
}, 98);