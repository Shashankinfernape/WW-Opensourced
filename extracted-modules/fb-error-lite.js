__d("fb-error-lite", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = {
        PREVIOUS_FILE: 1,
        PREVIOUS_FRAME: 2,
        PREVIOUS_DIR: 3,
        FORCED_KEY: 4
    };
    function err(t, ...o) {
        const n = new Error(t);
        if (n.stack === undefined) {
            try {
                throw n;
            } catch (e) {}
        }
        n.messageFormat = t;
        n.messageParams = o.map((e)=>String(e));
        n.taalOpcodes = [
            e.PREVIOUS_FRAME
        ];
        return n;
    }
    const s = {
        err,
        TAALOpcode: e
    };
    i.default = s;
}, 66);