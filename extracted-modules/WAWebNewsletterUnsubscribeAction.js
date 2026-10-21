__d("WAWebNewsletterUnsubscribeAction", [
    "WAJids",
    "WALogger",
    "WAWebChatGetters",
    "WAWebCommonNewsletterEnums",
    "WAWebDeleteStatusAction",
    "WAWebNewsletterAttributionLogging",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterDeleteChatJob",
    "WAWebNewsletterDeleteMessageAddOns",
    "WAWebNewsletterFollowQPLLogger",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMembershipActionLogger",
    "WAWebNewsletterMetadataJob",
    "WAWebNewsletterQplGatingUtils",
    "WAWebNewsletterStorageUtils",
    "WAWebNewsletterUnsubscribeJob",
    "WAWebQplFlowWrapper",
    "WAWebSimilarNewsletterLogging",
    "WAWebWamEnumBannerStatusReason",
    "WAWebWamEnumChannelEventType",
    "WAWebWamEnumChannelMembershipActionResult",
    "asyncToGeneratorRuntime",
    "qpl"
], function(t, n, r, o, a, i, l) {
    const e = [
        "deleteLocalModels"
    ];
    let s;
    let u;
    const c = r("qpl")._(1026957851, "1164");
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            let a = null;
            if (o("WAWebNewsletterGatingUtils").isNewsletterQPLLoggingEnabled() && !o("WAWebNewsletterQplGatingUtils").isNewsletterQplLoggingEnabledForMarkerId(1026957851)) {
                a = o("WAWebQplFlowWrapper").QPL.markerStart(c);
            }
            a?.annotate({
                int: {
                    surface: n.eventSurface,
                    unit: n.eventUnit
                }
            });
            const i = new (o("WAWebNewsletterFollowQPLLogger")).WAWebNewsletterFollowQPLLogger({
                markerId: 1026957851,
                eventSurface: n.eventSurface,
                discoverySurface: n.discoverySurface,
                eventUnit: n.eventUnit
            });
            if (!o("WAWebChatGetters").getIsNewsletter(t)) {
                a?.end(105);
                i.end(105);
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[unsubscribeFromNewsletterAction] not a newsletter"
                ]))).tags("newsletter").sendLogs("unsubscribe-from-not-a-newsletter");
                return;
            }
            const d = o("WAJids").toNewsletterJid(t.id.toJid());
            const n_deleteLocalModels = n.deleteLocalModels;
            const p = babelHelpers.objectWithoutPropertiesLoose(n, e);
            o("WAWebNewsletterAttributionLogging").NewsletterCoreEventLogger.log(babelHelpers.extends({
                cid: t.id,
                channelCoreEventType: o("WAWebWamEnumChannelEventType").CHANNEL_EVENT_TYPE.UNFOLLOW
            }, p));
            const _ = o("WAWebNewsletterAttributionLogging").NewsletterCoreEventLogger.getSimilarChannelsSessionId();
            if (o("WAWebNewsletterAttributionLogging").NewsletterCoreEventLogger.getIsSimilarUnitMountedForChat(t.id) && _ != null) {
                o("WAWebSimilarNewsletterLogging").logSimilarNewsletterDismiss({
                    chat: t,
                    reason: o("WAWebWamEnumBannerStatusReason").BANNER_STATUS_REASON.UNFOLLOW_TAP,
                    sessionId: _
                });
            }
            try {
                t.newsletterMetadata?.resetRecentlyFollowedFrom();
                i.markFetchStart();
                yield o("WAWebNewsletterUnsubscribeJob").unsubscribeFromNewsletter(d);
                i.markFetchEnd();
                if (n_deleteLocalModels == null || n_deleteLocalModels) {
                    yield o("WAWebNewsletterMetadataJob").deleteNewsletterMetadata(d);
                    yield o("WAWebNewsletterDeleteMessageAddOns").deleteNewsletterMessageAddOns(t.id);
                    yield o("WAWebNewsletterDeleteChatJob").deleteNewsletterChat(t.id);
                    o("WAWebNewsletterBridgeApi").NewsletterBridgeApi.deleteNewsletter({
                        id: t.id,
                        keep: false,
                        newsletterDeleted: false
                    });
                } else {
                    const b = t.newsletterMetadata?.size ?? 0;
                    const v = Math.max(0, b - 1);
                    yield o("WAWebNewsletterMetadataJob").updateNewsletterMetadata(o("WAWebNewsletterStorageUtils").createNewsletterMetadataObjectForStorage({
                        id: t.id,
                        membershipType: o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Guest,
                        size: v
                    }));
                    t.newsletterMetadata?.set({
                        membershipType: o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Guest,
                        size: v
                    });
                }
                o("WAWebDeleteStatusAction").clearStatusForRemovedContact();
                a?.end(2);
                i.end(2);
                o("WAWebNewsletterMembershipActionLogger").logNewsletterMembershipActionEvent({
                    cid: t.id,
                    actionResult: o("WAWebWamEnumChannelMembershipActionResult").CHANNEL_MEMBERSHIP_ACTION_RESULT.UNFOLLOW_SUCCESS
                });
            } catch (error) {
                a?.end(3);
                i.end(3);
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[unsubscribeFromNewsletterAction] unsubscribe failed"
                ]))).tags("newsletter").sendLogs("newsletter-failed-to-unsubscribe");
                throw error;
            }
        });
        return m.apply(this, arguments);
    }
    l.unsubscribeFromNewsletterAction = d;
}, 98);