__d("WAWebExperienceIdWamFields", [
    "WAWebExperienceIdGatingUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (!o("WAWebExperienceIdGatingUtils").isExperienceIdReceiveEnabled()) {
            return null;
        }
        const t = e.experienceIds;
        if (t == null || t.length === 0) {
            return null;
        }
        return t;
    }
    function s(e) {
        if (e == null || e.length === 0) {
            return null;
        }
        return e.join(",");
    }
    l.getExperienceIds = e;
    l.getExperienceIdsWamValue = s;
}, 98);