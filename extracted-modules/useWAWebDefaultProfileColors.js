__d("useWAWebDefaultProfileColors", [
    "WALogger",
    "WAMd5",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebImg.react",
    "WAWebMetaAiRingAssetResolver",
    "WAWebMetaAiThreadChat",
    "WAWebThemeContext",
    "WDSIconWdsIcBroadcastMessageFill.react",
    "WDSIconWdsIcWhatsapp.react",
    "WDSVars.stylex",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        foreground_light_0: {
            fill: "xpeijrx",
            color: "x1n2m9b9",
            $$css: true
        },
        foreground_light_1: {
            fill: "xexpjjz",
            color: "x1kqjlw6",
            $$css: true
        },
        foreground_light_2: {
            fill: "x188zirx",
            color: "xwqu2pk",
            $$css: true
        },
        foreground_light_3: {
            fill: "x1t468e5",
            color: "x1r8uoeu",
            $$css: true
        },
        foreground_light_4: {
            fill: "xbc7xj4",
            color: "xpn0nk7",
            $$css: true
        },
        foreground_light_5: {
            fill: "xd9is5k",
            color: "x13chq93",
            $$css: true
        },
        foreground_light_6: {
            fill: "x1kqagn2",
            color: "x1n05ped",
            $$css: true
        },
        foreground_light_7: {
            fill: "xkm4go3",
            color: "x5e9l22",
            $$css: true
        },
        foreground_light_8: {
            fill: "x1srln1p",
            color: "xvwrcih",
            $$css: true
        },
        foreground_light_9: {
            fill: "xanjk8j",
            color: "xfb0nyn",
            $$css: true
        },
        background_light_0: {
            backgroundColor: "x149m7kx",
            $$css: true
        },
        background_light_1: {
            backgroundColor: "xskvjhn",
            $$css: true
        },
        background_light_2: {
            backgroundColor: "xp7xho8",
            $$css: true
        },
        background_light_3: {
            backgroundColor: "x14cgl1q",
            $$css: true
        },
        background_light_4: {
            backgroundColor: "x12hqe0l",
            $$css: true
        },
        background_light_5: {
            backgroundColor: "x140zg0z",
            $$css: true
        },
        background_light_6: {
            backgroundColor: "x10w1jpo",
            $$css: true
        },
        background_light_7: {
            backgroundColor: "x1yvm687",
            $$css: true
        },
        background_light_8: {
            backgroundColor: "x750p0p",
            $$css: true
        },
        background_light_9: {
            backgroundColor: "xeoh7ku",
            $$css: true
        },
        foreground_dark_0: {
            fill: "x1bfbhdb",
            color: "x12yyfci",
            $$css: true
        },
        foreground_dark_1: {
            fill: "x93r2cv",
            color: "xxf7ff0",
            $$css: true
        },
        foreground_dark_2: {
            fill: "x5ytfuy",
            color: "x1xys54w",
            $$css: true
        },
        foreground_dark_3: {
            fill: "xuhhb12",
            color: "xpuqgcd",
            $$css: true
        },
        foreground_dark_4: {
            fill: "x1m7lzmn",
            color: "xupum3x",
            $$css: true
        },
        foreground_dark_5: {
            fill: "x44mdgp",
            color: "x1yo833s",
            $$css: true
        },
        foreground_dark_6: {
            fill: "xxedggd",
            color: "x1l5hh2",
            $$css: true
        },
        foreground_dark_7: {
            fill: "x4gg93y",
            color: "x1cs9g36",
            $$css: true
        },
        foreground_dark_8: {
            fill: "x1xt2dww",
            color: "x446drw",
            $$css: true
        },
        foreground_dark_9: {
            fill: "xw0s12w",
            color: "x1y4xi8",
            $$css: true
        },
        background_dark_0: {
            backgroundColor: "x150ih4e",
            $$css: true
        },
        background_dark_1: {
            backgroundColor: "xin3ion",
            $$css: true
        },
        background_dark_2: {
            backgroundColor: "x1irhbf4",
            $$css: true
        },
        background_dark_3: {
            backgroundColor: "x1f4sk58",
            $$css: true
        },
        background_dark_4: {
            backgroundColor: "xv9odtk",
            $$css: true
        },
        background_dark_5: {
            backgroundColor: "xjvoycj",
            $$css: true
        },
        background_dark_6: {
            backgroundColor: "xby4qiw",
            $$css: true
        },
        background_dark_7: {
            backgroundColor: "x1ydycr4",
            $$css: true
        },
        background_dark_8: {
            backgroundColor: "x1otzlqf",
            $$css: true
        },
        background_dark_9: {
            backgroundColor: "x6g3lej",
            $$css: true
        },
        accent_light_0: {
            backgroundColor: "x1ugvjbv",
            $$css: true
        },
        accent_light_1: {
            backgroundColor: "xc0hbaw",
            $$css: true
        },
        accent_light_2: {
            backgroundColor: "xuiuhh6",
            $$css: true
        },
        accent_light_3: {
            backgroundColor: "x1u08djq",
            $$css: true
        },
        accent_light_4: {
            backgroundColor: "xhw09ix",
            $$css: true
        },
        accent_light_5: {
            backgroundColor: "x1cjtxrm",
            $$css: true
        },
        accent_light_6: {
            backgroundColor: "xeh0b9z",
            $$css: true
        },
        accent_light_7: {
            backgroundColor: "xch5qog",
            $$css: true
        },
        accent_light_8: {
            backgroundColor: "xe39q9i",
            $$css: true
        },
        accent_light_9: {
            backgroundColor: "xr2cgwq",
            $$css: true
        },
        accent_dark_0: {
            backgroundColor: "x15pc0x0",
            $$css: true
        },
        accent_dark_1: {
            backgroundColor: "x7g9zlq",
            $$css: true
        },
        accent_dark_2: {
            backgroundColor: "xz8tqu9",
            $$css: true
        },
        accent_dark_3: {
            backgroundColor: "x1q3ucki",
            $$css: true
        },
        accent_dark_4: {
            backgroundColor: "x12bhq1d",
            $$css: true
        },
        accent_dark_5: {
            backgroundColor: "x1j4n4e0",
            $$css: true
        },
        accent_dark_6: {
            backgroundColor: "x1k99n7x",
            $$css: true
        },
        accent_dark_7: {
            backgroundColor: "x1a4nqah",
            $$css: true
        },
        accent_dark_8: {
            backgroundColor: "x14qg5qx",
            $$css: true
        },
        accent_dark_9: {
            backgroundColor: "xq4q3us",
            $$css: true
        },
        foreground_light_grey: {
            fill: "xjppxi3",
            color: "x1164gpu",
            $$css: true
        },
        foreground_dark_grey: {
            fill: "xr5si7y",
            color: "xzn42kv",
            $$css: true
        },
        background_light_grey: {
            backgroundColor: "xp88cpc",
            $$css: true
        },
        background_dark_grey: {
            backgroundColor: "x12vejzz",
            $$css: true
        },
        accent_light_grey: {
            backgroundColor: "xmdl9p3",
            $$css: true
        },
        accent_dark_grey: {
            backgroundColor: "xwldywk",
            $$css: true
        }
    };
    function d(t) {
        const n = o("WAWebChatCollection").ChatCollection.get(t);
        const r = n?.accountLid;
        if (r != null) {
            const a = o("WAWebContactCollection").ContactCollection.get(r);
            if (a != null && !a.isActive()) {
                return null;
            }
        }
        const i = r ?? t;
        const i_user = i.user;
        const s = i_user.charAt(i_user.length - 1);
        const u = parseInt(s, 10);
        if (isNaN(u)) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "getColorIndexFromWid: last character is not a digit, returning fallback color index"
            ])));
            return 0;
        }
        return u;
    }
    function m(e, t) {
        for(var n = o("WAMd5").md5(e), r = 0, a = 0; a < n.length; a++){
            r += n.charCodeAt(a);
        }
        return r % t;
    }
    const p = [
        "pink",
        "skyBlue",
        "yellow",
        "purple",
        "teal",
        "orange",
        "cobalt",
        "brown",
        "red",
        "green"
    ];
    function _(e) {
        if (e.isBroadcastList()) {
            return "gray";
        }
        const t = d(e);
        if (t == null) {
            return "gray";
        }
        return p[t];
    }
    function f(e) {
        if (e.isNewsletter()) {
            return "channel";
        }
        if (e.isGroup()) {
            return "group";
        }
        return "person";
    }
    function g(e) {
        if (e === "light") {
            return {
                background: c.background_light_grey,
                foreground: c.foreground_light_grey,
                accent: c.accent_light_grey
            };
        }
        return {
            background: c.background_dark_grey,
            foreground: c.foreground_dark_grey,
            accent: c.accent_dark_grey
        };
    }
    function h(e, t) {
        const n = e % 10;
        if (t === "light") {
            switch(n){
                case 0:
                    return {
                        background: c.background_light_0,
                        foreground: c.foreground_light_0,
                        accent: c.accent_light_0
                    };
                case 1:
                    return {
                        background: c.background_light_1,
                        foreground: c.foreground_light_1,
                        accent: c.accent_light_1
                    };
                case 2:
                    return {
                        background: c.background_light_2,
                        foreground: c.foreground_light_2,
                        accent: c.accent_light_2
                    };
                case 3:
                    return {
                        background: c.background_light_3,
                        foreground: c.foreground_light_3,
                        accent: c.accent_light_3
                    };
                case 4:
                    return {
                        background: c.background_light_4,
                        foreground: c.foreground_light_4,
                        accent: c.accent_light_4
                    };
                case 5:
                    return {
                        background: c.background_light_5,
                        foreground: c.foreground_light_5,
                        accent: c.accent_light_5
                    };
                case 6:
                    return {
                        background: c.background_light_6,
                        foreground: c.foreground_light_6,
                        accent: c.accent_light_6
                    };
                case 7:
                    return {
                        background: c.background_light_7,
                        foreground: c.foreground_light_7,
                        accent: c.accent_light_7
                    };
                case 8:
                    return {
                        background: c.background_light_8,
                        foreground: c.foreground_light_8,
                        accent: c.accent_light_8
                    };
                default:
                    return {
                        background: c.background_light_9,
                        foreground: c.foreground_light_9,
                        accent: c.accent_light_9
                    };
            }
        }
        if (n === 0) {
            return {
                background: c.background_dark_0,
                foreground: c.foreground_dark_0,
                accent: c.accent_dark_0
            };
        }
        if (n === 1) {
            return {
                background: c.background_dark_1,
                foreground: c.foreground_dark_1,
                accent: c.accent_dark_1
            };
        }
        if (n === 2) {
            return {
                background: c.background_dark_2,
                foreground: c.foreground_dark_2,
                accent: c.accent_dark_2
            };
        }
        if (n === 3) {
            return {
                background: c.background_dark_3,
                foreground: c.foreground_dark_3,
                accent: c.accent_dark_3
            };
        }
        if (n === 4) {
            return {
                background: c.background_dark_4,
                foreground: c.foreground_dark_4,
                accent: c.accent_dark_4
            };
        }
        if (n === 5) {
            return {
                background: c.background_dark_5,
                foreground: c.foreground_dark_5,
                accent: c.accent_dark_5
            };
        }
        if (n === 6) {
            return {
                background: c.background_dark_6,
                foreground: c.foreground_dark_6,
                accent: c.accent_dark_6
            };
        }
        if (n === 7) {
            return {
                background: c.background_dark_7,
                foreground: c.foreground_dark_7,
                accent: c.accent_dark_7
            };
        }
        if (n === 8) {
            return {
                background: c.background_dark_8,
                foreground: c.foreground_dark_8,
                accent: c.accent_dark_8
            };
        }
        return {
            background: c.background_dark_9,
            foreground: c.foreground_dark_9,
            accent: c.accent_dark_9
        };
    }
    function y(e) {
        if (e.isPSA() || e.isSupportAgentBot()) {
            return v;
        }
        if (e.isBroadcastList()) {
            return b;
        }
        if (o("WAWebMetaAiThreadChat").isMetaAiThreadChat(e)) {
            return C;
        }
        return null;
    }
    function C(e) {
        const Component = r("WAWebImg.react");
        return <Component alt="" src={o("WAWebMetaAiRingAssetResolver").getMetaAiProfileURL()} style={{
            height: "100%",
            width: "100%"
        }}/>;
    }
    C.displayName = `${C.name} [from ${i.id}]`;
    function b({ height, width }) {
        return u.jsx(r("WDSIconWdsIcBroadcastMessageFill.react"), {
            height,
            width,
            "aria-hidden": true
        });
    }
    b.displayName = `${b.name} [from ${i.id}]`;
    function v({ height, width }) {
        return u.jsx(r("WDSIconWdsIcWhatsapp.react"), {
            height,
            width,
            "aria-hidden": true,
            colorName: "persistentAlwaysWhite"
        });
    }
    v.displayName = `${v.name} [from ${i.id}]`;
    const S = {
        surface: o("WDSVars.stylex").WDSColors["--WDS-persistent-activity-indicator"],
        content: o("WDSVars.stylex").WDSColors["--WDS-persistent-always-white"]
    };
    function R(e) {
        if (e.isPSA() || e.isSupportAgentBot()) {
            return S;
        }
        if (o("WAWebMetaAiThreadChat").isMetaAiThreadChat(e)) {
            return L;
        }
        return null;
    }
    var L = {
        content: o("WDSVars.stylex").WDSColors["--WDS-content-default"],
        surface: "transparent"
    };
    const E = [
        "#FF72A1",
        "#53BDEB",
        "#FFD279",
        "#A791FF",
        "#42C7B8",
        "#FC9775",
        "#53A6FD",
        "#DBA685",
        "#FB5061",
        "#25D366"
    ];
    function k(e) {
        const t = d(e);
        if (t == null) {
            return null;
        }
        return E[t];
    }
    function I(e, t) {
        const n = o("react-compiler-runtime").c(10);
        const r = o("WAWebThemeContext").useTheme();
        const r_theme = r.theme;
        if (t != null) {
            let i;
            if (n[0] !== t || n[1] !== r_theme) {
                i = h(m(t, p.length), r_theme);
                n[0] = t;
                n[1] = r_theme;
                n[2] = i;
            } else {
                i = n[2];
            }
            return i;
        }
        if (e == null) {
            let l;
            if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
                l = {};
                n[3] = l;
            } else {
                l = n[3];
            }
            return l;
        }
        let s;
        let u;
        if (n[4] !== r_theme || n[5] !== e) {
            u = Symbol.for("react.early_return_sentinel");
            e: {
                const c = d(e);
                if (c == null) {
                    let _;
                    if (n[8] !== r_theme) {
                        _ = g(r_theme);
                        n[8] = r_theme;
                        n[9] = _;
                    } else {
                        _ = n[9];
                    }
                    u = _;
                    break e;
                }
                s = h(c, r_theme);
            }
            n[4] = r_theme;
            n[5] = e;
            n[6] = s;
            n[7] = u;
        } else {
            s = n[6];
            u = n[7];
        }
        if (u !== Symbol.for("react.early_return_sentinel")) {
            return u;
        }
        return s;
    }
    function T(e) {
        const t = o("react-compiler-runtime").c(6);
        const n = o("WAWebThemeContext").useTheme();
        const n_theme = n.theme;
        if (e == null) {
            return null;
        }
        let a;
        let i;
        if (t[0] !== n_theme || t[1] !== e) {
            i = Symbol.for("react.early_return_sentinel");
            e: {
                const l = d(e);
                if (l == null) {
                    let s;
                    if (t[4] !== n_theme) {
                        s = D(n_theme);
                        t[4] = n_theme;
                        t[5] = s;
                    } else {
                        s = t[5];
                    }
                    i = s;
                    break e;
                }
                a = x(l, n_theme);
            }
            t[0] = n_theme;
            t[1] = e;
            t[2] = a;
            t[3] = i;
        } else {
            a = t[2];
            i = t[3];
        }
        if (i !== Symbol.for("react.early_return_sentinel")) {
            return i;
        }
        return a;
    }
    function D(e) {
        if (e === "light") {
            return [
                0.40000000596,
                0.466666668653,
                0.505882382393,
                1
            ];
        }
        return [
            0.525490224361,
            0.588235318661,
            0.627451002598,
            1
        ];
    }
    function x(e, t) {
        const n = e % 10;
        if (t === "light") {
            switch(n){
                case 0:
                    return [
                        0.831372549,
                        0.164705882,
                        0.4,
                        1
                    ];
                case 1:
                    return [
                        0.007843137,
                        0.494117647,
                        0.709803922,
                        1
                    ];
                case 2:
                    return [
                        0.615686275,
                        0.423529412,
                        0.17254902,
                        1
                    ];
                case 3:
                    return [
                        0.368627451,
                        0.278431373,
                        0.870588235,
                        1
                    ];
                case 4:
                    return [
                        0.007843137,
                        0.51372549,
                        0.466666667,
                        1
                    ];
                case 5:
                    return [
                        0.768627451,
                        0.325490196,
                        0.176470588,
                        1
                    ];
                case 6:
                    return [
                        0,
                        0.388235294,
                        0.796078431,
                        1
                    ];
                case 7:
                    return [
                        0.521568627,
                        0.333333333,
                        0.219607843,
                        1
                    ];
                case 8:
                    return [
                        0.721568627,
                        0.019607843,
                        0.192156863,
                        1
                    ];
                case 9:
                    return [
                        0.105882353,
                        0.529411765,
                        0.333333333,
                        1
                    ];
                default:
                    return [
                        0.40000000596,
                        0.466666668653,
                        0.505882382393,
                        1
                    ];
            }
        }
        if (n === 0) {
            return [
                1,
                0.447058824,
                0.631372549,
                1
            ];
        }
        if (n === 1) {
            return [
                0.325490196,
                0.741176471,
                0.921568627,
                1
            ];
        }
        if (n === 2) {
            return [
                1,
                0.823529412,
                0.474509804,
                1
            ];
        }
        if (n === 3) {
            return [
                0.654901961,
                0.568627451,
                1,
                1
            ];
        }
        if (n === 4) {
            return [
                0.258823529,
                0.780392157,
                0.721568627,
                1
            ];
        }
        if (n === 5) {
            return [
                0.988235294,
                0.592156863,
                0.458823529,
                1
            ];
        }
        if (n === 6) {
            return [
                0.325490196,
                0.650980392,
                0.992156863,
                1
            ];
        }
        if (n === 7) {
            return [
                0.858823529,
                0.650980392,
                0.521568627,
                1
            ];
        }
        if (n === 8) {
            return [
                0.984313725,
                0.31372549,
                0.380392157,
                1
            ];
        }
        if (n === 9) {
            return [
                0.145098039,
                0.82745098,
                0.4,
                1
            ];
        }
        return [
            0.525490224361,
            0.588235318661,
            0.627451002598,
            1
        ];
    }
    l.getWDSProfilePhotoColor = _;
    l.getWDSProfilePhotoType = f;
    l.getProfilePhotoPlaceholderIcon = y;
    l.getWDSProfilePhotoCustomColor = R;
    l.getDefaultProfilePhotoAccentColor = k;
    l.useDefaultProfileColors = I;
    l.useDefaultProfileColorRGB = T;
}, 98);