__d("WAWebAfterReadSendingRollbackListener", [
    "WALogger",
    "WAWebABProps",
    "WAWebBackendEventBus",
    "WAWebBackendEventBusTypes",
    "WAWebDBAfterReadSendingRollbackMigration",
    "WAWebUserPrefsAfterReadSendingRollbackMigration",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = "after-read-rollback-listener";
    let u = null;
    function c() {
        if (u == null) {
            u = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ partialPreviousABPropsValues: t }) {
                    yield d(t.after_read_sending_enabled);
                });
                return function(n) {
                    return e.apply(this, arguments);
                };
            })();
            o("WAWebBackendEventBus").BackendEventBus.onAbPropsUpdate(u);
        }
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = o("WAWebABProps").getABPropConfigValue("after_read_sending_enabled");
            if (!(t !== true || n !== false)) {
                o("WAWebUserPrefsAfterReadSendingRollbackMigration").resetAfterReadSendingRollbackMigrationState();
                try {
                    yield o("WAWebDBAfterReadSendingRollbackMigration").migrateAfterReadSendingRollback();
                } catch (t) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "afterReadSendingRollbackListener: migration run failed"
                    ]))).catching(r("getErrorSafe")(t)).sendLogs(s);
                }
            }
        });
        return m.apply(this, arguments);
    }
    function p() {
        if (u != null) {
            o("WAWebBackendEventBus").BackendEventBus.removeListener(o("WAWebBackendEventBusTypes").BackendEvent.ON_AB_PROPS_UPDATE, u);
            u = null;
        }
    }
    l.registerAfterReadSendingRollbackListener = c;
    l.resetListenerForTesting = p;
}, 98);