__d("WAWebHostedGroupUtils", [
    "fbt",
    "WAWebFrontendContactGetters"
], function(t, n, r, o, a, i, l, s) {
    function e(e, t = false) {
        if (t) {
            return s._("{ownerName} uses a secure service from Meta to manage this chat.", [
                s._param("ownerName", o("WAWebFrontendContactGetters").getFormattedName(e))
            ]);
        }
        return s._("{ownerName} uses a secure service from Meta to manage this chat. Tap to learn more.", [
            s._param("ownerName", o("WAWebFrontendContactGetters").getFormattedName(e))
        ]);
    }
    l.getSecureServicesBannerText = e;
}, 226);