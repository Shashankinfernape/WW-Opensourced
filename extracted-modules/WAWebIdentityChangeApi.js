__d("WAWebIdentityChangeApi", [
    "Promise",
    "WAJids",
    "WAWebAdvUpdateParticipantApi",
    "WAWebApiContact",
    "WAWebApiDeviceList",
    "WAWebBackendApi",
    "WAWebBizCoexUtils",
    "WAWebContactSystemMsg",
    "WAWebDeviceListPk",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebModelStorageUtils",
    "WAWebMsgType",
    "WAWebOfflineDeviceCache",
    "WAWebProtobufsAdv.pb",
    "WAWebSchemaChat",
    "WAWebSecurityCodeApi",
    "WAWebSendTcTokenWhenDeviceIdentityChange",
    "WAWebSignal",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const r = e.device ?? o("WAJids").DEFAULT_DEVICE_ID;
            const a = o("WAWebWidFactory").asUserWidOrThrow(e);
            if (r === o("WAJids").DEFAULT_DEVICE_ID) {
                yield c({
                    wid: a
                });
                const i = yield o("WAWebSecurityCodeApi").addSecurityCodeChangedNotifications({
                    user: a,
                    offline: t
                });
                o("WAWebSendTcTokenWhenDeviceIdentityChange").sendTcTokenWhenDeviceIdentityChange(a);
                return i;
            }
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ offline: a, stanzaLid: i, wid: l }) {
            const s = [
                o("WAJids").DEFAULT_DEVICE_ID
            ];
            const u = [
                o("WAJids").DEFAULT_DEVICE_ID
            ];
            let c = false;
            if (a === true) {
                o("WAWebOfflineDeviceCache").OfflinePendingDeviceCache.addOfflinePendingDevice(String(l), null);
                yield o("WAWebModelStorageUtils").getStorage().lock([
                    "participant"
                ], function() {
                    return o("WAWebAdvUpdateParticipantApi").updateGroupParticipantsInTransaction(l, u, s);
                });
            } else {
                const d = yield o("WAWebApiDeviceList").getDeviceRecord(l);
                if (d && !d.deleted) {
                    d.devices.forEach((e)=>{
                        if (e.id !== o("WAJids").DEFAULT_DEVICE_ID) {
                            s.push(e.id);
                        }
                    });
                    if (d.advAccountType === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED) {
                        c = true;
                    }
                }
                (e || (e = n("Promise"))).all(s.map((t)=>{
                    if (t === o("WAJids").DEFAULT_DEVICE_ID) {
                        return (e || (e = n("Promise"))).resolve();
                    }
                    return o("WAWebSignal").Session.deleteRemoteInfo(o("WAWebWidFactory").createDeviceWidFromUserAndDevice(l.user, l.server, t));
                }));
                yield e.all([
                    o("WAWebModelStorageUtils").getStorage().lock([
                        "participant"
                    ], function() {
                        return o("WAWebAdvUpdateParticipantApi").updateGroupParticipantsInTransaction(l, u, s);
                    }),
                    o("WAWebApiDeviceList").createOrReplaceDeviceRecord({
                        id: o("WAWebDeviceListPk").createDeviceListPK(l),
                        deleted: true
                    })
                ]);
                if (c === true) {
                    yield o("WAWebApiContact").updateContactAdvHostedType(l, o("WAWebProtobufsAdv.pb").ADVEncryptionType.E2EE);
                    o("WAWebBackendApi").frontendFireAndForget("updateContactAdvAccountType", {
                        contactId: o("WAWebWidFactory").asUserWidOrThrow(l),
                        advAccountType: o("WAWebProtobufsAdv.pb").ADVEncryptionType.E2EE
                    });
                    const m = [
                        l.toString()
                    ];
                    if (l.isLid()) {
                        const p = o("WAWebApiContact").getPnIfLidIsLatestMapping(l);
                        if (p != null) {
                            m.push(p.toString());
                        }
                    } else {
                        if (i != null) {
                            m.push(i.toString());
                        }
                    }
                    const _ = yield o("WAWebSchemaChat").getChatTable().bulkGet(m, false);
                    const f = _.find(Boolean);
                    if (f != null) {
                        const g = o("WAWebWidFactory").createWid(f.id);
                        const h = o("WAWebContactSystemMsg").genNotificationMsg(g, {
                            type: "e2e_notification",
                            kind: o("WAWebMsgType").MsgKind.E2eNotification,
                            subtype: "encrypt_now",
                            templateParams: []
                        });
                        yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                            chatId: r("nullthrows")(h.from),
                            newMsg: h,
                            handleSingleMsgOrigin: "bizStateChangeNotification"
                        });
                    }
                    o("WAWebBizCoexUtils").triggerUsyncForCoexUpdate(l);
                }
            }
        });
        return d.apply(this, arguments);
    }
    l.handleNewIdentityImpl = s;
    l.clearDeviceRecordForIdentityChangeImpl = c;
}, 98);