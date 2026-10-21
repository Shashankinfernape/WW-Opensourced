__d("WAWebAgentSync", [
    "Promise",
    "WAWebAgentCollection",
    "WAWebAgentModelUtils",
    "WAWebMsgCollection",
    "WAWebSchemaAgent",
    "WAWebSyncdAction",
    "WAWebSyncdConst",
    "WAWebUnattributedMessageCollection",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s() {
        (e || (e = n("Promise"))).resolve().finally(()=>{
            o("WAWebUnattributedMessageCollection").UnattributedMessageCollection.getModelsArray().forEach(({ deviceId, id })=>{
                const r = o("WAWebMsgCollection").MsgCollection.get(id);
                if (r != null) {
                    const a = o("WAWebAgentCollection").AgentCollection.getByDeviceId(deviceId);
                    if (a != null) {
                        r.agentId = String(a.id);
                        o("WAWebUnattributedMessageCollection").UnattributedMessageCollection.remove(id);
                    }
                }
            });
        });
    }
    const u = ((t)=>{
        function r(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.collectionName = o("WAWebSyncdConst").CollectionName.Regular;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.getVersion = function() {
            return 7;
        };
        r_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.Agent;
        };
        r_prototype.getValidatedContentSet = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const e_indexParts = e.indexParts;
                const n = e_indexParts[1];
                if (!n) {
                    return {
                        result: "malformed_index"
                    };
                }
                const agentAction = e.value.agentAction;
                if (agentAction) {
                    return {
                        result: "ok",
                        content: {
                            operation: "set",
                            agentId: n,
                            agentAction
                        }
                    };
                }
                return {
                    result: "malformed_value"
                };
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r_prototype.getValidatedContentRemove = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ indexParts }) {
                const n = indexParts[1];
                if (n) {
                    return {
                        result: "ok",
                        content: {
                            operation: "remove",
                            agentId: n
                        }
                    };
                }
                return {
                    result: "malformed_index"
                };
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const r = this;
                const a = [];
                const i = [];
                const l = yield (e || (e = n("Promise"))).all(t.map((e)=>r.withValidatedContent(e, (()=>{
                        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                            const e_agentId = e.agentId;
                            e: {
                                const n = e;
                                if ((typeof n === "object" && n !== null || typeof n === "function") && n.operation === "remove") {
                                    i.push(e_agentId);
                                    return {
                                        actionState: o("WAWebSyncdConst").SyncActionState.Success
                                    };
                                    break e;
                                }
                                if ((typeof n === "object" && n !== null || typeof n === "function") && n.operation === "set" && "agentAction" in n) {
                                    const u = n.agentAction;
                                    const c = o("WAWebAgentModelUtils").getFormattedAgentName(u.name ?? "", u.deviceId ?? -1);
                                    a.push({
                                        id: e_agentId,
                                        name: c,
                                        deviceId: u.deviceId ?? -1,
                                        isDeleted: !!u.isDeleted
                                    });
                                    return {
                                        actionState: o("WAWebSyncdConst").SyncActionState.Success
                                    };
                                    break e;
                                }
                                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${n}`);
                            }
                        });
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    })())));
                yield o("WAWebSchemaAgent").getAgentTable().bulkCreateOrMerge(a);
                o("WAWebAgentCollection").AgentCollection.add(a.map((e)=>babelHelpers.extends({}, e)), {
                    merge: true
                });
                yield o("WAWebSchemaAgent").getAgentTable().bulkRemove(i);
                o("WAWebAgentCollection").AgentCollection.remove(i);
                s();
                return l;
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        return r;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const c = new u;
    l.default = c;
}, 98);