__d("WAWebGroupUtils", [
    "WATypeUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return e.some((e)=>o("WAWebUserPrefsMeUser").isMeAccount(o("WATypeUtils").isString(e) ? o("WAWebWidFactory").createWid(e) : e));
    }
    function s(t) {
        const n = t.filter(({ isAdmin: t })=>t).map(({ id: t })=>t);
        return e(n);
    }
    const u = new Set([
        "add",
        "remove",
        "demote",
        "linked_group_demote"
    ]);
    l.amIGroupAdmin = e;
    l.amIGroupAdminGivenParticipants = s;
    l.INVALID_CAG_NON_ADMIN_SYSTEM_MSG_SUBTYPES = u;
}, 98);