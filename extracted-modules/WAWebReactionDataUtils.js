__d("WAWebReactionDataUtils", [
    "WAWebBotUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebReactionsBEUtils",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const n = o("WAWebMsgGetters").getSender(e);
        if (!(n == null || !o("WAWebBotUtils").isMetaAiBot(n) || !o("WAWebMsgGetters").getIsBotResponse(e) || !e.id.remote.isGroup())) {
            return o("WAWebMsgGetters").getBotTargetSenderJid(e) ?? undefined;
        }
    }
    function s(e) {
        const i = r("WAWebMsgKey").fromString(e.msgKey);
        const l = o("WAWebMsgKeyUtils").msgKeyToTargetInfo(i, o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon);
        const { author, from, to } = l;
        return {
            id: i,
            to,
            from,
            author,
            type: o("WAWebMsgType").MSG_TYPE.REACTION,
            kind: o("WAWebMsgType").MsgKind.ReactionDecrypted,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            reactionParentKey: r("WAWebMsgKey").fromString(e.parentMsgKey),
            reactionText: e.reactionText,
            reactionTimestamp: e.timestamp,
            t: e.t ?? undefined,
            ack: e.ack ?? undefined,
            read: e.read ?? false
        };
    }
    function u(e) {
        return {
            msgKey: e.id.toString(),
            parentMsgKey: e.reactionParentKey.toString(),
            senderUserJid: r("nullthrows")(o("WAWebMsgGetters").getSender(e)).toString(),
            reactionText: e.reactionText,
            timestamp: e.reactionTimestamp,
            t: o("WAWebMsgGetters").getT(e),
            ack: o("WAWebMsgGetters").getAck(e) ?? undefined,
            orphan: 0,
            read: e.read
        };
    }
    function c({ id, reactionParentKey, reactionText, reactionTimestamp, sender, unread }) {
        const s = o("WAWebWidFactory").asUserWidOrThrow(sender);
        const orphan = 0;
        return {
            msgKey: id.toString(),
            parentMsgKey: reactionParentKey.toString(),
            senderUserJid: s.toString(),
            reactionText: reactionText ?? o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT,
            timestamp: reactionTimestamp,
            orphan,
            read: !unread
        };
    }
    l.getBotInvokerJidForReaction = e;
    l.reactionRowToReactionMsgData = s;
    l.reactionMsgDataToReactionRow = u;
    l.webMsgInfoReactionTypeToReactionsRow = c;
}, 98);