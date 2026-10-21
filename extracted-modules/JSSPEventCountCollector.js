__d("JSSPEventCountCollector", [
    "JSSPTraceBaseDataCollector",
    "asyncToGeneratorRuntime",
    "performance"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = new Set([
        "click",
        "input"
    ]);
    const u = new Map;
    const c = ((t)=>{
        function o() {
            return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(o, t);
        const o_prototype = o.prototype;
        o_prototype.onProfilerStarts = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                let n = 0;
                for (const o of s){
                    n += (e || (e = r("performance"))).eventCounts?.get(o) ?? 0;
                }
                u.set(t, n);
            });
            function o(e) {
                return t.apply(this, arguments);
            }
            return o;
        })();
        o_prototype.onProfilerEnds = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
                const o = u.get(e) ?? null;
                u.delete(e);
                n.totalEventCount = o;
                return n;
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        o_prototype.onProfilerAborts = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                u.delete(e);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return o;
    })(r("JSSPTraceBaseDataCollector"));
    l.default = c;
}, 98);