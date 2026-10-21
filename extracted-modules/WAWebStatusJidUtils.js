__d("WAWebStatusJidUtils", [
    "WAJids",
    "WAWebChatModel",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e = null;
    function s() {
        if (e == null) {
            e = new (o("WAWebChatModel")).Chat({
                id: o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID)
            });
        }
        return e;
    }
    l.getStatusChat = s;
}, 98);