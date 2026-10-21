__d("WAWebChatGetters", [
    "WAWebBoolFunc",
    "WAWebBotUtils",
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createChatCache
    });
    const { clearCacheFor, computed, field, unsafeIdentityGetter } = e;
    const m = clearCacheFor;
    const p = unsafeIdentityGetter;
    const _ = field("id");
    const f = field("t");
    const g = field("unreadCount", {
        default: 0
    });
    const h = field("archive");
    const y = field("isReadOnly");
    const C = field("isLocked");
    const b = field("muteExpiration", {
        default: 0
    });
    const v = field("isAutoMuted", {
        default: false
    });
    const S = field("name");
    const R = field("pin");
    const L = field("labels");
    const E = field("endOfHistoryTransferType");
    const k = field("pendingInitialLoading", {
        default: false
    });
    const I = field("changeNumberOldJid");
    const T = field("changeNumberNewJid");
    const D = field("chatlistPreview");
    const x = field("lastReactionPreview");
    const $ = field("draftMessage");
    const P = field("capiThreadControl");
    const N = field("suggestedRepliesEnabled");
    const M = field("aiLastHandoffActor");
    const w = field("bbProEntrypointEnabled", {
        default: false
    });
    const A = field("tcToken");
    const F = field("tcTokenTimestamp");
    const O = field("previewT");
    const B = computed(function([t]) {
        return r("WAWebWid").isUser(t);
    }, [
        _
    ]);
    const W = computed(function([t]) {
        return r("WAWebWid").isPSA(t);
    }, [
        _
    ]);
    const q = computed(function([t]) {
        return r("WAWebWid").isIAS(t);
    }, [
        _
    ]);
    const U = computed(function([t]) {
        return r("WAWebWid").isMetaForBusiness(t);
    }, [
        _
    ]);
    const V = computed(function([t]) {
        return r("WAWebWid").isGroup(t);
    }, [
        _
    ]);
    const H = computed(function([t]) {
        return r("WAWebWid").isBroadcast(t);
    }, [
        _
    ]);
    const G = computed(function([t]) {
        return r("WAWebWid").isNewsletter(t);
    }, [
        _
    ]);
    const z = computed(function([t]) {
        return r("WAWebWid").isBot(t);
    }, [
        _
    ]);
    const j = computed(function([t]) {
        return o("WAWebBotUtils").isMetaAiBot(t);
    }, [
        _
    ]);
    const K = computed(function([t]) {
        return o("WAWebBotUtils").isBusinessAssistantBot(t);
    }, [
        _
    ]);
    const Q = computed(function([t]) {
        return o("WAWebBotUtils").isHatchBot(t);
    }, [
        _
    ]);
    const X = computed(function([t]) {
        return o("WAWebBotUtils").isBotChannelFBID(t);
    }, [
        _
    ]);
    const Y = computed(function([t, n]) {
        return !t && !n;
    }, [
        H,
        W
    ]);
    const J = computed(o("WAWebBoolFunc").returnTrue, [
        H
    ]);
    const Z = computed(function([t]) {
        return t !== 0;
    }, [
        g
    ]);
    l.clearChatGetterCacheFor = m;
    l.getChatUnsafe = p;
    l.getId = _;
    l.getT = f;
    l.getUnreadCount = g;
    l.getArchive = h;
    l.getIsReadOnly = y;
    l.getIsLocked = C;
    l.getMuteExpiration = b;
    l.getIsAutoMuted = v;
    l.getName = S;
    l.getPin = R;
    l.getLabels = L;
    l.getEndOfHistoryTransferType = E;
    l.getPendingInitialLoading = k;
    l.getChangeNumberOldJid = I;
    l.getChangeNumberNewJid = T;
    l.getChatlistPreview = D;
    l.getLastReactionPreview = x;
    l.getDraftMessage = $;
    l.getCapiThreadControl = P;
    l.getSuggestedRepliesEnabled = N;
    l.getAiLastHandoffActor = M;
    l.getBBProEntrypointEnabled = w;
    l.getTcToken = A;
    l.getTcTokenTimestamp = F;
    l.getPreviewT = O;
    l.getIsUser = B;
    l.getIsPSA = W;
    l.getIsIAS = q;
    l.getIsMetaForBusiness = U;
    l.getIsGroup = V;
    l.getIsBroadcast = H;
    l.getIsNewsletter = G;
    l.getIsBot = z;
    l.getIsMetaAiBot = j;
    l.getIsBusinessAssistantBot = K;
    l.getIsHatchBot = Q;
    l.getIsBotChannel = X;
    l.getIsEligibleForContactSync = Y;
    l.getCanUnread = J;
    l.getHasUnread = Z;
}, 98);