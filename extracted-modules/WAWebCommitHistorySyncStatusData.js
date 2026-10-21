__d("WAWebCommitHistorySyncStatusData", [
    "WATimeUtils",
    "WAWebApiHistorySyncNotification",
    "WAWebHistorySyncNotificationUtils",
    "WAWebMdBootstrapHistorySyncStatusAfterPairingWamEvent",
    "WAWebSyncBootstrap",
    "WAWebSyncdMdSyncFieldstatMeta",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsTypes",
    "WAWebWamEnumMdBootstrapHistoryPayloadType",
    "WAWebWamEnumMdHistorySyncStatusResult",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield u(e);
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(activeTimeAfterPairing) {
            const mdSessionId = yield o("WAWebSyncdMdSyncFieldstatMeta").MdSyncFieldStatsMeta.getMdSessionId();
            const i = new (o("WAWebMdBootstrapHistorySyncStatusAfterPairingWamEvent")).MdBootstrapHistorySyncStatusAfterPairingWamEvent({
                mdBootstrapHistoryPayloadType: o("WAWebWamEnumMdBootstrapHistoryPayloadType").MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE.RECENT_HISTORY,
                mdSessionId,
                mdTimestamp: o("WATimeUtils").unixTimeMs(),
                activeTimeAfterPairing,
                isLoopRunning: r("WAWebSyncBootstrap").getIsHistorySyncRunning()
            });
            const l = yield o("WAWebUserPrefsHistorySync").getLastHistoryRecentSyncedChunk();
            const s = l != null ? l.chunkOrder : -1;
            const u = l != null ? l.progress : -1;
            i.lastProcessedNotificationChunkOrder = s;
            i.lastProcessedNotificationChunkProgress = u;
            const c = (yield o("WAWebUserPrefsHistorySync").getHistorySyncTotalProcessedMessageCount()) ?? 0;
            i.totalProcessedMessageCount = c;
            const m = yield o("WAWebUserPrefsHistorySync").getHistorySyncStatus();
            if (m?.recentCompleted === true) {
                i.mdHistorySyncStatusResult = o("WAWebWamEnumMdHistorySyncStatusResult").MD_HISTORY_SYNC_STATUS_RESULT.SUCCESS;
                i.commit();
                return;
            }
            const p = yield o("WAWebHistorySyncNotificationUtils").getUnprocessedRecentSyncNotifications();
            const p_length = p.length;
            i.unprocessedNotificationCount = p_length;
            const f = p_length > 0 ? p[0].chunkOrder ?? 0 : -1;
            i.nextNotificationChunkOrder = f;
            if (o("WAWebApiHistorySyncNotification").inFlightChunk.size > 0) {
                i.mdHistorySyncStatusResult = o("WAWebWamEnumMdHistorySyncStatusResult").MD_HISTORY_SYNC_STATUS_RESULT.IN_PROGRESS;
                i.commit();
                return;
            }
            const g = l ? s + 1 : 1;
            const h = yield o("WAWebUserPrefsHistorySync").getRecentSyncSingleChunkStatus();
            const y = d(h, g);
            i.mdHistorySyncStatusResult = y;
            i.commit();
        });
        return c.apply(this, arguments);
    }
    function d(e, t) {
        if (e == null || e[t] == null) {
            return o("WAWebWamEnumMdHistorySyncStatusResult").MD_HISTORY_SYNC_STATUS_RESULT.FAIL_TO_RECEIVE;
        }
        return ((e)=>{
            if (e === o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.RECEIVED) {
                return o("WAWebWamEnumMdHistorySyncStatusResult").MD_HISTORY_SYNC_STATUS_RESULT.FAIL_TO_STORE_CHUNK;
            }
            if (e === o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.NOTIFICATION_STORED) {
                return o("WAWebWamEnumMdHistorySyncStatusResult").MD_HISTORY_SYNC_STATUS_RESULT.FAIL_TO_FETCH;
            }
            if (e === o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.DOWNLOADING) {
                return o("WAWebWamEnumMdHistorySyncStatusResult").MD_HISTORY_SYNC_STATUS_RESULT.FAIL_TO_DOWNLOAD;
            }
            if (e === o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.DOWNLOADED) {
                return o("WAWebWamEnumMdHistorySyncStatusResult").MD_HISTORY_SYNC_STATUS_RESULT.PROTOBUF_ERROR;
            }
            if (e === o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.DECODED) {
                return o("WAWebWamEnumMdHistorySyncStatusResult").MD_HISTORY_SYNC_STATUS_RESULT.FAIL_TO_PREPROCESS;
            }
            if (e === o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.MESSAGE_PREPROCESSED) {
                return o("WAWebWamEnumMdHistorySyncStatusResult").MD_HISTORY_SYNC_STATUS_RESULT.FAIL_TO_ENCRYPT;
            }
            if (e === o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.ENCRYPTED) {
                return o("WAWebWamEnumMdHistorySyncStatusResult").MD_HISTORY_SYNC_STATUS_RESULT.FAIL_TO_STORE;
            }
            return o("WAWebWamEnumMdHistorySyncStatusResult").MD_HISTORY_SYNC_STATUS_RESULT.OTHER_ERROR;
        })(e[t]);
    }
    l.commitHistorySyncStatusData = e;
}, 98);