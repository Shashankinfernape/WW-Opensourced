__d("WASmaxStatsSendBufferRPC", [
    "WAComms",
    "WAResultOrError",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxParseReference",
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
            const n = m(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const Success = d(r, n);
            if (Success.success) {
                return {
                    name: "SendBufferResponseSuccess",
                    value: Success.value
                };
            }
            const ErrorNoRetry = u(r, n);
            if (ErrorNoRetry.success) {
                return {
                    name: "SendBufferResponseErrorNoRetry",
                    value: ErrorNoRetry.value
                };
            }
            const ErrorRetry = c(r, n);
            if (ErrorRetry.success) {
                return {
                    name: "SendBufferResponseErrorRetry",
                    value: ErrorRetry.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("SendBuffer", {
                Success,
                ErrorNoRetry,
                ErrorRetry
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
        const a = p(e, t);
        if (!a.success) {
            return a;
        }
        const i = g(r.value);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, a.value, {
                errorSendBufferNoRetryError: i.value
            }));
        }
        return i;
    }
    function c(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
        if (!r.success) {
            return r;
        }
        const a = _(r.value);
        if (!a.success) {
            return a;
        }
        const i = p(e, t);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                errorIQErrorServiceUnavailableMixin: a.value
            }, i.value));
        }
        return i;
    }
    function d(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = f(e, t);
        r.success;
        return r;
    }
    function m({ addT, addElementValue }) {
        const r = y(o("WASmaxJsx").smax("iq", {
            xmlns: "w:stats",
            to: o("WAWap").S_WHATSAPP_NET
        }, o("WASmaxJsx").smax("add", {
            t: o("WAWap").INT(addT)
        }, addElementValue)));
        return r;
    }
    function p(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseReference").attrStringFromReference(t, [
            "id"
        ]);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "id", r.value);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseReference").attrStringFromReference(t, [
            "to"
        ]);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "from", i.value);
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", "error");
        if (s.success) {
            return o("WAResultOrError").makeResult({
                type: s.value
            });
        }
        return s;
    }
    function _(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "error");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "text", "service-unavailable");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrInt, e, "code", 503);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                text: n.value,
                code: r.value
            });
        }
        return r;
    }
    function f(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseReference").attrStringFromReference(t, [
            "id"
        ]);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "id", r.value);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseReference").attrStringFromReference(t, [
            "to"
        ]);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "from", i.value);
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", "result");
        if (s.success) {
            return o("WAResultOrError").makeResult({
                type: s.value
            });
        }
        return s;
    }
    function g(e) {
        const t = C(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorBadRequest",
                value: t.value
            });
        }
        const n = S(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorNotAcceptable",
                value: n.value
            });
        }
        const r = b(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorFeatureNotImplemented",
                value: r.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "IQErrorBadRequest",
            "IQErrorNotAcceptable",
            "IQErrorFeatureNotImplemented"
        ], [
            t,
            n,
            r
        ]);
    }
    function h() {
        const e = o("WASmaxJsx").smax("iq", {
            id: o("WAWap").generateId(),
            type: "set"
        });
        return e;
    }
    function y(e) {
        const t = h();
        return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function C(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "error");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "text", "bad-request");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrInt, e, "code", 400);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                text: n.value,
                code: r.value
            });
        }
        return r;
    }
    function b(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "error");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "text", "feature-not-implemented");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrInt, e, "code", 501);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                text: n.value,
                code: r.value
            });
        }
        return r;
    }
    function v(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "field");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrString(e, "name");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrString(e, "reason");
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: n.value,
                reason: r.value
            });
        }
        return r;
    }
    function S(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "error");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").optionalChildWithTag(e, "field", v);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "text", "not-acceptable");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrInt, e, "code", 406);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                text: r.value,
                code: a.value,
                field: n.value
            });
        }
        return a;
    }
    l.sendSendBufferRPC = e;
    l.parseSendBufferResponseErrorNoRetry = u;
    l.parseSendBufferResponseErrorRetry = c;
    l.parseSendBufferResponseSuccess = d;
    l.makeSendBufferRequest = m;
    l.parseIQErrorResponseMixin = p;
    l.parseIQErrorServiceUnavailableMixin = _;
    l.parseIQResultResponseMixin = f;
    l.parseSendBufferNoRetryError = g;
    l.mergeBaseIQSetRequestMixin = y;
    l.parseIQErrorBadRequestMixin = C;
    l.parseIQErrorFeatureNotImplementedMixin = b;
    l.parseIQErrorNotAcceptableField = v;
    l.parseIQErrorNotAcceptableMixin = S;
}, 98);