__d("WAWebFormatSharePhoneNumber", [
    "fbt",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters"
], function(t, n, r, o, a, i, l, s) {
    function e(e, t, n) {
        if (n) {
            return s._("You shared your phone number. Click to learn more.");
        }
        const r = o("WAWebContactCollection").ContactCollection.gadd(e);
        const a = o("WAWebFrontendContactGetters").getIsMyContact(r) ? o("WAWebFrontendContactGetters").getFormattedName(r) : o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(r);
        return s._("{contact-name} shared their phone number. Click to learn more.", [
            s._param("contact-name", a)
        ]);
    }
    l.default = e;
}, 226);