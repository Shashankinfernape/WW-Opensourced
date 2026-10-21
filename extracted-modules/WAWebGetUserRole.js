__d("WAWebGetUserRole", [
    "WAWebWamEnumUserRoleType"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = e?.groupMetadata;
        if (t == null) {
            return null;
        }
        const n = t.participants.iAmAdmin();
        const r = n && t.isParentGroup;
        if (r === true) {
            return o("WAWebWamEnumUserRoleType").USER_ROLE_TYPE.CADMIN;
        }
        if (n === true) {
            return o("WAWebWamEnumUserRoleType").USER_ROLE_TYPE.ADMIN;
        }
        return o("WAWebWamEnumUserRoleType").USER_ROLE_TYPE.MEMBER;
    }
    l.getUserRole = e;
}, 98);