__d("WASmaxSpamIndividualReportRPC", [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxInSpamEnums",
    "WASmaxInSpamReportIdMixin",
    "WASmaxInSpamSpamIqErrors",
    "WASmaxJsx",
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxMixins",
    "WASmaxOutSpamBaseIQSetRequestMixin",
    "WASmaxOutSpamBaseReportMixin",
    "WASmaxOutSpamBizOptOutMixin",
    "WASmaxOutSpamBizReportMixin",
    "WASmaxOutSpamCallReportMixin",
    "WASmaxOutSpamExtensionScreenMixin",
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
            const n = _(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = c(r, n);
            if (a.success) {
                return {
                    name: "IndividualReportResponseSuccess",
                    value: a.value
                };
            }
            const i = u(r, n);
            if (i.success) {
                return {
                    name: "IndividualReportResponseError",
                    value: i.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("IndividualReport", {
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
        const e_messageSenderOrRecipientMixinGroupArgs = e.messageSenderOrRecipientMixinGroupArgs;
        const n = f(o("WASmaxOutSpamMessageMixin").mergeMessageMixin(o("WASmaxJsx").smax("message", null), e), e_messageSenderOrRecipientMixinGroupArgs);
        return n;
    }
    function m(e) {
        const t = o("WASmaxOutSpamCallReportMixin").mergeCallReportMixin(o("WASmaxJsx").smax("call", null), e);
        return t;
    }
    function p(e) {
        const t = R(o("WASmaxJsx").smax("user_initiated_extension", null), e);
        return t;
    }
    function _(e) {
        let t;
        const { messageArgs, callArgs, userInitiatedExtensionArgs, fRXMixinArgs, isKnownChatMixinArgs, spamListJid, bizOptOutMixinArgs, uIStateSetMixinArgs, bizReportMixinArgs, tCTokenMixinArgs } = e;
        const g = (t = o("WASmaxMixins")).optionalMerge(o("WASmaxOutSpamIsKnownChatMixin").mergeIsKnownChatMixin, t.optionalMerge(o("WASmaxOutSpamFRXMixin").mergeFRXMixin, o("WASmaxOutSpamBaseReportMixin").mergeBaseReportMixin(o("WASmaxOutSpamBaseIQSetRequestMixin").mergeBaseIQSetRequestMixin(o("WASmaxJsx").smax("iq", null, t.optionalMerge(h, t.optionalMerge(o("WASmaxOutSpamBizReportMixin").mergeBizReportMixin, t.optionalMerge(b, t.optionalMerge(o("WASmaxOutSpamBizOptOutMixin").mergeBizOptOutMixin, o("WASmaxJsx").smax("spam_list", {
            jid: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, spamListJid)
        }, [].concat(o("WASmaxChildren").REPEATED_CHILD(d, messageArgs, 0, 210), o("WASmaxChildren").REPEATED_CHILD(m, callArgs, 0, 5), o("WASmaxChildren").REPEATED_CHILD(p, userInitiatedExtensionArgs, 0, 5))), bizOptOutMixinArgs), uIStateSetMixinArgs), bizReportMixinArgs), tCTokenMixinArgs))), e), fRXMixinArgs), isKnownChatMixinArgs);
        return g;
    }
    function f(e, t) {
        if (t.messageSender) {
            return E(e, t.messageSender);
        }
        if (t.messageRecipient) {
            return o("WASmaxOutSpamMessageRecipientMixin").mergeMessageRecipientMixin(e, t.messageRecipient);
        }
        throw new (o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError;
    }
    function g({ tctokenT, privacyTokenContentsMixinArgs }) {
        const r = o("WASmaxJsx").smax("smax$any", null, I(o("WASmaxJsx").smax("tctoken", {
            t: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, tctokenT)
        }), privacyTokenContentsMixinArgs));
        return r;
    }
    function h(e, t) {
        const n = g(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function y() {
        const e = o("WASmaxJsx").smax("uistate", {
            value: "spam_banner"
        });
        return e;
    }
    function C({ hasUistate }) {
        const n = o("WASmaxJsx").smax("spam_list", null, o("WASmaxJsx").smax("uistateset", null, o("WASmaxChildren").HAS_OPTIONAL_CHILD(y, hasUistate)));
        return n;
    }
    function b(e, t) {
        const n = C(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function v(e) {
        const t = o("WASmaxOutSpamExtensionScreenMixin").mergeExtensionScreenMixin(o("WASmaxJsx").smax("extension_screen", null), e);
        return t;
    }
    function S({ extensionScreenArgs }) {
        const n = o("WASmaxJsx").smax("user_initiated_extension", null, o("WASmaxChildren").REPEATED_CHILD(v, extensionScreenArgs, 1, 100));
        return n;
    }
    function R(e, t) {
        const n = S(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function L({ messageFrom }) {
        const n = o("WASmaxJsx").smax("message", {
            from: o("WAWap").JID(messageFrom)
        });
        return n;
    }
    function E(e, t) {
        const n = L(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function k({ anyElementValue }) {
        const n = o("WASmaxJsx").smax("smax$any", null, anyElementValue);
        return n;
    }
    function I(e, t) {
        const n = k(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    l.sendIndividualReportRPC = e;
    l.parseIndividualReportResponseError = u;
    l.parseIndividualReportResponseSuccess = c;
    l.makeIndividualReportRequestSpamListMessage = d;
    l.makeIndividualReportRequestSpamListCall = m;
    l.makeIndividualReportRequestSpamListUserInitiatedExtension = p;
    l.makeIndividualReportRequest = _;
    l.mergeMessageSenderOrRecipientMixinGroup = f;
    l.mergeTCTokenMixin = h;
    l.makeUIStateSetUistatesetUistate = y;
    l.mergeUIStateSetMixin = b;
    l.makeUserInitiatedExtensionExtensionScreen = v;
    l.mergeUserInitiatedExtensionMixin = R;
    l.mergeMessageSenderMixin = E;
    l.mergePrivacyTokenContentsMixin = I;
}, 98);