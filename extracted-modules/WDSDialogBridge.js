__d("WDSDialogBridge", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = 150;
    let l = null;
    let s = null;
    let u = null;
    function c(e) {
        if (l != null) {
            l(e);
        } else {
            u = e;
        }
    }
    function d() {
        if (s != null) {
            s();
        } else if (u != null) {
            u = null;
        }
    }
    function m(e, t) {
        l = e;
        s = t;
        if (u != null) {
            const n = u;
            u = null;
            e(n);
        }
        return function() {
            l = null;
            s = null;
        };
    }
    i.DIALOG_EXIT_ANIMATION_DURATION = e;
    i.openWDSDialog = c;
    i.closeWDSDialog = d;
    i.registerDialogManager = m;
}, 66);