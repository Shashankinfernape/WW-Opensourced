__d("WAWebKeyManagementHandleKeyRequestApi", [
    "WALogger",
    "WAWebRequestKeyShare",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdHandleKeyRequest",
    "WAWebSyncdKeyTypes",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "compactMap"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            if (!o("WAWebUserPrefsMeUser").isMeAccount(n)) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: key request wid error"
                ]))).sendLogs("syncd: key request wid error");
                return;
            }
            const t_keyIds = t.keyIds;
            if (t_keyIds) {
                const i = r("compactMap")(t_keyIds, function(e) {
                    return e.keyId;
                }).map(o("WAWebSyncdKeyTypes").toSyncKeyId);
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[syncd] handleAppStateSyncKeyRequest device=",
                    " keyIds=[",
                    "]"
                ])), n.getDeviceId(), i.map(o("WAWebSyncdCryptoUtils").syncKeyIdToHex));
                if (i) {
                    const l = yield o("WAWebSyncdHandleKeyRequest").getKeysForKeyRequest(i);
                    const { keys, orphanKeys } = l;
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd] handleAppStateSyncKeyRequest -> share device=",
                        ""
                    ])), n.getDeviceId());
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd] keys=[",
                        "] orphans=[",
                        "]"
                    ])), keys.map((e)=>o("WAWebSyncdCryptoUtils").syncKeyIdToHex(e.keyId)), orphanKeys.map((e)=>o("WAWebSyncdCryptoUtils").syncKeyIdToHex(e)));
                    return o("WAWebRequestKeyShare").requestKeyShare(keys, orphanKeys, n);
                }
            }
        });
        return m.apply(this, arguments);
    }
    l.handleAppStateSyncKeyRequest = d;
}, 98);