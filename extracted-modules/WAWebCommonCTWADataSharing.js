__d("WAWebCommonCTWADataSharing", [
    "WALogger",
    "WASmaxInBizSettingsEnums",
    "WAWebABProps",
    "WAWebCTWADataSharingModel",
    "WAWebCTWAGatingUtils",
    "WAWebChatModel",
    "WAWebConversionTupleCollection",
    "WAWebDataSharing3pdLidCollection",
    "WAWebDataSharingOptInCoolOffModel",
    "WAWebDataSharingUpsellModel",
    "WAWebGetCTWAEligibilityFromConversion",
    "WAWebMobilePlatforms",
    "WAWebUserPrefsGeneral",
    "asyncToGeneratorRuntime",
    "requireDeferred"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = r("requireDeferred")("WAWebCTWABizDataSharingJob").__setRef("WAWebCommonCTWADataSharing");
    const c = 2;
    const d = function() {
        if (!o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled() || o("WAWebCTWADataSharingModel").CTWADataSharingModel.getVersion() >= o("WAWebCTWADataSharingModel").EPD_DISCLOSURE_VERSION) {
            return false;
        }
        return !o("WAWebUserPrefsGeneral").getCTWADataSharingV2DisclosureSeen();
    };
    const m = function(t, n) {
        if (t !== o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true) {
            return false;
        }
        if (o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled()) {
            return n >= o("WAWebCTWADataSharingModel").EPD_DISCLOSURE_VERSION;
        }
        return true;
    };
    const p = function() {
        if (o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled()) {
            o("WAWebUserPrefsGeneral").setCTWADataSharingV2DisclosureSeen();
        }
    };
    const _ = {
        CHAT: "CHAT",
        MESSAGE: "MESSAGE"
    };
    const f = function(t) {
        const e = r("WAWebConversionTupleCollection").get(t.id);
        if (!e) {
            return null;
        }
        const { conversionData, conversionSource, ctwaSignals } = e;
        return o("WAWebGetCTWAEligibilityFromConversion").getCTWAEligibilityFromConversion({
            conversionData,
            conversionSource,
            ctwaSignals
        });
    };
    const g = function(t) {
        const e = r("WAWebConversionTupleCollection").get(t.id);
        if (!e || e.fromMe !== false) {
            return null;
        }
        const { conversionData, conversionSource, ctwaSignals } = e;
        return o("WAWebGetCTWAEligibilityFromConversion").getCTWAEligibilityFromConversion({
            conversionData,
            conversionSource,
            ctwaSignals
        });
    };
    function h(e) {
        const t = r("WAWebConversionTupleCollection").get(e.id);
        if (t) {
            return t.ctwaSignals;
        }
    }
    function y() {
        const e = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue();
        const t = o("WAWebUserPrefsGeneral").getCTWADataSharingCoolOffTimestamp();
        const n = t != null;
        const r = n;
        const a = o("WAWebUserPrefsGeneral").getCTWAMessageReceived();
        return (e === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true || e === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false || r || a) && o("WAWebMobilePlatforms").isSMB();
    }
    const C = function(t) {
        if (o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled() || f(t) == null || !o("WAWebCTWAGatingUtils").smbDataSharingConsentEnabled()) {
            return false;
        }
        return b(o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue());
    };
    var b = function(t, n = false) {
        if (n && o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled() && t === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true && o("WAWebCTWADataSharingModel").CTWADataSharingModel.getVersion() < o("WAWebCTWADataSharingModel").EPD_DISCLOSURE_VERSION) {
            return !o("WAWebUserPrefsGeneral").getCTWADataSharingV2DisclosureSeen() || !o("WAWebDataSharingOptInCoolOffModel").DataSharingOptInCoolOffModel.isCoolOffActive();
        }
        if (o("WAWebDataSharingOptInCoolOffModel").DataSharingOptInCoolOffModel.isCoolOffActive()) {
            return false;
        }
        if (t === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.notset) {
            return true;
        }
        if (t === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false) {
            if (o("WAWebCTWAGatingUtils").isCTWA3pdOptOutCounterOptimizationEnabled()) {
                return o("WAWebUserPrefsGeneral").getCTWADataSharingOptOutDisclosureShownCount() < o("WAWebABProps").getABPropConfigValue("ctwa_3pd_data_sharing_cooldown_max_times_shown_for_opted_out");
            }
            return o("WAWebUserPrefsGeneral").getCTWADataSharingDisclosureShownCount() < c;
        }
        return false;
    };
    const v = function(t) {
        const e = g(t);
        if (e == null || !o("WAWebCTWAGatingUtils").smbDataSharingConsentEnabled() || !o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled() || !e.is3pdag || !o("WAWebCTWAGatingUtils").isCtwa3pdDataSharingOnThreadEntryEnabled()) {
            return false;
        }
        return b(o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue(), true);
    };
    const S = function(n, r) {
        if (o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled()) {
            return false;
        }
        let t;
        if (r === _.CHAT) {
            t = o("WAWebCTWAGatingUtils").isSMBLabelsDataSharingEnabledForChats;
        } else {
            if (r !== _.MESSAGE) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[ctwa] shouldShowLabelDataSharingDialog: invalid target"
                ])));
            }
            return false;
        }
        if (f(n) == null || !t()) {
            return false;
        }
        return b(o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue());
    };
    const R = function() {
        if (!o("WAWebCTWAGatingUtils").isDataSharingDisclosureOnListsHomeEnabled()) {
            return false;
        }
        const e = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue();
        const t = e === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true || e === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false;
        const n = o("WAWebUserPrefsGeneral").getCTWADataSharingDisclosureShownCount() === 0 && o("WAWebUserPrefsGeneral").getCTWADataSharingCoolOffTimestamp() == null;
        return !t && n && o("WAWebUserPrefsGeneral").getCTWAMessageReceived();
    };
    const L = function(t, n, r) {
        if (r < 1 || !o("WAWebCTWAGatingUtils").smbDataSharingConsentEnabled() || g(t) == null) {
            return false;
        }
        const a = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue();
        const i = t.accountLid?.toString();
        const l = i != null ? o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection.isDataSharingEnabled(i) : true;
        const s = a === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true && !o("WAWebCTWAGatingUtils").isPerCustomerDataSharingControlsEnabled();
        const u = a === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false && n === "order-create" && o("WAWebDataSharingUpsellModel").isUpsellEnabled();
        const c = a === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true && !l && n === "order-create" && o("WAWebDataSharingUpsellModel").isUpsellEnabled() && o("WAWebCTWAGatingUtils").isPerCustomerDataSharingControlsEnabled();
        return s || u || c;
    };
    const E = function(t) {
        if (t.length === 0) {
            return false;
        }
        const e = [];
        if (!o("WAWebCTWAGatingUtils").isSMBLabelsDataSharingEnabledForChats()) {
            return false;
        }
        t.forEach((t)=>{
            if (t instanceof o("WAWebChatModel").Chat) {
                e.push(t);
            }
        });
        const n = e.filter((e)=>g(e) != null);
        if (n.length === 0) {
            return false;
        }
        const r = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue();
        const a = n.every((e)=>{
            const n = e.accountLid?.toString();
            if (n != null) {
                return o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection.isDataSharingEnabled(n);
            }
            return true;
        });
        const i = r === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true && !o("WAWebCTWAGatingUtils").isPerCustomerDataSharingControlsEnabled();
        const l = r === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false && o("WAWebDataSharingUpsellModel").isUpsellEnabled();
        const s = r === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true && !a && o("WAWebDataSharingUpsellModel").isUpsellEnabled() && o("WAWebCTWAGatingUtils").isPerCustomerDataSharingControlsEnabled();
        return i || l || s;
    };
    const k = (()=>{
        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (!o("WAWebCTWAGatingUtils").smbDataSharingConsentEnabled()) {
                return null;
            }
            try {
                const t = yield u.load();
                const n = yield t.getCtwaBizDataSharingSettingJob();
                if (n?.value != null) {
                    o("WAWebCTWADataSharingModel").CTWADataSharingModel.setValue(n.value, n.version);
                    if (n.value === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false) {
                        o("WAWebDataSharingUpsellModel").enableUpsell();
                    }
                }
                return n?.value ?? null;
            } catch (e) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[ctwa] fetchDataSharingSettingAndUpdateModel: fetch failed"
                ])));
                return null;
            }
        });
        return function() {
            return e.apply(this, arguments);
        };
    })();
    l.shouldShowV2Disclosure = d;
    l.isGlobalDataSharingAccepted = m;
    l.markV2DisclosureSeen = p;
    l.SmbDataSharingLabelTargetValues = _;
    l.getCTWAEligibilityFromChat = f;
    l.getReceivedCTWAEligibilityFromChat = g;
    l.getCTWASignalsValueFromChat = h;
    l.shouldDisplayDataSharingSetting = y;
    l.shouldShowOrderDataSharingDialog = C;
    l.shouldShowDisclosureBasedOnCurrentDataSharingSetting = b;
    l.shouldShowChatEntryDataSharingDialog = v;
    l.shouldShowLabelDataSharingDialog = S;
    l.shouldShowListsManagementDataSharingDialog = R;
    l.shouldDisplayDataSharingOrderOptOutOrUpsell = L;
    l.shouldDisplayDataSharingLabelOptOutOrUpsell = E;
    l.fetchDataSharingSettingAndUpdateModel = k;
    l.SMB_DATA_SHARING_ALLOWED_SOURCE = o("WAWebGetCTWAEligibilityFromConversion").SMB_DATA_SHARING_ALLOWED_SOURCE;
}, 98);