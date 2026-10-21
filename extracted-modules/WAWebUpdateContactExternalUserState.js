__d("WAWebUpdateContactExternalUserState", [
    "WALogger",
    "WAWebBackendApi",
    "WAWebDBBulkPersistContact",
    "WAWebPromiseQueue",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = new (o("WAWebPromiseQueue")).PromiseQueue;
    function c(t, externalUserState) {
        const i = o("WAWebWidFactory").asUserWidOrThrow(t);
        return u.enqueue(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = yield d(i, externalUserState);
            if (t === true) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "updateContactExternalUserState: set externalUserState for ",
                    ""
                ])), i.toLogString());
                o("WAWebDBBulkPersistContact").persistContactUpdateBatched(i, {
                    externalUserState
                }).catch((e)=>{
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "updateContactExternalUserState: persist failed"
                    ]))).catching(r("getErrorSafe")(e)).sendLogs("updateContactExternalUserState");
                });
            }
        }));
    }
    function d(e, externalUserState) {
        return o("WAWebBackendApi").frontendSendAndReceive("updateContactExternalUserState", {
            contactId: e,
            externalUserState
        });
    }
    l.updateContactExternalUserState = c;
}, 98);