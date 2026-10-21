__d("WAWebUnattributedMessageModel", [
    "WAWebBaseModel",
    "WAWebUnattributedMessageCollection"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.deviceId = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.getCollection = function() {
            return o("WAWebUnattributedMessageCollection").UnattributedMessageCollection;
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "unattributed_message";
    const s = o("WAWebBaseModel").defineModel(e);
    l.UnattributedMessage = s;
}, 98);