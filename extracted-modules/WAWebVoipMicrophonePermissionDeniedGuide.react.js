__d("WAWebVoipMicrophonePermissionDeniedGuide.react", [
    "WAWebGuidePopup.react",
    "WAWebVoipDeviceAccessRecoveryGating",
    "WAWebVoipDeviceAllowedWatcher.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(8);
        const e_onConfirm = e.onConfirm;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = o("WAWebVoipDeviceAccessRecoveryGating").canAllowBlockedDeviceDuringCall();
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = a;
        let l;
        if (t[1] !== e_onConfirm) {
            const Component = r("WAWebVoipDeviceAllowedWatcher.react");
            l = i && <Component device="microphone" onAllowed={e_onConfirm}/>;
            t[1] = e_onConfirm;
            t[2] = l;
        } else {
            l = t[2];
        }
        let u;
        if (t[3] !== e_onConfirm) {
            let c;
            const Component = (c = o("WAWebGuidePopup.react")).GuidePopup;
            u = <Component messaging={c.Messaging.MIC_FAIL} type={c.GuidePopupType.GUIDE_UNBLOCK} featureSurface={c.FeatureSurface.VOIP_ACTIVE} hideReloadHint={i} onConfirm={e_onConfirm}/>;
            t[3] = e_onConfirm;
            t[4] = u;
        } else {
            u = t[4];
        }
        let d;
        if (t[5] !== l || t[6] !== u) {
            d = <>{l}{u}</>;
            t[5] = l;
            t[6] = u;
            t[7] = d;
        } else {
            d = t[7];
        }
        return d;
    }
    l.default = u;
}, 98);