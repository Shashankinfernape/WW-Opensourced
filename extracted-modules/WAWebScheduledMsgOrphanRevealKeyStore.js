__d("WAWebScheduledMsgOrphanRevealKeyStore", [
    "WATimeUtils",
    "WAWebScheduledMsgConstants",
    "WAWebSchemaScheduledMsgOrphanRevealKey",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebSchemaScheduledMsgOrphanRevealKey").getScheduledMsgOrphanRevealKeyTable();
            yield t.createOrReplace(e);
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebSchemaScheduledMsgOrphanRevealKey").getScheduledMsgOrphanRevealKeyTable();
            return t.get(e);
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebSchemaScheduledMsgOrphanRevealKey").getScheduledMsgOrphanRevealKeyTable();
            yield t.remove(e);
        });
        return m.apply(this, arguments);
    }
    function p() {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = o("WAWebSchemaScheduledMsgOrphanRevealKey").getScheduledMsgOrphanRevealKeyTable();
            const t = o("WATimeUtils").unixTime() - o("WAWebScheduledMsgConstants").SCHEDULED_MSG_REVEAL_KEY_RETENTION_DAYS * o("WATimeUtils").DAY_SECONDS;
            yield e.bulkDeleteRange([
                "createdAt"
            ], 0, t, {
                lowerInclusive: true
            });
        });
        return _.apply(this, arguments);
    }
    l.storeOrphanRevealKey = e;
    l.getOrphanRevealKeyByRevealKeyId = u;
    l.deleteOrphanRevealKey = d;
    l.cleanupExpiredOrphanRevealKeys = p;
}, 98);