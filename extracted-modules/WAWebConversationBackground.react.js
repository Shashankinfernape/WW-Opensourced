__d("WAWebConversationBackground.react", [
    "WAWebSolidColorPalette",
    "WAWebThemeContext",
    "WAWebWallpaper",
    "bx",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const e_useContext = e.useContext;
    const c = r("bx").getURL(r("bx")("89515"));
    const d = "540px 960px";
    const m = "412.5px 749.25px";
    const p = "only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-resolution: 2dppx)";
    const matches = window.matchMedia(p).matches;
    function f(e) {
        const t = o("react-compiler-runtime").c(7);
        const { showDoodle, wallpaper } = e;
        const a = e_useContext(o("WAWebThemeContext").ThemeContext);
        const a_theme = a.theme;
        if (showDoodle && o("WAWebWallpaper").colorExistsInTheme(wallpaper, a_theme)) {
            let l;
            if (t[0] !== a_theme || t[1] !== wallpaper) {
                const p = o("WAWebSolidColorPalette").isSolidColor(wallpaper) && !o("WAWebSolidColorPalette").isDefaultSolidColor(wallpaper);
                const opacity = p ? o("WAWebSolidColorPalette").getSolidColorDoodleOpacity(wallpaper, a_theme) : undefined;
                const g = `url("${c}")`;
                const h = matches ? m : d;
                let y;
                if (t[3] !== opacity) {
                    y = opacity != null ? {
                        opacity
                    } : undefined;
                    t[3] = opacity;
                    t[4] = y;
                } else {
                    y = t[4];
                }
                let C;
                if (t[5] !== y) {
                    C = babelHelpers.extends({
                        WebkitMaskImage: g,
                        maskImage: g,
                        WebkitMaskRepeat: "repeat",
                        maskRepeat: "repeat",
                        WebkitMaskMode: "alpha",
                        maskMode: "alpha",
                        WebkitMaskSize: h,
                        maskSize: h
                    }, y);
                    t[5] = y;
                    t[6] = C;
                } else {
                    C = t[6];
                }
                const b = C;
                const v = `conversation-background-${wallpaper}`;
                l = <div className={{
                    0: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1fast2d x197sbye",
                    1: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x197sbye x12peec7"
                }[!!p << 0]} style={b} data-testid={v}/>;
                t[0] = a_theme;
                t[1] = wallpaper;
                t[2] = l;
            } else {
                l = t[2];
            }
            return l;
        }
        return null;
    }
    l.default = f;
}, 98);