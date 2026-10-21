__d("WAWebWallpaper", [
    "fbt",
    "WAWebChatThemeGatingUtils",
    "WAWebSolidColorPalette",
    "WAWebWallpaperSyncOffset"
], function(t, n, r, o, a, i, l, s) {
    const e = "default_chat_wallpaper";
    const u = -1;
    const c = "0.06";
    const d = "0.1";
    const m = "data-asset-chat-background-beige";
    const p = {
        "#BBE4E5": {
            doodle: "dark",
            opacity: "0.42",
            getColorName: function() {
                return s._("Cruise");
            },
            getAriaLabel: function() {
                return s._("Colour: Cruise, Colour hex: #BBE4E5, hue: green");
            }
        },
        "#AED8C7": {
            doodle: "dark",
            opacity: "0.3",
            getColorName: function() {
                return s._("Scandal");
            },
            getAriaLabel: function() {
                return s._("Colour: Scandal, Colour hex: #AED8C7, hue: green");
            }
        },
        "#7ACBA5": {
            doodle: "dark",
            opacity: "0.26",
            getColorName: function() {
                return s._("Monte carlo");
            },
            getAriaLabel: function() {
                return s._("Colour: Monte Carlo, Colour hex: #7ACBA5, hue: green");
            }
        },
        "#CBDAEC": {
            doodle: "dark",
            opacity: "0.42",
            getColorName: function() {
                return s._("Hawkes blue");
            },
            getAriaLabel: function() {
                return s._("Colour: Hawkes blue, Colour hex: #CBDAEC, hue: blue");
            }
        },
        "#66D2D5": {
            doodle: "dark",
            opacity: "0.26",
            getColorName: function() {
                return s._("Downy");
            },
            getAriaLabel: function() {
                return s._("Colour: Downy, Colour hex: #66D2D5, hue: green");
            }
        },
        "#63BDCF": {
            doodle: "dark",
            opacity: "0.26",
            getColorName: function() {
                return s._("Seagull");
            },
            getAriaLabel: function() {
                return s._("Colour: Seagull, Colour hex: #63BDCF, hue: blue");
            }
        },
        "#D6D0F0": {
            doodle: "dark",
            opacity: "0.36",
            getColorName: function() {
                return s._("Quartz");
            },
            getAriaLabel: function() {
                return s._("Colour: Quartz, Colour hex: #D6D0F0, hue: White");
            }
        },
        "#CECECE": {
            doodle: "dark",
            opacity: "0.36",
            getColorName: function() {
                return s._("Very light grey");
            },
            getAriaLabel: function() {
                return s._("Colour: Very light grey, Colour hex: #CECECE, hue: grey");
            }
        },
        "#D1DABE": {
            doodle: "dark",
            opacity: "0.36",
            getColorName: function() {
                return s._("Orinoco");
            },
            getAriaLabel: function() {
                return s._("Colour: Orinoco, Colour hex: #D1DABE, hue: green");
            }
        },
        "#E6E1B1": {
            doodle: "dark",
            opacity: "0.42",
            getColorName: function() {
                return s._("Tusk");
            },
            getAriaLabel: function() {
                return s._("Colour: Tusk, Colour hex: #E6E1B1, hue: green");
            }
        },
        "#FEEFA9": {
            doodle: "light",
            opacity: "0.06",
            getColorName: function() {
                return s._("Cape honey");
            },
            getAriaLabel: function() {
                return s._("Colour: Cape honey, Colour hex: #FEEFA9, hue: Yellow");
            }
        },
        "#FED297": {
            doodle: "dark",
            opacity: "0.42",
            getColorName: function() {
                return s._("Caramel");
            },
            getAriaLabel: function() {
                return s._("Colour: Caramel, Colour hex: #FED297, hue: Yellow");
            }
        },
        "#FD9A9B": {
            doodle: "dark",
            opacity: "0.26",
            getColorName: function() {
                return s._("Rose bud");
            },
            getAriaLabel: function() {
                return s._("Colour: Rose bud, Colour hex: #FD9A9B, hue: Red");
            }
        },
        "#FD6769": {
            doodle: "dark",
            opacity: "0.26",
            getColorName: function() {
                return s._("Bittersweet");
            },
            getAriaLabel: function() {
                return s._("Colour: Bittersweet, Colour hex: #FD6769, hue: Orange");
            }
        },
        "#FB4668": {
            doodle: "dark",
            opacity: "0.26",
            getColorName: function() {
                return s._("Radical red");
            },
            getAriaLabel: function() {
                return s._("Colour: Radical red, Colour hex: #FB4668, hue: Red");
            }
        },
        "#922040": {
            doodle: "dark",
            opacity: "0.17",
            invertTransparentWallpaperColors: true,
            getColorName: function() {
                return s._("Mandarin orange");
            },
            getAriaLabel: function() {
                return s._("Color: Mandarin orange, Color hex: #922040, hue: Orange");
            }
        },
        "#DC6E4F": {
            doodle: "dark",
            opacity: "0.2",
            getColorName: function() {
                return s._("Flamingo");
            },
            getAriaLabel: function() {
                return s._("Colour: Flamingo, Colour hex: #DC6E4F, hue: Orange");
            }
        },
        "#644D52": {
            doodle: "dark",
            opacity: "0.13",
            invertTransparentWallpaperColors: true,
            getColorName: function() {
                return s._("Buccaneer");
            },
            getAriaLabel: function() {
                return s._("Colour: Buccaneer, Colour hex: #644D52, hue: Red");
            }
        },
        "#517E7E": {
            doodle: "dark",
            opacity: "0.13",
            getColorName: function() {
                return s._("Breaker bay");
            },
            getAriaLabel: function() {
                return s._("Colour: Breaker bay, Colour hex: #517E7E, hue: green");
            }
        },
        "#3190BB": {
            doodle: "dark",
            opacity: "0.13",
            getColorName: function() {
                return s._("Pelorous");
            },
            getAriaLabel: function() {
                return s._("Colour: Pelorous, Colour hex: #3190BB, hue: blue");
            }
        },
        "#35558A": {
            doodle: "dark",
            opacity: "0.1",
            invertTransparentWallpaperColors: true,
            getColorName: function() {
                return s._("Tory blue");
            },
            getAriaLabel: function() {
                return s._("Colour: Tory blue, Colour hex: #35558A, hue: blue");
            }
        },
        "#55626F": {
            doodle: "dark",
            opacity: "0.1",
            invertTransparentWallpaperColors: true,
            getColorName: function() {
                return s._("Fiord");
            },
            getAriaLabel: function() {
                return s._("Colour: Fiord, Colour hex: #55626F, hue: blue");
            }
        },
        "#1D2326": {
            doodle: "dark",
            opacity: "0.1",
            invertTransparentWallpaperColors: true,
            getColorName: function() {
                return s._("Cinder");
            },
            getAriaLabel: function() {
                return s._("Colour: Cinder, Colour hex: #1D2326, hue: grey");
            }
        },
        "#301E34": {
            doodle: "dark",
            opacity: "0.1",
            invertTransparentWallpaperColors: true,
            getColorName: function() {
                return s._("Tolopea");
            },
            getAriaLabel: function() {
                return s._("Colour: Tolopea, Colour hex: #301E34, hue: Violet");
            }
        },
        "#ECF0F1": {
            doodle: "light",
            opacity: "0.06",
            getColorName: function() {
                return s._("Solitude");
            },
            getAriaLabel: function() {
                return s._("Colour: Solitude, Colour hex: #ECF0F1, hue: blue");
            }
        },
        "#FFFEA2": {
            doodle: "light",
            opacity: "0.06",
            getColorName: function() {
                return s._("Canary");
            },
            getAriaLabel: function() {
                return s._("Colour: Canary, Colour hex: #FFFEA2, hue: Yellow");
            }
        },
        "#E7E8D2": {
            doodle: "light",
            opacity: "0.06",
            getColorName: function() {
                return s._("Willow Brook");
            },
            getAriaLabel: function() {
                return s._("Colour: Willow Brook, Colour hex: #E7E8D2, hue: green");
            }
        }
    };
    const _ = {
        "#0F2424": {
            doodle: "dark",
            opacity: "0.05",
            getColorName: function() {
                return s._("Nordic");
            },
            getAriaLabel: function() {
                return s._("Colour: Nordic, Colour hex: #0F2424, hue: blue");
            }
        },
        "#12261F": {
            doodle: "dark",
            opacity: "0.055",
            getColorName: function() {
                return s._("Cardin green");
            },
            getAriaLabel: function() {
                return s._("Colour: Cardin green, Colour hex: #12261F, hue: green");
            }
        },
        "#11241C": {
            doodle: "dark",
            opacity: "0.055",
            getColorName: function() {
                return s._("Cardin green");
            },
            getAriaLabel: function() {
                return s._("Colour: Cardin green, Colour hex: #11241C, hue: green");
            }
        },
        "#111E27": {
            doodle: "dark",
            opacity: "0.06",
            getColorName: function() {
                return s._("Tangaroa");
            },
            getAriaLabel: function() {
                return s._("Colour: Tangaroa, Colour hex: #111E27, hue: blue");
            }
        },
        "#0F2224": {
            doodle: "dark",
            opacity: "0.06",
            getColorName: function() {
                return s._("Nordic");
            },
            getAriaLabel: function() {
                return s._("Colour: Nordic, Colour hex: #0F2224, hue: blue");
            }
        },
        "#0E2125": {
            doodle: "dark",
            opacity: "0.055",
            getColorName: function() {
                return s._("Tiber");
            },
            getAriaLabel: function() {
                return s._("Colour: Tiber, Colour hex: #0E2125, hue: green");
            }
        },
        "#1F1D25": {
            doodle: "dark",
            opacity: "0.06",
            getColorName: function() {
                return s._("Black russian");
            },
            getAriaLabel: function() {
                return s._("Colour: Black russian, Colour hex: #1F1D25, hue: grey");
            }
        },
        "#212121": {
            doodle: "dark",
            opacity: "0.055",
            getColorName: function() {
                return s._("Nero");
            },
            getAriaLabel: function() {
                return s._("Colour: Nero, Colour hex: #212121, hue: grey");
            }
        },
        "#1F211C": {
            doodle: "dark",
            opacity: "0.055",
            getColorName: function() {
                return s._("Marshland");
            },
            getAriaLabel: function() {
                return s._("Colour: Marshland, Colour hex: #1F211C, hue: green");
            }
        },
        "#23231B": {
            doodle: "dark",
            opacity: "0.055",
            getColorName: function() {
                return s._("Maire");
            },
            getAriaLabel: function() {
                return s._("Colour: Maire, Colour hex: #23231B, hue: Yellow");
            }
        },
        "#262419": {
            doodle: "dark",
            opacity: "0.055",
            getColorName: function() {
                return s._("Black magic");
            },
            getAriaLabel: function() {
                return s._("Colour: Black magic, Colour hex: #262419, hue: brown");
            }
        },
        "#261F17": {
            doodle: "dark",
            opacity: "0.055",
            getColorName: function() {
                return s._("Cocoa brown");
            },
            getAriaLabel: function() {
                return s._("Colour: Cocoa brown, Colour hex: #261F17, hue: brown");
            }
        },
        "#261717": {
            doodle: "dark",
            opacity: "0.055",
            getColorName: function() {
                return s._("Wood Bark");
            },
            getAriaLabel: function() {
                return s._("Colour: Wood Bark, Colour hex: #261717, hue: brown");
            }
        },
        "#260F10": {
            doodle: "dark",
            opacity: "0.06",
            getColorName: function() {
                return s._("Seal brown");
            },
            getAriaLabel: function() {
                return s._("Colour: Seal brown, Colour hex: #260F10, hue: brown");
            }
        },
        "#260A10": {
            doodle: "dark",
            opacity: "0.07",
            getColorName: function() {
                return s._("Seal brown");
            },
            getAriaLabel: function() {
                return s._("Colour: Seal brown, Colour hex: #260A10, hue: brown");
            }
        },
        "#19050B": {
            doodle: "dark",
            opacity: "0.075",
            getColorName: function() {
                return s._("Seal brown");
            },
            getAriaLabel: function() {
                return s._("Colour: Seal brown, Colour hex: #19050B, hue: brown");
            }
        },
        "#21100C": {
            doodle: "dark",
            opacity: "0.07",
            getColorName: function() {
                return s._("Seal brown");
            },
            getAriaLabel: function() {
                return s._("Colour: Seal brown, Colour hex: #21100C, hue: brown");
            }
        },
        "#0F0C0C": {
            doodle: "dark",
            opacity: "0.065",
            getColorName: function() {
                return s._("Black");
            },
            getAriaLabel: function() {
                return s._("Colour: Black, Colour hex: #0F0C0C, hue: Black");
            }
        },
        "#101919": {
            doodle: "dark",
            opacity: "0.06",
            getColorName: function() {
                return s._("Black pearl");
            },
            getAriaLabel: function() {
                return s._("Colour: Black pearl, Colour hex: #101919, hue: blue");
            }
        },
        "#0A1D25": {
            doodle: "dark",
            opacity: "0.055",
            getColorName: function() {
                return s._("Cyprus");
            },
            getAriaLabel: function() {
                return s._("Colour: Cyprus, Colour hex: #0A1D25, hue: green");
            }
        },
        "#0D1523": {
            doodle: "dark",
            opacity: "0.065",
            getColorName: function() {
                return s._("Blue whale");
            },
            getAriaLabel: function() {
                return s._("Colour: blue whale, Colour hex: #0D1523, hue: blue");
            }
        },
        "#0D0F11": {
            doodle: "dark",
            opacity: "0.07",
            getColorName: function() {
                return s._("Black pearl");
            },
            getAriaLabel: function() {
                return s._("Colour: Black pearl, Colour hex: #0D0F11, hue: blue");
            }
        },
        "#0A0C0D": {
            doodle: "dark",
            opacity: "0.07",
            getColorName: function() {
                return s._("Black pearl");
            },
            getAriaLabel: function() {
                return s._("Colour: Black pearl, Colour hex: #0A0C0D, hue: blue");
            }
        },
        "#110B12": {
            doodle: "dark",
            opacity: "0.07",
            getColorName: function() {
                return s._("Tolopea");
            },
            getAriaLabel: function() {
                return s._("Colour: Tolopea, Colour hex: #110B12, hue: Violet");
            }
        },
        "#1E1F1F": {
            doodle: "dark",
            opacity: "0.055",
            getColorName: function() {
                return s._("Woodsmoke");
            },
            getAriaLabel: function() {
                return s._("Colour: Woodsmoke, Colour hex: #1E1F1F, hue: grey");
            }
        },
        "#262618": {
            doodle: "dark",
            opacity: "0.055",
            getColorName: function() {
                return s._("Black magic");
            },
            getAriaLabel: function() {
                return s._("Colour: Black magic, Colour hex: #262618, hue: brown");
            }
        },
        "#23231F": {
            doodle: "dark",
            opacity: "0.055",
            getColorName: function() {
                return s._("Maire");
            },
            getAriaLabel: function() {
                return s._("Colour: Maire, Colour hex: #23231F, hue: Yellow");
            }
        }
    };
    const f = Object.keys(p);
    const g = Object.keys(_);
    function h(e) {
        if (e === "light") {
            return f;
        }
        return g;
    }
    function y(t, n) {
        const r = h(n);
        if (t === e) {
            return e;
        }
        const o = r.findIndex((e)=>e.toUpperCase() === t.toUpperCase());
        if (o !== -1) {
            if (n === "light") {
                return g[o];
            }
            return f[o];
        }
        return t;
    }
    function C(e) {
        if (e == null) {
            return u;
        }
        const t = f.findIndex((t)=>t.toUpperCase() === e.toUpperCase());
        if (t !== -1) {
            return t;
        }
        return g.findIndex((t)=>t.toUpperCase() === e.toUpperCase());
    }
    function b(t, n) {
        if (t === u) {
            return e;
        }
        const r = h(n);
        const o = r.at(t);
        return o ?? e;
    }
    function v(t, n) {
        if (t < 0) {
            return e;
        }
        if (t < o("WAWebWallpaperSyncOffset").SOLID_PALETTE_WALLPAPER_ID_OFFSET) {
            return b(t, n);
        }
        const r = o("WAWebSolidColorPalette").getSolidColors(n).at(t - o("WAWebWallpaperSyncOffset").SOLID_PALETTE_WALLPAPER_ID_OFFSET);
        if (r == null || o("WAWebSolidColorPalette").isDefaultSolidColor(r)) {
            return e;
        }
        return r;
    }
    function S(e) {
        if (!o("WAWebChatThemeGatingUtils").isSolidWallpaperSyncEncodeEnabled()) {
            return C(e);
        }
        const t = e != null ? o("WAWebSolidColorPalette").findPaletteIndex(e) : -1;
        if (t === -1) {
            return C(e);
        }
        return o("WAWebWallpaperSyncOffset").SOLID_PALETTE_WALLPAPER_ID_OFFSET + t;
    }
    function R(t, n) {
        if (t == null || t === e || o("WAWebSolidColorPalette").isSolidColor(t)) {
            return true;
        }
        const r = h(n);
        return r.some((e)=>e.toUpperCase() === t.toUpperCase());
    }
    function L(e, t, n) {
        const r = t === "light" ? p : _;
        for(const o in r){
            if (o.toUpperCase() === e.toUpperCase()) {
                return r[o][n];
            }
        }
        return null;
    }
    function E(t, n) {
        const r = L(t, n, "opacity");
        return r || (o("WAWebSolidColorPalette").isSolidColor(t) ? String(o("WAWebSolidColorPalette").getSolidColorDoodleOpacity(t, n)) : n === "light" && t === e ? d : c);
    }
    function k(t, n) {
        let r;
        if (t === e) {
            if (n === "light") {
                return s._("Colour: Beige, Colour hex: #F5F1EB, hue: Beige");
            }
            return s._("Colour: Black, Colour hex: #161717, hue: black");
        }
        const o = n === "light" ? p : _;
        const a = (r = o[t]) == null || r.getAriaLabel == null ? undefined : r.getAriaLabel();
        return a;
    }
    function I(t, n) {
        if (t === e) {
            if (n === "light") {
                return s._("Beige");
            }
            return s._("Black");
        }
        const o = n === "light" ? p : _;
        const a = o[t]?.getColorName();
        return a;
    }
    function T(t, n) {
        if (n === "light" && t !== e) {
            const r = L(t, n, "doodle");
            if (r) {
                return `data-asset-chat-background-${r}`;
            }
        }
        if (n !== "beige" && o("WAWebSolidColorPalette").isSolidColor(t)) {
            return o("WAWebSolidColorPalette").getSolidColorDoodleAsset(t, n);
        }
        let a = `data-asset-chat-background-${n}`;
        if (n === "light" && t === e) {
            a = m;
        }
        return a;
    }
    function D(t, n) {
        if (t === "light" && n !== e) {
            return !!L(n, t, "invertTransparentWallpaperColors");
        }
        return false;
    }
    l.DEFAULT_CHAT_WALLPAPER = e;
    l.getWallpaperColors = h;
    l.toggleWallpaperColor = y;
    l.getWallpaperId = C;
    l.getWallpaperColor = b;
    l.getWallpaperColorForSync = v;
    l.getWallpaperIdForSync = S;
    l.colorExistsInTheme = R;
    l.getWallpaperColorPropValue = L;
    l.getDoodleOpacity = E;
    l.getWallpaperColorAriaLabel = k;
    l.getWallpaperColorName = I;
    l.getDoodleAssetName = T;
    l.invertTransparentWallpaperColors = D;
}, 226);