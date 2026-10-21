__d("WAWebHandleHistorySyncNotification", [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiHistorySyncNotification",
    "WAWebDownloadManager",
    "WAWebGetHistorySyncMetrics",
    "WAWebGetMetricHistorySyncPayloadType",
    "WAWebHandleHistorySyncChunk",
    "WAWebHandleHistorySyncMessageAccessStatusChange",
    "WAWebHistorySyncLogUtils",
    "WAWebHistorySyncNotificationUtils",
    "WAWebHistorySyncProgress",
    "WAWebHttpErrors",
    "WAWebJestE2ELogUtils",
    "WAWebMdBootstrapHistoryDataReceivedWamEvent",
    "WAWebMdSyncDownloadFailureReason",
    "WAWebMsgKey",
    "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebProtobufsHistorySync.pb",
    "WAWebSendHistSyncServerErrorReceiptJob",
    "WAWebStartMediaDownloadQpl",
    "WAWebSyncBootstrap",
    "WAWebSyncGatingUtils",
    "WAWebSyncdMdSyncFieldstatMeta",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsTypes",
    "WAWebWamEnumMdBootstrapPayloadType",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "gkx"
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
    const S = 11;
    function R(e, t, n) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, remote, a) {
            const downloadQpl = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
                entryPoint: "HandleHistorySyncNotification"
            });
            try {
                o("WAWebJestE2ELogUtils").maybeLogToJestE2eJSConsole("received history sync notif");
                if (!t) {
                    downloadQpl.endFail("missing_history_sync_metadata", {
                        string: {
                            earlyExitReason: "missing_history_sync_metadata"
                        }
                    });
                    return;
                }
                if (!o("WAWebUserPrefsMeUser").isMePrimary(remote)) {
                    if (remote == null || !(remote instanceof r("WAWebWid"))) {
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] History sync empty wid error"
                        ]))).sendLogs("History sync empty wid error");
                        downloadQpl.endFail("invalid_sender", {
                            string: {
                                earlyExitReason: "invalid_sender"
                            }
                        });
                        return;
                    }
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] History sync payload wid error"
                    ]))).sendLogs("History sync payload wid error");
                    downloadQpl.endFail("non_primary_sender", {
                        string: {
                            earlyExitReason: "non_primary_sender"
                        }
                    });
                    return;
                }
                if (t.historySyncNotification.syncType === o("WAWebProtobufsE2E.pb").Message$HistorySyncType.MESSAGE_ACCESS_STATUS) {
                    downloadQpl.addPoint("history_sync_message_access_status");
                    return o("WAWebHandleHistorySyncMessageAccessStatusChange").handleHistorySyncMessageAccessStatusChange(t.historySyncNotification);
                }
                const downloadOptions = t.downloadOptions;
                if (!downloadOptions) {
                    downloadQpl.endFail("missing_download_options", {
                        string: {
                            earlyExitReason: "missing_download_options"
                        }
                    });
                    return;
                }
                if (!r("gkx")("26258") && o("WAWebABProps").getABPropConfigValue("web_abprop_drop_full_history_sync") && t.historySyncNotification.syncType === o("WAWebProtobufsE2E.pb").Message$HistorySyncType.FULL) {
                    downloadQpl.endFail("full_history_sync_dropped", {
                        string: {
                            earlyExitReason: "full_history_sync_dropped"
                        }
                    });
                    return;
                }
                const L = !!t.historySyncNotification.originalMessageId;
                const E = L ? t.historySyncNotification.originalMessageId : a;
                const msgKey = new (r("WAWebMsgKey"))({
                    remote,
                    fromMe: true,
                    id: E
                }).toString();
                const I = t.historySyncNotification.progress ?? 0;
                const T = {
                    msgKey,
                    processed: 0,
                    downloadOptions,
                    isReupload: 1,
                    historySyncStepStartedTs: o("WATimeUtils").unixTimeMs(),
                    reuploadPending: false,
                    historySyncPayloadSize: t.historySyncNotification.fileLength,
                    oldestMsgInChunkTimestampSec: t.historySyncNotification.oldestMsgInChunkTimestampSec,
                    initialHistBootstrapInlinePayload: t.historySyncNotification.initialHistBootstrapInlinePayload,
                    peerDataRequestSessionId: t.historySyncNotification.peerDataRequestSessionId,
                    progress: I,
                    encHandle: t.historySyncNotification.encHandle
                };
                if (!L || t.historySyncNotification.syncType === o("WAWebProtobufsE2E.pb").Message$HistorySyncType.INITIAL_BOOTSTRAP) {
                    T.syncType = t.historySyncNotification.syncType;
                    T.chunkOrder = t.historySyncNotification.chunkOrder || 0;
                    T.isReupload = 0;
                }
                const D = T;
                if (D.syncType === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.INITIAL_BOOTSTRAP) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][initial bootstrap] notification accepted, ",
                        ""
                    ])), o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(D)).tags("history-sync");
                }
                if (D.syncType === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.RECENT && I === 100) {
                    const x = D.chunkOrder;
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] setting total chunk count when receiving: ",
                        ""
                    ])), x);
                    yield o("WAWebUserPrefsHistorySync").setChunkCountForEndOfRecentHistorySync(x ?? 1);
                    o("WAWebHistorySyncProgress").updateHistorySyncProgressModel();
                }
                const $ = new (o("WAWebMdBootstrapHistoryDataReceivedWamEvent")).MdBootstrapHistoryDataReceivedWamEvent({
                    mdBootstrapPayloadType: D.syncType === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.INITIAL_BOOTSTRAP ? o("WAWebWamEnumMdBootstrapPayloadType").MD_BOOTSTRAP_PAYLOAD_TYPE.CRITICAL : o("WAWebWamEnumMdBootstrapPayloadType").MD_BOOTSTRAP_PAYLOAD_TYPE.NON_CRITICAL,
                    mdBootstrapHistoryPayloadType: o("WAWebGetMetricHistorySyncPayloadType").getMetricHistorySyncPayloadType(D.syncType),
                    mdTimestamp: o("WATimeUtils").unixTimeMs(),
                    mdSessionId: yield o("WAWebSyncdMdSyncFieldstatMeta").MdSyncFieldStatsMeta.getMdSessionId(),
                    historySyncStageProgress: I
                });
                if (D.chunkOrder != null) {
                    $.historySyncChunkOrder = D.chunkOrder;
                }
                $.commit();
                e: {
                    const P = D.syncType;
                    if (P === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.INITIAL_BOOTSTRAP || P === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.INITIAL_STATUS_V3 || P === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.NON_BLOCKING_DATA) {
                        o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] initial sync received ",
                            ""
                        ])), o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(D));
                        o("WAWebHandleHistorySyncChunk").handleHistorySyncChunk(D);
                        downloadQpl.addPoint("history_sync_chunk_dispatched");
                        return;
                    }
                    if (P === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.PUSH_NAME) {
                        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] initial pushname received ",
                            ""
                        ])), o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(D));
                        yield o("WAWebApiHistorySyncNotification").enqueueNotification(babelHelpers.extends({}, D, {
                            downloadOptions: babelHelpers.extends({}, D.downloadOptions)
                        }), true);
                        o("WAWebHandleHistorySyncChunk").handleHistorySyncChunk(D);
                        downloadQpl.addPoint("history_sync_chunk_dispatched");
                        return;
                    }
                    if (P === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.ON_DEMAND) {
                        if (o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled()) {
                            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                                "[history sync] on demand history sync received ",
                                ""
                            ])), o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(D));
                            if (D.peerDataRequestSessionId == null) {
                                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                                    "[history sync][rdu] on demand chunk missing session id"
                                ])));
                            }
                            if (!o("WAWebNonMessageDataRequestHistorySyncOnDemandUtils").inFlightHistorySyncOnDemandRequests.has(D.peerDataRequestSessionId ?? "")) {
                                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                                    "[history sync][rdu] drop on demand notif, timeout key=",
                                    ""
                                ])), r("gkx")("26258") ? "" : D.peerDataRequestSessionId);
                                downloadQpl.endFail("on_demand_request_expired", {});
                                return;
                            }
                            o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                                "[history sync][rdu] clean on demand req, received key=",
                                ""
                            ])), r("gkx")("26258") ? "" : D.peerDataRequestSessionId);
                            D.peerDataRequestChatId = o("WAWebNonMessageDataRequestHistorySyncOnDemandUtils").inFlightHistorySyncOnDemandRequests.get(D.peerDataRequestSessionId ?? "");
                            o("WAWebNonMessageDataRequestHistorySyncOnDemandUtils").inFlightHistorySyncOnDemandRequests.delete(D.peerDataRequestSessionId ?? "");
                            yield o("WAWebApiHistorySyncNotification").enqueueNotification(D);
                        }
                        break e;
                    }
                    {
                        o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] recent/full chunk received, add to db: ",
                            ""
                        ])), o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(D));
                        if (D.syncType === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.RECENT) {
                            if (T.chunkOrder != null && t.progress != null && t.progress !== 0) {
                                const A = Math.ceil(T.chunkOrder / (t.progress / 100));
                                o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                                    "[history sync] setting estimated total chunk count: ",
                                    ""
                                ])), A);
                                o("WAWebUserPrefsHistorySync").setEstimatedChunkCountForEndOfRecentHistorySync(A);
                            }
                            if (T.oldestMsgInChunkTimestampSec != null) {
                                const F = o("WAWebUserPrefsHistorySync").getHistorySyncEarliestDate();
                                if (F && T.oldestMsgInChunkTimestampSec < F) {
                                    o("WAWebUserPrefsHistorySync").setHistorySyncEarliestDate(T.oldestMsgInChunkTimestampSec);
                                }
                            }
                            o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(D.syncType, o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.RECEIVED, D.chunkOrder);
                            const O = D.chunkOrder != null && D.chunkOrder <= S;
                            if (O) {
                                const B = yield o("WAWebGetHistorySyncMetrics").getHistorySyncMetrics(D, true);
                                const { historySyncDownloadedMetric, historySyncStartDownloadingMetric } = B;
                                try {
                                    o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(D.syncType, o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.DOWNLOADING, D.chunkOrder);
                                    o("WAWebHistorySyncNotificationUtils").commitHistoryStartDownloadingMetric(historySyncStartDownloadingMetric, D.historySyncStepStartedTs, o("WATimeUtils").unixTimeMs());
                                    o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                                        "[history sync] start download on notif, ",
                                        ""
                                    ])), o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(D)).tags("history-sync");
                                    const isPreload = D.chunkOrder !== 1;
                                    const V = yield o("WAWebDownloadManager").downloadManager.downloadAndMaybeDecrypt(babelHelpers.extends({
                                        signal: new AbortController().signal,
                                        downloadQpl
                                    }, D.downloadOptions, {
                                        isPreload
                                    }));
                                    D.downloadedHistorySyncPayload = V;
                                    o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(D.syncType, o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.DOWNLOADED, D.chunkOrder);
                                    D.downloadOptions.mediaKey = "";
                                    o("WAWebHistorySyncNotificationUtils").commitHistoryDownloadedMetric({
                                        chunkDownloadFinishTimestamp: o("WATimeUtils").unixTimeMs(),
                                        historySyncDownloadMetric: historySyncDownloadedMetric,
                                        isSuccess: true,
                                        startTs: D.historySyncStepStartedTs
                                    });
                                } catch (error) {
                                    downloadQpl.endFailWithError("download_failed", r("getErrorSafe")(error).message);
                                    o("WALogger").WARN(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                                        "[history sync][recent sync] history sync download failed"
                                    ])));
                                    if (!(error instanceof o("WAWebHttpErrors").HttpNetworkError)) {
                                        const H = r("WAWebMsgKey").fromString(D.msgKey);
                                        o("WAWebHistorySyncNotificationUtils").commitHistoryDownloadedMetric({
                                            chunkDownloadFinishTimestamp: o("WATimeUtils").unixTimeMs(),
                                            failureReason: o("WAWebMdSyncDownloadFailureReason").getMdSyncDownloadFailureReason(error),
                                            historySyncDownloadMetric: historySyncDownloadedMetric,
                                            isSuccess: false,
                                            startTs: D.historySyncStepStartedTs
                                        });
                                        r("WAWebSendHistSyncServerErrorReceiptJob")(H.remote, H.id, D.downloadOptions.mediaKey);
                                        return;
                                    }
                                }
                            } else {
                                downloadQpl.addPoint("history_sync_predownload_skipped");
                            }
                        }
                        yield o("WAWebApiHistorySyncNotification").enqueueNotification(D);
                        break e;
                    }
                }
                o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] continueProgressiveHistorySyncProcessingV2 ",
                    ""
                ])), o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(D));
                r("WAWebSyncBootstrap").continueProgressiveHistorySyncProcessingV2(o("WAWebHistorySyncNotificationUtils").HistorySyncScheduleSource.NewRecentSyncNotification);
                if (downloadQpl.isActive()) {
                    downloadQpl.endSuccess();
                }
            } catch (error) {
                if (downloadQpl.isActive()) {
                    downloadQpl.endFailWithError("history_sync_notification_failed", r("getErrorSafe")(error).message);
                }
                throw error;
            }
        });
        return L.apply(this, arguments);
    }
    l.handleHistorySyncNotification = R;
}, 98);