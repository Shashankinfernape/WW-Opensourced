__d("WAWebMessageProcessPlaceholder", [
    "Promise",
    "WALogger",
    "WAWebAck",
    "WAWebAdvHostedAccountTypeSystemMsg",
    "WAWebApiDeviceList",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBizCoexUtils",
    "WAWebCheckChatExistsOrCreate",
    "WAWebCurrentUser",
    "WAWebDBProcessMessage",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgTypes.flow",
    "WAWebLimitSharingAcp2HideReceivedMsgs",
    "WAWebMessageDestinationChat",
    "WAWebMessageProcessorCache",
    "WAWebMsgProcessingApiUtils",
    "WAWebMsgType",
    "WAWebProtobufsAdv.pb",
    "WAWebUserPrefsMultiDevice",
    "WAWebWamWorkerOfflineProcessReporter",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const a = t.msgInfo;
            const i = a.chat;
            if (a.category === o("WAWebHandleMsgCommon").MSG_CATEGORY.peer) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[processPlaceHolderMessage] skip peer msg, id=",
                    ""
                ])), a.externalId).tags("messaging");
                return false;
            }
            const l = a.offline != null;
            try {
                let c = [];
                if (i.isUser() && (t.placeholderType === o("WAWebHandleMsgTypes.flow").PlaceholderType.E2E || t.placeholderType === o("WAWebHandleMsgTypes.flow").PlaceholderType.FANOUT)) {
                    const m = o("WAWebUserPrefsMultiDevice").getHaveProcessedCoexAdv() === true ? yield o("WAWebApiDeviceList").getDeviceRecord(a.author) : null;
                    a.placeholderCreatedWhenAccountIsHosted = m?.advAccountType === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED;
                    if (m?.advAccountType === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED && a?.chat?.isUser() === true) {
                        const p = yield o("WAWebBizCoexUtils").shouldCreateFallbackHostedAdvSystemMsgOnPlaceholder(o("WAWebWidFactory").asUserWidOrThrow(a?.author).toString());
                        if (p && !o("WAWebBizCoexUtils").shouldDedupInitialHostedSystemMsg(o("WAWebWidFactory").asUserWidOrThrow(a?.author))) {
                            c = [
                                r("nullthrows")(o("WAWebAdvHostedAccountTypeSystemMsg").genAdvAccountTypeInitialSysMsg(o("WAWebWidFactory").asUserWidOrThrow(a?.author), o("WAWebWidFactory").asUserWidOrThrow(a?.author)))
                            ];
                        }
                    }
                }
                let _ = [];
                if (t.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT) {
                    const f = o("WAWebMsgProcessingApiUtils").generatePlaceholder(t);
                    if (f == null || (f.realType != null, a.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST ? (yield o("WAWebDBProcessMessage").storeMessages([
                        f
                    ], f.id.remote), a.bclParticipants != null && a.edit !== o("WAWebAck").EDIT_ATTR.SENDER_REVOKE && (_ = yield o("WAWebMsgProcessingApiUtils").generateBclMsgs(f, a.bclParticipants))) : _ = [
                        f
                    ], _.length === 0)) {
                        return false;
                    }
                    if (c.length > 0 && a.placeholderCreatedWhenAccountIsHosted === true) {
                        _ = [].concat(c, _);
                    }
                } else {
                    _ = [
                        o("WAWebMsgProcessingApiUtils").genDebugPlaceholderMsg(a, t.nackReason)
                    ];
                }
                const g = _;
                if (g.length === 0) {
                    return false;
                }
                if (t.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT) {
                    const h = yield o("WAWebLimitSharingAcp2HideReceivedMsgs").hideMsgsReceivedInAcp2RestrictedChat({
                        messageType: a.type,
                        msgs: g
                    });
                    if (h.length === 0) {
                        return false;
                    }
                }
                if (t.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT) {
                    if (i.isUser()) {
                        const y = g[0];
                        const C = o("WAWebMessageDestinationChat").determineDestinationChatForIncomingMessage({
                            chat: i,
                            msg: y,
                            msgInfo: a
                        });
                        yield o("WAWebCheckChatExistsOrCreate").checkChatExistsOrCreate({
                            destinationChat: C,
                            msgMeta: t.msgMeta,
                            options: {
                                firstIncomingMsg: y
                            },
                            chatOriginType: "createChatOnNewMsg"
                        });
                    }
                } else {
                    t.type;
                }
                const b = o("WAWebMessageProcessorCache").messageProcessorCache.addMessages(g.map((e)=>({
                        msg: e
                    })), !l).then(()=>{
                    o("WAWebWamWorkerOfflineProcessReporter").WorkerOfflineResumeReporter.updateProcessedMessageCount();
                });
                let v = false;
                if (o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd) {
                    if (o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd) {
                        yield b;
                    }
                    yield (u || (u = n("Promise"))).all(g.map((()=>{
                        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                            const t = e.kind !== o("WAWebMsgType").MsgKind.PlaceholderAddon && (!i.isStatus() || o("WAWebCurrentUser").isEmployee());
                            if (t) {
                                v = true;
                                const n = e.id.remote;
                                yield o("WAWebBackendApi").frontendSendAndReceive("updateMessageUI", {
                                    chatId: n,
                                    msg: e
                                });
                            }
                        });
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    })()));
                }
                return v;
            } catch (e) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "processPlaceholderMsg: msgId::",
                    ", failed with error: ",
                    ""
                ])), a.externalId, e).tags("messaging").sendLogs("handle_msg: error storing/processing single message");
                return false;
            }
        });
        return d.apply(this, arguments);
    }
    l.processPlaceholderMessage = c;
}, 98);