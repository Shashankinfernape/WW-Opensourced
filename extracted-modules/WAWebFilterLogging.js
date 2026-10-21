__d("WAWebFilterLogging", [
    "WAWebChatFilterEventWamEvent",
    "WAWebChatSearchFilters",
    "WAWebChatThreadLogging",
    "WAWebConnGetters",
    "WAWebConnModel",
    "WAWebInboxFiltersGatingUtils",
    "WAWebLabelCollection",
    "WAWebListUtils",
    "WAWebListsLabelGatingUtils",
    "WAWebListsLogging",
    "WAWebWamEnumChatFilterActionTypes",
    "WAWebWamEnumChatFilterTargetScreen",
    "WAWebWamEnumChatFilterTypes",
    "WAWebWamEnumChatSearchResultType",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (e == null || !e.kind && (e.label == null || e.label === "")) {
            return o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.NONE;
        }
        if (!e.kind) {
            if (o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn)) {
                return o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.OTHER_LABELS;
            }
            return o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.NONE;
        }
        switch(e.kind){
            case o("WAWebChatSearchFilters").SearchFilters.UNREAD:
                return o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.UNREAD;
            case o("WAWebChatSearchFilters").SearchFilters.FAVORITES:
                return o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.FAVORITES;
            case o("WAWebChatSearchFilters").SearchFilters.GROUP:
                return o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.GROUP;
            case o("WAWebChatSearchFilters").SearchFilters.COMMUNITY:
                return o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.COMMUNITY;
            case o("WAWebChatSearchFilters").SearchFilters.BROADCAST:
                return o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.BROADCAST_LIST;
            case o("WAWebChatSearchFilters").SearchFilters.CONTACT:
                return o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.CONTACT;
            case o("WAWebChatSearchFilters").SearchFilters.NON_CONTACT:
                return o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.NON_CONTACT;
            case o("WAWebChatSearchFilters").SearchFilters.ASSIGNED_TO_YOU:
                return o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.ASSIGNED_TO_YOU;
            case o("WAWebChatSearchFilters").SearchFilters.PERSONAL:
                return o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.PERSONAL;
            case o("WAWebChatSearchFilters").SearchFilters.BUSINESS:
                return o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.BUSINESS;
            case o("WAWebChatSearchFilters").SearchFilters.LABELS:
                return o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.LABEL;
            case o("WAWebChatSearchFilters").SearchFilters.CHANNELS:
                return o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.NONE;
            case o("WAWebChatSearchFilters").SearchFilters.AI_RESPONDING:
            case o("WAWebChatSearchFilters").SearchFilters.AI_HANDOFF:
                return o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.BUSINESS_AI;
            case o("WAWebChatSearchFilters").SearchFilters.TO_YOU:
                return o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.NONE;
        }
    }
    const s = ({ eventData, filter, threadId })=>{
        if (o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled() && filter != null) {
            eventData.targetScreen = o("WAWebWamEnumChatFilterTargetScreen").CHAT_FILTER_TARGET_SCREEN.CHAT_LIST;
            let a;
            if (filter.label != null) {
                a = o("WAWebLabelCollection").LabelCollection.get(filter.label);
            }
            if (a == null) {
                const i = o("WAWebListUtils").getListTypeFromFilter(filter.kind);
                if (i != null && o("WAWebListUtils").isBuiltInList(i)) {
                    a = o("WAWebLabelCollection").LabelCollection.findFirst(function(e) {
                        return e.type === i;
                    });
                }
            }
            if (a != null) {
                if (a.predefinedId != null) {
                    eventData.predefinedId = a.predefinedId;
                }
                if (a.name != null) {
                    eventData.labelName = a.name;
                }
                const l = parseInt(a.id, 10);
                if (!isNaN(l)) {
                    eventData.listId = l;
                }
                const s = o("WAWebListsLogging").getListType(a.type);
                if (s != null) {
                    eventData.listType = s;
                }
                const u = o("WAWebLabelCollection").LabelCollection.getActiveLists().indexOf(a) + 1;
                eventData.listIndex = u;
                if (threadId != null) {
                    eventData.threadId = threadId;
                }
            }
        }
    };
    function u(e) {
        const t = new (o("WAWebChatFilterEventWamEvent")).ChatFilterEventWamEvent({
            actionType: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.OPEN,
            filterType: o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.NONE,
            sessionId: e
        });
        if (o("WAWebListsLabelGatingUtils").smartFiltersEnabled()) {
            t.targetScreen = o("WAWebWamEnumChatFilterTargetScreen").CHAT_FILTER_TARGET_SCREEN.CHAT_LIST;
        }
        t.commit();
    }
    function c(t, n) {
        const filterType = e(n);
        if (filterType !== o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.NONE) {
            const a = {
                actionType: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.SELECT_FILTER,
                filterType,
                sessionId: t
            };
            if (o("WAWebListsLabelGatingUtils").smartFiltersEnabled()) {
                a.targetScreen = o("WAWebWamEnumChatFilterTargetScreen").CHAT_FILTER_TARGET_SCREEN.CHAT_LIST;
            }
            s({
                eventData: a,
                filter: n
            });
            new (o("WAWebChatFilterEventWamEvent")).ChatFilterEventWamEvent(a).commit();
        }
    }
    function d(t, n) {
        const r = {
            actionType: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.FILTER_EMPTY_STATE_VIEWED,
            filterType: e(n),
            targetScreen: o("WAWebWamEnumChatFilterTargetScreen").CHAT_FILTER_TARGET_SCREEN.CHAT_LIST,
            sessionId: t
        };
        s({
            eventData: r,
            filter: n
        });
        new (o("WAWebChatFilterEventWamEvent")).ChatFilterEventWamEvent(r).commit();
    }
    function m(searchResult) {
        let t;
        switch(searchResult){
            case "chat":
                t = o("WAWebWamEnumChatSearchResultType").CHAT_SEARCH_RESULT_TYPE.CHAT;
                break;
            case "message":
                t = o("WAWebWamEnumChatSearchResultType").CHAT_SEARCH_RESULT_TYPE.MESSAGE;
                break;
            case "contact":
                t = o("WAWebWamEnumChatSearchResultType").CHAT_SEARCH_RESULT_TYPE.CONTACT;
                break;
            case "group":
                t = o("WAWebWamEnumChatSearchResultType").CHAT_SEARCH_RESULT_TYPE.GROUP;
                break;
        }
        return t;
    }
    function p(t, n) {
        const r = {
            actionType: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.SEARCH,
            filterType: e(n),
            targetScreen: o("WAWebWamEnumChatFilterTargetScreen").CHAT_FILTER_TARGET_SCREEN.CHAT_LIST,
            sessionId: t
        };
        s({
            eventData: r,
            filter: n
        });
        new (o("WAWebChatFilterEventWamEvent")).ChatFilterEventWamEvent(r).commit();
    }
    function _(e) {
        const t = new (o("WAWebChatFilterEventWamEvent")).ChatFilterEventWamEvent({
            actionType: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.SEARCH_WITH_FILTER,
            filterType: o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.OTHER_LABELS,
            sessionId: e
        });
        t.commit();
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatId, filter, searchResult, sessionId }) {
            const l = {
                actionType: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.SEARCH_ITEM_SELECTED,
                filterType: e(filter),
                searchResultType: m(searchResult),
                targetScreen: o("WAWebWamEnumChatFilterTargetScreen").CHAT_FILTER_TARGET_SCREEN.CHAT_LIST,
                sessionId
            };
            const u = chatId != null ? yield o("WAWebChatThreadLogging").getChatThreadID(chatId.toJid()) : null;
            s({
                eventData: l,
                filter,
                threadId: u
            });
            new (o("WAWebChatFilterEventWamEvent")).ChatFilterEventWamEvent(l).commit();
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatId, filter, searchResult, sessionId }) {
            const l = {
                actionType: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.SEARCH_MSG_SENT,
                filterType: e(filter),
                searchResultType: m(searchResult),
                sessionId
            };
            const u = chatId != null ? yield o("WAWebChatThreadLogging").getChatThreadID(chatId.toJid()) : null;
            s({
                eventData: l,
                filter,
                threadId: u
            });
            new (o("WAWebChatFilterEventWamEvent")).ChatFilterEventWamEvent(l).commit();
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        const t = {
            actionType: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.FILTER_VIEWED,
            filterType: o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.LABEL,
            targetScreen: o("WAWebWamEnumChatFilterTargetScreen").CHAT_FILTER_TARGET_SCREEN.CHAT_LIST,
            sessionId: e
        };
        new (o("WAWebChatFilterEventWamEvent")).ChatFilterEventWamEvent(t).commit();
    }
    l.logOpenFilterEvent = u;
    l.logSelectFilterEvent = c;
    l.logEmptyStateViewedFilterEvent = d;
    l.logSearchFilterEvent = p;
    l.logSearchWithFilterEvent = _;
    l.logSearchItemSelectedFilterEvent = f;
    l.logSearchMsgSentFilterEvent = h;
    l.logLabelDropdownShownEvent = C;
}, 98);