__d("WACryptoLibraryConfig", [], function(t, n, r, o, a, i) {
    "use strict";
    let e = {
        signalFutureMessagesMax: 2000,
        S508658AutoAcknowledgeStaleSessions: false,
        isPqKeysUploadEnabled: false,
        isPq1on1MessageEnabled: false
    };
    function l() {
        return e;
    }
    function s(t) {
        e = t;
    }
    i.getCryptoLibraryConfig = l;
    i.setCryptoLibraryConfig = s;
}, 66);