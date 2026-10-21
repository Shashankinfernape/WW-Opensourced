__d("cometRouterPopPushViewSource", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = "close_button";
    let l = null;
    function s(e) {
        l = e;
    }
    function u() {
        const e = l;
        l = null;
        return e;
    }
    i.COMET_PUSH_VIEW_CLOSE_SOURCE = e;
    i.updateCometRouterPopPushViewSource = s;
    i.consumeCometRouterPopPushViewSource = u;
}, 66);