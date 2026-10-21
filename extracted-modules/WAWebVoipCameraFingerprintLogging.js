__d("WAWebVoipCameraFingerprintLogging", [
    "WALogger",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebVoipLocalCallStateStore",
    "WAWebVoipWaCallEnums",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s = p();
    function u() {
        s = p();
    }
    function c(e, t) {
        s.eligible = e && t;
        d();
    }
    function d() {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = s;
            if (_(e)) {
                if (e.pending) {
                    e.retryRequested = true;
                    return;
                }
                e.pending = true;
                e.retryRequested = false;
                try {
                    e.logged = yield f();
                } finally{
                    e.pending = false;
                }
                if (e.retryRequested && _(e)) {
                    yield d();
                }
            }
        });
        return m.apply(this, arguments);
    }
    function p() {
        return {
            eligible: false,
            logged: false,
            pending: false,
            retryRequested: false
        };
    }
    function _(e) {
        return e === s && e.eligible && !e.logged && o("WAWebVoipLocalCallStateStore").getLocalCallState() === o("WAWebVoipWaCallEnums").CallState.CallActive && o("WAWebABProps").getABPropConfigValue("web_voip_camera_fingerprint_logging_enabled");
    }
    function f() {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                return yield o("WAWebBackendApi").frontendSendAndReceive("logCameraFingerprint", {});
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: camera fingerprint dispatch failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("voip-camera-fingerprint-dispatch-failed");
                return false;
            }
        });
        return g.apply(this, arguments);
    }
    l.resetCameraFingerprintLogging = u;
    l.maybeLogCameraFingerprint = c;
    l.retryCameraFingerprint = d;
}, 98);