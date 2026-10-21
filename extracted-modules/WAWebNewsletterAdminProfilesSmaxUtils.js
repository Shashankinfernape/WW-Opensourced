__d("WAWebNewsletterAdminProfilesSmaxUtils", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        if (e == null || e.name == null) {
            return null;
        }
        return {
            id: e.id,
            name: e.name.elementValue,
            pictureDirectPath: e.picture?.directPath,
            pictureId: e.picture?.id
        };
    }
    i.mapAdminProfileInfoFromAdminProfileMixin = e;
}, 66);