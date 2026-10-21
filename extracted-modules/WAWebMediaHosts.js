__d("WAWebMediaHosts", [
    "Promise",
    "WAAbortError",
    "WALogger",
    "WAMemoizeConcurrent",
    "WAWebBackendErrors",
    "WAWebMediaHost",
    "WAWebMediaHostsErrors",
    "WAWebMediaHostsRawStateManager",
    "WAWebMediaHostsRouteSelection",
    "WAWebMediaHostsStaleness",
    "WAWebNormalizeStack",
    "WAWebQueryMediaConnsBridge",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "isEmptyObject"
], function(t, n, r, o, a, i, l) {
    const e = [
        "forceRefresh"
    ];
    const s = [
        "message",
        "name",
        "stack"
    ];
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    const f = (()=>{
        function t() {
            const e = this;
            this.$4 = false;
            this.$9 = r("WAMemoizeConcurrent")(function() {
                return "all";
            }, (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ signal }) {
                    try {
                        const i = yield o("WAWebQueryMediaConnsBridge").sendQueryMediaConn(signal);
                        e.$1 = e.$8(i);
                        o("WAWebUserPrefsMultiDevice").setMms4Conn(i);
                        o("WAWebMediaHostsRawStateManager").mediaHostsRawStateManager.set(i);
                        e.$3 = null;
                    } catch (error) {
                        const l = r("getErrorSafe")(error);
                        if (l instanceof o("WAWebBackendErrors").E507) {
                            e.$1 = e.$2;
                            e.$2 = null;
                            e.$4 = true;
                            self.setTimeout(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                                yield e.$6({
                                    signal
                                });
                                e.$4 = false;
                            }), l.backoff ?? undefined);
                            return;
                        }
                        e.$1 = null;
                        e.$3 = l;
                        if (l.name === o("WAAbortError").ABORT_ERROR) {
                            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "mediaHosts.sendQueryMediaConn aborted"
                            ])));
                            return;
                        }
                        o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "mediaHosts.sendQueryMediaConn error: ",
                            ""
                        ])), h(l)).verbose();
                        o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "Assertion failed!"
                        ]))).sendLogs("Error fetching mms hosts");
                    }
                });
                return function(e) {
                    return t.apply(this, arguments);
                };
            })());
            this.$5();
        }
        const t_prototype = t.prototype;
        t_prototype.forceRefresh = function(t) {
            if (this.$4) {
                return (_ || (_ = n("Promise"))).resolve(false);
            }
            const e = {
                signal: t,
                forceRefresh: true
            };
            return this.$6(e);
        };
        t_prototype.getCachedHostsInfo = function(t) {
            const e = this;
            if (!this.$4) {
                const r = {
                    signal: t.signal || new AbortController().signal,
                    forceRefresh: false
                };
                self.setTimeout(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    yield e.$6(r);
                    e.$4 = false;
                }), 0);
            }
            return this.$7(t);
        };
        t_prototype.maybeLoadMediaConnFromStorage = function() {
            const e = o("WAWebUserPrefsMultiDevice").getMms4Conn();
            if (e != null) {
                try {
                    this.$1 = this.$8(e);
                    o("WAWebMediaHostsRawStateManager").mediaHostsRawStateManager.set(e);
                } catch (error) {
                    o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to init media conn from storage"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("media-conn-failed-to-load");
                }
            }
        };
        t_prototype.getHostsInfo = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ directPath, encFilehash, forceRefresh = false, operation, signal, type }) {
                if (!this.$4) {
                    const s = {
                        signal: signal || new AbortController().signal,
                        forceRefresh
                    };
                    yield this.$6(s);
                }
                return this.$7({
                    directPath,
                    encFilehash,
                    operation,
                    type
                });
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.getHostsInfoByBucket = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ forceRefresh = false, preferredBuckets, signal }) {
                if (!this.$4) {
                    const i = {
                        signal: signal || new AbortController().signal,
                        forceRefresh
                    };
                    yield this.$6(i);
                }
                if (!this.$1) {
                    throw new (o("WAWebMediaHostsErrors")).NoMediaHostsError("no fetched data");
                }
                const l = this.$1;
                const { auth, hosts } = l;
                if (!hosts.length) {
                    throw new (o("WAWebMediaHostsErrors")).NoMediaHostsError("no selected host");
                }
                const c = new Map(preferredBuckets.map((e)=>[
                        e,
                        null
                    ]));
                hosts.forEach((e)=>{
                    const n = e.downloadBuckets?.find(function(e) {
                        return c.has(e);
                    });
                    if (n != null) {
                        c.set(n, e);
                    }
                });
                let selectedHost;
                let fallbackHost;
                for (const p of c.values()){
                    if (p != null) {
                        if (!selectedHost) {
                            selectedHost = p;
                        } else if (!fallbackHost) {
                            fallbackHost = p;
                            break;
                        }
                    }
                }
                if (!selectedHost && !fallbackHost) {
                    selectedHost = hosts[0];
                    fallbackHost = hosts[1];
                } else if (!fallbackHost) {
                    fallbackHost = hosts[0];
                }
                if (!selectedHost) {
                    throw new (o("WAWebMediaHostsErrors")).NoMediaHostsError("no selected host");
                }
                return {
                    auth,
                    selectedHost,
                    fallbackHost
                };
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$8 = function(t) {
            const queryStartTime = new Date(t.queryStartTime);
            return {
                auth: t.auth,
                authExpirationTime: new Date(queryStartTime.getTime() + t.authTTL),
                authTTL: t.authTTL,
                hosts: t.hosts.map((e)=>new (o("WAWebMediaHost")).MediaHost(e)),
                hostsRefreshTime: new Date(queryStartTime.getTime() + t.ttl),
                queryStartTime,
                maxBuckets: t.maxBuckets
            };
        };
        t_prototype.$10 = function() {
            return o("WAWebMediaHostsStaleness").isExpiredOrMissing(this.$1);
        };
        t_prototype.$7 = function(t) {
            if (!this.$1) {
                throw new (o("WAWebMediaHostsErrors")).NoMediaHostsError("no fetched data");
            }
            const { encFilehash, operation, type } = t;
            const a = this.$1;
            const { auth, hosts, maxBuckets } = a;
            const u = o("WAWebMediaHostsRouteSelection").routeSelection({
                encFilehash,
                hosts,
                operation,
                type,
                maxBuckets
            });
            const { fallbackHost, selectedHost } = u;
            if (!selectedHost) {
                throw new (o("WAWebMediaHostsErrors")).NoMediaHostsError("no selected host");
            }
            return {
                auth,
                selectedHost,
                fallbackHost
            };
        };
        t_prototype.$11 = function() {
            return o("WAWebMediaHostsStaleness").needsRefresh(this.$1);
        };
        t_prototype.$6 = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const t_forceRefresh = t.forceRefresh;
                const r = babelHelpers.objectWithoutPropertiesLoose(t, e);
                if (this.$10() || t_forceRefresh) {
                    this.$5();
                    yield this.$9(r);
                    return true;
                }
                if (this.$11()) {
                    this.$9(r).catch(()=>{
                        o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "[media-hosts] failed to refresh and fetch"
                        ]))).sendLogs("media-hosts-failed-to-refresh-and-fetch", {
                            sampling: 0.01
                        });
                    });
                }
                return false;
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        t_prototype._reset = function() {
            this.$5();
        };
        t_prototype.$5 = function() {
            this.$2 = this.$1;
            this.$1 = null;
            this.$3 = null;
        };
        return t;
    })();
    const g = new f;
    function h(e) {
        const { message, name, stack } = e;
        const i = babelHelpers.objectWithoutPropertiesLoose(e, s);
        const l = o("WAWebNormalizeStack").normalizeStack(e);
        const u = l.slice(l.indexOf("\n") + 1);
        const c = r("isEmptyObject")(i) ? "" : ` ${JSON.stringify(i, function(e, t) {
            if (e && typeof t === "object") {
                return String(t);
            }
            return t;
        })}`;
        return `${e.name || "Error"}: ${e.message}${c}
${u}`;
    }
    l.mediaHosts = g;
}, 98);