__d("WAWebVoipWebTransportPthreadPrewarm", [
    "WALogger",
    "WAWebPonyfillsIdleCallback",
    "WAWebVoipGatingUtils",
    "WAWebVoipHiddenPrewarmIdleWork",
    "WAWebVoipWebTransportDataChannelThreadManager",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s() {
        if (!(!o("WAWebVoipGatingUtils").isWebTransportEnabled() || !o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() || o("WAWebVoipHiddenPrewarmIdleWork").requestHiddenPrewarmIdleWork("webtransport_pthread", u))) {
            o("WAWebPonyfillsIdleCallback").requestIdleCallback(u);
        }
    }
    function u() {
        o("WAWebVoipWebTransportDataChannelThreadManager").initWebTransportDataChannelWorker().catch((t)=>{
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: WebTransport pthread prewarm failed"
            ]))).catching(r("getErrorSafe")(t)).sendLogs("webtransport-pthread-prewarm-failed");
        });
    }
    l.scheduleWebTransportPthreadPrewarm = s;
}, 98);