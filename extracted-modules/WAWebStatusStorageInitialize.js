__d("WAWebStatusStorageInitialize", [
    "WALogger",
    "WAWeb-dexie",
    "WAWebDbRolloutUtil",
    "WAWebSchemaStatus",
    "WAWebStatusStorageUtils",
    "WAWebStorage",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u() {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (s == null) {
                yield o("WAWebDbRolloutUtil").loadSchemaVersions();
                o("WAWebStatusStorageUtils").createStorage();
                o("WAWebSchemaStatus").addTable();
                s = o("WAWebStatusStorageUtils").getStorage().initialize().catch((t)=>{
                    let n = "Unknown error";
                    if (t instanceof o("WAWebStorage").AlreadyInitializedError || t instanceof o("WAWebStorage").NoSuchDatabaseError) {
                        n = t.toString();
                    } else if (t instanceof r("WAWeb-dexie").DexieError) {
                        n = "Unknown DexieError";
                    }
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to initialize status storage: ",
                        ""
                    ])), n).verbose().sendLogs("failed-to-initialize-status-storage", {
                        sendLogsType: o("WALogger").SendLogsType.CRASH_OR_UNRECOVERABLE_ERROR_SAD
                    });
                    throw t;
                });
            }
            return s;
        });
        return c.apply(this, arguments);
    }
    l.initialize = u;
}, 98);