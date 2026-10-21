__d("WAWebMessageReceiptUtils", [
    "WAWebAck",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime",
    "compactMap"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return e.isGroupStatus === true;
    }
    function s(e) {
        return e.isNewsletterStatus === true;
    }
    function u(t) {
        return e(t) || s(t);
    }
    function c(e) {
        return e.filter((e)=>e.ack < o("WAWebAck").ACK.READ).map((e)=>r("WAWebMsgKey").fromString(e.id)).filter((e)=>!e.fromMe);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = r("compactMap")(e, function(e) {
                return o("WAWebLidMigrationUtils").getAlternateMsgKey(e);
            });
            const n = yield o("WAWebSchemaMessage").getMessageTable().bulkGet(t.map((e)=>e.toString()));
            const a = new Set(n.map((e)=>e?.id));
            return r("compactMap")(e, function(e) {
                const t = o("WAWebLidMigrationUtils").getAlternateMsgKey(e);
                if (t && a.has(t.toString())) {
                    return t;
                }
                return e;
            });
        });
        return m.apply(this, arguments);
    }
    l.isGroupOrChannelStatusRow = u;
    l.getUnreadStatusKeysFromOthers = c;
    l.fixStatusReceiptKeys = d;
}, 98);