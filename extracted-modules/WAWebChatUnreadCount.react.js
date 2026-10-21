__d("WAWebChatUnreadCount.react", [
    "fbt",
    "$InternalEnum",
    "WAWebCountRenderingUtils",
    "WAWebL10N",
    "WAWebThemeContext",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = n("$InternalEnum").Mirrored([
        "Transparent",
        "Outlined",
        "MissedCalls",
        "QuestionResponses",
        "ChatThread",
        "Deemphasized"
    ]);
    const m = {
        count: {
            display: "x1rg5ohu",
            paddingTop: "x1gxa6cn",
            paddingInlineEnd: "x1j8ymqv",
            paddingBottom: "xa0aww2",
            paddingInlineStart: "x4tra6z",
            color: "x1pse0pq",
            verticalAlign: "x16dsc37",
            height: "xlup9mm",
            minWidth: "x15kz4h8",
            textAlign: "x2b8uid",
            borderStartStartRadius: "xt8t1vi",
            borderStartEndRadius: "x1xc408v",
            borderEndEndRadius: "x129tdwq",
            borderEndStartRadius: "x15urzxu",
            $$css: true
        },
        countMorePadding: {
            paddingInlineStart: "x181vq82",
            paddingInlineEnd: "x1uc92m",
            $$css: true
        },
        outlinePaddingReposition: {
            marginInlineStart: "x165d6jo",
            $$css: true
        },
        transparent: {
            backgroundColor: "xjbqb8w",
            $$css: true
        },
        fixWordBreak: {
            wordBreak: "xdnwjd9",
            $$css: true
        },
        outlined: {
            borderTopWidth: "x1ktv7sr",
            borderInlineEndWidth: "x142x0oa",
            borderBottomWidth: "xv7zg05",
            borderInlineStartWidth: "x12dgle5",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopColor: "x1yqpz0i",
            borderInlineEndColor: "x1lebdv1",
            borderBottomColor: "x1454cx3",
            borderInlineStartColor: "x1qppnnw",
            $$css: true
        },
        defaultBg: {
            backgroundColor: "xyp3urf",
            $$css: true
        },
        missedCallBg: {
            backgroundColor: "xk0ssx3",
            $$css: true
        },
        chatThreadBg: {
            backgroundColor: "xfn3atn",
            $$css: true
        },
        deemphasizedBg: {
            backgroundColor: "x1lun4lh",
            boxShadow: "xvg832a",
            $$css: true
        },
        deemphasizedBgDark: {
            backgroundColor: "xice4io",
            boxShadow: "xvg832a",
            $$css: true
        },
        marginHoriz8: {
            marginInlineStart: "x150mmf0",
            marginInlineEnd: "xqf2s3x",
            marginLeft: null,
            marginRight: null,
            $$css: true
        }
    };
    function p(t) {
        const n = o("react-compiler-runtime").c(28);
        const { ariaLabel, count, maxCount, ref, theme } = t;
        const _ = maxCount === undefined ? 1000 : maxCount;
        const f = o("WAWebThemeContext").useIsDarkTheme();
        let g;
        if (ariaLabel != null && ariaLabel !== "") {
            g = ariaLabel;
        } else if (count > 0) {
            let h;
            if (n[0] !== count) {
                h = s._("_j{\"*\":\"{count} unread messages\",\"_1\":\"1 unread message\"}", [
                    s._plural(count, "count")
                ]);
                n[0] = count;
                n[1] = h;
            } else {
                h = n[1];
            }
            g = h;
        } else {
            let y;
            if (n[2] === Symbol.for("react.memo_cache_sentinel")) {
                y = s._("Unread");
                n[2] = y;
            } else {
                y = n[2];
            }
            g = y;
        }
        const C = theme === d.Transparent || theme === d.Deemphasized ? "contentDeemphasized" : "contentOnAccent";
        const b = theme === d.MissedCalls ? m.missedCallBg : theme === d.ChatThread ? m.chatThreadBg : theme === d.Deemphasized ? f ? m.deemphasizedBgDark : m.deemphasizedBg : m.defaultBg;
        let v;
        let S;
        let R;
        let L;
        let E;
        if (n[3] !== b || n[4] !== count || n[5] !== _ || n[6] !== ref || n[7] !== theme) {
            const k = [
                m.count,
                b
            ];
            if (count >= 10) {
                k.push(m.countMorePadding);
                if (theme === d.Outlined || theme === d.MissedCalls) {
                    k.push(m.outlinePaddingReposition);
                }
            }
            if (theme === d.Outlined || theme === d.MissedCalls) {
                k.push(m.outlined);
            } else if (theme === d.Transparent) {
                k.push(m.transparent);
            } else if (theme === d.QuestionResponses) {
                k.push(m.marginHoriz8);
            }
            const I = theme === d.MissedCalls ? "missed-call-counter" : "icon-unread-count";
            const T = theme === d.MissedCalls ? "missed_call" : "unread_message";
            let D;
            if (n[13] !== count || n[14] !== T || n[15] !== _ || n[16] !== theme) {
                D = theme === d.QuestionResponses ? r("WAWebL10N").d(count) : o("WAWebCountRenderingUtils").renderCount(count, _, T);
                n[13] = count;
                n[14] = T;
                n[15] = _;
                n[16] = theme;
                n[17] = D;
            } else {
                D = n[17];
            }
            v = D;
            S = ref;
            R = I;
            L = theme === d.Deemphasized ? true : undefined;
            E = (e || (e = r("stylex"))).props(k);
            n[3] = b;
            n[4] = count;
            n[5] = _;
            n[6] = ref;
            n[7] = theme;
            n[8] = v;
            n[9] = S;
            n[10] = R;
            n[11] = L;
            n[12] = E;
        } else {
            v = n[8];
            S = n[9];
            R = n[10];
            L = n[11];
            E = n[12];
        }
        let x;
        if (n[18] !== v || n[19] !== C) {
            const Component = r("WDSText.react");
            x = <Component type="Body3Emphasized" colorName={C} xstyle={m.fixWordBreak}>{v}</Component>;
            n[18] = v;
            n[19] = C;
            n[20] = x;
        } else {
            x = n[20];
        }
        let $;
        if (n[21] !== S || n[22] !== R || n[23] !== L || n[24] !== E || n[25] !== x || n[26] !== g) {
            $ = <span {...babelHelpers.extends({
                ref: S,
                "data-testid": R,
                "data-dimmed": L
            }, E, {
                "aria-label": g,
                children: x
            })}/>;
            n[21] = S;
            n[22] = R;
            n[23] = L;
            n[24] = E;
            n[25] = x;
            n[26] = g;
            n[27] = $;
        } else {
            $ = n[27];
        }
        return $;
    }
    l.UnreadCountTheme = d;
    l.UnreadCount = p;
}, 226);