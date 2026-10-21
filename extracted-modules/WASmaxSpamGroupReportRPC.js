__d("WASmaxSpamGroupReportRPC", [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxInSpamEnums",
    "WASmaxInSpamReportIdMixin",
    "WASmaxInSpamSpamIqErrors",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutSpamBaseIQSetRequestMixin",
    "WASmaxOutSpamBaseReportMixin",
    "WASmaxOutSpamCallReportMixin",
    "WASmaxOutSpamEntitySubjectMixin",
    "WASmaxOutSpamFRXMixin",
    "WASmaxOutSpamIsKnownChatMixin",
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
            const n = p(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = c(r, n);
            if (a.success) {
                return {
                    name: "GroupReportResponseSuccess",
                    value: a.value
                };
            }
            const i = u(r, n);
            if (i.success) {
                return {
                    name: "GroupReportResponseError",
                    value: i.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("GroupReport", {
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
        const { messageFrom, messagePhash } = e;
        const r = o("WASmaxOutSpamMessageMixin").mergeMessageMixin(o("WASmaxJsx").smax("message", {
            from: o("WAWap").GROUP_JID(messageFrom),
            phash: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, messagePhash)
        }), e);
        return r;
    }
    function m(e) {
        const t = o("WASmaxOutSpamCallReportMixin").mergeCallReportMixin(o("WASmaxJsx").smax("call", null), e);
        return t;
    }
    function p(e) {
        const { messageArgs, callArgs, fRXMixinArgs, isKnownChatMixinArgs, spamListJid, spamListSource } = e;
        const s = o("WASmaxMixins").optionalMerge(o("WASmaxOutSpamIsKnownChatMixin").mergeIsKnownChatMixin, o("WASmaxOutSpamEntitySubjectMixin").mergeEntitySubjectMixin(o("WASmaxMixins").optionalMerge(o("WASmaxOutSpamFRXMixin").mergeFRXMixin, o("WASmaxOutSpamBaseReportMixin").mergeBaseReportMixin(o("WASmaxOutSpamBaseIQSetRequestMixin").mergeBaseIQSetRequestMixin(o("WASmaxJsx").smax("iq", null, o("WASmaxJsx").smax("spam_list", {
            jid: o("WAWap").GROUP_JID(spamListJid),
            source: o("WASmaxAttrs").OPTIONAL(o("WAWap").USER_JID, spamListSource)
        }, [].concat(o("WASmaxChildren").REPEATED_CHILD(d, messageArgs, 0, 210), o("WASmaxChildren").REPEATED_CHILD(m, callArgs, 0, 5))))), e), fRXMixinArgs), e), isKnownChatMixinArgs);
        return s;
    }
    l.sendGroupReportRPC = e;
    l.parseGroupReportResponseError = u;
    l.parseGroupReportResponseSuccess = c;
    l.makeGroupReportRequestSpamListMessage = d;
    l.makeGroupReportRequestSpamListCall = m;
    l.makeGroupReportRequest = p;
}, 98);