__d("WAWebGenerateBotMetadata", [
    "WAWebABProps",
    "WAWebAiThreadTypeUtils",
    "WAWebBotBaseGating",
    "WAWebBotGating",
    "WAWebBotModeSelectionProtoUtils",
    "WAWebBotUnifiedResponseGating",
    "WAWebBotUnifiedResponseMutationUtils",
    "WAWebBotUtils",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebGenerateBotGroupMetadata",
    "WAWebHatchBackendGating",
    "WAWebLidMigrationUtils",
    "WAWebMetaAiWaffleAuthTokenCache",
    "WAWebMsgType",
    "WAWebProtobufsAICommon.pb",
    "WAWebSubscriptionAgeGating"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e({ aiThreadInfo }) {
        if (aiThreadInfo != null) {
            const n = o("WAWebAiThreadTypeUtils").getProtoTypeFromAiThreadType(aiThreadInfo.aiThreadType);
            return {
                clientInfo: {
                    type: n
                }
            };
        }
    }
    function s({ botMetricsMetadata }) {
        if (botMetricsMetadata != null) {
            return {
                destinationId: botMetricsMetadata.destinationId,
                destinationEntryPoint: botMetricsMetadata.destinationEntryPoint
            };
        }
    }
    function u(e) {
        const collectionId = e.aiMediaCollectionInfo?.collectionId;
        if (!(collectionId == null || e.subtype === "ai_media_collection")) {
            return {
                collectionId,
                uploadOrderIndex: e.aiMediaCollectionInfo?.uploadOrderIndex ?? undefined
            };
        }
    }
    function c(e) {
        if (o("WAWebBotBaseGating").isBotEnabled() || e.id?.remote?.isSupportAgentBot() === true || h(e.id?.remote, e.subtype)) {
            return d(e);
        }
        if (e.botGroupParticipant != null) {
            return _(e);
        }
    }
    function d(t) {
        const personaId = t.botPersonaId ?? undefined;
        const invokerJid = f(t);
        const botThreadInfo = t.aiThreadInfo != null ? e(t) : undefined;
        const botModeSelectionMetadata = L(t.botModeSelection, t.botModeOverride);
        const botMetricsMetadata = s(t);
        const botDocumentMessageMetadata = R(t.type);
        const aiMediaCollectionMetadata = u(t);
        const unifiedResponseMutation = t.unifiedResponseMutationMediaList != null ? o("WAWebBotUnifiedResponseMutationUtils").generateUnifiedResponseMutation(t.unifiedResponseMutationMediaList) : undefined;
        const botLinkedAccountsMetadata = p(t);
        if (!g([
            t.botGroupParticipant,
            personaId,
            invokerJid,
            botModeSelectionMetadata,
            botMetricsMetadata,
            botDocumentMessageMetadata,
            aiMediaCollectionMetadata,
            unifiedResponseMutation,
            botLinkedAccountsMetadata
        ], t.id?.remote, t.subtype)) {
            return {
                personaId,
                invokerJid,
                capabilityMetadata: t.id ? S(t.id.remote, t.subtype) : undefined,
                botThreadInfo,
                botGroupMetadata: o("WAWebGenerateBotGroupMetadata").generateBotGroupMetadata(t.botGroupParticipant),
                botModeSelectionMetadata,
                botMetricsMetadata,
                botDocumentMessageMetadata,
                aiMediaCollectionMetadata,
                unifiedResponseMutation,
                botLinkedAccountsMetadata,
                timezone: m(t.id?.remote, t.subtype)
            };
        }
    }
    function m(e, subtype) {
        if (h(e, subtype)) {
            const n = Intl.DateTimeFormat().resolvedOptions();
            const r = n.timeZone;
            if (r != null && r !== "") {
                return r;
            }
            return undefined;
        }
    }
    function p(e) {
        if (!(e.id == null || !o("WAWebBotUtils").isMetaAiBot(e.id.remote) || !o("WAWebBotBaseGating").isAiAccountLinkingEnabled() || e.subtype === "bot_feedback" || e.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL)) {
            const t = o("WAWebMetaAiWaffleAuthTokenCache").getCachedMetaAiWaffleAuthTokenBlob();
            if (!(t == null || t === "")) {
                return {
                    accounts: [],
                    acAuthTokens: new TextEncoder().encode(t).buffer
                };
            }
        }
    }
    function _(e) {
        const botGroupMetadata = o("WAWebGenerateBotGroupMetadata").generateBotGroupMetadata(e.botGroupParticipant);
        if (botGroupMetadata != null) {
            return {
                botGroupMetadata
            };
        }
    }
    function f(e) {
        if (e.subtype === "bot_feedback") {
            return e.botTargetSenderJid?.toJid();
        }
        if (e.botTargetSenderJid != null) {
            return o("WAWebLidMigrationUtils").toLid(e.botTargetSenderJid)?.toJid();
        }
    }
    function g(e, t, subtype) {
        return e.every((e)=>e == null) && !h(t, subtype);
    }
    function h(e, t) {
        return e != null && o("WAWebBotUtils").isHatchBot(e) && t !== o("WAWebCommonMsgSubtypeTypes").MsgSubtype.BotRequestWelcome && o("WAWebHatchBackendGating").isHatchIntegrationEnabledOnBackend();
    }
    function y(e, t) {
        return e != null && o("WAWebBotUtils").isHatchBot(e) && t !== o("WAWebCommonMsgSubtypeTypes").MsgSubtype.BotRequestWelcome && o("WAWebHatchBackendGating").isHatchApprovalNotificationEnabledOnBackend();
    }
    function C(e, t) {
        if (h(e, t)) {
            return [].concat(o("WAWebHatchBackendGating").isHatchConnectorsEnabledOnBackend() ? [
                o("WAWebProtobufsAICommon.pb").BotCapabilityMetadata$BotCapabilityType.HATCH_CONNECTOR_ACTION_CARD_ENABLED
            ] : [], o("WAWebHatchBackendGating").isHatchBrowserEnabledOnBackend() ? [
                o("WAWebProtobufsAICommon.pb").BotCapabilityMetadata$BotCapabilityType.HATCH_BROWSER_TASK_CARD_ENABLED
            ] : [], o("WAWebHatchBackendGating").isHatchJarvisSchemaEnabledOnBackend() ? [
                o("WAWebProtobufsAICommon.pb").BotCapabilityMetadata$BotCapabilityType.AI_MUSE_JARVIS_SCHEMA_ENABLED
            ] : []);
        }
        return [];
    }
    function b(e, t) {
        return e != null && o("WAWebBotUtils").isHatchBot(e) && t !== o("WAWebCommonMsgSubtypeTypes").MsgSubtype.BotRequestWelcome && o("WAWebHatchBackendGating").isHatchSecureCredentialsEnabledOnBackend();
    }
    function v(e, t) {
        return e != null && o("WAWebBotUtils").isHatchBot(e) && t !== o("WAWebCommonMsgSubtypeTypes").MsgSubtype.BotRequestWelcome && o("WAWebHatchBackendGating").isHatchSpaceEnabledOnBackend();
    }
    function S(e, t) {
        let n;
        const r = [
            (n = o("WAWebProtobufsAICommon.pb")).BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_STRUCTURED_RESPONSE,
            n.BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_HEADING,
            n.BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_SUB_HEADING,
            n.BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_TABLE,
            n.BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_INLINE_REELS
        ].concat(o("WAWebBotUnifiedResponseGating").isUnifiedResponseSendingEnabled() ? [
            o("WAWebProtobufsAICommon.pb").BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_UNIFIED_RESPONSE,
            o("WAWebProtobufsAICommon.pb").BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_LATEX,
            o("WAWebProtobufsAICommon.pb").BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_LATEX_INLINE,
            o("WAWebProtobufsAICommon.pb").BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_CODE,
            o("WAWebProtobufsAICommon.pb").BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_NESTED_LIST,
            o("WAWebProtobufsAICommon.pb").BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_SOURCES_IN_MESSAGE,
            o("WAWebProtobufsAICommon.pb").BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_UNIFIED_SOURCES,
            o("WAWebProtobufsAICommon.pb").BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_UNIFIED_TEXT_COMPONENT,
            o("WAWebProtobufsAICommon.pb").BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_UNIFIED_DOMAIN_CITATIONS,
            o("WAWebProtobufsAICommon.pb").BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_UR_INLINE_REELS_ENABLED
        ].concat(o("WAWebABProps").getABPropConfigValue("wa_web_imagine_ur_enabled") ? [
            o("WAWebProtobufsAICommon.pb").BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_UR_IMAGINE
        ] : [], o("WAWebABProps").getABPropConfigValue("wa_web_ur_imagine_video_enabled") ? [
            o("WAWebProtobufsAICommon.pb").BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_UR_IMAGINE_VIDEO
        ] : [], o("WAWebABProps").getABPropConfigValue("ai_rich_response_grid_image_enabled") ? [
            o("WAWebProtobufsAICommon.pb").BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_GRID_IMAGE,
            o("WAWebProtobufsAICommon.pb").BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_GRID_IMAGE_3P
        ] : [], o("WAWebABProps").getABPropConfigValue("wa_web_ur_bloks_enabled") ? [
            o("WAWebProtobufsAICommon.pb").BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_UR_BLOKS_ENABLED
        ] : [], o("WAWebABProps").getABPropConfigValue("ai_rich_response_post_citations_enabled") ? [
            o("WAWebProtobufsAICommon.pb").BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_UR_ZEITGEIST_CITATIONS
        ] : [], o("WAWebABProps").getABPropConfigValue("ai_rich_response_zeitgeist_carousel_enabled") ? [
            o("WAWebProtobufsAICommon.pb").BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_UR_ZEITGEIST_CAROUSEL
        ] : [], o("WAWebABProps").getABPropConfigValue("ai_rich_response_inline_links_enabled") ? [
            o("WAWebProtobufsAICommon.pb").BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_INLINE_LINKS_ENABLED
        ] : [], o("WAWebABProps").getABPropConfigValue("ai_rich_response_ur_media_grid_enabled") ? [
            o("WAWebProtobufsAICommon.pb").BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_UR_MEDIA_GRID_ENABLED
        ] : [], o("WAWebABProps").getABPropConfigValue("meta_ai_in_app_survey_enabled") ? [
            o("WAWebProtobufsAICommon.pb").BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_IN_APP_SURVEY
        ] : [], o("WAWebABProps").getABPropConfigValue("ai_rich_response_side_by_side_survey_enabled") ? [
            o("WAWebProtobufsAICommon.pb").BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_SIDE_BY_SIDE_SURVEY
        ] : [], [
            o("WAWebProtobufsAICommon.pb").BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_UR_REASONING
        ]) : [], [
            o("WAWebProtobufsAICommon.pb").BotCapabilityMetadata$BotCapabilityType.SESSION_TRANSPARENCY_SYSTEM_MESSAGE
        ], o("WAWebBotBaseGating").isAiSubscriptionMeteringEnabled() ? [
            o("WAWebProtobufsAICommon.pb").BotCapabilityMetadata$BotCapabilityType.AI_SUBSCRIPTION_METERING_ENABLED
        ] : [], o("WAWebBotBaseGating").isAiSubscriptionEnabled() && o("WAWebSubscriptionAgeGating").isEligibleForSubscriptionsByAge() ? [
            o("WAWebProtobufsAICommon.pb").BotCapabilityMetadata$BotCapabilityType.AI_SUBSCRIPTION_ENABLED
        ] : [], y(e, t) ? [
            o("WAWebProtobufsAICommon.pb").BotCapabilityMetadata$BotCapabilityType.HATCH_NOTIFICATION_METADATA_EVENT_ENABLED
        ] : [], C(e, t), b(e, t) ? [
            o("WAWebProtobufsAICommon.pb").BotCapabilityMetadata$BotCapabilityType.HATCH_SECURE_CREDENTIAL_CARD_ENABLED
        ] : [], v(e, t) ? [
            o("WAWebProtobufsAICommon.pb").BotCapabilityMetadata$BotCapabilityType.HATCH_ARTIFACT_CARD_ENABLED
        ] : []);
        if (r.length === 0) {
            return undefined;
        }
        return {
            capabilities: r
        };
    }
    function R(type) {
        if (type === o("WAWebMsgType").MSG_TYPE.DOCUMENT) {
            const pluginType = o("WAWebBotGating").isMetaAiDocumentOcrImageConversionEnabled() ? o("WAWebProtobufsAICommon.pb").BotDocumentMessageMetadata$DocumentPluginType.OCR_AND_IMAGES : o("WAWebProtobufsAICommon.pb").BotDocumentMessageMetadata$DocumentPluginType.TEXT_EXTRACTION;
            return {
                pluginType
            };
        }
    }
    function L(e, t) {
        if (!(e == null || e.length === 0)) {
            return {
                mode: e.map(o("WAWebBotModeSelectionProtoUtils").getProtoModeFromBotSelectionMode),
                overrideMode: t != null ? [].concat(t) : []
            };
        }
    }
    l.generateAiThreadInfo = e;
    l.generateBotMetricsMetadata = s;
    l.generateAiMediaCollectionMetadata = u;
    l.generateBotMetadata = c;
    l.generateBotCapabilityMetadata = S;
    l.generateBotModeSelectionMetadata = L;
}, 98);