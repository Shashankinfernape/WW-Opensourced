__d("JSSPUrlCollector", [
    "JSSPTraceBaseDataCollector",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new Map;
    function s(e) {
        const t = new URL(e);
        const n = t.origin + t.pathname;
        return n;
    }
    const u = ((t)=>{
        function r() {
            return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.onProfilerStarts = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                e.set(t, {
                    urlBeforeTraceStarts: s(document.URL)
                });
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        r_prototype.onProfilerEnds = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r) {
                const a = e.get(t) ?? {};
                a.urlAfterTraceEnds = s(document.URL);
                e.delete(t);
                r.urlData = a;
                return r;
            });
            function r(e, n, r) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        r_prototype.onProfilerAborts = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                e.delete(t);
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        return r;
    })(r("JSSPTraceBaseDataCollector"));
    l.default = u;
}, 98);