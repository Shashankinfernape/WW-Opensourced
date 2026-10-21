__d("WAWebChatPreferenceGetters", [
    "WAWebGetters",
    "WAWebGettersCaches"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createChatPreferenceCache
    });
    const { clearCacheFor, field } = e;
    const c = clearCacheFor;
    const d = field("autoplayAnimatedImages");
    const m = field("chatThemeValue");
    const p = field("chatlistDensity");
    const _ = field("chatlistShowParentName");
    const f = field("enterIsSend");
    const g = field("hdMediaEnabled");
    const h = field("spellcheck");
    const y = field("transformTextEmoji");
    const C = field("wallpaperValue");
    l.clearChatPreferenceGetterCacheFor = c;
    l.getAutoplayAnimatedImages = d;
    l.getChatThemeValue = m;
    l.getChatlistDensity = p;
    l.getChatlistShowParentName = _;
    l.getEnterIsSend = f;
    l.getHdMediaEnabled = g;
    l.getSpellcheck = h;
    l.getTransformTextEmoji = y;
    l.getWallpaperValue = C;
}, 98);