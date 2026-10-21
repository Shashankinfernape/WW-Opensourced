__d("WAWebMessageCommunitySubgroupWelcome.react", [
    "fbt",
    "WAWebMessageCommunityCard.react",
    "WAWebMessageCommunitySubgroupWelcomeTitle.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(11);
        const { author, chat, clickable, templateParams } = e;
        const l = templateParams[0];
        let c;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            c = [
                s._("As a member, you can join groups in the community and get admin announcements."),
                s._("Your profile is visible to admins.")
            ];
            t[0] = c;
        } else {
            c = t[0];
        }
        const items = c;
        let m;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            m = s._("Explore the community");
            t[1] = m;
        } else {
            m = t[1];
        }
        const p = m;
        const chat_id = chat.id;
        let f;
        if (t[2] !== author || t[3] !== clickable || t[4] !== templateParams) {
            f = o("WAWebMessageCommunitySubgroupWelcomeTitle.react").communitySubgroupWelcomeTitle({
                templateParams,
                clickable,
                author
            });
            t[2] = author;
            t[3] = clickable;
            t[4] = templateParams;
            t[5] = f;
        } else {
            f = t[5];
        }
        let g;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            g = u.jsx(o("WAWebMessageCommunityCard.react").BulletedList, {
                items
            });
            t[6] = g;
        } else {
            g = t[6];
        }
        let h;
        if (t[7] !== chat.id || t[8] !== l || t[9] !== f) {
            h = u.jsx(o("WAWebMessageCommunityCard.react").MessageCommunityCard, {
                communityId: l,
                subgroupId: chat_id,
                title: f,
                body: g,
                footer: p,
                openNavigation: true
            });
            t[7] = chat.id;
            t[8] = l;
            t[9] = f;
            t[10] = h;
        } else {
            h = t[10];
        }
        return h;
    }
    l.MessageCommunitySubgroupWelcome = c;
}, 226);