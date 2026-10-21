__d("useWAWebShowCommunitySubjectSyncIssue", [
    "WAWebChatCommunityUtils",
    "WAWebCommunitySubjectChangePopups.react",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebModalManager",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useEffect, useState } = u;
    function m(e) {
        const t = useState(false);
        const n = t[0];
        const r = t[1];
        const a = ()=>{
            if (o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e?.groupMetadata) === o("WAWebGroupType").GroupType.COMMUNITY) {
                return e;
            }
            if (o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e?.groupMetadata) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) {
                return e?.groupMetadata?.getParentGroupChat();
            }
        };
        useEffect(function() {
            const t = a();
            if (t && t.groupMetadata?.participants.iAmAdmin() && o("WAWebChatCommunityUtils").cagAndCommunitySubjectDiffer(t)) {
                r(true);
                o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebCommunitySubjectChangePopups.react").CommunitySubjectSyncingIssuePopup, {
                    parentChat: t
                }));
            }
        }, []);
        return n;
    }
    l.default = m;
}, 98);