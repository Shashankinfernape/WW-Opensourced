__d("useWAWebNewsletterOpenMetrics", [
    "WAWebChannelOpenWamEvent",
    "WAWebChatEntryPoint",
    "WAWebChatGetters",
    "WAWebNewsletterAttributionLogging",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterLoggingUtils",
    "WAWebNewsletterWamoSubUtils",
    "WAWebWamEnumChannelEntryPoint",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const useEffect = (e || (e = o("react"))).useEffect;
    function u({ chat, chatEntryPoint }) {
        useEffect(function() {
            if (o("WAWebChatGetters").getIsNewsletter(chat)) {
                const l = chat.newsletterMetadata;
                if (l != null) {
                    const channelSessionId = Math.round(Math.random() * 1000000000);
                    const channelEntryPoint = o("WAWebNewsletterLoggingUtils").getChannelEntryPoint(chatEntryPoint);
                    const discoverySurface = o("WAWebNewsletterAttributionLogging").getDiscoverySurfaceFromChannelEntryPoint(channelEntryPoint);
                    const channelEntryPointMetadata = o("WAWebNewsletterLoggingUtils").getChannelEntryPointMetadata(chatEntryPoint);
                    o("WAWebNewsletterAttributionLogging").NewsletterCoreEventLogger.setChannelEntryPoint(channelEntryPoint);
                    o("WAWebNewsletterAttributionLogging").NewsletterCoreEventLogger.setChannelEntryPointMetadata(channelEntryPointMetadata);
                    const channelUserType = o("WAWebNewsletterLoggingUtils").getChannelUserType(l.membershipType);
                    const p = chatEntryPoint === o("WAWebChatEntryPoint").ChatEntryPoint.SimilarNewsletters ? o("WAWebNewsletterAttributionLogging").NewsletterCoreEventLogger.getSimilarChannelsSessionIdForLogging() : undefined;
                    if (p != null) {
                        o("WAWebNewsletterAttributionLogging").NewsletterCoreEventLogger.setSimilarChannelsSessionId(null);
                    }
                    const _ = [
                        o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT.DIRECTORY,
                        o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT.DIRECTORY_SEARCH,
                        o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT.DIRECTORY_CATEGORIES,
                        o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT.DIRECTORY_CATEGORIES_SEARCH,
                        o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT.UPDATES_TAB_SEARCH
                    ].includes(channelEntryPoint);
                    const isPremium = o("WAWebNewsletterGatingUtils").isWamoSubLoggingEnabled() ? o("WAWebNewsletterWamoSubUtils").newsletterSupportsSubscriptions(l) : undefined;
                    const g = o("WAWebNewsletterAttributionLogging").NewsletterCoreEventLogger.getNewsletterDirectoryLoggingData();
                    const entryPointMetadata = JSON.stringify({
                        directory_category_name: g.directoryCategoryName ?? undefined,
                        directory_category_index: g.directoryCategoryIndex ?? undefined,
                        directory_channel_index: g.directoryChannelIndex ?? undefined
                    });
                    const y = new (o("WAWebChannelOpenWamEvent")).ChannelOpenWamEvent(babelHelpers.extends({
                        channelSessionId,
                        channelEntryPoint,
                        channelUserType,
                        cid: chat.id.user,
                        unreadMessages: chat.unreadCount,
                        channelEntryPointMetadata,
                        similarChannelsSessionId: p ?? undefined,
                        discoverySurface,
                        isPremium
                    }, _ && {
                        channelDirectorySessionId: o("WAWebNewsletterAttributionLogging").NewsletterCoreEventLogger.getDirectorySessionIdForLogging() ?? undefined,
                        entryPointMetadata
                    }));
                    y.commit();
                }
            }
        }, []);
    }
    l.useNewsletterOpenMetrics = u;
}, 98);