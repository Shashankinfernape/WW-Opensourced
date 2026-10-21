__d("WAWebDownloadRichResponseMedia", [
    "WAAbortError",
    "WALogger",
    "WARaceSignal",
    "WAWebFetchRichResponseMediaBytes",
    "WAWebHttpExtendedFetch",
    "WAWebStartMediaDownloadQpl",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 30000;
    function u(e, t, n) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            yield o("WAWebFetchRichResponseMediaBytes").fetchRichResponseMediaBytes(e, t, n);
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ cancelSignal, fileLength, lifecycleSignal, onProgress, url }) {
            const c = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
                entryPoint: "DownloadRichResponseMedia"
            });
            c.addAnnotations({
                string: {
                    richResponseLane: "artifact"
                }
            });
            const d = p();
            try {
                return yield r("WARaceSignal")([
                    lifecycleSignal,
                    cancelSignal,
                    d.signal
                ], (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        const t = yield o("WAWebHttpExtendedFetch").extendedFetch(url, {
                            onHeadersReceived: function() {
                                d.restart();
                            },
                            onProgress: function(t) {
                                d.restart();
                                const e = t.lengthComputable ? t.total : fileLength;
                                onProgress(f(t.loaded, e));
                            },
                            signal: e
                        });
                        if (!t.ok) {
                            throw r("err")(`artifact download rejected with status ${t.status}`);
                        }
                        const n = yield t.blob();
                        c.endSuccess();
                        return n;
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })());
            } catch (error) {
                const m = r("getErrorSafe")(error);
                if (m.name === o("WAAbortError").ABORT_ERROR) {
                    _(c, lifecycleSignal, cancelSignal, d.signal);
                    return null;
                }
                c.endFailWithError("download_failed", m.message);
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "rich response: artifact download failed"
                ]))).catching(m).sendLogs("rich-response-artifact-download-failed");
                return null;
            } finally{
                d.clear();
            }
        });
        return m.apply(this, arguments);
    }
    function p() {
        const e = new AbortController;
        let t = null;
        const clear = function() {
            if (t != null) {
                window.clearTimeout(t);
                t = null;
            }
        };
        const restart = function() {
            clear();
            t = window.setTimeout(function() {
                e.abort();
            }, s);
        };
        restart();
        return {
            clear,
            restart,
            signal: e.signal
        };
    }
    function _(e, lifecycleSignal, cancelSignal, signal) {
        if (cancelSignal.aborted) {
            e.endCancel();
        } else if (signal.aborted) {
            e.endFailWithError("download_timed_out", "download_timed_out");
        } else if (lifecycleSignal.aborted) {
            e.endFailWithError("download_unmounted", "download_unmounted");
        } else {
            e.endFailWithError("download_aborted", "download_aborted");
        }
    }
    function f(loaded, t) {
        if (t == null || t <= 0) {
            return null;
        }
        return Math.min(loaded / t, 1);
    }
    l.downloadRichResponseMedia = u;
    l.downloadRichResponseArtifact = d;
}, 98);