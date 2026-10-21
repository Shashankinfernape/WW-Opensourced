__d("WAWebMexFetchNewsletterIsDomainPreviewableJob", [
    "WALogger",
    "WAWebMexClient",
    "WAWebMexFetchNewsletterIsDomainPreviewableJobQuery.graphql",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = e !== undefined ? e : e = n("WAWebMexFetchNewsletterIsDomainPreviewableJobQuery.graphql");
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(url_domains) {
            const r = {
                url_domains
            };
            const a = yield o("WAWebMexClient").fetchQuery(u, r);
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[MEX][NEWSLETTER] fetched domains previewable status ",
                ""
            ])), JSON.stringify(url_domains)).tags("GQL", "MEX");
            const i = a.xwa2_newsletter_message_integrity?.url_previews ?? [];
            const l = new Map(i.map(({ is_previewable, url_domain })=>[
                    url_domain,
                    is_previewable === true
                ]));
            return l;
        });
        return d.apply(this, arguments);
    }
    l.mexFetchNewsletterIsDomainPreviewable = c;
}, 98);