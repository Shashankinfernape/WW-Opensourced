__d("WASmaxUserNoticeSetResultRPC", [
    "WAComms",
    "WAResultOrError",
    "WASmaxInUserNoticeIQErrorBadRequestMixin",
    "WASmaxInUserNoticeIQErrorInternalServerErrorMixin",
    "WASmaxInUserNoticeIQErrorRateOverlimitMixin",
    "WASmaxInUserNoticeIQErrorResponseMixin",
    "WASmaxInUserNoticeIQResultResponseMixin",
    "WASmaxJsx",
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
                    name: "SetResultResponseSuccess",
                    value: a.value
                };
            }
            const i = u(r, n);
            if (i.success) {
                return {
                    name: "SetResultResponseClientError",
                    value: i.value
                };
            }
            const l = c(r, n);
            if (l.success) {
                return {
                    name: "SetResultResponseServerError",
                    value: l.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("SetResult", {
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
        const a = o("WASmaxInUserNoticeIQErrorResponseMixin").parseIQErrorResponseMixin(e, t);
        if (!a.success) {
            return a;
        }
        const i = _(r.value);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, a.value, {
                errorIQErrorBadRequestOrRateOverlimitMixinGroup: i.value
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
        const a = o("WASmaxInUserNoticeIQErrorInternalServerErrorMixin").parseIQErrorInternalServerErrorMixin(r.value);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInUserNoticeIQErrorResponseMixin").parseIQErrorResponseMixin(e, t);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                errorIQErrorInternalServerErrorMixin: a.value
            }, i.value));
        }
        return i;
    }
    function d(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "trackable");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrIntRange(e, "id", 1, undefined);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrIntRange(e, "result", 0, 1000);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                id: n.value,
                result: r.value
            });
        }
        return r;
    }
    function m(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").optionalChildWithTag(e, "trackable", d);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInUserNoticeIQResultResponseMixin").parseIQResultResponseMixin(e, t);
        if (a.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, a.value, {
                trackable: r.value
            }));
        }
        return a;
    }
    function p({ trackableId, trackableResult }) {
        const r = o("WASmaxOutUserNoticeBaseIQSetRequestMixin").mergeBaseIQSetRequestMixin(o("WASmaxJsx").smax("iq", {
            to: o("WAWap").S_WHATSAPP_NET,
            xmlns: "tos"
        }, o("WASmaxJsx").smax("trackable", {
            id: o("WAWap").INT(trackableId),
            result: o("WAWap").INT(trackableResult)
        })));
        return r;
    }
    function _(e) {
        const t = o("WASmaxInUserNoticeIQErrorBadRequestMixin").parseIQErrorBadRequestMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorBadRequest",
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
            "IQErrorBadRequest",
            "IQErrorRateOverlimit"
        ], [
            t,
            n
        ]);
    }
    l.sendSetResultRPC = e;
    l.parseSetResultResponseClientError = u;
    l.parseSetResultResponseServerError = c;
    l.parseSetResultResponseSuccessTrackable = d;
    l.parseSetResultResponseSuccess = m;
    l.makeSetResultRequest = p;
    l.parseIQErrorBadRequestOrRateOverlimitMixinGroup = _;
}, 98);