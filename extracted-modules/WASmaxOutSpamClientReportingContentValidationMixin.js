__d("WASmaxOutSpamClientReportingContentValidationMixin", [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ reportingContentArgs, contentValidationArgs, reportingAdditionalInfoArgs, reportingTagId, reportingTagTsS, reportingTagParticipant, reportingTagElementValue }) {
        const m = o("WASmaxJsx").smax("reporting_validation", null, o("WASmaxJsx").smax("reporting_tag", {
            id: o("WAWap").STANZA_ID(reportingTagId),
            ts_s: o("WAWap").INT(reportingTagTsS),
            participant: o("WASmaxAttrs").OPTIONAL(o("WAWap").USER_JID, reportingTagParticipant)
        }, reportingTagElementValue), o("WASmaxChildren").OPTIONAL_CHILD(s, reportingContentArgs), o("WASmaxChildren").OPTIONAL_CHILD(u, contentValidationArgs), o("WASmaxChildren").OPTIONAL_CHILD(c, reportingAdditionalInfoArgs));
        return m;
    }
    function s({ reportingContentElementValue }) {
        const n = o("WASmaxJsx").smax("reporting_content", null, reportingContentElementValue);
        return n;
    }
    function u({ contentValidationType, reportingTokenV, reportingTokenElementValue, reportingTokenKeyElementValue }) {
        const i = o("WASmaxJsx").smax("content_validation", {
            type: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, contentValidationType)
        }, o("WASmaxJsx").smax("reporting_token", {
            v: o("WAWap").INT(reportingTokenV)
        }, reportingTokenElementValue), o("WASmaxJsx").smax("reporting_token_key", null, reportingTokenKeyElementValue));
        return i;
    }
    function c({ reportingAdditionalInfoText }) {
        const n = o("WASmaxJsx").smax("reporting_additional_info", {
            text: o("WAWap").CUSTOM_STRING(reportingAdditionalInfoText)
        });
        return n;
    }
    function d({ reportingValidationArgs }) {
        const r = o("WASmaxJsx").smax("smax$any", null, o("WASmaxJsx").smax("reporting", null, o("WASmaxChildren").REPEATED_CHILD(e, reportingValidationArgs, 0, 1000)));
        return r;
    }
    function m(e, t) {
        const n = d(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    l.makeClientReportingContentValidationReportingReportingValidation = e;
    l.makeClientReportingContentValidationReportingReportingValidationReportingContent = s;
    l.makeClientReportingContentValidationReportingReportingValidationContentValidation = u;
    l.makeClientReportingContentValidationReportingReportingValidationReportingAdditionalInfo = c;
    l.mergeClientReportingContentValidationMixin = m;
}, 98);