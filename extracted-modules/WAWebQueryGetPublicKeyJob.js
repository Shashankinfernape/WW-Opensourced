__d("WAWebQueryGetPublicKeyJob", [
    "WAWebDefinePersistedJob",
    "WAWebGraphQLProductCatalogGetPublicKeyJob",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebDefinePersistedJob").defineWebPersistedJob().finalStep("sendStanza", (()=>{
        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ businessJid: t }) {
            const n = o("WAWebWidFactory").createWid(t);
            return o("WAWebGraphQLProductCatalogGetPublicKeyJob").getPublicKey(n);
        });
        return function(t) {
            return e.apply(this, arguments);
        };
    })()).end();
    l.QueryGetPublicKey = e;
}, 98);