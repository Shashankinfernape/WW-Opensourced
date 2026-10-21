__d("WAWebHandleRetryRequest", [
    "Promise",
    "WAJids",
    "WALogger",
    "WAWebAddonRetryRequestUtils",
    "WAWebAeaRollout",
    "WAWebApiContact",
    "WAWebApiDeviceList",
    "WAWebHandleRetryRequestNonMigratedLog",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebMaibaWASSMigration",
    "WAWebManageE2ESessionsJob",
    "WAWebMdRetryFromUnknownDeviceWamEvent",
    "WAWebMessageQueue",
    "WAWebMessageQueueTimeout",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebOutgoingMessage",
    "WAWebPostMessageHighRetryCountMetric",
    "WAWebProcessRetryKeyBundle",
    "WAWebSchemaChat",
    "WAWebSchemaMessage",
    "WAWebSendMsgQueueMap",
    "WAWebSendRetryMsgJob",
    "WAWebSessionScope",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebStatusSessionGatingUtils",
    "WAWebUpdateLocalSignalSession",
    "WAWebUserPrefsMeUser",
    "WAWebVoipStackInterface",
    "WAWebWamEnumDeviceType",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "cr:10198",
    "cr:627",
    "getErrorSafe",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
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
    let C;
    let b;
    let v;
    let S;
    let R;
    let L;
    let E;
    function k(e) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield N(e);
            if (t.error) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "handleMessageRetryRequest: no chat info found for incoming retry request. error: ",
                    ""
                ])), t.error).sendLogs((yield o("WAWebHandleRetryRequestNonMigratedLog").buildNoChatInfoSendLogsArg(e)));
                return;
            }
            const { accountLid, chat, from, lidOrigin } = t;
            const e_from = e.from;
            e.from = from;
            const { participant, recipient, retryCount, type } = e;
            return o("WAWebMessageQueue").onMessageQueue({
                chatWid: chat,
                isOffline: false,
                msgCategory: null,
                action: (()=>{
                    const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                        try {
                            const t = e_from.isStatus() || chat.isStatus();
                            const s = T(e, t) ? yield o("WAWebProcessRetryKeyBundle").loadGroupSentMessage(chat, e.originalMsgId) : null;
                            const y = s?.msgRecord.data.isGroupStatus === true;
                            const C = t || y;
                            const b = C ? o("WAWebStatusSessionGatingUtils").getStatusSessionScope() : o("WAWebSessionScope").SessionScope.DEFAULT;
                            const v = C ? b : undefined;
                            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "handleRetryRequest: receivedFrom=",
                                " chat=",
                                " sessionScope=",
                                ""
                            ])), e_from.toLogString(), chat.toLogString(), b);
                            const S = yield $(chat, e, b);
                            if (S == null) {
                                return;
                            }
                            const { identity, isLidBot, originalMsgId, previousIdentityKey, requester } = S;
                            if (!(r("gkx")("26258") || n("cr:10198") == null)) {
                                n("cr:10198").injectDebug(chat, "RetryReceiptReceived", `originalMsgId:${originalMsgId} - requester:${requester.toString()}`);
                            }
                            if (type === "enc_rekey_retry") {
                                const x = yield o("WAWebVoipStackInterface").getVoipStackInterface();
                                yield x?.resendEncRekeyRetry(from.toString({
                                    legacy: true
                                }), retryCount);
                            } else if (type !== "voip_1x1_retry") {
                                let P = yield o("WAWebProcessRetryKeyBundle").getMsgIfAuthorized({
                                    chat,
                                    identity,
                                    loadedSentMessage: s ?? undefined,
                                    originalMsgId,
                                    requester,
                                    retryCount,
                                    sessionScope: v
                                });
                                const N = P == null ? o("WAWebApiContact").getAlternateDeviceWid(o("WAWebWidFactory").createDeviceWidFromWidOrThrow(requester)) : null;
                                if (N) {
                                    P = yield o("WAWebProcessRetryKeyBundle").getMsgIfAuthorized({
                                        chat,
                                        identity,
                                        originalMsgId,
                                        requester: N,
                                        retryCount,
                                        sessionScope: v
                                    });
                                }
                                if (P == null) {
                                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                        "handleMessageRetryRequest retry not authorized"
                                    ])));
                                    return;
                                }
                                const M = P;
                                const { msgRecord, retryContext } = M;
                                const F = previousIdentityKey == null || previousIdentityKey !== identity?.identityKey || P.isIdentityChangedSinceSend;
                                if (yield D(chat, requester, msgRecord, F)) {
                                    return;
                                }
                                const O = {
                                    to: e_from,
                                    participant,
                                    msgRecord,
                                    retryContext,
                                    retryCount,
                                    isLidBot,
                                    sessionScope: b
                                };
                                if (recipient) {
                                    O.recipient = recipient;
                                }
                                if (lidOrigin) {
                                    O.lidOrigin = lidOrigin;
                                }
                                if (accountLid) {
                                    O.accountLid = accountLid;
                                }
                                yield o("WAWebSendRetryMsgJob").sendRetry(O);
                            }
                        } catch (error) {
                            o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                "handleMessageRetryRequest error: ",
                                ""
                            ])), error);
                        }
                    });
                    function s() {
                        return t.apply(this, arguments);
                    }
                    return s;
                })()
            }).catch((e)=>o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(e, "retry_request"));
        });
        return I.apply(this, arguments);
    }
    function T({ retryCount, type }, t) {
        return !t && retryCount < o("WAWebPostMessageHighRetryCountMetric").MAX_RETRY && type !== "enc_rekey_retry" && type !== "voip_1x1_retry";
    }
    function D(e, t, n, r) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*(recipient, t, a, isIdentityChangedSinceSend) {
            if (n("cr:627") == null || !recipient.isRegularUser() || o("WAWebUserPrefsMeUser").isMeAccount(t)) {
                return false;
            }
            try {
                const l = yield n("cr:627").isAeaRetryBlocked({
                    recipient,
                    message: o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(o("WAWebOutgoingMessage").OutgoingMessageOriginType.Retry, a),
                    isBotFeedbackMessage: o("WAWebMsgGetters").getIsBotFeedbackMessage(a.data),
                    isIdentityChangedSinceSend
                });
                if (l) {
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[aea] retry blocked for ",
                        ""
                    ])), t.toLogString());
                }
                return l;
            } catch (error) {
                o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[aea] retry check failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("aea-retry-check-fail");
                return o("WAWebAeaRollout").isAeaEnforcementEnabled();
            }
        });
        return x.apply(this, arguments);
    }
    function $(e, t, n) {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r) {
            const { from, isLid } = t;
            const isLidBot = isLid === undefined ? false : isLid;
            const { offline, originalMsgId, participant, retryCount } = t;
            if (retryCount >= o("WAWebPostMessageHighRetryCountMetric").MAX_RETRY) {
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "handleRetryRequest refusing retry attempt #",
                    " for ",
                    ""
                ])), retryCount, e.toLogString()).sendLogs("retry-request-cap-exhausted", {
                    sampling: 0.01
                });
                return;
            }
            const m = e.isUser() ? from : participant;
            if (!m) {
                o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "handleRetryRequest: no requester found for incoming retry request."
                ])));
                return;
            }
            const p = m.device || 0;
            try {
                const C = yield o("WAWebApiDeviceList").hasDevice(m, p);
                if (!C) {
                    o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "handleRetryRequest: device ",
                        " not found for ",
                        ""
                    ])), p, m.user);
                    o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                        "handleRetryRequest: no device found for isUser:",
                        " lid:",
                        " isLidBot:",
                        ""
                    ])), e.isUser(), m.isLid(), isLidBot).sendLogs("no-device-found-for-retry-request", {
                        sampling: 0.001
                    });
                    new (o("WAWebMdRetryFromUnknownDeviceWamEvent")).MdRetryFromUnknownDeviceWamEvent({
                        offline,
                        senderType: p === o("WAJids").DEFAULT_DEVICE_ID ? o("WAWebWamEnumDeviceType").DEVICE_TYPE.PRIMARY : o("WAWebWamEnumDeviceType").DEVICE_TYPE.COMPANION
                    }).commit();
                    return;
                }
                return yield o("WAWebSendMsgQueueMap").sendMsgQueueMap.enqueue(e.toString(), n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const n = yield o("WAWebSignalProtocolStore").getPersistSignalProtocolStore().getIdentityWithRowId(o("WAWebSignalCommonUtils").createSignalAddress(m));
                    yield o("WAWebUpdateLocalSignalSession").updateLocalSignalSession(e, t, r);
                    yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                        identityChanged: false,
                        sessionScope: r,
                        wids: [
                            m
                        ]
                    });
                    const identity = yield o("WAWebSignalProtocolStore").getPersistSignalProtocolStore().getIdentityWithRowId(o("WAWebSignalCommonUtils").createSignalAddress(m));
                    return {
                        originalMsgId,
                        chat: e,
                        requester: m,
                        isLidBot,
                        identity,
                        previousIdentityKey: n?.identityKey
                    };
                }));
            } catch (error) {
                o("WALogger").WARN(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "handleRetryRequest error: ",
                    ""
                ])), error);
            }
        });
        return P.apply(this, arguments);
    }
    function N(e) {
        return M.apply(this, arguments);
    }
    function M() {
        M = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            let i = F(e);
            o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                "getActualChatInfo: retry request from ",
                ", target chat: ",
                ", type: ",
                ",\n      participant: ",
                ", recipient: ",
                ""
            ])), e.from.toLogString(), i?.toLogString(), e.type, e.participant?.toLogString(), e.recipient?.toLogString());
            if (i == null) {
                o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                    "getActualChatInfo: no target chat found"
                ])));
                return {
                    error: "no_target_chat"
                };
            }
            i = o("WAWebSimpleSignalPNToFBIDMigration").maybeReplaceFbidWithDeprecatedBotPn(i);
            i = o("WAWebMaibaWASSMigration").resolveMaibaAiHubFbidToLidOrChatId(i);
            if (i.isUser()) {
                o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                    "getActualChatInfo: this is a user chat"
                ])));
                const l = !o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() && i.isLid();
                if (o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() || l) {
                    o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                        "getActualChatInfo: in migrated/pre-migrated flow"
                    ])));
                    const u = new (r("WAWebMsgKey"))({
                        fromMe: true,
                        remote: i,
                        id: e.originalMsgId
                    });
                    const c = [
                        u,
                        o("WAWebLidMigrationUtils").getAlternateMsgKey(u)
                    ].filter(Boolean);
                    let d;
                    if (e.type === "retry") {
                        const m = yield w(c, e.originalMsgId);
                        if (m == null) {
                            o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                                "getActualChatInfo: could not find messages"
                            ])));
                            return {
                                error: o("WAWebHandleRetryRequestNonMigratedLog").selectRetryErrorType(e)
                            };
                        }
                        d = m;
                    } else {
                        e.type;
                        d = e.from;
                    }
                    let p;
                    if (e.from.isBot()) {
                        p = e.from;
                    } else {
                        const _ = o("WAWebWidFactory").asUserWidOrThrow(e.from);
                        p = d.isLid() ? o("WAWebLidMigrationUtils").toLid(_) : o("WAWebLidMigrationUtils").toPn(_);
                    }
                    if (p == null) {
                        return {
                            error: "empty_from_user"
                        };
                    }
                    const f = o("WAWebWidFactory").createDeviceWidFromUserAndDevice(p.user, p.server, e.from.device ?? 0);
                    const g = yield o("WAWebSchemaChat").getChatTable().get(d.toString());
                    const lidOrigin = g?.lidOriginType;
                    const y = g?.accountLid != null ? o("WAWebWidFactory").createWidFromWidLike(g.accountLid) : undefined;
                    return {
                        chat: d,
                        from: f,
                        lidOrigin,
                        accountLid: y
                    };
                }
            }
            return {
                chat: i,
                from: e.from
            };
        });
        return M.apply(this, arguments);
    }
    function w(e, t) {
        return A.apply(this, arguments);
    }
    function A() {
        A = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const a = (yield o("WAWebSchemaMessage").getMessageTable().bulkGet(e.map((e)=>e.toString()), false)).filter(Boolean);
            if (a.length > 1) {
                o("WALogger").WARN(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                    "getActualChatInfo: multiple messages found"
                ])));
            }
            if (a.length > 0) {
                return o("WAWebWidFactory").createWidFromWidLike(a[0].to);
            }
            const i = yield (E || (E = n("Promise"))).all(e.map((e)=>o("WAWebAddonRetryRequestUtils").getSentAddonMsgRecord(e)));
            return i.find(Boolean)?.msgData.id.remote;
        });
        return A.apply(this, arguments);
    }
    function F(t) {
        const { from, recipient } = t;
        if (from.isBot() && recipient != null) {
            return recipient;
        }
        if (from.isUser()) {
            const a = o("WAWebWidFactory").asUserWidOrThrow(from);
            if (o("WAWebUserPrefsMeUser").isMeAccount(a)) {
                if (!recipient) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "getTargetChat: from is a peer device, but without recipient, isLid: ",
                        ", peer device: ",
                        ", retryCount: ",
                        ", hasKeyBundle: ",
                        ""
                    ])), from.isLid(), from.device ?? "primary", t.retryCount, t.keyBundle != null);
                    return null;
                }
                return recipient;
            }
            return o("WAWebWidFactory").asUserWidOrThrow(a);
        }
        return from;
    }
    l.handleRetryRequest = k;
    l.getTargetChat = F;
}, 98);