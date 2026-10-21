__d("WAWebFormatLinkNotification", [
    "fbt",
    "WALogger",
    "WAWebFormatParticipantNames",
    "WAWebPairList",
    "WAWebStringsWithMultiplePluralParts",
    "WAWebUserPrefsMeUser",
    "WAWebWid"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    let b;
    const v = (t)=>t instanceof r("WAWebWid") && o("WAWebUserPrefsMeUser").isMeAccount(t);
    function S(e) {
        return !e;
    }
    function R({ author, subject, subtype, templateParams }) {
        return L({
            author,
            clickable: false,
            subject,
            subtype,
            templateParams
        });
    }
    function L({ author, clickable, subject, subtype, templateParams }) {
        const s = author ? o("WAWebFormatParticipantNames").getFormattedName({
            clickable,
            jid: author,
            subtype
        }) : null;
        const u = subject ? o("WAWebFormatParticipantNames").getFormattedName({
            clickable,
            jid: subject
        }) : null;
        switch(subtype){
            case "parent_group_link":
                return M(templateParams, clickable, author, s);
            case "sibling_group_link":
                return w(templateParams, clickable, author, s, subtype);
            case "sub_group_link":
                break;
            case "parent_group_unlink":
                return N(templateParams, clickable, author, s);
            case "integrity_parent_group_unlink":
                return P(templateParams, clickable);
            case "delete_parent_group_unlink":
            case "delete_parent_group":
                return $(templateParams, s, author, clickable);
            case "sibling_group_unlink":
                return A(templateParams, clickable, author, s);
            case "sub_group_unlink":
                break;
            case "community_create":
                return F(templateParams, clickable, author, s);
            case "linked_group_join":
                return O(subject, u);
            case "auto_add":
            case "default_sub_group_admin_add":
                return B(templateParams, clickable, s);
            case "invite_auto_add":
                return W(templateParams, clickable, subject, u);
            default:
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "wa:formatLinkNotification:unknown message subtype: ",
                    ""
                ])), subtype);
                break;
        }
    }
    function E(e) {
        return s._("You created the community \"{community_name}\"", [
            s._param("community_name", e)
        ]);
    }
    E.displayName = `${E.name} [from ${i.id}]`;
    function k() {
        return s._("You created the community");
    }
    k.displayName = `${k.name} [from ${i.id}]`;
    function I(e, t) {
        return s._("{author} created the community \"{community_name}\"", [
            s._param("author", e),
            s._param("community_name", t)
        ]);
    }
    I.displayName = `${I.name} [from ${i.id}]`;
    function T(e) {
        return s._("{author} created the community", [
            s._param("author", e)
        ]);
    }
    T.displayName = `${T.name} [from ${i.id}]`;
    function D(e) {
        return s._("The community \"{community_name}\" was created", [
            s._param("community_name", e)
        ]);
    }
    D.displayName = `${D.name} [from ${i.id}]`;
    function x() {
        return s._("The community was created");
    }
    x.displayName = `${x.name} [from ${i.id}]`;
    function $(e, t, n, r) {
        let a;
        const i = e[0];
        if (i != null && typeof i === "string" && !S(i)) {
            a = o("WAWebFormatParticipantNames").getClickableDeactivatedCommunityName(i, r);
        }
        if (a != null && t != null) {
            if (v(n)) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "generateDeleteParentGroupNotification: deactivate, isMe"
                ])));
                return s._("You deactivated the community {community}", [
                    s._param("community", o("WAWebFormatParticipantNames").getCommunityNameInQuotationMarks(a, !r))
                ]);
            }
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "generateDeleteParentGroupNotification: deactivate, !isMe"
            ])));
            return s._("{author} deactivated the community {community}", [
                s._param("author", t),
                s._param("community", o("WAWebFormatParticipantNames").getCommunityNameInQuotationMarks(a, !r))
            ]);
        }
        if (v(n)) {
            return s._("You deactivated a community");
        }
        if (t != null) {
            return s._("{author} deactivated a community", [
                s._param("author", t)
            ]);
        }
        return s._("A community was deactivated");
    }
    $.displayName = `${$.name} [from ${i.id}]`;
    function P(e, t) {
        const n = o("WAWebFormatParticipantNames").getClickableIntegrityDeactivateCommunityName({
            asString: true,
            clickable: t,
            communityName: e[1],
            jid: e[0]
        });
        if (n != null) {
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "generateIntegrityParentGroupUnlinkNotification"
            ])));
            return s._("This group is no longer part of the community {community}", [
                s._param("community", o("WAWebFormatParticipantNames").getCommunityNameInQuotationMarks(n, !t))
            ]);
        }
        return s._("This group is no longer part of a community");
    }
    P.displayName = `${P.name} [from ${i.id}]`;
    function N(e, t, n, r) {
        const a = babelHelpers.arrayLikeToArray(e).slice(0);
        const i = o("WAWebFormatParticipantNames").getFormattedCommunityNameWithAlternative({
            jid: a[0],
            asString: !t,
            alternativeStringName: a[1]
        });
        if (i != null && v(n)) {
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "generateParentGroupUnlinkNotification, I am author"
            ])));
            return s._("You removed this group from the community {community}", [
                s._param("community", o("WAWebFormatParticipantNames").getCommunityNameInQuotationMarks(i, !t))
            ]);
        }
        if (i == null && v(n)) {
            return s._("You removed this group from a community");
        }
        if (i != null && n != null) {
            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "generateParentGroupUnlinkNotification, I am not author"
            ])));
            return s._("{author} removed this group from the community {community}", [
                s._param("author", r),
                s._param("community", o("WAWebFormatParticipantNames").getCommunityNameInQuotationMarks(i, !t))
            ]);
        }
        if (i != null && n == null) {
            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "generateParentGroupUnlinkNotification, no author"
            ])));
            return s._("This group was removed from the community {community}", [
                s._param("community", o("WAWebFormatParticipantNames").getCommunityNameInQuotationMarks(i, !t))
            ]);
        }
        if (i == null && n != null) {
            return s._("{author} removed this group from a community", [
                s._param("author", r)
            ]);
        }
        return s._("This group was removed from a community");
    }
    N.displayName = `${N.name} [from ${i.id}]`;
    function M(e, t, n, r) {
        const a = o("WAWebFormatParticipantNames").getFormattedCommunityNameWithAlternative({
            jid: e[0],
            asString: !t,
            alternativeStringName: e[1]
        });
        if (!S(a) && v(n)) {
            o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "generateParentGroupLinkNotification, I am author"
            ])));
            return s._("You added this group and its members to the community {community}", [
                s._param("community", o("WAWebFormatParticipantNames").getCommunityNameInQuotationMarks(a, !t))
            ]);
        }
        if (S(a) && v(n)) {
            return s._("You added this group and its members to a community");
        }
        if (!S(a) && n != null) {
            o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                "generateParentGroupLinkNotification, I am not author"
            ])));
            return s._("{author} added this group and its members to the community {community}", [
                s._param("author", r),
                s._param("community", o("WAWebFormatParticipantNames").getCommunityNameInQuotationMarks(a, !t))
            ]);
        }
        if (!S(a) && n == null) {
            o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                "generateParentGroupLinkNotification, no author"
            ])));
            return s._("This group and its members were added to the community {community}", [
                s._param("community", o("WAWebFormatParticipantNames").getCommunityNameInQuotationMarks(a, !t))
            ]);
        }
        if (S(a) && n != null) {
            return s._("{author} added this group and its members to a community", [
                s._param("author", r)
            ]);
        }
        return s._("This group and its members were added to a community");
    }
    M.displayName = `${M.name} [from ${i.id}]`;
    function w(templateParams, clickable, author, r, subtype) {
        const i = babelHelpers.arrayLikeToArray(templateParams).slice(0);
        const l = o("WAWebFormatParticipantNames").getFormattedGroupListForCommunity({
            asString: !clickable,
            groups: i,
            subtype
        });
        const length = o("WAWebPairList").unFlattenPairList(i).length;
        if (author != null && !v(author)) {
            if (l == null) {
                return s._("_j{\"*\":\"{author} added {count} groups\",\"_1\":\"{author} added 1 group\"}", [
                    s._plural(length, "count"),
                    s._param("author", r)
                ]);
            }
            return s._("_j{\"*\":\"{author} added the groups {groups}\",\"_1\":\"{author} added the group {groups}\"}", [
                s._plural(length),
                s._param("author", r),
                s._param("groups", l)
            ]);
        }
        if (l == null) {
            return s._("_j{\"*\":\"{count} groups were added\",\"_1\":\"1 group was added\"}", [
                s._plural(length, "count")
            ]);
        }
        if (clickable) {
            return o("WAWebStringsWithMultiplePluralParts").getCommunityGroupsAddedStringComponent({
                formattedNames: l,
                count: length
            }, length);
        }
        return o("WAWebStringsWithMultiplePluralParts").getCommunityGroupsAddedString({
            formattedNames: l
        }, length);
    }
    function A(templateParams, clickable, author, r) {
        const a = babelHelpers.arrayLikeToArray(templateParams).slice(0);
        const i = o("WAWebFormatParticipantNames").getFormattedGroupListForCommunity({
            asString: !clickable,
            groups: a
        });
        const length = o("WAWebPairList").unFlattenPairList(a).length;
        if (author != null && !v(author)) {
            if (i == null) {
                return s._("_j{\"*\":\"{author} removed {count} groups\",\"_1\":\"{author} removed 1 group\"}", [
                    s._plural(length, "count"),
                    s._param("author", r)
                ]);
            }
            return s._("_j{\"*\":\"{author} removed the groups {groups}\",\"_1\":\"{author} removed the group {groups}\"}", [
                s._plural(length),
                s._param("author", r),
                s._param("groups", i)
            ]);
        }
        if (i == null) {
            return s._("_j{\"*\":\"{count} groups were removed\",\"_1\":\"1 group was removed\"}", [
                s._plural(length, "count")
            ]);
        }
        if (clickable) {
            return o("WAWebStringsWithMultiplePluralParts").getCommunityGroupsRemovedStringComponent({
                formattedNames: i,
                count: length
            }, length);
        }
        return o("WAWebStringsWithMultiplePluralParts").getCommunityGroupsRemovedString({
            formattedNames: i
        }, length);
    }
    function F(templateParams, clickable, author, r) {
        const a = o("WAWebFormatParticipantNames").getFormattedCommunityNameWithAlternative({
            jid: templateParams[0],
            asString: !clickable,
            alternativeStringName: templateParams[1]
        });
        if (S(a)) {
            if (r != null) {
                return T(r);
            }
            if (v(author)) {
                return k();
            }
            return x();
        }
        if (v(author)) {
            return E(a);
        }
        if (r != null) {
            return I(r, a);
        }
        return D(a);
    }
    function O(e, t) {
        if (v(e)) {
            return s._("You joined from the community");
        }
        return s._("{author} joined from the community", [
            s._param("author", t)
        ]);
    }
    O.displayName = `${O.name} [from ${i.id}]`;
    function B(e, t, n) {
        if (e && e.length >= 2) {
            const r = o("WAWebFormatParticipantNames").getFormattedCommunityNameWithAlternative({
                jid: e[0],
                asString: !t,
                alternativeStringName: e[1]
            });
            if (S(r)) {
                return s._("{author} added you to this group and the community", [
                    s._param("author", n)
                ]);
            }
            o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                "generateAddNotification"
            ])));
            return s._("{author} added you to this group and the community {community}", [
                s._param("author", n),
                s._param("community", o("WAWebFormatParticipantNames").getCommunityNameInQuotationMarks(r, !t))
            ]);
        }
        return s._("{author} added you", [
            s._param("author", n)
        ]);
    }
    B.displayName = `${B.name} [from ${i.id}]`;
    function W(e, t, n, r) {
        let a;
        let i = false;
        if (e && e.length >= 3) {
            a = o("WAWebFormatParticipantNames").getFormattedNameIfExists(e[0], !t);
            if (a == null) {
                a = e[1];
            }
            if (e[2] === "true") {
                i = true;
            }
        }
        if (i) {
            if (v(n)) {
                if (S(a)) {
                    return s._("You were added");
                }
                o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                    "generateInviteAutoAddNotification: isMe, hasSubgroup"
                ])));
                return s._("You were added because you joined the group {group-name}", [
                    s._param("group-name", o("WAWebFormatParticipantNames").getCommunityNameInQuotationMarks(a, !t))
                ]);
            }
            return s._("{user_name} joined", [
                s._param("user_name", r)
            ]);
        }
        if (v(n)) {
            if (S(a)) {
                return s._("You were added to this community");
            }
            o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                "generateInviteAutoAddNotification: isMe, !inCommunity"
            ])));
            return s._("You were added to this community because you joined the group {group-name}", [
                s._param("group-name", o("WAWebFormatParticipantNames").getCommunityNameInQuotationMarks(a, !t))
            ]);
        }
        return s._("{user_name} joined", [
            s._param("user_name", r)
        ]);
    }
    W.displayName = `${W.name} [from ${i.id}]`;
    l.formatLinkNotifAsFbt = R;
    l.formatLinkNotification = L;
}, 226);