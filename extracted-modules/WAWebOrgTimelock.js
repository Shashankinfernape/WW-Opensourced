__d("WAWebOrgTimelock", [
    "WAWebChatCollection",
    "WAWebReachoutTimelockUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return !o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked() || o("WAWebChatCollection").ChatCollection.getChatByAccountLid(e)?.getTcToken() != null;
    }
    l.canMessageOrgMemberWhileTimelocked = e;
}, 98);