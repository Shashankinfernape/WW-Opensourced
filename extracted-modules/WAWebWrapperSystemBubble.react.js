__d("WAWebWrapperSystemBubble.react", [
    "WAWebABProps",
    "WAWebClassnames",
    "WAWebKeyboardListHotKeys.react",
    "WAWebThemeContext",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = {
        msg: {
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            paddingInlineEnd: "x141l45o",
            paddingInlineStart: "x1h3r9g6",
            userSelect: "x1hx0egp",
            $$css: true
        },
        msgSystem: {
            display: "x78zum5",
            flexDirection: "x1q0g3np",
            justifyContent: "xl56j7k",
            $$css: true
        },
        sticky: {
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            $$css: true
        },
        center: {
            height: "x5yr21d",
            alignItems: "x6s0dn4",
            $$css: true
        },
        msgBottomPadding: {
            paddingBottom: "xscbp6u",
            $$css: true
        },
        groupHistoryBackground: {
            position: "x1n2onr6",
            "::before_content": "x1cpjm7i",
            "::before_position": "x1hmns74",
            "::before_top": "x1y3wzot",
            "::before_bottom": "xhq5o37",
            "::before_insetInlineStart": "xfbisj7",
            "::before_left": null,
            "::before_right": null,
            "::before_transform": "xnyzbwf",
            "::before_width": "xkeh78v",
            "::before_zIndex": "xy5mcqj",
            $$css: true
        },
        groupHistoryBackgroundLight: {
            "::before_backgroundColor": "xd3jkiw",
            $$css: true
        },
        groupHistoryBackgroundDark: {
            "::before_backgroundColor": "x5cow8b",
            $$css: true
        }
    };
    function m(t) {
        const n = o("react-compiler-runtime").c(20);
        let a;
        let i;
        if (n[0] !== t) {
            i = t.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        const l = o("WAWebThemeContext").useIsDarkTheme();
        let u = null;
        if (a.theme === "center") {
            u = d.center;
        } else if (a.theme === "sticky") {
            u = d.sticky;
        }
        const a_testid = a.testid;
        let p;
        if (n[3] !== l || n[4] !== a.groupHistoryBackground || n[5] !== a.isFocusable || n[6] !== a.xstyle || n[7] !== u) {
            p = o("WAWebClassnames").classnamesConvertMeToStylexPlease({
                [o("WAWebKeyboardListHotKeys.react").LIST_FOCUSABLE_ITEM_CLASS_NAME]: a.isFocusable
            }, (s || (s = r("stylex")))(d.msg, d.msgSystem, d.msgBottomPadding, u, a.groupHistoryBackground === true && d.groupHistoryBackground, a.groupHistoryBackground === true && (l ? d.groupHistoryBackgroundDark : d.groupHistoryBackgroundLight), a.xstyle));
            n[3] = l;
            n[4] = a.groupHistoryBackground;
            n[5] = a.isFocusable;
            n[6] = a.xstyle;
            n[7] = u;
            n[8] = p;
        } else {
            p = n[8];
        }
        let f;
        if (n[9] !== a.hidden || n[10] !== a.theme) {
            f = ({
                0: {
                    className: "x1n2onr6 x9f619 x1rg5ohu x1okw0bk x193iq5w x1tiyuxx x1nbhmlj x1iw51ew xde1mab xhslqc4 x2b8uid x1iyt1tq xrxyp3c xv0oops x1isl5vh xn8zj9a x1d403nt x12lqup9 x17fgdl5"
                },
                4: {
                    className: "x1n2onr6 x9f619 x1rg5ohu x1okw0bk x193iq5w x1tiyuxx x1nbhmlj x1iw51ew xde1mab xhslqc4 x2b8uid x1iyt1tq xrxyp3c xv0oops x1isl5vh xn8zj9a x1d403nt x12lqup9 x19v9tvf"
                },
                2: {
                    className: "x1n2onr6 x9f619 x1rg5ohu x1okw0bk x193iq5w x1tiyuxx x1nbhmlj x1iw51ew xde1mab xhslqc4 x2b8uid x1iyt1tq xrxyp3c xv0oops x1isl5vh xn8zj9a x1d403nt x12lqup9 x17fgdl5 xlshs6z"
                },
                6: {
                    className: "x1n2onr6 x9f619 x1rg5ohu x1okw0bk x193iq5w x1tiyuxx x1nbhmlj x1iw51ew xde1mab xhslqc4 x2b8uid x1iyt1tq xrxyp3c xv0oops x1isl5vh xn8zj9a x1d403nt x12lqup9 x19v9tvf xlshs6z"
                },
                1: {
                    className: "x1n2onr6 x9f619 x1rg5ohu x1okw0bk x193iq5w xhslqc4 x2b8uid x1iyt1tq xrxyp3c xv0oops x1isl5vh xn8zj9a x1d403nt x12lqup9 x17fgdl5 x889kno x2vl965 x1a8lsjc xe2zdcy"
                },
                5: {
                    className: "x1n2onr6 x9f619 x1rg5ohu x1okw0bk x193iq5w xhslqc4 x2b8uid x1iyt1tq xrxyp3c xv0oops x1isl5vh xn8zj9a x1d403nt x12lqup9 x19v9tvf x889kno x2vl965 x1a8lsjc xe2zdcy"
                },
                3: {
                    className: "x1n2onr6 x9f619 x1rg5ohu x1okw0bk x193iq5w xhslqc4 x2b8uid x1iyt1tq xrxyp3c xv0oops x1isl5vh xn8zj9a x1d403nt x12lqup9 x17fgdl5 xlshs6z x889kno x2vl965 x1a8lsjc xe2zdcy"
                },
                7: {
                    className: "x1n2onr6 x9f619 x1rg5ohu x1okw0bk x193iq5w xhslqc4 x2b8uid x1iyt1tq xrxyp3c xv0oops x1isl5vh xn8zj9a x1d403nt x12lqup9 x19v9tvf xlshs6z x889kno x2vl965 x1a8lsjc xe2zdcy"
                }
            })[!!o("WAWebABProps").getABPropConfigValue("wa_web_highlight_me_mention") << 2 | (a.hidden === true) << 1 | (a.theme === "center") << 0];
            n[9] = a.hidden;
            n[10] = a.theme;
            n[11] = f;
        } else {
            f = n[11];
        }
        let g;
        if (n[12] !== a.children || n[13] !== f) {
            g = <div {...babelHelpers.extends({}, f, {
                children: a.children
            })}/>;
            n[12] = a.children;
            n[13] = f;
            n[14] = g;
        } else {
            g = n[14];
        }
        let h;
        if (n[15] !== a.testid || n[16] !== i || n[17] !== p || n[18] !== g) {
            h = <div data-testid={a_testid} className={p} tabIndex={-1} ref={i}>{g}</div>;
            n[15] = a.testid;
            n[16] = i;
            n[17] = p;
            n[18] = g;
            n[19] = h;
        } else {
            h = n[19];
        }
        return h;
    }
    l.default = m;
}, 98);