__d("WAWebApiPrivacyEphemerality", [
    "WALogger",
    "WAWebSchemaChat",
    "WAWebSchemaGroupMetadata",
    "asyncToGeneratorRuntime",
    "countWhere"
], function(t, n, r, o, a, i, l) {
    let e;
    function s() {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                const t = yield o("WAWebSchemaChat").getChatTable().greaterThan([
                    "ephemeralDuration"
                ], 0, {
                    shouldDecrypt: false
                });
                const countEphemeralThreads = t.length;
                const a = r("countWhere")(t, function(e) {
                    return e.disappearingModeInitiatedByMe === true;
                });
                const i = yield o("WAWebSchemaGroupMetadata").getGroupMetadataTable().greaterThan([
                    "ephemeralDuration"
                ], 0);
                const l = r("countWhere")(i, function(e) {
                    return e.disappearingModeInitiatedByMe === true;
                });
                const countEphemeralThreadsEnabledByMe = a + l;
                return {
                    isEphemeralMessagingUser: countEphemeralThreadsEnabledByMe > 0,
                    countEphemeralThreadsEnabledByMe,
                    countEphemeralThreads
                };
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[ephemerality] daily log info retrieval failed"
                ]))).verbose().sendLogs("ephemerality_daily_logs: retrieving current ephemerality information failed");
                return {
                    isEphemeralMessagingUser: null,
                    countEphemeralThreadsEnabledByMe: null,
                    countEphemeralThreads: null
                };
            }
        });
        return u.apply(this, arguments);
    }
    l.queryEphemeralityDailyLogInfo = s;
}, 98);