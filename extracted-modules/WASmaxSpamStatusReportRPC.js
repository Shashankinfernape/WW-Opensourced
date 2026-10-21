__d("WASmaxSpamStatusReportRPC", [
    "WAComms",
    "WAResultOrError",
    "WASmaxChildren",
    "WASmaxInSpamEnums",
    "WASmaxInSpamReportIdMixin",
    "WASmaxInSpamSpamIqErrors",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutSpamBaseIQSetRequestMixin",
    "WASmaxOutSpamBaseReportMixin",
    "WASmaxOutSpamBizOptOutMixin",
    "WASmaxOutSpamBizReportMixin",
    "WASmaxOutSpamFRXMixin",
    "WASmaxOutSpamIsKnownChatMixin",
    "WASmaxOutSpamMessageMixin",
    "WASmaxOutSpamMessageRecipientMixin",
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
            const a = c(r, n);
            if (a.success) {
                return {
                    name: "StatusReportResponseSuccess",
                    value: a.value
                };
            }
            const i = u(r, n);
            if (i.success) {
                return {
                    name: "StatusReportResponseError",
                    value: i.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("StatusReport", {
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
        const l = o("WASmaxParseUtils").optional(o("WASmaxParseJid").attrJidEnum, e, "from", o("WASmaxInSpamEnums").DOMAINJID_USERJID);
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", "error");
        if (!s.success) {
            return s;
        }
        const u = o("WASmaxInSpamSpamIqErrors").parseSpamIqErrors(r.value);
        if (u.success) {
            return o("WAResultOrError").makeResult({
                from: l.value,
                type: s.value,
                errorSpamIqErrors: u.value
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
        const i = o("WASmaxParseUtils").optional(o("WASmaxParseJid").attrJidEnum, e, "from", o("WASmaxInSpamEnums").DOMAINJID_USERJID);
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
        const { messageFrom, messageRecipientMixinArgs } = e;
        const r = o("WASmaxMixins").optionalMerge(o("WASmaxOutSpamMessageRecipientMixin").mergeMessageRecipientMixin, o("WASmaxOutSpamMessageMixin").mergeMessageMixin(o("WASmaxJsx").smax("message", {
            from: o("WAWap").JID(messageFrom)
        }), e), messageRecipientMixinArgs);
        return r;
    }
    function m(e) {
        let t;
        const { messageArgs, fRXMixinArgs, isKnownChatMixinArgs, spamListJid, bizOptOutMixinArgs, bizReportMixinArgs } = e;
        const u = (t = o("WASmaxMixins")).optionalMerge(o("WASmaxOutSpamIsKnownChatMixin").mergeIsKnownChatMixin, t.optionalMerge(o("WASmaxOutSpamFRXMixin").mergeFRXMixin, o("WASmaxOutSpamBaseReportMixin").mergeBaseReportMixin(o("WASmaxOutSpamBaseIQSetRequestMixin").mergeBaseIQSetRequestMixin(o("WASmaxJsx").smax("iq", null, t.optionalMerge(o("WASmaxOutSpamBizReportMixin").mergeBizReportMixin, t.optionalMerge(o("WASmaxOutSpamBizOptOutMixin").mergeBizOptOutMixin, o("WASmaxJsx").smax("spam_list", {
            jid: o("WAWap").JID(spamListJid)
        }, o("WASmaxChildren").REPEATED_CHILD(d, messageArgs, 1, 2)), bizOptOutMixinArgs), bizReportMixinArgs))), e), fRXMixinArgs), isKnownChatMixinArgs);
        return u;
    }
    l.sendStatusReportRPC = e;
    l.parseStatusReportResponseError = u;
    l.parseStatusReportResponseSuccess = c;
    l.makeStatusReportRequestSpamListMessage = d;
    l.makeStatusReportRequest = m;
}, 98);