__d("WAWebHandleWorkerCompatibleRecentSyncChunk", [
    "WALogger",
    "WATimeUtils",
    "WAWebABPropsCache",
    "WAWebApiHistorySyncNotification",
    "WAWebBackendEventBus",
    "WAWebBackendWorkerClient",
    "WAWebDownloadManager",
    "WAWebGetHistorySyncMetrics",
    "WAWebGetHistorySyncProgress",
    "WAWebHistorySyncLogUtils",
    "WAWebHistorySyncNotificationUtils",
    "WAWebHttpErrors",
    "WAWebMdSyncDownloadFailureReason",
    "WAWebMetricsAttributionActions",
    "WAWebMmsClient",
    "WAWebMsgKey",
    "WAWebProtobufsHistorySync.pb",
    "WAWebSendHistSyncServerErrorReceiptJob",
    "WAWebSendReceiptJobCommon",
    "WAWebStartMediaDownloadQpl",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsTypes",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    function _(e, t) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const a = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
                entryPoint: "HandleWorkerCompatibleRecentSyncChunk"
            });
            try {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[recent sync] handleHistorySyncChunk started ",
                    ""
                ])), o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(t)).tags("history-sync");
                n.addPoint("download_start");
                o("WAWebMetricsAttributionActions").startHistorySyncAttributionTracking(t.syncType);
                const i = yield o("WAWebGetHistorySyncProgress").getHistorySyncProgress(t);
                const l = t.downloadedHistorySyncPayload;
                const _ = yield o("WAWebGetHistorySyncMetrics").getHistorySyncMetrics(t, true);
                const { historySyncDataAppliedMetric, historySyncDownloadedMetric, historySyncStartDownloadingMetric } = _;
                let y = null;
                if (l != null) {
                    a.addPoint("history_sync_predownloaded_payload");
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[recent sync] use pre-downloaded payload ",
                        ""
                    ])), o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(t)).tags("history-sync");
                    y = l;
                } else {
                    o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(t.syncType, o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.DOWNLOADING, t.chunkOrder);
                    o("WAWebHistorySyncNotificationUtils").commitHistoryStartDownloadingMetric(historySyncStartDownloadingMetric, t.historySyncStepStartedTs, o("WATimeUtils").unixTimeMs());
                    try {
                        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync][recent sync] start downloading chunk, ",
                            ""
                        ])), o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(t)).tags("history-sync");
                        y = yield o("WAWebDownloadManager").downloadManager.downloadAndMaybeDecrypt(babelHelpers.extends({
                            signal: new AbortController().signal,
                            downloadQpl: a
                        }, t.downloadOptions));
                    } catch (error) {
                        a.endFailWithError("download_failed", String(error));
                        o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync][recent sync] history sync download failed"
                        ])));
                        o("WAWebMetricsAttributionActions").stopHistorySyncAttributionTracking(t.syncType);
                        if (error instanceof o("WAWebHttpErrors").HttpNetworkError) {
                            o("WAWebApiHistorySyncNotification").removeLocalFailureFromInFlightChunk(t.msgKey);
                            return;
                        }
                        const C = r("WAWebMsgKey").fromString(t.msgKey);
                        o("WAWebHistorySyncNotificationUtils").commitHistoryDownloadedMetric({
                            chunkDownloadFinishTimestamp: o("WATimeUtils").unixTimeMs(),
                            failureReason: o("WAWebMdSyncDownloadFailureReason").getMdSyncDownloadFailureReason(error),
                            historySyncDownloadMetric: historySyncDownloadedMetric,
                            isSuccess: false,
                            startTs: t.historySyncStepStartedTs
                        });
                        r("WAWebSendHistSyncServerErrorReceiptJob")(C.remote, C.id, t.downloadOptions.mediaKey);
                        yield o("WAWebApiHistorySyncNotification").markChunkForReuploadPending(t.msgKey);
                        return;
                    }
                    o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(t.syncType, o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.DOWNLOADED, t.chunkOrder);
                    t.downloadOptions.mediaKey = "";
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][recent sync] chunk downloaded, ",
                        ""
                    ])), o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(t));
                }
                n.addPoint("download_end");
                n.addPoint("history_sync_process_start");
                n.addPoint("get_bridge_start", {
                    bool: {
                        isABPropsReady: o("WAWebABPropsCache").isABPropConfigsReady(),
                        isBridgeReady: o("WAWebBackendWorkerClient").isBackendWorkerBridgeReady()
                    }
                });
                const b = yield o("WAWebBackendWorkerClient").getBackendWorkerBridge();
                n.addPoint("get_bridge_end");
                n.addPoint("process_in_worker_start", {
                    int: {
                        dataSize: y.byteLength
                    }
                });
                const v = yield b.sendAndReceive("historySync", "processV2", {
                    data: y,
                    chunkInfo: t
                }, false, undefined, undefined, [
                    y
                ]);
                n.addPoint("process_in_worker_end");
                n.addPoint("post_processing_start");
                if (!v.success) {
                    o("WAWebHistorySyncNotificationUtils").commitHistoryDataAppliedMetric({
                        historySyncDataAppliedMetric,
                        startTs: t.historySyncStepStartedTs,
                        isSuccess: false,
                        forceFlushWamBuffer: true,
                        failureReason: v.error
                    });
                    n.endFail(v.error);
                    throw r("err")(v.error);
                }
                yield o("WAWebApiHistorySyncNotification").updateCurrentlyProcessed(t.msgKey, t.syncType, t.chunkOrder);
                o("WAWebHistorySyncNotificationUtils").commitHistoryDataAppliedMetric({
                    historySyncDataAppliedMetric,
                    startTs: t.historySyncStepStartedTs,
                    isSuccess: true
                });
                const S = r("WAWebMsgKey").fromString(t.msgKey);
                const R = new Map;
                R.set(S.remote, [
                    S.id
                ]);
                if (t.syncType !== o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.INITIAL_STATUS_V3) {
                    o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                        to: S.remote,
                        type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.HISTORY_SYNC_COMPLETION,
                        groupedReceipt: R
                    });
                }
                if (t.downloadOptions.encFilehash != null) {
                    r("WAWebMmsClient").deleteMdHistorySyncBlob({
                        directPath: t.downloadOptions.directPath,
                        encFilehash: t.downloadOptions.encFilehash,
                        signal: new AbortController().signal,
                        encHandle: t.encHandle,
                        companionUserSecret: o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get("WAWebCompanionMetaNonce")
                    }).catch((e)=>{
                        o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "MMS client delete error"
                        ])));
                    });
                }
                if (i === 100) {
                    o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][recent sync] Recent history sync complete"
                    ]))).tags("history-sync");
                    o("WAWebMetricsAttributionActions").stopHistorySyncAttributionTracking(t.syncType);
                    yield o("WAWebUserPrefsHistorySync").setHistorySyncStatus({
                        recentCompleted: true
                    });
                    o("WAWebBackendEventBus").BackendEventBus.triggerRecentChatHistorySynced();
                }
                n.addPoint("post_processing_end");
                n.addPoint("history_sync_process_end");
                if (a.isActive()) {
                    a.endSuccess();
                }
            } catch (error) {
                if (a.isActive()) {
                    a.endFailWithError("worker_compatible_history_sync_chunk_failed", String(error));
                }
                throw error;
            }
        });
        return f.apply(this, arguments);
    }
    l.handleWorkerCompatibleRecentSyncChunk = _;
}, 98);