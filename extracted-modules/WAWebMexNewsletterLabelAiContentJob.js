__d("WAWebMexNewsletterLabelAiContentJob", [
    "WALogger",
    "WAWebMexClient",
    "WAWebMexNewsletterLabelAiContentJobMutation.graphql",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = e !== undefined ? e : e = n("WAWebMexNewsletterLabelAiContentJobMutation.graphql");
    function c(e, t, n) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const a = yield o("WAWebMexClient").fetchQuery(u, {
                newsletter_id: e,
                server_id: t,
                message_type: n
            });
            if (a?.xwa2_newsletter_label_ai_content?.id == null) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter][sgi-ai-content][mex] label ai content - null resp"
                ]))).tags("GQL", "MEX", "sgi", "wa-ice", "wa-spice-web").sendLogs("newsletter-label-ai-content-mex-failed");
                return false;
            }
            return true;
        });
        return d.apply(this, arguments);
    }
    l.mexNewsletterLabelAiContentJob = c;
}, 98);