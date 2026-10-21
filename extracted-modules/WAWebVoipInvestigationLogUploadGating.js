__d("WAWebVoipInvestigationLogUploadGating", [
    "WALogger",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s() {
        try {
            return r("justknobx")._("5297");
        } catch (error) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: investigation log upload JK unavailable, using fallback=true: ",
                ""
            ])), String(error));
            return true;
        }
    }
    l.isInvestigationLogUploadEnabled = s;
}, 98);