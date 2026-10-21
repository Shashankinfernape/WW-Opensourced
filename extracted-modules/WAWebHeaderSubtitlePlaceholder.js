__d("WAWebHeaderSubtitlePlaceholder", [
    "fbt",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType"
], function(t, n, r, o, a, i, l, s) {
    function e(e) {
        let t;
        let n;
        let r;
        const a = e != null && (t = e.groupMetadata) != null && t.participants.iAmAdmin() && (n = e.groupMetadata) != null && n.announce ? s._("Only admins can send messages") : s._("click here for group info");
        let i;
        if (o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e.groupMetadata) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) {
            if (e?.groupMetadata?.participants.iAmAdmin()) {
                i = s._("Only admins can send messages");
            } else {
                i = s._("Announcements");
            }
        } else if (o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e.groupMetadata) === o("WAWebGroupType").GroupType.LINKED_SUBGROUP && (r = e.groupMetadata) != null && r.participants.iAmMember()) {
            const c = e.groupMetadata?.getParentGroupChat();
            const d = c?.contact;
            const m = d != null ? o("WAWebFrontendContactGetters").getFormattedName(d) : null;
            if (m != null) {
                i = s._("{community}", [
                    s._param("community", m)
                ]);
            }
        }
        return i ?? a;
    }
    l.getSubtitlePlaceholder = e;
}, 226);