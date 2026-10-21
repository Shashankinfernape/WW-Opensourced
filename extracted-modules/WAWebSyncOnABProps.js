__d("WAWebSyncOnABProps", [
    "WALogger",
    "WAWebABProps",
    "WAWebABPropsWamGlobals",
    "WAWebLocalStorage",
    "WAWebProtobufsE2E.pb",
    "WAWebStoreSpecialAbProps",
    "WAWebUserPrefsAppStateSync",
    "WAWebUserPrefsCTWA",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsTypes",
    "WAWebUserPrefsUiRefresh",
    "asyncToGeneratorRuntime",
    "cr:254",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let s;
    const u = n("cr:254") ?? {};
    const c = u.sendPeerDataOperationRequest;
    function d(e) {
        if (e !== o("WAWebABProps").getABPropConfigValue("service_improvement_opt_out_flag")) {
            o("WAWebABPropsWamGlobals").setAbPropDependingGlobalWamAttributes();
        }
    }
    function m() {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebUserPrefsAppStateSync").getNonCriticalDataSyncStatus();
            if (e?.[o("WAWebUserPrefsTypes").NonCriticalDataSyncStatusType.RECENT_STICKER_INITIALIZED] === o("WAWebUserPrefsTypes").RecentStickerInitializedStatusType.NEED_REQUEST_BOOTSTRAP) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[RecentStickers] req peer msg for bootstrap"
                ])));
                yield c?.(o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.SEND_RECENT_STICKER_BOOTSTRAP, {});
            }
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        const t = o("WAWebABProps").getABPropConfigValue("ctwa_ad_account_token_storage_kill_switch_web");
        if (t === true && e === false) {
            o("WAWebUserPrefsCTWA").clearAdAccountToken();
        }
    }
    function f(e) {
        const t = o("WAWebABProps").getABPropConfigValue("web_ui_refresh_m1");
        if (e === true && t === false) {
            o("WAWebUserPrefsUiRefresh").resetNuxViewCount();
            o("WAWebUserPrefsUiRefresh").setUiRefreshNuxAcked(false);
            o("WAWebStoreSpecialAbProps").storeSpecialAbProps();
        }
    }
    function g() {
        const e = o("WAWebABProps").getABPropConfigValue("smb_qp_emergency_force_fetch_nonce");
        if (e === "") {
            return false;
        }
        const t = r("nullthrows")(r("WAWebLocalStorage")).getItem(o("WAWebUserPrefsKeys").KEYS.QP_EMERGENCY_FORCE_FETCH_LAST_HANDLED_NONCE);
        if (e === t) {
            return false;
        }
        r("nullthrows")(r("WAWebLocalStorage")).setItem(o("WAWebUserPrefsKeys").KEYS.QP_EMERGENCY_FORCE_FETCH_LAST_HANDLED_NONCE, e);
        return true;
    }
    l.handleServiceImprovementOptOutFlagABPropConfigValueChange = d;
    l.ensureNonCriticalDataSyncIsInitialized = m;
    l.handleAdAccountTokenStorageKillSwitchABPropConfigValueChange = _;
    l.handleUIRefreshNuxOnABPropConfigValueChange = f;
    l.consumeQpEmergencyForceFetchNonce = g;
}, 98);