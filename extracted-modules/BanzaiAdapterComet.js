__d("BanzaiAdapterComet", [
    "BanzaiConfig",
    "BanzaiConsts",
    "BanzaiStorage",
    "BaseEventEmitter",
    "ExecutionEnvironment",
    "FBLogger",
    "HasteBitMapName",
    "JSScheduler",
    "NetworkStatus",
    "QueryString",
    "Run",
    "SiteData",
    "StaticSiteData",
    "URI",
    "UserAgent",
    "ZeroRewrites",
    "getAsyncHeaders",
    "getAsyncParams",
    "gkx",
    "objectValues",
    "once",
    "vulture"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d = [];
    const m = new (r("BaseEventEmitter"));
    const p = "/ajax/bz";
    const _ = "POST";
    var f = {
        cleanup: function() {
            const e = d;
            d = [];
            e.forEach((e)=>{
                if (e.readyState < 4) {
                    e.abort();
                }
            });
        },
        config: r("BanzaiConfig"),
        getEndPointUrl: function(t) {
            const e = r("getAsyncParams")(_);
            r("objectValues")(r("HasteBitMapName")).forEach((t)=>delete e[t]);
            delete e[r("StaticSiteData").jsmod_key];
            e.ph = r("SiteData").push_phase;
            let n = p;
            if (r("gkx")("23403")) {
                n = "/a/bz";
            } else if (r("gkx")("23404")) {
                n = "/ajax/bnzai";
            } else if (r("gkx")("4070")) {
                n = "/a/fl";
            }
            const o = r("QueryString").appendToUrl(n, e);
            if (o.length > 2000) {
                throw r("FBLogger")("comet_infra").mustfixThrow("url is too long: ${url}");
            }
            return o;
        },
        getStorage: function() {
            return r("BanzaiStorage");
        },
        inform: function(t) {
            if (Array.isArray(t)) {
                t.forEach((e)=>m.emit(e));
            } else {
                m.emit(t);
            }
        },
        isOkToSendViaBeacon: function() {
            return false;
        },
        onUnload: function(t) {
            r("vulture")("KxOYlTFTaUVS_S60GlVvR2mm4Lg=");
            o("Run").onAfterUnload(t);
        },
        preferredCompressionMethod: r("once")(function() {
            return "deflate";
        }),
        readyToSend: function() {
            return r("UserAgent").isBrowser("IE <= 8") || navigator.onLine;
        },
        send: function(n, o, a, i) {
            let t;
            const l = f.getEndPointUrl(false);
            let m = r("ZeroRewrites").rewriteURI(new (e || (e = r("URI")))(l));
            if ((s || (s = r("ExecutionEnvironment"))).isInWorker) {
                m = m.getQualifiedURI();
            }
            const p = r("ZeroRewrites").getTransportBuilderForURI(m)();
            p.open(_, m.toString(), true);
            Object.entries(r("getAsyncHeaders")(m)).forEach(([t, n])=>{
                p.setRequestHeader(t, n);
            });
            if (i === true) {
                p.onreadystatechange = function() {
                    if (p.readyState >= 4) {
                        const e = d.indexOf(p);
                        if (e >= 0) {
                            d.splice(e, 1);
                        }
                        let t;
                        try {
                            t = p.status;
                        } catch (e) {
                            t = 0;
                        }
                        if (t === 200) {
                            if (o) {
                                o();
                            }
                            r("NetworkStatus").reportSuccess();
                        } else {
                            if (a) {
                                a(t);
                            }
                            r("NetworkStatus").reportError();
                        }
                    }
                };
            } else {
                p.onreadystatechange = function() {
                    (u || (u = r("JSScheduler"))).scheduleNormalPriCallback(function() {
                        if (p.readyState >= 4) {
                            const e = d.indexOf(p);
                            if (e >= 0) {
                                d.splice(e, 1);
                            }
                            let t;
                            try {
                                t = p.status;
                            } catch (e) {
                                t = 0;
                            }
                            if (t === 200) {
                                if (o) {
                                    o();
                                }
                                r("NetworkStatus").reportSuccess();
                                f.inform((c || (c = r("BanzaiConsts"))).OK);
                            } else {
                                if (a) {
                                    a(t);
                                }
                                r("NetworkStatus").reportError();
                                f.inform((c || (c = r("BanzaiConsts"))).ERROR);
                            }
                        }
                    });
                };
            }
            d.push(p);
            if (r("NetworkStatus").isOnline()) {
                p.send(n);
            } else {
                t = r("NetworkStatus").onChange(function({ online }) {
                    if (online) {
                        p.send(n);
                        t.remove();
                    }
                });
            }
        },
        setHooks: function() {},
        setUnloadHook: function(t) {
            o("Run").onAfterUnload(t._unload);
        },
        subscribe: function(t, n) {
            if (Array.isArray(t)) {
                const e = [];
                t.forEach((t)=>e.push(m.addListener(t, n)));
                return {
                    remove: function() {
                        e.forEach((e)=>e.remove());
                    }
                };
            } else {
                return m.addListener(t, n);
            }
        },
        useBeacon: false,
        wrapInTimeSlice: function(t, n) {
            r("FBLogger")("banzai").mustfix("wrapInTimeSlice is not implemented");
            return function() {};
        }
    };
    l.default = f;
}, 98);