__d("WAWebEmptyChatSystemMsg", [
    "WAWebInitialSystemMsg",
    "WAWebMsgGetters",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (!o("WAWebMsgGetters").getIsGroupMsg(e) && t.msgs.length === 0) {
                return r("WAWebInitialSystemMsg")(t.id, t.contact.privacyMode, t.contact.businessProfile?.automatedType);
            }
            return null;
        });
        return s.apply(this, arguments);
    }
    l.default = e;
}, 98);