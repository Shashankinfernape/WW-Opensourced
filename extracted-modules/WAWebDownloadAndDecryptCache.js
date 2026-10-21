__d("WAWebDownloadAndDecryptCache", [
    "WALogger",
    "WAWebMediaDataUtils",
    "WAWebMediaStore",
    "WAWebSerializeError",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        const r = e.progressiveJpegOpts?.scanCount;
        const o = e.progressiveJpegOpts?.scanLengths;
        if (r != null && o) {
            return `${e.filehash}-${r}/${o.length}-scans`;
        }
        if (e.partialVideoOpts) {
            const a = e.partialVideoOpts.secondsToDownload;
            return `${e.filehash}-${a}-seconds`;
        }
        return e.filehash;
    }
    const c = (()=>{
        function t() {}
        const t_prototype = t.prototype;
        t_prototype.get = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
                const n_downloadQpl = n.downloadQpl;
                if (!o("WAWebMediaDataUtils").shouldUseLruMediaStore(n.type)) {
                    return null;
                }
                const i = yield o("WAWebMediaStore").LruMediaStore.getName();
                try {
                    n_downloadQpl.addPoint("lru_cache_read_start");
                    const l = yield o("WAWebMediaStore").LruMediaStore.get(u(n));
                    n_downloadQpl.addPoint("lru_cache_read_end", babelHelpers.extends({}, l == null ? {} : {
                        int: {
                            byteLength: l.byteLength
                        }
                    }, {
                        string: {
                            lruCacheBackend: i,
                            lruCacheReadResult: l != null ? "hit" : "miss"
                        }
                    }));
                    return l;
                } catch (error) {
                    n_downloadQpl.addPoint("lru_cache_read_fail", {
                        string: {
                            lruCacheBackend: i,
                            lruCacheReadResult: "error"
                        }
                    });
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "downloadManager.asyncCache.get error:\n",
                        ""
                    ], [
                        "downloadManager.asyncCache.get error:\\n",
                        ""
                    ])), r("WAWebSerializeError")(error)).verbose();
                    return null;
                }
            });
            function a(e, n) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        t_prototype.set = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
                const n_downloadQpl = n.downloadQpl;
                if (o("WAWebMediaDataUtils").shouldUseLruMediaStore(n.type)) {
                    const i = yield o("WAWebMediaStore").LruMediaStore.getName();
                    try {
                        n_downloadQpl.addPoint("lru_cache_write_start", {
                            int: {
                                byteLength: t.byteLength
                            }
                        });
                        yield o("WAWebMediaStore").LruMediaStore.put(u(n), t);
                        n_downloadQpl.addPoint("lru_cache_write_end", {
                            string: {
                                lruCacheBackend: i,
                                lruCacheWriteResult: "completed"
                            }
                        });
                    } catch (error) {
                        n_downloadQpl.addPoint("lru_cache_write_fail", {
                            string: {
                                lruCacheBackend: i,
                                lruCacheWriteResult: "error"
                            }
                        });
                        o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "downloadManager.asyncCache.set error:\n",
                            ""
                        ], [
                            "downloadManager.asyncCache.set error:\\n",
                            ""
                        ])), r("WAWebSerializeError")(error)).verbose();
                    }
                }
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })();
    l.getLRUStoreKey = u;
    l.DownloadAndDecryptCache = c;
}, 98);