__d("getDefaultViewForNode", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        const t = e === document ? document : e.ownerDocument;
        return t.defaultView;
    }
    i.default = e;
}, 66);