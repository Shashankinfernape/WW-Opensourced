__d("WASmaxInCoexistenceOnboardingStatusNotificationRequest", [
    "WAResultOrError",
    "WASmaxInCoexistenceEnums",
    "WASmaxInCoexistenceProductSurfaceMixin",
    "WASmaxInCoexistenceProviderInfoMixin",
    "WASmaxInCoexistenceServerNotificationMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "notification");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "onboarding_status");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseJid").literalJid(o("WASmaxParseJid").attrDomainJid, e, "from", "s.whatsapp.net");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", "hosted");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").attrStringEnum(n.value, "status", o("WASmaxInCoexistenceEnums").ENUM_COMPLETED_FAILED);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxInCoexistenceProductSurfaceMixin").parseProductSurfaceMixin(n.value);
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxInCoexistenceProviderInfoMixin").parseProviderInfoMixin(n.value);
        if (!s.success) {
            return s;
        }
        const u = o("WASmaxInCoexistenceServerNotificationMixin").parseServerNotificationMixin(e);
        if (u.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                from: r.value,
                type: a.value,
                onboardingStatusStatus: i.value,
                onboardingStatusProductSurfaceMixin: l.value,
                onboardingStatusProviderInfoMixin: s.value
            }, u.value));
        }
        return u;
    }
    l.parseOnboardingStatusNotificationRequest = e;
}, 98);