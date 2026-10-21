__d("RSTIndexedDB", [
    "FBLogger",
    "Promise",
    "RSTConfig",
    "RSTCrypt",
    "RSTEvents",
    "RSTEventsMessageQueue",
    "RSTUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    try {
        s = self.indexedDB;
    } catch (e) {}
    const u = (()=>{
        function t() {}
        const t_prototype = t.prototype;
        t_prototype.initDB = function() {
            const t = this;
            return new (e || (e = n("Promise")))(function(e, n) {
                if (s == null) {
                    return n("IndexedDB is not supported in this browser");
                }
                if (t.$1 != null) {
                    return e(t.$1);
                }
                const o = s.open(r("RSTConfig").INDEX_DB_NAME, r("RSTConfig").INDEX_DB_VERSION);
                o.onupgradeneeded = function() {
                    t.$1 = o.result;
                    t.$2();
                    t.$3();
                    t.$4(r("RSTConfig").INDEX_DB_TABLE_NAME, true);
                };
                o.onsuccess = function(n) {
                    t.$1 = n.target.result;
                    t.$3();
                    e(n.target.result);
                };
                o.onblocked = function() {
                    n("Database open blocked by another tab");
                };
                o.onerror = function(e) {
                    t.closeDBConnection();
                    const r = o.error || e.target.error;
                    n(`Database error: ${r?.message || String(r) || "Unknown error"}`);
                };
            });
        };
        t_prototype.$2 = function() {
            const e = this.$1;
            if (e != null) {
                for (const t of r("RSTConfig").PAST_INDEX_DB_TABLE_NAMES){
                    if (e.objectStoreNames.contains(t)) {
                        e.deleteObjectStore(t);
                    }
                }
            }
        };
        t_prototype.$3 = function() {
            const e = this;
            if (!(this.$1 == null || this.$1.onversionchange != null)) {
                this.$1.onversionchange = function() {
                    e.closeDBConnection();
                };
            }
        };
        t_prototype.$4 = function(t, n = false) {
            const e = this.$1;
            if (!(e == null || e.objectStoreNames.contains(t))) {
                if (e.objectStoreNames.contains(t)) {
                    if (!n) {
                        return;
                    }
                    e.deleteObjectStore(t);
                }
                e.createObjectStore(t, {
                    autoIncrement: true
                });
            }
        };
        t_prototype.$5 = function(t) {
            if (r("RSTConfig").ENCRYPT_DB) {
                return r("RSTCrypt").encrypt(JSON.stringify(t));
            }
            return t;
        };
        t_prototype.$6 = function(t) {
            if (t == null) {
                return null;
            }
            let e = false;
            let n = null;
            if (typeof t === "string") {
                const o = r("RSTCrypt").decryptEnforce(t);
                n = JSON.parse(o.result);
                e = o.exception;
            } else {
                n = t;
            }
            if (typeof n !== "object" || n == null || n.incidentID == null) {
                throw r("FBLogger")("responsive-tracker").mustfixThrow("data parsing error");
            }
            const a = n;
            a.hasDecryptionError = e;
            return a;
        };
        t_prototype.$7 = function(t = null) {
            this.closeDBConnection();
            o("RSTUtils").debugLogImportant("indexedDB error, clearing the object store");
            r("FBLogger")("responsive-tracker").catching(t).warn("Failed to operate on IndexedDB, clearing the object store");
            this.clearObjectStore().catch((e)=>{
                r("FBLogger")("responsive-tracker").catching(r("getErrorSafe")(e)).warn("Failed to clear object store after IndexedDB error");
            });
        };
        t_prototype.$8 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = [];
                const n = 50;
                try {
                    for(let r = 0; r < e.length; r += n){
                        const a = e.slice(r, r + n);
                        for (const i of a){
                            const l = this.$6(i);
                            if (l != null) {
                                t.push(l);
                            }
                        }
                        if (r + n < e.length) {
                            yield o("RSTUtils").scheduleYield();
                        }
                    }
                } catch (error) {
                    this.$7(error);
                }
                return t;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$9 = function(t, n, r) {
            const e = this;
            t.onerror = function(t) {
                e.closeDBConnection();
                const l = t?.target?.errorCode ?? "";
                const s = `Failed to handle ${r} request in IndexedDB.${l}`;
                o("RSTUtils").debugLogImportant(s);
                n(s);
            };
        };
        t_prototype.$10 = function(t, n, r) {
            const e = this;
            t.onerror = function(t) {
                e.closeDBConnection();
                const l = t?.target?.errorCode ?? "";
                const s = `Failed to handle ${r} transaction in IndexedDB.${l}`;
                o("RSTUtils").debugLogImportant(s);
                n(s);
            };
        };
        t_prototype.closeDBConnection = function() {
            const e = this.$1;
            if (e != null) {
                try {
                    e.close();
                } catch (e) {}
                this.$1 = null;
            }
        };
        t_prototype.persistLog = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const MAX_INCIDENT_COUNT = r("RSTConfig").MAX_INCIDENT_COUNT;
                if (!(MAX_INCIDENT_COUNT != null && (yield this.countIncidentsInDB()) >= MAX_INCIDENT_COUNT)) {
                    yield this.persistEventToDB(e);
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.countIncidentsInDB = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const t = this;
                yield this.initDB();
                return new (e || (e = n("Promise")))(function(e, n) {
                    if (t.$1 == null) {
                        n("indexed db instance is not initialized yet");
                        return;
                    }
                    const o = t.$1.transaction([
                        r("RSTConfig").INDEX_DB_TABLE_NAME
                    ], "readonly");
                    const a = o.objectStore(r("RSTConfig").INDEX_DB_TABLE_NAME);
                    const i = a.count();
                    i.onsuccess = function() {
                        e(i.result);
                    };
                    t.$9(i, n, "countIncidentsInDB");
                    t.$10(o, n, "countIncidentsInDB");
                });
            });
            function o() {
                return t.apply(this, arguments);
            }
            return o;
        })();
        t_prototype.persistEventToDB = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const a = this;
                yield this.initDB();
                const loggingTime = Date.now();
                const l = babelHelpers.extends({
                    loggingTime
                }, t);
                o("RSTEventsMessageQueue").notify(o("RSTEvents").RSTEvent.LOGGING_UNRESPONSIVENESS_TO_INDEXDB, {
                    unresponsiveEventRecord: l
                });
                return new (e || (e = n("Promise")))(function(e, t) {
                    if (a.$1 == null) {
                        t("indexed db instance is not initialized yet");
                        return;
                    }
                    const n = a.$1.transaction([
                        r("RSTConfig").INDEX_DB_TABLE_NAME
                    ], "readwrite");
                    const o = n.objectStore(r("RSTConfig").INDEX_DB_TABLE_NAME);
                    const i = o.add(a.$5(l));
                    i.onsuccess = function() {
                        e();
                    };
                    a.$9(i, t, "persistEventToDB");
                    a.$10(n, t, "persistEventToDB");
                });
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        t_prototype.readEventsFromDB = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const t = this;
                yield this.initDB();
                const o = yield new (e || (e = n("Promise")))(function(e, n) {
                    if (t.$1 == null) {
                        n("indexed db instance is not initialized yet");
                        return;
                    }
                    const o = t.$1.transaction([
                        r("RSTConfig").INDEX_DB_TABLE_NAME
                    ], "readonly");
                    const a = o.objectStore(r("RSTConfig").INDEX_DB_TABLE_NAME);
                    const i = a.getAll();
                    i.onsuccess = function() {
                        e(i.result);
                    };
                    t.$9(i, n, "readEventsFromDB");
                    t.$10(o, n, "readEventsFromDB");
                });
                return this.$8(o);
            });
            function o() {
                return t.apply(this, arguments);
            }
            return o;
        })();
        t_prototype.$11 = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a) {
                const i = this;
                yield this.initDB();
                return new (e || (e = n("Promise")))(function(e, n) {
                    if (i.$1 == null) {
                        n("indexed db instance is not initialized yet");
                        return;
                    }
                    const l = i.$1.transaction([
                        r("RSTConfig").INDEX_DB_TABLE_NAME
                    ], "readwrite");
                    const s = l.objectStore(r("RSTConfig").INDEX_DB_TABLE_NAME);
                    const u = s.openCursor();
                    u.onsuccess = function(n) {
                        const result = n.target.result;
                        if (result == null) {
                            o("RSTUtils").debugLog(`Finished ${a} over incidents in indexDB`);
                            e();
                            return;
                        }
                        try {
                            const l = i.$6(result.value);
                            if (l == null) {
                                o("RSTUtils").debugLog("Unable to parse an incident, deleting it from indexDB");
                                result.delete();
                            } else {
                                const s = t(l);
                                if (s === "delete") {
                                    o("RSTUtils").debugLog(`Deleting incident ${l.incidentID} from indexDB`);
                                    result.delete();
                                } else if (s === "update") {
                                    o("RSTUtils").debugLog(`Update incident ${l.incidentID} in indexDB`);
                                    result.update(i.$5(l));
                                }
                            }
                        } catch (e) {
                            result.delete();
                        }
                        result.continue();
                    };
                    i.$9(u, n, a);
                    i.$10(l, n, a);
                });
            });
            function a(e, n) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        t_prototype.mutateIncidentsInDB = function(t) {
            return this.$11(t, "mutateIncidentsInDB");
        };
        t_prototype.updateIncidentInDB = function(t) {
            return this.$11(function(e) {
                if (t(e)) {
                    return "update";
                }
                return "keep";
            }, "updateIncidentInDB");
        };
        t_prototype.clearIncidentFromDB = function(t) {
            return this.$11(function(e) {
                if (t.has(e.incidentID)) {
                    return "delete";
                }
                return "keep";
            }, "clearIncidentFromDB");
        };
        t_prototype.clearObjectStore = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const a = this;
                if (t === undefined) {
                    t = r("RSTConfig").INDEX_DB_TABLE_NAME;
                }
                yield this.initDB();
                o("RSTUtils").debugLogImportant("clearing object store:", t);
                return new (e || (e = n("Promise")))(function(e, n) {
                    try {
                        const r = a.$1;
                        if (r == null) {
                            n("indexed db instance is not initialized yet");
                            return;
                        }
                        if (!r.objectStoreNames.contains(t)) {
                            e();
                            return;
                        }
                        const o = r.transaction([
                            t
                        ], "readwrite");
                        const i = o.objectStore(t);
                        const l = i.clear();
                        l.onsuccess = function() {
                            e();
                        };
                        l.onerror = function(e) {
                            a.closeDBConnection();
                            n(`Error clearing the store: ${e.target.errorCode}`);
                        };
                        a.$9(l, n, "clearObjectStore");
                        a.$10(o, n, "clearObjectStore");
                    } catch (t) {
                        e();
                    }
                });
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        t_prototype.deleteEventFromDB = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const o = this;
                yield this.initDB();
                return new (e || (e = n("Promise")))(function(e, n) {
                    if (o.$1 == null) {
                        n("indexed db instance is not initialized yet");
                        return;
                    }
                    const a = o.$1.transaction([
                        r("RSTConfig").INDEX_DB_TABLE_NAME
                    ], "readwrite");
                    const i = a.objectStore(r("RSTConfig").INDEX_DB_TABLE_NAME);
                    const l = i.delete(t);
                    l.onsuccess = function() {
                        e();
                    };
                    o.$9(l, n, "deleteEventFromDB");
                    o.$10(a, n, "deleteEventFromDB");
                });
            });
            function o(e) {
                return t.apply(this, arguments);
            }
            return o;
        })();
        return t;
    })();
    l.RSTIndexedDB = u;
}, 98);