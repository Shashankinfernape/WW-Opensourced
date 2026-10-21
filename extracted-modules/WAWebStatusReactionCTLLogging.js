__d("WAWebStatusReactionCTLLogging", [
    "WALogger",
    "WATimeUtils",
    "WAWebChatThreadLogging",
    "WAWebReactionsBEUtils",
    "WAWebStatusInteractionReceivedWamEvent",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumStatusInteractionActors",
    "WAWebWamEnumStatusInteractionMessageType",
    "WAWebWamEnumStatusInteractionResultType",
    "WAWebWamEnumStatusInteractionType",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t) {
        const r = t.reactionParentKey;
        if (!r.fromMe || !r.remote.isStatus() || t.reactionText === o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT) {
            return null;
        }
        const a = t.author ?? t.from;
        if (a == null || o("WAWebUserPrefsMeUser").isSerializedWidMe(a.toString())) {
            return null;
        }
        try {
            return o("WAWebWidFactory").asUserWidOrThrow(a);
        } catch (t) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[status][reaction] skipped engagement for unresolvable sender"
            ]))).sendLogs("status-reaction-received-logging-failed");
            return null;
        }
    }
    function u(e) {
        const t = [];
        for (const n of e){
            const r = s(n);
            if (r != null) {
                t.push({
                    activityType: "statusReactionsReceived",
                    ts: o("WATimeUtils").unixTime(),
                    chatId: r
                });
                new (o("WAWebStatusInteractionReceivedWamEvent")).StatusInteractionReceivedWamEvent({
                    statusInteractionActors: o("WAWebWamEnumStatusInteractionActors").STATUS_INTERACTION_ACTORS.POSTER_VIEWER,
                    statusInteractionMessageType: o("WAWebWamEnumStatusInteractionMessageType").STATUS_INTERACTION_MESSAGE_TYPE.LIKE,
                    statusInteractionResultType: o("WAWebWamEnumStatusInteractionResultType").STATUS_INTERACTION_RESULT_TYPE.OK,
                    statusInteractionType: o("WAWebWamEnumStatusInteractionType").STATUS_INTERACTION_TYPE.REACTION
                }).commit();
            }
        }
        if (t.length > 0) {
            o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging(t);
        }
    }
    l.logReceivedStatusReactionEngagement = u;
}, 98);