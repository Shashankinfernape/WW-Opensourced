__d("WAWebOrgContactModel", [
    "WAWebBaseModel",
    "WAWebOrgContactCollection"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.memberName = o("WAWebBaseModel").prop();
            t.username = o("WAWebBaseModel").prop();
            t.phoneNumber = o("WAWebBaseModel").prop();
            t.orgIds = o("WAWebBaseModel").prop();
            t.orgMetadata = o("WAWebBaseModel").prop();
            t.primaryOrgId = o("WAWebBaseModel").prop();
            t.primaryOrgMemberTag = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const n = t.prototype;
        n.getCollection = function() {
            return o("WAWebOrgContactCollection").OrgContactCollection;
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "orgContact";
    const s = o("WAWebBaseModel").defineModel(e);
    l.OrgContact = s;
}, 98);