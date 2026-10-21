__d("WAWebFeatureFlagModel", [
    "WAWebBaseModel"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.enabled = o("WAWebBaseModel").prop(false);
            t.expirationTime = o("WAWebBaseModel").prop();
            t.limit = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "featureFlag";
    const s = o("WAWebBaseModel").defineModel(e);
    l.FeatureFlag = s;
}, 98);