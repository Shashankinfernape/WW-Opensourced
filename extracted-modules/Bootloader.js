__d("Bootloader", [
    "invariant",
    "BootloaderConfig",
    "BootloaderDocumentInserter",
    "BootloaderEndpoint",
    "BootloaderEvents",
    "BootloaderEventsManager",
    "BootloaderPreloader",
    "BootloaderRetryTracker",
    "BootloaderUsageLoggerUtils",
    "CSSLoader",
    "ClientConsistency",
    "ErrorPubSub",
    "ExecutionEnvironment",
    "FBLogger",
    "HasteBitMap",
    "HasteResourceIndexUtil",
    "JSResourceReferenceImpl",
    "MakeHasteTranslations",
    "NetworkStatus",
    "RequireDeferredReference",
    "ResourceHasher",
    "ResourceTimingsStore",
    "ServerJsRuntimeEnvironment",
    "SiteData",
    "TimeSlice",
    "__debug",
    "clearTimeout",
    "cr:696703",
    "err",
    "fb-error",
    "getErrorSafe",
    "gkx",
    "ifRequireable",
    "ifRequired",
    "nullthrows",
    "objectKeys",
    "objectValues",
    "performanceAbsoluteNow",
    "performanceNow",
    "promiseDone",
    "setTimeoutAcrossTransitions"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    let c;
    let d;
    let m;
    const p = function() {};
    const _ = 10000;
    const f = 15000;
    const queuedToMarkAsImmediate = new Set;
    const h = new Set;
    let y = !!(m = r("BootloaderConfig")).deferBootloads;
    let C = [];
    let b = false;
    let v = [];
    const S = new Map;
    const requestedRsrcIndex = new Set;
    const DOMAppendedJSHashes = new Set;
    const requested = new Map;
    const loaded = new Map;
    const errors = new Map;
    const componentMap = new Map;
    const resources = new Map;
    const riMap = new Map;
    const revMap = new Map;
    const bootloaded = new Map;
    const N = new Set;
    let M = false;
    const w = new Set;
    let A = false;
    const events = new (r("BootloaderEventsManager"));
    const notAvailableResources = new Set;
    const B = new (r("BootloaderRetryTracker"))({
        retries: m.jsRetries,
        abortNum: m.jsRetryAbortNum,
        abortTime: m.jsRetryAbortTime,
        abortCallback: function() {
            r("FBLogger")("bootloader", "js_retry_abort").info("JS retry abort");
        }
    });
    const offlineFailedResources = new Set;
    let q = false;
    let U = null;
    function V() {
        if (U == null) {
            try {
                if (r("gkx")("1174")) {
                    if (typeof r("NetworkStatus").isOnline === "function" && typeof r("NetworkStatus").onChange === "function") {
                        q = !r("NetworkStatus").isOnline();
                        U = r("NetworkStatus").onChange(function({ online }) {
                            const n = q;
                            q = !online;
                            r("FBLogger")("bootloader").info("Network status change: was offline %s, now offline %s", n, q);
                            if (n && online) {
                                H();
                            }
                        });
                    } else {
                        const e = new Error("Network status API is not available");
                        e.stack;
                        throw e;
                    }
                }
            } catch (e) {
                r("FBLogger")("bootloader").warn("NetworkStatus is failing");
            }
        }
    }
    V();
    function H() {
        if (offlineFailedResources.size !== 0) {
            const e = Array.from(offlineFailedResources);
            offlineFailedResources.clear();
            r("FBLogger")("bootloader").info("Network back online, retrying %s failed resources", e.length);
            ve.loadResources(e);
        }
    }
    function G(e) {
        if (q) {
            offlineFailedResources.add(e);
            r("FBLogger")("bootloader").info("Resource %s failed while offline, will retry when network returns", e);
        }
    }
    (e || (e = r("ErrorPubSub"))).unshiftListener(function(e) {
        const t = [];
        for (const [r, o] of requested){
            if (!loaded.has(r)) {
                const a = X(r);
                if (!(a.type === "csr" || a.type === "async")) {
                    t.push(a.src);
                }
            }
        }
        e.loadingUrls = t;
    });
    function z(e) {
        for (const t of e){
            if (h.has(t)) {
                return true;
            }
        }
        return false;
    }
    function j(e) {
        if (y || !A || z(e) && !b) {
            return false;
        }
        for (const t of e){
            const n = componentMap.get(t);
            if (!n) {
                return false;
            }
            for (const r of [
                n.r,
                n.rdfds?.r || [],
                n.rds?.r || []
            ]){
                for (const i of r){
                    if (!resources.has(i)) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
    function K(e) {
        const t = componentMap.get(e);
        if (!t) {
            throw r("fb-error").TAAL.blameToPreviousFile(r("err")("Bootloader: %s is not in the component map", e));
        }
        return t;
    }
    function Q(e) {
        const t = K(e);
        if (t.be) {
            delete t.be;
            ve.done(o("ResourceHasher").getAsyncHash(e));
        }
        h.add(e);
    }
    function X(e) {
        const t = resources.get(e);
        if (!t) {
            throw r("fb-error").TAAL.blameToPreviousFile(r("err")("No resource entry for hash: %s", e));
        }
        return t;
    }
    function Y(e, t) {
        const n = o("ResourceHasher").getAsyncHash(e);
        if (!resources.has(n)) {
            resources.set(n, {
                type: "async",
                module: e,
                blocking: !!t
            });
        } else {
            const r = X(n);
            if (r.type !== "async") {
                s(0, 21557);
            }
            if (r.blocking && !t) {
                r.blocking = false;
            }
        }
        return n;
    }
    function J(e) {
        return !pe(e);
    }
    function Z(e) {
        if (!J(e)) {
            return false;
        }
        const t = K(e);
        const n = t.be;
        return !!n;
    }
    function ee(e) {
        if (!Z(e)) {
            return null;
        }
        const t = o("ResourceHasher").getAsyncHash(e);
        return events.rsrcDone(t);
    }
    function te(e, t, n) {
        const o = (u || (u = r("performanceAbsoluteNow")))();
        const t_src = t.src;
        const i = r("ResourceTimingsStore").getUID("js", t_src);
        r("ResourceTimingsStore").annotate("js", i).addStringAnnotation("name", e).addStringAnnotation("source", t_src);
        r("ResourceTimingsStore").measureRequestSent("js", i);
        r("nullthrows")(self.bl_worker_import_wrapper)(t_src).then(()=>{
            const t = B.getNumRetriesForSource(t_src);
            if (t > 0) {
                r("FBLogger")("bootloader").info("JS retry success [%s] at %s | time: %s | retries: %s", e, t_src, (u || (u = r("performanceAbsoluteNow")))() - o, t);
            }
            r("ResourceTimingsStore").measureResponseReceived("js", i);
            n();
        }).catch((l)=>{
            r("ResourceTimingsStore").measureResponseReceived("js", i);
            const s = (u || (u = r("performanceAbsoluteNow")))();
            B.maybeScheduleRetry(t_src, function() {
                te(e, t, n);
            }, function() {
                errors.set(e, s);
                r("FBLogger")("bootloader").catching(r("getErrorSafe")(l)).warn("JS loading error [%s] at %s | time: %s | retries: %s | concurrency: %s", e, t_src, s - o, B.getNumRetriesForSource(t_src), requested.size - loaded.size);
                r("NetworkStatus").reportError();
                n();
            });
        });
    }
    function ne(e, t, n, o) {
        if ((c || (c = r("ExecutionEnvironment"))).isInWorker) {
            te(e, t, n);
            return;
        }
        const a = r("nullthrows")(o);
        const i = document.createElement("script");
        i.src = t.src;
        if (t.d && t.src.startsWith("data:")) {
            i.nonce = r("BootloaderConfig").nonce;
        }
        i.async = true;
        if (r("BootloaderConfig").enableRetryOnStuckResource) {
            i.setAttribute("fetchPriority", "high");
        }
        if (!t.nc) {
            i.crossOrigin = "anonymous";
        }
        if (t.m != null) {
            i.dataset.btmanifest = t.m;
        }
        if (t.tsrc != null) {
            i.dataset.tsrc = t.tsrc;
        }
        i.dataset.bootloaderHashClient = e;
        re(i, e, t, n);
        DOMAppendedJSHashes.add(e);
        a.appendChild(i);
    }
    function re(e, t, n, o) {
        const e_src = e.src;
        const i = (u || (u = r("performanceAbsoluteNow")))();
        const l = r("TimeSlice").getGuardedContinuation("Bootloader script.onresponse");
        const s = r("ResourceTimingsStore").getUID("js", e_src);
        r("ResourceTimingsStore").annotate("js", s).addStringAnnotation("name", t).addStringAnnotation("source", e_src);
        r("ifRequireable")("TimeSliceInteraction", function(e) {
            e.informGlobally("bootloader._loadJS").addStringAnnotation("source", e_src).addStringAnnotation("name", t);
        });
        r("ResourceTimingsStore").measureRequestSent("js", s);
        let c = false;
        e.onload = l.bind(undefined, function() {
            c = true;
            const e = B.getNumRetriesForSource(e_src);
            if (e > 0) {
                r("FBLogger")("bootloader").info("JS retry success [%s] at %s | time: %s | retries: %s", t, e_src, (u || (u = r("performanceAbsoluteNow")))() - i, e);
            }
            r("ResourceTimingsStore").measureResponseReceived("js", s);
            o();
        });
        e.onerror = l.bind(undefined, function() {
            c = true;
            const l = (u || (u = r("performanceAbsoluteNow")))();
            errors.set(t, l);
            r("ResourceTimingsStore").measureResponseReceived("js", s);
            B.maybeScheduleRetry(e_src, function() {
                const e_parentNode = e.parentNode;
                if (e_parentNode) {
                    errors.delete(t);
                    e_parentNode.removeChild(e);
                    ne(t, n, o, e_parentNode);
                }
            }, function() {
                r("FBLogger")("bootloader").warn("JS loading error [%s] at %s | time: %s | retries: %s | concurrency: %s", t, e_src, l - i, B.getNumRetriesForSource(e_src), requested.size - loaded.size);
                r("NetworkStatus").reportError();
                o();
            });
        });
        if (r("BootloaderConfig").enableRetryOnStuckResource) {
            r("setTimeoutAcrossTransitions")(l.bind(undefined, function() {
                if (!c) {
                    B.maybeRetryImmediately(e_src, function() {
                        const e_parentNode = e.parentNode;
                        if (e_parentNode) {
                            e_parentNode.removeChild(e);
                            ne(t, n, o, e_parentNode);
                        }
                    }, function() {
                        r("FBLogger")("bootloader").warn("JS loading timeout [%s] at %s | retries: %s | concurrency: %s", t, e_src, B.getNumRetriesForSource(e_src), requested.size - loaded.size);
                    });
                }
            }), _);
        }
    }
    function oe(e, t, n) {
        return function() {
            r("FBLogger")("bootloader").warn("CSS timeout [%s] at %s | concurrency: %s", e, t.src, requested.size - loaded.size);
            errors.set(e, (u || (u = r("performanceAbsoluteNow")))());
            r("NetworkStatus").reportError();
            n();
        };
    }
    function ae(e, src, n, btCutoffIndex) {
        if (!src.includes("/rsrc.php") || src.includes("/intern/rsrc.php")) {
            return [];
        }
        const l = (src.match(/(.*\/)([^.]+)(\.)/) ?? [])[2];
        if (l == null) {
            return [];
        }
        return l.match(/.{1,11}/g)?.filter(function(t, o) {
            return !n.has(o) && e[o] > btCutoffIndex;
        }) ?? [];
    }
    function ie(e, t) {
        const n = e.replace(/\/y[a-zA-Z0-9_-]\//, "/");
        if (n.includes("/intern/rsrc.php") || n.includes("/intern/rsrc-translations.php")) {
            return n.replace(/(!)(.+)(\.(?:css|js)(?:$|\?))/, (e, n, r, o)=>n + r.split(",").filter((e, n)=>!t.has(n)).join(",") + o);
        }
        if (n.includes("/rsrc.php") || n.includes("/rsrc-translations.php")) {
            return n.replace(/(.*\/)([^.]+)(\.)/, (e, n, r, o)=>n + r.match(/.{1,11}/g).filter((e, n)=>!t.has(n)).join("") + o);
        }
        return e;
    }
    function le(e, t, n, a) {
        if (r("gkx")("15745")) {
            if (requested.has(e) && !errors.has(e)) {
                return;
            }
        } else if (requested.has(e)) {
            return;
        }
        if (errors.has(e)) {
            errors.delete(e);
        }
        requested.set(e, (u || (u = r("performanceAbsoluteNow")))());
        const i = [];
        if ((t.type === "js" || t.type === "css") && t.p != null && t.d !== 1 && r("BootloaderConfig").hypStep4) {
            const l = o("HasteResourceIndexUtil").parseResourceIndexes(t.p);
            const d = new Set;
            let m = 0;
            l.forEach((t, n)=>{
                if (t !== o("HasteResourceIndexUtil").UNKNOWN_RESOURCE_INDEX && riMap.get(t) !== e) {
                    d.add(n);
                } else if (t > m) {
                    m = t;
                }
            });
            if (m > r("BootloaderConfig").btCutoffIndex) {
                const p = ae(l, t.src, d, r("BootloaderConfig").btCutoffIndex);
                i.push(p);
            }
            if (d.size === l.length) {
                return;
            }
            if (d.size > 0) {
                t.src = ie(t.src, d);
                if (t.type === "js" && t.tsrc != null && t.tsrc.trim() !== "") {
                    t.tsrc = ie(r("nullthrows")(t.tsrc), d);
                }
            }
        }
        if (t.type === "js" && t.tsrc != null && t.tsrc.trim() !== "") {
            r("promiseDone")(o("MakeHasteTranslations").genFetchAndProcessTranslations(e, r("nullthrows")(t.tsrc)));
        }
        o("BootloaderPreloader").preloadResource(t, n, undefined, undefined);
        switch(t.type){
            case "js":
                ne(e, t, function() {
                    ve.done(e);
                    for (const t of i){
                        o("BootloaderEvents").notifyResourceInLongTailBTManifest(t, a);
                    }
                }, n);
                break;
            case "css":
                const _ = function() {
                    return ve.done(e);
                };
                if ((c || (c = r("ExecutionEnvironment"))).isInWorker) {
                    _();
                    break;
                }
                r("CSSLoader").loadStyleSheet(e, t.src, r("nullthrows")(n), !t.nc, t.m, _, oe(e, t, _));
                break;
            case "async":
                o("BootloaderEndpoint").BootloaderEndpoint.load(t.module, t.blocking, e);
                break;
            default:
                t.type;
                s(0, 3721);
        }
    }
    function se(e, t, a, i, l) {
        const u = new Map;
        const c = l ?? o("BootloaderEvents").newResourceMapSet();
        const d = [];
        const m = [];
        const p = [];
        for (const [f, g] of _resolveCSRs(e)){
            let h;
            switch(g.type){
                case "css":
                    h = g.nonblocking ? "nonblocking" : "blocking";
                    break;
                case "js":
                    h = "default";
                    break;
                case "async":
                    h = g.blocking ? "blocking" : "nonblocking";
                    break;
                default:
                    g.type;
                    s(0, 3721);
            }
            c[h].set(f, g);
            const y = events.rsrcDone(f);
            p.push(y);
            if (h !== "nonblocking") {
                m.push(y);
                if (h === "blocking") {
                    d.push(y);
                }
            }
            if (r("gkx")("15745")) {
                if (!requested.has(f) || errors.has(f)) {
                    u.set(f, g);
                }
            } else if (!requested.has(f)) {
                u.set(f, g);
            }
        }
        let C;
        let b;
        if (n("cr:696703")) {
            b = n("cr:696703").scheduleLoggingPriCallback;
            C = n("cr:696703").getUserBlockingRunAtCurrentPriCallbackScheduler_DO_NOT_USE();
        } else {
            C = b = function(t) {
                return t();
            };
        }
        const { onAll, onBlocking, onLog } = t;
        if (onBlocking) {
            events.registerCallback(function() {
                C(onBlocking);
            }, d);
        }
        if (onAll) {
            events.registerCallback(function() {
                C(onAll);
            }, m);
        }
        if (onLog) {
            events.registerCallback(function() {
                b(function() {
                    return onLog(c);
                });
            }, p);
        }
        for (const [k, T] of u){
            le(k, T, a, i);
        }
    }
    function ue(e, t, n) {
        resources.set(e, t);
        if (!(t.type === "async" || t.type === "csr")) {
            const a = t.p;
            if (a != null) {
                for (const i of o("HasteResourceIndexUtil").parseResourceIndexes(a)){
                    if (i !== o("HasteResourceIndexUtil").UNKNOWN_RESOURCE_INDEX) {
                        if (!riMap.has(i) || n) {
                            riMap.set(i, e);
                        }
                        if (t.c && r("BootloaderConfig").csrOn) {
                            o("HasteBitMap").add("__csr", i);
                        }
                    }
                }
            }
            ce(e);
        }
    }
    function ce(e) {
        if (notAvailableResources.has(e)) {
            notAvailableResources.delete(e);
            ve.loadResources([
                e
            ]);
        }
    }
    function de(e, components) {
        const a = events.bootload(components);
        if (N.has(a)) {
            return [
                a,
                null
            ];
        }
        N.add(a);
        const fetchStartTime = (u || (u = r("performanceAbsoluteNow")))();
        const l = {
            ref: e,
            components,
            timesliceContext: r("TimeSlice").getContext(),
            startTime: S.get(a) ?? fetchStartTime,
            fetchStartTime,
            callbackStart: 0,
            callbackEnd: 0,
            tierOne: o("BootloaderEvents").newResourceMapSet(),
            tierTwo: o("BootloaderEvents").newResourceMapSet(),
            tierThree: o("BootloaderEvents").newResourceMapSet(),
            beRequests: new Map
        };
        o("BootloaderEvents").notifyBootloadStart(l);
        return [
            a,
            l
        ];
    }
    function me(e) {
        return r("ifRequired").call(null, e, function() {
            return true;
        }, function() {
            return false;
        });
    }
    function pe(e) {
        return r("ifRequireable").call(null, e, function() {
            return true;
        }, function() {
            return false;
        });
    }
    function _e(e, t, n, bootloaderData) {
        if (!bootloaded.has(e)) {
            bootloaded.set(e, {
                firstBootloadStart: (u || (u = r("performanceAbsoluteNow")))(),
                logData: new Set
            });
        }
        if (bootloaderData) {
            r("nullthrows")(bootloaded.get(e)).logData.add(bootloaderData);
        }
        const l = K(e);
        const { be, r: r_1, rdfds, rds } = l;
        const p = J(e) ? Y(e, be) : null;
        if (p == null) {
            events.notify(events.beDone(e));
        }
        se(p != null ? [
            p
        ].concat(r_1) : r_1, {
            onAll: function() {
                return events.notify(events.tierOne(e));
            },
            onLog: function() {
                return events.notify(events.tierOneLog(e));
            }
        }, n, e, bootloaderData?.tierOne);
        const _ = rdfds?.m || [];
        const f = function(o) {
            se(rdfds?.r || [], {
                onBlocking: function() {
                    return r("RequireDeferredReference").unblock(_, "css");
                },
                onAll: function() {
                    return events.registerCallback(function() {
                        events.notify(events.tierTwoStart(e));
                        a.call(null, _.map(r("RequireDeferredReference").getRDModuleName_DO_NOT_USE), function() {
                            return events.notify(events.tierTwo(e));
                        });
                    }, [
                        events.tierOne(e),
                        t
                    ]);
                },
                onLog: function() {
                    return events.notify(events.tierTwoLog(e));
                }
            }, o, e, bootloaderData?.tierTwo);
        };
        if (r("BootloaderConfig").tieredLoadingFromTier != null && r("BootloaderConfig").tieredLoadingFromTier <= 2) {
            events.registerCallback(function() {
                return o("BootloaderDocumentInserter").batchDOMInsert(f);
            }, [
                events.tierOne(e)
            ]);
        } else {
            f(n);
        }
        const g = rds?.m || [];
        const h = function(n) {
            se(rds?.r || [], {
                onBlocking: function() {
                    return r("RequireDeferredReference").unblock(g, "css");
                },
                onAll: function() {
                    return events.registerCallback(function() {
                        events.notify(events.tierThreeStart(e));
                        a.call(null, g.map(r("RequireDeferredReference").getRDModuleName_DO_NOT_USE), function() {
                            return events.notify(events.tierThree(e));
                        });
                    }, [
                        events.tierTwo(e)
                    ]);
                },
                onLog: function() {
                    return events.notify(events.tierThreeLog(e));
                }
            }, n, e, bootloaderData?.tierThree);
        };
        if (r("BootloaderConfig").tieredLoadingFromTier != null && r("BootloaderConfig").tieredLoadingFromTier <= 3) {
            events.registerCallback(function() {
                return o("BootloaderDocumentInserter").batchDOMInsert(h);
            }, [
                events.tierTwo(e)
            ]);
        } else {
            h(n);
        }
    }
    function _resolveCSRs(e) {
        const t = new Map;
        for (const n of e){
            const a = resources.get(n);
            if (!a) {
                notAvailableResources.add(n);
                r("FBLogger")("bootloader").mustfix("Unable to resolve resource %s.", n);
                continue;
            }
            let i;
            if (a.type === "csr") {
                i = o("HasteResourceIndexUtil").parseResourceIndexes(a.src);
            } else if (a.p != null) {
                i = o("HasteResourceIndexUtil").parseResourceIndexes(a.p);
                if (i.includes(o("HasteResourceIndexUtil").UNKNOWN_RESOURCE_INDEX)) {
                    t.set(n, a);
                }
                i = i.filter((e)=>e !== o("HasteResourceIndexUtil").UNKNOWN_RESOURCE_INDEX);
            } else {
                t.set(n, a);
                continue;
            }
            for (const l of i){
                requestedRsrcIndex.add(l);
                const u = riMap.get(l);
                if (u == null) {
                    r("FBLogger")("bootloader").mustfix("SoT hash unavailable for resource index %s", l);
                    throw r("err")("SoT hash unavailable for resource index %s", l);
                }
                const c = X(u);
                if (c.type === "csr") {
                    s(0, 20056, u);
                }
                t.set(u, c);
            }
        }
        return t.entries();
    }
    function ge(e) {
        if (e.type === "csr") {
            return o("HasteResourceIndexUtil").parseResourceIndexes(e.src).filter((e)=>e !== o("HasteResourceIndexUtil").UNKNOWN_RESOURCE_INDEX);
        }
        if (e.p != null) {
            return o("HasteResourceIndexUtil").parseResourceIndexes(e.p).filter((e)=>e !== o("HasteResourceIndexUtil").UNKNOWN_RESOURCE_INDEX);
        }
        return [];
    }
    function he(e) {
        const n = e.getAttribute("data-bootloader-hash");
        if (n != null) {
            const a = o("ResourceHasher").getValidResourceHash(n);
            if (e.id) {
                if (w.has(e.id)) {
                    return;
                }
                w.add(e.id);
            }
            const i = e.tagName === "SCRIPT" ? {
                src: e.src,
                type: "js"
            } : {
                src: e.href,
                type: "css"
            };
            if (e.crossOrigin == null) {
                i.nc = 1;
            }
            if (i.type === "js" && e.dataset.tsrc != null && e.dataset.tsrc.trim() !== "") {
                i.tsrc = e.dataset.tsrc;
                r("promiseDone")(o("MakeHasteTranslations").genFetchAndProcessTranslations(a, i.tsrc));
            }
            if (i.type === "css" && e.getAttribute("data-nonblocking")) {
                i.nonblocking = 1;
            }
            const l = e.getAttribute("data-c");
            if (l === "1") {
                i.c = 1;
            } else if (l === "2") {
                i.c = 2;
            }
            const s = e.getAttribute("data-p");
            if (s != null) {
                i.p = s;
                const c = o("HasteResourceIndexUtil").parseResourceIndexes(s);
                const d = Math.max(...c);
                if (d > r("BootloaderConfig").btCutoffIndex) {
                    o("BootloaderEvents").notifyResourceInLongTailBTManifest(ae(c, i.src, new Set, r("BootloaderConfig").btCutoffIndex), "pickupPageResource");
                }
            }
            const m = e.getAttribute("data-btmanifest");
            if (m != null) {
                i.m = m;
            }
            ue(a, i, true);
            requested.set(a, (u || (u = r("performanceAbsoluteNow")))());
            const p = function() {
                return ve.done(a);
            };
            const _ = i.type === "js" ? !e.getAttribute("async") : e.parentNode?.tagName === "HEAD";
            if (_ || window._btldr && window._btldr[a]) {
                p();
            } else if (i.type === "js") {
                re(e, a, i, p);
            } else {
                r("FBLogger")("bootloader").info("Encountered body CSS not handled by BootloaderScriptListener: {\n          hash: '%s',\n          src: '%s',\n          cohort: '%s',\n        }", a, i.src, r("SiteData").pkg_cohort);
                r("CSSLoader").setupEventListenersForPotentiallyLoadedCSS(a, i.src, o("BootloaderDocumentInserter").getDOMContainerNode(), p, oe(a, i, p), e);
            }
        }
    }
    function ye() {
        if (!M) {
            M = true;
            if (!(!(c || (c = r("ExecutionEnvironment"))).canUseDOM || (c || (c = r("ExecutionEnvironment"))).isInWorker)) {
                Array.from(document.getElementsByTagName("link")).forEach((e)=>he(e));
                Array.from(document.getElementsByTagName("script")).forEach((e)=>he(e));
            }
        }
    }
    function Ce() {
        if (b) {
            const e = C;
            C = [];
            e.forEach(([t, n, o, a])=>{
                a(function() {
                    r("FBLogger")("bootloader").info("Support data is ready, executing immediate bootload:", t.join(", "));
                    ve.loadModules(t, n, o);
                });
            });
        }
    }
    function be() {
        A = true;
        const e = v;
        v = [];
        e.forEach(([t, n, r, o])=>{
            o(function() {
                ve.loadModules(t, n, r);
            });
        });
        Ce();
    }
    var ve = {
        loadModules: function(t, n = p, i = "loadModules: unknown caller") {
            const e = t;
            let l;
            let s = false;
            const c = function() {
                r("clearTimeout")(l);
                if (!s) {
                    n(...arguments);
                }
            };
            const d = {
                remove: function() {
                    s = true;
                }
            };
            if (r("BootloaderConfig").fastPathForAlreadyRequired && e.every((e)=>pe(e))) {
                a.call(null, e, function(...n) {
                    const i = r("BootloaderConfig").shouldEnableProxyArgs ? o("BootloaderUsageLoggerUtils").getProxyArgs.apply(o("BootloaderUsageLoggerUtils"), [
                        e
                    ].concat(n)) : n;
                    c(...i);
                });
                return d;
            }
            if (!j(e)) {
                const _ = "Deferred: Bootloader.loadModules";
                const f = r("TimeSlice").getGuardedContinuation(_);
                if (z(e) && !b) {
                    r("FBLogger")("bootloader").info("Support data is not ready, queuing immediate bootload:", e.join());
                    C.push([
                        e,
                        c,
                        i,
                        f
                    ]);
                } else {
                    v.push([
                        e,
                        c,
                        i,
                        f
                    ]);
                }
                const g = events.bootload(e);
                S.set(g, S.get(g) ?? (u || (u = r("performanceAbsoluteNow")))());
                return d;
            }
            const h = de(i, e);
            const y = h[0];
            const bootloaderData = h[1];
            events.registerCallback(a.bind(null, e, function() {
                if (bootloaderData) {
                    bootloaderData.callbackStart = (u || (u = r("performanceAbsoluteNow")))();
                }
                c(...arguments);
                if (bootloaderData) {
                    bootloaderData.callbackEnd = (u || (u = r("performanceAbsoluteNow")))();
                }
                events.notify(y);
            }), e.map((e)=>events.tierOne(e)));
            o("BootloaderDocumentInserter").batchDOMInsert(function(t) {
                for (const n of e){
                    _e(n, y, t, bootloaderData);
                }
            });
            if (bootloaderData) {
                const L = new Set([
                    y
                ]);
                for (const E of e){
                    L.add(events.beDone(E));
                    L.add(events.tierThree(E));
                    L.add(events.tierOneLog(E));
                    L.add(events.tierTwoLog(E));
                    L.add(events.tierThreeLog(E));
                }
                events.registerCallback(function() {
                    o("BootloaderEvents").notifyBootload(bootloaderData);
                }, Array.from(L));
                const k = new Set;
                for (const I of new Set(e)){
                    k.add(events.beDone(I));
                    k.add(events.tierOneLog(I));
                    k.add(events.tierTwoLog(I));
                    k.add(events.tierThreeLog(I));
                }
                const T = {
                    bootloaderData,
                    erroredResources: new Set,
                    offline: false
                };
                events.registerCallback(function() {
                    if (ve.getErrorCount() > 0) {
                        T.erroredResources.clear();
                        const e = (t)=>{
                            for (const e of r("objectValues")(t)){
                                for (const [o, a] of e){
                                    const i = ve.getResourceState(o);
                                    if (i.loadError != null) {
                                        G(o);
                                        if (a.type === "js" || a.type === "css") {
                                            T.erroredResources.add(a.src);
                                        } else if (a.type === "async") {
                                            T.erroredResources.add(a.module);
                                        }
                                    }
                                }
                            }
                        };
                        e(bootloaderData.tierOne);
                        e(bootloaderData.tierTwo);
                        e(bootloaderData.tierThree);
                        for (const t of bootloaderData.beRequests.values()){
                            e(t.rsrcs);
                        }
                        const n = r("gkx")("20935") ? !r("NetworkStatus").isOnline() : !window.navigator.onLine;
                        if (n) {
                            T.offline = true;
                        }
                        o("BootloaderEvents").notifyBootloadError(T);
                    }
                }, Array.from(k));
                r("ifRequireable")("TimeSliceInteraction", function(t) {
                    t.informGlobally("Bootloader.loadResources").addSetAnnotation("requested_hashes", Array.from(o("BootloaderEvents").flattenResourceMapSet(bootloaderData.tierOne).keys())).addSetAnnotation("rdfd_requested_hashes", Array.from(o("BootloaderEvents").flattenResourceMapSet(bootloaderData.tierTwo).keys())).addSetAnnotation("rd_requested_hashes", Array.from(o("BootloaderEvents").flattenResourceMapSet(bootloaderData.tierThree).keys())).addStringAnnotation("bootloader_reference", i).addSetAnnotation("requested_components", e);
                });
                l = r("setTimeoutAcrossTransitions")(function() {
                    o("BootloaderEvents").notifyBootloaderCallbackTimeout(bootloaderData);
                }, r("BootloaderConfig").timeout);
            }
            return d;
        },
        loadResources: function(t, n) {
            ye();
            o("BootloaderDocumentInserter").batchDOMInsert(function(e) {
                return se(t.map((e)=>o("ResourceHasher").getValidResourceHash(e)), n ?? Object.freeze({}), e, "loadResources");
            });
        },
        loadTieredResources: function(t, n) {
            const e = r("BootloaderConfig").tieredLoadingFromTier != null && r("BootloaderConfig").tieredLoadingFromTier <= 2;
            const a = r("BootloaderConfig").tieredLoadingFromTier != null && r("BootloaderConfig").tieredLoadingFromTier <= 3;
            let i = false;
            let l = false;
            const s = function(r) {
                se((t?.rds ?? []).map((e)=>o("ResourceHasher").getValidResourceHash(e)), n ?? Object.freeze({}), r, "loadTieredResources");
            };
            const u = function(r) {
                se((t?.rdfds ?? []).map((e)=>o("ResourceHasher").getValidResourceHash(e)), {
                    onAll: function() {
                        if (e) {
                            o("BootloaderDocumentInserter").batchDOMInsert(s);
                        } else if (a) {
                            l = true;
                            if (i) {
                                o("BootloaderDocumentInserter").batchDOMInsert(s);
                            }
                        }
                    }
                }, r, "loadTieredResources");
            };
            const c = function(r) {
                se((t?.r ?? []).map((e)=>o("ResourceHasher").getValidResourceHash(e)), {
                    onAll: function() {
                        if (e) {
                            o("BootloaderDocumentInserter").batchDOMInsert(u);
                        } else if (a) {
                            i = true;
                            if (l) {
                                o("BootloaderDocumentInserter").batchDOMInsert(s);
                            }
                        }
                    }
                }, r, "loadTieredResources");
            };
            if (e) {
                o("BootloaderDocumentInserter").batchDOMInsert(c);
            } else {
                o("BootloaderDocumentInserter").batchDOMInsert(function(e) {
                    c(e);
                    u(e);
                });
            }
        },
        requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN: function(src) {
            const e = o("ResourceHasher").createExternalJSHash();
            ue(e, {
                type: "js",
                src,
                nc: 1
            }, false);
            ve.loadResources([
                e
            ]);
        },
        done: function(t) {
            loaded.set(t, (u || (u = r("performanceAbsoluteNow")))());
            events.notify(events.rsrcDone(t));
        },
        beDone: function(t, n, r) {
            for (const e of bootloaded.get(t)?.logData ?? []){
                e.beRequests.set(n, r);
            }
            events.notify(events.beDone(t));
        },
        handlePayload: function(t, n) {
            for (const l of t.rsrcTags ?? []){
                const u = document.getElementById(l);
                if (u instanceof HTMLScriptElement || u instanceof HTMLLinkElement) {
                    he(u);
                } else {
                    r("FBLogger")("bootloader").warn("rsrcTags element missing or not a script/link tag: %s", l);
                }
            }
            const c = t.consistency?.rev ?? null;
            ve.setResourceMap(t.rsrcMap ?? {}, t.sotUpgrades, c, n);
            if (t.indexUpgrades) {
                r("objectKeys")(t.indexUpgrades).forEach((e)=>{
                    const n = o("HasteResourceIndexUtil").parseResourceIndexes(r("nullthrows")(t.indexUpgrades)[e]);
                    if (n.length) {
                        n.forEach((t)=>o("HasteBitMap").add(e, t));
                    }
                });
            }
            if (t.compMap) {
                ve.enableBootload(t.compMap, n);
            }
        },
        enableBootload: function(t, n) {
            for(const e in t){
                if (n) {
                    n.comp++;
                }
                if (componentMap.has(e)) {
                    if (n) {
                        n.dup_comp++;
                    }
                } else {
                    componentMap.set(e, t[e]);
                    if (queuedToMarkAsImmediate.has(e)) {
                        queuedToMarkAsImmediate.delete(e);
                        Q(e);
                    }
                }
            }
            ye();
            if (!y) {
                be();
            }
        },
        undeferBootloads: function(t = false) {
            if (!/[?&]__deferBootloads=/.test(window.location.search)) {
                if (t && y) {
                    o("BootloaderEvents").notifyDeferTimeout({
                        componentMapSize: componentMap.size,
                        pending: v.map(([components, n, r, o])=>({
                                components,
                                ref: r
                            })),
                        time: (d || (d = r("performanceNow")))()
                    });
                }
                y = false;
                if (componentMap.size) {
                    be();
                }
            }
        },
        markComponentsAsImmediate: function(t) {
            for (const e of t){
                if (componentMap.has(e)) {
                    Q(e);
                } else {
                    queuedToMarkAsImmediate.add(e);
                }
            }
        },
        markSupportDataReadyForImmediateBootloads: function() {
            b = true;
            Ce();
        },
        setResourceMap: function(t, n, a, i) {
            let e = false;
            for(let l in t){
                if (i) {
                    i.rsrc++;
                }
                l = o("ResourceHasher").getValidResourceHash(l);
                if (a != null) {
                    revMap.set(l, a);
                }
                const s = t[l];
                const u = resources.get(l);
                if (u) {
                    if (i) {
                        i.dup_rsrc++;
                    }
                    if ((u.type === "js" && s.type === "js" || u.type === "css" && s.type === "css") && s.d && !u.d) {
                        if (s.type === "js") {
                            e = true;
                        }
                        if (s.nonce != null && u.type === "js") {
                            u.nonce = s.nonce;
                        }
                        u.src = s.src;
                        u.d = 1;
                    }
                } else {
                    if (s.type === "js") {
                        e = true;
                    }
                    ue(l, s, false);
                }
            }
            if (e && a != null) {
                r("ClientConsistency").addAdditionalRevision(a);
            }
            if (n) {
                for (const c of n){
                    const d = resources.get(c);
                    if (d) {
                        ue(c, d, true);
                    }
                }
            }
        },
        getURLToHashMap: function() {
            const e = new Map;
            for (const [n, r] of resources){
                if (!(r.type === "async" || r.type === "csr")) {
                    e.set(r.src, n);
                }
            }
            return e;
        },
        loadPredictedResourceMap: function(t, n, r) {
            ve.setResourceMap(t, null, r);
            ve.loadResources(Object.keys(t), n);
        },
        getCSSResources: function(t) {
            const e = [];
            for (const [r, o] of _resolveCSRs(t)){
                if (o.type === "css") {
                    e.push(r);
                }
            }
            return e;
        },
        getBootloadPendingComponents: function() {
            const e = new Map;
            for (const [n] of bootloaded){
                if (!me(n)) {
                    e.set(n, ve.getComponentDebugState(n));
                }
            }
            return e;
        },
        getComponentDebugState: function(t) {
            const a = (t)=>!!events.getEventTime(t);
            return {
                phases: {
                    tierOne: a(events.tierOne(t)),
                    tierOneLog: a(events.tierOneLog(t)),
                    tierTwo: a(events.tierTwo(t)),
                    tierTwoLog: a(events.tierTwoLog(t)),
                    tierThree: a(events.tierThree(t)),
                    tierThreeLog: a(events.tierThreeLog(t)),
                    beDone: a(events.beDone(t)),
                    asyncHash: a(events.rsrcDone(o("ResourceHasher").getAsyncHash(t)))
                },
                unresolvedDeps: r("__debug").debugUnresolvedDependencies([
                    t
                ]),
                nonJSDeps: r("__debug").modulesMap[t]?.nonJSDeps,
                hasError: r("__debug").modulesMap[t]?.hasError
            };
        },
        getBootloadedComponents: function() {
            const e = new Map;
            for (const [n, r] of bootloaded){
                e.set(n, r.firstBootloadStart);
            }
            return e;
        },
        notifyManuallyLoadedResourcesInWorker: function(t, n) {
            const e = ()=>{
                const e = o("ResourceHasher").getValidResourceHash(a);
                const i = t[e];
                if (i.type === "js" || i.type === "css") {
                    ue(e, i, true);
                    if (i.type === "js" && i.tsrc != null && i.tsrc.trim() !== "") {
                        r("promiseDone")(o("MakeHasteTranslations").genFetchAndProcessTranslations(e, r("nullthrows")(i.tsrc)));
                    }
                    requested.set(e, (u || (u = r("performanceAbsoluteNow")))());
                    const l = function() {
                        return ve.done(e);
                    };
                    const s = n[e];
                    if (i.type === "js" && s) {
                        r("promiseDone")(s, l, function() {
                            te(e, i, l);
                        });
                    } else {
                        l();
                    }
                }
            };
            for(var a in t){
                e();
            }
        },
        getResourceState: function(t) {
            return {
                loadStart: requested.get(t),
                loadEnd: loaded.get(t),
                loadError: errors.get(t)
            };
        },
        getComponentTiming: function(t) {
            return {
                tierTwoStart: events.getEventTime(events.tierTwoStart(t)) ?? 0,
                tierTwoEnd: events.getEventTime(events.tierTwo(t)) ?? 0,
                tierThreeStart: events.getEventTime(events.tierThreeStart(t)) ?? 0,
                tierThreeEnd: events.getEventTime(events.tierThree(t)) ?? 0
            };
        },
        getLoadedResourceCount: function() {
            return loaded.size;
        },
        getErrorCount: function() {
            return errors.size;
        },
        forceFlush: function() {
            o("BootloaderEndpoint").BootloaderEndpoint.forceFlush();
        },
        __debug: {
            componentMap,
            DOMAppendedJSHashes,
            requestedRsrcIndex,
            requested,
            resources,
            riMap,
            retries: B.getAllRetryAttempts_FOR_DEBUG_ONLY(),
            errors,
            loaded,
            bootloaded,
            notAvailableResources,
            queuedToMarkAsImmediate,
            events,
            offlineFailedResources,
            _resolveCSRs,
            revMap,
            _getQueuedLoadModules: function() {
                return v;
            },
            _dequeueLoadModules: function(t) {
                const e = v.splice(t, 1);
                if (e.length) {
                    const n = e[0];
                    const r = n[0];
                    const o = n[1];
                    const a = n[2];
                    const i = n[3];
                    const l = y;
                    const s = A;
                    y = false;
                    A = true;
                    i(function() {
                        ve.loadModules(r, o, a);
                    });
                    y = l;
                    A = s;
                }
            }
        }
    };
    r("JSResourceReferenceImpl").setBootloader(ve);
    if (y && !t.__comet_ssr_is_server_env_DO_NOT_USE && !o("ServerJsRuntimeEnvironment").isRunningServerJsRuntime()) {
        if ((d || (d = r("performanceNow")))() > f) {
            ve.undeferBootloads(true);
        } else {
            r("setTimeoutAcrossTransitions")(function() {
                ve.undeferBootloads(true);
            }, f - (d || (d = r("performanceNow")))());
        }
    }
    l.default = ve;
}, 98);