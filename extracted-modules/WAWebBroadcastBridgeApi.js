__d("WAWebBroadcastBridgeApi", [
    "JSResourceForInteraction",
    "Promise",
    "WAJids",
    "WALogger",
    "WAWebBizBroadcastCampaignAPI",
    "WAWebBizBroadcastCampaignCollection",
    "WAWebBizBroadcastCampaignInsightsCollection",
    "WAWebBizBroadcastInsightsContactListHandler",
    "WAWebBizBroadcastProEligibilityEvent",
    "WAWebBizBroadcastSystemMessageManager",
    "WAWebBroadcastConsts",
    "WAWebBroadcastMetadataCollection",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebContactCollection",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    const e = [
        "campaignId"
    ];
    const s = [
        "campaignId"
    ];
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    const h = r("JSResourceForInteraction")("WAWebBizBroadcastProLocalCampaignCardAction").__setRef("WAWebBroadcastBridgeApi");
    const y = {
        createBizBroadcastProLocalCampaignCards: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ campaigns }) {
                yield (g || (g = n("Promise"))).all(campaigns.map(C));
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        invalidateBizBroadcastProCampaign: function({ campaignId }) {
            try {
                o("WAWebCmd").Cmd.trigger("biz_broadcast_pro_campaign_invalidated", campaignId);
            } catch (error) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to invalidate BB Pro campaign"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("bb-pro-campaign-invalidation-listener-error");
            }
        },
        loadedBizBroadcastCampaignInsights: function({ rows }) {
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[BroadcastBridgeApi] loadedBizBroadcastCampaignInsights ",
                ""
            ])), rows.length);
            const n = rows.map((e)=>({
                    deliveredCount: e.deliveredCount,
                    id: e.campaignId,
                    lastUpdatedTimestampMs: e.lastUpdatedTimestampMs,
                    quickReplyCount: e.quickReplyCount,
                    readCount: e.readCount,
                    recipientCount: e.recipientCount,
                    repliedCount: e.repliedCount
                }));
            r("WAWebBizBroadcastCampaignInsightsCollection").add(n, {
                merge: true
            });
            r("WAWebBizBroadcastCampaignInsightsCollection").markBootstrapped();
        },
        loadedBizBroadcastCampaigns: function({ rows }) {
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "[BroadcastBridgeApi] loadedBizBroadcastCampaigns ",
                ""
            ])), rows.length);
            const a = rows.map((t)=>{
                const t_campaignId = t.campaignId;
                const r = babelHelpers.objectWithoutPropertiesLoose(t, e);
                return babelHelpers.extends({
                    id: t_campaignId
                }, r);
            });
            r("WAWebBizBroadcastCampaignCollection").add(a, {
                merge: true
            });
            r("WAWebBizBroadcastCampaignCollection").markBootstrapped();
        },
        refreshBizBroadcastProEligibility: function() {
            o("WAWebBizBroadcastProEligibilityEvent").bizBroadcastProEligibilityEmitter.trigger("change");
        },
        refreshBroadcastCampaignState: function({ broadcastJids }) {
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "[BroadcastBridgeApi] refresh campaign ",
                ""
            ])), broadcastJids.length);
            for (const n of broadcastJids){
                const r = o("WAJids").validateBroadcastJid(n);
                if (r != null) {
                    o("WAWebBizBroadcastSystemMessageManager").updateBizBroadcastSystemMessage(r);
                }
            }
            o("WAWebCmd").Cmd.trigger(o("WAWebBroadcastConsts").BIZ_BROADCAST_CAMPAIGN_UPDATED_EVENT);
        },
        removeBroadcastList: function({ id }) {
            o("WAWebChatCollection").ChatCollection.remove(id);
            r("WAWebBroadcastMetadataCollection").remove(id);
        },
        syncBroadcastCampaignsToCollection: function({ removedCampaignIds, upsertedCampaignIds }) {
            for (const i of removedCampaignIds){
                r("WAWebBizBroadcastCampaignCollection").remove(i);
            }
            if (upsertedCampaignIds.length > 0) {
                const l = o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().getDeviceId();
                (g || (g = n("Promise"))).all(upsertedCampaignIds.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        try {
                            const t = yield o("WAWebBizBroadcastCampaignAPI").getBizBroadcastCampaignByKey(e);
                            if (t == null) {
                                return;
                            }
                            const n = o("WAWebBizBroadcastCampaignAPI").filterCampaignsByDevice([
                                t
                            ], l);
                            const a = n[0];
                            if (a == null) {
                                r("WAWebBizBroadcastCampaignCollection").remove(e);
                                return;
                            }
                            const i = a.campaignId;
                            const u = babelHelpers.objectWithoutPropertiesLoose(a, s);
                            r("WAWebBizBroadcastCampaignCollection").add(babelHelpers.extends({
                                id: i
                            }, u), {
                                merge: true
                            });
                        } catch (error) {
                            o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                                "[BroadcastBridgeApi] sync campaign ",
                                " failed"
                            ])), e).catching(r("getErrorSafe")(error)).sendLogs("bb-sync-campaign-collection-failure");
                        }
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })()));
            }
        },
        syncBroadcastInsightsToCollection: function({ removedCampaignIds, upserts }) {
            for (const o of removedCampaignIds){
                r("WAWebBizBroadcastCampaignInsightsCollection").remove(o);
            }
            for (const a of upserts){
                r("WAWebBizBroadcastCampaignInsightsCollection").add({
                    deliveredCount: a.deliveredCount ?? 0,
                    id: a.campaignId,
                    lastUpdatedTimestampMs: a.lastUpdatedTimestampMs,
                    quickReplyCount: a.quickReplyCount ?? 0,
                    readCount: a.readCount ?? 0,
                    recipientCount: a.recipientCount ?? 0,
                    repliedCount: a.repliedCount ?? 0
                }, {
                    merge: true
                });
            }
        },
        triggerBizBroadcastInsightsContactListFromBridge: function(t) {
            o("WAWebCmd").Cmd.trigger(o("WAWebBizBroadcastInsightsContactListHandler").BIZ_BROADCAST_INSIGHTS_CONTACT_LIST_RECEIVED, t);
        },
        updateBroadcastList: function({ broadcastMetadata, chat, contact }) {
            o("WAWebChatCollection").ChatCollection.gadd(babelHelpers.extends({}, chat));
            o("WAWebContactCollection").ContactCollection.gadd({
                id: contact.id,
                name: contact.name
            });
            r("WAWebBroadcastMetadataCollection").gadd({
                id: broadcastMetadata.id
            }).set(babelHelpers.extends({
                audienceExpression: broadcastMetadata.audienceExpression
            }, broadcastMetadata.customAudienceFbid != null ? {
                customAudienceFbid: broadcastMetadata.customAudienceFbid
            } : {}, {
                recipients: broadcastMetadata.recipients
            }), {
                merge: true
            });
        }
    };
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ broadcastJid, campaignId, campaignTimestamp, messageId }) {
            const broadcastJid_1 = o("WAJids").validateBroadcastJid(broadcastJid);
            if (broadcastJid_1 == null) {
                o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[bb-pro-local-card] invalid broadcast JID"
                ])));
                return;
            }
            try {
                const s = yield h.load();
                yield s({
                    broadcastJid: broadcastJid_1,
                    campaignId,
                    campaignTimestamp,
                    messageId
                });
            } catch (error) {
                o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "BB Pro local campaign card creation failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("bb-pro-local-campaign-card-creation-failed");
            }
        });
        return b.apply(this, arguments);
    }
    l.BroadcastBridgeApi = y;
}, 98);