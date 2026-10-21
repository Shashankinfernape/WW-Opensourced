__d("WAWebStockWallpaper", [
    "WAWebChatThemeEnums"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = "https://static.whatsapp.net/downloadable";
    const u = "_hdpi";
    const c = new Map([
        [
            (e = o("WAWebChatThemeEnums")).Theme.PearlIndigo,
            "00002"
        ],
        [
            e.Theme.TyrianPurple,
            "00004"
        ],
        [
            e.Theme.SunsetOrange,
            "00009"
        ],
        [
            e.Theme.RoyalBlue,
            "00014"
        ],
        [
            e.Theme.DarkCerulean,
            "00016"
        ],
        [
            e.Theme.MerinoTeal,
            "00018"
        ],
        [
            e.Theme.CharcoalGreen,
            "00021"
        ],
        [
            e.Theme.PersianPlum,
            "00025"
        ],
        [
            e.Theme.DuneMono,
            "00029"
        ]
    ]);
    const d = [
        {
            theme: e.Theme.PearlIndigo,
            wallpaperId: "00002"
        },
        {
            theme: e.Theme.TyrianPurple,
            wallpaperId: "00004"
        },
        {
            theme: e.Theme.SunsetOrange,
            wallpaperId: "00009"
        },
        {
            theme: e.Theme.MerinoTeal,
            wallpaperId: "00018"
        },
        {
            theme: e.Theme.RoyalBlue,
            wallpaperId: "00014"
        },
        {
            theme: e.Theme.DarkCerulean,
            wallpaperId: "00016"
        },
        {
            theme: e.Theme.CharcoalGreen,
            wallpaperId: "00021"
        },
        {
            theme: e.Theme.PersianPlum,
            wallpaperId: "00025"
        },
        {
            theme: e.Theme.PersianPlum,
            wallpaperId: "00027"
        },
        {
            theme: e.Theme.DuneMono,
            wallpaperId: "00029"
        },
        {
            theme: e.Theme.DuneMono,
            wallpaperId: "00030"
        }
    ];
    const m = [
        {
            theme: e.Theme.PearlIndigo,
            wallpaperId: "00001"
        },
        {
            theme: e.Theme.PearlIndigo,
            wallpaperId: "00002"
        },
        {
            theme: e.Theme.PearlIndigo,
            wallpaperId: "00003"
        },
        {
            theme: e.Theme.TyrianPurple,
            wallpaperId: "00004"
        },
        {
            theme: e.Theme.PearlIndigo,
            wallpaperId: "00005"
        },
        {
            theme: e.Theme.PearlIndigo,
            wallpaperId: "00006"
        },
        {
            theme: e.Theme.PearlIndigo,
            wallpaperId: "00008"
        },
        {
            theme: e.Theme.SunsetOrange,
            wallpaperId: "00009"
        },
        {
            theme: e.Theme.PearlIndigo,
            wallpaperId: "00010"
        },
        {
            theme: e.Theme.PearlIndigo,
            wallpaperId: "00011"
        },
        {
            theme: e.Theme.PearlIndigo,
            wallpaperId: "00012"
        },
        {
            theme: e.Theme.PearlIndigo,
            wallpaperId: "00013"
        },
        {
            theme: e.Theme.RoyalBlue,
            wallpaperId: "00014"
        },
        {
            theme: e.Theme.PearlIndigo,
            wallpaperId: "00015"
        },
        {
            theme: e.Theme.DarkCerulean,
            wallpaperId: "00016"
        },
        {
            theme: e.Theme.MerinoTeal,
            wallpaperId: "00018"
        },
        {
            theme: e.Theme.PearlIndigo,
            wallpaperId: "00019"
        },
        {
            theme: e.Theme.PearlIndigo,
            wallpaperId: "00020"
        },
        {
            theme: e.Theme.CharcoalGreen,
            wallpaperId: "00021"
        },
        {
            theme: e.Theme.PearlIndigo,
            wallpaperId: "00022"
        },
        {
            theme: e.Theme.PearlIndigo,
            wallpaperId: "00023"
        },
        {
            theme: e.Theme.PersianPlum,
            wallpaperId: "00025"
        },
        {
            theme: e.Theme.PearlIndigo,
            wallpaperId: "00026"
        },
        {
            theme: e.Theme.PersianPlum,
            wallpaperId: "00027"
        },
        {
            theme: e.Theme.PearlIndigo,
            wallpaperId: "00028"
        },
        {
            theme: e.Theme.DuneMono,
            wallpaperId: "00029"
        },
        {
            theme: e.Theme.DuneMono,
            wallpaperId: "00030"
        }
    ];
    const p = new Set([]);
    function _(e) {
        const n = o("WAWebChatThemeEnums").Theme.cast(String(e));
        if (n == null) {
            return null;
        }
        return c.get(n) ?? null;
    }
    function f(e, t) {
        const n = o("WAWebChatThemeEnums").Theme.cast(String(e));
        return n != null && d.some((e)=>e.theme === n && e.wallpaperId === t);
    }
    function g(e, t) {
        return `${s}?category=wallpaper&id=wallpaper-${e}${t}`;
    }
    function h(e) {
        const t = c.get(e);
        if (t == null) {
            return null;
        }
        return v(t);
    }
    function y(e) {
        const t = c.get(e);
        if (t == null) {
            return null;
        }
        return C(t);
    }
    function C(e) {
        return g(e, u);
    }
    function b() {
        return Array.from(c.keys());
    }
    function v(e) {
        const n = typeof window !== "undefined" && (window.devicePixelRatio ?? 1) >= 2 ? "_web_3600" : "_web_2400";
        return g(e, n);
    }
    function S() {
        return d;
    }
    function R() {
        return m;
    }
    function L(e, t) {
        if (t === "dark") {
            return true;
        }
        return !p.has(e);
    }
    l.getDefaultWallpaperIdForTheme = _;
    l.isStockWallpaperPresetForTheme = f;
    l.getStockWallpaperUrl = h;
    l.getStockWallpaperThumbnailUrl = y;
    l.getStockWallpaperThumbnailUrlByImageId = C;
    l.getThemesWithStockWallpapers = b;
    l.getStockWallpaperUrlByImageId = v;
    l.getStockWallpaperPresets = S;
    l.getAllStockWallpaperPresets = R;
    l.isLightSwatchBackground = L;
}, 98);