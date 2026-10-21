__d("debug-0.0.0", [
    "DebugStub"
], function(t, n, r, o, a, i) {
    "use strict";
    const e = n("DebugStub");
    const l = {};
    const s = {
        exports: l
    };
    function u() {
        s.exports = e;
    }
    let c = false;
    function d() {
        if (!c) {
            c = true;
            u();
        }
        return s.exports;
    }
    function m(e) {
        switch(e){
            case undefined:
                return d();
        }
    }
    a.exports = m;
}, null);