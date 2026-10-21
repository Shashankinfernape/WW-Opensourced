__d("WAWebAddOnsUpdateSendStatesAction", [
    "Promise",
    "WAWebAddOnsUpdateAddOnAcksApi",
    "WAWebCommentCollection",
    "WAWebMessageAddOnType",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebPinInChatCollection",
    "WAWebPollsPollVoteCollection",
    "WAWebReactionsCollection",
    "asyncToGeneratorRuntime",
    "compactMap"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, ack) {
        const n = p(e);
        if (n != null) {
            o("WAWebAddOnsUpdateAddOnAcksApi").maybeUpdateAddOnAcks(new Map([
                [
                    n,
                    [
                        {
                            msgKey: e.id.toString(),
                            ack
                        }
                    ]
                ]
            ]));
        }
    }
    function u(t, r) {
        const o = p(t);
        if (o == null) {
            return (e || (e = n("Promise"))).resolve();
        }
        return c(new Map([
            [
                o,
                [
                    babelHelpers.extends({
                        msgKey: t.id.toString()
                    }, r)
                ]
            ]
        ]));
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = new Map;
            for (const [a, i] of e){
                const l = r("compactMap")(i, function(e) {
                    if (e.ack == null) {
                        return null;
                    }
                    return {
                        msgKey: e.msgKey,
                        ack: e.ack
                    };
                });
                t.set(a, l);
            }
            yield o("WAWebAddOnsUpdateAddOnAcksApi").updateAddOnAcks(t);
            m(e);
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        for (const [n, o] of e){
            for (const a of o){
                const i = _(n, r("WAWebMsgKey").from(a.msgKey));
                if (i != null) {
                    if (a.ack != null) {
                        i.ack = a.ack;
                    }
                    if (a.isSendFailure != null) {
                        i.isSendFailure = a.isSendFailure;
                    }
                }
            }
        }
    }
    function p(e) {
        switch(e.type){
            case o("WAWebMsgType").MSG_TYPE.REACTION:
            case o("WAWebMsgType").MSG_TYPE.REACTION_ENC:
                return o("WAWebMessageAddOnType").MessageAddOnType.Reaction;
            case o("WAWebMsgType").MSG_TYPE.POLL_UPDATE:
                if (e.subtype === "poll_vote") {
                    return o("WAWebMessageAddOnType").MessageAddOnType.PollVote;
                }
                break;
            case o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE:
                return o("WAWebMessageAddOnType").MessageAddOnType.PinMessage;
            case o("WAWebMsgType").MSG_TYPE.COMMENT:
                return o("WAWebMessageAddOnType").MessageAddOnType.Comment;
        }
        return null;
    }
    function _(e, t) {
        switch(e){
            case o("WAWebMessageAddOnType").MessageAddOnType.Reaction:
                return o("WAWebReactionsCollection").ReactionsCollection.getSenderByMsgKey(t);
            case o("WAWebMessageAddOnType").MessageAddOnType.PollVote:
                return o("WAWebPollsPollVoteCollection").PollVoteCollection.getByMsgKey(t);
            case o("WAWebMessageAddOnType").MessageAddOnType.PinMessage:
                return o("WAWebPinInChatCollection").PinInChatCollection.getByMsgKey(t);
            case o("WAWebMessageAddOnType").MessageAddOnType.Comment:
                return o("WAWebCommentCollection").CommentCollection.getByMsgKey(t);
            case o("WAWebMessageAddOnType").MessageAddOnType.BotMsmsg:
            case o("WAWebMessageAddOnType").MessageAddOnType.CallLogOrphan:
            case o("WAWebMessageAddOnType").MessageAddOnType.KeepInChat:
            case o("WAWebMessageAddOnType").MessageAddOnType.MessageEdit:
            case o("WAWebMessageAddOnType").MessageAddOnType.ReactionEnc:
            case o("WAWebMessageAddOnType").MessageAddOnType.Unknown:
                return null;
        }
    }
    l.maybeUpdateAddOnAckForMsgAction = s;
    l.updateAddOnSendStatesForMsgAction = u;
    l.updateAddOnSendStatesAction = c;
    l.updateAddOnCollectionsSendStatesAction = m;
}, 98);