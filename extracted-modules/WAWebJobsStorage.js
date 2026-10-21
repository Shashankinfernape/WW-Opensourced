__d("WAWebJobsStorage", [
    "WALogger",
    "WAWeb-dexie",
    "WAWebDbRolloutUtil",
    "WAWebDexieCastTypes",
    "WAWebJobsStorageUtils",
    "WAWebSchemaJobs",
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
                o("WAWebJobsStorageUtils").createStorage();
                o("WAWebSchemaJobs").addTable();
                s = o("WAWebJobsStorageUtils").getStorage().initialize().catch((t)=>{
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Assertion failed!"
                    ]))).verbose().sendLogs("Failed to initialize jobs storage", {
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
        return o("WAWebJobsStorageUtils").destroyStorage().catch(()=>o("WAWebDexieCastTypes").dexieCastToPromise(new (r("WAWeb-dexie"))(o("WAWebJobsStorageUtils").DATABASE_NAME).delete())).finally(()=>{
            s = null;
        });
    }
    l.initialize = u;
    l.destroy = d;
}, 98);