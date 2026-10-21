__d("WAWebNewsletterSendReactionAction", [
    "WAAckLevel",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WATimeUtils",
    "WAWebAddOnsUpdateSendStatesAction",
    "WAWebDBGetReactions",
    "WAWebFrontendMsgGetters",
    "WAWebMsgCollection",
    "WAWebMsgDataFromModel",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterReactionCollection",
    "WAWebNewsletterSendMessageJob",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "WAWebNewsletterValidationUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebReactionsBEUtils",
    "WAWebReactionsMsgAction",
    "WAWebReactionsMsgActionUtils",
    "WAWebReactionsUtils",
    "WAWebSchemaMessage",
    "WAWebSendMsgResultAction",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a) {
            const i = t instanceof r("WAWebMsgKey") ? [
                o("WAWebMsgCollection").MsgCollection.get(t),
                t
            ] : [
                t,
                t.id
            ];
            const l = i[0];
            const d = i[1];
            if (l == null) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[sendNewsletterReaction] Could not find message for msgKey"
                ])));
                return o("WAWebSendMsgResultAction").SendMsgResult.ERROR_CANCELLED;
            }
            const l_serverId = l.serverId;
            if (l_serverId == null) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[sendNewsletterReaction] Message missing serverId"
                ])));
                return o("WAWebSendMsgResultAction").SendMsgResult.ERROR_CANCELLED;
            }
            const _ = o("WAWebFrontendMsgGetters").getChat(l);
            if (!o("WAWebReactionsUtils").isNewsletterReactionAllowed(a, _)) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[sendNewsletterReaction] emoji not allowed"
                ])));
                return o("WAWebSendMsgResultAction").SendMsgResult.ERROR_CANCELLED;
            }
            const f = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
            const to = _.id;
            const globalClockUnixTimeSeconds = o("WATimeUtils").unixTime();
            const y = globalClockUnixTimeSeconds * 1000;
            const C = new (r("WAWebMsgKey"))({
                from: f,
                to,
                id: yield r("WAWebMsgKey").newId()
            });
            const b = yield o("WAWebReactionsMsgActionUtils").getReactionMsgData({
                from: f,
                globalClockUnixTimeSeconds,
                msg: l,
                msgKey: C,
                reaction: a,
                reactionTimestamp: y,
                to
            });
            const reactionMsgObj = {
                msgKey: C.toString(),
                parentMsgKey: o("WAWebNewsletterDBUtils").craftNewsletterMsgKeyFromServerId(l_serverId, to).toString(),
                senderUserJid: f.toString(),
                reactionText: a,
                timestamp: y,
                orphan: 0,
                read: true,
                ack: o("WAAckLevel").ACK.CLOCK
            };
            const S = new (o("WAWebMsgModel")).Msg(b);
            return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("sendNewsletterReaction", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = yield o("WAWebDBGetReactions").existsReactionAddressingModeInsensitive({
                    parentMsgKey: reactionMsgObj.parentMsgKey,
                    senderUserJid: reactionMsgObj.senderUserJid
                });
                if (a !== o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT) {
                    yield p(l, S, {
                        reactionCode: a
                    });
                    yield o("WAWebReactionsMsgAction").addOrUpdateReactions(reactionMsgObj);
                    yield o("WAWebNewsletterBridgeApi").NewsletterBridgeApi.updateChatPreviewFromReaction({
                        reactionMsgObj,
                        parentMsgKey: d
                    });
                }
                try {
                    if (e != null) {
                        yield o("WAWebSchemaMessage").getMessageTable().remove(e.msgKey);
                    }
                    yield o("WAWebNewsletterUpdateMsgsRecordsJob").addNewsletterMsgsRecords([
                        o("WAWebMsgDataFromModel").msgDataFromMsgModel(S)
                    ]);
                    const t = yield o("WAWebNewsletterSendMessageJob").sendNewsletterMessage({
                        type: "reaction",
                        reactionCode: a,
                        newsletterJid: o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(to.toJid()),
                        parentMsgServerId: l_serverId,
                        msg: S
                    });
                    switch(t.success){
                        case true:
                            yield p(l, S, {
                                reactionCode: a === o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT ? a : null,
                                timestamp: t.ack.t
                            });
                            if (a === o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT) {
                                yield o("WAWebReactionsMsgAction").addOrUpdateReactions(reactionMsgObj);
                                yield o("WAWebNewsletterBridgeApi").NewsletterBridgeApi.updateChatPreviewFromReaction({
                                    reactionMsgObj,
                                    parentMsgKey: d
                                });
                            }
                            return o("WAWebSendMsgResultAction").SendMsgResult.OK;
                        case false:
                            S.updateAck(o("WAAckLevel").ACK.FAILED);
                            return o("WAWebSendMsgResultAction").SendMsgResult.ERROR_NETWORK;
                    }
                } catch (e) {
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[newsletter] Failed to send reaction"
                    ]))).tags("newsletter");
                    S.updateAck(o("WAAckLevel").ACK.FAILED, undefined);
                    return o("WAWebSendMsgResultAction").SendMsgResult.ERROR_NETWORK;
                }
            }), {
                priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
            }).waitUntilCompleted();
        });
        return m.apply(this, arguments);
    }
    function p(e, t, n) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(parentMsg, reactionMsg, { reactionCode, timestamp }) {
            if (reactionCode != null) {
                o("WAWebNewsletterReactionCollection").updateOrCreateMessageReaction({
                    parentMsg,
                    reactionMsg,
                    reactionCode
                });
            }
            if (timestamp != null) {
                o("WAWebNewsletterReactionCollection").NewsletterMessageReactionsCollection.get(parentMsg.id)?.set("myReactionTs", timestamp);
                reactionMsg.updateAck(o("WAAckLevel").ACK.SENT);
                yield o("WAWebAddOnsUpdateSendStatesAction").maybeUpdateAddOnAckForMsgAction(reactionMsg, o("WAAckLevel").ACK.SENT);
            }
        });
        return _.apply(this, arguments);
    }
    l.sendNewsletterReaction = d;
}, 98);