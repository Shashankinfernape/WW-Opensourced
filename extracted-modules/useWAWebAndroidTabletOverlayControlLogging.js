__d("useWAWebAndroidTabletOverlayControlLogging", [
    "WAWebAndroidTabletVisitId",
    "isWAWebFeatureDetectionAndroidTablet",
    "react-compiler-runtime",
    "requireDeferred",
    "useVisibility",
    "useWAWebCallbackOnce"
], function(t, n, r, o, a, i, l) {
    const e = r("requireDeferred")("WAWebLinkDeviceAndroidTabletCountry").__setRef("useWAWebAndroidTabletOverlayControlLogging");
    const s = r("requireDeferred")("WAWebLinkDeviceQplHelpLinkEvent").__setRef("useWAWebAndroidTabletOverlayControlLogging");
    function u(t, n, a) {
        const i = o("react-compiler-runtime").c(10);
        let l;
        if (i[0] !== a || i[1] !== t || i[2] !== n) {
            l = function() {
                if (t == null) {
                    if (n) {
                        d(a);
                    }
                    return;
                }
                s.load().then(({ WAWebLinkDeviceQplHelpLinkEvent: n, WebcPairingScreenLinkType: r })=>n(r.ANDROID_TABLET_OVERLAY_CONTROL, a, void 0, t));
                e.load().then(({ logAndroidTabletOverlayCountry: n })=>n(a, t));
            };
            i[0] = a;
            i[1] = t;
            i[2] = n;
            i[3] = l;
        } else {
            l = i[3];
        }
        const u = r("useWAWebCallbackOnce")(l);
        let m;
        if (i[4] !== u) {
            m = {
                onVisible: u
            };
            i[4] = u;
            i[5] = m;
        } else {
            m = i[5];
        }
        const p = r("useVisibility")(m);
        const _ = p[0];
        let f;
        if (i[6] !== t || i[7] !== n || i[8] !== _) {
            f = t != null || n && c() ? _ : null;
            i[6] = t;
            i[7] = n;
            i[8] = _;
            i[9] = f;
        } else {
            f = i[9];
        }
        return f;
    }
    function c() {
        return o("isWAWebFeatureDetectionAndroidTablet").getWAWebFeatureDetectionAndroidTabletClientHintResult() != null || o("WAWebAndroidTabletVisitId").getExistingAndroidTabletVisitId() != null;
    }
    function d(e) {
        const t = m(o("isWAWebFeatureDetectionAndroidTablet").getWAWebFeatureDetectionAndroidTabletClientHintResult());
        s.load().then(({ WAWebLinkDeviceQplHelpLinkEvent: r, WebcPairingScreenLinkType: o })=>r(o.ANDROID_TABLET_DETECTION_FAILED, e, void 0, void 0, void 0, t));
    }
    function m(e) {
        if (e == null) {
            return {
                android_tablet_detection_failure_reason: 4
            };
        }
        return {
            android_tablet_client_hint_ms: e.durationMs,
            android_tablet_detection_failure_reason: e.outcome === "timed_out" ? 1 : e.outcome === "failed" ? 2 : e.outcome === "resolved" ? 3 : (()=>{
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e.outcome}`);
            })()
        };
    }
    l.default = u;
}, 98);