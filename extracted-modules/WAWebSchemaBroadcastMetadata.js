__d("WAWebSchemaBroadcastMetadata", [
    "WAWebAudienceExpressionTypes",
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addUserDefinedPrimaryKey: r } = t;
        e.add("broadcast-metadata").version(o("WAWebModelStorageVersions").broadcastMetadataCreateTable(), [
            r("id"),
            n("audienceExpression"),
            n("customAudienceFbid"),
            n("recipients"),
            n("labels"),
            n("senderKeyDevices"),
            n("senderKeyRotate"),
            n("isWebCreatedList")
        ]).view(function(e) {
            if (e.audienceExpression != null) {
                return e;
            }
            let t;
            if (e.labels.length > 0) {
                t = o("WAWebAudienceExpressionTypes").createLabelPredicateExpression(e.labels);
            } else if (e.recipients.length > 0) {
                t = o("WAWebAudienceExpressionTypes").createExplicitExpression(e.recipients);
            } else {
                t = o("WAWebAudienceExpressionTypes").DEFAULT_AUDIENCE_EXPRESSION;
            }
            return babelHelpers.extends({}, e, {
                audienceExpression: t
            });
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("broadcast-metadata");
    }
    l.addTable = e;
    l.getBroadcastMetadataTable = s;
}, 98);