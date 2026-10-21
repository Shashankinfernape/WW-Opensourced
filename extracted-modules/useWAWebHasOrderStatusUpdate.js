__d("useWAWebHasOrderStatusUpdate", [
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebOrderStatus",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useState } = s;
    function d(e, t) {
        const n = o("react-compiler-runtime").c(7);
        let a;
        if (n[0] !== e || n[1] !== t) {
            a = function() {
                if (e == null || t == null) {
                    return false;
                }
                return o("WAWebOrderStatus").hasOrderStatusUpdatedFromPending(e, t);
            };
            n[0] = e;
            n[1] = t;
            n[2] = a;
        } else {
            a = n[2];
        }
        const i = useState(a);
        const l = i[0];
        const s = i[1];
        let d;
        let m;
        if (n[3] !== e || n[4] !== t) {
            d = function() {
                if (!(e == null || t == null)) {
                    const n = function() {
                        s(o("WAWebOrderStatus").hasOrderStatusUpdatedFromPending(e, t));
                    };
                    const a = function(a) {
                        if (a.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS) {
                            const e = o("WAWebOrderStatus").getOrderStatusInfo(a);
                            if (e?.refId === t) {
                                n();
                            }
                        }
                    };
                    const i = e.msgs;
                    i.on("add", a);
                    i.on("change", n);
                    i.on("remove", n);
                    n();
                    return function() {
                        i.off("add", a);
                        i.off("change", n);
                        i.off("remove", n);
                    };
                }
            };
            m = [
                e,
                t
            ];
            n[3] = e;
            n[4] = t;
            n[5] = d;
            n[6] = m;
        } else {
            d = n[5];
            m = n[6];
        }
        useEffect(d, m);
        return l;
    }
    l.useWAWebHasOrderStatusUpdate = d;
}, 98);