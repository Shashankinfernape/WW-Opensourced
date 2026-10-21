__d("WAWebDBUpdateContactTable", [
    "WAWebLidAwareContactsDB",
    "WAWebWidToJid"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WAWebWidToJid").widToUserJid(e);
        return r("WAWebLidAwareContactsDB").merge(n, t, {
            usePropsFilter: true
        });
    }
    l.updateContactTable = e;
}, 98);