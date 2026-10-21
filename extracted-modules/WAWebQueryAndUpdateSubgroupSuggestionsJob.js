__d("WAWebQueryAndUpdateSubgroupSuggestionsJob", [
    "WAWebApiSubgroupSuggestionStore",
    "WAWebBackendApi",
    "WAWebDBCommunity",
    "WAWebMexFetchSubgroupSuggestionsJob",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WAWebMexFetchSubgroupSuggestionsJob").mexFetchSubgroupSuggestions(e, t, "INTERACTIVE");
            const r = yield o("WAWebApiSubgroupSuggestionStore").getSubgroupSuggestions(e);
            const a = r.filter((e)=>!n.some((t)=>t.id.equals(e.id) && t.owner.equals(e.owner)));
            yield o("WAWebApiSubgroupSuggestionStore").removeSubgroupSuggestions(a.map(({ id: n, owner: r })=>({
                    parentGroupId: e,
                    id: n,
                    owner: r
                })));
            yield o("WAWebApiSubgroupSuggestionStore").addSubgroupSuggestions(e, n);
            o("WAWebBackendApi").frontendFireAndForget("createOrUpdateSubgroupSuggestions", {
                parentGroupId: e,
                subgroupSuggestions: n
            });
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (t.isParentGroup === true && t.allowNonAdminSubGroupCreation === false && t.participants.some((e)=>o("WAWebUserPrefsMeUser").isMeAccount(e.id) && e.isAdmin)) {
                const n = yield o("WAWebDBCommunity").getJoinedSubgroups(t.id);
                if (n.length) {
                    return e(t.id, n[0]);
                }
            }
        });
        return c.apply(this, arguments);
    }
    l.queryAndUpdateSubgroupSuggestions = e;
    l.maybeQueryAndUpdateSubgroupSuggestions = u;
}, 98);