__d("vulture", [
    "ExecutionEnvironment",
    "FBLogger",
    "JSResource",
    "VultureJSGating",
    "VultureJSPageLifecycle",
    "VultureJSServerHits",
    "asyncToGeneratorRuntime",
    "clearTimeout",
    "objectEntries",
    "requireDeferred",
    "setTimeout"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 0;
    const u = 10000;
    let c = null;
    r("requireDeferred")("bumpVultureJSHash").__setRef("vulture").onReadyImmediately(function(e) {
        c = e;
        b();
    });
    var d = false;
    let m = false;
    let p = null;
    var _ = new Map;
    var f = [];
    const g = 120000;
    function h(e) {
        const t = _.get(e);
        if (!(t === s || c == null)) {
            if (t == null) {
                c(e, 1);
            } else if (Math.floor(Math.random() * t) === 0) {
                c(e, t);
            }
        }
    }
    function y(e) {
        f.push(e);
    }
    function C() {
        if (p != null) {
            r("clearTimeout")(p);
            p = null;
        }
        m = false;
        d = true;
        b();
    }
    function b() {
        if (d && c != null) {
            while(f.length > 0){
                const e = f.pop();
                if (e != null) {
                    h(e);
                }
            }
        }
    }
    function v() {
        if (c != null) {
            while(f.length > 0){
                const e = f.pop();
                if (e != null) {
                    h(e);
                }
            }
        }
    }
    o("VultureJSPageLifecycle").onPageHide(v);
    function S() {
        r("JSResource")("VultureJSSampleRatesLoader").__setRef("vulture").load().then((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = yield e.loadSampleRates();
                for (const [o, a] of r("objectEntries")(t)){
                    _.set(o, a);
                }
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })()).catch((e)=>{
            r("FBLogger")("vulture_js", "sample_rate_load_timeout").catching(e).mustfix("Failed to fetch sample rates:  %s", e.getMessage());
        }).finally(C);
    }
    function R() {
        if (!m) {
            m = true;
            if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
                p = r("setTimeout")(function() {
                    C();
                    r("FBLogger")("vulture_js", "sample_rate_load_timeout").warn("Timed out attemping to fetch VultureJS sample rates");
                }, g);
                r("setTimeout")(S, u);
            } else {
                S();
            }
        }
    }
    function L(e) {
        if (o("VultureJSGating").isLoggingEnabled()) {
            if (o("VultureJSServerHits").collectServerHit(e)) {
                return;
            }
            if (d && c != null) {
                h(e);
            } else {
                y(e);
                R();
            }
        }
    }
    l.default = L;
}, 98);