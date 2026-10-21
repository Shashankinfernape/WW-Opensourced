__d("WAWebMentionsPluginUtil", [
    "WALogger",
    "WAWebContactCollection",
    "WAWebContactCollectionUtils",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataCollection",
    "WAWebL10N",
    "WAWebLidMigrationUtils",
    "WAWebOrgContactCollection",
    "WAWebOrgGatingUtils",
    "WAWebOrgMemberDisplayName",
    "WAWebOrgMemberLidEligibility",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u = false;
    let c = false;
    function d(e, t, n = h) {
        const o = (t == null ? undefined : t.participants.map(({ contact })=>contact)) ?? [];
        const a = (e || "").toLowerCase();
        const i = o.filter((e)=>p(a, e, n));
        return i;
    }
    function m(t, n) {
        if (n.parentGroup == null) {
            if (!u) {
                u = true;
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "parentGroup missing!"
                ]))).sendLogs("parentGroup not defined while searching for @mention subgroup suggestions");
            }
            return [];
        }
        const a = r("WAWebGroupMetadataCollection").get(n.parentGroup);
        if (a == null) {
            if (!c) {
                c = true;
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "parentGroup missing!"
                ]))).sendLogs("parentGroup not found in GroupMetadataCollection while searching for @mention subgroup suggestions");
            }
            return [];
        }
        const i = a.getSubgroupsMetadata();
        const l = (t || "").toLowerCase();
        const d = i.filter((e)=>{
            if (n.id.equals(e.id) || e.hiddenSubgroup === true) {
                return false;
            }
            return _(l, e.subject.toLowerCase());
        }).sort((e, t)=>e.subject.localeCompare(t.subject, r("WAWebL10N").getFullLocale(), {
                ignorePunctuation: true
            }));
        return d;
    }
    function p(e, t, n = h) {
        if (o("WAWebContactGetters").getIsMe(t)) {
            return false;
        }
        const a = [
            o("WAWebFrontendContactGetters").getSearchName(t) || o("WAWebFrontendContactGetters").getFormattedName(t)
        ];
        const i = o("WAWebContactGetters").getNotifyName(t);
        if (!o("WAWebFrontendContactGetters").getIsMyContact(t) && !r("isStringNullOrEmpty")(i)) {
            a.push(i.toLowerCase());
        }
        const l = n(t);
        if (l != null) {
            a.push(l.toLowerCase());
        }
        const s = o("WAWebUsernameTypes").serializeMaybeUsername(o("WAWebFrontendContactGetters").getUsername(t));
        const u = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled();
        if (!r("isStringNullOrEmpty")(s) && u) {
            a.push(s.toLowerCase());
        }
        return a.some((t)=>_(e, t));
    }
    function _(e, t) {
        let n = -1;
        do {
            if (t.indexOf(e, n + 1) === n + 1) {
                return true;
            }
        }while ((n = t.indexOf(" ", n + 1)) !== -1)
        return false;
    }
    function f(e) {
        const t = new Set;
        e.participants.forEach((e)=>{
            const n = e.contact.id;
            t.add(n.toString());
            const r = o("WAWebLidMigrationUtils").toLid(n);
            const a = o("WAWebLidMigrationUtils").toPn(n);
            if (r != null) {
                t.add(r.toString());
            }
            if (a != null) {
                t.add(a.toString());
            }
        });
        return o("WAWebContactCollectionUtils").getFilteredContacts(o("WAWebContactCollection").ContactCollection, {
            filterFn: function({ id }) {
                if (t.has(id.toString())) {
                    return false;
                }
                const r = o("WAWebLidMigrationUtils").toLid(id);
                const a = o("WAWebLidMigrationUtils").toPn(id);
                return !(r != null && t.has(r.toString()) || a != null && t.has(a.toString()));
            }
        });
    }
    function g(e, t) {
        const n = (e || "").toLowerCase();
        return t.filter((e)=>p(n, e));
    }
    function h(e) {
        const t = o("WAWebContactGetters").getIsMe(e) ? null : o("WAWebOrgMemberLidEligibility").getWAWebOrgMemberLid(e.id);
        if (t == null || !o("WAWebOrgGatingUtils").isOrgInfoDisplayEnabled()) {
            return null;
        }
        const n = o("WAWebOrgContactCollection").OrgContactCollection.get(t.user);
        if (n?.primaryOrgId == null) {
            return null;
        }
        const n_memberName = n.memberName;
        return o("WAWebOrgMemberDisplayName").resolveWAWebOrgMemberDisplayName({
            isBusiness: o("WAWebContactGetters").getIsBusiness(e),
            memberName: n_memberName,
            pushName: o("WAWebContactGetters").getPushname(e),
            savedName: o("WAWebContactGetters").getName(e),
            verifiedLevel: o("WAWebContactGetters").getVerifiedLevel(e),
            verifiedName: o("WAWebContactGetters").getVerifiedName(e)
        });
    }
    l.getUserResults = d;
    l.getSubgroupResults = m;
    l.getNonParticipantCandidates = f;
    l.filterContactsByQuery = g;
    l.getMentionOrgMemberDisplayName = h;
}, 98);