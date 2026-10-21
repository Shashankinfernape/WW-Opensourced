__d("WAWebChatComparatorCommunity", [
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType"
], function(t, n, r, o, a, i, l) {
    const e = function(t, n) {
        if (o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(t.groupMetadata) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) {
            return -1;
        }
        if (o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(n.groupMetadata) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) {
            return 1;
        }
        const e = t.previewT != null ? Math.max(t.previewT, t.t || 0) : t.t || 0;
        const r = n.previewT != null ? Math.max(n.previewT, n.t || 0) : n.t || 0;
        if (e !== r) {
            if (e > r) {
                return -1;
            }
            return 1;
        }
        if (t.id.toString() < n.id.toString()) {
            return -1;
        }
        return 1;
    };
    l.default = e;
}, 98);