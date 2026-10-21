__d("JsSelfProfilerIdleTraceRunner", [
    "JsSelfProfilerIdleProfilerSitevarConfig.experimental",
    "Promise",
    "QPLEvent",
    "Random",
    "VisibilityListener",
    "WebLoom",
    "asyncToGeneratorRuntime",
    "cr:13597",
    "performanceAbsoluteNow",
    "qex",
    "qpl"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = (u || (u = o("QPLEvent"))).getMarkerId(r("qpl")._(45088770, "466"));
    const qpl_instance_key = 0;
    const _ = `${m}_${qpl_instance_key}`;
    function f(min, max) {
        return Math.floor(r("Random").random() * (max - min)) + min;
    }
    function g(e) {
        return Math.floor(e * -Math.log(r("Random").random()));
    }
    function h(e) {
        return new (s || (s = n("Promise")))(function(t) {
            window.setTimeout(t, e);
        });
    }
    function y(e, t) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a) {
            if (n("cr:13597") == null) {
                const i = new Error("JSSP Idle Trace initialized but JSSP was disabled.");
                i.stack;
                throw i;
            }
            if (t > 0) {
                yield h(t);
            }
            const l = (e || (e = r("performanceAbsoluteNow")))();
            r("WebLoom").startTrace(_, d, l, new Set([
                n("cr:13597").loomProviderId
            ]));
            yield h(a);
            const s = e();
            const u = o("VisibilityListener").getHiddenTime(l, s);
            r("WebLoom").endTrace(_, s, {
                qpl_action: 2,
                hidden: u != null && u > 0
            });
        });
        return C.apply(this, arguments);
    }
    function b() {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const PAUSE_FOR = r("JsSelfProfilerIdleProfilerSitevarConfig.experimental").PAUSE_FOR;
            const RUN_FOR = r("JsSelfProfilerIdleProfilerSitevarConfig.experimental").RUN_FOR;
            const REPEAT = r("JsSelfProfilerIdleProfilerSitevarConfig.experimental").REPEAT;
            for(let o = f(REPEAT.min, REPEAT.max), a = 0; a < o; a++){
                const i = f(PAUSE_FOR.min, PAUSE_FOR.max);
                const l = f(RUN_FOR.min, RUN_FOR.max);
                yield y(i * 1000, l * 1000);
            }
        });
        return v.apply(this, arguments);
    }
    function S() {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const o = r("qex")._("274") ?? r("JsSelfProfilerIdleProfilerSitevarConfig.experimental").EXP_INTERVAL_MS.val;
            const a = r("qex")._("290") ?? r("JsSelfProfilerIdleProfilerSitevarConfig.experimental").EXP_RUN_FOR_MS.val;
            for(let i = r("qex")._("977") ?? r("JsSelfProfilerIdleProfilerSitevarConfig.experimental").EXP_REPEAT.val, l = 0; l < i; l++){
                const s = g(o);
                yield y(s, a);
            }
        });
        return R.apply(this, arguments);
    }
    const L = {
        init: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(trace_policy) {
                if (n("cr:13597") == null) {
                    const t = new Error("JSSP Idle Trace initialized but JSSP was disabled.");
                    t.stack;
                    throw t;
                }
                if (n("cr:13597").isSupported() && c !== true) {
                    const o = r("JsSelfProfilerIdleProfilerSitevarConfig.experimental").DISTRIBUTION;
                    const a = r("JsSelfProfilerIdleProfilerSitevarConfig.experimental").CONFIGURED_DISTRIBUTION;
                    d = {
                        type: "QPL",
                        qpl_marker_id: String(m),
                        qpl_instance_key,
                        sample_rate: 1,
                        trace_policy
                    };
                    c = true;
                    switch(a.val){
                        case o.uniform:
                            yield b();
                            break;
                        case o.exponential:
                            yield S();
                            break;
                    }
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })()
    };
    l.default = L;
}, 98);