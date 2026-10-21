__d("WAWebODS", [
    "promiseDone",
    "requireDeferred"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = r("requireDeferred")("WAWebODSImpl").__setRef("WAWebODS");
    const s = {
        addListener: function(n) {
            r("promiseDone")(e.load().then((e)=>{
                e.addListener(n);
            }));
        },
        incr: function(n, o) {
            r("promiseDone")(e.load().then((e)=>{
                e.incr(n, o);
            }));
        }
    };
    l.default = s;
}, 98);