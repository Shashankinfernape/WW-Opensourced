__d("getFalcoLogPolicy_DO_NOT_USE", [
    "FBLogger"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        r: 1
    };
    const s = {};
    function u(t) {
        const n = s[t];
        return n ?? (r("FBLogger")("staticresources").mustfix("Failed to find a Haste-supplied log policy for the Falco event ' + 'identified by token `%s`. Failing open (ie. with a sampling rate of 1.0).", t), e);
    }
    u.add = function(e, t) {
        Object.keys(e).forEach((n)=>{
            if (t) {
                t.entry++;
            }
            if (s[n] == null) {
                s[n] = e[n];
            } else if (t) {
                t.dup_entry++;
            }
        });
    };
    l.default = u;
}, 98);