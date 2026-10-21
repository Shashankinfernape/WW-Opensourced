__d("WAWebMmsClientUploadMethod", [
    "Promise",
    "WAExponentialBackoff",
    "WALogger",
    "WARaceSignal",
    "WARetryPromise",
    "WAWebMmsClientIsErrorRetryable",
    "WAWebMmsClientMmsBackoffOptions",
    "WAWebMmsClientMmsCheckIfUploadExists",
    "WAWebMmsClientMmsLogError",
    "WAWebMmsClientMmsUpload",
    "WAWebMmsClientPollMediaHosts",
    "WAWebMmsClientSelectHost",
    "WAWebMmsClientUploadStreamer",
    "WAWebMmsOperationsConst",
    "WAWebWamEnumOverallLastUploadRetryPhaseType",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "ciphertextHmac"
    ];
    let s;
    let u;
    let c;
    let d;
    let m;
    function p(t) {
        return a;
        function a(e) {
            return i.apply(this, arguments);
        }
        function i() {
            i = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n) {
                const { encFilehash: a, onUploadAttemptSuccess: i, type: c } = n;
                const d = {
                    encFilehash: a,
                    type: c
                };
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "mmsClient.upload: start"
                ])));
                try {
                    if (o("WAWebMmsClientUploadStreamer").shouldUseStreamingUpload(n.ciphertextHmac.byteLength, n.type)) {
                        const m = n.ciphertextHmac;
                        const p = babelHelpers.objectWithoutPropertiesLoose(n, e);
                        const _ = new (o("WAWebMmsClientUploadStreamer")).UploadStreamer(p, {
                            mediaHosts: t.mediaHosts
                        });
                        return yield _.uploadCompleteFile({
                            ciphertextHmac: m
                        });
                    }
                    const f = yield l(n);
                    const { response: g, retryStartTime: h } = f;
                    i(Date.now() - h);
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "mmsClient.upload: success"
                    ])));
                    return r("nullthrows")(g);
                } catch (e) {
                    const y = r("getErrorSafe")(e);
                    o("WAWebMmsClientMmsLogError").mmsLogError({
                        debug: d,
                        error: y,
                        hasExpectedErrors: false,
                        source: "mmsClient.upload"
                    });
                    throw y;
                }
            });
            return i.apply(this, arguments);
        }
        function l(e) {
            return p.apply(this, arguments);
        }
        function p() {
            p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const { byteOffset: a, ciphertextHmac: i, encFilehash: l, generateThumbnailOnServer: s, mediaId: u, onProgress: d, onUploadAttemptError: p, onUploadHostFound: f, signal: g, type: h } = e;
                let y = false;
                let C = Date.now();
                const b = {
                    encFilehash: l,
                    type: h
                };
                let v = null;
                const S = yield o("WAExponentialBackoff").exponentialBackoff(babelHelpers.extends({}, r("WAWebMmsClientMmsBackoffOptions"), {
                    signal: g
                }), (()=>{
                    const b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(b, S) {
                        const R = function(n) {
                            return t.mediaHosts.getHostsInfo({
                                operation: r("WAWebMmsOperationsConst").UPLOAD,
                                encFilehash: l,
                                type: h,
                                signal: g,
                                forceRefresh: n
                            });
                        };
                        C = Date.now();
                        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "mmsClient.upload: attempt #",
                            ""
                        ])), S + 1);
                        try {
                            yield t.networkStatus.waitIfOffline();
                            const L = yield R();
                            const { auth: E, fallbackHost: k, selectedHost: I } = L;
                            const T = {
                                selectedHost: I,
                                fallbackHost: k
                            };
                            let D = r("WAWebMmsClientSelectHost")({
                                selectedHost: I,
                                fallbackHost: k,
                                attemptCount: S,
                                lastHostUsed: v,
                                lastFetchMadeProgress: y
                            });
                            v = D;
                            f({
                                hostName: D.hostname,
                                hostClass: D.class,
                                failCount: S
                            });
                            return yield r("WARetryPromise")((()=>{
                                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ retry: c }) {
                                    const p = yield _({
                                        auth: E,
                                        encFilehash: l,
                                        byteLength: i.byteLength,
                                        hostname: D.hostname,
                                        type: h,
                                        signal: g,
                                        byteOffset: a,
                                        failCount: S,
                                        mediaId: u,
                                        token: e.token,
                                        generateThumbnailOnServer: s
                                    });
                                    const f = new AbortController;
                                    const C = f.signal;
                                    const b = yield r("WARaceSignal")([
                                        g,
                                        C
                                    ], function(t) {
                                        const a = o("WAWebMmsClientPollMediaHosts").shouldPollUploadHosts(h, i.byteLength) ? o("WAWebMmsClientPollMediaHosts").pollMediaHosts({
                                            connectionBlock: T,
                                            getHost: function() {
                                                return D;
                                            },
                                            getMediaHosts: function() {
                                                return R(true);
                                            },
                                            getRemainingBytes: function() {
                                                return i.byteLength;
                                            },
                                            signal: t
                                        }).then((e)=>({
                                                kind: "host-changed",
                                                host: e
                                            })) : null;
                                        const c = r("WAWebMmsClientMmsUpload")({
                                            auth: E,
                                            ciphertextHmac: p > 0 ? new Uint8Array(i).subarray(p) : i,
                                            hostname: D.hostname,
                                            encFilehash: l,
                                            type: h,
                                            signal: g,
                                            onProgress: function(t) {
                                                y = true;
                                                d(t, p);
                                            },
                                            byteRange: p > 0 ? {
                                                start: p,
                                                end: i.byteLength
                                            } : void 0,
                                            mediaId: u,
                                            token: e.token,
                                            generateThumbnailOnServer: s
                                        }).then((e)=>({
                                                kind: "upload-completed",
                                                value: e
                                            }));
                                        return (m || (m = n("Promise"))).race([
                                            c,
                                            a
                                        ].filter(Boolean)).finally(()=>f.abort());
                                    });
                                    if (b.kind === "host-changed") {
                                        D = b.host;
                                        v = D;
                                        return c();
                                    }
                                    return b.value;
                                });
                                return function(e) {
                                    return t.apply(this, arguments);
                                };
                            })());
                        } catch (e) {
                            const x = r("getErrorSafe")(e);
                            y = false;
                            const $ = o("WAWebMmsClientIsErrorRetryable").isErrorRetryable(x);
                            const P = !$ || S === r("WAWebMmsClientMmsBackoffOptions").retries;
                            if (!P) {
                                p({
                                    error: x,
                                    failCount: S,
                                    overallLastUploadRetryPhase: o("WAWebWamEnumOverallLastUploadRetryPhaseType").OVERALL_LAST_UPLOAD_RETRY_PHASE_TYPE.UPLOAD,
                                    overallT: Date.now() - C
                                });
                            }
                            if ($) {
                                return b(x);
                            }
                            throw x;
                        }
                    });
                    return function(e, t) {
                        return b.apply(this, arguments);
                    };
                })());
                return {
                    response: S,
                    retryStartTime: C
                };
            });
            return p.apply(this, arguments);
        }
        function _(e) {
            return f.apply(this, arguments);
        }
        function f() {
            f = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ auth: t, byteLength: n, byteOffset: a, encFilehash: i, failCount: l, generateThumbnailOnServer: s, hostname: u, mediaId: c, signal: m, token: p, type: _ }) {
                if (a != null && l === 0) {
                    return a;
                }
                if (!o("WAWebMmsClientPollMediaHosts").shouldPollUploadHosts(_, n)) {
                    return 0;
                }
                try {
                    const f = yield r("WAWebMmsClientMmsCheckIfUploadExists")({
                        auth: t,
                        encFilehash: i,
                        hostname: u,
                        type: _,
                        signal: m,
                        mediaId: c,
                        token: p,
                        generateThumbnailOnServer: s
                    });
                    if (f.complete) {
                        return 0;
                    }
                    const g = f.resume;
                    if (g >= n) {
                        return 0;
                    }
                    return g;
                } catch (e) {
                    const h = r("getErrorSafe")(e);
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to compute upload offset"
                    ]))).verbose().sendLogs("upload-offset-failed");
                    return 0;
                }
            });
            return f.apply(this, arguments);
        }
    }
    l.buildUploadMethodWithDependencies = p;
}, 98);