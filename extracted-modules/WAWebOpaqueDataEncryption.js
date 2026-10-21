__d("WAWebOpaqueDataEncryption", [
    "WAWebProtobufsMdStorageAccountLinkingOpaqueData.pb",
    "decodeProtobuf",
    "encodeProtobuf"
], function(t, n, r, o, a, i, l) {
    const e = new Set([
        "accesstoken",
        "fbid",
        "nonce",
        "encryptedPassword"
    ]);
    function s(t) {
        const n = {};
        Object.keys(t).forEach((r)=>{
            if (e.has(r)) {
                n[r] = t[r];
                delete t[r];
            }
        });
        const r = o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufsMdStorageAccountLinkingOpaqueData.pb").AccountLinkingOpaqueDataSpec, n);
        return r.readBuffer();
    }
    function u(e) {
        const t = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsMdStorageAccountLinkingOpaqueData.pb").AccountLinkingOpaqueDataSpec, e);
        return t;
    }
    l.moveEncFieldToOpaqueData = s;
    l.moveOpaqueDataToEncField = u;
}, 98);