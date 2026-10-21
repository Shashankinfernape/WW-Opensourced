__d("WAWebUserJourneyEventMs", [], function(t, n, r, o, a, i) {
    "use strict";
    function e() {
        const t = globalThis.performance?.now();
        if (t == null) {
            return null;
        }
        return Math.round(t);
    }
    i.userJourneyEventMs = e;
}, 66);