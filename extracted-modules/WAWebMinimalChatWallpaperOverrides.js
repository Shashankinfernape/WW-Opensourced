__d("WAWebMinimalChatWallpaperOverrides", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = "#161717";
    const l = "#FFFFFF";
    const s = "22, 23, 23";
    const u = "255, 255, 255";
    const c = "#242626";
    const d = "#EEEEEE";
    const m = "36, 38, 38";
    const p = "238, 238, 238";
    const _ = "#242626";
    const f = "rgba(238, 238, 238, 0.9)";
    function g({ effectiveMinimalMode, isDarkTheme, isMinimalScheme, showStockWallpaper }) {
        if (!effectiveMinimalMode && !isMinimalScheme) {
            return {};
        }
        const i = {
            "--WAWeb-minimal-addon-bubble-shadow": "none",
            "--WAWeb-minimal-msg-bubble-shadow": "none",
            "--WAWeb-minimal-system-bubble-bg": isDarkTheme ? _ : f,
            "--WAWeb-minimal-system-bubble-shadow": "none",
            "--WAWeb-minimal-tail-shadow-opacity": "0"
        };
        if (effectiveMinimalMode && !isMinimalScheme) {
            i["--WDS-systems-bubble-surface-incoming"] = isDarkTheme ? c : d;
            i["--WDS-systems-bubble-surface-incoming-RGB"] = isDarkTheme ? m : p;
        }
        if (effectiveMinimalMode && !isMinimalScheme && !showStockWallpaper) {
            i["--WDS-systems-chat-background-wallpaper"] = isDarkTheme ? e : l;
            i["--WDS-systems-chat-background-wallpaper-RGB"] = isDarkTheme ? s : u;
        }
        return i;
    }
    i.getMinimalModeOverrides = g;
}, 66);