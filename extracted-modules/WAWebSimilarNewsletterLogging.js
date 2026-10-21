__d("WAWebSimilarNewsletterLogging", [
    "WAWebChannelSimilarChannelsWamEvent",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterLoggingUtils",
    "WAWebSimilarNewsletterSessionId",
    "WAWebWamEnumBannerStatus",
    "WAWebWamEnumBannerStatusReason",
    "WAWebWamEnumChannelEventSurface"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e({ bannerStatus, eventSurface, originNewsletter, sessionId, similarNewsletters, similarNewslettersToDisplay }) {
        const s = new Map(similarNewslettersToDisplay.map((e, t)=>[
                e.id.toString(),
                t
            ]));
        const bannerStatusReason = u(similarNewslettersToDisplay.length);
        similarNewsletters.forEach((e, similarChannelRank)=>{
            const d = new (o("WAWebChannelSimilarChannelsWamEvent")).ChannelSimilarChannelsWamEvent({
                cid: originNewsletter.id.user,
                bannerStatus,
                bannerStatusReason,
                similarChannelRank,
                similarChannelId: e.id.user,
                similarChannelDisplayRank: s.get(e.id.toString()) ?? undefined,
                similarChannelEventSurface: eventSurface,
                similarChannelsSessionId: o("WAWebSimilarNewsletterSessionId").newsletterSessionIdToInt(sessionId),
                similarChannelUserType: o("WAWebNewsletterLoggingUtils").getChannelUserTypeFromMembershipType(e.newsletterMetadata) ?? undefined
            });
            d.commit();
        });
    }
    function s({ chat, reason, sessionId }) {
        const i = new (o("WAWebChannelSimilarChannelsWamEvent")).ChannelSimilarChannelsWamEvent({
            cid: chat.id.user,
            bannerStatus: o("WAWebWamEnumBannerStatus").BANNER_STATUS.CLOSED,
            bannerStatusReason: reason,
            similarChannelEventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_THREAD,
            similarChannelsSessionId: o("WAWebSimilarNewsletterSessionId").newsletterSessionIdToInt(sessionId),
            similarChannelUserType: o("WAWebNewsletterLoggingUtils").getChannelUserTypeFromMembershipType(chat.newsletterMetadata) ?? undefined
        });
        i.commit();
    }
    function u(e) {
        if (e === 0) {
            return o("WAWebWamEnumBannerStatusReason").BANNER_STATUS_REASON.NO_SIMILAR_CHANNELS_FOUND;
        }
        if (e < o("WAWebNewsletterGatingUtils").getSimilarNewslettersMinDisplayLimit()) {
            return o("WAWebWamEnumBannerStatusReason").BANNER_STATUS_REASON.NOT_ENOUGH_SIMILAR_CHANNELS;
        }
        return o("WAWebWamEnumBannerStatusReason").BANNER_STATUS_REASON.SIMILAR_CHANNELS_FOUND;
    }
    l.logSimilarNewsletterImpression = e;
    l.logSimilarNewsletterDismiss = s;
}, 98);