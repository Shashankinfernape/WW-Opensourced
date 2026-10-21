__d("WAWebLinkDeviceQplHelpLinkEvent", [
    "$InternalEnum",
    "QuickPerformanceLogger",
    "WAWebAltDeviceLinkingApi",
    "WAWebAndroidTabletVisitId",
    "WAWebEnvironment",
    "WAWebLinkDeviceExperience",
    "WAWebPermanentStorage",
    "WAWebQplFlowWrapper",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "asyncToGeneratorRuntime",
    "isWAWebFeatureDetectionAndroidTablet",
    "qpl"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = n("$InternalEnum")({
        NEED_HELP_GETTING_STARTED: "need_help_getting_started",
        GET_STARTED: "get_started",
        LANDING_PROMO_GET_STARTED: "landing_promo_get_started",
        GET_HELP: "get_help",
        STAY_LOGGED_IN: "stay_logged_in",
        REG_PN_SCREEN_LOADED: "reg_pn_screen_loaded",
        REG_PN_SCREEN_CONTINUE_CLICKED: "reg_pn_screen_continue_clicked",
        REG_WACOM_PN_SCREEN_LOADED: "reg_wacom_pn_screen_loaded",
        REG_WACOM_PN_SCREEN_CONTINUE_CLICKED: "reg_wacom_pn_screen_continue_clicked",
        ANDROID_TABLET_OVERLAY_SCREEN_LOADED: "android_tablet_overlay_screen_loaded",
        ANDROID_TABLET_OVERLAY_CLOSE: "android_tablet_overlay_close",
        ANDROID_TABLET_OVERLAY_CONTINUE_TO_WEB: "android_tablet_overlay_continue_to_web",
        ANDROID_TABLET_OVERLAY_DOWNLOAD_APP: "android_tablet_overlay_download_app",
        ANDROID_TABLET_OVERLAY_CONTROL: "android_tablet_overlay_control",
        ANDROID_TABLET_OVERLAY_COUNTRY: "android_tablet_overlay_country",
        ANDROID_TABLET_DETECTION_FAILED: "android_tablet_detection_failed",
        APPLE_TOUCHSCREEN_OVERLAY_CONTINUE_TO_WEB: "apple_touchscreen_overlay_continue_to_web",
        HYBRID_REG_WELCOME_SCREEN_LOADED: "hybrid_reg_welcome_screen_loaded",
        HYBRID_REG_LOGIN_CLICKED: "hybrid_reg_login_clicked",
        HYBRID_REG_SIGNUP_CLICKED: "hybrid_reg_signup_clicked",
        REG_CONFIRMATION_SCREEN_LOADED: "reg_confirmation_screen_loaded",
        REG_CONFIRMATION_CONTINUE_CLICKED: "reg_confirmation_continue_clicked",
        REG_CONFIRMATION_RESEND_SMS_CLICKED: "reg_confirmation_resend_sms_clicked",
        REG_CONFIRMATION_WRONG_NUMBER_CLICKED: "reg_confirmation_wrong_number_clicked",
        REG_WACOM_CONFIRMATION_SCREEN_LOADED: "reg_wacom_confirmation_screen_loaded",
        REG_WACOM_CONFIRMATION_CONTINUE_CLICKED: "reg_wacom_confirmation_continue_clicked",
        REG_WACOM_CONFIRMATION_RESEND_SMS_CLICKED: "reg_wacom_confirmation_resend_sms_clicked",
        REG_WACOM_CONFIRMATION_WRONG_NUMBER_CLICKED: "reg_wacom_confirmation_wrong_number_clicked"
    });
    const u = r("qpl")._(891430409, "3269");
    const c = /^[A-Z]{2}$/;
    function d(e, t, n, r, o, a) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, a, i, l, s) {
            try {
                if (!r("WAWebEnvironment").isWeb) {
                    return;
                }
                const c = p(t, i, l, s);
                const d = babelHelpers.extends({}, c, {
                    md_link_device_experience_id: o("WAWebLinkDeviceExperience").getWebCompanionLinkDeviceExperienceId(n)
                });
                const m = {
                    source_type: t,
                    code_type: o("WAWebAltDeviceLinkingApi").getPairingType()
                };
                if (a != null) {
                    m.surface = a;
                }
                if (c != null) {
                    (e || (e = r("QuickPerformanceLogger"))).setAlwaysOnSampleRate(u, 1);
                }
                if (i != null) {
                    m.android_tablet_detection_source = i.detectionSource;
                    m.android_tablet_model_source = i.modelSource;
                }
                const _ = o("WAWebQplFlowWrapper").QPL.markerStart(u, {
                    annotations: {
                        int: d,
                        string: m
                    }
                });
                _.end(2);
            } catch (e) {
                o("WAWebQplFlowWrapper").QPL.markerEnd(u, 3);
            }
        });
        return m.apply(this, arguments);
    }
    function p(e, t, n, r) {
        if (t != null) {
            return _(e, t.detectorVersion, o("WAWebAndroidTabletVisitId").getOrCreateAndroidTabletVisitId(), n);
        }
        if (r != null) {
            return babelHelpers.extends({}, _(e, o("isWAWebFeatureDetectionAndroidTablet").ANDROID_TABLET_DETECTOR_VERSION, o("WAWebAndroidTabletVisitId").getExistingAndroidTabletVisitId(), void 0), r);
        }
        return null;
    }
    function _(e, t, n, r) {
        const a = {
            android_tablet_browser_linked_before: g() ? 1 : 0,
            android_tablet_detector_version: t,
            android_tablet_visit_id: n
        };
        const i = f(e);
        if (i != null) {
            a.android_tablet_overlay_event = i;
        }
        const l = h(r);
        if (l != null) {
            a.android_tablet_country = l;
        }
        const s = o("isWAWebFeatureDetectionAndroidTablet").getWAWebFeatureDetectionAndroidTabletScreenClass();
        if (s != null) {
            a.android_tablet_screen_class = s;
        }
        return a;
    }
    function f(e) {
        if (e === s.ANDROID_TABLET_OVERLAY_SCREEN_LOADED) {
            return 1;
        }
        if (e === s.ANDROID_TABLET_OVERLAY_DOWNLOAD_APP) {
            return 2;
        }
        if (e === s.ANDROID_TABLET_OVERLAY_CONTINUE_TO_WEB) {
            return 3;
        }
        if (e === s.ANDROID_TABLET_OVERLAY_CLOSE) {
            return 4;
        }
        if (e === s.ANDROID_TABLET_OVERLAY_CONTROL) {
            return 5;
        }
        if (e === s.ANDROID_TABLET_OVERLAY_COUNTRY) {
            return 6;
        }
        if (e === s.ANDROID_TABLET_DETECTION_FAILED) {
            return 7;
        }
        return null;
    }
    function g() {
        const e = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.PRESERVED_USER_KEYS, {
            storage: r("WAWebPermanentStorage")
        });
        return Array.isArray(e) && e.length > 0;
    }
    function h(e) {
        if (e == null || !c.test(e)) {
            return null;
        }
        return e.charCodeAt(0) * 256 + e.charCodeAt(1);
    }
    l.WebcPairingScreenLinkType = s;
    l.WAWebLinkDeviceQplHelpLinkEvent = d;
}, 98);