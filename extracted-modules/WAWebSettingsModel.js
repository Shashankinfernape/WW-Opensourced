__d("WAWebSettingsModel", [
    "WAWebAccountLinkingConstants",
    "WAWebBaseModel",
    "WAWebSettingsGetters"
], function(t, n, r, o, a, i, l) {
    const archive = {
        classic: false,
        enabled: false
    };
    const s = ((t)=>{
        function n(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.id = o("WAWebBaseModel").prop();
            e.archive = o("WAWebBaseModel").prop();
            e.isFBLinked = o("WAWebBaseModel").prop();
            e.isIGLinked = o("WAWebBaseModel").prop();
            e.linkState = o("WAWebBaseModel").prop();
            e.shareToFB = o("WAWebBaseModel").prop();
            e.shareToIG = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.delete = function() {
            this.set({
                archive,
                isFBLinked: false,
                isIGLinked: false,
                linkState: o("WAWebAccountLinkingConstants").AccountLinkState.Unlinked,
                shareToFB: false,
                shareToIG: false
            });
            t.prototype.delete.call(this);
            o("WAWebSettingsGetters").clearSettingsGetterCacheFor(this);
        };
        return n;
    })(o("WAWebBaseModel").BaseModel);
    s.Proxy = "settings";
    const u = o("WAWebBaseModel").defineModel(s);
    const c = new u({
        id: "default_settings_id",
        archive,
        isFBLinked: false,
        isIGLinked: false,
        linkState: o("WAWebAccountLinkingConstants").AccountLinkState.Unlinked,
        shareToFB: false,
        shareToIG: false
    });
    l.default = c;
}, 98);