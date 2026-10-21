__d("WAWebTasksExperienceIdDailyReport", [
    "WALogger",
    "WAWebDBExperienceIdCounts",
    "WAWebExperienceIdGatingUtils",
    "WAWebFalcoCanonicalAppVersion",
    "WAWebFalcoCanonicalMdId",
    "WamExperienceIdDailyFalcoEvent",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u() {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                const e = yield o("WAWebDBExperienceIdCounts").getReceivedExperienceIdCounts();
                if (e == null) {
                    return;
                }
                if (r("justknobx")._("6387") && o("WAWebExperienceIdGatingUtils").isExperienceIdReceiveEnabled()) {
                    e.aggregates.forEach(d);
                }
                yield o("WAWebDBExperienceIdCounts").removeReportedExperienceIds(e.msgKeys);
            } catch (error) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "reportExperienceIdDailyStats: keeping rows for the next run"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("experience-id-daily-report-failed");
            }
        });
        return c.apply(this, arguments);
    }
    function d(t) {
        try {
            const n = r("WAWebFalcoCanonicalMdId")();
            r("WamExperienceIdDailyFalcoEvent").log(function() {
                return {
                    app_version: r("WAWebFalcoCanonicalAppVersion")(),
                    md_id: n != null ? String(n) : null,
                    experience_id: String(t.experienceId),
                    unique_message_count: String(t.uniqueMessageCount),
                    unique_sender_count: String(t.uniqueSenderCount)
                };
            });
        } catch (error) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "reportExperienceIdDailyStats: dropping one id"
            ]))).catching(r("getErrorSafe")(error)).sendLogs("experience-id-daily-event-failed");
        }
    }
    l.reportExperienceIdDailyStats = u;
}, 98);