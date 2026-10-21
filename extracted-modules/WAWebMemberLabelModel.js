__d("WAWebMemberLabelModel", [
    "WAWebBaseModel",
    "WAWebMemberLabelKey"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.label = o("WAWebBaseModel").prop();
            t.lastEditTimestamp = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "memberLabel";
    e.idClass = r("WAWebMemberLabelKey");
    const s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
}, 98);