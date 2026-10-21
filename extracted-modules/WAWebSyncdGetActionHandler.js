__d("WAWebSyncdGetActionHandler", [
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e = null;
    let s = null;
    let u = null;
    function c(e) {
        u = e;
    }
    function d(t) {
        if (u == null) {
            throw r("err")("Action handlers not initialized");
        }
        if (e == null) {
            e = new Map(u.map((e)=>[
                    e.getAction(),
                    e
                ]));
        }
        return e.get(t);
    }
    function m() {
        if (u == null) {
            throw r("err")("Action handlers not initialized");
        }
        if (s == null) {
            s = Math.max(...u.map((e)=>e.getVersion()));
        }
        return s;
    }
    l.setActionHandlers = c;
    l.getActionHandler = d;
    l.maxSupportedVersion = m;
}, 98);