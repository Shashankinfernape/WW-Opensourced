__d("JSSPSampleDurationMarker", [
    "JSSPTraceBaseTransformer",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.transform = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                for(let r = this.isSamplesInOrder(e) ? e.samples : e.samples = [].concat(e.samples).sort((e, t)=>e.timestamp - t.timestamp), o = 0, a = r[0]?.stackId ?? -1, i = 0; i < r.length - 1; ++i){
                    const l = r[i];
                    const s = r[i + 1];
                    const u = s.timestamp - l.timestamp;
                    l.duration = u;
                    o += u;
                    if (a !== s.stackId) {
                        l.cumulativeDuration = o;
                        o = 0;
                        a = s.stackId ?? -1;
                    }
                    if (i === r.length - 2) {
                        l.cumulativeDuration = o;
                    }
                }
                return e;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.isSamplesInOrder = function(t) {
            for(let e = t.samples, n = 1; n < e.length; ++n){
                if (e[n].timestamp > e[n - 1].timestamp) {
                    return false;
                }
            }
            return true;
        };
        return t;
    })(r("JSSPTraceBaseTransformer"));
    l.default = e;
}, 98);