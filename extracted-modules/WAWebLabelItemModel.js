__d("WAWebLabelItemModel", [
    "WAWebBaseModel"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.parentType = o("WAWebBaseModel").prop();
            t.parentId = o("WAWebBaseModel").prop();
            t.labelId = o("WAWebBaseModel").prop();
            t.detectedOutcomeOriginalLabelPredefinedId = o("WAWebBaseModel").prop();
            t.hasManualAssociation = o("WAWebBaseModel").prop(false);
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "labelItem";
    const s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
}, 98);