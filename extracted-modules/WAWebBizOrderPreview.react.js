__d("WAWebBizOrderPreview.react", [
    "fbt",
    "WAWebCurrencyUtils",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebMsgGetters",
    "WDSIconIcShoppingCart.react",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        paddingBlock6: {
            paddingTop: "x1yrsyyn",
            paddingBottom: "x10b6aqq",
            $$css: true
        },
        paddingInline10: {
            paddingInlineStart: "xe2zdcy",
            paddingInlineEnd: "x2vl965",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        }
    };
    const d = {
        thumbnail: {
            width: "xni59qk",
            height: "xy75621",
            backgroundSize: "x18d0r48",
            borderStartStartRadius: "x1i282gy",
            borderEndStartRadius: "x11ecxm0",
            borderStartEndRadius: "x17un8ov",
            borderEndEndRadius: "x1e7945m",
            $$css: true
        },
        thumbnailImage: function(t) {
            return [
                {
                    backgroundImage: t != null ? "x1e87kdn" : t,
                    $$css: true
                },
                {
                    "--x-backgroundImage": t ?? undefined
                }
            ];
        },
        quotedMedia: {
            order: "x14yy4lh",
            width: "x1pju0fl",
            height: "x10wjd1d",
            $$css: true
        },
        body: {
            boxSizing: "x9f619",
            flexGrow: "x1iyjqo2",
            maxHeight: "x1upyj8d",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            lineHeight: "x17fgdl5",
            $$css: true
        },
        quotedBody: {
            order: "x9ek82g",
            $$css: true
        },
        titleIcon: {
            width: "x1xp8n7a",
            height: "xmix8c7",
            pointerEvents: "x47corl",
            fill: "xvt3oi1",
            $$css: true
        },
        titleIconSvg: {
            width: "x1xp8n7a",
            height: "xmix8c7",
            $$css: true
        },
        title: {
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            color: "x14ug900",
            textOverflow: "xlyipyv",
            $$css: true
        },
        description: {
            flexShrink: "x7f0hsc",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            fontSize: "x1pg5gke",
            color: "xhslqc4",
            textOverflow: "xlyipyv",
            $$css: true
        }
    };
    function MComponent(e) {
        const t = o("react-compiler-runtime").c(26);
        const { msgKey, onClick, theme } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            let l;
            i = [
                (l = o("WAWebMsgGetters")).getThumbnail,
                l.getIsSentByMe,
                l.getItemCount,
                l.getTotalAmount1000,
                l.getTotalCurrencyCode
            ];
            t[0] = i;
        } else {
            i = t[0];
        }
        const s = o("useWAWebMsgValues").useMsgValues(msgKey, i);
        const m = s[0];
        const _ = s[1];
        const itemCount = s[2];
        const totalAmount1000 = s[3];
        const totalCurrencyCode = s[4];
        let C;
        if (m != null && m !== "") {
            const b = theme === "quoted" && d.quotedMedia;
            let v;
            if (t[1] !== m) {
                v = d.thumbnailImage(`url("data:image/jpeg;base64,${m}")`);
                t[1] = m;
                t[2] = v;
            } else {
                v = t[2];
            }
            let S;
            if (t[3] !== b || t[4] !== v) {
                S = u.jsx(o("WAWebFlex.react").FlexItem, {
                    xstyle: [
                        b,
                        d.thumbnail,
                        v
                    ]
                });
                t[3] = b;
                t[4] = v;
                t[5] = S;
            } else {
                S = t[5];
            }
            C = S;
        }
        let R;
        if (t[6] !== _ || t[7] !== theme) {
            R = ({
                0: {
                    className: "x78zum5 x1q0g3np x6s0dn4 x6ikm8r x10wlt62 x1wl59ut x1o168i8 x14ug900 x1ypdohk x1i282gy xx9ypkp xd15eu0 x11ecxm0 x1bu39yj"
                },
                1: {
                    className: "x78zum5 x1q0g3np x6s0dn4 x6ikm8r x10wlt62 x1wl59ut x1o168i8 x14ug900 x1ypdohk x1i282gy xx9ypkp xd15eu0 x11ecxm0 x1bu39yj"
                }
            })[!!(theme === "quoted" || _) << 0];
            t[6] = _;
            t[7] = theme;
            t[8] = R;
        } else {
            R = t[8];
        }
        const L = theme === "quoted" && d.quotedBody;
        const E = theme === "quoted" && o("WDSPaddings.stylex").wdsPaddings.padding0;
        let k;
        if (t[9] !== L || t[10] !== E) {
            k = [
                d.body,
                c.paddingBlock6,
                c.paddingInline10,
                L,
                E
            ];
            t[9] = L;
            t[10] = E;
            t[11] = k;
        } else {
            k = t[11];
        }
        let I;
        if (t[12] !== itemCount) {
            I = <P1Component itemCount={itemCount}/>;
            t[12] = itemCount;
            t[13] = I;
        } else {
            I = t[13];
        }
        let T;
        if (t[14] !== totalAmount1000 || t[15] !== totalCurrencyCode) {
            T = <F1Component totalAmount1000={totalAmount1000} totalCurrencyCode={totalCurrencyCode}/>;
            t[14] = totalAmount1000;
            t[15] = totalCurrencyCode;
            t[16] = T;
        } else {
            T = t[16];
        }
        let D;
        if (t[17] !== k || t[18] !== I || t[19] !== T) {
            const Component = o("WAWebFlex.react").FlexColumn;
            D = <Component justify="center" xstyle={k}>{I}{T}</Component>;
            t[17] = k;
            t[18] = I;
            t[19] = T;
            t[20] = D;
        } else {
            D = t[20];
        }
        let x;
        if (t[21] !== C || t[22] !== onClick || t[23] !== R || t[24] !== D) {
            x = <div {...babelHelpers.extends({}, R, {
                onClick,
                children: [
                    C,
                    D
                ]
            })}/>;
            t[21] = C;
            t[22] = onClick;
            t[23] = R;
            t[24] = D;
            t[25] = x;
        } else {
            x = t[25];
        }
        return x;
    }
    function P1Component(e) {
        const t = o("react-compiler-runtime").c(6);
        const e_itemCount = e.itemCount;
        const a = e_itemCount ?? 0;
        let i;
        if (t[0] !== a) {
            i = s._("_j{\"*\":\"{count} items\",\"_1\":\"1 item\"}", [
                s._plural(a, "count")
            ]);
            t[0] = a;
            t[1] = i;
        } else {
            i = t[1];
        }
        const l = i;
        let c;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            c = [
                d.title,
                o("WDSMargins.stylex").wdsMargins.marginBottom2
            ];
            t[2] = c;
        } else {
            c = t[2];
        }
        let m;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            m = u.jsx(r("WDSIconIcShoppingCart.react"), {
                xstyle: [
                    d.titleIcon,
                    o("WDSMargins.stylex").wdsMargins.marginEnd2
                ],
                iconXstyle: d.titleIconSvg,
                displayInline: true
            });
            t[3] = m;
        } else {
            m = t[3];
        }
        let p;
        if (t[4] !== l) {
            const Component = o("WAWebFlex.react").FlexRow;
            p = <Component xstyle={c}>{m}{u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: l
            })}</Component>;
            t[4] = l;
            t[5] = p;
        } else {
            p = t[5];
        }
        return p;
    }
    function Component(e) {
        const t = o("react-compiler-runtime").c(4);
        const { msg, showMessage } = e;
        const a = showMessage === true ? msg.message : undefined;
        let i;
        if (t[0] !== msg.totalAmount1000 || t[1] !== msg.totalCurrencyCode || t[2] !== a) {
            i = <F1Component message={a} totalAmount1000={msg.totalAmount1000} totalCurrencyCode={msg.totalCurrencyCode}/>;
            t[0] = msg.totalAmount1000;
            t[1] = msg.totalCurrencyCode;
            t[2] = a;
            t[3] = i;
        } else {
            i = t[3];
        }
        return i;
    }
    function F1Component(e) {
        const t = o("react-compiler-runtime").c(10);
        const { message, totalAmount1000, totalCurrencyCode } = e;
        let i = null;
        if (totalAmount1000 != null && totalCurrencyCode != null && totalCurrencyCode !== "") {
            let l;
            if (t[0] !== totalAmount1000 || t[1] !== totalCurrencyCode) {
                l = u.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: s._("{total-currency-amount} (estimated total)", [
                        s._param("total-currency-amount", o("WAWebCurrencyUtils").formatAmount1000({
                            amount: totalAmount1000,
                            currency: totalCurrencyCode
                        }))
                    ])
                });
                t[0] = totalAmount1000;
                t[1] = totalCurrencyCode;
                t[2] = l;
            } else {
                l = t[2];
            }
            i = l;
        }
        let c;
        if (t[3] !== i) {
            const Component = o("WAWebFlex.react").FlexRow;
            c = <Component xstyle={d.description}>{i}</Component>;
            t[3] = i;
            t[4] = c;
        } else {
            c = t[4];
        }
        let m;
        if (t[5] !== message) {
            m = message != null ? u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: message
            }) : null;
            t[5] = message;
            t[6] = m;
        } else {
            m = t[6];
        }
        let p;
        if (t[7] !== c || t[8] !== m) {
            p = <div>{c}{m}</div>;
            t[7] = c;
            t[8] = m;
            t[9] = p;
        } else {
            p = t[9];
        }
        return p;
    }
    l.OrderPreview = MComponent;
    l.OrderDescription = Component;
}, 226);