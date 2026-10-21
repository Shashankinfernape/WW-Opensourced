__d("useWAWebEmailInviteParentRestriction", [
    "WAWebChatCollection",
    "WAWebCommunityAnnouncementGroupUtils",
    "WAWebCommunitySubgroupInviteLinkRestriction",
    "WAWebGroupMetadataCollection",
    "react-compiler-runtime",
    "useWAWebEventTargetValue"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("react-compiler-runtime").c(23);
        let n;
        if (t[0] !== e) {
            n = [
                e,
                o("WAWebChatCollection").ChatCollection,
                r("WAWebGroupMetadataCollection")
            ];
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        let a;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                "change:parentGroup",
                "add",
                "remove",
                "reset",
                "bulk_add",
                "bulk_remove"
            ];
            t[2] = a;
        } else {
            a = t[2];
        }
        let i;
        let l;
        if (t[3] !== e) {
            i = function() {
                return e.getParentGroupChat()?.groupMetadata ?? null;
            };
            l = [
                e
            ];
            t[3] = e;
            t[4] = i;
            t[5] = l;
        } else {
            i = t[4];
            l = t[5];
        }
        const s = r("useWAWebEventTargetValue")(n, a, i, l);
        let u;
        if (t[6] !== s) {
            u = [
                s,
                r("WAWebGroupMetadataCollection")
            ];
            t[6] = s;
            t[7] = u;
        } else {
            u = t[7];
        }
        let c;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            c = [
                "change:joinedSubgroups",
                "change:unjoinedSubgroups",
                "change:defaultSubgroup",
                "add",
                "remove",
                "reset",
                "bulk_add",
                "bulk_remove"
            ];
            t[8] = c;
        } else {
            c = t[8];
        }
        let d;
        let m;
        if (t[9] !== s) {
            d = function() {
                return o("WAWebCommunityAnnouncementGroupUtils").getCommunityAnnouncementGroupMetadata(s);
            };
            m = [
                s
            ];
            t[9] = s;
            t[10] = d;
            t[11] = m;
        } else {
            d = t[10];
            m = t[11];
        }
        const p = r("useWAWebEventTargetValue")(u, c, d, m);
        const _ = s?.participants;
        let f;
        if (t[12] !== p || t[13] !== e.participants || t[14] !== _) {
            f = [
                e.participants,
                _,
                p
            ];
            t[12] = p;
            t[13] = e.participants;
            t[14] = _;
            t[15] = f;
        } else {
            f = t[15];
        }
        let g;
        if (t[16] === Symbol.for("react.memo_cache_sentinel")) {
            g = [
                "bulk_add",
                "bulk_remove",
                "reset",
                "change:isAdmin",
                "change:memberAddMode"
            ];
            t[16] = g;
        } else {
            g = t[16];
        }
        let h;
        if (t[17] !== e) {
            h = function() {
                return o("WAWebCommunitySubgroupInviteLinkRestriction").isSubgroupInviteLinkRestrictedByParentCommunity(e);
            };
            t[17] = e;
            t[18] = h;
        } else {
            h = t[18];
        }
        let y;
        if (t[19] !== p || t[20] !== e || t[21] !== s) {
            y = [
                e,
                s,
                p
            ];
            t[19] = p;
            t[20] = e;
            t[21] = s;
            t[22] = y;
        } else {
            y = t[22];
        }
        return r("useWAWebEventTargetValue")(f, g, h, y);
    }
    l.default = e;
}, 98);