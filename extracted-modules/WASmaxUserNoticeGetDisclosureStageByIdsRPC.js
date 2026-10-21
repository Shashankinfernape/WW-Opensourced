__d("WASmaxUserNoticeGetDisclosureStageByIdsRPC", [
    "WAComms",
    "WAResultOrError",
    "WASmaxChildren",
    "WASmaxInUserNoticeIQErrorBadRequestMixin",
    "WASmaxInUserNoticeIQErrorResponseMixin",
    "WASmaxInUserNoticeIQResultResponseMixin",
    "WASmaxInUserNoticeStageMixin",
    "WASmaxInUserNoticeUserNoticeServerError",
    "WASmaxJsx",
    "WASmaxOutUserNoticeBaseIQGetRequestMixin",
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
            const n = _(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = d(r, n);
            if (a.success) {
                return {
                    name: "GetDisclosureStageByIdsResponseClientSuccess",
                    value: a.value
                };
            }
            const i = u(r, n);
            if (i.success) {
                return {
                    name: "GetDisclosureStageByIdsResponseClientError",
                    value: i.value
                };
            }
            const l = m(r, n);
            if (l.success) {
                return {
                    name: "GetDisclosureStageByIdsResponseServerError",
                    value: l.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("GetDisclosureStageByIds", {
                ClientSuccess: a,
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
    function c(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "notice");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrIntRange(e, "t", 0, undefined);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrIntRange, e, "version", 1, undefined);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrIntRange, e, "type", 0, undefined);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInUserNoticeStageMixin").parseStageMixin(e);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                t: n.value,
                version: r.value,
                type: a.value
            }, i.value));
        }
        return i;
    }
    function d(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInUserNoticeIQResultResponseMixin").parseIQResultResponseMixin(e, t);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").mapChildrenWithTag(e, "notice", 0, Infinity, c);
        if (a.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, r.value, {
                notice: a.value
            }));
        }
        return a;
    }
    function m(e, t) {
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
        const i = o("WASmaxInUserNoticeUserNoticeServerError").parseUserNoticeServerError(r.value);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, a.value, {
                errorUserNoticeServerError: i.value
            }));
        }
        return i;
    }
    function p({ getDisclosureStageByIdId, getDisclosureStageByIdT }) {
        const r = o("WASmaxJsx").smax("get_disclosure_stage_by_id", {
            id: o("WAWap").INT(getDisclosureStageByIdId),
            t: o("WAWap").INT(getDisclosureStageByIdT)
        });
        return r;
    }
    function _({ getDisclosureStageByIdArgs }) {
        const n = o("WASmaxOutUserNoticeBaseIQGetRequestMixin").mergeBaseIQGetRequestMixin(o("WASmaxJsx").smax("iq", {
            to: o("WAWap").S_WHATSAPP_NET,
            xmlns: "tos"
        }, o("WASmaxChildren").REPEATED_CHILD(p, getDisclosureStageByIdArgs, 0, Infinity)));
        return n;
    }
    l.sendGetDisclosureStageByIdsRPC = e;
    l.parseGetDisclosureStageByIdsResponseClientError = u;
    l.parseGetDisclosureStageByIdsResponseClientSuccessNotice = c;
    l.parseGetDisclosureStageByIdsResponseClientSuccess = d;
    l.parseGetDisclosureStageByIdsResponseServerError = m;
    l.makeGetDisclosureStageByIdsRequestGetDisclosureStageById = p;
    l.makeGetDisclosureStageByIdsRequest = _;
}, 98);