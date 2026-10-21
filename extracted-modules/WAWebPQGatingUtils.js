__d("WAWebPQGatingUtils", [
    "WAWebABProps",
    "WAWebSessionScope"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    function u() {
        if (e == null) {
            e = o("WAWebABProps").getABPropConfigValue("pq_keys_upload") === true;
        }
        return e;
    }
    function c() {
        if (s == null) {
            s = u() && o("WAWebABProps").getABPropConfigValue("pq_1on1_message_enabled") === true;
        }
        return s;
    }
    function d() {
        if (c()) {
            return o("WAWebSessionScope").SessionScope.PQ;
        }
        return o("WAWebSessionScope").SessionScope.DEFAULT;
    }
    function m() {
        return false;
    }
    l.isPqKeysUploadEnabled = u;
    l.isPq1on1MessageEnabled = c;
    l.getOneToOneChatSessionScope = d;
    l.isPqKeyRollbackEnabled = m;
}, 98);