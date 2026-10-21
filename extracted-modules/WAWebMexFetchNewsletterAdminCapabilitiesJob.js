__d("WAWebMexFetchNewsletterAdminCapabilitiesJob", [
    "WAWebMexClient",
    "WAWebMexFetchNewsletterAdminCapabilitiesJobQuery.graphql",
    "WAWebNewsletterModelUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e !== undefined ? e : e = n("WAWebMexFetchNewsletterAdminCapabilitiesJobQuery.graphql");
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const n = {
                newsletter_id: e
            };
            const r = yield o("WAWebMexClient").fetchQuery(s, n);
            const a = r.xwa2_newsletter_admin?.capabilities;
            const i = a == null ? [] : a.map(o("WAWebNewsletterModelUtils").getNewsletterCapabilityFromValue);
            return new Set(i);
        });
        return c.apply(this, arguments);
    }
    l.mexFetchNewsletterAdminCapabilities = u;
}, 98);