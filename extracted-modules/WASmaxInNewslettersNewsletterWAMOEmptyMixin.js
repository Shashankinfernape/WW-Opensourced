__d("WASmaxInNewslettersNewsletterWAMOEmptyMixin", [
    "WAResultOrError",
    "WASmaxInNewslettersAdminEditMixin",
    "WASmaxInNewslettersAdminRevokeMixin",
    "WASmaxInNewslettersNewsletterWamoEmptyContent",
    "WASmaxInNewslettersWAMOSubMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "message");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "plaintext");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInNewslettersWAMOSubMixin").parseWAMOSubMixin(e);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInNewslettersAdminRevokeMixin").parseAdminRevokeMixin(e);
        const i = o("WASmaxInNewslettersAdminEditMixin").parseAdminEditMixin(e);
        const l = o("WASmaxInNewslettersNewsletterWamoEmptyContent").parseNewsletterWamoEmptyContent(e);
        if (l.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, r.value, {
                adminRevokeMixin: a.success ? a.value : null,
                adminEditMixin: i.success ? i.value : null,
                newsletterWamoEmptyContent: l.value
            }));
        }
        return l;
    }
    l.parseNewsletterWAMOEmptyMixin = e;
}, 98);