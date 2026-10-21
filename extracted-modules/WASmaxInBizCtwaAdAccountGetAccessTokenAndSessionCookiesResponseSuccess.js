__d("WASmaxInBizCtwaAdAccountGetAccessTokenAndSessionCookiesResponseSuccess", [
    "WAResultOrError",
    "WASmaxInBizCtwaAdAccountEnums",
    "WASmaxInBizCtwaAdAccountHackBaseIQResultResponseMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "token_type");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").contentStringEnum(e, o("WASmaxInBizCtwaAdAccountEnums").ENUM_STRONG_WEAK);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                elementValue: n.value
            });
        }
        return n;
    }
    function s(t, n) {
        const r = o("WASmaxParseUtils").assertTag(t, "iq");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").flattenedChildWithTag(t, "access_token");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").flattenedChildWithTag(t, "session_cookies");
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").flattenedChildWithTag(t, "business_person");
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").optionalChildWithTag(t, "token_type", e);
        if (!s.success) {
            return s;
        }
        const u = o("WASmaxParseUtils").contentString(a.value);
        if (!u.success) {
            return u;
        }
        const c = o("WASmaxParseUtils").contentString(i.value);
        if (!c.success) {
            return c;
        }
        const d = o("WASmaxParseUtils").attrString(l.value, "id");
        if (!d.success) {
            return d;
        }
        const m = o("WASmaxInBizCtwaAdAccountHackBaseIQResultResponseMixin").parseHackBaseIQResultResponseMixin(t, n);
        if (m.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                accessTokenElementValue: u.value,
                sessionCookiesElementValue: c.value,
                businessPersonId: d.value
            }, m.value, {
                tokenType: s.value
            }));
        }
        return m;
    }
    l.parseGetAccessTokenAndSessionCookiesResponseSuccessTokenType = e;
    l.parseGetAccessTokenAndSessionCookiesResponseSuccess = s;
}, 98);