__d("WABaseGlobals", [
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e = null;
    function s(t) {
        e = t;
    }
    function u() {
        if (e == null) {
            throw r("err")("Trying to access WAGlobals before being set");
        }
        return e;
    }
    function c(e) {
        const t = u();
        t.myJids = e;
    }
    function d() {
        const t = u().myJids?.deviceJid;
        if (t == null) {
            throw r("err")("Trying to access myDeviceJid, but it's not set");
        }
        return t;
    }
    function m() {
        const t = u().myJids?.userJid;
        if (t == null) {
            throw r("err")("Trying to access myUserJid, but it's not set");
        }
        return t;
    }
    l.setGlobals = s;
    l.setMyJids = c;
    l.getMyDeviceJid = d;
    l.getMyUserJid = m;
}, 98);