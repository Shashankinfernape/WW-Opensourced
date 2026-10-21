__d("sister-3.0.2", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = {};
    const l = {
        exports: e
    };
    function s() {
        const e = function() {
            const e = {};
            const t = {};
            e.on = function(e, n) {
                const r = {
                    name: e,
                    handler: n
                };
                t[e] = t[e] || [];
                t[e].unshift(r);
                return r;
            };
            e.off = function(e) {
                const n = t[e.name].indexOf(e);
                if (n !== -1) {
                    t[e.name].splice(n, 1);
                }
            };
            e.trigger = function(e, n) {
                const r = t[e];
                let o;
                if (r) {
                    for(o = r.length; o--;){
                        r[o].handler(n);
                    }
                }
            };
            return e;
        };
        l.exports = e;
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