__d("WAWebStatusUtils", [
    "fbt",
    "WAWebAck"
], function(t, n, r, o, a, i, l, s) {
    function e(e) {
        let t;
        if (e < o("WAWebAck").ACK.SENT) {
            t = s._("Pending");
        } else if (e === o("WAWebAck").ACK.SENT) {
            t = s._("Sent");
        } else if (e === o("WAWebAck").ACK.RECEIVED) {
            t = s._("Delivered");
        } else {
            t = s._("Read");
        }
        return t;
    }
    l.getMessageStatusLabel = e;
}, 226);