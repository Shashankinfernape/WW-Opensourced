__d("WAWebRenderPaymentPreviewIcon", [
    "WAWebMsgGetters",
    "WAWebPaymentIcon.react",
    "WDSIconWdsIcUnsupportedMessage.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(7);
        const e_msg = e.msg;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            let i;
            a = [
                (i = o("WAWebMsgGetters")).getSubtype,
                i.getPaymentAmount1000,
                i.getPaymentCurrency,
                i.getPaymentStatus,
                i.getPaymentTxnStatus
            ];
            t[0] = a;
        } else {
            a = t[0];
        }
        const l = o("useWAWebMsgValues").useMsgValues(e_msg.id, a);
        const u = l[0];
        const c = l[1];
        const d = l[2];
        const paymentStatus = l[3];
        const paymentTxnStatus = l[4];
        const _ = c && d;
        if (_) {
            let f;
            if (t[1] !== d || t[2] !== paymentStatus || t[3] !== paymentTxnStatus || t[4] !== u) {
                f = s.jsx(r("WAWebPaymentIcon.react"), {
                    currency: d,
                    subtype: u,
                    paymentStatus,
                    paymentTxnStatus,
                    isCompact: true,
                    ariaHidden: true
                });
                t[1] = d;
                t[2] = paymentStatus;
                t[3] = paymentTxnStatus;
                t[4] = u;
                t[5] = f;
            } else {
                f = t[5];
            }
            return f;
        }
        let g;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            g = s.jsx(r("WDSIconWdsIcUnsupportedMessage.react"), {
                width: 20,
                height: 20,
                testid: "message-fail"
            });
            t[6] = g;
        } else {
            g = t[6];
        }
        return g;
    }
    l.default = u;
}, 98);