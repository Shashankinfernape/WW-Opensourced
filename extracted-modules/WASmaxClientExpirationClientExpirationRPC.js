__d("WASmaxClientExpirationClientExpirationRPC", [
    "WAResultOrError",
    "WASmaxParseJid",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = s(e);
        if (!t.success) {
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("ClientExpiration", {
                Request: t
            }));
        }
        return {
            parsedRequest: t.value
        };
    }
    function s(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "ib");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "client_expiration");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseJid").literalJid(o("WASmaxParseJid").attrDomainJid, e, "from", "s.whatsapp.net");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrIntRange, n.value, "t", 0, undefined);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                from: r.value,
                clientExpirationT: a.value
            });
        }
        return a;
    }
    l.receiveClientExpirationRPC = e;
    l.parseClientExpirationRequest = s;
}, 98);