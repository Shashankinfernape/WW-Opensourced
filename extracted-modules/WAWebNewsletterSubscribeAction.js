__d("WAWebNewsletterSubscribeAction", [
    "JSResourceForInteraction",
    "WAJids",
    "WALogger",
    "WAWebChatGetters",
    "WAWebCommonNewsletterEnums",
    "WAWebCreateChat",
    "WAWebMsgDataFromModel",
    "WAWebNewsletterAttributionLogging",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterGetMyAddOnsJob",
    "WAWebNewsletterMembershipActionLogger",
    "WAWebNewsletterMetadataGetters",
    "WAWebNewsletterMetadataJob",
    "WAWebNewsletterQplGatingUtils",
    "WAWebNewsletterQueues",
    "WAWebNewsletterStorageUtils",
    "WAWebNewsletterSubscribeJob",
    "WAWebNewsletterToggleAdminActivityMuteStateAction",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "WAWebNewsletterUpdateNewslettersRecordsJob",
    "WAWebQplFlowWrapper",
    "WAWebStoreNewsletterMessageAddOns",
    "WAWebWamEnumChannelEventSurface",
    "WAWebWamEnumChannelEventType",
    "WAWebWamEnumChannelMembershipActionResult",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "qpl"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = [
        "entryPoint",
        "eventSurface",
        "eventUnit",
        "similarChannelSessionId"
    ];
    const c = r("qpl")._(1026960759, "186");
    const d = 5000;
    function m(newsletter, a, i) {
        const { entryPoint, eventSurface, eventUnit, similarChannelSessionId } = a;
        const h = babelHelpers.objectWithoutPropertiesLoose(a, u);
        let y = null;
        if (o("WAWebNewsletterGatingUtils").isNewsletterQPLLoggingEnabled() && !o("WAWebNewsletterQplGatingUtils").isNewsletterQplLoggingEnabledForMarkerId(1026960759)) {
            y = o("WAWebQplFlowWrapper").QPL.markerStart(c);
        }
        y?.annotate({
            int: {
                surface: eventSurface,
                unit: eventUnit
            }
        });
        return o("WAWebNewsletterQueues").newsletterSubscribeQueue.enqueue(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t_newsletterMetadata = newsletter.newsletterMetadata;
            if (!o("WAWebChatGetters").getIsNewsletter(newsletter) || t_newsletterMetadata == null) {
                y?.end(105);
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[subscribeToNewsletterAction] not a newsletter"
                ]))).tags("newsletter").sendLogs("subscribe-to-not-a-newsletter");
                return;
            }
            o("WAWebNewsletterAttributionLogging").NewsletterCoreEventLogger.log(babelHelpers.extends({
                cid: newsletter.id,
                eventSurface,
                eventUnit,
                channelCoreEventType: o("WAWebWamEnumChannelEventType").CHANNEL_EVENT_TYPE.FOLLOW,
                similarChannelSessionId,
                entryPoint
            }, eventSurface !== o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_UPDATES_HOME && h));
            const l = o("WAJids").toNewsletterJid(newsletter.id.toJid());
            const u = o("WAWebNewsletterMetadataGetters").getIsPreview(t_newsletterMetadata);
            try {
                yield p(o("WAWebWidFactory").asNewsletterWidOrThrow(newsletter.id), i);
                newsletter.t = newsletter.msgs.last()?.t ?? t_newsletterMetadata.creationTime;
                if (o("WAWebNewsletterGatingUtils").isSimilarNewsletterInThreadEnabled()) {
                    newsletter.newsletterMetadata?.set("recentlyFollowedFrom", eventSurface);
                }
                t_newsletterMetadata.membershipType = o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Subscriber;
                yield o("WAWebNewsletterMetadataJob").updateNewsletterMetadata(o("WAWebNewsletterStorageUtils").createNewsletterMetadataObjectForStorage(t_newsletterMetadata));
                yield o("WAWebNewsletterUpdateMsgsRecordsJob").addNewsletterMsgsRecords(newsletter.msgs.map(o("WAWebMsgDataFromModel").msgDataFromMsgModel));
                if (o("WAWebNewsletterExtendedGatingUtils").isNewsletterReactionEnabled()) {
                    yield o("WAWebNewsletterGetMyAddOnsJob").getMyNewsletterAddOnsJob({
                        count: d,
                        newsletterJid: l
                    });
                    yield o("WAWebStoreNewsletterMessageAddOns").storeNewsletterMessageAddOns(newsletter.msgs.toArray());
                }
                yield o("WAWebNewsletterUpdateNewslettersRecordsJob").updateNewsletterChatRecords([
                    o("WAWebCreateChat").createNewsletterObjectForStorage(newsletter)
                ]);
                yield o("WAWebNewsletterBridgeApi").NewsletterBridgeApi.subscribeToNewsletter({
                    newsletter
                });
                if (u && o("WAWebNewsletterGatingUtils").isChannelsInChatListEnabled()) {
                    o("WAWebNewsletterToggleAdminActivityMuteStateAction").unmuteNewsletterAdminActivitySilentlyAction(newsletter.id);
                }
                r("JSResourceForInteraction")("WAWebNewsletterStatusGapFillAction").__setRef("WAWebNewsletterSubscribeAction").load().then((e)=>e.fillNewsletterStatusGap(l, undefined, true));
                y?.end(2);
            } catch (error) {
                y?.end(3);
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[subscribeToNewsletterAction] subscribe failed"
                ]))).tags("newsletter").sendLogs("newsletter-failed-to-subscribe");
                throw error;
            }
        }));
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(cid, t) {
            const n = o("WAJids").toNewsletterJid(cid.toJid());
            t?.markFetchStart();
            yield o("WAWebNewsletterSubscribeJob").subscribeToNewsletter(n);
            t?.markFetchEnd();
            o("WAWebNewsletterMembershipActionLogger").logNewsletterMembershipActionEvent({
                cid,
                actionResult: o("WAWebWamEnumChannelMembershipActionResult").CHANNEL_MEMBERSHIP_ACTION_RESULT.FOLLOW_SUCCESS
            });
        });
        return _.apply(this, arguments);
    }
    l.subscribeToNewsletterAction = m;
    l.subscribeToNewsletterWidAction = p;
}, 98);