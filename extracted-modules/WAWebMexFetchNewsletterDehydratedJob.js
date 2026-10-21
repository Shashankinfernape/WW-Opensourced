__d("WAWebMexFetchNewsletterDehydratedJob", [
    "WALogger",
    "WAWebMexClient",
    "WAWebMexFetchNewsletterDehydratedJobQuery.graphql",
    "WAWebWid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t, n) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a, i) {
            const l = e !== undefined ? e : e = n("WAWebMexFetchNewsletterDehydratedJobQuery.graphql");
            const u = r("WAWebWid").isNewsletter(t) ? "JID" : "INVITE";
            const c = {
                input: {
                    key: t,
                    type: u,
                    view_role: a
                },
                fetch_wamo_sub: i.fetchWamoSub === true,
                fetch_pinned_messages: true
            };
            const d = yield o("WAWebMexClient").fetchQuery(l, c);
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[MEX][NEWSLETTER] fetched verify+subCount+wamoSub for ",
                ""
            ])), t).tags("GQL", "MEX");
            return d;
        });
        return c.apply(this, arguments);
    }
    l.mexGetNewsletterDehydrated = u;
}, 98);