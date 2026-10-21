__d("WAWebAuthAgentConsumerJourneyLogger", [
    "WAWebConsumerBizInteractionJourneyWamEvent",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebWamEnumConsumerBizActionTargetEnum",
    "WAWebWamEnumConsumerBizActionTypeEnum",
    "WAWebWamEnumConsumerBizEntryPointEnum",
    "WAWebWamEnumConsumerBizFeatureEnum",
    "WAWebWamEnumConsumerBizSurfaceEnum"
], function(t, n, r, o, a, i, l) {
    let consumerBizSessionId = "";
    let s = 0;
    function u() {
        consumerBizSessionId = r("WAWebPonyfillsCryptoRandomUUID")();
        s = 0;
    }
    function c() {
        return ++s;
    }
    function d(consumerBizActionType, consumerBizSurface, r, consumerBizEntryPoint, businessJid, l) {
        if (consumerBizSessionId === "") {
            u();
        }
        new (o("WAWebConsumerBizInteractionJourneyWamEvent")).ConsumerBizInteractionJourneyWamEvent({
            consumerBizSessionId,
            consumerBizSeqId: c(),
            consumerBizFeature: o("WAWebWamEnumConsumerBizFeatureEnum").CONSUMER_BIZ_FEATURE_ENUM.AUTHORIZED_AGENT,
            consumerBizEntryPoint,
            consumerBizSurface,
            consumerBizActionType,
            consumerBizActionTarget: r ?? undefined,
            businessJid,
            consumerBizExtraAttributes: JSON.stringify(l)
        }).commit();
    }
    function m(e, t, offboarding_type) {
        return {
            is_authorized_agent: false,
            parent_company_name: e,
            parent_company_jid: t,
            offboarding_type
        };
    }
    function p(e, t, n) {
        d(o("WAWebWamEnumConsumerBizActionTypeEnum").CONSUMER_BIZ_ACTION_TYPE_ENUM.VIEW, o("WAWebWamEnumConsumerBizSurfaceEnum").CONSUMER_BIZ_SURFACE_ENUM.CHAT_HEADER, o("WAWebWamEnumConsumerBizActionTargetEnum").CONSUMER_BIZ_ACTION_TARGET_ENUM.HEADER_SUBTITLE, o("WAWebWamEnumConsumerBizEntryPointEnum").CONSUMER_BIZ_ENTRY_POINT_ENUM.CHAT_LIST, e, {
            is_authorized_agent: true,
            parent_company_name: t,
            parent_company_jid: n
        });
    }
    function _(e, t, n) {
        d(o("WAWebWamEnumConsumerBizActionTypeEnum").CONSUMER_BIZ_ACTION_TYPE_ENUM.VIEW, o("WAWebWamEnumConsumerBizSurfaceEnum").CONSUMER_BIZ_SURFACE_ENUM.FMX_CARD, o("WAWebWamEnumConsumerBizActionTargetEnum").CONSUMER_BIZ_ACTION_TARGET_ENUM.FMX_AFFILIATION_ROW, o("WAWebWamEnumConsumerBizEntryPointEnum").CONSUMER_BIZ_ENTRY_POINT_ENUM.CHAT_THREAD, e, {
            is_authorized_agent: true,
            parent_company_name: t,
            parent_company_jid: n
        });
    }
    function f(e, t, n) {
        d(o("WAWebWamEnumConsumerBizActionTypeEnum").CONSUMER_BIZ_ACTION_TYPE_ENUM.CLICK, o("WAWebWamEnumConsumerBizSurfaceEnum").CONSUMER_BIZ_SURFACE_ENUM.FMX_CARD, o("WAWebWamEnumConsumerBizActionTargetEnum").CONSUMER_BIZ_ACTION_TARGET_ENUM.FMX_AFFILIATION_ROW, o("WAWebWamEnumConsumerBizEntryPointEnum").CONSUMER_BIZ_ENTRY_POINT_ENUM.CHAT_THREAD, e, {
            is_authorized_agent: true,
            parent_company_name: t,
            parent_company_jid: n
        });
    }
    function g(e, t, n) {
        d(o("WAWebWamEnumConsumerBizActionTypeEnum").CONSUMER_BIZ_ACTION_TYPE_ENUM.VIEW, o("WAWebWamEnumConsumerBizSurfaceEnum").CONSUMER_BIZ_SURFACE_ENUM.BUSINESS_PROFILE, o("WAWebWamEnumConsumerBizActionTargetEnum").CONSUMER_BIZ_ACTION_TARGET_ENUM.AFFILIATION_SECTION, o("WAWebWamEnumConsumerBizEntryPointEnum").CONSUMER_BIZ_ENTRY_POINT_ENUM.CONTACT_INFO, e, {
            is_authorized_agent: true,
            parent_company_name: t,
            parent_company_jid: n
        });
    }
    function h(e, t, n) {
        d(o("WAWebWamEnumConsumerBizActionTypeEnum").CONSUMER_BIZ_ACTION_TYPE_ENUM.CLICK, o("WAWebWamEnumConsumerBizSurfaceEnum").CONSUMER_BIZ_SURFACE_ENUM.BUSINESS_PROFILE, o("WAWebWamEnumConsumerBizActionTargetEnum").CONSUMER_BIZ_ACTION_TARGET_ENUM.AFFILIATION_SECTION, o("WAWebWamEnumConsumerBizEntryPointEnum").CONSUMER_BIZ_ENTRY_POINT_ENUM.CONTACT_INFO, e, {
            is_authorized_agent: true,
            parent_company_name: t,
            parent_company_jid: n
        });
    }
    function y({ businessJid, offboardingType, parentCompanyJid, parentCompanyName }) {
        d(o("WAWebWamEnumConsumerBizActionTypeEnum").CONSUMER_BIZ_ACTION_TYPE_ENUM.VIEW, o("WAWebWamEnumConsumerBizSurfaceEnum").CONSUMER_BIZ_SURFACE_ENUM.CHAT_THREAD, o("WAWebWamEnumConsumerBizActionTargetEnum").CONSUMER_BIZ_ACTION_TARGET_ENUM.BLOCKED_COMPOSER, o("WAWebWamEnumConsumerBizEntryPointEnum").CONSUMER_BIZ_ENTRY_POINT_ENUM.CHAT_THREAD, businessJid, m(parentCompanyName, parentCompanyJid, offboardingType));
    }
    function C({ businessJid, offboardingType, parentCompanyJid, parentCompanyName }) {
        d(o("WAWebWamEnumConsumerBizActionTypeEnum").CONSUMER_BIZ_ACTION_TYPE_ENUM.CLICK, o("WAWebWamEnumConsumerBizSurfaceEnum").CONSUMER_BIZ_SURFACE_ENUM.CHAT_THREAD, o("WAWebWamEnumConsumerBizActionTargetEnum").CONSUMER_BIZ_ACTION_TARGET_ENUM.BLOCKED_COMPOSER_LEARN_MORE, o("WAWebWamEnumConsumerBizEntryPointEnum").CONSUMER_BIZ_ENTRY_POINT_ENUM.CHAT_THREAD, businessJid, m(parentCompanyName, parentCompanyJid, offboardingType));
    }
    function b(e, t, n, r) {
        d(o("WAWebWamEnumConsumerBizActionTypeEnum").CONSUMER_BIZ_ACTION_TYPE_ENUM.VIEW, o("WAWebWamEnumConsumerBizSurfaceEnum").CONSUMER_BIZ_SURFACE_ENUM.OFFBOARDED_BOTTOM_SHEET, null, o("WAWebWamEnumConsumerBizEntryPointEnum").CONSUMER_BIZ_ENTRY_POINT_ENUM.CHAT_THREAD, e, m(t, n, r));
    }
    l.startAuthAgentConsumerSession = u;
    l.logChatHeaderSubtitleImpression = p;
    l.logFmxCardAffiliationImpression = _;
    l.logFmxCardAffiliationTap = f;
    l.logProfileAffiliationImpression = g;
    l.logProfileAffiliationTap = h;
    l.logBlockedComposerImpression = y;
    l.logBlockedComposerLearnMoreClick = C;
    l.logBottomSheetImpression = b;
}, 98);