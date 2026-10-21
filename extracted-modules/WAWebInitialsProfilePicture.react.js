__d("WAWebInitialsProfilePicture.react", [
    "$InternalEnum",
    "WABidi",
    "WAWebInitialsFromNameUtils",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebDefaultProfileColors",
    "useWAWebGroupColors"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = n("$InternalEnum").Mirrored([
        "Default",
        "GroupChatProfilePicture",
        "NewsletterQuestionsResponses"
    ]);
    const d = {
        initialsBackground: {
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            color: "x1awj2ng",
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            $$css: true
        },
        initialsNewsletterResponses: {
            width: "x100vrsf",
            height: "x1vqgdyp",
            $$css: true
        },
        initialsDefault: {
            width: "xh8yej3",
            height: "x5yr21d",
            $$css: true
        }
    };
    function m(t) {
        const n = o("react-compiler-runtime").c(22);
        const { initialsData, theme, wid, name, backgroundColorId } = t;
        const p = theme === undefined ? c.Default : theme;
        const _ = o("useWAWebDefaultProfileColors").useDefaultProfileColors(wid, name);
        const { background, foreground } = _;
        let h = o("useWAWebGroupColors").useGroupsColorStyle(backgroundColorId ?? 1, "background");
        h = background ?? h;
        const y = initialsData.firstInitial != null && initialsData.secondInitial != null;
        const C = o("WAWebInitialsFromNameUtils").supportedAlphabetsMap.get(o("WAWebInitialsFromNameUtils").InitialsAlphabets.HAN);
        let b = false;
        if (C && initialsData.secondInitial != null && C.test(initialsData?.secondInitial)) {
            const S = initialsData.secondInitial?.length || 0;
            b = S > 1;
        }
        const dir = initialsData.firstInitial != null && o("WABidi").bidiDir(initialsData.firstInitial) === "rtl" ? "rtl" : "ltr";
        const L = p === c.NewsletterQuestionsResponses ? d.initialsNewsletterResponses : d.initialsDefault;
        let E;
        if (n[0] !== h || n[1] !== L || n[2] !== foreground) {
            E = (e || (e = r("stylex"))).props(d.initialsBackground, L, h, foreground);
            n[0] = h;
            n[1] = L;
            n[2] = foreground;
            n[3] = E;
        } else {
            E = n[3];
        }
        let k;
        if (n[4] !== b || n[5] !== p || n[6] !== y) {
            k = ({
                0: {},
                8: {
                    className: "x1aueamr"
                },
                4: {
                    className: "x1f6kntn"
                },
                12: {
                    className: "x1f6kntn"
                },
                2: {
                    className: "x1nxh6w3"
                },
                10: {
                    className: "x1nxh6w3"
                },
                6: {
                    className: "x1nxh6w3"
                },
                14: {
                    className: "x1nxh6w3"
                },
                1: {
                    className: "x1ncwhqj"
                },
                9: {
                    className: "x1ncwhqj"
                },
                5: {
                    className: "x1ncwhqj"
                },
                13: {
                    className: "x1ncwhqj"
                },
                3: {
                    className: "x1ncwhqj"
                },
                11: {
                    className: "x1ncwhqj"
                },
                7: {
                    className: "x1ncwhqj"
                },
                15: {
                    className: "x1ncwhqj"
                }
            })[(p === c.Default) << 3 | (p === c.GroupChatProfilePicture) << 2 | !!(p === c.GroupChatProfilePicture && y) << 1 | !!b << 0];
            n[4] = b;
            n[5] = p;
            n[6] = y;
            n[7] = k;
        } else {
            k = n[7];
        }
        let I;
        if (n[8] === Symbol.for("react.memo_cache_sentinel")) {
            I = {
                className: "x1rg5ohu xk50ysn"
            };
            n[8] = I;
        } else {
            I = n[8];
        }
        let T;
        if (n[9] !== initialsData.firstInitial) {
            T = <div {...babelHelpers.extends({
                "data-testid": "profile-first-initial"
            }, I, {
                children: initialsData.firstInitial
            })}/>;
            n[9] = initialsData.firstInitial;
            n[10] = T;
        } else {
            T = n[10];
        }
        let D;
        if (n[11] === Symbol.for("react.memo_cache_sentinel")) {
            D = {
                className: "x1rg5ohu xk50ysn"
            };
            n[11] = D;
        } else {
            D = n[11];
        }
        let x;
        if (n[12] !== initialsData.secondInitial) {
            x = <div {...babelHelpers.extends({
                "data-testid": "profile-second-initial"
            }, D, {
                children: initialsData.secondInitial
            })}/>;
            n[12] = initialsData.secondInitial;
            n[13] = x;
        } else {
            x = n[13];
        }
        let $;
        if (n[14] !== dir || n[15] !== k || n[16] !== T || n[17] !== x) {
            $ = <div {...babelHelpers.extends({
                dir
            }, k, {
                children: [
                    T,
                    x
                ]
            })}/>;
            n[14] = dir;
            n[15] = k;
            n[16] = T;
            n[17] = x;
            n[18] = $;
        } else {
            $ = n[18];
        }
        let P;
        if (n[19] !== E || n[20] !== $) {
            P = <div {...babelHelpers.extends({}, E, {
                children: $
            })}/>;
            n[19] = E;
            n[20] = $;
            n[21] = P;
        } else {
            P = n[21];
        }
        return P;
    }
    l.ThemeType = c;
    l.InitialsProfilePicture = m;
}, 98);