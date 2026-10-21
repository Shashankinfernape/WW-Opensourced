__d("WAWebApiHistorySyncNotification", [
    "WALogger",
    "WAWebHistorySyncLogUtils",
    "WAWebHistorySyncProgress",
    "WAWebProtobufsHistorySync.pb",
    "WAWebSchemaHistorySyncNotification",
    "WAWebSyncGatingUtils",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsTypes",
    "asyncToGeneratorRuntime"
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
    const h = new Set;
    const y = {};
    function C(e, t, n) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            if (e === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.PUSH_NAME) {
                return true;
            }
            if ([
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.FULL,
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.RECENT
            ].includes(e) && t === 1 || o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled() && e === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.ON_DEMAND && t === 0) {
                if (e === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.RECENT) {
                    const r = yield o("WAWebUserPrefsHistorySync").getInitialHistorySyncComplete();
                    return r === true;
                }
                const a = yield o("WAWebUserPrefsHistorySync").getHistorySyncStatus();
                return !!(a != null && a.recentCompleted);
            }
            const i = yield o("WAWebUserPrefsHistorySync").getLastHistorySyncedChunk();
            if (i == null) {
                return false;
            }
            const l = i.split("_");
            const s = l[0];
            const u = l[1];
            if (s === `${e}` && u === `${t - 1}`) {
                return true;
            }
            if (s === `${e}` && u === `${t}`) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] isPreviousChunkProcessed: already done ",
                    "_",
                    " last=",
                    ""
                ])), e, t, i).tags("history-sync");
                yield L(n, e, t);
                return false;
            }
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] isPreviousChunkProcessed: false ",
                "_",
                " last=",
                ""
            ])), e, t, i).tags("history-sync");
            return false;
        });
        return b.apply(this, arguments);
    }
    function v(e, t, n) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] check prev recent sync processed"
            ])));
            if (t === 1) {
                const r = yield o("WAWebUserPrefsHistorySync").getInitialHistorySyncComplete();
                return r === true;
            }
            const a = yield o("WAWebUserPrefsHistorySync").getLastHistoryRecentSyncedChunk();
            if (a == null) {
                return false;
            }
            const a_chunkOrder = a.chunkOrder;
            if (a_chunkOrder === t - 1) {
                return true;
            }
            if (a_chunkOrder === t) {
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] isPreviousChunkProcessed: already done ",
                    "_",
                    " order=",
                    " prog=",
                    ""
                ])), e, t, a.chunkOrder, a.progress).tags("history-sync");
                yield L(n, e, t);
                return false;
            }
            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] isPreviousChunkProcessed: false ",
                "_",
                " last=",
                ""
            ])), e, t, a_chunkOrder).tags("history-sync");
            return false;
        });
        return S.apply(this, arguments);
    }
    function R(t) {
        return o("WAWebSchemaHistorySyncNotification").getHistorySyncNotificationTable().equals([
            "processed"
        ], 0, {
            shouldDecrypt: false
        }).then((()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const r = t.filter((e)=>!h.has(e.msgKey) && !e.reuploadPending).sort((e, t)=>{
                    if (e.syncType !== t.syncType) {
                        return t.syncType - e.syncType;
                    }
                    if (e.chunkOrder != null && t.chunkOrder != null) {
                        return e.chunkOrder - t.chunkOrder;
                    }
                    return 0;
                });
                let a = r.length > 0 ? r[0] : undefined;
                const i = a?.chunkOrder;
                if (i == null) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] getNextUnProcessedNotification: chunkOrder null ",
                        ""
                    ])), a?.msgKey).tags("history-sync");
                    return;
                }
                if (a) {
                    let s;
                    if (a.syncType === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.RECENT) {
                        s = yield v(a.syncType, i, a.msgKey);
                    } else {
                        s = yield C(a.syncType, i, a.msgKey);
                    }
                    o("WAWebHistorySyncProgress").handleChunkProgress(s);
                    if (!s) {
                        return;
                    }
                    a = yield o("WAWebSchemaHistorySyncNotification").getHistorySyncNotificationTable().postflightDecryptSingleRecord(a);
                }
                return a;
            });
            return function(e) {
                return t.apply(this, arguments);
            };
        })());
    }
    function L(e, t, n) {
        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "[history sync] remove notification ",
            "_",
            ""
        ])), t, n);
        h.delete(e);
        return o("WAWebSchemaHistorySyncNotification").getHistorySyncNotificationTable().remove(e).catch((e)=>{
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] updateCurrentlyProcessed failed with error ",
                ""
            ])), String(e)).tags("history-sync");
        });
    }
    function E(e) {
        h.delete(e);
        return o("WAWebSchemaHistorySyncNotification").getHistorySyncNotificationTable().merge(e, {
            reuploadPending: true
        });
    }
    function k(e) {
        h.delete(e);
    }
    function I(e) {
        const t = o("WAWebHistorySyncLogUtils").getHistorySyncBasicChunkInfoString(e.syncType, e.chunkOrder, e.isReupload);
        const mediaKey = e.downloadOptions.mediaKey;
        const directPath = e.downloadOptions.directPath;
        const filehash = e.downloadOptions.filehash;
        const encFilehash = e.downloadOptions.encFilehash;
        e.downloadOptions.mediaKey = "";
        e.downloadOptions.directPath = "";
        e.downloadOptions.filehash = "";
        e.downloadOptions.encFilehash = "";
        const l = babelHelpers.extends({}, e, {
            chunkEncryptionKey: mediaKey,
            directPath,
            filehash,
            encFilehash
        });
        e.processed = 0;
        return o("WAWebSchemaHistorySyncNotification").getHistorySyncNotificationTable().createOrMerge(e.msgKey, l);
    }
    function T(e, t) {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t = false) {
            yield I(e).then(()=>{
                o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(e.syncType, o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.NOTIFICATION_STORED, e.chunkOrder);
            });
            if (t) {
                h.add(e.msgKey);
            }
        });
        return D.apply(this, arguments);
    }
    function x() {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (h.size > 0) {
                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] next chunk null: inFlight=",
                    ""
                ])), h.size);
                return null;
            }
            const e = yield R();
            if (e) {
                const t = o("WAWebHistorySyncLogUtils").getHistorySyncBasicChunkInfoString(e?.syncType, e?.chunkOrder, e?.isReupload);
                e.downloadOptions.mediaKey = e.chunkEncryptionKey;
                delete e.chunkEncryptionKey;
                e.downloadOptions.directPath = e.directPath || e.downloadOptions.directPath;
                delete e.directPath;
                e.downloadOptions.filehash = e.downloadOptions.filehash === "" ? e.filehash : e.downloadOptions.filehash;
                delete e.filehash;
                e.downloadOptions.encFilehash = e.encFilehash;
                delete e.encFilehash;
                h.add(e.msgKey);
            } else {
                o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] next chunk null: no pending"
                ])));
            }
            return e;
        });
        return $.apply(this, arguments);
    }
    l.inFlightChunk = h;
    l.recentSyncChunkHandlingTriedCount = y;
    l.updateCurrentlyProcessed = L;
    l.markChunkForReuploadPending = E;
    l.removeLocalFailureFromInFlightChunk = k;
    l.enqueueNotification = T;
    l.fetchNextHistorySyncChunkForProcessing = x;
}, 98);