__d("WAWebBizProductListMessagePreview", [
    "fbt",
    "WAWebEmojiText.react",
    "WAWebFrontendMsgGetters",
    "WAWebMediaUtils",
    "WAWebMsgGetters",
    "WDSMargins.stylex",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebMsgValues",
    "useWAWebStaticButtonA11y"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = {
        title: {
            display: "x78zum5",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            color: "x14ug900",
            textOverflow: "xlyipyv",
            $$css: true
        }
    };
    function m(t) {
        const n = o("react-compiler-runtime").c(24);
        const { msg, onClick } = t;
        let l;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = [
                o("WAWebMsgGetters").getList,
                o("WAWebMsgGetters").getIsSentByMe,
                o("WAWebFrontendMsgGetters").getDir,
                o("WAWebMsgGetters").getProductListHeaderImage
            ];
            n[0] = l;
        } else {
            l = n[0];
        }
        const u = o("useWAWebMsgValues").useMsgValues(msg.id, l);
        const m = u[0];
        const p = u[1];
        const _ = u[2];
        const f = u[3];
        const g = r("useWAWebStaticButtonA11y")(onClick);
        const h = g[0];
        const y = g[1];
        if (m == null) {
            return null;
        }
        let C;
        if (n[1] !== f) {
            C = f != null ? <div className="x2lah0s xni59qk xy75621 xmz0i5r x1xsqp64 x18d0r48" style={{
                backgroundImage: `url(${o("WAWebMediaUtils").convertToDataURI(f)})`
            }}/> : null;
            n[1] = f;
            n[2] = C;
        } else {
            C = n[2];
        }
        const b = C;
        let v;
        if (n[3] !== msg.productListItemCount) {
            v = s._("_j{\"*\":\"{count} items\",\"_1\":\"1 item\"}", [
                s._plural(msg.productListItemCount || 0, "count")
            ]);
            n[3] = msg.productListItemCount;
            n[4] = v;
        } else {
            v = n[4];
        }
        const S = v;
        let R;
        if (n[5] !== p) {
            R = ({
                0: "x78zum5 x1q0g3np x6s0dn4 xy75621 x6ikm8r x10wlt62 x1nxh6w3 x1o168i8 x14ug900 x1ypdohk x1bu39yj x1i282gy xx9ypkp xd15eu0 x11ecxm0",
                1: "x78zum5 x1q0g3np x6s0dn4 xy75621 x6ikm8r x10wlt62 x1nxh6w3 x1o168i8 x14ug900 x1ypdohk x1i282gy xx9ypkp xd15eu0 x11ecxm0 x1bu39yj"
            })[!!p << 0];
            n[5] = p;
            n[6] = R;
        } else {
            R = n[6];
        }
        let L;
        let E;
        if (n[7] === Symbol.for("react.memo_cache_sentinel")) {
            L = {
                className: "x9f619 x1iyjqo2 xlrnmfh x6ikm8r x10wlt62 x17fgdl5 x78zum5 xdt5ytf xl56j7k x1yrsyyn x10b6aqq xe2zdcy x2vl965"
            };
            E = (e || (e = r("stylex"))).props(d.title, o("WDSMargins.stylex").wdsMargins.marginBottom2);
            n[7] = L;
            n[8] = E;
        } else {
            L = n[7];
            E = n[8];
        }
        let k;
        if (n[9] !== m.title) {
            k = <div {...babelHelpers.extends({}, E, {
                children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: m.title,
                    ellipsify: true
                })
            })}/>;
            n[9] = m.title;
            n[10] = k;
        } else {
            k = n[10];
        }
        let I;
        if (n[11] === Symbol.for("react.memo_cache_sentinel")) {
            I = {
                className: "x78zum5 x7f0hsc x6ikm8r x10wlt62 x1pg5gke xhslqc4 xlyipyv"
            };
            n[11] = I;
        } else {
            I = n[11];
        }
        let T;
        if (n[12] !== S || n[13] !== _) {
            T = <div {...babelHelpers.extends({}, I, {
                children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: S,
                    direction: _,
                    ellipsify: true
                })
            })}/>;
            n[12] = S;
            n[13] = _;
            n[14] = T;
        } else {
            T = n[14];
        }
        let D;
        if (n[15] !== k || n[16] !== T) {
            D = <div {...babelHelpers.extends({}, L, {
                children: [
                    k,
                    T
                ]
            })}/>;
            n[15] = k;
            n[16] = T;
            n[17] = D;
        } else {
            D = n[17];
        }
        let x;
        if (n[18] !== y || n[19] !== h || n[20] !== b || n[21] !== D || n[22] !== R) {
            x = <div {...babelHelpers.extends({}, y, {
                className: R,
                ref: h,
                children: [
                    b,
                    D
                ]
            })}/>;
            n[18] = y;
            n[19] = h;
            n[20] = b;
            n[21] = D;
            n[22] = R;
            n[23] = x;
        } else {
            x = n[23];
        }
        return x;
    }
    l.default = m;
}, 226);