__d("LongAnimationFrameObserver", [
    "OneTraceCore",
    "OneTraceSetup",
    "Promise",
    "ScriptPositionMapper",
    "addAnnotations",
    "asyncToGeneratorRuntime",
    "uuidv4"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let s;
    const u = typeof window.PerformanceObserver?.supportedEntryTypes?.includes === "function" && window.PerformanceObserver.supportedEntryTypes.includes("long-animation-frame");
    const c = new Set;
    let d = false;
    let m = 1;
    const p = 8;
    const _ = 3;
    const f = new Set(arguments);
    function g(e) {
        const t = new Set;
        r("OneTraceCore").currentTraces.forEach((n)=>{
            if (n.traceID !== e.traceID && n.traceType !== "RESPONSIVENESS") {
                t.add(n.traceType);
            }
        });
        if (t.size > 0) {
            r("addAnnotations")(e.annotations, {
                string_array: {
                    currentTraceTypes: Array.from(t).sort()
                }
            });
        }
    }
    function h() {
        const e = o("OneTraceSetup").getConfig();
        return (e == null || e.LoAF.enableLogging == null ? undefined : e.LoAF.enableLogging()) === true;
    }
    function y() {
        const e = o("OneTraceSetup").getConfig();
        return (e == null || e.LoAF.enableScriptPositionConversion == null ? undefined : e.LoAF.enableScriptPositionConversion()) === true;
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return (s || (s = n("Promise"))).all(e.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ duration, executionStart, forcedStyleAndLayoutDuration, invoker, invokerType, pauseDuration, sourceCharPosition, sourceFunctionName, sourceURL, windowAttribution }) {
                    const m = yield o("ScriptPositionMapper").getLineAndColumnFromCharPosition(sourceURL, sourceCharPosition);
                    return {
                        duration,
                        executionStart,
                        forcedStyleAndLayoutDuration,
                        invoker,
                        invokerType,
                        pauseDuration,
                        sourceCharPosition,
                        sourceFunctionName,
                        sourceURL,
                        windowAttribution,
                        line: m.line,
                        column: m.column
                    };
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
        });
        return b.apply(this, arguments);
    }
    function v(e, t, n) {
        if (n > 0) {
            r("addAnnotations")(e.annotations, {
                int: {
                    [t]: n
                }
            });
        }
    }
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const isLoggingSample = h();
            const n = isLoggingSample && y();
            const o = n ? yield C(e.scripts) : [];
            const a = r("OneTraceCore").startTrace(r("uuidv4")(), r("OneTraceCore").getCurrentTracePolicy(), "LONG_ANIMATION_FRAME", e.startTime, undefined, {
                bool: {
                    isLoggingSample
                }
            });
            const { blockingDuration, duration, firstUIEventTimestamp, renderStart, startTime, styleAndLayoutStart } = e;
            if (firstUIEventTimestamp > 0) {
                a.markerPoints.firstUIEventTimestamp = {
                    timeSinceStart: firstUIEventTimestamp
                };
            }
            if (renderStart > 0) {
                a.markerPoints.renderStart = {
                    timeSinceStart: renderStart
                };
            }
            if (styleAndLayoutStart > 0) {
                a.markerPoints.styleAndLayoutStart = {
                    timeSinceStart: styleAndLayoutStart
                };
            }
            const p = startTime - firstUIEventTimestamp;
            const _ = renderStart - startTime;
            const f = styleAndLayoutStart - renderStart;
            const b = startTime + duration - styleAndLayoutStart;
            const hasUIEvent = firstUIEventTimestamp > 0 && p > 0;
            let scriptsDuration = 0;
            let scriptsCompilationDuration = 0;
            let scriptsPauseDuration = 0;
            let scriptsForceStyleAndLayoutDuration = 0;
            for (const I of e.scripts ?? []){
                const M = I.startTime ?? 0;
                const w = I.executionStart ?? 0;
                const A = w - M;
                if (A > 0) {
                    scriptsCompilationDuration += A;
                }
                scriptsPauseDuration += I.pauseDuration ?? 0;
                scriptsForceStyleAndLayoutDuration += I.forcedStyleAndLayoutDuration ?? 0;
                scriptsDuration += I.duration ?? 0;
            }
            if (firstUIEventTimestamp > 0) {
                v(a, "firstUIEventToStart", p);
            }
            if (startTime > 0) {
                v(a, "startToRender", _);
            }
            if (renderStart > 0) {
                v(a, "renderToStyleAndLayout", f);
            }
            if (styleAndLayoutStart > 0) {
                v(a, "styleAndLayoutToPaint", b);
            }
            r("addAnnotations")(a.annotations, {
                int: {
                    instanceNum: m++,
                    blockingDuration,
                    loafDuration: duration,
                    scriptsCompilationDuration,
                    scriptsDuration,
                    scriptsPauseDuration,
                    scriptsForceStyleAndLayoutDuration
                },
                string_array: {
                    long_animation_frame_scripts: o.map((e)=>JSON.stringify(e))
                },
                string: {
                    recentInteractionIndentifier: r("OneTraceCore").getRecentInteractionIndentifier()
                },
                bool: {
                    hasUIEvent
                }
            });
            g(a);
            r("OneTraceCore").endTrace(a.traceID, e.startTime + e.duration, "SUCCESS");
        });
        return R.apply(this, arguments);
    }
    function L(duration) {
        if (duration > 2000) {
            return 1;
        }
        if (duration > 1000) {
            return 0.8;
        }
        if (duration > 500) {
            return 0.5;
        }
        return duration / 500;
    }
    function E() {
        if (!(d || !u)) {
            const e = new window.PerformanceObserver(function(e) {
                const t = e.getEntriesByType("long-animation-frame");
                t.forEach((e)=>{
                    if ("blockingDuration" in e) {
                        const t = e;
                        c.forEach((e)=>{
                            e(t)?.finally(function() {});
                        });
                    }
                });
            });
            e.observe({
                buffered: true,
                type: "long-animation-frame"
            });
            let t = 0;
            k((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    if (!(t > p) && !(t > _ && Math.random() > L(e.duration))) {
                        const n = `${e.startTime}:${e.duration}`;
                        if (!f.has(n)) {
                            ++t;
                            try {
                                f.add(n);
                                yield S(e);
                            } catch (e) {} finally{
                                f.delete(n);
                                --t;
                            }
                        }
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
            d = true;
        }
    }
    function k(e) {
        if (u) {
            c.add(e);
            return function() {
                c.delete(e);
            };
        }
        return function() {};
    }
    l.canUseLongAnimationFrameAPI = u;
    l.logActiveTraceTypes = g;
    l.init = E;
    l.subscribe = k;
}, 98);