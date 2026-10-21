__d("WAWebVoipCameraFingerprint", [
    "WALogger",
    "WAWebVoipAcquireMediaStream",
    "WAWebVoipVideoCameraCapture",
    "WAWebWebcFingerprintWamEvent",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const enclosureRotation = 0;
    function u() {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                const a = yield o("WAWebVoipAcquireMediaStream").getAvailableVideoDevices({
                    isInActiveCall: true,
                    skipPermissionRequest: true
                });
                const i = o("WAWebVoipVideoCameraCapture").WAWebVoipVideoCameraCapture.currentDeviceId;
                const l = o("WAWebVoipVideoCameraCapture").WAWebVoipVideoCameraCapture.getLastCapturedStream()?.getVideoTracks() ?? [];
                if (!l.some((e)=>e.readyState === "live")) {
                    return false;
                }
                const peripherals = d(a, i);
                if (peripherals == null) {
                    return false;
                }
                new (o("WAWebWebcFingerprintWamEvent")).WebcFingerprintWamEvent({
                    peripherals
                }).commit();
                return true;
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: logCameraFingerprint failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("voip-camera-fingerprint-failed");
                return false;
            }
        });
        return c.apply(this, arguments);
    }
    function d(e, t) {
        const n = e.find((e)=>e.deviceId === t);
        if (n == null) {
            return null;
        }
        return JSON.stringify({
            camera: {
                name: n.label,
                capabilities: {
                    isDefault: e[0].deviceId === n.deviceId,
                    isEnabled: true,
                    enclosureRotation
                }
            }
        });
    }
    l.logCameraFingerprint = u;
    l.getCameraFingerprintPeripherals = d;
}, 98);