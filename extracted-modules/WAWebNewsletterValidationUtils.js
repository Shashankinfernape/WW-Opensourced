__d("WAWebNewsletterValidationUtils", [
    "WAJids",
    "WALogger",
    "WAWebNewsletterErrors"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        u(e);
        return o("WAJids").toNewsletterJid(e);
    }
    function u(t) {
        const n = o("WAJids").validateNewsletterJid(t) != null;
        if (!n) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " is not a valid newsletter JID"
            ])), t);
            throw new (o("WAWebNewsletterErrors")).UnexpectedNonNewsletterJidError;
        }
    }
    l.toNewsletterJidOrThrow = s;
    l.validateNewsletterJidOrThrow = u;
}, 98);