__d("WAWebCoexV2ReceiptRecipient", [
    "WAWebLidMigrationUtils",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WAWebWidFactory").asUserWidOrThrow(e);
        if (t.isFbidBot()) {
            return t;
        }
        return o("WAWebLidMigrationUtils").toUserLid(t);
    }
    l.toCoexV2ReceiptRecipient = e;
}, 98);