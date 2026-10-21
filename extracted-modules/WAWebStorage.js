__d("WAWebStorage", [
    "Promise",
    "WALogger",
    "WAWeb-dexie",
    "WAWebBrokerGlobalAppState",
    "WAWebDbErrors",
    "WAWebEnvironment",
    "WAWebGetSpecialAbProps",
    "WAWebIdbLazyView",
    "WAWebIndexedDB",
    "WAWebProfiler",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebSchemaVersions",
    "WAWebStorageMutationBuilder",
    "WAWebStorageTableBuilder",
    "WAWebStorageVersionManager",
    "asyncToGeneratorRuntime",
    "compactMap",
    "err",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    const _ = 1;
    const f = 2;
    const g = 4;
    const h = {
        packColumns: false
    };
    const y = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.name = "AlreadyInitializedError";
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    const C = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.name = "DuplicateTableError";
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    const b = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t) || this;
            n.name = "NoSuchDatabaseError";
            n.message = "";
            n.message = t;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        const n = t.prototype;
        n.toString = function() {
            return `${this.name}: ${this.message}`;
        };
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    const v = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.name = "NoSuchTableError";
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    const S = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.name = "NotInitializedError";
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    const R = (()=>{
        function t(e, t) {
            this.tables = new Map;
            this.views = new Map;
            this.state = _;
            this.versions = new (o("WAWebStorageVersionManager")).StorageVersionManager;
            this.errorHandlers = new Map;
            this.$1 = e;
            this.config = t ?? h;
            this.$2();
        }
        const a = t.prototype;
        a.addErrorHandler = function(t, n) {
            const e = new t().name;
            this.errorHandlers.set(e, n);
        };
        a.add_OPTIMIZED_EXPERIMENT = function(t, n) {
            const e = this.add(t);
            n(e, o("WAWebStorageMutationBuilder").columnBuilder(this.config));
        };
        a.add = function(n) {
            if (this.tables.has(n)) {
                throw new C(`Table "${n}" already added. Reuse the definition.`);
            }
            const t = o("WAWebSchemaVersions").DatabaseNames.cast(this.$1.getDbName());
            if (t === void 0) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[storage] unknown database name: ",
                    ""
                ])), this.$1.getDbName()).sendLogs("[storage] unknown database name");
                throw r("err")(`unknown database name: ${this.$1.getDbName()}`);
            }
            const a = t === o("WAWebSchemaVersions").DatabaseNames.LruMediaStorage ? null : o("WAWebSchemaVersions").getSchemaVersions(t).get(t);
            const i = new (r("WAWebStorageTableBuilder"))(n, this.versions, a);
            this.tables.set(n, i);
            return i;
        };
        a.$2 = function() {
            this.addErrorHandler(r("WAWeb-dexie").DatabaseClosedError, function(e) {
                if (r("WAWebBrokerGlobalAppState").takeOver && e.message.includes("DatabaseClosedError")) {
                    throw new (o("WAWebDbErrors")).DbClosedOnTakeover(e.message);
                }
            });
            this.addErrorHandler(r("WAWeb-dexie").NoSuchDatabaseError, function(e) {
                if (r("WAWebBrokerGlobalAppState").takeOver && e.message.includes("NoSuchDatabaseError")) {
                    throw new (o("WAWebDbErrors")).DbNotFoundOnTakeover(e.message);
                }
            });
        };
        a.$3 = function() {
            return this.$1;
        };
        a.$4 = function(t) {
            if (this.views.has(t)) {
                return this.views.get(t);
            }
            const e = this.$1;
            const n = e.view(t.name, t.rowview, t.shouldEnablePropFilter, t.shouldUseDbMsgEncKeyForEncryptedCol);
            this.views.set(t, n);
            return n;
        };
        a.$5 = function(t) {
            const e = this;
            return function() {
                if (e.state & (f | _)) {
                    throw new S("Storage must be initialized before accessing a table!");
                }
                return t();
            };
        };
        a.table = function(t) {
            const e = this;
            const n = this.tables.get(t);
            if (!n || !n.tableExists()) {
                throw new v(`Unknown table ${t} requested, ensure table is defined!`);
            }
            const o = this.$3();
            if (!o) {
                throw new b(`Unable to find associated database with table "${t}"`);
            }
            return new (r("WAWebIdbLazyView"))(this.$5(function() {
                return e.$4(n);
            }), n.name, o.getDbName());
        };
        a.lock = function(t, r) {
            const e = this;
            if (this.state & (f | _)) {
                return (p || (p = n("Promise"))).reject(new S("Initialize storage before attempting to lock tables!"));
            }
            for(let a = 0; a < t.length; ++a){
                let i;
                if (!(this.tables.has(t[a]) && (i = this.tables.get(t[a])) != null && i.tableExists())) {
                    return (p || (p = n("Promise"))).reject(new v(`Requested lock of unknown table "${t[a]}"`));
                }
            }
            const l = t.map((t)=>{
                const n = e.tables.get(t);
                if (n) {
                    return n;
                }
                throw new v(`Requested lock of unknown table "${t}"`);
            });
            const s = l.map((t)=>e.$4(t));
            const u = this.$3().transact(t, n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return r(s);
            }));
            return u.finally(()=>{});
        };
        a.$6 = function(t, n) {
            for(let e = 0; e < t.length; e++){
                if (t[e].maxVersion === n) {
                    const r = t[e].upgraders.get(n);
                    if (r) {
                        return {
                            name: t[e].name,
                            callback: r
                        };
                    }
                }
            }
        };
        a.$7 = function(t, n, o) {
            const e = n;
            const a = r("compactMap")(o, function(t) {
                return t.schema(e);
            });
            return t.initialize(n, a, this.$6(o, e), this.errorHandlers);
        };
        a.getExistingDbVersion = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = this;
                try {
                    if (r("WAWebIndexedDB") == null) {
                        return (p || (p = n("Promise"))).resolve(null);
                    }
                    return new (p || (p = n("Promise")))(function(t) {
                        const n = r("WAWebIndexedDB").open(e.$3().getDbName());
                        n.onsuccess = function(e) {
                            const n = e.target.result;
                            const r = n.version;
                            n.close();
                            if (r <= 1) {
                                t(null);
                                return;
                            }
                            const o = r / 10 - 1;
                            t(o);
                        };
                        if (!r("justknobx")._("5333")) {
                            n.onupgradeneeded = function() {
                                t(null);
                            };
                        }
                        n.onerror = function() {
                            t(null);
                        };
                        n.onblocked = function() {
                            t(null);
                        };
                    });
                } catch (e) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[storage] failed to get existing db version"
                    ])));
                    return (p || (p = n("Promise"))).resolve(null);
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.shouldEnableLatestDbSchemaOptimization = function() {
            if (r("WAWebEnvironment").isWindows) {
                return o("WAWebGetSpecialAbProps").getSpecialAbpropValue("web_hybrid_apply_latest_db_schema_optimization_enabled") === true;
            }
            return true;
        };
        a.initialize = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (this.state & g) {
                    throw new y("Storage instance has already been initialized");
                }
                this.versions.validate();
                if (this.$1) {
                    yield this.$1.available();
                } else {
                    throw new b(`"${this.$1.constructor.name}" failed availability check!`);
                }
                const e = Array.from(this.tables.values());
                const t = this.$3();
                if (!(!e || !t)) {
                    let n = true;
                    if (o("WAWebRuntimeEnvironmentUtils").isWorker()) {
                        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[storage] applying latest v",
                            " in worker db=",
                            ""
                        ])), this.versions.getMax(), t.getDbName());
                        yield this.$7(t, this.versions.getMax(), e);
                        n = false;
                    } else if (this.shouldEnableLatestDbSchemaOptimization()) {
                        const r = yield this.getExistingDbVersion();
                        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[storage] existing version for the database: ",
                            " is ",
                            ""
                        ])), t.getDbName(), r);
                        const a = r == null || r < 0;
                        if (a || r === this.versions.getMax()) {
                            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                "[storage] applying latest v",
                                " db=",
                                ""
                            ])), this.versions.getMax(), t.getDbName());
                            yield this.$7(t, this.versions.getMax(), e);
                            n = false;
                        }
                    }
                    if (n) {
                        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "[storage] applying v[0-",
                            "] db=",
                            ""
                        ])), this.versions.getMax(), t.getDbName());
                        for(let i = 0; i <= this.versions.getMax(); i++){
                            yield this.$7(t, i, e);
                        }
                    }
                    yield t.open();
                    this.state = g;
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.purge = function() {
            this.state = f;
            this.views = new Map;
            return this.$3().reset().then(()=>{});
        };
        a.doesLocalSchemaIncludeVersion = function(t) {
            return t <= this.versions.getMax();
        };
        a.getExistingTables = function() {
            const e = new Map;
            this.tables.forEach((t, n)=>{
                if (t.tableExists()) {
                    e.set(n, t);
                }
            });
            return e;
        };
        return t;
    })();
    l.AlreadyInitializedError = y;
    l.NoSuchDatabaseError = b;
    l.NoSuchTableError = v;
    l.Storage = R;
}, 98);