__d("WAWebFetchOwnUsernameOnPairing", [
    "WALogger",
    "WAWebBackendEventBus",
    "WAWebGetUsernameQueryJob",
    "WAWebUsernameWorkerCompatibleGatingUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u = false;
    let c = false;
    function d() {
        if (!u) {
            u = true;
            o("WAWebBackendEventBus").BackendEventBus.onPrimaryFeaturesSynced(function(e) {
                if (e.has("username_supported")) {
                    m();
                }
            });
        }
        m();
    }
    function m() {
        if (!(c || !o("WAWebUsernameWorkerCompatibleGatingUtils").usernameCreationOrReservationEnabled())) {
            c = true;
            p().catch((t)=>{
                c = false;
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[username] failed to fetch own username after pairing"
                ]))).catching(r("getErrorSafe")(t)).sendLogs("fetch-own-username-on-pairing-failed");
            });
        }
    }
    function p() {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebGetUsernameQueryJob").getUsernameJob();
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[username] own username updated after pairing, present=",
                ""
            ])), String(e != null));
        });
        return _.apply(this, arguments);
    }
    l.initOwnUsernameFetchOnPairing = d;
}, 98);