__d("WAWebGlobals", [
    "WABaseGlobals",
    "WAJids",
    "err"
], function(t, n, r, o, a, i, l) {
    let e = null;
    function s() {
        if (e == null) {
            throw r("err")("globals api called before set");
        }
        return e;
    }
    function u() {
        return e != null;
    }
    function c(t) {
        e = t;
        o("WABaseGlobals").setGlobals(t);
    }
    function d() {
        const t = s().myJids?.deviceJid;
        if (t == null) {
            throw r("err")("Trying to access myDeviceJid, but it's not set");
        }
        return o("WAJids").unsafeCoerceToPhoneDeviceJid(t);
    }
    function m() {
        const e = s().lidDeviceJid;
        if (e != null) {
            return o("WAJids").unsafeCoerceToLidDeviceJid(e);
        }
        return null;
    }
    function p(e) {
        s().lidDeviceJid = e;
    }
    function _() {
        const e = s().displayName;
        return e;
    }
    function f(e) {
        s().displayName = e;
    }
    function g(t) {
        if (e != null) {
            s().allowHistorySyncPutAllowDuplicate = t;
        }
    }
    function h() {
        if (e == null) {
            return false;
        }
        return s().allowHistorySyncPutAllowDuplicate ?? false;
    }
    l.areGlobalsReady = u;
    l.setGlobals = c;
    l.getMyDeviceJid = d;
    l.getMyLidDeviceJid = m;
    l.setMyLidDeviceJid = p;
    l.getMyDisplayName = _;
    l.setMyDisplayName = f;
    l.setAllowHistorySyncPutAllowDuplicate = g;
    l.getAllowHistorySyncPutAllowDuplicate = h;
}, 98);