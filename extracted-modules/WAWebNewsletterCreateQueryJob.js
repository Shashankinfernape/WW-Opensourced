__d("WAWebNewsletterCreateQueryJob", [
    "WAWebMexCreateNewsletterJob",
    "WAWebMexNewsletterParseUtils",
    "WAWebNewsletterRpcUtils",
    "WAWebURLUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e({ description, name, picture }) {
        return s(name, description, picture);
    }
    function s(e, t, n) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            let a;
            if (n != null) {
                a = r("WAWebURLUtils").parseDataURL(n).data;
            }
            const i = yield o("WAWebNewsletterRpcUtils").runWithBackoff(function() {
                return o("WAWebMexCreateNewsletterJob").mexCreateNewsletter(e, t, a);
            });
            return o("WAWebMexNewsletterParseUtils").parseMexNewsletterResponse(i.xwa2_newsletter_create);
        });
        return u.apply(this, arguments);
    }
    l.createNewsletterQuery = e;
}, 98);