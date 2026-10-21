__d("WAWebUserPrefsHistorySync", [
    "WALogger",
    "WATimeUtils",
    "WAWebHistorySyncUtils",
    "WAWebProtobufsHistorySync.pb",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsMultiDevice",
    "WAWebUserPrefsStore",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t, n) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, chunkOrder, progress) {
            if (!(t == null || chunkOrder == null)) {
                if (t === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.RECENT) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] set last history sync chunk with chunk order ",
                        ""
                    ])), chunkOrder);
                    yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.MD_HISTORY_LAST_RECENT_SYNC_CHUNK_PROCESSED, {
                        chunkOrder,
                        progress
                    });
                }
                yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.MD_HISTORY_LAST_CHUNK_PROCESSED, `${t}_${chunkOrder}`);
            }
        });
        return c.apply(this, arguments);
    }
    function d() {
        const e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.MD_HISTORY_LAST_CHUNK_PROCESSED);
        return e;
    }
    function m() {
        const e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.MD_HISTORY_LAST_RECENT_SYNC_CHUNK_PROCESSED);
        return e;
    }
    function p() {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.INITIAL_HISTORY_SYNCED, true);
        });
        return _.apply(this, arguments);
    }
    function f() {
        const e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.INITIAL_HISTORY_SYNCED);
        return e === true;
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const n = (yield y()) ?? {};
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.HISTORY_SYNC_STATUS, babelHelpers.extends({}, n, e));
        });
        return h.apply(this, arguments);
    }
    function y() {
        const e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.HISTORY_SYNC_STATUS);
        return e;
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.HISTORY_SYNC_CHUNK_COUNT_FOR_END_OF_RECENT_SYNC, e);
        });
        return b.apply(this, arguments);
    }
    function v() {
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.HISTORY_SYNC_CHUNK_COUNT_FOR_END_OF_RECENT_SYNC) ?? 0;
    }
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.ESTIMATED_HISTORY_SYNC_CHUNK_COUNT_FOR_END_OF_RECENT_SYNC, e);
        });
        return R.apply(this, arguments);
    }
    function L() {
        const e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.ESTIMATED_HISTORY_SYNC_CHUNK_COUNT_FOR_END_OF_RECENT_SYNC);
        return e ?? 0;
    }
    function E() {
        const e = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").MD_KEYS.HISTORY_SYNC_REMAINING_PAUSED_SECONDS);
        if (typeof e === "number") {
            return e;
        }
    }
    function k(e) {
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").MD_KEYS.HISTORY_SYNC_REMAINING_PAUSED_SECONDS, e);
    }
    function I() {
        const e = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.HISTORY_SYNC_EARLIEST_DATE);
        if (typeof e !== "number" || e === 0) {
            const n = o("WAWebUserPrefsMultiDevice").getPairingTimestamp() ?? o("WATimeUtils").unixTime();
            const a = o("WAWebHistorySyncUtils").getEarliestHistorySyncDate();
            return n - a;
        }
        return e;
    }
    function T(e) {
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.HISTORY_SYNC_EARLIEST_DATE, e);
    }
    function D(e, t, n) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            if (!(n == null || e !== o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.RECENT)) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] set recent sync single chunk ",
                    " status to ",
                    ""
                ])), n, t);
                const i = {
                    [n]: t
                };
                const l = (yield $()) ?? {};
                yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.HISTORY_SYNC_SINGLE_CHUNK_STATUS, babelHelpers.extends({}, l, i));
            }
        });
        return x.apply(this, arguments);
    }
    function $() {
        const e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.HISTORY_SYNC_SINGLE_CHUNK_STATUS);
        return e;
    }
    function P(e) {
        return N.apply(this, arguments);
    }
    function N() {
        N = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").HASHED_KEYS.INITIAL_HIST_BOUNDARY, e);
        });
        return N.apply(this, arguments);
    }
    function M() {
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").HASHED_KEYS.INITIAL_HIST_BOUNDARY);
    }
    function w(e) {
        return A.apply(this, arguments);
    }
    function A() {
        A = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.HISTORY_SYNC_STATUS_AFTER_PAIRING_LOGGING_COUNT, e);
        });
        return A.apply(this, arguments);
    }
    function F() {
        const e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.HISTORY_SYNC_STATUS_AFTER_PAIRING_LOGGING_COUNT);
        return e;
    }
    function O(e) {
        return B.apply(this, arguments);
    }
    function B() {
        B = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const n = W() ?? 0;
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.HISTORY_SYNC_TOTAL_PROCESSED_MESSAGE_COUNT, n + e);
        });
        return B.apply(this, arguments);
    }
    function W() {
        const e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.HISTORY_SYNC_TOTAL_PROCESSED_MESSAGE_COUNT);
        return e;
    }
    function q(e) {
        return U.apply(this, arguments);
    }
    function U() {
        U = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").KEYS.HISTORY_SYNC_COMPLETE_ON_DEMAND_ACCESS_GRANTED, e);
        });
        return U.apply(this, arguments);
    }
    l.setLastHistorySyncedChunk = u;
    l.getLastHistorySyncedChunk = d;
    l.getLastHistoryRecentSyncedChunk = m;
    l.setInitialHistorySyncComplete = p;
    l.getInitialHistorySyncComplete = f;
    l.setHistorySyncStatus = g;
    l.getHistorySyncStatus = y;
    l.setChunkCountForEndOfRecentHistorySync = C;
    l.getChunkCountForEndOfRecentHistorySync = v;
    l.setEstimatedChunkCountForEndOfRecentHistorySync = S;
    l.getEstimatedChunkCountForEndOfRecentHistorySync = L;
    l.getHistorySyncRemainingPausedSeconds = E;
    l.setHistorySyncRemainingPausedSeconds = k;
    l.getHistorySyncEarliestDate = I;
    l.setHistorySyncEarliestDate = T;
    l.setRecentSyncSingleChunkStatus = D;
    l.getRecentSyncSingleChunkStatus = $;
    l.setHistoryInitialSyncBoundary = P;
    l.getHistoryInitialSyncBoundary = M;
    l.setHistorySyncStatusAfterPairingLoggingCount = w;
    l.getHistorySyncStatusAfterPairingLoggingCount = F;
    l.setHistorySyncTotalProcessedMessageCount = O;
    l.getHistorySyncTotalProcessedMessageCount = W;
    l.setHistorySyncCompleteOnDemandAccessGranted = q;
}, 98);