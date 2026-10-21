__d("WAWebGroupHistoryParticipantJob", [
    "WALogger",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryPostJoinTypes",
    "WAWebGroupType",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebSchemaGroupHistoryParticipant",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r) {
            if (o("WAWebGroupHistoryGating").isGroupHistoryAfterJoinPrerequisitesEnabled()) {
                const a = r.filter((e)=>e.joinTime != null);
                if (a.length !== 0) {
                    let i;
                    try {
                        i = o("WAWebWidToJid").widToGroupJid(t);
                    } catch (e) {
                        return;
                    }
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[group-history][M2] Storing join metadata for ",
                        " participants"
                    ])), a.length);
                    yield o("WAWebModelStorageUtils").getStorage().lock([
                        "group-history-participant"
                    ], (()=>{
                        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                            const r = yield n.get(i);
                            const l = r?.participantMetadataMap ?? new Map;
                            for (const s of a){
                                const _ = s.lid ?? s.id;
                                const f = o("WAWebLidMigrationUtils").toUserLid(_);
                                if (f != null) {
                                    const g = o("WAWebWidToJid").userLidtoLidUserJid(f);
                                    const h = l.get(g);
                                    l.set(g, {
                                        joinTime: s.joinTime ?? h?.joinTime ?? null,
                                        groupHistorySentState: s.groupHistorySentState ?? h?.groupHistorySentState ?? null
                                    });
                                }
                            }
                            yield n.createOrMerge(i, {
                                chatId: i,
                                participantMetadataMap: l
                            });
                        });
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    })());
                }
            }
        });
        return u.apply(this, arguments);
    }
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (o("WAWebGroupHistoryGating").isGroupHistoryAfterJoinPrerequisitesEnabled()) {
                let r;
                try {
                    r = o("WAWebWidToJid").widToGroupJid(e);
                } catch (e) {
                    return;
                }
                yield o("WAWebModelStorageUtils").getStorage().lock([
                    "group-history-participant"
                ], (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                        const a = yield n.get(r);
                        const i = a?.participantMetadataMap;
                        if (!(i == null || i.size === 0)) {
                            let l = false;
                            for (const s of t){
                                const c = o("WAWebLidMigrationUtils").toUserLid(s.lid ?? s.id);
                                if (c != null && i.delete(o("WAWebWidToJid").userLidtoLidUserJid(c))) {
                                    l = true;
                                }
                            }
                            if (l) {
                                if (i.size === 0) {
                                    yield n.remove(r);
                                } else {
                                    yield n.merge(r, {
                                        participantMetadataMap: i
                                    });
                                }
                            }
                        }
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })());
            }
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            let t;
            try {
                t = o("WAWebWidToJid").widToGroupJid(e);
            } catch (e) {
                return;
            }
            yield o("WAWebSchemaGroupHistoryParticipant").getGroupHistoryParticipantTable().remove(t);
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            let n;
            try {
                n = o("WAWebWidToJid").widToGroupJid(e);
            } catch (e) {
                return null;
            }
            const r = yield o("WAWebSchemaGroupHistoryParticipant").getGroupHistoryParticipantTable().get(n);
            return r?.participantMetadataMap ?? null;
        });
        return f.apply(this, arguments);
    }
    function g(e, t) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t.actionType !== o("WAWebGroupType").GROUP_ACTIONS.ADD || !o("WAWebGroupHistoryGating").isGroupHistoryAfterJoinPrerequisitesEnabled()) {
                return t;
            }
            const n = yield _(e);
            if (n == null || n.size === 0) {
                return t;
            }
            let r = false;
            const a = t.participants.map((e)=>{
                if (e.groupHistorySentState === o("WAWebGroupHistoryPostJoinTypes").GroupHistorySentState.HISTORY_SENT || e.groupHistorySentState === o("WAWebGroupHistoryPostJoinTypes").GroupHistorySentState.NOTICE_SENT) {
                    return e;
                }
                const i = o("WAWebLidMigrationUtils").toUserLid(e.lid ?? e.id);
                if (i == null) {
                    return e;
                }
                const l = n.get(o("WAWebWidToJid").userLidtoLidUserJid(i))?.groupHistorySentState;
                if (l !== o("WAWebGroupHistoryPostJoinTypes").GroupHistorySentState.HISTORY_SENT && l !== o("WAWebGroupHistoryPostJoinTypes").GroupHistorySentState.NOTICE_SENT) {
                    return e;
                }
                r = true;
                return babelHelpers.extends({}, e, {
                    groupHistorySentState: l
                });
            });
            if (r) {
                return babelHelpers.extends({}, t, {
                    participants: a
                });
            }
            return t;
        });
        return h.apply(this, arguments);
    }
    l.updateGroupHistoryParticipantMetadataOnJoin = s;
    l.clearGroupHistoryParticipantStateOnRemove = c;
    l.clearGroupHistoryParticipantStateForGroup = m;
    l.getGroupHistoryParticipantMetadataForGroup = _;
    l.enrichGroupActionWithStoredHistoryState = g;
}, 98);