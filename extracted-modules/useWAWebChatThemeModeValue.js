__d("useWAWebChatThemeModeValue", [
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useMemo = (e || (e = o("react"))).useMemo;
    function u(e) {
        const t = o("react-compiler-runtime").c(6);
        const { bubbleStyle, isMinimalMode, isVibrant, wallpaperStyle } = e;
        const isThemed = wallpaperStyle != null || bubbleStyle != null;
        let s;
        if (t[0] !== bubbleStyle || t[1] !== isMinimalMode || t[2] !== isVibrant || t[3] !== isThemed || t[4] !== wallpaperStyle) {
            s = {
                isVibrant,
                isThemed,
                isMinimalMode,
                wallpaperStyle,
                bubbleStyle
            };
            t[0] = bubbleStyle;
            t[1] = isMinimalMode;
            t[2] = isVibrant;
            t[3] = isThemed;
            t[4] = wallpaperStyle;
            t[5] = s;
        } else {
            s = t[5];
        }
        return s;
    }
    l.default = u;
}, 98);