__d("CometAddInlineTiming", [
    "CometQPLPayloadStore",
    "InteractionTracingMetrics",
    "performance",
    "performanceNavigationStart",
    "qplAnnotationsIntServerJS",
    "qplTagServerJS",
    "qplTimingsServerJS",
    "vc-tracker"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = r("performanceNavigationStart")();
    let u = null;
    function c() {
        if (u != null) {
            return u;
        }
        const t = new Map;
        if (typeof (e || (e = r("performance"))).getEntriesByType === "function") {
            const n = (e || (e = r("performance"))).getEntriesByType("resource");
            n.forEach((e)=>{
                const n = r("vc-tracker").trimHash(e.name);
                t.set(n, e);
            });
        }
        u = t;
        return u;
    }
    function d(e) {
        const n = window ?? self;
        const o = n && n._qplInl && typeof n._qplInl === "object" && n._qplInl.getPoints && typeof n._qplInl.getPoints === "function";
        if (o) {
            const a = n._qplInl.getPoints().client;
            if (a) {
                Object.keys(a).forEach((t)=>{
                    r("qplTimingsServerJS")(e, t, a[t]);
                });
            }
        }
    }
    function m(t, n, a, i = "") {
        d(n);
        const l = c();
        const u = r("qplTimingsServerJS")();
        if (u != null) {
            const m = u[n];
            const _ = o("CometQPLPayloadStore").getPayloadBytesSent();
            let f = 0;
            let g = 0;
            let h;
            const y = typeof (e || (e = r("performance"))).getEntriesByType === "function" ? (e || (e = r("performance"))).getEntriesByType("navigation") : null;
            if (m) {
                const C = {};
                Object.keys(m).forEach((e)=>{
                    const n = m[e] - s;
                    const o = {};
                    if (_ && _[e]) {
                        const l = _[e];
                        const u = l[0];
                        const c = l[1];
                        if (u != null) {
                            o.bytes = u;
                            f += u;
                        }
                        if (c != null) {
                            o.bytesCompressed = c;
                            g += c;
                        }
                    }
                    if (e.indexOf("ssr_") === 0) {
                        r("InteractionTracingMetrics").addMarkerPoint(t, i + e, "AppTiming", n, o);
                    } else {
                        C[e] = {
                            data: o,
                            end: n,
                            payloadType: e.indexOf("adp_") === 0 ? "RelayPreloader" : "TierFlush",
                            pkgStat: {
                                css: {
                                    cacheCount: 0,
                                    cacheRate: 0,
                                    decodedBodySize: 0,
                                    encodedBodySize: 0,
                                    totalCount: 0,
                                    transferSize: 0
                                },
                                js: {
                                    cacheCount: 0,
                                    cacheRate: 0,
                                    decodedBodySize: 0,
                                    encodedBodySize: 0,
                                    totalCount: 0,
                                    transferSize: 0
                                }
                            },
                            points: {
                                InlineInit: n
                            },
                            start: a
                        };
                        if (h == null || h.start < n) {
                            h = C[e];
                        }
                    }
                });
                if (y && y[0]) {
                    const b = y[0];
                    const { decodedBodySize, encodedBodySize, transferSize } = b;
                    r("InteractionTracingMetrics").addMetadata(t, `${i}encodedBodySize`, encodedBodySize);
                    r("InteractionTracingMetrics").addMetadata(t, `${i}decodedBodySize`, decodedBodySize);
                    r("InteractionTracingMetrics").addMetadata(t, `${i}transferSize`, transferSize);
                    if (h != null && h.data.bytes == null) {
                        h.data.bytes = decodedBodySize - f;
                        h.data.bytesCompressed = encodedBodySize - g;
                    }
                }
                const L = u[`${n}-server`];
                if (L) {
                    const k = ((e || (e = r("performance"))) == null ? undefined : (e || (e = r("performance"))).timing) || {};
                    let I = s;
                    const T = L.earlyFlush ?? L.earlyFlushEnd;
                    if (k.requestStart && k.responseStart && T) {
                        I = (k.requestStart + k.responseStart - T) / 2;
                    }
                    r("InteractionTracingMetrics").addAnnotationDouble(t, `${i}client_startTime_for_offset`, I);
                    r("InteractionTracingMetrics").addAnnotationDouble(t, `${i}client_nav_start`, s);
                    r("InteractionTracingMetrics").addAnnotationDouble(t, `${i}navTiming_requestStart`, k.requestStart);
                    r("InteractionTracingMetrics").addAnnotationDouble(t, `${i}navTiming_responseStart`, k.responseStart);
                    r("InteractionTracingMetrics").addAnnotationDouble(t, `${i}server_earlyFlush_for_offset_raw`, T);
                    r("InteractionTracingMetrics").addAnnotationDouble(t, `${i}server_requestStart`, I - s);
                    const D = {};
                    Object.keys(L).forEach((e)=>{
                        const n = L[e] + I - s;
                        if (e.endsWith("Start")) {
                            const o = e.slice(0, -5);
                            if (D[o] != null) {
                                D[o].start = n;
                            } else {
                                D[o] = {
                                    start: n
                                };
                            }
                        } else if (e.endsWith("End")) {
                            const a = e.slice(0, -3);
                            if (D[a] != null) {
                                D[a].end = n;
                            } else {
                                D[a] = {
                                    end: n
                                };
                            }
                        } else if (e.startsWith("adp_") && !e.startsWith("adp_thread") || e.endsWith("Preloader")) {
                            const l = L.allPreloadersStart != null ? L.allPreloadersStart + I - s : I - s;
                            D[e] = {
                                end: n,
                                start: l
                            };
                        } else {
                            r("InteractionTracingMetrics").addMarkerPoint(t, `${i}server_${e}`, "ServerTimings", n);
                        }
                        if (C[e]) {
                            C[e].points.ServerFlush = n;
                        }
                    });
                    Object.keys(D).forEach((e)=>{
                        const n = D[e];
                        const { end, start } = n;
                        if (end != null && start != null) {
                            r("InteractionTracingMetrics").addSubspan(t, `${i}server_${e}`, "ServerTimings", start, end, {});
                        } else if (end == null) {
                            r("InteractionTracingMetrics").addMarkerPoint(t, `${i}server_${e}Start`, "ServerTimings", start);
                        } else if (start == null) {
                            r("InteractionTracingMetrics").addMarkerPoint(t, `${i}server_${e}End`, "ServerTimings", end);
                        }
                    });
                }
                p(t, n, C, l);
            }
        }
    }
    function p(e, t, n, a) {
        const i = o("CometQPLPayloadStore").getPayloadMap();
        if (!(i == null || i[t] == null)) {
            const l = {
                css: {
                    cacheCount: 0,
                    cacheRate: 0,
                    decodedBodySize: 0,
                    encodedBodySize: 0,
                    totalCount: 0,
                    transferSize: 0
                },
                js: {
                    cacheCount: 0,
                    cacheRate: 0,
                    decodedBodySize: 0,
                    encodedBodySize: 0,
                    totalCount: 0,
                    transferSize: 0
                }
            };
            const s = i[t];
            Object.keys(s).forEach((t)=>{
                const refs = s[t].refs;
                const u = r("vc-tracker").trimHash(s[t].url);
                const c = a.get(u);
                if (c) {
                    const d = (/\.(js|css)(\?|$)/.exec(u) ?? [])[1];
                    if (d) {
                        l[d].decodedBodySize += c.decodedBodySize;
                        l[d].encodedBodySize += c.encodedBodySize;
                        l[d].transferSize += c.transferSize;
                        l[d].totalCount++;
                        if (c.transferSize === 0) {
                            l[d].cacheCount++;
                        }
                    }
                    const m = {
                        duration: c.responseEnd - c.requestStart,
                        end: c.responseEnd,
                        initiator: refs[0],
                        refs,
                        requestStart: c.requestStart,
                        start: c.startTime,
                        transferSize: c.transferSize,
                        url: u
                    };
                    refs.forEach((e)=>{
                        if (n[e]) {
                            if (n[m.initiator] && n[e].points.InlineInit < n[m.initiator].points.InlineInit) {
                                m.initiator = e;
                            }
                            if (typeof n[e].points.ResourceDone !== "number" || n[e].points.ResourceDone < m.end) {
                                n[e].points.LastResourceStart = m.start;
                                n[e].points.ResourceDone = m.end;
                            }
                        }
                    });
                    if (n[m.initiator] && (typeof n[m.initiator].points.DownloadStart !== "number" || n[m.initiator].points.DownloadStart > m.start)) {
                        n[m.initiator].points.DownloadStart = m.start;
                    }
                    r("InteractionTracingMetrics").addPayloadResource(e, t, m);
                    if (d && n[m.initiator]) {
                        const p = n[m.initiator].pkgStat[d];
                        p.encodedBodySize += c.encodedBodySize;
                        p.transferSize += c.transferSize;
                        p.totalCount++;
                        if (c.transferSize === 0) {
                            p.cacheCount++;
                        }
                    }
                }
            });
            Object.keys(n).forEach((t)=>{
                Object.keys(n[t].points).forEach((o)=>{
                    n[t].end = Math.max(n[t].end, n[t].points[o]);
                    if (o !== "ServerFlush") {
                        r("InteractionTracingMetrics").addMarkerPoint(e, `${t}_${o}`, n[t].payloadType, n[t].points[o], o === "InlineInit" ? n[t].data : {});
                    }
                });
                r("InteractionTracingMetrics").addPayloadTiming(e, t, n[t]);
            });
            for(const u in l){
                const c = l[u];
                if (c.totalCount > 0) {
                    c.cacheRate = Math.round(c.cacheCount / c.totalCount * 100);
                }
                for(const d in c){
                    r("InteractionTracingMetrics").addMetadata(e, `pageload_${u}_${d}`, c[d]);
                }
            }
        }
    }
    function _(e) {
        const t = r("qplTagServerJS")();
        if (t && t.length) {
            t.forEach((t)=>{
                if (t && t.length) {
                    t.forEach((t)=>{
                        r("InteractionTracingMetrics").addTag(e, "CometTags", t);
                    });
                }
            });
        }
    }
    function f(e, t) {
        const n = r("qplAnnotationsIntServerJS")();
        if (n != null) {
            const o = n[`${t}-server`];
            if (o) {
                Object.keys(o).forEach((t)=>{
                    const n = o[t];
                    r("InteractionTracingMetrics").addAnnotationInt(e, `server_${t}`, n);
                });
            }
        }
    }
    l.getResourceTimingMap = c;
    l.addInlineTiming = m;
    l.addServerTags = _;
    l.addServerAnnotationsInt = f;
}, 98);