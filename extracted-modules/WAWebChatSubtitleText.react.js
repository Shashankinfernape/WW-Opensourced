__d("WAWebChatSubtitleText.react", [
    "WAWebEmoji",
    "WAWebEmoji.react",
    "WAWebEmojiText.react",
    "WDSIconIcLock.react",
    "WDSMargins.stylex",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        chatSubtitleText: {
            flexGrow: "x1iyjqo2",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            textOverflow: "xlyipyv",
            whiteSpace: "xuxw1ft",
            $$css: true
        },
        icon: {
            display: "x1rg5ohu",
            flexGrow: "x1c4vz4f",
            flexShrink: "x2lah0s",
            flexBasis: "xdl72j9",
            color: "xhslqc4",
            $$css: true
        }
    };
    function d(t) {
        const n = o("react-compiler-runtime").c(18);
        const { ariaLabel, location, showLockIcon, text, textStatusEmoji } = t;
        let m;
        if (textStatusEmoji != null) {
            let p;
            if (n[0] !== textStatusEmoji) {
                p = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(textStatusEmoji);
                n[0] = textStatusEmoji;
                n[1] = p;
            } else {
                p = n[1];
            }
            const _ = p;
            if (_ != null) {
                let f;
                if (n[2] === Symbol.for("react.memo_cache_sentinel")) {
                    f = {
                        className: "x1gabggj"
                    };
                    n[2] = f;
                } else {
                    f = n[2];
                }
                let g;
                if (n[3] !== _) {
                    g = <div {...babelHelpers.extends({}, f, {
                        children: u.jsx(r("WAWebEmoji.react"), {
                            emoji: _,
                            size: "small"
                        }, "low-res")
                    })}/>;
                    n[3] = _;
                    n[4] = g;
                } else {
                    g = n[4];
                }
                m = g;
            }
        }
        let h;
        if (n[5] === Symbol.for("react.memo_cache_sentinel")) {
            h = u.jsx(r("WDSIconIcLock.react"), {
                height: 12,
                width: 12,
                testid: "lock-outline"
            });
            n[5] = h;
        } else {
            h = n[5];
        }
        const y = h;
        let C;
        if (n[6] !== location) {
            C = ({
                0: {
                    className: "x78zum5 x1cy8zhl xeuugli"
                },
                1: {
                    className: "x78zum5 x1cy8zhl xeuugli xisnujt x1nxh6w3 xcgms0a xhslqc4"
                }
            })[(location === "title") << 0];
            n[6] = location;
            n[7] = C;
        } else {
            C = n[7];
        }
        let b;
        if (n[8] !== showLockIcon) {
            b = showLockIcon === true && <span {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(c.icon, o("WDSMargins.stylex").wdsMargins.marginTop4, o("WDSMargins.stylex").wdsMargins.marginEnd4), {
                children: y
            })}/>;
            n[8] = showLockIcon;
            n[9] = b;
        } else {
            b = n[9];
        }
        let v;
        if (n[10] !== ariaLabel || n[11] !== text) {
            v = u.jsx(o("WAWebEmojiText.react").EmojiText, {
                titlify: true,
                xstyle: c.chatSubtitleText,
                direction: "inherit",
                text,
                ariaLabel,
                selectable: true
            });
            n[10] = ariaLabel;
            n[11] = text;
            n[12] = v;
        } else {
            v = n[12];
        }
        let S;
        if (n[13] !== m || n[14] !== C || n[15] !== b || n[16] !== v) {
            S = <div {...babelHelpers.extends({
                "data-testid": "chat-subtitle"
            }, C, {
                children: [
                    b,
                    m,
                    v
                ]
            })}/>;
            n[13] = m;
            n[14] = C;
            n[15] = b;
            n[16] = v;
            n[17] = S;
        } else {
            S = n[17];
        }
        return S;
    }
    l.default = d;
}, 98);