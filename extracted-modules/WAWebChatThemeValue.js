__d("WAWebChatThemeValue", [
    "WAWebChatThemeEnums",
    "WAWebChatThemeGatingUtils",
    "WAWebSolidColorPalette",
    "WAWebWallpaper"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e({ showDoodle, stockWallpaperImageId, wallpaper }) {
        if (stockWallpaperImageId != null && stockWallpaperImageId !== "") {
            return {
                type: "stock",
                stockImageId: stockWallpaperImageId,
                isDoodleEnabled: showDoodle
            };
        }
        if (typeof wallpaper === "string" && wallpaper !== "" && wallpaper !== o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER) {
            const a = T(wallpaper);
            if (a != null) {
                return C({
                    type: "solid",
                    colorLight: a.colorLight,
                    colorDark: a.colorDark,
                    isDoodleEnabled: showDoodle
                });
            }
        }
        return {
            type: "default",
            isDoodleEnabled: showDoodle
        };
    }
    function s({ chatThemeId, colorSchemeId }) {
        return {
            chatThemeId: chatThemeId == null ? null : W(chatThemeId),
            colorSchemeId: colorSchemeId == null ? null : F(colorSchemeId)
        };
    }
    function u(e, t) {
        const n = s(e);
        const r = t?.inheritsTheme === true && n.chatThemeId == null && n.colorSchemeId != null ? babelHelpers.extends({}, n, {
            inheritsTheme: true
        }) : n;
        const baseline = t?.baseline;
        if (baseline == null) {
            return r;
        }
        const a = n.chatThemeId == null && n.colorSchemeId != null || n.chatThemeId != null && f(n.chatThemeId) === f(baseline.themeId);
        if (a) {
            return babelHelpers.extends({}, r, {
                baseline
            });
        }
        return r;
    }
    function c(e) {
        return e != null && o("WAWebChatThemeEnums").MinimalScheme.isValid(e);
    }
    function d(e) {
        return e != null && !c(e);
    }
    function m(e) {
        if (e == null || e.baseline != null) {
            return false;
        }
        const { chatThemeId, colorSchemeId } = e;
        if (chatThemeId == null || c(chatThemeId)) {
            return false;
        }
        return colorSchemeId != null && !_(chatThemeId, colorSchemeId);
    }
    function p(e) {
        if (e == null) {
            return null;
        }
        if (e.baseline != null) {
            return e.baseline;
        }
        const { chatThemeId, colorSchemeId } = e;
        if (chatThemeId == null) {
            return null;
        }
        const colorSchemeId_1 = c(colorSchemeId) ? colorSchemeId : chatThemeId;
        if (colorSchemeId_1 != null && c(colorSchemeId_1)) {
            const themeId = W(f(colorSchemeId_1));
            if (themeId == null) {
                return null;
            }
            return {
                themeId,
                colorSchemeId: colorSchemeId_1,
                wallpaper: {
                    type: "default",
                    isDoodleEnabled: false
                }
            };
        }
        if (colorSchemeId == null || !_(chatThemeId, colorSchemeId)) {
            return null;
        }
        return {
            themeId: chatThemeId,
            colorSchemeId,
            wallpaper: null
        };
    }
    function _(chatThemeId, colorSchemeId) {
        if (c(chatThemeId)) {
            return false;
        }
        return f(colorSchemeId) === f(chatThemeId);
    }
    function f(e) {
        return String(e).replace(/@.*$/, "");
    }
    function g(e) {
        if (e == null || m(e)) {
            return false;
        }
        const r = p(e);
        return (e.colorSchemeId ?? null) !== (r?.colorSchemeId ?? null);
    }
    function h(e) {
        if (e == null) {
            return false;
        }
        return c(e.colorSchemeId) || c(e.chatThemeId);
    }
    function y(e, t) {
        return ((e)=>{
            if ((typeof e === "object" && e !== null || typeof e === "function") && e.type === "solid" && "colorLight" in e && "colorDark" in e) {
                const { colorLight, colorDark } = e;
                if (t === "light") {
                    return colorLight;
                }
                return colorDark;
            }
            return o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER;
        })(e);
    }
    function C(e) {
        if (e.type === "solid" && b({
            colorLight: e.colorLight,
            colorDark: e.colorDark
        })) {
            return {
                type: "default",
                isDoodleEnabled: e.isDoodleEnabled
            };
        }
        return e;
    }
    function b(e) {
        return o("WAWebSolidColorPalette").isDefaultSolidColor(e.colorLight) && o("WAWebSolidColorPalette").isDefaultSolidColor(e.colorDark);
    }
    function v(e) {
        const t = e.replace("#", "").toUpperCase();
        const n = t.length === 8 ? t.slice(2) : t;
        return `#${n}`;
    }
    function S(e) {
        return e != null && (e.chatThemeId != null || e.colorSchemeId != null);
    }
    function R(e, t) {
        if (S(e)) {
            if (e?.inheritsTheme !== true) {
                return e;
            }
            return babelHelpers.extends({}, e, {
                chatThemeId: O(t?.chatThemeId ?? null, t?.colorSchemeId ?? null, e.colorSchemeId)
            });
        }
        return t;
    }
    function L(e) {
        if (e == null) {
            return false;
        }
        if (e.type !== "default") {
            return true;
        }
        return e.isDoodleEnabled != null;
    }
    function E(e, t) {
        if (e == null) {
            return {
                wallpaper: o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER,
                showDoodle: true
            };
        }
        return {
            wallpaper: y(e, t),
            showDoodle: e.type === "stock" ? false : e.isDoodleEnabled !== false
        };
    }
    function k(e) {
        if (e != null) {
            return e.isDoodleEnabled;
        }
        return null;
    }
    function I(e, isDoodleEnabled) {
        if (e != null && (e.type === "solid" || e.type === "stock")) {
            return babelHelpers.extends({}, e, {
                isDoodleEnabled
            });
        }
        return {
            type: "default",
            isDoodleEnabled
        };
    }
    function T(wallpaper) {
        const t = x(wallpaper);
        return t ?? (o("WAWebChatThemeGatingUtils").isChatThemesEnabled() ? w(wallpaper) : $(wallpaper));
    }
    function D(t) {
        if (t == null || typeof t !== "object" || t.type !== "solid" || typeof t.colorLight !== "string") {
            return null;
        }
        return e({
            wallpaper: t.colorLight,
            showDoodle: typeof t.isDoodleEnabled === "boolean" ? t.isDoodleEnabled : null,
            stockWallpaperImageId: null
        });
    }
    function x(e) {
        const t = o("WAWebSolidColorPalette").findPaletteIndex(v(e));
        if (t === -1) {
            return null;
        }
        return {
            colorLight: v(o("WAWebSolidColorPalette").getSolidColors("light")[t]),
            colorDark: v(o("WAWebSolidColorPalette").getSolidColors("dark")[t])
        };
    }
    function $(e) {
        const t = v(e);
        if (A(t, o("WAWebWallpaper").getWallpaperColors("light"))) {
            return {
                colorLight: t,
                colorDark: v(o("WAWebWallpaper").toggleWallpaperColor(t, "light"))
            };
        }
        if (A(t, o("WAWebWallpaper").getWallpaperColors("dark"))) {
            return {
                colorLight: v(o("WAWebWallpaper").toggleWallpaperColor(t, "dark")),
                colorDark: t
            };
        }
        return null;
    }
    const P = o("WAWebWallpaper").getWallpaperColors("light");
    const N = o("WAWebSolidColorPalette").getSolidColors("light");
    const M = new Map([
        [
            P[0],
            N[0]
        ],
        [
            P[1],
            N[2]
        ],
        [
            P[2],
            N[6]
        ],
        [
            P[3],
            N[17]
        ],
        [
            P[4],
            N[4]
        ],
        [
            P[5],
            N[5]
        ],
        [
            P[6],
            N[16]
        ],
        [
            P[7],
            N[33]
        ],
        [
            P[8],
            N[8]
        ],
        [
            P[9],
            N[9]
        ],
        [
            P[10],
            N[11]
        ],
        [
            P[11],
            N[13]
        ],
        [
            P[12],
            N[20]
        ],
        [
            P[13],
            N[23]
        ],
        [
            P[14],
            N[23]
        ],
        [
            P[15],
            N[25]
        ],
        [
            P[16],
            N[24]
        ],
        [
            P[17],
            N[26]
        ],
        [
            P[18],
            N[32]
        ],
        [
            P[19],
            N[30]
        ],
        [
            P[20],
            N[29]
        ],
        [
            P[21],
            N[32]
        ],
        [
            P[22],
            N[35]
        ],
        [
            P[23],
            N[25]
        ],
        [
            P[24],
            N[36]
        ],
        [
            P[25],
            N[11]
        ],
        [
            P[26],
            N[9]
        ]
    ]);
    function w(wallpaper) {
        const t = v(wallpaper);
        const n = A(t, o("WAWebWallpaper").getWallpaperColors("dark")) ? v(o("WAWebWallpaper").toggleWallpaperColor(t, "dark")) : t;
        const r = M.get(n);
        if (r == null) {
            return $(wallpaper);
        }
        return x(r);
    }
    function A(e, t) {
        return t.some((t)=>v(t) === e);
    }
    function F(colorSchemeId) {
        return o("WAWebChatThemeEnums").Theme.cast(colorSchemeId) ?? o("WAWebChatThemeEnums").TonalScheme.cast(colorSchemeId) ?? o("WAWebChatThemeEnums").MinimalScheme.cast(colorSchemeId) ?? null;
    }
    function O(e, t, n) {
        if (!c(n) && c(t)) {
            return t;
        }
        return e;
    }
    function B(e, t) {
        if (c(e)) {
            return e;
        }
        return t;
    }
    function W(e) {
        return o("WAWebChatThemeEnums").MinimalScheme.cast(e) ?? o("WAWebChatThemeEnums").Theme.cast(f(e)) ?? null;
    }
    l.wallpaperValueFromFlat = e;
    l.chatThemeValueFromFlat = s;
    l.chatThemeValueFromSyncedFields = u;
    l.isMinimalScheme = c;
    l.isWallpaperOwningChatThemeId = d;
    l.isBaselineAmbiguous = m;
    l.resolveBaseline = p;
    l.themeFamilyOf = f;
    l.hasBubbleOverride = g;
    l.isMinimalChatTheme = h;
    l.wallpaperValueToHex = y;
    l.canonicalizeWallpaperValue = C;
    l.isDefaultPair = b;
    l.normalizeHex = v;
    l.isChatThemeOverride = S;
    l.resolveEffectiveChatThemeValue = R;
    l.isWallpaperOverride = L;
    l.wallpaperBackgroundFromValue = E;
    l.doodleFromWallpaperValue = k;
    l.wallpaperValueWithDoodle = I;
    l.migrateStoredSolidWallpaper = D;
    l.promoteMinimalOnColorChange = O;
    l.keepMinimalOnFamilyChange = B;
}, 98);