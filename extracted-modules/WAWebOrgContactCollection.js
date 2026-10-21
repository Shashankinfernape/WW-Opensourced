__d("WAWebOrgContactCollection", [
    "WAWebBaseCollection",
    "WAWebOrgContactGetters",
    "WAWebOrgContactModel",
    "WAWebOrgContactProjection"
], function(t, n, r, o, a, i, l) {
    const e = "org_contacts_applied";
    const s = ((t)=>{
        function n() {
            return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        const r = n.prototype;
        r.remove = function(n, r) {
            const e = t.prototype.remove.call(this, n, r);
            e.forEach((e)=>{
                if (e != null) {
                    o("WAWebOrgContactGetters").clearOrgContactGetterCacheFor(e);
                }
            });
            return e;
        };
        r.reset = function() {
            this.forEach((e)=>o("WAWebOrgContactGetters").clearOrgContactGetterCacheFor(e));
            t.prototype.reset.call(this);
        };
        r.getOrgContactsForOrg = function(t) {
            return this.getModelsArray().filter((e)=>e.orgMetadata[t] != null).sort(m);
        };
        r.applyAttrs = function(t, n) {
            const e = this.get(t.id);
            if (e == null) {
                this.add(t, {
                    silent: n?.silent === true
                });
                return;
            }
            e.set(babelHelpers.extends({}, t, {
                orgIds: d(e.orgIds, t.orgIds) ? e.orgIds : t.orgIds,
                orgMetadata: o("WAWebOrgContactProjection").reuseEqualMetadata(e.orgMetadata, t.orgMetadata)
            }));
        };
        r.notifyApplied = function(n, r) {
            const t = {
                lids: Array.from(new Set(r)),
                orgIds: Array.from(new Set(n))
            };
            this.trigger(e, t);
        };
        return n;
    })(o("WAWebBaseCollection").BaseCollection);
    s.model = o("WAWebOrgContactModel").OrgContact;
    const u = new s;
    function c(e) {
        return {
            id: e.id,
            memberName: e.memberName,
            orgIds: e.orgIds,
            orgMetadata: e.orgMetadata,
            phoneNumber: e.phoneNumber,
            primaryOrgId: e.primaryOrgId,
            primaryOrgMemberTag: e.primaryOrgMemberTag,
            username: e.username
        };
    }
    function d(e, t) {
        return e.length === t.length && e.every((e, n)=>e === t[n]);
    }
    function m(e, t) {
        const n = e.memberName.toLowerCase().localeCompare(t.memberName.toLowerCase());
        if (n !== 0) {
            return n;
        }
        return e.id.localeCompare(t.id);
    }
    l.ORG_CONTACTS_APPLIED = e;
    l.OrgContactCollection = u;
    l.toOrgContactAttrs = c;
}, 98);