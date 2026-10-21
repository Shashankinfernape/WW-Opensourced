__d("WAWebSubscriptionModel", [
    "WAWebBaseModel"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.isDeactivated = o("WAWebBaseModel").prop(false);
            t.isAutoRenewing = o("WAWebBaseModel").prop(false);
            t.expirationDate = o("WAWebBaseModel").prop();
            t.creationTime = o("WAWebBaseModel").prop();
            t.newMessageCappingEnabled = o("WAWebBaseModel").prop();
            t.tier = o("WAWebBaseModel").prop();
            t.status = o("WAWebBaseModel").prop();
            t.source = o("WAWebBaseModel").prop();
            t.isPlatformChanged = o("WAWebBaseModel").prop();
            t.startTime = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const n = t.prototype;
        n.equal = function(t) {
            if (t) {
                return t.id === this.id && t.isAutoRenewing === this.isAutoRenewing && t.isDeactivated === this.isDeactivated && t.expirationDate === this.expirationDate && t.creationTime === this.creationTime && t.newMessageCappingEnabled === this.newMessageCappingEnabled && t.tier === this.tier && t.status === this.status && t.source === this.source && t.isPlatformChanged === this.isPlatformChanged && t.startTime === this.startTime;
            }
            return false;
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "subscription";
    const s = o("WAWebBaseModel").defineModel(e);
    l.Subscription = s;
}, 98);