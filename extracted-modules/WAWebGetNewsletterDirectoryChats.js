__d("WAWebGetNewsletterDirectoryChats", [
    "Promise",
    "WALogger",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterCollection",
    "WAWebNewsletterMetadataGetters",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterSyntheticStatusUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a) {
            try {
                const i = a.skipSubscribedNewsletters;
                const l = t.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        const t = r("WAWebNewsletterCollection").get(e.idJid);
                        const a = t?.newsletterMetadata;
                        if (t != null && a != null && !o("WAWebNewsletterMetadataGetters").getIsPreview(a)) {
                            yield p(t, e);
                            if (i) {
                                return (s || (s = n("Promise"))).resolve(null);
                            }
                            return (s || (s = n("Promise"))).resolve(t);
                        }
                        return d(e);
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })());
                const u = yield (s || (s = n("Promise"))).all(l);
                return u.filter(Boolean);
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[getDirectoryNewsletterChats] dir chats failed"
                ]))).tags("newsletter").sendLogs("newsletter-failed-to-search-newsletter-directory");
                throw error;
            }
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const newsletter = o("WAWebNewsletterModelUtils").mapDirectoryNewsletterToChat(e);
            const metadata = o("WAWebNewsletterModelUtils").mapDirectoryNewsletterToMetadata(e);
            const a = e.newsletterPictureMetadataMixin?.picture;
            const i = a != null ? o("WAWebNewsletterModelUtils").mapPicturesToProfilePicThumb(e.idJid, a) : null;
            const l = yield o("WAWebNewsletterBridgeApi").NewsletterBridgeApi.loadNewsletterPreviewChat({
                newsletter,
                metadata,
                pic: i
            });
            if (l != null) {
                const c = e.newsletterStatusMetadata;
                o("WAWebNewsletterSyntheticStatusUtils").maybeCreateOrCleanupSynthetic(l.id, c?.lastStatusServerId ?? null, c?.lastStatusSentTime ?? null);
            }
            return l;
        });
        return m.apply(this, arguments);
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const r = o("WAWebNewsletterModelUtils").mapNewsletterToMetadata(o("WAWebNewsletterModelUtils").convertDirectoryNewsletterMetadataToNewsletterMetadata(t));
            e.newsletterMetadata?.set(r, {
                merge: true
            });
            yield f(t);
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const n = e.newsletterPictureMetadataMixin?.picture;
            if (n != null) {
                const r = o("WAWebNewsletterModelUtils").mapPicturesToProfilePicThumb(e.idJid, n);
                yield o("WAWebNewsletterBridgeApi").NewsletterBridgeApi.updateNewsletterPicture({
                    pic: r
                });
            }
        });
        return g.apply(this, arguments);
    }
    l.getDirectoryNewsletterChats = u;
}, 98);