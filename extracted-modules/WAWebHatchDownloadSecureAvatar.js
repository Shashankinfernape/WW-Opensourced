__d("WAWebHatchDownloadSecureAvatar", [
    "WAAbortError",
    "WALogger",
    "WARaceSignal",
    "WAWebDownloadManager",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMmsMediaTypes",
    "WAWebStartMediaDownloadQpl",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = "image/webp";
    const u = "video/mp4";
    const c = 30000;
    function d(e, t, n) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a, downloadOrigin) {
            const l = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
                entryPoint: "DownloadHatchAvatar"
            });
            if (o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.has(t.filehash)) {
                l.endSuccess({
                    string: {
                        downloadResult: "in_memory_media_blob_cache_hit"
                    }
                });
                return o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.getOrCreateURL(t.filehash);
            }
            l.addPoint("in_memory_media_blob_cache_miss");
            const d = t.mediaType === "video";
            const m = d ? o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO : o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE;
            const p = new AbortController;
            let _ = false;
            const f = window.setTimeout(function() {
                _ = true;
                p.abort();
            }, c);
            try {
                return yield r("WARaceSignal")([
                    a,
                    p.signal
                ], (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        const r = yield o("WAWebDownloadManager").downloadManager.downloadAndMaybeDecrypt({
                            directPath: t.directPath,
                            encFilehash: t.encFilehash,
                            filehash: t.filehash,
                            mediaKey: t.mediaKey,
                            mimetype: t.mimeType,
                            staticUrl: t.staticUrl,
                            type: m,
                            signal: e,
                            userDownloadAttemptCount: 0,
                            downloadQpl: l,
                            downloadOrigin
                        });
                        const a = t.mimeType ?? (d ? u : s);
                        const c = new Blob([
                            r
                        ], {
                            type: a
                        });
                        l.addPoint("in_memory_media_blob_cache_write_start");
                        o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.put(t.filehash, c);
                        const p = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.getOrCreateURL(t.filehash);
                        l.addPoint("in_memory_media_blob_cache_write_end");
                        l.endSuccess();
                        return p;
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })());
            } catch (error) {
                const g = r("getErrorSafe")(error);
                if (g.name === o("WAAbortError").ABORT_ERROR) {
                    const h = _ ? "download_timed_out" : "download_aborted";
                    l.endFailWithError(h, h);
                    return null;
                }
                l.endFailWithError("download_failed", g.message);
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch: secure avatar download failed"
                ]))).catching(g).sendLogs("hatch-secure-avatar-download-failed");
                return null;
            } finally{
                window.clearTimeout(f);
            }
        });
        return m.apply(this, arguments);
    }
    l.downloadHatchSecureMedia = d;
}, 98);