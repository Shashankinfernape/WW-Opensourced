__d("WAWebChatWallpaperRenderState", [
    "WAWebChatThemeValue",
    "WAWebMinimalChatWallpaperOverrides",
    "WAWebStockWallpaper",
    "WAWebWallpaper"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e({ effectiveMinimalMode, isDarkTheme, isMinimalScheme, wallpaperPreview, wallpaperValue }) {
        const l = isDarkTheme ? "dark" : "light";
        const d = wallpaperValue?.type === "stock" ? wallpaperValue.stockImageId : null;
        const stockWallpaperUrl = d != null ? o("WAWebStockWallpaper").getStockWallpaperUrlByImageId(d) : null;
        const stockWallpaperThumbnailUrl = d != null ? o("WAWebStockWallpaper").getStockWallpaperThumbnailUrlByImageId(d) : null;
        const displayWallpaper = u(wallpaperValue, wallpaperPreview, l);
        const solidWallpaperHex = displayWallpaper !== o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER ? displayWallpaper : null;
        const g = c(wallpaperValue);
        const showStockWallpaper = stockWallpaperUrl != null && displayWallpaper === o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER;
        const showDoodle = !showStockWallpaper && g;
        const cssVariableOverrides = o("WAWebMinimalChatWallpaperOverrides").getMinimalModeOverrides({
            effectiveMinimalMode,
            isMinimalScheme,
            isDarkTheme,
            showStockWallpaper
        });
        const backgroundKind = s({
            showStockWallpaper,
            solidWallpaperHex,
            isMinimal: effectiveMinimalMode || isMinimalScheme
        });
        return {
            displayWallpaper,
            solidWallpaperHex,
            stockWallpaperUrl,
            stockWallpaperThumbnailUrl,
            showStockWallpaper,
            showDoodle,
            cssVariableOverrides,
            backgroundKind
        };
    }
    function s({ isMinimal, showStockWallpaper, solidWallpaperHex }) {
        if (showStockWallpaper) {
            return "stock";
        }
        if (solidWallpaperHex != null) {
            return "solid";
        }
        if (isMinimal) {
            return "minimal";
        }
        return "default";
    }
    function u(wallpaperValue, wallpaperPreview, n) {
        if (wallpaperPreview != null && wallpaperPreview !== "") {
            return wallpaperPreview;
        }
        if (wallpaperValue != null && wallpaperValue.type === "solid") {
            return o("WAWebChatThemeValue").wallpaperValueToHex(wallpaperValue, n);
        }
        return o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER;
    }
    function c(wallpaperValue) {
        if (wallpaperValue == null) {
            return true;
        }
        if (wallpaperValue.type === "stock") {
            return false;
        }
        return wallpaperValue.isDoodleEnabled ?? true;
    }
    l.deriveChatWallpaperRenderState = e;
}, 98);