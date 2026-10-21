__d("WAWebMsgActionCapability", [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebAuraGating",
    "WAWebBizAiAgentGating",
    "WAWebBizBroadcastProChatUtils",
    "WAWebBizCtwaAGMUtils",
    "WAWebBotBaseGating",
    "WAWebBotComposerTreatment",
    "WAWebBotExposedName",
    "WAWebBotForwardCapability",
    "WAWebBotGenTypingIndicatorMsg",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProfileCollection",
    "WAWebBotStaticProfiles",
    "WAWebBotSupportGating",
    "WAWebBotTypes",
    "WAWebBotUtils",
    "WAWebBusinessHSMTypes",
    "WAWebBusinessProfileGetters",
    "WAWebCTWAGatingUtils",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebClock",
    "WAWebCoexV2RevokeAuthorization",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebContactGetters",
    "WAWebContactModel",
    "WAWebDisplayType",
    "WAWebFileUtils",
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGroupHistoryUtils",
    "WAWebHatchFrontendGating",
    "WAWebHatchJarvisPayload",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebIsAiRichResponseForwardable",
    "WAWebKeepInChatMsgUtils",
    "WAWebLimitSharingGatingUtils",
    "WAWebMediaCryptoEligibilityUtils",
    "WAWebMediaTypes",
    "WAWebMessageAssociation.flow",
    "WAWebMessageEditGatingUtils",
    "WAWebMessageEditUtils",
    "WAWebMiscGatingUtils",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebMsgMayFail",
    "WAWebMsgModel",
    "WAWebMsgModelUtils",
    "WAWebMsgType",
    "WAWebMuseGroupRichResponseForward",
    "WAWebMusicGatingUtils",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterFutureProofUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebPollCreationUtils",
    "WAWebPollsGatingUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebQuestionsGatingUtils",
    "WAWebResolveBotProfile",
    "WAWebRevokeMsgConstants",
    "WAWebSoundStickerGating",
    "WAWebSoundStickerUtils",
    "WAWebSpamUtils",
    "WAWebStateUtils",
    "WAWebUserPrefsMultiDevice",
    "WAWebWid",
    "cr:6009",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    const _ = "text/html";
    function f({ ctwaContext }) {
        return ctwaContext?.sourceApp === "whatsapp";
    }
    function g(e, t) {
        return h(e.isWamoSub, t);
    }
    function h(e, t) {
        let n;
        return !(o("WAWebChatGetters").getIsNewsletter(t) && e != null && e && !((n = t.newsletterMetadata?.iAmAdminOrOwner()) != null && n) && o("WAWebNewsletterGatingUtils").isWamoSubMessagesSupported());
    }
    function y(e, t) {
        if (!k(e)) {
            return false;
        }
        if (e.type === o("WAWebMsgType").MSG_TYPE.MUSIC) {
            return C(t.id);
        }
        if (t instanceof r("WAWebContactModel") || !o("WAWebChatGetters").getIsNewsletter(t)) {
            return true;
        }
        if (D(e)) {
            return false;
        }
        switch(e.type){
            case o("WAWebMsgType").MSG_TYPE.PTV:
                return o("WAWebNewsletterGatingUtils").isNewsletterPTVForwardingEnabled();
            case o("WAWebMsgType").MSG_TYPE.AUDIO:
            case o("WAWebMsgType").MSG_TYPE.PTT:
                return o("WAWebNewsletterGatingUtils").isNewsletterAudioFileSendingEnabled() || o("WAWebMsgGetters").getHasOriginatedFromNewsletter(e);
        }
        return o("WAWebNewsletterFutureProofUtils").isMsgTypeSupported(e.type);
    }
    function C(e) {
        return e.isGroup() || e.isUser() && !e.isBot() && !e.isPSA();
    }
    function b(e, t, n) {
        if (e.isAiHub()) {
            return false;
        }
        if (!e.isBot()) {
            return true;
        }
        if (o("WAWebBotUtils").isMetaAiBot(e)) {
            return o("WAWebBotForwardCapability").isMetaAiForwardRowVisibleForMsgs(t);
        }
        if (o("WAWebBotUtils").isHatchBot(e)) {
            return true;
        }
        const r = o("WAWebBotProfileCollection").BotProfileCollection.get(e);
        if (r?.isDefault !== true) {
            return false;
        }
        return o("WAWebBotForwardCapability").isMetaAiForwardRowVisibleForMsgs(t);
    }
    function v(e, t) {
        if (e.isNewsletter()) {
            return true;
        }
        return t.hasMusicAnnotations !== true;
    }
    function S({ id }, t, n = {}) {
        return b(id, t, n) && v(id, n);
    }
    function R(e) {
        const mediaStage = e.mediaData.mediaStage;
        if (mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED || mediaStage === o("WAWebMediaTypes").MediaDataStage.EXISTS) {
            return true;
        }
        const e_mediaObject = e.mediaObject;
        if (e_mediaObject == null) {
            return false;
        }
        const r = o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMsg(e);
        return e_mediaObject.entries.getDownloadEntry(r) != null || I(e, r);
    }
    function L(e) {
        return o("WAWebFrontendMsgGetters").getAsMms(e) != null && e.ctwaContext == null || o("WAWebFileUtils").isDocument(e);
    }
    function E(e) {
        if (o("WAWebMuseGroupRichResponseForward").isMuseGroupAgentRichResponse(e)) {
            return o("WAWebMuseGroupRichResponseForward").canForwardMuseGroupRichResponse(e);
        }
        return !(!o("WAWebIsAiRichResponseForwardable").isAiRichResponseForwardable(e) || !o("WAWebBotBaseGating").isRichResponseForwardSendingEnabled() || o("WAWebHatchJarvisPayload").hasHatchJarvisPayload(e.unifiedResponse) && !o("WAWebBotBaseGating").isRichResponseJarvisForwardSendingEnabled());
    }
    function k(e) {
        let n;
        const s = o("WAWebStateUtils").unproxy(e);
        const u = o("WAWebBotUtils").isHatchBot(s.id.remote);
        if (s.isCarouselCard || s.carouselCards || s.associationType === o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_POLL) {
            return false;
        }
        const c = o("WAWebFrontendMsgGetters").getMaybeChat(s);
        if (c != null && o("WAWebChatGetters").getIsBroadcast(c) || c != null && c.isSuspendedOrTerminated() && o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled() || c != null && o("WAWebBotComposerTreatment").isBotSupportComposerBlocked(c.id)) {
            return false;
        }
        const d = c != null && o("WAWebChatGetters").getIsNewsletter(c);
        if (d && (!o("WAWebNewsletterGatingUtils").isNewsletterMessageForwardSendingEnabled() || c != null && !g(s, c)) || o("WAWebMsgGetters").getIsQuestion(s) && !o("WAWebQuestionsGatingUtils").isQuestionForwardingEnabledForMsg(s) || o("WAWebMsgGetters").getQuestionReplyQuotedMessage(s) != null && !o("WAWebQuestionsGatingUtils").isQuestionReplyForwardingEnabledForMsg(s) || o("WAWebMsgGetters").getNewsletterAdminProfile(s) != null && !o("WAWebNewsletterGatingUtils").isNewsletterAdminProfilesForwardingEnabled() || o("WAWebSoundStickerUtils").isSoundStickerMsg(s) && !o("WAWebSoundStickerGating").isSoundStickerCreationEnabled()) {
            return false;
        }
        switch(s.type){
            case o("WAWebMsgType").MSG_TYPE.CALL_LOG:
            case o("WAWebMsgType").MSG_TYPE.CIPHERTEXT:
            case o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER:
            case o("WAWebMsgType").MSG_TYPE.EVENT_CREATION:
            case o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE:
            case o("WAWebMsgType").MSG_TYPE.NEWSLETTER_ADMIN_INVITE:
            case o("WAWebMsgType").MSG_TYPE.ORDER:
            case o("WAWebMsgType").MSG_TYPE.OVERSIZED:
            case o("WAWebMsgType").MSG_TYPE.PAYMENT:
            case o("WAWebMsgType").MSG_TYPE.QUARANTINED:
            case o("WAWebMsgType").MSG_TYPE.REQUEST_PHONE_NUMBER:
            case o("WAWebMsgType").MSG_TYPE.SHARABLE_EVENT_INVITE:
            case o("WAWebMsgType").MSG_TYPE.REVOKED:
            case o("WAWebMsgType").MSG_TYPE.UNKNOWN:
            case o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE:
                return false;
            case o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE:
                return E(s);
            case o("WAWebMsgType").MSG_TYPE.MUSIC:
                return o("WAWebMusicGatingUtils").isMusicOnChatsForwardingEnabled();
            case o("WAWebMsgType").MSG_TYPE.POLL_CREATION:
                return d && s.pollContentType !== o("WAWebPollCreationUtils").PollContentType.IMAGE && o("WAWebNewsletterGatingUtils").isNewsletterPollForwardingEnabled();
            case o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT:
                return o("WAWebNewsletterGatingUtils").isNewsletterPollForwardingEnabled();
            case o("WAWebMsgType").MSG_TYPE.LIST:
                return s.list?.listType === o("WAWebProtobufsE2E.pb").Message$ListMessage$ListType.PRODUCT_LIST;
            case o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE:
                return s?.nativeFlowName !== r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW;
        }
        if (s.type === o("WAWebMsgType").MSG_TYPE.LOCATION && s.isLive) {
            return false;
        }
        if (s.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE) {
            if (s.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REMINDER || x(s)) {
                return true;
            }
            if (s.nativeFlowName != null) {
                return false;
            }
        }
        if (!o("WAWebMsgModelUtils").interactiveButtonsReleased(s) || s.type === o("WAWebMsgType").MSG_TYPE.CHAT && s.subtype === o("WAWebBotGenTypingIndicatorMsg").BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE || s.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT && s.mimetype === _ && u) {
            return false;
        }
        if (o("WAWebFrontendMsgGetters").getAsMms(s)) {
            const m = s.mediaData;
            if (m.mediaStage === o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING || m.mediaStage === o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED || !T(s) && (s.type === o("WAWebMsgType").MSG_TYPE.IMAGE || s.type === o("WAWebMsgType").MSG_TYPE.VIDEO || s.type === o("WAWebMsgType").MSG_TYPE.PTV || s.type === o("WAWebMsgType").MSG_TYPE.PTT) && (!o("WAWebMsgGetters").getIsNewsletterMsg(s) || !o("WAWebNewsletterGatingUtils").isNewsletterQuickForwardingEnabled())) {
                return false;
            }
            if (s.type === o("WAWebMsgType").MSG_TYPE.PTV) {
                if (d) {
                    if (!o("WAWebNewsletterGatingUtils").isNewsletterPTVForwardingEnabled()) {
                        return false;
                    }
                } else if (!o("WAWebMsgGetters").getIsSentByMe(s)) {
                    return false;
                }
            }
            if (s.isViewOnce || o("WAWebFrontendMsgGetters").getIsUnsentMedia(s)) {
                return false;
            }
        }
        return !((n = s.nativeFlowButtons) != null && n.length || s.hsmTag === o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.AUTHENTICATION || o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage({
            isAGMShown: s.ctwaContext?.automatedGreetingMessageShown,
            msgSource: s.ctwaContext?.sourceApp,
            msgSubtype: s.subtype,
            msgType: s.type
        }) || f(s) || s.type === o("WAWebMsgType").MSG_TYPE.STICKER && (!r("WAWebAuraGating").canUsePremiumSticker(s.stickerPremiumStatus) || !r("WAWebAuraGating").canUsePremiumSticker(s.mediaData?.stickerPremiumStatus)));
    }
    function I(e, t) {
        return t && e.mediaKey != null && e.mediaObject?.entries.getUploadEntry(t) != null;
    }
    function T(e) {
        return R(e);
    }
    function D(e) {
        return L(e) && e.mediaData.mediaStage !== o("WAWebMediaTypes").MediaDataStage.RESOLVED && o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMsg(e);
    }
    function x(e) {
        return r("WAWebWid").isPSA(e.id.remote) && e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && e.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").CTA_URL;
    }
    function $(e) {
        const t = o("WAWebStateUtils").unproxy(e);
        if (!k(e) || o("WAWebMsgGetters").getIsFrequentlyForwarded(t) || o("WAWebMsgLinks").getSuspiciousLinks(t).length !== 0 || o("WAWebFrontendMsgGetters").getAsPttLike(t) != null || t.type === o("WAWebMsgType").MSG_TYPE.STICKER || !o("WAWebMsgModelUtils").interactiveButtonsReleased(t) || o("WAWebChatGetters").getIsNewsletter(o("WAWebFrontendMsgGetters").getChat(t)) && o("WAWebNewsletterGatingUtils").isNewsletterQuickForwardingEnabled()) {
            return false;
        }
        return o("WAWebFrontendMsgGetters").getAsMms(t) != null || o("WAWebMsgGetters").getLinkPreview(t) || [
            o("WAWebMsgType").MSG_TYPE.VCARD,
            o("WAWebMsgType").MSG_TYPE.MULTI_VCARD
        ].includes(t.type) || t.type === o("WAWebMsgType").MSG_TYPE.LOCATION || t.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION || t.type === o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT || t.ctwaContext != null;
    }
    function P(e) {
        const r = o("WAWebStateUtils").unproxy(e);
        if (o("WAWebChatGetters").getIsNewsletter(o("WAWebFrontendMsgGetters").getChat(r)) || r.isCarouselCard || o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage({
            isAGMShown: r.ctwaContext?.automatedGreetingMessageShown,
            msgSource: r.ctwaContext?.sourceApp,
            msgSubtype: r.subtype,
            msgType: r.type
        })) {
            return false;
        }
        return (!o("WAWebMsgGetters").getIsEphemeral(r) || o("WAWebKeepInChatMsgUtils").supportsStarWithKeepInChat(r)) && (r.afterReadDuration == null || r.afterReadDuration === 0) && !o("WAWebMsgGetters").getIsNotification(r) && !o("WAWebMsgGetters").getIsFutureproof(r) && !r.isViewOnce && r.type !== o("WAWebMsgType").MSG_TYPE.REVOKED && r.type !== o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER && !(r.ack < o("WAWebAck").ACK.SENT && o("WAWebMsgGetters").getIsSentByMe(r)) && o("WAWebMsgModelUtils").interactiveButtonsReleased(r) && !o("WAWebFrontendMsgGetters").getAsAlbum(r);
    }
    function N(e) {
        const a = o("WAWebStateUtils").unproxy(e);
        const i = o("WAWebFrontendMsgGetters").getChat(a);
        if (o("WAWebChatGetters").getIsBroadcast(i) || o("WAWebLimitSharingGatingUtils").isChatAcp2Restricted(i) || a.isViewOnce === true || a.subtype === "view_once_unavailable_fanout" || a.subtype === "acp_unavailable_fanout" || i.id.isBot()) {
            return false;
        }
        if (o("WAWebChatGetters").getIsNewsletter(i)) {
            if (o("WAWebNewsletterExtendedGatingUtils").canPinNewsletterMessages(i.newsletterMetadata)) {
                return !o("WAWebMsgGetters").getIsNotification(a) && !o("WAWebMsgGetters").getIsFutureproof(a) && a.type !== o("WAWebMsgType").MSG_TYPE.REVOKED && a.type !== o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER && o("WAWebMsgModelUtils").interactiveButtonsReleased(a) && !o("WAWebFrontendMsgGetters").getAsAlbum(a);
            }
            return false;
        }
        if (a.isCarouselCard) {
            return false;
        }
        if (o("WAWebMsgGetters").getIsGroupMsg(a)) {
            const l = r("nullthrows")(i.groupMetadata);
            if (!l.participants.iAmMember() || (l.restrict || l.announce) && !l.participants.iAmAdmin()) {
                return false;
            }
        }
        if (o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage({
            isAGMShown: a.ctwaContext?.automatedGreetingMessageShown,
            msgSource: a.ctwaContext?.sourceApp,
            msgSubtype: a.subtype,
            msgType: a.type
        })) {
            return false;
        }
        return !o("WAWebMsgGetters").getIsNotification(a) && !o("WAWebMsgGetters").getIsFutureproof(a) && !o("WAWebMsgGetters").getIsViewOnce(a) && a.type !== o("WAWebMsgType").MSG_TYPE.REVOKED && a.type !== o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER && !(a.ack < o("WAWebAck").ACK.SENT && o("WAWebMsgGetters").getIsSentByMe(a)) && o("WAWebMsgModelUtils").interactiveButtonsReleased(a) && !o("WAWebKeepInChatMsgUtils").isExpiredAndNotKept(a) && !o("WAWebFrontendMsgGetters").getAsAlbum(a);
    }
    function M(e) {
        const r = e?.contact?.businessProfile;
        return e?.id?.isUser() === true && o("WAWebUserPrefsMultiDevice").getIsHostedMeAccountFromLocalStorage() !== true && r != null && o("WAWebBusinessProfileGetters").getIsBizBot1p(r);
    }
    function w(e, t) {
        return o("WAWebMsgGetters").getBizBotType(e) === o("WAWebBotTypes").BizBotType.BIZ_1P && t?.id?.isUser() === true && e.local !== true && t?.contact?.businessProfile?.automatedType !== o("WAWebBotTypes").BizBotAutomatedType.PARTIAL_1P && !o("WAWebMsgGetters").getIsCoexV2Relay(e);
    }
    function A(e, t) {
        if (!w(e, t) || e.type !== o("WAWebMsgType").MSG_TYPE.CHAT) {
            return false;
        }
        return !U(e, t) && V(e, t, !o("WAWebMsgMayFail").msgMayFail(e)) && !o("WAWebMsgGetters").getIsQuestion(e) && !o("WAWebBizBroadcastProChatUtils").getIsBizBroadcastProChat(t) && !o("WAWebFrontendChatGetters").getIsCapiHostedGroup(t) && o("WAWebChatGroupUtils").canSendIgnoringAiAgentBlock(t);
    }
    function F(e) {
        return w(e, o("WAWebFrontendMsgGetters").getMaybeChat(e)) && o("WAWebBizAiAgentGating").isAiAgentMessageEditingEnabled();
    }
    function O(e) {
        if (F(e)) {
            return o("WAWebMessageEditUtils").isParentWithinEditUIWindow({
                parentTsInSeconds: e.t,
                msgKey: e.id
            });
        }
        return true;
    }
    function B(e) {
        return e.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE && O(e);
    }
    function W(e, t = false) {
        const n = o("WAWebFrontendMsgGetters").getChat(e);
        if (U(e, n)) {
            return false;
        }
        const r = o("WAWebMsgGetters").getIsEdited(e) && o("WAWebMsgGetters").getIsFailed(e) && !t || !o("WAWebMsgMayFail").msgMayFail(e);
        if (o("WAWebChatGetters").getIsNewsletter(n)) {
            return q(e, n, r);
        }
        const a = w(e, n);
        if (V(e, n, r)) {
            if (a && o("WAWebBizAiAgentGating").isAiAgentMessageEditingEnabled()) {
                return o("WAWebChatGroupUtils").canSendIgnoringAiAgentBlock(n);
            }
            return (e.local || o("WAWebMessageEditGatingUtils").isCrossDeviceMessageEditingEnabled() || o("WAWebMessageEditUtils").isMessageYourselfEditExempt({
                msgKey: e.id,
                msgType: e.type
            })) && n.canSend;
        }
        return false;
    }
    function q(e, t, n) {
        return (t.newsletterMetadata?.iAmAdminOrOwner() ?? false) && n && !e.isForwarded && (o("WAWebMsgGetters").getNewsletterAdminProfile(e) == null || o("WAWebMsgGetters").getIsSentByMe(e));
    }
    function U(e, t) {
        return o("WAWebMsgGetters").getIsBotQuery(e) && !H(e, t) || M(t) || o("WAWebLimitSharingGatingUtils").isChatAcp2Restricted(t);
    }
    function V(e, t, n) {
        return o("WAWebMsgGetters").getIsSentByMe(e) && !e.isForwarded && n && t.contact?.isEnterprise !== true;
    }
    function H(e, t) {
        const a = t.groupMetadata?.participants;
        if (!o("WAWebChatGetters").getIsGroup(t) || a == null || !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()) {
            return false;
        }
        const i = (e.mentionedJidList ?? []).filter((e)=>e.isBot());
        return i.length > 0 && i.every((e)=>o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e) && a.get(e) != null);
    }
    function G(e) {
        const t = o("WAWebMsgGetters").getIsGroupMsg(e);
        const n = o("WAWebMsgGetters").getIsSentByMe(e);
        const groupMetadata = o("WAWebFrontendMsgGetters").getChat(e).groupMetadata;
        if (n || e.isViewOnce || o("WAWebChatGetters").getIsNewsletter(o("WAWebFrontendMsgGetters").getChat(e)) || o("WAWebMsgGetters").getIsMetaBotResponse(e) || !t) {
            return false;
        }
        return !!(groupMetadata != null && groupMetadata.reportToAdminMode);
    }
    function z(e, t = false) {
        return o("WAWebMessageEditUtils").getMsgEditType(e.type) === o("WAWebMessageEditUtils").MsgEditType.TextEdit && W(e, t);
    }
    function j(e, t = false) {
        return o("WAWebMessageEditUtils").getMsgEditType(e.type) === o("WAWebMessageEditUtils").MsgEditType.CaptionEdit && !!e.caption && o("WAWebFrontendMsgGetters").getAsViewOnce(e) == null && W(e, t);
    }
    function K(e, t = false) {
        if (o("WAWebMessageEditUtils").getMsgEditType(e.type) !== o("WAWebMessageEditUtils").MsgEditType.PollEdit || o("WAWebMsgGetters").getIsNewsletterMsg(e) || !o("WAWebPollsGatingUtils").isPollCreatorEditSendingEnabled(e.id.remote)) {
            return false;
        }
        const n = o("WAWebMsgGetters").getPollEndTime(e);
        if (n != null && n <= o("WAWebClock").Clock.getServerTimeMs()) {
            return false;
        }
        return W(e, t);
    }
    function Q(e) {
        switch(e){
            case o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION:
            case o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT:
                return true;
            case o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER:
                return true;
            default:
                return false;
        }
    }
    function X(e) {
        if ((n("cr:6009") == null ? undefined : n("cr:6009").messageEditRestrictionEnabled()) === false) {
            return true;
        }
        const t = o("WAWebStateUtils").unproxy(e);
        if (o("WAWebMsgGetters").getIsQuestion(t)) {
            return false;
        }
        const r = z(t, true) || j(t, true) || K(t, true);
        if (r) {
            if (o("WAWebMessageEditUtils").isParentWithinEditUIWindow({
                parentTsInSeconds: t.t,
                msgKey: t.id
            })) {
                return true;
            }
            return F(t) || o("WAWebMessageEditUtils").isMessageYourselfEditExempt({
                msgKey: t.id,
                msgType: t.type
            });
        }
        return false;
    }
    function Y(e, t, n) {
        return X(e) && Q(t) && !o("WAWebBizBroadcastProChatUtils").getIsBizBroadcastProChat(n) && !o("WAWebFrontendChatGetters").getIsCapiHostedGroup(n);
    }
    function J(e) {
        if ((n("cr:6009") == null ? undefined : n("cr:6009").messageEditRestrictionEnabled()) === false) {
            return true;
        }
        const t = o("WAWebStateUtils").unproxy(e);
        if (o("WAWebMsgGetters").getIsQuestion(t)) {
            return false;
        }
        return z(t) && (o("WAWebMessageEditUtils").isParentWithinEditProcessingWindow({
            parentTsInSeconds: t.t,
            msgKey: t.id
        }) || o("WAWebMessageEditUtils").isMessageYourselfEditExempt({
            msgKey: t.id,
            msgType: t.type
        }));
    }
    function Z(e) {
        if ((n("cr:6009") == null ? undefined : n("cr:6009").messageEditRestrictionEnabled()) === false) {
            return true;
        }
        const t = o("WAWebStateUtils").unproxy(e);
        if (o("WAWebMsgGetters").getIsQuestion(t)) {
            return false;
        }
        return j(t) && (o("WAWebMessageEditUtils").isParentWithinEditProcessingWindow({
            parentTsInSeconds: t.t,
            msgKey: t.id
        }) || o("WAWebMessageEditUtils").isMessageYourselfEditExempt({
            msgKey: t.id,
            msgType: t.type
        }));
    }
    function ee(e) {
        const a = o("WAWebStateUtils").unproxy(e);
        if (o("WAWebMsgGetters").getIsSentByMe(a) && !o("WAWebGroupHistoryUtils").shouldReportGroupHistoryBundleSender(a) || o("WAWebMsgGetters").getIsPSA(a) || o("WAWebMsgGetters").getIsBotResponse(a) || o("WAWebMsgGetters").getIsCAPISupport(a)) {
            return false;
        }
        if (o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage({
            isAGMShown: a.ctwaContext?.automatedGreetingMessageShown,
            msgSource: a.ctwaContext?.sourceApp,
            msgSubtype: a.subtype,
            msgType: a.type
        })) {
            if (a.signupContext != null) {
                return true;
            }
            return o("WAWebCTWAGatingUtils").isCtwaAgmReportingEnabled();
        }
        if ((a.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE || a.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE) && (a?.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW || a?.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP)) {
            return true;
        }
        return o("WAWebSpamUtils").isMsgTypeSupportedForMsgLevelReporting(a.type);
    }
    function te(e) {
        return o("WATimeUtils").unixTime() - o("WAWebMsgGetters").getT(e) <= o("WAWebRevokeMsgConstants").NEWSLETTER_REVOKE_WINDOW;
    }
    function ne(t) {
        const i = o("WAWebFrontendMsgGetters").getCurrentChat(t);
        if (!o("WAWebChatGetters").getIsNewsletter(i)) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "canRevokeNewsletterMsg called on a non-newsletter chat"
            ])));
            return false;
        }
        if (le(t)) {
            return false;
        }
        const l = (t.ack ?? o("WAWebAck").ACK.CLOCK) < o("WAWebAck").ACK.CLOCK;
        return (te(t) || l) && (i.newsletterMetadata?.iAmAdminOrOwner() ?? false);
    }
    function re(e) {
        const t = o("WAWebFrontendMsgGetters").getChat(e);
        if (!o("WAWebChatGetters").getIsNewsletter(t) || !te(e)) {
            return false;
        }
        if (t.newsletterMetadata == null) {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "chat missing newsletter metadata, can't gen msg link"
            ])));
            return false;
        }
        if (t.newsletterMetadata.inviteCode == null) {
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "chat missing newsletter inviteCode, can't gen msg link"
            ])));
            return false;
        }
        if (e.serverId == null) {
            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "msg missing serverId, can't gen msg link"
            ])));
            return false;
        }
        return !(e.type === o("WAWebMsgType").MSG_TYPE.REVOKED || !g(e, t));
    }
    function oe(e) {
        const t = o("WAWebFrontendMsgGetters").getChat(e);
        if (!o("WAWebChatGetters").getIsNewsletter(t) || !te(e)) {
            return false;
        }
        const t_newsletterMetadata = t.newsletterMetadata;
        if (t_newsletterMetadata == null) {
            o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "chat missing newsletter metadata, can't gen embed code"
            ])));
            return false;
        }
        if (t_newsletterMetadata.inviteCode == null) {
            o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "chat missing newsletter inviteCode, can't gen embed code"
            ])));
            return false;
        }
        if (e.serverId == null) {
            o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "msg missing serverId, can't gen embed code"
            ])));
            return false;
        }
        if (e.type === o("WAWebMsgType").MSG_TYPE.REVOKED || !g(e, t) || !t_newsletterMetadata.iAmAdminOrOwner()) {
            return false;
        }
        return o("WAWebNewsletterGatingUtils").isChannelWebEmbeddingEnabled();
    }
    function ae(e) {
        let t;
        if (!o("WAWebNewsletterGatingUtils").isChannelDSA26SenderEnabled()) {
            return false;
        }
        const n = o("WAWebFrontendMsgGetters").getChat(e);
        return !(!o("WAWebChatGetters").getIsNewsletter(n) || !te(e) || !((t = n.newsletterMetadata) != null && t.iAmAdminOrOwner()) || e.hasPaidPartnershipLabel === true || !o("WAWebSpamUtils").isMsgTypeSupportedForPaidPartnershipLabel(e));
    }
    function ie(e) {
        let t;
        const n = o("WAWebFrontendMsgGetters").getChat(e);
        if (!o("WAWebChatGetters").getIsNewsletter(n) || !te(e) || !((t = n.newsletterMetadata) != null && t.iAmAdminOrOwner()) || o("WAWebMsgGetters").getIsAiContent(e) === true || o("WAWebFrontendMsgGetters").getAsVisualMedia(e) == null) {
            return false;
        }
        return o("WAWebNewsletterGatingUtils").isChannelSGISenderSelfDisclosureEnabled();
    }
    function le(e) {
        let t = false;
        if (e.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL && (e.subtype === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.AdminRevoke || e.subtype === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.SenderRevoke)) {
            t = true;
        }
        return t || e.type === o("WAWebMsgType").MSG_TYPE.REVOKED;
    }
    function se(e) {
        if (!e.isBot() || o("WAWebBotStaticProfiles").isStaticProfile(e)) {
            return false;
        }
        const t = o("WAWebResolveBotProfile").resolveBotSupportInput(e);
        return o("WAWebBotExposedName").isBotProfileViewOnly(t) || o("WAWebBotSupportGating").isThirdPartyAgent(t);
    }
    function ue(e, t = false) {
        let n;
        if (le(e)) {
            return false;
        }
        const r = o("WAWebFrontendMsgGetters").getCurrentChat(e);
        if (o("WAWebChatGetters").getIsNewsletter(r)) {
            return ne(e);
        }
        if (o("WAWebChatGetters").getIsGroup(r) && !((n = r.groupMetadata) != null && n.participants.iAmMember()) || o("WAWebContactGetters").getIsMe(r.contact) || r.contact.isEnterprise && !r.contact.id.isBot() || o("WAWebFrontendChatGetters").getIsCapiHostedGroup(r) || M(r) || !t && se(r.id)) {
            return false;
        }
        if (e.type === o("WAWebMsgType").MSG_TYPE.COMMENT) {
            return e.ack != null && e.ack >= o("WAWebAck").ACK.SENT;
        }
        return o("WAWebMsgGetters").getIsUserCreatedType(e) && !(e.broadcast != null && e.broadcast) && (e instanceof o("WAWebMsgModel").Msg && !e.isUnsentPhoneMsg() || o("WAWebMsgGetters").getIsEdited(e)) && !o("WAWebFrontendMsgGetters").getIsUnsentMedia(e) && !o("WAWebChatGroupUtils").isSuspendedGroup(o("WAWebFrontendMsgGetters").getCurrentChat(e)) && !o("WAWebChatGroupUtils").isTerminatedGroup(o("WAWebFrontendMsgGetters").getCurrentChat(e));
    }
    function ce(e) {
        let t = e;
        if (e instanceof o("WAWebMsgModel").Msg) {
            t = o("WAWebStateUtils").unproxy(e);
        }
        const n = o("WATimeUtils").unixTime() - o("WAWebMsgGetters").getT(t) <= o("WAWebRevokeMsgConstants").REVOKE_WINDOW;
        return ue(t) && t.id.fromMe && n;
    }
    function de(e) {
        let t;
        let n = e;
        if (e instanceof o("WAWebMsgModel").Msg) {
            n = o("WAWebStateUtils").unproxy(e);
        }
        const r = o("WAWebFrontendMsgGetters").getCurrentChat(n);
        if (o("WAWebChatGetters").getIsNewsletter(r)) {
            return ne(n);
        }
        const a = o("WATimeUtils").unixTime() - o("WAWebMsgGetters").getT(n) <= o("WAWebRevokeMsgConstants").REVOKE_WINDOW;
        return ue(n) && !n.id.fromMe && !!((t = r.groupMetadata) != null && t.participants.iAmAdmin()) && !o("WAWebLimitSharingGatingUtils").isChatAcp2Restricted(r) && a;
    }
    function me(e) {
        let t = e;
        if (e instanceof o("WAWebMsgModel").Msg) {
            t = o("WAWebStateUtils").unproxy(e);
        }
        const n = o("WATimeUtils").unixTime() - o("WAWebMsgGetters").getT(t) <= o("WAWebRevokeMsgConstants").REVOKE_WINDOW;
        const r = o("WAWebCoexV2RevokeAuthorization").getCoexV2RevokeAuthorizationForCurrentUser(o("WAWebMsgGetters").getSenderWithDevice(t), o("WAWebMsgGetters").getMetaFrom(t));
        if (!ue(t, r === true) || !n) {
            return false;
        }
        return r ?? (o("WAWebBotBaseGating").isBotEnabled() && o("WAWebMsgGetters").isMetaBotResponseToMyInvoke(t) || !t.id.fromMe && o("WAWebBotUtils").isHatchBot(o("WAWebFrontendMsgGetters").getCurrentChat(t).id) && o("WAWebHatchFrontendGating").isHatchRevokeEnabled());
    }
    function pe(e) {
        if (o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage({
            isAGMShown: e.ctwaContext?.automatedGreetingMessageShown,
            msgSource: e.ctwaContext?.sourceApp,
            msgSubtype: e.subtype,
            msgType: e.type
        })) {
            return false;
        }
        const r = o("WAWebFrontendMsgGetters").getChat(e);
        if (o("WAWebChatGetters").getIsBroadcast(r)) {
            return false;
        }
        return !o("WAWebChatGetters").getIsNewsletter(r) || ne(e);
    }
    l.isWamoMsg = f;
    l.canWamoSubMsgBeSharedByUser = g;
    l.canWamoSubBeSharedInChat = h;
    l.canForwardMsgToChat = y;
    l.allowedChatOrContactForForwarding = S;
    l.hasRetrievableMedia = R;
    l.isForwardedAsMedia = L;
    l.canForwardMsg = k;
    l.isForwardablePsaMsg = x;
    l.canQuickForwardMsg = $;
    l.canStarMsg = P;
    l.canPinMsg = N;
    l.isBizAiAgentTextEditOpportunity = A;
    l.shouldCoachAgentEdit = F;
    l.shouldDeliverAgentEditToRecipient = O;
    l.canDeliverEditProtocolMessage = B;
    l.canReportToAdmin = G;
    l.displayTypeSupportsEditing = Q;
    l.canEnterEditingFlow = X;
    l.canShowMsgEditAction = Y;
    l.canEditText = J;
    l.canEditCaption = Z;
    l.canReportMsg = ee;
    l.isNewsletterMsgOnServer = te;
    l.canRevokeNewsletterMsg = ne;
    l.canCopyNewsletterMessageLink = re;
    l.canEmbedNewsletterMessage = oe;
    l.canAddPaidPartnershipLabelToMsg = ae;
    l.canAddAiContentLabelToMsg = ie;
    l.canSenderRevokeMsg = ce;
    l.canAdminRevokeMsg = de;
    l.canBotResponseBeRevokeByInvoker = me;
    l.canDeleteMsg = pe;
}, 98);