__d("WAWebVoipCallFromUiStore", [
    "WAWebWamEnumCallFromUi"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new Set(Object.values(o("WAWebWamEnumCallFromUi").CALL_FROM_UI));
    let s = null;
    function u(t) {
        s = e.has(t) ? t : null;
    }
    function c() {
        return s;
    }
    function d() {
        s = null;
    }
    l.setCallFromUi = u;
    l.getCallFromUi = c;
    l.resetCallFromUi = d;
}, 98);