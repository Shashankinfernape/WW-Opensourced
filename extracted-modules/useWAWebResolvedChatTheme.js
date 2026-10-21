__d("useWAWebResolvedChatTheme", [
    "WAWebChatThemeEnums",
    "WAWebChatThemeValue",
    "WAWebComposeChatThemeStyle",
    "WAWebUseChatTheme",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const a = o("WAWebChatThemeValue").resolveEffectiveChatThemeValue(e, t);
        return {
            storedColorSchemeId: a?.colorSchemeId ?? null,
            storedChatThemeId: a?.chatThemeId ?? null
        };
    }
    function s(e) {
        const t = o("react-compiler-runtime").c(14);
        const { isChatThemeEnabled, isDarkTheme, storedChatThemeId, storedColorSchemeId } = e;
        const chatThemeId = storedChatThemeId === undefined ? null : storedChatThemeId;
        const wallpaperThemeId = isChatThemeEnabled ? o("WAWebComposeChatThemeStyle").resolveWallpaperThemeId(chatThemeId, storedColorSchemeId) : null;
        const bubbleColorSchemeId = isChatThemeEnabled && storedColorSchemeId != null ? storedColorSchemeId : null;
        let c;
        if (t[0] !== isChatThemeEnabled) {
            c = {
                isChatThemeEnabled
            };
            t[0] = isChatThemeEnabled;
            t[1] = c;
        } else {
            c = t[1];
        }
        const chatThemeModule = o("WAWebUseChatTheme").useLazyChatThemeDefinitions(c);
        const themeMode = isDarkTheme ? "dark" : "light";
        const p = o("WAWebComposeChatThemeStyle").composeChatThemeStyleSplit({
            bubbleColorSchemeId,
            chatThemeModule,
            themeMode,
            wallpaperThemeId
        });
        const { bubbleStyle, wallpaperStyle } = p;
        const effectiveOutgoingScheme = bubbleColorSchemeId ?? wallpaperThemeId;
        const isVibrant = effectiveOutgoingScheme != null && o("WAWebChatThemeEnums").hasVibrantBubbleColor(effectiveOutgoingScheme);
        const isMinimalScheme = chatThemeModule != null && wallpaperThemeId != null && chatThemeModule.isMinimalScheme(wallpaperThemeId);
        let C;
        if (t[2] !== isChatThemeEnabled || t[3] !== chatThemeId || t[4] !== storedColorSchemeId) {
            C = isChatThemeEnabled && o("WAWebChatThemeValue").isMinimalChatTheme({
                chatThemeId,
                colorSchemeId: storedColorSchemeId
            });
            t[2] = isChatThemeEnabled;
            t[3] = chatThemeId;
            t[4] = storedColorSchemeId;
            t[5] = C;
        } else {
            C = t[5];
        }
        const isMinimalMode = C;
        const isThemeResolved = !isChatThemeEnabled || chatThemeModule != null;
        let S;
        if (t[6] !== bubbleStyle || t[7] !== effectiveOutgoingScheme || t[8] !== isMinimalMode || t[9] !== isMinimalScheme || t[10] !== isVibrant || t[11] !== isThemeResolved || t[12] !== wallpaperStyle) {
            S = {
                wallpaperStyle,
                bubbleStyle,
                isMinimalScheme,
                isMinimalMode,
                isVibrant,
                effectiveOutgoingScheme,
                isThemeResolved
            };
            t[6] = bubbleStyle;
            t[7] = effectiveOutgoingScheme;
            t[8] = isMinimalMode;
            t[9] = isMinimalScheme;
            t[10] = isVibrant;
            t[11] = isThemeResolved;
            t[12] = wallpaperStyle;
            t[13] = S;
        } else {
            S = t[13];
        }
        return S;
    }
    l.resolveStoredColorAndTheme = e;
    l.useResolvedChatTheme = s;
}, 98);