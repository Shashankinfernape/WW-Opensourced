__d("WAWebMemberLabelJob", [
    "WAJobOrchestratorTypes",
    "WAWebModelStorageUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaMemberLabel",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, memberLabel) {
        return e != null && e.lastEditTimestamp > memberLabel.lastEditTimestamp;
    }
    function s({ chatId, member }) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("getMemberLabel", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebSchemaMemberLabel").getMemberLabelTable().get(chatId);
            if (e != null) {
                return e.memberLabelMap.get(member);
            }
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    function u({ chatId, member }) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("deleteMemberLabel", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            return o("WAWebModelStorageUtils").getStorage().lock([
                "member-label"
            ], (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                    const o = yield n.get(chatId);
                    if (o == null) {
                        return false;
                    }
                    o.memberLabelMap.delete(member);
                    if (o.memberLabelMap.size === 0) {
                        yield n.remove(chatId);
                        return true;
                    }
                    const a = {
                        memberLabelMap: o.memberLabelMap
                    };
                    yield n.merge(chatId, a);
                    return true;
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    function c({ chatId, member, memberLabel }) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("createOrUpdateMemberLabel", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            return o("WAWebModelStorageUtils").getStorage().lock([
                "member-label"
            ], (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                    const o = yield n.get(chatId);
                    if (o == null) {
                        const l = {
                            chatId,
                            memberLabelMap: new Map([
                                [
                                    member,
                                    memberLabel
                                ]
                            ])
                        };
                        yield n.create(l);
                        return true;
                    }
                    const s = o.memberLabelMap.get(member);
                    if (e(s, memberLabel)) {
                        return false;
                    }
                    const u = {
                        memberLabelMap: o.memberLabelMap.set(member, memberLabel)
                    };
                    yield n.merge(chatId, u);
                    return true;
                });
                return function(e) {
                    return t.apply(this, arguments);
                };
            })());
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    function d({ chatId }) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("getMemberLabelsForGroups", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebSchemaMemberLabel").getMemberLabelTable().get(chatId);
            if (e != null) {
                return e.memberLabelMap;
            }
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    function m({ chatId }) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("deleteAllLabelsForGroup", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            return o("WAWebModelStorageUtils").getStorage().lock([
                "member-label"
            ], (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                    const r = yield n.get(chatId);
                    if (!r) {
                        return [];
                    }
                    const o = Array.from(r.memberLabelMap.keys());
                    yield n.remove(chatId);
                    return o;
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    function p({ chatId, members }) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("deleteMemberLabels", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            return o("WAWebModelStorageUtils").getStorage().lock([
                "member-label"
            ], (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                    const o = yield n.get(chatId);
                    if (o == null) {
                        return [];
                    }
                    const a = members.filter((e)=>o.memberLabelMap.delete(e));
                    if (o.memberLabelMap.size === 0) {
                        yield n.remove(chatId);
                    } else {
                        yield n.merge(chatId, {
                            memberLabelMap: o.memberLabelMap
                        });
                    }
                    return a;
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    l.getMemberLabel = s;
    l.deleteMemberLabel = u;
    l.createOrUpdateMemberLabel = c;
    l.getMemberLabelsForGroups = d;
    l.deleteAllMemberLabelsForGroup = m;
    l.deleteMemberLabelsForGroup = p;
}, 98);