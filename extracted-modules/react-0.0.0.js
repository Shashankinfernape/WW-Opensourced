__d("react-0.0.0", [
    "React"
], function(t, n, r, o, a, i) {
    "use strict";
    const e = n("React");
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
    const m = {};
    const p = {
        exports: m
    };
    function _() {
        p.exports = e;
    }
    let f = false;
    function g() {
        if (!f) {
            f = true;
            _();
        }
        return p.exports;
    }
    function h(e) {
        switch(e){
            case undefined:
                return d();
            case "/jsx-runtime":
                return g();
        }
    }
    a.exports = h;
}, null);