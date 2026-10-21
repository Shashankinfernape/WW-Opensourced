__d("cometAsyncRequestHeaders", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = [];
    function l() {
        return e.reduce((acc, item)=>{
            const n = item();
            return babelHelpers.extends({}, n, acc);
        }, {});
    }
    function s(t) {
        e.push(t);
    }
    i.getHeaders = l;
    i.registerHeaderProvider = s;
}, 66);