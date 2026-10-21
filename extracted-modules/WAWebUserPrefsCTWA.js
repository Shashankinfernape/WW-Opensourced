__d("WAWebUserPrefsCTWA", [
    "WAWebCTWAGatingUtils",
    "WAWebCommonAdsTypes",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = r("WAWebPonyfillsCryptoRandomUUID")();
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.AD_CREATION_FLOW_ID_KEY, e);
        return e;
    }
    function s() {
        let t = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.AD_CREATION_FLOW_ID_KEY);
        if (t == null || typeof t !== "string") {
            t = e();
        }
        return t;
    }
    function u() {
        let e = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.AD_CREATION_SEQUENCE_NUMBER_KEY);
        if (e == null || typeof e !== "number") {
            e = 1;
        }
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.AD_CREATION_SEQUENCE_NUMBER_KEY, e + 1);
        return e;
    }
    function c() {
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.AD_CREATION_SEQUENCE_NUMBER_KEY, 1);
    }
    function d(e) {
        switch(e){
            case "WEAK":
                return o("WAWebCommonAdsTypes").WAAIdentityTokenStrengthEnum.WEAK;
            case "STRONG":
            default:
                return o("WAWebCommonAdsTypes").WAAIdentityTokenStrengthEnum.STRONG;
        }
    }
    function m() {
        if (!o("WAWebCTWAGatingUtils").adAccountTokenStoringEnabled()) {
            return null;
        }
        const e = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.AD_ACCOUNT_TOKEN);
        let t = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.AD_ACCOUNT_BP_ID);
        let n = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.AD_ACCOUNT_TOKEN_STRENGTH);
        if (e == null || typeof e !== "string") {
            return null;
        }
        if (t == null || typeof t !== "string") {
            t = "";
        }
        if (n == null || typeof n !== "string") {
            n = null;
        }
        return o("WAWebCommonAdsTypes").asAdAccountToken({
            bp_id: t,
            token: e,
            tokenStrength: d(n),
            type: "WAA"
        });
    }
    function p(e) {
        if (o("WAWebCTWAGatingUtils").adAccountTokenStoringEnabled()) {
            r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.AD_ACCOUNT_TOKEN, e.token);
            r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.AD_ACCOUNT_BP_ID, e.bp_id);
            r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.AD_ACCOUNT_TOKEN_STRENGTH, e.type === "WAA" ? e.tokenStrength : null);
        }
    }
    function _() {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.AD_ACCOUNT_TOKEN, null);
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.AD_ACCOUNT_BP_ID, null);
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.AD_ACCOUNT_TOKEN_STRENGTH, null);
    }
    function f() {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.FB_ACCOUNT_TOKEN, null);
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.FB_ACCOUNT_BP_ID, null);
    }
    function g() {
        const e = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.FB_ACCOUNT_TOKEN);
        const t = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.FB_ACCOUNT_BP_ID);
        if (e == null || typeof e !== "string" || t == null || typeof t !== "string") {
            return null;
        }
        return o("WAWebCommonAdsTypes").asAdAccountToken({
            bp_id: t,
            token: e,
            type: "FB"
        });
    }
    function h(e) {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.FB_ACCOUNT_TOKEN, e.token);
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.FB_ACCOUNT_BP_ID, e.bp_id);
    }
    l.generateAdCreationFlowId = e;
    l.getAdCreationFlowId = s;
    l.getAndIncrementAdCreationSequenceNumber = u;
    l.resetAdCreationSequenceNumber = c;
    l.getAdAccountToken = m;
    l.setAdAccountToken = p;
    l.clearAdAccountToken = _;
    l.clearFBIdentity = f;
    l.getFBIdentity = g;
    l.setFbIdentity = h;
}, 98);