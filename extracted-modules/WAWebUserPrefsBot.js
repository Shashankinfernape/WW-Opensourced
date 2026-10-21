__d("WAWebUserPrefsBot", [
    "WAWebProtobufsDeviceCapabilities.pb",
    "WAWebUserPrefsDeviceCapabilities",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").MD_KEYS.BOT_LIST_LAST_REQUESTED_TIMESTAMP);
        const t = typeof e === "number" ? e : 0;
        return t;
    }
    function s(e) {
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").MD_KEYS.BOT_LIST_LAST_REQUESTED_TIMESTAMP, e);
    }
    function u(e) {
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").MD_KEYS.UGC_BOT_LIST_LAST_REQUESTED_TIMESTAMP, e);
    }
    function c(e) {
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").MD_KEYS.UGC_BOT_LIST_LAST_BHASH, e);
    }
    function d() {
        const t = o("WAWebUserPrefsDeviceCapabilities").getPrimaryDeviceCapabilitiesFromLocalStorage();
        return t.aiThread.supportLevel ?? o("WAWebProtobufsDeviceCapabilities.pb").DeviceCapabilities$AiThread$SupportLevel.NONE;
    }
    const m = {
        IN_PROGRESS: "IN_PROGRESS",
        COMPLETE: "COMPLETE"
    };
    function p() {
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").KEYS.WA_WEB_META_AI_THREAD_MIGRATION_STATE);
    }
    function _(e) {
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").KEYS.WA_WEB_META_AI_THREAD_MIGRATION_STATE, e);
    }
    function f() {
        const e = p();
        return e?.migrationProgress === m.COMPLETE;
    }
    function g() {
        return _({
            migrationProgress: m.COMPLETE
        });
    }
    function h() {
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").KEYS.WA_WEB_META_AI_BOT_SESSION_LAST_CLEANUP_TS) ?? 0;
    }
    function y(e) {
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").KEYS.WA_WEB_META_AI_BOT_SESSION_LAST_CLEANUP_TS, e);
    }
    l.getBotListLastRequestedTimestamp = e;
    l.setBotListLastRequestedTimestamp = s;
    l.setUgcBotListLastRequestedTimestamp = u;
    l.setUgcBotListLastBhash = c;
    l.getPrimaryAiThreadSupportLevelFromLocalStorage = d;
    l.MetaAIThreadMigrationProgress = m;
    l.getMetaAIThreadMigrationState = p;
    l.setMetaAIThreadMigrationState = _;
    l.isMetaAIThreadMigrationComplete = f;
    l.markMetaAIThreadMigrationStateAsComplete = g;
    l.getMetaAiBotSessionLastCleanupTs = h;
    l.setMetaAiBotSessionLastCleanupTs = y;
}, 98);