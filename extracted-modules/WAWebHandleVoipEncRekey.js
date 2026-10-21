__d("WAWebHandleVoipEncRekey", [
    "Promise",
    "WALogger",
    "WAWebHandleMsgTypes.flow",
    "WAWebVoipStackInterface",
    "WAWebVoipValidateAndDecryptEnc",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, xmlNode) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[handleVoipEncRekey] enc_rekey from ",
                " call=",
                ""
            ])), t.peer_jid.toString(), t.call_id ?? "unknown");
            const i = yield (d || (d = n("Promise"))).all([
                o("WAWebVoipValidateAndDecryptEnc").validateAndDecryptEnc(xmlNode, t),
                o("WAWebVoipStackInterface").getVoipStackInterface()
            ]);
            const l = i[0];
            const { result, retryCount } = l;
            const _ = i[1];
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[handleVoipEncRekey] e2e res=",
                " retry=",
                " stack=",
                ""
            ])), String(result), String(retryCount ?? 0), String(_ != null));
            switch(result){
                case o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS:
                    if (_ == null) {
                        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[handleVoipEncRekey] stack null, enc_rekey dropped peer=",
                            ""
                        ])), t.peer_jid.toString());
                    } else {
                        yield _.handleIncomingSignalingMessage({
                            msgE: t.e,
                            msgOffline: t.is_offline ?? false,
                            msgPlatform: t.peer_platform,
                            msgT: t.t,
                            msgVersion: t.peer_app_version,
                            peerJid: t.peer_jid.toString(),
                            tcToken: undefined,
                            xmlNode
                        });
                        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[handleVoipEncRekey] forwarded to WASM stack +"
                        ])));
                    }
                    break;
                default:
                    break;
            }
            return {
                shouldRetry: result === o("WAWebHandleMsgTypes.flow").E2EProcessResult.RETRY,
                retryCount
            };
        });
        return p.apply(this, arguments);
    }
    l.handleVoipEncRekey = m;
}, 98);