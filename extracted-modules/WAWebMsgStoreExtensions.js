__d("WAWebMsgStoreExtensions", [
    "WAWebPollNameHashAppend",
    "WAWebPollNameHashSeed",
    "WAWebResolvePendingPollUpdates",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return o("WAWebPollNameHashSeed").maybeSeedInitialPollNameHashes(e);
    }
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebPollNameHashAppend").appendPollNameHashesForEdits(e);
            yield o("WAWebResolvePendingPollUpdates").resolvePendingUpdatesForPollEdits(e);
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        delete e.pollNameHashHistory;
        return e;
    }
    l.prepareNewMsgsForStore = e;
    l.handleStoredMessageEdits = s;
    l.omitColumnsPreservedAcrossEdits = c;
}, 98);