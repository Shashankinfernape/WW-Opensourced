__d("WAWebNewsletterMetadataGetters", [
    "WAWebCommonNewsletterEnums",
    "WAWebGetters",
    "WAWebGettersCaches"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createNewsletterMetadataCache
    });
    const { clearCacheFor: s, computed: u, field: c, unsafeIdentityGetter: d } = e;
    const m = s;
    const p = d;
    const _ = c("adminCount");
    const f = c("adminProfile");
    const g = c("adminProfilesSettingEnabled");
    const h = c("capabilities");
    const y = c("creationTime");
    const C = c("description");
    const b = c("followerActivityMuteExpiration");
    const v = c("inviteCode");
    const S = c("membershipType");
    const R = c("subscribers");
    const L = c("name");
    const E = c("pinnedMessages");
    const k = c("privacy");
    const I = c("reactionCodesSetting");
    const T = c("size");
    const D = c("statusMetadata");
    const x = c("suspended");
    const $ = c("terminated");
    const P = c("verified");
    const N = c("wamoSubPlanId");
    const M = c("wamoSubStatus");
    const w = u(function([t, n]) {
        return t || n;
    }, [
        x,
        $
    ]);
    const A = u(function([t, n]) {
        return n === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner && t > 1 || n === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin || n === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Subscriber;
    }, [
        _,
        S
    ]);
    const F = u(function([t]) {
        return t === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner || t === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin || t === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Subscriber;
    }, [
        S
    ]);
    const O = u(function([t]) {
        return t === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Guest;
    }, [
        S
    ]);
    l.clearNewsletterMetadataGetterCacheFor = m;
    l.getNewsletterMetadataUnsafe = p;
    l.getAdminProfile = f;
    l.getAdminProfilesSettingEnabled = g;
    l.getCapabilities = h;
    l.getCreationTime = y;
    l.getDescription = C;
    l.getFollowerActivityMuteExpiration = b;
    l.getInviteCode = v;
    l.getMembershipType = S;
    l.getSubscribers = R;
    l.getName = L;
    l.getPinnedMessages = E;
    l.getPrivacy = k;
    l.getReactionCodesSetting = I;
    l.getSize = T;
    l.getStatusMetadata = D;
    l.getSuspended = x;
    l.getTerminated = $;
    l.getVerified = P;
    l.getWamoSubPlanId = N;
    l.getWamoSubStatus = M;
    l.getIsSuspendedOrTerminated = w;
    l.getCanBeMuted = A;
    l.getIsSubscribedOrOwned = F;
    l.getIsPreview = O;
}, 98);