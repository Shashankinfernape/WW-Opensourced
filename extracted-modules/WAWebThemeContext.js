__d("WAWebThemeContext", [
    "WAWebSystemTheme",
    "WAWebThemeSession",
    "WAWebUserPrefsGeneral",
    "bx",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { createContext: u, useContext: c } = s;
    const d = {
        light: [
            {
                id: "bg-chat-light",
                selectors: [
                    "[data-asset-chat-background-light]"
                ],
                low: {
                    default: r("bx").getURL(r("bx")("9548"))
                },
                high: {
                    default: r("bx").getURL(r("bx")("9548"))
                }
            },
            {
                id: "bg-chat-dark",
                selectors: [
                    "[data-asset-chat-background-dark]"
                ],
                low: {
                    default: r("bx").getURL(r("bx")("9547"))
                },
                high: {
                    default: r("bx").getURL(r("bx")("9547"))
                }
            }
        ],
        dark: [
            {
                id: "bg-chat-dark",
                selectors: [
                    "[data-asset-chat-background-dark]"
                ],
                low: {
                    default: r("bx").getURL(r("bx")("9547"))
                },
                high: {
                    default: r("bx").getURL(r("bx")("9547"))
                }
            }
        ],
        lightRefreshed: [
            {
                id: "bg-chat-beige",
                selectors: [
                    "[data-asset-chat-background-beige]"
                ],
                low: {
                    default: r("bx").getURL(r("bx")("31422"))
                },
                high: {
                    default: r("bx").getURL(r("bx")("31422"))
                }
            },
            {
                id: "bg-chat-light-refreshed",
                selectors: [
                    "[data-asset-chat-background-light]"
                ],
                low: {
                    default: r("bx").getURL(r("bx")("31402"))
                },
                high: {
                    default: r("bx").getURL(r("bx")("31402"))
                }
            },
            {
                id: "bg-chat-dark-refreshed",
                selectors: [
                    "[data-asset-chat-background-dark]"
                ],
                low: {
                    default: r("bx").getURL(r("bx")("31401"))
                },
                high: {
                    default: r("bx").getURL(r("bx")("31401"))
                }
            }
        ],
        darkRefreshed: [
            {
                id: "bg-chat-dark-refreshed",
                selectors: [
                    "[data-asset-chat-background-dark]"
                ],
                low: {
                    default: r("bx").getURL(r("bx")("31401"))
                },
                high: {
                    default: r("bx").getURL(r("bx")("31401"))
                }
            }
        ],
        smbLight: [
            {
                id: "bg-chat-beige-smb",
                selectors: [
                    "[data-asset-chat-background-beige]"
                ],
                low: {
                    default: r("bx").getURL(r("bx")("25218"))
                },
                high: {
                    default: r("bx").getURL(r("bx")("25218"))
                }
            },
            {
                id: "bg-chat-light-smb",
                selectors: [
                    "[data-asset-chat-background-light]"
                ],
                low: {
                    default: r("bx").getURL(r("bx")("25229"))
                },
                high: {
                    default: r("bx").getURL(r("bx")("25229"))
                }
            },
            {
                id: "bg-chat-dark-smb",
                selectors: [
                    "[data-asset-chat-background-dark]"
                ],
                low: {
                    default: r("bx").getURL(r("bx")("25221"))
                },
                high: {
                    default: r("bx").getURL(r("bx")("25221"))
                }
            }
        ],
        smbDark: [
            {
                id: "bg-chat-dark-smb",
                selectors: [
                    "[data-asset-chat-background-dark]"
                ],
                low: {
                    default: r("bx").getURL(r("bx")("25221"))
                },
                high: {
                    default: r("bx").getURL(r("bx")("25221"))
                }
            }
        ]
    };
    function m() {
        if (o("WAWebUserPrefsGeneral").getSystemThemeMode()) {
            return r("WAWebSystemTheme").getCurrentTheme();
        }
        return o("WAWebUserPrefsGeneral").getTheme();
    }
    function p(e) {
        o("WAWebUserPrefsGeneral").setTheme(e);
        f(e);
    }
    function _() {
        return m() === "dark";
    }
    function f(e) {
        const t = document.body;
        const n = e === "dark";
        if (t != null) {
            t.classList.toggle("dark", n);
        }
        g();
        o("WAWebThemeSession").updateIsDarkTheme(n);
    }
    function g() {
        const e = getComputedStyle(document.body).getPropertyValue("--navbar-background");
        const t = document.querySelectorAll('meta[name="theme-color"]');
        t.forEach((t)=>{
            t.setAttribute("content", e);
        });
    }
    const h = {
        theme: r("WAWebSystemTheme").getCurrentTheme(),
        systemThemeMode: true,
        setTheme: p,
        setSystemThemeMode: o("WAWebUserPrefsGeneral").setSystemThemeMode
    };
    const y = u(h);
    function C() {
        return c(y);
    }
    function b() {
        return C().theme === "dark";
    }
    l.THEME_ASSETS = d;
    l.getTheme = m;
    l.setTheme = p;
    l.isDarkTheme = _;
    l.applyThemeToUI = f;
    l.resetPwaTitlebarColor = g;
    l.ThemeContext = y;
    l.useTheme = C;
    l.useIsDarkTheme = b;
}, 98);