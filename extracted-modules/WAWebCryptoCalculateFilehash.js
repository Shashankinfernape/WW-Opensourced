__d("WAWebCryptoCalculateFilehash", [
    "WALogger",
    "WAMediaCalculateFilehash",
    "WAWebFileUtils",
    "WAWebMediaDataUtils",
    "WAWebMediaOpaqueData",
    "WAWebMediaWorkerProxy",
    "WAWebPREGatingUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                let n;
                if (t instanceof r("WAWebMediaOpaqueData")) {
                    n = yield o("WAWebMediaDataUtils").opaqueDataToArrayBuffer(t);
                } else {
                    n = yield o("WAWebFileUtils").blobToArrayBuffer(t);
                }
                if (o("WAWebPREGatingUtils").shouldUseWorkerForFileSizeBytes(n.byteLength)) {
                    const a = yield o("WAWebMediaWorkerProxy").calculateFilehashInWorker(n);
                    const { result, transferredBuffer } = a;
                    n = transferredBuffer;
                    if (result.success) {
                        return result.value.filehash;
                    }
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "calculateFilehashInWorker: size:",
                        " failed: ",
                        ""
                    ])), n.byteLength, result.error).sendLogs("worker-calculate-filehash-failed");
                }
                return yield o("WAMediaCalculateFilehash").calculateFilehash(n);
            } catch (error) {
                const u = t instanceof r("WAWebMediaOpaqueData");
                const c = t instanceof r("WAWebMediaOpaqueData") ? t.size() : t.size;
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "calculateFilehashFromBlob failed: ",
                    ", size:",
                    ", isOpaqueData:",
                    ""
                ])), error, c, u).sendLogs("calculate-filehash-from-blob-error");
                return;
            }
        });
        return c.apply(this, arguments);
    }
    l.calculateFilehashFromBlob = u;
}, 98);