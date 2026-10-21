__d("WAWebApiChatCommon", [
    "WAWebHistorySyncLidChatGating",
    "WAWebSchemaChat",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return o("WAWebSchemaChat").getChatTable().get(e.toString(), false);
    }
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebSchemaChat").getChatTable().equals([
                "historyChatId"
            ], e, {
                shouldDecrypt: false,
                limit: 1
            });
            return t[0];
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (!r("WAWebWid").isWid(t)) {
                return null;
            }
            const n = o("WAWebWidFactory").createWid(t);
            if (n.isRegularUserPn() && o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat()) {
                return s(n.toString());
            }
            return e(n);
        });
        return d.apply(this, arguments);
    }
    l.getChatRecord = e;
    l.getChatRecordByHistoryChatId = s;
    l.getChatMaybeByHistory = c;
}, 98);