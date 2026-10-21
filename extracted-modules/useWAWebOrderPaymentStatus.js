__d("useWAWebOrderPaymentStatus", [
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebOrderPaymentStatus",
    "WAWebOrderStatus",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useState } = s;
    function d(e, t, n) {
        const a = o("react-compiler-runtime").c(9);
        const i = n === undefined ? false : n;
        let l;
        if (a[0] !== e || a[1] !== i || a[2] !== t) {
            l = function() {
                if (e == null || t == null) {
                    return null;
                }
                return o("WAWebOrderStatus").findOrderPaymentStatus(e, t, i);
            };
            a[0] = e;
            a[1] = i;
            a[2] = t;
            a[3] = l;
        } else {
            l = a[3];
        }
        const s = useState(l);
        const d = s[0];
        const m = s[1];
        let p;
        let _;
        if (a[4] !== e || a[5] !== i || a[6] !== t) {
            p = function() {
                if (!(e == null || t == null)) {
                    const n = function() {
                        const n = o("WAWebOrderStatus").findOrderPaymentStatus(e, t, i);
                        m(n);
                    };
                    const a = function(a) {
                        if (a.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS) {
                            if (o("WAWebOrderStatus").getOrderStatusInfo(a)?.refId === t) {
                                n();
                            }
                        } else if (a.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS) {
                            if (o("WAWebOrderPaymentStatus").getOrderPaymentStatusInfoFromNativeFlow(a)?.refId === t) {
                                n();
                            }
                        }
                    };
                    const l = e.msgs;
                    l.on("add", a);
                    l.on("change", n);
                    l.on("remove", n);
                    n();
                    return function() {
                        l.off("add", a);
                        l.off("change", n);
                        l.off("remove", n);
                    };
                }
            };
            _ = [
                e,
                t,
                i
            ];
            a[4] = e;
            a[5] = i;
            a[6] = t;
            a[7] = p;
            a[8] = _;
        } else {
            p = a[7];
            _ = a[8];
        }
        useEffect(p, _);
        return d;
    }
    l.useOrderPaymentStatus = d;
}, 98);