__d("WASmaxUserNoticeSetRPC", [
    "WAComms",
    "WAResultOrError",
    "WASmaxInUserNoticeIQErrorBadRequestMixin",
    "WASmaxInUserNoticeIQErrorInternalServerErrorMixin",
    "WASmaxInUserNoticeIQErrorRateOverlimitMixin",
    "WASmaxInUserNoticeIQErrorResponseMixin",
    "WASmaxInUserNoticeIQResultResponseMixin",
    "WASmaxInUserNoticeStageMixin",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutUserNoticeBaseIQSetRequestMixin",
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
            const a = m(r, n);
            if (a.success) {
                return {
                    name: "SetResponseSuccess",
                    value: a.value
                };
            }
            const i = u(r, n);
            if (i.success) {
                return {
                    name: "SetResponseClientError",
                    value: i.value
                };
            }
            const l = c(r, n);
            if (l.success) {
                return {
                    name: "SetResponseServerError",
                    value: l.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("Set", {
                Success: a,
                ClientError: i,
                ServerError: l
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
        const a = o("WASmaxInUserNoticeIQErrorBadRequestMixin").parseIQErrorBadRequestMixin(r.value);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInUserNoticeIQErrorResponseMixin").parseIQErrorResponseMixin(e, t);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                errorIQErrorBadRequestMixin: a.value
            }, i.value));
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
        const a = o("WASmaxInUserNoticeIQErrorResponseMixin").parseIQErrorResponseMixin(e, t);
        if (!a.success) {
            return a;
        }
        const i = g(r.value);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, a.value, {
                errorIQErrorInternalServerErrorOrRateOverlimitMixinGroup: i.value
            }));
        }
        return i;
    }
    function d(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "notice");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrIntRange(e, "t", 0, undefined);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInUserNoticeStageMixin").parseStageMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                t: n.value
            }, r.value));
        }
        return r;
    }
    function m(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").optionalChildWithTag(e, "notice", d);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInUserNoticeIQResultResponseMixin").parseIQResultResponseMixin(e, t);
        if (a.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, a.value, {
                notice: r.value
            }));
        }
        return a;
    }
    function p({ stageMixinArgs }) {
        const n = o("WASmaxOutUserNoticeBaseIQSetRequestMixin").mergeBaseIQSetRequestMixin(o("WASmaxJsx").smax("iq", {
            to: o("WAWap").S_WHATSAPP_NET,
            xmlns: "tos"
        }, f(o("WASmaxJsx").smax("notice", null), stageMixinArgs)));
        return n;
    }
    function _({ noticeId, noticeStage }) {
        const r = o("WASmaxJsx").smax("notice", {
            id: o("WAWap").INT(noticeId),
            stage: o("WAWap").INT(noticeStage)
        });
        return r;
    }
    function f(e, t) {
        const n = _(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function g(e) {
        const t = o("WASmaxInUserNoticeIQErrorInternalServerErrorMixin").parseIQErrorInternalServerErrorMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorInternalServerError",
                value: t.value
            });
        }
        const n = o("WASmaxInUserNoticeIQErrorRateOverlimitMixin").parseIQErrorRateOverlimitMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorRateOverlimit",
                value: n.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "IQErrorInternalServerError",
            "IQErrorRateOverlimit"
        ], [
            t,
            n
        ]);
    }
    l.sendSetRPC = e;
    l.parseSetResponseClientError = u;
    l.parseSetResponseServerError = c;
    l.parseSetResponseSuccessNotice = d;
    l.parseSetResponseSuccess = m;
    l.makeSetRequest = p;
    l.mergeStageMixin = f;
    l.parseIQErrorInternalServerErrorOrRateOverlimitMixinGroup = g;
}, 98);