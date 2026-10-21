__d("WAWebAgentModel", [
    "WAWebAgentCollection",
    "WAWebBaseModel"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.deviceId = o("WAWebBaseModel").prop();
            t.name = o("WAWebBaseModel").prop();
            t.isDeleted = o("WAWebBaseModel").prop(false);
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.getCollection = function() {
            return o("WAWebAgentCollection").AgentCollection;
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "agent";
    const s = o("WAWebBaseModel").defineModel(e);
    l.Agent = s;
}, 98);