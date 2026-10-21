__d("has-flag-3.0.0", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = {};
    const l = {
        exports: e
    };
    function s() {
        l.exports = function(e, t) {
            t = t || process.argv;
            const n = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--";
            const r = t.indexOf(n + e);
            const o = t.indexOf("--");
            return r !== -1 && (o === -1 ? true : r < o);
        };
    }
    let u = false;
    function c() {
        if (!u) {
            u = true;
            s();
        }
        return l.exports;
    }
    function d(e) {
        switch(e){
            case undefined:
                return c();
        }
    }
    a.exports = d;
}, null);