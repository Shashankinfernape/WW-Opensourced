__d("WAWebOrgCollection", [
    "WAWebBaseCollection",
    "WAWebBoolFunc",
    "WAWebCollectionUtils",
    "WAWebOrgGetters",
    "WAWebOrgModel",
    "WAWebOrgOrder"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.allOrganizations = o("WAWebCollectionUtils").aggregated(o("WAWebBoolFunc").returnTrue);
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const n = t.prototype;
        n.remove = function(n, r) {
            const t = e.prototype.remove.call(this, n, r);
            t.forEach((e)=>{
                if (e != null) {
                    o("WAWebOrgGetters").clearOrgGetterCacheFor(e);
                }
            });
            return t;
        };
        n.reset = function() {
            this.forEach((e)=>o("WAWebOrgGetters").clearOrgGetterCacheFor(e));
            e.prototype.reset.call(this);
        };
        n.addRows = function(t) {
            return this.add(t.map(u), {
                merge: true
            });
        };
        n.getOrderedOrgs = function() {
            return o("WAWebOrgOrder").sortOrgsForDisplay(this.getModelsArray());
        };
        n.getViewerPrimaryOrgId = function() {
            return this.getOrderedOrgs()[0]?.id ?? null;
        };
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebOrgModel").Org;
    const s = new e;
    function u(e) {
        return {
            description: e.description ?? null,
            directoryIsComplete: e.directoryIsComplete ?? null,
            iconFullUrl: e.iconFullUrl ?? null,
            iconHandle: e.iconHandle ?? null,
            iconThumbUrl: e.iconThumbUrl ?? null,
            id: e.orgId,
            isMemberDirectoryEnabled: e.isMemberDirectoryEnabled ?? null,
            managedChannels: e.managedChannels ?? null,
            managedGroups: e.managedGroups ?? null,
            memberCount: e.memberCount ?? null,
            memberTagOptions: e.memberTagOptions ?? null,
            name: e.name,
            viewerRole: e.viewerRole ?? null
        };
    }
    l.OrgCollection = s;
}, 98);