__d("WAWebConversationDeprecatedLidChatUtils", [
    "WAWebApiContact",
    "WAWebLid1X1MigrationGating"
], function(t, n, r, o, a, i, l) {
    const e = {
        isLidDeprecated: false
    };
    function s(e) {
        return u(e).isLidDeprecated;
    }
    function u(t) {
        if (!o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() || !t.id.isRegularUser() || !t.accountLid) {
            return e;
        }
        const latestLid = o("WAWebApiContact").getDeprecatedLidLatestLid(t.accountLid);
        if (latestLid != null) {
            return {
                isLidDeprecated: true,
                latestLid
            };
        }
        return e;
    }
    l.isDeprecatedLidChatSendBlocked = s;
    l.getLidDeprecatedInfo = u;
}, 98);