__d("BootloaderEndpoint", [
    "AdsManagerReadRegions",
    "Bootloader",
    "BootloaderEndpointConfig",
    "BootloaderEvents",
    "CSRFGuard",
    "FBLogger",
    "HasteResponse",
    "TimeSlice",
    "clearImmediate",
    "fb-error",
    "getAsyncParams",
    "getSameOriginTransport",
    "gkx",
    "performanceAbsoluteNow",
    "setImmediateAcrossTransitions"
], function(t, n, r, o, a, i) {
    "use strict";
    let e;
    const ErrorXFBDebug = n("fb-error").ErrorXFBDebug;
    const endpointURI = n("BootloaderEndpointConfig").endpointURI;
    let u = 0;
    let c = null;
    let d = null;
    let m = new Map;
    let p = new Map;
    function _(e, t, n) {
        return {
            requestStart: e,
            responseStart: t,
            serverGenTime: 0,
            uri: n,
            source: "bootloader_endpoint",
            sourceDetail: "Invalid response",
            isFirstIdentical: false,
            timesliceContext: null,
            startTime: e,
            logTime: t,
            jsmodsStart: t,
            jsmodsEnd: t,
            rsrcs: {
                blocking: new Map,
                nonblocking: new Map,
                default: new Map
            },
            payloadStats: {
                hsdp: {
                    entry: 0,
                    dup_entry: 0
                },
                hblp: {
                    rsrc: 0,
                    dup_rsrc: 0,
                    comp: 0,
                    dup_comp: 0
                },
                sjsp: {
                    define: 0,
                    dup_user_define: 0,
                    dup_system_define: 0,
                    require: 0
                }
            }
        };
    }
    function f(t, r, o, a, i) {
        if (n("gkx")("5163")) {
            const l = (e || (e = n("performanceAbsoluteNow")))();
            for (const s of [
                t,
                r
            ]){
                for (const [c, d] of s.entries()){
                    n("Bootloader").done(d);
                    n("Bootloader").beDone(c, o, _(a, l, i));
                }
            }
        }
    }
    function g(e) {
        return Array.from(e.keys()).join(",");
    }
    function _getURL(e, t) {
        const r = {};
        if (e.size) {
            r.modules = g(e);
        }
        if (t.size) {
            r.nb_modules = g(t);
        }
        const o = Object.entries(babelHelpers.extends({}, r, n("getAsyncParams")("GET"))).map(([t, n])=>`${encodeURIComponent(t)}=${encodeURIComponent(String(n))}`).join("&");
        return endpointURI + (endpointURI.includes("?") ? "&" : "?") + o;
    }
    function y(e, blockingMods, nonblockingMods) {
        const o = e.getAllResponseHeaders();
        const errorMID = o.indexOf("error-mid") >= 0 ? e.getResponseHeader("error-mid") : null;
        if (errorMID != null) {
            for (const i of [
                blockingMods,
                nonblockingMods
            ]){
                for (const [module, hash] of i.entries()){
                    n("BootloaderEvents").notifyBootloadEndpointError({
                        module,
                        hash,
                        errorMID,
                        blockingMods,
                        nonblockingMods
                    });
                }
            }
        }
        return errorMID;
    }
    function C(status, responseText) {
        if (status !== 200) {
            return null;
        }
        try {
            return JSON.parse(n("CSRFGuard").clean(responseText));
        } catch (e) {
            return null;
        }
    }
    function _sendRequest(t, r) {
        if (!(t.size === 0 && r.size === 0)) {
            let o = BootloaderEndpoint._getURL(t, r);
            if (shouldRouteToAMReadRegions(o)) {
                o += "&ads_manager_read_regions=true";
            }
            const a = n("getSameOriginTransport")();
            const i = u++;
            const s = (e || (e = n("performanceAbsoluteNow")))();
            a.open("GET", o, true);
            const c = n("TimeSlice").getGuardedContinuation("Bootloader _requestHastePayload");
            a.onreadystatechange = function() {
                if (a.readyState === 4) {
                    c(function() {
                        ErrorXFBDebug.addFromXHR(a);
                        const e = C(a.status, a.responseText);
                        if (e == null) {
                            f(t, r, i, s, o);
                            const u = y(a, t, r);
                            let c = n("FBLogger")("bootloader");
                            if (u != null) {
                                c = c.addMetadata("OPES", "MID", u);
                                c.addToCategoryKey(u);
                            }
                            c.warn('Invalid bootloader response %s; blocking mods: %s; non-blocking mods: %s; opes mid: %s; "%s"', a.status, g(t), g(r), u ?? "none", a.responseText.substr(0, 256));
                            return;
                        }
                        if (e.error) {
                            n("FBLogger")("bootloader").warn("Non-fatal error from bootloader endpoint, blocking mods: %s; non-blocking mods: %s", g(t), g(r));
                        } else if (e.__error) {
                            f(t, r, i, s, o);
                            const d = y(a, t, r);
                            let m = n("FBLogger")("bootloader");
                            if (d != null) {
                                m = m.addMetadata("OPES", "MID", d);
                                m.addToCategoryKey(d);
                            }
                            m.warn("Fatal error from bootloader endpoint, blocking mods: %s; non-blocking mods: %s; opes mid: %s", g(t), g(r), d ?? "none");
                            return;
                        }
                        n("TimeSlice").guard(function() {
                            return v(o, e, t, r, i, s);
                        }, "Bootloader receiveEndpointData", {
                            propagationType: n("TimeSlice").PropagationType.CONTINUATION
                        })();
                    });
                }
            };
            a.send();
        }
    }
    function v(t, r, o, a, i, requestStart) {
        const responseStart = (e || (e = n("performanceAbsoluteNow")))();
        const r_serverGenTime = r.serverGenTime;
        let r_hrp = r.hrp;
        if (r_hrp == null) {
            const d = r;
            n("FBLogger")("be_null_hrp").mustfix("Found null hrp, blocking mods: %s; non-blocking mods: %s; response error: %s", g(o), g(a), `${d.error}, summary: ${d.errorSummary}, description: ${d.errorDescription}`);
            r_hrp = d;
        }
        n("HasteResponse").handle(r_hrp, {
            source: "bootloader_endpoint",
            sourceDetail: JSON.stringify({
                b: Array.from(o.keys()),
                n: Array.from(a.keys())
            }),
            onBlocking: function() {
                for (const e of [
                    o,
                    a
                ]){
                    for (const t of e.values()){
                        n("Bootloader").done(t);
                    }
                }
            },
            onLog: function(r) {
                for (const e of [
                    o,
                    a
                ]){
                    for (const c of e.keys()){
                        n("Bootloader").beDone(c, i, babelHelpers.extends({
                            requestStart,
                            responseStart,
                            serverGenTime: r_serverGenTime,
                            uri: t
                        }, r));
                    }
                }
            }
        });
    }
    function S() {
        const e = m;
        const t = p;
        n("clearImmediate")(d);
        d = null;
        c = null;
        m = new Map;
        p = new Map;
        _sendRequest(e, t);
    }
    function R() {
        const maxBatchSize = n("BootloaderEndpointConfig").maxBatchSize;
        if (maxBatchSize <= 0) {
            return false;
        }
        return m.size + p.size >= maxBatchSize;
    }
    var BootloaderEndpoint = {
        load: function(t, r, o) {
            (r ? m : p).set(t, o);
            if (n("BootloaderEndpointConfig").debugNoBatching || R()) {
                S();
                return;
            }
            if (d == null) {
                c = n("TimeSlice").getGuardedContinuation("Schedule async batch request: Bootloader._loadResources");
                d = n("setImmediateAcrossTransitions")(function() {
                    if (c) {
                        c(function() {
                            return S();
                        });
                    }
                });
            }
        },
        forceFlush: function() {
            if (c) {
                c(function() {
                    return S();
                });
            }
        },
        _getURL,
        _sendRequest
    };
    function shouldRouteToAMReadRegions(e) {
        return !!(window.location.host.includes("adsmanager") && !n("AdsManagerReadRegions").excluded_endpoints.some((t)=>e.includes(t)) && n("BootloaderEndpointConfig").adsManagerReadRegions);
    }
    a.exports = {
        BootloaderEndpoint,
        shouldRouteToAMReadRegions
    };
}, null);