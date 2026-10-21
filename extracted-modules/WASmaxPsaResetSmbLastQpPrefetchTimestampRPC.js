__d("WASmaxPsaResetSmbLastQpPrefetchTimestampRPC", [
    "WAResultOrError",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = s(e);
        if (!t.success) {
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("ResetSmbLastQpPrefetchTimestamp", {
                Request: t
            }));
        }
        return {
            parsedRequest: t.value,
            makeResetSmbLastQpPrefetchTimestampResponseAck: function() {
                return c(e);
            }
        };
    }
    function s(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "notification");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "reset_smb_last_qp_prefetch_timestamp");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseJid").attrUserJid(e, "from");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", "psa");
        if (!a.success) {
            return a;
        }
        const i = u(e);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                from: r.value,
                type: a.value
            }, i.value));
        }
        return i;
    }
    function u(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "notification");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrIntRange(e, "t", 0, undefined);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrStanzaId(e, "id");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrIntRange, e, "offline", 0, 1024);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                t: n.value,
                id: r.value,
                offline: a.value
            });
        }
        return a;
    }
    function c(e) {
        const t = m(o("WASmaxJsx").smax("ack", null), e);
        return t;
    }
    function d(e) {
        const t = o("WASmaxParseReference").attrFromReference(o("WASmaxParseUtils").attrStanzaId, e, [
            "id"
        ]);
        if (!t.success) {
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(t.error);
        }
        const n = o("WASmaxParseReference").attrFromReference(o("WASmaxParseJid").attrUserJid, e, [
            "from"
        ]);
        if (!n.success) {
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(n.error);
        }
        const r = o("WASmaxParseReference").attrFromReference(o("WASmaxParseUtils").attrString, e, [
            "type"
        ]);
        if (!r.success) {
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(r.error);
        }
        const a = o("WASmaxJsx").smax("ack", {
            id: o("WAWap").STANZA_ID(t.value),
            to: o("WAWap").USER_JID(n.value),
            class: "notification",
            type: o("WAWap").CUSTOM_STRING(r.value)
        });
        return a;
    }
    function m(e, t) {
        const n = d(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    l.receiveResetSmbLastQpPrefetchTimestampRPC = e;
    l.parseResetSmbLastQpPrefetchTimestampRequest = s;
    l.parseServerNotificationMixin = u;
    l.makeResetSmbLastQpPrefetchTimestampResponseAck = c;
    l.mergeNotificationClientAckMixin = m;
}, 98);