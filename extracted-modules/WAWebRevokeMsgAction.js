__d("WAWebRevokeMsgAction", [
    "Promise",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebAddonProcessRevoke",
    "WAWebApiChat",
    "WAWebAssociationProcessor",
    "WAWebAssociationProcessorConstants",
    "WAWebBotBaseGating",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebCmd",
    "WAWebCoexEditDeleteAlertUtils",
    "WAWebDBProcessMessage",
    "WAWebDBProcessRevokeMsgs",
    "WAWebErrorType",
    "WAWebFrontendMsgGetters",
    "WAWebFtsClient",
    "WAWebMedia",
    "WAWebMessageSendPerfReporter",
    "WAWebMsgActionCapability",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgModelUtils",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebOpenCoexEditDeleteAlertModal",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebRequestDeleteAddOns",
    "WAWebRevoke",
    "WAWebSendMsgRecordAction",
    "WAWebSendMsgResultAction",
    "WAWebSendRevokeMessageWamEvent",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebStateUtils",
    "WAWebUpdateLastAddOnPreviewChatAction",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebWamMsgUtils",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    function f(e, t, n, r) {
        const e_data = e.data;
        const u = o("WAWebFrontendMsgGetters").getChat(e_data);
        const c = u?.id?.toString() ?? "";
        const d = u?.contact?.isHosted === true;
        const m = o("WAWebUserPrefsMultiDevice").getIsHostedMeAccountFromLocalStorage() === true;
        const p = e.type === "message" ? h({
            clearMedia: n,
            record: {
                type: "message",
                data: o("WAWebStateUtils").unproxy(e.data)
            },
            type: t,
            viewMode: r
        }) : h({
            clearMedia: n,
            record: e,
            type: t,
            viewMode: r
        });
        return p.then((e)=>{
            if (e.messageSendResult === o("WAWebSendMsgResultAction").SendMsgResult.OK && o("WAWebCoexEditDeleteAlertUtils").shouldShowCoexDeleteAlert(c, d)) {
                o("WAWebCoexEditDeleteAlertUtils").markCoexDeleteAlertShown(c);
                o("WAWebOpenCoexEditDeleteAlertModal").openCoexDeleteAlertModal(m);
            }
            return e;
        });
    }
    function g(e, t) {
        return L(o("WAWebStateUtils").unproxy(e), t);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ clearMedia, isAssociatedBotPluginRevoke = false, record, type, viewMode = o("WAWebViewMode.flow").ViewModeType.VISIBLE }) {
            const record_data = record.data;
            if (type === o("WAWebCmd").Revoke.Sender && !record_data.id.fromMe && !o("WAWebMsgActionCapability").canBotResponseBeRevokeByInvoker(record_data)) {
                return (_ || (_ = n("Promise"))).reject(r("err")("revoking received message"));
            }
            const y = record_data.id.remote.isGroup() && record.type === "addon" ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow() : o("WAWebUserPrefsMeUser").getMeUserOrThrow();
            const C = record_data.id.remote.isGroup() && o("WAWebFrontendMsgGetters").getChat(record_data).groupMetadata?.isLidAddressingMode;
            let b;
            if (record_data.id.remote.isGroup()) {
                b = C === true ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow() : y;
            }
            const L = new (r("WAWebMsgKey"))({
                id: yield r("WAWebMsgKey").newId(),
                remote: record_data.id.remote,
                fromMe: true,
                participant: b
            });
            const E = R(type);
            const k = o("WATimeUtils").unixTime();
            const I = k - o("WAWebMsgGetters").getT(record_data);
            const T = {
                id: L,
                from: C === true ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow() : y,
                to: record_data.id.remote,
                author: b,
                t: k,
                type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                kind: o("WAWebMsgType").MsgKind.ProtocolRevoke,
                subtype: R(type),
                protocolMessageKey: record_data.id,
                clearMedia: !!clearMedia,
                local: true,
                revokeDuration: I,
                revokeTimestamp: k,
                viewMode
            };
            if (record.type === "addon") {
                return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("sendMessage", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const record_data_1 = record.data;
                    if (record_data_1.kind !== o("WAWebMsgType").MsgKind.CommentDecrypted) {
                        throw r("err")("_sendRevoke: only decrypted comment can be revoked from the UI");
                    }
                    const t = babelHelpers.extends({}, T, {
                        kind: o("WAWebMsgType").MsgKind.ProtocolAddonRevoke,
                        targetMessageKey: record_data_1.parentMsgKey,
                        revokeAddonType: record_data_1.type
                    });
                    const n = yield o("WAWebSendMsgRecordAction").sendAddonRecord(t);
                    const n_messageSendResult = n.messageSendResult;
                    if (n_messageSendResult === o("WAWebSendMsgResultAction").SendMsgResult.OK) {
                        new (o("WAWebSendRevokeMessageWamEvent")).SendRevokeMessageWamEvent({
                            messageType: o("WAWebWamMsgUtils").getWamMessageType(record_data),
                            messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(record_data),
                            revokeSendDelay: I
                        }).commit();
                        yield o("WAWebAddonProcessRevoke").processSentRevokeMsg(babelHelpers.extends({}, t, {
                            t: o("WAWebMsgGetters").getT(record_data),
                            ack: o("WAWebAck").ACK.SENT
                        }), record_data_1);
                    } else {
                        o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "failed to send revoke addon"
                        ]))).tags("addons", "messaging").sendLogs(`failedSendRevokeMsg: ${record_data_1.type}`);
                    }
                    return n;
                }), {
                    priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
                }).waitUntilCompleted();
            }
            const D = babelHelpers.extends({}, T);
            const x = v(record_data, type);
            if (x.length > 0) {
                D.botGroupParticipants = x;
            }
            if (o("WAWebBotBaseGating").isBotEnabled()) {
                let $ = S(record_data);
                if ($ != null) {
                    $ = o("WAWebSimpleSignalPNToFBIDMigration").getDeprecatedPnChatForFbidInvoke($) ?? $;
                }
                D.botRespOrInvocationRevokeBotWid = $;
                if (record_data.botTargetSenderJid instanceof r("WAWebWid")) {
                    D.botTargetSenderJid = record_data.botTargetSenderJid;
                }
            }
            const N = new (o("WAWebMsgModel")).Msg(D);
            N.wamMessageSendPerfReporter = new (o("WAWebMessageSendPerfReporter")).MessageSendPerfReporter({
                chatWid: N.to,
                mediaType: o("WAWebWamMsgUtils").getWamMediaType(N),
                messageType: o("WAWebWamMsgUtils").getWamMessageType(N)
            });
            N.wamMessageSendPerfReporter.setIsRevokeMessage(true);
            return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("sendMessage", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                try {
                    N.wamMessageSendPerfReporter?.startSavedStage();
                    yield o("WAWebDBProcessMessage").storeMessages([
                        D
                    ], o("WAWebFrontendMsgGetters").getChat(record_data).id);
                    N.wamMessageSendPerfReporter?.postSavedStage();
                } catch (error) {
                    o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "_sendRevoke: failed to storeMessages into storage"
                    ]))).verbose().sendLogs("storeMessages failed");
                    throw error;
                }
                const a = yield o("WAWebSendMsgRecordAction").sendMsgRecord(N);
                const a_messageSendResult = a.messageSendResult;
                if (isAssociatedBotPluginRevoke) {
                    o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "_sendRevoke path for associated with bot plugin msg"
                    ])));
                    throw r("err")("Expected exit for associated with bot plugin msg");
                }
                if (a_messageSendResult === o("WAWebSendMsgResultAction").SendMsgResult.OK) {
                    new (o("WAWebSendRevokeMessageWamEvent")).SendRevokeMessageWamEvent({
                        messageType: o("WAWebWamMsgUtils").getWamMessageType(record_data),
                        messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(record_data),
                        revokeSendDelay: I
                    }).commit();
                    return o("WAWebDBProcessRevokeMsgs").processRevokeMsgsAndGetCleanupEligibleKeys([
                        {
                            revokeMsgKey: record_data.id,
                            newMsgKey: L,
                            timestamp: o("WAWebMsgGetters").getT(record_data),
                            revokeTimestamp: k,
                            subtype: E,
                            sender: y,
                            viewMode: N.viewMode
                        }
                    ]).then((()=>{
                        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                            if (e.has(record_data.id.toString())) {
                                o("WAWebUpdateLastAddOnPreviewChatAction").deleteModelsForLastAddOnPreview([
                                    record_data.id.toString()
                                ]);
                                yield o("WAWebRequestDeleteAddOns").requestDeleteAddOns(o("WAWebFrontendMsgGetters").getChat(record_data).id.toString(), [
                                    record_data.id.toString()
                                ]);
                                g(record.data, {
                                    msgKey: L,
                                    subtype: E,
                                    sender: y,
                                    revokeTimestamp: k,
                                    viewMode: N.viewMode
                                });
                                return {
                                    messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.OK
                                };
                            }
                            return {
                                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UNKNOWN
                            };
                        });
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    })());
                }
                return (_ || (_ = n("Promise"))).resolve({
                    messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UNKNOWN
                });
            }), {
                priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
            }).waitUntilCompleted();
        });
        return y.apply(this, arguments);
    }
    function C(t, n) {
        h({
            clearMedia: false,
            isAssociatedBotPluginRevoke: true,
            record: {
                type: "message",
                data: o("WAWebStateUtils").unproxy(t)
            },
            type: n
        }).catch((t)=>{
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[bot revoke] sendAssociatedBotPluginRevoke: ",
                ""
            ])), t instanceof Error ? t.message : String(t));
        });
    }
    function b(e, t, n) {
        return h({
            clearMedia: n,
            isAssociatedBotPluginRevoke: false,
            record: {
                type: "message",
                data: o("WAWebStateUtils").unproxy(e)
            },
            type: t
        });
    }
    function v(record_data, type) {
        const r = o("WAWebMsgGetters").getSender(record_data);
        const a = [].concat(record_data.botGroupParticipants ?? [], type === o("WAWebCmd").Revoke.Admin && r != null ? [
            r
        ] : []);
        const i = new Map;
        a.forEach((e)=>{
            if (e.isUser() && o("WAWebBotGroupGatingUtils").isGroupRevokeAgentTarget(e)) {
                i.set(e.toString(), e);
            }
        });
        return Array.from(i.values());
    }
    function S(record_data) {
        const n = function(n) {
            return n.isBot() && !(record_data.id.remote.isGroup() && o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(n));
        };
        const r = o("WAWebMsgGetters").getSender(record_data);
        if (r != null && r.isBot()) {
            if (n(r)) {
                return r;
            }
            return null;
        }
        const a = record_data.mentionedJidList?.find(n);
        if (a != null && record_data.isForwarded !== true) {
            return a;
        }
        return null;
    }
    function R(type) {
        switch(type){
            case o("WAWebCmd").Revoke.Sender:
                return "sender_revoke";
            case o("WAWebCmd").Revoke.Admin:
                return "admin_revoke";
        }
    }
    function L(e, t) {
        const l = o("WAWebFrontendMsgGetters").getMaybeChat(e);
        if (!o("WAWebRevoke").isWithinRevokeWindow({
            revokedMsgKey: e.id,
            revokedMsgTimestamp: e.t,
            revokeTimestamp: o("WATimeUtils").unixTime()
        })) {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "revoke: outside of revoke window, ",
                " has not been revoked"
            ])), e.id.toString());
            return;
        }
        if (o("WAWebMsgModelUtils").typeIsMms(e)) {
            o("WAWebMedia").deregisterMsg(e);
        }
        l?.removeFromCollection(e);
        e.trigger("revoked");
        o("WAWebMsgGetters").clearMsgGetterCacheFor(e);
        o("WAWebFrontendMsgGetters").clearFrontendMsgGetterCacheFor(e);
        const d = e.getCollection();
        const m = e.id;
        const p = o("WAWebRevoke").getMsgKeyAfterRevoke({
            originalKey: m,
            revokeKey: t.msgKey
        });
        const _ = e.getMsgChunk();
        if (_) {
            _.replaceId(m, p);
        }
        e.forEachThreadMsgChunk(function(e) {
            e.replaceId(m, p);
        });
        d.replaceId(m, p);
        const f = l?.isUnreadMsg(e) ?? false;
        const h = l?.isActiveUnreadMsg(e) ?? false;
        const e_associationType = e.associationType;
        const C = o("WAWebViewModeUtils").getRevokedViewMode(e.viewMode, e_associationType, t.viewMode ?? o("WAWebViewMode.flow").ViewModeType.VISIBLE);
        if (e_associationType != null) {
            const b = o("WAWebAssociationProcessor").getAssociationProcessorByAssociationType(e_associationType);
            if (b && b.processorType === o("WAWebAssociationProcessorConstants").AssociationProcessorType.WithDetachedMessages) {
                e.detachAssociatedMsg();
            }
        }
        const v = {
            isOverwrittenByRevoke: true,
            id: p,
            type: o("WAWebMsgType").MSG_TYPE.REVOKED,
            subtype: t.subtype === "admin_revoke" ? "admin" : "sender",
            revokeSender: t.sender,
            revokeTimestamp: t.revokeTimestamp,
            protocolMessageKey: m,
            body: undefined,
            caption: undefined,
            clientUrl: undefined,
            deprecatedMms3Url: undefined,
            loc: undefined,
            lat: undefined,
            lng: undefined,
            isLive: undefined,
            accuracy: undefined,
            speed: undefined,
            degrees: undefined,
            comment: undefined,
            sequence: undefined,
            shareDuration: undefined,
            finalLat: undefined,
            finalLng: undefined,
            finalAccuracy: undefined,
            finalThumbnail: undefined,
            finalSpeed: undefined,
            finalDegrees: undefined,
            finalTimeOffset: undefined,
            title: undefined,
            description: undefined,
            matchedText: undefined,
            thumbnail: undefined,
            richPreviewType: undefined,
            doNotPlayInline: undefined,
            paymentLinkMetadata: undefined,
            quotedMsg: undefined,
            quotedStanzaID: undefined,
            quotedRemoteJid: undefined,
            quotedParticipant: undefined,
            mediaData: undefined,
            mentionedJidList: undefined,
            groupMentions: undefined,
            vcardList: undefined,
            star: false,
            kicState: undefined,
            kicTimestampMs: undefined,
            kicKey: undefined,
            errorCode: o("WAWebErrorType").SendFailureErrorCode.NoError,
            isSendFailure: false,
            viewMode: C,
            associationType: undefined,
            parentMsgKey: undefined
        };
        e.set(v);
        e.trigger("change:msgKey", {
            newKey: p,
            oldKey: m
        });
        if (l) {
            let S;
            if (m.equals(l.lastReceivedKey)) {
                l.lastReceivedKey = p;
            }
            if ((S = l.composeQuotedMsg) != null && S.id.equals(m)) {
                l.composeQuotedMsg = null;
            }
            if (f) {
                l.unreadCount = Math.max(l.unreadCount - 1, 0);
                l.unreadDividerOffset += 1;
                o("WAWebApiChat").reduceChatUnreadCount(l.id.toString()).catch((e)=>{
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "revokeInternal: failed to reduce chat unread count"
                    ]))).catching(r("getErrorSafe")(e)).sendLogs("reduceChatUnreadCount failed");
                });
            }
            if (h) {
                l.activeUnreadCount = Math.max(l.activeUnreadCount - 1, 0);
            }
        }
        if (r("WAWebWid").isBroadcast(m.remote)) {
            const R = o("WAWebMsgModelUtils").getBroadcastFanoutKeys(m);
            const L = o("WAWebMsgModelUtils").getBroadcastFanoutKeys(p);
            if (!R || !L || R.length !== L.length) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "cannot fanout revoke: ",
                    " ",
                    ""
                ])), String(R), String(L));
                return;
            }
            R.forEach((e, n)=>{
                const r = d.get(e);
                if (r) {
                    g(r, {
                        msgKey: L[n],
                        subtype: t.subtype,
                        sender: t.sender
                    });
                }
            });
            o("WAWebFtsClient").ftsClient.purge([
                String(e.rowId)
            ]).catch(r("WAWebNoop"));
            const E = l ? l.id.toString() : e.id.remote.toString();
            o("WAWebUpdateLastAddOnPreviewChatAction").deleteModelsForLastAddOnPreview([
                m.toString()
            ]);
            o("WAWebRequestDeleteAddOns").requestDeleteAddOnsFireAndForget(E.toString(), [
                m.toString()
            ]);
        }
    }
    l.sendRevoke = f;
    l.revoke = g;
    l.sendAssociatedBotPluginRevoke = C;
    l.sendAssociatedChildMsgRevoke = b;
}, 98);