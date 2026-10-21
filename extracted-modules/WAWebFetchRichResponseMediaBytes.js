__d("WAWebFetchRichResponseMediaBytes", [
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
    let s;
    const u = "image/jpeg";
    const c = 30000;
    function d(e, t, n) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a, i) {
            try {
                const c = t.mimetype ?? u;
                const d = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(t.filehash);
                if (d != null) {
                    o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
                        entryPoint: "DownloadRichResponseMedia"
                    }).endSuccess({
                        string: {
                            downloadResult: "in_memory_media_blob_cache_hit"
                        }
                    });
                    return {
                        blob: d,
                        filehash: t.filehash,
                        mimetype: c
                    };
                }
                const downloadQpl = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
                    entryPoint: "DownloadRichResponseMedia"
                });
                const _ = yield p(i, (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        const n = yield o("WAWebDownloadManager").downloadManager.downloadAndMaybeDecrypt({
                            directPath: t.directPath,
                            encFilehash: t.encFilehash,
                            filehash: t.filehash,
                            mediaKey: t.mediaKey,
                            mediaKeyTimestamp: t.mediaKeyTimestamp,
                            mimetype: t.mimetype,
                            type: f(t.mediaType),
                            signal: e,
                            userDownloadAttemptCount: 0,
                            downloadQpl,
                            downloadOrigin: a
                        });
                        const r = new Blob([
                            n
                        ], {
                            type: c
                        });
                        o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.put(t.filehash, r);
                        return {
                            blob: r,
                            filehash: t.filehash,
                            mimetype: c
                        };
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })());
                e: {
                    const g = _;
                    if ((typeof g === "object" && g !== null || typeof g === "function") && g.kind === "completed" && "value" in g) {
                        const h = g.value;
                        downloadQpl.endSuccess();
                        return h;
                        break e;
                    }
                    if ((typeof g === "object" && g !== null || typeof g === "function") && g.kind === "timedOut") {
                        downloadQpl.endFailWithError("download_timed_out", "download_timed_out");
                        return null;
                        break e;
                    }
                    if ((typeof g === "object" && g !== null || typeof g === "function") && g.kind === "callerAborted") {
                        downloadQpl.endFailWithError("download_aborted", "download_aborted");
                        return null;
                        break e;
                    }
                    if ((typeof g === "object" && g !== null || typeof g === "function") && g.kind === "failed" && "error" in g) {
                        const y = g.error;
                        downloadQpl.endFailWithError("download_failed", y.message);
                        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "rich response: media download failed"
                        ]))).catching(y).sendLogs("rich-response-media-download-failed");
                        return null;
                        break e;
                    }
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${g}`);
                }
            } catch (error) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "rich response: unexpected error fetching media bytes"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("rich-response-media-fetch-unexpected-error");
                return null;
            }
        });
        return m.apply(this, arguments);
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = new AbortController;
            const a = window.setTimeout(function() {
                n.abort();
            }, c);
            try {
                const i = yield r("WARaceSignal")([
                    e,
                    n.signal
                ], t);
                return {
                    kind: "completed",
                    value: i
                };
            } catch (error) {
                const l = r("getErrorSafe")(error);
                if (l.name === o("WAAbortError").ABORT_ERROR) {
                    if (e.aborted) {
                        return {
                            kind: "callerAborted"
                        };
                    }
                    if (n.signal.aborted) {
                        return {
                            kind: "timedOut"
                        };
                    }
                    return {
                        kind: "callerAborted"
                    };
                }
                return {
                    kind: "failed",
                    error: l
                };
            } finally{
                window.clearTimeout(a);
            }
        });
        return _.apply(this, arguments);
    }
    function f(mediaType) {
        if (mediaType === "audio") {
            return o("WAWebMmsMediaTypes").MEDIA_TYPES.AUDIO;
        }
        if (mediaType === "document") {
            return o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT;
        }
        if (mediaType === "video") {
            return o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO;
        }
        if (mediaType === "image" || mediaType === null || mediaType === undefined) {
            return o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${mediaType}`);
        })();
    }
    l.fetchRichResponseMediaBytes = d;
}, 98);