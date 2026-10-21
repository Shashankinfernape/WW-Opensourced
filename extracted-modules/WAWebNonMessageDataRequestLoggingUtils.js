__d("WAWebNonMessageDataRequestLoggingUtils", [
    "WALogger",
    "WATimeUtils",
    "WAWebNonMessagePeerDataMediaUploadWamEvent",
    "WAWebNonMessagePeerDataOperationResponseWamEvent",
    "WAWebNonMessagePeerDataRequestWamEvent",
    "WAWebProtobufsE2E.pb",
    "WAWebWamEnumPeerDataRequestType",
    "WAWebWebcLinkPreviewResponseHandleWamEvent",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = new Map;
    function u({ didRespondHqPreview, isPreviewSuccess, stanzaId }) {
        let i;
        const l = o("WATimeUtils").unixTimeMs();
        if (stanzaId != null) {
            const u = s.get(stanzaId);
            if (u != null) {
                i = l - u;
            }
        }
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "link preview: session id: ",
            ", is success: ",
            ", durationMs: ",
            ""
        ])), stanzaId, isPreviewSuccess, i);
        new (o("WAWebWebcLinkPreviewResponseHandleWamEvent")).WebcLinkPreviewResponseHandleWamEvent({
            previewSessionId: stanzaId,
            isPreviewSuccess,
            previewDurationMs: i ?? undefined,
            didRespondHqPreview
        }).commit();
        if (stanzaId != null) {
            s.delete(stanzaId);
        }
    }
    function c(e, t) {
        const n = m(e);
        new (o("WAWebNonMessagePeerDataRequestWamEvent")).NonMessagePeerDataRequestWamEvent({
            peerDataRequestCount: d(e, t),
            peerDataRequestType: n,
            peerDataRequestSessionId: t.id.id
        }).commit();
    }
    function d(e, t) {
        if (e === o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.SEND_RECENT_STICKER_BOOTSTRAP || e === o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.WAFFLE_LINKING_NONCE_FETCH || e === o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.FULL_HISTORY_SYNC_ON_DEMAND) {
            return 1;
        }
        if (e === o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.UPLOAD_STICKER) {
            return t.peerDataOperationRequestMessage?.requestStickerReupload?.length ?? 0;
        }
        if (e === o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.GENERATE_LINK_PREVIEW) {
            return t.peerDataOperationRequestMessage?.requestStickerReupload?.length ?? 0;
        }
        if (e === o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.HISTORY_SYNC_ON_DEMAND) {
            return 1;
        }
        if (e === o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.PLACEHOLDER_MESSAGE_RESEND) {
            return t.peerDataOperationRequestMessage?.placeholderMessageResendRequest?.length ?? 0;
        }
        if (e === o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.COMPANION_META_NONCE_FETCH || e === o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.COMPANION_CANONICAL_USER_NONCE_FETCH || e === o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.COMPANION_SYNCD_SNAPSHOT_FATAL_RECOVERY || e === o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.HISTORY_SYNC_CHUNK_RETRY || e === o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.GALAXY_FLOW_ACTION) {
            return 1;
        }
        if (e === o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.BUSINESS_BROADCAST_INSIGHTS_DELIVERED_TO || e === o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.BUSINESS_BROADCAST_INSIGHTS_REFRESH) {
            return -1;
        }
        if (e === o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.CONTACT_REFRESH_REQUEST || e === o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.RECENT_CONVERSATIONS_ON_DEMAND_REQUEST) {
            return 1;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function m(e) {
        switch(e){
            case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.UPLOAD_STICKER:
                return o("WAWebWamEnumPeerDataRequestType").PEER_DATA_REQUEST_TYPE.UPLOAD_STICKER;
            case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.SEND_RECENT_STICKER_BOOTSTRAP:
                return o("WAWebWamEnumPeerDataRequestType").PEER_DATA_REQUEST_TYPE.SEND_RECENT_STICKER_BOOTSTRAP;
            case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.GENERATE_LINK_PREVIEW:
                return o("WAWebWamEnumPeerDataRequestType").PEER_DATA_REQUEST_TYPE.GENERAL_LINK_PREVIEW;
            case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.HISTORY_SYNC_ON_DEMAND:
                return o("WAWebWamEnumPeerDataRequestType").PEER_DATA_REQUEST_TYPE.HISTORY_SYNC_ON_DEMAND;
            case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.PLACEHOLDER_MESSAGE_RESEND:
                return o("WAWebWamEnumPeerDataRequestType").PEER_DATA_REQUEST_TYPE.PLACEHOLDER_MESSAGE_RESEND;
            case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.WAFFLE_LINKING_NONCE_FETCH:
                return o("WAWebWamEnumPeerDataRequestType").PEER_DATA_REQUEST_TYPE.WAFFLE_LINKING_NONCE_FETCH;
            case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.FULL_HISTORY_SYNC_ON_DEMAND:
                throw r("err")("full history sync on demand is not supported in web");
            case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.COMPANION_META_NONCE_FETCH:
                throw r("err")("companion meta nonce fetch is not supported in web");
            case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.COMPANION_CANONICAL_USER_NONCE_FETCH:
                return o("WAWebWamEnumPeerDataRequestType").PEER_DATA_REQUEST_TYPE.UPLOAD_STICKER;
            case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.COMPANION_SYNCD_SNAPSHOT_FATAL_RECOVERY:
                return o("WAWebWamEnumPeerDataRequestType").PEER_DATA_REQUEST_TYPE.SYNCD_SNAPSHOT_RECOVERY;
            case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.HISTORY_SYNC_CHUNK_RETRY:
                throw r("err")("history sync chunk retry is not supported in web");
            case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.RECENT_CONVERSATIONS_ON_DEMAND_REQUEST:
                throw r("err")("recent conversations on demand request is not supported in web");
            case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.GALAXY_FLOW_ACTION:
                return o("WAWebWamEnumPeerDataRequestType").PEER_DATA_REQUEST_TYPE.UPLOAD_STICKER;
            case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.BUSINESS_BROADCAST_INSIGHTS_DELIVERED_TO:
                return o("WAWebWamEnumPeerDataRequestType").PEER_DATA_REQUEST_TYPE.UPLOAD_STICKER;
            case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.BUSINESS_BROADCAST_INSIGHTS_REFRESH:
                return o("WAWebWamEnumPeerDataRequestType").PEER_DATA_REQUEST_TYPE.UPLOAD_STICKER;
            case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.CONTACT_REFRESH_REQUEST:
                return o("WAWebWamEnumPeerDataRequestType").PEER_DATA_REQUEST_TYPE.UPLOAD_STICKER;
        }
    }
    function p(e, t, n, r, peerDataSuccessProcessCount, i, peerDataNotFoundCount) {
        const s = m(e);
        new (o("WAWebNonMessagePeerDataOperationResponseWamEvent")).NonMessagePeerDataOperationResponseWamEvent({
            peerDataResponseCount: n,
            peerDataSuccessResponseCount: r,
            peerDataSuccessProcessCount,
            peerDataErrorCount: i,
            peerDataNotFoundCount,
            peerDataRequestType: s,
            peerDataRequestSessionId: t
        }).commit();
    }
    function _({ errorCount, existingDataNoUploadCount, notFoundCount, requestCount, requestType, stanzaId, successUploadCount }) {
        if (requestType === o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.UPLOAD_STICKER) {
            const u = m(requestType);
            new (o("WAWebNonMessagePeerDataMediaUploadWamEvent")).NonMessagePeerDataMediaUploadWamEvent({
                peerDataRequestCount: requestCount,
                peerDataSuccessUploadCount: successUploadCount,
                peerDataExistingDataNoUploadCount: existingDataNoUploadCount,
                peerDataErrorCount: errorCount,
                peerDataNotFoundCount: notFoundCount,
                peerDataRequestType: u,
                peerDataRequestSessionId: stanzaId
            }).commit();
        }
    }
    function f(e, t) {
        new (o("WAWebNonMessagePeerDataOperationResponseWamEvent")).NonMessagePeerDataOperationResponseWamEvent({
            peerDataRequestType: o("WAWebWamEnumPeerDataRequestType").PEER_DATA_REQUEST_TYPE.HISTORY_SYNC_ON_DEMAND,
            peerDataResponseApplyResult: e,
            peerDataRequestSessionId: t
        }).commit();
    }
    function g(e, t, n, r, a, i) {
        const l = m(e);
        new (o("WAWebNonMessagePeerDataOperationResponseWamEvent")).NonMessagePeerDataOperationResponseWamEvent({
            peerDataResponseCount: r,
            peerDataSuccessResponseCount: a,
            peerDataErrorCount: i,
            peerDataResponseApplyResult: n,
            peerDataRequestType: l,
            peerDataRequestSessionId: t
        }).commit();
    }
    l.sendTimes = s;
    l.logLinkPreviewResponse = u;
    l.logNonMessagePeerDataRequest = c;
    l.logNonMessagePeerDataResponse = p;
    l.logMediaUpload = _;
    l.logHistorySyncOnDemandResponse = f;
    l.logPlaceholderMessageResendResponse = g;
}, 98);