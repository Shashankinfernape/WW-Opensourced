__d("WAWebBizBroadcastDeviceCapabilityCommon", [
    "WAWebBizBroadcastProEligibilityEvent",
    "WAWebBizBroadcastProOnboardingStatusType",
    "WAWebBusinessBroadcastsGatingUtils",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").UserPrefs.BizBroadcastPrimaryCapability, e, {
            shouldWriteToIdb: true
        });
    }
    function s() {
        const e = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").UserPrefs.BizBroadcastPrimaryCapability);
        return e === true;
    }
    function u(e) {
        const t = o("WAWebUserPrefsKeys").UserPrefs.BizBroadcastProPrimaryCapability;
        const n = r("WAWebUserPrefsStore").getUser(t);
        if (!(n === e || n == null && e == null)) {
            r("WAWebUserPrefsStore").setUser(t, e, {
                shouldWriteToIdb: true
            });
            o("WAWebBizBroadcastProEligibilityEvent").bizBroadcastProEligibilityEmitter.trigger("change");
        }
    }
    function c() {
        const e = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").UserPrefs.BizBroadcastProPrimaryCapability);
        return e === true;
    }
    function d(e) {
        return o("WAWebBizBroadcastProOnboardingStatusType").shouldUseBizBroadcastProEntrypoint(e) && c() && o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProEnabled();
    }
    function m(e) {
        if (e != null) {
            r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").UserPrefs.BizBroadcastPrimaryRecipientLimit, e, {
                shouldWriteToIdb: true
            });
        }
    }
    function p() {
        const e = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").UserPrefs.BizBroadcastPrimaryRecipientLimit);
        if (typeof e === "number") {
            return e;
        }
        return null;
    }
    function _(e = true) {
        if (s()) {
            if (e) {
                return o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastSendWebEnabled();
            }
            return o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastSendWebEnabledNoExposure();
        }
        return false;
    }
    l.saveBizBroadcastCapabilityToStorage = e;
    l.getPrimarySupportsBusinessBroadcast = s;
    l.saveBizBroadcastProCapabilityToStorage = u;
    l.getPrimarySupportsBusinessBroadcastPro = c;
    l.isBizBroadcastProEntrypointEnabledForStatus = d;
    l.saveBizBroadcastRecipientLimitToStorage = m;
    l.getBizBroadcastPrimaryRecipientLimit = p;
    l.isBizBroadcastEnabledAndDeviceSupported = _;
}, 98);