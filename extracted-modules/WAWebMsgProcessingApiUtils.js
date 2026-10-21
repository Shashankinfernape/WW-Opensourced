__d("WAWebMsgProcessingApiUtils", [
    "Promise",
    "WAJids",
    "WALogger",
    "WAWebAck",
    "WAWebBackendJobs.flow",
    "WAWebBatchedStatusIdUtils",
    "WAWebBotGroupGatingUtils",
    "WAWebCTWAGatingUtils",
    "WAWebDBGroupsGroupMetadata",
    "WAWebDBMessageSerialization",
    "WAWebDeviceSentMessageProtoUtils",
    "WAWebDisappearingModeGroupsProtoUtils",
    "WAWebE2EProtoParser",
    "WAWebE2EProtoUtils",
    "WAWebEphemeralDecodeBroadcastSetting",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgError",
    "WAWebHandleMsgMetaUtils",
    "WAWebHandleMsgTypes.flow",
    "WAWebLidMigrationUtils",
    "WAWebMessagingGatingUtils",
    "WAWebMsgAGMProcessing",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebMsmsgMsgSecretCache",
    "WAWebSchemaMessage",
    "WAWebSimpleSignalDowngradeStore",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWamEnumDeviceType",
    "WAWebWamEnumDsmError",
    "WAWebWamMsgUtils",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "justknobx",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    const e = [
        "msgProtobuf"
    ];
    const s = [
        "msgProtobuf"
    ];
    const u = [
        "msgProtobuf"
    ];
    const c = [
        "decrypted",
        "reparsing"
    ];
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
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatWid: t, msg: n, msgBotInfo: a }) {
            if (!(a == null || t == null || !r("WAWebWid").isGroup(t) || !(n.ephemeralDuration == null || n.ephemeralDuration === 0))) {
                try {
                    const i = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(t);
                    if (i != null && i.ephemeralDuration > 0) {
                        n.ephemeralDuration = i.ephemeralDuration;
                        o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "[bot group] Applied group ephemeral duration ",
                            " to bot message"
                        ])), String(i.ephemeralDuration)).sendLogs("bot-group-ephemeral-fallback");
                    }
                } catch (e) {
                    o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[bot group] ephemeral fallback failed: ",
                        ""
                    ])), e).sendLogs("bot-group-ephemeral-fallback-error");
                }
            }
        });
        return S.apply(this, arguments);
    }
    function R(e) {
        let u = "";
        if (e.protocolMessage?.historySyncNotification != null) {
            u = "historySyncNotification";
        } else if (e.protocolMessage?.initialSecurityNotificationSettingSync != null) {
            u = "initialSecurityNotificationSettingSync";
        } else if (e.protocolMessage?.appStateSyncKeyRequest != null) {
            u = "appStateSyncKeyRequest";
        } else if (e.protocolMessage?.appStateSyncKeyShare != null) {
            u = "appStateSyncKeyShare";
        } else if (e.protocolMessage?.peerDataOperationRequestResponseMessage != null) {
            u = "peerDataOperationRequestResponseMessage";
        } else if (e.protocolMessage?.peerDataOperationRequestMessage != null) {
            u = "peerDataOperationRequestMessage";
        } else if (e.protocolMessage?.cloudApiThreadControlNotification != null) {
            u = "cloudApiThreadControlNotification";
        }
        o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
            "protocol message: wid error in type ",
            ""
        ])), u).sendLogs("wid error");
    }
    function L({ bizInfo: c, info: d, msgBotInfo: m, msgProtobuf: p, paymentInfo: _ }) {
        let f;
        const g = Y(d);
        if (!o("WAWebUserPrefsMeUser").isMeAccount(g)) {
            R(p);
            return;
        }
        if (p.protocolMessage?.historySyncNotification != null) {
            const h = o("WAWebE2EProtoParser").parseMsgProto({
                messageProtobuf: p,
                message: V(d),
                msgContext: "relay",
                paymentInfo: _,
                bizInfo: c
            });
            H(h, m);
            f = {
                history: r("nullthrows")(h.historySyncMetaData)
            };
        } else if (p.protocolMessage?.initialSecurityNotificationSettingSync != null) {
            f = {
                securityNotificationEnabled: {
                    isEnabled: p.protocolMessage.initialSecurityNotificationSettingSync.securityNotificationEnabled ?? true
                }
            };
        } else if (p.protocolMessage?.appStateSyncKeyShare != null) {
            f = {
                appStateSyncKeyShare: p.protocolMessage.appStateSyncKeyShare
            };
        } else if (p.protocolMessage?.appStateSyncKeyRequest != null) {
            f = {
                appStateSyncKeyRequest: p.protocolMessage.appStateSyncKeyRequest
            };
        } else if (p.protocolMessage?.peerDataOperationRequestResponseMessage != null) {
            f = {
                peerDataOperationRequestResponseMessage: p.protocolMessage?.peerDataOperationRequestResponseMessage
            };
        } else if (p.protocolMessage?.peerDataOperationRequestMessage != null) {
            f = {
                peerDataOperationRequestMessage: p.protocolMessage?.peerDataOperationRequestMessage
            };
        } else if (p.protocolMessage?.cloudApiThreadControlNotification != null) {
            f = {
                cloudApiThreadControlNotification: p.protocolMessage?.cloudApiThreadControlNotification
            };
        }
        return f;
    }
    function E(e) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const { info: d, msgProtobuf: m } = e;
            if (m.protocolMessage?.historySyncNotification != null || m.protocolMessage?.initialSecurityNotificationSettingSync != null || m.protocolMessage?.appStateSyncKeyShare != null || m.protocolMessage?.appStateSyncKeyRequest != null || m.protocolMessage?.peerDataOperationRequestResponseMessage != null || m.protocolMessage?.peerDataOperationRequestMessage != null || m.protocolMessage?.cloudApiThreadControlNotification != null) {
                return L({
                    info: d,
                    msgProtobuf: m,
                    paymentInfo: e.paymentInfo,
                    bizInfo: e.bizInfo,
                    hsmInfo: e.hsmInfo
                });
            }
            if (m.protocolMessage?.lidMigrationMappingSyncMessage != null) {
                return {
                    lidMigrationSyncMessage: m.protocolMessage.lidMigrationMappingSyncMessage
                };
            }
            switch(d.type){
                case o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT:
                    if (o("WAWebUserPrefsMeUser").isMeAccount(d.author)) {
                        return D(e);
                    }
                    return N(e);
                case o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.GROUP:
                    if (d.isDirect && o("WAWebUserPrefsMeUser").isMeAccount(d.author) && !J(e)) {
                        return D(e);
                    }
                    return N(e);
                case o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST:
                    {
                        if (e.ciphertextType === o("WAWebBackendJobs.flow").CiphertextType.Skmsg) {
                            if (!d.bclHashValidated) {
                                throw r("err")("parseMessage: participants for peer broadcast message is not validated");
                            }
                            return N(e);
                        }
                        if (e.isMessageRetry === true && e.msgProtobuf.deviceSentMessage == null) {
                            return N(e);
                        }
                        return $(e);
                    }
                case o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_BROADCAST:
                    return N(e);
                case o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.DIRECT_PEER_STATUS:
                    if (d.isDirect === true) {
                        return I(e);
                    }
                    return $(e);
                case o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_STATUS:
                    return N(e);
                default:
                    throw r("err")("Unrecognized MESSAGE_TYPE");
            }
        });
        return k.apply(this, arguments);
    }
    function I(e) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                return yield D(e);
            } catch (n) {
                if (n instanceof o("WAWebHandleMsgError").DeviceSentMessageError) {
                    const t = Object.keys(e.msgProtobuf).filter((e)=>e !== "$$unknownFieldCount" && e !== "messageContextInfo");
                    if (t.length === 1 && t[0] === "senderKeyDistributionMessage") {
                        return N(e);
                    }
                }
                throw n;
            }
        });
        return T.apply(this, arguments);
    }
    function D(e) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = t.msgProtobuf;
            const r = babelHelpers.objectWithoutPropertiesLoose(t, e);
            const a = n.deviceSentMessage;
            if (a == null) {
                throw new (o("WAWebHandleMsgError")).DeviceSentMessageError(X(r.info.author), o("WAWebWamEnumDsmError").DSM_ERROR.MISSING_DSM);
            }
            if (a.destinationJid == null) {
                throw new (o("WAWebHandleMsgError")).DeviceSentMessageError(X(r.info.author), o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_DSM);
            }
            const i = a.destinationJid;
            const l = yield w(o("WAWebDeviceSentMessageProtoUtils").unwrapDeviceSentMessage(n), r);
            return babelHelpers.extends({
                deviceSent: {
                    destination: o("WAWebWidFactory").createWid(i)
                }
            }, l);
        });
        return x.apply(this, arguments);
    }
    function $(e) {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.msgProtobuf;
            const n = babelHelpers.objectWithoutPropertiesLoose(e, s);
            const r = n.info;
            const a = t.deviceSentMessage;
            if (a == null) {
                throw new (o("WAWebHandleMsgError")).DeviceSentMessageError(X(r.author), o("WAWebWamEnumDsmError").DSM_ERROR.MISSING_DSM);
            }
            if (a.phash == null) {
                throw new (o("WAWebHandleMsgError")).DeviceSentMessageError(X(r.author), o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_DSM);
            }
            const i = a.phash;
            const l = yield w(o("WAWebDeviceSentMessageProtoUtils").unwrapDeviceSentMessage(t), n);
            return babelHelpers.extends({
                deviceSent: {
                    phash: i,
                    info: r
                }
            }, l);
        });
        return P.apply(this, arguments);
    }
    function N(e) {
        return M.apply(this, arguments);
    }
    function M() {
        M = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.msgProtobuf;
            const n = babelHelpers.objectWithoutPropertiesLoose(e, u);
            if (t.deviceSentMessage != null) {
                throw new (o("WAWebHandleMsgError")).DeviceSentMessageError(X(n.info.author), o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_SENDER);
            }
            const r = yield w(t, n);
            return babelHelpers.extends({
                deviceSent: null
            }, r);
        });
        return M.apply(this, arguments);
    }
    function w(e, t) {
        return A.apply(this, arguments);
    }
    function A() {
        A = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { bizInfo: _, hidePlaceholder: h, hsmInfo: y, info: C, isMessageRetry: b, isOffline: S, msgBotInfo: R, paymentInfo: L, processDecryptedProtoParams: E, protobufBytes: k, reportingTokenInfo: I }) {
            if (e == null) {
                return {
                    senderKey: null,
                    rootSecretDistribute: null,
                    storeMsg: null,
                    renderableMsgs: []
                };
            }
            if (r("justknobx")._("6357") && o("WAWebDeviceSentMessageProtoUtils").containsDeviceSentMessage(e)) {
                throw new (o("WAWebHandleMsgError")).DeviceSentMessageError(X(C.author), o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_DSM);
            }
            let T = babelHelpers.extends({}, o("WAWebE2EProtoParser").parseMsgProto({
                messageProtobuf: e,
                message: V(C),
                msgContext: "relay",
                paymentInfo: L,
                bizInfo: _,
                editAttr: C.edit,
                rcat: E?.rcat,
                bizSource: E?.msgMeta?.bizSource,
                msgMeta: E?.msgMeta,
                msgBotInfo: R
            }));
            const D = E?.msgMeta?.isReadByPeer;
            if (D === true) {
                T.read = true;
                T.ack = o("WAWebAck").ACK.READ;
            }
            const x = T;
            const $ = x.disappearingModeTrigger;
            const P = T.id.remote ?? T.from;
            if (P != null && r("WAWebWid").isGroup(P) && $ != null) {
                const N = yield o("WAWebDisappearingModeGroupsProtoUtils").updateDisappearingModeForGroups($, P);
                if (N != null) {
                    T = babelHelpers.extends({}, T, N);
                }
            }
            H(T, R, E?.msgMeta?.targetSenderJid, E?.msgMeta?.targetId);
            if (E?.msgMeta?.targetId != null && P != null && r("WAWebWid").isGroup(P)) {
                try {
                    yield G(T, P, E?.msgMeta?.targetSenderJid, E?.msgMeta?.targetId);
                } catch (e) {
                    o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[bot group] processBotGroupGossip failed with error: ",
                        ""
                    ])), e).sendLogs("failed-to-process-bot-group-gossip");
                }
            }
            yield v({
                chatWid: P,
                msg: T,
                msgBotInfo: R
            });
            if (y != null) {
                const { category: A, tag: B } = y;
                T.hsmTag = B;
                T.hsmCategory = A;
            }
            if (E?.msgMeta?.bizSource != null) {
                T.bizSource = E?.msgMeta?.bizSource;
            }
            const q = C.metaFrom ?? E?.msgMeta?.from;
            if (q != null) {
                T.metaFrom = q;
            }
            const U = e.senderKeyDistributionMessage != null ? F(C, e.senderKeyDistributionMessage) : null;
            const z = e.rootSecretDistributeMessage != null ? O(e.rootSecretDistributeMessage, e, T.id.id) : null;
            const K = T.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && U == null && z == null;
            const Q = T.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && U != null;
            const Y = T.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && z != null;
            let J = null;
            if (K && E != null) {
                const { decrypted: Z, reparsing: ee } = E;
                const te = babelHelpers.objectWithoutPropertiesLoose(E, c);
                T.futureproofParams = te;
                T.futureproofBuffer = Z;
            }
            if (C.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_STATUS) {
                T.campaignId = C.campaignId;
                T.campaignDuration = C.campaignDuration;
            }
            if (C.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST) {
                T.broadcastId = C.chat;
                T.bclParticipants = C.bclParticipants;
                J = T;
            }
            if (C.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_BROADCAST) {
                T.broadcastId = C.chat;
                const re = o("WAWebWidFactory").asUserWidOrThrow(C.preMatChat ?? C.author);
                const oe = C.ephSetting;
                const ae = T.ephemeralSharedSecret;
                if (oe != null && ae != null) {
                    const ie = yield o("WAWebEphemeralDecodeBroadcastSetting").decodeBroadcastEphemeralSetting({
                        broadcastJid: C.chat,
                        recipient: o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
                        sender: re,
                        ephSetting: oe,
                        sharedSecret: ae
                    });
                    const { ephemeralDuration: le, ephemeralSettingTimestamp: se } = ie;
                    T.ephemeralDuration = le;
                    T.ephemeralSettingTimestamp = se;
                    o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[broadcast:retry] decoded eph_setting sender=",
                        " dur=",
                        " ts=",
                        ""
                    ])), re.toString(), le, se).tags("messaging");
                }
            }
            let ue = [];
            const ce = T.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN;
            const de = Q || Y || ce && h === true && T.futureproofType == null;
            if (!de) {
                if (C.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST) {
                    ue = yield j(T, C.bclParticipants);
                } else if (!((T.subtype === "payment_transaction_request_cancelled" || T.subtype === "payment_action_request_declined") && T.paymentRequestMessageKey == null)) {
                    T.reportingTokenInfo = I;
                    T.plainProtobufBytes = k;
                    T.preMatChat = C.preMatChat;
                    T.isRetry = b;
                    T.isOffline = S;
                    if (C.author !== T.from || C.author !== T.author) {
                        T.senderWithDevice = C.author;
                    }
                    if (o("WAWebCTWAGatingUtils").shouldGenerateAGMMsgs(T.ctwaContext)) {
                        ue = yield o("WAWebMsgAGMProcessing").generateAutomatedGreetingMsgs(T, C);
                    } else {
                        ue = [
                            T
                        ];
                    }
                }
            }
            return {
                senderKey: U,
                rootSecretDistribute: z,
                storeMsg: J,
                renderableMsgs: ue
            };
        });
        return A.apply(this, arguments);
    }
    function F(e, t) {
        if (!e.chat.isGroup() && !e.chat.isBroadcast()) {
            throw r("err")("should not have senderkey");
        }
        const { axolotlSenderKeyDistributionMessage: n, groupId: a } = t;
        if (a == null || e.chat.toString({
            legacy: true
        }) !== a) {
            o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "parseSenderKeyDistribution: expected: ",
                ", got: ",
                ""
            ])), e.chat.toString(), a ?? "null");
            throw r("err")("parseSenderKeyDistribution: stanza group id mismatched with protobuf");
        }
        if (!n) {
            throw r("err")(`senderKeyDistributionMessage: from ${e.author.toString()} has no content`);
        }
        return {
            groupId: a,
            key: n
        };
    }
    function O({ chatJid: i }, t, n) {
        if (i == null || i === "") {
            throw r("err")("parseRootSecretDistribute: missing chatJid");
        }
        const l = t.messageContextInfo?.messageSecret;
        if (l == null) {
            throw r("err")("parseRootSecretDistribute: missing messageContextInfo.messageSecret");
        }
        return {
            chatJid: o("WAWebWidFactory").createWid(i),
            stanzaId: n,
            rootSecret: new Uint8Array(l)
        };
    }
    function B(e) {
        return !(e.edit === o("WAWebAck").EDIT_ATTR.SENDER_REVOKE && e.type !== o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST || e.edit === o("WAWebAck").EDIT_ATTR.ADMIN_REVOKE);
    }
    function W({ msgInfo: t, msgMeta: n, placeholderAddReason: a, placeholderType: i }) {
        if (!B(t)) {
            return null;
        }
        const l = i === o("WAWebHandleMsgTypes.flow").PlaceholderType.E2E ? void 0 : i === o("WAWebHandleMsgTypes.flow").PlaceholderType.BOT_UNAVAILABLE_FANOUT ? "bot_unavailable_fanout" : i === o("WAWebHandleMsgTypes.flow").PlaceholderType.HOSTED_UNAVAILABLE_FANOUT ? "hosted_unavailable_fanout" : i === o("WAWebHandleMsgTypes.flow").PlaceholderType.VIEW_ONCE_UNAVAILABLE_FANOUT ? "view_once_unavailable_fanout" : i === o("WAWebHandleMsgTypes.flow").PlaceholderType.ACP_UNAVAILABLE_FANOUT ? "acp_unavailable_fanout" : i === o("WAWebHandleMsgTypes.flow").PlaceholderType.FANOUT ? "fanout" : (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${i}`);
        })();
        const s = n.isReadByPeer === true;
        const u = n.isGroupStatus === true && r("justknobx")._("6035") ? true : void 0;
        const c = babelHelpers.extends({}, V(t), {
            type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
            kind: o("WAWebMsgType").MsgKind.Ciphertext,
            subtype: l,
            e2eSenderType: o("WAWebWamMsgUtils").getWamE2eSenderType(t.author),
            placeholderAddReason: a,
            bclParticipants: t.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST ? t.bclParticipants : void 0,
            read: s ? true : void 0,
            isGroupStatus: u
        });
        if (s) {
            c.ack = o("WAWebAck").ACK.READ;
        }
        const d = o("WAWebHandleMsgMetaUtils").getMsgTypeFromMsgMeta(n);
        if (d != null) {
            return babelHelpers.extends({}, c, {
                parentMsgKey: o("WAWebE2EProtoUtils").createMsgKeyFromThreadInfo({
                    info: t,
                    msgMeta: n,
                    realType: d
                }),
                kind: o("WAWebMsgType").MsgKind.PlaceholderAddon,
                realType: d
            });
        }
        return babelHelpers.extends({}, c, {
            kind: o("WAWebMsgType").MsgKind.PlaceholderMessage
        });
    }
    function q(e, t) {
        const n = babelHelpers.extends({}, V(e), {
            type: o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER,
            kind: o("WAWebMsgType").MsgKind.DebugPlaceholder,
            body: t.toString()
        });
        return n;
    }
    function U(e, t) {
        if (t.botParticipant != null) {
            return t.botParticipant;
        }
        if (!e.fromMe && r("WAWebWid").isGroup(e.remote) || r("WAWebWid").isStatus(e.remote)) {
            return e.participant;
        }
        if (!o("WAWebUserPrefsMeUser").isMeDevice(t.author) && o("WAWebUserPrefsMeUser").isMeAccount(t.author)) {
            return t.author;
        }
    }
    function V(e) {
        const i = Q(e);
        const l = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
        const s = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
        let u;
        if (i.fromMe && r("WAWebWid").isGroup(i.remote) && e.author.isLid() && l != null) {
            u = l;
        } else {
            u = s;
        }
        const c = i.fromMe ? u : i.remote;
        const d = babelHelpers.extends({
            id: i,
            from: c,
            to: i.fromMe ? i.remote : s,
            type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            t: e.ts || 0,
            ack: o("WAWebMsgKeyUtils").isNoteToSelf(i) ? o("WAWebAck").ACK.READ : o("WAWebAck").ACK.SENT,
            author: U(i, e),
            notifyName: e.pushname || "",
            invis: false,
            count: e.count,
            clientReceivedTsMillis: e.clientReceivedTsMillis
        }, e.serverStoreTimeMicros != null ? {
            serverStoreTimeMicros: e.serverStoreTimeMicros
        } : null);
        if (e.hostedBizEncStateMismatch === true && d.id?.remote?.isUser()) {
            d.hostedBizEncStateMismatch = true;
        }
        if (e.senderOrRecipientAccountTypeHosted === true && d.id?.remote?.isUser()) {
            d.senderOrRecipientAccountTypeHosted = true;
        }
        if (e.placeholderCreatedWhenAccountIsHosted != null && d.id?.remote?.isUser()) {
            d.placeholderCreatedWhenAccountIsHosted = e.placeholderCreatedWhenAccountIsHosted;
        }
        return d;
    }
    function H(e, t, n, r) {
        if (t != null) {
            Object.assign(e, {
                botEditTargetId: t.botEditTargetId,
                botEditType: t.botEditType,
                bizBotType: t.bizBotType,
                botTargetSenderJid: n,
                botMsgBodyType: t.botMsgBodyType,
                botResponseTargetId: r
            });
        }
    }
    function G(e, t, n, r) {
        return z.apply(this, arguments);
    }
    function z() {
        z = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, a) {
            if (!(n == null || a == null)) {
                const s = n ? o("WAWebUserPrefsMeUser").isMeAccount(n) : true;
                const u = {
                    fromMe: s,
                    remote: t,
                    id: a
                };
                let c = o("WAWebMsmsgMsgSecretCache").msmsgBotGroupGossipDataCache.getMsmsgBotGroupGossipDataFromCache({
                    fromMe: s,
                    id: a,
                    participant: n,
                    remote: t
                });
                u.participant = o("WAWebLidMigrationUtils").toPn(n) ?? n;
                const d = new (r("WAWebMsgKey"))(u).toString();
                if (c == null) {
                    const m = yield o("WAWebSchemaMessage").getMessageTable().get(d);
                    if (m != null) {
                        const p = o("WAWebDBMessageSerialization").messageFromDbRow(m);
                        c = o("WAWebMsmsgMsgSecretCache").createBotGroupGossipData(p?.botGroupParticipants, p?.botGroupParticipant);
                    }
                } else {
                    if (c.isLegacySingular) {
                        o("WAWebMsmsgMsgSecretCache").msmsgBotGroupGossipDataCache.deleteMsmsgBotGroupGossipDataFromCache(d);
                    }
                }
                const _ = e.id.participant;
                const f = _?.user;
                const g = c?.isLegacySingular === false && _ != null && _.isFbidBot() && f != null && c.participants.some((e)=>e.user === f);
                const h = g && t.isGroup() && o("WAWebBotGroupGatingUtils").isGroupBotParticipantEnabled(_);
                const y = o("WAWebMsmsgMsgSecretCache").getBotGroupParticipantForResponse(c, _, h);
                if (t.isGroup() && o("WAWebBotGroupGatingUtils").isGroupBotParticipantEnabled(y)) {
                    Object.assign(e, {
                        botGroupParticipant: y,
                        botGroupParticipants: c?.isLegacySingular === false ? [].concat(c.participants) : null
                    });
                }
            }
        });
        return z.apply(this, arguments);
    }
    function j(e, t) {
        return K.apply(this, arguments);
    }
    function K() {
        K = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const a = yield (b || (b = n("Promise"))).all(t.map((()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ ephSetting: n, preMatWid: a, wid: i }) {
                    const l = a ?? r("nullthrows")(i);
                    let s;
                    try {
                        s = new (r("WAWebMsgKey"))({
                            remote: i,
                            fromMe: true,
                            id: e.id.id
                        });
                    } catch (e) {
                        o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                            "drop: cannot create MsgKey: ",
                            ""
                        ])), r("getErrorSafe")(e).stack);
                        return null;
                    }
                    let u;
                    let c;
                    const { ephemeralSharedSecret: d, broadcastId: m } = e;
                    if (m != null && n != null && d != null) {
                        const p = yield o("WAWebEphemeralDecodeBroadcastSetting").decodeBroadcastEphemeralSetting({
                            broadcastJid: m,
                            recipient: l,
                            sender: l.isLid() ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow() : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
                            ephSetting: n,
                            sharedSecret: d
                        });
                        u = p.ephemeralDuration;
                        c = p.ephemeralSettingTimestamp;
                    }
                    if (!l.isLid()) {
                        o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                            "[generateBclMsgs] eph_setting=",
                            " recipient=",
                            ""
                        ])), n, l.server);
                        o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                            "[generateBclMsgs] non-LID recipient found"
                        ]))).sendLogs("gen-bcl-msgs-non-lid-recipient");
                    }
                    const _ = babelHelpers.extends({}, e, {
                        id: s,
                        from: o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
                        to: l,
                        broadcast: true,
                        ephemeralDuration: u,
                        ephemeralSettingTimestamp: c,
                        protocolMessageKey: e.protocolMessageKey == null ? void 0 : new (r("WAWebMsgKey"))({
                            remote: l,
                            fromMe: true,
                            id: e.protocolMessageKey.id
                        })
                    });
                    return _;
                });
                return function(e) {
                    return t.apply(this, arguments);
                };
            })()));
            return a.filter(Boolean);
        });
        return K.apply(this, arguments);
    }
    function Q(e) {
        if (e.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_BROADCAST) {
            return new (r("WAWebMsgKey"))({
                remote: o("WAWebWidFactory").asUserWidOrThrow(e.author),
                fromMe: false,
                id: e.externalId
            });
        }
        if (e.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT) {
            const t = e.metaFrom != null ? o("WAWebUserPrefsMeUser").isMeAccount(e.metaFrom) : o("WAWebUserPrefsMeUser").isMeAccount(e.author);
            if (e.botParticipant != null) {
                return new (r("WAWebMsgKey"))({
                    remote: e.chat,
                    fromMe: t,
                    id: e.externalId,
                    participant: o("WAWebWidFactory").asUserWidOrThrow(r("nullthrows")(e.botParticipant))
                });
            }
            return new (r("WAWebMsgKey"))({
                remote: e.chat,
                fromMe: t,
                id: e.externalId
            });
        }
        return new (r("WAWebMsgKey"))({
            remote: e.chat,
            fromMe: o("WAWebUserPrefsMeUser").isMeAccount(e.author),
            participant: o("WAWebWidFactory").asUserWidOrThrow(e.author),
            id: e.chat.isStatus() ? o("WAWebBatchedStatusIdUtils").normalizeStatusStanzaId(e.externalId) : e.externalId
        });
    }
    function X(e) {
        if (e.device == null || e.device === o("WAJids").DEFAULT_DEVICE_ID) {
            return o("WAWebWamEnumDeviceType").DEVICE_TYPE.PRIMARY;
        }
        return o("WAWebWamEnumDeviceType").DEVICE_TYPE.COMPANION;
    }
    function Y(e) {
        if (e.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT) {
            return e.author;
        }
        return e.chat;
    }
    function J(e) {
        return e.meta?.appdata === o("WAWebHandleMsgCommon").APPDATA.default && e.msgProtobuf.senderKeyDistributionMessage != null;
    }
    function Z(e, t, n, a) {
        if (a.isBot() && r("justknobx")._("4101")) {
            return true;
        }
        if (e === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg) {
            const i = t.msgMeta.capi === true;
            const l = t.msgInfo.chat.isGroup();
            if (l && i) {
                return true;
            }
            if (i && o("WAWebMessagingGatingUtils").isSimpleSignalEnabled()) {
                if (n.isStateless === true) {
                    return true;
                }
                o("WAWebSimpleSignalDowngradeStore").markCoexUserDowngradedFromSimpleSignal(t.msgInfo.chat);
            }
        }
        return false;
    }
    l.parseProtocolMessage = L;
    l.parseMessage = E;
    l.isRevokeInfo = B;
    l.generatePlaceholder = W;
    l.genDebugPlaceholderMsg = q;
    l.generateBaseMsg = V;
    l.generateBclMsgs = j;
    l.messageInfoToKey = Q;
    l.getDeviceType = X;
    l.getFrom = Y;
    l.shouldOmitSessionPersistence = Z;
}, 98);