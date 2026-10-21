__d("WAWebPaymentQuotedMsgThumbnailIcon", [
    "WAWebPaymentAmount.react",
    "WAWebPaymentBackground.react",
    "isNonZeroNumber",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(7);
        const { msg, theme } = e;
        if (!o("isNonZeroNumber").isNonZeroNumber(msg.paymentAmount1000) || !msg.paymentCurrency) {
            return null;
        }
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = {
                className: "xi9e97b"
            };
            t[0] = i;
        } else {
            i = t[0];
        }
        const isQuotedInComposeBox = theme === "composeBox";
        let u;
        if (t[1] !== msg.paymentAmount1000 || t[2] !== msg.paymentCurrency) {
            u = s.jsx(r("WAWebPaymentAmount.react"), {
                currency: msg.paymentCurrency,
                amount1000: msg.paymentAmount1000,
                isQuoted: true
            });
            t[1] = msg.paymentAmount1000;
            t[2] = msg.paymentCurrency;
            t[3] = u;
        } else {
            u = t[3];
        }
        let c;
        if (t[4] !== isQuotedInComposeBox || t[5] !== u) {
            const Component = r("WAWebPaymentBackground.react");
            c = <div {...babelHelpers.extends({}, i, {
                children: <Component isQuoted isQuotedInComposeBox={isQuotedInComposeBox}>{u}</Component>
            })}/>;
            t[4] = isQuotedInComposeBox;
            t[5] = u;
            t[6] = c;
        } else {
            c = t[6];
        }
        return c;
    }
    l.default = u;
}, 98);