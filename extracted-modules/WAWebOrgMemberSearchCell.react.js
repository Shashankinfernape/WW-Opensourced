__d("WAWebOrgMemberSearchCell.react", [
    "WAWebApiContact",
    "WAWebBoolFunc",
    "WAWebChatCell.react",
    "WAWebDefaultUserIcon.react",
    "WAWebDetailImage.react",
    "WAWebEmojiText.react",
    "WAWebOrgContactGetters",
    "WAWebOrgGetters",
    "WAWebOrgIcon.react",
    "WAWebOrgMemberDisplayName",
    "WAWebOrgMemberLidEligibility",
    "WAWebOrgMemberTextStatus.react",
    "WAWebPhoneUtils",
    "WAWebUsernameTypes",
    "react",
    "react-compiler-runtime",
    "useWAWebOrgContactValues",
    "useWAWebOrgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const l = o("react-compiler-runtime").c(31);
        const { active, member, onClick, secondary, theme } = e;
        const f = o("WAWebOrgMemberLidEligibility").parseWAWebOrgMemberLidUser(member.id);
        const g = r("useWAWebOrgContactValues")(member.id, [
            o("WAWebOrgContactGetters").getOrgContactMemberName,
            o("WAWebOrgContactGetters").getOrgContactUsername,
            o("WAWebOrgContactGetters").getOrgContactPrimaryOrgMemberTag,
            o("WAWebOrgContactGetters").getOrgContactPrimaryOrgId
        ]) ?? [
            member.memberName,
            member.username,
            member.primaryOrgMemberTag,
            member.primaryOrgId
        ];
        const h = g[0];
        const y = g[1];
        const C = g[2];
        const orgID = g[3];
        const v = r("useWAWebOrgValues")(orgID, [
            o("WAWebOrgGetters").getOrgName,
            o("WAWebOrgGetters").getOrgIconThumbUrl
        ]) ?? [
            null,
            null
        ];
        const orgName = v[0];
        const R = v[1];
        const memberName = o("WAWebOrgMemberDisplayName").getOrgMemberNameWithUsernameFallback(h, o("WAWebUsernameTypes").serializeMaybeUsername(y));
        const E = member.phoneNumber ?? (f == null ? null : o("WAWebApiContact").getPhoneNumber(f)?.user);
        const k = memberName.trim() !== "" || E == null ? memberName : o("WAWebPhoneUtils").formatPhone(E);
        const handleKeyboardClick = onClick != null;
        let T;
        if (l[0] === Symbol.for("react.memo_cache_sentinel")) {
            T = {
                className: "x6s0dn4 x78zum5 xl56j7k"
            };
            l[0] = T;
        } else {
            T = l[0];
        }
        let D;
        if (l[1] !== f) {
            D = <div {...babelHelpers.extends({}, T, {
                children: f == null ? s.jsx(o("WAWebDefaultUserIcon.react").DefaultUserIcon, {
                    height: 49,
                    width: 49
                }) : s.jsx(o("WAWebDetailImage.react").DetailImage, {
                    id: f,
                    size: 49
                })
            })}/>;
            l[1] = f;
            l[2] = D;
        } else {
            D = l[2];
        }
        let x;
        if (l[3] === Symbol.for("react.memo_cache_sentinel")) {
            x = {
                className: "x6s0dn4 x78zum5 xeuugli x6ikm8r x10wlt62 xh8yej3"
            };
            l[3] = x;
        } else {
            x = l[3];
        }
        let $;
        if (l[4] === Symbol.for("react.memo_cache_sentinel")) {
            $ = {
                className: "xs83m0k xeuugli x6ikm8r x10wlt62"
            };
            l[4] = $;
        } else {
            $ = l[4];
        }
        let P;
        if (l[5] !== k) {
            P = <div {...babelHelpers.extends({}, $, {
                "data-testid": "org_member_search_cell_name",
                children: s.jsx(o("WAWebEmojiText.react").EmojiText, {
                    direction: "auto",
                    ellipsify: true,
                    text: k,
                    titlify: true
                })
            })}/>;
            l[5] = k;
            l[6] = P;
        } else {
            P = l[6];
        }
        let N;
        if (l[7] !== f || l[8] !== C || l[9] !== memberName || l[10] !== R || l[11] !== orgName || l[12] !== orgID) {
            N = f == null || orgID == null || orgName == null ? null : {
                memberName,
                memberTag: C ?? null,
                orgIconURI: R ?? null,
                orgID,
                orgName
            };
            l[7] = f;
            l[8] = C;
            l[9] = memberName;
            l[10] = R;
            l[11] = orgName;
            l[12] = orgID;
            l[13] = N;
        } else {
            N = l[13];
        }
        let M;
        if (l[14] !== N) {
            M = s.jsx(r("WAWebOrgIcon.react"), {
                membership: N
            });
            l[14] = N;
            l[15] = M;
        } else {
            M = l[15];
        }
        let w;
        if (l[16] !== P || l[17] !== M) {
            w = <div {...babelHelpers.extends({}, x, {
                "data-testid": "org_member_search_cell_title",
                children: [
                    P,
                    M
                ]
            })}/>;
            l[16] = P;
            l[17] = M;
            l[18] = w;
        } else {
            w = l[18];
        }
        let A;
        if (l[19] !== f || l[20] !== C || l[21] !== secondary) {
            A = secondary ?? c(C, f);
            l[19] = f;
            l[20] = C;
            l[21] = secondary;
            l[22] = A;
        } else {
            A = l[22];
        }
        let F;
        if (l[23] !== active || l[24] !== onClick || l[25] !== handleKeyboardClick || l[26] !== A || l[27] !== D || l[28] !== w || l[29] !== theme) {
            const Component = r("WAWebChatCell.react");
            F = <Component active={active} contextEnabled={o("WAWebBoolFunc").returnFalse} handleKeyboardClick={handleKeyboardClick} idle={false} image={D} onClick={onClick} primary={w} secondary={A} testid="org_member_search_cell" theme={theme}/>;
            l[23] = active;
            l[24] = onClick;
            l[25] = handleKeyboardClick;
            l[26] = A;
            l[27] = D;
            l[28] = w;
            l[29] = theme;
            l[30] = F;
        } else {
            F = l[30];
        }
        return F;
    }
    function c(e, t) {
        if (e != null && e !== "") {
            return e;
        }
        if (t == null) {
            return null;
        }
        return s.jsx(r("WAWebOrgMemberTextStatus.react"), {
            lid: t
        });
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = u;
}, 98);