__d("WAWebMexNewsletterUtils", [
    "WAJids",
    "WAWebBackendErrors",
    "WAWebCommonNewsletterEnums"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        switch(e){
            case "OWNER":
                return o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner;
            case "SUBSCRIBER":
                return o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Subscriber;
            case "ADMIN":
                return o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin;
            case "GUEST":
                return o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Guest;
        }
    }
    function s(e) {
        switch(e){
            case o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.All:
                return "ALL";
            case o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.Basic:
                return "BASIC";
            case o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.None:
                return "NONE";
            case o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.Blocklist:
                return "BLOCKLIST";
        }
    }
    function u(e) {
        if (e != null && e.id != null) {
            let subscriberNotFoundMixin;
            let newsletterSuspendedErrorMixin;
            if (e.state?.type === "SUSPENDED") {
                newsletterSuspendedErrorMixin = {
                    error: "423"
                };
            }
            if (e.state?.type === "NON_EXISTING") {
                subscriberNotFoundMixin = {
                    error: "404"
                };
            }
            return {
                jid: o("WAJids").toNewsletterJid(e.id),
                subscriberNotFoundMixin,
                newsletterSuspendedErrorMixin
            };
        }
        throw new (o("WAWebBackendErrors")).ServerStatusCodeError(500, "unexpected_mex_mutation_response");
    }
    l.mapRoleToMembership = e;
    l.mapReactionCodesSettingToMexInput = s;
    l.convertMutationResponse = u;
}, 98);