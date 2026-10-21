__d("WAWebCreateSendMsgRecord", [
    "WALogger",
    "WAWebAddonDBTable",
    "WAWebDBMessageSerialization",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebSchemaMessage",
    "WAWebSendMsgTypes",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t, n) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, a) {
            if (a === o("WAWebSendMsgTypes").SendMessageRecordType.Message) {
                const i = yield o("WAWebSchemaMessage").getMessageTable().get(t);
                if (i == null) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "resendUserMsgJob didn't find a msg in the db"
                    ])));
                    return null;
                }
                const data = new (o("WAWebMsgModel")).Msg(o("WAWebDBMessageSerialization").messageFromDbRow(i));
                return {
                    type: o("WAWebSendMsgTypes").SendMessageRecordType.Message,
                    data
                };
            } else if (a === o("WAWebSendMsgTypes").SendMessageRecordType.Addon) {
                const u = r("WAWebMsgKey").from(t);
                const c = yield o("WAWebAddonDBTable").addonDBTable.getByMsgKey(n, u);
                if (c == null) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "resendUserMsgJob didn't find an addonMsgData in the db"
                    ])));
                    return null;
                }
                return {
                    type: o("WAWebSendMsgTypes").SendMessageRecordType.Addon,
                    data: c
                };
            }
            throw r("err")(`unexpected msgRecordType: ${a}`);
        });
        return c.apply(this, arguments);
    }
    l.createMsgRecord = u;
}, 98);