__d("WAWebSendHistSyncServerErrorReceiptJob", [
    "WABase64",
    "WAWap",
    "WAWebCommsAckParser",
    "WAWebCommsWapMd",
    "WAWebCryptoMediaRetry",
    "WAWebDeprecatedSendIqWorkerCompatible",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            let r;
            const a = o("WABase64").decodeB64(n);
            const i = yield o("WAWebCryptoMediaRetry").encryptServerErrorReceipt(a, t);
            const { ciphertext, iv } = i;
            const u = (r = o("WAWap")).wap("receipt", {
                type: "server-error",
                to: o("WAWebCommsWapMd").USER_JID(e),
                id: r.CUSTOM_STRING(t),
                category: "peer"
            }, r.wap("encrypt", null, r.wap("enc_p", null, ciphertext), r.wap("enc_iv", null, iv)));
            return o("WAWebDeprecatedSendIqWorkerCompatible").deprecatedSendStanzaAndWaitForAck(u, o("WAWebCommsAckParser").toCoreAckTemplate({
                id: t,
                class: "receipt",
                type: "server-error",
                from: e,
                participant: null
            }));
        });
        return s.apply(this, arguments);
    }
    l.default = e;
}, 98);