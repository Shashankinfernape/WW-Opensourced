__d("WAWebUserDisclosureModel", [
    "WAWebBaseModel",
    "WAWebUserDisclosureCollection"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.policyVersion = o("WAWebBaseModel").prop();
            t.privacyDisclosureModal = o("WAWebBaseModel").prop();
            t.endDate = o("WAWebBaseModel").prop();
            t.accepted = o("WAWebBaseModel").session();
            t.stage = o("WAWebBaseModel").session();
            t.lastUpdated = o("WAWebBaseModel").session();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const n = t.prototype;
        n.getCollection = function() {
            return o("WAWebUserDisclosureCollection").UserDisclosureCollection;
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "userDisclosure";
    const s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
}, 98);