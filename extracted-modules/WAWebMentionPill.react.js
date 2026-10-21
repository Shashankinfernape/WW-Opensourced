__d("WAWebMentionPill.react", [
    "WAWebClickable.react",
    "WAWebThemeContext",
    "WDSIconIcAlternateEmail.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = 18;
    const d = {
        pill: {
            fontWeight: "xo1l8bm",
            display: "x3nfvp2",
            alignItems: "x1pha0wt",
            verticalAlign: "x11njtxf",
            lineHeight: "x1fc57z9",
            rowGap: "x1b73lln",
            columnGap: "x46w9ns",
            borderStartStartRadius: "xfz005n",
            borderStartEndRadius: "x1bdwhfj",
            borderEndEndRadius: "x1d0r7hm",
            borderEndStartRadius: "xn20xpo",
            paddingInlineStart: "x181vq82",
            paddingInlineEnd: "x1uc92m",
            position: "x1n2onr6",
            textIndent: "xzugeeo",
            whiteSpace: "xuxw1ft",
            ":focus-visible_outlineColor": "xtnn1bt",
            ":focus-visible_outlineStyle": "x9v5kkp",
            ":focus-visible_outlineOffset": "xmw7ebm",
            ":focus-visible_outlineWidth": "xrdum7p",
            "::after_content": "x1s928wv",
            "::after_position": "x1j6awrg",
            "::after_top": "x1m1drc7",
            "::after_insetInlineStart": "x1iygr5g",
            "::after_pointerEvents": "x2q1x1w",
            "::after_borderStartStartRadius": "xfijbtm",
            "::after_borderStartEndRadius": "xfenqrj",
            "::after_borderEndEndRadius": "xgy0gl7",
            "::after_borderEndStartRadius": "x19igvu",
            "::after_width": "x4eaejv",
            "::after_height": "x1wsn0xg",
            $$css: true
        },
        pillMeUnreadIncoming: {
            fontWeight: "xfjzk2p",
            backgroundColor: "xyp3urf",
            color: "x1pse0pq",
            ":hover::after_backgroundColor": "x1kivvwo",
            $$css: true
        },
        pillMeReadIncomingLight: {
            backgroundColor: "xeoh7ku",
            color: "x703958",
            ":hover::after_backgroundColor": "x1wjp2x",
            $$css: true
        },
        pillMeReadIncomingDark: {
            backgroundColor: "xkduh88",
            color: "x7lkujm",
            ":hover::after_backgroundColor": "x1wjp2x",
            $$css: true
        },
        pillOthersIncoming: {
            backgroundColor: "x4wrhlh",
            color: "x14ug900",
            ":hover::after_backgroundColor": "x1wb366y",
            $$css: true
        },
        pillOutgoing: {
            backgroundColor: "x4wrhlh",
            color: "x14ug900",
            ":hover::after_backgroundColor": "x1wb366y",
            $$css: true
        },
        pillQuoted: {
            backgroundColor: "xjbqb8w",
            color: "xhslqc4",
            $$css: true
        }
    };
    function m({ isLight, isMe, isOutgoing, isQuoted, isRead }) {
        if (isQuoted === true) {
            return d.pillQuoted;
        }
        if (isOutgoing) {
            return d.pillOutgoing;
        }
        if (isMe && isRead) {
            if (isLight) {
                return d.pillMeReadIncomingLight;
            }
            return d.pillMeReadIncomingDark;
        }
        if (isMe) {
            return d.pillMeUnreadIncoming;
        }
        return d.pillOthersIncoming;
    }
    function p(t) {
        const n = o("react-compiler-runtime").c(14);
        const { children, isMe, isOutgoing, isQuoted, isRead, onClick } = t;
        const f = o("WAWebThemeContext").useTheme();
        const f_theme = f.theme;
        let h;
        let y;
        if (n[0] !== isMe || n[1] !== isOutgoing || n[2] !== isQuoted || n[3] !== isRead || n[4] !== f_theme) {
            const C = m({
                isLight: f_theme === "light",
                isMe,
                isOutgoing,
                isQuoted,
                isRead
            });
            h = o("WAWebClickable.react").Clickable;
            y = (e || (e = r("stylex")))([
                d.pill,
                C
            ]);
            n[0] = isMe;
            n[1] = isOutgoing;
            n[2] = isQuoted;
            n[3] = isRead;
            n[4] = f_theme;
            n[5] = h;
            n[6] = y;
        } else {
            h = n[5];
            y = n[6];
        }
        const b = isQuoted === true ? undefined : onClick;
        const v = isQuoted === true ? -1 : 0;
        let S;
        if (n[7] === Symbol.for("react.memo_cache_sentinel")) {
            S = <span className="x3nfvp2 x2lah0s xamitd3">{u.jsx(r("WDSIconIcAlternateEmail.react"), {
                width: c,
                height: c
            })}</span>;
            n[7] = S;
        } else {
            S = n[7];
        }
        let R;
        if (n[8] !== h || n[9] !== children || n[10] !== y || n[11] !== b || n[12] !== v) {
            R = u.jsxs(h, {
                className: y,
                onClick: b,
                role: "button",
                tabIndex: v,
                children: [
                    S,
                    children
                ]
            });
            n[8] = h;
            n[9] = children;
            n[10] = y;
            n[11] = b;
            n[12] = v;
            n[13] = R;
        } else {
            R = n[13];
        }
        return R;
    }
    l.default = p;
}, 98);