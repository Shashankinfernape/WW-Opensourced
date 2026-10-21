__d("WAWebCommandModel", [
    "WAWebBaseModel",
    "WAWebCommandGetters"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.name = o("WAWebBaseModel").prop();
            t.label = o("WAWebBaseModel").prop();
            t.type = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.delete = function() {
            e.prototype.delete.call(this);
            o("WAWebCommandGetters").clearCommandGetterCacheFor(this);
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "command";
    const s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
}, 98);