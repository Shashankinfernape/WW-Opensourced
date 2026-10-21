__d("WAWebGetHistorySyncProgress", [
    "WAWebProtobufsHistorySync.pb",
    "WAWebUserPrefsHistorySync",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            let t = e.progress;
            const n = yield o("WAWebUserPrefsHistorySync").getChunkCountForEndOfRecentHistorySync();
            if (e.syncType === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.FULL || e.syncType === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.RECENT && e.chunkOrder === n) {
                t = 100;
            }
            return t ?? 0;
        });
        return s.apply(this, arguments);
    }
    l.getHistorySyncProgress = e;
}, 98);