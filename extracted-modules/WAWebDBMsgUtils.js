__d("WAWebDBMsgUtils", [
    "$InternalEnum",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageUtils",
    "WAWebLid1X1MigrationGating",
    "WAWebMsgKey",
    "WAWebProtobufMsgKeyUtils",
    "WAWebSchemaMessage",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum")({
        Message: 1,
        MessageEdit: 2
    });
    function s(e, t) {
        return o("WAWebSchemaMessage").getMessageTable().bulkGet(e).then((e)=>e.filter(Boolean).map((e)=>o("WAWebDBMessageSerialization").messageFromDbRow(e, t)));
    }
    function u(e, t) {
        const n = [];
        e.forEach((e)=>{
            const o = new (r("WAWebMsgKey"))({
                fromMe: true,
                remote: t,
                id: e
            });
            n.push(o.toString());
            const a = new (r("WAWebMsgKey"))({
                fromMe: false,
                remote: t,
                id: e
            });
            n.push(a.toString());
        });
        return o("WAWebSchemaMessage").getMessageTable().startsWithAnyOf([
            "id"
        ], n);
    }
    function c(e, t) {
        let n;
        if (e instanceof r("WAWebMsgKey")) {
            n = e.toString();
        } else {
            n = e;
        }
        return o("WAWebSchemaMessage").getMessageTable().get(n).then((e)=>{
            if (e) {
                return o("WAWebDBMessageSerialization").messageFromDbRow(e, t);
            }
            return null;
        });
    }
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(remoteJid, t) {
            if (t.length === 0) {
                return t;
            }
            let n = t;
            if (o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() && r("WAWebWid").isUser(remoteJid) && !r("WAWebWid").isStringLid(remoteJid)) {
                n = t.map(({ key, timestamp })=>{
                    const o = {};
                    if (timestamp != null) {
                        o.timestamp = timestamp;
                    }
                    if (key != null) {
                        o.key = babelHelpers.extends({}, key, {
                            remoteJid
                        });
                    }
                    return o;
                });
            }
            const a = n.map((e)=>o("WAWebProtobufMsgKeyUtils").protobufToMsgKey(r("nullthrows")(e.key)).toString());
            const i = yield o("WAWebSchemaMessage").getMessageTable().bulkGet(a, false);
            return t.filter((e, t)=>i[t] != null);
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return o("WAWebSchemaMessage").getMessageTable().bulkGet(e, false).then((e)=>e.map(Boolean));
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return o("WAWebSchemaMessage").getMessageTable().between([
            "internalId"
        ], o("WAWebDBMessageUtils").beginningOfChat(e), o("WAWebDBMessageUtils").endOfChat(e));
    }
    l.PendingReadReceiptType = e;
    l.getMsgsByMsgKey = s;
    l.getMsgsByMsgIdsAndChatId = u;
    l.getMsgByMsgKey = c;
    l.filterReceivedMessagesInRange = d;
    l.getMsgsExistByMsgKey = p;
    l.getMsgsByChatId = f;
}, 98);