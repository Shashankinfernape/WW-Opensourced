__d("WASmaxInMdGetCountryCodeResponseGetCountryCodeResponse", [
    "WAResultOrError",
    "WASmaxInMdIQResultResponseMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "country_code");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").attrString(r.value, "iso");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInMdIQResultResponseMixin").parseIQResultResponseMixin(e, t);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                countryCodeIso: a.value
            }, i.value));
        }
        return i;
    }
    l.parseGetCountryCodeResponseGetCountryCodeResponse = e;
}, 98);