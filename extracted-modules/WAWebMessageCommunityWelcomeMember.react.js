__d("WAWebMessageCommunityWelcomeMember.react", [
    "fbt",
    "WAWebFormatParticipantNames",
    "WAWebMessageCommunityCard.react",
    "WAWebMessageCommunityWelcomeMemberTitle.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(16);
        const { author, chat, clickable, templateParams } = e;
        const l = templateParams[0];
        let c;
        if (t[0] !== author || t[1] !== clickable) {
            c = author ? o("WAWebFormatParticipantNames").getFormattedName({
                clickable,
                jid: author
            }) : null;
            t[0] = author;
            t[1] = clickable;
            t[2] = c;
        } else {
            c = t[2];
        }
        const d = c;
        let m;
        if (t[3] !== d) {
            m = <>{d == null || d === "" ? s._("You joined this community") : s._("{author} added you", [
                s._param("author", d)
            ])}</>;
            t[3] = d;
            t[4] = m;
        } else {
            m = t[4];
        }
        let p;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            p = s._("Admins will send all members important community announcements here");
            t[5] = p;
        } else {
            p = t[5];
        }
        let _;
        if (t[6] !== m) {
            _ = [
                m,
                p
            ];
            t[6] = m;
            t[7] = _;
        } else {
            _ = t[7];
        }
        const f = _;
        let g;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            g = s._("See community info");
            t[8] = g;
        } else {
            g = t[8];
        }
        const h = g;
        const chat_id = chat.id;
        let C;
        if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
            C = o("WAWebMessageCommunityWelcomeMemberTitle.react").communityWelcomeMemberTitle();
            t[9] = C;
        } else {
            C = t[9];
        }
        let b;
        if (t[10] !== f) {
            b = u.jsx(o("WAWebMessageCommunityCard.react").BulletedList, {
                items: f
            });
            t[10] = f;
            t[11] = b;
        } else {
            b = t[11];
        }
        let v;
        if (t[12] !== chat.id || t[13] !== l || t[14] !== b) {
            v = u.jsx(o("WAWebMessageCommunityCard.react").MessageCommunityCard, {
                communityId: l,
                subgroupId: chat_id,
                title: C,
                body: b,
                footer: h
            });
            t[12] = chat.id;
            t[13] = l;
            t[14] = b;
            t[15] = v;
        } else {
            v = t[15];
        }
        return v;
    }
    l.MessageCommunityWelcomeMember = c;
}, 226);