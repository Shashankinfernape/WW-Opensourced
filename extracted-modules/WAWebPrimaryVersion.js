__d("WAWebPrimaryVersion", [
    "WAWebProtobufSyncAction.pb",
    "WAWebSchemaSyncActions",
    "WAWebUserPrefsIndexedDBStorage",
    "asyncToGeneratorRuntime",
    "decodeProtobuf"
], function(t, n, r, o, a, i, l) {
    function e() {
        return _("current");
    }
    const s = "WAPrimaryCurrentVersion";
    function u() {
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(s);
    }
    function c(e) {
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(s, e);
    }
    function d() {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (u() == null) {
                const t = yield e();
                if (t != null && u() == null) {
                    yield c(t);
                }
            }
        });
        return m.apply(this, arguments);
    }
    function p() {
        return _("session_start");
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebSchemaSyncActions").getSyncActionsTable().get(`["primary_version","${e}"]`);
            if (t) {
                const r = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionDataSpec, t?.binarySyncData).value;
                return r?.primaryVersionAction?.version;
            }
            return null;
        });
        return f.apply(this, arguments);
    }
    l.getPrimaryCurrentVersion = e;
    l.getStoredPrimaryCurrentVersion = u;
    l.storePrimaryCurrentVersion = c;
    l.maybeBackfillStoredPrimaryCurrentVersion = d;
    l.getPrimarySessionStartVersion = p;
}, 98);