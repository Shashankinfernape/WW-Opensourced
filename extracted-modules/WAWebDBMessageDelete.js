__d("WAWebDBMessageDelete", [
    "Promise",
    "WALogger",
    "WAWebDBDeleteAssociatedMsgsByMsgKey",
    "WAWebDBGetAssociatedMsgsByParentMsgKey",
    "WAWebDBReportingTokenUtils",
    "WAWebDBStoreRevokeMsgs",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageInitialize",
    "WAWebModelStorageUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebNoop",
    "WAWebQuarantineDataStore",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime",
    "cr:375",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = n("cr:375") ?? {};
    const p_ftsLightClient = p.ftsLightClient;
    function f(e, t) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { deleteAssociatedMsgs, preserveQuarantineData = false } = {
            deleteAssociatedMsgs: true
        }) {
            if (e.length !== 0) {
                const f = [];
                return o("WAWebModelStorageInitialize").initializeWithoutGKs().then(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const deleteMsgIdsSet = new Set(e);
                    const msgRowIds = [];
                    const deleteAssociationMappings = [];
                    if (deleteAssociatedMsgs) {
                        const l = yield o("WAWebDBGetAssociatedMsgsByParentMsgKey").bulkGetMessagesByParentMsgKey(Array.from(e, function(e) {
                            return r("WAWebMsgKey").fromString(e);
                        }));
                        l.forEach((e)=>{
                            deleteAssociationMappings.push([
                                e.msgKey,
                                e.associationType
                            ]);
                            deleteMsgIdsSet.add(e.msgKey);
                        });
                    }
                    const s = Array.from(deleteMsgIdsSet);
                    yield o("WAWebSchemaMessage").getMessageTable().bulkGet(s, false).then((e)=>{
                        e.forEach((e)=>{
                            if (e?.rowId != null) {
                                msgRowIds.push(String(e.rowId));
                            }
                            const t = e?.associationType;
                            if (t != null && e != null) {
                                deleteAssociationMappings.push([
                                    e.id.toString(),
                                    t
                                ]);
                            }
                            const targetId = e?.botResponseTargetId;
                            const internalId = e?.internalId;
                            if (e?.botPluginSearchProvider != null && e?.botPluginSearchUrl != null && targetId != null && internalId != null) {
                                f.push({
                                    internalId,
                                    targetId
                                });
                            }
                        });
                    });
                    return {
                        deleteMsgIdsSet,
                        msgRowIds,
                        deleteAssociationMappings
                    };
                })).then((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        const { deleteAssociationMappings, deleteMsgIdsSet } = e;
                        yield o("WAWebModelStorageUtils").getStorage().lock([
                            "message",
                            "chat",
                            "message-association"
                        ], (()=>{
                            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                                const i = Array.from(deleteMsgIdsSet);
                                const l = [
                                    o("WAWebSchemaMessage").getMessageTable().bulkRemove(i)
                                ];
                                if (deleteAssociationMappings.length > 0) {
                                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                        "[association-infra] del assocs for self"
                                    ])));
                                    const d = o("WAWebDBDeleteAssociatedMsgsByMsgKey").bulkDeleteMessagesByMsgKeyAndAssociationType(deleteAssociationMappings);
                                    l.push(d);
                                }
                                try {
                                    if (f.length > 0) {
                                        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                            "[bot] Removing bot plugin msgs after delete for self"
                                        ])));
                                        yield o("WAWebDBStoreRevokeMsgs").findAndDeleteAssociatedPluginMsg(f);
                                    }
                                } catch (error) {
                                    const p = r("getErrorSafe")(error);
                                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                        "[bot] findAndDeleteAssociatedPluginMsg failed"
                                    ]))).catching(p).sendLogs("Plugin carousel delete failed");
                                }
                                return (m || (m = n("Promise"))).all(l);
                            });
                            return function(t) {
                                return e.apply(this, arguments);
                            };
                        })());
                        return {
                            deleteMsgIdsSet,
                            msgRowIds: e.msgRowIds
                        };
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })()).then(({ deleteMsgIdsSet, msgRowIds })=>{
                    if (msgRowIds.length > 0) {
                        if (p_ftsLightClient != null) {
                            p_ftsLightClient.purge(msgRowIds).catch(r("WAWebNoop"));
                        }
                    }
                    return deleteMsgIdsSet;
                }).then((e)=>{
                    const t = Array.from(e);
                    o("WAWebDBReportingTokenUtils").handleDeleteReportingInfos(t, {
                        removeWholeRow: true
                    });
                    h(t, preserveQuarantineData);
                }).catch((e)=>{
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "removeMessagesFromHistory"
                    ]))).catching(r("getErrorSafe")(e));
                    throw e;
                });
            }
        });
        return g.apply(this, arguments);
    }
    function h(e, preserveQuarantineData) {
        if (!preserveQuarantineData) {
            o("WAWebQuarantineDataStore").bulkDeleteQuarantineData(e).catch(r("WAWebNoop"));
        }
    }
    function y(e) {
        const t = [];
        for (const r of e){
            if (o("WAWebMsgGetters").getIsStatus(r)) {
                t.push(r.id.toString());
                const a = o("WAWebLidMigrationUtils").getAlternateMsgKey(r.id);
                if (a != null) {
                    t.push(a.toString());
                }
            }
        }
        if (t.length > 0) {
            return o("WAWebSchemaMessage").getMessageTable().bulkRemove(t);
        }
        return (m || (m = n("Promise"))).resolve();
    }
    l.removeMessagesFromHistory = f;
    l.removeStatusMessage = y;
}, 98);