__d("useWAWebChatlistDensity", [
    "WAWebChatPreferenceGetters",
    "WAWebChatPreferenceModel",
    "WAWebChatlistAppearanceSettingsGating",
    "useWAWebChatPreferenceValues"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        const t = o("useWAWebChatPreferenceValues").useOptionalChatPreferenceValues(o("WAWebChatPreferenceModel").DEFAULT_PREFERENCE, [
            o("WAWebChatPreferenceGetters").getChatlistDensity
        ]) ?? [
            null
        ];
        const n = t[0];
        if (o("WAWebChatlistAppearanceSettingsGating").isChatlistAppearanceSettingsEnabled() && n != null) {
            return n;
        }
        return o("WAWebChatPreferenceModel").DEFAULT_CHATLIST_DENSITY;
    }
    function s() {
        const t = o("useWAWebChatPreferenceValues").useOptionalChatPreferenceValues(o("WAWebChatPreferenceModel").DEFAULT_PREFERENCE, [
            o("WAWebChatPreferenceGetters").getChatlistShowParentName
        ]) ?? [
            null
        ];
        const n = t[0];
        if (o("WAWebChatlistAppearanceSettingsGating").isChatlistAppearanceSettingsEnabled() && n != null) {
            return n;
        }
        return o("WAWebChatPreferenceModel").DEFAULT_CHATLIST_SHOW_PARENT_NAME;
    }
    l.useWAWebChatlistDensity = e;
    l.useWAWebChatlistShowParentName = s;
}, 98);