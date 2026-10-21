__d("Random", [
    "Alea",
    "ServerNonce"
], function(t, n, r, o, a, i) {
    "use strict";
    const e = 4294967296;
    const ServerNonce = n("ServerNonce").ServerNonce;
    let s;
    function u() {
        if (s == null) {
            s = n("Alea")(ServerNonce);
        }
        return s;
    }
    var c = {
        random: (()=>{
            const n = typeof Uint32Array === "function" ? new Uint32Array(1) : null;
            const r = t.crypto || t.msCrypto;
            if (n != null) {
                try {
                    const o = r?.getRandomValues;
                    if (typeof o === "function") {
                        const a = o.bind(r);
                        return function() {
                            try {
                                a(n);
                            } catch (e) {
                                return u()();
                            }
                            return n[0] / e;
                        };
                    }
                } catch (e) {}
            }
            return u();
        })(),
        uint32: function() {
            return Math.floor(c.random() * e);
        },
        intBetween: function(t, n) {
            return Math.floor(c.random() * (n - t + 1) + t);
        },
        coinflip: ((e)=>{
            function t(t) {
                return e.apply(this, arguments);
            }
            t.toString = function() {
                return e.toString();
            };
            return t;
        })(function(e) {
            if (e === 0) {
                return false;
            }
            if (e <= 1) {
                return true;
            }
            return c.random() * e <= 1;
        })
    };
    a.exports = c;
}, null);