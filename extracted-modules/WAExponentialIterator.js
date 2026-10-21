__d("WAExponentialIterator", [], function(t, n, r, o, a, i) {
    "use strict";
    function* e(e) {
        let t = 1;
        while(true){
            yield t;
            t *= e;
        }
    }
    i.default = e;
}, 66);