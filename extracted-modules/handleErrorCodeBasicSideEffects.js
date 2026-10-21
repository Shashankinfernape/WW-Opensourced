__d("handleErrorCodeBasicSideEffects", [
    "errorCode",
    "UserMismatchExpected"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
        if (e === 1357032 && o("UserMismatchExpected").getIsUserMismatchExpected() === true) {
            return true;
        }
        if (e === 1357001 || e === 1357032) {
            window.location.reload(true);
            return true;
        }
        return false;
    }
    l.default = e;
}, 98);