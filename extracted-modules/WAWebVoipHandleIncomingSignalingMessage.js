__d("WAWebVoipHandleIncomingSignalingMessage", [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebHandleVoipEncRekey",
    "WAWebVoipGatingUtils",
    "WAWebVoipPeerTcToken",
    "WAWebVoipStackInterface",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    function m(e, t, n) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n = o("WAWebVoipGatingUtils").isCallingEnabled()) {
            if (n) {
                const r = yield o("WAWebVoipStackInterface").getVoipStackInterface();
                if (r) {
                    const tcToken = yield o("WAWebVoipPeerTcToken").fetchPeerTcToken(e.peer_jid);
                    yield r.handleIncomingSignalingMessage({
                        msgE: e.e,
                        msgOffline: e.isContact ?? false,
                        msgPlatform: e.peer_platform,
                        msgT: e.t,
                        msgVersion: e.peer_app_version,
                        peerJid: e.peer_jid.toString(),
                        tcToken,
                        xmlNode: t
                    });
                    return;
                }
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: web-only fallback, stack interface unavailable"
                ])));
            } else {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: web-only fallback, voip stack unavailable"
                ])));
            }
            o("WAWebBackendApi").frontendFireAndForget("handleVoipWebIncomingSignalingMessageAction", {
                msg: e,
                voipNode: t
            });
        });
        return p.apply(this, arguments);
    }
    function _(t, a) {
        if (o("WAWebVoipGatingUtils").isCallingEnabled()) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] handleVoipIncomingEncRekey enc_rekey from ",
                ""
            ])), t.peer_jid.toString());
            return o("WAWebHandleVoipEncRekey").handleVoipEncRekey(t, a);
        }
        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "[voip] handleVoipIncomingEncRekey: disabled, dropped ",
            ""
        ])), t.peer_jid.toString());
        return (d || (d = n("Promise"))).reject(r("err")("incoming enc rekey received but calling is not enabled"));
    }
    l.handleVoipIncomingSignalingMessage = m;
    l.handleVoipIncomingEncRekey = _;
}, 98);