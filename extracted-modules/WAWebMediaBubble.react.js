__d("WAWebMediaBubble.react", [
    "WAWebDisplayType",
    "WAWebFrontendMsgGetters",
    "WAWebMessageAuthor.react",
    "WAWebMessageForwardedIndicator.react",
    "WAWebMessageMeta.react",
    "WAWebMessagePaidPartnershipDisclaimerText.react",
    "WAWebMsgGetters",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        forwardedIndicator: {
            paddingTop: "xh4bbfy",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "xg8j3zb",
            paddingInlineStart: "x25sj25",
            $$css: true
        }
    };
    function c(e) {
        const t = o("react-compiler-runtime").c(30);
        const { children, displayAuthor, displayType, hasCaption, hideMeta, msgKey, quotedMsg } = e;
        let p;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            p = [
                o("WAWebFrontendMsgGetters").getShouldShowForwarded,
                o("WAWebMsgGetters").getIsPSA,
                o("WAWebFrontendMsgGetters").getSenderObj
            ];
            t[0] = p;
        } else {
            p = t[0];
        }
        const _ = o("useWAWebMsgValues").useMsgValues(msgKey, p);
        const f = _[0];
        const g = _[1];
        const h = _[2];
        let y;
        if (t[1] !== displayAuthor || t[2] !== displayType || t[3] !== msgKey || t[4] !== h) {
            y = displayAuthor ? <div className="xh4bbfy xyri2b xs9asl8 x25sj25">{s.jsx(r("WAWebMessageAuthor.react"), {
                msgKey,
                contact: h,
                displayType
            })}</div> : null;
            t[1] = displayAuthor;
            t[2] = displayType;
            t[3] = msgKey;
            t[4] = h;
            t[5] = y;
        } else {
            y = t[5];
        }
        const C = y;
        let b;
        if (t[6] !== displayType || t[7] !== hideMeta || t[8] !== msgKey) {
            b = displayType !== o("WAWebDisplayType").DISPLAY_TYPE.GALLERY && hideMeta !== true ? <div className="x10l6tqk x1inkcgm xy1j3rs">{s.jsx(o("WAWebMessageMeta.react").Meta, {
                msgKey
            })}</div> : null;
            t[6] = displayType;
            t[7] = hideMeta;
            t[8] = msgKey;
            t[9] = b;
        } else {
            b = t[9];
        }
        const v = b;
        let S;
        if (t[10] !== msgKey || t[11] !== f) {
            S = f ? s.jsx(r("WAWebMessageForwardedIndicator.react"), {
                msgKey,
                xstyle: u.forwardedIndicator
            }) : null;
            t[10] = msgKey;
            t[11] = f;
            t[12] = S;
        } else {
            S = t[12];
        }
        const R = S;
        let L;
        if (t[13] !== msgKey) {
            L = s.jsx(r("WAWebMessagePaidPartnershipDisclaimerText.react"), {
                msgKey
            });
            t[13] = msgKey;
            t[14] = L;
        } else {
            L = t[14];
        }
        const E = L;
        let k;
        if (t[15] !== quotedMsg) {
            k = quotedMsg ? <div className="xhl18mv">{quotedMsg}</div> : null;
            t[15] = quotedMsg;
            t[16] = k;
        } else {
            k = t[16];
        }
        const I = k;
        let T;
        if (t[17] !== displayAuthor || t[18] !== hasCaption || t[19] !== g || t[20] !== f) {
            T = ({
                0: "x1n2onr6 x9f619 x1ovzfbk xh4bbfy x19gpib7 x1dnyh3c xh34vxv",
                8: "x1n2onr6 x9f619 x1ovzfbk xh4bbfy x19gpib7 xh34vxv x18d9i69",
                4: "x1n2onr6 x9f619 x1ovzfbk x19gpib7 x1dnyh3c xh34vxv xexx8yu",
                12: "x1n2onr6 x9f619 x1ovzfbk x19gpib7 xh34vxv x18d9i69 xexx8yu",
                2: "x1n2onr6 x9f619 x1ovzfbk xh4bbfy x19gpib7 xh34vxv x1dnyh3c",
                10: "x1n2onr6 x9f619 x1ovzfbk xh4bbfy x19gpib7 xh34vxv x1dnyh3c",
                6: "x1n2onr6 x9f619 x1ovzfbk x19gpib7 xh34vxv xexx8yu x1dnyh3c",
                14: "x1n2onr6 x9f619 x1ovzfbk x19gpib7 xh34vxv xexx8yu x1dnyh3c",
                1: "x1n2onr6 x9f619 x1ovzfbk xh4bbfy x19gpib7 xh34vxv x1em1mmk",
                9: "x1n2onr6 x9f619 x1ovzfbk xh4bbfy x19gpib7 xh34vxv x1em1mmk",
                5: "x1n2onr6 x9f619 x1ovzfbk x19gpib7 xh34vxv xexx8yu x1em1mmk",
                13: "x1n2onr6 x9f619 x1ovzfbk x19gpib7 xh34vxv xexx8yu x1em1mmk",
                3: "x1n2onr6 x9f619 x1ovzfbk xh4bbfy x19gpib7 xh34vxv x1em1mmk",
                11: "x1n2onr6 x9f619 x1ovzfbk xh4bbfy x19gpib7 xh34vxv x1em1mmk",
                7: "x1n2onr6 x9f619 x1ovzfbk x19gpib7 xh34vxv xexx8yu x1em1mmk",
                15: "x1n2onr6 x9f619 x1ovzfbk x19gpib7 xh34vxv xexx8yu x1em1mmk"
            })[!!f << 3 | !!displayAuthor << 2 | (hasCaption === true) << 1 | !!g << 0];
            t[17] = displayAuthor;
            t[18] = hasCaption;
            t[19] = g;
            t[20] = f;
            t[21] = T;
        } else {
            T = t[21];
        }
        const D = T;
        let x;
        if (t[22] !== C || t[23] !== children || t[24] !== D || t[25] !== R || t[26] !== v || t[27] !== E || t[28] !== I) {
            x = <div className={D}>{C}{R}{E}{I}{children}{v}</div>;
            t[22] = C;
            t[23] = children;
            t[24] = D;
            t[25] = R;
            t[26] = v;
            t[27] = E;
            t[28] = I;
            t[29] = x;
        } else {
            x = t[29];
        }
        return x;
    }
    l.default = c;
}, 98);