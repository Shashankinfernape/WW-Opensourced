__d("useWAWebWallpaperState", [
    "WALogger",
    "WAWebChatPreferenceGetters",
    "WAWebChatThemeEvents",
    "WAWebChatThemeGatingUtils",
    "WAWebChatThemeValue",
    "WAWebChatWallpaperRenderState",
    "WAWebFrontendChatGetters",
    "WAWebThemeContext",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "useWAWebChatPreferenceValues",
    "useWAWebChatValues",
    "useWAWebResolvedChatTheme"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const { useEffect, useState } = u;
    function m(e) {
        const r = o("react-compiler-runtime").c(42);
        const { chat, chatPreference, showPreview } = e;
        let s;
        if (r[0] === Symbol.for("react.memo_cache_sentinel")) {
            s = [
                o("WAWebChatPreferenceGetters").getWallpaperValue,
                o("WAWebChatPreferenceGetters").getChatThemeValue
            ];
            r[0] = s;
        } else {
            s = r[0];
        }
        const u = o("useWAWebChatPreferenceValues").useChatPreferenceValues(chatPreference.id, s);
        const m = u[0];
        const _ = u[1];
        const f = o("useWAWebChatValues").useOptionalChatValues(chat?.id, [
            o("WAWebFrontendChatGetters").getWallpaperValue
        ]) ?? [];
        const g = f[0];
        const h = o("useWAWebChatValues").useOptionalChatValues(chat?.id, [
            o("WAWebFrontendChatGetters").getChatThemeValue
        ]) ?? [];
        const y = h[0];
        let C;
        if (r[1] === Symbol.for("react.memo_cache_sentinel")) {
            C = o("WAWebChatThemeGatingUtils").isChatThemesEnabled();
            r[1] = C;
        } else {
            C = r[1];
        }
        const isChatThemeEnabled = C;
        const isDarkTheme = o("WAWebThemeContext").useIsDarkTheme();
        let S;
        let R;
        if (r[2] !== chat) {
            S = function() {
                if (chat != null && isChatThemeEnabled) {
                    chat.persistDerivedThemeValuesIfNeeded().catch(p);
                }
            };
            R = [
                chat,
                isChatThemeEnabled
            ];
            r[2] = chat;
            r[3] = S;
            r[4] = R;
        } else {
            S = r[3];
            R = r[4];
        }
        useEffect(S, R);
        const L = isChatThemeEnabled ? y : null;
        let E;
        if (r[5] !== _ || r[6] !== L) {
            E = o("useWAWebResolvedChatTheme").resolveStoredColorAndTheme(L, _);
            r[5] = _;
            r[6] = L;
            r[7] = E;
        } else {
            E = r[7];
        }
        const k = E;
        const { storedChatThemeId, storedColorSchemeId } = k;
        let D;
        if (r[8] !== isDarkTheme || r[9] !== storedChatThemeId || r[10] !== storedColorSchemeId) {
            D = {
                isChatThemeEnabled,
                storedColorSchemeId,
                storedChatThemeId,
                isDarkTheme
            };
            r[8] = isDarkTheme;
            r[9] = storedChatThemeId;
            r[10] = storedColorSchemeId;
            r[11] = D;
        } else {
            D = r[11];
        }
        const x = o("useWAWebResolvedChatTheme").useResolvedChatTheme(D);
        const { bubbleStyle, effectiveOutgoingScheme, isMinimalMode, isMinimalScheme, isThemeResolved, isVibrant, wallpaperStyle } = x;
        const O = useState(null);
        const wallpaperPreview = O[0];
        const W = O[1];
        let q;
        if (r[12] === Symbol.for("react.memo_cache_sentinel")) {
            q = function(t) {
                W(t.hex ?? null);
            };
            r[12] = q;
        } else {
            q = r[12];
        }
        o("WAWebChatThemeEvents").useWallpaperPreviewListener(q);
        const U = showPreview == null && isChatThemeEnabled ? g : null;
        let V;
        if (r[13] !== m || r[14] !== U) {
            V = o("WAWebChatThemeValue").isWallpaperOverride(U) ? U : m;
            r[13] = m;
            r[14] = U;
            r[15] = V;
        } else {
            V = r[15];
        }
        const H = V;
        const effectiveMinimalMode = isMinimalMode;
        let z;
        if (r[16] !== effectiveMinimalMode || r[17] !== isDarkTheme || r[18] !== isMinimalScheme || r[19] !== H || r[20] !== wallpaperPreview) {
            z = o("WAWebChatWallpaperRenderState").deriveChatWallpaperRenderState({
                effectiveMinimalMode,
                isMinimalScheme,
                isDarkTheme,
                wallpaperValue: H,
                wallpaperPreview
            });
            r[16] = effectiveMinimalMode;
            r[17] = isDarkTheme;
            r[18] = isMinimalScheme;
            r[19] = H;
            r[20] = wallpaperPreview;
            r[21] = z;
        } else {
            z = r[21];
        }
        const j = z;
        let K;
        if (r[22] !== j.solidWallpaperHex) {
            K = j.solidWallpaperHex != null ? {
                backgroundColor: j.solidWallpaperHex
            } : null;
            r[22] = j.solidWallpaperHex;
            r[23] = K;
        } else {
            K = r[23];
        }
        let Q;
        if (r[24] !== j.cssVariableOverrides || r[25] !== K) {
            Q = babelHelpers.extends({}, j.cssVariableOverrides, K);
            r[24] = j.cssVariableOverrides;
            r[25] = K;
            r[26] = Q;
        } else {
            Q = r[26];
        }
        const backgroundWrapperStyle = Q;
        let Y;
        if (r[27] !== backgroundWrapperStyle || r[28] !== bubbleStyle || r[29] !== effectiveOutgoingScheme || r[30] !== isDarkTheme || r[31] !== isMinimalMode || r[32] !== isThemeResolved || r[33] !== isVibrant || r[34] !== j.backgroundKind || r[35] !== j.displayWallpaper || r[36] !== j.showDoodle || r[37] !== j.showStockWallpaper || r[38] !== j.stockWallpaperThumbnailUrl || r[39] !== j.stockWallpaperUrl || r[40] !== wallpaperStyle) {
            Y = {
                wallpaperStyle,
                bubbleStyle,
                backgroundWrapperStyle,
                isMinimalMode,
                stockWallpaperUrl: j.stockWallpaperUrl,
                stockWallpaperThumbnailUrl: j.stockWallpaperThumbnailUrl,
                showStockWallpaper: j.showStockWallpaper,
                isDarkTheme,
                displayWallpaper: j.displayWallpaper,
                showDoodle: j.showDoodle,
                isVibrant,
                effectiveOutgoingScheme,
                isThemeResolved,
                backgroundKind: j.backgroundKind
            };
            r[27] = backgroundWrapperStyle;
            r[28] = bubbleStyle;
            r[29] = effectiveOutgoingScheme;
            r[30] = isDarkTheme;
            r[31] = isMinimalMode;
            r[32] = isThemeResolved;
            r[33] = isVibrant;
            r[34] = j.backgroundKind;
            r[35] = j.displayWallpaper;
            r[36] = j.showDoodle;
            r[37] = j.showStockWallpaper;
            r[38] = j.stockWallpaperThumbnailUrl;
            r[39] = j.stockWallpaperUrl;
            r[40] = wallpaperStyle;
            r[41] = Y;
        } else {
            Y = r[41];
        }
        return Y;
    }
    function p(t) {
        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "Failed to persist derived chat theme values"
        ]))).catching(r("getErrorSafe")(t)).sendLogs("chat-theme-persist-derived-failed");
    }
    l.useWallpaperState = m;
}, 98);