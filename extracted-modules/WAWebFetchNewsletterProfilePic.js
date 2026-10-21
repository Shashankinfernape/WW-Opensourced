__d("WAWebFetchNewsletterProfilePic", [
    "WAJids",
    "WAWebNewsletterMetadataJob",
    "WAWebNewsletterModelUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const s = {
                id: e
            };
            const u = o("WAJids").toNewsletterJid(e.toString());
            const c = yield o("WAWebNewsletterMetadataJob").getNewsletterMetadata(u, t, {
                picture: true
            });
            const d = c?.newsletterPictureMetadataMixin?.picture;
            if (d == null) {
                return s;
            }
            const m = o("WAWebNewsletterModelUtils").mapPicturesToProfilePicThumb(u, d);
            return babelHelpers.extends({}, s, {
                tag: m.tag ?? undefined,
                eurl: m.eurl ?? undefined,
                previewEurl: m.previewEurl ?? undefined,
                stale: m.stale,
                eurlStale: false,
                timestamp: m.timestamp ?? Date.now()
            });
        });
        return s.apply(this, arguments);
    }
    l.fetchNewsletterProfilePic = e;
}, 98);