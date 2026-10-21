__d("WAWebPaymentInfo.react", [
    "WAWebMsgGetters",
    "WAWebPaymentAmount.react",
    "WAWebPaymentBackground.react",
    "WAWebPaymentIcon.react",
    "WAWebPaymentNoteMessage.react",
    "WAWebPaymentStatus.react",
    "WAWebPaymentType.react",
    "WAWebProtobufsWeb.pb",
    "WAWebSpacerText.react",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const s_useState = s.useState;
    const d = {
        paddingInlineEnd6: {
            paddingInlineEnd: "x1icxu4v",
            $$css: true
        }
    };
    const m = 20;
    const p = {
        bubbleOutBody: {
            backgroundColor: "x1bu39yj",
            $$css: true
        },
        bubbleInBody: {
            backgroundColor: "x1bu39yj",
            $$css: true
        },
        body: {
            display: "x78zum5",
            textDecoration: "x1hl2dhg",
            borderEndEndRadius: "xd15eu0",
            borderEndStartRadius: "x11ecxm0",
            $$css: true
        },
        bodyIconMultiline: {
            alignSelf: "xamitd3",
            $$css: true
        },
        bodyIcon: {
            flex: "x1okw0bk",
            $$css: true
        }
    };
    function _(t) {
        const n = o("react-compiler-runtime").c(60);
        const { expiryTimestamp, msgKey, paymentStatus, paymentTxnStatus } = t;
        let _;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            _ = [
                o("WAWebMsgGetters").getPaymentNoteMsg
            ];
            n[0] = _;
        } else {
            _ = n[0];
        }
        const f = o("useWAWebMsgValues").useMsgValues(msgKey, _);
        const g = f[0];
        const h = s_useState(false);
        const y = h[0];
        const C = h[1];
        let b;
        if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
            b = function(t) {
                if (t) {
                    C(t.getBoundingClientRect().height > m);
                }
            };
            n[1] = b;
        } else {
            b = n[1];
        }
        const v = b;
        const S = paymentTxnStatus != null && paymentTxnStatus !== o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.UNKNOWN || paymentStatus != null && paymentStatus !== o("WAWebProtobufsWeb.pb").PaymentInfo$Status.UNKNOWN_STATUS;
        let R;
        if (t.hasCaption === true) {
            let L;
            if (n[2] !== t.receiverJid || n[3] !== t.subtype) {
                L = <div>{u.jsx(r("WAWebPaymentType.react"), {
                    subtype: t.subtype,
                    receiverJid: t.receiverJid
                })}</div>;
                n[2] = t.receiverJid;
                n[3] = t.subtype;
                n[4] = L;
            } else {
                L = n[4];
            }
            let E;
            if (n[5] !== expiryTimestamp || n[6] !== paymentStatus || n[7] !== paymentTxnStatus) {
                E = u.jsx(r("WAWebPaymentStatus.react"), {
                    paymentStatus,
                    paymentTxnStatus,
                    expiryTimestamp
                });
                n[5] = expiryTimestamp;
                n[6] = paymentStatus;
                n[7] = paymentTxnStatus;
                n[8] = E;
            } else {
                E = n[8];
            }
            let k;
            if (n[9] !== L || n[10] !== E) {
                k = <div ref={v}>{L}{E}</div>;
                n[9] = L;
                n[10] = E;
                n[11] = k;
            } else {
                k = n[11];
            }
            R = k;
        } else if (S) {
            let I;
            if (n[12] !== t.receiverJid || n[13] !== t.subtype) {
                I = <div>{u.jsx(r("WAWebPaymentType.react"), {
                    subtype: t.subtype,
                    receiverJid: t.receiverJid
                })}</div>;
                n[12] = t.receiverJid;
                n[13] = t.subtype;
                n[14] = I;
            } else {
                I = n[14];
            }
            let T;
            if (n[15] !== expiryTimestamp || n[16] !== paymentStatus || n[17] !== paymentTxnStatus) {
                T = u.jsx(r("WAWebPaymentStatus.react"), {
                    paymentStatus,
                    paymentTxnStatus,
                    expiryTimestamp
                });
                n[15] = expiryTimestamp;
                n[16] = paymentStatus;
                n[17] = paymentTxnStatus;
                n[18] = T;
            } else {
                T = n[18];
            }
            let D;
            if (n[19] !== msgKey || n[20] !== T) {
                const Component = r("WAWebSpacerText.react");
                D = <Component msgKey={msgKey}>{T}</Component>;
                n[19] = msgKey;
                n[20] = T;
                n[21] = D;
            } else {
                D = n[21];
            }
            let x;
            if (n[22] !== I || n[23] !== D) {
                x = <div ref={v}>{I}{D}</div>;
                n[22] = I;
                n[23] = D;
                n[24] = x;
            } else {
                x = n[24];
            }
            R = x;
        } else {
            let $;
            if (n[25] !== t.receiverJid || n[26] !== t.subtype) {
                $ = <span ref={v}>{u.jsx(r("WAWebPaymentType.react"), {
                    subtype: t.subtype,
                    receiverJid: t.receiverJid
                })}</span>;
                n[25] = t.receiverJid;
                n[26] = t.subtype;
                n[27] = $;
            } else {
                $ = n[27];
            }
            let P;
            if (n[28] !== msgKey || n[29] !== $) {
                const Component = r("WAWebSpacerText.react");
                P = <Component msgKey={msgKey}>{$}</Component>;
                n[28] = msgKey;
                n[29] = $;
                n[30] = P;
            } else {
                P = n[30];
            }
            R = P;
        }
        let N;
        if (n[31] !== t.amount1000 || n[32] !== t.currency) {
            const Component = r("WAWebPaymentBackground.react");
            N = <Component>{u.jsx(r("WAWebPaymentAmount.react"), {
                currency: t.currency,
                amount1000: t.amount1000
            })}</Component>;
            n[31] = t.amount1000;
            n[32] = t.currency;
            n[33] = N;
        } else {
            N = n[33];
        }
        let M;
        if (n[34] !== t.isSentByMe) {
            M = (e || (e = r("stylex"))).props(p.body, o("WDSPaddings.stylex").wdsPaddings.paddingVer8, d.paddingInlineEnd6, o("WDSPaddings.stylex").wdsPaddings.paddingStart8, t.isSentByMe === true ? p.bubbleOutBody : p.bubbleInBody);
            n[34] = t.isSentByMe;
            n[35] = M;
        } else {
            M = n[35];
        }
        let w;
        if (n[36] !== y) {
            w = (e || (e = r("stylex"))).props(y && p.bodyIconMultiline, p.bodyIcon, o("WDSMargins.stylex").wdsMargins.marginEnd8);
            n[36] = y;
            n[37] = w;
        } else {
            w = n[37];
        }
        let A;
        if (n[38] !== paymentStatus || n[39] !== paymentTxnStatus || n[40] !== t.currency || n[41] !== t.subtype) {
            A = u.jsx(r("WAWebPaymentIcon.react"), {
                currency: t.currency,
                subtype: t.subtype,
                paymentStatus,
                paymentTxnStatus
            });
            n[38] = paymentStatus;
            n[39] = paymentTxnStatus;
            n[40] = t.currency;
            n[41] = t.subtype;
            n[42] = A;
        } else {
            A = n[42];
        }
        let F;
        if (n[43] !== w || n[44] !== A) {
            F = <div {...babelHelpers.extends({}, w, {
                children: A
            })}/>;
            n[43] = w;
            n[44] = A;
            n[45] = F;
        } else {
            F = n[45];
        }
        let O;
        if (n[46] === Symbol.for("react.memo_cache_sentinel")) {
            O = {
                className: "x12lumcd x6ikm8r x10wlt62 x1f6kntn x1fc57z9 x1vvkbs"
            };
            n[46] = O;
        } else {
            O = n[46];
        }
        let B;
        if (n[47] !== R) {
            B = <div {...babelHelpers.extends({}, O, {
                children: R
            })}/>;
            n[47] = R;
            n[48] = B;
        } else {
            B = n[48];
        }
        let W;
        if (n[49] !== M || n[50] !== F || n[51] !== B) {
            W = <div {...babelHelpers.extends({}, M, {
                children: [
                    F,
                    B
                ]
            })}/>;
            n[49] = M;
            n[50] = F;
            n[51] = B;
            n[52] = W;
        } else {
            W = n[52];
        }
        let q;
        if (n[53] !== msgKey || n[54] !== g) {
            q = g != null ? u.jsx(r("WAWebPaymentNoteMessage.react"), {
                msgKey
            }) : null;
            n[53] = msgKey;
            n[54] = g;
            n[55] = q;
        } else {
            q = n[55];
        }
        let U;
        if (n[56] !== q || n[57] !== N || n[58] !== W) {
            U = <div>{N}{W}{q}</div>;
            n[56] = q;
            n[57] = N;
            n[58] = W;
            n[59] = U;
        } else {
            U = n[59];
        }
        return U;
    }
    l.default = _;
}, 98);