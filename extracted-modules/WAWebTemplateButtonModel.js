__d("WAWebTemplateButtonModel", [
    "WAWebBaseModel"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.displayText = o("WAWebBaseModel").prop();
            t.subtype = o("WAWebBaseModel").prop();
            t.url = o("WAWebBaseModel").prop();
            t.phoneNumber = o("WAWebBaseModel").prop();
            t.selectionId = o("WAWebBaseModel").prop();
            t.selected = o("WAWebBaseModel").session(false);
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "templateButton";
    const s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
}, 98);