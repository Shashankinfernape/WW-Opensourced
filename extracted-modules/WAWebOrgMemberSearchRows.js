__d("WAWebOrgMemberSearchRows", [
    "WALogger",
    "WAWebChatlistTypes",
    "WAWebContactCollection",
    "WAWebNonContactPushNameSearchModel",
    "WAWebOrgMemberSearchErrorRowLayout",
    "WAWebOrgMemberSearchLoadingRowLayout",
    "WAWebWidFactory",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = Object.freeze([]);
    function u(e, t, n) {
        if (e.length === 0) {
            return s;
        }
        const r = new Set;
        for (const a of t){
            r.add(o("WAWebNonContactPushNameSearchModel").canonicalDedupeId(a.id));
            const i = a.accountLid;
            if (i != null) {
                r.add(i.toString());
            }
        }
        for (const l of n){
            r.add(o("WAWebNonContactPushNameSearchModel").canonicalDedupeId(l.id));
        }
        if (r.size === 0) {
            return e;
        }
        const u = e.map((e)=>babelHelpers.extends({}, e, {
                members: e.members.filter((e)=>{
                    const t = m(e);
                    return t.length === 0 || !t.some((e)=>r.has(e));
                })
            })).filter((e)=>e.failure != null || e.loading || e.members.length > 0);
        if (u.length === 0) {
            return s;
        }
        return u;
    }
    function c(e) {
        const t = p(e);
        if (t == null) {
            return null;
        }
        return o("WAWebContactCollection").ContactCollection.gadd(t);
    }
    function d(e, t) {
        if (e.length === 0 || t.length === 0) {
            return e;
        }
        const n = new Set(t.flatMap((e)=>e.members).flatMap(m));
        if (n.size === 0) {
            return e;
        }
        return e.filter((e)=>!n.has(o("WAWebNonContactPushNameSearchModel").canonicalDedupeId(e.id)));
    }
    function m(e) {
        const t = p(e);
        if (t == null) {
            return [];
        }
        return [
            o("WAWebNonContactPushNameSearchModel").canonicalDedupeId(t),
            t.toString()
        ];
    }
    function p(t) {
        try {
            return o("WAWebWidFactory").createUserLidOrThrow(t.id, "lid");
        } catch (error) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[org-search] unparseable member lid"
            ]))).catching(r("getErrorSafe")(error)).sendLogs("org-member-search-bad-lid");
            return null;
        }
    }
    function _(e) {
        if (e.loading) {
            return {
                height: o("WAWebOrgMemberSearchLoadingRowLayout").ORG_MEMBER_SEARCH_LOADING_HEIGHT,
                itemKey: `org-members-loading-${e.orgId}`,
                type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_ORG_MEMBERS_LOADING
            };
        }
        const e_failure = e.failure;
        if (e_failure == null) {
            return null;
        }
        return {
            failure: e_failure,
            height: o("WAWebOrgMemberSearchErrorRowLayout").getOrgMemberSearchErrorHeight(e_failure),
            itemKey: `org-members-error-${e.orgId}`,
            type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_ORG_MEMBERS_ERROR
        };
    }
    l.EMPTY_ORG_RENDER_SECTIONS = s;
    l.dedupeOrgMemberSections = u;
    l.toOrgMemberContact = c;
    l.withoutOrgMembers = d;
    l.toOrgMemberLid = p;
    l.toOrgMemberStatusRow = _;
}, 98);