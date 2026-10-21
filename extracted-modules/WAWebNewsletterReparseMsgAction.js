__d("WAWebNewsletterReparseMsgAction", [
    "WAWebBackendApi",
    "WAWebHandleMsgTypes.flow",
    "WAWebNewsletterFutureProofUtils",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const { futureproofBuffer, futureproofSubtype, futureproofType } = e;
            if (futureproofBuffer != null || futureproofType == null) {
                return e;
            }
            const a = o("WAWebNewsletterFutureProofUtils").isMsgSupported(e);
            const a_supported = a.supported;
            if (!a_supported) {
                return e;
            }
            const l = babelHelpers.extends({}, e, {
                type: futureproofType,
                kind: futureproofType,
                subtype: futureproofSubtype,
                futureproofType: undefined,
                futureproofSubtype: undefined
            });
            yield o("WAWebNewsletterUpdateMsgsRecordsJob").addNewsletterMsgsRecords([
                l
            ]);
            yield o("WAWebBackendApi").frontendSendAndReceive("updateMessageUI", {
                msg: l,
                chatId: e.id.remote,
                messageOverwriteOption: o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.RETRY
            });
            return l;
        });
        return s.apply(this, arguments);
    }
    l.reparseNewsletterMsg = e;
}, 98);