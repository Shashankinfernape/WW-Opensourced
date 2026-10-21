__d("WAWebSchemaVersions", [
    "$InternalEnum",
    "WALogger",
    "WAResolvable",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebWamEnumWebDbLoaderType",
    "WAWebWamEnumWebDbNameType",
    "WAWebWebDbLoadFromVersionFailureNonAnonymousWamEvent",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const d = n("$InternalEnum")({
        ModelStorage: "model-storage",
        FtsStorage: "fts-storage",
        JobsStorage: "jobs-storage",
        LruMediaStorage: "lru-media-storage-idb",
        OffdStorage: "offd-storage",
        SignalStorage: "signal-storage",
        GuestEventsStorage: "guest-events-storage",
        WorkerStorage: "worker-storage",
        SW: "sw",
        WAWC: "wawc",
        WAWCDBEnc: "wawc_db_enc",
        StatusStorage: "status-storage"
    });
    const m = new (o("WAResolvable")).Resolvable;
    let p = null;
    function _(e) {
        if (e === d.ModelStorage) {
            return o("WAWebWamEnumWebDbNameType").WEB_DB_NAME_TYPE.MODEL_STORAGE;
        }
        if (e === d.FtsStorage) {
            return o("WAWebWamEnumWebDbNameType").WEB_DB_NAME_TYPE.FTS_STORAGE;
        }
        if (e === d.JobsStorage) {
            return o("WAWebWamEnumWebDbNameType").WEB_DB_NAME_TYPE.JOBS_STORAGE;
        }
        if (e === d.LruMediaStorage) {
            return o("WAWebWamEnumWebDbNameType").WEB_DB_NAME_TYPE.LRU_MEDIA_STORAGE_IDB;
        }
        if (e === d.OffdStorage) {
            return o("WAWebWamEnumWebDbNameType").WEB_DB_NAME_TYPE.OFFD_STORAGE;
        }
        if (e === d.SignalStorage) {
            return o("WAWebWamEnumWebDbNameType").WEB_DB_NAME_TYPE.SIGNAL_STORAGE;
        }
        if (e === d.GuestEventsStorage) {
            return null;
        }
        if (e === d.WorkerStorage) {
            return o("WAWebWamEnumWebDbNameType").WEB_DB_NAME_TYPE.WORKER_STORAGE;
        }
        if (e === d.SW) {
            return o("WAWebWamEnumWebDbNameType").WEB_DB_NAME_TYPE.SW;
        }
        if (e === d.WAWC) {
            return o("WAWebWamEnumWebDbNameType").WEB_DB_NAME_TYPE.WAWC;
        }
        if (e === d.WAWCDBEnc) {
            return o("WAWebWamEnumWebDbNameType").WEB_DB_NAME_TYPE.WAWC_DB_ENC;
        }
        if (e === d.StatusStorage) {
            return o("WAWebWamEnumWebDbNameType").WEB_DB_NAME_TYPE.STATUS_STORAGE;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function f() {
        if (o("WAWebRuntimeEnvironmentUtils").isServiceWorker()) {
            return o("WAWebWamEnumWebDbLoaderType").WEB_DB_LOADER_TYPE.SERVICE_WORKER;
        }
        if (o("WAWebRuntimeEnvironmentUtils").isWorker()) {
            return o("WAWebWamEnumWebDbLoaderType").WEB_DB_LOADER_TYPE.WEB_WORKER;
        }
        return o("WAWebWamEnumWebDbLoaderType").WEB_DB_LOADER_TYPE.MAIN;
    }
    function g() {
        return p != null;
    }
    function h(t) {
        if (p == null) {
            const n = {
                webDbLoader: f()
            };
            if (t != null) {
                const a = _(t);
                if (a != null) {
                    n.webDbName = a;
                }
            }
            new (o("WAWebWebDbLoadFromVersionFailureNonAnonymousWamEvent")).WebDbLoadFromVersionFailureNonAnonymousWamEvent(n).commitAndWaitForFlush(true);
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[storage] Schema versions not initialized"
            ]))).sendLogs("[storage] Schema versions not initialized");
            throw r("err")("Schema versions not initialized");
        }
        return p;
    }
    function y(e) {
        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "[storage] set schema versions: ",
            ". is worker? ",
            ""
        ])), Array.from(e), o("WAWebRuntimeEnvironmentUtils").isWorker());
        p = e;
        m.resolve();
    }
    function C() {
        return m.promise;
    }
    function b() {
        p = null;
    }
    l.DatabaseNames = d;
    l.convertDBName = _;
    l.getLoaderType = f;
    l.hasSchemaVersions = g;
    l.getSchemaVersions = h;
    l.setSchemaVersions = y;
    l.waitUntilSchemaVersionsReady = C;
    l.clearSchemaVersions = b;
}, 98);