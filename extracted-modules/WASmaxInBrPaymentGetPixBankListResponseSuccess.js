__d("WASmaxInBrPaymentGetPixBankListResponseSuccess", [
    "WAResultOrError",
    "WASmaxInBrPaymentEnums",
    "WASmaxInBrPaymentIQResultResponseMixin",
    "WASmaxParseReference",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "bank");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrString(e, "bank_name");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrString(e, "image_url");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").attrString(e, "bank_ref_id");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").attrString(e, "psp_routing");
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").attrInt(e, "ttl");
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").attrStringEnum(e, "is_available", o("WASmaxInBrPaymentEnums").ENUM_FALSE_TRUE);
        if (!s.success) {
            return s;
        }
        const u = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrStringEnum, e, "is_popular", o("WASmaxInBrPaymentEnums").ENUM_FALSE_TRUE);
        if (u.success) {
            return o("WAResultOrError").makeResult({
                bankName: n.value,
                imageUrl: r.value,
                bankRefId: a.value,
                pspRouting: i.value,
                ttl: l.value,
                isAvailable: s.value,
                isPopular: u.value
            });
        }
        return u;
    }
    function s(t, n) {
        const r = o("WASmaxParseUtils").assertTag(t, "iq");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").flattenedChildWithTag(t, "account");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").flattenedChildWithTag(a.value, "banks");
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseReference").attrStringFromReference(n, [
            "account",
            "action"
        ]);
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, a.value, "action", l.value);
        if (!s.success) {
            return s;
        }
        const u = o("WASmaxInBrPaymentIQResultResponseMixin").parseIQResultResponseMixin(t, n);
        if (!u.success) {
            return u;
        }
        const c = o("WASmaxParseUtils").mapChildrenWithTag(i.value, "bank", 0, 1000, e);
        if (c.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, u.value, {
                accountBanksBank: c.value
            }));
        }
        return c;
    }
    l.parseGetPixBankListResponseSuccessAccountBanksBank = e;
    l.parseGetPixBankListResponseSuccess = s;
}, 98);