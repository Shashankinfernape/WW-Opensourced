__d("WAWebGetPrivacyModeWhenSent", [
    "WAWebApiVerifiedBusinessName",
    "WAWebHandleMsgTypes.flow",
    "WAWebPrivacyModeSystemMsg",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (e.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT) {
                if (!o("WAWebUserPrefsMeUser").isMeAccount(e.author)) {
                    return t.privacyMode;
                }
                const n = t.privacyMode;
                const r = o("WAWebRuntimeEnvironmentUtils").isWorker() ? yield o("WAWebApiVerifiedBusinessName").getPrivacyMode(e.chat) : yield o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive("getPrivacyMode", {
                    id: e.chat
                });
                return o("WAWebPrivacyModeSystemMsg").getLatestPrivacyMode(r, n);
            }
        });
        return s.apply(this, arguments);
    }
    l.getPrivacyModeWhenSent = e;
}, 98);