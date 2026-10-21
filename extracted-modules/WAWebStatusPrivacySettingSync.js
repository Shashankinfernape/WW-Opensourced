__d("WAWebStatusPrivacySettingSync", [
    "Promise",
    "WALogger",
    "WAWebBackendEventBus",
    "WAWebCrosspostingBackendGatingUtils",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsStatus",
    "WAWebUserPrefsStatusType",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = ((t)=>{
        function r(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.collectionName = o("WAWebSyncdConst").CollectionName.RegularHigh;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.getVersion = function() {
            return 7;
        };
        r_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.StatusPrivacy;
        };
        r_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                if (t.length !== 1) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd] unexpected mutation count ",
                        " for status privacy sync"
                    ])), t.length);
                    return t.map(()=>({
                            actionState: o("WAWebSyncdConst").SyncActionState.Malformed
                        }));
                }
                const r = t[t.length - 1];
                if (r.operation === "set") {
                    try {
                        const a = r.value;
                        const i = a.statusPrivacy;
                        if (!i) {
                            return [
                                o("WAWebSyncdIndexUtils").malformedActionValue(this.collectionName)
                            ];
                        }
                        const { mode, shareToFb, shareToIg, userJid } = i;
                        if (mode == null) {
                            return [
                                o("WAWebSyncdIndexUtils").malformedActionValue(this.collectionName)
                            ];
                        }
                        let p = [];
                        let setting;
                        let allowList = [];
                        let denyList = [];
                        e: {
                            if (mode === o("WAWebProtobufSyncAction.pb").SyncActionValue$StatusPrivacyAction$StatusDistributionMode.CONTACTS) {
                                setting = o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact;
                                p = o("WAWebUserPrefsStatus").calculateStatusPrivacyUpdateEntries({
                                    setting
                                });
                                break e;
                            }
                            if (mode === o("WAWebProtobufSyncAction.pb").SyncActionValue$StatusPrivacyAction$StatusDistributionMode.ALLOW_LIST) {
                                setting = o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList;
                                allowList = userJid.map(o("WAWebWidFactory").createWid).filter((e)=>e.isUser());
                                p = o("WAWebUserPrefsStatus").calculateStatusPrivacyUpdateEntries({
                                    setting,
                                    allowList
                                });
                                break e;
                            }
                            if (mode === o("WAWebProtobufSyncAction.pb").SyncActionValue$StatusPrivacyAction$StatusDistributionMode.DENY_LIST) {
                                setting = o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList;
                                denyList = userJid.map(o("WAWebWidFactory").createWid).filter((e)=>e.isUser());
                                p = o("WAWebUserPrefsStatus").calculateStatusPrivacyUpdateEntries({
                                    setting,
                                    denyList
                                });
                                break e;
                            }
                            if (mode === o("WAWebProtobufSyncAction.pb").SyncActionValue$StatusPrivacyAction$StatusDistributionMode.CLOSE_FRIENDS || mode === o("WAWebProtobufSyncAction.pb").SyncActionValue$StatusPrivacyAction$StatusDistributionMode.CUSTOM_LIST) {
                                break e;
                            }
                            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${mode}`);
                        }
                        const h = [];
                        if (o("WAWebCrosspostingBackendGatingUtils").crosspostSettingsSyncReceiverEnabled()) {
                            const y = [];
                            if (shareToFb != null) {
                                y.push(o("WAWebUserPrefsStatus").persistShareToFB(shareToFb));
                            }
                            if (shareToIg != null) {
                                y.push(o("WAWebUserPrefsStatus").persistShareToIG(shareToIg));
                            }
                            if (y.length > 0) {
                                h.push((u || (u = n("Promise"))).all(y).then(()=>{
                                    o("WAWebBackendEventBus").BackendEventBus.triggerUpdateCrosspostAutoShareSettings({
                                        shareToFB: shareToFb,
                                        shareToIG: shareToIg
                                    });
                                }));
                            }
                        }
                        if (p.length > 0) {
                            h.push(o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.bulkSetItemsToIndexedDB(p).then(()=>{
                                o("WAWebBackendEventBus").BackendEventBus.triggerUpdateStatusPrivacySettings({
                                    setting,
                                    allowList,
                                    denyList
                                });
                            }));
                        }
                        yield (u || (u = n("Promise"))).all(h);
                        return [
                            {
                                actionState: o("WAWebSyncdConst").SyncActionState.Success
                            }
                        ];
                    } catch (error) {
                        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[syncd] status privacy IDB write failed ",
                            ""
                        ])), error);
                        return t.map(()=>({
                                actionState: o("WAWebSyncdConst").SyncActionState.Failed
                            }));
                    }
                }
                return [
                    {
                        actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                    }
                ];
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        r_prototype.getStatusPrivacySettingMutation = function({ list, setting, shareToFB, shareToIG, timestamp }) {
            let l;
            switch(setting){
                case o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact:
                    l = o("WAWebProtobufSyncAction.pb").SyncActionValue$StatusPrivacyAction$StatusDistributionMode.CONTACTS;
                    break;
                case o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList:
                    l = o("WAWebProtobufSyncAction.pb").SyncActionValue$StatusPrivacyAction$StatusDistributionMode.ALLOW_LIST;
                    break;
                case o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList:
                    l = o("WAWebProtobufSyncAction.pb").SyncActionValue$StatusPrivacyAction$StatusDistributionMode.DENY_LIST;
                    break;
            }
            return o("WAWebSyncdActionUtils").buildPendingMutation({
                collection: this.collectionName,
                indexArgs: [],
                operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                version: this.getVersion(),
                timestamp,
                action: this.getAction(),
                value: {
                    statusPrivacy: babelHelpers.extends({
                        mode: l,
                        userJid: list
                    }, o("WAWebCrosspostingBackendGatingUtils").crosspostSettingsSyncSenderEnabled() ? {
                        shareToFb: shareToFB,
                        shareToIg: shareToIG
                    } : {}, {
                        customLists: [],
                        modes: []
                    })
                }
            });
        };
        return r;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const d = new c;
    l.default = d;
}, 98);