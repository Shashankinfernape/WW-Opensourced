__d("WAWebKeyManagementSendKeyRequestApi", [
    "Promise",
    "WALogger",
    "WAWebApiPeerMessageStore",
    "WAWebKeyManagementUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebOutgoingPeerMsgKey",
    "WAWebSendAppStateSyncMsgJob",
    "WAWebSyncdCriticalBootstrapProcessingApi",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdKeyTypes",
    "WAWebWamEnumBootstrapAppStateDataStageCode",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const a = yield o("WAWebKeyManagementUtils").getPeerDevices();
            if (a.length === 0) {
                throw r("err")("syncd: sendAppStateSyncKeyRequest: no peer devices available to request key from");
            }
            const keyIds = t.map((e)=>({
                    keyId: o("WAWebSyncdKeyTypes").fromSyncKeyId(e)
                }));
            const appStateSyncKeyRequest = {
                keyIds
            };
            const d = a.map((e)=>{
                const t = o("WAWebOutgoingPeerMsgKey").buildOutgoingPeerMsgKey(r("WAWebMsgKey").newId_DEPRECATED());
                return {
                    id: t,
                    to: e,
                    type: "protocol",
                    subtype: "app_state_sync_key_request",
                    kind: o("WAWebMsgType").MsgKind.PeerMessage,
                    appStateSyncKeyRequest
                };
            });
            const m = a.map((e)=>e.getDeviceId());
            const p = t.map((e)=>o("WAWebSyncdCryptoUtils").syncKeyIdToHex(e));
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: send key request key id ",
                " to peer deviceIds ",
                ""
            ])), p, m);
            yield o("WAWebApiPeerMessageStore").storePeerMessages(d);
            const _ = yield (c || (c = n("Promise"))).allSettled(d.map((e)=>o("WAWebSendAppStateSyncMsgJob").encryptAndSendKeyMsg({
                    msg: e
                })));
            const f = _.filter((e)=>e.status === "rejected");
            if (f.length > 0 && f.length < _.length) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: sendAppStateSyncKeyRequest: ",
                    "/",
                    " peer device(s) failed"
                ])), f.length, _.length);
            } else if (f.length === _.length) {
                const g = f.map((e)=>r("getErrorSafe")(e.reason).message).join(", ");
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[syncd] sendAppStateSyncKeyRequest: all ",
                    " peers failed: ",
                    ""
                ])), _.length, g);
                throw r("err")(`syncd: sendAppStateSyncKeyRequest failed for all ${_.length} peer device(s): ${g}`);
            }
            const h = m.filter((e, t)=>_[t].status === "fulfilled");
            o("WAWebSyncdCriticalBootstrapProcessingApi").logCriticalBootstrapStageIfNecessary(o("WAWebWamEnumBootstrapAppStateDataStageCode").BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.MISSING_KEYS_REQUESTED);
            return h;
        });
        return m.apply(this, arguments);
    }
    l.sendAppStateSyncKeyRequest = d;
}, 98);