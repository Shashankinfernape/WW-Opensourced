__d("WAWebNewsletterIsDomainPreviewableAction", [
    "WALogger",
    "WAWebMexFetchNewsletterIsDomainPreviewableJob",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                const r = yield o("WAWebMexFetchNewsletterIsDomainPreviewableJob").mexFetchNewsletterIsDomainPreviewable([
                    t
                ]);
                return r?.get(t) ?? false;
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletters] isDomainPreviewableAction failed"
                ]))).tags("newsletter").sendLogs("newsletter-is-domain-previewable-action");
                return false;
            }
        });
        return u.apply(this, arguments);
    }
    l.isDomainPreviewableAction = s;
}, 98);