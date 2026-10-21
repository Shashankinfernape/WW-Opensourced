__d("WAWebMsgPreview.react", [
    "WAWebChatPreferenceGetters",
    "WAWebChatThemeValue",
    "WAWebConversationBackground.react",
    "WAWebThemeContext",
    "WAWebWallpaper",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebChatPreferenceValues"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useImperativeHandle, useRef } = c;
    const p = {
        container: {
            maxHeight: "x8xanyk",
            overflowX: "x6ikm8r",
            overflowY: "x1odjw0f",
            $$css: true
        },
        body: {
            position: "x1n2onr6",
            paddingTop: "x1h678fw",
            paddingInlineEnd: "xyo0t3i",
            paddingBottom: "xv6tirj",
            paddingInlineStart: "xdylf7x",
            backgroundColor: "x1q80dvb",
            transitionProperty: "x15406qy",
            transitionDuration: "x1d8287x",
            transitionTimingFunction: "xwji4o3",
            $$css: true
        },
        bodyBackgroundWallpaper: function(t) {
            return [
                {
                    backgroundColor: t != null ? "xl8spv7" : t,
                    $$css: true
                },
                {
                    "--x-backgroundColor": t ?? undefined
                }
            ];
        },
        bodyRefreshed: {
            borderStartStartRadius: "xyi3aci",
            borderStartEndRadius: "xwf5gio",
            borderEndEndRadius: "x1p453bz",
            borderEndStartRadius: "x1suzm8a",
            $$css: true
        },
        marginBottom20: {
            marginBottom: "xdqhqc9",
            $$css: true
        },
        paddingHoriz20: {
            paddingInlineStart: "x1phvje8",
            paddingInlineEnd: "xcldk2z",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        }
    };
    function _(t) {
        const n = o("react-compiler-runtime").c(22);
        const { bodyXstyle, chatPreference, children, containerXstyle, ref } = t;
        const _RefRef = useRef(null);
        let f;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            f = [
                o("WAWebChatPreferenceGetters").getWallpaperValue
            ];
            n[0] = f;
        } else {
            f = n[0];
        }
        const g = o("useWAWebChatPreferenceValues").useChatPreferenceValues(chatPreference.id, f);
        const h = g[0];
        const y = o("WAWebThemeContext").useIsDarkTheme();
        let C;
        if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
            C = function() {
                return {
                    getContainer: function() {
                        return _RefRef.current;
                    }
                };
            };
            n[1] = C;
        } else {
            C = n[1];
        }
        useImperativeHandle(ref, C);
        let showDoodle;
        let v;
        let S;
        let R;
        let wallpaper;
        if (n[2] !== bodyXstyle || n[3] !== containerXstyle || n[4] !== y || n[5] !== h) {
            const E = o("WAWebChatThemeValue").wallpaperBackgroundFromValue(h, y ? "dark" : "light");
            showDoodle = E.showDoodle;
            wallpaper = E.wallpaper;
            let k;
            if (wallpaper !== o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER) {
                k = p.bodyBackgroundWallpaper(wallpaper);
            }
            const I = [
                p.container,
                containerXstyle
            ];
            const T = [
                p.body,
                bodyXstyle
            ];
            I.push(p.paddingHoriz20, p.marginBottom20);
            T.push(p.bodyRefreshed);
            S = (e || (e = r("stylex"))).props(I);
            R = _RefRef;
            v = e.props(T, k);
            n[2] = bodyXstyle;
            n[3] = containerXstyle;
            n[4] = y;
            n[5] = h;
            n[6] = showDoodle;
            n[7] = v;
            n[8] = S;
            n[9] = R;
            n[10] = wallpaper;
        } else {
            showDoodle = n[6];
            v = n[7];
            S = n[8];
            R = n[9];
            wallpaper = n[10];
        }
        let D;
        if (n[11] !== showDoodle || n[12] !== wallpaper) {
            D = u.jsx(r("WAWebConversationBackground.react"), {
                wallpaper,
                showDoodle
            });
            n[11] = showDoodle;
            n[12] = wallpaper;
            n[13] = D;
        } else {
            D = n[13];
        }
        let x;
        if (n[14] !== children || n[15] !== v || n[16] !== D) {
            x = <div {...babelHelpers.extends({}, v, {
                children: [
                    D,
                    children
                ]
            })}/>;
            n[14] = children;
            n[15] = v;
            n[16] = D;
            n[17] = x;
        } else {
            x = n[17];
        }
        let $;
        if (n[18] !== S || n[19] !== R || n[20] !== x) {
            $ = <div {...babelHelpers.extends({}, S, {
                ref: R,
                children: x
            })}/>;
            n[18] = S;
            n[19] = R;
            n[20] = x;
            n[21] = $;
        } else {
            $ = n[21];
        }
        return $;
    }
    l.default = _;
}, 98);