__d("WAWebIdentityUpdateDeviceTableApi", [
    "Promise",
    "WAJids",
    "WALogger",
    "WAWebAdvDeviceNotificationApi",
    "WAWebAdvUpdateParticipantApi",
    "WAWebApiContact",
    "WAWebApiDeviceList",
    "WAWebApiGetDeviceUpdateLock",
    "WAWebBackendApi",
    "WAWebBizCoexHostedAddVerification",
    "WAWebBizCoexUtils",
    "WAWebDBEncryptMultipleMsgs",
    "WAWebDBStoreEncryptedMsgs",
    "WAWebDeviceListPk",
    "WAWebGetMessageCache",
    "WAWebProtobufsAdv.pb",
    "WAWebSignalSessionApi",
    "WAWebSyncdStoreMissingKeys",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "cr:16885",
    "err"
], function(t, n, r, o, a, i, l) {
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
    function h(e, t) {
        if (e == null) {
            if (t === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED) {
                return t;
            }
            return null;
        }
        if (e === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED) {
            if (t === o("WAWebProtobufsAdv.pb").ADVEncryptionType.E2EE) {
                return t;
            }
            return null;
        }
        if (e === o("WAWebProtobufsAdv.pb").ADVEncryptionType.E2EE) {
            if (t === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED) {
                return t;
            }
            return null;
        }
        if (e === o("WAWebProtobufsAdv.pb").ADVEncryptionType.NON_E2EE) {
            return null;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function y(e, t, n, r, o) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a, i = false, l, u) {
            yield (g || (g = n("Promise"))).all(a.filter((e)=>e.id !== o("WAJids").DEFAULT_DEVICE_ID).map((e)=>L(o("WAWebWidFactory").createDeviceWidFromUserAndDevice(t.user, t.server, e.id))));
            const c = [];
            const d = a.map((e)=>e.id).filter((e)=>e !== o("WAJids").DEFAULT_DEVICE_ID);
            const m = h(l, u);
            if (m === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "clearDeviceRecord: check coex cache for ",
                    ""
                ])), t?.toLogString());
                o("WAWebBizCoexHostedAddVerification").assertThrowsWidAdvTypeFromVerificationCache(t);
                yield o("WAWebUserPrefsMultiDevice").setHaveProcessedCoexAdv();
            }
            const p = yield S([
                {
                    wid: t,
                    added: c,
                    removed: d,
                    isNewRecord: false,
                    newAdvAccountType: m
                }
            ], i, m != null);
            const { chatIds, encryptedNotifications } = p;
            let y = null;
            yield o("WAWebApiGetDeviceUpdateLock").getDeviceUpdateLock({
                callback: (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                        const e = encryptedNotifications.length > 0 ? o("WAWebDBStoreEncryptedMsgs").storeEncryptedDBMessages(encryptedNotifications, chatIds, false) : (g || (g = n("Promise"))).resolve();
                        const a = o("WAWebAdvUpdateParticipantApi").updateGroupParticipantsInTransaction(t, c, d);
                        const i = {
                            id: o("WAWebDeviceListPk").createDeviceListPK(t),
                            deleted: true
                        };
                        if (m === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED) {
                            i.deletedChangedToHost = true;
                        }
                        const l = o("WAWebApiDeviceList").createOrReplaceDeviceRecord(i).catch((e)=>{
                            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                "remove from device list table failed"
                            ]))).verbose().sendLogs("remove from device list table failed when clearing device record");
                            throw r("err")("remove from device list table failed");
                        });
                        let u = (g || (g = n("Promise"))).resolve();
                        if (m != null) {
                            u = o("WAWebApiContact").updateContactAdvHostedType(t, m);
                            y = {
                                contactId: o("WAWebWidFactory").asUserWidOrThrow(t),
                                advAccountType: m
                            };
                        }
                        yield g.all([
                            e,
                            a,
                            l,
                            u
                        ]);
                    });
                    function a() {
                        return e.apply(this, arguments);
                    }
                    return a;
                })(),
                hasAdvAccountTypeChange: m != null,
                hasNewNotification: encryptedNotifications.length > 0,
                shouldUpdateSyncdMissingKeyDevices: false
            });
            if (y != null) {
                o("WAWebBackendApi").frontendFireAndForget("updateContactAdvAccountType", y);
            }
            o("WAWebBizCoexUtils").sendWamCoexPrivacySysMsgInsertSuccess(encryptedNotifications);
        });
        return C.apply(this, arguments);
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ deviceUpdateResult, offline = false, shouldAddHostedSystemMsgIfApplicable = false }) {
            const p = [];
            const _ = [];
            let shouldUpdateSyncdMissingKeyDevices = false;
            let y = false;
            let C = false;
            const b = [];
            deviceUpdateResult.forEach(({ currentRecord, update, wid })=>{
                const update_devices = update.devices;
                const i = update_devices.map((e)=>e.id);
                const l = currentRecord && !currentRecord.deleted ? currentRecord.devices.map((e)=>e.id) : [];
                const added = Array.from(new Set(i).difference(new Set(l))).filter((e)=>e !== o("WAJids").DEFAULT_DEVICE_ID);
                const u = Array.from(new Set(l).difference(new Set(i))).filter((e)=>e !== o("WAJids").DEFAULT_DEVICE_ID);
                const isNewRecord = currentRecord == null;
                const d = h(currentRecord?.advAccountType, update?.advAccountType);
                if (d === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED) {
                    if (b.length < 3) {
                        b.push(wid?.toLogString());
                    }
                    o("WAWebBizCoexHostedAddVerification").assertThrowsWidAdvTypeFromVerificationCache(wid);
                }
                if (d != null) {
                    y = true;
                }
                if (d === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED) {
                    C = true;
                }
                p.push({
                    wid,
                    added,
                    removed: u,
                    isNewRecord,
                    newAdvAccountType: d
                });
                u.forEach((e)=>{
                    _.push(o("WAWebWidFactory").createDeviceWidFromUserAndDevice(wid.user, wid.server, e));
                });
                if (o("WAWebUserPrefsMeUser").isMeAccount(wid) && u.length > 0) {
                    shouldUpdateSyncdMissingKeyDevices = true;
                }
            });
            if (b.length > 0) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "bulkApplyDeviceUpdates: checked coex cache for ",
                    " wids => ",
                    ""
                ])), b.length, b);
            }
            if (C === true) {
                yield o("WAWebUserPrefsMultiDevice").setHaveProcessedCoexAdv();
            }
            const v = yield S(p, offline, (offline || shouldAddHostedSystemMsgIfApplicable) && y);
            const { chatIds, encryptedNotifications } = v;
            (g || (g = n("Promise"))).all(_.map((e)=>L(e))).catch((e)=>{
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "remove identity of deleted devices failed"
                ]))).verbose().sendLogs("remove identity of deleted devices failed when applying device update");
            });
            const hasAdvAccountTypeChange = encryptedNotifications?.length > 0;
            const I = [];
            yield o("WAWebApiGetDeviceUpdateLock").getDeviceUpdateLock({
                callback: (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                        const e = encryptedNotifications.length > 0 ? o("WAWebDBStoreEncryptedMsgs").storeEncryptedDBMessages(encryptedNotifications, chatIds, false) : (g || (g = n("Promise"))).resolve();
                        const a = o("WAWebAdvUpdateParticipantApi").bulkUpdateGroupParticipantsInTransaction(p);
                        const i = o("WAWebApiDeviceList").bulkCreateOrReplaceDeviceRecord(deviceUpdateResult.map((e)=>e.update)).catch((e)=>{
                            o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                "bulkCreateOrReplace into device list table failed"
                            ]))).verbose().sendLogs("bulkCreateOrReplace into device list table failed when applying device update");
                            throw r("err")("bulkCreateOrReplace into device list table failed");
                        });
                        const l = shouldUpdateSyncdMissingKeyDevices ? i.then(()=>o("WAWebSyncdStoreMissingKeys").updateMissingKeyDevices().catch((e)=>{
                                o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                                    "syncd: updateMissingKeyDevices failed with error:\n        ",
                                    ""
                                ])), String(e));
                            })) : (g || (g = n("Promise"))).resolve();
                        const s = [];
                        if (hasAdvAccountTypeChange) {
                            p.forEach(({ newAdvAccountType, wid })=>{
                                if (newAdvAccountType != null) {
                                    s.push(o("WAWebApiContact").updateContactAdvHostedType(wid, newAdvAccountType));
                                    I.push({
                                        contactId: o("WAWebWidFactory").asUserWidOrThrow(wid),
                                        advAccountType: newAdvAccountType
                                    });
                                }
                            });
                        }
                        yield (g || (g = n("Promise"))).all([
                            e,
                            a,
                            i,
                            l
                        ].concat(s));
                    });
                    function a() {
                        return e.apply(this, arguments);
                    }
                    return a;
                })(),
                hasAdvAccountTypeChange,
                hasNewNotification: encryptedNotifications.length > 0,
                shouldUpdateSyncdMissingKeyDevices
            });
            for (const T of I){
                o("WAWebBackendApi").frontendFireAndForget("updateContactAdvAccountType", T);
            }
            if (n("cr:16885") != null) {
                n("cr:16885").observeAeaAdvStates(deviceUpdateResult.flatMap(({ update, wid })=>{
                    if (update.advAccountType == null) {
                        return [];
                    }
                    return [
                        {
                            user: wid,
                            advAccountType: update.advAccountType
                        }
                    ];
                }));
            }
            o("WAWebBizCoexUtils").sendWamCoexPrivacySysMsgInsertSuccess(encryptedNotifications);
        });
        return v.apply(this, arguments);
    }
    function S(e, t, n) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n = false) {
            const r = n;
            const a = r === true ? yield o("WAWebAdvDeviceNotificationApi").bulkGenerateDeviceAndAdvAccountTypeChangeNotifications(e) : {
                notifications: [],
                chatIds: []
            };
            const { chatIds, notifications } = a;
            const s = r && notifications.some((e)=>o("WAWebBizCoexUtils").isCoexSystemMsgType(e.subtype));
            if (!t || s) {
                const encryptedNotifications = yield o("WAWebDBEncryptMultipleMsgs").encryptMultipleDBMsgs(notifications);
                k(notifications).catch((e)=>{
                    o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "updateNotificationInModel failed"
                    ]))).verbose().sendLogs("updateNotificationInModel failed");
                });
                return {
                    chatIds,
                    encryptedNotifications
                };
            }
            o("WAWebGetMessageCache").getMessageCache().addMessages(notifications.map((e)=>({
                    msg: e
                })), false).catch((e)=>{
                o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "add notifications to message cache failed"
                ]))).verbose().sendLogs("add notifications to message cache failed");
            });
            return {
                chatIds: [],
                encryptedNotifications: []
            };
        });
        return R.apply(this, arguments);
    }
    function L(e) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                yield (g || (g = n("Promise"))).all([
                    o("WAWebSignalSessionApi").deleteRemoteInfo(e),
                    o("WAWebSignalSessionApi").deleteDeviceSenderKey(e)
                ]);
            } catch (t) {
                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "handleDevicesNotification: signal info cleanup failed ",
                    ""
                ])), e.user);
            }
        });
        return E.apply(this, arguments);
    }
    function k(notifications) {
        return (g || (g = n("Promise"))).all(notifications.map((e)=>o("WAWebBackendApi").frontendSendAndReceive("processMultipleMessages", {
                chatId: e.from,
                msgObjs: [
                    babelHelpers.extends({}, e, {
                        recvFresh: true,
                        isNewMsg: true
                    })
                ],
                meta: {
                    add: "after",
                    isHistory: false
                },
                processMessagesOrigin: "updateDeviceTableApi"
            })));
    }
    l.clearDeviceRecord = y;
    l.bulkApplyDeviceUpdate = b;
}, 98);