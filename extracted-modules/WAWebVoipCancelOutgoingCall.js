__d("WAWebVoipCancelOutgoingCall", [
    "WALogger",
    "WAWebCallCollection",
    "WAWebPipController",
    "WAWebVoipActivityTracker"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s() {
        const pendingOutgoingCall = r("WAWebCallCollection").pendingOutgoingCall;
        if (pendingOutgoingCall != null) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: cancelling pending outgoing call before signaling"
            ])));
            r("WAWebCallCollection").setPendingOutgoingCall(null);
            r("WAWebPipController").closePiP();
            if (r("WAWebCallCollection").activeCall == null) {
                o("WAWebVoipActivityTracker").clearAllActivityTracking();
            }
            pendingOutgoingCall.abortController.abort();
        }
    }
    l.cancelPendingOutgoingCall = s;
}, 98);