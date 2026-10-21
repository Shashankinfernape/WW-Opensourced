__d("WAWebPostMessageHighRetryCountMetric", [
    "WAWebMessageHighRetryCountWamEvent",
    "WAWebMessagingGatingUtils",
    "WAWebSessionScopeWamUtils",
    "WAWebWamEnumEncryptionTypeCode",
    "WAWebWamGroupMetricCache",
    "WAWebWamMsgUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = 5;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ isPq, msgInfo, retryCount, sessionScope }) {
            if (!(retryCount < e)) {
                const l = new (o("WAWebMessageHighRetryCountWamEvent")).MessageHighRetryCountWamEvent({
                    isPq,
                    retryCount,
                    messageType: o("WAWebWamMsgUtils").getMessageTypeFromMsgInfoType(msgInfo.type),
                    sessionScope: o("WAWebSessionScopeWamUtils").sessionScopeToWamType(sessionScope)
                });
                const s = o("WAWebWamMsgUtils").getWamE2eSenderType(msgInfo.author);
                if (s != null) {
                    l.e2eSenderType = s;
                }
                if (msgInfo.author.isHosted()) {
                    l.encryptionType = o("WAWebWamEnumEncryptionTypeCode").ENCRYPTION_TYPE_CODE.COEX;
                }
                const u = msgInfo.chat;
                if (u != null && u.isGroup()) {
                    const c = yield o("WAWebWamGroupMetricCache").getGroupMetrics(u);
                    if (c?.deviceSizeBucket != null) {
                        l.deviceSizeBucket = c.deviceSizeBucket;
                    }
                    if (c?.participantCount != null && c.participantCount > o("WAWebMessagingGatingUtils").getGroupSizeBypassingSampling()) {
                        l.weight = 0;
                    }
                }
                l.commit();
            }
        });
        return u.apply(this, arguments);
    }
    l.MAX_RETRY = e;
    l.maybePostMessageHighRetryCountMetric = s;
}, 98);