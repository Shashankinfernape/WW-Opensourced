__d("WAWebHatchPairingUnavailableDialog.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "WDSText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        title: {
            marginTop: "xw7yly9",
            marginBottom: "x1yztbdb",
            $$css: true
        }
    };
    function d() {
        const e = o("react-compiler-runtime").c(2);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            t = <Component type="Headline2" colorName="contentDefault" textAlign="center" xstyle={c.title}>{s._("Can't pair on this device")}</Component>;
            e[0] = t;
        } else {
            t = e[0];
        }
        let n;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebConfirmPopup.react").ConfirmPopup;
            n = <Component_1 onOK={o("WAWebModalManager").closeModalManager}>{t}<Component type="Body2" colorName="contentDeemphasized" textAlign="center">{s._("Pairing isn't available on linked devices. Open WhatsApp on your primary phone and try again.")}</Component></Component_1>;
            e[1] = n;
        } else {
            n = e[1];
        }
        return n;
    }
    l.default = d;
}, 226);