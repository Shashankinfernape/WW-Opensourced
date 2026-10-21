__d("WAWebNewsletterSubscribersCollection", [
    "WAWebBaseCollection",
    "WAWebCommonNewsletterEnums",
    "WAWebFrontendContactGetters",
    "WAWebNewsletterSubscriberModel"
], function(t, n, r, o, a, i, l) {
    const e = function(t, n) {
        if (t.membership === n.membership) {
            if (!o("WAWebFrontendContactGetters").getIsMyContact(t.contact)) {
                return 1;
            }
            if (!o("WAWebFrontendContactGetters").getIsMyContact(n.contact)) {
                return -1;
            }
            const e = o("WAWebFrontendContactGetters").getFormattedUser(t.contact);
            const r = o("WAWebFrontendContactGetters").getFormattedUser(n.contact);
            return e.localeCompare(r);
        }
        if (t.membership === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner) {
            return -1;
        }
        if (n.membership === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner) {
            return 1;
        }
        if (t.membership === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin) {
            return -1;
        }
        return 1;
    };
    const s = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    s.model = o("WAWebNewsletterSubscriberModel").NewsletterSubscriber;
    s.comparator = e;
    l.default = s;
}, 98);