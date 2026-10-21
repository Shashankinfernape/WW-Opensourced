__d("WAWebBizCatalogGatingUtils", [
    "WAWebABProps",
    "WAWebBoolFunc",
    "WAWebBusinessProfileTypes",
    "WAWebClientFeatureFlags",
    "WAWebComplianceConstants",
    "WAWebL10NCountryCodes",
    "WAWebLidMigrationUtils",
    "WAWebMobilePlatforms",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l) {
    function e() {
        return o("WAWebMobilePlatforms").isSMB();
    }
    function s() {
        return true;
    }
    function u() {
        return o("WAWebABProps").getABPropConfigValue("smb_product_country_of_origin_m1");
    }
    function c(e) {
        return p(e) || u();
    }
    function d() {
        return p(o("WAWebUserPrefsMeUser").getMeUserOrThrow());
    }
    function m() {
        return o("WAWebABProps").getABPropConfigValue("commerce_sanctioned");
    }
    function p(e) {
        let t;
        if (e != null) {
            t = o("WAWebLidMigrationUtils").toPn(e)?.user;
            if (t == null) {
                return true;
            }
        }
        return b(t);
    }
    function _(e) {
        return R(e);
    }
    function f(e) {
        return v(e, function() {
            return o("WAWebABProps").getABPropConfigValue("smb_ecommerce_compliance_india_m4");
        });
    }
    function g(e) {
        return S(e, function() {
            return o("WAWebABProps").getABPropConfigValue("smb_ecommerce_compliance_india_m4");
        });
    }
    function h(e) {
        return v(e, function() {
            return o("WAWebABProps").getABPropConfigValue("smb_ecommerce_compliance_india_m4_5");
        });
    }
    function y(e) {
        return S(e, function() {
            return o("WAWebABProps").getABPropConfigValue("smb_ecommerce_compliance_india_m4_5");
        });
    }
    function C(e) {
        const n = v(e?.id, function() {
            return o("WAWebABProps").getABPropConfigValue("web_abprop_block_catalog_creation_ecommerce_compliance_india");
        });
        return n && e?.profileOptions?.commerceExperience === o("WAWebBusinessProfileTypes").CommerceExperienceTypes.NONE;
    }
    function b(e) {
        return R(o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(e || ""));
    }
    function v(e, t = o("WAWebBoolFunc").returnFalse) {
        let n;
        if (e != null) {
            n = o("WAWebLidMigrationUtils").toPn(e)?.user;
            if (n == null) {
                return true;
            }
        }
        if (b(n)) {
            return t();
        }
        return false;
    }
    function S(e, t = o("WAWebBoolFunc").returnFalse) {
        if (R(e)) {
            return t();
        }
        return false;
    }
    function R(e) {
        return e === o("WAWebComplianceConstants").COMPLIANCE_INFO_CODES.INDIA || o("WAWebClientFeatureFlags").isFeatureEnabled("skip_compliance_phone_check");
    }
    l.graphQLForGetProductListEnabled = e;
    l.isQuantityControlsFeatureEnabled = s;
    l.isCountryOfOriginEnabled = u;
    l.showComplianceFieldsInEditProductDrawer = c;
    l.showImporterInformationInEditProductDrawer = d;
    l.commerceFeaturesDisabledBySanctions = m;
    l.canSeeECommerceComplianceIndiaSoftEnforcement = p;
    l.canSeeECommerceComplianceIndiaSoftEnforcementForCountry = _;
    l.canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney = f;
    l.canSeeECommerceComplianceIndiaHardEnforcementBusinessJourneyForCountry = g;
    l.canSeeECommerceComplianceIndiaCountryOriginExemptBusinessJourney = h;
    l.canSeeECommerceComplianceIndiaCountryOriginExemptBusinessJourneyForCountry = y;
    l.blockCatalogCreationECommerceComplianceIndia = C;
}, 98);