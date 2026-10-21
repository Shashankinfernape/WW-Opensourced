__d("WAWebVoipBridgeMediaStreamHandlers", [
    "WALogger",
    "WAWebCallCollection",
    "WAWebMediaPermissionsUtils",
    "WAWebVoipAcquireMediaStream",
    "WAWebVoipBridgeMediaStreamHelpers",
    "WAWebVoipCameraFingerprint",
    "WAWebVoipCameraPrewarm",
    "WAWebVoipJoinWithoutCamera",
    "WAWebVoipLocalVideoPolicy",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = {
        voipAcquireMediaStream: (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                if (t.type === "camera" && !o("WAWebVoipLocalVideoPolicy").isLocalVideoAllowed()) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV] local video is blocked, skipping camera acquisition"
                    ])));
                    return null;
                }
                if (t.type === "camera" && o("WAWebVoipJoinWithoutCamera").consumeJoinWithoutCamera(r("WAWebCallCollection").activeCall?.id)) {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV] the call joins with its camera off, skipping camera acquisition"
                    ])));
                    return null;
                }
                return o("WAWebVoipBridgeMediaStreamHelpers").voipAcquireMediaStreamImpl(t);
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })(),
        getIsValidVideoDevice: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ deviceId, isInActiveCall, targetWindow }) {
                return o("WAWebVoipAcquireMediaStream").getIsValidVideoDevice({
                    deviceId,
                    isInActiveCall,
                    targetWindow
                });
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        cleanupPrewarmedCamera: function() {
            o("WAWebVoipCameraPrewarm").cleanupPrewarmedCamera();
        },
        logCameraFingerprint: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (o("WAWebVoipLocalVideoPolicy").isLocalVideoAllowed()) {
                    return o("WAWebVoipCameraFingerprint").logCameraFingerprint();
                }
                return false;
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        getVoipCameraPermissionState: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (o("WAWebVoipLocalVideoPolicy").isLocalVideoAllowed()) {
                    return o("WAWebVoipAcquireMediaStream").queryCameraPermissionStrict();
                }
                return null;
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        getVoipMicPermissionGranted: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return c((yield o("WAWebMediaPermissionsUtils").queryMediaPermissionStateStrict("microphone")));
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        getVoipCameraPermissionGranted: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (o("WAWebVoipLocalVideoPolicy").isLocalVideoAllowed()) {
                    return c((yield o("WAWebVoipAcquireMediaStream").queryCameraPermissionStrict()));
                }
                return null;
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })()
    };
    function c(e) {
        if (e === "granted") {
            return true;
        }
        if (e === "denied" || e === "prompt") {
            return false;
        }
        return null;
    }
    l.VoipBridgeMediaStreamHandlers = u;
}, 98);