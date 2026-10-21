__d("WAWebMessageCommunityLinkGroup.react", [
    "fbt",
    "WAWebGroupMetadataCollection",
    "WAWebMessageCommunityCard.react",
    "WAWebMessageCommunityLinkGroupTitle.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const a = o("react-compiler-runtime").c(27);
        const { author, chat, clickable, templateParams } = e;
        const m = templateParams[0];
        let p;
        if (a[0] !== m) {
            const _ = r("WAWebGroupMetadataCollection").get(m);
            p = _ == null ? undefined : _.participants.iAmAdmin();
            a[0] = m;
            a[1] = p;
        } else {
            p = a[1];
        }
        const f = p;
        const g = chat.groupMetadata?.membershipApprovalMode;
        const h = chat.groupMetadata?.hiddenSubgroup;
        let y;
        if (h === true) {
            let C;
            if (a[2] === Symbol.for("react.memo_cache_sentinel")) {
                C = s._("Only people in the community who have been invited can see and join this group.");
                a[2] = C;
            } else {
                C = a[2];
            }
            y = C;
        } else if (g === true) {
            let b;
            if (a[3] === Symbol.for("react.memo_cache_sentinel")) {
                b = s._("Anyone in the community can request to join this group.");
                a[3] = b;
            } else {
                b = a[3];
            }
            y = b;
        } else {
            let v;
            if (a[4] === Symbol.for("react.memo_cache_sentinel")) {
                v = s._("Anyone in the community can join this group.");
                a[4] = v;
            } else {
                v = a[4];
            }
            y = v;
        }
        let S;
        if (a[5] === Symbol.for("react.memo_cache_sentinel")) {
            S = s._("As a member, you can join groups in the community and get admin announcements.");
            a[5] = S;
        } else {
            S = a[5];
        }
        let R;
        if (a[6] === Symbol.for("react.memo_cache_sentinel")) {
            R = s._("Your profile is visible to admins.");
            a[6] = R;
        } else {
            R = a[6];
        }
        let L;
        if (a[7] !== y) {
            L = [
                S,
                y,
                R
            ];
            a[7] = y;
            a[8] = L;
        } else {
            L = a[8];
        }
        const E = L;
        let k;
        if (a[9] === Symbol.for("react.memo_cache_sentinel")) {
            k = s._("Members in this group are now community members.");
            a[9] = k;
        } else {
            k = a[9];
        }
        let I;
        if (a[10] !== y) {
            I = [
                k,
                y
            ];
            a[10] = y;
            a[11] = I;
        } else {
            I = a[11];
        }
        const T = I;
        let D;
        if (a[12] !== f) {
            D = f === true ? s._("Manage the community") : s._("Explore the community");
            a[12] = f;
            a[13] = D;
        } else {
            D = a[13];
        }
        const x = D;
        const chat_id = chat.id;
        let P;
        if (a[14] !== author || a[15] !== clickable || a[16] !== templateParams) {
            P = o("WAWebMessageCommunityLinkGroupTitle.react").communityLinkGroupTitle({
                templateParams,
                clickable,
                author
            });
            a[14] = author;
            a[15] = clickable;
            a[16] = templateParams;
            a[17] = P;
        } else {
            P = a[17];
        }
        const N = f === true ? T : E;
        let M;
        if (a[18] !== N) {
            M = u.jsx(o("WAWebMessageCommunityCard.react").BulletedList, {
                items: N
            });
            a[18] = N;
            a[19] = M;
        } else {
            M = a[19];
        }
        const openNavigation = !f;
        let A;
        if (a[20] !== chat.id || a[21] !== m || a[22] !== x || a[23] !== M || a[24] !== openNavigation || a[25] !== P) {
            A = u.jsx(o("WAWebMessageCommunityCard.react").MessageCommunityCard, {
                communityId: m,
                subgroupId: chat_id,
                title: P,
                body: M,
                footer: x,
                openNavigation
            });
            a[20] = chat.id;
            a[21] = m;
            a[22] = x;
            a[23] = M;
            a[24] = openNavigation;
            a[25] = P;
            a[26] = A;
        } else {
            A = a[26];
        }
        return A;
    }
    l.MessageCommunityLinkGroup = c;
}, 226);