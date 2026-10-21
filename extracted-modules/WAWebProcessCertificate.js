__d("WAWebProcessCertificate", [
    "WALogger",
    "WAVerifyChainCertificateWA6",
    "WAWebDbEncryptionKey",
    "WAWebNoiseInfoWorkerCompatible",
    "WAWebUserPrefsScreenLockWorkerCompatible",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ certificate: n, isRegistered: a, serverStatic: i }) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[socket] processCertificate start"
            ]))).tags("handshake");
            const l = o("WAVerifyChainCertificateWA6").verifyChainCertificateWA6(n, i);
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[socket] processCertificate finished with success: ",
                ""
            ])), l.success).tags("handshake");
            if (!l.success) {
                throw r("err")(`[socket] processCertificate error: ${l.error}`);
            }
            if (a && !(yield o("WAWebUserPrefsScreenLockWorkerCompatible").getScreenLockEnabled())) {
                const m = l.value;
                const { intermediate: p, leaf: _ } = m;
                if (_ && p) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[socket] persisting cert chain start"
                    ]))).tags("handshake");
                    o("WAWebDbEncryptionKey").DbEncKeyStore.waitForInit().then(()=>{
                        o("WAWebNoiseInfoWorkerCompatible").setCertificateChain({
                            intermediate: {
                                key: p.key,
                                notAfter: Number(p.notAfter),
                                notBefore: Number(p.notBefore)
                            },
                            leaf: {
                                key: _.key,
                                notAfter: Number(_.notAfter),
                                notBefore: Number(_.notBefore)
                            }
                        }).then(()=>{
                            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                "[socket] persisting cert chain finished"
                            ]))).tags("handshake");
                        }).catch((e)=>{
                            o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                "[socket] processCertificate: failed to set cert chain: ",
                                ""
                            ])), e).sendLogs("handhshake-set-cert-chain", {
                                sampling: 0.01
                            });
                        });
                    });
                }
            }
        });
        return p.apply(this, arguments);
    }
    l.verifyAndProcessCertificate = m;
}, 98);