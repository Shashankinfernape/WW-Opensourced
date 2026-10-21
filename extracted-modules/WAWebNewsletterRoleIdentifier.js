__d("WAWebNewsletterRoleIdentifier", [
    "WAWebNewsletterMetadataCollection",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (r("WAWebWid").isNewsletter(e)) {
            return r("WAWebNewsletterMetadataCollection").get(e)?.membershipType;
        }
        return r("WAWebNewsletterMetadataCollection").filter((t)=>t.inviteCode === e)[0]?.membershipType;
    }
    l.getRoleByIdentifier = e;
}, 98);