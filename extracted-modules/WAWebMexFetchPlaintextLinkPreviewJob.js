__d("WAWebMexFetchPlaintextLinkPreviewJob", [
    "WALogger",
    "WAWebMexClient",
    "WAWebMexFetchPlaintextLinkPreviewJobQuery.graphql",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = e !== undefined ? e : e = n("WAWebMexFetchPlaintextLinkPreviewJobQuery.graphql");
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                new URL(e);
            } catch (t) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[MEX][NEWSLETTER] ",
                    " is not a valid url"
                ])), e);
                return null;
            }
            const i = {
                input: {
                    url: e
                }
            };
            const l = yield o("WAWebMexClient").fetchQuery(u, i);
            const l_xwa2_newsletter_link_preview = l.xwa2_newsletter_link_preview;
            const hqThumbnail = l_xwa2_newsletter_link_preview?.direct_path != null && l_xwa2_newsletter_link_preview?.hash != null ? {
                directPath: l_xwa2_newsletter_link_preview.direct_path,
                thumbHash: l_xwa2_newsletter_link_preview.hash,
                thumbHeight: l_xwa2_newsletter_link_preview.height ?? 0,
                thumbWidth: l_xwa2_newsletter_link_preview.width ?? 0
            } : undefined;
            return {
                url: e,
                title: l_xwa2_newsletter_link_preview?.title ?? undefined,
                description: l_xwa2_newsletter_link_preview?.description ?? undefined,
                hqThumbnail,
                thumbData: l_xwa2_newsletter_link_preview?.thumb_data
            };
        });
        return d.apply(this, arguments);
    }
    l.mexFetchPlaintextLinkPreview = c;
}, 98);