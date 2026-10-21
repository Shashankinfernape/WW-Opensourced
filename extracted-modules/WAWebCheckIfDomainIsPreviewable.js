__d("WAWebCheckIfDomainIsPreviewable", [
    "WAWebChatGetters",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterIsDomainPreviewableAction",
    "WAWebStateUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = t != null ? o("WAWebChatGetters").getIsNewsletter(o("WAWebStateUtils").unproxy(t)) : false;
            if (!n || !o("WAWebNewsletterGatingUtils").isNewsletterHideNewsUrlPreviewEnabled()) {
                return true;
            }
            const r = yield o("WAWebNewsletterIsDomainPreviewableAction").isDomainPreviewableAction(e);
            return r;
        });
        return s.apply(this, arguments);
    }
    l.checkIfDomainIsPreviewable = e;
}, 98);