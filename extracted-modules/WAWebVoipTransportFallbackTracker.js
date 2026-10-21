__d("WAWebVoipTransportFallbackTracker", [
    "WALogger",
    "WAWebCoreActionsODS",
    "WAWebVoipWebTransportCallSummary"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u = false;
    let c = false;
    function d() {
        if (!u) {
            u = true;
            c = false;
        }
    }
    function m() {
        if (u) {
            o("WAWebVoipWebTransportCallSummary").recordWtFallbackSctpStart();
        }
    }
    function p() {
        return u;
    }
    function _() {
        if (!(!u || c)) {
            c = true;
            o("WAWebVoipWebTransportCallSummary").recordWtFallbackSctpConnected();
            o("WAWebCoreActionsODS").logCallWebtransportFallbackToSctpSctpConnected();
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportFallback] SCTP recovered call after WebTransport fallback"
            ])));
        }
    }
    function f() {
        if (!(!u || c)) {
            c = true;
            o("WAWebCoreActionsODS").logCallWebtransportFallbackToSctpSctpFailed();
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportFallback] SCTP also failed after WebTransport fallback"
            ]))).sendLogs("webtransport-fallback-sctp-failed");
        }
    }
    function g() {
        u = false;
        c = false;
    }
    l.markFallbackTriggered = d;
    l.markFallbackSctpStarted = m;
    l.hasFallbackTriggered = p;
    l.notifySctpConnectionOpened = _;
    l.finalizeFallbackOutcome = f;
    l.resetFallbackTracker = g;
}, 98);