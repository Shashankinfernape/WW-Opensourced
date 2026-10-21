__d("WAWebPollsVoteDataUtils", [
    "WAWebMsgGetters",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const a = o("WAWebMsgKeyUtils").msgKeyToTargetInfo(e.msgKey, o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon);
        const { author, from, to } = a;
        return {
            id: e.msgKey,
            to,
            from,
            author,
            type: o("WAWebMsgType").MSG_TYPE.POLL_UPDATE,
            kind: o("WAWebMsgType").MsgKind.PollVoteDecrypted,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            pollUpdateParentKey: e.parentMsgKey,
            selectedOptionLocalIds: e.selectedOptionLocalIds,
            senderTimestampMs: e.senderTimestampMs,
            t: e.t ?? undefined,
            ack: e.ack ?? undefined,
            read: e.read ?? false,
            lastSuccessfulSelectedOptionLocalIds: e.lastSuccessfulSelectedOptionLocalIds,
            unresolvedOptionHashes: e.unresolvedOptionHashes
        };
    }
    function s(e) {
        return {
            msgKey: e.id,
            parentMsgKey: e.pollUpdateParentKey,
            selectedOptionLocalIds: e.selectedOptionLocalIds,
            senderTimestampMs: e.senderTimestampMs,
            t: e.t,
            sender: o("WAWebWidFactory").asUserWidOrThrow(r("nullthrows")(o("WAWebMsgGetters").getSender(e))),
            ack: o("WAWebMsgGetters").getAck(e),
            read: o("WAWebUserPrefsMeUser").isMeAccount(e.from) || e.read,
            lastSuccessfulSelectedOptionLocalIds: e.lastSuccessfulSelectedOptionLocalIds,
            unresolvedOptionHashes: e.unresolvedOptionHashes
        };
    }
    l.voteDataToPollVoteMsgData = e;
    l.pollVoteMsgDataToVoteData = s;
}, 98);