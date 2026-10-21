__d("WAWebChatThemeProvider.react", [
    "WAWebChatPreferenceCollection",
    "WAWebChatPreferenceGetters",
    "WAWebChatPreferenceModel",
    "WAWebChatThemeGatingUtils",
    "WAWebChatThemeModeContext",
    "WAWebFrontendChatGetters",
    "WAWebThemeContext",
    "react",
    "react-compiler-runtime",
    "useWAWebChatPreferenceValues",
    "useWAWebChatThemeModeValue",
    "useWAWebChatValues",
    "useWAWebResolvedChatTheme"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const a = o("react-compiler-runtime").c(17);
        const { chat, children } = e;
        let u;
        if (a[0] === Symbol.for("react.memo_cache_sentinel")) {
            u = r("WAWebChatPreferenceCollection").get(o("WAWebChatPreferenceModel").DEFAULT_PREFERENCE);
            a[0] = u;
        } else {
            u = a[0];
        }
        const d = o("useWAWebChatPreferenceValues").useOptionalChatPreferenceValues(u?.id, [
            o("WAWebChatPreferenceGetters").getChatThemeValue
        ]) ?? [
            null
        ];
        const m = d[0];
        const p = o("useWAWebChatValues").useOptionalChatValues(chat?.id, [
            o("WAWebFrontendChatGetters").getChatThemeValue
        ]) ?? [];
        const _ = p[0];
        const isDarkTheme = o("WAWebThemeContext").useIsDarkTheme();
        let g;
        if (a[1] === Symbol.for("react.memo_cache_sentinel")) {
            g = o("WAWebChatThemeGatingUtils").isChatThemesEnabled();
            a[1] = g;
        } else {
            g = a[1];
        }
        const isChatThemeEnabled = g;
        const y = isChatThemeEnabled ? _ : null;
        let C;
        if (a[2] !== m || a[3] !== y) {
            C = o("useWAWebResolvedChatTheme").resolveStoredColorAndTheme(y, m);
            a[2] = m;
            a[3] = y;
            a[4] = C;
        } else {
            C = a[4];
        }
        const b = C;
        const { storedChatThemeId, storedColorSchemeId } = b;
        let R;
        if (a[5] !== isDarkTheme || a[6] !== storedChatThemeId || a[7] !== storedColorSchemeId) {
            R = {
                isChatThemeEnabled,
                storedColorSchemeId,
                storedChatThemeId,
                isDarkTheme
            };
            a[5] = isDarkTheme;
            a[6] = storedChatThemeId;
            a[7] = storedColorSchemeId;
            a[8] = R;
        } else {
            R = a[8];
        }
        const L = o("useWAWebResolvedChatTheme").useResolvedChatTheme(R);
        const { bubbleStyle, isMinimalMode, isVibrant, wallpaperStyle } = L;
        let D;
        if (a[9] !== bubbleStyle || a[10] !== isMinimalMode || a[11] !== isVibrant || a[12] !== wallpaperStyle) {
            D = {
                bubbleStyle,
                isMinimalMode,
                isVibrant,
                wallpaperStyle
            };
            a[9] = bubbleStyle;
            a[10] = isMinimalMode;
            a[11] = isVibrant;
            a[12] = wallpaperStyle;
            a[13] = D;
        } else {
            D = a[13];
        }
        const x = r("useWAWebChatThemeModeValue")(D);
        let $;
        if (a[14] !== children || a[15] !== x) {
            const Component = r("WAWebChatThemeModeContext").Provider;
            $ = <Component value={x}>{children}</Component>;
            a[14] = children;
            a[15] = x;
            a[16] = $;
        } else {
            $ = a[16];
        }
        return $;
    }
    l.default = u;
}, 98);