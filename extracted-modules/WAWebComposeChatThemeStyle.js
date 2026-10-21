__d("WAWebComposeChatThemeStyle", [
    "WAWebChatThemeEnums",
    "WAWebChatThemeValue"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        if (e === undefined) {
            return t;
        }
        return s(e, t);
    }
    function s(e, t) {
        if (e == null) {
            return null;
        }
        if (o("WAWebChatThemeValue").isMinimalScheme(e) || t == null || t === o("WAWebChatThemeEnums").Theme.Default) {
            return e;
        }
        return t;
    }
    function u({ bubbleColorSchemeId, chatThemeModule, themeMode, wallpaperThemeId }) {
        if (chatThemeModule == null) {
            return {
                wallpaperStyle: null,
                bubbleStyle: null
            };
        }
        if (wallpaperThemeId == null) {
            const bubbleStyle = bubbleColorSchemeId != null ? chatThemeModule.getBubbleTheme(bubbleColorSchemeId, themeMode) : null;
            return {
                wallpaperStyle: null,
                bubbleStyle
            };
        }
        const wallpaperStyle = chatThemeModule.getChatTheme(wallpaperThemeId, themeMode);
        if (bubbleColorSchemeId == null || bubbleColorSchemeId === wallpaperThemeId) {
            return {
                wallpaperStyle,
                bubbleStyle: null
            };
        }
        return {
            wallpaperStyle,
            bubbleStyle: chatThemeModule.getBubbleTheme(bubbleColorSchemeId, themeMode)
        };
    }
    l.resolvePreviewWallpaperThemeId = e;
    l.resolveWallpaperThemeId = s;
    l.composeChatThemeStyleSplit = u;
}, 98);