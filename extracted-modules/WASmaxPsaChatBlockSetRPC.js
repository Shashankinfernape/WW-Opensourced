__d("WASmaxPsaChatBlockSetRPC", [
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
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = d(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = c(r, n);
            if (a.success) {
                return {
                    name: "ChatBlockSetResponseSuccess",
                    value: a.value
                };
            }
            const i = u(r, n);
            if (i.success) {
                return {
                    name: "ChatBlockSetResponseServerError",
                    value: i.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("ChatBlockSet", {
                Success: a,
                ServerError: i
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
    function d({ blockingAction }) {
        const n = p(o("WASmaxJsx").smax("iq", {
            to: o("WAWap").S_WHATSAPP_NET,
            xmlns: "w:comms:chat"
        }, o("WASmaxJsx").smax("blocking", {
            action: o("WAWap").CUSTOM_STRING(blockingAction)
        })));
        return n;
    }
    function m() {
        const e = o("WASmaxJsx").smax("iq", {
            id: o("WAWap").generateId(),
            type: "set"
        });
        return e;
    }
    function p(e) {
        const t = m();
        return o("WASmaxMixins").mergeStanzas(e, t);
    }
    l.sendChatBlockSetRPC = e;
    l.parseChatBlockSetResponseServerError = u;
    l.parseChatBlockSetResponseSuccess = c;
    l.makeChatBlockSetRequest = d;
    l.mergeBaseIQSetRequestMixin = p;
}, 98);