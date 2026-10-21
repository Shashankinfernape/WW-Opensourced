__d("WAWebCryptoLibrarySessionApi", [
    "WAWebCryptoLibrary"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return o("WAWebCryptoLibrary").getRemoteRegId(e, t).then((e)=>e?.regId);
    }
    function s(e, deviceId, sessionScope) {
        const e_kyberKey = e.kyberKey;
        const sessionInfo = {
            identity: new Uint8Array(e.identityKey),
            oneTimeKey: e.preKey != null ? {
                id: e.preKey.keyId,
                publicKey: new Uint8Array(e.preKey.publicKey)
            } : null,
            regId: e.registrationId,
            signedKey: {
                id: e.signedPreKey.keyId,
                publicKey: new Uint8Array(e.signedPreKey.publicKey),
                signature: new Uint8Array(e.signedPreKey.signature)
            },
            kyberKey: e_kyberKey != null ? {
                id: e_kyberKey.keyId,
                publicKey: new Uint8Array(e_kyberKey.publicKey),
                signature: new Uint8Array(e_kyberKey.signature)
            } : null
        };
        return o("WAWebCryptoLibrary").createSignalSession({
            deviceId,
            sessionInfo,
            sessionScope
        });
    }
    function u(e, t, n) {
        return o("WAWebCryptoLibrary").processSenderKeyDistributionMsg(e, t, n);
    }
    l.getRemoteRegId = e;
    l.createSignalSession = s;
    l.createGroupSenderSignalSession = u;
}, 98);