__d("WAWebOffdStorage", [
    "WALogger",
    "WAWeb-dexie",
    "WAWebDbRolloutUtil",
    "WAWebDexieCastTypes",
    "WAWebOffdStorageUtils",
    "WAWebSchemaDanglingReceipt",
    "WAWebSchemaPeerReadReceipt",
    "WAWebSchemaPendingDeviceSync",
    "WAWebSchemaReadReceipt",
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
                o("WAWebOffdStorageUtils").createStorage();
                o("WAWebSchemaReadReceipt").addTable();
                o("WAWebSchemaDanglingReceipt").addTable();
                o("WAWebSchemaPeerReadReceipt").addTable();
                o("WAWebSchemaPendingDeviceSync").addTable();
                s = o("WAWebOffdStorageUtils").getStorage().initialize().catch((t)=>{
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Assertion failed!"
                    ]))).verbose().sendLogs("Failed to initialize offd storage", {
                        sendLogsType: o("WALogger").SendLogsType.CRASH_OR_UNRECOVERABLE_ERROR_SAD
                    });
                    throw t;
                });
            }
            return s;
        });
        return c.apply(this, arguments);
    }
    function d() {
        return o("WAWebOffdStorageUtils").destroyStorage().catch(()=>o("WAWebDexieCastTypes").dexieCastToPromise(new (r("WAWeb-dexie"))(o("WAWebOffdStorageUtils").DATABASE_NAME).delete())).finally(()=>{
            s = null;
        });
    }
    l.initialize = u;
    l.destroy = d;
}, 98);