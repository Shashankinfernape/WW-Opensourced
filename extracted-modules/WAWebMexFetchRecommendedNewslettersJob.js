__d("WAWebMexFetchRecommendedNewslettersJob", [
    "WAWebMexClient",
    "WAWebMexFetchRecommendedNewslettersJobQuery.graphql",
    "WAWebNewsletterGatingUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, country_codes) {
            const a = e !== undefined ? e : e = n("WAWebMexFetchRecommendedNewslettersJobQuery.graphql");
            const i = {
                input: {
                    limit: t,
                    country_codes
                },
                fetch_status_metadata: o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled()
            };
            const l = yield o("WAWebMexClient").fetchQuery(a, i);
            return l;
        });
        return u.apply(this, arguments);
    }
    l.mexFetchRecommendedNewsletters = s;
}, 98);