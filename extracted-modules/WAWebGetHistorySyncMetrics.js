__d("WAWebGetHistorySyncMetrics", [
    "WAWebGetHistorySyncProgress",
    "WAWebGetMetricHistorySyncPayloadType",
    "WAWebMdBootstrapDataAppliedWamEvent",
    "WAWebMdBootstrapHistoryDataDownloadedWamEvent",
    "WAWebMdBootstrapHistoryDataStartDownloadingWamEvent",
    "WAWebProtobufsHistorySync.pb",
    "WAWebSyncdMdSyncFieldstatMeta",
    "WAWebWamEnumMdBootstrapPayloadType",
    "WAWebWamEnumMdBootstrapSource",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, sentViaMms) {
            const mdBootstrapPayloadType = e.syncType === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.INITIAL_BOOTSTRAP ? o("WAWebWamEnumMdBootstrapPayloadType").MD_BOOTSTRAP_PAYLOAD_TYPE.CRITICAL : o("WAWebWamEnumMdBootstrapPayloadType").MD_BOOTSTRAP_PAYLOAD_TYPE.NON_CRITICAL;
            const mdBootstrapHistoryPayloadType = o("WAWebGetMetricHistorySyncPayloadType").getMetricHistorySyncPayloadType(e.syncType);
            const a = yield o("WAWebSyncdMdSyncFieldstatMeta").MdSyncFieldStatsMeta.getMdSessionId();
            const historySyncStageProgress = yield o("WAWebGetHistorySyncProgress").getHistorySyncProgress(e);
            const historySyncStartDownloadingMetric = new (o("WAWebMdBootstrapHistoryDataStartDownloadingWamEvent")).MdBootstrapHistoryDataStartDownloadingWamEvent({
                mdBootstrapPayloadType,
                mdBootstrapPayloadSize: e.historySyncPayloadSize,
                mdBootstrapHistoryPayloadType,
                mdSessionId: a,
                historySyncStageProgress
            });
            const historySyncDownloadedMetric = new (o("WAWebMdBootstrapHistoryDataDownloadedWamEvent")).MdBootstrapHistoryDataDownloadedWamEvent({
                mdBootstrapPayloadType,
                mdBootstrapPayloadSize: e.historySyncPayloadSize,
                mdBootstrapHistoryPayloadType,
                mdSessionId: a,
                historySyncStageProgress
            });
            const historySyncDataAppliedMetric = new (o("WAWebMdBootstrapDataAppliedWamEvent")).MdBootstrapDataAppliedWamEvent({
                mdBootstrapPayloadType,
                mdBootstrapSource: o("WAWebWamEnumMdBootstrapSource").MD_BOOTSTRAP_SOURCE.HISTORY,
                mdBootstrapHistoryPayloadType,
                mdSessionId: a,
                sentViaMms,
                historySyncStageProgress
            });
            if (e.chunkOrder != null) {
                historySyncStartDownloadingMetric.historySyncChunkOrder = e.chunkOrder;
                historySyncDownloadedMetric.historySyncChunkOrder = e.chunkOrder;
                historySyncDataAppliedMetric.historySyncChunkOrder = e.chunkOrder;
            }
            const c = yield o("WAWebSyncdMdSyncFieldstatMeta").MdSyncFieldStatsMeta.getStorageEstimation();
            if (c.mdStorageQuotaBytes !== o("WAWebSyncdMdSyncFieldstatMeta").STORAGE_QUOTA_UNAVAILABLE) {
                historySyncDownloadedMetric.mdStorageQuotaUsedBytes = c.mdStorageQuotaUsedBytes;
                historySyncDownloadedMetric.mdStorageQuotaBytes = c.mdStorageQuotaBytes;
            }
            return {
                historySyncStartDownloadingMetric,
                historySyncDownloadedMetric,
                historySyncDataAppliedMetric
            };
        });
        return s.apply(this, arguments);
    }
    l.getHistorySyncMetrics = e;
}, 98);