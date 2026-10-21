__d("WAConcurrentIterate", [
    "Promise",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i) {
    "use strict";
    let e;
    function l(t, r, o) {
        const a = [];
        const i = [];
        let l = 0;
        const s = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                while(l < t){
                    const e = l;
                    l++;
                    i[e] = yield r(e);
                }
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        for(let u = Math.min(t, o), c = 0; c < u; c++){
            a.push(s());
        }
        return (e || (e = n("Promise"))).all(a).then(()=>i);
    }
    i.concurrentIterate = l;
}, 66);