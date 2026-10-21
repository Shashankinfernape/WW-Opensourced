__d("WASmaxOutSpamMessageMixin", [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutSpamAdminRevokeMixin",
    "WASmaxOutSpamAutomatedMixin",
    "WASmaxOutSpamExtensionScreenDataMixin",
    "WASmaxOutSpamIABReportLinkMixin",
    "WASmaxOutSpamMessageEditMixin",
    "WASmaxOutSpamMessageFrankingMixin",
    "WASmaxOutSpamMessageParticipantMixin",
    "WASmaxOutSpamMessagePayloadTypes",
    "WASmaxOutSpamMessagePlaceholderMixin",
    "WASmaxOutSpamMessageWithHsmTemplateMixin",
    "WASmaxOutSpamMessageWithNewsletterQuestionResponseMixin",
    "WASmaxOutSpamMulticastMixin",
    "WASmaxOutSpamPreFilledNumberMixin",
    "WASmaxOutSpamPreFilledTextMixin",
    "WASmaxOutSpamRawMixins",
    "WASmaxOutSpamReportedPushNameMixin",
    "WASmaxOutSpamRevokeMixin",
    "WASmaxOutSpamSMBBroadcastSourceMixin",
    "WASmaxOutSpamWaMessageReportingMixin",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ rawMediatype, rawLocalMessageType, rawElementValue, rawMixinsArgs }) {
        const i = o("WASmaxOutSpamRawMixins").mergeRawMixins(o("WASmaxJsx").smax("raw", {
            mediatype: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, rawMediatype),
            local_message_type: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, rawLocalMessageType)
        }, rawElementValue), rawMixinsArgs);
        return i;
    }
    function s() {
        const e = o("WASmaxJsx").smax("enc", null);
        return e;
    }
    function u({ rawArgs, messageT, messageId, messageSelected, messageUnsent, messageDeletedReason, hasRevoke, hasAdminRevoke, hasMessageEdit, hasMulticast, hasPreFilledNumber, hasPreFilledText, hasAutomated, messageWithHsmTemplateMixinArgs, extensionScreenDataMixinArgs, messageParticipantMixinArgs, messageFrankingMixinArgs, waMessageReportingMixinArgs, sMBBroadcastSourceMixinArgs, iABReportLinkMixinArgs, messageWithNewsletterQuestionResponseMixinArgs, hasMessagePlaceholder, reportedPushNameMixinArgs, messagePayloadTypesArgs }) {
        let n;
        let r;
        const D = o("WASmaxOutSpamMessagePayloadTypes").mergeMessagePayloadTypes((n = o("WASmaxMixins")).optionalMerge(o("WASmaxOutSpamReportedPushNameMixin").mergeReportedPushNameMixin, n.optionalMerge(o("WASmaxOutSpamMessagePlaceholderMixin").mergeMessagePlaceholderMixin, n.optionalMerge(o("WASmaxOutSpamMessageWithNewsletterQuestionResponseMixin").mergeMessageWithNewsletterQuestionResponseMixin, n.optionalMerge(o("WASmaxOutSpamIABReportLinkMixin").mergeIABReportLinkMixin, n.optionalMerge(o("WASmaxOutSpamSMBBroadcastSourceMixin").mergeSMBBroadcastSourceMixin, n.optionalMerge(o("WASmaxOutSpamWaMessageReportingMixin").mergeWaMessageReportingMixin, n.optionalMerge(o("WASmaxOutSpamMessageFrankingMixin").mergeMessageFrankingMixin, n.optionalMerge(o("WASmaxOutSpamMessageParticipantMixin").mergeMessageParticipantMixin, n.optionalMerge(o("WASmaxOutSpamExtensionScreenDataMixin").mergeExtensionScreenDataMixin, n.optionalMerge(o("WASmaxOutSpamMessageWithHsmTemplateMixin").mergeMessageWithHsmTemplateMixin, n.optionalMerge(o("WASmaxOutSpamAutomatedMixin").mergeAutomatedMixin, n.optionalMerge(o("WASmaxOutSpamPreFilledTextMixin").mergePreFilledTextMixin, n.optionalMerge(o("WASmaxOutSpamPreFilledNumberMixin").mergePreFilledNumberMixin, n.optionalMerge(o("WASmaxOutSpamMulticastMixin").mergeMulticastMixin, n.optionalMerge(o("WASmaxOutSpamMessageEditMixin").mergeMessageEditMixin, n.optionalMerge(o("WASmaxOutSpamAdminRevokeMixin").mergeAdminRevokeMixin, n.optionalMerge(o("WASmaxOutSpamRevokeMixin").mergeRevokeMixin, o("WASmaxJsx").smax("message", {
            t: (r = o("WAWap")).INT(messageT),
            id: r.STANZA_ID(messageId),
            selected: o("WASmaxAttrs").OPTIONAL(r.CUSTOM_STRING, messageSelected),
            unsent: o("WASmaxAttrs").OPTIONAL(r.CUSTOM_STRING, messageUnsent),
            deleted_reason: o("WASmaxAttrs").OPTIONAL(r.CUSTOM_STRING, messageDeletedReason)
        }, o("WASmaxChildren").OPTIONAL_CHILD(e, rawArgs)), hasRevoke), hasAdminRevoke), hasMessageEdit), hasMulticast), hasPreFilledNumber), hasPreFilledText), hasAutomated), messageWithHsmTemplateMixinArgs), extensionScreenDataMixinArgs), messageParticipantMixinArgs), messageFrankingMixinArgs), waMessageReportingMixinArgs), sMBBroadcastSourceMixinArgs), iABReportLinkMixinArgs), messageWithNewsletterQuestionResponseMixinArgs), hasMessagePlaceholder), reportedPushNameMixinArgs), messagePayloadTypesArgs);
        return D;
    }
    function c(e, t) {
        const n = u(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    l.makeMessageRaw = e;
    l.makeMessageEnc = s;
    l.mergeMessageMixin = c;
}, 98);