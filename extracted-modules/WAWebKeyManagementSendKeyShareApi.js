__d("WAWebKeyManagementSendKeyShareApi", [
    "Promise",
    "WALogger",
    "WAWebApiPeerMessageStore",
    "WAWebKeyManagementUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebOutgoingPeerMsgKey",
    "WAWebSendAppStateSyncMsgJob",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdKeyTypes",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            let appStateSyncKeyShare;
            let i;
            e: {
                const l = t;
                if ((typeof l === "object" && l !== null || typeof l === "function") && l.type === "key_rotation" && "keys" in l) {
                    const c = l.keys;
                    appStateSyncKeyShare = m(c);
                    i = yield o("WAWebKeyManagementUtils").getPeerDevices();
                    break e;
                }
                if ((typeof l === "object" && l !== null || typeof l === "function") && l.type === "missing_key" && "keys" in l && "orphanKeys" in l && "peerDeviceWid" in l) {
                    const { keys, orphanKeys, peerDeviceWid } = l;
                    appStateSyncKeyShare = m(keys, orphanKeys);
                    if (!o("WAWebUserPrefsMeUser").isMeAccount(peerDeviceWid)) {
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "syncd: send key share to a non-peer device ",
                            ""
                        ])), peerDeviceWid.toString()).sendLogs("key-share-non-peer");
                        return;
                    }
                    const f = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow();
                    i = [
                        o("WAWebWidFactory").createDeviceWidFromUserAndDevice(f.user, f.server, peerDeviceWid.getDeviceId())
                    ];
                    break e;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${l}`);
            }
            const g = i.map((e)=>{
                const t = o("WAWebOutgoingPeerMsgKey").buildOutgoingPeerMsgKey(r("WAWebMsgKey").newId_DEPRECATED());
                return {
                    id: t,
                    to: e,
                    type: "protocol",
                    subtype: "app_state_sync_key_share",
                    kind: o("WAWebMsgType").MsgKind.PeerMessage,
                    appStateSyncKeyShare
                };
            });
            const h = i.map((e)=>e.getDeviceId());
            const y = t.keys.map((e)=>o("WAWebSyncdCryptoUtils").syncKeyIdToHex(e.keyId));
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: send key share key id ",
                " to peer deviceIds ",
                " due to ",
                ""
            ])), y, h, t.type);
            yield o("WAWebApiPeerMessageStore").storePeerMessages(g);
            yield (u || (u = n("Promise"))).all(g.map((e)=>o("WAWebSendAppStateSyncMsgJob").encryptAndSendKeyMsg({
                    msg: e
                })));
        });
        return d.apply(this, arguments);
    }
    function m(e, t) {
        let keys = e.map((e)=>({
                keyId: {
                    keyId: o("WAWebSyncdKeyTypes").fromSyncKeyId(e.keyId)
                },
                keyData: {
                    keyData: o("WAWebSyncdKeyTypes").fromSyncKeyData(e.keyData),
                    fingerprint: {
                        rawId: e.fingerprint.rawId,
                        currentIndex: e.fingerprint.currentIndex,
                        deviceIndexes: e.fingerprint.deviceIndexes
                    },
                    timestamp: e.timestamp
                }
            }));
        if (t) {
            const r = t.map((e)=>({
                    keyId: {
                        keyId: o("WAWebSyncdKeyTypes").fromSyncKeyId(e)
                    },
                    keyData: undefined
                }));
            keys = keys.concat(r);
        }
        return {
            keys
        };
    }
    l.sendAppStateSyncKeyShare = c;
}, 98);