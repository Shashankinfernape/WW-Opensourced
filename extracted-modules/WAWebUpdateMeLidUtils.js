__d("WAWebUpdateMeLidUtils", [
    "WAWebUserPrefsMeUser",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(false);
        if (!(t == null && e == null)) {
            if (t == null && e != null) {
                o("WAWebUserPrefsMeUser").setMeLid(e);
                return;
            }
            if (!(t != null && e == null || r("nullthrows")(t).equals(e))) {
                o("WAWebUserPrefsMeUser").setMeLid(r("nullthrows")(e));
            }
        }
    }
    l.updateMeLid = e;
}, 98);