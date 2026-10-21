__d("WAWebNewsletterAttributionLogging", [
    "WALogger",
    "WAWebChannelCoreEventWamEvent",
    "WAWebCommonNewsletterEnums",
    "WAWebNewsletterCollection",
    "WAWebNewsletterDirectoryFilterUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebSimilarNewsletterSessionId",
    "WAWebWamEnumChannelEntryPoint",
    "WAWebWamEnumChannelEntryPointApp",
    "WAWebWamEnumTsSurface"
], function(t, n, r, o, a, i, l) {
    const e = [
        "channelCoreEventType",
        "channelRequestMetadata",
        "cid",
        "entryPoint",
        "eventSurface",
        "eventUnit",
        "similarChannelSessionId",
        "unifiedSessionId"
    ];
    let s;
    function u(e) {
        switch(e){
            case o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT.LINK:
                return o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_THREAD;
            case o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT.RECOMMENDED_LIST:
            case o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT.UPDATES_TAB:
                return o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_UPDATES_HOME;
            case o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT.DIRECTORY_CATEGORIES:
                return o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_DIRECTORY_CATEGORIES;
            case o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT.FORWARDED_MESSAGE:
                return o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_THREAD;
            case o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT.DIRECTORY_CATEGORIES_SEARCH:
            case o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT.DIRECTORY_SEARCH:
                return o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_DIRECTORY_CATEGORIES_SEARCH;
            case o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT.STATUS:
                return o("WAWebWamEnumTsSurface").TS_SURFACE.STATUS_VIEWER_SHEET;
            case o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT.ADMIN_INVITE_MESSAGE:
                return o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_THREAD;
            case o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT.SIMILAR_CHANNEL:
                return o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_PROFILE;
            case o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT.NEWSLETTER_CREATION_UPDATES_TAB:
                return o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_UPDATES_HOME;
            default:
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Encountered unexpected entry point: ",
                    ""
                ])), e).tags("newsletter-logging").sendLogs("Unexpected entry point in newsletter open logging");
                return o("WAWebWamEnumTsSurface").TS_SURFACE.UNKNOWN;
        }
    }
    function c() {
        if (r("WAWebNewsletterCollection").some((e)=>e.newsletterMetadata?.membershipType === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Subscriber)) {
            return 1;
        }
        return 0;
    }
    class d {
        constructor(){
            this.$6 = {};
        }
        setChannelEntryPoint(t) {
            this.$1 = t;
        }
        setChannelEntryPointMetadata(t) {
            this.$4 = t;
        }
        setSimilarChannelsSessionId(t) {
            this.$5 = t;
        }
        setNewsletterDirectoryLoggingData(t) {
            this.$6 = t;
        }
        getSimilarChannelsSessionId() {
            return this.$5;
        }
        getIsSimilarUnitMountedForChat(t) {
            return t.equals(this.$7);
        }
        setIsSimilarUnitMountedForChat(t) {
            this.$7 = t;
        }
        getSimilarChannelsSessionIdForLogging() {
            const e = this.$5;
            if (e != null) {
                return o("WAWebSimilarNewsletterSessionId").newsletterSessionIdToInt(e);
            }
        }
        setDirectorySessionId(t) {
            this.$2 = t;
        }
        getDirectorySessionIdForLogging() {
            return this.$2;
        }
        getNewsletterDirectoryLoggingData() {
            return this.$6;
        }
        setDirectoryFilter(t) {
            if (t == null) {
                this.$3 = null;
                return;
            }
            switch(t){
                case o("WAWebNewsletterDirectoryFilterUtils").NewsletterDirectoryFilterType.Recommended:
                    return this.$3 = "all";
                case o("WAWebNewsletterDirectoryFilterUtils").NewsletterDirectoryFilterType.New:
                    return this.$3 = "new";
                case o("WAWebNewsletterDirectoryFilterUtils").NewsletterDirectoryFilterType.Popular:
                    return this.$3 = "popular";
                case o("WAWebNewsletterDirectoryFilterUtils").NewsletterDirectoryFilterType.Featured:
                    return this.$3 = "featured";
                case o("WAWebNewsletterDirectoryFilterUtils").NewsletterDirectoryFilterType.Trending:
                    return this.$3 = "most_active";
                default:
                    return this.$3 = null;
            }
        }
        log(n) {
            const { channelCoreEventType, channelRequestMetadata, cid, entryPoint, eventSurface, eventUnit, similarChannelSessionId, unifiedSessionId } = n;
            const g = babelHelpers.objectWithoutPropertiesLoose(n, e);
            const entryPointMetadata = JSON.stringify(babelHelpers.extends({
                has_followed_channels: c(),
                pill_type: this.$3 ?? undefined
            }, o("WAWebNewsletterGatingUtils").isDirectoryCategoriesLoggingEnabled() ? g : {}));
            new (o("WAWebChannelCoreEventWamEvent")).ChannelCoreEventWamEvent({
                cid: cid.user,
                eventSurface,
                channelCoreEventType,
                channelEntryPointApp: o("WAWebWamEnumChannelEntryPointApp").CHANNEL_ENTRY_POINT_APP.WHATSAPP,
                channelEntryPoint: entryPoint ?? this.$1 ?? undefined,
                channelDirectorySessionId: this.$2 ?? undefined,
                entryPointMetadata,
                similarChannelsSessionId: similarChannelSessionId != null ? o("WAWebSimilarNewsletterSessionId").newsletterSessionIdToInt(similarChannelSessionId) : undefined,
                channelEntryPointMetadata: this.$4,
                channelEventUnit: eventUnit ?? undefined,
                unifiedSessionId,
                discoverySurface: entryPoint != null ? u(entryPoint) : undefined,
                channelRequestMetadata
            }).commit();
        }
    }
    const m = new d;
    l.getDiscoverySurfaceFromChannelEntryPoint = u;
    l.NewsletterCoreEventLogger = m;
}, 98);