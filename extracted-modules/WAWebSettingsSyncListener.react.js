__d("WAWebSettingsSyncListener.react", [
    "WALogger",
    "WAWebChatCollection",
    "WAWebChatPreferenceCollection",
    "WAWebChatPreferenceModel",
    "WAWebChatThemeValue",
    "WAWebL10N",
    "WAWebL10NConstants",
    "WAWebSettingsSyncEventEmitter",
    "WAWebSystemTheme",
    "WAWebThemeContext",
    "WAWebThemeType",
    "WAWebWallpaper",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "cr:12509",
    "cr:13156",
    "getErrorSafe",
    "react",
    "useWAWebDebouncedCallback",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    let b;
    let v;
    let S;
    let R;
    let L;
    let E;
    const useContext = (E || (E = o("react"))).useContext;
    const I = n("cr:12509") ?? {};
    const I_AllowedZoomLevel = I.AllowedZoomLevel;
    const D = n("cr:13156") ?? {};
    const D_WAWebScalingControlManager = D.WAWebScalingControlManager;
    function $() {
        let e;
        let t;
        const a = useContext(o("WAWebThemeContext").ThemeContext);
        const i = r("useWAWebDebouncedCallback")(function(e) {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[settings-sync] Applying theme value: ",
                ""
            ])), e);
            const t = o("WAWebThemeType").ThemesSettingValue.cast(e);
            if (t == null) {
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[settings-sync] Invalid theme value: ",
                    ""
                ])), e).tags("settings-sync");
                return;
            }
            e: {
                if (t === o("WAWebThemeType").ThemesSettingValue.SystemDefault) {
                    a.setSystemThemeMode(true);
                    a.setTheme(r("WAWebSystemTheme").getCurrentTheme());
                    break e;
                }
                if (t === o("WAWebThemeType").ThemesSettingValue.Light) {
                    a.setSystemThemeMode(false);
                    a.setTheme("light");
                    break e;
                }
                if (t === o("WAWebThemeType").ThemesSettingValue.Dark) {
                    a.setSystemThemeMode(false);
                    a.setTheme("dark");
                    break e;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t}`);
            }
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "[settings-sync] Successfully applied theme: ",
                ""
            ])), t);
        }, 1000);
        (t = o("useWAWebListener")).useListener(e = r("WAWebSettingsSyncEventEmitter"), "applyTheme", i);
        t.useListener(e, "applyWallpaper", function(e) {
            try {
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[settings-sync] Applying wallpaper ID: ",
                    ""
                ])), e);
                const t = r("WAWebChatPreferenceCollection").get(o("WAWebChatPreferenceModel").DEFAULT_PREFERENCE);
                if (t) {
                    const n = t.wallpaperValue;
                    const i = o("WAWebChatThemeValue").doodleFromWallpaperValue(n);
                    t.set("wallpaperValue", o("WAWebChatThemeValue").wallpaperValueFromFlat({
                        wallpaper: o("WAWebWallpaper").getWallpaperColorForSync(e, a.theme),
                        showDoodle: i,
                        stockWallpaperImageId: null
                    }));
                    o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[settings-sync] Successfully applied wallpaper: ",
                        ""
                    ])), e);
                } else {
                    o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[settings-sync] default chat pref not found for wallpaper"
                    ]))).tags("settings-sync");
                }
            } catch (error) {
                o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[settings-sync] Error applying wallpaper ",
                    ""
                ])), e).catching(r("getErrorSafe")(error)).tags("settings-sync");
            }
        });
        t.useListener(e, "applyPerChatWallpaper", (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatJid, wallpaperId }) {
                try {
                    o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[settings-sync] Applying per-chat wallpaper ID: ",
                        ""
                    ])), wallpaperId);
                    const i = o("WAWebWidFactory").createWid(chatJid);
                    const l = i.isLid() ? o("WAWebChatCollection").ChatCollection.getChatByAccountLid(i) : o("WAWebChatCollection").ChatCollection.get(i);
                    if (l != null) {
                        const c = l.wallpaperValue;
                        const d = r("WAWebChatPreferenceCollection").getDefault().wallpaperValue;
                        const m = o("WAWebChatThemeValue").isWallpaperOverride(c) ? c : d;
                        const p = o("WAWebChatThemeValue").doodleFromWallpaperValue(m) ?? o("WAWebChatThemeValue").doodleFromWallpaperValue(d) ?? true;
                        const wallpaper = o("WAWebWallpaper").getWallpaperColorForSync(wallpaperId, a.theme);
                        yield l.setWallpaperValue(wallpaper === o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER ? null : o("WAWebChatThemeValue").wallpaperValueFromFlat({
                            wallpaper,
                            showDoodle: p,
                            stockWallpaperImageId: null
                        }));
                        o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                            "[settings-sync] Successfully applied per-chat wallpaper: ",
                            ""
                        ])), wallpaperId);
                    }
                } catch (error) {
                    o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                        "[settings-sync] Error applying per-chat wallpaper ",
                        ""
                    ])), wallpaperId).catching(r("getErrorSafe")(error)).tags("settings-sync");
                }
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })());
        const l = r("useWAWebDebouncedCallback")((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                try {
                    o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                        "[settings-sync] Applying language: ",
                        ""
                    ])), e);
                    if (e !== r("WAWebL10N").getLocale()) {
                        yield r("WAWebL10N").setLocale(e, o("WAWebL10NConstants").L10N_PRIORITY.SAVED, false);
                        o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                            "[settings-sync] Successfully applied language: ",
                            ""
                        ])), e);
                    }
                } catch (error) {
                    o("WALogger").ERROR(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                        "[settings-sync] Error applying language ",
                        ""
                    ])), e).catching(r("getErrorSafe")(error)).tags("settings-sync");
                }
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })(), 1000);
        t.useListener(e, "applyLanguage", l);
        const s = r("useWAWebDebouncedCallback")((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                try {
                    o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                        "[settings-sync] Applying zoom value: ",
                        ""
                    ])), e);
                    const t = I_AllowedZoomLevel?.cast(e / 100);
                    if (t) {
                        yield D_WAWebScalingControlManager?.setZoomLevel(t);
                        o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                            "[settings-sync] Successfully applied zoom: ",
                            ""
                        ])), t);
                    }
                } catch (error) {
                    o("WALogger").ERROR(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                        "[settings-sync] Error applying zoom ",
                        ""
                    ])), e).catching(r("getErrorSafe")(error)).tags("settings-sync");
                }
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })(), 1000);
        t.useListener(e, "applyZoom", s);
    }
    l.useSettingsSyncListener = $;
}, 98);