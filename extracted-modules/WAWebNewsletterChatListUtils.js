__d("WAWebNewsletterChatListUtils", [
    "WATimeUtils",
    "WAWebChatComparator",
    "WAWebChatGetters",
    "WAWebChatMessageSearch",
    "WAWebChatSearchFilters",
    "WAWebContactSearchGatingUtils",
    "WAWebNewsletterCollection",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMetadataGetters"
], function(t, n, r, o, a, i, l) {
    const e = new Set([
        o("WAWebChatSearchFilters").SearchFilters.UNREAD,
        o("WAWebChatSearchFilters").SearchFilters.CHANNELS
    ]);
    function s(e) {
        const e_newsletterMetadata = e.newsletterMetadata;
        return e_newsletterMetadata != null && o("WAWebNewsletterMetadataGetters").getIsSubscribedOrOwned(e_newsletterMetadata) && !e.isLocked;
    }
    function u(e) {
        return s(e) && !e.archive;
    }
    function c(e) {
        return s(e) && e.archive;
    }
    function d(t) {
        if (t == null) {
            return true;
        }
        if (t.label != null && t.label !== "") {
            return false;
        }
        return t.kind == null || e.has(t.kind);
    }
    function m({ activeChat, includeArchived = false, matchesFilter, newsletters, searchText, stickyIds }) {
        const d = (n)=>newsletters.flatMap((e)=>{
                const o = includeArchived ? s(e) : u(e);
                if (!o) {
                    return [];
                }
                if (activeChat === e || stickyIds != null && stickyIds.has(e.id.toString())) {
                    return [
                        {
                            chat: e
                        }
                    ];
                }
                if (!matchesFilter(e)) {
                    return [];
                }
                if (n == null) {
                    return [
                        {
                            chat: e
                        }
                    ];
                }
                const i = n(e);
                if (i != null) {
                    return [
                        {
                            chat: e,
                            searchMatch: i
                        }
                    ];
                }
                return [];
            });
        if (!searchText) {
            return d(null);
        }
        const m = d(function(e) {
            return e.newsletterMetadata?.searchMatchExact(searchText);
        });
        if (m.length > 0 || !o("WAWebContactSearchGatingUtils").canTermsMeetFuzzySearchThreshold(searchText.split(/\s+/).filter(Boolean))) {
            return m;
        }
        return d(function(e) {
            return e.newsletterMetadata?.searchMatchFuzzy(searchText);
        });
    }
    function p(e, t) {
        if (t.length === 0) {
            return e;
        }
        return [].concat(e, t).sort((e, t)=>r("WAWebChatComparator")(e.chat, t.chat));
    }
    function _() {
        if (o("WAWebNewsletterGatingUtils").isChannelsInChatListEnabled()) {
            return r("WAWebNewsletterCollection").countWhere(function(e) {
                return s(e) && e.showUnreadInTitle;
            });
        }
        return 0;
    }
    function f() {
        let channelsPillCount = 0;
        let unreadPillCount = 0;
        if (o("WAWebNewsletterGatingUtils").isChannelsInChatListEnabled()) {
            r("WAWebNewsletterCollection").forEach((n)=>{
                if (u(n)) {
                    if (o("WAWebChatMessageSearch").matchFilter(n, {
                        kind: o("WAWebChatSearchFilters").SearchFilters.UNREAD
                    })) {
                        unreadPillCount++;
                    }
                    if (o("WAWebChatGetters").getHasUnread(n)) {
                        channelsPillCount++;
                    }
                }
            });
            return {
                channelsPillCount,
                unreadPillCount
            };
        }
        return {
            channelsPillCount,
            unreadPillCount
        };
    }
    function g(e) {
        return e.map((e)=>{
            const n = r("WAWebNewsletterCollection").get(e.id)?.t;
            if (n == null || e.t != null && e.t >= n) {
                return e;
            }
            return babelHelpers.extends({}, e, {
                t: o("WATimeUtils").castToUnixTime(n)
            });
        });
    }
    l.isUnlockedSubscribedOrOwnedChannel = s;
    l.isChatListChannel = u;
    l.isArchivedChatListChannel = c;
    l.shouldIncludeChannelsForFilter = d;
    l.getChatListChannelResults = m;
    l.mergeChatListResults = p;
    l.getChannelsTitleUnreadCount = _;
    l.getChannelsFilterPillUnreadCounts = f;
    l.getNewsletterChatsWithLatestTimestamps = g;
}, 98);