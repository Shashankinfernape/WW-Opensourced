__d("WAWebSmb1pdConversionSignalAction", [
    "WAWebCTWAGatingUtils",
    "WAWebCommonCTWADataSharing",
    "WAWebCtwa1pdConversionWamEvent",
    "WAWebMobilePlatforms",
    "WAWebWamEnumCtwa1pdConversionType",
    "WAWebWamEnumCtwaDirectionFrom"
], function(t, n, r, o, a, i, l) {
    const ctwa1pdConversionSchemaVersion = 1;
    const s = "none";
    function u(e) {
        m(e, o("WAWebWamEnumCtwa1pdConversionType").CTWA_1PD_CONVERSION_TYPE.USER_BLOCK);
    }
    function c(e) {
        m(e, o("WAWebWamEnumCtwa1pdConversionType").CTWA_1PD_CONVERSION_TYPE.USER_REPORT);
    }
    function d(e) {
        m(e, o("WAWebWamEnumCtwa1pdConversionType").CTWA_1PD_CONVERSION_TYPE.USER_BLOCK_AND_REPORT);
    }
    function m(t, ctwa1pdConversionType) {
        if (o("WAWebMobilePlatforms").isSMB()) {
            const ctwaTrackingPayload = p(t);
            if (ctwaTrackingPayload != null && o("WAWebCTWAGatingUtils").isCtwa1pdWebNbfSignalsEnabled()) {
                const a = o("WAWebCommonCTWADataSharing").getCTWASignalsValueFromChat(t);
                new (o("WAWebCtwa1pdConversionWamEvent")).Ctwa1pdConversionWamEvent({
                    ctwa1pdConversionType,
                    ctwa1pdConversionSchemaVersion,
                    ctwaTrackingPayload,
                    ctwaConversationDepth: 0,
                    ctwaConversationRepeat: 0,
                    ctwaDirectionFrom: o("WAWebWamEnumCtwaDirectionFrom").CTWA_DIRECTION_FROM.BUSINESS,
                    ctwaSignals: a ?? undefined
                }).commit();
            }
        }
    }
    function p(e) {
        const t = o("WAWebCommonCTWADataSharing").getReceivedCTWAEligibilityFromChat(e);
        if (t == null || t.is3pdag || t.data == null) {
            return null;
        }
        const n = o("WAWebCommonCTWADataSharing").getCTWASignalsValueFromChat(e);
        if (_(n)) {
            return null;
        }
        return t.data;
    }
    function _(e) {
        if (e == null) {
            return false;
        }
        return e.split(",").map((e)=>e.trim().toLowerCase()).includes(s);
    }
    l.log1pdBlockConversionSignal = u;
    l.log1pdReportConversionSignal = c;
    l.log1pdBlockAndReportConversionSignal = d;
}, 98);