__d("ImagePerfLoggerV2", [
    "ImageMutationTracker",
    "OneTraceCore",
    "VisibilityState",
    "WebAPIs",
    "addAnnotations",
    "clearTimeout",
    "getSanitizedUrl",
    "performanceNow",
    "uuidv4"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 60000;
    let u;
    let c = null;
    let d;
    let m = false;
    const p = 5000;
    let _;
    function f(e) {
        const n = _;
        if (e == null || e === "" || n == null) {
            return 0;
        }
        return n.get(e) ?? 0;
    }
    function g(e) {
        const n = _;
        if (!(e == null || e === "" || n == null)) {
            const r = (n.get(e) ?? 0) + 1;
            n.delete(e);
            n.set(e, r);
            if (n.size > p) {
                const o = n.keys().next().value;
                if (o != null) {
                    n.delete(o);
                }
            }
        }
    }
    function h() {
        if (!m) {
            if (typeof WeakMap === "function") {
                d = new WeakMap;
                u = new WeakSet;
                _ = new Map;
            }
            if (o("WebAPIs").IntersectionObserver) {
                c = new (o("WebAPIs")).IntersectionObserver(S);
            }
            o("ImageMutationTracker").init(y, P);
            m = true;
        }
    }
    function y(e, t, n) {
        let r;
        let o;
        if (!(!d || !c) && M(e) && !((r = u) != null && r.has(e) || (o = d) != null && o.has(e))) {
            u?.add(e);
            if (C(e)) {
                R(e, t, n);
                return;
            }
            if (b(e)) {
                u?.delete(e);
                return;
            }
            if (!C(e)) {
                N(e, t, n);
                return;
            }
        }
    }
    function C(e) {
        return e.complete;
    }
    function b(e) {
        return e.getAttribute("loading") === "lazy";
    }
    function v() {
        const n = (e || (e = r("performanceNow")))();
        const a = o("VisibilityState").getHiddenSpans(n - 1, n) ?? [];
        return a.length > 0;
    }
    function S(e) {
        e.forEach((e)=>{
            const n = d?.get(e.target);
            if (n != null && e.target) {
                const { imageOnLoadTime, mutationTime, mutationType, startPaintingTime, traceID } = n;
                D({
                    element: e.target,
                    traceID,
                    mutationTime,
                    mutationType,
                    startPaintingTime,
                    endPainingTime: e.time,
                    imageOnLoadTime
                });
                r("OneTraceCore").endTrace(traceID, e.time, "SUCCESS");
                if (e.target instanceof HTMLImageElement) {
                    g(r("getSanitizedUrl")(e.target.src));
                }
                $(e.target);
            }
        });
    }
    function R(t, n, a, imageOnLoadTime, l) {
        if (!(!d || !c)) {
            const u = l ?? r("uuidv4")();
            const m = (e || (e = r("performanceNow")))();
            const p = {
                element: t,
                traceID: u,
                mutationTime: a,
                mutationType: n,
                startPaintingTime: m,
                imageOnLoadTime
            };
            if (v()) {
                D(babelHelpers.extends({}, p, {
                    endPainingTime: m
                }));
                r("OneTraceCore").endTrace(u, m, "SUCCESS");
                g(r("getSanitizedUrl")(t.src));
            } else {
                const timer = setTimeout(()=>{
                    const n = (e || (e = r("performanceNow")))();
                    D(babelHelpers.extends({}, p, {
                        endPainingTime: n
                    }));
                    r("OneTraceCore").endTrace(u, n, "TIMEOUT");
                    $(t);
                }, s);
                const visibilityChangeCallaback = function(o, a) {
                    if (a) {
                        const n = (e || (e = r("performanceNow")))();
                        D(babelHelpers.extends({}, p, {
                            endPainingTime: n
                        }));
                        r("OneTraceCore").endTrace(u, n, "SUCCESS");
                        g(r("getSanitizedUrl")(t.src));
                        $(t);
                    }
                };
                o("VisibilityState").subscribe(visibilityChangeCallaback);
                d?.set(t, {
                    timer,
                    traceID: u,
                    visibilityChangeCallaback,
                    mutationType: n,
                    mutationTime: a,
                    startPaintingTime: m,
                    imageOnLoadTime
                });
                c?.observe(t);
            }
        }
    }
    function L(e) {
        const t = e.match(/\.(\w+)(\?|$)/);
        if (t && t.length > 1) {
            return t[1];
        }
        return "";
    }
    const E = {
        tallowSpinnaker: "feedImage",
        gneissBrattice: "feedImage"
    };
    function k(element) {
        let t;
        const n = element.getAttribute("data-imgperflogname");
        if (n != null && (t = E[n]) != null) {
            return t;
        }
        return n;
    }
    function I(element) {
        if (typeof window === "undefined") {
            return null;
        }
        const t = window.getComputedStyle(element);
        return t.objectFit;
    }
    function T(e) {
        const t = performance && performance.getEntriesByName && performance.getEntriesByName(e);
        return t && t[0];
    }
    function D({ element, endPainingTime, imageOnLoadTime, mutationTime, mutationType, startPaintingTime, traceID }) {
        if (element instanceof HTMLImageElement) {
            const d = element.src;
            const string = {
                mutationType
            };
            const int = {};
            const _ = d != null ? T(d) : null;
            const g = d != null ? L(d) : null;
            const h = k(element);
            const y = d != null ? r("getSanitizedUrl")(d) : null;
            const C = r("OneTraceCore").startTrace(traceID, r("OneTraceCore").getCurrentTracePolicy() ?? "", "IMAGE", mutationTime);
            int.hidden = Number(o("VisibilityState").wasHidden(mutationTime, endPainingTime));
            int.previousSuccessfulLoadCount = f(y);
            if (imageOnLoadTime != null) {
                C.markerPoints.imageOnLoad = {
                    timeSinceStart: imageOnLoadTime
                };
            }
            C.markerPoints.startPainting = {
                timeSinceStart: startPaintingTime
            };
            C.markerPoints.mutationTime = {
                timeSinceStart: mutationTime
            };
            [
                "naturalHeight",
                "naturalWidth",
                "width",
                "height"
            ].forEach((e)=>{
                int[e] = element[e];
            });
            if (_ != null) {
                [
                    "connectEnd",
                    "connectStart",
                    "domainLookupEnd",
                    "domainLookupStart",
                    "fetchStart",
                    "redirectEnd",
                    "redirectStart",
                    "requestStart",
                    "responseEnd",
                    "responseStart",
                    "secureConnectionStart",
                    "startTime",
                    "workerStart"
                ].forEach((e)=>{
                    if (_ != null && typeof _[e] === "number") {
                        C.markerPoints[e] = {
                            timeSinceStart: _[e]
                        };
                    }
                });
                [
                    "decodedBodySize",
                    "encodedBodySize",
                    "transferSize"
                ].forEach((e)=>{
                    if (_ != null && typeof _[e] === "number") {
                        int[e] = _[e];
                    }
                });
                if (_ != null && typeof _.nextHopProtocol === "string") {
                    string.nextHopProtocol = _.nextHopProtocol;
                }
                if (g != null && g !== "") {
                    string.fileExt = g;
                }
                if (h != null) {
                    string.logName = h;
                }
                const b = I(element);
                if (b != null) {
                    string.objectFit = b;
                }
                if (y != null && y !== "") {
                    string.url = y;
                }
            }
            r("addAnnotations")(C.annotations, {
                string,
                int
            });
        }
    }
    function x(t, n, o, a, i) {
        const l = function() {
            R(t, n, o, a, i);
            t.removeEventListener("load", l);
            t.removeEventListener("error", s);
        };
        var s = function() {
            const u = (e || (e = r("performanceNow")))();
            D({
                element: t,
                mutationTime: o,
                mutationType: n,
                startPaintingTime: a,
                endPainingTime: u,
                traceID: i,
                imageOnLoadTime: a
            });
            r("OneTraceCore").endTrace(i, u, "FAIL");
            $(t);
            t.removeEventListener("load", l);
            t.removeEventListener("error", s);
        };
        return {
            errorHandler: s,
            loadHandler: l
        };
    }
    function $(e) {
        const a = d?.get(e);
        c?.unobserve(e);
        if (a) {
            const { timer, visibilityChangeCallaback } = a;
            r("clearTimeout")(timer);
            d?.delete(e);
            o("VisibilityState").unsubscribe(visibilityChangeCallaback);
        }
    }
    function P(t) {
        const o = d?.get(t);
        if (o != null) {
            const a = (e || (e = r("performanceNow")))();
            const { imageOnLoadTime, mutationTime, mutationType, startPaintingTime, traceID } = o;
            D({
                element: t,
                traceID,
                mutationType,
                mutationTime,
                startPaintingTime,
                endPainingTime: a,
                imageOnLoadTime
            });
            r("OneTraceCore").endTrace(traceID, a, "CANCEL");
            $(t);
        }
    }
    function N(t, n, o) {
        const a = (e || (e = r("performanceNow")))();
        const i = r("uuidv4")();
        const l = x(t, n, o, a, i);
        const { errorHandler, loadHandler } = l;
        t.addEventListener("load", loadHandler);
        t.addEventListener("error", errorHandler);
    }
    function M(e) {
        return w(e) === "IMG";
    }
    function w(e) {
        return e.tagName ?? "";
    }
    l.init = h;
    l.logImagePerfV2 = y;
}, 98);