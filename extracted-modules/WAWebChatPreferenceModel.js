__d("WAWebChatPreferenceModel", [
    "WAWebBaseModel",
    "WAWebChatPreferenceCollection",
    "WAWebChatPreferenceGetters",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    const e = "defaultPreference";
    const s = "comfortable";
    const u = true;
    const c = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.wallpaper = o("WAWebBaseModel").prop();
            t.saveToCameraRoll = o("WAWebBaseModel").prop();
            t.showDoodle = o("WAWebBaseModel").prop();
            t.spellcheck = o("WAWebBaseModel").prop();
            t.transformTextEmoji = o("WAWebBaseModel").prop();
            t.enterIsSend = o("WAWebBaseModel").prop();
            t.autoplayAnimatedImages = o("WAWebBaseModel").prop();
            t.hdMediaEnabled = o("WAWebBaseModel").prop();
            t.chatlistDensity = o("WAWebBaseModel").prop();
            t.chatlistShowParentName = o("WAWebBaseModel").prop();
            t.chatThemeId = o("WAWebBaseModel").prop();
            t.colorSchemeId = o("WAWebBaseModel").prop();
            t.stockWallpaperImageId = o("WAWebBaseModel").prop();
            t.wallpaperValue = o("WAWebBaseModel").prop();
            t.chatThemeValue = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.getCollection = function() {
            return r("WAWebChatPreferenceCollection");
        };
        t_prototype.delete = function() {
            e.prototype.delete.call(this);
            o("WAWebChatPreferenceGetters").clearChatPreferenceGetterCacheFor(this);
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    c.Proxy = "chatPreference";
    c.idClass = r("WAWebWid");
    c.allowedIds = [
        e
    ];
    const d = o("WAWebBaseModel").defineModel(c);
    l.DEFAULT_PREFERENCE = e;
    l.DEFAULT_CHATLIST_DENSITY = s;
    l.DEFAULT_CHATLIST_SHOW_PARENT_NAME = u;
    l.ChatPreference = d;
}, 98);