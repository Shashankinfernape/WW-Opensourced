__d("useWAWebCommunityMembers", [
    "JSResourceForInteraction",
    "WAWebCommunityAnnouncementGroupUtils",
    "WAWebCommunityParticipantsUtils",
    "asyncToGeneratorRuntime",
    "react-compiler-runtime",
    "useWAWebAsync",
    "useWAWebCommunitySubgroups",
    "useWAWebEventTargetValue"
], function(t, n, r, o, a, i, l) {
    const e = r("JSResourceForInteraction")("WAWebQueryAndUpdateCommunityParticipantsAction").__setRef("useWAWebCommunityMembers");
    function s(t, a) {
        const l = o("react-compiler-runtime").c(26);
        const s = a?.participants;
        const u = t?.groupMetadata?.participants;
        let c;
        if (l[0] !== u) {
            c = u?.iAmAdmin();
            l[0] = u;
            l[1] = c;
        } else {
            c = l[1];
        }
        const d = !!c;
        const m = r("useWAWebCommunitySubgroups")(d ? null : t?.groupMetadata);
        const m_joinedSubgroups = m.joinedSubgroups;
        let _;
        if (l[2] !== a || l[3] !== d || l[4] !== t) {
            _ = (()=>{
                const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (t && a && d) {
                        const n = yield e.load();
                        const r = n.queryAndUpdateCommunityParticipants;
                        return r(t.id);
                    }
                });
                return function() {
                    return r.apply(this, arguments);
                };
            })();
            l[2] = a;
            l[3] = d;
            l[4] = t;
            l[5] = _;
        } else {
            _ = l[5];
        }
        const f = t?.id;
        let g;
        if (l[6] !== a || l[7] !== d || l[8] !== f) {
            g = [
                a,
                d,
                f
            ];
            l[6] = a;
            l[7] = d;
            l[8] = f;
            l[9] = g;
        } else {
            g = l[9];
        }
        const h = r("useWAWebAsync")(_, g);
        const h_loading = h.loading;
        const C = a?.id;
        let b;
        if (l[10] !== C) {
            b = o("WAWebCommunityAnnouncementGroupUtils").isLidAddressingModeGivenCAGId(C);
            l[10] = C;
            l[11] = b;
        } else {
            b = l[11];
        }
        const isLidAddressingMode = b;
        let S;
        if (l[12] !== s || l[13] !== u) {
            S = [
                u,
                s
            ];
            l[12] = s;
            l[13] = u;
            l[14] = S;
        } else {
            S = l[14];
        }
        let R;
        if (l[15] === Symbol.for("react.memo_cache_sentinel")) {
            R = [
                "bulk_add",
                "bulk_remove",
                "reset",
                "change:isAdmin"
            ];
            l[15] = R;
        } else {
            R = l[15];
        }
        let L;
        if (l[16] !== s || l[17] !== isLidAddressingMode || l[18] !== m_joinedSubgroups || l[19] !== u) {
            L = function() {
                return o("WAWebCommunityParticipantsUtils").mergeAndSortCommunityParticipants({
                    CAGParticipants: s,
                    isLidAddressingMode,
                    joinedSubgroups: m_joinedSubgroups,
                    parentGroupMembers: u
                });
            };
            l[16] = s;
            l[17] = isLidAddressingMode;
            l[18] = m_joinedSubgroups;
            l[19] = u;
            l[20] = L;
        } else {
            L = l[20];
        }
        const members = r("useWAWebEventTargetValue")(S, R, L);
        let k;
        if (l[21] !== s || l[22] !== h_loading || l[23] !== members || l[24] !== u) {
            k = {
                members,
                announcementGroupParticipants: s,
                parentGroupParticipants: u,
                loading: h_loading
            };
            l[21] = s;
            l[22] = h_loading;
            l[23] = members;
            l[24] = u;
            l[25] = k;
        } else {
            k = l[25];
        }
        return k;
    }
    l.useCommunityMembers = s;
}, 98);