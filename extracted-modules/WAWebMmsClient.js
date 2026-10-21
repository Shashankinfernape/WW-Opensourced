__d("WAWebMmsClient", [
    "Promise",
    "WAExponentialBackoff",
    "WALogger",
    "WARaceSignal",
    "WARetryPromise",
    "WAWebMediaHosts",
    "WAWebMmsClientIsErrorRetryable",
    "WAWebMmsClientMmsBackoffOptions",
    "WAWebMmsClientMmsDeleteMdHistorySyncBlob",
    "WAWebMmsClientMmsDownload",
    "WAWebMmsClientMmsLogError",
    "WAWebMmsClientPollMediaHosts",
    "WAWebMmsClientSelectHost",
    "WAWebMmsClientUsingDependencies",
    "WAWebMmsMediaTypes",
    "WAWebMmsOperationsConst",
    "WAWebNetworkStatus",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    function download(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const { debugString, directPath, filehash, onDownloadAttemptSuccess, staticUrl, type } = e;
            const debug = {
                directPath,
                filehash,
                type,
                staticUrl
            };
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "mmsClient.download: [",
                "] start"
            ])), debugString);
            try {
                const c = yield S(e);
                const { response, retryStartTime } = c;
                onDownloadAttemptSuccess(Date.now() - retryStartTime);
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "mmsClient.download: [",
                    "] success"
                ])), debugString);
                return response;
            } catch (error) {
                const f = r("getErrorSafe")(error);
                o("WAWebMmsClientMmsLogError").mmsLogError({
                    debug,
                    error: f,
                    source: "mmsClient.download"
                });
                throw f;
            }
        });
        return g.apply(this, arguments);
    }
    function checkExistence(e) {
        return C((t)=>o("WAWebMmsClientMmsDownload").mmsCheckExistence(babelHelpers.extends({}, e, {
                hostname: t
            })), e);
    }
    function getEncryptedMediaSize(e) {
        return C((t)=>o("WAWebMmsClientMmsDownload").mmsGetEncryptedMediaSize(babelHelpers.extends({}, e, {
                hostname: t
            })), e);
    }
    function C(t, { directPath, encFilehash, signal, type }) {
        const d = {
            directPath,
            type
        };
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "runTaskWithBackoff: start"
        ])));
        return o("WAExponentialBackoff").exponentialBackoff(babelHelpers.extends({}, r("WAWebMmsClientMmsBackoffOptions"), {
            signal
        }), (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, n) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "runMmsTaskWithBackoff: attempt #",
                    ""
                ])), n + 1);
                try {
                    const a = yield b({
                        operation: r("WAWebMmsOperationsConst").DOWNLOAD,
                        directPath,
                        encFilehash,
                        type,
                        signal,
                        failCount: n
                    });
                    const d = yield t(a);
                    return d;
                } catch (error) {
                    const m = r("getErrorSafe")(error);
                    if (o("WAWebMmsClientIsErrorRetryable").isErrorRetryable(m)) {
                        return e(m);
                    }
                    throw m;
                }
            });
            return function(t, n) {
                return e.apply(this, arguments);
            };
        })());
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ directPath, encFilehash, failCount, operation, signal, type }) {
            const s = yield o("WAWebMediaHosts").mediaHosts.getHostsInfo({
                operation,
                directPath,
                encFilehash,
                type,
                signal
            });
            const { fallbackHost, selectedHost } = s;
            const d = failCount >= 2 && fallbackHost ? fallbackHost : selectedHost;
            return d.hostname;
        });
        return v.apply(this, arguments);
    }
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ byteRange, debugString, directPath, filehash, mode, onData, onDownloadAttemptError, onDownloadHostFound, onProgress, signal, staticUrl, type }) {
            let retryStartTime = Date.now();
            let lastFetchMadeProgress = false;
            const b = {
                directPath,
                filehash,
                type,
                staticUrl
            };
            let lastHostUsed = null;
            const S = yield o("WAExponentialBackoff").exponentialBackoff(babelHelpers.extends({}, r("WAWebMmsClientMmsBackoffOptions"), {
                signal
            }), (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, b) {
                    retryStartTime = Date.now();
                    o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "mmsClient.download: [",
                        "] attempt #",
                        ""
                    ])), debugString, b + 1);
                    const S = (forceRefresh)=>o("WAWebMediaHosts").mediaHosts.getHostsInfo({
                            operation: r("WAWebMmsOperationsConst").DOWNLOAD,
                            directPath,
                            encFilehash: filehash,
                            type,
                            signal,
                            forceRefresh
                        });
                    try {
                        const R = yield S();
                        const { fallbackHost, selectedHost } = R;
                        let k = r("WAWebMmsClientSelectHost")({
                            selectedHost,
                            fallbackHost,
                            attemptCount: b,
                            lastHostUsed,
                            lastFetchMadeProgress
                        });
                        lastHostUsed = k;
                        onDownloadHostFound({
                            hostName: k.hostname,
                            hostClass: k.class,
                            failCount: b
                        });
                        let I = 0;
                        let T = null;
                        const connectionBlock = {
                            selectedHost,
                            fallbackHost
                        };
                        const onHeadersReceived = function(t) {
                            if (t != null && T == null) {
                                const e = t.get("Content-Length");
                                const n = parseInt(e, 10);
                                T = Number.isNaN(n) ? null : n;
                            }
                        };
                        return yield r("WARetryPromise")((()=>{
                            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ failCount, retry }) {
                                const p = function(t) {
                                    onProgress?.(t);
                                    lastFetchMadeProgress = true;
                                    if (t.lengthComputable) {
                                        I = t.loaded;
                                    }
                                };
                                I = 0;
                                const y = new AbortController;
                                const y_signal = y.signal;
                                const R = yield r("WARaceSignal")([
                                    signal,
                                    y_signal
                                ], function(e) {
                                    const r = o("WAWebMmsClientMmsDownload").mms4Download({
                                        directPath,
                                        encFilehash: filehash,
                                        staticUrl,
                                        hostname: k.hostname,
                                        type,
                                        signal: e,
                                        mode,
                                        byteRange,
                                        debugString,
                                        onHeadersReceived,
                                        onProgress: p,
                                        onData,
                                        downloadBucket: k.selectedBucket
                                    }).then((arrayBuffer)=>({
                                            kind: "download-completed",
                                            arrayBuffer
                                        }));
                                    const c = o("WAWebMmsClientPollMediaHosts").shouldPollDownloadHosts(type, T) ? o("WAWebMmsClientPollMediaHosts").pollMediaHosts({
                                        connectionBlock,
                                        getHost: function() {
                                            return k;
                                        },
                                        getMediaHosts: function() {
                                            return S(true);
                                        },
                                        getRemainingBytes: function() {
                                            if (T != null) {
                                                return T - I;
                                            }
                                            return null;
                                        },
                                        signal: e
                                    }).then((host)=>({
                                            kind: "host-changed",
                                            host
                                        })) : null;
                                    return (_ || (_ = n("Promise"))).race([
                                        r,
                                        c
                                    ].filter(Boolean)).finally(()=>y.abort());
                                });
                                if (R.kind === "host-changed") {
                                    k = R.host;
                                    lastHostUsed = k;
                                    return retry();
                                }
                                return R.arrayBuffer;
                            });
                            return function(t) {
                                return e.apply(this, arguments);
                            };
                        })());
                    } catch (error) {
                        const $ = r("getErrorSafe")(error);
                        lastFetchMadeProgress = false;
                        const P = o("WAWebMmsClientIsErrorRetryable").isErrorRetryable($);
                        const N = !P || b === r("WAWebMmsClientMmsBackoffOptions").retries;
                        if (!N) {
                            onDownloadAttemptError({
                                error: $,
                                overallT: Date.now() - retryStartTime,
                                failCount: b
                            });
                        }
                        if (P) {
                            return e($);
                        }
                        throw $;
                    }
                });
                return function(t, n) {
                    return e.apply(this, arguments);
                };
            })());
            return {
                response: r("nullthrows")(S),
                retryStartTime
            };
        });
        return R.apply(this, arguments);
    }
    function deleteMdHistorySyncBlob(e) {
        const { companionUserSecret, directPath, encFilehash, encHandle } = e;
        return E((e, auth)=>r("WAWebMmsClientMmsDeleteMdHistorySyncBlob")({
                directPath,
                hostname: e,
                encFilehash,
                auth,
                encHandle,
                companionUserSecret
            }), babelHelpers.extends({}, e, {
            type: o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE,
            operation: r("WAWebMmsOperationsConst").UPLOAD
        }));
    }
    function E(e, { directPath, encFilehash, operation, signal, type }) {
        const m = {
            directPath,
            type
        };
        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "runTaskWithBackoff: start"
        ])));
        return o("WAExponentialBackoff").exponentialBackoff(babelHelpers.extends({}, r("WAWebMmsClientMmsBackoffOptions"), {
            signal
        }), (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "runMmsTaskWithBackoff: attempt #",
                    ""
                ])), n + 1);
                try {
                    const u = yield k({
                        operation,
                        directPath,
                        encFilehash,
                        type,
                        signal,
                        failCount: n
                    });
                    const { auth, hostname } = u;
                    const _ = yield e(hostname, auth);
                    return _;
                } catch (error) {
                    const f = r("getErrorSafe")(error);
                    if (o("WAWebMmsClientIsErrorRetryable").isErrorRetryable(f)) {
                        return t(f);
                    }
                    throw f;
                }
            });
            return function(e, n) {
                return t.apply(this, arguments);
            };
        })());
    }
    function k(e) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ directPath, encFilehash, failCount, operation, signal, type }) {
            const s = yield o("WAWebMediaHosts").mediaHosts.getHostsInfo({
                operation,
                directPath,
                encFilehash,
                type,
                signal
            });
            const { auth, fallbackHost, selectedHost } = s;
            const m = failCount >= 2 && fallbackHost ? fallbackHost : selectedHost;
            return {
                hostname: m.hostname,
                auth
            };
        });
        return I.apply(this, arguments);
    }
    const T = o("WAWebMmsClientUsingDependencies").createPartialMmsClientUsingDependencies({
        mediaHosts: o("WAWebMediaHosts").mediaHosts,
        networkStatus: r("WAWebNetworkStatus")
    });
    const D = babelHelpers.extends({
        download,
        checkExistence,
        getEncryptedMediaSize,
        deleteMdHistorySyncBlob
    }, T);
    l.default = D;
}, 98);