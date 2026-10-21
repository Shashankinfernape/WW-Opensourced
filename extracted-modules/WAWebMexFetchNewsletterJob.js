__d("WAWebMexFetchNewsletterJob", [
    "WALogger",
    "WAWebMexClient",
    "WAWebMexFetchNewsletterJobQuery.graphql",
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
            const l = e !== undefined ? e : e = n("WAWebMexFetchNewsletterJobQuery.graphql");
            const u = r("WAWebWid").isNewsletter(t) ? "JID" : "INVITE";
            const fetch_full_image = u !== "INVITE";
            const d = {
                input: {
                    key: t,
                    type: u,
                    view_role: a
                },
                fetch_viewer_metadata: i.fetchViewerMetadata,
                fetch_full_image,
                fetch_creation_time: i.fetchCreationTime === true,
                fetch_wamo_sub: i.fetchWamoSub === true,
                fetch_status_metadata: i.fetchStatusMetadata === true,
                fetch_pinned_messages: true
            };
            const m = yield o("WAWebMexClient").fetchQuery(l, d);
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[MEX][NEWSLETTER] fetched get newsletter job for ",
                ""
            ])), t).tags("GQL", "MEX");
            return m;
        });
        return c.apply(this, arguments);
    }
    l.mexGetNewsletter = u;
}, 98);