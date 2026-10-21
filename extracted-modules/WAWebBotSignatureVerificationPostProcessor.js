__d("WAWebBotSignatureVerificationPostProcessor", [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBotCertificateRevocationService",
    "WAWebBotSignatureVerificationGating",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = "[bot-signature-post-processor]";
    let d = false;
    const m = r("JSResourceForInteraction")("WAWebBotSignatureVerificationUtils").__setRef("WAWebBotSignatureVerificationPostProcessor");
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (!g(t)) {
                return t;
            }
            if (!d) {
                d = true;
                o("WAWebBotCertificateRevocationService").startPeriodicCrlRefresh();
            }
            const { botSignatureVerificationMetadata: n, forwardedAiBotMessageInfo: r } = t;
            if (r == null || n == null) {
                return t;
            }
            const a = h(t);
            if (a == null) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " No unified response bytes available for verification"
                ])), c).sendLogs("bot-sig-no-unified-response");
                return t;
            }
            try {
                const i = yield m.load();
                const l = i.verifyBotMessageSignature;
                const p = yield l({
                    forwardedAiBotMessageInfo: r,
                    unifiedResponseBytes: a,
                    verificationMetadata: n
                });
                if (p === "failed") {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " Verification failed"
                    ])), c).sendLogs("bot-sig-verification-failed");
                }
                return babelHelpers.extends({}, t, {
                    forwardedAiBotMessageInfo: babelHelpers.extends({}, r, {
                        validationStatus: p
                    })
                });
            } catch (e) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " Verification error, failing open: ",
                    ""
                ])), c, String(e)).sendLogs("bot-sig-verification-error", {
                    sampling: 0.01
                });
            }
            return t;
        });
        return _.apply(this, arguments);
    }
    function f() {
        d = false;
    }
    function g(e) {
        return !(e.isForwarded !== true || e.forwardedAiBotMessageInfo == null || e.botSignatureVerificationMetadata == null || !o("WAWebBotSignatureVerificationGating").isForwardVerificationEnabled());
    }
    function h({ unifiedResponseRawData: t }) {
        if (t instanceof Uint8Array) {
            return t;
        }
        if (t instanceof ArrayBuffer) {
            return new Uint8Array(t);
        }
        return null;
    }
    l.verifyForwardedBotMessage = p;
    l.resetCrlRefreshStateForTesting = f;
    l.shouldVerifyForwardedBotMessage = g;
}, 98);