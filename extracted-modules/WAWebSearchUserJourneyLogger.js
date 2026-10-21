__d("WAWebSearchUserJourneyLogger", [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebChatModel",
    "WAWebContactModel",
    "WAWebMsgModel",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebSearchUserJourneyWamEvent",
    "WAWebUnifiedSession",
    "WAWebWamEnumSearchUjItemType",
    "WAWebWamEnumSearchUseCase",
    "WAWebWamEnumSearchUserJourneyAction",
    "WAWebWamEnumTsSurface"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = [
        "item",
        "itemTypeOverride"
    ];
    class c {
        constructor(){
            this.loggingEnabled = false;
            this.$3 = false;
            this.$4 = false;
            this.$5 = false;
            this.loggingEnabled = o("WAWebABProps").getABPropConfigValue("search_user_journey_logging_wam_enabled");
        }
        searchCtaClicked(t) {
            if (!(t == null || this.$5)) {
                this.$5 = true;
                this.$6({
                    uiSurface: t,
                    action: o("WAWebWamEnumSearchUserJourneyAction").SEARCH_USER_JOURNEY_ACTION.SEARCH_CTA_CLICKED
                });
            }
        }
        nullStateShow(t) {
            this.$6({
                action: o("WAWebWamEnumSearchUserJourneyAction").SEARCH_USER_JOURNEY_ACTION.NULL_STATE_SHOW,
                aiSuggestionCount: t
            });
        }
        nullStateItemClick(itemType, selectedItemRank, r) {
            this.$6({
                action: o("WAWebWamEnumSearchUserJourneyAction").SEARCH_USER_JOURNEY_ACTION.NULL_STATE_ITEM_CLICK,
                itemType,
                selectedItemRank,
                aiSuggestionCount: r
            });
        }
        recentSearchesClearAllClick() {
            this.$6({
                action: o("WAWebWamEnumSearchUserJourneyAction").SEARCH_USER_JOURNEY_ACTION.RECENT_SEARCHES_CLEAR_ALL_CLICK
            });
        }
        searchStart(t, criteriaType) {
            if (!(t == null || this.$3)) {
                this.$3 = true;
                this.$6({
                    action: o("WAWebWamEnumSearchUserJourneyAction").SEARCH_USER_JOURNEY_ACTION.SEARCH_START,
                    criteriaType
                });
            }
        }
        resultPageShow(t) {
            if (!this.$4) {
                this.$4 = true;
                const resultCount = t.chatsCount + t.contactsCount + t.messagesCount + t.groupsInCommonCount + t.ftsMessagesCount;
                this.$6(babelHelpers.extends({
                    action: o("WAWebWamEnumSearchUserJourneyAction").SEARCH_USER_JOURNEY_ACTION.RESULT_PAGE_SHOW,
                    resultCount
                }, t));
            }
        }
        resultItemClick(n) {
            const { item, itemTypeOverride } = n;
            const i = babelHelpers.objectWithoutPropertiesLoose(n, u);
            let itemType = itemTypeOverride;
            if (itemType == null) {
                if (item instanceof o("WAWebMsgModel").Msg) {
                    itemType = o("WAWebWamEnumSearchUjItemType").SEARCH_UJ_ITEM_TYPE.MESSAGE;
                } else if (item instanceof o("WAWebChatModel").Chat) {
                    itemType = o("WAWebWamEnumSearchUjItemType").SEARCH_UJ_ITEM_TYPE.CHAT;
                } else if (item instanceof r("WAWebContactModel")) {
                    itemType = o("WAWebWamEnumSearchUjItemType").SEARCH_UJ_ITEM_TYPE.CONTACT;
                }
            }
            if (itemType == null) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[uj] [search] Unsupported item type: ",
                    ""
                ])), item.constructor.name);
                return;
            }
            this.$6(babelHelpers.extends({
                action: o("WAWebWamEnumSearchUserJourneyAction").SEARCH_USER_JOURNEY_ACTION.RESULT_ITEM_CLICK,
                itemType
            }, i));
        }
        dismiss(dismissType) {
            this.$6({
                action: o("WAWebWamEnumSearchUserJourneyAction").SEARCH_USER_JOURNEY_ACTION.DISMISS,
                dismissType
            });
        }
        $6(t) {
            if (this.loggingEnabled) {
                const n = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId();
                if (n == null) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[uj] [search] Unified session ID is null"
                    ])));
                    return;
                }
                if (d(t.action) && this.$1 == null) {
                    this.$1 = r("WAWebPonyfillsCryptoRandomUUID")();
                    this.$2 = r("WAWebPonyfillsCryptoRandomUUID")();
                }
                const a = this.$1;
                if (a != null) {
                    const i = new (o("WAWebSearchUserJourneyWamEvent")).SearchUserJourneyWamEvent;
                    i.unifiedSessionId = n;
                    i.userJourneyFunnelId = a;
                    i.userJourneyEventMs = o("WATimeUtils").unixTimeMs();
                    i.searchUserJourneyAction = t.action;
                    i.searchUseCase = o("WAWebWamEnumSearchUseCase").SEARCH_USE_CASE.GLOBAL_SEARCH;
                    i.uiSurface = t.uiSurface ?? o("WAWebWamEnumTsSurface").TS_SURFACE.SEARCH;
                    if (this.$2 != null) {
                        i.searchUniqueSessionId = this.$2;
                    }
                    if (t.itemType != null) {
                        i.searchUjItemType = t.itemType;
                    }
                    if (t.selectedItemRank != null) {
                        i.searchUjSelectedItemRank = t.selectedItemRank;
                    }
                    if (t.resultCount != null) {
                        i.searchUjResultCount = t.resultCount;
                    }
                    if (t.chatsCount != null) {
                        i.searchUjChatsCount = t.chatsCount;
                    }
                    if (t.contactsCount != null) {
                        i.searchUjContactsCount = t.contactsCount;
                    }
                    if (t.messagesCount != null) {
                        i.searchUjMessagesCount = t.messagesCount;
                    }
                    if (t.bizCount != null) {
                        i.searchUjBizCount = t.bizCount;
                    }
                    if (t.groupsInCommonCount != null) {
                        i.searchUjGroupsInCommonCount = t.groupsInCommonCount;
                    }
                    if (t.aiSuggestionCount != null) {
                        i.searchUjAiSuggestionCount = t.aiSuggestionCount;
                    }
                    if (t.hasFuzzyResults != null) {
                        i.searchUjHasFuzzyResults = t.hasFuzzyResults;
                    }
                    if (t.criteriaType != null) {
                        i.searchUjCriteriaType = t.criteriaType;
                    }
                    if (t.filterCount != null) {
                        i.searchUjFilterCount = t.filterCount;
                    }
                    if (t.filterType != null) {
                        i.searchUjFilterType = t.filterType;
                    }
                    if (t.dismissType != null) {
                        i.searchUjDismissType = t.dismissType;
                    }
                    if (t.selectedMessageSource != null) {
                        i.searchSelectedMessageSource = t.selectedMessageSource;
                    }
                    if (t.selectedMessageDistance != null) {
                        i.selectedMessageDistance = t.selectedMessageDistance;
                    }
                    if (t.ftsMessagesCount != null) {
                        i.searchFtsMessagesCount = t.ftsMessagesCount;
                    }
                    if (t.semanticMessagesCount != null) {
                        i.searchSemanticMessagesCount = t.semanticMessagesCount;
                    }
                    if (t.ftsAndSemanticMessagesCount != null) {
                        i.searchFtsAndSemanticMessagesCount = t.ftsAndSemanticMessagesCount;
                    }
                    if (t.hasSemanticSearchResults != null) {
                        i.searchHasSemanticSearchResults = t.hasSemanticSearchResults;
                    }
                    i.commit();
                    if (m(t.action)) {
                        this.$1 = null;
                        this.$2 = null;
                        this.$5 = false;
                        this.$3 = false;
                        this.$4 = false;
                    }
                }
            }
        }
    }
    function d(action) {
        return action === o("WAWebWamEnumSearchUserJourneyAction").SEARCH_USER_JOURNEY_ACTION.SEARCH_CTA_CLICKED || action === o("WAWebWamEnumSearchUserJourneyAction").SEARCH_USER_JOURNEY_ACTION.SEARCH_START;
    }
    function m(action) {
        return action === o("WAWebWamEnumSearchUserJourneyAction").SEARCH_USER_JOURNEY_ACTION.DISMISS || action === o("WAWebWamEnumSearchUserJourneyAction").SEARCH_USER_JOURNEY_ACTION.NULL_STATE_ITEM_CLICK || action === o("WAWebWamEnumSearchUserJourneyAction").SEARCH_USER_JOURNEY_ACTION.RESULT_ITEM_CLICK;
    }
    const p = new c;
    l.SearchUserJourneyLogger = p;
}, 98);