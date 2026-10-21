__d("WAWebVoipPermissionCheckCaptureOwner", [
    "WAWebCallCollection",
    "WAWebVoipPermissionCheckCaptureRegistry"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(call) {
        const t = call?.callLinkToken;
        const n = call?.id;
        const registryKeys = [];
        if (t != null && t !== "") {
            registryKeys.push(t);
        }
        if (n != null && n !== "" && n !== t) {
            registryKeys.push(n);
        }
        return {
            call,
            registryKeys
        };
    }
    function s(e, t) {
        let r = false;
        const a = [];
        const i = function() {
            if (!r) {
                r = true;
                for (const e of a){
                    e();
                }
                t();
            }
        };
        const release = o("WAWebVoipPermissionCheckCaptureRegistry").registerPermissionCheckCapture(e[0] ?? null, i);
        a.push(release);
        for(let s = 1; s < e.length; s++){
            a.push(o("WAWebVoipPermissionCheckCaptureRegistry").registerPermissionCheckCapture(e[s], i));
        }
        return {
            release,
            wasReleased: function() {
                return r;
            }
        };
    }
    function u(e) {
        return e != null && r("WAWebCallCollection").activeCall !== e;
    }
    l.getPermissionCheckOwner = e;
    l.registerPermissionCheckCaptureForKeys = s;
    l.didPermissionCheckCallEnd = u;
}, 98);