__d("WASmaxMdSetEncryptedPairingRequestRPC", [
    "WAComms",
    "WASmaxInMdSetEncryptedPairingRequestResponseSuccess",
    "WASmaxOutMdSetEncryptedPairingRequestRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WASmaxOutMdSetEncryptedPairingRequestRequest").makeSetEncryptedPairingRequestRequest(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = o("WASmaxInMdSetEncryptedPairingRequestResponseSuccess").parseSetEncryptedPairingRequestResponseSuccess(r, n);
            if (a.success) {
                return {
                    name: "SetEncryptedPairingRequestResponseSuccess",
                    value: a.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("SetEncryptedPairingRequest", {
                Success: a
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendSetEncryptedPairingRequestRPC = e;
}, 98);