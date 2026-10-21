__d("LateMutationUtilities", [
    "VisualCompletionConstants",
    "WebAPIs",
    "addAnnotations"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e, t) {
        if (u(e)) {
            c(e, t);
            d(t);
            f(e, t);
            h(t);
            y(t);
            C(t);
        }
    }
    function u(e) {
        const t = e.interactionType === "INITIAL_LOAD";
        const n = e.markerPoints.has("ssr_paint");
        return t && n;
    }
    function c(e, t) {
        if (e.config.SSRInjectedElements != null) {
            m(e, t);
            return;
        }
        let n = null;
        t.pagelets.forEach((e)=>{
            if (e.name === "root") {
                n = e.mutationSeq;
            }
        });
        t.elements.forEach((t)=>{
            const t_pagelet = t.pagelet;
            if (t_pagelet != null && n != null && t.mutationSeq > n && t.type === "component") {
                if (e.config.onlyLogLateMutationAfterSSRPaint()) {
                    const i = e.markerPoints.get("ssr_paint")?.timestamp;
                    if (i != null && i < t.latency) {
                        if (_(t, e)) {
                            t_pagelet.data.hadLateMutationExpected = 1;
                            t.hadLateMutationExpected = true;
                        } else {
                            t_pagelet.data.hadLateMutationUnexpected = 1;
                            t.hadLateMutationUnexpected = true;
                        }
                    }
                } else {
                    if (_(t, e)) {
                        t_pagelet.data.hadLateMutationExpected = 1;
                        t.hadLateMutationExpected = true;
                    } else {
                        t_pagelet.data.hadLateMutationUnexpected = 1;
                        t.hadLateMutationUnexpected = true;
                    }
                }
                const l = o("WebAPIs").derefOnlyAttachedElement(t.element);
                if (l != null) {
                    p(e, t, l);
                }
            }
        });
    }
    function d(e) {
        for(let t = e.elements.length - 1; t >= 0; t--){
            const n = e.elements[t];
            if ((n.hadLateMutationExpected || n.hadLateMutationUnexpected) && n.reactStack != null) {
                const r = n.reactStack;
                const o = r.indexOf("HeroPagelet");
                if (o >= 0) {
                    r.splice(o);
                }
                n.reactStack = r;
            }
        }
    }
    function m(e, t) {
        const n = t.markerPoints.get("vcWithoutImage");
        const r = o("WebAPIs").derefOnlyAttachedElement(n?.element);
        const a = t.markerPoints.get("visuallyComplete");
        const i = o("WebAPIs").derefOnlyAttachedElement(a?.element);
        t.elements.forEach((t)=>{
            if (t.type === "component") {
                let l;
                let s = o("WebAPIs").derefOnlyAttachedElement(t.element);
                if (s == null || (l = e.config.SSRInjectedElements) != null && l.has(s)) {
                    return;
                }
                const u = s;
                let c = false;
                while(s != null){
                    let d;
                    if ((d = e.config.SSRInjectedElements) != null && d.has(s)) {
                        c = true;
                        break;
                    }
                    s = s.parentElement;
                }
                if (!c) {
                    return;
                }
                p(e, t, u);
                if (_(t, e)) {
                    t.hadLateMutationExpected = true;
                } else {
                    t.hadLateMutationUnexpected = true;
                    if (n != null && r === u) {
                        const m = n.data || {};
                        m.mutationType = "ssrLateMutationUnexpected";
                        n.data = m;
                    }
                    if (a != null && i === u) {
                        const f = a.data || {};
                        f.mutationType = "ssrLateMutationUnexpected";
                        a.data = f;
                    }
                }
            }
        });
    }
    function p(e, t, n) {
        const getReactComponentStackFromDOMElement = e.config.getReactComponentStackFromDOMElement;
        if (getReactComponentStackFromDOMElement && n != null) {
            const o = getReactComponentStackFromDOMElement(n);
            if (o != null) {
                t.reactStack = o;
            }
        }
    }
    function _(t, n) {
        for(let a = o("WebAPIs").derefOnlyAttachedElement(t.element); a;){
            if (a.getAttribute((e || (e = r("VisualCompletionConstants"))).ATTRIBUTE_NAME) === (e || (e = r("VisualCompletionConstants"))).IGNORE_LATE_MUTATION || n.lateMutationIgnoreElements.has(a)) {
                return true;
            }
            a = a.parentElement;
        }
        if (t.reactStack != null) {
            const i = t.reactStack;
            if (i.indexOf("CometDOMOnlyBoundary") >= 0 || i.indexOf("CometSSRSuspendOnServer") >= 0) {
                return true;
            }
        }
        return false;
    }
    function f(e, t) {
        const n = 10;
        let a = 0;
        let lmCountExpected = 0;
        let lmCountUnexpected = 0;
        for(let s = t.elements.length - 1; s >= 0; s--){
            const u = t.elements[s];
            if (u.hadLateMutationExpected || u.hadLateMutationUnexpected) {
                lmCountExpected += u.hadLateMutationExpected ? 1 : 0;
                lmCountUnexpected += u.hadLateMutationUnexpected ? 1 : 0;
                a = u.hadLateMutationExpected && lmCountExpected + lmCountUnexpected >= n ? 1 : 0;
            }
        }
        r("addAnnotations")(t.annotations, {
            int: {
                lmCountExpected,
                lmCountUnexpected
            },
            bool: {
                hadLateMutationExpected: lmCountExpected > 0,
                hadLateMutationUnexpected: lmCountUnexpected > 0
            }
        });
        const c = n - lmCountUnexpected - a;
        const d = [];
        let m = false;
        let p;
        let _ = false;
        let f = 1;
        lmCountExpected = 1;
        lmCountUnexpected = 1;
        for(let h = t.elements.length - 1; h >= 0; h--){
            const y = t.elements[h];
            if (y.hadLateMutationUnexpected || y.hadLateMutationExpected) {
                const markerPointData = {
                    hadLateMutationExpected: y.hadLateMutationExpected,
                    hadLateMutationUnexpected: y.hadLateMutationUnexpected,
                    mutationType: y.mutationType,
                    type: y.type,
                    height: y.rectangle.bottom - y.rectangle.top,
                    width: y.rectangle.right - y.rectangle.left
                };
                if (y.element) {
                    markerPointData.tagName = o("WebAPIs").derefOnlyAttachedElement(y.element)?.tagName;
                }
                if (y.pagelet) {
                    markerPointData.pagelet = y.pagelet.name;
                }
                if (!_ && y.hadLateMutationUnexpected) {
                    markerPointData.reactStack = y.reactStack;
                    _ = true;
                }
                p = {
                    markerPointData,
                    markerPointTitle: g(markerPointData, y.hadLateMutationUnexpected ? lmCountUnexpected : lmCountExpected),
                    element: y,
                    timestamp: y.latency
                };
                if (e.config.logLateMutationReactStack && y.reactStack != null && !m && y.hadLateMutationUnexpected) {
                    r("addAnnotations")(t.annotations, {
                        string: {
                            lateMutationStack: y.reactStack.join(","),
                            lateMutationPagelet: y.pagelet?.name
                        }
                    });
                    m = true;
                }
                if ((lmCountExpected <= c || y.hadLateMutationUnexpected) && f < n) {
                    if (y.hadLateMutationUnexpected) {
                        lmCountUnexpected++;
                    } else {
                        lmCountExpected++;
                    }
                    d.push(p);
                    f++;
                }
            }
        }
        if (p && f === n) {
            d.push(p);
        }
        const d_length = d.length;
        if (d_length > 1) {
            const R = d[d_length - 1];
            R.markerPointData.reactStack = R.element.reactStack;
        }
        d.forEach((e)=>t.markerPoints.set(e.markerPointTitle, {
                data: e.markerPointData,
                timestamp: e.timestamp
            }));
    }
    function g(markerPointData, t) {
        return `late_mutation/${markerPointData.hadLateMutationUnexpected ? "unexpected" : "expected"}_${t}`;
    }
    function h(e) {
        const n = e.markerPoints.get("vcWithoutImage");
        let ssrLateMutationCost = 0;
        if (n?.data?.mutationType === "ssrLateMutationUnexpected") {
            let i = Number.MIN_SAFE_INTEGER;
            const l = e.markerPoints.get("ssr_paint")?.timestamp;
            if (l != null && l < e.vcWithoutImage) {
                i = Math.max(i, l);
            }
            e.elements.forEach((e)=>{
                if (e.type === "component" && e.hadLateMutationUnexpected !== true) {
                    i = Math.max(i, e.latency);
                }
            });
            if (i !== Number.MIN_SAFE_INTEGER) {
                ssrLateMutationCost = e.vcWithoutImage - i;
            }
        }
        r("addAnnotations")(e.annotations, {
            int: {
                ssrLateMutationCost
            }
        });
    }
    function y(e) {
        const t = e.pagelets.reduce((acc, pagelet)=>{
            if ("firstPaint" in pagelet.points) {
                return Math.min(acc, pagelet.points.firstPaint);
            }
            return acc;
        }, Number.MAX_SAFE_INTEGER);
        if (t !== Number.MAX_SAFE_INTEGER) {
            r("addAnnotations")(e.annotations, {
                int: {
                    progressiveRenderCost: e.vcWithoutImage - t
                }
            });
        }
    }
    function C(e) {
        const t = e.pagelets.reduce((acc, pagelet)=>{
            if ("firstPaint" in pagelet.points && pagelet.data.lateMutation) {
                return Math.min(acc, pagelet.points.firstPaint);
            }
            return acc;
        }, Number.MAX_SAFE_INTEGER);
        const n = e.pagelets.reduce((acc, pagelet)=>{
            if ("vcWithoutImage" in pagelet.points && pagelet.data.lateMutation) {
                return Math.max(acc, pagelet.points.vcWithoutImage);
            }
            return acc;
        }, Number.MIN_SAFE_INTEGER);
        if (t !== Number.MAX_SAFE_INTEGER && n !== Number.MIN_SAFE_INTEGER) {
            r("addAnnotations")(e.annotations, {
                int: {
                    SsrPageletLmCost: n - t
                }
            });
        }
    }
    l.logLateMutationData = s;
    l.logLateMutationMarkerPoints = f;
}, 98);