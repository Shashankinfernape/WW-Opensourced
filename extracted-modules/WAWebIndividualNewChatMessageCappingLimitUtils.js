__d("WAWebIndividualNewChatMessageCappingLimitUtils", [
    "WATimeUtils",
    "WAWebContactGetters",
    "WAWebIndividualNewChatMessageCappingLimitGatingUtils",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsTypes",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = "WANewChatMessageCappingData";
    function s() {
        const t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e);
        if (t == null) {
            return false;
        }
        const n = o("WATimeUtils").unixTime();
        const r = n > t.cycle_end_timestamp;
        if (r) {
            I(o("WAWebUserPrefsTypes").NewChatMessageCappingStatusType.NONE);
            return false;
        }
        return t.capping_status === o("WAWebUserPrefsTypes").NewChatMessageCappingStatusType.CAPPED && o("WAWebIndividualNewChatMessageCappingLimitGatingUtils").isIndividualNewChatMessageCappingEnabled();
    }
    function u() {
        if (o("WAWebIndividualNewChatMessageCappingLimitGatingUtils").isCappingKillSwitched()) {
            return false;
        }
        const e = p();
        return e != null && e.capping_status !== o("WAWebUserPrefsTypes").NewChatMessageCappingStatusType.NONE;
    }
    function c() {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(e);
        });
        return d.apply(this, arguments);
    }
    function m() {
        const t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e);
        const n = typeof t?.capping_status === "string" ? o("WAWebUserPrefsTypes").NewChatMessageCappingStatusType.cast(t.capping_status) : null;
        return n ?? o("WAWebUserPrefsTypes").NewChatMessageCappingStatusType.NONE;
    }
    function p() {
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e);
    }
    function _({ chat: t, contact: n }) {
        if (!o("WAWebContactGetters").getIsUser(n) || o("WAWebContactGetters").getIsMe(n) || o("WAWebContactGetters").getIsEnterprise(n) || o("WAWebContactGetters").getIsSupportAccount(n) || n.id.isBot() || o("WAWebContactGetters").getIsBroadcast(n) || o("WAWebContactGetters").getIsPSA(n)) {
            return true;
        }
        return t?.getTcToken() != null;
    }
    function f(e) {
        return o("WAWebUserPrefsTypes").NewChatMessageCappingStatusType.cast(e) ?? o("WAWebUserPrefsTypes").NewChatMessageCappingStatusType.NONE;
    }
    function g(e) {
        return o("WAWebUserPrefsTypes").NewChatMessageCappingOTEStatusType.cast(e) ?? o("WAWebUserPrefsTypes").NewChatMessageCappingOTEStatusType.ELIGIBLE;
    }
    function h(e) {
        return o("WAWebUserPrefsTypes").NewChatMessageCappingMVStatusType.cast(e) ?? o("WAWebUserPrefsTypes").NewChatMessageCappingMVStatusType.NOT_ACTIVE;
    }
    function y(e) {
        return o("WAWebUserPrefsTypes").NewChatMessageCappingSubscriptionStatusType.cast(e) ?? o("WAWebUserPrefsTypes").NewChatMessageCappingSubscriptionStatusType.NOT_ACTIVE;
    }
    function C(e) {
        return o("WAWebUserPrefsTypes").NewChatMessageCappingSubscriptionName.cast(e) ?? o("WAWebUserPrefsTypes").NewChatMessageCappingSubscriptionName.UNKNOWN;
    }
    function b() {
        const t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e);
        if (t == null) {
            return false;
        }
        const n = o("WATimeUtils").unixTime();
        const r = n > t.cycle_end_timestamp;
        if (r) {
            I(o("WAWebUserPrefsTypes").NewChatMessageCappingStatusType.NONE);
            return false;
        }
        return (t.capping_status === o("WAWebUserPrefsTypes").NewChatMessageCappingStatusType.FIRST_WARNING || t.capping_status === o("WAWebUserPrefsTypes").NewChatMessageCappingStatusType.SECOND_WARNING) && o("WAWebIndividualNewChatMessageCappingLimitGatingUtils").isIndividualNewChatMessageCappingEnabled();
    }
    function v() {
        if (b()) {
            return m();
        }
        return null;
    }
    function S() {
        const t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e);
        if (t == null || t.total_quota === 0) {
            return 0;
        }
        return Math.min(100, Math.max(0, t.used_quota / t.total_quota * 100));
    }
    function R(t) {
        const n = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e);
        if (n == null || n.cycle_end_timestamp === 0) {
            return "";
        }
        const r = new Date(n.cycle_end_timestamp * 1000);
        return r.toLocaleDateString(t, {
            month: "long",
            day: "numeric",
            year: "numeric"
        });
    }
    function L() {
        const t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e);
        if (t == null) {
            return false;
        }
        return t.ote_status === o("WAWebUserPrefsTypes").NewChatMessageCappingOTEStatusType.ELIGIBLE;
    }
    function E(e) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e);
            if (n != null) {
                yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(e, babelHelpers.extends({}, n, {
                    total_quota: t.total_quota,
                    used_quota: t.used_quota,
                    cycle_start_timestamp: Number(t.cycle_start_timestamp),
                    cycle_end_timestamp: Number(t.cycle_end_timestamp),
                    server_sent_timestamp: Number(t.server_sent_timestamp),
                    ote_status: g(t.ote_status),
                    mv_status: h(t.mv_status),
                    capping_status: f(t.capping_status)
                }));
            }
        });
        return k.apply(this, arguments);
    }
    function I(e) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e);
            if (n != null) {
                yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(e, babelHelpers.extends({}, n, {
                    capping_status: t
                }));
            }
        });
        return T.apply(this, arguments);
    }
    l.NEW_CHAT_MESSAGE_CAPPING_IDB_KEY = e;
    l.isUserCapped = s;
    l.shouldShowNewChatsStartedSettingsEntry = u;
    l.clearCappingData = c;
    l.getCappingStatus = m;
    l.getCappingData = p;
    l.canSendMsgWhileCapped = _;
    l.getCappingStatusType = f;
    l.getCappingOTEStatusType = g;
    l.getCappingMVStatusType = h;
    l.getCappingSubscriptionStatusType = y;
    l.getCappingSubscriptionName = C;
    l.isUserWarned = b;
    l.getCappingWarningLevel = v;
    l.getUsagePercentage = S;
    l.getCycleEndDateFormatted = R;
    l.isOTEEligible = L;
    l.updateCappingDataFromOTEResponse = E;
    l.resetCappingStatus = I;
}, 98);