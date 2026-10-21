__d("unexpectedUseInComet", [
    "FBLogger",
    "gkx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        if (r("gkx")("20935")) {
            const t = `${e} called unexpectedly. This is not supported in Comet!`;
            const n = r("FBLogger")("comet_infra").blameToPreviousFrame().blameToPreviousFrame();
            n.mustfix(t);
        }
    }
    l.default = e;
}, 98);