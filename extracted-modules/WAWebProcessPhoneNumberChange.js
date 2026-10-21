__d("WAWebProcessPhoneNumberChange", [
    "WAJids",
    "WAWebBackendApi",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const oldJid = o("WAJids").validateChatJid(e.toJid());
            const newJid = o("WAJids").validateChatJid(t.toJid());
            if (!(oldJid == null || newJid == null)) {
                return o("WAWebBackendApi").frontendFireAndForget("updateNoteJidAction", {
                    oldJid,
                    newJid
                });
            }
        });
        return s.apply(this, arguments);
    }
    l.default = e;
}, 98);