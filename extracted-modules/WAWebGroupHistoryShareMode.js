__d("WAWebGroupHistoryShareMode", [
    "$InternalEnum"
], function(t, n, r, o, a, i) {
    "use strict";
    const e = n("$InternalEnum")({
        ADMIN_SHARE: "admin_share",
        ALL_MEMBER_SHARE: "all_member_share"
    });
    function l(t) {
        switch(t){
            case "ADMIN_SHARE":
                return e.ADMIN_SHARE;
            case "ALL_MEMBER_SHARE":
                return e.ALL_MEMBER_SHARE;
            default:
                return e.ADMIN_SHARE;
        }
    }
    i.MemberShareGroupHistoryMode = e;
    i.getMemberShareGroupHistoryModeFromMexType = l;
}, 66);