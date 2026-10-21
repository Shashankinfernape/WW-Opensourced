__d("WAWebDBStoreMessageOrphans", [
    "WALogger",
    "WAWebDBAddOnProviders",
    "WAWebDBMessageSerialization",
    "WAWebMessageAddOnType",
    "WAWebMsgGetters",
    "WAWebSchemaMessageOrphans",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t, n) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "storeMessageOrphans:"
            ])));
            const a = t.map((e)=>babelHelpers.extends({
                    msgKey: e.id.toString(),
                    parentMsgKey: n(e).toString(),
                    sender: o("WAWebMsgGetters").getSender(e)?.toString(),
                    parsedMsgPayload: o("WAWebDBMessageSerialization").dbRowFromMessage(babelHelpers.extends({}, e), r),
                    type: o("WAWebDBAddOnProviders").addOnProviders.find((t)=>t.matches(e))?.type ?? o("WAWebMessageAddOnType").MessageAddOnType.Unknown,
                    senderTimestampMs: e.senderTimestampMs,
                    t: e.t
                }, r?.storeReportingInfo === true && e.reportingTokenInfo != null && {
                    reportingTokenInfo: e.reportingTokenInfo
                }));
            yield o("WAWebSchemaMessageOrphans").getMessageOrphanTable().bulkCreateOrReplace(a);
        });
        return u.apply(this, arguments);
    }
    l.storeMessageOrphans = s;
}, 98);