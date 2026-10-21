__d("WAWebCommunityAnnouncementGroupUtils", [
    "WAWebGroupMetadataCollection",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = e?.getSubgroupsMetadata();
        return t?.find(function(e) {
            return o("WAWebGroupMetadataTypeUtils").getGroupTypeForMetadata(e) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP;
        });
    }
    function s(t) {
        const o = e(t);
        if (o?.id == null) {
            return null;
        }
        return r("WAWebGroupMetadataCollection").get(o.id) ?? null;
    }
    function u(e) {
        const t = e != null ? r("WAWebGroupMetadataCollection").get(e) : null;
        return t?.isLidAddressingMode === true;
    }
    l.getCommunityAnnouncementGroup = e;
    l.getCommunityAnnouncementGroupMetadata = s;
    l.isLidAddressingModeGivenCAGId = u;
}, 98);