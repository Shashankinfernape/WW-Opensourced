__d("WAWebSyncdResolveConflict", [
    "Promise",
    "WAWebGetPendingMutation",
    "WAWebSyncdConst",
    "asyncToGeneratorRuntime",
    "compactMap"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r) {
            const o = yield (e || (e = n("Promise"))).all(t.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const t = r.get(e.index);
                    if (t) {
                        const n = e.actionHandler;
                        return {
                            remoteMutationIndex: e.index,
                            conflictResolutionState: yield n.resolveConflicts(t, e)
                        };
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
            const a = new Map;
            o.forEach((e)=>{
                if (e) {
                    a.set(e.remoteMutationIndex, e.conflictResolutionState);
                }
            });
            return a;
        });
        return u.apply(this, arguments);
    }
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = [];
            let a = [];
            const i = yield o("WAWebGetPendingMutation").getSyncPendingMutationsByCollectionInTransaction(e);
            const l = new Map(i.map((e)=>[
                    e.index,
                    e
                ]));
            const u = yield s(t, l);
            t.forEach((e)=>{
                const t = u.get(e.index);
                if (t) {
                    e: {
                        if (t === o("WAWebSyncdConst").ConflictResolutionState.SkipRemote) {
                            break e;
                        }
                        if (t === o("WAWebSyncdConst").ConflictResolutionState.ApplyRemoteAndDropLocal) {
                            n.push(e);
                            a = a.concat(i.filter((t)=>t.index === e.index));
                            break e;
                        }
                        if (t === o("WAWebSyncdConst").ConflictResolutionState.SkipRemoteAndDropLocal) {
                            a = a.concat(i.filter((t)=>t.index === e.index));
                            break e;
                        }
                        throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t}`);
                    }
                } else {
                    n.push(e);
                }
            });
            const remoteMutationsToApply = [];
            for(let d = 0; d < n.length; d++){
                const m = n[d].actionHandler;
                const p = yield m.dropMutationDueToCrossIndexConflict(n[d], l);
                if (!p) {
                    remoteMutationsToApply.push(n[d]);
                }
            }
            const pendingSetMutationsToDrop = r("compactMap")(a, function(e) {
                return e.id;
            });
            return {
                remoteMutationsToApply,
                pendingSetMutationsToDrop
            };
        });
        return d.apply(this, arguments);
    }
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WAWebGetPendingMutation").getSyncPendingMutationsByCollectionInTransaction(e);
            const a = new Map(t.map((e)=>[
                    e.index,
                    e
                ]));
            return r("compactMap")(n, function(e) {
                const t = a.get(e.index);
                if (t == null || !t.actionHandler.shouldDropPendingMutationForRemoteRemove(e, t)) {
                    return null;
                }
                return e.id;
            });
        });
        return p.apply(this, arguments);
    }
    l.resolveConflict = c;
    l.resolveRemoveConflicts = m;
}, 98);