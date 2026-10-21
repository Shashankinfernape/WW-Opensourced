__d("WAWebMmSignalSharingGatingUtils", [
    "WALogger",
    "WAWebABProps",
    "WAWebWamEnumBlockEntryPoint",
    "WAWebWamEnumMmSignalType",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    function c() {
        if (d()) {
            return o("WAWebABProps").getABPropConfigValue("mm_signal_sharing_post_dc_message_type_enabled");
        }
        return false;
    }
    function d() {
        return o("WAWebABProps").getABPropConfigValue("mm_data_sharing_disclosure_enabled");
    }
    function m() {
        return o("WAWebABProps").getABPropConfigValue("cap_context_info_max_array_length");
    }
    function p() {
        if (d()) {
            return o("WAWebABProps").getABPropConfigValue("data_sharing_transparency_indicator_duration");
        }
        return 0;
    }
    function _() {
        if (d()) {
            return o("WAWebABProps").getABPropConfigValue("ctwa_tos_filtering_enabled");
        }
        return false;
    }
    function f() {
        if (d()) {
            return o("WAWebABProps").getABPropConfigValue("disclosure_for_the_marketing_message_body_links_enabled");
        }
        return false;
    }
    function g() {
        if (d()) {
            return o("WAWebABProps").getABPropConfigValue("optimized_delivery_signal_collection_enabled");
        }
        return false;
    }
    function h() {
        const t = {
            store_consented_token_enabled: false,
            store_non_consented_token_enabled: false
        };
        if (!d()) {
            return t;
        }
        try {
            return JSON.parse(o("WAWebABProps").getABPropConfigValue("optimized_delivery_tokens_storage_config"));
        } catch (r) {
            const n = o("WAWebABProps").getABPropConfigValue("optimized_delivery_tokens_storage_config");
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[mmSignalSharing] parse tokens_storage_config failed: ",
                " raw=",
                ""
            ])), r, n);
            return t;
        }
    }
    function y() {
        if (d()) {
            return o("WAWebABProps").getABPropConfigValue("optimized_delivery_multiple_collection_windows_enabled");
        }
        return false;
    }
    function C() {
        const e = 168;
        const t = Object.keys(o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE).map((e)=>o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE[e]);
        const n = {
            consented_collection_window_in_hours: e,
            non_consented_collection_window_in_hours: e,
            consented_types_allowlist: t,
            non_consented_types_allowlist: t
        };
        if (!d()) {
            return n;
        }
        try {
            return JSON.parse(o("WAWebABProps").getABPropConfigValue("optimized_delivery_signal_collection_config"));
        } catch (e) {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[mmSignalSharing] fetch signal_collection_config err: ",
                ""
            ])), e);
            return n;
        }
    }
    function b() {
        if (d()) {
            return o("WAWebABProps").getABPropConfigValue("mm_signal_sharing_verification_system_lid_enabled");
        }
        return false;
    }
    function v(e) {
        if (e == null || !r("WAWebWid").isRegularUserNoImply(e)) {
            return false;
        }
        return d() && g();
    }
    function S() {
        const e = Object.values(o("WAWebWamEnumBlockEntryPoint").BLOCK_ENTRY_POINT).map(Number);
        if (!d()) {
            return e;
        }
        try {
            return o("WAWebABProps").getABPropConfigValue("optimized_delivery_block_and_report_entry_points_allowlist_web").split(",").filter((e)=>!isNaN(e)).map(Number);
        } catch (t) {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[mmSignalSharing] fetch block_report_allowlist err: ",
                ""
            ])), t);
            return e;
        }
    }
    function R() {
        const e = 263784176043634;
        if (!E()) {
            return e;
        }
        const t = Number.parseInt(o("WAWebABProps").getABPropConfigValue("mm_disclosure_learn_more_article_id"), 10);
        if (Number.isNaN(t)) {
            return e;
        }
        return t;
    }
    function L() {
        if (d()) {
            return o("WAWebABProps").getABPropConfigValue("mm_signal_sharing_verification_new_signal_type_origin");
        }
        return false;
    }
    function E() {
        if (d()) {
            return o("WAWebABProps").getABPropConfigValue("cci_compliance_mm");
        }
        return false;
    }
    function k() {
        if (d()) {
            return o("WAWebABProps").getABPropConfigValue("mm_data_sharing_disclosure_enabled_additional_transparency_large_screens");
        }
        return false;
    }
    function I() {
        if (d()) {
            return o("WAWebABProps").getABPropConfigValue("mm_optimized_delivery_replacing_shimmed_links_enabled");
        }
        return false;
    }
    function T() {
        if (d()) {
            return o("WAWebABProps").getABPropConfigValue("mm_optimized_delivery_app_cta_enabled");
        }
        return false;
    }
    function D() {
        if (d()) {
            return o("WAWebABProps").getABPropConfigValue("mm_1pd_post_dc_new_schema_enabled");
        }
        return false;
    }
    function x() {
        if (d()) {
            return !o("WAWebABProps").getABPropConfigValue("mm_1pd_post_dc_old_schema_disabled");
        }
        return false;
    }
    function $(e, t) {
        const n = C();
        const { consented_types_allowlist: r, non_consented_types_allowlist: o } = n;
        if (t) {
            return r.includes(e);
        }
        return o.includes(e);
    }
    l.isNativeMessageTypeEnabled = c;
    l.isMmSignalSharingDisclosureEnabled = d;
    l.isMmSignalSharingContextInfoMaxArrayLengthCapEnabled = m;
    l.getMmSignalSharingCollectionWindow = p;
    l.getMmSignalSharingTosFiltering = _;
    l.isMmSignalSharingDisclosureForMarketingMessageBodyLinksEnabled = f;
    l.getMmSignalSharingOptimizedDeliverySignalCollectionEnabled = g;
    l.getMmSignalSharingOptimizedDeliveryTokensStorageConfig = h;
    l.isMmSignalSharingOptimizedDeliveryMultipleCollectionWindowsEnabled = y;
    l.getMmSignalSharingOptimizedDeliverySignalCollectionConfig = C;
    l.getMmSignalSharingVerificationSystemLidEnabled = b;
    l.isMmSignalSharingCollectionEnabled = v;
    l.getMmSignalSharingBlockAndReportEntryPointsAllowlist = S;
    l.getMmDisclosureLearnMoreArticleId = R;
    l.isMmSignalSharingVerificationNewSignalTypeOriginEnabled = L;
    l.isCCIComplianceEnabled = E;
    l.isMmDataSharingDisclosureEnabledAdditionalTransparencyLargeScreens = k;
    l.isMmSignalSharingReplacingShimmedLinksEnabled = I;
    l.isMmSignalSharingAppCtaEnabled = T;
    l.isMmSignalSharingPostDcNewSchemaEnabled = D;
    l.isMmSignalSharingPostDcOldSchemaEnabled = x;
    l.isSignalTypeAllowlisted = $;
}, 98);