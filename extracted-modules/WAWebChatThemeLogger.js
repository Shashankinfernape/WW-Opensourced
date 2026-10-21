__d("WAWebChatThemeLogger", [
    "WAWebChatListWallpaperWamEvent",
    "WAWebChatThemeScreenWamEvent",
    "WAWebChatThreadWallpaperWamEvent",
    "WAWebChatWallpaperWamEvent",
    "WAWebGetMessageChatTypeFromWid"
], function(t, n, r, o, a, i, l) {
    function e({ appearanceType, chatThemeChangeApplied, chatThemeId, chatThemeSource, chatWallpaperType, colorSchemeId, wallpaperId }) {
        new (o("WAWebChatThemeScreenWamEvent")).ChatThemeScreenWamEvent({
            appearanceType,
            chatThemeChangeApplied,
            chatThemeId,
            chatThemeSource,
            chatWallpaperType,
            colorSchemeId,
            wallpaperId
        }).commit();
    }
    function s({ appearanceType, chatWallpaperChangeApplied, chatWallpaperSource, chatWallpaperType, chatWallpaperVisit }) {
        new (o("WAWebChatWallpaperWamEvent")).ChatWallpaperWamEvent({
            appearanceType,
            chatWallpaperChangeApplied,
            chatWallpaperSource,
            chatWallpaperType,
            chatWallpaperVisit
        }).commit();
    }
    function u({ appearanceType, belongsToCommunity, chatThemeId, chatThemeSource, chatWid, colorSchemeId, threadId, wallpaperApplied, wallpaperId }) {
        new (o("WAWebChatThreadWallpaperWamEvent")).ChatThreadWallpaperWamEvent({
            appearanceType,
            belongsToCommunity,
            chatThemeId,
            chatThemeSource,
            chatType: o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(chatWid),
            colorSchemeId,
            threadId,
            wallpaperApplied,
            wallpaperId
        }).commit();
    }
    function c({ anyWallpaperApplied, chatThemesEnabled }) {
        new (o("WAWebChatListWallpaperWamEvent")).ChatListWallpaperWamEvent({
            anyWallpaperApplied,
            chatThemesEnabled
        }).commit();
    }
    l.logChatThemeScreenEvent = e;
    l.logChatWallpaperEvent = s;
    l.logChatThreadWallpaperEvent = u;
    l.logChatListWallpaperEvent = c;
}, 98);