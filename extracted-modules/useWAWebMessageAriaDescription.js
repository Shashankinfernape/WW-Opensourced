__d("useWAWebMessageAriaDescription", [
    "WAWebFormatRevokedMsg",
    "WAWebFrontendMsgGetters",
    "WAWebMessageUiUtils",
    "WAWebMsgGetters",
    "WAWebMsgMentionMap",
    "WAWebMsgType",
    "WAWebPollsPollVoteCollection",
    "WAWebPollsUseResults",
    "WAWebQuotedMsgModelUtils",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        const r = o("react-compiler-runtime").c(10);
        let a;
        if (r[0] === Symbol.for("react.memo_cache_sentinel")) {
            let i;
            a = [
                (i = o("WAWebMsgGetters")).getType,
                i.getSubtype,
                o("WAWebFrontendMsgGetters").getText,
                i.getInitialPageSize,
                i.getPollName,
                o("WAWebFrontendMsgGetters").getMediaData,
                i.getType
            ];
            r[0] = a;
        } else {
            a = r[0];
        }
        const l = o("useWAWebMsgValues").useMsgValues(e.id, a);
        const s = l[0];
        const u = l[1];
        const messageText = l[2];
        const initialPageSize = l[3];
        const m = l[4];
        const p = l[5];
        if (!n.atLeastOnceKeyboardUser) {
            return null;
        }
        let _;
        if (r[1] !== t || r[2] !== initialPageSize || r[3] !== p || r[4] !== messageText || r[5] !== e || r[6] !== m || r[7] !== u || r[8] !== s) {
            const mentionMap = o("WAWebMsgMentionMap").calculateMsgMentionMap(e);
            const g = {
                type: s,
                subtype: u,
                isGif: p?.isGif,
                quotedMsg: o("WAWebQuotedMsgModelUtils").getQuotedMsgObj(e),
                senderWid: o("WAWebMsgGetters").getSender(e)
            };
            const h = o("WAWebFrontendMsgGetters").getAsPollCreation(e);
            let optionsWithCounts = null;
            const C = o("WAWebMsgGetters").getId(e);
            if (h != null) {
                const b = o("WAWebPollsPollVoteCollection").PollVoteCollection.getForParentAddressingModeInsensitive([
                    C
                ]);
                const v = b[0];
                const S = v.toArray();
                const R = o("WAWebMsgGetters").getPollOptions(e);
                if (h && R) {
                    const L = o("WAWebPollsUseResults").aggregateVotes(S, R);
                    optionsWithCounts = o("WAWebPollsUseResults").getOptionWithCount(L);
                }
            }
            let revokedLabel = null;
            if (e.type === o("WAWebMsgType").MSG_TYPE.REVOKED) {
                const k = o("WAWebFrontendMsgGetters").getAsRevoked(e);
                revokedLabel = k ? o("WAWebFormatRevokedMsg").formatRevokedMsg(k) : null;
            }
            const ariaMessageSpecific = {
                associatedMessages: t,
                pollName: m,
                optionsWithCounts,
                mediaData: p,
                revokedLabel
            };
            const T = {
                messageText,
                mentionMap,
                ariaLabelMessageType: g,
                ariaMessageSpecific,
                initialPageSize
            };
            _ = o("WAWebMessageUiUtils").getMessageTextLabel(T);
            r[1] = t;
            r[2] = initialPageSize;
            r[3] = p;
            r[4] = messageText;
            r[5] = e;
            r[6] = m;
            r[7] = u;
            r[8] = s;
            r[9] = _;
        } else {
            _ = r[9];
        }
        return _;
    }
    l.useMessageAriaDescription = e;
}, 98);