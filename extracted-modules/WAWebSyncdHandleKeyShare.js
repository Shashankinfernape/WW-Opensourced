__d("WAWebSyncdHandleKeyShare", [
    "Promise",
    "WACryptoUtils",
    "WALogger",
    "WAWebGetSyncKey",
    "WAWebSyncd",
    "WAWebSyncdConst",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdDbCallbacksApi",
    "WAWebSyncdKeyManagementUtils",
    "WAWebSyncdStoreMissingKeys",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    const h = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        fractionalSecondDigits: 3
    };
    const y = new Map;
    function C(e, t) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(sharingDeviceId, r) {
            if (!r.some((e)=>e.fullKey != null)) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: key share from device ",
                    " has no keys with keydata."
                ])), sharingDeviceId);
            }
            yield (g || (g = n("Promise"))).all(r.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ fullKey, keyId }) {
                    if (fullKey != null) {
                        const i = o("WAWebSyncdCryptoUtils").syncKeyIdToHex(keyId);
                        const l = yield o("WAWebGetSyncKey").getSyncKeyInTransaction_DO_NOT_USE(keyId);
                        if (!l) {
                            yield o("WAWebGetSyncKey").setSyncKeyInTransaction(fullKey);
                            if (y.has(i)) {
                                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                    "syncd: already have in memory key ",
                                    " from device ",
                                    "."
                                ])), i, sharingDeviceId);
                            }
                            y.set(i, {
                                keyId,
                                fullKey,
                                sharingDeviceId
                            });
                            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "syncd: stored key share key id ",
                                " from device ",
                                ". payload key id: ",
                                ".\n        timestamp raw: ",
                                ". timestamp: ",
                                ". device from key id: ",
                                ". epoch ",
                                ""
                            ])), o("WAWebSyncdCryptoUtils").syncKeyIdToHex(keyId), sharingDeviceId, o("WAWebSyncdCryptoUtils").syncKeyIdToHex(fullKey.keyId), fullKey.timestamp, new Date(fullKey.timestamp).toLocaleString(undefined, h), o("WAWebSyncdKeyManagementUtils").getKeyDeviceId(fullKey.keyId), o("WAWebSyncdKeyManagementUtils").getKeyEpoch(fullKey.keyId));
                        } else {
                            const g = l.timestamp !== fullKey.timestamp;
                            const C = l.keyEpoch !== fullKey.keyEpoch;
                            const b = !o("WACryptoUtils").arrayBuffersEqual(l.keyData, fullKey.keyData);
                            const v = l.keyData.byteLength !== fullKey.keyData.byteLength;
                            const S = l.fingerprint.currentIndex !== fullKey.fingerprint.currentIndex;
                            const R = l.fingerprint.rawId !== fullKey.fingerprint.rawId;
                            const L = !l.fingerprint.deviceIndexes.every((e, t)=>e === fullKey.fingerprint.deviceIndexes[t]);
                            if (L) {
                                l.fingerprint.deviceIndexes.every((e, t)=>{
                                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                        "syncd: comparing fingerprint element ",
                                        " index ",
                                        " to ",
                                        "\n            result: ",
                                        ""
                                    ])), e, t, fullKey.fingerprint.deviceIndexes[t], e === fullKey.fingerprint.deviceIndexes[t]);
                                });
                            }
                            if (b) {
                                yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(o("WAWebSyncdConst").CollectionName.CriticalBlock, `incoming shared key has mismatch with an existing key:
            key id: ${o("WAWebSyncdCryptoUtils").syncKeyIdToHex(fullKey.keyId)}
            sending client id: ${sharingDeviceId.toString()}
            timestamp: ${new Date(fullKey.timestamp).toLocaleString(undefined, h)}`);
                                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                    "syncd: key share mismatch extra details:\n              existing timestamp: ",
                                    ", new key timestamp: ",
                                    "\n              existing fingerprint device indexes: ",
                                    ", new key fingerprint device indexes: ",
                                    "\n              existing key length: ",
                                    ", new key length: ",
                                    ",\n              sending client id: ",
                                    ",\n              existing key device id: ",
                                    "\n              new key device id: ",
                                    "\n              existing key device epoch: ",
                                    "\n              new key device epoch: ",
                                    "\n              existing key id:  ",
                                    "\n              new key id:  ",
                                    "\n              index key id: ",
                                    "\n          "
                                ])), new Date(l.timestamp).toLocaleString(undefined, h), new Date(fullKey.timestamp).toLocaleString(undefined, h), l.fingerprint.deviceIndexes, fullKey.fingerprint.deviceIndexes, l.keyData.byteLength, fullKey.keyData.byteLength, sharingDeviceId, o("WAWebSyncdKeyManagementUtils").getKeyDeviceId(l.keyId), o("WAWebSyncdKeyManagementUtils").getKeyDeviceId(fullKey.keyId), o("WAWebSyncdKeyManagementUtils").getKeyEpoch(l.keyId), o("WAWebSyncdKeyManagementUtils").getKeyEpoch(fullKey.keyId), o("WAWebSyncdCryptoUtils").syncKeyIdToHex(l.keyId), o("WAWebSyncdCryptoUtils").syncKeyIdToHex(fullKey.keyId), o("WAWebSyncdCryptoUtils").syncKeyIdToHex(keyId));
                                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                                    "syncd: all shared keys in payload: ",
                                    ""
                                ])), r.map((e)=>o("WAWebSyncdCryptoUtils").syncKeyIdToHex(e.keyId)));
                                const E = y.get(i);
                                if (E) {
                                    const k = E.fullKey;
                                    if (k) {
                                        o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                                            "syncd: details from previous in memory key for ",
                                            ":\n              memory key id: ",
                                            "\n              memory key device id: ",
                                            "\n              memory key device epoch: ",
                                            "\n              memory key timestamp: ",
                                            "\n              memory key fingerprint device indexes: ",
                                            "\n              memory key binary equal incoming binary? ",
                                            "\n              memory key binary equal existing key binary? ",
                                            "\n              memory key sharing device id: ",
                                            "\n            "
                                        ])), i, o("WAWebSyncdCryptoUtils").syncKeyIdToHex(E.keyId), o("WAWebSyncdKeyManagementUtils").getKeyDeviceId(E.keyId), o("WAWebSyncdKeyManagementUtils").getKeyEpoch(E.keyId), new Date(k.timestamp).toLocaleString(undefined, h), k.fingerprint.deviceIndexes, o("WACryptoUtils").arrayBuffersEqual(k.keyData, fullKey.keyData), o("WACryptoUtils").arrayBuffersEqual(k.keyData, l.keyData), E.sharingDeviceId);
                                    } else {
                                        o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                                            "syncd: no previous in memory key for ",
                                            ""
                                        ])), i);
                                    }
                                }
                                o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                                    "syncd: got key share for existing key with different key data\n            (timestampMismatch: ",
                                    ", epochMismatch: ",
                                    ", keyDataMismatch: ",
                                    ",\n              currentIndexMismatch: ",
                                    ", rowIdMismatch: ",
                                    ", fingerprintMismatch: ",
                                    ",\n              keyDataLengthMismatch: ",
                                    ")"
                                ])), g, C, b, S, R, L, v).sendLogs("syncd: got key share for existing key with different key data");
                            }
                        }
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
            yield o("WAWebSyncdStoreMissingKeys").updateMissingKeys(r.map(({ fullKey, keyId })=>({
                    keyId,
                    keyData: fullKey?.keyData
                })), sharingDeviceId);
            return o("WAWebSyncd").syncBlockedCollections();
        });
        return b.apply(this, arguments);
    }
    l.handleKeyShare = C;
}, 98);