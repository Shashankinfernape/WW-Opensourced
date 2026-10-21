__d("XHRRequest", [
    "invariant",
    "DTSGUtils",
    "Env",
    "ErrorGuard",
    "FBLogger",
    "LSD",
    "Log",
    "NetworkStatus",
    "ResourceTimingsStore",
    "ResourceTypes",
    "SprinkleConfig",
    "TimeSlice",
    "URI",
    "XHRHttpError",
    "ZeroRewrites",
    "cr:8959",
    "cr:8960",
    "fb-error",
    "getAsyncHeaders",
    "performance",
    "xhrSimpleDataSerializer"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const ErrorXFBDebug = n("fb-error").ErrorXFBDebug;
    let m = false;
    let p = false;
    const _ = {
        loadedBytes: 0,
        totalBytes: 0
    };
    function f(t) {
        return n("ZeroRewrites").rewriteURI(new (e || (e = n("URI")))(t));
    }
    class g {
        constructor(e){
            this.$3 = function() {
                return null;
            };
            this.$20 = f(e);
            this.$7 = "POST";
            this.$6 = {};
            this.setResponseType(null);
            this.setTransportBuilder(n("ZeroRewrites").getTransportBuilderForURI(this.getURI()));
            this.setDataSerializer(n("xhrSimpleDataSerializer"));
            this.$12 = n("ResourceTimingsStore").getUID(n("ResourceTypes").XHR, e != null ? e.toString() : "");
        }
        setURI(t) {
            this.$20 = f(t);
            return this;
        }
        getURI() {
            return this.$20;
        }
        setResponseType(t) {
            this.$14 = t;
            return this;
        }
        setMethod(t) {
            this.$7 = t;
            return this;
        }
        getMethod() {
            return this.$7;
        }
        setData(t) {
            this.$2 = t;
            return this;
        }
        getData() {
            return this.$2;
        }
        setRawData(t) {
            this.$11 = t;
            return this;
        }
        setRequestHeader(t, n) {
            this.$6[t] = n;
            return this;
        }
        setTimeout(t) {
            this.$15 = t;
            return this;
        }
        getTimeout() {
            return this.$15;
        }
        setResponseHandler(t) {
            this.$13 = t;
            return this;
        }
        getResponseHandler() {
            return this.$13;
        }
        setErrorHandler(t) {
            this.$5 = t;
            return this;
        }
        getErrorHandler() {
            return this.$5;
        }
        setNetworkFailureHandler(t) {
            this.$8 = t;
            return this;
        }
        getNetworkFailureHandler() {
            return this.$8;
        }
        getResponseHeader(t) {
            const e = this.$9;
            if (e) {
                return e.getResponseHeader(t);
            }
            return null;
        }
        setAbortHandler(t) {
            this.$1 = t;
            return this;
        }
        getAbortHandler() {
            return this.$1;
        }
        setTimeoutHandler(t) {
            this.$16 = t;
            return this;
        }
        getTimeoutHandler() {
            return this.$16;
        }
        setUploadProgressHandler(t) {
            this.$19 = t;
            return this;
        }
        setDownloadProgressHandler(t) {
            this.$4 = t;
            return this;
        }
        setTransportBuilder(t) {
            if (!this.$18 || !n("ZeroRewrites").isRewritten(this.$20)) {
                this.$18 = t;
            } else {
                n("FBLogger")("iorg-FOS").blameToPreviousFile().mustfix("can not set new TransportBuilder for the request %s", String(this.getURI()));
            }
            return this;
        }
        setDataSerializer(t) {
            this.$3 = t;
            return this;
        }
        setWithCredentials(t) {
            this.$21 = t;
            return this;
        }
        send() {
            const t = this;
            const $15 = this.$15;
            const $18 = this.$18;
            if (!$18) {
                return;
            }
            const a = $18();
            const i = this.getURI();
            if (i.toString().includes("/../") || i.toString().includes("/..\\") || i.toString().includes("\\../") || i.toString().includes("\\..\\")) {
                n("Log").error("XHRRequest.send(): path traversal is not allowed.");
                return;
            }
            if (m === true) {
                return;
            }
            const u = new (e || (e = n("URI")))(i).getQualifiedURI().toString();
            const $12 = this.$12;
            n("ResourceTimingsStore").updateURI(n("ResourceTypes").XHR, $12, u);
            n("ResourceTimingsStore").measureRequestSent(n("ResourceTypes").XHR, $12);
            this.$9 = a;
            let d;
            if (!(this.$7 === "POST" || !this.$11)) {
                l(0, 2346, this.$11, i);
            }
            const force_param = (s || (s = n("Env"))).force_param;
            if (force_param) {
                this.$2 = babelHelpers.extends({}, this.getData() || {}, force_param);
            }
            if (this.$7 === "GET" && n("DTSGUtils").shouldAppendToken(i)) {
                const fb_dtsg_ag = n("cr:8960").getCachedToken ? n("cr:8960").getCachedToken() : n("cr:8960").getToken();
                if (fb_dtsg_ag != null && fb_dtsg_ag !== "") {
                    if (this.$2) {
                        this.$2.fb_dtsg_ag = fb_dtsg_ag;
                    } else {
                        this.$2 = {
                            fb_dtsg_ag
                        };
                    }
                    if (n("SprinkleConfig").param_name) {
                        this.$2[n("SprinkleConfig").param_name] = n("DTSGUtils").getNumericValue(fb_dtsg_ag);
                    }
                }
            }
            if (this.$7 === "POST" && n("DTSGUtils").shouldAppendToken(i)) {
                const fb_dtsg = n("cr:8959").getCachedToken ? n("cr:8959").getCachedToken() : n("cr:8959").getToken();
                if (fb_dtsg != null && fb_dtsg !== "") {
                    if (this.$2) {
                        this.$2.fb_dtsg = fb_dtsg;
                    } else {
                        this.$2 = {
                            fb_dtsg
                        };
                    }
                    if (n("SprinkleConfig").param_name) {
                        this.$2[n("SprinkleConfig").param_name] = n("DTSGUtils").getNumericValue(fb_dtsg);
                    }
                }
                if (n("LSD").token != null && n("LSD").token !== "") {
                    if (this.$2) {
                        this.$2.lsd = n("LSD").token;
                    } else {
                        this.$2 = {
                            lsd: n("LSD").token
                        };
                    }
                    if (n("SprinkleConfig").param_name != null && n("SprinkleConfig").param_name !== "" && (fb_dtsg == null || fb_dtsg === "")) {
                        this.$2[n("SprinkleConfig").param_name] = n("DTSGUtils").getNumericValue(n("LSD").token);
                    }
                }
            }
            if (this.$7 === "GET" || this.$11) {
                i.addQueryData(this.$2);
                d = this.$11;
            } else {
                d = this.$3(this.$2);
            }
            function g(e, ...r) {
                n("ResourceTimingsStore").measureResponseReceived(n("ResourceTypes").XHR, $12);
                e.apply(this, r);
            }
            const h = n("TimeSlice").guard(g, "XHRRequest response received", {
                propagationType: n("TimeSlice").PropagationType.CONTINUATION
            });
            a.onreadystatechange = this.$22(h);
            a.onerror = this.$23(h);
            if (a.upload && this.$19) {
                a.upload.onprogress = function(e) {
                    return t.$24(e);
                };
            }
            if (this.$4) {
                a.onprogress = function(e) {
                    return t.$25(e);
                };
            }
            if ($15 != null && $15 !== 0) {
                this.$17 = window.setTimeout(function() {
                    return t.$26();
                }, $15);
            }
            if (this.$21 != null) {
                a.withCredentials = this.$21;
            }
            a.open(this.$7, i.toString(), true);
            let y = false;
            if (this.$6) {
                for(const C in this.$6){
                    if (C.toLowerCase() === "content-type") {
                        y = true;
                    }
                    a.setRequestHeader(C, this.$6[C]);
                }
            }
            if (this.$7 == "POST" && !this.$11 && !y) {
                a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            }
            const b = n("getAsyncHeaders")(i);
            Object.keys(b).forEach((e)=>{
                a.setRequestHeader(e, b[e]);
            });
            if (this.$14 === "arraybuffer") {
                if ("responseType" in a) {
                    a.responseType = "arraybuffer";
                } else if ("overrideMimeType" in a) {
                    a.overrideMimeType("text/plain; charset=x-user-defined");
                } else if ("setRequestHeader" in a) {
                    a.setRequestHeader("Accept-Charset", "x-user-defined");
                }
            }
            if (this.$14 === "blob") {
                a.responseType = this.$14;
            }
            a.send(d);
        }
        abort(t) {
            this.$27();
            if (this.$1) {
                (u || (u = n("ErrorGuard"))).applyWithGuard(this.$1, null, [
                    t
                ], {
                    name: "XHRRequest:_abortHandler"
                });
            }
        }
        $27() {
            const e = this.$9;
            if (e) {
                e.onreadystatechange = null;
                e.abort();
            }
            this.$28();
        }
        $26() {
            this.$27();
            if (this.$16) {
                (u || (u = n("ErrorGuard"))).applyWithGuard(this.$16, null, [], {
                    name: "XHRRequest:_abortHandler"
                });
            }
        }
        $29(t) {
            if (this.$14 != null && this.$14 !== "") {
                if ("response" in t) {
                    return t.response;
                }
                if (this.$14 === "arraybuffer" && window.VBArray) {
                    return window.VBArray(t.responseBody).toArray();
                }
            }
            return t.responseText;
        }
        $23(t) {
            const e = this;
            const r = this.$9;
            return function() {
                const a = {
                    errorCode: n("XHRHttpError").HTTP_TRANSPORT_ERROR,
                    errorMsg: "Network Failure.",
                    errorType: "Network",
                    errorRawResponseHeaders: null,
                    errorRawTransport: r?.constructor?.name,
                    errorRawTransportStatus: 0
                };
                if (e.$8) {
                    (u || (u = n("ErrorGuard"))).applyWithGuard(t.bind(undefined, e.$8), null, [
                        a
                    ], {
                        name: "XHRRequest:_networkFailureHandler"
                    });
                } else {
                    t(function() {});
                }
                n("NetworkStatus").reportError();
            };
        }
        $22(t) {
            const e = this;
            const r = n("TimeSlice").guard(function(e, ...n) {
                return e.apply(this, n);
            }, "XHRRequest onreadystatechange", {
                propagationType: n("TimeSlice").PropagationType.EXECUTION
            });
            return function() {
                const o = e.$9;
                if (o != null) {
                    const a = o.readyState;
                    if (a >= 2) {
                        const i = a === 4;
                        if (i) {
                            ErrorXFBDebug.addFromXHR(o);
                        }
                        const l = e.getURI();
                        let errorCode = n("XHRHttpError").getErrorCode(l, o.status);
                        const m = e.$13;
                        if (errorCode != null) {
                            if (i) {
                                const _ = 119500;
                                if (errorCode === "HTTP_TRANSPORT_ERROR" && e.$10 != null && e.$10 !== 0 && e.$10 + _ < (c || (c = n("performance"))).now()) {
                                    errorCode = "HTTP_STREAM_TIMEOUT";
                                }
                                const f = {
                                    errorCode,
                                    errorMsg: e.$29(o),
                                    errorRawTransport: o.constructor.name,
                                    errorRawTransportStatus: o.status,
                                    errorRawResponseHeaders: m && m.includeHeaders ? o.getAllResponseHeaders() : null,
                                    errorType: o.status ? `HTTP ${o.status}` : "HTTP"
                                };
                                if (e.$5) {
                                    (u || (u = n("ErrorGuard"))).applyWithGuard(t.bind(undefined, e.$5), null, [
                                        f
                                    ], {
                                        name: "XHRRequest:_errorHandler"
                                    });
                                } else {
                                    t(function() {});
                                }
                            }
                        } else if (m) {
                            if (i || m.parseStreaming && a === 3) {
                                const g = i ? t : r;
                                const h = m != null && m.includeHeaders ? o.getAllResponseHeaders() : null;
                                const y = e.$29(o);
                                e.$10 = (c || (c = n("performance"))).now();
                                const C = 200 * 1000 * 1000;
                                if (m.parseStreaming && typeof y === "string" && y.length > C && !p) {
                                    p = true;
                                    n("FBLogger")("comet_infra").mustfix("Streaming reponse exceeding size limits and will OOM soon: %s", String(e.getURI()));
                                }
                                (u || (u = n("ErrorGuard"))).applyWithGuard(g.bind(undefined, m), null, [
                                    y,
                                    h,
                                    i
                                ], {
                                    name: "XHRRequest:handler"
                                });
                            }
                        } else {
                            if (i) {
                                t(function() {});
                            }
                        }
                        if (i) {
                            if (errorCode != "HTTP_TRANSPORT_ERROR") {
                                n("NetworkStatus").reportSuccess();
                            }
                            e.$28();
                        }
                    }
                }
            };
        }
        $24(t) {
            _.loadedBytes = t.loaded;
            _.totalBytes = t.total;
            if (this.$19) {
                (u || (u = n("ErrorGuard"))).applyWithGuard(this.$19, null, [
                    _
                ], {
                    name: "XHRRequest:_uploadProgressHandler"
                });
            }
        }
        $25(t) {
            const e = {
                loadedBytes: t.loaded,
                totalBytes: t.total
            };
            if (this.$4) {
                (u || (u = n("ErrorGuard"))).applyWithGuard(this.$4, null, [
                    e
                ], {
                    name: "XHRRequest:_downloadProgressHandler"
                });
            }
        }
        $28() {
            window.clearTimeout(this.$17);
            this.$9 = null;
        }
        static disable() {
            m = true;
        }
    }
    a.exports = g;
}, null);