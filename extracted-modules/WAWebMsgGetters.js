__d("WAWebMsgGetters", [
    "WABase64",
    "WAJids",
    "WALogger",
    "WAPhoneFindCC",
    "WATimeUtils",
    "WATypeUtils",
    "WAWebAck",
    "WAWebBizSystemMsgSubtypes",
    "WAWebBotTypes",
    "WAWebBusinessHSMTypes",
    "WAWebCallLogMsgData.flow",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2GatingUtils",
    "WAWebCommonMsgUtils",
    "WAWebEphemeralConstants",
    "WAWebEphemeralityWAMUtils",
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebInteractiveMessageHeaderMediaType",
    "WAWebMimeTypes",
    "WAWebMsgAIProvenance",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebMusicParsingUtils",
    "WAWebNewsletterIsNewsletterMsg",
    "WAWebNonJidMentionUtils",
    "WAWebPollCreationUtils",
    "WAWebProtobufsAICommon.pb",
    "WAWebProtobufsE2E.pb",
    "WAWebProtobufsStatusAttributions.pb",
    "WAWebUserPrefsMeUser",
    "WAWebVcardParsingUtils",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebWamEnumEditType",
    "WAWebWid",
    "WAWebWidFactory",
    "countWhere",
    "gkx",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createMessagesCache
    });
    const { clearCacheFor: m, computed: p, field: _, unsafeIdentityGetter: f } = d;
    const g = m;
    const h = f;
    const y = [
        o("WAWebCallLogMsgData.flow").CallOutcome.Completed,
        o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing,
        o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere
    ];
    const C = "upi://pay";
    function b(e) {
        if (e instanceof r("WAWebWid")) {
            return e;
        }
        if (e.user != null) {
            return o("WAWebWidFactory").createUserWidOrThrow(e.user, e.server);
        }
        return e;
    }
    const v = _("type");
    const S = _("subtype");
    const R = _("id");
    const L = p(function([t]) {
        return r("WAWebMsgKey").from(t);
    }, [
        R
    ]);
    const E = _("serverId");
    const k = _("to");
    const I = _("from");
    const T = _("notifyName");
    const D = _("broadcastId");
    const x = _("qrUrl");
    const $ = p(function([t]) {
        return t != null && t.startsWith(C);
    }, [
        x
    ]);
    const P = p(function([t, n]) {
        return n ?? t.remote;
    }, [
        L,
        D
    ]);
    const N = _("viewMode");
    const M = _("author");
    const w = _("metaFrom");
    const A = _("senderWithDevice");
    const F = _("ack");
    const O = _("isScheduledMsg");
    const B = _("viewCount");
    const W = _("forwardsCount");
    const q = _("viewed");
    const U = _("originalSelfAuthor");
    const V = _("kicState");
    const H = _("kicTimestampMs");
    const G = _("list");
    const z = _("latestEditMsgKey");
    const j = _("ephemeralDuration");
    const K = _("afterReadDuration");
    const Q = _("expiredTimestamp");
    const X = _("ephemeralSettingUser");
    const Y = _("t", {
        default: 0
    });
    const J = _("clientReceivedTsMillis");
    const Z = _("backgroundColor");
    const ee = _("headerType");
    const te = _("interactiveHeader");
    const ne = _("interactiveType");
    const re = _("bloksWidget");
    const oe = _("footer");
    const ae = _("mentionedJidList");
    const ie = _("groupMentions", {
        getDefault: function() {
            return [];
        }
    });
    const le = _("quotedMsg");
    const se = _("quotedRemoteJid");
    const ue = _("quotedParticipant");
    const ce = _("rcat");
    const de = _("isViewOnce", {
        default: false
    });
    const me = _("isGif", {
        default: false
    });
    const pe = _("gifAttribution", {
        default: o("WAWebProtobufsE2E.pb").Message$VideoMessage$Attribution.NONE
    });
    const _e = _("ctwaContext");
    const fe = _("threadIds");
    const ge = _("mimetype");
    const he = _("filehash");
    const ye = _("deprecatedMms3Url");
    const Ce = _("waveform");
    const be = _("disappearingModeInitiator");
    const ve = _("disappearingModeTrigger");
    const Se = _("disappearingModeInitiatedByMe");
    const Re = _("activeBotMsgStreamingInProgress");
    const Le = _("bizBotType");
    const Ee = _("botTargetSenderJid");
    const ke = _("isSupportAIMessage");
    const Ie = _("lastBotEditBodyLength");
    const Te = _("botEditType");
    const De = _("forwardedNewsletterMessageInfo");
    const xe = _("forwardedAiBotMessageInfo");
    const $e = _("newsletterAdminInviteInfo");
    const Pe = _("newsletterFollowerInviteInfo");
    const Ne = _("isGroupStatus");
    const Me = p(function([t]) {
        return t === true;
    }, [
        Ne
    ]);
    const we = _("isNewsletterStatus", {
        default: false
    });
    const Ae = _("statusAttributions");
    function Fe(e) {
        return e?.some(function(e) {
            return e.type === o("WAWebProtobufsStatusAttributions.pb").StatusAttribution$Type.RESHARE;
        }) === true;
    }
    const Oe = p(function([t]) {
        return Fe(t);
    }, [
        Ae
    ]);
    const Be = p(function([t]) {
        return t?.some(function(e) {
            return e.type === o("WAWebProtobufsStatusAttributions.pb").StatusAttribution$Type.RESHARE && e.statusReshare?.source === o("WAWebProtobufsStatusAttributions.pb").StatusAttribution$StatusReshare$Source.CHANNEL_RESHARE;
        }) === true;
    }, [
        Ae
    ]);
    const We = _("bizSource");
    function qe(e) {
        return e === "smb_promo";
    }
    const Ue = p(function([t]) {
        return qe(t);
    }, [
        We
    ]);
    const Ve = p(function([t]) {
        return t != null;
    }, [
        le
    ]);
    const He = p(function([t]) {
        return o("WAWebMimeTypes").isOpus(t);
    }, [
        ge
    ]);
    const Ge = p(function([t]) {
        if (t == null) {
            return null;
        }
        return o("WABase64").encodeB64UrlSafe(t, true);
    }, [
        ce
    ]);
    const ze = p(function([t]) {
        if (t == null) {
            return false;
        }
        return t.some((e)=>o("WAWebUserPrefsMeUser").isMeAccount(b(e)));
    }, [
        ae
    ]);
    const je = _("local", {
        default: false
    });
    const Ke = p(function([t, n]) {
        if (t && n) {
            return o("WAWebUserPrefsMeUser").isMeAccount(b(n));
        }
        return false;
    }, [
        le,
        ue
    ]);
    const Qe = _("nonJidMentions");
    const Xe = p(function([t]) {
        return o("WAWebNonJidMentionUtils").hasMentionAll(t);
    }, [
        Qe
    ]);
    const Ye = p(function([t, n, r]) {
        return t || n || r;
    }, [
        ze,
        Ke,
        Xe
    ]);
    const Je = _("botPluginReferenceIndex");
    const Ze = p(function([t, n, r, a]) {
        if (n != null) {
            return false;
        }
        if (t === "call_log" && o("WAWebViewModeUtils").isOfflineResumeCallLogPlaceholderViewMode(r)) {
            return true;
        }
        if (!o("WAWebViewModeUtils").isViewModeVisibleInSurface(o("WAWebViewMode.flow").ViewModeSurface.CHAT, r)) {
            return false;
        }
        if (t === "protocol" && (a === "status_mention_message" || a === "status_group_mention_message")) {
            return true;
        }
        switch(t){
            case "interactive":
            case "chat":
            case "image":
            case "video":
            case "ptv":
            case "audio":
            case "ptt":
            case "document":
            case "vcard":
            case "location":
            case "ciphertext":
            case "oversized":
            case "multi_vcard":
            case "sticker":
            case "status":
            case "product":
            case "groups_v4_invite":
            case "poll_creation":
            case "poll_result_snapshot":
            case "list":
            case "newsletter_admin_invite":
            case "newsletter_follower_invite":
            case "event_creation":
            case "sharable_event_invite":
            case "sticker-pack":
            case "album":
            case "music":
            case "rich_response":
            case "automated_greeting_message":
            case "quarantined":
                return true;
            default:
                return false;
        }
    }, [
        v,
        Je,
        N,
        S
    ]);
    const et = p(function([t, n]) {
        return t.isRegularUser() && n.isRegularUser();
    }, [
        I,
        k
    ]);
    const tt = p(function([t, n]) {
        return r("WAWebWid").isGroup(t) || r("WAWebWid").isGroup(n);
    }, [
        I,
        k
    ]);
    const nt = p(function([t, n]) {
        return r("WAWebNewsletterIsNewsletterMsg")({
            from: t,
            to: n
        });
    }, [
        I,
        k
    ]);
    const rt = p(function([t, n]) {
        return t || n != null;
    }, [
        nt,
        De
    ]);
    const ot = p(function([t, n, o]) {
        return r("WAWebWid").isStatus(t.remote) || n || o;
    }, [
        L,
        Me,
        we
    ]);
    const at = p(function([t, n]) {
        return o("WAWebCommonMsgUtils").isNotificationType(t, n);
    }, [
        v,
        S
    ]);
    const it = p(function([n, r, a, i, l]) {
        if (n.self === "in" || a) {
            if (!a && n.fromMe) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "id.self='in' non-notif msg type=",
                    " sub=",
                    " id=",
                    " from=",
                    ""
                ])), i, l, n.toString(), r).sendLogs("self-in-not-notification");
            }
            return false;
        }
        if (i === "revoked") {
            return o("WAWebUserPrefsMeUser").isMeAccount(r);
        }
        return n.fromMe;
    }, [
        L,
        I,
        at,
        v,
        S
    ]);
    const lt = p(function([t, n, a, i, l, s, u, c, d]) {
        if (l || s) {
            return t.remote;
        }
        if (n) {
            if (u) {
                return o("WAWebUserPrefsMeUser").getMeUserOrThrow();
            }
            if (c instanceof r("WAWebWid")) {
                return c;
            }
            return null;
        }
        const m = a || i || d instanceof r("WAWebWid") && d.isBot() ? d : c;
        if (m instanceof r("WAWebWid")) {
            return m;
        }
        return null;
    }, [
        L,
        it,
        tt,
        ot,
        Me,
        we,
        nt,
        I,
        M
    ]);
    const st = p(function([t, n, a]) {
        const i = t || n;
        if (i != null && i.isUser == null) {
            if (r("gkx")("26258")) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "non-wid originalSelfAuthorOrSender typeof=",
                    " type=",
                    ""
                ])), typeof i, a).sendLogs("non-wid-originalselfauthororsender");
            } else {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "non-wid originalSelfAuthorOrSender val=",
                    " typeof=",
                    " type=",
                    ""
                ])), String(i), typeof i, a).sendLogs("non-wid-originalselfauthororsender");
            }
        }
        if (i != null && i.isUser != null && i.isUser()) {
            return o("WAWebWidFactory").asUserWidOrThrow(i);
        }
        return null;
    }, [
        U,
        lt,
        v
    ]);
    const ut = p(function([t]) {
        return t === o("WAWebMsgType").MSG_TYPE.REACTION || t === o("WAWebMsgType").MSG_TYPE.REACTION_ENC;
    }, [
        v
    ]);
    const ct = p(function([t, n]) {
        return t === o("WAWebMsgType").MSG_TYPE.UNKNOWN || t === o("WAWebMsgType").MSG_TYPE.PAYMENT && n === "futureproof";
    }, [
        v,
        S
    ]);
    const dt = p(function([t]) {
        return t === o("WAWebMsgType").MSG_TYPE.STICKER;
    }, [
        v
    ]);
    const mt = _("isAiSticker");
    const pt = p(function([t, n]) {
        return t && n === true;
    }, [
        dt,
        mt
    ]);
    const _t = _("isCarouselCard", {
        default: false
    });
    const ft = p(function([t]) {
        return t === o("WAWebMsgType").MSG_TYPE.DOCUMENT;
    }, [
        v
    ]);
    const gt = p(function([t, n, r]) {
        return !t && !n && !r;
    }, [
        de,
        dt,
        ft
    ]);
    const ht = p(function([t]) {
        return t === o("WAWebEphemeralConstants").KeepInChatState.KEPT;
    }, [
        V
    ]);
    const yt = p(function([t]) {
        return t === o("WAWebEphemeralConstants").KeepInChatState.UNKEPT;
    }, [
        V
    ]);
    const Ct = p(function([t]) {
        return r("WAWebWid").isPSA(t.remote);
    }, [
        L
    ]);
    const bt = p(function([t]) {
        return r("WAWebWid").isIAS(t.remote);
    }, [
        L
    ]);
    const vt = p(function([t]) {
        return r("WAWebWid").isAiHub(t.remote);
    }, [
        L
    ]);
    const St = p(function([t]) {
        return r("WAWebWid").isCAPISupportAccount(t.remote);
    }, [
        L
    ]);
    const Rt = p(function([t, n]) {
        return t === o("WAWebMsgType").MSG_TYPE.LIST && n?.listType === o("WAWebProtobufsE2E.pb").Message$ListMessage$ListType.PRODUCT_LIST;
    }, [
        v,
        G
    ]);
    const Lt = _("title");
    const Et = _("body", {
        default: ""
    });
    const kt = _("caption");
    const It = _("comment");
    const Tt = _("pollName", {
        default: ""
    });
    const Dt = _("pollOptions");
    const xt = p(function([t]) {
        return t?.some(function(e) {
            return e.addOptionMsgKey != null;
        }) === true;
    }, [
        Dt
    ]);
    const $t = _("pollSelectableOptionsCount", {
        default: 0
    });
    const Pt = _("pollInvalidated", {
        default: false
    });
    const Nt = _("pollType", {
        default: o("WAWebPollCreationUtils").PollType.POLL
    });
    const Mt = _("correctOptionIndex");
    const wt = _("pollEndTime");
    const At = _("pollHideVoterNames");
    const Ft = _("pollVotesSnapshot");
    const Ot = _("quarantineExtractedText");
    const Bt = _("eventName", {
        default: ""
    });
    const Wt = _("eventDescription");
    const qt = _("eventStartTime", {
        default: 0
    });
    const Ut = _("eventEndTime");
    const Vt = _("eventJoinLink");
    const Ht = _("eventLocation");
    const Gt = _("isEventCanceled", {
        default: false
    });
    const zt = _("eventInvalidated", {
        default: false
    });
    const jt = _("eventIsScheduledCall", {
        default: false
    });
    const Kt = _("nativeFlowName");
    const Qt = _("nativeFlowButtons");
    const Xt = _("interactivePayload");
    const Yt = _("galaxyFlowDisabled", {
        default: false
    });
    const Jt = _("signupCtaTapped", {
        default: false
    });
    const Zt = _("paymentCurrency", {
        default: ""
    });
    const en = _("paymentAmount1000", {
        default: 0
    });
    const tn = _("paymentMessageReceiverJid");
    const nn = _("paymentStatus");
    const rn = _("paymentTxnStatus");
    const on = _("paymentNoteMsg");
    const an = _("paymentExpiryTimestamp");
    const ln = _("paymentInviteServiceType");
    const sn = _("isFromTemplate", {
        default: false
    });
    const un = _("isLive", {
        default: false
    });
    const cn = _("isDynamicReplyButtonsMsg", {
        default: false
    });
    const dn = _("dynamicReplyButtons");
    const mn = p(function([t, n, r]) {
        if (t === o("WAWebMsgType").MSG_TYPE.PROTOCOL && n === "ephemeral_setting") {
            return false;
        }
        return r != null && r !== 0;
    }, [
        v,
        S,
        j
    ]);
    const pn = p(function([t]) {
        return t != null;
    }, [
        z
    ]);
    const _n = p(function([t, n]) {
        return t === o("WAWebMsgType").MSG_TYPE.PROTOCOL && n === "message_edit";
    }, [
        v,
        S
    ]);
    const fn = p(function([t, n]) {
        if (!t) {
            return null;
        }
        const r = "rgba(86, 150, 255, 255)";
        const o = n;
        if (o == null || o === 0) {
            return r;
        }
        const a = o >> 24 & 255;
        const i = o >> 16 & 255;
        const l = o >> 8 & 255;
        const s = o & 255;
        return `rgba(${i}, ${l}, ${s}, ${a})`;
    }, [
        ot,
        Z
    ]);
    const gn = p(function([t]) {
        switch(t){
            case "protocol":
            case "chat":
            case "location":
            case "vcard":
            case "multi_vcard":
            case "image":
            case "video":
            case "ptv":
            case "audio":
            case "ptt":
            case "document":
            case "sticker":
            case "status":
            case "product":
            case "groups_v4_invite":
            case "order":
            case "poll_creation":
            case "poll_result_snapshot":
            case "newsletter_admin_invite":
            case "newsletter_follower_invite":
            case "comment":
            case "event_creation":
            case "sharable_event_invite":
            case "sticker-pack":
            case "album":
            case "music":
            case "rich_response":
            case "newsletter_question_response":
            case "quarantined":
            case "poll_add_option_decrypted":
                return true;
            default:
                return false;
        }
    }, [
        v
    ]);
    const hn = p(function([t, n, r]) {
        return t.fromMe && n && r;
    }, [
        L,
        je,
        gn
    ]);
    const yn = _("revokeSender");
    const Cn = p(function([t]) {
        return t != null && o("WAWebUserPrefsMeUser").isMeAccount(t);
    }, [
        yn
    ]);
    const bn = p(function([t, n, r]) {
        const a = t.fromMe;
        const i = a ? n?.toString({
            legacy: true
        }) : r?.toString({
            legacy: true
        });
        const l = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
        const s = l?.toString({
            legacy: true
        });
        if (i && s != null) {
            const u = o("WAJids").interpretAndValidateJid(i);
            const d = o("WAJids").interpretAndValidateJid(s);
            return u.jidType === "phoneUser" && d.jidType === "phoneUser" && o("WAPhoneFindCC").phoneCC(u.userJid) !== o("WAPhoneFindCC").phoneCC(d.userJid);
        }
        o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
            "Msg: isInternational derivation failed, missing data"
        ])));
        return false;
    }, [
        L,
        k,
        I
    ]);
    const vn = p(function([t, n]) {
        if (t === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE) {
            if (o("WAWebBizSystemMsgSubtypes").BIZ_SYSTEM_MSG_SUBTYPES.includes(n) || o("WAWebBizSystemMsgSubtypes").BIZ_SYSTEM_MSG_SUBTYPES_V2.includes(n)) {
                return true;
            }
            switch(n){
                case "verified_initial_unknown":
                case "verified_initial_low":
                case "verified_initial_high":
                case "verified_transition_any_to_none":
                case "verified_transition_any_to_high":
                case "verified_transition_high_to_low":
                case "verified_transition_high_to_unknown":
                case "verified_transition_unknown_to_low":
                case "verified_transition_low_to_unknown":
                case "verified_transition_none_to_low":
                case "verified_transition_none_to_unknown":
                case "biz_verified_transition_top_to_bottom":
                case "biz_verified_transition_bottom_to_top":
                case "biz_intro_top":
                case "biz_intro_bottom":
                case "biz_name_change":
                case "biz_move_to_consumer_app":
                case "biz_two_tier_migration_top":
                case "biz_two_tier_migration_bottom":
                    return true;
                default:
                    return false;
            }
        }
        return false;
    }, [
        v,
        S
    ]);
    const Sn = p(function([t, n]) {
        switch(t){
            case "image":
            case "video":
            case "audio":
            case "sticker-pack":
                return true;
            case "interactive":
                if (n == null) {
                    return false;
                }
                return n.mediaType === o("WAWebInteractiveMessageHeaderMediaType").InteractiveMessageHeaderMediaType.IMAGE || n.mediaType === o("WAWebInteractiveMessageHeaderMediaType").InteractiveMessageHeaderMediaType.VIDEO;
            default:
                return false;
        }
    }, [
        v,
        te
    ]);
    const Rn = _("isForwarded", {
        default: false
    });
    const Ln = _("forwardingScore");
    const En = p(function([t, n]) {
        if (n == null) {
            if (t) {
                return 1;
            }
            return 0;
        }
        return n || 0;
    }, [
        Rn,
        Ln
    ]);
    const kn = 127;
    const In = p(function([t]) {
        return t >= kn;
    }, [
        En
    ]);
    const Tn = _("isQuestion", {
        default: false
    });
    const Dn = _("isSpoiler", {
        default: false
    });
    const xn = _("questionResponsesCount");
    const $n = _("readQuestionResponsesCount");
    const Pn = p(function([t, n]) {
        return t - n;
    }, [
        xn,
        $n
    ]);
    const Nn = _("questionReplyQuotedMessage");
    const Mn = p(function([t]) {
        return t != null;
    }, [
        Nn
    ]);
    const wn = _("newsletterAdminProfile");
    const An = p(function([t, n]) {
        return t.fromMe && n != null && n.some((e)=>e.isBot());
    }, [
        L,
        ae
    ]);
    const Fn = p(function([t, n, r, o]) {
        return t || n || o || !r;
    }, [
        Rn,
        rt,
        it,
        An
    ]);
    const On = _("invis", {
        default: false
    });
    const Bn = _("isNewMsg", {
        default: false
    });
    const Wn = _("isSendFailure", {
        default: false
    });
    const qn = p(function([t, n, r]) {
        return t && n != null && n < o("WAWebAck").ACK.CLOCK || r;
    }, [
        it,
        F,
        Wn
    ]);
    const Un = p(function([t, n]) {
        if (t === o("WAWebMsgType").MSG_TYPE.VCARD) {
            try {
                return o("WAWebVcardParsingUtils").parseVcard(n);
            } catch (e) {
                return;
            }
        }
    }, [
        v,
        Et
    ]);
    const Vn = _("description");
    const Hn = _("matchedText", {
        default: ""
    });
    const Gn = _("thumbnail");
    const zn = _("thumbnailHQ");
    const jn = _("musicArtwork");
    const Kn = _("musicData");
    const Qn = _("richPreviewType", {
        default: o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$PreviewType.NONE
    });
    const Xn = _("paymentLinkMetadata", {
        default: null
    });
    const Yn = _("faviconMMSMetadata", {
        default: null
    });
    const Jn = p(function([n]) {
        const r = n?.provider?.paramsJson;
        if (r == null) {
            return null;
        }
        try {
            let u = null;
            const c = JSON.parse(r);
            if (c?.meta_tags?.is_business_verified != null) {
                u = babelHelpers.extends({}, u, {
                    isBusinessVerified: c?.meta_tags?.is_business_verified
                });
            }
            const m = c?.meta_tags?.provider_name?.trim();
            if (m != null && m.length > 0) {
                u = babelHelpers.extends({}, u, {
                    providerName: m
                });
            }
            if (c?.meta_tags?.amount != null && c?.meta_tags?.offset != null && c?.meta_tags?.currency != null) {
                u = babelHelpers.extends({}, u, {
                    amount: c.meta_tags.amount,
                    offset: c.meta_tags.offset,
                    currency: c.meta_tags.currency
                });
            }
            return u;
        } catch (e) {
            return null;
        }
    }, [
        Xn
    ]);
    const Zn = p(function([t]) {
        return t?.isBusinessVerified === true && t?.providerName != null;
    }, [
        Jn
    ]);
    const er = p(function([t, n, a, i]) {
        return o("WATypeUtils").isString(i) && (!r("isStringNullOrEmpty")(n) || !r("isStringNullOrEmpty")(a)) && t != null && t.includes(i);
    }, [
        Et,
        Lt,
        Vn,
        Hn
    ]);
    const tr = p(function([t, n]) {
        return t || n;
    }, [
        cn,
        sn
    ]);
    const nr = p(function([t, n]) {
        return n || t === o("WAWebMsgType").MSG_TYPE.LIST || t === o("WAWebMsgType").MSG_TYPE.INTERACTIVE;
    }, [
        v,
        cn
    ]);
    const rr = 768;
    const or = p(function([t, n]) {
        const r = 308;
        if (n != null && n.isBot()) {
            return 1 / 0;
        }
        if (t) {
            return r;
        }
        return rr;
    }, [
        In,
        lt
    ]);
    const ar = p(function([t, n]) {
        return t === o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION && n === "encrypt" || o("WAWebBizSystemMsgSubtypes").BIZ_SYSTEM_MSG_SUBTYPES_V2_INIT.includes(n);
    }, [
        v,
        S
    ]);
    const ir = p(function([t, n]) {
        return t === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE && n === "disappearing_mode";
    }, [
        v,
        S
    ]);
    const lr = _("kicKey");
    const sr = p(function([t, n]) {
        if (t != null) {
            if (t.fromMe) {
                return o("WAWebUserPrefsMeUser").getMaybeMePnUser();
            }
            if (n && t.participant != null) {
                return o("WAWebWidFactory").asUserWidOrThrow(t.participant);
            }
            if (!n) {
                return o("WAWebWidFactory").asUserWidOrThrow(t.remote);
            }
        }
    }, [
        lr,
        tt
    ]);
    const ur = p(function([t, n, r, o]) {
        if (r === "ephemeral_setting") {
            return null;
        }
        if (o != null && o > 0) {
            return o;
        }
        if (t == null || t === 0) {
            return null;
        }
        return n + t;
    }, [
        j,
        Y,
        S,
        Q
    ]);
    const cr = p(function([t, n]) {
        return t === o("WAWebMsgType").MSG_TYPE.PROTOCOL && (n === "sender_revoke" || n === "admin_revoke") || t === o("WAWebMsgType").MSG_TYPE.REVOKED && (n === "sender" || n === "admin");
    }, [
        v,
        S
    ]);
    const dr = _("revokeDuration");
    const mr = p(function([t, n, r, a]) {
        if (r) {
            if (n === "admin_revoke" || n === "admin") {
                return o("WAWebWamEnumEditType").EDIT_TYPE.ADMIN_REVOKE;
            }
            return o("WAWebWamEnumEditType").EDIT_TYPE.SENDER_REVOKE;
        }
        const i = t === o("WAWebMsgType").MSG_TYPE.POLL_EDIT_ENCRYPTED || t === o("WAWebMsgType").MSG_TYPE.PROTOCOL && n === "poll_edit_decrypted";
        if (a || i) {
            return o("WAWebWamEnumEditType").EDIT_TYPE.EDITED;
        }
        return o("WAWebWamEnumEditType").EDIT_TYPE.NOT_EDITED;
    }, [
        v,
        S,
        cr,
        pn
    ]);
    const pr = p(function([t]) {
        if (t != null) {
            return o("WAWebEphemeralityWAMUtils").getWamDisappearingModeTrigger(t);
        }
    }, [
        ve
    ]);
    const _r = p(function([t]) {
        if (t != null) {
            return o("WAWebEphemeralityWAMUtils").getWamDisappearingModeInitiatedByMe(t);
        }
    }, [
        Se
    ]);
    const fr = p(function([t]) {
        if (t != null) {
            return o("WAWebEphemeralityWAMUtils").getWamDisappearingModeInitiator(t);
        }
    }, [
        be
    ]);
    const gr = _("inviteCode", {
        default: ""
    });
    const hr = _("inviteCodeExp", {
        default: ""
    });
    const yr = _("inviteGrp", {
        default: ""
    });
    const Cr = _("inviteGrpName");
    const br = _("inviteGrpJpegThum");
    const vr = _("inviteGrpType");
    const Sr = p(function([t, n, r]) {
        if (t !== o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE) {
            return false;
        }
        if (!n) {
            return true;
        }
        const a = Date.now() / 1000;
        return parseInt(a, 10) >= parseInt(r, 10);
    }, [
        v,
        gr,
        hr
    ]);
    const Rr = p(function([t, n]) {
        if (t !== o("WAWebMsgType").MSG_TYPE.NEWSLETTER_ADMIN_INVITE) {
            return false;
        }
        if (n == null) {
            return true;
        }
        const r = n.inviteExpiration;
        const a = o("WATimeUtils").unixTime();
        return a >= r;
    }, [
        v,
        $e
    ]);
    const Lr = _("productHeaderImageRejected", {
        default: false
    });
    const Er = p(function([r, o]) {
        if (r === true) {
            return null;
        }
        return o?.productListInfo?.headerImage?.jpegThumbnail ?? null;
    }, [
        Lr,
        G
    ]);
    const kr = p(function([t, n]) {
        return t === o("WAWebMsgType").MSG_TYPE.PTT || t === o("WAWebMsgType").MSG_TYPE.PTV || n && t === o("WAWebMsgType").MSG_TYPE.AUDIO;
    }, [
        v,
        rt
    ]);
    const Ir = _("hasReaction", {
        default: false
    });
    const Tr = _("recipients", {
        getDefault: function() {
            return [];
        }
    });
    const Dr = _("templateParams", {
        getDefault: function() {
            return [];
        }
    });
    const xr = _("clientUrl", {
        default: ""
    });
    const $r = _("loc", {
        default: ""
    });
    const Pr = _("lat");
    const Nr = _("lng");
    const Mr = _("shareDuration");
    const wr = _("finalLat");
    const Ar = _("finalLng");
    const Fr = _("star", {
        default: false
    });
    const Or = _("currencyCode");
    const Br = _("priceAmount1000");
    const Wr = _("salePriceAmount1000");
    const qr = _("isVcardOverMmsDocument", {
        default: false
    });
    const Ur = _("interactiveAnnotations");
    const Vr = p(function([t]) {
        if (t == null) {
            return null;
        }
        return t.filter((e)=>e.embeddedContent?.embeddedMusic != null);
    }, [
        Ur
    ]);
    const Hr = p(function([t]) {
        if (t == null) {
            return false;
        }
        return t.some((e)=>e.embeddedContent?.embeddedMessage != null);
    }, [
        Ur
    ]);
    const Gr = p(function([t]) {
        if (t == null) {
            return null;
        }
        return t[0];
    }, [
        Vr
    ]);
    const zr = p(function([t, n]) {
        return t && n != null && n.length > 0;
    }, [
        ot,
        Vr
    ]);
    const jr = p(function([t, n]) {
        return t && n != null;
    }, [
        nt,
        Gr
    ]);
    const Kr = p(function([t, n]) {
        return t && n;
    }, [
        ot,
        Hr
    ]);
    const Qr = p(function([n]) {
        if (n == null) {
            return null;
        }
        const r = n.embeddedContent?.embeddedMusic;
        if (r == null) {
            return null;
        }
        return o("WAWebMusicParsingUtils").toMusicMetadata(r);
    }, [
        Gr
    ]);
    const Xr = _("messageSecret");
    const Yr = _("broadcast", {
        default: false
    });
    const Jr = _("vcardList", {
        getDefault: function() {
            return [];
        }
    });
    const Zr = _("vcardFormattedName");
    const eo = _("labels", {
        getDefault: function() {
            return [];
        }
    });
    const to = _("agentId");
    const no = _("url");
    const ro = _("retailerId");
    const oo = _("businessOwnerJid");
    const ao = _("productId");
    const io = _("productImageCount");
    const lo = _("isMdHistoryMsg", {
        default: false
    });
    const so = _("campaignId");
    const uo = _("pmCampaignId");
    const co = _("filename");
    const mo = _("smbClientCampaignId");
    const po = _("isCaptionByUser", {
        default: false
    });
    const _o = _("doNotPlayInline");
    const fo = _("thumbnailDirectPath");
    const go = _("thumbnailHeight");
    const ho = _("thumbnailWidth");
    const yo = _("orderTitle");
    const Co = _("itemCount");
    const bo = _("totalAmount1000");
    const vo = _("totalCurrencyCode");
    const So = _("futureproofType");
    const Ro = _("futureproofSubtype");
    const Lo = _("ephemeralOutOfSync");
    const Eo = _("isAvatar");
    const ko = _("bizPrivacyStatus");
    const Io = _("verifiedBizName");
    const To = _("mediaKey");
    const Do = _("message", {
        default: ""
    });
    const xo = _("size", {
        default: 0
    });
    const $o = _("mediaPngThumbnail");
    const Po = _("hostedBizEncStateMismatch");
    const No = p(function([t]) {
        return t === "bot_unavailable_fanout";
    }, [
        S
    ]);
    const Mo = p(function([t]) {
        return t === "view_once_unavailable_fanout";
    }, [
        S
    ]);
    const wo = p(function([t, n]) {
        if (t.remote.isBot()) {
            return t.fromMe;
        }
        return n != null && n.some((e)=>e.isBot());
    }, [
        L,
        ae
    ]);
    const Ao = p(function([t, n]) {
        return t != null && t.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) && n != null && o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled();
    }, [
        A,
        w
    ]);
    const Fo = p(function([t, n]) {
        return !n && t === o("WAWebBotTypes").BizBotType.BIZ_1P;
    }, [
        Le,
        Ao
    ]);
    const Oo = p(function([t, n]) {
        return !t.fromMe && n;
    }, [
        L,
        Fo
    ]);
    const Bo = p(function([t, n, r]) {
        return !r && !t.fromMe && n === o("WAWebBotTypes").BizBotType.BIZ_3P;
    }, [
        L,
        Le,
        Ao
    ]);
    const Wo = _("botPluginSearchProvider");
    const qo = _("botPluginSearchUrl");
    const Uo = _("botResponseTargetId");
    const Vo = _("botPluginSearchQuery");
    const Ho = _("botPluginType");
    const Go = _("botMessageDisclaimerText");
    const zo = _("richResponse");
    const jo = _("unifiedResponse");
    const Ko = _("unifiedResponseMutationMediaList");
    const Qo = p(function([t, n, r]) {
        return t != null && n != null && r != null;
    }, [
        Wo,
        qo,
        Vo
    ]);
    const Xo = p(function([t, n]) {
        return !n && t?.isBot() === true;
    }, [
        lt,
        Ao
    ]);
    const Yo = p(function([t, n]) {
        return !!(t && o("WAWebUserPrefsMeUser").isMeAccount(n));
    }, [
        Xo,
        Ee
    ]);
    const Jo = p(function([t, n]) {
        return n && !t.remote.isBot();
    }, [
        L,
        Xo
    ]);
    const Zo = p(function([t, n, r]) {
        return t || n || r;
    }, [
        Xo,
        Oo,
        Bo
    ]);
    const ea = p(function([t]) {
        return !t.fromMe && t.remote.isAiHub();
    }, [
        L
    ]);
    const ta = p(function([t, n, r]) {
        return t || n || r;
    }, [
        Xo,
        Bo,
        ea
    ]);
    const na = p(function([t, n, r, a, i]) {
        return (t || n) && !r && !(a && (i === o("WAWebBotTypes").BotMsgEditType.INNER || i === o("WAWebBotTypes").BotMsgEditType.LAST));
    }, [
        pn,
        xt,
        ta,
        Fo,
        Te
    ]);
    const ra = p(function([t, n]) {
        return t === o("WAWebMsgType").MSG_TYPE.PROTOCOL && n === "bot_feedback";
    }, [
        v,
        S
    ]);
    const oa = _("hsmTag");
    const aa = p(function([t]) {
        return t === o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.AUTHENTICATION;
    }, [
        oa
    ]);
    const ia = p(function([t]) {
        return t === o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.MARKETING;
    }, [
        oa
    ]);
    const la = _("botRespOrInvocationRevokeBotWid");
    const sa = p(function([t, n]) {
        return !!(t?.isBot() && n);
    }, [
        la,
        cr
    ]);
    const ua = p(function([t, n]) {
        return n && (t === o("WAWebProtobufsAICommon.pb").BotPluginMetadata$PluginType.SEARCH || t === o("WAWebProtobufsAICommon.pb").BotPluginMetadata$PluginType.REELS);
    }, [
        Ho,
        Xo
    ]);
    const ca = _("botPluginMaybeParent");
    const da = _("botReelPluginThumbnailCdnUrl");
    const ma = p(function([t]) {
        return t === o("WAWebMsgType").MSG_TYPE.BIZ_CONTENT_PLACEHOLDER;
    }, [
        v
    ]);
    const pa = _("statusMentioned");
    const _a = _("isWamoSub");
    const fa = _("hasPaidPartnershipLabel");
    const ga = _("aiProvenance");
    const ha = p(function([t]) {
        return o("WAWebMsgAIProvenance").hasAIProvenanceSignal(t);
    }, [
        ga
    ]);
    const ya = _("isVideoCall");
    const Ca = p(function([t, n, r]) {
        return t === o("WAWebMsgType").MSG_TYPE.CALL_LOG && (n === "miss_video" || n === "miss_group_video" || r === true);
    }, [
        v,
        S,
        ya
    ]);
    const ba = p(function([t, n]) {
        if (t === o("WAWebMsgType").MSG_TYPE.CALL_LOG) {
            return n.id;
        }
        return null;
    }, [
        v,
        L
    ]);
    const va = _("callOutcome");
    const Sa = _("callSilenceReason");
    const Ra = p(function([t, n, r]) {
        return t === o("WAWebMsgType").MSG_TYPE.CALL_LOG && (n === "silence" || r != null);
    }, [
        v,
        S,
        Sa
    ]);
    const La = p(function([t, n, r, a]) {
        return t === o("WAWebMsgType").MSG_TYPE.CALL_LOG && !o("WAWebUserPrefsMeUser").isMeAccount(a) && (n === "miss_video" || n === "miss_group_video" || n === "miss" || n === "miss_group" || r == null || !y.includes(r));
    }, [
        v,
        S,
        va,
        lt
    ]);
    const Ea = _("callDuration");
    const ka = p(function([t, n, r]) {
        return t === o("WAWebMsgType").MSG_TYPE.CALL_LOG && o("WAWebViewModeUtils").isViewModeVisibleInSurface(o("WAWebViewMode.flow").ViewModeSurface.CHAT_LIST, n) && !o("WAWebViewModeUtils").isOfflineResumeCallLogPlaceholderViewMode(n) && r != null && r > 0;
    }, [
        v,
        N,
        Ea
    ]);
    const Ia = _("bytesSent");
    const Ta = _("bytesReceived");
    const Da = _("callParticipants");
    const xa = p(function([t]) {
        if (t == null) {
            return t;
        }
        const n = t.map((e)=>({
                outcome: e.outcome,
                participant: e.participant.isUser() ? o("WAWebWidFactory").asUserWidOrThrow(e.participant) : e.participant
            }));
        const r = new Set;
        return n.filter((e)=>{
            const t = e.participant.toString();
            if (r.has(t)) {
                return false;
            }
            r.add(t);
            return true;
        });
    }, [
        Da
    ]);
    const $a = _("isCallLink");
    const Pa = _("callLinkToken");
    const Na = _("selfOtherDeviceConnected");
    const Ma = p(function([t, n, a]) {
        return !t && (!r("isStringNullOrEmpty")(a) || n != null && r("countWhere")(n, function(e) {
            return !o("WAWebUserPrefsMeUser").isMeAccount(e.participant);
        }) > 1);
    }, [
        tt,
        xa,
        Pa
    ]);
    const wa = p(function([t, n]) {
        return t || n;
    }, [
        tt,
        Ma
    ]);
    const Aa = _("finalCallOutcome");
    const Fa = _("groupHistoryBundleMessageKey");
    const Oa = _("groupHistoryBundleMetadata");
    const Ba = _("groupHistoryIndividualMessageInfo");
    const Wa = p(function([n, r]) {
        return n?.bundleMessageKey ?? r;
    }, [
        Ba,
        Fa
    ]);
    const qa = p(function([t]) {
        return t?.isEditedAfterReceivedAsHistory;
    }, [
        Ba
    ]);
    const Ua = p(function([t]) {
        return t?.bundleSender;
    }, [
        Ba
    ]);
    const Va = p(function([t, n]) {
        return t != null && r("WAWebWid").equals(t.remote, n);
    }, [
        Wa,
        P
    ]);
    function Ha(e) {
        const t = v(e) === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE && o("WAWebUserPrefsMeUser").isMeAccount(I(e));
        return !t && !ar(e) && v(e) !== o("WAWebMsgType").MSG_TYPE.CALL_LOG && !vn(e) && ![
            "change_number",
            "change_username",
            "masked_thread_created"
        ].includes(S(e)) && !ir(e);
    }
    l.clearMsgGetterCacheFor = g;
    l.getMsgUnsafe = h;
    l.getType = v;
    l.getSubtype = S;
    l.getId = L;
    l.getServerId = E;
    l.getTo = k;
    l.getFrom = I;
    l.getNotifyName = T;
    l.getBroadcastId = D;
    l.getHasPaymentQr = $;
    l.getRemote = P;
    l.getAuthor = M;
    l.getMetaFrom = w;
    l.getSenderWithDevice = A;
    l.getAck = F;
    l.getIsScheduledMsg = O;
    l.getViewCount = B;
    l.getForwardsCount = W;
    l.getViewed = q;
    l.getOriginalSelfAuthor = U;
    l.getKicTimestampMs = H;
    l.getList = G;
    l.getLatestEditMsgKey = z;
    l.getEphemeralDuration = j;
    l.getAfterReadDuration = K;
    l.getEphemeralSettingUser = X;
    l.getT = Y;
    l.getClientReceivedTsMillis = J;
    l.getBackgroundColor = Z;
    l.getHeaderType = ee;
    l.getInteractiveHeader = te;
    l.getInteractiveType = ne;
    l.getBloksWidget = re;
    l.getFooter = oe;
    l.getMentionedJidList = ae;
    l.getGroupMentions = ie;
    l.getQuotedMsg = le;
    l.getQuotedRemoteJid = se;
    l.getRcat = ce;
    l.getIsViewOnce = de;
    l.getIsGif = me;
    l.getGifAttribution = pe;
    l.getCtwaContext = _e;
    l.getThreadIds = fe;
    l.getMimetype = ge;
    l.getFilehash = he;
    l.getDeprecatedMms3Url = ye;
    l.getWaveform = Ce;
    l.getDisappearingModeInitiator = be;
    l.getDisappearingModeInitiatedByMe = Se;
    l.getActiveBotMsgStreamingInProgress = Re;
    l.getBizBotType = Le;
    l.getBotTargetSenderJid = Ee;
    l.getIsSupportAIMessage = ke;
    l.getLastBotEditBodyLength = Ie;
    l.getBotEditType = Te;
    l.getForwardedNewsletterMessageInfo = De;
    l.getForwardedAiBotMessageInfo = xe;
    l.getNewsletterAdminInviteInfo = $e;
    l.getNewsletterFollowerInviteInfo = Pe;
    l.getIsGroupStatus = Me;
    l.getIsNewsletterStatus = we;
    l.hasReshareAttribution = Fe;
    l.getHasReshareAttribution = Oe;
    l.getIsNewsletterStatusReshare = Be;
    l.getBizSource = We;
    l.isBizSourceFromMarketingMessage = qe;
    l.getIsMarketingMessage = Ue;
    l.getIsReply = Ve;
    l.getIsOpus = He;
    l.getRcatString = Ge;
    l.getHasMentionOfMe = ze;
    l.getLocal = je;
    l.getHasMentionAll = Xe;
    l.getIsImportantMessage = Ye;
    l.getBotPluginReferenceIndex = Je;
    l.getIsUnreadType = Ze;
    l.getIs1to1Msg = et;
    l.getIsGroupMsg = tt;
    l.getIsNewsletterMsg = nt;
    l.getHasOriginatedFromNewsletter = rt;
    l.getIsStatus = ot;
    l.getIsNotification = at;
    l.getIsSentByMe = it;
    l.getSender = lt;
    l.getOriginalSender = st;
    l.getIsReaction = ut;
    l.getIsFutureproof = ct;
    l.getIsStickerMsg = dt;
    l.getIsAiSticker = pt;
    l.getIsCarouselCard = _t;
    l.getHasThumbList = gt;
    l.getIsKept = ht;
    l.getIsUnkept = yt;
    l.getIsPSA = Ct;
    l.getIsIAS = bt;
    l.getIsAiHub = vt;
    l.getIsCAPISupport = St;
    l.getIsProductListMessage = Rt;
    l.getTitle = Lt;
    l.getBody = Et;
    l.getCaption = kt;
    l.getComment = It;
    l.getPollName = Tt;
    l.getPollOptions = Dt;
    l.getHasContributedPollOptions = xt;
    l.getPollSelectableOptionsCount = $t;
    l.getPollInvalidated = Pt;
    l.getPollType = Nt;
    l.getPollCorrectOptionIndex = Mt;
    l.getPollEndTime = wt;
    l.getPollHideVoterNames = At;
    l.getPollVotesSnapshot = Ft;
    l.getQuarantineExtractedText = Ot;
    l.getEventName = Bt;
    l.getEventDescription = Wt;
    l.getEventStartTime = qt;
    l.getEventEndTime = Ut;
    l.getEventJoinLink = Vt;
    l.getEventLocation = Ht;
    l.getIsEventCanceled = Gt;
    l.getEventInvalidated = zt;
    l.getEventIsScheduledCall = jt;
    l.getNativeFlowName = Kt;
    l.getNativeFlowButtons = Qt;
    l.getInteractivePayload = Xt;
    l.getGalaxyFlowDisabled = Yt;
    l.getSignupCtaTapped = Jt;
    l.getPaymentCurrency = Zt;
    l.getPaymentAmount1000 = en;
    l.getPaymentMessageReceiverJid = tn;
    l.getPaymentStatus = nn;
    l.getPaymentTxnStatus = rn;
    l.getPaymentNoteMsg = on;
    l.getPaymentExpiryTimestamp = an;
    l.getPaymentInviteServiceType = ln;
    l.getIsFromTemplate = sn;
    l.getIsLive = un;
    l.getIsDynamicReplyButtonsMsg = cn;
    l.getDynamicReplyButtons = dn;
    l.getIsEphemeral = mn;
    l.getIsEdited = pn;
    l.getIsEditProtocolMsg = _n;
    l.getStatusCanvasColor = fn;
    l.getIsUserCreatedType = gn;
    l.getIsSentByMeFromWeb = hn;
    l.getRevokeSender = yn;
    l.getIsRevokedByMe = Cn;
    l.getIsInternational = bn;
    l.getIsBizNotification = vn;
    l.getIsMedia = Sn;
    l.getIsForwarded = Rn;
    l.getForwardingScore = Ln;
    l.getNumTimesForwarded = En;
    l.FREQUENTLY_FORWARDED_SENTINEL = kn;
    l.getIsFrequentlyForwarded = In;
    l.getIsQuestion = Tn;
    l.getIsSpoiler = Dn;
    l.getUnreadQuestionResponsesCount = Pn;
    l.getQuestionReplyQuotedMessage = Nn;
    l.getIsQuestionReply = Mn;
    l.getNewsletterAdminProfile = wn;
    l.getShouldDisplayAsForwarded = Fn;
    l.getInvis = On;
    l.getIsNewMsg = Bn;
    l.getIsSendFailure = Wn;
    l.getIsFailed = qn;
    l.getVcard = Un;
    l.getDescription = Vn;
    l.getMatchedText = Hn;
    l.getThumbnail = Gn;
    l.getThumbnailHQ = zn;
    l.getMusicArtwork = jn;
    l.getMusicData = Kn;
    l.getRichPreviewType = Qn;
    l.getPaymentLinkMetadata = Xn;
    l.getFaviconMMSMetadata = Yn;
    l.getPaymentLinkPreviewMetaTags = Jn;
    l.getHasPaymentLinkTrustSignals = Zn;
    l.getLinkPreview = er;
    l.getSupportsMessageFooter = tr;
    l.getSupportsMessageFooterLinks = nr;
    l.INITIAL_PAGE_SIZE = rr;
    l.getInitialPageSize = or;
    l.getIsInitialE2ENotification = ar;
    l.getIsDisappearingModeSystemMessage = ir;
    l.getKicSender = sr;
    l.getEphemeralExpirationTimestamp = ur;
    l.getIsRevoke = cr;
    l.getRevokeDuration = dr;
    l.getWamEditType = mr;
    l.getWamDisappearingModeTrigger = pr;
    l.getWamDisappearingModeInitiatedByMe = _r;
    l.getWamDisappearingModeInitiator = fr;
    l.getInviteCode = gr;
    l.getInviteCodeExp = hr;
    l.getInviteGrp = yr;
    l.getInviteGrpName = Cr;
    l.getInviteGrpJpegThum = br;
    l.getInviteGrpType = vr;
    l.getIsGroupsV4InviteExpired = Sr;
    l.getIsNewsletterAdminInviteExpired = Rr;
    l.getProductListHeaderImage = Er;
    l.getIsAckPlayable = kr;
    l.getHasReaction = Ir;
    l.getRecipients = Tr;
    l.getTemplateParams = Dr;
    l.getClientUrl = xr;
    l.getLoc = $r;
    l.getLat = Pr;
    l.getLng = Nr;
    l.getShareDuration = Mr;
    l.getFinalLat = wr;
    l.getFinalLng = Ar;
    l.getStar = Fr;
    l.getCurrencyCode = Or;
    l.getPriceAmount1000 = Br;
    l.getSalePriceAmount1000 = Wr;
    l.getIsVcardOverMmsDocument = qr;
    l.getInteractiveAnnotations = Ur;
    l.getFirstMusicAnnotation = Gr;
    l.isStatusWithMusic = zr;
    l.isNewsletterMsgWithMusic = jr;
    l.isStatusWithEmbeddedMessages = Kr;
    l.getFirstMusicAnnotationEmbeddedContent = Qr;
    l.getMessageSecret = Xr;
    l.getBroadcast = Yr;
    l.getVcardList = Jr;
    l.getVcardFormattedName = Zr;
    l.getLabels = eo;
    l.getAgentId = to;
    l.getUrl = no;
    l.getRetailerId = ro;
    l.getBusinessOwnerJid = oo;
    l.getProductId = ao;
    l.getProductImageCount = io;
    l.getIsMdHistoryMsg = lo;
    l.getCampaignId = so;
    l.getPmCampaignId = uo;
    l.getFilename = co;
    l.getSmbClientCampaignId = mo;
    l.getIsCaptionByUser = po;
    l.getDoNotPlayInline = _o;
    l.getThumbnailDirectPath = fo;
    l.getThumbnailHeight = go;
    l.getThumbnailWidth = ho;
    l.getOrderTitle = yo;
    l.getItemCount = Co;
    l.getTotalAmount1000 = bo;
    l.getTotalCurrencyCode = vo;
    l.getFutureproofType = So;
    l.getFutureproofSubtype = Ro;
    l.getEphemeralOutOfSync = Lo;
    l.getIsAvatar = Eo;
    l.getBizPrivacyStatus = ko;
    l.getVerifiedBizName = Io;
    l.getMediaKey = To;
    l.getMessage = Do;
    l.getSize = xo;
    l.getMediaPngThumbnail = $o;
    l.getHostedBizEncStateMismatch = Po;
    l.getIsBotFutureproofPlaceholder = No;
    l.getIsViewOncePlaceholder = Mo;
    l.getIsBotQuery = wo;
    l.getIsCoexV2Relay = Ao;
    l.getIsBizBot1pMessage = Fo;
    l.getIsBizBot1pResponse = Oo;
    l.getBotPluginSearchProvider = Wo;
    l.getBotPluginSearchUrl = qo;
    l.getBotResponseTargetId = Uo;
    l.getBotPluginSearchQuery = Vo;
    l.getBotPluginType = Ho;
    l.getBotMessageDisclaimerText = Go;
    l.getRichResponse = zo;
    l.getUnifiedResponse = jo;
    l.getUnifiedResponseMutationMediaList = Ko;
    l.getIsBotSearchResponse = Qo;
    l.getIsMetaBotResponse = Xo;
    l.isMetaBotResponseToMyInvoke = Yo;
    l.getIsMetaBotInvokeResponse = Jo;
    l.getIsBotResponse = Zo;
    l.getShouldShowEditedIndicator = na;
    l.getIsBotFeedbackMessage = ra;
    l.getHsmTag = oa;
    l.getIsAuthenticationMessage = aa;
    l.getIsMarketingTemplateTag = ia;
    l.getIsRevokeForMsgFromOrDeliveredToBot = sa;
    l.getIsBotPluginCarouselMsg = ua;
    l.getBotPluginMaybeParent = ca;
    l.getBotReelPluginThumbnailCdnUrl = da;
    l.getIsBizContentPlaceholder = ma;
    l.getStatusMentioned = pa;
    l.getIsWamoSub = _a;
    l.getHasPaidPartnershipLabel = fa;
    l.getAiProvenance = ga;
    l.getIsAiContent = ha;
    l.getIsVideoCall = Ca;
    l.getCallId = ba;
    l.getCallOutcome = va;
    l.getCallSilenceReason = Sa;
    l.getIsCallSilenced = Ra;
    l.getIsMissedCall = La;
    l.getCallDuration = Ea;
    l.getIsVisibleCallLog = ka;
    l.getBytesSent = Ia;
    l.getBytesReceived = Ta;
    l.getCallParticipants = xa;
    l.getIsCallLink = $a;
    l.getCallLinkToken = Pa;
    l.getSelfOtherDeviceConnected = Na;
    l.getIsAdHocGroupCall = Ma;
    l.getIsGroupCall = wa;
    l.getFinalCallOutcome = Aa;
    l.getGroupHistoryBundleMetadata = Oa;
    l.getGroupHistoryIndividualMessageInfo = Ba;
    l.getGroupHistoryBundleMessageKey = Wa;
    l.getIsEditedAfterReceivedAsHistory = qa;
    l.getGroupHistoryBundleSender = Ua;
    l.getIsGroupHistoryMessageInOwnChat = Va;
    l.isRealMessage = Ha;
}, 98);