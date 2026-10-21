__d("WAWebChatThemeGatingUtils", [
    "WAWebABProps"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        return o("WAWebABProps").getABPropConfigValue("wa_web_chat_themes");
    }
    function s() {
        return o("WAWebABProps").getABPropConfigValue("wa_web_chat_themes_logging");
    }
    function u() {
        return e() && o("WAWebABProps").getABPropConfigValue("wa_web_chat_themes_solid_wallpaper_sync_encode");
    }
    function c() {
        return e() && o("WAWebABProps").getABPropConfigValue("wa_web_chat_themes_stock_wallpaper_sync_encode");
    }
    function d({ isNotification, isSentByMe, isVibrant }) {
        return isVibrant && isSentByMe && !isNotification;
    }
    function m({ isCallLink, isSentByMe, isVibrant }) {
        return isCallLink && isSentByMe && !isVibrant;
    }
    l.isChatThemesEnabled = e;
    l.isChatThemeLoggingEnabled = s;
    l.isSolidWallpaperSyncEncodeEnabled = u;
    l.isStockWallpaperSyncEncodeEnabled = c;
    l.shouldApplyVibrantOverride = d;
    l.shouldApplyCallLinkContrastOverride = m;
}, 98);