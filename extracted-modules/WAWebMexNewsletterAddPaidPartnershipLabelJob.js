__d("WAWebMexNewsletterAddPaidPartnershipLabelJob", [
    "WALogger",
    "WAWebMexClient",
    "WAWebMexNewsletterAddPaidPartnershipLabelJobMutation.graphql",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = e !== undefined ? e : e = n("WAWebMexNewsletterAddPaidPartnershipLabelJobMutation.graphql");
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
            if (a?.xwa2_newsletter_label_paid_partnership?.id == null) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter][dsa-26][mex] paid partnership - null resp"
                ]))).tags("GQL", "MEX").sendLogs("newsletter-add-paid-partnership-label-mex-failed");
                return false;
            }
            return true;
        });
        return d.apply(this, arguments);
    }
    l.mexNewsletterAddPaidPartnershipLabelJob = c;
}, 98);