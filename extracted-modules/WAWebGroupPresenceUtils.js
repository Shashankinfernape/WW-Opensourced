__d("WAWebGroupPresenceUtils", [
    "WAWebABProps",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType"
], function(t, n, r, o, a, i, l) {
    const e = 8;
    const s = 1024;
    function u() {
        return e;
    }
    function c() {
        return o("WAWebABProps").getABPropConfigValue("wa_web_small_group_presence_enabled");
    }
    function d() {
        return o("WAWebABProps").getABPropConfigValue("wa_web_large_group_presence_enabled");
    }
    function m(e) {
        if (!e.id.isGroup()) {
            return false;
        }
        const e_groupMetadata = e.groupMetadata;
        return !(e_groupMetadata == null || e_groupMetadata.isSuspendedOrTerminated() === true || o("WAWebGroupMetadataGetters").getIsCag(e_groupMetadata) || o("WAWebGroupMetadataGetters").getGroupType(e_groupMetadata) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP || o("WAWebGroupMetadataGetters").getGroupType(e_groupMetadata) === o("WAWebGroupType").GroupType.COMMUNITY);
    }
    l.WEB_SMALL_MAX = e;
    l.WEB_LARGE_MAX = s;
    l.getSmallGroupPresenceThreshold = u;
    l.isSmallGroupPresenceEnabled = c;
    l.isLargeGroupPresenceEnabled = d;
    l.isGroupEligibleForPresence = m;
}, 98);