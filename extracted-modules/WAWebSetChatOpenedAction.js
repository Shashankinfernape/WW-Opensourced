__d("WAWebSetChatOpenedAction", [
    "WAWebDBUpdateChatTable",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = {
                hasOpened: true
            };
            yield o("WAWebDBUpdateChatTable").updateChatTable(e.id, t);
            e.set(t);
        });
        return s.apply(this, arguments);
    }
    l.setChatHasOpened = e;
}, 98);