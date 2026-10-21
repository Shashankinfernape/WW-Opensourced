__d("WAWebMexFetchSimilarNewslettersJob", [
    "WAWebMexClient",
    "WAWebMexFetchSimilarNewslettersJobQuery.graphql",
    "WAWebNewsletterGatingUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e !== undefined ? e : e = n("WAWebMexFetchSimilarNewslettersJobQuery.graphql");
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ countryCodes, limit, newsletterId }) {
            const i = {
                input: {
                    newsletter_id: newsletterId,
                    limit,
                    country_codes: countryCodes ?? []
                },
                fetch_status_metadata: o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled()
            };
            const l = yield o("WAWebMexClient").fetchQuery(s, i);
            return l.xwa2_newsletters_similar?.result;
        });
        return c.apply(this, arguments);
    }
    l.mexFetchSimilarNewsletters = u;
}, 98);