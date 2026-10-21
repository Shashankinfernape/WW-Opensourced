__d("WAWebListUtils", [
    "fbt",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebChatMessageSearch",
    "WAWebChatSearchFilters",
    "WAWebConnModel",
    "WAWebCustomerManagerGating",
    "WAWebFrontendChatGetters",
    "WAWebInboxFiltersGatingUtils",
    "WAWebLabelCollection",
    "WAWebLabelConstants",
    "WAWebLabelPillColors",
    "WAWebLeadListConstants",
    "WAWebListsGatingUtils",
    "WAWebMobilePlatforms",
    "WAWebSchemaLabel"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = 20;
    const c = 22;
    function d() {
        if (o("WAWebListsGatingUtils").isListsChatListRowPillEnabled()) {
            return Array.from({
                length: o("WAWebLabelPillColors").PILL_COLOR_PALETTE_SIZE
            }, function(e, t) {
                return o("WAWebLabelPillColors").getDotColor(t);
            });
        }
        if (o("WAWebConnModel").Conn.platform === o("WAWebMobilePlatforms").PLATFORMS.SMBI) {
            return o("WAWebLabelConstants").IPHONE_LABEL_COLOR_PALETTE;
        }
        return o("WAWebLabelConstants").ANDROID_LABEL_COLOR_PALETTE;
    }
    function m(e) {
        const n = d();
        return n[e] ?? n[0];
    }
    function p() {
        const e = o("WAWebListsGatingUtils").isListsChatListRowPillEnabled();
        if (e) {
            return o("WAWebLabelPillColors").getCustomLabelColorIndices().map((originalIndex)=>({
                    hexColor: o("WAWebLabelPillColors").getDotColor(originalIndex),
                    originalIndex
                }));
        }
        return d().map((hexColor, originalIndex)=>({
                hexColor,
                originalIndex
            }));
    }
    function _(e, t) {
        const n = parseInt(e.id, 10);
        const r = parseInt(t.id, 10);
        if (Number.isNaN(n) || Number.isNaN(r)) {
            return 0;
        }
        return n - r;
    }
    function f(e) {
        e.sort((e, t)=>{
            const n = e.orderIndex - t.orderIndex;
            if (n === 0) {
                return _(e, t);
            }
            return n;
        });
    }
    const g = new Set([
        (e = o("WAWebSchemaLabel")).ListType.UNREAD,
        e.ListType.GROUPS,
        e.ListType.FAVORITES,
        e.ListType.COMMUNITY,
        e.ListType.MENTIONS_AND_REPLIES
    ]);
    function h(e) {
        if (e == null) {
            return false;
        }
        return g.has(e);
    }
    function y(e) {
        return e === o("WAWebSchemaLabel").ListType.AI_HANDOFF || e === o("WAWebSchemaLabel").ListType.AI_RESPONDING;
    }
    function C(e) {
        return e?.predefinedId === o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID && o("WAWebCustomerManagerGating").customerManagerEnabled();
    }
    function b(e) {
        return h(e?.type) || y(e?.type) || C(e);
    }
    function v(e) {
        return e.filter === o("WAWebChatSearchFilters").SearchFilters.TO_YOU && e.listId == null;
    }
    function S(e) {
        return e === o("WAWebSchemaLabel").ListType.MENTIONS_AND_REPLIES && !o("WAWebInboxFiltersGatingUtils").inboxToYouFilterEnabled();
    }
    function R(e, t) {
        return o("WAWebMobilePlatforms").isSMB() && (e === o("WAWebSchemaLabel").ListType.CUSTOM || e === o("WAWebSchemaLabel").ListType.PREDEFINED) && t != null;
    }
    function L(e) {
        return h(e) && e !== o("WAWebSchemaLabel").ListType.FAVORITES || y(e);
    }
    function E(e) {
        if (e === o("WAWebSchemaLabel").ListType.UNREAD) {
            return s._("Unread");
        }
        if (e === o("WAWebSchemaLabel").ListType.GROUPS) {
            return s._("Groups");
        }
        if (e === o("WAWebSchemaLabel").ListType.FAVORITES) {
            return s._("Favorites");
        }
        if (e === o("WAWebSchemaLabel").ListType.COMMUNITY) {
            return s._("Communities");
        }
        if (e === o("WAWebSchemaLabel").ListType.AI_HANDOFF) {
            return s._("AI handoff");
        }
        if (e === o("WAWebSchemaLabel").ListType.AI_RESPONDING) {
            return s._("AI responding");
        }
        if (e === o("WAWebSchemaLabel").ListType.MENTIONS_AND_REPLIES) {
            return s._("Mentions and replies");
        }
        return null;
    }
    function k(e) {
        if (e === o("WAWebSchemaLabel").ListType.MENTIONS_AND_REPLIES) {
            return s._("Mentions…");
        }
        return null;
    }
    function I(e) {
        if (e === o("WAWebSchemaLabel").ListType.UNREAD) {
            return s._("This list automatically updates with your unread chats.");
        }
        if (e === o("WAWebSchemaLabel").ListType.GROUPS) {
            return s._("This list automatically updates with your group chats.");
        }
        if (e === o("WAWebSchemaLabel").ListType.FAVORITES) {
            return s._("This list shows chats you've marked as favorites. Star a chat to add it here.");
        }
        if (e === o("WAWebSchemaLabel").ListType.COMMUNITY) {
            return s._("This list automatically updates with your communities.");
        }
        if (e === o("WAWebSchemaLabel").ListType.AI_HANDOFF) {
            return s._("Chats are added to this list when the customer needs a response from you. You can reply to the chat to remove it from this list.");
        }
        if (e === o("WAWebSchemaLabel").ListType.AI_RESPONDING) {
            return s._("This list automatically updates for you with chats where AI agent is responding.");
        }
        if (e === o("WAWebSchemaLabel").ListType.MENTIONS_AND_REPLIES) {
            return s._("This list automatically updates with unread chats where you were mentioned or replied to.");
        }
        return null;
    }
    function T(e, t) {
        if (h(t) && t !== o("WAWebSchemaLabel").ListType.FAVORITES || y(t)) {
            return s._("{listName} (preset)", [
                s._param("listName", E(t) ?? e)
            ]);
        }
        return e;
    }
    function D(e) {
        if (e === "AI_HANDOFF") {
            return s._("AI handoff").toString();
        }
        return s._("AI responding").toString();
    }
    function x() {
        if (o("WAWebLabelCollection").LabelCollection.getServerAssignedLabelIdMap().size > 0) {
            return c;
        }
        return u;
    }
    function $() {
        const e = o("WAWebLabelCollection").LabelCollection.countWhere(function(e) {
            return e.type === o("WAWebSchemaLabel").ListType.CUSTOM;
        });
        return e >= x();
    }
    function P() {
        const e = x();
        return s._("You can't add more than {max_count} lists", [
            s._param("max_count", e)
        ]);
    }
    function N() {
        return s._("You’ve created the maximum number of lists.");
    }
    function M(e) {
        if (typeof e === "function") {
            return e();
        }
        return e;
    }
    function w(e, t) {
        if (!t) {
            const n = k(e.listType);
            if (n != null) {
                return n;
            }
        }
        return M(e.getLabel);
    }
    function A(e, t) {
        if (e.filter === o("WAWebChatSearchFilters").SearchFilters.UNREAD || e.filter === o("WAWebChatSearchFilters").SearchFilters.GROUP || e.filter === o("WAWebChatSearchFilters").SearchFilters.FAVORITES || e.filter === o("WAWebChatSearchFilters").SearchFilters.COMMUNITY || e.filter === o("WAWebChatSearchFilters").SearchFilters.CHANNELS || e.filter === o("WAWebChatSearchFilters").SearchFilters.TO_YOU) {
            return t.get(String(e.filter)) ?? 0;
        }
        return t.get(String(e.listId)) ?? 0;
    }
    const F = {
        channelsPillCount: 0,
        unreadPillCount: 0
    };
    function O(e = F) {
        const t = o("WAWebLabelCollection").LabelCollection.toArray();
        const n = new Map;
        let r = 0;
        let a = 0;
        let i = 0;
        let l = 0;
        let s = 0;
        const e_channelsPillCount = e.channelsPillCount;
        t.forEach((e)=>{
            n.set(e.id, 0);
        });
        o("WAWebChatCollection").ChatCollection.forEach((e)=>{
            if (!(e.archive || !o("WAWebFrontendChatGetters").getShouldAppearInList(e))) {
                if (o("WAWebChatMessageSearch").matchFilter(e, {
                    kind: o("WAWebChatSearchFilters").SearchFilters.UNREAD
                })) {
                    r++;
                }
                if (o("WAWebChatMessageSearch").matchFilter(e, {
                    kind: o("WAWebChatSearchFilters").SearchFilters.TO_YOU
                })) {
                    s++;
                }
                if (o("WAWebChatGetters").getHasUnread(e)) {
                    if (o("WAWebChatMessageSearch").matchFilter(e, {
                        kind: o("WAWebChatSearchFilters").SearchFilters.GROUP
                    })) {
                        a++;
                    }
                    if (o("WAWebChatMessageSearch").matchFilter(e, {
                        kind: o("WAWebChatSearchFilters").SearchFilters.COMMUNITY
                    })) {
                        l++;
                    }
                    if (o("WAWebChatMessageSearch").matchFilter(e, {
                        kind: o("WAWebChatSearchFilters").SearchFilters.FAVORITES
                    })) {
                        i++;
                    }
                    if (e.labels != null && e.labels.length > 0) {
                        e.labels.forEach((e)=>{
                            const r = n.get(e) ?? 0;
                            n.set(e, r + 1);
                        });
                    }
                }
            }
        });
        n.set(String(o("WAWebChatSearchFilters").SearchFilters.UNREAD), r + e.unreadPillCount);
        n.set(String(o("WAWebChatSearchFilters").SearchFilters.GROUP), a);
        n.set(String(o("WAWebChatSearchFilters").SearchFilters.FAVORITES), i);
        n.set(String(o("WAWebChatSearchFilters").SearchFilters.COMMUNITY), l);
        n.set(String(o("WAWebChatSearchFilters").SearchFilters.CHANNELS), e_channelsPillCount);
        n.set(String(o("WAWebChatSearchFilters").SearchFilters.TO_YOU), s);
        return n;
    }
    function B(e) {
        if (e != null) {
            switch(e){
                case o("WAWebChatSearchFilters").SearchFilters.UNREAD:
                    return o("WAWebSchemaLabel").ListType.UNREAD;
                case o("WAWebChatSearchFilters").SearchFilters.GROUP:
                    return o("WAWebSchemaLabel").ListType.GROUPS;
                case o("WAWebChatSearchFilters").SearchFilters.FAVORITES:
                    return o("WAWebSchemaLabel").ListType.FAVORITES;
                case o("WAWebChatSearchFilters").SearchFilters.COMMUNITY:
                    return o("WAWebSchemaLabel").ListType.COMMUNITY;
                case o("WAWebChatSearchFilters").SearchFilters.TO_YOU:
                    return o("WAWebSchemaLabel").ListType.MENTIONS_AND_REPLIES;
                case o("WAWebChatSearchFilters").SearchFilters.LABELS:
                    return o("WAWebSchemaLabel").ListType.CUSTOM;
                default:
                    return null;
            }
        }
    }
    function W(e) {
        let t;
        if (e.label != null) {
            t = o("WAWebLabelCollection").LabelCollection.get(e.label);
        } else if (e.kind === o("WAWebChatSearchFilters").SearchFilters.AI_RESPONDING) {
            t = o("WAWebLabelCollection").LabelCollection.toArray().find((e)=>e.type === o("WAWebSchemaLabel").ListType.AI_RESPONDING);
        }
        if (t != null && t.name != null) {
            const r = E(t.type);
            return {
                listId: t.id,
                listName: r?.toString() ?? t.name
            };
        }
        return null;
    }
    function q() {
        return s._("Lead stage");
    }
    function U() {
        return s._("Lead stage (preset)");
    }
    l.getAllLabelColors = d;
    l.colorIndexToHex = m;
    l.getSelectableLabelColors = p;
    l.sortLabels = f;
    l.isBuiltInList = h;
    l.isAiList = y;
    l.isLeadList = C;
    l.hasFixedIdentity = b;
    l.isOverflowOnlyToYouPill = v;
    l.isHiddenToYouList = S;
    l.shouldShowListIcon = R;
    l.isDisableablePresetList = L;
    l.getPresetListLocalizedName = E;
    l.getPresetListShortName = k;
    l.getPresetListHelperText = I;
    l.getListDisplayName = T;
    l.getExpectedAiLabelName = D;
    l.isListFlowMaxListsCountReached = $;
    l.getReachMaxLabelCountTextForBizLabelDrawer = P;
    l.getReachMaxLabelCountText = N;
    l.resolvePillLabel = M;
    l.resolvePillLabelForState = w;
    l.getUnreadChatsCountForFilter = A;
    l.getListsUnreadChatCountMap = O;
    l.getListTypeFromFilter = B;
    l.getManageListInfo = W;
    l.getLeadStageListName = q;
    l.getLeadListManagerDisplayName = U;
}, 226);