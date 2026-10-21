__d("AdsALReactUtils", [
    "ALReactUtils",
    "AutoLoggingComponentNameValidator"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = o("AutoLoggingComponentNameValidator").getComponentNameValidator("ads");
    function s(t) {
        return o("ALReactUtils").getReactComponentName_THIS_CAN_BREAK(t, e);
    }
    function u(t) {
        return !e(t);
    }
    l.getReactComponentName_THIS_CAN_BREAK = s;
    l.isComponentNameBlocked = u;
}, 98);