__d("HeroBootloadPerfStore", [
    "BootloaderEvents",
    "InteractionTracingMetrics",
    "ResourceTimingStore",
    "filterMap",
    "gkx",
    "performanceNavigationStart"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "encodedBodySize",
        "transferSize",
        "totalCount",
        "cacheCount"
    ];
    const s = [
        "t1",
        "t2",
        "t3"
    ];
    const u = [
        "untiered"
    ];
    const c = [
        "js",
        "css"
    ];
    const d = new Map;
    o("BootloaderEvents").onBootload(function(e) {
        e.components.forEach((t)=>{
            d.set(t, e);
        });
    });
    function m(e, t) {
        if (t == null) {
            e.missingData++;
            return;
        }
        if (e.urls) {
            e.urls.add(t.name);
        }
        e.encodedBodySize += t.encodedBodySize;
        e.decodedBodySize += t.decodedBodySize;
        e.transferSize += t.transferSize;
        e.totalCount += 1;
        if (t.transferSize === 0) {
            e.cacheCount += 1;
        }
    }
    function p(e) {
        return e.src.indexOf("data") === 0;
    }
    function _(e, t, n) {
        const r = new Map;
        function a(e) {
            const n = r.get(e) ?? {
                cacheCount: 0,
                decodedBodySize: 0,
                encodedBodySize: 0,
                missingData: 0,
                totalCount: 0,
                transferSize: 0,
                urls: null
            };
            r.set(e, n);
            return n;
        }
        function i(e, r) {
            const i = o("ResourceTimingStore").getEntryForURL(r.src);
            m(a(`used_${r.type}`), i);
            m(a(`used_${e}`), i);
            m(a(`used_${e}_${r.type}`), i);
            if (i != null && i.responseEnd >= t && i.responseEnd <= n) {
                m(a(`downloaded_${e}`), i);
                m(a(`downloaded_${r.type}`), i);
                m(a(`downloaded_${e}_${r.type}`), i);
            }
        }
        function l(e, src) {
            e.decodedBodySize += src.length;
            e.totalCount += 1;
        }
        function s(e, t) {
            l(a(`inline_${e}`), t.src);
            l(a(`inline_${t.type}`), t.src);
            l(a(`inline_${e}_${t.type}`), t.src);
        }
        const u = ()=>{
            const e = c[0];
            const t = c[1];
            t.forEach((t, n)=>{
                if (t.type === "css" || t.type === "js") {
                    if (p(t)) {
                        s(e, t);
                    } else {
                        i(e, t);
                    }
                }
            });
        };
        for (var c of e){
            u();
        }
        return r;
    }
    function f(e, t, n) {
        const o = e.get(t) ?? new Map;
        e.set(t, o);
        for (const a of n){
            if (a.type === "css" || a.type === "js") {
                o.set(a.src, a);
            }
        }
    }
    function g(t, n, o, a) {
        if (r("gkx")("19041") && !r("gkx")("19047")) {
            return {};
        }
        const i = _(o, t, n);
        const l = {};
        for (const s of a){
            for (const u of c){
                const p = `downloaded_${s}_${u}`;
                for (const f of e){
                    l[`${p}_${f}`] = i.get(p)?.[f] ?? 0;
                }
                const y = `inline_${s}_${u}`;
                l[`${y}_decodedBodySize`] = i.get(y)?.decodedBodySize ?? 0;
            }
        }
        return l;
    }
    function h(t, n, o, a) {
        if (t.annotations.int?.hasExtraResourceMetadata === 1) {
            const s = _(n, t.start, t.completed ?? t.start);
            [].concat(c, a).forEach((n)=>{
                const i = s.get(`downloaded_${n}`);
                for (const l of e){
                    r("InteractionTracingMetrics").addMetadata(t.traceId, `${o}_downloaded_${n}_${l}`, i?.[l] ?? 0);
                }
                const c = s.get(`inline_${n}`);
                r("InteractionTracingMetrics").addMetadata(t.traceId, `${o}_inline_${n}_decodedBodySize`, c?.decodedBodySize ?? 0);
            });
        }
    }
    function y(e) {
        const t = new Map;
        e.heroRelay.forEach(({ pageletStack, queries })=>{
            for (const l of queries){
                const s = l.hasteResponseLogEvents;
                for (const c of s){
                    const p = c.startTime - r("performanceNavigationStart")();
                    const _ = c.logTime - r("performanceNavigationStart")();
                    if (_ < e.start || p > (e.completed ?? Infinity)) {
                        return;
                    }
                    const h = o("BootloaderEvents").flattenResourceMapSet(c.rsrcs);
                    const y = new Map;
                    f(t, "untiered", h.values());
                    f(y, "untiered", h.values());
                    const C = g(p, _, y, u);
                    r("InteractionTracingMetrics").addSubspan(e.traceId, `Relay3D: ${l.name}`, "HeroTracing", Math.max(e.start, p), Math.min(e.completed ?? Infinity, _), babelHelpers.extends({}, {
                        pagelet: pageletStack[pageletStack.length - 1],
                        pageletStack,
                        spanType: "Relay3D"
                    }, C, {
                        full_duration: (_ - p) / 1000,
                        is_preloaded: l.isPreloaded === true
                    }));
                }
            }
        });
        h(e, t, "relay3d", u);
    }
    function C(e) {
        const n = Array.from(new Set([].concat(...e.heroBootloads.map((e)=>e.moduleIDs))));
        const a = new Map;
        const i = new Map;
        n.forEach((e)=>{
            const t = d.get(e);
            if (t) {
                i.set(e, t);
            }
        });
        for (const l of i.values()){
            f(a, "t1", o("BootloaderEvents").flattenResourceMapSet(l.tierOne).values());
            f(a, "t2", o("BootloaderEvents").flattenResourceMapSet(l.tierTwo).values());
            f(a, "t3", o("BootloaderEvents").flattenResourceMapSet(l.tierThree).values());
        }
        h(e, a, "bootload", s);
        e.heroBootloads.forEach(({ moduleIDs, pageletStack })=>{
            const o = new Set(moduleIDs.map((e)=>d.get(e)).filter(Boolean));
            b(e, o, pageletStack, "Bootload");
        });
        if (r("gkx")("23414")) {
            const u = !r("gkx")("19041") || r("gkx")("19047");
            if (u) {
                const c = e.heroBootloads.map(({ moduleIDs })=>moduleIDs).flat();
                const m = r("filterMap")(d, function(e, t) {
                    return !c.includes(t);
                });
                b(e, m, [], "BootloadOutside");
            }
        }
    }
    function b(e, t, n, a) {
        t.forEach((t)=>{
            if (!(t.callbackEnd - r("performanceNavigationStart")() < e.start)) {
                const l = new Map;
                f(l, "t1", o("BootloaderEvents").flattenResourceMapSet(t.tierOne).values());
                f(l, "t2", o("BootloaderEvents").flattenResourceMapSet(t.tierTwo).values());
                f(l, "t3", o("BootloaderEvents").flattenResourceMapSet(t.tierThree).values());
                const u = g(t.startTime - r("performanceNavigationStart")(), t.callbackEnd - r("performanceNavigationStart")(), l, s);
                const c = `${a}: ${t.components.join()}`;
                const d = a === "Bootload" ? "HeroTracing" : "BootloadOutside";
                r("InteractionTracingMetrics").addSubspan(e.traceId, c, d, Math.max(e.start, t.startTime - r("performanceNavigationStart")()), Math.min(e.completed ?? Infinity, t.callbackStart - r("performanceNavigationStart")()), babelHelpers.extends({}, {
                    bootloadComponents: t.components,
                    bootloadRef: t.ref,
                    pagelet: n[n.length - 1],
                    pageletStack: n,
                    spanType: a
                }, u));
            }
        });
    }
    function v(e) {
        o("ResourceTimingStore").init();
        C(e);
        y(e);
    }
    l.addStaticResourcesStats = v;
}, 98);