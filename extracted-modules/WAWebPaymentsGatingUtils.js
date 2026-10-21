__d("WAWebPaymentsGatingUtils", [
    "WAWebABProps",
    "WAWebClientFeatureFlags",
    "WAWebComplianceConstants",
    "WAWebL10NCountryCodes",
    "WAWebLidMigrationUtils",
    "WAWebMobilePlatforms",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l) {
    function e() {
        return o("WAWebMobilePlatforms").isSMB() && o("WAWebABProps").getABPropConfigValue("br_smb_paymentshome_enabled");
    }
    function s() {
        const t = o("WAWebUserPrefsMeUser").getMaybeMePnUser()?.user;
        return !o("WAWebMobilePlatforms").isSMB() && t != null && L(t) && (o("WAWebABProps").getABPropConfigValue("br_consumer_payments_web_enabled") || o("WAWebABProps").getABPropConfigValue("br_consumer_payments_home_web_enabled"));
    }
    function u() {
        const t = o("WAWebUserPrefsMeUser").getMaybeMePnUser()?.user;
        return !o("WAWebMobilePlatforms").isSMB() && t != null && L(t) && (o("WAWebABProps").getABPropConfigValue("br_consumer_payments_web_enabled") || o("WAWebABProps").getABPropConfigValue("br_consumer_pix_actions_web_enabled"));
    }
    function c() {
        const t = o("WAWebUserPrefsMeUser").getMaybeMePnUser()?.user;
        return !o("WAWebMobilePlatforms").isSMB() && t != null && L(t) && o("WAWebABProps").getABPropConfigValue("pix_payment_request_web_enabled");
    }
    function d() {
        const t = o("WAWebUserPrefsMeUser").getMaybeMePnUser()?.user;
        return !o("WAWebMobilePlatforms").isSMB() && t != null && L(t) && (o("WAWebABProps").getABPropConfigValue("br_consumer_payments_web_enabled") || o("WAWebABProps").getABPropConfigValue("br_consumer_transactions_date_filter_web_enabled"));
    }
    function m() {
        const t = o("WAWebUserPrefsMeUser").getMaybeMePnUser()?.user;
        return !o("WAWebMobilePlatforms").isSMB() && t != null && L(t) && (o("WAWebABProps").getABPropConfigValue("br_consumer_payments_web_enabled") || o("WAWebABProps").getABPropConfigValue("br_consumer_pix_groups_web_enabled"));
    }
    function p() {
        return !o("WAWebABProps").getABPropConfigValue("payments_receipt_and_state_web_state_hide_kill_switch");
    }
    function _() {
        const t = o("WAWebUserPrefsMeUser").getMaybeMePnUser()?.user;
        return t != null && L(t) && p() && !o("WAWebABProps").getABPropConfigValue("payments_receipt_and_state_details_kill_switch");
    }
    function f(e) {
        return !o("WAWebMobilePlatforms").isSMB() && b(e) && o("WAWebABProps").getABPropConfigValue("payments_receipt_and_state_copy_pix_key_p2p");
    }
    function g(e) {
        return !o("WAWebMobilePlatforms").isSMB() && b(e) && o("WAWebABProps").getABPropConfigValue("payments_receipt_and_state_copy_pix_code_p2p");
    }
    function h(e) {
        return o("WAWebMobilePlatforms").isSMB() && b(e);
    }
    function y() {
        return o("WAWebABProps").getABPropConfigValue("payments_receipt_and_state_copy_pix_key_p2m");
    }
    function C() {
        return o("WAWebABProps").getABPropConfigValue("payments_receipt_and_state_copy_pix_code_p2m");
    }
    function b(e) {
        return e.id.isUser() && !e.id.isBot() && !e.contact.isBusiness && _();
    }
    function v(e) {
        if (!e) {
            return false;
        }
        const n = o("WAWebLidMigrationUtils").toPn(e)?.user;
        if (n == null) {
            return false;
        }
        return E(n) || L(n);
    }
    function S() {
        return o("WAWebABProps").getABPropConfigValue("payments_link_to_lite_consumer_enabled");
    }
    function R(e) {
        const t = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
        const n = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(t?.user);
        const r = o("WAWebLidMigrationUtils").toPn(e.contact.id);
        const a = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(r?.user);
        return n === "BR" && a === "BR";
    }
    function L(e) {
        const t = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(e);
        return t === "BR";
    }
    function E(e) {
        const t = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(e || "");
        const INDIA = o("WAWebComplianceConstants").COMPLIANCE_INFO_CODES.INDIA;
        return t === INDIA || o("WAWebClientFeatureFlags").isFeatureEnabled("skip_compliance_phone_check");
    }
    l.paymentsHomeEnabled = e;
    l.consumerPaymentsHomeEnabled = s;
    l.consumerPixActionsEnabled = u;
    l.consumerSharePixEnabled = c;
    l.consumerTransactionsDateFilterEnabled = d;
    l.consumerSharePixGroupsEnabled = m;
    l.isBrazilPaymentStateUpdateSupported = p;
    l.isBrazilPaymentDetailsAvailable = _;
    l.isPixKeyReceiptAndStateAssignedOnSend = f;
    l.isPixCodeReceiptAndStateAssignedOnSend = g;
    l.isReceiptAndStateP2mEligibleChat = h;
    l.isPixKeyReceiptAndStateP2mEnabled = y;
    l.isPixCodeReceiptAndStateP2mEnabled = C;
    l.isWidInPaymentsCountry = v;
    l.isMessageWithLinkNfmEnabled = S;
    l.isBrazilToBrazilOrder = R;
}, 98);