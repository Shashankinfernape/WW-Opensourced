__d("WAWebVerifyPostcodeJob", [
    "WAWebDefinePersistedJob",
    "WAWebGraphQLVerifyPostcodeJob",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebDefinePersistedJob").defineWebPersistedJob().finalStep("sendStanza", (()=>{
        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ businessJid: t, directConnectionEncryptedInfo: n }) {
            const r = o("WAWebWidFactory").createWid(t);
            return o("WAWebGraphQLVerifyPostcodeJob").verifyPostcode(r, n);
        });
        return function(t) {
            return e.apply(this, arguments);
        };
    })()).end();
    l.VerifyPostcode = e;
}, 98);