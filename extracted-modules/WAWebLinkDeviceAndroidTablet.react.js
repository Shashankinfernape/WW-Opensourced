__d("WAWebLinkDeviceAndroidTablet.react", [
    "fbt",
    "WAWebAppDownloadScreen.react",
    "react",
    "react-compiler-runtime",
    "useVisibility",
    "useWAWebCallbackOnce"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(16);
        const { onClose: n, onContinueToWeb: a, onImpression: i, onOpenPlayStore: l } = e;
        const c = r("useWAWebCallbackOnce")(i);
        let d;
        if (t[0] !== c) {
            d = {
                onVisible: c
            };
            t[0] = c;
            t[1] = d;
        } else {
            d = t[1];
        }
        const m = r("useVisibility")(d);
        const p = m[0];
        let _;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            _ = {
                logoHeight: 30,
                wordmarkHeight: 20
            };
            t[2] = _;
        } else {
            _ = t[2];
        }
        let f;
        if (t[3] !== n) {
            f = {
                onPress: n,
                testId: "android-tablet-close-button"
            };
            t[3] = n;
            t[4] = f;
        } else {
            f = t[4];
        }
        let g;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            g = s._("Continue to Web");
            t[5] = g;
        } else {
            g = t[5];
        }
        let h;
        if (t[6] !== a) {
            h = {
                label: g,
                onPress: a,
                testId: "android-tablet-continue-to-web-button"
            };
            t[6] = a;
            t[7] = h;
        } else {
            h = t[7];
        }
        let y;
        let C;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            y = s._("For the best experience on your tablet, download WhatsApp from Google Play.");
            C = s._("Download app");
            t[8] = y;
            t[9] = C;
        } else {
            y = t[8];
            C = t[9];
        }
        let b;
        if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
            b = s._("Download WhatsApp");
            t[10] = b;
        } else {
            b = t[10];
        }
        let v;
        if (t[11] !== l || t[12] !== f || t[13] !== h || t[14] !== p) {
            const Component = r("WAWebAppDownloadScreen.react");
            v = <Component ref={p} brandSizing={_} closeAction={f} continueAction={h} description={y} downloadButtonLabel={C} downloadButtonTestId="android-tablet-download-app-button" onDownloadApp={l} screenTestId="android-tablet-app-download-screen" title={b}/>;
            t[11] = l;
            t[12] = f;
            t[13] = h;
            t[14] = p;
            t[15] = v;
        } else {
            v = t[15];
        }
        return v;
    }
    l.default = c;
}, 226);