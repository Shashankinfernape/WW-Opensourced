__d("WAWebMerlinImpressionManager", [
    "MerlinImpressionManager",
    "Promise",
    "WAWebABProps",
    "WAWebBizVpvPairFields",
    "WAWebChannelDiscoveryVisibilityTrackingWamEvent",
    "WAWebChannelMessageVisibilityTrackingWamEvent",
    "WAWebChatThreadLogging",
    "WAWebMediaTypes",
    "WAWebNewsletterGatingUtils",
    "WAWebPaidMessageVpvImpressionWamEvent",
    "WAWebStatusPostImpressionWamEvent",
    "WAWebUnifiedSession",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = {};
    const c = new Set([
        (s = o("WAWebMediaTypes")).OUTWARD_TYPES.STICKER,
        s.OUTWARD_TYPES.IMAGE,
        s.OUTWARD_TYPES.PTV,
        s.OUTWARD_TYPES.VIDEO
    ]);
    function d({ enter_ts, exit_ts, itemId, visibilityData }) {
        const { aiProvenanceLabelEnabled, aiProvenanceLabelShown, channelUserType, cid, isOriginalAuthor, isStarredPost, mediaData, postId } = visibilityData;
        if (o("WAWebNewsletterGatingUtils").isNewsletterVPVMessageVisibilityLoggingEnabled() && !(mediaData != null && !g(mediaData))) {
            const f = function() {
                const t = new (o("WAWebChannelMessageVisibilityTrackingWamEvent")).ChannelMessageVisibilityTrackingWamEvent({
                    cid,
                    isOriginalAuthor,
                    isStarredPost,
                    postId,
                    unifiedSessionId: o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId() ?? undefined,
                    channelUserType,
                    aiProvenanceLabelShown,
                    aiProvenanceLabelEnabled
                });
                t.commit();
            };
            o("MerlinImpressionManager").logVisibilityTimestamps(enter_ts, exit_ts, itemId, u, f);
        }
    }
    function m(e) {
        const e_discoveryData = e.discoveryData;
        const { cid, country, discoverySurface, newsletterDirectorySectionIndex, newsletterDirectorySectionName, newsletterDirectorySessionId, newsletterEventUnit, newsletterIndex, pillSelected, similarNewslettersSessionId } = e_discoveryData;
        const { enter_ts, exit_ts, itemId } = e;
        if (o("WAWebNewsletterGatingUtils").isNewsletterVPVLoggingEnabled()) {
            const h = function() {
                const t = new (o("WAWebChannelDiscoveryVisibilityTrackingWamEvent")).ChannelDiscoveryVisibilityTrackingWamEvent({
                    cid,
                    channelDirectorySessionId: newsletterDirectorySessionId,
                    similarChannelsSessionId: similarNewslettersSessionId,
                    channelCategoryIndex: newsletterDirectorySectionIndex,
                    channelIndex: newsletterIndex,
                    channelEventUnit: newsletterEventUnit,
                    pillSelected,
                    countrySelector: country,
                    channelCategoryName: newsletterDirectorySectionName,
                    discoverySurface,
                    unifiedSessionId: o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId() ?? undefined
                });
                t.commit();
            };
            o("MerlinImpressionManager").logVisibilityTimestamps(enter_ts, exit_ts, itemId, u, h);
        }
    }
    function p({ enter_ts, exit_ts, itemId, statusViewTime, visibilityData }) {
        const { aiProvenanceLabelEnabled, aiProvenanceLabelShown, channelStatusId, channelUserType, cid, encryptedStatusIdPromise, entryMethod, isCloseSharingPost, isFirstView, isLastStatus, isPosterBiz, isResharable, isReshare, isSelfView, isSubImpression, isSuccessfulView, mediaType, musicBlocked, pairedMediaType, psaCampaignId, psaLinkAvailable, statusCategory, statusContainsMusic, statusContainsQuestion, statusContentType, statusGroupIdPromise, statusItemViewResult, statusLoadTime, statusPogIndex, statusPosterIdPromise, statusPostIndex, statusPostPlaybackDuration, statusViewEntrypoint, statusViewerSessionId, statusViewExitMethod, updatesTabSessionId, urlStatusType, userRidPromise, viewSequenceIndex } = visibilityData;
        const statusViewExitMethod_1 = statusViewExitMethod?.() ?? undefined;
        const X = function() {
            n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const statusId = yield encryptedStatusIdPromise;
                const n = yield userRidPromise;
                const r = yield statusPosterIdPromise;
                const a = yield statusGroupIdPromise;
                const i = new (o("WAWebStatusPostImpressionWamEvent")).StatusPostImpressionWamEvent({
                    statusId,
                    statusPosterHashId: n ?? undefined,
                    statusPosterId: r ?? undefined,
                    statusGroupId: a ?? undefined,
                    statusContentType,
                    statusMediaType: mediaType,
                    isSelfView,
                    isSubImpression,
                    statusViewEntrypoint,
                    statusViewTime,
                    unifiedSessionId: o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId() ?? undefined,
                    updatesTabSessionId,
                    statusViewerSessionId,
                    statusPogIndex,
                    statusPostIndex,
                    isFirstView,
                    isLastStatus,
                    isCloseSharingPost,
                    isPosterBiz,
                    isViewedInLandscape: false,
                    psaLinkAvailable,
                    statusCategory,
                    statusPostPlaybackDuration,
                    statusContainsMusic,
                    musicBlocked,
                    psaCampaignId: psaCampaignId ?? undefined,
                    statusLoadTime: statusLoadTime?.(),
                    urlStatusType: urlStatusType?.(),
                    statusContainsQuestion,
                    isSuccessfulView: isSuccessfulView(),
                    statusItemViewResult: statusItemViewResult(),
                    entryMethod,
                    statusViewExitMethod: statusViewExitMethod_1,
                    viewSequenceIndex: viewSequenceIndex(),
                    isResharable,
                    isReshare,
                    pairedMediaType: pairedMediaType ?? undefined,
                    cid: cid ?? undefined,
                    channelStatusId: channelStatusId ?? undefined,
                    channelUserType: channelUserType ?? undefined,
                    aiProvenanceLabelShown,
                    aiProvenanceLabelEnabled
                });
                i.commit();
            })();
        };
        o("MerlinImpressionManager").logVisibilityTimestamps(enter_ts, exit_ts, itemId, u, X);
    }
    const _ = {};
    function f({ enter_ts, exit_ts, itemId, visibilityData }) {
        const { bodyUrlCountInt, bodyUrlUniqueCountInt, buttonValueJsonArray, chatId, chatsFolderType, clientReceivedTsMillis, contactType, ctaUrlUniqueCountInt, hsmTagStr, isBroadcastMessage, isInsubContact, isMuted, messageBodyType, messageBubbleHeightPx, messageBubbleWidthPx, messageFieldJsonArray, messageId, mmCarouselCardIndex, qbmFlag, readReceiptsEnabled, serverTimestamp, submessageFieldJsonArray, urlUniqueCountInt } = visibilityData;
        if (o("WAWebABProps").getABPropConfigValue("biz_vpv_impression_logging_enabled") === true) {
            const P = function(r) {
                n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const a = Date.now();
                    const i = yield (e || (e = n("Promise"))).all([
                        o("WAWebChatThreadLogging").getMessageIDHMAC(messageId),
                        o("WAWebChatThreadLogging").getChatThreadIDHMAC(chatId)
                    ]);
                    const l = i[0];
                    const _ = i[1];
                    const deltaTime = Math.round((a - serverTimestamp * 1000) / 1000);
                    const deltaTimeReceived = clientReceivedTsMillis != null ? Math.round((a - clientReceivedTsMillis) / 1000) : undefined;
                    const M = r.map((e)=>[
                            e.enter,
                            e.exit
                        ]);
                    const vpvJsonObject = JSON.stringify({
                        0: M,
                        50: M,
                        100: M
                    });
                    const A = new (o("WAWebPaidMessageVpvImpressionWamEvent")).PaidMessageVpvImpressionWamEvent({
                        vpvJsonObject,
                        messageIdHmac: l ?? undefined,
                        threadIdHmac: _ ?? undefined,
                        unifiedSessionId: o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId() ?? undefined,
                        qbmFlag: qbmFlag ?? undefined,
                        contactType: contactType ?? undefined,
                        hsmTagStr: hsmTagStr ?? undefined,
                        readReceiptsEnabled,
                        chatsFolderType,
                        isMuted,
                        isBroadcastMessage,
                        isInsubContact,
                        deltaTime,
                        deltaTimeReceived,
                        messageFieldJsonArray,
                        submessageFieldJsonArray,
                        buttonValueJsonArray,
                        bodyUrlCountInt,
                        bodyUrlUniqueCountInt,
                        ctaUrlUniqueCountInt,
                        urlUniqueCountInt,
                        messageBodyType: messageBodyType ?? undefined,
                        mmCarouselCardIndex: mmCarouselCardIndex ?? undefined,
                        messageBubbleWidthPx: messageBubbleWidthPx ?? undefined,
                        messageBubbleHeightPx: messageBubbleHeightPx ?? undefined
                    });
                    o("WAWebBizVpvPairFields").applyBizVpvPairFields(A, chatId);
                    A.commit();
                })();
            };
            o("MerlinImpressionManager").logVisibilityTimestamps(enter_ts, exit_ts, itemId, _, P);
        }
    }
    function g({ isGif, mediaStage, type }) {
        return !((c.has(type) || isGif) && mediaStage !== o("WAWebMediaTypes").MediaDataStage.RESOLVED);
    }
    l.logNewsletterMessageVisibility = d;
    l.logNewsletterDiscoveryVisibility = m;
    l.logStatusVisibility = p;
    l.logBizMessageVisibility = f;
}, 98);