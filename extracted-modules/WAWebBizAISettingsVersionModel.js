__d("WAWebBizAISettingsVersionModel", [
    "WAWebBaseModel"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.version = o("WAWebBaseModel").prop(0);
            t.updatedAtMs = o("WAWebBaseModel").prop(0);
            t.stale = o("WAWebBaseModel").session(true);
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.markStale = function() {
            this.stale = true;
            if (this.hasObservers()) {
                this.getCollection().find(this.id);
            }
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "bizAiSettingsVersion";
    const s = o("WAWebBaseModel").defineModel(e);
    l.BizAISettingsVersionModel = s;
}, 98);