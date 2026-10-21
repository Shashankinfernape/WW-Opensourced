__d("SubscriptionsHandler", [
    "invariant"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    const e = [
        "remove",
        "reset",
        "unsubscribe",
        "cancel",
        "dispose"
    ];
    function u(t) {
        for (const n of e){
            if (typeof t[n] === "function") {
                return t[n];
            }
        }
    }
    function c(e) {
        let t;
        if ((t = u(e)) != null) {
            t.call(e);
        }
    }
    const d = (()=>{
        function e() {
            this.$1 = [];
        }
        const t = e.prototype;
        t.addSubscriptions = function(...t) {
            if (!t.every(u)) {
                s(0, 3659);
            }
            if (this.$1 != null) {
                this.$1 = this.$1.concat(t);
            } else {
                t.forEach(c);
            }
        };
        t.engage = function() {
            if (this.$1 == null) {
                this.$1 = [];
            }
        };
        t.release = function() {
            if (this.$1 != null) {
                this.$1.forEach(c);
                this.$1 = null;
            }
        };
        t.releaseOne = function(t) {
            const e = this.$1;
            if (e != null) {
                const n = e.indexOf(t);
                if (n !== -1) {
                    c(t);
                    e.splice(n, 1);
                    if (e.length === 0) {
                        this.$1 = null;
                    }
                }
            }
        };
        return e;
    })();
    l.default = d;
}, 98);