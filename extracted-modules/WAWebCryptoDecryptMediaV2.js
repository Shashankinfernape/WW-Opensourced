__d("WAWebCryptoDecryptMediaV2", [
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WATypedArraysCast",
    "WAWebBackendWorkerClient",
    "WAWebCryptoDecryptMedia",
    "WAWebMainThreadQplHandler",
    "WAWebMediaFileErrors",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = 3000;
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ ciphertextHmac, debugString, downloadQpl, expectedPlaintextHash, mediaKeys }) {
            const d = yield o("WAPromiseTimeout").promiseTimeout(o("WAWebBackendWorkerClient").getBackendWorkerBridge(), u, "[media][crypto] compound worker bridge timed out").catch((e)=>{
                if (e instanceof o("WACustomError").TimeoutError) {
                    return null;
                }
                throw e;
            });
            if (d == null) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[media][crypto] bridge timeout, main-thread fallback ",
                    ""
                ])), {
                    debugString
                });
                downloadQpl?.addPoint("compound_bridge_timeout_fallback");
                return r("WAWebCryptoDecryptMedia")({
                    mediaKeys,
                    ciphertextHmac,
                    expectedPlaintextHash,
                    debugString
                });
            }
            const ciphertextHmac_1 = o("WATypedArraysCast").castTypedArrays(Uint8Array, ciphertextHmac);
            let p = null;
            try {
                const _ = yield d.sendAndReceive("media", "decryptMedia", {
                    iv: mediaKeys.iv,
                    encKey: mediaKeys.encKey,
                    macKey: mediaKeys.macKey,
                    ciphertextHmac: ciphertextHmac_1,
                    expectedPlaintextHash: expectedPlaintextHash ?? null,
                    serializedDownloadQpl: downloadQpl == null ? null : o("WAWebMainThreadQplHandler").serializeQplForBridge(downloadQpl)
                }, false, {
                    onSend: function() {
                        p = self.performance.now();
                        downloadQpl?.addPoint("compound_bridge_roundtrip_start");
                    }
                }, undefined, [
                    ciphertextHmac_1.buffer
                ]);
                if (p != null) {
                    const f = self.performance.now() - p;
                    downloadQpl?.addPoint("compound_bridge_roundtrip_end", {
                        int: {
                            bridge_duration_ms: Math.round(Math.max(0, f - _.workerDurationMs)),
                            bridge_round_trip_duration_ms: Math.round(f),
                            worker_duration_ms: Math.round(_.workerDurationMs)
                        }
                    });
                }
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "decryptMedia: [",
                    "] success (compound)"
                ])), debugString);
                return _.plaintext;
            } catch (error) {
                throw new (o("WAWebMediaFileErrors")).MediaDecryptionError(`decryptMedia: compound worker failed: ${error instanceof Error ? error.message : String(error)}`);
            }
        });
        return d.apply(this, arguments);
    }
    l.default = c;
}, 98);