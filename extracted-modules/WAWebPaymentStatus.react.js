__d("WAWebPaymentStatus.react", [
    "WAWebPaymentStatusText",
    "react",
    "stylex",
    "useWAWebForceUpdate",
    "useWAWebInterval"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        status: {
            fontWeight: "xk50ysn",
            $$css: true
        },
        failed: {
            color: "x30a034",
            $$css: true
        },
        pending: {
            color: "xhslqc4",
            $$css: true
        },
        success: {
            color: "x1du590y",
            $$css: true
        }
    };
    function d(t) {
        "use no forget";
        const { expiryTimestamp, paymentStatus, paymentTxnStatus } = t;
        m();
        const l = o("WAWebPaymentStatusText").getPaymentStatusText(paymentStatus, paymentTxnStatus, expiryTimestamp);
        const { str, themeClassName } = l;
        if (str == null) {
            return null;
        }
        const p = !!themeClassName && c[themeClassName];
        return <span {...babelHelpers.extends({
            "data-testid": themeClassName
        }, (e || (e = r("stylex"))).props(c.status, p), {
            children: str
        })}/>;
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    function m() {
        "use no forget";
        const e = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
        r("useWAWebInterval")(e, 1000, {
            immediate: true
        });
    }
    l.default = d;
}, 98);