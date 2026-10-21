__d("WAWebFrontendMsgGetters", [
    "WABidi",
    "WALogger",
    "WAWebAck",
    "WAWebAnimatedEmojiAssetLoader",
    "WAWebBizSystemMsgSubtypes",
    "WAWebChatCollection",
    "WAWebChatGroupUtils",
    "WAWebCommonMsgUtils",
    "WAWebEmoji",
    "WAWebFormatNfmText",
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebL10N",
    "WAWebLinkify",
    "WAWebMessageAssociation.flow",
    "WAWebMsgDataUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgModelUtils",
    "WAWebMsgType",
    "WAWebNewsletterCollection",
    "WAWebNewsletterGatingUtils",
    "WAWebOrderStatus",
    "WAWebProductCatalogCatalogConstants",
    "WAWebProtobufsAICommon.pb",
    "WAWebStickerPremiumStatus",
    "WAWebStringTruncation",
    "WAWebTemplateButtonSubtype",
    "WAWebUserPrefsMeUser",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = o("WAWebGetters").createGetterFactories({
        root: (u = o("WAWebMsgGetters")).getMsgUnsafe,
        createCache: o("WAWebGettersCaches").createFrontendMessagesCache
    });
    const { clearCacheFor, computed, field } = c;
    const _ = clearCacheFor;
    const f = computed(function([t, n, headerType, interactiveHeader]) {
        return o("WAWebMsgModelUtils").typeIsMms({
            type: t,
            subtype: n,
            headerType,
            interactiveHeader
        });
    }, [
        u.getType,
        u.getSubtype,
        u.getHeaderType,
        u.getInteractiveHeader
    ]);
    const g = computed(function([t, n, r]) {
        return t != null && t < o("WAWebAck").ACK.SENT && n && r;
    }, [
        u.getAck,
        f,
        u.getIsSentByMe
    ]);
    const h = computed(function([t, n, r]) {
        const a = o("WAWebMsgDataUtils").eventTypeFromMsgType(t);
        if (r) {
            if (n) {
                if (a === o("WAWebCommonMsgUtils").EventType.IGNORE) {
                    return o("WAWebCommonMsgUtils").EventType.IGNORE;
                }
                return o("WAWebCommonMsgUtils").EventType.NOTEWORTHY;
            }
            return a;
        }
        return o("WAWebCommonMsgUtils").EventType.IGNORE;
    }, [
        u.getMsgUnsafe,
        u.getInvis,
        u.getIsNewMsg
    ]);
    const y = (t)=>{
        switch(t.type){
            case "interactive":
                if (o("WAWebMsgGetters").getNativeFlowName(t) != null) {
                    return o("WAWebFormatNfmText").formatNFMText(t);
                }
                return o("WAWebMsgGetters").getCaption(t);
            case "native_flow":
                return o("WAWebFormatNfmText").formatNFMText(t);
        }
        return null;
    };
    const C = computed(function([t, n, r, a, i, l, s, u, c, d, m, p, _, f, g, h, C]) {
        if ((d || m) && !o("WAWebOrderStatus").hasOrderStatusButton(t)) {
            if (n === o("WAWebMsgType").MSG_TYPE.CHAT) {
                return a;
            }
            return i;
        }
        switch(n){
            case "chat":
            case "interactive_response":
            case "automated_greeting_message":
                return a;
            case "image":
            case "video":
            case "ptv":
            case "document":
            case "sticker-pack":
                return i;
            case "location":
                if (s) {
                    return l;
                }
                return undefined;
            case "payment":
                return u?.body;
            case "groups_v4_invite":
                return l;
            case "list":
                return p?.description;
            case "product":
                return o("WAWebStringTruncation").truncateAtCodepoints(r, o("WAWebProductCatalogCatalogConstants").MAX_REPLY_PRODUCT_TITLE_LENGTH);
            case "hsm":
                return a;
            case "template_button_reply":
                return a;
            case "interactive":
                {
                    if (_ != null) {
                        return y(t);
                    }
                    if (i != null && i !== "") {
                        return i;
                    }
                    return o("WAWebMsgGetters").getBloksWidget(t)?.fallback ?? i;
                }
            case "native_flow":
                return y(t);
            case "poll_creation":
            case "poll_result_snapshot":
                return c;
            case "newsletter_admin_invite":
                return f?.inviteMessage;
            case "newsletter_follower_invite":
                return g?.inviteMessage;
            case "event_creation":
                return h;
            case "quarantined":
                return C;
            default:
                return;
        }
    }, [
        u.getMsgUnsafe,
        u.getType,
        u.getTitle,
        u.getBody,
        u.getCaption,
        u.getComment,
        u.getIsLive,
        u.getPaymentNoteMsg,
        u.getPollName,
        u.getIsFromTemplate,
        u.getIsDynamicReplyButtonsMsg,
        u.getList,
        u.getNativeFlowName,
        u.getNewsletterAdminInviteInfo,
        u.getNewsletterFollowerInviteInfo,
        u.getEventName,
        u.getQuarantineExtractedText
    ]);
    const b = computed(function([t, n]) {
        if (t == null) {
            return [];
        }
        return o("WAWebLinkify").findLinks(t, false, n);
    }, [
        C,
        u.getSender
    ]);
    const v = computed(function([o]) {
        const a = o?.newsletterId;
        if (a == null) {
            return false;
        }
        const i = r("WAWebNewsletterCollection").get(a)?.newsletterMetadata;
        return (i?.iAmAdmin() ?? false) && !(i != null && i.iAmOwner());
    }, [
        u.getNewsletterAdminInviteInfo
    ]);
    const S = computed(function([t, n, r, a]) {
        if (t === o("WAWebMsgType").MSG_TYPE.VCARD) {
            if (n) {
                return o("WABidi").bidiDir(n);
            }
            return undefined;
        }
        if (r != null) {
            const i = a != null && a.length ? r.replace(/@\d+@g.us/, "") : r;
            const l = o("WABidi").bidiDir(i);
            return l;
        }
    }, [
        u.getType,
        u.getSubtype,
        C,
        u.getGroupMentions
    ]);
    const R = computed(function([t]) {
        return t === "rtl" || t === undefined && r("WAWebL10N").isRTL();
    }, [
        S
    ]);
    const L = computed(function([t, n, r]) {
        if (t === o("WAWebMsgType").MSG_TYPE.VCARD) {
            if (n) {
                return o("WABidi").bidiDir(n) === "rtl";
            }
            return false;
        }
        return r != null && r !== "" && o("WABidi").bidiDir(r) === "rtl";
    }, [
        u.getType,
        u.getSubtype,
        C
    ]);
    const E = computed(function([t, n]) {
        return t != null || n != null;
    }, [
        C,
        u.getFooter
    ]);
    const k = (t)=>{
        if (o("WAWebMsgGetters").getIsNewsletterMsg(t)) {
            return r("WAWebNewsletterCollection");
        }
        return o("WAWebChatCollection").ChatCollection;
    };
    function I(e) {
        let ChatCollection = o("WAWebChatCollection").ChatCollection;
        if (o("WAWebMsgGetters").getIsNewsletterMsg(e)) {
            ChatCollection = r("WAWebNewsletterCollection");
        }
        return r("nullthrows")(ChatCollection.get(r("WAWebMsgKey").from(e.id).remote));
    }
    const T = function(t) {
        return $(r("WAWebMsgKey").from(t.id), o("WAWebMsgGetters").getIsNewsletterMsg(t), t.type);
    };
    const D = function(t) {
        return k(t).get(r("WAWebMsgKey").from(t.id).remote);
    };
    function x(e, t) {
        const n = t ? r("WAWebNewsletterCollection") : o("WAWebChatCollection").ChatCollection;
        return n.get(e.remote);
    }
    function $(t, n, r) {
        const a = x(t, n);
        if (a == null) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "getChat: msgKey = ",
                ", type = ",
                ""
            ])), t.toString(), r ?? "unknown");
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "getChat: unexpected null chat"
            ]))).sendLogs("get-chat-unexpected-null");
        }
        return a;
    }
    const P = field("sharableEventInviteTitle", {
        default: ""
    });
    const N = field("sharableEventInviteStartTime");
    const M = field("sharableEventInviteEndTime");
    const w = field("sharableEventInviteCaption");
    const A = field("sharableEventInviteIsCanceled");
    const F = field("sharableEventInviteJpegThumbnail");
    const O = field("sharableEventInviteCallLink");
    const B = field("carouselCards");
    const W = computed(function([t]) {
        if (t == null) {
            return null;
        }
        return t.slice();
    }, [
        B
    ]);
    const q = field("buttons");
    const U = computed(function([t, n]) {
        return t && n != null && n.length > 0;
    }, [
        u.getIsFromTemplate,
        q
    ]);
    const V = computed(function([t, n]) {
        if (!t || n == null) {
            return false;
        }
        const r = n.at(0);
        if (r == null) {
            return false;
        }
        return r.subtype === o("WAWebTemplateButtonSubtype").TEMPLATE_BUTTON_SUBTYPE.QUICK_REPLY;
    }, [
        U,
        q
    ]);
    const H = computed(function([t]) {
        return t;
    }, [
        u.getMsgUnsafe
    ]);
    const G = computed(function([t]) {
        if (t.type === o("WAWebMsgType").MSG_TYPE.PRODUCT && t.id && t.id.id.startsWith(o("WAWebBizSystemMsgSubtypes").PRODUCT_INQUIRY_TYPE)) {
            return t;
        }
        return null;
    }, [
        H,
        u.getType,
        u.getId
    ]);
    const z = computed(function([t]) {
        switch(t.type){
            case o("WAWebMsgType").MSG_TYPE.GP2:
                return t;
            default:
                return null;
        }
    }, [
        H,
        u.getType
    ]);
    const j = computed(function([t]) {
        if (t.type === o("WAWebMsgType").MSG_TYPE.BROADCAST_NOTIFICATION) {
            return t;
        }
        return null;
    }, [
        H,
        u.getType
    ]);
    const K = computed(function([t]) {
        if (t.type === "product") {
            return t;
        }
        return null;
    }, [
        H,
        u.getType
    ]);
    const Q = computed(function([t]) {
        if (t.type === o("WAWebMsgType").MSG_TYPE.REVOKED) {
            return t;
        }
        return null;
    }, [
        H,
        u.getType
    ]);
    const X = computed(function([t, n, r]) {
        return !t && !n && !r;
    }, [
        u.getIsForwarded,
        Q,
        u.getIsReply
    ]);
    const Y = computed(function([t, n]) {
        return t > 0 && !n;
    }, [
        u.getNumTimesForwarded,
        Q
    ]);
    const J = field("associationType");
    const Z = computed(function([t, n, r, a, i, l, s, u, c, d, m, p, _]) {
        if ((t.type === o("WAWebMsgType").MSG_TYPE.IMAGE || t.type === o("WAWebMsgType").MSG_TYPE.VIDEO && t.isGif !== true) && !r && !l && !p && !_ && !(c !== o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_ALBUM && c !== o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_POLL && (a != null || u)) && !d && !m) {
            return t;
        }
        return null;
    }, [
        H,
        u.getType,
        u.getIsNotification,
        u.getCaption,
        u.getIsForwarded,
        Q,
        u.getIsGif,
        u.getQuotedMsg,
        J,
        u.getCtwaContext,
        u.getIsViewOnce,
        u.getIsQuestion,
        u.getQuestionReplyQuotedMessage
    ]);
    const ee = computed(function([t, n]) {
        return o("WAWebMsgModelUtils").notRefiningTypeIsUrl({
            type: t,
            subtype: n
        });
    }, [
        u.getType,
        u.getSubtype
    ]);
    const te = computed(function([t, n, r, a]) {
        if (r) {
            return null;
        }
        switch(t.type){
            case o("WAWebMsgType").MSG_TYPE.IMAGE:
            case o("WAWebMsgType").MSG_TYPE.STICKER:
            case o("WAWebMsgType").MSG_TYPE.AUDIO:
            case o("WAWebMsgType").MSG_TYPE.PTT:
            case o("WAWebMsgType").MSG_TYPE.VIDEO:
            case o("WAWebMsgType").MSG_TYPE.PTV:
            case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
                return t;
        }
        if (a) {
            return t;
        }
        return null;
    }, [
        H,
        u.getType,
        u.getIsViewOnce,
        ee
    ]);
    const ne = computed(function([t, n, r, a, i, l, s, u, c]) {
        const d = T(t.unsafe());
        if (t.type === o("WAWebMsgType").MSG_TYPE.STICKER && !r && !a && !i && !l && !s && (!(c && o("WAWebNewsletterGatingUtils").isStickerForwardedAttributionEnabled()) || !u) && !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(d) && !(t.isLottie === true && t.unsafe().stickerPremiumStatus === o("WAWebStickerPremiumStatus").StickerPremiumStatus.PREMIUM)) {
            return t;
        }
        return null;
    }, [
        H,
        u.getType,
        u.getIsNotification,
        Q,
        u.getQuotedMsg,
        u.getCtwaContext,
        u.getIsNewsletterMsg,
        u.getIsForwarded,
        u.getHasOriginatedFromNewsletter
    ]);
    const re = computed(function([t, n]) {
        if (t.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT) {
            return t;
        }
        return null;
    }, [
        H,
        u.getType
    ]);
    const oe = computed(function([t, n]) {
        if (t.type === o("WAWebMsgType").MSG_TYPE.IMAGE) {
            return t;
        }
        return null;
    }, [
        H,
        u.getType
    ]);
    const ae = computed(function([t, n]) {
        if (t.type === o("WAWebMsgType").MSG_TYPE.VIDEO) {
            return t;
        }
        return null;
    }, [
        H,
        u.getType
    ]);
    const ie = computed(function([t, n]) {
        if (t.type === o("WAWebMsgType").MSG_TYPE.AUDIO) {
            return t;
        }
        return null;
    }, [
        H,
        u.getType
    ]);
    const le = computed(function([t, n]) {
        if (t.type === o("WAWebMsgType").MSG_TYPE.PTT) {
            return t;
        }
        return null;
    }, [
        H,
        u.getType
    ]);
    const se = computed(function([t, n]) {
        if (t.type === o("WAWebMsgType").MSG_TYPE.PTV) {
            return t;
        }
        return null;
    }, [
        H,
        u.getType
    ]);
    const ue = computed(function([t, n]) {
        if (t.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION) {
            return t;
        }
        return null;
    }, [
        H,
        u.getType
    ]);
    const ce = computed(function([t, n]) {
        if (t.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION || t.type === o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT) {
            return t;
        }
        return null;
    }, [
        H,
        u.getType
    ]);
    const de = computed(function([t, n]) {
        if (t.type === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION) {
            return t;
        }
        return null;
    }, [
        H,
        u.getType
    ]);
    const me = computed(function([t, n]) {
        if (t.type === o("WAWebMsgType").MSG_TYPE.SHARABLE_EVENT_INVITE) {
            return t;
        }
        return null;
    }, [
        H,
        u.getType
    ]);
    const pe = computed(function([t, n]) {
        if (t.type === o("WAWebMsgType").MSG_TYPE.ALBUM) {
            return t;
        }
        return null;
    }, [
        H,
        u.getType
    ]);
    const _e = computed(function([t, n]) {
        if (t.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK) {
            return t;
        }
        return null;
    }, [
        H,
        u.getType
    ]);
    const fe = computed(function([t, n]) {
        if (t.type === o("WAWebMsgType").MSG_TYPE.CALL_LOG) {
            return t;
        }
        return null;
    }, [
        H,
        u.getType
    ]);
    const ge = computed(function([t, n]) {
        if (o("WAWebMsgModelUtils").typeIsMms(t)) {
            return t;
        }
        return null;
    }, [
        H,
        u.getType
    ]);
    const he = computed(function([t, n, r]) {
        if (o("WAWebMsgModelUtils").typeIsUrl(t)) {
            return t;
        }
        return null;
    }, [
        H,
        u.getType,
        u.getSubtype
    ]);
    const ye = computed(function([t, n]) {
        if (t.type === o("WAWebMsgType").MSG_TYPE.IMAGE || t.type === o("WAWebMsgType").MSG_TYPE.VIDEO) {
            return t;
        }
        return null;
    }, [
        H,
        u.getType
    ]);
    const Ce = computed(function([t, n, r, o]) {
        if ((n != null || r != null) && o) {
            return n ?? r;
        }
        return null;
    }, [
        u.getType,
        ye,
        le,
        u.getIsViewOnce
    ]);
    const be = computed(function([t, n, r, a]) {
        if (t.type === o("WAWebMsgType").MSG_TYPE.PTT || t.type === o("WAWebMsgType").MSG_TYPE.AUDIO && a && r != null) {
            return t;
        }
        return null;
    }, [
        H,
        u.getType,
        u.getWaveform,
        u.getIsOpus
    ]);
    const ve = field("senderObj");
    const Se = field("rowId");
    const Re = field("unifiedResponseRawData");
    const Le = field("botSignatureVerificationMetadata");
    const Ee = field("latestEditSenderTimestampMs");
    const ke = field("mediaData");
    const Ie = field("botGroupParticipant");
    const Te = field("reporterJidList");
    const De = field("status");
    const xe = field("dashManifestUrl");
    const $e = field("stickers");
    const Pe = field("replyButtons");
    const Ne = field("pendingDeleteForMe", {
        default: false
    });
    const Me = field("isFadingOut", {
        default: false
    });
    const we = field("botPluginType");
    const Ae = computed(function([n, r, a]) {
        if (a?.id?.isBot() && (r === o("WAWebProtobufsAICommon.pb").BotPluginMetadata$PluginType.SEARCH || r === o("WAWebProtobufsAICommon.pb").BotPluginMetadata$PluginType.REELS)) {
            return n;
        }
        return null;
    }, [
        H,
        we,
        ve
    ]);
    const Fe = computed(function([t, n, r]) {
        if (t.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE && r != null) {
            return t;
        }
        return null;
    }, [
        H,
        u.getType,
        u.getRichResponse
    ]);
    const Oe = computed(function([t, n]) {
        return o("WAWebMsgModelUtils").isAnimatedEmoji(t, n);
    }, [
        u.getBody,
        u.getType
    ]);
    const Be = computed(function([t, n]) {
        return o("WAWebMsgModelUtils").isSingleEmojiMessageText(t, n);
    }, [
        u.getBody,
        u.getType
    ]);
    const We = computed(function([t, n, r]) {
        const a = r != null;
        return t === o("WAWebMsgType").MSG_TYPE.CHAT && (n || a);
    }, [
        u.getType,
        Oe,
        Be
    ]);
    const qe = computed(function([t, n, r, a, i, l, s, u]) {
        const c = r != null || u != null;
        if (t === o("WAWebMsgType").MSG_TYPE.STICKER) {
            return !c && !n && !(l && i && o("WAWebNewsletterGatingUtils").isStickerForwardedAttributionEnabled()) && !s;
        }
        if (t === o("WAWebMsgType").MSG_TYPE.CHAT) {
            return !c && a && !s;
        }
        if (t === o("WAWebMsgType").MSG_TYPE.MUSIC) {
            return !c && !s;
        }
        if (t === o("WAWebMsgType").MSG_TYPE.PTV) {
            return u == null && !s;
        }
        return false;
    }, [
        u.getType,
        u.getCtwaContext,
        u.getQuotedMsg,
        We,
        u.getHasOriginatedFromNewsletter,
        u.getIsForwarded,
        u.getIsQuestion,
        u.getQuestionReplyQuotedMessage
    ]);
    const Ue = computed(function([t]) {
        if (t != null) {
            const n = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(t);
            if (n != null) {
                return o("WAWebAnimatedEmojiAssetLoader").getAnimatedEmojiAsset(n);
            }
        }
    }, [
        u.getBody
    ]);
    const Ve = computed(function([t, n, r, o]) {
        let a;
        if (t) {
            a = n?.newsletterId ?? r.remote;
        }
        return a ?? o.id;
    }, [
        u.getHasOriginatedFromNewsletter,
        u.getForwardedNewsletterMessageInfo,
        u.getId,
        ve
    ]);
    const He = computed(function([t, n]) {
        return !t && o("WAWebUserPrefsMeUser").isMeAccount(n);
    }, [
        u.getIsNewsletterMsg,
        u.getSender
    ]);
    const Ge = computed(function([t, n, r]) {
        const o = D(t.unsafe());
        let a;
        if (n) {
            a = o?.contact;
        }
        return a ?? r;
    }, [
        H,
        u.getIsNewsletterMsg,
        ve
    ]);
    l.clearFrontendMsgGetterCacheFor = _;
    l.getIsMms = f;
    l.getIsUnsentMedia = g;
    l.getEventType = h;
    l.getText = C;
    l.getLinksInFullText = b;
    l.getIsNewsletterInviteAccepted = v;
    l.getDir = S;
    l.getIsRTL = R;
    l.getRtl = L;
    l.getHasBodyOrFooter = E;
    l.getCurrentChat = I;
    l.getChat = T;
    l.getMaybeChat = D;
    l.getMaybeChatByMsgKey = x;
    l.getChatByMsgKey = $;
    l.getSharableEventInviteTitle = P;
    l.getSharableEventInviteStartTime = N;
    l.getSharableEventInviteEndTime = M;
    l.getSharableEventInviteCaption = w;
    l.getSharableEventInviteIsCanceled = A;
    l.getSharableEventInviteJpegThumbnail = F;
    l.getSharableEventInviteCallLink = O;
    l.getCarouselCards = W;
    l.getButtons = q;
    l.getHasTemplateButtons = U;
    l.getIsQuickReply = V;
    l.getSafeMsg = H;
    l.getAsProductInquiry = G;
    l.getAsGroupNotification = z;
    l.getAsBroadcastNotification = j;
    l.getAsProduct = K;
    l.getAsRevoked = Q;
    l.getIsMemberLabelEligible = X;
    l.getShouldShowForwarded = Y;
    l.getAsAlbumAsset = Z;
    l.getIsUrlMessage = ee;
    l.getAsAutoDownloadableMedia = te;
    l.getAsGroupedSticker = ne;
    l.getAsDoc = re;
    l.getAsImage = oe;
    l.getAsVideo = ae;
    l.getAsAudio = ie;
    l.getAsPtt = le;
    l.getAsPtv = se;
    l.getAsPollCreation = ue;
    l.getAsPoll = ce;
    l.getAsEventCreation = de;
    l.getAsSharableEventInvite = me;
    l.getAsAlbum = pe;
    l.getAsStickerPack = _e;
    l.getAsCallLog = fe;
    l.getAsMms = ge;
    l.getAsUrl = he;
    l.getAsVisualMedia = ye;
    l.getAsViewOnce = Ce;
    l.getAsPttLike = be;
    l.getSenderObj = ve;
    l.getRowId = Se;
    l.getUnifiedResponseRawData = Re;
    l.getBotSignatureVerificationMetadata = Le;
    l.getLatestEditSenderTimestampMs = Ee;
    l.getMediaData = ke;
    l.getBotGroupParticipant = Ie;
    l.getReporterJidList = Te;
    l.getOrderStatus = De;
    l.getDashManifestUrl = xe;
    l.getStickers = $e;
    l.getReplyButtons = Pe;
    l.getPendingDeleteForMe = Ne;
    l.getIsFadingOut = Me;
    l.getAsBotPluginCarouselMsg = Ae;
    l.getAsRichResponse = Fe;
    l.getIsAnimatedEmoji = Oe;
    l.getIsSingleEmoji = Be;
    l.getIsTransparentMsgEmoji = We;
    l.getIsTransparentMsg = qe;
    l.getJSONAssetForAnimatedEmoji = Ue;
    l.getMsgSenderId = Ve;
    l.getShouldDisplaySelf = He;
    l.getSenderForReplyMsg = Ge;
}, 98);