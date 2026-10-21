__d("WAWebSubscriptionNotificationStore", [], function(t, n, r, o, a, i) {
    "use strict";
    let e = null;
    function l(t) {
        if (!(e != null && (t.stanzaId === e.stanzaId || t.timestamp < e.timestamp))) {
            e = t;
        }
    }
    function s() {
        e = null;
    }
    function u() {
        return e;
    }
    i.updateSubscriptionNotification = l;
    i.clearSubscriptionNotification = s;
    i.getSubscriptionNotification = u;
}, 66);