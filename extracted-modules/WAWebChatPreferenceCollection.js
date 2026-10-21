__d("WAWebChatPreferenceCollection", [
    "WAWebBaseCachePolicy",
    "WAWebBaseCollection",
    "WAWebChatPreferenceGetters",
    "WAWebChatPreferenceModel",
    "WAWebChatThemeValue",
    "WAWebUserPrefsKeys",
    "WAWebWallpaper",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    const e = {
        id: o("WAWebChatPreferenceModel").DEFAULT_PREFERENCE,
        wallpaper: o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER,
        saveToCameraRoll: true,
        showDoodle: true,
        spellcheck: true,
        transformTextEmoji: true,
        enterIsSend: true,
        autoplayAnimatedImages: true,
        hdMediaEnabled: false,
        wallpaperValue: {
            type: "default",
            isDoodleEnabled: true
        },
        chatThemeValue: {
            chatThemeId: null,
            colorSchemeId: null
        }
    };
    function s(e) {
        const a = e;
        return babelHelpers.extends({}, e, {
            wallpaperValue: o("WAWebChatThemeValue").migrateStoredSolidWallpaper(a.wallpaperValue) ?? a.wallpaperValue ?? o("WAWebChatThemeValue").wallpaperValueFromFlat({
                wallpaper: typeof a.wallpaper === "string" ? a.wallpaper : null,
                showDoodle: typeof a.showDoodle === "boolean" ? a.showDoodle : null,
                stockWallpaperImageId: typeof a.stockWallpaperImageId === "string" ? a.stockWallpaperImageId : null
            }),
            chatThemeValue: a.chatThemeValue ?? o("WAWebChatThemeValue").chatThemeValueFromFlat({
                chatThemeId: typeof a.chatThemeId === "string" ? a.chatThemeId : null,
                colorSchemeId: typeof a.colorSchemeId === "string" ? a.colorSchemeId : null
            })
        });
    }
    const u = ((t)=>{
        function n() {
            return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.initializeFromCache = function(n) {
            const t = (n || []).map(s);
            this.add([
                e
            ].concat(t), {
                merge: true
            });
        };
        n_prototype.get = function(n) {
            return t.prototype.get.call(this, n) || t.prototype.get.call(this, o("WAWebChatPreferenceModel").DEFAULT_PREFERENCE);
        };
        n_prototype.getDefault = function() {
            return r("nullthrows")(t.prototype.get.call(this, o("WAWebChatPreferenceModel").DEFAULT_PREFERENCE));
        };
        n_prototype.remove = function(n, r) {
            const e = t.prototype.remove.call(this, n, r);
            e.forEach((e)=>{
                if (e != null) {
                    o("WAWebChatPreferenceGetters").clearChatPreferenceGetterCacheFor(e);
                }
            });
            return e;
        };
        n_prototype.reset = function() {
            this.forEach(o("WAWebChatPreferenceGetters").clearChatPreferenceGetterCacheFor);
            t.prototype.reset.call(this);
        };
        n_prototype.delete = function() {
            t.prototype.delete.call(this);
            this.add(e);
        };
        return n;
    })(o("WAWebBaseCollection").BaseCollection);
    u.model = o("WAWebChatPreferenceModel").ChatPreference;
    u.cachePolicy = {
        id: o("WAWebUserPrefsKeys").COLLECTIONS_KEYS.CHAT_PREFERENCE_COLLECTION,
        policy: o("WAWebBaseCachePolicy").CACHE_POLICY.LOAD,
        delay: 1000
    };
    const c = new u;
    l.default = c;
}, 98);