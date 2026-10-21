__d("WAWebAddMeContactAction", [
    "WAJids",
    "WAWebContactCollection",
    "WAWebLidAwareContactsDB",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAJids").toPhoneUserJid(e.user);
            yield r("WAWebLidAwareContactsDB").createOrMerge(t, {
                id: t
            });
            o("WAWebContactCollection").ContactCollection.gadd(e);
        });
        return s.apply(this, arguments);
    }
    l.addMeToContacts = e;
}, 98);