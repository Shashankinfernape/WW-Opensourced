__d("WAWebNewsletterMembershipUtil", [
    "WAWebCommonNewsletterEnums"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s(e) || e?.membershipType === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin;
    }
    function s(e) {
        return e?.membershipType === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner;
    }
    l.iAmAdminOrOwner = e;
    l.iAmOwner = s;
}, 98);