__d("WAWebHandleDirtyBits", [
    "Promise",
    "WALogger",
    "WAWebAccountSyncJob",
    "WAWebApiPendingDeviceSync",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebClearDirtyBitsJob",
    "WAWebCommonNewsletterEnums",
    "WAWebDirtyBitsConsts",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebFetchAndUpdateBlocklistJob",
    "WAWebHandleOrgsDirtyBit",
    "WAWebMdAppStateDirtyBitsWamEvent",
    "WAWebNewsletterGatingUtils",
    "WAWebOfflineDeviceCache",
    "WAWebOfflineHandler",
    "WAWebPDFNTypes",
    "WAWebQueryAndUpdateGroupMetadataJob",
    "WAWebSyncd",
    "WAWebSyncdConst",
    "WAWebTos",
    "WAWebUserPrefsMeUser",
    "WAWebWamoNewsletterGatingUtils",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
    "compactMap",
    "requireDeferred"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = r("requireDeferred")("WAWebQueryAndUpdateAllNewslettersMetadataAction").__setRef("WAWebHandleDirtyBits");
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e = []) {
            let t = r("compactMap")(e, function(e) {
                return o("WAWebAccountSyncJob").AccountSyncType.cast(e);
            });
            if (t.length === 0) {
                t = Array.from(o("WAWebAccountSyncJob").AccountSyncType.members());
            }
            yield (u || (u = n("Promise"))).all(t.map((e)=>{
                if (e === o("WAWebAccountSyncJob").AccountSyncType.DEVICES) {
                    return f();
                }
                if (e === o("WAWebAccountSyncJob").AccountSyncType.PICTURE) {
                    return o("WAWebAccountSyncJob").getAndUpdateProfilePicture();
                }
                if (e === o("WAWebAccountSyncJob").AccountSyncType.PRIVACY) {
                    o("WAWebAccountSyncJob").updatePrivacySettings();
                } else if (e === o("WAWebAccountSyncJob").AccountSyncType.BLOCKLIST) {
                    o("WAWebFetchAndUpdateBlocklistJob").fetchAndUpdateBlocklist("dirty-bit");
                } else if (e === o("WAWebAccountSyncJob").AccountSyncType.OPTOUTLIST) {
                    o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget("updateOptOutList");
                } else if (e === o("WAWebAccountSyncJob").AccountSyncType.NOTICE) {
                    g();
                }
            }));
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return e.patches != null && e.patches.length > 0 || e.snapshot != null;
    }
    function _() {
        o("WAWebBackendEventBus").BackendEventBus.onceAppStateSyncCompleted(function(e) {
            const t = e.some(p);
            new (o("WAWebMdAppStateDirtyBitsWamEvent")).MdAppStateDirtyBitsWamEvent({
                dirtyBitsFalsePositive: !t
            }).commit();
        });
        return o("WAWebSyncd").markCollectionsForSync(Array.from(o("WAWebSyncdConst").CollectionName.members()));
    }
    function f() {
        if (!o("WAWebOfflineHandler").OfflineMessageHandler.hasInitOfflineResumeManager()) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "handleDeviceDirtyBit: offline resume manager not initialized"
            ]))).tags("non-sad").sendLogs("handleDeviceDirtyBit: offline resume manager not initialized");
            return o("WAWebAccountSyncJob").getDevices("notification");
        }
        const t = o("WAWebUserPrefsMeUser").getMeDeviceWids().map((e)=>e.toString());
        if (o("WAWebOfflineHandler").OfflineMessageHandler.isResumeFromRestartComplete()) {
            if (o("WAWebOfflineHandler").OfflineMessageHandler.isResumeOnSocketDisconnectInProgress()) {
                return o("WAWebApiPendingDeviceSync").addUserToPendingDeviceSync(t);
            }
        } else {
            t.forEach((e)=>o("WAWebOfflineDeviceCache").OfflinePendingDeviceCache.addOfflinePendingDevice(e, null));
            return (u || (u = n("Promise"))).resolve();
        }
        return o("WAWebAccountSyncJob").getDevices("notification");
    }
    function g() {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield o("WAWebTos").TosManager.run();
            const e = [
                o("WAWebNewsletterGatingUtils").getNewsletterProducerTos(),
                o("WAWebNewsletterGatingUtils").getNewsletterConsumerTos(),
                o("WAWebNewsletterGatingUtils").getNewsletterAdminInviteTos()
            ].concat(o("WAWebWamoNewsletterGatingUtils").getWamoNotices());
            const userDisclosures = [];
            e.map((e)=>{
                const n = {
                    id: e,
                    accepted: o("WAWebTos").TosManager.getState(e) === o("WAWebPDFNTypes").NOTICE_STATUS.ACCEPTED
                };
                userDisclosures.push(n);
            });
            return o("WAWebBackendApi").frontendFireAndForget("updateUserDisclosures", {
                userDisclosures
            });
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ protocols, supported, unsupported }) {
            const i = supported.map((e)=>e.type).join(",");
            const l = unsupported.map((e)=>e.type).join(",");
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "handleDirtyBits supported=",
                " unsupported=",
                ""
            ])), i, l);
            const m = [].concat(unsupported, supported);
            yield (u || (u = n("Promise"))).all(supported.map(({ type })=>{
                if (type === o("WAWebDirtyBitsConsts").SUPPORTED_DIRTY_TYPE.groups) {
                    return o("WAWebEventsWaitForOfflineDeliveryEnd").waitForOfflineDeliveryEnd().then(()=>o("WAWebQueryAndUpdateGroupMetadataJob").queryAndUpdateAllGroupMetadata({}));
                }
                if (type === o("WAWebDirtyBitsConsts").SUPPORTED_DIRTY_TYPE.newsletter_metadata) {
                    return o("WAWebEventsWaitForOfflineDeliveryEnd").waitForOfflineDeliveryEnd().then(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                        const e = yield c.load();
                        const e_queryAndUpdateAllNewsletterMetadataAction = e.queryAndUpdateAllNewsletterMetadataAction;
                        return e_queryAndUpdateAllNewsletterMetadataAction(o("WAWebCommonNewsletterEnums").NewsletterMetadataUpdateEntryPoint.DirtyBit, {
                            messageCount: 1
                        });
                    }));
                }
                if (type === o("WAWebDirtyBitsConsts").SUPPORTED_DIRTY_TYPE.account_sync) {
                    return d(protocols);
                }
                if (type === o("WAWebDirtyBitsConsts").SUPPORTED_DIRTY_TYPE.syncd_app_state) {
                    return _();
                }
                if (type === o("WAWebDirtyBitsConsts").SUPPORTED_DIRTY_TYPE.orgs) {
                    o("WAWebHandleOrgsDirtyBit").handleOrgsDirtyBit();
                }
            }));
            return o("WAWebClearDirtyBitsJob").clearDirtyBits(m);
        });
        return C.apply(this, arguments);
    }
    l.handleDirtyBits = y;
}, 98);