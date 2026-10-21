__d("WAWebVoipPermissionCheckCaptureRegistry", [
    "WALogger",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = new Map;
    function u(t, n) {
        let a = false;
        const i = function() {
            if (!a) {
                a = true;
                if (t != null) {
                    const l = s.get(t);
                    l?.delete(i);
                    if (l?.size === 0) {
                        s.delete(t);
                    }
                }
                try {
                    n();
                } catch (error) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: failed to dispose permission-check capture"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("voip-permission-check-capture-dispose-failed");
                }
            }
        };
        if (t != null) {
            let l = s.get(t);
            if (l == null) {
                l = new Set;
                s.set(t, l);
            }
            l.add(i);
        }
        return i;
    }
    function c(e) {
        const t = s.get(e);
        if (t != null) {
            for (const n of Array.from(t)){
                n();
            }
        }
    }
    l.registerPermissionCheckCapture = u;
    l.releasePermissionCheckCaptures = c;
}, 98);