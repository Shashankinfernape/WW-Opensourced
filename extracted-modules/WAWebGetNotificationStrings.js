__d("WAWebGetNotificationStrings", [
    "fbt",
    "WABidi",
    "WALogger",
    "WAWebAlbumsFormatAlbumMessageText",
    "WAWebBizFormatInteractiveMsg",
    "WAWebClock",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebCurrencyUtils",
    "WAWebFormatBroadcastNotification",
    "WAWebFormatCallLog",
    "WAWebFormatE2ENotification",
    "WAWebFormatEventDateString",
    "WAWebFormatGroupNotification",
    "WAWebFormatNfmText",
    "WAWebFormatOversizedMsg",
    "WAWebFormatPaymentMsg",
    "WAWebFormatRevokedMsg",
    "WAWebFormatUnknownMsg",
    "WAWebFrontendMsgGetters",
    "WAWebGetPlainTextFromBotMsg",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebL10N",
    "WAWebMsgGetters",
    "WAWebMsgNotificationPreview",
    "WAWebMsgType",
    "WAWebPollCreationUtils",
    "WAWebSpoilerNotificationMask",
    "WAWebUA",
    "WAWebUnformatMsg",
    "WAWebVcardUtils",
    "WAWebWidToFormattedNameOrNumber",
    "cr:4404",
    "fbs"
], function(t, n, r, o, a, i, l, s) {
    let u;
    let c;
    let d;
    const m = n("cr:4404") ?? {};
    const m_getNotificationBodyForPreviewOff = m.getNotificationBodyForPreviewOff;
    function _(e) {
        const m = o("WAWebMsgNotificationPreview").shouldShowMsgNotificationPreview(e);
        const _ = e.safe();
        let f = "";
        if (m_getNotificationBodyForPreviewOff && !m) {
            return m_getNotificationBodyForPreviewOff().toString();
        }
        switch(_.type){
            case "chat":
                {
                    if (m) {
                        f = r("WAWebUnformatMsg")(e, e.body);
                    }
                    break;
                }
            case "image":
                {
                    let h = "";
                    if (o("WAWebUA").UA.hasEmoji) {
                        h = _.isViewOnce ? "1\uFE0F⃣ " : "📷 ";
                    }
                    f = h + (m && r("WAWebUnformatMsg")(e, e.caption) || r("fbs")._("Photo").toString());
                    break;
                }
            case "product":
                {
                    const y = o("WAWebUA").UA.hasEmoji ? "🛒 " : "";
                    f = y + (o("WAWebFrontendMsgGetters").getText(e) && r("WAWebUnformatMsg")(e, o("WAWebFrontendMsgGetters").getText(e)) || s._("Product").toString());
                    break;
                }
            case "interactive":
                {
                    if (e.interactiveType === r("WAWebInteractiveMessageType").SHOPS_STOREFRONT) {
                        const b = o("WAWebUA").UA.hasEmoji ? "🛍\uFE0F  " : "";
                        f = b + r("WAWebUnformatMsg")(e, e.body ?? e.interactiveHeader?.title) || "";
                        break;
                    }
                    if (e.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW && e.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS) {
                        const S = _;
                        f = o("WAWebBizFormatInteractiveMsg").formatOrderDetailsMessagePreview(S) || (e.caption ?? "");
                        const R = o("WAWebUA").UA.hasEmoji ? "📃  " : "";
                        f = R + f;
                        break;
                    }
                    if (e.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW && e.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO) {
                        const E = _;
                        f = o("WAWebBizFormatInteractiveMsg").formatPaymentInfoMessagePreview(E) || (e.caption ?? "");
                        break;
                    }
                    if (e.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW && e.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS) {
                        const I = _;
                        f = o("WAWebBizFormatInteractiveMsg").formatOrderStatusMessagePreview(I) || (e.caption ?? "");
                        break;
                    }
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "getNotificationBody: Unrecognized type ",
                        ""
                    ])), e.type);
                    return "";
                }
            case "native_flow":
                if (e.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS) {
                    const D = _;
                    const x = o("WAWebUA").UA.hasEmoji ? "📃  " : "";
                    f = x + (o("WAWebFormatNfmText").formatNFMTextPreview(D) || (e.caption ?? ""));
                    break;
                }
                if (e.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO) {
                    const P = _;
                    f = o("WAWebFormatNfmText").formatNFMTextPreview(P) || (e.caption ?? "");
                    break;
                }
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "getNotificationBody: Unrecognized type ",
                    ""
                ])), e.type);
                return "";
            case "sticker":
                {
                    const N = o("WAWebUA").UA.hasEmoji ? "💟" : "";
                    f = s._("{stickerIcon} Sticker", [
                        s._param("stickerIcon", N)
                    ]);
                    break;
                }
            case "video":
                {
                    let M = "";
                    let w;
                    if (e.isGif) {
                        M = o("WAWebUA").UA.hasEmoji ? "👾 " : "";
                        w = m && r("WAWebUnformatMsg")(e, e.caption) || "GIF";
                    } else {
                        if (o("WAWebUA").UA.hasEmoji) {
                            M = _.isViewOnce ? "1\uFE0F⃣ " : "🎥 ";
                        }
                        w = m && r("WAWebUnformatMsg")(e, e.caption) || r("fbs")._("Video").toString();
                        if (!_.isViewOnce) {
                            w = `${w} (${o("WAWebClock").Clock.durationStr(e.duration)})`;
                        }
                    }
                    f = `${M}${w}`;
                    break;
                }
            case "ptv":
                {
                    const A = o("WAWebUA").UA.hasEmoji ? "🎥 " : "";
                    const F = m && r("WAWebUnformatMsg")(e, e.caption) || s._("Video note");
                    const O = `${F.toString()} (${o("WAWebClock").Clock.durationStr(e.duration)})`;
                    f = `${A}${O}`;
                    break;
                }
            case "ptt":
                {
                    let B = "";
                    let W = s._("Voice message").toString();
                    if (o("WAWebUA").UA.hasEmoji) {
                        B = _.isViewOnce ? "1\uFE0F⃣ " : "🎤 ";
                    }
                    if (!_.isViewOnce) {
                        W = `${W} (${o("WAWebClock").Clock.durationStr(e.duration)})`;
                    }
                    f = `${B}${W}`;
                    break;
                }
            case "audio":
                {
                    const q = o("WAWebUA").UA.hasEmoji ? "🎵 " : "";
                    f = `${q} ${r("fbs")._("Audio").toString()} (${o("WAWebClock").Clock.durationStr(e.duration)})`;
                    break;
                }
            case "location":
                {
                    const U = o("WAWebUA").UA.hasEmoji ? "📍 " : "";
                    let V;
                    if (e.isLive) {
                        V = m && r("WAWebUnformatMsg")(e, e.comment) || s._("Live location").toString();
                    } else {
                        V = m && e.loc || r("fbs")._("Location").toString();
                    }
                    f = `${U} ${V}`;
                    break;
                }
            case "groups_v4_invite":
                f = s._("WhatsApp group invite");
                break;
            case "newsletter_admin_invite":
                f = s._("WhatsApp channel admin invite");
                break;
            case "gp2":
                f = r("WAWebFormatGroupNotification")(e, true);
                break;
            case "broadcast_notification":
                f = o("WAWebFormatBroadcastNotification").formatBroadcastNotification(e);
                break;
            case "notification":
                f = e.body ?? "";
                break;
            case "vcard":
                {
                    const H = o("WAWebUA").UA.hasEmoji ? "👤 " : "";
                    f = H + (e.subtype || r("fbs")._("Contact").toString());
                    break;
                }
            case "multi_vcard":
                {
                    const G = o("WAWebUA").UA.hasEmoji ? "👥 " : "";
                    f = G + o("WAWebVcardUtils").getNameString(e.vcardList).toString();
                    break;
                }
            case "document":
                {
                    if (e.isVcardOverMmsDocument) {
                        const z = o("WAWebUA").UA.hasEmoji ? "👤 " : "";
                        f = z + (e.filename || s._("_j{\"*\":\"{count} contacts\",\"_1\":\"1 contact\"}", [
                            s._plural(e.pageCount, "count")
                        ]).toString());
                        break;
                    }
                    const j = o("WAWebUA").UA.hasEmoji ? "📄 " : "";
                    let K = e.caption;
                    if (e.caption == null || e.caption === "") {
                        K = e.filename;
                    }
                    f = j + (m && r("WAWebUnformatMsg")(e, K) || r("fbs")._("Document").toString());
                    break;
                }
            case "e2e_notification":
                f = o("WAWebFormatE2ENotification").formatE2ENotification(_);
                break;
            case "call_log":
                f = r("WAWebFormatCallLog")({
                    msg: e,
                    options: {}
                });
                break;
            case "ciphertext":
                f = s._("Waiting for this message. This may take a while.");
                break;
            case "revoked":
                f = o("WAWebFormatRevokedMsg").formatRevokedMsg(_);
                break;
            case "payment":
                f = g(e);
                break;
            case "oversized":
                f = o("WAWebFormatOversizedMsg").formatOversizedMsgNotification(e);
                break;
            case "unknown":
                f = o("WAWebFormatUnknownMsg").formatUnknownMsgNotification(e);
                break;
            case "list":
                f = `${e.list?.title || ""} ${e.list?.description || ""}`;
                break;
            case "list_response":
                f = `${e.listResponse?.title || ""} ${e.listResponse?.description || ""}`;
                break;
            case "poll_result_snapshot":
            case "poll_creation":
                {
                    const Q = e.pollType === o("WAWebPollCreationUtils").PollType.QUIZ ? "🏆 " : "📊 ";
                    const X = o("WAWebUA").UA.hasEmoji ? Q : "";
                    f = `${X}${r("WAWebUnformatMsg")(e, e.pollName)}`;
                    break;
                }
            case "event_creation":
                {
                    const J = o("WAWebUA").UA.hasEmoji ? "📆 " : "";
                    const Z = e.eventStartTime != null ? o("WAWebFormatEventDateString").getEventDateStringFor(e.eventStartTime, e.eventEndTime ?? undefined) : null;
                    f = s._("{eventIcon} Invited you to an event: {eventName} {eventTime}", [
                        s._param("eventIcon", J),
                        s._param("eventName", e.eventName),
                        s._param("eventTime", Z)
                    ]);
                    break;
                }
            case "sharable_event_invite":
                {
                    const ee = o("WAWebUA").UA.hasEmoji ? "📆 " : "";
                    f = s._("{eventIcon} Invited you to an event: {eventName}", [
                        s._param("eventIcon", ee),
                        s._param("eventName", _.sharableEventInviteTitle)
                    ]);
                    break;
                }
            case "music":
                f = s._("Sent music");
                break;
            case "album":
                {
                    const te = o("WAWebUA").UA.hasEmoji ? "📷 " : "";
                    const ne = r("WAWebAlbumsFormatAlbumMessageText")({
                        msg: e,
                        options: {}
                    });
                    f = s._("{albumIcon}{photoAndVideoCountText}", [
                        s._param("albumIcon", te),
                        s._param("photoAndVideoCountText", ne)
                    ]);
                    break;
                }
            case "order":
                {
                    const re = o("WAWebUA").UA.hasEmoji ? "🛒 " : "";
                    f = s._("_j{\"*\":\"{shoppingCartIcon}{count} items{message}\",\"_1\":\"{shoppingCartIcon}1 item{message}\"}", [
                        s._plural(e.itemCount, "count"),
                        s._param("shoppingCartIcon", re),
                        s._param("message", e.message != null && e.message !== "" ? `
${e.message}` : "")
                    ]);
                    break;
                }
            case "sticker-pack":
                {
                    const oe = o("WAWebUA").UA.hasEmoji ? "💟 " : "";
                    f = s._("{stickerPackIcon} Sticker Pack", [
                        s._param("stickerPackIcon", oe)
                    ]);
                    break;
                }
            case "quarantined":
                {
                    const ae = o("WAWebUA").UA.hasEmoji ? "📄 " : "";
                    const ie = e.quarantineExtractedText != null && e.quarantineExtractedText !== "" ? e.quarantineExtractedText : s._("Attachment blocked by Strict account settings").toString();
                    f = `${ae}${ie}`;
                    break;
                }
            case "rich_response":
                {
                    if (m) {
                        const le = o("WAWebGetPlainTextFromBotMsg").getPlainTextFromBotMsg(e, {
                            includeBodyFallback: false
                        });
                        if (le != null && le !== "") {
                            f = r("WAWebUnformatMsg")(e, le);
                        }
                    }
                    break;
                }
            case "notification_template":
            case "protocol":
            case "hsm":
            case "template_button_reply":
            case "debug":
            case "debug_placeholder":
            case "interactive_response":
            case "keep_in_chat":
            case "request_phone_number":
            case "automated_greeting_message":
            case o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE:
            case o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE:
            case "loading_media":
            case "newsletter_notification":
                return "";
            default:
                _.type;
                o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "getNotificationBody: Unrecognized type ",
                    ""
                ])), e.type);
                return "";
        }
        const se = o("WAWebUA").UA.hasEmoji && e.isQuestion ? "❓ " : "";
        const ue = `${se}${f.toString()}`;
        if (e.isSpoiler === true) {
            return o("WAWebSpoilerNotificationMask").maskSpoilersForNotification(ue);
        }
        return ue;
    }
    function f(e) {
        const e_msgDir = e.msgDir;
        const n = r("WAWebL10N").isRTL() ? "rtl" : "ltr";
        if (e.body && e.author == null && e.action == null) {
            return e.body;
        }
        const e_body = e.body;
        let e_author = e.author;
        let e_action = e.action;
        if (e_author == null) {
            e_author = "";
        }
        if (e_action == null) {
            e_action = "";
        } else {
            e_action = n === "ltr" ? r("WAWebL10N").isolateLTR(e_action) : r("WAWebL10N").isolateRTL(e_action);
        }
        if (e_author) {
            const s = o("WABidi").bidiDir(e_author);
            if (n === "ltr" && (!e_msgDir || e_msgDir === "ltr") && (!s || s === "ltr")) {
                if (e_action) {
                    return `${e_author}‎: ${e_action}‎ ${e_body}‎`;
                }
                return `${e_author}‎: ${e_body}‎`;
            }
            if (n === "ltr" && (!e_msgDir || e_msgDir === "ltr")) {
                if (e_action) {
                    return `‎‫${e_author}‬: ${e_action}‎ ${e_body}‎`;
                }
                return `‎‫${e_author}‬: ${e_body}‎`;
            }
            if (n === "ltr" && (!s || s === "ltr")) {
                if (e_action) {
                    return `${e_author}‎: ${e_action}‎ ‫${e_body}‬‎`;
                }
                return `${e_author}‎: ‫${e_body}‬‎`;
            }
            if (n === "ltr") {
                if (e_action) {
                    return `‫${e_author}‏: ${e_action} ${e_body}‏`;
                }
                return `‫${e_author}‏: ${e_body}‏`;
            }
            if ((!e_msgDir || e_msgDir === "rtl") && (!s || s === "rtl")) {
                if (e_action) {
                    return `${e_author}‏: ${e_action}‏ ${e_body}‏`;
                }
                return `${e_author}‏: ${e_body}‏`;
            }
            if (!e_msgDir || e_msgDir === "rtl") {
                if (e_action) {
                    return `‏‪${e_author}‬: ${e_action}‏ ${e_body}‏`;
                }
                return `‏‪${e_author}‬: ${e_body}‏`;
            }
            if (!s || s === "rtl") {
                if (e_action) {
                    return `${e_author}‏: ${e_action}‏ ‪${e_body}‬‏`;
                }
                return `${e_author}‏: ‪${e_body}‬‏`;
            }
            if (e_action) {
                return `‪${e_author}‎: ${e_action} ${e_body}‎`;
            }
            return `‪${e_author}‎: ${e_body}‎\$`;
        }
        if (e_action) {
            return `${e_action} ${e_body}`;
        }
        return e_body;
    }
    function g(e) {
        if (e.subtype === "invite") {
            return o("WAWebFormatPaymentMsg").formatPaymentInviteMessageText(e.id);
        }
        const t = e.paymentCurrency && e.paymentAmount1000;
        if (!t) {
            return s._("Payment message • Amount unavailable");
        }
        if (e.subtype !== "send" && e.subtype !== "request") {
            return s._("Payment message. Open WhatsApp on your phone to view.");
        }
        let n;
        const a = o("WAWebCurrencyUtils").formatAmount1000({
            amount: e.paymentAmount1000,
            currency: e.paymentCurrency
        });
        const i = o("WAWebMsgGetters").getSender(e);
        const l = i != null ? r("WAWebWidToFormattedNameOrNumber")(i) : "";
        const u = r("WAWebWidToFormattedNameOrNumber")(e.paymentMessageReceiverJid);
        const c = o("WAWebContactCollection").ContactCollection.get(e.paymentMessageReceiverJid);
        const d = c != null && o("WAWebContactGetters").getIsMe(c);
        const m = e.paymentAmount1000 / 1000;
        if (e.subtype === "send") {
            if (o("WAWebMsgGetters").getIsGroupMsg(e)) {
                n = d ? s._("_j{\"*\":\"{senderName} sent {amount} to you\"}", [
                    s._param("amount", a, [
                        0,
                        m
                    ]),
                    s._param("senderName", l)
                ]) : s._("_j{\"*\":\"{senderName} sent {amount} to {receiverName}\"}", [
                    s._param("amount", a, [
                        0,
                        m
                    ]),
                    s._param("senderName", l),
                    s._param("receiverName", u)
                ]);
            } else {
                n = s._("_j{\"*\":\"Sent {amount} to you\"}", [
                    s._param("amount", a, [
                        0,
                        m
                    ])
                ]);
            }
        } else if (o("WAWebMsgGetters").getIsGroupMsg(e)) {
            n = d ? s._("_j{\"*\":\"{senderName} requested {amount} from you\"}", [
                s._param("amount", a, [
                    0,
                    m
                ]),
                s._param("senderName", l)
            ]) : s._("_j{\"*\":\"{senderName} requested {amount} from {receiverName}\"}", [
                s._param("amount", a, [
                    0,
                    m
                ]),
                s._param("senderName", l),
                s._param("receiverName", u)
            ]);
        } else {
            n = s._("_j{\"*\":\"Requested {amount} from you\"}", [
                s._param("amount", a, [
                    0,
                    m
                ])
            ]);
        }
        return n;
    }
    function h(e = 1) {
        return s._("_j{\"*\":\"{newMessageCount} new messages\",\"_1\":\"1 new message\"}", [
            s._plural(e, "newMessageCount")
        ]);
    }
    h.displayName = `${h.name} [from ${i.id}]`;
    l.getNotificationMessageBody = _;
    l.getNotificationBody = f;
    l.getPluralMessageNotificationBody = h;
}, 226);