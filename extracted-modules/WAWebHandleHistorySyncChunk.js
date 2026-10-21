__d("WAWebHandleHistorySyncChunk", [
    "Promise",
    "WABinary",
    "WAGzip",
    "WALogger",
    "WALongInt",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebAddonProcessMsgsUtils",
    "WAWebApiChatBulkGetByHistory",
    "WAWebApiChatCommon",
    "WAWebApiHistorySyncNotification",
    "WAWebAppTracker",
    "WAWebBackendEventBus",
    "WAWebChatConstants",
    "WAWebCurrentUser",
    "WAWebDBCreateLidPnMappings",
    "WAWebDBMessageUtils",
    "WAWebDownloadManager",
    "WAWebGetHistorySyncMetrics",
    "WAWebGetHistorySyncProgress",
    "WAWebHandleHistorySyncMsg",
    "WAWebHistoryMsgHandlerAction",
    "WAWebHistorySyncDynamicThrottlingManager",
    "WAWebHistorySyncHandlePushname",
    "WAWebHistorySyncHandleStatusMessages",
    "WAWebHistorySyncLidChatGating",
    "WAWebHistorySyncLogUtils",
    "WAWebHistorySyncNotificationCommonUtils",
    "WAWebHistorySyncNotificationUtils",
    "WAWebHistorySyncProgress",
    "WAWebHistorySyncWorkerCompatibleNotificationUtils",
    "WAWebHttpErrors",
    "WAWebLimitSharingProtoUtils",
    "WAWebMdSyncDownloadFailureReason",
    "WAWebMessageAssociation.flow",
    "WAWebMetricsAttributionActions",
    "WAWebMmsClient",
    "WAWebMsgKey",
    "WAWebNetworkStatus",
    "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
    "WAWebNonMessageDataRequestLoggingUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebProtobufsHistorySync.pb",
    "WAWebReleaseToEventLoop",
    "WAWebSchemaMessage",
    "WAWebSendHistSyncServerErrorReceiptJob",
    "WAWebSendReceiptJobCommon",
    "WAWebSetUsernameJob",
    "WAWebStartMediaDownloadQpl",
    "WAWebSyncGatingUtils",
    "WAWebThreadMsgUtils",
    "WAWebUpdateLidMetadataApi",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsTypes",
    "WAWebUsernameGatingUtils",
    "WAWebWamEnumMdBootstrapStepResult",
    "WAWebWamEnumPeerDataResponseApplyResultType",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "getErrorSafe",
    "gkx",
    "isEmptyObject"
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
    let S;
    let R;
    let L;
    let E;
    let k;
    let I;
    let T;
    let D;
    let x;
    let $;
    let P;
    let N;
    let M;
    let w;
    let A;
    let F;
    let O;
    let B;
    let W;
    let q;
    let U;
    let V;
    let H;
    let G;
    let z;
    let j;
    let K;
    let Q;
    const X = 10;
    function Y(e, t) {
        return J.apply(this, arguments);
    }
    function J() {
        J = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const a = t ?? {
                qpl: o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
                    entryPoint: "HandleHistorySyncChunk"
                }),
                initialChunkRetryCount: 0
            };
            const { initialChunkRetryCount, qpl } = a;
            if (initialChunkRetryCount === 1) {
                qpl.addAnnotations({
                    bool: {
                        hasRetry: true
                    }
                });
            }
            try {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] handleHistorySyncChunk started for ",
                    ""
                ])), o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(e)).tags("history-sync");
                if (e.syncType === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.INITIAL_BOOTSTRAP) {
                    const U = yield o("WAWebUserPrefsHistorySync").getInitialHistorySyncComplete();
                    if (U === true) {
                        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] Skip duplicate initial sync chunk ",
                            ""
                        ])), o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(e)).tags("history-sync");
                        qpl.endSuccess({
                            string: {
                                downloadResult: "duplicate_initial_sync_chunk"
                            }
                        });
                        return;
                    }
                    yield o("WAWebHistorySyncLidChatGating").persistForceHistoryLidChatSetting();
                }
                o("WAWebMetricsAttributionActions").startHistorySyncAttributionTracking(e.syncType);
                if (e.syncType === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.INITIAL_STATUS_V3) {
                    try {
                        const V = r("WAWebMsgKey").fromString(e.msgKey);
                        o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                            to: V.remote,
                            type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.HISTORY_SYNC_COMPLETION,
                            groupedReceipt: new Map().set(V.remote, [
                                V.id
                            ])
                        });
                    } catch (e) {
                        o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] Status receipt send failed"
                        ]))).tags("history-sync");
                    }
                }
                const H = yield o("WAWebGetHistorySyncProgress").getHistorySyncProgress(e);
                const G = o("WAWebHistorySyncNotificationUtils").maybeGetInlinePayload(e);
                const z = yield o("WAWebGetHistorySyncMetrics").getHistorySyncMetrics(e, G == null);
                const { historySyncDataAppliedMetric, historySyncDownloadedMetric, historySyncStartDownloadingMetric } = z;
                if (e.syncType === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.INITIAL_BOOTSTRAP) {
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][initial bootstrap] download started, ",
                        ""
                    ])), o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(e)).tags("history-sync");
                }
                o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(e.syncType, o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.DOWNLOADING, e.chunkOrder);
                o("WAWebHistorySyncNotificationUtils").commitHistoryStartDownloadingMetric(historySyncStartDownloadingMetric, e.historySyncStepStartedTs, o("WATimeUtils").unixTimeMs());
                let ne = null;
                if (G != null) {
                    qpl.addPoint("history_sync_inline_payload");
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] get inline payload in chunk, ",
                        ""
                    ])), o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(e)).tags("history-sync");
                    ne = G;
                } else {
                    try {
                        o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] start downloading chunk, ",
                            ""
                        ])), o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(e)).tags("history-sync");
                        ne = yield o("WAWebDownloadManager").downloadManager.downloadAndMaybeDecrypt(babelHelpers.extends({
                            signal: new AbortController().signal,
                            downloadQpl: qpl
                        }, e.downloadOptions));
                    } catch (error) {
                        o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] history sync download failed"
                        ])));
                        o("WAWebMetricsAttributionActions").stopHistorySyncAttributionTracking(e.syncType);
                        if (error instanceof o("WAWebHttpErrors").HttpNetworkError) {
                            if (e.syncType === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.INITIAL_BOOTSTRAP && initialChunkRetryCount < X) {
                                yield r("WAWebNetworkStatus").waitIfOffline();
                                o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                                    "[history sync] init sync download failed, retrying"
                                ]))).tags("history-sync");
                                return Y(e, {
                                    qpl,
                                    initialChunkRetryCount: initialChunkRetryCount + 1
                                });
                            }
                            qpl.endFailWithError("download_failed", r("getErrorSafe")(error).message);
                            o("WAWebApiHistorySyncNotification").removeLocalFailureFromInFlightChunk(e.msgKey);
                            return;
                        }
                        qpl.endFailWithError("download_failed", r("getErrorSafe")(error).message);
                        const re = r("WAWebMsgKey").fromString(e.msgKey);
                        o("WAWebHistorySyncNotificationUtils").commitHistoryDownloadedMetric({
                            chunkDownloadFinishTimestamp: o("WATimeUtils").unixTimeMs(),
                            failureReason: o("WAWebMdSyncDownloadFailureReason").getMdSyncDownloadFailureReason(error),
                            historySyncDownloadMetric: historySyncDownloadedMetric,
                            isSuccess: false,
                            startTs: e.historySyncStepStartedTs
                        });
                        if (e.syncType === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.ON_DEMAND) {
                            o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                                "[history sync][rdu] on-demand chunk download failed"
                            ])));
                            o("WAWebNonMessageDataRequestHistorySyncOnDemandUtils").handleHistorySyncOnDemandFailure(e.peerDataRequestChatId ?? "");
                            o("WAWebNonMessageDataRequestLoggingUtils").logHistorySyncOnDemandResponse(o("WAWebWamEnumPeerDataResponseApplyResultType").PEER_DATA_RESPONSE_APPLY_RESULT_TYPE.FAIL_TO_DOWNLOAD, e.peerDataRequestSessionId ?? "");
                        }
                        r("WAWebSendHistSyncServerErrorReceiptJob")(re.remote, re.id, e.downloadOptions.mediaKey);
                        yield o("WAWebApiHistorySyncNotification").markChunkForReuploadPending(e.msgKey);
                        return;
                    }
                }
                if (e.syncType === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.INITIAL_BOOTSTRAP) {
                    o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][initial bootstrap] download completed, ",
                        ""
                    ])), o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(e)).tags("history-sync");
                }
                o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(e.syncType, o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.DOWNLOADED, e.chunkOrder);
                e.downloadOptions.mediaKey = "";
                historySyncDownloadedMetric.mdBootstrapStepResult = o("WAWebWamEnumMdBootstrapStepResult").MD_BOOTSTRAP_STEP_RESULT.SUCCESS;
                const ie = new (o("WABinary")).Binary(ne);
                const le = yield o("WAGzip").inflate(ie.readByteArrayView());
                o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.HSProtobufParsing);
                const se = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsHistorySync.pb").HistorySyncSpec, le);
                o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.HSProtobufParsing);
                if (e.syncType === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.INITIAL_BOOTSTRAP) {
                    o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][initial bootstrap] protobuf decoded, ",
                        ""
                    ])), o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(e, undefined, se.conversations.length)).tags("history-sync");
                }
                o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] LID-PN mappings start, ",
                    ", cnt=",
                    ""
                ])), o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(e, undefined, undefined), se.phoneNumberToLidMappings.length);
                const ue = [];
                se.phoneNumberToLidMappings.forEach(({ lidJid, pnJid })=>{
                    if (lidJid != null && pnJid != null) {
                        ue.push({
                            lid: o("WAWebWidFactory").createUserLidOrThrow(lidJid),
                            pn: o("WAWebWidFactory").createUserWidOrThrow(pnJid)
                        });
                    }
                });
                const ce = {
                    mappings: ue,
                    flushImmediately: true,
                    learningSource: "history-sync-chunk"
                };
                if (e.syncType === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.INITIAL_BOOTSTRAP) {
                    yield o("WAWebDBCreateLidPnMappings").createLidPnMappings(ce);
                } else {
                    yield o("WAWebDBCreateLidPnMappings").createLidPnMappingsInBatches(ce);
                }
                o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] LID-PN mappings done, ",
                    ", cnt=",
                    ""
                ])), o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(e, undefined, undefined), ue.length);
                const de = o("WAWebHistorySyncNotificationCommonUtils").getLidMappingAsStringSet(ue);
                if (o("WAWebCurrentUser").isEmployee()) {
                    o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                        "completed learning lid mappings for history sync. count: ",
                        ". ",
                        "..."
                    ])), de?.size, o("WAWebHistorySyncNotificationCommonUtils").getLidsForLogging(de)).verbose();
                }
                const me = new Map;
                o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(e.syncType, o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.DECODED, e.chunkOrder);
                o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] chunk downloaded, ",
                    ""
                ])), o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(e, undefined, se.conversations.length));
                const chunkDownloadFinishTimestamp = o("WATimeUtils").unixTimeMs();
                if (e.syncType === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.RECENT && e.chunkOrder != null) {
                    o("WAWebHistorySyncProgress").updateHistorySyncProgressModel();
                }
                const _e = (failureReason)=>{
                    o("WAWebHistorySyncNotificationUtils").commitHistoryDataAppliedMetric({
                        historySyncDataAppliedMetric,
                        startTs: e.historySyncStepStartedTs,
                        isSuccess: false,
                        forceFlushWamBuffer: true,
                        failureReason
                    });
                };
                if (e.syncType === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.INITIAL_STATUS_V3 && se.statusV3Messages && se.statusV3Messages.length > 0) {
                    yield o("WAWebHistorySyncHandleStatusMessages").handleStatusMessages({
                        chunkDownloadFinishTimestamp,
                        chunkInfo: e,
                        historySyncDataAppliedMetric,
                        historySyncDownloadMetric: historySyncDownloadedMetric,
                        proto: se
                    }).catch((e)=>{
                        o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] storing status messages failed"
                        ]))).catching(r("getErrorSafe")(e));
                        _e(String(e));
                        throw e;
                    });
                } else if (e.syncType === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.NON_BLOCKING_DATA) {
                    yield o("WAWebHistoryMsgHandlerAction").handleNonBlockingData({
                        chunkDownloadFinishTimestamp,
                        chunkInfo: e,
                        historySyncDataAppliedMetric,
                        historySyncDownloadMetric: historySyncDownloadedMetric,
                        proto: se
                    }).catch((e)=>{
                        o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] storing non blocking data failed"
                        ]))).catching(r("getErrorSafe")(e));
                        _e(String(e));
                        throw e;
                    });
                } else if (e.syncType !== o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.PUSH_NAME) {
                    se.conversations = se.conversations.reduce((acc, conversation)=>{
                        let n = null;
                        try {
                            n = o("WAWebWidFactory").createWid(conversation.id);
                        } catch (error) {
                            o("WALogger").WARN(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                                '[history sync] wid creation failed "',
                                '": ',
                                ""
                            ])), conversation.id, error).tags("history-sync");
                        }
                        if (n) {
                            return acc.concat(conversation);
                        }
                        return acc;
                    }, []);
                }
                const fe = [];
                const mappings = [];
                const newUsernameUpdates = [];
                if (e.syncType === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.INITIAL_BOOTSTRAP) {
                    yield o("WAWebHistoryMsgHandlerAction").handleInitialSyncMsgs({
                        chunkDownloadFinishTimestamp,
                        chunkInfo: e,
                        historyLidPnMappings: ue,
                        historySyncDataAppliedMetric,
                        historySyncDownloadMetric: historySyncDownloadedMetric,
                        newLidMetadata: fe,
                        newUsernameUpdates,
                        proto: se
                    }).catch((e)=>{
                        o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] storing initial sync messages failed"
                        ]))).catching(r("getErrorSafe")(e));
                        _e(String(e));
                        throw e;
                    });
                } else if (e.syncType === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.PUSH_NAME) {
                    yield o("WAWebHistorySyncHandlePushname").handlePushName(se, e, historySyncDownloadedMetric, historySyncDataAppliedMetric, chunkDownloadFinishTimestamp).catch((e)=>{
                        o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] storing initial pushname failed"
                        ]))).catching(r("getErrorSafe")(e));
                        _e(String(e));
                        throw e;
                    });
                } else if (![
                    o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.INITIAL_STATUS_V3,
                    o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.NON_BLOCKING_DATA
                ].includes(e.syncType) && (o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] start processing non initial status messages"
                ]))), yield o("WAWebReleaseToEventLoop").releaseToEventLoop(), !Z(e, se))) {
                    const recentOrFullSyncMsgs = [];
                    const missingParentsCache = new Set;
                    const associatedMsgs = [];
                    const threadMsgs = [];
                    let Se = [];
                    const Re = new Set;
                    const lastMsgs = [];
                    const Ee = o("WAWebUserPrefsHistorySync").getHistoryInitialSyncBoundary();
                    let ke = 0;
                    let applyHistorySyncOnDemandFailure = false;
                    if (Ee == null || r("isEmptyObject")(Ee)) {
                        o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] boundary data is null or empty"
                        ])));
                    }
                    const Te = [];
                    const De = [];
                    const xe = [];
                    const $e = [];
                    let Pe = 0;
                    let Ne = 0;
                    let Me = 0;
                    let we = 0;
                    const chatRows = o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat() ? yield o("WAWebApiChatBulkGetByHistory").bulkGetChatsMaybeByHistory(se.conversations.map((e)=>e.id)) : [];
                    for(let Fe = 0; Fe < se.conversations.length; Fe++){
                        let Oe = false;
                        const conversation = se.conversations[Fe];
                        const We = conversation.id;
                        const qe = Ee?.[We];
                        if (qe == null) {
                            if (Te.length < 3) {
                                Te.push(r("gkx")("26258") ? "-" : We);
                            }
                            const Ue = o("WAWebWidFactory").createWid(We).toJid();
                            if (Ee?.[Ue] != null && De.length < 3) {
                                De.push(r("gkx")("26258") ? "-" : We);
                            }
                            Oe = true;
                        }
                        const protobufChatId = o("WAWebWidFactory").createWid(We);
                        if (protobufChatId.isNewsletter()) {
                            if (xe.length < 3) {
                                xe.push(r("gkx")("26258") ? "-" : We);
                            }
                            Oe = true;
                        }
                        const He = o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat() ? chatRows[Fe] : yield o("WAWebApiChatCommon").getChatMaybeByHistory(We);
                        const dbChatId = He?.id != null ? o("WAWebWidFactory").createWid(He.id) : protobufChatId;
                        const ze = He?.endOfHistoryTransferType === o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType.COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY;
                        if (!He && qe != null || He && He.endOfHistoryTransferType == null || ze) {
                            if ($e.length < 3) {
                                $e.push(r("gkx")("26258") ? "-" : We);
                            }
                            Oe = true;
                        }
                        if (Oe) {
                            if (e.syncType === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.ON_DEMAND) {
                                applyHistorySyncOnDemandFailure = true;
                            }
                        } else {
                            let je = 0;
                            let Ke = self.performance.now();
                            let Qe = 0;
                            let Xe = 0;
                            let Ye = 0;
                            let Je = 0;
                            for(let Ze = 0; Ze < conversation.messages.length; Ze++){
                                ke++;
                                const ot = o("WAWebHistorySyncDynamicThrottlingManager").historySyncDynamicThrottlingManager.getThrottleRate();
                                if (++je >= ot.batchSize) {
                                    const at = self.performance.now();
                                    const it = at - Ke;
                                    Qe++;
                                    o("WAWebHistorySyncDynamicThrottlingManager").historySyncDynamicThrottlingManager.setLastProcessTime(it, je);
                                    if (ot.delayMs > 0) {
                                        Xe++;
                                        yield o("WAPromiseDelays").delayMs(ot.delayMs);
                                    }
                                    je = 0;
                                    Ke = self.performance.now();
                                }
                                const message = conversation.messages[Ze];
                                const st = o("WALongInt").maybeNumberOrThrowIfTooLarge(message.msgOrderId);
                                if (!(qe != null && qe !== -1 && st != null && st >= qe)) {
                                    const ut = message?.message?.message?.protocolMessage?.type === o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.REQUEST_WELCOME_MESSAGE;
                                    if (ut === true) {
                                        Ye++;
                                        continue;
                                    }
                                    const ct = message?.message?.message?.protocolMessage?.type === o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.BOT_MEMU_ONBOARDING_MESSAGE;
                                    if (ct) {
                                        Je++;
                                        continue;
                                    }
                                    if (!o("WAWebLimitSharingProtoUtils").shouldWithholdHistorySyncMessage(conversation, message)) {
                                        Re.add(We);
                                        const dt = o("WAWebHistorySyncNotificationCommonUtils").parseWebMsgInfoAndReturnNullOnFailure({
                                            protobufChatId,
                                            message: message.message,
                                            chunkInfo: e,
                                            allLidMapping: de,
                                            totalMissingMapping: me,
                                            historyLidPnMappings: ue,
                                            dbChatId
                                        });
                                        if (dt && dt.id.remote.toString() !== We) {
                                            Re.add(dt.id.remote.toString());
                                        }
                                        if (Ze === 0 && dt && He) {
                                            const mt = yield o("WAWebSchemaMessage").getMessageTable().betweenCount([
                                                "internalId"
                                            ], o("WAWebDBMessageUtils").beginningOfChat(dbChatId), o("WAWebDBMessageUtils").endOfChat(dbChatId));
                                            if (mt === 0) {
                                                lastMsgs.push(dt);
                                            }
                                        }
                                        Se = Se.concat(o("WAWebAddonProcessMsgsUtils").parseHistorySyncMsg({
                                            webMsgInfo: message.message,
                                            parsedWebMsgInfo: dt,
                                            isFromCag: conversation.isDefaultSubgroup ?? false
                                        }));
                                        if (dt != null && message.message?.commentMetadata?.commentParentKey == null) {
                                            if (missingParentsCache.has(dt.id.toString())) {
                                                missingParentsCache.delete(dt == null ? undefined : dt.id.toString());
                                            }
                                            recentOrFullSyncMsgs.push(dt);
                                        }
                                        if (dt != null && o("WAWebMessageAssociation.flow").isAssociatedMsg(dt)) {
                                            const pt = dt.parentMsgKey.toString();
                                            missingParentsCache.add(pt);
                                            associatedMsgs.push(dt);
                                        }
                                        if (dt != null && o("WAWebThreadMsgUtils").isThreadMsg(dt)) {
                                            threadMsgs.push(dt);
                                        }
                                    }
                                }
                            }
                            Pe += Qe;
                            Ne += Xe;
                            Me += Ye;
                            we += Je;
                            if (je > 0) {
                                const _t = self.performance.now();
                                const ft = _t - Ke;
                                o("WAWebHistorySyncDynamicThrottlingManager").historySyncDynamicThrottlingManager.setLastProcessTime(ft, je);
                            }
                        }
                    }
                    if (Pe > 0) {
                        o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] Throttling observed ",
                            " times across all conversations"
                        ])), Pe).tags("history-sync");
                    }
                    if (Ne > 0) {
                        o("WALogger").LOG($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] Applied ",
                            " message throttling delays across all conversations"
                        ])), Ne).tags("history-sync");
                    }
                    if (Me > 0) {
                        o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] Dropped ",
                            " request welcome messages"
                        ])), Me);
                    }
                    if (we > 0) {
                        o("WALogger").LOG(N || (N = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] Dropped ",
                            " memu onboarding messages"
                        ])), we);
                    }
                    if (Te.length > 0) {
                        o("WALogger").LOG(M || (M = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] dropped ",
                            " chats, null boundary => ",
                            ""
                        ])), Te.length, Te).tags("history-sync");
                    }
                    if (De.length > 0) {
                        o("WALogger").LOG(w || (w = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] dropped ",
                            " chats, null boundary, exist as jid"
                        ])), De.length).sendLogs("history-sync-unexpected-conversation-drop");
                    }
                    if (xe.length > 0) {
                        o("WALogger").LOG(A || (A = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] dropped ",
                            " chats, sync disabled"
                        ])), xe.length);
                    }
                    if ($e.length > 0) {
                        o("WALogger").LOG(F || (F = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] dropped ",
                            " chats, already complete ",
                            ""
                        ])), $e.length, o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(e)).tags("history-sync");
                    }
                    historySyncDownloadedMetric.mdBootstrapMessagesCount = ke;
                    historySyncDownloadedMetric.mdBootstrapChatsCount = se.conversations.length;
                    o("WAWebHistorySyncNotificationUtils").commitHistoryDownloadedMetric({
                        chunkDownloadFinishTimestamp,
                        historySyncDownloadMetric: historySyncDownloadedMetric,
                        isSuccess: true,
                        startTs: e.historySyncStepStartedTs
                    });
                    o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(e.syncType, o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.MESSAGE_PREPROCESSED, e.chunkOrder);
                    try {
                        if (recentOrFullSyncMsgs.length !== 0) {
                            yield o("WAWebHandleHistorySyncMsg").handleProgressiveHistorySyncMsgs({
                                associatedMsgs,
                                chatsWithRecentOrFullSyncMsgs: Array.from(Re),
                                chunkOrder: e.chunkOrder,
                                lastMsgs,
                                missingParentsCache,
                                recentOrFullSyncMsgs,
                                syncType: e.syncType,
                                threadMsgs,
                                unifiedAddons: Se
                            });
                        } else {
                            o("WALogger").LOG(O || (O = babelHelpers.taggedTemplateLiteralLoose([
                                "[history sync] no messages from history sync need to handle"
                            ])));
                        }
                        yield o("WAWebUserPrefsHistorySync").setLastHistorySyncedChunk(e.syncType, e.chunkOrder, H);
                        o("WAWebHistorySyncProgress").updateHistorySyncProgressModel();
                        yield o("WAWebApiHistorySyncNotification").updateCurrentlyProcessed(e.msgKey, e.syncType, e.chunkOrder);
                        const gt = new Set;
                        const ht = [];
                        for(let yt = 0; yt < se.conversations.length; yt++){
                            const conversation = se.conversations[yt];
                            const bt = o("WAWebWidFactory").createWid(conversation.id);
                            const vt = chatRows[yt];
                            const St = vt?.id != null ? o("WAWebWidFactory").createWid(vt.id) : bt;
                            gt.add(St.toString());
                            const Rt = Ee?.[conversation.id] != null;
                            let Lt = null;
                            if (Rt) {
                                Lt = conversation.endOfHistoryTransferType;
                            }
                            if (Lt != null) {
                                ht.push(o("WAWebHistorySyncWorkerCompatibleNotificationUtils").updateEndOfHistorySync(St, Lt));
                            }
                        }
                        yield (Q || (Q = n("Promise"))).all(ht);
                        ee({
                            applyHistorySyncOnDemandFailure,
                            chatRows,
                            chunkInfo: e,
                            proto: se
                        });
                        o("WAWebBackendEventBus").BackendEventBus.triggerHistorySyncChunkProcessed(gt);
                        o("WAWebHistorySyncNotificationUtils").commitHistoryDataAppliedMetric({
                            historySyncDataAppliedMetric,
                            startTs: e.historySyncStepStartedTs,
                            isSuccess: true
                        });
                        o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(e.syncType, o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.APPLIED, e.chunkOrder);
                        o("WALogger").LOG(B || (B = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] storing recent/full/on-demand chunk complete, ",
                            ""
                        ])), o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(e, ke, Re.size));
                    } catch (error) {
                        o("WALogger").LOG(W || (W = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] storing recent/full/on-demand chunk failed: ",
                            ""
                        ])), error);
                        _e(String(error));
                        throw error;
                    }
                }
                const Et = r("WAWebMsgKey").fromString(e.msgKey);
                const kt = new Map;
                kt.set(Et.remote, [
                    Et.id
                ]);
                if (e.syncType !== o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.INITIAL_STATUS_V3) {
                    o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                        to: Et.remote,
                        type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.HISTORY_SYNC_COMPLETION,
                        groupedReceipt: kt
                    });
                }
                yield o("WAWebDBCreateLidPnMappings").createLidPnMappingsInBatches({
                    mappings,
                    flushImmediately: true,
                    learningSource: "history-sync-chunk"
                });
                yield o("WAWebUpdateLidMetadataApi").updateLidMetadata({
                    updates: fe
                });
                if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
                    yield o("WAWebSetUsernameJob").setUsernamesJob(newUsernameUpdates);
                }
                yield o("WAWebApiHistorySyncNotification").updateCurrentlyProcessed(e.msgKey, e.syncType, e.chunkOrder);
                if (e.downloadOptions.encFilehash != null) {
                    r("WAWebMmsClient").deleteMdHistorySyncBlob({
                        directPath: e.downloadOptions.directPath,
                        encFilehash: e.downloadOptions.encFilehash,
                        signal: new AbortController().signal,
                        encHandle: e.encHandle,
                        companionUserSecret: o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get("WAWebCompanionMetaNonce")
                    }).catch((e)=>{
                        o("WALogger").WARN(q || (q = babelHelpers.taggedTemplateLiteralLoose([
                            "MMS client delete error"
                        ])));
                    });
                }
                const It = se.conversations.length === 1 ? se.conversations[0].id : null;
                yield te(e.syncType, se.progress, It, e);
                o("WAWebHistorySyncNotificationCommonUtils").reportMissingMapping(me);
                if (qpl.isActive()) {
                    qpl.endSuccess();
                }
            } catch (error) {
                if (qpl.isActive()) {
                    qpl.endFailWithError("history_sync_chunk_failed", r("getErrorSafe")(error).message);
                }
                throw error;
            }
        });
        return J.apply(this, arguments);
    }
    function Z(t, n) {
        if (t.syncType === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.ON_DEMAND && n.conversations.length !== 1) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync][rdu] on-demand dropped, conv len ",
                " != 1"
            ])), r("gkx")("26258") ? "" : n.conversations.length);
            o("WAWebNonMessageDataRequestHistorySyncOnDemandUtils").handleHistorySyncOnDemandFailure(t.peerDataRequestChatId ?? "");
            o("WAWebNonMessageDataRequestLoggingUtils").logHistorySyncOnDemandResponse(o("WAWebWamEnumPeerDataResponseApplyResultType").PEER_DATA_RESPONSE_APPLY_RESULT_TYPE.INVALID_RESPONSE, t.peerDataRequestSessionId ?? "");
            return true;
        }
        return false;
    }
    function ee({ applyHistorySyncOnDemandFailure, chatRows, chunkInfo, proto }) {
        if (chunkInfo.syncType === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.ON_DEMAND && proto.conversations.length === 1) {
            o("WAWebMetricsAttributionActions").stopHistorySyncAttributionTracking(chunkInfo.syncType);
            const s = proto.conversations[0].id;
            const u = chatRows[0]?.id != null ? o("WAWebWidFactory").createWid(chatRows[0].id).toJid() : s;
            if (applyHistorySyncOnDemandFailure) {
                o("WAWebNonMessageDataRequestHistorySyncOnDemandUtils").handleHistorySyncOnDemandFailure(u);
            } else {
                o("WAWebNonMessageDataRequestHistorySyncOnDemandUtils").handleHistorySyncOnDemandSuccess(u);
            }
            o("WAWebNonMessageDataRequestLoggingUtils").logHistorySyncOnDemandResponse(applyHistorySyncOnDemandFailure ? o("WAWebWamEnumPeerDataResponseApplyResultType").PEER_DATA_RESPONSE_APPLY_RESULT_TYPE.OTHER_ERROR : o("WAWebWamEnumPeerDataResponseApplyResultType").PEER_DATA_RESPONSE_APPLY_RESULT_TYPE.SUCCESS, chunkInfo.peerDataRequestSessionId ?? "");
        }
    }
    function te(e, t, n, r) {
        return ne.apply(this, arguments);
    }
    function ne() {
        ne = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, a) {
            const i = o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled();
            if (t === 100 || e === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.INITIAL_BOOTSTRAP) {
                o("WAWebMetricsAttributionActions").stopHistorySyncAttributionTracking(e);
            }
            if (e === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.INITIAL_BOOTSTRAP) {
                o("WALogger").LOG(U || (U = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] Initial bootstrap history sync complete"
                ]))).tags("history-sync");
                yield o("WAWebUserPrefsHistorySync").setInitialHistorySyncComplete();
                yield o("WAWebUserPrefsHistorySync").setHistorySyncStatus({
                    initialCompleted: true
                });
                o("WALogger").LOG(V || (V = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][initial bootstrap] completion persisted, ",
                    ""
                ])), o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(a)).tags("history-sync");
                o("WAWebBackendEventBus").BackendEventBus.triggerInitialChatHistorySynced();
                o("WALogger").LOG(H || (H = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][initial bootstrap] completion event emitted, ",
                    ""
                ])), o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(a)).tags("history-sync");
            } else if (e === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.RECENT && t === 100) {
                o("WALogger").LOG(G || (G = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] Recent history sync complete"
                ]))).tags("history-sync");
                yield o("WAWebUserPrefsHistorySync").setHistorySyncStatus({
                    recentCompleted: true
                });
                o("WAWebBackendEventBus").BackendEventBus.triggerRecentChatHistorySynced();
            } else if (e === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.FULL && t === 100) {
                o("WALogger").LOG(z || (z = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] Full history sync complete"
                ]))).tags("history-sync");
                if (!i) {
                    o("WALogger").LOG(j || (j = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] set history initial sync boundary to empty"
                    ])));
                    o("WAWebUserPrefsHistorySync").setHistoryInitialSyncBoundary({});
                }
                yield o("WAWebUserPrefsHistorySync").setHistorySyncStatus({
                    fullCompleted: true
                });
                o("WAWebBackendEventBus").BackendEventBus.triggerFullChatHistorySynced();
            } else if (i && e === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.ON_DEMAND && t === 100) {
                o("WALogger").LOG(K || (K = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] On demand history sync complete for chat ",
                    ""
                ])), r("gkx")("26258") ? "-" : n).tags("history-sync");
                const s = `onDemandCompleted_${n ?? ""}`;
                yield o("WAWebUserPrefsHistorySync").setHistorySyncStatus({
                    [s]: true
                });
            }
        });
        return ne.apply(this, arguments);
    }
    l.handleHistorySyncChunk = Y;
}, 98);