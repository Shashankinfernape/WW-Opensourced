__d("WAWebRestoreSubgroupSuggestionsAction", [
    "WAWebApiSubgroupSuggestionStore",
    "WAWebCommunitySubgroupSuggestionsUtils",
    "WAWebStateUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const n = o("WAWebStateUtils").unproxy(e);
            const r = yield o("WAWebApiSubgroupSuggestionStore").getSubgroupSuggestions(n.id);
            n.groupMetadata?.subgroupSuggestions.add(r.map((e)=>babelHelpers.extends({}, e, {
                    id: o("WAWebCommunitySubgroupSuggestionsUtils").getSubgroupSuggestionId(e.id, e.owner),
                    groupId: e.id
                })), {
                merge: true
            });
        });
        return s.apply(this, arguments);
    }
    l.restoreSubgroupSuggestionsFromDb = e;
}, 98);