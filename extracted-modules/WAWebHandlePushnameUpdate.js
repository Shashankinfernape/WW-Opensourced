__d("WAWebHandlePushnameUpdate", [
    "WALogger",
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebDBBulkPersistContact",
    "WAWebEnvironment",
    "WAWebPromiseQueue",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = new (o("WAWebPromiseQueue")).PromiseQueue;
    function u(e, t) {
        return o("WAWebBackendApi").frontendSendAndReceive("updatePushname", {
            contactId: e,
            pushname: t
        });
    }
    function c(t, a, i = false) {
        const l = o("WAWebWidFactory").asUserWidOrThrow(t);
        return s.enqueue(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            let t = void 0;
            if (!i || r("WAWebEnvironment").isGuest) {
                t = yield u(l, a);
            } else if (o("WAWebABProps").getABPropConfigValue("wa_web_anr_pushname_check_enabled")) {
                const n = yield o("WAWebApiContact").getContactRecord(l);
                t = n?.pushname !== a;
            }
            if (t === true || t === void 0) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "updatePushName: set pushname for ",
                    ""
                ])), l.toLogString());
                o("WAWebDBBulkPersistContact").persistContactUpdateBatched(l, {
                    pushname: a
                });
            }
        }));
    }
    l.updatePushname = c;
}, 98);