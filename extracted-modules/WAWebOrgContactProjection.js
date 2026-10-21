__d("WAWebOrgContactProjection", [], function(t, n, r, o, a, i) {
    const e = Object.freeze({});
    function l(e, t, n) {
        const r = new Map(n.map((e, t)=>[
                e,
                t
            ]));
        const o = t.slice().sort((e, t)=>(r.get(e.orgId) ?? n.length) - (r.get(t.orgId) ?? n.length));
        const a = {};
        o.forEach((e)=>{
            a[e.orgId] = {
                memberTag: e.memberTag === "" ? null : e.memberTag,
                role: e.role ?? null
            };
        });
        return m(e, p(o), a, n);
    }
    function s(e, t, n) {
        const r = {};
        Object.keys(e.orgMetadata).forEach((n)=>{
            if (!t.has(n)) {
                r[n] = e.orgMetadata[n];
            }
        });
        return m(e.id, e, r, n);
    }
    function u(e) {
        const t = new Map;
        e.forEach((e)=>{
            const r = t.get(e.lid) ?? [];
            r.push(e);
            t.set(e.lid, r);
        });
        return t;
    }
    function c(e, t) {
        return m(e.id, e, e.orgMetadata, t);
    }
    function d(e, t) {
        const n = Object.keys(e);
        const r = Object.keys(t);
        const o = n.length === r.length && r.every((n)=>e[n] != null && e[n].memberTag === t[n].memberTag && e[n].role === t[n].role);
        if (o) {
            return e;
        }
        return t;
    }
    function m(t, n, r, o) {
        const l = Object.freeze(o.filter((e)=>r[e] != null));
        const s = Object.keys(r).length === 0 ? e : Object.freeze(babelHelpers.extends({}, r));
        const u = l[0] ?? null;
        const c = u == null ? null : s[u];
        return {
            id: t,
            memberName: n.memberName,
            orgIds: l,
            orgMetadata: s,
            phoneNumber: n.phoneNumber,
            primaryOrgId: u,
            primaryOrgMemberTag: c?.memberTag ?? null,
            username: n.username
        };
    }
    function p(e) {
        return {
            memberName: e.find((e)=>e.memberName !== "")?.memberName ?? "",
            phoneNumber: e.find((e)=>e.phoneNumber != null)?.phoneNumber ?? null,
            username: e.find((e)=>e.username != null)?.username ?? null
        };
    }
    i.projectOrgContact = l;
    i.withoutOrgMemberships = s;
    i.groupOrgContactRowsByLid = u;
    i.reorderOrgContactAttrs = c;
    i.reuseEqualMetadata = d;
}, 66);