__d("WAWebBusinessProfileVersioningBridge", [
    "WAWebBizProfileGatingUtils"
], function(t, n, r, o, a, i, l) {
    const e = 3;
    const s = 4;
    const u = 16;
    const c = 32;
    const d = 64;
    const m = 128;
    const p = 256;
    function _() {
        return f(o("WAWebBizProfileGatingUtils").webBizProfileOptions());
    }
    function f(t) {
        let n = e | s | u | d | m | c;
        if (o("WAWebBizProfileGatingUtils").bizLinkedAccountsEnabled()) {
            n |= p;
        }
        return t & n;
    }
    l.getBusinessProfileQueryVersion = _;
}, 98);