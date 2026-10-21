__d("WAWebNewsletterMsgStanzaAdapters", [
    "WAAckLevel",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNewsletterMsgEditUtils",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "err"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        if (n.addOnParentKey == null) {
            throw r("err")("Reaction message without parent");
        }
        return {
            id: e,
            reactionParentKey: n.addOnParentKey,
            type: o("WAWebMsgType").MSG_TYPE.REACTION,
            kind: o("WAWebMsgType").MsgKind.ReactionDecrypted,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            t: t.t,
            from: t.from,
            to: t.to,
            serverId: t.serverId,
            isNewMsg: false,
            ack: o("WAAckLevel").ACK.SENT,
            read: false,
            reactionText: t.reactionCode,
            reactionTimestamp: t.t * 1000
        };
    }
    function s(e, t, n) {
        if (n.addOnParentKey == null) {
            throw r("err")("Reaction message without parent");
        }
        return {
            id: e,
            t: t.t,
            from: t.from,
            to: t.to,
            serverId: t.serverId,
            isNewMsg: false,
            ack: o("WAAckLevel").ACK.SENT,
            type: o("WAWebMsgType").MSG_TYPE.POLL_UPDATE,
            kind: o("WAWebMsgType").MsgKind.PollVoteDecrypted,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            subtype: "poll_vote",
            pollUpdateParentKey: n.addOnParentKey,
            selectedOptionLocalIds: n.pollVotesAsLocalIds ?? [],
            senderTimestampMs: t.t * 1000,
            read: false
        };
    }
    function u({ baseMsgData: t, msg: n, msgContext: a, msgKey: i, parsingContext: l }) {
        const s = o("WAWebViewMode.flow").ViewModeType.NEWSLETTER_TOMBSTONE;
        if (l === "history") {
            return {
                id: new (r("WAWebMsgKey"))({
                    remote: n.from,
                    fromMe: n.isSender,
                    id: n.id
                }),
                from: n.from,
                to: n.isSender ? n.from : o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
                t: a.metaOriginalMsgT ?? n.t,
                serverId: n.serverId,
                lastUpdateFromServerTs: a.lastUpdateFromServerTs ?? void 0,
                type: "revoked",
                kind: o("WAWebMsgType").MsgKind.RevokedMessage,
                viewMode: s,
                revokeSender: n.from,
                subtype: "admin"
            };
        }
        return babelHelpers.extends({}, t, {
            serverId: n.serverId,
            id: new (r("WAWebMsgKey"))({
                remote: n.from,
                fromMe: n.isSender,
                id: r("WAWebMsgKey").newId_DEPRECATED()
            }),
            type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
            kind: o("WAWebMsgType").MsgKind.ProtocolRevoke,
            subtype: "admin_revoke",
            protocolMessageKey: i,
            viewMode: s
        });
    }
    function c(e, t, n) {
        if (t !== "history") {
            return o("WAWebNewsletterMsgEditUtils").mapMsgToEditProtocolMsg(e, {
                latestEditSenderTimestampMs: n.latestEditSenderTimestampMs
            });
        }
        return e;
    }
    l.mapReactionMsgStanza = e;
    l.mapPollVoteMsgStanza = s;
    l.mapRevokeMsgStanza = u;
    l.mapEditMsgStanza = c;
}, 98);