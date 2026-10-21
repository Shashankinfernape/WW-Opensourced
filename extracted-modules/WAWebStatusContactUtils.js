__d("WAWebStatusContactUtils", [
    "WALogger",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebLidAwareContactsDB",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s() {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "UserPrefsStatus: staring to getStatusContacts"
            ])));
            if (o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd) {
                const t = yield o("WAWebBackendApi").frontendSendAndReceive("getFilteredContacts", {
                    showMe: false,
                    showWithoutName: false
                });
                return t.map((e)=>e.id);
            }
            const n = yield r("WAWebLidAwareContactsDB").equalsPrimaryKeys([
                "isAddressBookContact"
            ], 1);
            return n.map((e)=>o("WAWebWidFactory").createWid(e)).filter((e)=>e.isLid());
        });
        return u.apply(this, arguments);
    }
    l.getStatusContacts = s;
}, 98);