__d("WAWebSignalStorage", [
    "WALogger",
    "WAWeb-dexie",
    "WAWebDbRolloutUtil",
    "WAWebDexieCastTypes",
    "WAWebSchemaBasekey",
    "WAWebSchemaIdentity",
    "WAWebSchemaKyberLastResortKey",
    "WAWebSchemaKyberPrekey",
    "WAWebSchemaMeta",
    "WAWebSchemaPrekey",
    "WAWebSchemaSenderkey",
    "WAWebSchemaSession",
    "WAWebSchemaSignedPrekey",
    "WAWebSignalStorageUtils",
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
                o("WAWebSignalStorageUtils").createStorage();
                o("WAWebSchemaBasekey").addTable();
                o("WAWebSchemaIdentity").addTable();
                o("WAWebSchemaMeta").addTable();
                o("WAWebSchemaPrekey").addTable();
                o("WAWebSchemaSenderkey").addTable();
                o("WAWebSchemaSession").addTable();
                o("WAWebSchemaSignedPrekey").addTable();
                o("WAWebSchemaKyberPrekey").addTable();
                o("WAWebSchemaKyberLastResortKey").addTable();
                s = o("WAWebSignalStorageUtils").getStorage().initialize().catch((t)=>{
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Assertion failed!"
                    ]))).verbose().sendLogs("Failed to initialize signal storage", {
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
        return o("WAWebSignalStorageUtils").destroyStorage().catch(()=>o("WAWebDexieCastTypes").dexieCastToPromise(new (r("WAWeb-dexie"))(o("WAWebSignalStorageUtils").DATABASE_NAME).delete())).finally(()=>{
            s = null;
        });
    }
    l.getBaseKeyTable = o("WAWebSchemaBasekey").getTable;
    l.getIdentityTable = o("WAWebSchemaIdentity").getTable;
    l.getKyberLastResortKeyTable = o("WAWebSchemaKyberLastResortKey").getTable;
    l.getKyberPreKeyTable = o("WAWebSchemaKyberPrekey").getTable;
    l.getMetaTable = o("WAWebSchemaMeta").getTable;
    l.getPreKeyTable = o("WAWebSchemaPrekey").getTable;
    l.getSenderKeyTable = o("WAWebSchemaSenderkey").getTable;
    l.getSessionTable = o("WAWebSchemaSession").getTable;
    l.getSignedPreKeyTable = o("WAWebSchemaSignedPrekey").getTable;
    l.initialize = u;
    l.destroy = d;
}, 98);