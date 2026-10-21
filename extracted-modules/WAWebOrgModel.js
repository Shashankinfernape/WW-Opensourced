__d("WAWebOrgModel", [
    "WAWebBaseModel",
    "WAWebOrgCollection"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.name = o("WAWebBaseModel").prop();
            t.description = o("WAWebBaseModel").prop();
            t.memberCount = o("WAWebBaseModel").prop();
            t.memberTagOptions = o("WAWebBaseModel").prop();
            t.iconHandle = o("WAWebBaseModel").prop();
            t.iconThumbUrl = o("WAWebBaseModel").prop();
            t.iconFullUrl = o("WAWebBaseModel").prop();
            t.viewerRole = o("WAWebBaseModel").prop();
            t.managedGroups = o("WAWebBaseModel").prop();
            t.managedChannels = o("WAWebBaseModel").prop();
            t.directoryIsComplete = o("WAWebBaseModel").prop();
            t.isMemberDirectoryEnabled = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const n = t.prototype;
        n.getCollection = function() {
            return o("WAWebOrgCollection").OrgCollection;
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "org";
    const s = o("WAWebBaseModel").defineModel(e);
    l.Org = s;
}, 98);