__d("WAWebVoipCameraAutoOffModal.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebVoipWaCallEnums",
    "WDSText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(7);
        const { closeModal, message } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = s._("Video turned off");
            t[0] = i;
        } else {
            i = t[0];
        }
        let l;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            l = s._("OK");
            t[1] = l;
        } else {
            l = t[1];
        }
        let c;
        if (t[2] !== message) {
            const Component = r("WDSText.react");
            c = <Component colorName="contentDefault" type="Body2" preserveNewLines={false}>{message}</Component>;
            t[2] = message;
            t[3] = c;
        } else {
            c = t[3];
        }
        let d;
        if (t[4] !== closeModal || t[5] !== c) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            d = <Component title={i} onOK={closeModal} okText={l} testid="voip_camera_auto_off_modal">{c}</Component>;
            t[4] = closeModal;
            t[5] = c;
            t[6] = d;
        } else {
            d = t[6];
        }
        return d;
    }
    function d(e) {
        if (e === o("WAWebVoipWaCallEnums").CameraAutoOffReason.PoorNetwork) {
            return s._("Your video was turned off because of a poor connection. You can turn it back on at any time.");
        }
        if (e === o("WAWebVoipWaCallEnums").CameraAutoOffReason.LowDataUsageSetting) {
            return s._("Data saver is on, so your video has been turned off while you share your screen. You can turn it back on at any time.");
        }
        if (e === o("WAWebVoipWaCallEnums").CameraAutoOffReason.BatterySave) {
            return s._("Your battery is low, so your video has been turned off. You can turn it back on at any time.");
        }
        return null;
    }
    l.WAWebVoipCameraAutoOffModal = c;
    l.getCameraAutoOffMessage = d;
}, 226);