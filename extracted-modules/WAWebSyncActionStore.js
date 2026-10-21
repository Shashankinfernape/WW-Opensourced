__d("WAWebSyncActionStore", [
    "Promise",
    "WALogger",
    "WAWebSchemaSyncActions",
    "WAWebSyncdDb",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = (()=>{
        function t() {}
        const r = t.prototype;
        r.count = function() {
            return o("WAWebSchemaSyncActions").getSyncActionsTable().count();
        };
        r.get = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = yield o("WAWebSyncdDb").getSyncAction(e);
                if (t == null) {
                    return null;
                }
                return o("WAWebSchemaSyncActions").convertToSyncActionFromRow(t);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r.getByCollections = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = yield o("WAWebSyncdDb").getSyncActionsRows([
                    "collection"
                ], e);
                return t.map(o("WAWebSchemaSyncActions").convertToSyncActionFromRow);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r.getByIndexMacs = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                if (e.length < 7) {
                    return this.getByIndexMacsMultiQuery(e);
                }
                return this.getByIndexMacsSingleQuery(e);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r.getByCollectionAndIndex = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
                const r = yield o("WAWebSyncdDb").getSyncActionsRows([
                    "index"
                ], n);
                const a = r.filter((e)=>e.collection === t);
                if (r.length !== a.length) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd] collection mismatch for mutation index: ",
                        ""
                    ])), t).sendLogs("index-in-wrong-collection");
                }
                return a.map(o("WAWebSchemaSyncActions").convertToSyncActionFromRow);
            });
            function r(e, n) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        r.getByIndexMacsMultiQuery = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = yield (s || (s = n("Promise"))).all(e.map((e)=>o("WAWebSyncdDb").getSyncActionsRows([
                        "indexMac"
                    ], [
                        e
                    ])));
                return t.flat().map(o("WAWebSchemaSyncActions").convertToSyncActionFromRow);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r.getByIndexMacsSingleQuery = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = yield o("WAWebSyncdDb").getSyncActionsRows([
                    "indexMac"
                ], e);
                return t.map(o("WAWebSchemaSyncActions").convertToSyncActionFromRow);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r.getByActionStates = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = yield o("WAWebSyncdDb").getSyncActionsRows([
                    "actionState"
                ], e);
                return t.map(o("WAWebSchemaSyncActions").convertToSyncActionFromRow);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r.getByModelInfos = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = yield o("WAWebSyncdDb").getSyncActionsRows([
                    "modelId",
                    "modelType",
                    "actionState"
                ], e);
                return t.map(o("WAWebSchemaSyncActions").convertToSyncActionFromRow);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r.getAll = function() {
            return o("WAWebSchemaSyncActions").getSyncActionsTable().all().then((e)=>e.map(o("WAWebSchemaSyncActions").convertToSyncActionFromRow));
        };
        r.bulkSet = function(t) {
            return o("WAWebSyncdDb").setSyncActionRows(t.map(o("WAWebSchemaSyncActions").convertFromSyncActionToRow));
        };
        r.bulkUpdate = function(t) {
            return o("WAWebSyncdDb").updateSyncActionRows(t.map(o("WAWebSchemaSyncActions").convertFromSyncActionToRow));
        };
        r.bulkRemove = function(t) {
            return o("WAWebSyncdDb").deleteSyncActionRows(t);
        };
        r.clear = function() {
            return o("WAWebSchemaSyncActions").getSyncActionsTable().clear();
        };
        return t;
    })();
    u.locks = [
        "sync-actions"
    ];
    l.WAWebSyncActionStore = u;
}, 98);