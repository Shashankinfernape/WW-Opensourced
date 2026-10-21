__d("WASmaxBizAccessTokenRequestSilentNonceRPC", [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxParseJid",
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
            const a = d(r, n);
            if (a.success) {
                return {
                    name: "RequestSilentNonceResponseSuccess",
                    value: a.value
                };
            }
            const i = c(r, n);
            if (i.success) {
                return {
                    name: "RequestSilentNonceResponseRecoveryRequired",
                    value: i.value
                };
            }
            const l = u(r, n);
            if (l.success) {
                return {
                    name: "RequestSilentNonceResponseError",
                    value: l.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("RequestSilentNonce", {
                Success: a,
                RecoveryRequired: i,
                Error: l
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
        const i = h(r.value);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, a.value, {
                errorRequestSilentNonceErrors: i.value
            }));
        }
        return i;
    }
    function c(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "result");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, r.value, "status", "RecoveryRequired");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").attrString(r.value, "email");
        if (!i.success) {
            return i;
        }
        const l = _(e, t);
        if (l.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                resultStatus: a.value,
                resultEmail: i.value
            }, l.value));
        }
        return l;
    }
    function d(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "result");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, r.value, "status", "Success");
        if (!a.success) {
            return a;
        }
        const i = _(e, t);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                resultStatus: a.value
            }, i.value));
        }
        return i;
    }
    function m(e) {
        const t = C(o("WASmaxJsx").smax("iq", {
            xmlns: "fb:thrift_iq",
            smax_id: o("WAWap").INT(118)
        }), e);
        return t;
    }
    function p(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").optional(o("WASmaxParseJid").attrUserJid, e, "to");
        if (!r.success) {
            return r;
        }
        const a = f(e, t);
        if (a.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                to: r.value
            }, a.value));
        }
        return a;
    }
    function _(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").optional(o("WASmaxParseJid").attrUserJid, e, "to");
        if (!r.success) {
            return r;
        }
        const a = g(e, t);
        if (a.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                to: r.value
            }, a.value));
        }
        return a;
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
        const s = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", "error");
        if (s.success) {
            return o("WAResultOrError").makeResult({
                type: s.value
            });
        }
        return s;
    }
    function g(e, t) {
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
    function h(e) {
        const t = b(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorBadRequest",
                value: t.value
            });
        }
        const n = v(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorForbidden",
                value: n.value
            });
        }
        const r = S(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorInternalServerError",
                value: r.value
            });
        }
        const a = R(e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorServiceUnavailable",
                value: a.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "IQErrorBadRequest",
            "IQErrorForbidden",
            "IQErrorInternalServerError",
            "IQErrorServiceUnavailable"
        ], [
            t,
            n,
            r,
            a
        ]);
    }
    function y({ iqFrom: t }) {
        const n = E(o("WASmaxJsx").smax("iq", {
            from: o("WASmaxAttrs").OPTIONAL(o("WAWap").USER_JID, t),
            to: o("WAWap").S_WHATSAPP_NET
        }));
        return n;
    }
    function C(e, t) {
        const n = y(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function b(e) {
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
    function v(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "error");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "text", "forbidden");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrInt, e, "code", 403);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                text: n.value,
                code: r.value
            });
        }
        return r;
    }
    function S(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "error");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "text", "internal-server-error");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrInt, e, "code", 500);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                text: n.value,
                code: r.value
            });
        }
        return r;
    }
    function R(e) {
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
    function L() {
        const e = o("WASmaxJsx").smax("iq", {
            id: o("WAWap").generateId(),
            type: "get"
        });
        return e;
    }
    function E(e) {
        const t = L();
        return o("WASmaxMixins").mergeStanzas(e, t);
    }
    l.sendRequestSilentNonceRPC = e;
    l.parseRequestSilentNonceResponseError = u;
    l.parseRequestSilentNonceResponseRecoveryRequired = c;
    l.parseRequestSilentNonceResponseSuccess = d;
    l.makeRequestSilentNonceRequest = m;
    l.parseHackBaseIQErrorResponseMixin = p;
    l.parseHackBaseIQResultResponseMixin = _;
    l.parseIQErrorResponseMixin = f;
    l.parseIQResultResponseMixin = g;
    l.parseRequestSilentNonceErrors = h;
    l.mergeHackBaseIQGetRequestMixin = C;
    l.parseIQErrorBadRequestMixin = b;
    l.parseIQErrorForbiddenMixin = v;
    l.parseIQErrorInternalServerErrorMixin = S;
    l.parseIQErrorServiceUnavailableMixin = R;
    l.mergeBaseIQGetRequestMixin = E;
}, 98);