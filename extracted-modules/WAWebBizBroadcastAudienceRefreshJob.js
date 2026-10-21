__d("WAWebBizBroadcastAudienceRefreshJob", [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebAudienceExpressionTypes",
    "WAWebAudienceManagementWamEvent",
    "WAWebAudienceResolver",
    "WAWebSchemaBroadcastMetadata",
    "WAWebWamEnumAudienceManagementActionType",
    "WAWebWamEnumAudiencePredicateTypeEnum",
    "WAWebWamEnumAudienceResolutionTriggerType",
    "asyncToGeneratorRuntime",
    "countWhere"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(predicateType) {
        switch(predicateType){
            case o("WAWebAudienceExpressionTypes").PREDICATE_TYPE_CHATTED_RECENTLY:
                return o("WAWebWamEnumAudiencePredicateTypeEnum").AUDIENCE_PREDICATE_TYPE_ENUM.CHATTED_RECENTLY;
            case o("WAWebAudienceExpressionTypes").PREDICATE_TYPE_NOT_MESSAGED_RECENTLY:
                return o("WAWebWamEnumAudiencePredicateTypeEnum").AUDIENCE_PREDICATE_TYPE_ENUM.NOT_MESSAGED_RECENTLY;
            default:
                return o("WAWebWamEnumAudiencePredicateTypeEnum").AUDIENCE_PREDICATE_TYPE_ENUM.UNKNOWN;
        }
    }
    function d(e, recipients) {
        if (e.length !== recipients.length) {
            return false;
        }
        for(let n = [].concat(e).sort(), r = [].concat(recipients).sort(), o = 0; o < n.length; o++){
            if (n[o] !== r[o]) {
                return false;
            }
        }
        return true;
    }
    function m() {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (o("WAWebABProps").getABPropConfigValue("m2_audience_dynamic_rules")) {
                const t = yield o("WAWebSchemaBroadcastMetadata").getBroadcastMetadataTable().all();
                const a = t.filter((e)=>e.audienceExpression?.type === o("WAWebAudienceExpressionTypes").EXPRESSION_TYPE_PREDICATE && (e.audienceExpression.predicateType === o("WAWebAudienceExpressionTypes").PREDICATE_TYPE_CHATTED_RECENTLY || e.audienceExpression.predicateType === o("WAWebAudienceExpressionTypes").PREDICATE_TYPE_NOT_MESSAGED_RECENTLY));
                if (a.length !== 0) {
                    let refresh_success_count = 0;
                    let refresh_error_count = 0;
                    yield (u || (u = n("Promise"))).all(a.map((()=>{
                        const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                            try {
                                const recipients = yield o("WAWebAudienceResolver").resolveAudienceExpression(t.audienceExpression);
                                const a = t.recipients;
                                if (d(a, recipients)) {
                                    return;
                                }
                                yield o("WAWebSchemaBroadcastMetadata").getBroadcastMetadataTable().createOrReplace(babelHelpers.extends({}, t, {
                                    recipients
                                }));
                                refresh_success_count++;
                                const s = new Set(a);
                                const u = new Set(recipients);
                                const added_count = r("countWhere")(recipients, function(e) {
                                    return !s.has(e);
                                });
                                const removed_count = r("countWhere")(a, function(e) {
                                    return !u.has(e);
                                });
                                new (o("WAWebAudienceManagementWamEvent")).AudienceManagementWamEvent({
                                    audienceExtraData: JSON.stringify({
                                        added_count,
                                        removed_count,
                                        resolved_count: recipients.length
                                    }),
                                    audienceManagementAction: o("WAWebWamEnumAudienceManagementActionType").AUDIENCE_MANAGEMENT_ACTION_TYPE.RESOLVED,
                                    audiencePredicateType: t.audienceExpression.type === o("WAWebAudienceExpressionTypes").EXPRESSION_TYPE_PREDICATE ? c(t.audienceExpression.predicateType) : o("WAWebWamEnumAudiencePredicateTypeEnum").AUDIENCE_PREDICATE_TYPE_ENUM.UNKNOWN,
                                    audienceResolutionTrigger: o("WAWebWamEnumAudienceResolutionTriggerType").AUDIENCE_RESOLUTION_TRIGGER_TYPE.PERIODIC_REFRESH
                                }).commit();
                            } catch (error) {
                                refresh_error_count++;
                                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                    "[audience-refresh] failed to refresh ",
                                    ": ",
                                    ""
                                ])), t.id, error).tags("wa-smb", "business-broadcast", "audience-refresh");
                            }
                        });
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    })()));
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[audience-refresh] scanned=",
                        " refreshed=",
                        " errors=",
                        ""
                    ])), a.length, refresh_success_count, refresh_error_count).tags("wa-smb", "business-broadcast", "audience-refresh");
                    new (o("WAWebAudienceManagementWamEvent")).AudienceManagementWamEvent({
                        audienceExtraData: JSON.stringify({
                            refresh_error_count,
                            refresh_skipped_count: a.length - refresh_success_count - refresh_error_count,
                            refresh_success_count,
                            refresh_total_audiences: a.length
                        }),
                        audienceManagementAction: o("WAWebWamEnumAudienceManagementActionType").AUDIENCE_MANAGEMENT_ACTION_TYPE.RESOLVED,
                        audienceResolutionTrigger: o("WAWebWamEnumAudienceResolutionTriggerType").AUDIENCE_RESOLUTION_TRIGGER_TYPE.PERIODIC_REFRESH
                    }).commit();
                }
            }
        });
        return p.apply(this, arguments);
    }
    l.refreshTimeBasedAudiences = m;
}, 98);