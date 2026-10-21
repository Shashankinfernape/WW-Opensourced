__d("WAWebHandleQPPrefetchTimestampNotification", [
    "WASmaxPsaResetSmbLastQpPrefetchTimestampRPC",
    "WAWebQuickPromotionGating",
    "WAWebWorkerSafeBackendApi"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxPsaResetSmbLastQpPrefetchTimestampRPC").receiveResetSmbLastQpPrefetchTimestampRPC(e);
        const t_makeResetSmbLastQpPrefetchTimestampResponseAck = t.makeResetSmbLastQpPrefetchTimestampResponseAck;
        const r = t_makeResetSmbLastQpPrefetchTimestampResponseAck();
        if (o("WAWebQuickPromotionGating").qpGraphQLEnabledSMB()) {
            o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget("fetchQuickPromotionsNow");
        }
        return r;
    }
    l.handleQPPrefetchTimestampNotification = e;
}, 98);