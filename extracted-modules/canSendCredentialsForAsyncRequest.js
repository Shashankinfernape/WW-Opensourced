__d("canSendCredentialsForAsyncRequest", [
    "isFacebookURI",
    "isMetaAIURI"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "(^|\\.)instagram\\.com$";
    const s = "(^|\\.)threads\\.(net|com)$";
    const u = "(^|\\.)messenger\\.com$";
    const c = "(^|\\.)workplace\\.com$";
    const d = "(^|\\.)workrooms\\.com$";
    const m = "(^|\\.)work\\.meta\\.com$";
    const p = "(^|\\.)horizon\\.meta\\.com$";
    const _ = "(^|\\.)spark\\.meta\\.com$";
    const f = "(^|\\.)developers\\.meta\\.com$";
    const g = "(^|\\.)ar\\.meta\\.com$";
    const h = "(^|\\.)aidemos\\.meta\\.com$";
    const y = "(^|\\.)bugbounty\\.meta\\.com$";
    const C = "(^|\\.)devicemanager\\.meta\\.com$";
    const b = "(^|\\.)www\\.meta\\.com$";
    const v = "(^|\\.)wearables?(\\.[^.]+)*\\.developer\\.meta\\.com$";
    const S = [
        e,
        s,
        u,
        c,
        d,
        m,
        p,
        _,
        f,
        g,
        h,
        y,
        C,
        b,
        v
    ].join("|");
    const R = "(^|\\.)internalfb\\.com$";
    let L = null;
    let E = null;
    function k(e) {
        if (r("isFacebookURI")(e) || r("isMetaAIURI")(e)) {
            return true;
        }
        const t = e.getDomain();
        let n = E;
        if (n == null) {
            n = new RegExp(R, "i");
            E = n;
        }
        if (n.test(t)) {
            return true;
        }
        if (e.getProtocol() !== "https") {
            return false;
        }
        let o = L;
        if (o == null) {
            o = new RegExp(S, "i");
            L = o;
        }
        return o.test(t);
    }
    l.default = k;
}, 98);