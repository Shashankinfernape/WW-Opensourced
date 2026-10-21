__d("WAWebPaymentIcon.react", [
    "WAWebCurrencyUtils",
    "WAWebPaymentRequestIcon.react",
    "WAWebPaymentSendIcon.react",
    "WAWebProtobufsWeb.pb",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        icon: {
            position: "x1n2onr6",
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            width: "xvy4d1p",
            height: "x17rw0jw",
            $$css: true
        },
        iconCompact: {
            width: "x17z2i9w",
            height: "x1qx5ct2",
            $$css: true
        },
        iconCompactSvg: {
            width: "x17z2i9w",
            height: "x1qx5ct2",
            $$css: true
        },
        iconSuccess: {
            color: "x1du590y",
            $$css: true
        },
        iconFailed: {
            color: "x30a034",
            $$css: true
        },
        iconPending: {
            color: "xhslqc4",
            $$css: true
        }
    };
    function d(t) {
        const n = o("react-compiler-runtime").c(24);
        const { ariaHidden, currency, isCompact, paymentStatus, paymentTxnStatus, subtype } = t;
        const f = ariaHidden === undefined ? false : ariaHidden;
        const g = isCompact === undefined ? false : isCompact;
        let h;
        if (n[0] !== currency) {
            h = o("WAWebCurrencyUtils").formatLocalSymbol(currency);
            n[0] = currency;
            n[1] = h;
        } else {
            h = n[1];
        }
        const y = h;
        let C;
        let b;
        let v;
        if (n[2] !== f || n[3] !== g || n[4] !== paymentStatus || n[5] !== paymentTxnStatus || n[6] !== subtype) {
            const S = paymentTxnStatus != null ? p(paymentTxnStatus) : m(paymentStatus);
            let R;
            if (n[10] !== f || n[11] !== g || n[12] !== subtype) {
                R = subtype === "send" ? u.jsx(o("WAWebPaymentSendIcon.react").PaymentSendIcon, {
                    iconXstyle: g && c.iconCompactSvg,
                    "aria-hidden": f
                }) : u.jsx(o("WAWebPaymentRequestIcon.react").PaymentRequestIcon, {
                    iconXstyle: g && c.iconCompactSvg,
                    "aria-hidden": f
                });
                n[10] = f;
                n[11] = g;
                n[12] = subtype;
                n[13] = R;
            } else {
                R = n[13];
            }
            C = R;
            b = "payment-icon-container";
            v = (e || (e = r("stylex"))).props(c.icon, S, g && c.iconCompact);
            n[2] = f;
            n[3] = g;
            n[4] = paymentStatus;
            n[5] = paymentTxnStatus;
            n[6] = subtype;
            n[7] = C;
            n[8] = b;
            n[9] = v;
        } else {
            C = n[7];
            b = n[8];
            v = n[9];
        }
        let L;
        if (n[14] !== g) {
            L = ({
                0: {
                    className: "x10l6tqk x13vifvy x1o0tod x16uhe5s xh8yej3 x5yr21d x1f6kntn x19v9tvf x17t9dm2 x2b8uid"
                },
                1: {
                    className: "x10l6tqk x13vifvy x1o0tod x16uhe5s xh8yej3 x5yr21d x17t9dm2 x2b8uid x1pg5gke x1fc57z9"
                }
            })[!!g << 0];
            n[14] = g;
            n[15] = L;
        } else {
            L = n[15];
        }
        let E;
        if (n[16] !== y || n[17] !== L) {
            E = <div {...babelHelpers.extends({
                "data-testid": "payment-symbol"
            }, L, {
                children: y
            })}/>;
            n[16] = y;
            n[17] = L;
            n[18] = E;
        } else {
            E = n[18];
        }
        let k;
        if (n[19] !== C || n[20] !== b || n[21] !== v || n[22] !== E) {
            k = <div {...babelHelpers.extends({
                "data-testid": b
            }, v, {
                children: [
                    E,
                    C
                ]
            })}/>;
            n[19] = C;
            n[20] = b;
            n[21] = v;
            n[22] = E;
            n[23] = k;
        } else {
            k = n[23];
        }
        return k;
    }
    function m(paymentStatus) {
        switch(paymentStatus ?? o("WAWebProtobufsWeb.pb").PaymentInfo$Status.UNKNOWN_STATUS){
            case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.COMPLETE:
                return c.iconSuccess;
            case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.CANCELLED:
            case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.COULD_NOT_COMPLETE:
            case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.REFUNDED:
            case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.EXPIRED:
            case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.REJECTED:
                return c.iconFailed;
            default:
                return c.iconPending;
        }
    }
    function p(paymentTxnStatus) {
        switch(paymentTxnStatus ?? o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.UNKNOWN){
            case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.SUCCESS:
            case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.COMPLETED:
                return c.iconSuccess;
            case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.FAILED:
            case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.FAILED_RISK:
            case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.FAILED_DA_FINAL:
            case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.REFUNDED_TXN:
            case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.REFUND_FAILED:
            case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.REFUND_FAILED_PROCESSING:
            case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.REFUND_FAILED_DA:
            case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.AUTH_CANCELED:
            case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.AUTH_CANCEL_FAILED_PROCESSING:
            case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.AUTH_CANCEL_FAILED:
            case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.COLLECT_FAILED:
            case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.COLLECT_FAILED_RISK:
                return c.iconFailed;
            default:
                return c.iconPending;
        }
    }
    l.default = d;
}, 98);