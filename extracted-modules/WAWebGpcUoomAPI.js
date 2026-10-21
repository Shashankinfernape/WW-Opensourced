__d("WAWebGpcUoomAPI", [
    "WALogger",
    "WAWebAccountLinkingDBOperationsAPI",
    "WAWebAccountLinkingUtils",
    "WAWebGraphQLServerError",
    "WAWebRelayClient",
    "WAWebUserPrefsGeneral",
    "WAWebWaffleFXWAMOUpdateUOOMMutation",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps("gpc_uoom");
    function d() {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (!o("WAWebUserPrefsGeneral").getGPCCompleted() && o("WAWebAccountLinkingUtils").checkGPCSetting()) {
                yield p();
            }
        });
        return m.apply(this, arguments);
    }
    function p() {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            let t;
            try {
                t = yield c.getAccountLinkingData();
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] updateUOOMData db read failed: ",
                    ""
                ])), t).tags("waffle", "account-linking").sendLogs("waffle-update-uoom-db-read-failed", {
                    sampling: 0.01
                });
                return;
            }
            if (t != null) {
                const n = t;
                const a = n.accesstoken;
                let i;
                try {
                    i = yield o("WAWebRelayClient").commitMutation(r("WAWebWaffleFXWAMOUpdateUOOMMutation"), {}, {
                        accessToken: a
                    });
                } catch (e) {
                    const l = e instanceof o("WAWebGraphQLServerError").GraphQLServerError ? o("WAWebGraphQLServerError").formatGraphQLServerError(e) : e;
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] updateUOOMData mutation failed: ",
                        ""
                    ])), l).tags("waffle", "account-linking").sendLogs("waffle-update-uoom-mutation-failed", {
                        sampling: 0.01
                    });
                    return;
                }
                if (i == null) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] updateUOOMData returned null result"
                    ]))).tags("waffle", "account-linking").sendLogs("waffle-update-uoom-null-result", {
                        sampling: 0.01
                    });
                    return;
                }
                if (i.xfb_waffle_fx_wamo_update_uoom === true) {
                    o("WAWebUserPrefsGeneral").setGPCcompleted(true);
                }
            }
        });
        return _.apply(this, arguments);
    }
    l.checkAndTriggerUOOMMutation = d;
    l.updateUOOMData = p;
}, 98);