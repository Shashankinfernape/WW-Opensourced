__d("WAWebIntegrityPasskeyCheckpointUtils", [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebIntegrityChallengeUtils",
    "WAWebLazyLoadedRetriable",
    "WAWebModalManager",
    "WAWebSocketModel",
    "WAWebUserPrefsIndexedDBStorage",
    "asyncToGeneratorRuntime",
    "err",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    const _ = p || (p = o("react"));
    const f = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebPasskeyCheckpoint.react").__setRef("WAWebIntegrityPasskeyCheckpointUtils").load();
        return e;
    }), "WAWebPasskeyCheckpoint");
    const g = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebMexIntegrityChallengeResponse").__setRef("WAWebIntegrityPasskeyCheckpointUtils").load();
        return e.mexSubmitPasskeyChallengeResponse;
    }), "WAWebMexIntegrityChallengeResponse");
    function onPasskeyComplete(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[integrity-challenge] passkey assertion completed"
            ])));
            const t = yield g();
            const n = yield t(e);
            if (n.success) {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[integrity-challenge] challenge response accepted by server"
                ])));
                o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(o("WAWebIntegrityChallengeUtils").INTEGRITY_CHALLENGE_IDB_KEY);
                o("WAWebModalManager").ModalManager.close();
            } else {
                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[integrity-challenge] server rejected challenge response"
                ]))).sendLogs("integrity-challenge-response-rejected");
                throw r("err")("Server rejected challenge response");
            }
        });
        return y.apply(this, arguments);
    }
    function onPasskeyError(t) {
        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[integrity-challenge] passkey assertion failed: ",
            ""
        ])), t).sendLogs("integrity-challenge-passkey-error");
    }
    function onLogout() {
        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "[integrity-challenge] user initiated logout from checkpoint"
        ])));
        o("WAWebModalManager").ModalManager.close();
        o("WAWebSocketModel").Socket.logout();
    }
    function v(passkeyChallenge) {
        f().then((T)=>{
            o("WAWebModalManager").ModalManager.open(<T onLogout={onLogout} onPasskeyComplete={onPasskeyComplete} onPasskeyError={onPasskeyError} passkeyChallenge={passkeyChallenge}/>, {
                blockClose: true
            });
        }).catch((e)=>{
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[integrity-challenge] failed to load checkpoint modal"
            ]))).sendLogs("integrity-challenge-modal-load-failed");
        });
    }
    l.openPasskeyCheckpoint = v;
}, 98);