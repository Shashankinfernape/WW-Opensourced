__d("WAWebKeepInChatMsgAction", [
    "fbt",
    "Promise",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebAssociationProcessor",
    "WAWebAssociationProcessorConstants",
    "WAWebChatCollection",
    "WAWebChatEphemerality",
    "WAWebChatGetters",
    "WAWebChatSendMessages",
    "WAWebChatThreadLogging",
    "WAWebDBDeleteAssociatedMsgsByMsgKey",
    "WAWebDBMarkFutureproofMessagesReparsed",
    "WAWebDBMsgUtils",
    "WAWebDBProcessMessage",
    "WAWebDBStoreMessageOrphans",
    "WAWebDBUpdateMessageTable",
    "WAWebDisappearingMessageKeepInChatWamEvent",
    "WAWebEphemeralConstants",
    "WAWebEphemeralKeepInChatUtils",
    "WAWebEphemeralKeepInChatWamUtils",
    "WAWebFrontendMsgGetters",
    "WAWebKeepInChatMsgUtils",
    "WAWebKeepInChatPerfWamEvent",
    "WAWebKicNux.react",
    "WAWebLidMigrationUtils",
    "WAWebMessageSendPerfReporter",
    "WAWebMessageSendReporter",
    "WAWebMessageSendReporterFrontendDeps",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgInfoUtils",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgModelFromData",
    "WAWebMsgModelUtils",
    "WAWebMsgType",
    "WAWebNotificationController",
    "WAWebNotificationsKeepInChatNotification",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebProtobufsE2E.pb",
    "WAWebSendMsgRecordAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWamEnumKicActionNameType",
    "WAWebWamEnumKicActorType",
    "WAWebWamEnumKicErrorCodeType",
    "WAWebWamEnumKicRequestTypeType",
    "WAWebWamEnumResponseType",
    "WAWebWamEnumTriggerType",
    "WAWebWamMsgUtils",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    const C = y || (y = o("react"));
    function b(e, t, n) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r) {
            const a = [];
            a.push(o("WAWebDBUpdateMessageTable").updateMessageTable(e, babelHelpers.extends({}, t, {
                kicKey: t.kicKey.toString()
            })));
            let i = false;
            if (r != null) {
                const l = o("WAWebAssociationProcessor").getAssociationProcessorByAssociationType(r);
                if (l && l.processorType === o("WAWebAssociationProcessorConstants").AssociationProcessorType.WithDetachedMessages) {
                    i = true;
                }
            }
            if (i) {
                a.push(o("WAWebDBDeleteAssociatedMsgsByMsgKey").bulkDeleteMessagesByMsgKeys([
                    e.toString()
                ]));
            }
            yield (h || (h = n("Promise"))).all(a);
            const s = o("WAWebMsgCollection").MsgCollection.get(e);
            if (s) {
                if (i) {
                    s.detachAssociatedMsg();
                }
                s.set(t);
            }
        });
        return v.apply(this, arguments);
    }
    function S({ keptCount, kicKey, kicTimestampMs, msgToKeepAssociationType, msgToKeepKey }) {
        let l = {
            kicState: o("WAWebEphemeralConstants").KeepInChatState.KEPT,
            kicKey,
            kicTimestampMs,
            keptCount
        };
        if (msgToKeepAssociationType != null) {
            const s = o("WAWebAssociationProcessor").getAssociationProcessorByAssociationType(msgToKeepAssociationType);
            if (s?.processorType === o("WAWebAssociationProcessorConstants").AssociationProcessorType.WithDetachedMessages) {
                l = babelHelpers.extends({}, l, {
                    viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                    associationType: null,
                    parentMsgKey: null
                });
            }
        }
        return b(msgToKeepKey, l, msgToKeepAssociationType);
    }
    function R(e, kicKey, kicTimestampMs) {
        const r = {
            kicState: o("WAWebEphemeralConstants").KeepInChatState.UNKEPT,
            kicKey,
            kicTimestampMs
        };
        return b(e, r);
    }
    function L(e, t, n) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, keepType, kicEntryPoint) {
            let l;
            let s;
            const p = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
            const _ = o("WAWebFrontendMsgGetters").getChat(t);
            const f = new (r("WAWebMsgKey"))({
                fromMe: true,
                remote: _.id,
                id: yield r("WAWebMsgKey").newId(),
                participant: o("WAWebChatGetters").getIsGroup(_) ? p : undefined
            });
            const g = o("WATimeUtils").unixTimeMs();
            const h = {
                id: f,
                from: p,
                to: _.id,
                t: o("WATimeUtils").unixTime(),
                type: o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                kind: o("WAWebMsgType").MsgKind.KeepInChat,
                keepType,
                keptMessageKey: t.id,
                senderTimestampMs: g,
                ack: o("WAWebAck").ACK.CLOCK
            };
            const y = new (o("WAWebMsgModel")).Msg(h);
            const C = !!((l = _.groupMetadata) != null && l.isLidAddressingMode);
            const b = o("WAWebMsgInfoUtils").getGroupMessageSendReporterOptions(_.id, o("WAWebWamMsgUtils").msgIsLid(y, _.id, C));
            y.wamMessageSendReporter = new (o("WAWebMessageSendReporter")).MessageSendReporter(y, babelHelpers.extends({}, b, {
                frontendDeps: o("WAWebMessageSendReporterFrontendDeps").MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS
            }));
            y.wamMessageSendPerfReporter = new (o("WAWebMessageSendPerfReporter")).MessageSendPerfReporter({
                chatWid: y.to,
                mediaType: o("WAWebWamMsgUtils").getWamMediaType(y),
                messageType: o("WAWebWamMsgUtils").getWamMessageType(y)
            });
            const isAGroup = o("WAWebMsgGetters").getIsGroupMsg(t);
            const isAdmin = isAGroup ? !!(!((s = _.groupMetadata) == null || (s = s.participants.get(p)) == null) && s.isAdmin) : undefined;
            const E = {
                isAGroup,
                messagesSelected: 1,
                mediaType: o("WAWebWamMsgUtils").getWamMediaType(t),
                chatEphemeralityDuration: o("WAWebChatEphemerality").getEphemeralSetting(_) ?? 0,
                kicActor: o("WAWebMsgGetters").getIsSentByMe(t) ? o("WAWebWamEnumKicActorType").KIC_ACTOR_TYPE.SENDER : o("WAWebWamEnumKicActorType").KIC_ACTOR_TYPE.RECIPIENT,
                kicEntryPoint,
                canEditDmSettings: o("WAWebChatGetters").getIsGroup(_) ? _.groupMetadata?.canSetEphemeralSetting() : true,
                threadId: yield o("WAWebChatThreadLogging").getChatThreadID(_.id.toJid()),
                isAdmin
            };
            y.wamMessageSendPerfReporter?.startRenderedStage();
            switch(keepType){
                case o("WAWebProtobufsE2E.pb").KeepType.KEEP_FOR_ALL:
                    {
                        const I = (t.keptCount || 0) + 1;
                        yield S({
                            keptCount: I,
                            kicKey: f,
                            kicTimestampMs: g,
                            msgToKeepAssociationType: t.associationType,
                            msgToKeepKey: t.id
                        });
                        const T = new (o("WAWebDisappearingMessageKeepInChatWamEvent")).DisappearingMessageKeepInChatWamEvent(babelHelpers.extends({}, E, {
                            kicActionName: o("WAWebWamEnumKicActionNameType").KIC_ACTION_NAME_TYPE.KEEP_MESSAGE,
                            keptCount: I
                        }));
                        T.commit();
                        break;
                    }
                case o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL:
                    {
                        yield R(t.id, f, g);
                        const x = new (o("WAWebDisappearingMessageKeepInChatWamEvent")).DisappearingMessageKeepInChatWamEvent(babelHelpers.extends({}, E, {
                            kicActionName: o("WAWebWamEnumKicActionNameType").KIC_ACTION_NAME_TYPE.UNKEEP_MESSAGE,
                            keptDelta: k(t.kicTimestampMs),
                            messageExpiryTimer: o("WAWebMsgModelUtils").getMsgTimeUntilExpiration(t) ?? 0,
                            messageExpiredOnUnkeep: o("WAWebKeepInChatMsgUtils").isExpired(t),
                            keptCount: t.keptCount
                        }));
                        x.commit();
                        break;
                    }
                default:
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "sendKeepInChatMessage: trying to send unknown keepType ",
                        ""
                    ])), keepType).sendLogs("sending-unknown-keeptype");
                    break;
            }
            y.wamMessageSendPerfReporter?.postRenderedStage();
            return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("sendMessage", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                y.wamMessageSendPerfReporter?.startSavedStage();
                yield o("WAWebDBProcessMessage").storeMessages([
                    h
                ], o("WAWebFrontendMsgGetters").getChat(y).id);
                y.wamMessageSendPerfReporter?.postSavedStage();
                const n = yield o("WAWebSendMsgRecordAction").sendMsgRecord(y);
                return n;
            }), {
                priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
            }).waitUntilCompleted();
        });
        return E.apply(this, arguments);
    }
    function k(kicTimestampMs) {
        return Math.round((o("WATimeUtils").unixTime() - r("nullthrows")(kicTimestampMs) / 1000) / 3600);
    }
    function I(e, t) {
        return L(e, o("WAWebProtobufsE2E.pb").KeepType.KEEP_FOR_ALL, t);
    }
    function T(e, t, n) {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = yield L(e, o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL, n);
            if (t?.deleteExpired && o("WAWebKeepInChatMsgUtils").isExpired(e)) {
                o("WAWebToastManager").ToastManager.open(C.jsx(o("WAWebToast.react").Toast, {
                    msg: s._("Message disappeared.")
                }));
                yield o("WAWebChatSendMessages").sendDeleteMsgs({
                    chat_: o("WAWebFrontendMsgGetters").getChat(e),
                    clearMedia: true,
                    record: {
                        type: "message",
                        list: [
                            e
                        ]
                    }
                });
            }
            return r;
        });
        return D.apply(this, arguments);
    }
    function x(e, t) {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            yield (h || (h = n("Promise"))).all(e.map((e)=>P(e, {
                    allowNotification: false
                })));
        });
        return $.apply(this, arguments);
    }
    function P(e, t) {
        return N.apply(this, arguments);
    }
    function N() {
        N = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { allowNotification }) {
            const keepInChatMessage = o("WAWebMsgModelFromData").msgModelFromMsgData(e);
            let i = yield o("WAWebDBMsgUtils").getMsgByMsgKey(keepInChatMessage.keptMessageKey);
            if (i == null) {
                const l = o("WAWebLidMigrationUtils").getAlternateMsgKey(keepInChatMessage.keptMessageKey);
                if (l) {
                    i = yield o("WAWebDBMsgUtils").getMsgByMsgKey(l);
                    if (i) {
                        keepInChatMessage.id = new (r("WAWebMsgKey"))({
                            fromMe: keepInChatMessage.id.fromMe,
                            remote: i.id.remote,
                            id: keepInChatMessage.id.id,
                            participant: keepInChatMessage.id.participant
                        });
                    }
                }
            }
            const s = o("WAWebChatCollection").ChatCollection.get(keepInChatMessage.id.remote);
            const kicSender = o("WAWebWidFactory").asUserWidOrThrow(r("nullthrows")(o("WAWebMsgGetters").getSender(keepInChatMessage)));
            let y;
            if (s) {
                y = yield o("WAWebChatThreadLogging").getChatThreadID(s.id.toJid());
            }
            if (i == null || i.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN) {
                if (!i) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "KIC: cannot find associated message"
                    ])));
                    M(keepInChatMessage, s, y);
                }
                yield o("WAWebDBStoreMessageOrphans").storeMessageOrphans([
                    keepInChatMessage
                ], function(e) {
                    return e.keptMessageKey;
                });
                return;
            }
            const C = o("WAWebWidFactory").asUserWidOrThrow(r("nullthrows")(o("WAWebMsgGetters").getSender(i)));
            const b = r("WAWebWid").equals.apply(r("WAWebWid"), o("WAWebLidMigrationUtils").toCommonAddressingMode(kicSender, C));
            const v = b && keepInChatMessage.keepType === o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL;
            if (s != null && o("WAWebChatGetters").getIsGroup(s) && o("WAWebKeepInChatMsgUtils").keepIsLockedForUser(keepInChatMessage, kicSender) && v !== true) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "KIC: incoming KIC by a restricted group member"
                ])));
                return;
            }
            if (i.isRevoke) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "KIC: msg revoked, cannot keep/unkeep"
                ])));
                w(keepInChatMessage, i, s, y);
                return;
            }
            if (i.kicKey != null && i.kicTimestampMs != null) {
                const L = {
                    id: i.kicKey,
                    senderTimestampMs: i.kicTimestampMs
                };
                if (o("WAWebEphemeralKeepInChatUtils").compareKeepInChatMessages(keepInChatMessage, L) === -1) {
                    o("WAWebEphemeralKeepInChatWamUtils").logOlderRequestKic(keepInChatMessage);
                    o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "KIC: incoming msg behind stored KIC fields"
                    ])));
                    return;
                }
            }
            if (o("WAWebEphemeralKeepInChatUtils").kicSenderSuperPowerActive(i) && !b) {
                o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "KIC: dropped, sender super power: ",
                    " - ",
                    ""
                ])), keepInChatMessage.id, i.id);
                return;
            }
            switch(keepInChatMessage.keepType){
                case o("WAWebProtobufsE2E.pb").KeepType.KEEP_FOR_ALL:
                    {
                        if (allowNotification) {
                            const parentMessage = o("WAWebMsgCollection").MsgCollection.get(keepInChatMessage.keptMessageKey) ?? o("WAWebMsgCollection").MsgCollection.get(i.id);
                            if (parentMessage != null) {
                                const I = function() {
                                    if (s && o("WAWebKicNux.react").shouldShowKicNux(s)) {
                                        o("WAWebKicNux.react").openKicNux(s, o("WAWebWamEnumTriggerType").TRIGGER_TYPE.USER_MESSAGE_KEPT);
                                    }
                                };
                                o("WAWebNotificationController").WANotificationController.triggerNotification(new (o("WAWebNotificationsKeepInChatNotification")).WAKeepInChatNotification({
                                    keepInChatMessage,
                                    kicSender,
                                    parentMessage,
                                    onClick: I
                                })).catch((e)=>{
                                    o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                                        "KIC: triggerNotification failed"
                                    ]))).catching(r("getErrorSafe")(e)).sendLogs("kic-trigger-notification-failed");
                                });
                            } else {
                                o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                                    "KIC: cannot find parent message model!"
                                ])));
                            }
                        }
                        const T = (i.keptCount || 0) + 1;
                        yield S({
                            keptCount: T,
                            kicKey: keepInChatMessage.id,
                            kicTimestampMs: r("nullthrows")(keepInChatMessage.senderTimestampMs),
                            msgToKeepAssociationType: i.associationType,
                            msgToKeepKey: i.id
                        });
                        yield o("WAWebDBMarkFutureproofMessagesReparsed").markFutureproofMessagesReparsed([
                            keepInChatMessage.id.toString()
                        ]);
                        A(keepInChatMessage, i, o("WAWebWamEnumKicRequestTypeType").KIC_REQUEST_TYPE_TYPE.KEEP, s, y);
                        break;
                    }
                case o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL:
                    yield R(i.id, keepInChatMessage.id, r("nullthrows")(keepInChatMessage.senderTimestampMs));
                    yield o("WAWebDBMarkFutureproofMessagesReparsed").markFutureproofMessagesReparsed([
                        keepInChatMessage.id.toString()
                    ]);
                    A(keepInChatMessage, i, o("WAWebWamEnumKicRequestTypeType").KIC_REQUEST_TYPE_TYPE.UNKEEP, s, y);
                    break;
                default:
                    o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "KIC: unknown keepType ",
                        ""
                    ])), keepInChatMessage).sendLogs("processed-unknown-keeptype");
                    break;
            }
        });
        return N.apply(this, arguments);
    }
    function M(keepInChatMessage, t, n) {
        const r = new (o("WAWebKeepInChatPerfWamEvent")).KeepInChatPerfWamEvent({
            response: o("WAWebWamEnumResponseType").RESPONSE_TYPE.ERROR,
            requestSendTime: keepInChatMessage.t,
            kicErrorCode: o("WAWebWamEnumKicErrorCodeType").KIC_ERROR_CODE_TYPE.MESSAGE_MISSING,
            chatEphemeralityDuration: t && o("WAWebChatEphemerality").getEphemeralSetting(t) || 0
        });
        if (n != null) {
            r.set({
                threadId: n
            });
        }
        const a = o("WAWebEphemeralKeepInChatWamUtils").parseKeepTypeToMetric(keepInChatMessage.keepType);
        if (a) {
            r.set({
                kicRequestType: a
            });
        }
        r.commit();
    }
    function w(keepInChatMessage, t, n, r) {
        const a = new (o("WAWebKeepInChatPerfWamEvent")).KeepInChatPerfWamEvent({
            response: o("WAWebWamEnumResponseType").RESPONSE_TYPE.ERROR,
            requestSendTime: keepInChatMessage.t,
            kicErrorCode: o("WAWebWamEnumKicErrorCodeType").KIC_ERROR_CODE_TYPE.MESSAGE_REVOKED,
            kicMessageEphemeralityDuration: t?.ephemeralDuration || 0,
            chatEphemeralityDuration: n && o("WAWebChatEphemerality").getEphemeralSetting(n) || 0
        });
        const i = o("WAWebEphemeralKeepInChatWamUtils").parseKeepTypeToMetric(keepInChatMessage.keepType);
        if (i) {
            a.set({
                kicRequestType: i
            });
        }
        if (r != null) {
            a.set({
                threadId: r
            });
        }
        a.commit();
    }
    function A(keepInChatMessage, t, kicRequestType, r, a) {
        const i = new (o("WAWebKeepInChatPerfWamEvent")).KeepInChatPerfWamEvent({
            kicRequestType,
            response: o("WAWebWamEnumResponseType").RESPONSE_TYPE.SUCCESS,
            requestSendTime: keepInChatMessage.t,
            kicErrorCode: o("WAWebWamEnumKicErrorCodeType").KIC_ERROR_CODE_TYPE.NONE,
            kicMessageEphemeralityDuration: t?.ephemeralDuration || 0,
            chatEphemeralityDuration: r && o("WAWebChatEphemerality").getEphemeralSetting(r) || 0
        });
        if (a != null) {
            i.set({
                threadId: a
            });
        }
        i.commit();
    }
    l.keepMessage = I;
    l.undoKeepMessage = T;
    l.processKeepInChatMessages = x;
    l.processKeepInChatMessage = P;
}, 226);