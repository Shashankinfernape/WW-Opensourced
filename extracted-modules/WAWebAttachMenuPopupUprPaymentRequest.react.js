__d("WAWebAttachMenuPopupUprPaymentRequest.react", [
    "fbt",
    "WAWebModalManager",
    "WAWebSendUprPaymentRequestModalLoadable",
    "WAWebUprCurrencyIconLoadable",
    "WAWebUprSenderWamLogger",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useContext, useEffect } = c;
    const PContext = u.createContext("");
    function useComponent(e) {
        const t = o("react-compiler-runtime").c(3);
        const n = useContext(PContext);
        let r;
        if (t[0] !== n || t[1] !== e) {
            r = u.jsx(o("WAWebUprCurrencyIconLoadable").WAWebUprCurrencyIconLoadable, babelHelpers.extends({
                currency: n
            }, e));
            t[0] = n;
            t[1] = e;
            t[2] = r;
        } else {
            r = t[2];
        }
        return r;
    }
    function f(e) {
        const t = o("react-compiler-runtime").c(14);
        const { chat, dismissMenu, methods, onAlternateSendFlowStart } = e;
        let c;
        let d;
        if (t[0] !== methods.country) {
            c = function() {
                o("WAWebUprSenderWamLogger").logUprAttachmentTrayView(methods.country);
            };
            d = [
                methods.country
            ];
            t[0] = methods.country;
            t[1] = c;
            t[2] = d;
        } else {
            c = t[1];
            d = t[2];
        }
        useEffect(c, d);
        let f;
        if (t[3] !== chat || t[4] !== dismissMenu || t[5] !== methods || t[6] !== onAlternateSendFlowStart) {
            f = function() {
                onAlternateSendFlowStart();
                o("WAWebUprSenderWamLogger").logUprAttachmentTrayClick(methods.country);
                o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebSendUprPaymentRequestModalLoadable").WAWebSendUprPaymentRequestModalLoadable, {
                    chat,
                    methods
                }));
                dismissMenu();
            };
            t[3] = chat;
            t[4] = dismissMenu;
            t[5] = methods;
            t[6] = onAlternateSendFlowStart;
            t[7] = f;
        } else {
            f = t[7];
        }
        const g = f;
        const methods_currency = methods.currency;
        let y;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            y = s._("Payments");
            t[8] = y;
        } else {
            y = t[8];
        }
        let C;
        if (t[9] !== g) {
            const Component = r("WDSMenuItem.react");
            C = <Component Icon={useComponent} onPress={g} testid="mi-attach-upr-payment-request" title={y}/>;
            t[9] = g;
            t[10] = C;
        } else {
            C = t[10];
        }
        let b;
        if (t[11] !== methods.currency || t[12] !== C) {
            b = <PContext.Provider value={methods_currency}>{C}</PContext.Provider>;
            t[11] = methods.currency;
            t[12] = C;
            t[13] = b;
        } else {
            b = t[13];
        }
        return b;
    }
    l.default = f;
}, 226);