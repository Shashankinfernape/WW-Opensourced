__d("WASmaxPresenceServerUpdateRPC", [
    "WASmaxInPresenceServerUpdateRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInPresenceServerUpdateRequest").parseServerUpdateRequest(e);
        if (!t.success) {
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("ServerUpdate", {
                Request: t
            }));
        }
        return {
            parsedRequest: t.value
        };
    }
    l.receiveServerUpdateRPC = e;
}, 98);