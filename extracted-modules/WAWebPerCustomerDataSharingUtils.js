__d("WAWebPerCustomerDataSharingUtils", [
    "WASmaxInBizSettingsEnums",
    "WAWebABProps",
    "WAWebCTWADataSharingModel",
    "WAWebCTWAGatingUtils",
    "WAWebChatCollection",
    "WAWebCommonCTWADataSharing",
    "WAWebDBMessageUtils",
    "WAWebDataSharing3pdLidCollection",
    "WAWebMaybeGeneratePerCustomerDataSharingSystemMessageAction",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebMsgType",
    "WAWebSchemaMessage",
    "WAWebSmbDataSharingOptInModalDialog",
    "WAWebSmbPerCustomerDataSharingOptInModal",
    "WAWebSmbPerCustomerDataSharingOptOutModal",
    "WAWebUserPrefsGeneral",
    "WAWebWamEnumCustomerAdsSharingSettingEnabled",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e, t) {
        if (!o("WAWebMobilePlatforms").isSMB() || !o("WAWebCTWAGatingUtils").isPerCustomerDataSharingControlsEnabled() || !o("WAWebCTWAGatingUtils").smbDataSharingConsentEnabled() || !e) {
            return false;
        }
        const n = o("WAWebWidFactory").createWid(e);
        if (!n.isUser()) {
            return false;
        }
        const r = o("WAWebChatCollection").ChatCollection.get(n);
        return !(r == null || o("WAWebCommonCTWADataSharing").getReceivedCTWAEligibilityFromChat(r) == null || t === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.notset && (o("WAWebUserPrefsGeneral").getCTWADataSharingDisclosureShownCount() === 0 || o("WAWebABProps").getABPropConfigValue("ctwa_per_customer_data_sharing_controls_do_not_show_msg_until_chosen")));
    }
    function c(e) {
        if (!o("WAWebCTWAGatingUtils").isPerCustomerDataSharingControlsEnabled() || e == null) {
            return o("WAWebWamEnumCustomerAdsSharingSettingEnabled").CUSTOMER_ADS_SHARING_SETTING_ENABLED.UNSET;
        }
        const t = o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection.get(e);
        if (t == null) {
            return o("WAWebWamEnumCustomerAdsSharingSettingEnabled").CUSTOMER_ADS_SHARING_SETTING_ENABLED.UNSET;
        }
        if (t.dataSharing3pdEnabled) {
            return o("WAWebWamEnumCustomerAdsSharingSettingEnabled").CUSTOMER_ADS_SHARING_SETTING_ENABLED.TRUE;
        }
        return o("WAWebWamEnumCustomerAdsSharingSettingEnabled").CUSTOMER_ADS_SHARING_SETTING_ENABLED.FALSE;
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = (yield o("WAWebSchemaMessage").getMessageTable().between([
                "internalId"
            ], o("WAWebDBMessageUtils").beginningOfChat(e), o("WAWebDBMessageUtils").endOfChat(e), {
                reverse: true
            })).filter((e)=>e.type === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE && (e.subtype === "biz_per_customer_3pd_data_share_opt_in" || e.subtype === "biz_per_customer_3pd_data_share_opt_out"));
            if (t.length === 0) {
                return null;
            }
            const n = t[0];
            if (n.subtype === "biz_per_customer_3pd_data_share_opt_in") {
                return true;
            }
            if (n.subtype === "biz_per_customer_3pd_data_share_opt_out") {
                return false;
            }
        });
        return m.apply(this, arguments);
    }
    function p({ accountLid, chat, entrypoint, perCustomerEntryPoint }) {
        if (o("WAWebCTWAGatingUtils").smbDataSharingConsentEnabled()) {
            const perCustomerDataSharingState = o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection.isDataSharingEnabled(accountLid);
            const u = o("WAWebCommonCTWADataSharing").isGlobalDataSharingAccepted(o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue(), o("WAWebCTWADataSharingModel").CTWADataSharingModel.getVersion());
            if (u) {
                if (perCustomerDataSharingState) {
                    o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebSmbPerCustomerDataSharingOptOutModal"), {
                        accountLid,
                        entryPoint: perCustomerEntryPoint
                    }));
                } else {
                    o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebSmbPerCustomerDataSharingOptInModal"), {
                        accountLids: [
                            accountLid
                        ],
                        entryPoint: perCustomerEntryPoint
                    }));
                }
            } else {
                o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebSmbDataSharingOptInModalDialog").SmbDataSharingOptInModalDialog, {
                    entrypoint,
                    chats: chat != null ? [
                        chat
                    ] : null,
                    callback: function() {
                        o("WAWebMaybeGeneratePerCustomerDataSharingSystemMessageAction").maybeGeneratePerCustomerDataSharingSystemMessage({
                            accountLid,
                            perCustomerDataSharingState,
                            entryPoint: perCustomerEntryPoint,
                            globalDataSharingEntryPoint: entrypoint
                        });
                    }
                }));
            }
        }
    }
    l.isPerCustomerDataSharingFeatureEnabled = u;
    l.getCustomerAdsDataSharingState = c;
    l.getLastDataSharingState = d;
    l.getModalForPerCustomerDataSharing = p;
}, 98);