__d("WAWebAddOnModel", [
    "WAWebBaseModel",
    "WAWebModelUtils"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.ack = o("WAWebModelUtils").prop();
            t.isSendFailure = o("WAWebModelUtils").session();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebBaseModel").BaseModel);
    l.AddOnBaseModel = e;
}, 98);