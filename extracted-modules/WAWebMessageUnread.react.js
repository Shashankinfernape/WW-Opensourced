__d("WAWebMessageUnread.react", [
    "fbt",
    "WAWebThemeContext",
    "WDSMargins.stylex",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = {
        msgUnreadRefresh: {
            width: "xh8yej3",
            marginInlineStart: "x1b1opl3",
            textAlign: "x2b8uid",
            backgroundColor: "x1bu39yj",
            paddingTop: "x1tiyuxx",
            paddingBottom: "x1nbhmlj",
            maxWidth: "xquzyny",
            $$css: true
        },
        msgUnreadDark: {
            borderTopWidth: null,
            borderBottomWidth: null,
            $$css: true
        }
    };
    function m(t) {
        const n = o("react-compiler-runtime").c(15);
        const { count, textContainerRef } = t;
        const l = o("WAWebThemeContext").useIsDarkTheme();
        let u;
        if (n[0] !== count) {
            u = s._("_j{\"*\":\"{count} unread messages\",\"_1\":\"1 unread message\"}", [
                s._plural(count, "count")
            ]);
            n[0] = count;
            n[1] = u;
        } else {
            u = n[1];
        }
        const m = u;
        const p = l && d.msgUnreadDark;
        let _;
        let f;
        if (n[2] !== p || n[3] !== m) {
            const g = [
                p,
                d.msgUnreadRefresh,
                o("WDSMargins.stylex").wdsMargins.marginHorAuto,
                o("WDSMargins.stylex").wdsMargins.marginBottom12
            ];
            let h;
            if (n[6] !== m) {
                const Component = r("WDSText.react");
                h = <Component type="Body3Emphasized" colorName="contentDefault">{m}</Component>;
                n[6] = m;
                n[7] = h;
            } else {
                h = n[7];
            }
            f = h;
            _ = (e || (e = r("stylex"))).props(g);
            n[2] = p;
            n[3] = m;
            n[4] = _;
            n[5] = f;
        } else {
            _ = n[4];
            f = n[5];
        }
        let y;
        if (n[8] === Symbol.for("react.memo_cache_sentinel")) {
            y = {
                className: "x9f619 x1rg5ohu xq8v1hd xojvqvm x6ikm8r x10wlt62 xlyipyv xuxw1ft x1k43qru x1g83kfv x3qq2k7 x2x8art x1qor8vf x1iw51ew xde1mab xhsao0n"
            };
            n[8] = y;
        } else {
            y = n[8];
        }
        let C;
        if (n[9] !== f) {
            C = <span {...babelHelpers.extends({}, y, {
                "aria-live": "polite",
                children: f
            })}/>;
            n[9] = f;
            n[10] = C;
        } else {
            C = n[10];
        }
        let b;
        if (n[11] !== _ || n[12] !== C || n[13] !== textContainerRef) {
            b = <div {...babelHelpers.extends({}, _, {
                ref: textContainerRef,
                children: C
            })}/>;
            n[11] = _;
            n[12] = C;
            n[13] = textContainerRef;
            n[14] = b;
        } else {
            b = n[14];
        }
        return b;
    }
    l.default = m;
}, 226);