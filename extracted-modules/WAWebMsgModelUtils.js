__d("WAWebMsgModelUtils", [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebAnimatedEmojiGatingUtils",
    "WAWebBackendErrors",
    "WAWebBusinessProfileTypes",
    "WAWebChatCommunityUtils",
    "WAWebChatContactUtils",
    "WAWebChatEphemerality",
    "WAWebChatMsgsCollection",
    "WAWebChatPreferenceCollection",
    "WAWebCommonMsgUtils",
    "WAWebConnGetters",
    "WAWebConnModel",
    "WAWebEmoji",
    "WAWebEmojiConst",
    "WAWebFileUtils",
    "WAWebFindChatAction",
    "WAWebForwardDocCaptionGating",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGetPlainTextFromBotMsg",
    "WAWebGroupMetadataCollection",
    "WAWebInteractiveMessageHeaderMediaType",
    "WAWebInvisiblePlaceholderViewModeProcessor",
    "WAWebKeepInChatMsgUtils",
    "WAWebMessageAssociationUIUtils",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebViewMode.flow",
    "WAWebWid",
    "WAWebWidFormat",
    "WAWebWidJsonReviver",
    "fbs",
    "isStringNullOrEmpty",
    "promiseDone"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    const f = {
        image: true,
        video: true,
        audio: true,
        ptt: true,
        sticker: true,
        document: true,
        product: true
    };
    function g(e) {
        switch(e.type){
            case "image":
            case "video":
            case "ptv":
            case "audio":
            case "ptt":
            case "sticker":
            case "document":
            case "product":
            case "sticker-pack":
            case o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE:
                return true;
            case "protocol":
                return e.subtype === "history_sync_notification";
            case o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW:
                return e.headerType === o("WAWebProtobufsE2E.pb").Message$ButtonsMessage$HeaderType.IMAGE;
            case o("WAWebMsgType").MSG_TYPE.INTERACTIVE:
                return !!(e.interactiveHeader?.mediaType && o("WAWebInteractiveMessageHeaderMediaType").IM_MEDIA_HEADER_TYPES.has(e.interactiveHeader.mediaType));
            default:
                return false;
        }
    }
    function h(e) {
        return e.type === o("WAWebMsgType").MSG_TYPE.CHAT && e.subtype === "url";
    }
    function y(e) {
        return e.type === o("WAWebMsgType").MSG_TYPE.CHAT && e.subtype === "url";
    }
    function C(e, t) {
        switch(t){
            case "text":
                return e.type === o("WAWebMsgType").MSG_TYPE.CHAT && e.subtype !== "url";
            case "image":
                return e.type === o("WAWebMsgType").MSG_TYPE.IMAGE;
            case "video":
                return e.type === o("WAWebMsgType").MSG_TYPE.VIDEO && !e.isGif;
            case "gif":
                return e.type === o("WAWebMsgType").MSG_TYPE.VIDEO && e.isGif;
            case "audio":
                return e.type === o("WAWebMsgType").MSG_TYPE.AUDIO;
            case "ptt":
                return e.type === o("WAWebMsgType").MSG_TYPE.PTT;
            case "document":
                return e.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT;
            case "location":
                return e.type === o("WAWebMsgType").MSG_TYPE.LOCATION;
            case "vcard":
                return e.type === o("WAWebMsgType").MSG_TYPE.VCARD || e.type === o("WAWebMsgType").MSG_TYPE.MULTI_VCARD;
            case "url":
                return e.type === o("WAWebMsgType").MSG_TYPE.CHAT && e.subtype === "url";
            case "sticker":
                return e.type === o("WAWebMsgType").MSG_TYPE.STICKER;
            case undefined:
                return false;
            default:
                return false;
        }
    }
    function b(e) {
        if (!e) {
            return null;
        }
        const t = typeof e.id === "string" ? e.id : e.id.id;
        const n = new (r("WAWebMsgKey"))({
            from: e.from,
            to: e.to,
            id: t,
            participant: e.participant,
            selfDir: e.self
        });
        e.id = n;
        const a = new (o("WAWebMsgModel")).Msg(e);
        a.fromQuotedMsg = true;
        return a;
    }
    function v(e) {
        const t = new (o("WAWebMsgModel")).Msg(babelHelpers.extends({}, e.toJSON(), {
            local: e.local
        }));
        if (t.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE) {
            S(t);
        }
        return t;
    }
    function S(e) {
        const n = o("WAWebGetPlainTextFromBotMsg").getPlainTextFromBotMsg(e) ?? "";
        e.type = o("WAWebMsgType").MSG_TYPE.CHAT;
        e.subtype = undefined;
        e.body = n;
        e.richResponse = undefined;
        e.unifiedResponse = undefined;
        e.unifiedResponseRawData = undefined;
        e.botSignatureVerificationMetadata = undefined;
    }
    function R(e) {
        const t = e.filter((e)=>{
            if (o("WAWebMsgGetters").getHasOriginatedFromNewsletter(e) || !o("WAWebMsgGetters").getIsMedia(e) && !o("WAWebFileUtils").isDocument(e) || !e.caption) {
                return false;
            }
            if (o("WAWebFileUtils").isDocument(e) && e.caption === e.filename) {
                return !o("WAWebForwardDocCaptionGating").isForwardDocCaptionEnabled();
            }
            return true;
        });
        return t;
    }
    function L(t) {
        let a;
        let i;
        let l;
        if (t instanceof o("WAWebMsgModel").Msg) {
            i = t;
            l = t.id;
        } else if (t instanceof r("WAWebMsgKey")) {
            l = t;
        } else {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "model:msgs:broadcastFanout: unknown msgOrKey: ",
                ""
            ])), String(t));
            return;
        }
        if (!r("WAWebWid").isStatus(l.remote)) {
            if (i?.recipients && i.recipients.length !== 0) {
                a = i.recipients;
            } else {
                const u = r("WAWebGroupMetadataCollection").get(l.remote);
                if (u) {
                    a = u.participants.map((e)=>e.id);
                } else {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[broadcastFanout] no group_metadata, cant fanout: ",
                        ""
                    ])), l.remote.toString());
                }
            }
            if (a) {
                return a.map((remote)=>new (r("WAWebMsgKey"))({
                        fromMe: l.fromMe,
                        remote,
                        id: l.id
                    }));
            }
            return undefined;
        }
    }
    function E(e) {
        let t;
        if (!e.invis) {
            const n = L(e);
            if (n) {
                t = n.map((e)=>e.remote);
                n.forEach((t)=>{
                    if (!o("WAWebMsgCollection").MsgCollection.some((e)=>e.id.equals(t))) {
                        const n = D(e);
                        n.to = t.remote;
                        n.id = t;
                        n.broadcast = true;
                        const a = o("WAWebMsgCollection").MsgCollection.add(n, {
                            merge: true
                        });
                        r("promiseDone")(o("WAWebFindChatAction").findOrCreateLatestChat(t.remote, "msgModelBroadcastFanout"), function({ chat }) {
                            const newRecords = a.reduce((acc, item)=>{
                                if (item == null) {
                                    return acc;
                                }
                                if (item.type !== o("WAWebMsgType").MSG_TYPE.PROTOCOL) {
                                    if (o("WAWebChatEphemerality").isEphemeralSettingOn(chat)) {
                                        item.ephemeralDuration = o("WAWebChatEphemerality").getEphemeralSetting(chat);
                                    }
                                    const r = o("WAWebChatEphemerality").getEphemeralSettingTimestamp(chat);
                                    if (r != null) {
                                        item.ephemeralSettingTimestamp = r;
                                    }
                                    const a = o("WAWebChatEphemerality").getDisappearingModeInitiator(chat);
                                    if (a != null) {
                                        item.disappearingModeInitiator = a;
                                    }
                                }
                                acc.push(item);
                                return acc;
                            }, []);
                            k({
                                insertAfter: true,
                                newRecords,
                                threadOrChat: chat
                            });
                        });
                    }
                });
            }
        }
        return t;
    }
    function k({ anchorMsgKey, chatMsgsCollection, firstUnreadKey, insertAfter, newRecords, resetMostRecentMsgs, threadOrChat }) {
        const d = chatMsgsCollection || threadOrChat.msgs;
        if (newRecords.length !== 0) {
            let m = d === threadOrChat.msgs;
            if (resetMostRecentMsgs === true) {
                if (m) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "models:msg:store:resetMostRecentMsgs .msgs === cmc !"
                    ])));
                    I(threadOrChat, d, newRecords);
                } else {
                    m = true;
                    I(threadOrChat, d, newRecords);
                    const p = new (o("WAWebChatMsgsCollection")).ChatMsgsCollection;
                    p.replace(threadOrChat.msgs);
                    threadOrChat.msgChunks.push(p);
                    threadOrChat.replaceMsgsCollection(d);
                    threadOrChat.msgs.trigger("change:last", threadOrChat.msgs.last());
                }
            } else if (insertAfter) {
                if (m) {
                    I(threadOrChat, d, newRecords);
                } else {
                    T(d, newRecords);
                }
            } else {
                let at = 0;
                if (anchorMsgKey) {
                    const f = d.get(anchorMsgKey);
                    if (f) {
                        const g = d.indexOf(f);
                        if (g !== -1) {
                            at = g;
                            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                "[msg:store] insert group history at ",
                                " anchor=",
                                ""
                            ])), at, anchorMsgKey.toString());
                        }
                    }
                }
                T(d, newRecords, {
                    at,
                    silent: newRecords.every(x)
                });
            }
            const h = firstUnreadKey;
            if (h && !threadOrChat.unreadMsgAnchor) {
                if (threadOrChat.disableUnreadAnchor) {
                    threadOrChat.disableUnreadAnchor = false;
                } else {
                    threadOrChat.unreadMsgAnchor = newRecords.find((e)=>e.id.toString() === h.toString());
                }
            }
        }
    }
    function I(threadOrChat, t, newRecords) {
        const r = newRecords.at(-1);
        if (r) {
            T(t, newRecords);
            threadOrChat.lastReceivedKey = r.id;
        }
    }
    function T(e, newRecords, n) {
        try {
            e.add(newRecords, n);
        } catch (error) {
            if (error instanceof o("WAWebBackendErrors").LogoutDrop) {
                o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "setRecords LogoutDrop: ",
                    ""
                ])), error.toString());
            } else {
                throw error;
            }
        }
    }
    function D(e) {
        if (e != null && typeof e === "object") {
            return JSON.parse(JSON.stringify(e), o("WAWebWidJsonReviver").jsonWidReviver);
        }
        return e;
    }
    function x(e) {
        return o("WAWebFrontendMsgGetters").getEventType(e) === o("WAWebCommonMsgUtils").EventType.IGNORE;
    }
    function $(e) {
        return e.filter((e)=>e.ack === o("WAWebAck").ACK.READ).map((e)=>e.id.toString());
    }
    function P(e, t) {
        if (t === o("WAWebMsgType").MSG_TYPE.CHAT && !(e == null || e === "")) {
            const n = o("WAWebEmoji").EmojiUtil.matchLargeEmojiPattern(e);
            if (!(n == null || n.length !== 1)) {
                const r = o("WAWebEmoji").EmojiUtil.normalizeEmoji(n[0]);
                return r;
            }
        }
    }
    function N(e, t) {
        if (!o("WAWebAnimatedEmojiGatingUtils").isAnimatedEmojiEnabled() || !r("WAWebChatPreferenceCollection").get("autoplayAnimatedImages")) {
            return false;
        }
        const n = P(e, t);
        return n != null && o("WAWebEmojiConst").getSupportedAnimatedEmojis().includes(n);
    }
    const M = new Set([
        (_ = o("WAWebMsgType")).MSG_TYPE.NOTIFICATION,
        _.MSG_TYPE.NOTIFICATION_TEMPLATE,
        _.MSG_TYPE.GP2,
        _.MSG_TYPE.BROADCAST_NOTIFICATION,
        _.MSG_TYPE.E2E_NOTIFICATION,
        _.MSG_TYPE.CALL_LOG,
        _.MSG_TYPE.PROTOCOL,
        _.MSG_TYPE.DEBUG,
        _.MSG_TYPE.CIPHERTEXT
    ]);
    function w(e) {
        const t = o("WAWebMsgGetters").getSender(e);
        if (t == null && !M.has(e.type)) {
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "Undefined sender for ",
                " subtype:",
                " from:",
                ", author:",
                ""
            ])), e.id?.toString(), e.subtype, e.from?.toString(), e.author?.toString());
            o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "Messages should have a sender!"
            ]))).sendLogs(`${e.type}-msg-missing-sender`, {
                sampling: 0.01
            });
        }
        return t;
    }
    function A(e) {
        let t = o("WAWebMsgGetters").getSender(e);
        if (o("WAWebMsgGetters").getIsNewsletterMsg(e)) {
            t = e.id.remote;
        } else if (o("WAWebMsgGetters").getIsGroupStatus(e)) {
            t = e.author;
        }
        return t;
    }
    function F(e) {
        return e.isFromTemplate || !o("WAWebFrontendMsgGetters").getHasTemplateButtons(e) && e.type !== o("WAWebMsgType").MSG_TYPE.TEMPLATE_BUTTON_REPLY;
    }
    function O(e) {
        const t = o("WAWebFrontendMsgGetters").getChat(e).msgs.last();
        return e.id.equals(t?.id);
    }
    function B(e) {
        const t = 5;
        const n = o("WAWebMsgGetters").getNumTimesForwarded(e) + (o("WAWebMsgGetters").getShouldDisplayAsForwarded(e) ? 1 : 0);
        if (n >= t) {
            return o("WAWebMsgGetters").FREQUENTLY_FORWARDED_SENTINEL;
        }
        return n;
    }
    function W(e) {
        const t = o("WAWebMsgGetters").getEphemeralExpirationTimestamp(e);
        if (t == null) {
            return null;
        }
        if (o("WAWebKeepInChatMsgUtils").isExpired(e)) {
            return 0;
        }
        return t - o("WATimeUtils").unixTime();
    }
    function q({ parentMsgKey }, { duringDetach }) {
        if (parentMsgKey) {
            const i = o("WAWebMsgCollection").MsgCollection.get(parentMsgKey);
            if (i && o("WAWebInvisiblePlaceholderViewModeProcessor").InvisiblePlaceholderViewModeProcessor.compatibleMessageTypes?.includes(i.type) && o("WAWebMessageAssociationUIUtils").shouldHideParentMessage({
                parentMsg: i,
                duringDetach
            })) {
                i.set("viewMode", o("WAWebViewMode.flow").ViewModeType.INVISIBLE_PLACEHOLDER);
            }
        }
    }
    function U(e, t = {}) {
        return V({
            chat: o("WAWebFrontendMsgGetters").getMaybeChat(e),
            isPSA: o("WAWebMsgGetters").getIsPSA(e),
            notifyName: e.notifyName,
            sender: o("WAWebMsgGetters").getSender(e),
            senderObj: e.senderObj
        }, t);
    }
    function V({ chat, isPSA, notifyName, sender, senderObj }, { newPushNameFormatting = false, showShortName = false, showVerifiedName = false, withPushName = false, withPushNameOnly = false } = {}) {
        if (!sender) {
            return "";
        }
        if (o("WAWebUserPrefsMeUser").isMeAccount(sender)) {
            return r("fbs")._("You").toString();
        }
        if (isPSA) {
            if (o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn)) {
                return r("fbs")._("WhatsApp Business").toString();
            }
            return r("fbs")._("WhatsApp").toString();
        }
        if (senderObj == null) {
            return "";
        }
        const b = senderObj;
        const v = showShortName ? b.shortName : undefined;
        if (r("isStringNullOrEmpty")(v)) {
            if (b.name) {
                return b.name;
            }
        } else {
            return v;
        }
        if (showVerifiedName && b.verifiedLevel === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH && b.verifiedName) {
            return b.verifiedName;
        }
        if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
            const S = o("WAWebFrontendContactGetters").getFormattedUsernameAndType(b);
            if (S != null) {
                return S.displayName;
            }
        }
        const R = newPushNameFormatting ? o("WAWebChatContactUtils").getFormattedNotifyName(notifyName).toString() : `~${notifyName ?? ""}`;
        const L = withPushName && !r("isStringNullOrEmpty")(notifyName) ? R : "";
        if (withPushNameOnly && L) {
            return L;
        }
        let E = sender.isLid() ? o("WAWebFrontendContactGetters").getUserDisplayNameForLid(b) : o("WAWebWidFormat").widToFormattedUser(sender);
        if (o("WAWebChatCommunityUtils").shouldMaskPhoneNumberForChat(chat, b)) {
            E = o("WAWebFrontendContactGetters").getMaskedPhoneLid(b);
        }
        return `${E}${L ? " " : ""}${L}`;
    }
    l.typeIsMms = g;
    l.typeIsUrl = h;
    l.notRefiningTypeIsUrl = y;
    l.msgMatchesType = C;
    l.createQuotedMsg = b;
    l.createMsgSnapshot = v;
    l.getMediaMsgWithCaptionForForwarding = R;
    l.getBroadcastFanoutKeys = L;
    l.broadcastFanout = E;
    l.addRecordsToChat = k;
    l.getReadMsgKeys = $;
    l.isSingleEmojiMessageText = P;
    l.isAnimatedEmoji = N;
    l.getValidatedSender = w;
    l.getQuotedParticipantForContextInfo = A;
    l.interactiveButtonsReleased = F;
    l.isLastMsg = O;
    l.getMsgForwardingScoreWhenForwarded = B;
    l.getMsgTimeUntilExpiration = W;
    l.hideParentMessageInChat = q;
    l.getMsgDisplayName = U;
    l.getMsgDisplayNameFor = V;
}, 226);