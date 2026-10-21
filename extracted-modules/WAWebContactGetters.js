__d("WAWebContactGetters", [
    "WATimeUtils",
    "WAWebBotUtils",
    "WAWebBusinessProfileTypes",
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createContactsCache
    });
    const { computed: s, field: u, unsafeIdentityGetter: c } = e;
    const d = c;
    const m = u("id");
    const p = u("pushname");
    const _ = u("isBusiness");
    const f = u("isContactOptedOut");
    const g = u("isEverOptedOutOfMarketingMessages");
    const h = u("isMarketingMessageThread");
    const y = u("profilePicThumb");
    const C = u("verifiedLevel");
    const b = u("verifiedName");
    const v = u("name");
    const S = u("forcedBusinessUpdateFromServer");
    const R = u("isContactSyncCompleted");
    const L = u("type");
    const E = u("requestedPnTimestamp");
    const k = u("shortName");
    const I = u("isEnterprise");
    const T = u("isSmb");
    const D = u("labels");
    const x = u("disappearingModeDuration");
    const $ = u("disappearingModeSettingTimestamp");
    const P = u("statusMute");
    const N = u("parentStatusMute");
    const M = s(function([t, n]) {
        return t || n;
    }, [
        P,
        N
    ]);
    const w = u("privacyMode");
    const A = u("isHosted");
    const F = u("businessProfile");
    const O = s(function([t, n, r, a]) {
        if (n && r !== o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH) {
            return a;
        }
        return t;
    }, [
        p,
        _,
        C,
        b
    ]);
    const B = s(function([t]) {
        return t || "";
    }, [
        p
    ]);
    const W = s(function([t]) {
        return o("WAWebUserPrefsMeUser").isMeAccount(t);
    }, [
        m
    ]);
    const q = s(function([t]) {
        return r("WAWebWid").isUser(t);
    }, [
        m
    ]);
    const U = s(function([t]) {
        return r("WAWebWid").isGroup(t);
    }, [
        m
    ]);
    const V = s(function([t]) {
        return r("WAWebWid").isBroadcast(t);
    }, [
        m
    ]);
    const H = s(function([t]) {
        return r("WAWebWid").isNewsletter(t);
    }, [
        m
    ]);
    const G = s(function([t]) {
        return r("WAWebWid").isBot(t);
    }, [
        m
    ]);
    const z = s(function([t]) {
        return r("WAWebWid").isAiHub(t);
    }, [
        m
    ]);
    const j = s(function([t]) {
        return r("WAWebWid").isPSA(t);
    }, [
        m
    ]);
    const K = s(function([t]) {
        return r("WAWebWid").isIAS(t);
    }, [
        m
    ]);
    const Q = s(function([t]) {
        return r("WAWebWid").isMetaForBusiness(t);
    }, [
        m
    ]);
    const X = s(function([t]) {
        return r("WAWebWid").isSupportAccount(t);
    }, [
        m
    ]);
    const Y = s(function([t]) {
        return r("WAWebWid").isCAPISupportAccount(t);
    }, [
        m
    ]);
    const J = s(function([t, n]) {
        return t && n === "in";
    }, [
        q,
        L
    ]);
    const Z = s(function([t, n]) {
        if (t) {
            return r("WAWebWid").user(n);
        }
        return null;
    }, [
        q,
        m
    ]);
    const ee = s(function([t]) {
        return t == null || t + o("WATimeUtils").DAY_SECONDS < o("WATimeUtils").unixTime();
    }, [
        E
    ]);
    const te = s(function([t, n, r, a, i, l]) {
        return i || o("WAWebBotUtils").isBotChannelFBID(l) || t && n === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH && (r === a || !r || l.isBot());
    }, [
        _,
        C,
        v,
        b,
        X,
        m
    ]);
    const ne = s(function([t, n, r, a]) {
        return t && n === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH && !!r && r !== a;
    }, [
        _,
        C,
        v,
        b
    ]);
    const re = s(function([t, n, r]) {
        return o("WAWebBotUtils").isBotChannelFBID(r) || t && n === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH;
    }, [
        _,
        C,
        m
    ]);
    const oe = s(function([t, n]) {
        return t && (n === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH || n === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.LOW);
    }, [
        _,
        C
    ]);
    const ae = s(function([t, n, o]) {
        if (!r("justknobx")._("2452") && !o) {
            return false;
        }
        return !t && !n;
    }, [
        S,
        R,
        q
    ]);
    const ie = s(function([t, n]) {
        return t && n === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH;
    }, [
        _,
        C
    ]);
    l.getContactUnsafe = d;
    l.getId = m;
    l.getPushname = p;
    l.getIsBusiness = _;
    l.getIsContactOptedOut = f;
    l.getIsEverOptedOutOfMarketingMessages = g;
    l.getIsMarketingMessageThread = h;
    l.getProfilePicThumb = y;
    l.getVerifiedLevel = C;
    l.getVerifiedName = b;
    l.getName = v;
    l.getRequestedPnTimestamp = E;
    l.getShortName = k;
    l.getIsEnterprise = I;
    l.getIsSmb = T;
    l.getLabels = D;
    l.getDisappearingModeDuration = x;
    l.getDisappearingModeSettingTimestamp = $;
    l.getStatusMute = P;
    l.getCalculatedStatusMute = M;
    l.getPrivacyMode = w;
    l.getIsHosted = A;
    l.getBusinessProfile = F;
    l.getNotifyName = O;
    l.getPremiumMessageName = B;
    l.getIsMe = W;
    l.getIsUser = q;
    l.getIsGroup = U;
    l.getIsBroadcast = V;
    l.getIsNewsletter = H;
    l.getIsBot = G;
    l.getIsAiHub = z;
    l.getIsPSA = j;
    l.getIsIAS = K;
    l.getIsMetaForBusiness = Q;
    l.getIsSupportAccount = X;
    l.getIsCAPISupportAccount = Y;
    l.getIsWAContact = J;
    l.getUserid = Z;
    l.getCanRequestPhoneNumber = ee;
    l.getShowBusinessCheckmarkAsPrimary = te;
    l.getShowBusinessCheckmarkAsSecondary = ne;
    l.getShowBusinessCheckmarkInChatlist = re;
    l.getIsDisplayNameApproved = oe;
    l.getShouldForceBusinessUpdate = ae;
    l.getShowAsMetaVerified = ie;
}, 98);