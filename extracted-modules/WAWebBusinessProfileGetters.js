__d("WAWebBusinessProfileGetters", [
    "WAWebBotTypes",
    "WAWebBusinessProfileTypes",
    "WAWebGetters",
    "WAWebGettersCaches"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createBusinessProfileCache
    });
    const { clearCacheFor: s, computed: u, field: c, unsafeIdentityGetter: d } = e;
    const m = s;
    const p = d;
    const _ = c("automatedType");
    const f = c("customUrlPath");
    const g = c("profileOptions");
    const h = c("address");
    const y = c("businessHours");
    const C = c("catalogStatus");
    const b = c("categories");
    const v = c("commands");
    const S = c("commandsDescription");
    const R = c("coverPhoto");
    const L = c("description");
    const E = c("email");
    const k = c("fbPage");
    const I = c("googlePlaceId");
    const T = c("igProfessional");
    const D = c("isAuthorizedAgent");
    const x = c("isProfileLinked");
    const $ = c("latitude");
    const P = c("longitude");
    const N = c("obaPhoneNumber");
    const M = c("parentCompanyLogoUrl");
    const w = c("parentCompanyName");
    const A = c("prompts");
    const F = c("showGoogleInfo");
    const O = c("showGoogleReviews");
    const B = c("website");
    const W = c("welcomeMsgProtocolMode");
    const q = u(function([t]) {
        let n;
        if (t != null) {
            n = t;
        } else {
            return null;
        }
        return `${o("WAWebBusinessProfileTypes").BUSINESS_URL_DOMAIN}${n}`;
    }, [
        f
    ]);
    const U = u(function([t]) {
        return t === o("WAWebBotTypes").BizBotAutomatedType.FULL_3P;
    }, [
        _
    ]);
    const V = u(function([t]) {
        return t === o("WAWebBotTypes").BizBotAutomatedType.PARTIAL_1P;
    }, [
        _
    ]);
    l.clearBusinessProfileGetterCacheFor = m;
    l.getBusinessProfileUnsafe = p;
    l.getAutomatedType = _;
    l.getProfileOptions = g;
    l.getAddress = h;
    l.getBusinessHours = y;
    l.getCatalogStatus = C;
    l.getCategories = b;
    l.getCommands = v;
    l.getCommandsDescription = S;
    l.getCoverPhoto = R;
    l.getDescription = L;
    l.getEmail = E;
    l.getFbPage = k;
    l.getGooglePlaceId = I;
    l.getIgProfessional = T;
    l.getIsAuthorizedAgent = D;
    l.getIsProfileLinked = x;
    l.getLatitude = $;
    l.getLongitude = P;
    l.getObaPhoneNumber = N;
    l.getParentCompanyLogoUrl = M;
    l.getParentCompanyName = w;
    l.getPrompts = A;
    l.getShowGoogleInfo = F;
    l.getShowGoogleReviews = O;
    l.getWebsite = B;
    l.getWelcomeMsgProtocolMode = W;
    l.getCustomUrl = q;
    l.getIsBizBot3p = U;
    l.getIsBizBot1p = V;
}, 98);