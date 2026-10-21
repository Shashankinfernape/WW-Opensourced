__d("WAWebSendHatchMetadataRequest", [
    "Promise",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebChatModel",
    "WAWebDBProcessMessage",
    "WAWebHatchFrontendGating",
    "WAWebHatchMetadataExchangeManager",
    "WAWebMsgDataUtils",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebSendMsgRecordAction",
    "asyncToGeneratorRuntime",
    "cr:7454",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    function c(t, a) {
        if (!o("WAWebHatchFrontendGating").isHatchIntegrationEnabled()) {
            return (u || (u = n("Promise"))).resolve({
                outcome: "send_failed"
            });
        }
        const i = r("WAWebPonyfillsCryptoRandomUUID")();
        const l = r("WAWebHatchMetadataExchangeManager").register(i, a);
        d(i, t).catch((t)=>{
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-metadata: dispatch failed id=",
                ""
            ])), i).catching(r("getErrorSafe")(t)).sendLogs("hatch-metadata-dispatch-failed");
            r("WAWebHatchMetadataExchangeManager").failRequest(i, "send_failed");
        });
        return l;
    }
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, request) {
            const a = o("WAWebChatCollection").ChatCollection.get(o("WAWebBotUtils").HATCH_BOT_FBID_WID) ?? new (o("WAWebChatModel")).Chat({
                id: o("WAWebBotUtils").HATCH_BOT_FBID_WID
            });
            const i = babelHelpers.extends({}, (yield o("WAWebMsgDataUtils").genOutgoingMsgData(a, o("WAWebMsgType").MSG_TYPE.PROTOCOL)), {
                type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                kind: o("WAWebMsgType").MsgKind.Protocol,
                subtype: "hatch_metadata_sync",
                hatchMetadataSync: {
                    type: "req",
                    requestId: e,
                    request
                },
                messageSecret: self.crypto.getRandomValues(new Uint8Array(32))
            });
            const l = new (o("WAWebMsgModel")).Msg(i);
            if (n("cr:7454") != null) {
                n("cr:7454").noteOutboundMsgId(e, l.id.toString());
            }
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-metadata: sending req method=",
                " id=",
                ""
            ])), request.method, e);
            o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("sendMessage", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield o("WAWebDBProcessMessage").storeMessages([
                    i
                ], a.id);
                return o("WAWebSendMsgRecordAction").sendMsgRecord(l);
            }), {
                priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
            }).fireAndForget();
        });
        return m.apply(this, arguments);
    }
    l.sendHatchMetadataRequest = c;
}, 98);