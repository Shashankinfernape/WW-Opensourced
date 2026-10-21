__d("WAWebAddonUpdateDataUtils", [
    "Promise",
    "WAWebAddonConstants",
    "WAWebAddonDBTable",
    "WAWebAddonHydrationUtils",
    "WAWebAddonInfraError",
    "WAWebAddonPerfUtils",
    "WAWebAddonProcessMsgsUtils",
    "WAWebAddonSelectUtils",
    "WAWebAddonSortUtils",
    "WAWebCommentUtils",
    "WAWebMsgType",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = new Set([
        (s = o("WAWebAddonConstants")).AddonProcessMode.OnlineReceive,
        s.AddonProcessMode.Revoke,
        s.AddonProcessMode.DeleteForMe,
        s.AddonProcessMode.DeleteWithParent
    ]);
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ addons, metricReporter, processMode, tableMode }) {
            const d = [];
            let m = addons.removeByMsgKey ?? [];
            let removeFromUICollection = addons.removeByMsgKey ?? [];
            if (addons.remove != null && addons.remove.length > 0) {
                m = m.concat(addons.remove.map((e)=>e.id));
                removeFromUICollection = removeFromUICollection.concat(o("WAWebAddonHydrationUtils").filterAddonsByHydratedStatus(addons.remove).map((e)=>e.id));
            }
            if (tableMode !== o("WAWebAddonConstants").AddonTableMode.None) {
                if (addons.add != null && addons.add.length > 0) {
                    const _ = (()=>{
                        const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                            metricReporter?.sendPerfReporter?.startSavedStage();
                            const i = yield o("WAWebAddonPerfUtils").createAddonQplMarker(processMode === o("WAWebAddonConstants").AddonProcessMode.Send ? o("WAWebAddonPerfUtils").AddonQplMarkerType.Outgoing : o("WAWebAddonPerfUtils").AddonQplMarkerType.Incoming, {
                                mode: tableMode,
                                type: o("WAWebAddonPerfUtils").AnnotationRequestType.BulkUpsert,
                                size: addons.add.length
                            });
                            try {
                                if (processMode === o("WAWebAddonConstants").AddonProcessMode.SetAck) {
                                    yield (e || (e = n("Promise"))).all(addons.add.map((e)=>o("WAWebAddonDBTable").addonInternalDBTable.updateAck(tableMode, e, r("nullthrows")(e.ack, "ack is not defined"))));
                                } else {
                                    yield o("WAWebAddonDBTable").addonInternalDBTable.bulkUpsert(tableMode, addons.add);
                                }
                                i?.success();
                            } catch (error) {
                                i?.fail();
                                throw error;
                            }
                            metricReporter?.sendPerfReporter?.postSavedStage();
                        });
                        return function() {
                            return t.apply(this, arguments);
                        };
                    })();
                    d.push(_());
                }
                if (m.length > 0) {
                    d.push(o("WAWebAddonDBTable").addonInternalDBTable.bulkRemoveByMsgKey(tableMode, m));
                }
            }
            if (d.length > 0) {
                yield (e || (e = n("Promise"))).all(d);
            }
            return {
                removeFromUICollection
            };
        });
        return d.apply(this, arguments);
    }
    function m(e, t, n) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ processMode, tableMode }, r, a) {
            const s = a?.metricReporter;
            if (processMode === o("WAWebAddonConstants").AddonProcessMode.Hydration) {
                throw new (o("WAWebAddonInfraError")).AddonInfraError(o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedError);
            }
            const d = yield c({
                addons: r,
                metricReporter: s,
                processMode,
                tableMode
            });
            const d_removeFromUICollection = d.removeFromUICollection;
            if (processMode !== o("WAWebAddonConstants").AddonProcessMode.HistorySync) {
                if (r.add != null) {
                    s?.sendPerfReporter?.startRenderedStage();
                    yield (e || (e = n("Promise"))).all(o("WAWebAddonSortUtils").groupAddonsByProcessor(processMode, tableMode, r.add).map((()=>{
                        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                            const t = o("WAWebAddonHydrationUtils").filterAddonsByHydratedStatus(e.addons);
                            const n = t.length !== 0 || d_removeFromUICollection.length !== 0 || processMode === o("WAWebAddonConstants").AddonProcessMode.OnlineReceive;
                            if (n) {
                                yield e.processor.updateCollection({
                                    add: t,
                                    remove: d_removeFromUICollection
                                }, processMode);
                                if (u.has(processMode)) {
                                    yield e.processor.manageNotifications({
                                        add: processMode === o("WAWebAddonConstants").AddonProcessMode.Revoke ? [] : e.addons,
                                        remove: d_removeFromUICollection
                                    }, {
                                        processMode
                                    });
                                }
                            }
                        });
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    })()));
                    s?.sendPerfReporter?.postRenderedStage();
                } else if (r.remove != null) {
                    yield (e || (e = n("Promise"))).all(o("WAWebAddonSortUtils").groupAddonsByProcessor(processMode, tableMode, r.remove).map((()=>{
                        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                            yield e.processor.updateCollection({
                                add: [],
                                remove: d_removeFromUICollection
                            }, processMode);
                            if (u.has(processMode)) {
                                yield e.processor.manageNotifications({
                                    add: [],
                                    remove: d_removeFromUICollection
                                }, {
                                    processMode
                                });
                            }
                        });
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    })()));
                    if (processMode === o("WAWebAddonConstants").AddonProcessMode.DeleteForMe && tableMode === o("WAWebAddonConstants").AddonTableMode.Comment) {
                        const f = yield o("WAWebAddonProcessMsgsUtils").queryAddonParentMsgs(r.remove, o("WAWebAddonConstants").AddonProcessMode.DeleteForMe);
                        const g = f[0];
                        const h = [];
                        for (const y of r.remove){
                            if (y.kind === o("WAWebMsgType").MsgKind.CommentDecrypted) {
                                h.push(y);
                            }
                        }
                        yield o("WAWebCommentUtils").updateReplyCount([], o("WAWebAddonSelectUtils").createAddonParentSelector(g), h);
                    }
                } else {
                    throw new (o("WAWebAddonInfraError")).AddonInfraError(o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedError);
                }
            }
        });
        return p.apply(this, arguments);
    }
    l.updateAddonsInTableMode = m;
}, 98);