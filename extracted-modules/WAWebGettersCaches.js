__d("WAWebGettersCaches", [
    "WAWebABProps",
    "WAWebDummyCacheMap",
    "WAWebEnvironment",
    "WAWebLruCacheMap"
], function(t, n, r, o, a, i, l) {
    const e = function() {
        const e = o("WAWebABProps").getABPropConfigValue("web_getters_lru_cache_size_limit");
        if (e > 0) {
            return new (o("WAWebLruCacheMap")).LruCacheMap({
                sizeLimit: e
            });
        }
        if (r("WAWebEnvironment").isWindows) {
            return new (o("WAWebDummyCacheMap")).FakeCacheMap;
        }
        return new Map;
    };
    const s = function() {
        return e();
    };
    const u = function() {
        return new (o("WAWebDummyCacheMap")).FakeCacheMap;
    };
    const c = function() {
        return new (o("WAWebDummyCacheMap")).FakeCacheMap;
    };
    const d = function() {
        return new (o("WAWebDummyCacheMap")).FakeCacheMap;
    };
    const m = function() {
        const e = o("WAWebABProps").getABPropConfigValue("web_getters_lru_cache_size_limit");
        if (e > 0) {
            return new (o("WAWebLruCacheMap")).LruCacheMap({
                sizeLimit: e
            });
        }
        return new Map;
    };
    const p = s;
    const _ = s;
    const f = s;
    const g = s;
    const h = m;
    const y = m;
    const C = s;
    const b = s;
    const v = s;
    const S = s;
    const R = s;
    const L = s;
    const E = s;
    const k = s;
    const I = s;
    const T = s;
    const D = s;
    const x = s;
    const $ = s;
    const P = s;
    const N = d;
    const M = s;
    const w = s;
    const A = s;
    const F = s;
    const O = s;
    const B = s;
    const W = s;
    const q = s;
    const U = s;
    const V = s;
    const H = s;
    const G = s;
    const z = s;
    const j = s;
    const K = s;
    const Q = s;
    const X = s;
    const Y = s;
    const J = s;
    const Z = s;
    const ee = s;
    const te = s;
    const ne = s;
    const re = s;
    const oe = s;
    const ae = s;
    const ie = s;
    const le = s;
    const se = s;
    const ue = s;
    const ce = s;
    const de = s;
    const me = s;
    const pe = s;
    const _e = s;
    const fe = s;
    const ge = s;
    const he = u;
    const ye = u;
    const Ce = s;
    const be = c;
    const ve = s;
    const Se = s;
    const Re = s;
    const Le = s;
    const Ee = s;
    const ke = s;
    const Ie = s;
    const Te = s;
    const De = s;
    l.createMessagesCache = p;
    l.createFrontendMessagesCache = _;
    l.createChatCache = f;
    l.createFrontendChatCache = g;
    l.createContactsCache = h;
    l.createFrontendContactsCache = y;
    l.createLabelsCache = C;
    l.createMuteCache = b;
    l.createPinInChatsCache = v;
    l.createFrontendPinInChatsCache = S;
    l.createMsgInfosCache = R;
    l.createPollVotesCache = L;
    l.createFrontendPollVotesCache = E;
    l.createNewsletterPollVotesCache = k;
    l.createFrontendNewsletterPollVotesCache = I;
    l.createSettingsCache = T;
    l.createStickerModelMdCache = D;
    l.createStickerCache = x;
    l.createFrontendStickerCache = $;
    l.createMediaEditControllerCache = P;
    l.createMediaDataCache = N;
    l.createOrderCache = M;
    l.createOrderItemCache = w;
    l.createQuickReplyCache = A;
    l.createFrontendQuickReplyCache = F;
    l.createStatusCache = O;
    l.createFrontendStatusCache = B;
    l.createRecordingSessionCache = W;
    l.createEventResponseCache = q;
    l.createFrontendEventResponseCache = U;
    l.createAiThreadCache = V;
    l.createCartCache = H;
    l.createCatalogCache = G;
    l.createFrontendCatalogCache = z;
    l.createUnjoinedSubgroupMetadataCache = j;
    l.createPresenceCache = K;
    l.createChatstateCache = Q;
    l.createFrontendPresenceCache = X;
    l.createReactionsSendersCache = Y;
    l.createNewsletterMetadataCache = J;
    l.createFrontendNewsletterMetadataCache = Z;
    l.createNewsletterLoadingStageManagerCache = ee;
    l.createBusinessProfileCache = te;
    l.createFrontendBusinessProfileCache = ne;
    l.createCommandCache = re;
    l.createPrimaryFeaturesCache = oe;
    l.createPttPrefsCache = ae;
    l.createNoticeCache = ie;
    l.createBizBroadcastCampaignCache = le;
    l.createProfilePicThumbCache = se;
    l.createFrontendProfilePicThumbCache = ue;
    l.createAttachMediaCache = ce;
    l.createFrontendAttachMediaCache = de;
    l.createConnCache = me;
    l.createStreamCache = pe;
    l.createNewsletterAdminInsightsCache = _e;
    l.createCommentCache = fe;
    l.createChatPreferenceCache = ge;
    l.createButtonCache = he;
    l.createFrontendButtonCache = ye;
    l.createProductImageCache = Ce;
    l.createProductCache = be;
    l.createGroupParticipantCache = ve;
    l.createBroadcastMetadataCache = Se;
    l.createFrontendCommentCache = Re;
    l.createGroupMetadataCache = Le;
    l.createFrontendGroupMetadataCache = Ee;
    l.createTextStatusCache = ke;
    l.createFrontendTextStatusCache = Ie;
    l.createOrgContactCache = Te;
    l.createOrgCache = De;
}, 98);