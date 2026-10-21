__d("useWAWebChatlistRowHeight", [
    "WAWebBizAiAgentStatusUtils",
    "WAWebChatCollection",
    "WAWebChatCommunityUtils",
    "WAWebChatlistPanelMode",
    "WAWebChatlistWDSRowGating",
    "WAWebCommunityGatingUtils",
    "WAWebFeatureFlagCollection",
    "WDSPreviewListItemMetrics",
    "gkx",
    "react",
    "react-compiler-runtime",
    "useWAWebChatlistDensity",
    "useWAWebEventTargetValue"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useCallback = (e || (e = o("react"))).useCallback;
    function u(e) {
        const t = o("react-compiler-runtime").c(12);
        const { getDefaultHeight, isSearching, isSelecting, mode } = e;
        const density = o("useWAWebChatlistDensity").useWAWebChatlistDensity();
        const hasParentName = o("useWAWebChatlistDensity").useWAWebChatlistShowParentName();
        const d = mode === r("WAWebChatlistPanelMode").Chatlist && r("gkx")("22829");
        const showPinnedDivider = d && density === "singleLine" && !isSearching;
        const chatAssignmentVisibleToUser = r("useWAWebEventTargetValue")(o("WAWebFeatureFlagCollection").FeatureFlagCollection, "all", o("WAWebChatlistWDSRowGating").isChatAssignmentVisibleToUser);
        let _;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            _ = [
                "add",
                "remove",
                "change:isParentGroup"
            ];
            t[0] = _;
        } else {
            _ = t[0];
        }
        const f = r("useWAWebEventTargetValue")(d ? o("WAWebChatCollection").ChatCollection : null, _, c);
        const f_showsNewSubgroupIdentity = f.showsNewSubgroupIdentity;
        let h;
        if (t[1] !== chatAssignmentVisibleToUser || t[2] !== density || t[3] !== getDefaultHeight || t[4] !== isSelecting || t[5] !== hasParentName || t[6] !== f_showsNewSubgroupIdentity || t[7] !== d) {
            h = function(t) {
                if (o("WAWebBizAiAgentStatusUtils").shouldShowTertiaryRowForChat(t)) {
                    return o("WAWebChatCommunityUtils").SUBGROUP_V2_CHAT_CELL_HEIGHT + 4;
                }
                const e = d && o("WAWebChatlistWDSRowGating").shouldUseWDSPreviewRow({
                    chat: t,
                    chatAssignmentVisibleToUser,
                    hasTertiary: false,
                    isSelectable: isSelecting,
                    showChatAssignmentIcon: false
                });
                if (f_showsNewSubgroupIdentity(t)) {
                    if (e) {
                        return o("WDSPreviewListItemMetrics").getWDSPreviewListItemRowHeight({
                            density,
                            hasParentName
                        });
                    }
                    return o("WAWebChatCommunityUtils").SUBGROUP_V2_CHAT_CELL_HEIGHT + 4;
                }
                if (e) {
                    return o("WDSPreviewListItemMetrics").getWDSPreviewListItemRowHeight({
                        density
                    });
                }
                return getDefaultHeight();
            };
            t[1] = chatAssignmentVisibleToUser;
            t[2] = density;
            t[3] = getDefaultHeight;
            t[4] = isSelecting;
            t[5] = hasParentName;
            t[6] = f_showsNewSubgroupIdentity;
            t[7] = d;
            t[8] = h;
        } else {
            h = t[8];
        }
        const getHeightForChat = h;
        let C;
        if (t[9] !== getHeightForChat || t[10] !== showPinnedDivider) {
            C = {
                getHeightForChat,
                showPinnedDivider
            };
            t[9] = getHeightForChat;
            t[10] = showPinnedDivider;
            t[11] = C;
        } else {
            C = t[11];
        }
        return C;
    }
    function c() {
        return {
            showsNewSubgroupIdentity
        };
    }
    function showsNewSubgroupIdentity(e) {
        return o("WAWebCommunityGatingUtils").shouldShowNewSubgroupIdentity(e.groupMetadata);
    }
    l.default = u;
}, 98);