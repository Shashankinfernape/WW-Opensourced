__d("WAWebMessageCommunityWelcomeSubgroup.react", [
    "fbt",
    "WAWebGroupMetadataCollection",
    "WAWebMessageCommunityCard.react",
    "WAWebMessageCommunityWelcomeMemberTitle.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const n = o("react-compiler-runtime").c(12);
        const e_templateParams = e.templateParams;
        const i = e_templateParams[0];
        const l = e_templateParams[2];
        const c = r("WAWebGroupMetadataCollection").get(l)?.subject;
        let d;
        if (n[0] !== c) {
            d = <>{c != null ? s._("You were added because \"{group_name}\" was added to this community", [
                s._param("group_name", c)
            ]) : s._("You were added because one of your groups was added to this community")}</>;
            n[0] = c;
            n[1] = d;
        } else {
            d = n[1];
        }
        let m;
        if (n[2] === Symbol.for("react.memo_cache_sentinel")) {
            m = s._("Admins will send all members important community announcements here");
            n[2] = m;
        } else {
            m = n[2];
        }
        let p;
        if (n[3] !== d) {
            p = [
                d,
                m
            ];
            n[3] = d;
            n[4] = p;
        } else {
            p = n[4];
        }
        const _ = p;
        let f;
        if (n[5] === Symbol.for("react.memo_cache_sentinel")) {
            f = s._("See community info");
            n[5] = f;
        } else {
            f = n[5];
        }
        const g = f;
        let h;
        if (n[6] === Symbol.for("react.memo_cache_sentinel")) {
            h = o("WAWebMessageCommunityWelcomeMemberTitle.react").communityWelcomeMemberTitle();
            n[6] = h;
        } else {
            h = n[6];
        }
        let y;
        if (n[7] !== _) {
            y = u.jsx(o("WAWebMessageCommunityCard.react").BulletedList, {
                items: _
            });
            n[7] = _;
            n[8] = y;
        } else {
            y = n[8];
        }
        let C;
        if (n[9] !== i || n[10] !== y) {
            C = u.jsx(o("WAWebMessageCommunityCard.react").MessageCommunityCard, {
                communityId: i,
                title: h,
                body: y,
                footer: g
            });
            n[9] = i;
            n[10] = y;
            n[11] = C;
        } else {
            C = n[11];
        }
        return C;
    }
    l.default = c;
}, 226);