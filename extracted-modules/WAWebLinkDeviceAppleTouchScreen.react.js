__d("WAWebLinkDeviceAppleTouchScreen.react", [
    "fbt",
    "WAWebAppDownloadScreen.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(9);
        const { onContinueToWeb: n, onOpenAppStore: a } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = s._("Continue to WhatsApp Web");
            t[0] = i;
        } else {
            i = t[0];
        }
        let l;
        if (t[1] !== n) {
            l = {
                label: i,
                onPress: n,
                testId: "apple-touchscreen-continue-to-web-button"
            };
            t[1] = n;
            t[2] = l;
        } else {
            l = t[2];
        }
        let c;
        let d;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            c = s._("For the best experience on your device, download WhatsApp from the App Store.");
            d = s._("Download app");
            t[3] = c;
            t[4] = d;
        } else {
            c = t[3];
            d = t[4];
        }
        let m;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            m = s._("Download WhatsApp");
            t[5] = m;
        } else {
            m = t[5];
        }
        let p;
        if (t[6] !== a || t[7] !== l) {
            const Component = r("WAWebAppDownloadScreen.react");
            p = <Component continueAction={l} description={c} downloadButtonLabel={d} downloadButtonTestId="apple-touchscreen-download-app-button" onDownloadApp={a} screenTestId="apple-touchscreen-app-download-screen" title={m}/>;
            t[6] = a;
            t[7] = l;
            t[8] = p;
        } else {
            p = t[8];
        }
        return p;
    }
    l.default = c;
}, 226);