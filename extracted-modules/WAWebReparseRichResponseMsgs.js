__d("WAWebReparseRichResponseMsgs", [
    "Promise",
    "WAResolvable",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebDBMessageSerialization",
    "WAWebMessageProcessDBPipeline",
    "WAWebRichResponse.flow",
    "WAWebRichResponseParseUtils",
    "asyncToGeneratorRuntime",
    "compactMap"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const a = r("compactMap")(t, function(e) {
                const t = o("WAWebDBMessageSerialization").messageFromDbRow(e);
                const t_richResponse = t.richResponse;
                if (t_richResponse == null || t_richResponse.parseState === o("WAWebRichResponse.flow").RichResponseParseState.Parsed) {
                    return null;
                }
                const richResponse = o("WAWebRichResponseParseUtils").parseRichResponse(t_richResponse);
                if (richResponse.parseState === o("WAWebRichResponse.flow").RichResponseParseState.Unparsed) {
                    return null;
                }
                return babelHelpers.extends({}, t, {
                    richResponse
                });
            });
            if (a.length !== 0) {
                const uiNotified = new (o("WAResolvable")).Resolvable;
                yield o("WAWebMessageProcessDBPipeline").processMsgDataDBPipeline({
                    flushImmediatly: true,
                    msgData: a,
                    uiNotified
                });
                try {
                    if (o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd) {
                        yield (e || (e = n("Promise"))).all(a.map((()=>{
                            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                                return o("WAWebBackendApi").frontendSendAndReceive("updateMessageUI", {
                                    chatId: e.id.remote,
                                    msg: e
                                });
                            });
                            return function(t) {
                                return e.apply(this, arguments);
                            };
                        })()));
                    }
                } finally{
                    uiNotified.resolve(undefined);
                }
            }
        });
        return u.apply(this, arguments);
    }
    l.reparseRichResponseMsgs = s;
}, 98);