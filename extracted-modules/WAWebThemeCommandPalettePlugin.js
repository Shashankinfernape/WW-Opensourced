__d("WAWebThemeCommandPalettePlugin", [
    "WAWebCommandPaletteController",
    "WAWebLexicalWAWebMenu.react",
    "WAWebMenuItems.react",
    "WAWebSystemTheme",
    "WAWebThemeContext",
    "WDSIconIcBrightnessMedium.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const e_useContext = e.useContext;
    function CComponent() {
        const e = o("react-compiler-runtime").c(22);
        const t = o("WAWebCommandPaletteController").useCommandPalette();
        const n = e_useContext(o("WAWebThemeContext").ThemeContext);
        const initialSelection = n.systemThemeMode ? "system" : n.theme;
        let i;
        if (e[0] !== t || e[1] !== n) {
            i = function(o) {
                if (o === "system") {
                    n.setSystemThemeMode(true);
                    n.setTheme(r("WAWebSystemTheme").getCurrentTheme());
                } else {
                    n.setSystemThemeMode(false);
                    n.setTheme(o);
                }
                t.closeModal();
            };
            e[0] = t;
            e[1] = n;
            e[2] = i;
        } else {
            i = e[2];
        }
        const l = i;
        let c;
        if (e[3] !== l) {
            const Component = o("WAWebMenuItems.react").SelectMenuItem;
            c = <Component key="dark" optionId="dark" primary="Dark" onSelect={function() {
                return l("dark");
            }}/>;
            e[3] = l;
            e[4] = c;
        } else {
            c = e[4];
        }
        const m = c;
        let p;
        if (e[5] !== l) {
            const Component = o("WAWebMenuItems.react").SelectMenuItem;
            p = <Component key="light" optionId="light" primary="Light" onSelect={function() {
                return l("light");
            }}/>;
            e[5] = l;
            e[6] = p;
        } else {
            p = e[6];
        }
        const _ = p;
        let f;
        if (e[7] !== l) {
            const Component = o("WAWebMenuItems.react").SelectMenuItem;
            f = <Component key="system" optionId="system" primary="System" onSelect={function() {
                return l("system");
            }}/>;
            e[7] = l;
            e[8] = f;
        } else {
            f = e[8];
        }
        const g = f;
        let h;
        if (n.theme === "light") {
            let y;
            if (e[9] !== m || e[10] !== _ || e[11] !== g) {
                y = [
                    m,
                    _,
                    g
                ];
                e[9] = m;
                e[10] = _;
                e[11] = g;
                e[12] = y;
            } else {
                y = e[12];
            }
            h = y;
        } else {
            let C;
            if (e[13] !== m || e[14] !== _ || e[15] !== g) {
                C = [
                    _,
                    m,
                    g
                ];
                e[13] = m;
                e[14] = _;
                e[15] = g;
                e[16] = C;
            } else {
                C = e[16];
            }
            h = C;
        }
        let b;
        if (e[17] !== h) {
            b = h.map(d);
            e[17] = h;
            e[18] = b;
        } else {
            b = e[18];
        }
        let v;
        if (e[19] !== initialSelection || e[20] !== b) {
            const Component = o("WAWebMenuItems.react").SelectMenuItemGroup;
            const Component_1 = o("WAWebLexicalWAWebMenu.react").LexicalWAWebMenu;
            v = <Component_1 forceSelection><Component initialSelection={initialSelection}>{b}</Component></Component_1>;
            e[19] = initialSelection;
            e[20] = b;
            e[21] = v;
        } else {
            v = e[21];
        }
        return v;
    }
    function d(e) {
        return e;
    }
    const m = {
        plugin: {
            id: "ThemeCommandPalettePlugin",
            placeholder: "Choose a theme",
            shortName: s.jsx(r("WDSIconIcBrightnessMedium.react"), {
                width: 16,
                height: 16
            }),
            Component: CComponent
        },
        trigger: "/theme",
        doc: {
            name: "App Theme",
            description: "Switch between the light and dark themes"
        }
    };
    l.ThemeCommandPalettePlugin = m;
}, 98);