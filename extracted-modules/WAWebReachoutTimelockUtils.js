__d("WAWebReachoutTimelockUtils", [
    "WAWebContactGetters",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsTypes"
], function(t, n, r, o, a, i, l) {
    const e = "WAReachoutTimelockState";
    function s() {
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e) != null;
    }
    function u() {
        const t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e);
        return t?.state === o("WAWebUserPrefsTypes").ReachoutTimelockState.HIDDEN;
    }
    function c() {
        const t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e);
        return t?.state === o("WAWebUserPrefsTypes").ReachoutTimelockState.VISIBLE;
    }
    function d({ chat: t, contact: n }) {
        if (!s() || !o("WAWebContactGetters").getIsUser(n) || o("WAWebContactGetters").getIsMe(n) || o("WAWebContactGetters").getIsEnterprise(n) || o("WAWebContactGetters").getIsSupportAccount(n) || n.id.isBot()) {
            return true;
        }
        return t?.getTcToken() != null;
    }
    function m(e) {
        if (e == null) {
            return o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.DEFAULT;
        }
        switch(e){
            case "BIZ_QUALITY":
                return o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_QUALITY;
            case "BIZ_COMMERCE_VIOLATION_ADULT":
                return o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_ADULT;
            case "BIZ_COMMERCE_VIOLATION_ALCOHOL":
                return o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_ALCOHOL;
            case "BIZ_COMMERCE_VIOLATION_ANIMALS":
                return o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_ANIMALS;
            case "BIZ_COMMERCE_VIOLATION_BODY_PARTS_FLUIDS":
                return o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_BODY_PARTS_FLUIDS;
            case "BIZ_COMMERCE_VIOLATION_DATING":
                return o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_DATING;
            case "BIZ_COMMERCE_VIOLATION_DIGITAL_SERVICES_PRODUCTS":
                return o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_DIGITAL_SERVICES_PRODUCTS;
            case "BIZ_COMMERCE_VIOLATION_DRUGS":
                return o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_DRUGS;
            case "BIZ_COMMERCE_VIOLATION_DRUGS_ONLY_OTC":
                return o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_DRUGS_ONLY_OTC;
            case "BIZ_COMMERCE_VIOLATION_GAMBLING":
                return o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_GAMBLING;
            case "BIZ_COMMERCE_VIOLATION_HEALTHCARE":
                return o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_HEALTHCARE;
            case "BIZ_COMMERCE_VIOLATION_REAL_FAKE_CURRENCY":
                return o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_REAL_FAKE_CURRENCY;
            case "BIZ_COMMERCE_VIOLATION_SUPPLEMENTS":
                return o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_SUPPLEMENTS;
            case "BIZ_COMMERCE_VIOLATION_TOBACCO":
                return o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_TOBACCO;
            case "BIZ_COMMERCE_VIOLATION_VIOLENT_CONTENT":
                return o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_VIOLENT_CONTENT;
            case "BIZ_COMMERCE_VIOLATION_WEAPONS":
                return o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_WEAPONS;
            case "WEB_COMPANION_ONLY":
                return o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.WEB_COMPANION_ONLY;
            case "RESTRICT_ALL_COMPANIONS":
                return o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.RESTRICT_ALL_COMPANIONS;
            case "DEFAULT":
            default:
                return o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.DEFAULT;
        }
    }
    function p(e) {
        switch(e){
            case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_ADULT:
            case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_ALCOHOL:
            case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_ANIMALS:
            case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_BODY_PARTS_FLUIDS:
            case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_DATING:
            case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_DIGITAL_SERVICES_PRODUCTS:
            case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_DRUGS:
            case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_DRUGS_ONLY_OTC:
            case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_GAMBLING:
            case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_HEALTHCARE:
            case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_REAL_FAKE_CURRENCY:
            case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_SUPPLEMENTS:
            case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_TOBACCO:
            case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_VIOLENT_CONTENT:
            case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_WEAPONS:
                return true;
            default:
                return false;
        }
    }
    l.REACHOUT_TIMELOCK_IDB_KEY = e;
    l.isUserReachoutTimelocked = s;
    l.isUserReachoutTimelockedAndHidden = u;
    l.isUserReachoutTimelockedAndVisible = c;
    l.canSendMsgWhileTimelocked = d;
    l.getReachoutTimelockEnforcementType = m;
    l.isCPVEnforcement = p;
}, 98);