__d("WAWebSearchLogging", [
    "WAWebChatGetters",
    "WAWebChatModel",
    "WAWebContactModel",
    "WAWebSearchActionEventWamEvent",
    "WAWebWamEnumSearchActionEntryPointType",
    "WAWebWamEnumSearchActionType"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e({ action, searchAiSuggestionCount, searchChatsCount, searchContactsCount, searchGroupsCount, searchMessagesCount, selectedItemRank }) {
        const u = new (o("WAWebSearchActionEventWamEvent")).SearchActionEventWamEvent({
            searchAction: action,
            searchActionEntryPoint: o("WAWebWamEnumSearchActionEntryPointType").SEARCH_ACTION_ENTRY_POINT_TYPE.CHATS_LIST,
            searchAiSuggestionCount,
            selectedItemRank,
            searchChatsCount,
            searchContactsCount,
            searchGroupsCount,
            searchMessagesCount
        });
        u.commit();
    }
    function s(t, n) {
        const TYPEAHEAD_ITEM_CLICK = o("WAWebWamEnumSearchActionType").SEARCH_ACTION_TYPE.TYPEAHEAD_ITEM_CLICK;
        e: {
            const i = t;
            {
                const l = i;
                if (n != null) {
                    e({
                        action: TYPEAHEAD_ITEM_CLICK,
                        searchMessagesCount: 1
                    });
                    break e;
                }
            }
            {
                const s = i;
                if (t instanceof o("WAWebChatModel").Chat) {
                    const u = o("WAWebChatGetters").getIsGroup(t) ? {
                        searchGroupsCount: 1
                    } : {
                        searchChatsCount: 1
                    };
                    e(babelHelpers.extends({
                        action: TYPEAHEAD_ITEM_CLICK
                    }, u));
                    break e;
                }
            }
            {
                const c = i;
                if (t instanceof r("WAWebContactModel")) {
                    e({
                        action: TYPEAHEAD_ITEM_CLICK,
                        searchContactsCount: 1
                    });
                    break e;
                }
            }
            break e;
        }
    }
    l.logSearchActionTypeAheadItemClick = s;
}, 98);