__d("WAWebMexLogNewsletterExposuresJob", [
    "WAWebMexClient",
    "WAWebMexLogNewsletterExposuresJobMutation.graphql",
    "WAWebNewsletterQueryUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e !== undefined ? e : e = n("WAWebMexLogNewsletterExposuresJobMutation.graphql");
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = {
                input: {
                    exposures: e.map(({ capability, newsletterJid })=>({
                            newsletter_id: newsletterJid,
                            capability: o("WAWebNewsletterQueryUtils").getNewsletterCapabilityFromEnum(capability)
                        }))
                }
            };
            const n = yield o("WAWebMexClient").fetchQuery(s, t);
        });
        return c.apply(this, arguments);
    }
    l.mexLogNewsletterExposures = u;
}, 98);