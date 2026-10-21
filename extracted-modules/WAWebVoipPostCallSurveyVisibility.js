__d("WAWebVoipPostCallSurveyVisibility", [], function(t, n, r, o, a, i) {
    "use strict";
    let e = 0;
    function l() {
        return e > 0;
    }
    function s() {
        e++;
        let t = false;
        return function() {
            if (!t) {
                t = true;
                e--;
            }
        };
    }
    i.getIsPostCallSurveyVisible = l;
    i.markPostCallSurveyVisible = s;
}, 66);