__d("WAWebWAWCStorage", [
    "Promise",
    "WACustomError",
    "WAFilteredCatch",
    "WALogger",
    "WAPromiseTimeout",
    "WAWeb-dexie",
    "WAWebDexieObservability",
    "WAWebIndexedDBPurge",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebUA",
    "WAWebWAWCCommon",
    "WAWebWebcDbOpenWamEvent",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    const C = {
        ERROR: "error",
        OPENING: "opening",
        BLOCKED: "blocked",
        OPEN: "open",
        CLOSED: "closed",
        FAILED: "failed"
    };
    let b = false;
    let v = null;
    class S {
        constructor(){
            const t = this;
            this._dbName = o("WAWebIndexedDBPurge").WEB_IDB_DB_NAMES.wawc;
            this._db = new (r("WAWeb-dexie"))(this._dbName, {
                chromeTransactionDurability: "relaxed",
                addons: []
            });
            o("WAWebDexieObservability").dropDexieObservability(this._db);
            this._db.on("versionchange", function(n) {
                t._db.close();
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[storage] close db due to versionchange"
                ])));
                if (n && n.newVersion != null && n.newVersion !== n.oldVersion) {
                    b = true;
                    if (v) {
                        v();
                    }
                }
            });
            o("WAWebWAWCCommon").applyVersions(this._db);
            this.openAttempt = 0;
            this.openDB().catch((e)=>{
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "openDB failed: ",
                    ""
                ])), e);
            });
            this._dbState = C.OPENING;
        }
        openDB() {
            const e = this;
            if (this._db.isOpen()) {
                this._db.close();
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[storage]  close db due to duplicate openDB"
                ])));
            }
            const t = o("WAPromiseTimeout").promiseTimeout((y || (y = n("Promise"))).resolve(this._db.open()), 10000).then(()=>{
                if (o("WAWebRuntimeEnvironmentUtils").isWorker()) {
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[storage] successfully opened db in worker thread"
                    ])));
                } else {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[storage] successfully opened db in main thread"
                    ])));
                }
                const t = new (o("WAWebWebcDbOpenWamEvent")).WebcDbOpenWamEvent({
                    webcDbName: e._dbName,
                    webcDbOpenWasSuccess: true,
                    webcDbOpenNumAttempts: e.openAttempt
                });
                t.commit();
                e._dbState = C.OPEN;
                return C.OPEN;
            }).catch(o("WAFilteredCatch").filteredCatch(o("WACustomError").TimeoutError, function() {
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[storage] openDB blocked in ",
                    " thread"
                ])), o("WAWebRuntimeEnvironmentUtils").isWorker() ? "worker" : "main");
                const t = new (o("WAWebWebcDbOpenWamEvent")).WebcDbOpenWamEvent({
                    webcDbName: e._dbName,
                    webcDbOpenWasSuccess: false,
                    webcDbOpenNumAttempts: e.openAttempt
                });
                t.commit();
                e._dbState = C.BLOCKED;
                return C.BLOCKED;
            })).catch((t)=>{
                o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[storage] openDB:Error ",
                    ""
                ])), t);
                if (e.openAttempt > 1 || o("WAWebUA").UA.isSafari) {
                    e.opening = void 0;
                    e._dbState = C.ERROR;
                    const n = new (o("WAWebWebcDbOpenWamEvent")).WebcDbOpenWamEvent({
                        webcDbName: e._dbName,
                        webcDbOpenWasSuccess: false,
                        webcDbOpenNumAttempts: e.openAttempt
                    });
                    n.commit();
                    throw C.ERROR;
                }
                e.openAttempt += 1;
                return e._db.delete().catch((t)=>{
                    o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[storage] deleteDB:Error ",
                        ""
                    ])), t);
                    e.opening = void 0;
                    e._dbState = C.ERROR;
                    throw C.ERROR;
                }).then(()=>e.openDB());
            }).then((t)=>{
                e.opening = void 0;
                if (t === C.BLOCKED) {
                    throw C.BLOCKED;
                }
                return e._db;
            });
            if (!this.opening) {
                this.opening = t;
            }
            return t;
        }
        idb() {
            if (this._db.isOpen()) {
                return (y || (y = n("Promise"))).resolve(this._db);
            }
            if (this._db.hasFailed()) {
                o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[storage] dexie database failed to open, hasClosed ",
                    ""
                ])), this._db.hasBeenClosed());
                return (y || (y = n("Promise"))).reject(r("err")(C.FAILED));
            }
            if (this._dbState === C.BLOCKED) {
                o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[storage] dexie database is blocked"
                ])));
                return (y || (y = n("Promise"))).reject(r("err")(C.BLOCKED));
            }
            if (this.opening) {
                return this.opening;
            }
            o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                "[storage] dexie database is closed"
            ])));
            return (y || (y = n("Promise"))).reject(r("err")(C.CLOSED));
        }
        onVersionChange(e) {
            v = e;
            if (b) {
                v();
            }
        }
    }
    S.prototype.State = C;
    const R = new S;
    l.default = R;
}, 98);