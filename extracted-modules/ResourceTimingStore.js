__d("ResourceTimingStore", [
    "performance"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 4000;
    const u = 3000;
    let c = new Map;
    let d = false;
    function m() {
        const e = Array.from(c.entries());
        c = new Map(e.slice(-u));
    }
    function p(e) {
        const t = e.indexOf("#");
        if (t === -1) {
            return e;
        }
        return e.slice(0, t);
    }
    function _(e) {
        for (const t of e){
            if (t instanceof PerformanceResourceTiming) {
                let n = "";
                try {
                    n = new URL(t.name).pathname;
                } catch (e) {}
                if (/\.(css|js)$/.test(n) && t != null && typeof t === "object" && typeof t.encodedBodySize === "number" && typeof t.decodedBodySize === "number" && typeof t.transferSize === "number") {
                    c.set(p(t.name), t);
                }
            }
        }
        if (c.size > s) {
            m();
        }
    }
    function f(e) {
        _(e.getEntries());
    }
    function g() {
        if (!d) {
            d = true;
            let t = null;
            if (typeof PerformanceObserver !== "undefined") {
                t = new PerformanceObserver(f);
                try {
                    t.observe({
                        buffered: true,
                        type: "resource"
                    });
                } catch (e) {}
            }
            if (typeof (e || (e = r("performance"))).getEntriesByType === "function") {
                _((e || (e = r("performance"))).getEntriesByType("resource"));
            }
        }
    }
    function h(e) {
        g();
        return c.get(p(e));
    }
    l.init = g;
    l.getEntryForURL = h;
}, 98);