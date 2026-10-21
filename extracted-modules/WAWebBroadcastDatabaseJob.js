__d("WAWebBroadcastDatabaseJob", [
    "WAJobOrchestratorTypes",
    "WAWebAudienceExpressionTypes",
    "WAWebAudienceResolver",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaBroadcastMetadata",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(broadcastWid) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("getBroadcastMetadata", (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const a = yield o("WAWebSchemaBroadcastMetadata").getBroadcastMetadataTable().get(String(e.broadcastWid));
                if (!a) {
                    return null;
                }
                const a_audienceExpression = a.audienceExpression;
                const l = yield o("WAWebAudienceResolver").resolveAudienceExpression(a_audienceExpression);
                return {
                    audienceExpression: a_audienceExpression,
                    customAudienceFbid: a.customAudienceFbid,
                    id: a.id,
                    isWebCreatedList: a.isWebCreatedList ?? false,
                    labels: Array.from(o("WAWebAudienceExpressionTypes").getLabelIdsFromExpression(a_audienceExpression)),
                    recipients: l,
                    senderKeyDevices: a.senderKeyDevices ?? [],
                    senderKeyRotate: a.senderKeyRotate ?? false
                };
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })(), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP
        }).waitUntilCompleted({
            broadcastWid
        });
    }
    l.getBroadcastMetadataJob = e;
}, 98);