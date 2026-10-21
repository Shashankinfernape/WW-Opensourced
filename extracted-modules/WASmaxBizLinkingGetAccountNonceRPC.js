__d("WASmaxBizLinkingGetAccountNonceRPC", [
    "WAComms",
    "WAResultOrError",
    "WASmaxChildren",
    "WASmaxInBizLinkingHackBaseIQErrorResponseMixin",
    "WASmaxInBizLinkingHackBaseIQResultResponseMixin",
    "WASmaxInBizLinkingIQErrorInternalServerErrorMixin",
    "WASmaxJsx",
    "WASmaxOutBizLinkingHackBaseIQGetRequestMixin",
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
            const n = p(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = d(r, n);
            if (a.success) {
                return {
                    name: "GetAccountNonceResponseSuccess",
                    value: a.value
                };
            }
            const i = u(r, n);
            if (i.success) {
                return {
                    name: "GetAccountNonceResponseError",
                    value: i.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("GetAccountNonce", {
                Success: a,
                Error: i
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
        const a = o("WASmaxInBizLinkingHackBaseIQErrorResponseMixin").parseHackBaseIQErrorResponseMixin(e, t);
        if (!a.success) {
            return a;
        }
        const i = _(r.value);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, a.value, {
                errorAccountNonceErrors: i.value
            }));
        }
        return i;
    }
    function c(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "request");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "id");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").contentString(n.value);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                idElementValue: r.value
            });
        }
        return r;
    }
    function d(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "detail");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "nonce");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").optionalChildWithTag(r.value, "request", c);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").contentString(a.value);
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxInBizLinkingHackBaseIQResultResponseMixin").parseHackBaseIQResultResponseMixin(e, t);
        if (s.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                detailNonceElementValue: l.value
            }, s.value, {
                detailRequest: i.value
            }));
        }
        return s;
    }
    function m({ identifierScope }) {
        const n = o("WASmaxJsx").smax("identifier", {
            scope: o("WAWap").CUSTOM_STRING(identifierScope)
        });
        return n;
    }
    function p(e) {
        const e_identifierArgs = e.identifierArgs;
        const n = o("WASmaxOutBizLinkingHackBaseIQGetRequestMixin").mergeHackBaseIQGetRequestMixin(o("WASmaxJsx").smax("iq", {
            xmlns: "fb:thrift_iq",
            smax_id: o("WAWap").INT(12)
        }, o("WASmaxChildren").OPTIONAL_CHILD(m, e_identifierArgs)), e);
        return n;
    }
    function _(e) {
        const t = f(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorBadRequest",
                value: t.value
            });
        }
        const n = g(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorNoticeRequired",
                value: n.value
            });
        }
        const r = o("WASmaxInBizLinkingIQErrorInternalServerErrorMixin").parseIQErrorInternalServerErrorMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorInternalServerError",
                value: r.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "IQErrorBadRequest",
            "IQErrorNoticeRequired",
            "IQErrorInternalServerError"
        ], [
            t,
            n,
            r
        ]);
    }
    function f(e) {
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
    function g(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "error");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "text", "notice-required");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrInt, e, "code", 475);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").attrIntRange(e, "tos_version", 1, 65535);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                text: n.value,
                code: r.value,
                tosVersion: a.value
            });
        }
        return a;
    }
    l.sendGetAccountNonceRPC = e;
    l.parseGetAccountNonceResponseError = u;
    l.parseGetAccountNonceResponseSuccessDetailRequest = c;
    l.parseGetAccountNonceResponseSuccess = d;
    l.makeGetAccountNonceRequestIdentifier = m;
    l.makeGetAccountNonceRequest = p;
    l.parseAccountNonceErrors = _;
    l.parseIQErrorBadRequestMixin = f;
    l.parseIQErrorNoticeRequiredMixin = g;
}, 98);