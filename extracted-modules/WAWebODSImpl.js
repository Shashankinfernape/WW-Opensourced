__d("WAWebODSImpl", [
    "ODS",
    "WAWebODSObserver"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = "whatsapp_web";
    const u = {
        addListener: function(t) {
            r("WAWebODSObserver").addListener("event", t);
        },
        incr: function(n, a = 1) {
            (e || (e = o("ODS"))).bumpEntityKey(2363, s, n, a);
            r("WAWebODSObserver").emit("event", {
                count: a,
                key: n
            });
        }
    };
    l.default = u;
}, 98);