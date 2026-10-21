__d("WAWebVoipBlockedCameraDialog", [
    "WALogger",
    "WAWebCallCollection",
    "WAWebVoipBrowserPermissionButtonGating",
    "WAWebVoipCameraTapAllowState",
    "WAWebVoipDevicePermissionDialogLoader.react",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 1000;
    let u = null;
    function c(t, { isDocPip, showGuide, turnCameraOn }) {
        const activeCall = r("WAWebCallCollection").activeCall;
        if (isDocPip || activeCall == null || !o("WAWebVoipBrowserPermissionButtonGating").isBrowserPermissionButtonEnabled("camera")) {
            showGuide();
            return;
        }
        if (u !== activeCall.id) {
            u = activeCall.id;
            o("WAWebVoipDevicePermissionDialogLoader.react").loadDevicePermissionDialog().then((n)=>{
                u = null;
                if (r("WAWebCallCollection").activeCall === activeCall) {
                    if (n == null) {
                        showGuide();
                        return;
                    }
                    const onDismissed = function() {
                        return o("WAWebVoipCameraTapAllowState").endCameraTapAllow(activeCall.id);
                    };
                    o("WAWebVoipDevicePermissionDialogLoader.react").openDevicePermissionDialog(t, n, {
                        action: "camera",
                        call: activeCall,
                        isBlocked: true,
                        onAllowed: function() {
                            turnCameraOn().catch((t)=>{
                                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                    "voip: [camera permission] turning the camera on after the allow failed"
                                ]))).catching(r("getErrorSafe")(t));
                            }).finally(()=>{
                                window.setTimeout(onDismissed, s);
                            });
                        },
                        onDismissed,
                        onShown: function() {
                            return o("WAWebVoipCameraTapAllowState").beginCameraTapAllow(activeCall.id);
                        }
                    });
                }
            });
        }
    }
    function d() {
        u = null;
    }
    l.showBlockedCameraDialog = c;
    l.resetBlockedCameraDialogForTesting = d;
}, 98);