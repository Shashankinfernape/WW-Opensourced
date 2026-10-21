__d("WAWebPaymentMessage.react", [
    "fbt",
    "WAWebMsgGetters",
    "WAWebPaymentInfo.react",
    "WAWebPaymentMessageInvite.react",
    "WAWebPaymentMessagePlaceholder.react",
    "WAWebSendOrRequestPaymentMessage.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(49);
        const { displayAuthor, displayType, msgKey, quotedMsg } = e;
        let c;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            let d;
            c = [
                (d = o("WAWebMsgGetters")).getPaymentAmount1000,
                d.getPaymentCurrency,
                d.getId,
                d.getIsSentByMe,
                d.getPaymentNoteMsg,
                d.getPaymentStatus,
                d.getPaymentTxnStatus,
                d.getPaymentExpiryTimestamp,
                d.getPaymentInviteServiceType,
                d.getPaymentMessageReceiverJid,
                d.getSubtype
            ];
            t[0] = c;
        } else {
            c = t[0];
        }
        const m = o("useWAWebMsgValues").useMsgValues(msgKey, c);
        const amount1000 = m[0];
        const _ = m[1];
        const f = m[3];
        const g = m[4];
        const paymentStatus = m[5];
        const paymentTxnStatus = m[6];
        const expiryTimestamp = m[7];
        const serviceType = m[8];
        const receiverJid = m[9];
        const S = m[10];
        const hasCaption = !!(g != null && g.body);
        if (S === "invite" && serviceType != null) {
            let L;
            if (t[1] !== displayAuthor || t[2] !== displayType || t[3] !== msgKey || t[4] !== serviceType) {
                L = u.jsx(r("WAWebPaymentMessageInvite.react"), {
                    msgKey,
                    displayAuthor,
                    displayType,
                    serviceType
                });
                t[1] = displayAuthor;
                t[2] = displayType;
                t[3] = msgKey;
                t[4] = serviceType;
                t[5] = L;
            } else {
                L = t[5];
            }
            return L;
        }
        const E = amount1000 && _;
        if (!E) {
            let k;
            if (t[6] !== displayAuthor || t[7] !== msgKey || t[8] !== quotedMsg) {
                k = u.jsx(r("WAWebPaymentMessagePlaceholder.react"), {
                    msgKey,
                    displayAuthor,
                    quotedMsg
                });
                t[6] = displayAuthor;
                t[7] = msgKey;
                t[8] = quotedMsg;
                t[9] = k;
            } else {
                k = t[9];
            }
            return k;
        }
        let I;
        if (t[10] !== hasCaption || t[11] !== f || t[12] !== msgKey || t[13] !== amount1000 || t[14] !== _ || t[15] !== expiryTimestamp || t[16] !== receiverJid || t[17] !== paymentStatus || t[18] !== paymentTxnStatus || t[19] !== S) {
            I = u.jsx(r("WAWebPaymentInfo.react"), {
                isSentByMe: f,
                currency: _,
                amount1000,
                receiverJid,
                paymentStatus,
                paymentTxnStatus,
                expiryTimestamp,
                subtype: S,
                hasCaption,
                msgKey
            });
            t[10] = hasCaption;
            t[11] = f;
            t[12] = msgKey;
            t[13] = amount1000;
            t[14] = _;
            t[15] = expiryTimestamp;
            t[16] = receiverJid;
            t[17] = paymentStatus;
            t[18] = paymentTxnStatus;
            t[19] = S;
            t[20] = I;
        } else {
            I = t[20];
        }
        const paymentInfo = I;
        switch(S){
            case "ciphertext":
                {
                    let D;
                    if (t[21] === Symbol.for("react.memo_cache_sentinel")) {
                        D = s._("Waiting for this payment message's note. This may take a while.");
                        t[21] = D;
                    } else {
                        D = t[21];
                    }
                    let x;
                    if (t[22] !== displayAuthor || t[23] !== msgKey || t[24] !== paymentInfo || t[25] !== quotedMsg) {
                        x = u.jsx(r("WAWebPaymentMessagePlaceholder.react"), {
                            msgKey,
                            displayAuthor,
                            quotedMsg,
                            paymentInfo,
                            placeholderText: D
                        });
                        t[22] = displayAuthor;
                        t[23] = msgKey;
                        t[24] = paymentInfo;
                        t[25] = quotedMsg;
                        t[26] = x;
                    } else {
                        x = t[26];
                    }
                    return x;
                }
            case "futureproof":
                {
                    let $;
                    if (t[27] === Symbol.for("react.memo_cache_sentinel")) {
                        $ = s._("This payment message has a note, but your version of WhatsApp doesn't support viewing it.");
                        t[27] = $;
                    } else {
                        $ = t[27];
                    }
                    let P;
                    if (t[28] !== displayAuthor || t[29] !== msgKey || t[30] !== paymentInfo || t[31] !== quotedMsg) {
                        P = u.jsx(r("WAWebPaymentMessagePlaceholder.react"), {
                            msgKey,
                            displayAuthor,
                            quotedMsg,
                            paymentInfo,
                            placeholderText: $
                        });
                        t[28] = displayAuthor;
                        t[29] = msgKey;
                        t[30] = paymentInfo;
                        t[31] = quotedMsg;
                        t[32] = P;
                    } else {
                        P = t[32];
                    }
                    return P;
                }
            case "send":
                {
                    let N;
                    if (t[33] !== displayAuthor || t[34] !== displayType || t[35] !== msgKey || t[36] !== paymentInfo || t[37] !== quotedMsg) {
                        N = u.jsx(r("WAWebSendOrRequestPaymentMessage.react"), {
                            msgKey,
                            displayAuthor,
                            displayType,
                            quotedMsg,
                            paymentInfo
                        });
                        t[33] = displayAuthor;
                        t[34] = displayType;
                        t[35] = msgKey;
                        t[36] = paymentInfo;
                        t[37] = quotedMsg;
                        t[38] = N;
                    } else {
                        N = t[38];
                    }
                    return N;
                }
            case "request":
                {
                    let M;
                    if (t[39] !== displayAuthor || t[40] !== displayType || t[41] !== msgKey || t[42] !== paymentInfo || t[43] !== quotedMsg) {
                        M = u.jsx(r("WAWebSendOrRequestPaymentMessage.react"), {
                            msgKey,
                            displayAuthor,
                            displayType,
                            quotedMsg,
                            paymentInfo
                        });
                        t[39] = displayAuthor;
                        t[40] = displayType;
                        t[41] = msgKey;
                        t[42] = paymentInfo;
                        t[43] = quotedMsg;
                        t[44] = M;
                    } else {
                        M = t[44];
                    }
                    return M;
                }
            default:
                {
                    let w;
                    if (t[45] !== displayAuthor || t[46] !== msgKey || t[47] !== quotedMsg) {
                        w = u.jsx(r("WAWebPaymentMessagePlaceholder.react"), {
                            msgKey,
                            displayAuthor,
                            quotedMsg
                        });
                        t[45] = displayAuthor;
                        t[46] = msgKey;
                        t[47] = quotedMsg;
                        t[48] = w;
                    } else {
                        w = t[48];
                    }
                    return w;
                }
        }
    }
    l.default = c;
}, 226);