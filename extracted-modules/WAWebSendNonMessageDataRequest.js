__d("WAWebSendNonMessageDataRequest", [
    "Promise",
    "WALogger",
    "WAShiftTimer",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiChatCommon",
    "WAWebApiPeerMessageStore",
    "WAWebCommsWapMd",
    "WAWebCurrentUser",
    "WAWebDBDeviceListFanout",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNonMessageDataRequestHandlerGalaxyFlow",
    "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
    "WAWebNonMessageDataRequestLoggingUtils",
    "WAWebNonMessageDataRequestMediaHandlingUtils",
    "WAWebNonMessageDataRequestPlaceholderMessageResendUtils",
    "WAWebOutgoingPeerMsgKey",
    "WAWebProtobufMsgKeyUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebSendAppStateSyncMsgJob",
    "WAWebSendMsgCreateDeviceStanza",
    "WAWebSyncGatingUtils",
    "WAWebSyncdSnapshotRecoveryGatingUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumPeerDataResponseApplyResultType",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "gkx",
    "justknobx",
    "nullthrows"
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
    const S = 3000;
    function R(e, t, n) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r) {
            const a = r ?? {};
            const a_skipStoringMessage = a.skipStoringMessage;
            const l = yield E(e, t);
            if (l == null) {
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[rdu] peer data op request object is null"
                ])));
                return;
            }
            const s = yield I(l, r);
            if (s == null || s.length === 0) {
                o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[rdu] peer data operation request msg is null/empty"
                ])));
                return;
            }
            const u = F(e);
            const p = O(e);
            yield (v || (v = n("Promise"))).all(s.map((()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                    w(e, t);
                    o("WAWebNonMessageDataRequestLoggingUtils").logNonMessagePeerDataRequest(e, t);
                    if (a_skipStoringMessage !== true) {
                        yield o("WAWebApiPeerMessageStore").storePeerMessages([
                            t
                        ]);
                    }
                    o("WAWebNonMessageDataRequestLoggingUtils").sendTimes.set(t.id.id, o("WATimeUtils").unixTimeMs());
                    yield o("WAWebSendAppStateSyncMsgJob").encryptAndSendKeyMsg({
                        msg: t,
                        pushPriority: u ?? undefined,
                        privacySensitive: p ?? undefined
                    });
                });
                return function(e) {
                    return t.apply(this, arguments);
                };
            })()));
            const _ = s.slice(0, 3).map((e)=>e.id.id);
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "[rdu] rdu msgs built type=",
                " cnt=",
                " ids=",
                ""
            ])), e, s.length, _);
        });
        return L.apply(this, arguments);
    }
    function E(e, t) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(peerDataOperationRequestType, t) {
            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "[rdu] start building rdu request object, ## type: ",
                ""
            ])), peerDataOperationRequestType);
            const n = {
                peerDataOperationRequestType,
                requestUrlPreview: [],
                requestStickerReupload: [],
                placeholderMessageResendRequest: []
            };
            switch(peerDataOperationRequestType){
                case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.SEND_RECENT_STICKER_BOOTSTRAP:
                    break;
                case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.WAFFLE_LINKING_NONCE_FETCH:
                    break;
                case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.CONTACT_REFRESH_REQUEST:
                    break;
                case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.UPLOAD_STICKER:
                    {
                        const r = D(t);
                        if (r == null) {
                            return null;
                        }
                        n.requestStickerReupload = r;
                        break;
                    }
                case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.GENERATE_LINK_PREVIEW:
                    {
                        const a = x(t);
                        if (a == null) {
                            return null;
                        }
                        n.requestUrlPreview = a;
                        break;
                    }
                case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.HISTORY_SYNC_ON_DEMAND:
                    {
                        const i = yield P(t);
                        if (i == null) {
                            return null;
                        }
                        n.historySyncOnDemandRequest = i;
                        break;
                    }
                case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.PLACEHOLDER_MESSAGE_RESEND:
                    {
                        const l = M(t);
                        if (l == null) {
                            return null;
                        }
                        n.placeholderMessageResendRequest = l;
                        break;
                    }
                case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.FULL_HISTORY_SYNC_ON_DEMAND:
                    {
                        o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "full history sync on demand not supported in web"
                        ])));
                        break;
                    }
                case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.COMPANION_META_NONCE_FETCH:
                    {
                        o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                            "companion meta nonce fetch is not supported in web"
                        ])));
                        break;
                    }
                case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.COMPANION_CANONICAL_USER_NONCE_FETCH:
                    break;
                case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.COMPANION_SYNCD_SNAPSHOT_FATAL_RECOVERY:
                    {
                        if (o("WAWebSyncdSnapshotRecoveryGatingUtils").syncdSnapshotRecoveryEnabled() === false) {
                            o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                                "Syncd Snapshot recovery is not enabled"
                            ])));
                            return null;
                        }
                        const s = $(t);
                        if (s == null) {
                            return null;
                        }
                        n.syncdCollectionFatalRecoveryRequest = s;
                        break;
                    }
                case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.HISTORY_SYNC_CHUNK_RETRY:
                    {
                        o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                            "history sync chunk retry is not supported in web"
                        ])));
                        break;
                    }
                case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.RECENT_CONVERSATIONS_ON_DEMAND_REQUEST:
                    {
                        o("WALogger").WARN(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                            "recent conversations on demand request is not supported in web"
                        ])));
                        break;
                    }
                case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.GALAXY_FLOW_ACTION:
                    {
                        const u = o("WAWebNonMessageDataRequestHandlerGalaxyFlow").buildGalaxyFlowDataOperationRequest(t);
                        if (u == null) {
                            return null;
                        }
                        n.galaxyFlowAction = u;
                        break;
                    }
                case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.BUSINESS_BROADCAST_INSIGHTS_DELIVERED_TO:
                    {
                        if (t.bizBroadcastInsightsContactListRequest != null) {
                            n.bizBroadcastInsightsContactListRequest = t.bizBroadcastInsightsContactListRequest;
                        }
                        break;
                    }
                case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.BUSINESS_BROADCAST_INSIGHTS_REFRESH:
                    {
                        if (t.bizBroadcastInsightsRefreshRequest != null) {
                            n.bizBroadcastInsightsRefreshRequest = t.bizBroadcastInsightsRefreshRequest;
                        }
                        break;
                    }
            }
            return n;
        });
        return k.apply(this, arguments);
    }
    function I(e, t) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*(peerDataOperationRequestMessage, t) {
            const a = t ?? {};
            const { fanout, msgId } = a;
            if (fanout) {
                const s = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow();
                const u = {
                    wids: [
                        s
                    ]
                };
                const c = yield o("WAWebDBDeviceListFanout").getFanOutList(u);
                const d = yield (v || (v = n("Promise"))).all(c.map((e)=>r("WAWebMsgKey").newId()));
                return c.map((t, n)=>({
                        id: o("WAWebOutgoingPeerMsgKey").buildOutgoingPeerMsgKey(d[n]),
                        to: t,
                        type: "protocol",
                        subtype: "peer_data_operation_request_message",
                        kind: o("WAWebMsgType").MsgKind.PeerMessage,
                        peerDataOperationRequestMessage
                    }));
            }
            const m = o("WAWebOutgoingPeerMsgKey").buildOutgoingPeerMsgKey(msgId ?? (yield r("WAWebMsgKey").newId()));
            return [
                {
                    id: m,
                    to: o("WAWebUserPrefsMeUser").getMyPrimaryForOutgoingPeerMessage(),
                    type: "protocol",
                    subtype: "peer_data_operation_request_message",
                    kind: o("WAWebMsgType").MsgKind.PeerMessage,
                    peerDataOperationRequestMessage
                }
            ];
        });
        return T.apply(this, arguments);
    }
    function D({ fileSha256Arr }) {
        const r = fileSha256Arr?.filter(function(e) {
            return !o("WAWebNonMessageDataRequestMediaHandlingUtils").inFlightStickerRequests.has(e);
        })?.map(function(e) {
            A({
                inFlightRequests: o("WAWebNonMessageDataRequestMediaHandlingUtils").inFlightStickerRequests,
                key: e,
                requestType: o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.UPLOAD_STICKER
            });
            return {
                fileSha256: e
            };
        });
        if (r?.length === 0) {
            return null;
        }
        return r;
    }
    function x(e) {
        const e_urls = e.urls;
        return e_urls?.map(function(t) {
            return {
                url: t,
                includeHqThumbnail: e.includeHqThumbnail
            };
        });
    }
    function $(e) {
        return {
            collectionName: r("nullthrows")(e.collectionName),
            timestamp: e.timestamp
        };
    }
    function P(e) {
        return N.apply(this, arguments);
    }
    function N() {
        N = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled()) {
                return null;
            }
            if (o("WAWebNonMessageDataRequestHistorySyncOnDemandUtils").historySyncOnDemandRequestsFailureRecord.disableRequestSending) {
                o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[rdu] history sync on demand disabled: too many failures"
                ])));
                return null;
            }
            const e_chatId = e.chatId;
            if (e_chatId == null) {
                return null;
            }
            const n = yield o("WAWebApiChatCommon").getChatRecord(e_chatId);
            const r = n?.historyChatId != null ? o("WAWebWidFactory").createWid(n.historyChatId).toJid() : o("WAWebCommsWapMd").CHAT_JID(e_chatId).toString();
            if (new Set(o("WAWebNonMessageDataRequestHistorySyncOnDemandUtils").inFlightHistorySyncOnDemandRequests.values()).has(r)) {
                o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[rdu] drop history sync on demand request as it's in flight"
                ])));
                return null;
            }
            const a = yield o("WAWebNonMessageDataRequestHistorySyncOnDemandUtils").getOldestMsgInChatFromDB(e_chatId);
            const onDemandMsgCount = yield o("WAWebABProps").getABPropConfigValue("history_sync_on_demand_message_count");
            return {
                chatJid: r,
                oldestMsgId: a?.id.id,
                oldestMsgFromMe: a?.id.fromMe,
                onDemandMsgCount,
                oldestMsgTimestampMs: a?.t != null ? a.t * 1000 : undefined,
                supportInlineResponse: true
            };
        });
        return N.apply(this, arguments);
    }
    function M({ msgKeys }) {
        if (msgKeys == null || msgKeys.length === 0) {
            return null;
        }
        if (o("WAWebCurrentUser").isEmployee()) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[rdu] send placeholder message backfill request for ",
                ""
            ])), msgKeys.map((e)=>e.toString()));
        }
        return msgKeys.filter((e)=>!o("WAWebNonMessageDataRequestPlaceholderMessageResendUtils").inFlightPlaceholderResendRequests.has(e.id)).map((e)=>{
            A({
                inFlightRequests: o("WAWebNonMessageDataRequestPlaceholderMessageResendUtils").inFlightPlaceholderResendRequests,
                key: e.id,
                requestType: o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.PLACEHOLDER_MESSAGE_RESEND
            });
            const t = e.remote.isRegularUser() ? o("WAWebLidMigrationUtils").toUserLid(e.remote) : null;
            const n = e.remote.isRegularUser() && o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() ? new (r("WAWebMsgKey"))({
                id: e.id,
                fromMe: e.fromMe,
                remote: t ?? e.remote
            }) : e;
            return {
                messageKey: o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(n)
            };
        });
    }
    function w(e, t) {
        switch(e){
            case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.UPLOAD_STICKER:
                {
                    const a = t.peerDataOperationRequestMessage?.requestStickerReupload;
                    if (a != null) {
                        a.forEach(({ fileSha256 })=>{
                            if (fileSha256 != null) {
                                o("WAWebNonMessageDataRequestMediaHandlingUtils").inFlightStickerRequests.add(fileSha256);
                                o("WAWebNonMessageDataRequestMediaHandlingUtils").mediaReuploadRequestCountMap.set(fileSha256, (o("WAWebNonMessageDataRequestMediaHandlingUtils").mediaReuploadRequestCountMap.get(fileSha256) ?? 0) + 1);
                            }
                        });
                    }
                    break;
                }
            case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.HISTORY_SYNC_ON_DEMAND:
                {
                    const l = t.peerDataOperationRequestMessage?.historySyncOnDemandRequest;
                    if (l != null) {
                        const c = l.chatJid ?? "";
                        o("WAWebNonMessageDataRequestHistorySyncOnDemandUtils").inFlightHistorySyncOnDemandRequests.set(t.id.id, c);
                        const requestTimeoutMs = o("WAWebABProps").getABPropConfigValue("history_sync_on_demand_timeout_ms");
                        const timeoutHandling = function() {
                            const e = r("gkx")("26258") ? "" : t.id.id;
                            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                "[rdu] history sync on demand timeout key=",
                                ""
                            ])), e);
                            o("WAWebNonMessageDataRequestHistorySyncOnDemandUtils").handleHistorySyncOnDemandFailure(c);
                            o("WAWebNonMessageDataRequestLoggingUtils").logHistorySyncOnDemandResponse(o("WAWebWamEnumPeerDataResponseApplyResultType").PEER_DATA_RESPONSE_APPLY_RESULT_TYPE.REQUEST_TIMEOUT, t.id.id);
                        };
                        A({
                            inFlightRequests: o("WAWebNonMessageDataRequestHistorySyncOnDemandUtils").inFlightHistorySyncOnDemandRequests,
                            key: t.id.id,
                            requestTimeoutMs,
                            requestType: o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.HISTORY_SYNC_ON_DEMAND,
                            timeoutHandling
                        });
                    }
                    break;
                }
            case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.PLACEHOLDER_MESSAGE_RESEND:
                {
                    const _ = t.peerDataOperationRequestMessage?.placeholderMessageResendRequest;
                    if (_ != null) {
                        _.forEach((e)=>{
                            const n = e.messageKey?.id;
                            if (n != null) {
                                o("WAWebNonMessageDataRequestPlaceholderMessageResendUtils").inFlightPlaceholderResendRequests.add(n);
                            }
                        });
                    }
                    break;
                }
            default:
                break;
        }
    }
    function A({ inFlightRequests, key, requestTimeoutMs = S, requestType, timeoutHandling }) {
        new (o("WAShiftTimer")).ShiftTimer(function() {
            if (inFlightRequests.has(key)) {
                const e = r("gkx")("26258") ? "" : key;
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[rdu] clean req key=",
                    " type=",
                    ""
                ])), e, requestType);
                inFlightRequests.delete(key);
                timeoutHandling?.();
            }
        }).onOrAfter(requestTimeoutMs);
    }
    function F(e) {
        switch(e){
            case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.GENERATE_LINK_PREVIEW:
                if (o("WAWebSyncGatingUtils").isWebLinkPreviewNseSupportEnabled()) {
                    return "high_force";
                }
                return null;
            case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.PLACEHOLDER_MESSAGE_RESEND:
                if (o("WAWebSyncGatingUtils").isMessagePlaceholderResendNseSupportEnabled()) {
                    return "high_force";
                }
                return null;
            case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.HISTORY_SYNC_ON_DEMAND:
                if (o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled()) {
                    return "high_force";
                }
                return null;
            case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.COMPANION_CANONICAL_USER_NONCE_FETCH:
                return "high_force";
            default:
                return null;
        }
    }
    function O(e) {
        if (!r("justknobx")._("4199") && e === o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.HISTORY_SYNC_ON_DEMAND) {
            return o("WAWebSendMsgCreateDeviceStanza").PrivacySensitiveType.OnDemand;
        }
    }
    l.sendPeerDataOperationRequest = R;
}, 98);