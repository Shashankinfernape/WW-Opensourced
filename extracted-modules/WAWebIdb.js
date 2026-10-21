__d("WAWebIdb", [
    "invariant",
    "Promise",
    "WALogger",
    "WAWeb-dexie",
    "WAWebAppTracker",
    "WAWebDexieCastTypes",
    "WAWebDexieObservability",
    "WAWebGlobals",
    "WAWebIdbEncryption",
    "WAWebIdbHelpers",
    "WAWebIdbTransactionCounter",
    "WAWebStorageCmd",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    const m = "Key already exists in the object store";
    r("WAWeb-dexie").Promise.PSD.onunhandled = function() {};
    r("WAWeb-dexie").Promise.PSD.txRelaxedDurabilityEnabled = true;
    const p = (()=>{
        function t(e, t, n, r, o, a, i) {
            this.errorHandlers = new Map;
            this.updateListener = null;
            this.updateListenerField = null;
            this.table = e;
            this.view = n;
            this.db = t;
            this.propFilter = r;
            this.tableColumns = o;
            this.tableEncryptedColumns = new Map(Object.keys(a).map((e)=>[
                    e,
                    a[e]
                ]));
            this.shouldUseDbMsgEncKeyForEncryptedCol = i.shouldUseDbMsgEncKeyForEncryptedCol;
            this.packColumns = i.packColumns;
            this.errorHandlers = i.errorHandlers || new Map;
        }
        const a = t.prototype;
        a.$1 = function(t, n, r) {
            o("WAWebIdbHelpers").logStorageError({
                error: t,
                operation: n,
                tableName: this.table.name
            });
            const e = this.errorHandlers.get(t.name);
            if (e) {
                const a = {
                    op: n,
                    table: this.table.name,
                    db: this.db.name
                };
                if (r?.writeData != null) {
                    const i = o("WAWebIdbHelpers").calculateWriteDataSize(r.writeData);
                    if (i > 0) {
                        a.writeSize = i;
                    }
                    if (Array.isArray(r.writeData)) {
                        a.records = r.writeData.length;
                    }
                }
                e(t, a);
            }
        };
        a.asyncView = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t = true) {
                const n = this.$2(e);
                const r = this.$3() && t ? yield this.$4(n) : n;
                return this.view(r);
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.$2 = function(t) {
            return t;
        };
        a.$5 = function(t, n = false) {
            return t;
        };
        a.$4 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                if (typeof e !== "object") {
                    s(0, 56350);
                }
                const r = Array.from(this.tableEncryptedColumns.entries(), function([r, a]) {
                    const i = e[r];
                    if (!(i != null && i._data) || !(i != null && i.iv)) {
                        return i;
                    }
                    return o("WAWebIdbEncryption").decryptDbMaterial(i, {
                        tableName: t.table.name,
                        columnName: r
                    }, a, t.shouldUseDbMsgEncKeyForEncryptedCol).then((t)=>{
                        e[r] = t;
                    });
                });
                yield (d || (d = n("Promise"))).all(r);
                return e;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.$6 = function(t) {
            const e = this;
            const r = Array.from(this.tableEncryptedColumns.entries(), function([r, a]) {
                const i = t[r];
                if (i == null) {
                    return i;
                }
                return o("WAWebIdbEncryption").encryptDbMaterial(i, {
                    tableName: e.table.name,
                    columnName: r
                }, a, e.shouldUseDbMsgEncKeyForEncryptedCol).then((e)=>{
                    t[r] = e;
                });
            });
            return (d || (d = n("Promise"))).all(r).then((e)=>t);
        };
        a.$7 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t = false) {
                const n = yield this.$8(e);
                const r = this.$5(n, t);
                return r;
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.$9 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                const n = yield this.$10(e);
                const r = n.map((e)=>t.$5(e));
                return r;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.$11 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = yield this.$7(e);
                return this.table.add(t);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.$12 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = yield this.$7(e);
                return this.table.put(t);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.$13 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = yield this.$9(e);
                return this.table.bulkAdd(t);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.$14 = function(t) {
            const e = this;
            if (this.$3()) {
                return r("WAWeb-dexie").waitFor(this.$10(t)).then((t)=>{
                    const n = t.map((t)=>e.$5(t));
                    return e.table.bulkPut(n);
                });
            }
            const n = t.map((t)=>e.$5(t));
            return this.table.bulkPut(n);
        };
        a.$10 = function(t) {
            const e = this;
            if (this.$3()) {
                const r = [];
                const o = t.map((t, n)=>e.$6(t).then((e)=>{
                        r[n] = e;
                    }));
                return (d || (d = n("Promise"))).all(o).then(()=>r);
            }
            return (d || (d = n("Promise"))).resolve(t);
        };
        a.$8 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                if (this.$3()) {
                    const t = yield this.$6(e);
                    return t;
                }
                return e;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.asyncViewMap = function(t, a = true) {
            const e = this;
            if (!this.$3() || !a) {
                return (d || (d = n("Promise"))).resolve(t.map((t)=>{
                    if (t) {
                        return e.view(e.$2(t));
                    }
                    return null;
                }));
            }
            const i = t.map((t)=>{
                if (t != null) {
                    return e.asyncView(t, a);
                }
                return (d || (d = n("Promise"))).resolve(null);
            });
            return o("WAWebDexieCastTypes").dexieCastToPromise(r("WAWeb-dexie").currentTransaction == null ? (d || (d = n("Promise"))).all(i) : r("WAWeb-dexie").waitFor((d || (d = n("Promise"))).all(i)));
        };
        a.preflightEncryptSingleRecord = function(t) {
            const e = this;
            Object.keys(t).forEach((n)=>{
                if (!e.tableEncryptedColumns.has(n)) {
                    delete t[n];
                }
            });
            return this.$6(t);
        };
        a.postflightDecryptSingleRecord = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = yield this.$4(e);
                return this.view(t);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.bulkCreateWith_ALREADY_ENCRYPTED_RECORDS_ONLY = function(t, n = false) {
            const a = this;
            if (t.length === 0) {
                return o("WAWebDexieCastTypes").dexieCastToPromise();
            }
            this.updateListener?.(t.map((e)=>a.$15(e)));
            const i = t.map((e)=>a.propFilter(e));
            o("WAWebIdbHelpers").assertAllColsAreEncrypted(i, this.tableEncryptedColumns);
            const l = i.map((e)=>a.$5(e));
            return o("WAWebDexieCastTypes").dexieCastToPromise(this.table.bulkAdd(l)).catch((e)=>{
                if (o("WAWebGlobals").getAllowHistorySyncPutAllowDuplicate() === true && n === true && e instanceof r("WAWeb-dexie").BulkError && e.failures?.[0]?.toString()?.includes(m)) {
                    return o("WAWebDexieCastTypes").dexieCastToPromise();
                }
                a.$1(r("getErrorSafe")(e), "bulkCreateWith_ALREADY_ENCRYPTED_RECORDS_ONLY", {
                    writeData: l
                });
                throw e;
            });
        };
        a.bulkCreateOrReplace_ALREADY_ENCRYPTED_RECORDS_ONLY = function(t) {
            const n = this;
            if (t.length === 0) {
                return o("WAWebDexieCastTypes").dexieCastToPromise();
            }
            this.updateListener?.(t.map((e)=>n.$15(e)));
            const a = t.map((e)=>n.propFilter(e));
            o("WAWebIdbHelpers").assertAllColsAreEncrypted(a, this.tableEncryptedColumns);
            const i = a.map((e)=>n.$5(e));
            return o("WAWebDexieCastTypes").dexieCastToPromise(this.table.bulkPut(i)).catch((e)=>{
                n.$1(r("getErrorSafe")(e), "bulkCreateOrReplace", {
                    writeData: i
                });
                throw e;
            });
        };
        a.create = function(t) {
            const n = this;
            this.updateListener?.([
                this.$15(t)
            ]);
            const a = this.propFilter(t);
            if (!this.$3()) {
                const i = this.$5(a);
                return o("WAWebDexieCastTypes").dexieCastToPromise(this.table.add(i)).catch((e)=>{
                    n.$1(r("getErrorSafe")(e), "create", {
                        writeData: a
                    });
                    throw e;
                });
            }
            return o("WAWebDexieCastTypes").dexieCastToPromise(this.$11(a)).catch((e)=>{
                n.$1(r("getErrorSafe")(e), "create", {
                    writeData: a
                });
                throw e;
            });
        };
        a.createOrReplace = function(t) {
            const n = this;
            this.updateListener?.([
                this.$15(t)
            ]);
            const a = this.propFilter(t);
            if (!this.$3()) {
                const i = this.$5(a);
                return o("WAWebDexieCastTypes").dexieCastToPromise(this.table.put(i)).catch((e)=>{
                    n.$1(r("getErrorSafe")(e), "createOrReplace", {
                        writeData: a
                    });
                    throw e;
                });
            }
            return o("WAWebDexieCastTypes").dexieCastToPromise(this.$12(a)).catch((e)=>{
                n.$1(r("getErrorSafe")(e), "createOrReplace", {
                    writeData: a
                });
                throw e;
            });
        };
        a.createOrMerge = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const a = this;
                this.updateListener?.([
                    e
                ], [
                    t
                ]);
                const i = this.propFilter(t);
                const l = this.$3() ? yield this.$7(i, true) : this.$5(i, true);
                return o("WAWebDexieCastTypes").dexieCastToPromise(this.db.transaction("rw", this.table, function() {
                    return a.table.where(":id").equals(e).modify(function(e) {
                        Object.entries(l).forEach(([n, r])=>{
                            e[n] = r;
                        });
                    }).then((e)=>{
                        if (e !== 1) {
                            return a.table.add(l);
                        }
                    });
                }).then(()=>{})).catch((e)=>{
                    a.$1(r("getErrorSafe")(e), "createOrMerge", {
                        writeData: l
                    });
                    throw e;
                });
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.get = function(t, n = true) {
            const e = this;
            return o("WAWebDexieCastTypes").dexieCastToPromise(this.table.get(t)).then((t)=>{
                if (t) {
                    return e.asyncView(t, n);
                }
                return null;
            }).catch((t)=>{
                e.$1(r("getErrorSafe")(t), "get");
                throw t;
            });
        };
        a.merge = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
                const a = n?.usePropsFilter === true;
                if (!a) {
                    this.updateListener?.([
                        e
                    ]);
                }
                const l = this.propFilter(t);
                const s = this.$3() ? yield this.$7(l, true) : this.$5(l, true);
                if (a) {
                    this.updateListener?.([
                        e
                    ], [
                        t
                    ]);
                }
                try {
                    yield o("WAWebDexieCastTypes").dexieCastToPromise(this.table.update(e, s));
                    if (!a) {
                        this.updateListener?.([
                            e
                        ]);
                    }
                } catch (e) {
                    const d = r("getErrorSafe")(e);
                    this.$1(d, "merge", {
                        writeData: s
                    });
                    throw d;
                }
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.remove = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                try {
                    yield o("WAWebDexieCastTypes").dexieCastToPromise(this.table.delete(e));
                } catch (e) {
                    const t = r("getErrorSafe")(e);
                    this.$1(t, "remove");
                    throw t;
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.bulkCreate = function(t) {
            const n = this;
            if (t.length === 0) {
                return o("WAWebDexieCastTypes").dexieCastToPromise();
            }
            this.updateListener?.(t.map((e)=>n.$15(e)));
            const a = t.map((e)=>n.propFilter(e));
            if (this.$3()) {
                return o("WAWebDexieCastTypes").dexieCastToPromise(this.db.transaction("rw", this.table, function() {
                    return n.$13(a);
                })).catch((e)=>{
                    n.$1(r("getErrorSafe")(e), "bulkCreate", {
                        writeData: a
                    });
                    throw e;
                });
            }
            const i = a.map((e)=>n.$5(e));
            return o("WAWebDexieCastTypes").dexieCastToPromise(this.table.bulkAdd(i)).catch((e)=>{
                n.$1(r("getErrorSafe")(e), "bulkCreate", {
                    writeData: i
                });
                throw e;
            });
        };
        a.bulkCreateOrReplace = function(t) {
            const n = this;
            if (t.length === 0) {
                return o("WAWebDexieCastTypes").dexieCastToPromise();
            }
            this.updateListener?.(t.map((e)=>n.$15(e)));
            const a = t.map((e)=>n.propFilter(e));
            if (this.$3()) {
                return o("WAWebDexieCastTypes").dexieCastToPromise(this.db.transaction("rw", this.table, function() {
                    return n.$14(a);
                })).catch((e)=>{
                    n.$1(r("getErrorSafe")(e), "bulkCreateOrReplace", {
                        writeData: a
                    });
                    throw e;
                });
            }
            const i = a.map((e)=>n.$5(e));
            return o("WAWebDexieCastTypes").dexieCastToPromise(this.table.bulkPut(i)).catch((e)=>{
                n.$1(r("getErrorSafe")(e), "bulkCreateOrReplace", {
                    writeData: i
                });
                throw e;
            });
        };
        a.bulkCreateOrMerge = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                return this.$16(e);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.bulkMergeOnly = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                return this.$16(e, false);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.$16 = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a = true) {
                const l = this;
                if (t.length === 0) {
                    return o("WAWebDexieCastTypes").dexieCastToPromise();
                }
                const c = self.performance.now();
                const d = {
                    encrypted: null,
                    serialized: null,
                    transaction: null,
                    modified: null,
                    put: null
                };
                o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.BulkCreateOrMerge);
                this.updateListener?.(t.map((e)=>l.$15(e)), t);
                const m = new Map;
                const p = this.$17();
                const _ = this;
                const f = yield this.$10(t);
                d.encrypted = Math.round(self.performance.now() - c);
                f.forEach((e)=>{
                    const t = l.propFilter(e);
                    const n = l.$5(t, true);
                    if (!(p in n)) {
                        s(0, 97881);
                    }
                    m.set(n[p], n);
                });
                d.serialized = Math.round(self.performance.now() - c);
                function g(e) {
                    return h.apply(this, arguments);
                }
                function h() {
                    h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        const t = _.table.where(":id").anyOf(Array.from(e.keys()));
                        yield t.modify(function(t) {
                            Object.assign(t, e.get(t[p]));
                            e.delete(t[p]);
                        });
                        const n = Array.from(e.values());
                        return n;
                    });
                    return h.apply(this, arguments);
                }
                return o("WAWebDexieCastTypes").dexieCastToPromise(this.db.transaction("rw", this.table, function() {
                    d.transaction = Math.round(self.performance.now() - c);
                    return g(m).then((t)=>{
                        d.modified = Math.round(self.performance.now() - c);
                        if (t.length === 0 || !a) {
                            if (t.length > 0) {
                                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                    "bulkMaybeCreateOrMerge: skipped adding ",
                                    " records for table ",
                                    ""
                                ])), t.length, l.table.name);
                            }
                            return;
                        }
                        return l.table.bulkPut(t);
                    });
                })).catch((e)=>{
                    l.$1(r("getErrorSafe")(e), `bulkMaybeCreateOrMerge(shouldCreate=${a.toString()})`, {
                        writeData: t
                    });
                    throw e;
                }).finally(()=>{
                    let e;
                    o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.BulkCreateOrMerge);
                    d.put = Math.round(self.performance.now() - c);
                    if (d.put > 5000 && (e = self.document) != null && e.hasFocus != null && e.hasFocus()) {
                        o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "bulkMaybeCreateOrMerge:",
                            " chg:",
                            " t:",
                            "ms enc:",
                            " ser:",
                            " tra:",
                            " mod:",
                            ""
                        ])), l.table.name, t.length, d.put, d.encrypted, d.serialized, d.transaction, d.modified).sendLogs("long-bulk-db-operation", {
                            sampling: 0.001
                        });
                    }
                });
            });
            function a(e, n) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        a.bulkGet = function(t, a = true) {
            const e = this;
            if (t.length === 0) {
                return (d || (d = n("Promise"))).resolve([]);
            }
            return o("WAWebDexieCastTypes").dexieCastToPromise(this.db.transaction("r", this.table, function() {
                const n = t.map((t)=>e.table.get(t));
                return r("WAWeb-dexie").Promise.all(n);
            })).then((t)=>e.asyncViewMap(t, a)).catch((t)=>{
                e.$1(r("getErrorSafe")(t), "bulkGet");
                throw t;
            });
        };
        a.bulkRemove = function(t) {
            const e = this;
            if (t.length === 0) {
                return (d || (d = n("Promise"))).resolve();
            }
            return o("WAWebDexieCastTypes").dexieCastToPromise(this.db.transaction("rw", this.table, function() {
                return e.table.bulkDelete(t);
            })).catch((t)=>{
                e.$1(r("getErrorSafe")(t), "bulkRemove");
                throw t;
            });
        };
        a.bulkRemoveByIndex = function(t, a) {
            const e = this;
            if (a.length === 0) {
                return (d || (d = n("Promise"))).resolve();
            }
            return o("WAWebDexieCastTypes").dexieCastToPromise(this.table.where(o("WAWebIdbHelpers").formatQueryIndex(t, this.tableColumns)).anyOf(a).delete()).catch((t)=>{
                e.$1(r("getErrorSafe")(t), "bulkRemoveByIndex");
                throw t;
            });
        };
        a.all = function(t, n) {
            const e = this;
            let a = o("WAWebIdbHelpers").applyOptions(this.table.orderBy(t != null && t.index ? o("WAWebIdbHelpers").formatQueryIndex(t.index, this.tableColumns) : ":id"), t);
            if (n) {
                a = a.until(function(t) {
                    return n(e.$2(t));
                });
            }
            let i = null;
            e: {
                const l = t?.returnKeyType;
                if (l === "keys") {
                    i = o("WAWebDexieCastTypes").dexieCastToPromise(a.keys());
                    break e;
                }
                if (l === "primary_key") {
                    i = o("WAWebDexieCastTypes").dexieCastToPromise(a.primaryKeys());
                    break e;
                }
                if (l === void 0) {
                    i = o("WAWebDexieCastTypes").dexieCastToPromise(a.toArray()).then((n)=>e.asyncViewMap(n, t?.shouldDecrypt));
                    break e;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${l}`);
            }
            return i.catch((t)=>{
                e.$1(r("getErrorSafe")(t), "all");
                throw t;
            });
        };
        a.allPrimaryKeys = function() {
            return o("WAWebDexieCastTypes").dexieCastToPromise(this.table.orderBy(":id").primaryKeys());
        };
        a.count = function() {
            const e = this;
            return o("WAWebDexieCastTypes").dexieCastToPromise(this.table.count()).catch((t)=>{
                e.$1(r("getErrorSafe")(t), "count");
                throw t;
            });
        };
        a.bulkDeleteRange = function(t, n, a, i) {
            const e = this;
            const l = this.table.where(o("WAWebIdbHelpers").formatQueryIndex(t, this.tableColumns)).between(n, a, !!(i != null && i.lowerInclusive), !!(i != null && i.upperInclusive));
            return o("WAWebDexieCastTypes").dexieCastToPromise(o("WAWebIdbHelpers").applyOptions(l, i).delete()).catch((t)=>{
                e.$1(r("getErrorSafe")(t), "bulkDeleteRange");
                throw t;
            });
        };
        a.equals = function(t, n, a) {
            const e = this;
            return o("WAWebDexieCastTypes").dexieCastToPromise(o("WAWebIdbHelpers").applyOptions(this.table.where(o("WAWebIdbHelpers").formatQueryIndex(t, this.tableColumns)).equals(n), a).toArray()).then((t)=>e.asyncViewMap(t, a?.shouldDecrypt)).catch((t)=>{
                e.$1(r("getErrorSafe")(t), "equals");
                throw t;
            });
        };
        a.equalsPrimaryKeys = function(t, n, a) {
            const e = this;
            return o("WAWebDexieCastTypes").dexieCastToPromise(o("WAWebIdbHelpers").applyOptions(this.table.where(o("WAWebIdbHelpers").formatQueryIndex(t, this.tableColumns)).equals(n), a).primaryKeys()).catch((t)=>{
                e.$1(r("getErrorSafe")(t), "equalsPrimaryKeys");
                throw t;
            });
        };
        a.anyOf = function(t, a, i) {
            const e = this;
            if (a.length === 0) {
                return (d || (d = n("Promise"))).resolve([]);
            }
            return o("WAWebDexieCastTypes").dexieCastToPromise(o("WAWebIdbHelpers").applyOptions(this.table.where(o("WAWebIdbHelpers").formatQueryIndex(t, this.tableColumns)).anyOf(a), i).distinct().toArray()).then((t)=>e.asyncViewMap(t, i?.shouldDecrypt)).catch((t)=>{
                e.$1(r("getErrorSafe")(t), "anyOf");
                throw t;
            });
        };
        a.anyOfPrimaryKeys = function(t, a, i) {
            const e = this;
            if (a.length === 0) {
                return (d || (d = n("Promise"))).resolve([]);
            }
            return o("WAWebDexieCastTypes").dexieCastToPromise(o("WAWebIdbHelpers").applyOptions(this.table.where(o("WAWebIdbHelpers").formatQueryIndex(t, this.tableColumns)).anyOf(a), i).distinct().primaryKeys()).catch((t)=>{
                e.$1(r("getErrorSafe")(t), "anyOfPrimaryKeys");
                throw t;
            });
        };
        a.inAnyRange = function(t, a, i) {
            const e = this;
            if (a.length === 0) {
                return (d || (d = n("Promise"))).resolve([]);
            }
            return o("WAWebDexieCastTypes").dexieCastToPromise(o("WAWebIdbHelpers").applyOptions(this.table.where(o("WAWebIdbHelpers").formatQueryIndex(t, this.tableColumns)).inAnyRange(a), i).distinct().toArray()).then((t)=>e.asyncViewMap(t, i?.shouldDecrypt)).catch((t)=>{
                e.$1(r("getErrorSafe")(t), "inAnyRange");
                throw t;
            });
        };
        a.startsWithAnyOf = function(t, a, i) {
            const e = this;
            if (a.length === 0) {
                return (d || (d = n("Promise"))).resolve([]);
            }
            return o("WAWebDexieCastTypes").dexieCastToPromise(o("WAWebIdbHelpers").applyOptions(this.table.where(o("WAWebIdbHelpers").formatQueryIndex(t, this.tableColumns)).startsWithAnyOf(a), i).distinct().toArray()).then((t)=>e.asyncViewMap(t, i?.shouldDecrypt)).catch((t)=>{
                e.$1(r("getErrorSafe")(t), "startsWithAnyOf");
                throw t;
            });
        };
        a.greaterThan = function(t, n, a) {
            const e = this;
            const i = a?.inclusive === true ? this.table.where(o("WAWebIdbHelpers").formatQueryIndex(t, this.tableColumns)).aboveOrEqual(n) : this.table.where(o("WAWebIdbHelpers").formatQueryIndex(t, this.tableColumns)).above(n);
            return o("WAWebDexieCastTypes").dexieCastToPromise(o("WAWebIdbHelpers").applyOptions(i, a).toArray()).then((t)=>e.asyncViewMap(t, a?.shouldDecrypt)).catch((t)=>{
                e.$1(r("getErrorSafe")(t), "greaterThan");
                throw t;
            });
        };
        a.lessThan = function(t, n, a) {
            const e = this;
            const i = a?.inclusive === true ? this.table.where(o("WAWebIdbHelpers").formatQueryIndex(t, this.tableColumns)).belowOrEqual(n) : this.table.where(o("WAWebIdbHelpers").formatQueryIndex(t, this.tableColumns)).below(n);
            return o("WAWebDexieCastTypes").dexieCastToPromise(o("WAWebIdbHelpers").applyOptions(i, a).toArray()).then((t)=>e.asyncViewMap(t, a?.shouldDecrypt)).catch((t)=>{
                e.$1(r("getErrorSafe")(t), "lessThan");
                throw t;
            });
        };
        a.between = function(t, n, a, i, l, s) {
            const e = this;
            const u = o("WAWebIdbHelpers").applyOptions(this.table.where(o("WAWebIdbHelpers").formatQueryIndex(t, this.tableColumns)).between(n, a, !!(i != null && i.lowerInclusive), !!(i != null && i.upperInclusive)).filter((e)=>s?.(e) ?? true), i);
            let c = null;
            switch(i?.returnKeyType){
                case "keys":
                    c = o("WAWebDexieCastTypes").dexieCastToPromise(u.keys());
                    break;
                case "primary_key":
                    c = o("WAWebDexieCastTypes").dexieCastToPromise(u.primaryKeys());
                    break;
                default:
                    if (l) {
                        c = o("WAWebDexieCastTypes").dexieCastToPromise(u.until(function(t) {
                            return l(e.$2(t));
                        }).toArray()).then((t)=>e.asyncViewMap(t, i?.shouldDecrypt));
                    } else {
                        c = o("WAWebDexieCastTypes").dexieCastToPromise(u.toArray()).then((t)=>e.asyncViewMap(t, i?.shouldDecrypt));
                    }
            }
            return c.catch((t)=>{
                e.$1(r("getErrorSafe")(t), "between");
                throw t;
            });
        };
        a.betweenCount = function(t, n, a, i) {
            const e = this;
            const l = this.table.where(o("WAWebIdbHelpers").formatQueryIndex(t, this.tableColumns)).between(n, a, !!(i != null && i.lowerInclusive), !!(i != null && i.upperInclusive));
            return o("WAWebDexieCastTypes").dexieCastToPromise(o("WAWebIdbHelpers").applyOptions(l, i).count()).catch((t)=>{
                e.$1(r("getErrorSafe")(t), "betweenCount");
                throw t;
            });
        };
        a.forEachSortedBy = function(t, o) {
            const e = this;
            return this.table.orderBy(t).each((()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                    const n = e.$2(t);
                    const r = yield e.$4(n);
                    return o(e.view(r));
                });
                return function(e) {
                    return t.apply(this, arguments);
                };
            })()).catch((t)=>{
                e.$1(r("getErrorSafe")(t), "forEachSortedBy");
                throw t;
            });
        };
        a.forEach = function(t) {
            const e = this;
            return this.table.each((()=>{
                const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n) {
                    const r = e.$2(n);
                    const o = yield e.$4(r);
                    return t(e.view(o));
                });
                return function(e) {
                    return r.apply(this, arguments);
                };
            })()).catch((t)=>{
                e.$1(r("getErrorSafe")(t), "forEach");
                throw t;
            });
        };
        a.clear = function() {
            const e = this;
            return o("WAWebDexieCastTypes").dexieCastToPromise(this.table.clear()).catch((t)=>{
                e.$1(r("getErrorSafe")(t), "clear");
                throw t;
            });
        };
        a.$15 = function(t) {
            const n = this.updateListenerField ?? this.$17();
            if (n in t) {
                return t[n];
            }
            return null;
        };
        a.$17 = function() {
            return this.table.schema.primKey.name;
        };
        a.$3 = function() {
            return this.tableEncryptedColumns.size > 0;
        };
        a.addHook = function(t) {
            this.table.hook(t.type, t.callback);
        };
        a.setUpdateListener = function(t, n = null) {
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[storage] setUpdateListener for ",
                ""
            ])), this.table.name);
            this.updateListener = t;
            this.updateListenerField = n;
        };
        return t;
    })();
    const _ = (()=>{
        function e(e, t) {
            this.tableNames = new Map;
            this.tableColumns = new Map;
            this.tableEncryptedColumns = new Map;
            this.errorHandlers = new Map;
            this.name = e;
            this.db = new (r("WAWeb-dexie"))(this.name, {
                chromeTransactionDurability: "relaxed",
                addons: []
            });
            o("WAWebDexieObservability").dropDexieObservability(this.db);
            this.db.use(o("WAWebIdbTransactionCounter").idbTransactionCounterMiddleware);
            o("WAWebStorageCmd").notifyOnVersionChange(this.db, e);
            this.packColumns = !!(t != null && t.packColumns);
        }
        const t = e.prototype;
        t.initialize = function(t, r, a, i) {
            if (i) {
                this.errorHandlers = i;
            }
            const e = o("WAWebIdbHelpers").schemasToStores({
                schemas: r,
                tableColumns: this.tableColumns,
                tableEncryptedColumns: this.tableEncryptedColumns,
                tableNames: this.tableNames
            });
            this.db.version(t + 1).stores(e).upgrade(function(e) {
                if (a) {
                    return e[a.name]?.toCollection().modify(a.callback);
                }
            });
            return (d || (d = n("Promise"))).resolve();
        };
        t.open = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield o("WAWebDexieCastTypes").dexieCastToPromise(this.db.open());
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t.transact = function(t, r, a = "rw") {
            return o("WAWebDexieCastTypes").dexieCastToPromise(this.db.transaction(a, t, n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = yield r();
                return e;
            })));
        };
        t.close = function() {
            this.db.close();
            return o("WAWebDexieCastTypes").dexieCastToPromise();
        };
        t.view = function(t, n, a, i) {
            if (!this.tableNames.has(t)) {
                s(0, 75743, t);
            }
            if (!this.tableColumns.has(t)) {
                s(0, 75744, t);
            }
            const e = a ? o("WAWebIdbHelpers").columnPropFilter(this.tableColumns.get(t)) : function(e) {
                return e;
            };
            return new p(this.db.table(this.tableNames.get(t)), this.db, n, e, r("nullthrows")(this.tableColumns.get(t)), r("nullthrows")(this.tableEncryptedColumns.get(t)), {
                shouldUseDbMsgEncKeyForEncryptedCol: i,
                packColumns: this.packColumns,
                errorHandlers: this.errorHandlers
            });
        };
        t.available = function() {
            return (d || (d = n("Promise"))).resolve(true);
        };
        t.reset = function() {
            this.tableNames = new Map;
            return o("WAWebDexieCastTypes").dexieCastToPromise(this.db.delete());
        };
        t.getDbName = function() {
            return this.name;
        };
        return e;
    })();
    l.default = _;
}, 98);