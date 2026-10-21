__d("WAWebGroupHistoryParticipantStateHydration", [
    "Promise",
    "WALogger",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryParticipantJob",
    "WAWebGroupHistoryPostJoinEligibility",
    "WAWebGroupHistoryPostJoinTypes",
    "WAWebGroupMetadataCollection",
    "WAWebLidMigrationUtils",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = new Set;
    function c(e) {
        if (o("WAWebGroupHistoryGating").isGroupHistoryPostJoinSenderPrerequisitesEnabled()) {
            return m(e);
        }
        return (s || (s = n("Promise"))).resolve();
    }
    function d(e) {
        if (o("WAWebGroupHistoryGating").isGroupHistoryAfterJoinPrerequisitesEnabled()) {
            return m(e);
        }
        return (s || (s = n("Promise"))).resolve();
    }
    function m(e) {
        let t;
        try {
            t = o("WAWebWidFactory").asGroupWidOrThrow(e);
        } catch (e) {
            return (s || (s = n("Promise"))).resolve();
        }
        const a = t.toString();
        if (u.has(a)) {
            return (s || (s = n("Promise"))).resolve();
        }
        const i = r("WAWebGroupMetadataCollection").get(t);
        if (i == null) {
            return (s || (s = n("Promise"))).resolve();
        }
        u.add(a);
        const i_participants = i.participants;
        i_participants.on("bulk_add", function() {
            p(t, i_participants);
        });
        return p(t, i_participants);
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            try {
                const a = yield o("WAWebGroupHistoryParticipantJob").getGroupHistoryParticipantMetadataForGroup(t);
                if (a == null || a.size === 0) {
                    return;
                }
                for (const i of n.getModelsArray()){
                    const l = o("WAWebLidMigrationUtils").toUserLid(i.id);
                    if (l != null) {
                        const s = a.get(o("WAWebWidToJid").userLidtoLidUserJid(l));
                        if (s != null) {
                            f(i, s);
                        }
                    }
                }
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] hydrate send state failed for ",
                    ""
                ])), t.toString()).catching(r("getErrorSafe")(error)).sendLogs("group-history-participant-state-hydrate-failed");
            }
        });
        return _.apply(this, arguments);
    }
    function f(e, t) {
        if (o("WAWebGroupHistoryPostJoinEligibility").isAlreadyReceivedState(t.groupHistorySentState) && !o("WAWebGroupHistoryPostJoinEligibility").isAlreadyReceivedState(e.groupHistorySentState)) {
            e.set({
                groupHistorySentState: t.groupHistorySentState
            });
        }
        if (e.joinTime == null && t.joinTime != null && t.joinTime > 0) {
            e.set({
                joinTime: t.joinTime
            });
        }
    }
    function g(e, t) {
        const a = r("WAWebGroupMetadataCollection").get(e)?.participants;
        if (a == null) {
            return t;
        }
        return t.map((e)=>{
            if (e.groupHistorySentState !== o("WAWebGroupHistoryPostJoinTypes").GroupHistorySentState.HISTORY_NOT_SENT) {
                return e;
            }
            const t = a.get(e.id);
            if (t != null && o("WAWebGroupHistoryPostJoinEligibility").isAlreadyReceivedState(t.groupHistorySentState)) {
                return babelHelpers.extends({}, e, {
                    groupHistorySentState: undefined
                });
            }
            return e;
        });
    }
    l.initializeGroupHistoryStateForChat = c;
    l.prefetchGroupHistoryStateForChat = d;
    l.guardGroupHistorySentStateDowngrade = g;
}, 98);