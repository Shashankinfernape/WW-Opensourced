__d("WAWebCoexStateSyncStartup", [
    "WALogger",
    "WAWebAECompanionGating",
    "WAWebApiDeviceList",
    "WAWebBackendApi",
    "WAWebProtobufsAdv.pb",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    function s() {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (o("WAWebAECompanionGating").isCoexStateSyncEnabled()) {
                let t = false;
                try {
                    if (yield o("WAWebUserPrefsMultiDevice").getIsHostedMeAccount()) {
                        t = true;
                    } else {
                        const n = yield o("WAWebApiDeviceList").getMaybeMyDeviceList();
                        t = n?.advAccountType === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED || (n == null ? void 0 : n.devices.some((e)=>e.isHosted === true)) === true;
                    }
                } catch (t) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "startCoexStateSyncIfHosted: hosted check failed"
                    ]))).catching(r("getErrorSafe")(t));
                    return;
                }
                if (t) {
                    o("WAWebBackendApi").frontendFireAndForget("coexStateSyncStartup", {});
                }
            }
        });
        return u.apply(this, arguments);
    }
    l.startCoexStateSyncIfHosted = s;
}, 98);