__d("WAWebCryptoEncryptMedia", [
    "WACryptoHmac",
    "WALogger",
    "WAMediaCalculateFilehash",
    "WAWebCryptoEncryptMediaUsingDependencies",
    "WAWebMediaWorkerProxy",
    "WAWebPREGatingUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = {
        computeHmac: (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ data, length, macKey, plaintextByteLength }) {
                if (o("WAWebPREGatingUtils").shouldUseWorkerForFileSizeBytes(plaintextByteLength)) {
                    const l = yield o("WAWebMediaWorkerProxy").hmacSha256InWorker(macKey, data, length);
                    const { result, transferredBuffer, transferredKeyBuffer } = l;
                    if (result.success) {
                        return {
                            hmac: result.value.hmac,
                            macKey: transferredKeyBuffer,
                            data: transferredBuffer
                        };
                    }
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "hmacSha256InWorker: size:",
                        ", failed: ",
                        ""
                    ])), transferredBuffer.byteLength, result.error).sendLogs("worker-hmac-sha256-failed");
                    return {
                        hmac: yield o("WACryptoHmac").hmacSha256(transferredKeyBuffer, transferredBuffer, length),
                        macKey: transferredKeyBuffer,
                        data: transferredBuffer
                    };
                }
                return {
                    hmac: yield o("WACryptoHmac").hmacSha256(macKey, data, length),
                    macKey,
                    data
                };
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })(),
        computeFilehash: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ ciphertextHmac, plaintextByteLength }) {
                if (o("WAWebPREGatingUtils").shouldUseWorkerForFileSizeBytes(plaintextByteLength)) {
                    const r = yield o("WAWebMediaWorkerProxy").calculateFilehashInWorker(ciphertextHmac);
                    const { result, transferredBuffer } = r;
                    if (result.success) {
                        return {
                            hash: result.value.filehash,
                            ciphertextHmac: transferredBuffer
                        };
                    }
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "calculateFilehashInWorker: size:",
                        " failed: ",
                        ""
                    ])), transferredBuffer.byteLength, result.error).sendLogs("worker-calculate-filehash-error");
                    return {
                        hash: yield o("WAMediaCalculateFilehash").calculateFilehash(transferredBuffer),
                        ciphertextHmac: transferredBuffer
                    };
                }
                return {
                    hash: yield o("WAMediaCalculateFilehash").calculateFilehash(ciphertextHmac),
                    ciphertextHmac
                };
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })()
    };
    const c = o("WAWebCryptoEncryptMediaUsingDependencies").createEncryptMediaUsingDependencies(u);
    l.default = c;
}, 98);