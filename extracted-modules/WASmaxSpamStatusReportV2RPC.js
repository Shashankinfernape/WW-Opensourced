__d("WASmaxSpamStatusReportV2RPC", [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxInSpamIQErrorBadRequestMixin",
    "WASmaxInSpamIQErrorForbiddenMixin",
    "WASmaxInSpamIQErrorInternalServerErrorMixin",
    "WASmaxInSpamIQErrorRateOverlimitMixin",
    "WASmaxInSpamReportIdMixin",
    "WASmaxJsx",
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxMixins",
    "WASmaxOutSpamBaseIQSetRequestMixin",
    "WASmaxOutSpamBaseReportMixin",
    "WASmaxOutSpamEntitySubjectMixin",
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
            const n = d(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = c(r, n);
            if (a.success) {
                return {
                    name: "StatusReportV2ResponseSuccess",
                    value: a.value
                };
            }
            const i = u(r, n);
            if (i.success) {
                return {
                    name: "StatusReportV2ResponseError",
                    value: i.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("StatusReportV2", {
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
        const a = o("WASmaxParseReference").attrStringFromReference(t, [
            "id"
        ]);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "id", a.value);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").optional(o("WASmaxParseJid").attrDomainJid, e, "from");
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", "error");
        if (!s.success) {
            return s;
        }
        const u = m(r.value);
        if (u.success) {
            return o("WAResultOrError").makeResult({
                from: l.value,
                type: s.value,
                errorIQErrorInternalServerErrorOrBadRequestOrForbiddenOrRateOverlimitMixinGroup: u.value
            });
        }
        return u;
    }
    function c(e, t) {
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
        const i = o("WASmaxParseUtils").optional(o("WASmaxParseJid").attrDomainJid, e, "from");
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", "result");
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxInSpamReportIdMixin").parseReportIdMixin(e);
        return o("WAResultOrError").makeResult({
            from: i.value,
            type: l.value,
            reportIdMixin: s.success ? s.value : null
        });
    }
    function d(e) {
        const { entitySubjectMixinArgs, spamListJid, statusFrom, reportableNewsletterStatusMixinArgs } = e;
        const i = o("WASmaxMixins").optionalMerge(o("WASmaxOutSpamEntitySubjectMixin").mergeEntitySubjectMixin, o("WASmaxOutSpamBaseReportMixin").mergeBaseReportMixin(o("WASmaxOutSpamBaseIQSetRequestMixin").mergeBaseIQSetRequestMixin(o("WASmaxJsx").smax("iq", null, o("WASmaxJsx").smax("spam_list", {
            jid: o("WAWap").JID(spamListJid)
        }, _(o("WASmaxJsx").smax("status", {
            from: o("WASmaxAttrs").OPTIONAL(o("WAWap").USER_JID, statusFrom)
        }), reportableNewsletterStatusMixinArgs)))), e), entitySubjectMixinArgs);
        return i;
    }
    function m(e) {
        const t = o("WASmaxInSpamIQErrorInternalServerErrorMixin").parseIQErrorInternalServerErrorMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorInternalServerError",
                value: t.value
            });
        }
        const n = o("WASmaxInSpamIQErrorBadRequestMixin").parseIQErrorBadRequestMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorBadRequest",
                value: n.value
            });
        }
        const r = o("WASmaxInSpamIQErrorForbiddenMixin").parseIQErrorForbiddenMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorForbidden",
                value: r.value
            });
        }
        const a = o("WASmaxInSpamIQErrorRateOverlimitMixin").parseIQErrorRateOverlimitMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorRateOverlimit",
                value: a.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "IQErrorInternalServerError",
            "IQErrorBadRequest",
            "IQErrorForbidden",
            "IQErrorRateOverlimit"
        ], [
            t,
            n,
            r,
            a
        ]);
    }
    function p({ statusServerId, statusT, statusNewsletterTextOrMediaMixinGroupArgs }) {
        const a = f(o("WASmaxJsx").smax("status", {
            server_id: o("WAWap").INT(statusServerId),
            t: o("WAWap").INT(statusT)
        }), statusNewsletterTextOrMediaMixinGroupArgs);
        return a;
    }
    function _(e, t) {
        const n = p(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function f(e, t) {
        if (t.statusNewsletterText) {
            return C(e, t.statusNewsletterText);
        }
        if (t.statusNewsletterMedia) {
            return h(e, t.statusNewsletterMedia);
        }
        throw new (o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError;
    }
    function g({ plaintextMediatype, newsletterPlaintextPayloadMixinArgs }) {
        const r = R(o("WASmaxJsx").smax("status", null, v(o("WASmaxJsx").smax("plaintext", {
            mediatype: o("WAWap").CUSTOM_STRING(plaintextMediatype)
        }), newsletterPlaintextPayloadMixinArgs)));
        return r;
    }
    function h(e, t) {
        const n = g(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function y({ newsletterPlaintextPayloadMixinArgs }) {
        const n = E(o("WASmaxJsx").smax("status", null, v(o("WASmaxJsx").smax("plaintext", null), newsletterPlaintextPayloadMixinArgs)));
        return n;
    }
    function C(e, t) {
        const n = y(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function b({ plaintextElementValue }) {
        const n = o("WASmaxJsx").smax("plaintext", null, plaintextElementValue);
        return n;
    }
    function v(e, t) {
        const n = b(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function S() {
        const e = o("WASmaxJsx").smax("status", {
            type: "media"
        });
        return e;
    }
    function R(e) {
        const t = S();
        return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function L() {
        const e = o("WASmaxJsx").smax("status", {
            type: "text"
        });
        return e;
    }
    function E(e) {
        const t = L();
        return o("WASmaxMixins").mergeStanzas(e, t);
    }
    l.sendStatusReportV2RPC = e;
    l.parseStatusReportV2ResponseError = u;
    l.parseStatusReportV2ResponseSuccess = c;
    l.makeStatusReportV2Request = d;
    l.parseIQErrorInternalServerErrorOrBadRequestOrForbiddenOrRateOverlimitMixinGroup = m;
    l.mergeReportableNewsletterStatusMixin = _;
    l.mergeStatusNewsletterTextOrMediaMixinGroup = f;
    l.mergeStatusNewsletterMediaMixin = h;
    l.mergeStatusNewsletterTextMixin = C;
    l.mergeNewsletterPlaintextPayloadMixin = v;
    l.mergeStatusContentTypeMediaMixin = R;
    l.mergeStatusContentTypeTextMixin = E;
}, 98);