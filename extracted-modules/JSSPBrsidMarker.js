__d("JSSPBrsidMarker", [
    "Env",
    "JSSPTraceBaseTransformer",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = ((t)=>{
        function o() {
            return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(o, t);
        const o_prototype = o.prototype;
        o_prototype.transform = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const a = (e || (e = r("Env"))).brsid ?? 0;
                t.metadata = t.metadata ?? {};
                t.metadata.brsid = `${a}`;
                return t;
            });
            function o(e) {
                return t.apply(this, arguments);
            }
            return o;
        })();
        return o;
    })(r("JSSPTraceBaseTransformer"));
    l.default = s;
}, 98);