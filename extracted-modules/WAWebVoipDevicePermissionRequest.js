__d("WAWebVoipDevicePermissionRequest", [
    "WAGetUserMedia",
    "WALogger",
    "WAWebUserPrefsVoip",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = {
        granted: {
            camera: false,
            microphone: false
        },
        isRefused: false,
        microphoneStream: null
    };
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (o("WAGetUserMedia").getUserMedia == null) {
                return u;
            }
            const n = Date.now();
            try {
                const i = yield o("WAGetUserMedia").getUserMedia({
                    audio: t.microphone && p(),
                    video: t.camera
                });
                const camera = _(i);
                const c = i.getAudioTracks()[0];
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV] device permission request granted after ",
                    "ms, camera=",
                    ", microphone=",
                    ""
                ])), Date.now() - n, String(camera), c?.getSettings().deviceId?.slice(0, 8) ?? "none");
                return {
                    granted: {
                        camera,
                        microphone: c != null
                    },
                    isRefused: false,
                    microphoneStream: c != null ? i : null
                };
            } catch (error) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV] device permission request not granted: ",
                    ""
                ])), error);
                return babelHelpers.extends({}, u, {
                    isRefused: m(error)
                });
            }
        });
        return d.apply(this, arguments);
    }
    function m(error) {
        return error != null && typeof error === "object" && "name" in error && (error.name === "NotAllowedError" || error.name === "PermissionDeniedError");
    }
    function p() {
        const ideal = o("WAWebUserPrefsVoip").getSelectedAudioInputDevice();
        if (ideal != null) {
            return {
                deviceId: {
                    ideal
                }
            };
        }
        return true;
    }
    function _(e) {
        const t = e.getVideoTracks();
        t.forEach((t)=>{
            t.stop();
            e.removeTrack(t);
        });
        return t.length > 0;
    }
    l.requestVoipDevicePermissions = c;
    l.getMicrophoneConstraints = p;
}, 98);