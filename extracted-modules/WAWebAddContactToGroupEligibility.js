__d("WAWebAddContactToGroupEligibility", [
    "WAWebContactGetters",
    "WAWebLidMigrationUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const t_groupMetadata = t.groupMetadata;
        if (!o("WAWebContactGetters").getIsGroup(t) || t_groupMetadata == null || !t_groupMetadata.participants.iAmMember() || !t_groupMetadata.participants.iAmAdmin()) {
            return false;
        }
        const r = t_groupMetadata.isLidAddressingMode === true ? o("WAWebLidMigrationUtils").toLid(e.id) : o("WAWebLidMigrationUtils").toPn(e.id);
        return !(r != null && t_groupMetadata.participants.get(r));
    }
    l.isContactAddableToGroup = e;
}, 98);