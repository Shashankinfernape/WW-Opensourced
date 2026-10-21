__d("WAWebCollectionHandlerWamSyncUtil", [
    "WALongInt",
    "WATimeUtils",
    "WAWebMdBootstrapAppStateDataDownloadedWamEvent",
    "WAWebSyncdConst",
    "WAWebSyncdMdSyncFieldstatMeta",
    "WAWebWamEnumMdBootstrapPayloadType",
    "WAWebWamEnumMdBootstrapStepResult",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = [
        o("WAWebSyncdConst").CollectionName.CriticalBlock,
        o("WAWebSyncdConst").CollectionName.CriticalUnblockLow
    ];
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ collectionName, downloadSize, downloadStartTs, failureReason, isSuccess }) {
            const s = new (o("WAWebMdBootstrapAppStateDataDownloadedWamEvent")).MdBootstrapAppStateDataDownloadedWamEvent({
                mdBootstrapPayloadType: e.includes(collectionName) ? o("WAWebWamEnumMdBootstrapPayloadType").MD_BOOTSTRAP_PAYLOAD_TYPE.CRITICAL : o("WAWebWamEnumMdBootstrapPayloadType").MD_BOOTSTRAP_PAYLOAD_TYPE.NON_CRITICAL,
                mdTimestamp: o("WATimeUtils").unixTimeMs(),
                mdBootstrapStepDuration: o("WATimeUtils").unixTimeMs() - downloadStartTs,
                mdBootstrapStepResult: isSuccess === "success" ? o("WAWebWamEnumMdBootstrapStepResult").MD_BOOTSTRAP_STEP_RESULT.SUCCESS : o("WAWebWamEnumMdBootstrapStepResult").MD_BOOTSTRAP_STEP_RESULT.FAILURE,
                mdSessionId: yield o("WAWebSyncdMdSyncFieldstatMeta").MdSyncFieldStatsMeta.getMdSessionId(),
                mdSyncFailureReason: failureReason ?? undefined
            });
            const u = yield o("WAWebSyncdMdSyncFieldstatMeta").MdSyncFieldStatsMeta.getStorageEstimation();
            if (u.mdStorageQuotaBytes !== o("WAWebSyncdMdSyncFieldstatMeta").STORAGE_QUOTA_UNAVAILABLE) {
                s.mdStorageQuotaUsedBytes = u.mdStorageQuotaUsedBytes;
                s.mdStorageQuotaBytes = u.mdStorageQuotaBytes;
            }
            try {
                const c = o("WALongInt").maybeNumberOrThrowIfTooLarge(downloadSize);
                if (c != null) {
                    s.mdBootstrapPayloadSize = c;
                }
            } catch (e) {}
            s.commit();
        });
        return u.apply(this, arguments);
    }
    l.commitBootstrapAppStateDownloadMetric = s;
}, 98);