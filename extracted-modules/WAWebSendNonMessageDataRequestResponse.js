__d("WAWebSendNonMessageDataRequestResponse", [
    "Promise",
    "WALogger",
    "WAWebApiPeerMessageStore",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebOutgoingPeerMsgKey",
    "WAWebProtobufsE2E.pb",
    "WAWebSendAppStateSyncMsgJob",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t, n) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r, a) {
            const i = yield d(t, r, a);
            if (i == null) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "peer message: the constructed peer data operation request response message is null"
                ])));
                return (s || (s = n("Promise"))).resolve();
            }
            yield o("WAWebApiPeerMessageStore").storePeerMessages([
                i
            ]);
            return o("WAWebSendAppStateSyncMsgJob").encryptAndSendKeyMsg({
                msg: i
            });
        });
        return c.apply(this, arguments);
    }
    function d(e, t, n) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const peerDataOperationRequestResponseMessage = t === o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.UPLOAD_STICKER ? p(e, n) : t === o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.SEND_RECENT_STICKER_BOOTSTRAP || t === o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.GENERATE_LINK_PREVIEW || t === o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.HISTORY_SYNC_ON_DEMAND || t === o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.PLACEHOLDER_MESSAGE_RESEND || t === o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.WAFFLE_LINKING_NONCE_FETCH || t === o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.FULL_HISTORY_SYNC_ON_DEMAND || t === o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.COMPANION_META_NONCE_FETCH || t === o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.COMPANION_SYNCD_SNAPSHOT_FATAL_RECOVERY || t === o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.COMPANION_CANONICAL_USER_NONCE_FETCH || t === o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.HISTORY_SYNC_CHUNK_RETRY || t === o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.GALAXY_FLOW_ACTION || t === o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.BUSINESS_BROADCAST_INSIGHTS_DELIVERED_TO || t === o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.BUSINESS_BROADCAST_INSIGHTS_REFRESH || t === o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.CONTACT_REFRESH_REQUEST || t === o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.RECENT_CONVERSATIONS_ON_DEMAND_REQUEST ? null : (()=>{
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t}`);
            })();
            if (peerDataOperationRequestResponseMessage == null) {
                return null;
            }
            const i = o("WAWebOutgoingPeerMsgKey").buildOutgoingPeerMsgKey((yield r("WAWebMsgKey").newId()));
            return {
                id: i,
                to: o("WAWebUserPrefsMeUser").getMyPrimaryForOutgoingPeerMessage(),
                type: "protocol",
                subtype: "peer_data_operation_request_response_message",
                kind: o("WAWebMsgType").MsgKind.PeerMessage,
                peerDataOperationRequestResponseMessage
            };
        });
        return m.apply(this, arguments);
    }
    function p(stanzaId, peerDataOperationResult) {
        if (peerDataOperationResult == null) {
            return null;
        }
        return {
            stanzaId,
            peerDataOperationRequestType: o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.UPLOAD_STICKER,
            peerDataOperationResult
        };
    }
    l.sendPeerDataOperationRequestResponseMessage = u;
}, 98);