__d("WAWebPaymentMessageInvite.react", [
    "WAWebEmojiText.react",
    "WAWebFormatPaymentMsg",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebMediaBubble.react",
    "WAWebMessageSpacerText.react",
    "WAWebMsgGetters",
    "WAWebPaymentImageAssets.stylex",
    "WAWebProtobufsE2E.pb",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        paddingTop7: {
            paddingTop: "xm7lytj",
            $$css: true
        },
        paddingBottom6: {
            paddingBottom: "x10b6aqq",
            $$css: true
        },
        paddingInlineStart6: {
            paddingInlineStart: "x25sj25",
            $$css: true
        },
        paddingInlineEnd6: {
            paddingInlineEnd: "x1icxu4v",
            $$css: true
        }
    };
    const d = {
        bubbleOut: {
            backgroundColor: "x1bu39yj",
            $$css: true
        },
        bubbleIn: {
            backgroundColor: "x1bu39yj",
            $$css: true
        },
        inviteBackground: {
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            justifyContent: "xl56j7k",
            height: "xwzfr38",
            backgroundPosition: "xztyhrg",
            backgroundSize: "x18d0r48",
            $$css: true
        },
        inviteImage: {
            height: "x10wjd1d",
            backgroundRepeat: "xiy17q3",
            backgroundPosition: "x158usst",
            backgroundSize: "x1tbiz1a",
            $$css: true
        },
        body: {
            display: "x78zum5",
            textDecoration: "x1hl2dhg",
            borderEndEndRadius: "xd15eu0",
            borderEndStartRadius: "x11ecxm0",
            $$css: true
        }
    };
    function m(t) {
        const n = o("react-compiler-runtime").c(34);
        const { displayAuthor, displayType, msgKey } = t;
        let s;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            let m;
            s = [
                o("WAWebFrontendMsgGetters").getRtl,
                o("WAWebFrontendMsgGetters").getDir,
                (m = o("WAWebMsgGetters")).getIsSentByMe,
                m.getPaymentInviteServiceType,
                m.getIsGroupMsg,
                m.getPaymentNoteMsg,
                m.getId,
                m.getTo,
                m.getFrom
            ];
            n[0] = s;
        } else {
            s = n[0];
        }
        const p = o("useWAWebMsgValues").useMsgValues(msgKey, s);
        const _ = p[0];
        const f = p[1];
        const g = p[2];
        const h = p[3];
        const y = p[6];
        const C = h === o("WAWebProtobufsE2E.pb").Message$PaymentInviteMessage$ServiceType.UPI ? o("WAWebPaymentImageAssets.stylex").paymentImageAssetStyles.inviteUpi : null;
        let b;
        if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
            b = (e || (e = r("stylex"))).props(c.paddingTop7, o("WDSPaddings.stylex").wdsPaddings.paddingEnd4, c.paddingBottom6, c.paddingInlineStart6);
            n[1] = b;
        } else {
            b = n[1];
        }
        let v;
        if (n[2] !== y) {
            v = o("WAWebFormatPaymentMsg").formatPaymentInviteMessageText(y);
            n[2] = y;
            n[3] = v;
        } else {
            v = n[3];
        }
        let S;
        if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
            S = r("WAWebL10N").isRTL();
            n[4] = S;
        } else {
            S = n[4];
        }
        const dirMismatch = _ !== S;
        let L;
        if (n[5] !== f || n[6] !== v || n[7] !== dirMismatch) {
            L = u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: v,
                selectable: true,
                dirMismatch,
                direction: f
            });
            n[5] = f;
            n[6] = v;
            n[7] = dirMismatch;
            n[8] = L;
        } else {
            L = n[8];
        }
        let E;
        if (n[9] !== msgKey || n[10] !== L) {
            const Component = r("WAWebMessageSpacerText.react");
            E = <div {...babelHelpers.extends({}, b, {
                children: <Component msgKey={msgKey}>{L}</Component>
            })}/>;
            n[9] = msgKey;
            n[10] = L;
            n[11] = E;
        } else {
            E = n[11];
        }
        const k = E;
        const hasCaption = !!k;
        let T;
        if (n[12] === Symbol.for("react.memo_cache_sentinel")) {
            T = (e || (e = r("stylex"))).props(d.inviteBackground, o("WAWebPaymentImageAssets.stylex").paymentImageAssetStyles.background);
            n[12] = T;
        } else {
            T = n[12];
        }
        let D;
        if (n[13] !== C) {
            D = (e || (e = r("stylex"))).props(d.inviteImage, C);
            n[13] = C;
            n[14] = D;
        } else {
            D = n[14];
        }
        let x;
        if (n[15] !== D) {
            x = <div {...babelHelpers.extends({}, T, {
                children: <div {...babelHelpers.extends({}, D)}/>
            })}/>;
            n[15] = D;
            n[16] = x;
        } else {
            x = n[16];
        }
        let $;
        if (n[17] !== g) {
            $ = (e || (e = r("stylex"))).props(d.body, g ? d.bubbleOut : d.bubbleIn, o("WDSPaddings.stylex").wdsPaddings.paddingTop8, c.paddingInlineEnd6, o("WDSPaddings.stylex").wdsPaddings.paddingBottom8, o("WDSPaddings.stylex").wdsPaddings.paddingStart8);
            n[17] = g;
            n[18] = $;
        } else {
            $ = n[18];
        }
        let P;
        if (n[19] === Symbol.for("react.memo_cache_sentinel")) {
            P = {
                className: "x12lumcd x6ikm8r x10wlt62 x1f6kntn x1fc57z9 x1vvkbs"
            };
            n[19] = P;
        } else {
            P = n[19];
        }
        let N;
        if (n[20] !== k) {
            N = <div {...babelHelpers.extends({}, P, {
                children: k
            })}/>;
            n[20] = k;
            n[21] = N;
        } else {
            N = n[21];
        }
        let M;
        if (n[22] !== $ || n[23] !== N) {
            M = <div {...babelHelpers.extends({}, $, {
                children: N
            })}/>;
            n[22] = $;
            n[23] = N;
            n[24] = M;
        } else {
            M = n[24];
        }
        let w;
        if (n[25] !== x || n[26] !== M) {
            w = <div>{x}{M}</div>;
            n[25] = x;
            n[26] = M;
            n[27] = w;
        } else {
            w = n[27];
        }
        let A;
        if (n[28] !== displayAuthor || n[29] !== displayType || n[30] !== msgKey || n[31] !== w || n[32] !== hasCaption) {
            const Component = r("WAWebMediaBubble.react");
            A = <Component displayAuthor={displayAuthor} displayType={displayType} hasCaption={hasCaption} msgKey={msgKey}>{w}</Component>;
            n[28] = displayAuthor;
            n[29] = displayType;
            n[30] = msgKey;
            n[31] = w;
            n[32] = hasCaption;
            n[33] = A;
        } else {
            A = n[33];
        }
        return A;
    }
    l.default = m;
}, 98);