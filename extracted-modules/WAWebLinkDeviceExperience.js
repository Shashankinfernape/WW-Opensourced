__d("WAWebLinkDeviceExperience", [
    "WABitArray",
    "WAWebArkoseExpUtils",
    "WAWebAutoLogoutGating",
    "WAWebDesktopUpsellQRCodeBannerExperiment",
    "WAWebDeviceFeatures",
    "WAWebHybridRegGating",
    "WAWebLinkDeviceScreenGatedUtils",
    "WAWebLoggedOutSeparationGating",
    "WAWebNativeCameraQRLinkedDeviceUtils",
    "WAWebWamEnumWebcNativeUpsellCtaQrScreenExperimentGroup"
], function(t, n, r, o, a, i, l) {
    const e = (()=>{
        function e(e) {
            this.flag = e;
        }
        const t = e.prototype;
        t.getIndex = function() {
            return u() - 1 - this.flag;
        };
        return e;
    })();
    var s = {
        ScreenRefreshFlag: new e(0),
        AutoLogoutFlag: new e(1),
        DesktopUpsellBannerControlFlag: new e(2),
        DesktopUpsellBannerTestSlimBannerFlag: new e(3),
        DesktopUpsellBannerTestLargeBannerFlag: new e(4),
        PairingScreenRefreshVariant1Flag: new e(6),
        LinkDeviceScreenControl: new e(8),
        LinkDeviceScreenTest: new e(9),
        OptimizedRegistrationControl: new e(10),
        OptimizedRegistrationTest: new e(11),
        ArkoseControl: new e(12),
        ArkoseTest: new e(13),
        TouchPresence: new e(16),
        AppleTouchscreenOverlay: new e(17),
        HybridRegControl: new e(18),
        HybridRegTest: new e(19),
        LoggedOutSeparationControl: new e(20),
        LoggedOutSeparationTest: new e(21),
        AndroidTabletOverlayControl: new e(22),
        AndroidTabletOverlayTest: new e(23)
    };
    function u() {
        return Math.max(...Object.values(s).map((e)=>e.flag)) + 1;
    }
    function c(e) {
        const t = new (r("WABitArray"))(u());
        t.set(s.ScreenRefreshFlag.getIndex());
        if (o("WAWebAutoLogoutGating").isAutoLogoutEnabled()) {
            t.set(s.AutoLogoutFlag.getIndex());
        }
        const n = o("WAWebDesktopUpsellQRCodeBannerExperiment").getWAWebDesktopUpsellQRCodeBannerExperiment();
        e: {
            if (n === o("WAWebWamEnumWebcNativeUpsellCtaQrScreenExperimentGroup").WEBC_NATIVE_UPSELL_CTA_QR_SCREEN_EXPERIMENT_GROUP.NONE) {
                break e;
            }
            if (n === o("WAWebWamEnumWebcNativeUpsellCtaQrScreenExperimentGroup").WEBC_NATIVE_UPSELL_CTA_QR_SCREEN_EXPERIMENT_GROUP.CONTROL) {
                t.set(s.DesktopUpsellBannerControlFlag.getIndex());
                break e;
            }
            if (n === o("WAWebWamEnumWebcNativeUpsellCtaQrScreenExperimentGroup").WEBC_NATIVE_UPSELL_CTA_QR_SCREEN_EXPERIMENT_GROUP.TEST_BANNER_SLIM) {
                t.set(s.DesktopUpsellBannerTestSlimBannerFlag.getIndex());
                break e;
            }
            if (n === o("WAWebWamEnumWebcNativeUpsellCtaQrScreenExperimentGroup").WEBC_NATIVE_UPSELL_CTA_QR_SCREEN_EXPERIMENT_GROUP.TEST_BANNER_LARGE) {
                t.set(s.DesktopUpsellBannerTestLargeBannerFlag.getIndex());
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${n}`);
        }
        const a = o("WAWebLinkDeviceScreenGatedUtils").getLinkDeviceScreenVariant();
        switch(a){
            case o("WAWebLinkDeviceScreenGatedUtils").LinkDeviceScreenVariantType.M1_WINNER:
                t.set(s.PairingScreenRefreshVariant1Flag.getIndex());
                break;
        }
        const i = o("WAWebNativeCameraQRLinkedDeviceUtils").getNativeCameraQRLinkedDeviceVariant();
        switch(i){
            case o("WAWebNativeCameraQRLinkedDeviceUtils").NativeCameraQRLinkedDeviceVariantType.NONE:
                break;
            case o("WAWebNativeCameraQRLinkedDeviceUtils").NativeCameraQRLinkedDeviceVariantType.CONTROL:
                t.set(s.LinkDeviceScreenControl.getIndex());
                break;
            case o("WAWebNativeCameraQRLinkedDeviceUtils").NativeCameraQRLinkedDeviceVariantType.TEST:
                t.set(s.LinkDeviceScreenTest.getIndex());
                break;
        }
        const l = o("WAWebLinkDeviceScreenGatedUtils").getOptimizedRegFromWebVariant();
        const c = e?.resultType === "WEB_REGISTRATION_CAMPAIGN" || l === "test";
        if (c) {
            t.set(s.OptimizedRegistrationTest.getIndex());
        } else if (l === "control") {
            t.set(s.OptimizedRegistrationControl.getIndex());
        }
        const m = o("WAWebArkoseExpUtils").getArkoseVariant();
        switch(m){
            case o("WAWebArkoseExpUtils").ArkoseVariantType.CONTROL:
                t.set(s.ArkoseControl.getIndex());
                break;
            case o("WAWebArkoseExpUtils").ArkoseVariantType.TEST:
                t.set(s.ArkoseTest.getIndex());
                break;
            default:
                break;
        }
        if (o("WAWebDeviceFeatures").getTouchPresenceForTouchOnlyCallers()) {
            t.set(s.TouchPresence.getIndex());
        }
        if (o("WAWebLinkDeviceScreenGatedUtils").isAppleTouchscreenOverlayEnabled()) {
            t.set(s.AppleTouchscreenOverlay.getIndex());
        }
        const p = o("WAWebHybridRegGating").getHybridRegExperiment();
        e: {
            if (p === "control") {
                t.set(s.HybridRegControl.getIndex());
                break e;
            }
            if (p === "test") {
                t.set(s.HybridRegTest.getIndex());
                break e;
            }
            if (p === "none") {
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${p}`);
        }
        const _ = o("WAWebLoggedOutSeparationGating").getLoggedOutSeparationExperiment();
        e: {
            if (_ === "control") {
                t.set(s.LoggedOutSeparationControl.getIndex());
                break e;
            }
            if (_ === "test") {
                t.set(s.LoggedOutSeparationTest.getIndex());
                break e;
            }
            if (_ === "none") {
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${_}`);
        }
        d(t);
        return t.toNumber();
    }
    function d(e) {
        const t = ((e)=>{
            if (e === "control") {
                return s.AndroidTabletOverlayControl;
            }
            if (e === "test") {
                return s.AndroidTabletOverlayTest;
            }
            if (e === "none") {
                return null;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })(o("WAWebLinkDeviceScreenGatedUtils").getAndroidTabletOverlayExperiment());
        if (t != null) {
            e.set(t.getIndex());
        }
    }
    l.getWebCompanionLinkDeviceExperienceId = c;
}, 98);