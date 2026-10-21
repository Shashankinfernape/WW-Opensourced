__d("WAWebSettingsSyncHelpers", [
    "WAWebBackendApi",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(field, t, n) {
            if (n === "app") {
                yield o("WAWebBackendApi").frontendSendAndReceive("applyAppSetting", {
                    field,
                    value: t
                });
            } else {
                yield o("WAWebBackendApi").frontendSendAndReceive("applyPerChatSetting", {
                    field,
                    value: t,
                    chatJid: n
                });
            }
        });
        return s.apply(this, arguments);
    }
    l.applySettingUpdate = e;
}, 98);