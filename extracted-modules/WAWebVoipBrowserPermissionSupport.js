__d("WAWebVoipBrowserPermissionSupport", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = {
        camera: "HTMLCameraElement",
        camera_and_microphone: "HTMLUserMediaElement",
        microphone: "HTMLMicrophoneElement"
    };
    function l(t, n = window) {
        return n != null && e[t] in n && "HTMLUserMediaElement" in n;
    }
    i.isBrowserPermissionButtonSupported = l;
}, 66);