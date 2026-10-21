__d("WAWebSyncdMutationsCryptoUtils", [
    "WACryptoAesCbc",
    "WACryptoDependencies",
    "WACryptoHmac",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdCryptoConst",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdKeyTypes"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        const n = o("WAWebSyncdKeyTypes").fromSyncKeyId(t);
        const r = e === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET ? o("WAWebSyncdCryptoConst").OPERATION_SET_HEX : e === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE ? o("WAWebSyncdCryptoConst").OPERATION_REMOVE_HEX : (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
        const buffer = new Uint8Array([
            parseInt(r, 16)
        ]).buffer;
        const i = new Uint8Array(buffer.byteLength + n.byteLength);
        i.set(new Uint8Array(buffer));
        i.set(new Uint8Array(n), buffer.byteLength);
        return i.buffer;
    }
    function s(e, t) {
        const n = Math.max(0, o("WAWebSyncdCryptoConst").MAX_OF_MIN_DATA_LENGTH - e - t);
        const r = new Uint8Array(n);
        o("WACryptoDependencies").getCrypto().getRandomValues(r);
        return r.buffer;
    }
    function u(e, t, n) {
        return o("WACryptoAesCbc").aesCbcEncrypt(t, n, e);
    }
    function c(e, t, n) {
        const r = new Uint8Array(o("WAWebSyncdCryptoConst").OCTET_LENGTH);
        r.set([
            e.byteLength
        ], r.byteLength - 1);
        const a = o("WAWebSyncdCryptoUtils").combine([
            e,
            t,
            r.buffer
        ]);
        return o("WACryptoHmac").hmacSha512(n, a, o("WAWebSyncdCryptoConst").MAC_LENGTH);
    }
    function d(e, t, n) {
        return o("WACryptoAesCbc").aesCbcDecrypt(t, e, n);
    }
    l.generateAssociatedData = e;
    l.generatePadding = s;
    l.generateCipherText = u;
    l.generateMac = c;
    l.decryptCipherText = d;
}, 98);