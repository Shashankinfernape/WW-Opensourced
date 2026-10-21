__d("WAWebNonMessageDataRequestHandlerGenLinkPreview", [
    "WAResolvable",
    "WAWebNonMessageDataRequestLoggingUtils",
    "WAWebProtobufsMmsRetry.pb"
], function(t, n, r, o, a, i, l) {
    const e = new Map;
    function s(t) {
        const n = new (o("WAResolvable")).Resolvable;
        e.set(t, n);
        return n;
    }
    function u(t) {
        o("WAWebNonMessageDataRequestLoggingUtils").logLinkPreviewResponse({
            didRespondHqPreview: t.peerDataOperationResult[0]?.linkPreviewResponse?.hqThumbnail != null,
            isPreviewSuccess: t.peerDataOperationResult[0]?.mediaUploadResult === o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType.SUCCESS,
            stanzaId: t.stanzaId
        });
        if (t.stanzaId != null) {
            const a = t.stanzaId;
            if (e.has(a)) {
                const i = e.get(a);
                e.delete(a);
                i?.resolve(t.peerDataOperationResult[0]);
            }
        }
    }
    l.registerLinkPreviewHandlerHook = s;
    l.handleGenerateLinkPreviewOperationRequestResponse = u;
}, 98);