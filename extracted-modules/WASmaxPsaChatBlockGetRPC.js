__d("WASmaxPsaChatBlockGetRPC", [
    "WAComms",
    "WAResultOrError",
    "WASmaxInPsaChatBlockError",
    "WASmaxInPsaEnums",
    "WASmaxInPsaIQErrorResponseMixin",
    "WASmaxInPsaIQResultResponseMixin",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = d();
            const n = yield o("WAComms").sendSmaxStanza(t, e);
            const r = c(n, t);
            if (r.success) {
                return {
                    name: "ChatBlockGetResponseSuccess",
                    value: r.value
                };
            }
            const a = u(n, t);
            if (a.success) {
                return {
                    name: "ChatBlockGetResponseServerError",
                    value: a.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("ChatBlockGet", {
                Success: r,
                ServerError: a
            }));
        });
        return s.apply(this, arguments);
    }
    function u(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInPsaIQErrorResponseMixin").parseIQErrorResponseMixin(e, t);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInPsaChatBlockError").parseChatBlockError(r.value);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, a.value, {
                errorChatBlockError: i.value
            }));
        }
        return i;
    }
    function c(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "blocking");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").attrStringEnum(r.value, "status", o("WASmaxInPsaEnums").ENUM_BLOCKED_UNBLOCKED);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInPsaIQResultResponseMixin").parseIQResultResponseMixin(e, t);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                blockingStatus: a.value
            }, i.value));
        }
        return i;
    }
    function d() {
        const e = p(o("WASmaxJsx").smax("iq", {
            to: o("WAWap").S_WHATSAPP_NET,
            xmlns: "w:comms:chat"
        }, o("WASmaxJsx").smax("query", null, o("WASmaxJsx").smax("blocking_status", null))));
        return e;
    }
    function m() {
        const e = o("WASmaxJsx").smax("iq", {
            id: o("WAWap").generateId(),
            type: "get"
        });
        return e;
    }
    function p(e) {
        const t = m();
        return o("WASmaxMixins").mergeStanzas(e, t);
    }
    l.sendChatBlockGetRPC = e;
    l.parseChatBlockGetResponseServerError = u;
    l.parseChatBlockGetResponseSuccess = c;
    l.makeChatBlockGetRequest = d;
    l.mergeBaseIQGetRequestMixin = p;
}, 98);