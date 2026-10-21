__d("WAWebMmsClientUploadStreamer", [
    "Promise",
    "WAExponentialBackoff",
    "WALogger",
    "WARaceSignal",
    "WARetryPromise",
    "WAWebHttpErrors",
    "WAWebMediaHostsRouteSelection",
    "WAWebMmsClientIsErrorRetryable",
    "WAWebMmsClientMmsBackoffOptions",
    "WAWebMmsClientMmsUploadStream",
    "WAWebMmsClientPollMediaHosts",
    "WAWebMmsClientSelectHost",
    "WAWebMmsMediaTypes",
    "WAWebNetworkStatus",
    "WAWebWamEnumOverallLastUploadRetryPhaseType",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    const e = [
        "auth"
    ];
    let s;
    let u;
    let c;
    let d;
    function m(e, t) {
        const n = g(t);
        return t === o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT && n > 0 && e > n;
    }
    const p = (()=>{
        function t(e, { mediaHosts: a }) {
            this.$2 = Date.now();
            this.$3 = 0;
            this.$4 = 0;
            this.$9 = (d || (d = n("Promise"))).resolve();
            this.$13 = a;
            this.$6 = e.encFilehash;
            this.$5 = e.type;
            this.$7 = e.signal;
            this.$3 = e.byteOffset ?? 0;
            this.$1 = e.encFilehash.slice(0, 10);
            this.$11 = e.token;
            this.$12 = e.generateThumbnailOnServer ?? false;
            this.$14 = e.onUploadHostFound;
            this.$15 = e.onUploadAttemptSuccess;
            this.$16 = e.onUploadAttemptError;
            this.$17 = e.onProgress;
            this.$18 = e.onFinalize;
            this.$19 = e.onStreamUploadStart;
            this.$10 = e.mediaId;
        }
        const a = t.prototype;
        a.uploadCompleteFile = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ ciphertextHmac: a }) {
                const i = new Uint8Array(a);
                this.$8 = i.byteLength;
                const l = g(this.$5);
                const u = l === 0 ? i.byteLength : l;
                this.$19?.();
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "uploadStreamer: [",
                    "] start upload"
                ])), this.$1);
                yield r("WAWebNetworkStatus").waitIfOffline();
                for(let c = Math.ceil((i.byteLength - this.$3) / u), d = 0; d < c; d++){
                    this.$20(d, c);
                    const m = this.$3 + d * u;
                    const p = m + u;
                    const _ = i.subarray(m, p);
                    yield this.$21(_, m);
                    this.$4 += _.byteLength;
                }
                const f = yield this.$22(this.$6);
                this.$15?.(Date.now() - this.$2);
                return f;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.startUploadFromClient = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield r("WAWebNetworkStatus").waitIfOffline();
                this.$19?.();
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.uploadChunkFromClient = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                this.$9 = this.$9.then(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    yield t.$21(e, t.$3);
                    t.$4 += e.byteLength;
                    t.$3 += e.byteLength;
                }));
                yield this.$9;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.finalizeUploadFromClient = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                const r = yield this.$9.then(()=>t.$22(e));
                this.$15?.(Date.now() - this.$2);
                return r;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.$23 = function() {
            this.$2 = Date.now();
        };
        a.$24 = function() {
            return Date.now() - this.$2;
        };
        a.$25 = function() {
            if (this.$8 != null) {
                return this.$8 - this.$4;
            }
        };
        a.$20 = function(t, n) {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "uploadStreamer: [",
                "] uploading chunk ",
                "/",
                ""
            ])), this.$1, t + 1, n);
        };
        a.$21 = function(t, a) {
            const e = this;
            return o("WAExponentialBackoff").exponentialBackoff(babelHelpers.extends({}, r("WAWebMmsClientMmsBackoffOptions"), {
                signal: this.$7
            }), (()=>{
                const i = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n, i) {
                    try {
                        yield e.$26(t, a, i);
                    } catch (t) {
                        const l = r("getErrorSafe")(t);
                        if (_(l, i)) {
                            e.$16?.({
                                error: l,
                                failCount: i,
                                overallLastUploadRetryPhase: o("WAWebWamEnumOverallLastUploadRetryPhaseType").OVERALL_LAST_UPLOAD_RETRY_PHASE_TYPE.UPLOAD,
                                overallT: e.$24()
                            });
                            e.$23();
                            return n(l);
                        }
                        throw l;
                    }
                });
                return function(e, t) {
                    return i.apply(this, arguments);
                };
            })());
        };
        a.$22 = function(t) {
            const e = this;
            return o("WAExponentialBackoff").exponentialBackoff(babelHelpers.extends({}, r("WAWebMmsClientMmsBackoffOptions"), {
                signal: this.$7
            }), (()=>{
                const a = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n, a) {
                    try {
                        e.$18?.();
                        return yield e.$27(t, a);
                    } catch (t) {
                        const i = r("getErrorSafe")(t);
                        if (f(i, a)) {
                            e.$16?.({
                                error: i,
                                failCount: a,
                                overallLastUploadRetryPhase: o("WAWebWamEnumOverallLastUploadRetryPhaseType").OVERALL_LAST_UPLOAD_RETRY_PHASE_TYPE.FINALIZE,
                                overallT: e.$24()
                            });
                            e.$23();
                            return n(i);
                        }
                        throw i;
                    }
                });
                return function(e, t) {
                    return a.apply(this, arguments);
                };
            })());
        };
        a.$26 = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a, i) {
                const l = this;
                let s = null;
                let u = false;
                yield r("WAWebNetworkStatus").waitIfOffline();
                const c = yield this.$28(i);
                const m = c.auth;
                const p = babelHelpers.objectWithoutPropertiesLoose(c, e);
                let _ = s = r("WAWebMmsClientSelectHost")({
                    selectedHost: p.selectedHost,
                    fallbackHost: p.fallbackHost,
                    lastHostUsed: s,
                    lastFetchMadeProgress: u,
                    attemptCount: i
                });
                const f = function(t) {
                    u = true;
                    l.$17?.(t, a);
                };
                return r("WARetryPromise")((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ retry: u }) {
                        const c = new AbortController;
                        const g = c.signal;
                        const h = yield r("WARaceSignal")([
                            g,
                            l.$7
                        ], function(e) {
                            const r = l.$8 != null && o("WAWebMmsClientPollMediaHosts").shouldPollUploadHosts(l.$5, l.$8) ? o("WAWebMmsClientPollMediaHosts").pollMediaHosts({
                                connectionBlock: p,
                                signal: e,
                                getHost: function() {
                                    return _;
                                },
                                getMediaHosts: function() {
                                    return l.$28(i, true);
                                },
                                getRemainingBytes: function() {
                                    return l.$25();
                                }
                            }).then((e)=>({
                                    host: e,
                                    kind: "host-changed"
                                })) : null;
                            const s = o("WAWebMmsClientMmsUploadStream").mmsUploadStream({
                                auth: m,
                                encFilehash: l.$6,
                                type: l.$5,
                                hostname: _.hostname,
                                byteStart: a,
                                byteEnd: a + t.byteLength,
                                chunk: t,
                                signal: e,
                                onProgress: f,
                                mediaId: l.$10,
                                token: l.$11,
                                generateThumbnailOnServer: l.$12
                            }).then(()=>({
                                    kind: "upload-completed"
                                }));
                            return (d || (d = n("Promise"))).race([
                                s,
                                r
                            ].filter(Boolean)).finally(()=>c.abort());
                        });
                        if (h.kind === "host-changed") {
                            s = _;
                            _ = h.host;
                            return u();
                        }
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })());
            });
            function a(e, n, r) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        a.$27 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                yield r("WAWebNetworkStatus").waitIfOffline();
                const n = yield this.$28(t);
                const { auth: a, selectedHost: i } = n;
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "uploadStreamer: [",
                    "] finalizing"
                ])), this.$1);
                return o("WAWebMmsClientMmsUploadStream").mmsUploadStreamFinalize({
                    auth: a,
                    hostname: i.hostname,
                    encFilehash: this.$6,
                    finalHash: e,
                    type: this.$5,
                    signal: this.$7,
                    mediaId: this.$10,
                    generateThumbnailOnServer: this.$12
                });
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.$28 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t = false) {
                const r = yield this.$13.getHostsInfo({
                    operation: o("WAWebMediaHostsRouteSelection").OPERATIONS.UPLOAD,
                    encFilehash: this.$6,
                    type: this.$5,
                    signal: this.$7,
                    forceRefresh: t
                });
                this.$14?.({
                    failCount: e,
                    hostName: r.selectedHost.hostname,
                    hostClass: r.selectedHost.class
                });
                return r;
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })();
    function _(e, t) {
        return o("WAWebMmsClientIsErrorRetryable").isErrorRetryable(e) && t < r("WAWebMmsClientMmsBackoffOptions").retries;
    }
    function f(e, t) {
        if (e instanceof o("WAWebHttpErrors").HttpStatusCodeError && e.status >= 500) {
            return false;
        }
        return _(e, t);
    }
    function g(e) {
        if (e === o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT) {
            return 50 * 1024 * 1024;
        }
        return 0;
    }
    l.shouldUseStreamingUpload = m;
    l.UploadStreamer = p;
}, 98);