__d("WASmaxSpamNewsletterReportRPC", [
    "WAComms",
    "WAResultOrError",
    "WASmaxChildren",
    "WASmaxInSpamEnums",
    "WASmaxInSpamReportIdMixin",
    "WASmaxInSpamSpamIqErrors",
    "WASmaxJsx",
    "WASmaxOutSpamBaseIQSetRequestMixin",
    "WASmaxOutSpamBaseReportMixin",
    "WASmaxOutSpamEntitySubjectMixin",
    "WASmaxOutSpamMessageMixin",
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
                    name: "NewsletterReportResponseSuccess",
                    value: a.value
                };
            }
            const i = u(r, n);
            if (i.success) {
                return {
                    name: "NewsletterReportResponseError",
                    value: i.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("NewsletterReport", {
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
        const e_messageFrom = e.messageFrom;
        const n = o("WASmaxOutSpamMessageMixin").mergeMessageMixin(o("WASmaxJsx").smax("message", {
            from: o("WAWap").JID(e_messageFrom)
        }), e);
        return n;
    }
    function m(e) {
        const { messageArgs, spamListJid } = e;
        const r = o("WASmaxOutSpamEntitySubjectMixin").mergeEntitySubjectMixin(o("WASmaxOutSpamBaseReportMixin").mergeBaseReportMixin(o("WASmaxOutSpamBaseIQSetRequestMixin").mergeBaseIQSetRequestMixin(o("WASmaxJsx").smax("iq", null, o("WASmaxJsx").smax("spam_list", {
            jid: o("WAWap").JID(spamListJid)
        }, o("WASmaxChildren").REPEATED_CHILD(d, messageArgs, 0, 65)))), e), e);
        return r;
    }
    l.sendNewsletterReportRPC = e;
    l.parseNewsletterReportResponseError = u;
    l.parseNewsletterReportResponseSuccess = c;
    l.makeNewsletterReportRequestSpamListMessage = d;
    l.makeNewsletterReportRequest = m;
}, 98);