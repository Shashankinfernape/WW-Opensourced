__d("WASmaxInCoexistenceProviderInfoMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "logo_url");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").contentBytes(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                elementValue: n.value
            });
        }
        return n;
    }
    function s(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "name");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").contentBytes(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                elementValue: n.value
            });
        }
        return n;
    }
    function u(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "id");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").contentInt(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                elementValue: n.value
            });
        }
        return n;
    }
    function c(t) {
        const n = o("WASmaxParseUtils").flattenedChildWithTag(t, "provider_info");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").optionalChildWithTag(n.value, "logo_url", e);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optionalChildWithTag(n.value, "name", s);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").optionalChildWithTag(n.value, "id", u);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                providerInfoLogoUrl: r.value,
                providerInfoName: a.value,
                providerInfoId: i.value
            });
        }
        return i;
    }
    l.parseProviderInfoProviderInfoLogoUrl = e;
    l.parseProviderInfoProviderInfoName = s;
    l.parseProviderInfoProviderInfoId = u;
    l.parseProviderInfoMixin = c;
}, 98);