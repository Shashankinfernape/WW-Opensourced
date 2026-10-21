__d("WAWebSupportBugReportSubmitMutation", [
    "WAWebBugReportCategoryTypes",
    "WAWebRelayClient",
    "WAWebSupportBugReportSubmitMutation.graphql",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e) {
        if (e == null) {
            return null;
        }
        return o("WAWebBugReportCategoryTypes").CATEGORY_TO_GRAPHQL[e] ?? null;
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const r = yield o("WAWebRelayClient").commitMutation(e !== undefined ? e : e = n("WAWebSupportBugReportSubmitMutation.graphql"), {
                input: t
            }, {
                environmentType: "whatsapp_web"
            });
            const a = r?.xwa_wa_support_bug_report_submit;
            if (a == null) {
                return {
                    success: false,
                    error_code: 500,
                    error_message: "Empty response from bug report mutation",
                    bug_report_id: null,
                    task_id: null
                };
            }
            return {
                success: a.success,
                error_code: a.error_code,
                error_message: a.error_message,
                bug_report_id: a.bug_report_id,
                task_id: a.task_id
            };
        });
        return c.apply(this, arguments);
    }
    l.bugCategoryTypeForGraphQL = s;
    l.submitBugReportGraphQL = u;
}, 98);