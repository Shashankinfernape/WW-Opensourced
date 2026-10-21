__d("RSTIndexedDBSafe", [
    "FBLogger",
    "RSTConfig",
    "RSTIndexedDB",
    "RSTUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = o("RSTUtils").isIndexedDBSupported();
    const s = ((t)=>{
        function a(...o) {
            let n;
            n = t.call(this, ...o) || this;
            n.$RSTIndexedDBSafe$p_1 = !e;
            n.$RSTIndexedDBSafe$p_2 = 0;
            n.$RSTIndexedDBSafe$p_3 = [
                "The database connection is closing",
                "Can't start a transaction on a closed database",
                "A version change transaction is running"
            ];
            return babelHelpers.assertThisInitialized(n) || babelHelpers.assertThisInitialized(n);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.guardDB = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
                if (this.$RSTIndexedDBSafe$p_1) {
                    return t();
                }
                try {
                    return yield e();
                } catch (error) {
                    this.closeDBConnection();
                    typeof error === "object" && error != null && "stack" in error && error.stack;
                    const a = r("getErrorSafe")(error);
                    a?.stack;
                    if (!this.$RSTIndexedDBSafe$p_4(a)) {
                        try {
                            return t();
                        } catch (e) {}
                    }
                    if (this.$RSTIndexedDBSafe$p_2 < r("RSTConfig").MAX_DB_FAILED_COUNT) {
                        this.$RSTIndexedDBSafe$p_2++;
                    }
                    if (this.$RSTIndexedDBSafe$p_2 >= r("RSTConfig").MAX_DB_FAILED_COUNT) {
                        this.$RSTIndexedDBSafe$p_1 = true;
                        const i = `Failed to ${n} ${this.$RSTIndexedDBSafe$p_2} times disabling RST indexedDB`;
                        o("RSTUtils").debugLogImportant(i);
                        r("FBLogger")("responsive-tracker").catching(a).warn(`${i}: %s`, a.message);
                    }
                    return t();
                }
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.$RSTIndexedDBSafe$p_4 = function(t) {
            if (t == null) {
                return false;
            }
            const e = typeof t === "string" ? t : t?.message;
            if (typeof e !== "string") {
                return true;
            }
            return !this.$RSTIndexedDBSafe$p_3.some((t)=>e.includes(t));
        };
        a_prototype.initDB = function() {
            const e = this;
            return this.guardDB(function() {
                return t.prototype.initDB.call(e);
            }, function() {
                return null;
            }, "initDB");
        };
        a_prototype.persistLog = function(n) {
            const e = this;
            return this.guardDB(function() {
                return t.prototype.persistLog.call(e, n);
            }, function() {}, "persistLog");
        };
        a_prototype.persistEventToDB = function(n) {
            const e = this;
            return this.guardDB(function() {
                return t.prototype.persistEventToDB.call(e, n);
            }, function() {}, "persistEventToDB");
        };
        a_prototype.readEventsFromDB = function() {
            const e = this;
            return this.guardDB(function() {
                return t.prototype.readEventsFromDB.call(e);
            }, function() {
                return [];
            }, "readEventsFromDB");
        };
        a_prototype.mutateIncidentsInDB = function(n) {
            const e = this;
            return this.guardDB(function() {
                return t.prototype.mutateIncidentsInDB.call(e, n);
            }, function() {}, "mutateIncidentsInDB");
        };
        a_prototype.updateIncidentInDB = function(n) {
            const e = this;
            return this.guardDB(function() {
                return t.prototype.updateIncidentInDB.call(e, n);
            }, function() {}, "updateIncidentInDB");
        };
        a_prototype.clearIncidentFromDB = function(n) {
            const e = this;
            return this.guardDB(function() {
                return t.prototype.clearIncidentFromDB.call(e, n);
            }, function() {}, "clearIncidentFromDB");
        };
        a_prototype.countIncidentsInDB = function() {
            const e = this;
            return this.guardDB(function() {
                return t.prototype.countIncidentsInDB.call(e);
            }, function() {
                return 0;
            }, "countIncidentsInDB");
        };
        a_prototype.clearObjectStore = function(n) {
            const e = this;
            if (n === undefined) {
                n = r("RSTConfig").INDEX_DB_TABLE_NAME;
            }
            return this.guardDB(function() {
                return t.prototype.clearObjectStore.call(e, n);
            }, function() {}, "clearObjectStore");
        };
        a_prototype.deleteEventFromDB = function(n) {
            const e = this;
            return this.guardDB(function() {
                return t.prototype.deleteEventFromDB.call(e, n);
            }, function() {}, "deleteEventFromDB");
        };
        a_prototype.maybeClearObsoleteIncidents = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                try {
                    const e = yield this.readEventsFromDB();
                    const t = new Set;
                    e.forEach((e)=>{
                        if (e != null && typeof e.incidentID === "string" && (typeof e.detectTime !== "number" || Date.now() - e.detectTime > (1 + Math.random()) * r("RSTConfig").OBSOLETE_PENDING_INCIDENT_THRESHOLD_MS)) {
                            t.add(e.incidentID);
                        }
                    });
                    yield this.clearIncidentFromDB(t);
                } catch (error) {
                    const o = r("getErrorSafe")(error);
                    r("FBLogger")("responsive-tracker").catching(o).warn(o.message ?? "Failed to clear obsolete incidents");
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return a;
    })(o("RSTIndexedDB").RSTIndexedDB);
    const u = new s;
    l.default = u;
}, 98);