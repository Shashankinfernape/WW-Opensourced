__d("WAWebPrivacyScreenUpsellBanner.react", [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebDrawerManager",
    "WAWebNux",
    "WAWebNuxSync",
    "WAWebPrivacyModeGating",
    "WAWebPrivacyModeSettingsFBT",
    "WAWebSettingsConst",
    "WAWebSettingsFlowLoadable",
    "WAWebUserPrefsNuxPreferences",
    "WAWebUserPrefsPrivacyMode",
    "WDSBanner.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useCallback, useState } = u;
    function m() {
        return useState(p);
    }
    function p() {
        return !(!o("WAWebPrivacyModeGating").isPrivacyScreenEnabled() || o("WAWebUserPrefsPrivacyMode").isPrivacyScreenEnabled() || o("WAWebUserPrefsNuxPreferences").nuxExistsInNuxSync(o("WAWebNux").NuxSyncKey.PRIVACY_SCREEN_UPSELL_BANNER));
    }
    function _(e) {
        const t = o("react-compiler-runtime").c(11);
        const e_onClose = e.onClose;
        let a;
        if (t[0] !== e_onClose) {
            a = function() {
                r("WAWebNuxSync").acknowledgeNux(o("WAWebNux").NuxSyncKey.PRIVACY_SCREEN_UPSELL_BANNER);
                e_onClose();
            };
            t[0] = e_onClose;
            t[1] = a;
        } else {
            a = t[1];
        }
        const i = a;
        let l;
        if (t[2] !== e_onClose) {
            l = function() {
                o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                    descriptorType: "settings",
                    initialStep: o("WAWebSettingsConst").SettingsSteps.PrivacySettings
                } : s.jsx(o("WAWebSettingsFlowLoadable").SettingsFlowLoadable, {
                    initialStep: o("WAWebSettingsConst").SettingsSteps.PrivacySettings
                }));
                r("WAWebNuxSync").acknowledgeNux(o("WAWebNux").NuxSyncKey.PRIVACY_SCREEN_UPSELL_BANNER);
                e_onClose();
            };
            t[2] = e_onClose;
            t[3] = l;
        } else {
            l = t[3];
        }
        const u = l;
        let c;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            c = {
                className: "x1uvdrpn x14mko6t x1380le5 xefnzgg"
            };
            t[4] = c;
        } else {
            c = t[4];
        }
        let d;
        let m;
        let p;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            d = o("WAWebPrivacyModeSettingsFBT").privacyScreenModeTitle();
            m = o("WAWebPrivacyModeSettingsFBT").privacyScreenModeDescription();
            p = o("WAWebPrivacyModeSettingsFBT").privacyScreenUpsellCta();
            t[5] = d;
            t[6] = m;
            t[7] = p;
        } else {
            d = t[5];
            m = t[6];
            p = t[7];
        }
        let _;
        if (t[8] !== u || t[9] !== i) {
            const Component = r("WDSBanner.react");
            _ = <div {...babelHelpers.extends({}, c, {
                children: <Component type="tip" title={d} body={m} actionText={p} onAction={u} onDismiss={i} testid="privacy_screen_upsell_banner"/>
            })}/>;
            t[8] = u;
            t[9] = i;
            t[10] = _;
        } else {
            _ = t[10];
        }
        return _;
    }
    l.useShowPrivacyScreenUpsellBanner = m;
    l.PrivacyScreenUpsellBanner = _;
}, 98);