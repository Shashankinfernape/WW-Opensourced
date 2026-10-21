__d("WAWebBrSenderPixKeyAttribution", [
    "WAWebBrPartnerPixKeyAttribution",
    "WAWebContactGetters",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        kind: "none"
    };
    function s(t) {
        if (t == null || !o("WAWebContactGetters").getIsEnterprise(t) && !o("WAWebContactGetters").getIsSmb(t) || o("WAWebContactGetters").getId(t).isBot()) {
            return e;
        }
        const bankName = (o("WAWebContactGetters").getVerifiedName(t) ?? "").trim();
        if (bankName === "") {
            return e;
        }
        return {
            bankName,
            kind: "verified",
            logoUrl: ""
        };
    }
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (e.kind !== "verified" || t == null) {
                return e;
            }
            const a = yield o("WAWebBrPartnerPixKeyAttribution").lookUpWithinWait(t);
            const i = (a == null ? undefined : a.bankName.trim()) ?? "";
            return {
                bankName: i === "" ? e.bankName : i,
                kind: "verified",
                logoUrl: (a == null ? undefined : a.imageUrl.trim()) ?? ""
            };
        });
        return c.apply(this, arguments);
    }
    l.resolveSenderPixKeyAttribution = s;
    l.resolveSenderPixKeyAttributionFromCatalogue = u;
}, 98);