__d("WAWebVoipRejectCallWithReasonEnc", [
    "Promise",
    "WAWebSignalStoreApi",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStackInterface",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e, t, n) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a, i) {
            const l = yield (e || (e = n("Promise"))).all([
                o("WAWebSignalStoreApi").waSignalStore.getRegistrationInfo(),
                o("WAWebVoipStackInterface").getVoipStackInterface()
            ]);
            const s = l[0];
            const u = l[1];
            if (s == null) {
                throw r("err")("No registration info found");
            }
            const c = a + 1;
            yield u?.rejectCallWithoutCallContext(t.call_id, i, t.peer_jid.toString({
                legacy: true,
                formatIncludeDevice: true
            }), t.call_creator.toString({
                legacy: true,
                formatIncludeDevice: true
            }), i ? o("WAWebVoipSignalingEnums").ENC_RETRY_RECEIPT_ATTRS.GROUP_CALL : o("WAWebVoipSignalingEnums").ENC_RETRY_RECEIPT_ATTRS.SINGLE_PARTICIPANT, c, s.registrationId);
            return c;
        });
        return u.apply(this, arguments);
    }
    l.rejectCallWithReasonEnc = s;
}, 98);