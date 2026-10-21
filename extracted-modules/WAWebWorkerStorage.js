__d("WAWebWorkerStorage", [
    "WALogger",
    "WAWeb-dexie",
    "WAWebDbRolloutUtil",
    "WAWebDexieBootstrap",
    "WAWebDexieCastTypes",
    "WAWebSchemaDeferredMessagesStorage",
    "WAWebSchemaLocalStorage",
    "WAWebStorage",
    "WAWebWorkerStorageUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = "push-offline-resume-treatment";
    const u = "treatment-v1";
    let c;
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t = {}) {
            o("WAWebDexieBootstrap").patchDexie();
            if (c == null) {
                yield o("WAWebDbRolloutUtil").loadSchemaVersions();
                o("WAWebWorkerStorageUtils").createStorage();
                o("WAWebSchemaLocalStorage").addTable();
                o("WAWebSchemaDeferredMessagesStorage").addTable();
                c = o("WAWebWorkerStorageUtils").getStorage().initialize().catch((t)=>{
                    let n = "Unknown error";
                    if (t instanceof o("WAWebStorage").AlreadyInitializedError || t instanceof o("WAWebStorage").NoSuchDatabaseError) {
                        n = t.toString();
                    } else if (t instanceof r("WAWeb-dexie").DexieError) {
                        n = "Unknown DexieError";
                    }
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[worker] Failed to initialize model storage: ",
                        ""
                    ])), n).verbose().sendLogs("failed-to-initialize-model-storage", {
                        sendLogsType: o("WALogger").SendLogsType.CRASH_OR_UNRECOVERABLE_ERROR_SAD
                    });
                    throw t;
                });
            }
            yield c;
            const a = o("WAWebWorkerStorageUtils").getStorage().table("local_storage");
            if (t.clearPushOfflineResumeTreatment === true) {
                yield a.bulkRemove([
                    s
                ]);
                t.onPushOfflineResumeTreatment?.(false);
                return;
            }
            t.onPushOfflineResumeTreatment?.((yield a.get(s))?.value === u);
        });
        return m.apply(this, arguments);
    }
    function p() {
        return o("WAWebWorkerStorageUtils").destroyStorage().catch(()=>o("WAWebDexieCastTypes").dexieCastToPromise(new (r("WAWeb-dexie"))(o("WAWebWorkerStorageUtils").DATABASE_NAME).delete())).finally(()=>{
            c = null;
        });
    }
    l.getLocalStorageTable = o("WAWebSchemaLocalStorage").getTable;
    l.initialize = d;
    l.destroy = p;
}, 98);