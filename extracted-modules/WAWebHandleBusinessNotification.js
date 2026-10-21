__d("WAWebHandleBusinessNotification", [
    "WADeprecatedWapParser",
    "WALogger",
    "WASmaxBizCtwaAdAccountNonceNotificationRPC",
    "WASmaxParseUtils",
    "WASmaxSmbMeteredMessagesCampaignBbProCampaignStatusNotificationRPC",
    "WASmaxSmbMeteredMessagesCampaignCampaignStateChangedNotificationRPC",
    "WAWap",
    "WAWebBackendJobsCommon",
    "WAWebBizBroadcastMarketingCampaignNotificationEmitter",
    "WAWebBizSuggestionsGatingUtils",
    "WAWebCTWABizAccessTokenNonceManager",
    "WAWebCTWAGatingUtils",
    "WAWebCTWAParsePrivacy",
    "WAWebCTWAParseSuggestion",
    "WAWebCommonParsersVerifiedName",
    "WAWebHandleBizBroadcastProCampaignNotification",
    "WAWebHandleBusinessNameChange",
    "WAWebHandleBusinessProductCatalogNotification",
    "WAWebHandleBusinessProfile",
    "WAWebHandleBusinessRemoval",
    "WAWebHandleCTWASuggestion",
    "WAWebHandlePrivacySettingsNotification",
    "WAWebJidToWid",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebParseSubscriptionNotification",
    "WAWebProductTypes",
    "WAWebSubscriptionNotificationDelivery",
    "WAWebSubscriptions",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = new (r("WADeprecatedWapParser"))("businessNotificationParser", function(e) {
        e.assertTag("notification");
        const t = e.attrString("id");
        const n = e.attrWapJid("from");
        const a = e.attrTime("t");
        const i = {
            stanzaId: t,
            from: n,
            ts: a
        };
        let l;
        if (e.hasChild("remove")) {
            l = e.child("remove");
            if (l.hasAttr("jid")) {
                return babelHelpers.extends({
                    type: "remove_jid",
                    jid: o("WAWebJidToWid").chatJidToChatWid(l.attrChatJid("jid"))
                }, i);
            }
            return babelHelpers.extends({
                type: "remove_hash",
                hash: l.attrString("hash")
            }, i);
        }
        if (e.hasChild("verified_name")) {
            l = e.child("verified_name");
            if (l.hasAttr("jid")) {
                return babelHelpers.extends({
                    type: "verified_name_jid",
                    jid: o("WAWebJidToWid").chatJidToChatWid(l.attrChatJid("jid")),
                    verifiedName: r("WAWebCommonParsersVerifiedName")(l)
                }, i);
            }
            return babelHelpers.extends({
                type: "verified_name_hash",
                hash: l.attrString("hash")
            }, i);
        }
        if (e.hasChild("profile")) {
            const s = e.child("profile");
            const hash = s.maybeAttrString("hash");
            if (r("isStringNullOrEmpty")(hash)) {
                return babelHelpers.extends({
                    type: "profile"
                }, i);
            }
            return babelHelpers.extends({
                type: "profile_hash",
                hash
            }, i);
        } else {
            if (e.hasChild("product_catalog")) {
                return u(e.child("product_catalog"), i);
            }
            if (e.hasChild("subscriptions")) {
                const d = o("WAWebParseSubscriptionNotification").parseSubscriptionsAndFeatureFlags(e);
                const { featureFlags, subscriptions } = d;
                return babelHelpers.extends({
                    type: "subscriptions",
                    subscriptions,
                    featureFlags,
                    uiNotification: o("WAWebParseSubscriptionNotification").parseSubscriptionNotification(e)
                }, i);
            } else if (e.hasChild("ctwa_suggestion")) {
                if (o("WAWebBizSuggestionsGatingUtils").adsActionBannersEnabled()) {
                    const _ = o("WAWebCTWAParseSuggestion").parseCTWASuggestion(e);
                    if (_ != null) {
                        return babelHelpers.extends({
                            type: "ctwa_suggestion",
                            suggestion: _
                        }, i);
                    }
                }
            } else if (e.hasChild("privacy")) {
                if (o("WAWebCTWAGatingUtils").smbDataSharingConsentEnabled()) {
                    const privacy = o("WAWebCTWAParsePrivacy").parseCTWAPrivacy(e);
                    if (privacy != null) {
                        return babelHelpers.extends({
                            type: "privacy",
                            privacy
                        }, i);
                    }
                }
            } else if (e.hasChild("wa_ad_account_nonce")) {
                const g = o("WASmaxBizCtwaAdAccountNonceNotificationRPC").receiveNonceNotificationRPC(e.node());
                return babelHelpers.extends({
                    type: "wa_ad_account_nonce",
                    nonce: o("WAWebCTWABizAccessTokenNonceManager").castToNonce(g.parsedRequest.waAdAccountNonceElementValue)
                }, i);
            } else if (e.hasChild("mm_campaign")) {
                const h = o("WASmaxSmbMeteredMessagesCampaignCampaignStateChangedNotificationRPC").receiveCampaignStateChangedNotificationRPC(e.node());
                const y = h.parsedRequest;
                if (y.mmCampaignAdCreativeId != null && y.mmCampaignAdGroupId != null && y.mmCampaignAdId != null) {
                    return babelHelpers.extends({
                        type: "mm_campaign",
                        adCreativeId: y.mmCampaignAdCreativeId,
                        adGroupId: y.mmCampaignAdGroupId,
                        adId: y.mmCampaignAdId,
                        status: y.mmCampaignStatus
                    }, i);
                }
            } else if (o("WASmaxParseUtils").flattenedChildWithTag(e.node(), "bb_pro_campaign").success) {
                const C = o("WASmaxSmbMeteredMessagesCampaignBbProCampaignStatusNotificationRPC").receiveBbProCampaignStatusNotificationRPC(e.node());
                return babelHelpers.extends({
                    type: "bb_pro_campaign",
                    campaignId: C.parsedRequest.bbProCampaignCampaignId
                }, i);
            }
        }
        return babelHelpers.extends({
            type: "unknown"
        }, i);
    });
    function u(e, t) {
        if (e.hasChild("product")) {
            const productsIds = [];
            e.forEachChildWithTag("product", function(e) {
                const t = e.child("id").contentString();
                productsIds.push(t);
            });
            return babelHelpers.extends({
                type: "product",
                productsIds
            }, t);
        } else if (e.hasChild("collection")) {
            const collectionIds = [];
            const reviewStatuses = [];
            e.forEachChildWithTag("collection", function(e) {
                if (e.hasChild("status_info")) {
                    const l = {
                        reviewStatus: o("WAWebProductTypes").asProductReviewType(e.child("status_info").child("status").contentString()) ?? "APPROVED",
                        rejectReason: e.child("status_info").maybeChild("reject_reason")?.contentString(),
                        commerceUrl: e.child("status_info").maybeChild("commerce_url")?.contentString()
                    };
                    collectionIds.push(e.attrString("id"));
                    reviewStatuses.push(l);
                }
            });
            return babelHelpers.extends({
                type: "collection",
                collectionIds,
                reviewStatuses
            }, t);
        }
        return babelHelpers.extends({
            type: "unknown"
        }, t);
    }
    function c(stanzaId, from, n) {
        if (n) {
            return o("WAWap").wap("ack", {
                id: o("WAWap").CUSTOM_STRING(stanzaId),
                to: from,
                class: "notification",
                type: "business"
            }, o("WAWap").wap("user", {
                side_list: "out"
            }));
        }
        return o("WAWap").wap("ack", {
            id: o("WAWap").CUSTOM_STRING(stanzaId),
            to: from,
            class: "notification",
            type: "business"
        });
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = s.parse(t);
            if (n.error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Parsing Error: ",
                    ""
                ])), n.error.toString());
                throw n.error;
            }
            const n_success = n.success;
            switch(n_success.type){
                case "verified_name_hash":
                    {
                        const a = yield o("WAWebHandleBusinessNameChange").handleVerifiedBusinessNameNotificationHash(n_success);
                        return c(n_success.stanzaId, n_success.from, !a);
                    }
                case "verified_name_jid":
                    yield o("WAWebHandleBusinessNameChange").handleVerifiedBusinessNameNotificationContact(n_success);
                    return c(n_success.stanzaId, n_success.from, false);
                case "remove_hash":
                    {
                        const i = yield o("WAWebHandleBusinessRemoval").handleBusinessRemovalNotificationHash(n_success);
                        return c(n_success.stanzaId, n_success.from, !i);
                    }
                case "remove_jid":
                    yield o("WAWebHandleBusinessRemoval").handleBusinessRemovalNotificationContact(n_success);
                    return c(n_success.stanzaId, n_success.from, false);
                case "profile":
                    yield o("WAWebHandleBusinessProfile").handleBusinessProfile(n_success);
                    return c(n_success.stanzaId, n_success.from, false);
                case "profile_hash":
                    {
                        const l = yield o("WAWebHandleBusinessProfile").handleBusinessProfileHash(n_success);
                        return c(n_success.stanzaId, n_success.from, !l);
                    }
                case "product":
                    yield o("WAWebHandleBusinessProductCatalogNotification").handleProductNotification(n_success.productsIds);
                    return c(n_success.stanzaId, n_success.from, false);
                case "collection":
                    yield o("WAWebHandleBusinessProductCatalogNotification").handleCollectionNotification(n_success);
                    return c(n_success.stanzaId, n_success.from, false);
                case "subscriptions":
                    {
                        yield o("WAWebSubscriptions").applySubscriptionsAndFeatureFlags(n_success.subscriptions, n_success.featureFlags, "update");
                        const u = n_success.uiNotification;
                        if (u != null) {
                            o("WAWebSubscriptionNotificationDelivery").deliverSubscriptionNotification(u);
                        }
                        return c(n_success.stanzaId, n_success.from, false);
                    }
                case "ctwa_suggestion":
                    yield o("WAWebHandleCTWASuggestion").handleCTWASuggestion(n_success.suggestion);
                    return c(n_success.stanzaId, n_success.from, false);
                case "privacy":
                    o("WAWebHandlePrivacySettingsNotification").handleSmbDataSharingSettingNotification(n_success.privacy.smbDataSharingSetting, n_success.privacy.smbDataSharingVersion);
                    return c(n_success.stanzaId, n_success.from, false);
                case "wa_ad_account_nonce":
                    o("WAWebCTWABizAccessTokenNonceManager").setNonceFromPushNotification(n_success.nonce);
                    return c(n_success.stanzaId, n_success.from, false);
                case "mm_campaign":
                    o("WAWebBizBroadcastMarketingCampaignNotificationEmitter").marketingCampaignNotificationEmitter.emit({
                        adCreativeId: n_success.adCreativeId,
                        adGroupId: n_success.adGroupId,
                        adId: n_success.adId,
                        status: n_success.status,
                        timestamp: n_success.ts,
                        backgroundSendHandling: false
                    });
                    return c(n_success.stanzaId, n_success.from, false);
                case "bb_pro_campaign":
                    o("WAWebHandleBizBroadcastProCampaignNotification").handleBizBroadcastProCampaignNotification(n_success.campaignId);
                    return c(n_success.stanzaId, n_success.from, false);
                default:
                    n_success.type;
                    return c(n_success.stanzaId, n_success.from, false);
            }
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        const t = o("WAWebBackendJobsCommon").getNonCriticalNotificationPriority(!!e.attrs.offline);
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("handleBusinessNotification", function(e) {
            return d(e.node);
        }, {
            priority: t
        }).waitUntilCompleted({
            node: e
        });
    }
    l.handleBusinessNotification = d;
    l.handleBusinessNotificationJob = p;
}, 98);