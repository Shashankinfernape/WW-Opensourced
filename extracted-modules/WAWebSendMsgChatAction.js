__d("WAWebSendMsgChatAction", [
    "Promise",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WATimeUtils",
    "WAWebApiGroupInviteV4Store",
    "WAWebAppTracker",
    "WAWebBizAgentAction",
    "WAWebBizShowOrderEphemeralSystemAction",
    "WAWebBotFrontendLoggingUtils",
    "WAWebBotLoggingUtils",
    "WAWebCoexV2RelayEligibility",
    "WAWebDBProcessMessage",
    "WAWebDBRevokeInviteV4",
    "WAWebDBThreadMetadataBulkHelper",
    "WAWebEmptyChatSystemMsg",
    "WAWebFindChatAction",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationFrontendUtils",
    "WAWebLidMigrationUtils",
    "WAWebMaybeGetAppendedAiThreadAttributes",
    "WAWebMaybeGetAppendedViewRepliesThreadId",
    "WAWebMaybeGetBotModeSelection",
    "WAWebMessagePluginGenerateReportingTokenContent",
    "WAWebMessageSendPerfReporter",
    "WAWebMessageSendReporter",
    "WAWebMessageSendReporterFrontendDeps",
    "WAWebMessagingGatingUtils",
    "WAWebMiscErrors",
    "WAWebMsgCollection",
    "WAWebMsgInfoUtils",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebPrivacyMode_WORKER_INCOMPATIBLE",
    "WAWebRichTextFormatMessageSendLogger",
    "WAWebSendMsgChatActionUtils",
    "WAWebSendMsgRecordAction",
    "WAWebSendMsgResultAction",
    "WAWebStateUtils",
    "WAWebThreadMsgUtils",
    "WAWebThreadWriteThroughAction",
    "WAWebWamMsgUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    function f(e, t, n) {
        return C(o("WAWebStateUtils").unproxy(e), t, n);
    }
    function g(e, t) {
        return R(o("WAWebStateUtils").unproxy(e), t);
    }
    function h(e, t) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const r = yield o("WAWebFindChatAction").findOrCreateLatestChat(e, "voipCallLog");
            const r_chat = r.chat;
            const i = o("WAWebMsgCollection").MsgCollection.add(babelHelpers.extends({}, t))[0];
            if (i) {
                const l = (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                            chatId: r_chat.id,
                            newMsg: t,
                            handleSingleMsgOrigin: "voipNotification"
                        });
                        return {
                            msg: e
                        };
                    });
                    return function(n) {
                        return e.apply(this, arguments);
                    };
                })();
                return S(r_chat, l(i));
            }
            return (_ || (_ = n("Promise"))).resolve(null);
        });
        return y.apply(this, arguments);
    }
    function C(t, a, i = undefined) {
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "_addAndSendMsgToChat start chatId: ",
            ""
        ])), t.id.toLogString());
        let l;
        const f = (_ || (_ = n("Promise"))).resolve(a).then((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                let systemMsgs_1;
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "_addAndSendMsgToChat consistent msg id? ",
                    ". ",
                    ", ",
                    ""
                ])), t.id.equals(e.id.remote), t.id.toLogString(), e.id.remote?.toLogString());
                yield o("WAWebLidMigrationFrontendUtils").validateMissingAccountLid(t, e, "addAndSendMsgToChat");
                const h = o("WAWebPrivacyMode_WORKER_INCOMPATIBLE").getPrivacyModeFromModel(t.id);
                const y = yield o("WAWebMaybeGetAppendedAiThreadAttributes").maybeGetAppendedAiThreadAttributes(e);
                const C = y[0];
                const v = y[1];
                o("WAWebBotFrontendLoggingUtils").maybeLogFirstPromptSentInAiThread(t, babelHelpers.extends({}, e, {
                    threadIds: C
                }));
                const botModeSelection = e.botModeSelection ?? o("WAWebMaybeGetBotModeSelection").maybeGetBotModeSelection(t, e);
                const botModeOverride = e.botModeOverride ?? o("WAWebMaybeGetBotModeSelection").maybeGetBotDynamicModeSelection(t, e) ?? undefined;
                const botMetricsMetadata = o("WAWebBotLoggingUtils").maybeGetBotMetricsMetadata(e);
                const E = babelHelpers.extends({}, e, {
                    messageSecret: (yield b(t, e)) ? self.crypto.getRandomValues(new Uint8Array(32)) : e.messageSecret,
                    agentId: o("WAWebBizAgentAction").getAgentId(e),
                    threadIds: o("WAWebMaybeGetAppendedViewRepliesThreadId").maybeGetAppendedViewRepliesThreadId(babelHelpers.extends({}, e, {
                        threadIds: C
                    })) ?? C,
                    aiThreadInfo: v,
                    botModeSelection,
                    botModeOverride,
                    botMetricsMetadata
                });
                if (h) {
                    E.privacyModeWhenSent = h;
                }
                const k = yield o("WAWebSendMsgChatActionUtils").maybeDisableEphemeralityForMsg(t, E);
                const { msgData, systemMsgs } = k;
                const D = new (o("WAWebMsgModel")).Msg(msgData);
                const x = o("WAWebMsgCollection").MsgCollection.add(D)[0];
                if (x) {
                    let $;
                    l = o("WAWebRichTextFormatMessageSendLogger").maybeCreateRichTextFormatMessageSendCommit(x, t.id);
                    const N = !!(($ = t.groupMetadata) != null && $.isLidAddressingMode);
                    const M = o("WAWebMsgInfoUtils").getGroupMessageSendReporterOptions(t.id, o("WAWebWamMsgUtils").msgIsLid(x, t.id, N));
                    x.wamMessageSendReporter = new (o("WAWebMessageSendReporter")).MessageSendReporter(x, babelHelpers.extends({}, M, {
                        frontendDeps: o("WAWebMessageSendReporterFrontendDeps").MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS
                    }));
                    x.wamMessageSendPerfReporter = new (o("WAWebMessageSendPerfReporter")).MessageSendPerfReporter({
                        chatWid: x.to,
                        mediaType: o("WAWebWamMsgUtils").getWamMediaType(x),
                        messageType: o("WAWebWamMsgUtils").getWamMessageType(x)
                    });
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "_addAndSendMsgToChat before system messages ",
                        ""
                    ])), t.id.toLogString());
                    systemMsgs_1 = yield r("WAWebEmptyChatSystemMsg")(x, t);
                    if (!systemMsgs_1) {
                        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "_addAndSendMsgToChat before ephemeral system messages"
                        ])));
                        const w = o("WAWebBizShowOrderEphemeralSystemAction").getMaybeSystemMsgForOrderEphemeralExemption(x, t);
                        if (w) {
                            systemMsgs_1 = [
                                w
                            ];
                        }
                    }
                    if (systemMsgs) {
                        systemMsgs_1 = [].concat(systemMsgs_1 ?? [], systemMsgs);
                    }
                    const A = o("WAWebSendMsgChatActionUtils").maybeGetOpusSystemMsg(t, "opus-send-msg-fail");
                    if (A) {
                        systemMsgs_1 = [
                            A
                        ].concat(systemMsgs_1 ?? []);
                    }
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "_addAndSendMsgToChat after system messages"
                    ])));
                    const F = systemMsgs_1 ? [].concat(systemMsgs_1, [
                        msgData
                    ]) : [
                        msgData
                    ];
                    x.wamMessageSendPerfReporter?.startSavedStage();
                    return o("WAWebDBProcessMessage").storeMessages(F, t.id).then(()=>{
                        x.wamMessageSendPerfReporter?.postSavedStage();
                        if (o("WAWebThreadMsgUtils").isThreadMsg(msgData)) {
                            o("WAWebDBThreadMetadataBulkHelper").persistNewMessagesThreadMetadataInBulk([
                                msgData
                            ]);
                        }
                        if (x.type === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE) {
                            const t = parseInt(x.inviteCodeExp, 10);
                            const n = x.from.isLid() ? o("WAWebLidMigrationUtils").toLid(x.to) : x.to;
                            if (!n) {
                                const r = o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated();
                                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                                    "[group-invites] isLidMigrated: ",
                                    ""
                                ])), r);
                                const a = "[group-invites] failed to get lid mapping when revoking existing duplicate group invite";
                                o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                                    "",
                                    ""
                                ])), a).sendLogs(a);
                                return;
                            }
                            return o("WAWebDBRevokeInviteV4").revokeGroupInviteV4({
                                expiration: t,
                                from: x.from.toString(),
                                groupId: x.inviteGrp,
                                to: n.toString()
                            }).then(()=>o("WAWebApiGroupInviteV4Store").persistGroupInviteV4Msg(x.id.toString(), {
                                    id: x.id.toString(),
                                    from: x.from.toString(),
                                    to: n.toString(),
                                    groupId: x.inviteGrp,
                                    expiration: t,
                                    expired: o("WATimeUtils").unixTime() >= t
                                }));
                        }
                    }).then(()=>x.waitForPrep().then(()=>{
                            if (systemMsgs_1) {
                                return {
                                    msg: x,
                                    systemMsgs: systemMsgs_1
                                };
                            }
                            return {
                                msg: x
                            };
                        }));
                }
                throw new (o("WAWebMiscErrors")).ModelCreateError("Msg", E);
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })());
        const g = S(t, f.then((e)=>{
            o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.SendMessage);
            return e;
        }));
        const h = i ? g.then(i).then(()=>g) : g;
        const y = R(t, h).then((e)=>{
            if (e.messageSendResult === o("WAWebSendMsgResultAction").SendMsgResult.OK) {
                if (l != null) {
                    l();
                }
            }
            return e;
        });
        return [
            g,
            y
        ];
    }
    function b(e, t) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t.messageSecret != null) {
                return false;
            }
            if (o("WAWebMessagingGatingUtils").isReportingTokenSendingEnabled() && o("WAWebMessagePluginGenerateReportingTokenContent").isMsgTypeReportingTokenCompatible(t.type, t.subtype)) {
                return true;
            }
            return o("WAWebCoexV2RelayEligibility").genIsCoexV2RelayEligibleSend(e.id);
        });
        return v.apply(this, arguments);
    }
    function S(e, t) {
        return e.addQueue.enqueue(t).then((()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ msg, systemMsgs }) {
                msg.wamMessageSendPerfReporter?.startRenderedStage();
                if (systemMsgs) {
                    const i = systemMsgs.map((e)=>new (o("WAWebMsgModel")).Msg(e));
                    e.msgs.add(i);
                }
                const l = e.msgs.add(msg)[0];
                o("WAWebThreadWriteThroughAction").writeThroughToLiveThreads(e, [
                    l
                ]);
                return l;
            });
            return function(e) {
                return t.apply(this, arguments);
            };
        })()).then((t)=>{
            e.createdLocally = false;
            t.wamMessageSendPerfReporter?.postRenderedStage();
            return t;
        });
    }
    function R(e, t) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("sendMessage", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const n = yield e.sendQueue.enqueue(t);
            return o("WAWebSendMsgRecordAction").sendMsgRecord(n);
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    l.addAndSendMsgToChat = f;
    l.resendMsgToChat = g;
    l.addVoipCallLogMsgToChat = h;
}, 98);