__d("WAWebMexLeaveNewsletterJob", [
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexLeaveNewsletterJobMutation.graphql",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const r = e !== undefined ? e : e = n("WAWebMexLeaveNewsletterJobMutation.graphql");
            const a = {
                newsletter_id: t
            };
            const i = yield o("WAWebMexClient").fetchQuery(r, a);
            return i;
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield s(e);
            if (t?.xwa2_newsletter_leave_v2 != null) {
                const n = t.xwa2_newsletter_leave_v2.state.type;
                if (n === "DELETED" || n === "NON_EXISTING") {
                    throw new (o("WAWebBackendErrors")).ServerStatusCodeError(404, "newsletter-deleted-or-non-existing");
                }
                if (n === "SUSPENDED") {
                    throw new (o("WAWebBackendErrors")).ServerStatusCodeError(423, "newsletter-suspended");
                }
                return true;
            }
            throw new (o("WAWebBackendErrors")).ServerStatusCodeError(500, "unexpected-null-mex-response");
        });
        return d.apply(this, arguments);
    }
    l.mexLeaveNewsletter = c;
}, 98);