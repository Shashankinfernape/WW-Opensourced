__d("react-dom-0.0.0", [
    "ReactDOM"
], function(t, n, r, o, a, i) {
    "use strict";
    const e = n("ReactDOM");
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
            case void 0:
                return d();
            case "/client":
                return g();
        }
    }
    a.exports = h;
}, null);