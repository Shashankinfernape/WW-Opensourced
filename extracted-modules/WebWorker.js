__d("WebWorker", [
    "invariant",
    "BlobFactory",
    "Bootloader",
    "EventListener",
    "FBLogger",
    "SubscriptionsHandler",
    "URI",
    "WebWorkerConfig",
    "XCometFBMultiSiteWebWorkerInitScriptControllerRouteBuilder",
    "XHRRequest",
    "cr:951783",
    "emptyFunction",
    "err",
    "filterObject",
    "getCrossOriginTransport",
    "getErrorSafe",
    "getWorkerInitScriptSPINParams",
    "gkx",
    "isSameOrigin",
    "justknobx",
    "memoize",
    "nullthrows",
    "performanceNow"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = t.URL || t.webkitURL;
    const d = {
        remove: r("emptyFunction")
    };
    const m = (()=>{
        function o(e) {
            const t = this;
            this.$2 = false;
            this.$3 = null;
            this.$4 = e;
            this.__worker = null;
            this.$5 = r("emptyFunction");
            this.$6 = r("emptyFunction");
            this.$7 = [];
            this.$8 = [];
            this.$9 = false;
            this.$10 = new (r("SubscriptionsHandler"));
            this.$1 = n("cr:951783") !== null ? n("cr:951783")(function() {
                if (!t.$9) {
                    t.terminate();
                }
            }) : d;
            if (r("gkx")("20935")) {
                setTimeout(()=>{
                    if (!t.$9 && !t.isCurrentState("terminated")) {
                        r("FBLogger")("comet_infra").mustfix("WebWorker (resource: %s) allowCrossPageTransitions must be true on Comet, or you must handle cleaning up your worker.", e.name);
                    }
                }, 1000);
            }
            this.$11("constructed");
        }
        const a = o.prototype;
        a.setMessageHandler = function(t) {
            this.$5 = t || r("emptyFunction");
            return this;
        };
        a.setErrorHandler = function(t) {
            this.$6 = t || r("emptyFunction");
            return this;
        };
        a.postMessage = function(t, n) {
            if (this.isCurrentState("constructed")) {
                s(0, 5977);
            }
            if (this.isCurrentState("terminated")) {
                s(0, 5978);
            }
            if (this.isCurrentState("preparing")) {
                this.$7.push(this.postMessage.bind(this, t, n));
                return this;
            }
            const e = {
                type: "message",
                message: t
            };
            if (n) {
                this.getInterfaceableWorker().postMessage(e, n);
            } else {
                this.getInterfaceableWorker().postMessage(e);
            }
            return this;
        };
        a.$12 = function() {
            if (!this.isCurrentState("terminated")) {
                this.$11("terminated");
                this.__worker = null;
                this.$13();
                this.$7 = [];
                this.$8 = [];
                if (this.$1 && this.$1.remove) {
                    this.$1.remove();
                }
            }
        };
        a.terminate = function() {
            if (this.isCurrentState("executing") && this.__worker != null) {
                this.__worker.terminate();
            }
            this.$12();
        };
        a.execute = function() {
            const e = this;
            if (this.isCurrentState("terminated")) {
                s(0, 5979);
            }
            const t = [
                "preparing",
                "executing"
            ];
            if (t.some((t)=>e.isCurrentState(t))) {
                return this;
            }
            this.$11("preparing");
            o.prepareResource(this.$4, this.$14.bind(this));
            return this;
        };
        a.setAllowCrossPageTransition = function(t) {
            if (r("gkx")("20935") && !t) {
                r("FBLogger")("comet_infra").mustfix("allowAcrossPageTransitions must be true because we dont kill these in Comet.");
            }
            this.$9 = t;
            return this;
        };
        a.isCurrentState = function(t) {
            if (!o.states.includes(t)) {
                s(0, 5980, t);
            }
            return t === this.$3;
        };
        a.$14 = function() {
            if (this.isCurrentState("executing")) {
                s(0, 5981);
            }
            if (!this.isCurrentState("terminated")) {
                if (!(this.$4.useInitScript && r("gkx")("21112") || this.$4.sameOriginURL || this.$4.source)) {
                    s(0, 19837, this.$4.name);
                }
                if (this.$4.useInitScript && r("gkx")("21112")) {
                    const t = r("nullthrows")(r("XCometFBMultiSiteWebWorkerInitScriptControllerRouteBuilder").buildUri({}).addQueryParams(r("getWorkerInitScriptSPINParams")())?.toString());
                    const n = new window.URL(this.$4.url, window.location.href).href;
                    if (n == null) {
                        throw r("err")("Can't start up worker without a resource url.");
                    }
                    this.__worker = this.constructWorker(t, this.$4.name);
                    this.__worker.postMessage({
                        bundleUrl: n,
                        doNotStartBundle: true,
                        isDev: false,
                        resource: this.$4,
                        type: "sr-init"
                    });
                } else {
                    if (this.$4.sameOriginURL) {
                        this.__worker = this.constructWorker(this.$4.sameOriginURL);
                    } else {
                        this.__worker = this.constructWorker(o.evalWorkerURL);
                        this.getInterfaceableWorker().postMessage(this.$4.source);
                    }
                }
                this.$15("ping", Date.now());
                if (this.$4.dynamicModules) {
                    try {
                        this.$15("defineModules", this.$4.dynamicModules);
                    } catch (e) {
                        this.terminate();
                        this.$16("define_error", {
                            message: r("getErrorSafe")(e).message
                        });
                        throw e;
                    }
                }
                this.$17();
                this.$11("executing");
                this.$7.forEach((e)=>e());
                this.$7 = [];
                this.$8.forEach((e)=>e());
                this.$8 = [];
            }
        };
        a.$13 = function() {
            this.$10.release();
        };
        a.$15 = function(t, ...n) {
            this.getInterfaceableWorker().postMessage({
                type: t,
                args: n
            });
        };
        a.$16 = function(t, n) {
            const e = !(this.$4.useInitScript && r("gkx")("21112"));
            o.$18(t, this.$4.name, babelHelpers.extends({}, n, {
                cross_page_transition: !!this.$9,
                state: this.$3
            }), e);
        };
        o.$19 = function(t) {
            return Object.keys(r("filterObject")({
                object_url: t && o.$20(),
                data_url: t && o.$21(),
                worker: o.isSupported()
            }, function(e) {
                return !!e;
            }));
        };
        a.$17 = function() {
            this.$10.addSubscriptions(r("EventListener").listen(this.getInterfaceableWorker(), "message", this.$22.bind(this)), r("EventListener").listen(this.getInterfaceableWorker(), "error", this.$23.bind(this)));
        };
        a.$23 = function(t) {
            const e = this.$6(t);
            if (!e && !t.defaultPrevented) {
                this.$16("exception", {
                    message: t.message
                });
            }
        };
        a.$22 = function({ data: e }) {
            switch(e.type){
                case "message":
                    this.$5(e.message);
                    break;
                case "pong":
                    this.$2 = true;
                    this.$16("executed", {
                        dt: Math.floor(e.args[1] - e.args[0]),
                        bytes: this.$4.source ? this.$4.source.length : -1
                    });
                    break;
                case "terminate":
                    this.terminate();
                    break;
                case "haste-error":
                    this.terminate();
                    this.$16("haste_error", {
                        message: e.message
                    });
                    break;
                case "console":
                    const r = e.args.shift();
                    if (![
                        "log",
                        "error",
                        "info",
                        "debug",
                        "warn"
                    ].includes(r)) {
                        s(0, 5983, r);
                    }
                    t.console[r].apply(t.console, e.args);
                    break;
            }
        };
        a.$11 = function(t) {
            if (!o.states.includes(t)) {
                s(0, 5984, t);
            }
            this.$16("transition", {
                next_state: t
            });
            this.$3 = t;
        };
        o.prepareResource = function(a, i = r("emptyFunction")) {
            if (!(a.sameOriginURL || a.url || a.source)) {
                s(0, 5985);
            }
            if (!o.isSupported()) {
                s(0, 5986);
            }
            if (a.sameOriginURL) {
                i();
            } else if (a.url && r("isSameOrigin")(new (e || (e = r("URI")))(a.url), new (e || (e = r("URI")))(t.location.href))) {
                a.sameOriginURL = a.url;
                i();
            } else if (a.source) {
                if (r("justknobx")._("819")) {
                    r("FBLogger")("static_resources").warn("trying to instantiate blob/data Url Worker %s %s", a.name, a.url);
                }
                if (o.$24()) {
                    a.sameOriginURL = o.$25(a.source);
                }
                i();
            } else if (r("gkx")("21112") && a.useInitScript === true) {
                i();
            } else {
                if (r("justknobx")._("819")) {
                    r("FBLogger")("static_resources").warn("trying to instantiate blob/data Url Worker %s %s", a.name, a.url);
                }
                if (a.loading) {
                    a.loading.push(i);
                } else {
                    const n = (u || (u = r("performanceNow")))();
                    a.loading = [
                        i
                    ];
                    o.$26(a.url, function(e) {
                        if (e) {
                            a.source = e;
                            if (o.$24()) {
                                a.sameOriginURL = o.$25(e);
                            }
                            o.$18("prepared", a.name, {
                                dt: Math.floor((u || (u = r("performanceNow")))() - n),
                                bytes: e.length
                            }, false);
                        } else {
                            o.$18("failed", a.name, {
                                dt: Math.floor((u || (u = r("performanceNow")))() - n),
                                bytes: 0
                            }, false);
                        }
                        a.loading.forEach((e)=>e());
                        a.loading = false;
                    });
                }
            }
            return a;
        };
        o.releaseResource = function(t) {
            if (t.sameOriginURL.indexOf("blob:") === 0) {
                if (c.revokeObjectURL) {
                    c.revokeObjectURL(t.sameOriginURL);
                }
                t.sameOriginURL = null;
            }
            return t;
        };
        o.isSupported = function() {
            return g;
        };
        o.isMessageChannelSupported = function() {
            return o.areTransferablesSupported() && !!t.MessageChannel;
        };
        o.areTransferablesSupported = function() {
            return o.isSupported() && h();
        };
        o.$26 = function(t, n) {
            new (r("XHRRequest"))(t).setTransportBuilder(r("getCrossOriginTransport")).setMethod("GET").setResponseHandler(function(e) {
                n(e);
            }).setErrorHandler(n.bind(null, null)).send();
        };
        o.$25 = function(t) {
            if (!o.$24()) {
                s(0, 5987);
            }
            if (o.$20()) {
                const e = r("BlobFactory").getBlob([
                    t
                ], {
                    type: "application/javascript"
                });
                return c.createObjectURL(e);
            }
            if (o.$21()) {
                return `data:application/javascript,${encodeURIComponent(t)}`;
            }
        };
        o.$20 = function() {
            return r("BlobFactory").isSupported() && _();
        };
        o.$21 = function() {
            return f();
        };
        o.$24 = function() {
            return o.$20() || o.$21();
        };
        o.$18 = function(t, n, a, i) {
            if (r("WebWorkerConfig").logging.enabled) {
                r("Bootloader").loadModules([
                    "BanzaiLogger"
                ], function(e) {
                    e.log(r("WebWorkerConfig").logging.config, babelHelpers.extends({}, a, {
                        features_array: o.$19(i),
                        event: t,
                        resource: n
                    }));
                }, "WebWorker");
            }
        };
        a.constructWorker = function(t, n) {
            return p(t, n);
        };
        a.$27 = function(t, n) {
            if (this.isCurrentState("preparing")) {
                this.$8.push(this.$27.bind(this, t, n));
                return;
            }
            this.getInterfaceableWorker().postMessage({
                type: "port",
                message: t
            }, n);
        };
        a.createMessageChannel = function(t, n) {
            const e = new MessageChannel;
            this.$27(t, [
                e.port2
            ].concat(n || []));
            e.port1.start();
            return e.port1;
        };
        a.getInterfaceableWorker = function() {
            return this.__worker;
        };
        return o;
    })();
    m.states = [
        "constructed",
        "preparing",
        "executing",
        "terminated"
    ];
    m.evalWorkerURL = r("WebWorkerConfig").evalWorkerURL;
    function p(e, n) {
        return new t.Worker(e, n != null ? {
            name: n
        } : {});
    }
    var _ = r("memoize")(function() {
        let e;
        let t;
        if (!c || !c.createObjectURL) {
            return false;
        }
        try {
            e = c.createObjectURL(r("BlobFactory").getBlob([
                ""
            ], {
                type: "application/javascript"
            }));
            const n = p(e);
            n.terminate();
            t = true;
        } catch (e) {
            t = false;
        } finally{
            if (c.revokeObjectURL) {
                c.revokeObjectURL(e);
            }
        }
        return t;
    });
    var f = r("memoize")(function() {
        let e;
        try {
            const t = p("data:application/javascript,");
            t.terminate();
            e = true;
        } catch (t) {
            e = false;
        }
        return e;
    });
    var g = !!t.Worker;
    var h = r("memoize")(function() {
        let e;
        try {
            const t = p(m.evalWorkerURL);
            const n = new ArrayBuffer(0);
            t.postMessage({
                buffer: n
            }, [
                n
            ]);
            t.terminate();
            e = true;
        } catch (t) {
            e = false;
        }
        return e;
    });
    l.default = m;
}, 98);