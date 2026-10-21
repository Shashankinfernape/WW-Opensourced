__d("WAWebFrontendGroupMetadataGetters", [
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebGroupMetadataGetters"
], function(t, n, r, o, a, i, l) {
    const e = "https://chat.whatsapp.com/";
    const s = o("WAWebGetters").createGetterFactories({
        root: o("WAWebGroupMetadataGetters").getGroupMetadataUnsafe,
        createCache: o("WAWebGettersCaches").createFrontendGroupMetadataCache
    });
    const { clearCacheFor, computed, field } = s;
    function m(e) {
        clearCacheFor(e);
    }
    function p(e) {
        return field(e);
    }
    const _ = p("afterReadDuration");
    const f = p("allowNonAdminSubGroupCreation");
    const g = p("announce");
    const h = p("cachedDeviceCount");
    const y = p("cachedDeviceSizeBucket");
    const C = p("creation");
    const b = p("defaultSubgroup");
    const v = p("displayedDesc");
    const S = p("ephemeralDuration");
    const R = p("groupAdder");
    const L = p("hasCapi");
    const E = p("hiddenSubgroup");
    const k = p("id");
    const I = p("isInternal");
    const T = p("isLidAddressingMode");
    const D = p("isOpenBotGroup");
    const x = p("isParentGroup");
    const $ = p("isTeeBotGroup");
    const P = p("joinedSubgroups");
    const N = p("lastReportToAdminTimestamp");
    const M = p("memberAddMode");
    const w = p("memberLinkMode");
    const A = p("membershipApprovalMode");
    const F = p("memberShareGroupHistoryMode");
    const O = p("noFrequentlyForwarded");
    const B = p("owner");
    const W = p("parentGroup");
    const q = p("reportToAdminMode");
    const U = p("restrict");
    const V = p("shouldDefaultGroupHistoryShareOn");
    const H = p("size");
    const G = p("support");
    const z = p("suspended");
    const j = p("terminated");
    const K = p("uniqueShortNameMap");
    const Q = p("unjoinedSubgroups");
    const X = field("inviteCode");
    const Y = computed(function([n]) {
        if (n) {
            return `${e}${n}`;
        }
        return null;
    }, [
        X
    ]);
    l.clearFrontendGroupMetadataGetterCacheFor = m;
    l.getAfterReadDuration = _;
    l.getAllowNonAdminSubGroupCreation = f;
    l.getAnnounce = g;
    l.getCachedDeviceCount = h;
    l.getCachedDeviceSizeBucket = y;
    l.getCreation = C;
    l.getDefaultSubgroup = b;
    l.getDisplayedDesc = v;
    l.getEphemeralDuration = S;
    l.getGroupAdder = R;
    l.getHasCapi = L;
    l.getHiddenSubgroup = E;
    l.getId = k;
    l.getIsInternal = I;
    l.getIsLidAddressingMode = T;
    l.getIsOpenBotGroup = D;
    l.getIsParentGroup = x;
    l.getIsTeeBotGroup = $;
    l.getJoinedSubgroups = P;
    l.getLastReportToAdminTimestamp = N;
    l.getMemberAddMode = M;
    l.getMemberLinkMode = w;
    l.getMembershipApprovalMode = A;
    l.getMemberShareGroupHistoryMode = F;
    l.getNoFrequentlyForwarded = O;
    l.getOwner = B;
    l.getParentGroup = W;
    l.getReportToAdminMode = q;
    l.getRestrict = U;
    l.getShouldDefaultGroupHistoryShareOn = V;
    l.getSize = H;
    l.getSupport = G;
    l.getSuspended = z;
    l.getTerminated = j;
    l.getUniqueShortNameMap = K;
    l.getUnjoinedSubgroups = Q;
    l.getInviteCode = X;
    l.getGroupInviteLink = Y;
}, 98);