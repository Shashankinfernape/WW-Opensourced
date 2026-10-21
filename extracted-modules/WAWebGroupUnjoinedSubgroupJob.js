__d("WAWebGroupUnjoinedSubgroupJob", [
    "WAJobOrchestratorTypes",
    "WAWebApiUnjoinedSubgroupMetadataStore",
    "WAWebOrchestratorNonPersistedJob"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n = true) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("updateUnjoinedSubgroups", function(e) {
            return o("WAWebApiUnjoinedSubgroupMetadataStore").updateUnjoinedSubgroups(e);
        }, {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted({
            unjoinedSubgroups: e,
            parentGroupId: t,
            link: n
        });
    }
    function s(e, t) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("cleanUnjoinedSubgroups", function(e) {
            return o("WAWebApiUnjoinedSubgroupMetadataStore").cleanUnjoinedSubgroups(e);
        }, {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted({
            unjoinedSubgroupIds: e,
            parentGroupId: t
        });
    }
    l.updateUnjoinedSubgroupsJob = e;
    l.cleanUnjoinedSubgroupsJob = s;
}, 98);