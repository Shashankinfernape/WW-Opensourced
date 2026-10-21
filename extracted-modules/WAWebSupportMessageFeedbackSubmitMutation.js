__d("WAWebSupportMessageFeedbackSubmitMutation", [
    "WAWebRelayClient",
    "WAWebSupportMessageFeedbackSubmitMutation.graphql",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = {
        positive: "POSITIVE",
        negative_harmful: "NEGATIVE_HARMFUL",
        negative_inaccurate: "NEGATIVE_INACCURATE",
        negative_irrelevant: "NEGATIVE_IRRELEVANT",
        negative_other: "NEGATIVE_OTHER",
        negative_repetitive: "NEGATIVE_REPETITIVE"
    };
    function u(e) {
        return s[e];
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(input) {
            const r = yield o("WAWebRelayClient").commitMutation(e !== undefined ? e : e = n("WAWebSupportMessageFeedbackSubmitMutation.graphql"), {
                input
            }, {
                environmentType: "whatsapp_web"
            });
            const a = r?.xwa_wa_support_message_feedback_submit;
            if (a == null) {
                return {
                    success: false,
                    error_code: "500",
                    error_message: "Empty response from support message feedback mutation"
                };
            }
            return {
                success: a.success,
                error_code: a.error_code,
                error_message: a.error_message
            };
        });
        return d.apply(this, arguments);
    }
    l.feedbackKindForGraphQL = u;
    l.submitSupportMessageFeedbackGraphQL = c;
}, 98);