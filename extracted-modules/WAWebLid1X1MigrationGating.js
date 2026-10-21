__d("WAWebLid1X1MigrationGating", [
    "Promise",
    "WALogger",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsTypes",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = (()=>{
        function t() {}
        const r = t.prototype;
        r.isLidMigrated = function(n = false) {
            if (n) {
                const t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get("WAIsAccountLidFieldMigrated");
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[lid] isLidMigrated value=",
                    ", type=",
                    ", result: ",
                    ""
                ])), t, typeof t, o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get("WAIsAccountLidFieldMigrated") === true);
            }
            return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get("WAIsAccountLidFieldMigrated") === true;
        };
        r.setIsLidMigrated = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t = o("WAWebUserPrefsTypes").LidMigrationSource.PEER, r) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "lid: setIsLidMigrated: ",
                    ", source: ",
                    ", isPureLidSyncDSession: ",
                    ""
                ])), e, t, r);
                yield (u || (u = n("Promise"))).all([
                    o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set("WAIsAccountLidFieldMigrated", e),
                    o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set("WALidOneOnOneMigrationSource", t),
                    r == null ? (u || (u = n("Promise"))).resolve() : o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set("WAIsPureLidSyncDSession", r)
                ]);
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r.hasStateDiscrepancy = function() {
            return !d.isLidMigrated() && o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get("WAIsAccountLidFieldMigrated") === true;
        };
        r.isSyncdSessionMigrated = function() {
            return false;
        };
        r.lidMigrationSource = function() {
            return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get("WALidOneOnOneMigrationSource");
        };
        r.isPureLidSyncDSession = function() {
            return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get("WAIsPureLidSyncDSession");
        };
        r.shouldCreatePnChat = function() {
            return false;
        };
        return t;
    })();
    var d = new c;
    l.Lid1X1MigrationUtils = d;
}, 98);