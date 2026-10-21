__d("WASmaxInCoexistenceOffboardingNotificationRequest", [
    "WAResultOrError",
    "WASmaxInCoexistenceEnums",
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
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "offboarding");
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
        const i = o("WASmaxParseUtils").attrStringEnum(n.value, "product_surface", o("WASmaxInCoexistenceEnums").ENUM_AIFROMMETA_AUTOMATION_BUSINESSPLATFORM);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxInCoexistenceProviderInfoMixin").parseProviderInfoMixin(n.value);
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxInCoexistenceServerNotificationMixin").parseServerNotificationMixin(e);
        if (s.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                from: r.value,
                type: a.value,
                offboardingProductSurface: i.value,
                offboardingProviderInfoMixin: l.value
            }, s.value));
        }
        return s;
    }
    l.parseOffboardingNotificationRequest = e;
}, 98);