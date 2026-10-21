__d("WAWebReactionsMsgAction", [
    "WAAbortError",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebAck",
    "WAWebAddOnsUpdateSendStatesAction",
    "WAWebAddonGatingUtils",
    "WAWebDBCreateOrUpdateReactions",
    "WAWebLidMigrationUtils",
    "WAWebMaybe",
    "WAWebMessageAddOnType",
    "WAWebMsgCollection",
    "WAWebMsgModel",
    "WAWebMsgReactionsBridge",
    "WAWebNotificationBackend",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebReactionDataUtils",
    "WAWebReactionNotificationUtils",
    "WAWebReactionsBEUtils",
    "WAWebReactionsCollection",
    "WAWebReactionsMsgActionUtils",
    "WAWebSendAddonMsgChatAction",
    "WAWebSendMsgRecordAction",
    "WAWebSendMsgResultAction",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = [
        "senderUserJid"
    ];
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { allowNotify }) {
            const e_parentMsgKey = e.parentMsgKey;
            const a = o("WAWebReactionDataUtils").reactionRowToReactionMsgData(e);
            const i = !!allowNotify && !o("WAWebReactionNotificationUtils").nonHydratedShouldMuteReactionNotification(a);
            let l;
            if (i) {
                l = yield o("WAWebReactionsCollection").ReactionsCollection.find(e_parentMsgKey);
            } else {
                l = o("WAWebReactionsCollection").ReactionsCollection.getAddressingModeInsensitive(e_parentMsgKey);
            }
            if (l) {
                o("WAWebReactionsCollection").ReactionsCollection.addOrUpdateReaction(e);
                const s = l.reactions.length > 0;
                yield o("WAWebMsgReactionsBridge").updateHasReactionInParent(e_parentMsgKey, s);
            } else {
                if (e.reactionText !== o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT) {
                    yield o("WAWebMsgReactionsBridge").updateHasReactionInParent(e_parentMsgKey, true);
                }
            }
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebDBCreateOrUpdateReactions").createOrUpdateReactions([
                e
            ]);
            const n = t[0];
            if (n) {
                u(n, {
                    allowNotify: false
                });
                return n;
            }
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const t_senderUserJid = t.senderUserJid;
            const a = babelHelpers.objectWithoutPropertiesLoose(t, s);
            const i = o("WAWebReactionsCollection").ReactionsCollection.getExistingSenderModelFromReactionDetails(a) ?? o("WAWebMaybe").ifSome(o("WAWebLidMigrationUtils").getAlternateMsgKey(a.msgKey), function(e) {
                return o("WAWebReactionsCollection").ReactionsCollection.getExistingSenderModelFromReactionDetails(babelHelpers.extends({}, a, {
                    msgKey: e
                }));
            });
            if (i == null) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "resendUpdateFailedPropsForSentReactionsDBAndModel: no model"
                ])));
                return;
            }
            yield f(t, i.timestamp);
        });
        return _.apply(this, arguments);
    }
    function f(e, t) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, reactionTimestamp) {
            const a = o("WAWebMsgCollection").MsgCollection.get(e.parentMsgKey);
            const { parentMsgKey, msgKey } = e;
            if (a) {
                const s = parentMsgKey.remote;
                const u = o("WAWebReactionsMsgActionUtils").getFromForReactionMessage(a);
                const c = yield o("WAWebReactionsMsgActionUtils").getReactionMsgData({
                    from: u,
                    globalClockUnixTimeSeconds: Math.floor(reactionTimestamp / 1000),
                    msg: a,
                    msgKey,
                    reaction: e.reactionText,
                    reactionTimestamp,
                    to: s
                });
                if (o("WAWebAddonGatingUtils").isUnifiedInfraEnabled(c)) {
                    const d = yield o("WAWebSendAddonMsgChatAction").addAndSendAddonToChat(c);
                    if (d.messageSendResult !== o("WAWebSendMsgResultAction").SendMsgResult.OK) {
                        throw r("err")("Reaction send error");
                    }
                    return;
                }
                const m = new (o("WAWebMsgModel")).Msg(c);
                yield o("WAWebAddOnsUpdateSendStatesAction").updateAddOnSendStatesAction(new Map([
                    [
                        o("WAWebMessageAddOnType").MessageAddOnType.Reaction,
                        [
                            {
                                msgKey: e.msgKey.toString(),
                                ack: o("WAWebAck").ACK.CLOCK,
                                isSendFailure: false
                            }
                        ]
                    ]
                ]));
                return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("sendMessage", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    return o("WAWebSendMsgRecordAction").sendMsgRecord(m);
                }), {
                    priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
                }).waitUntilCompleted();
            }
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        for (const t of e){
            const n = !o("WAWebReactionNotificationUtils").nonHydratedShouldMuteReactionNotification(t);
            if (n) {
                o("WAWebNotificationBackend").showReactionNotification(t).catch(o("WAAbortError").catchAbort(function(e) {}));
            }
        }
    }
    l.addOrUpdateReactionsModelCollection = u;
    l.addOrUpdateReactions = d;
    l.resendUpdateFailedPropsForSentReactionsDBAndModel = p;
    l.handleReactionNotification = h;
}, 98);