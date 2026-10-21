__d("WAWebMessageUiUtils", [
    "fbt",
    "Promise",
    "WAUnicodeUtils",
    "WAWebAlbumMessageUtils",
    "WAWebClock",
    "WAWebContactGetters",
    "WAWebDropdown.react",
    "WAWebElevatedPushNamesFlag",
    "WAWebFbtCommon",
    "WAWebFbtIntlList",
    "WAWebFileUtils",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebL10nFilesize",
    "WAWebMediaTypes",
    "WAWebMessageMeta.react",
    "WAWebMessagePluginGetAriaLabelForMsgTextComponent",
    "WAWebMimeTypes",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebQuotedMsgModelUtils",
    "WAWebQuotedMsgUtils",
    "WAWebReactionsCollection",
    "WAWebReactionsUtils",
    "WAWebStatusUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFormat",
    "asyncToGeneratorRuntime",
    "compactMap",
    "escapeRegex",
    "fbs",
    "isEmptyObject"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = new Set([
        o("WAWebMediaTypes").MediaDataStage.FETCHING,
        o("WAWebMediaTypes").MediaDataStage.UPLOADING
    ]);
    function c(messageText, mentionMap) {
        if (r("isEmptyObject")(mentionMap)) {
            return messageText;
        }
        const n = Object.keys(mentionMap).map(r("escapeRegex")).join("|");
        return messageText.replace(new RegExp(`(${n})(?!\\d)`, "g"), (e)=>o("WAWebFrontendContactGetters").getDisplayName(mentionMap[e]));
    }
    function d(e) {
        if (e == null) {
            return null;
        }
        if (e) {
            return s._("Deselect message");
        }
        return s._("Select message");
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    function m(e) {
        const n = o("WAWebFrontendMsgGetters").getMediaData(e);
        const r = {
            type: o("WAWebMsgGetters").getType(e),
            subtype: o("WAWebMsgGetters").getSubtype(e),
            isGif: n?.isGif,
            quotedMsg: o("WAWebQuotedMsgModelUtils").getQuotedMsgObj(e),
            senderWid: o("WAWebMsgGetters").getSender(e)
        };
        const a = v(r);
        const i = n?.filename ?? null;
        const l = o("WAWebFrontendContactGetters").getFormattedShortName(o("WAWebFrontendMsgGetters").getSenderObj(e));
        return s._("{type}{filename} from {sender}{caption}", [
            s._param("type", a),
            s._param("filename", i),
            s._param("sender", l),
            s._param("caption", e.caption)
        ]);
    }
    m.displayName = `${m.name} [from ${i.id}]`;
    function p({ optionsWithCounts, pollName }) {
        return s._("{poll-name} top vote counts: {poll-results}.", [
            s._param("poll-name", pollName),
            s._param("poll-results", optionsWithCounts)
        ]);
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    function _(e) {
        return s._("Maybe {name}", [
            s._param("name", e)
        ]);
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    function f(e, t) {
        if (e != null) {
            return e;
        }
        const n = t != null && t.length > 0 ? s._("Sticker with: {emojis}", [
            s._param("emojis", t)
        ]) : s._("Sticker with no label");
        return n;
    }
    function g(e) {
        const { filename, mimetype, pageCount } = e;
        let l = r("fbs")._("Untitled").toString();
        if (filename != null && filename !== "") {
            l = filename;
        }
        let u = null;
        let c = null;
        let d = null;
        if (pageCount > 0) {
            u = s._("_j{\"*\":\"{count} pages\",\"_1\":\"1 page\"}", [
                s._plural(pageCount, "count")
            ]);
        }
        const m = filename ? o("WAWebFileUtils").getFileExtension(filename) : null;
        let p = null;
        if (Object.hasOwn(o("WAWebMimeTypes").DOCUMENT_MIMETYPES, mimetype)) {
            p = o("WAWebMimeTypes").DOCUMENT_MIMETYPES[mimetype]?.ext;
        }
        if (p == null || m != null && p !== m) {
            p = m;
        }
        if (p != null) {
            c = p.toUpperCase();
        }
        d = o("WAWebL10nFilesize").getL10nFilesize(e.size ?? 0);
        const f = "•";
        const g = u != null ? f : null;
        const h = c != null ? f : null;
        return s._("Document name: {file-name}. {page-count}{page-separator}{file-type}{type-separator}{file-size}", [
            s._param("file-name", l),
            s._param("page-count", u),
            s._param("page-separator", g),
            s._param("file-type", c),
            s._param("type-separator", h),
            s._param("file-size", d)
        ]);
    }
    g.displayName = `${g.name} [from ${i.id}]`;
    function h(type, ariaMessageSpecific) {
        switch(type){
            case o("WAWebMsgType").MSG_TYPE.POLL_CREATION:
            case o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT:
                if (ariaMessageSpecific) {
                    return p(ariaMessageSpecific);
                }
                return null;
            case o("WAWebMsgType").MSG_TYPE.STICKER:
                {
                    const i = ariaMessageSpecific?.mediaData?.accessibilityLabel;
                    const l = ariaMessageSpecific?.mediaData?.emojis?.join(" ");
                    if (i != null || l != null) {
                        return f(i, l);
                    }
                    return null;
                }
            case o("WAWebMsgType").MSG_TYPE.PTT:
            case o("WAWebMsgType").MSG_TYPE.PTV:
            case o("WAWebMsgType").MSG_TYPE.AUDIO:
                {
                    const c = ariaMessageSpecific?.mediaData?.duration != null ? o("WAWebClock").Clock.durationStr(ariaMessageSpecific.mediaData.duration) : null;
                    if (c != null) {
                        return s._("Duration: {media-duration}", [
                            s._param("media-duration", c)
                        ]);
                    }
                    return null;
                }
            case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
                {
                    if (ariaMessageSpecific == null || ariaMessageSpecific?.mediaData == null) {
                        return null;
                    }
                    const d = ariaMessageSpecific.mediaData;
                    return g(d);
                }
            case o("WAWebMsgType").MSG_TYPE.REVOKED:
                return ariaMessageSpecific?.revokedLabel;
            case o("WAWebMsgType").MSG_TYPE.ALBUM:
                if (ariaMessageSpecific) {
                    return R(r("compactMap")(ariaMessageSpecific.associatedMessages, function(e) {
                        return o("WAWebFrontendMsgGetters").getAsAlbumAsset(e.unsafe());
                    }));
                }
                return null;
            case o("WAWebMsgType").MSG_TYPE.VIDEO:
                {
                    if (ariaMessageSpecific?.mediaData?.isGif === true && ariaMessageSpecific.mediaData.accessibilityLabel != null) {
                        return ariaMessageSpecific.mediaData.accessibilityLabel;
                    }
                    break;
                }
            default:
                return null;
        }
    }
    function y(e, initialPageSize) {
        if (o("WAUnicodeUtils").numCodepoints(e) > initialPageSize) {
            const n = o("WAUnicodeUtils").substring(e, 0, initialPageSize);
            return s._("{text-content}… Read more", [
                s._param("text-content", n)
            ]);
        }
        return e;
    }
    function C({ ariaLabelMessageType, ariaMessageSpecific, initialPageSize, mentionMap, messageText }) {
        const l = h(ariaLabelMessageType.type, ariaMessageSpecific);
        if (l != null) {
            return l;
        }
        if (messageText != null && messageText !== "") {
            let s = messageText;
            if (mentionMap != null) {
                s = c(messageText, mentionMap);
            }
            return y(s, initialPageSize);
        }
        const u = o("WAWebMessagePluginGetAriaLabelForMsgTextComponent").getAriaLabelForMsgTextComponent({
            type: ariaLabelMessageType.type,
            subtype: ariaLabelMessageType.subtype,
            isGif: ariaLabelMessageType.isGif
        });
        return u ?? "";
    }
    function b(quotedMsg, isElevatedPushNamesEnabled) {
        if (quotedMsg != null) {
            const n = S({
                contact: quotedMsg.senderObj,
                isElevatedPushNamesEnabled,
                sender: quotedMsg.author
            });
            const r = o("WAWebQuotedMsgUtils").formatQuotedMsg(quotedMsg);
            return s._("to quoted message from {quoted-message-author}: {quoted-message-body}", [
                s._param("quoted-message-author", n),
                s._param("quoted-message-body", r)
            ]);
        }
        return "";
    }
    function v({ isGif = false, quotedMsg, senderWid, subtype, type }) {
        let u = null;
        const c = o("WAWebMessagePluginGetAriaLabelForMsgTextComponent").getAriaLabelForMsgTextComponent({
            type,
            subtype,
            isGif
        });
        if (quotedMsg != null) {
            const d = o("WAWebUserPrefsMeUser").isMeAccount(senderWid);
            u = d ? s._("replied") : s._("replied");
        }
        if (u != null || c != null) {
            return s._("{reply-message} {msg-type}", [
                s._param("reply-message", u),
                s._param("msg-type", c)
            ]);
        }
        return null;
    }
    function S({ contact, hideYou = false, isElevatedPushNamesEnabled, sender }) {
        const u = o("WAWebUserPrefsMeUser").isMeAccount(sender);
        let c = "";
        if (contact != null) {
            if (u) {
                if (hideYou) {
                    return "";
                }
                c = r("WAWebFbtCommon")("You");
            } else if (o("WAWebContactGetters").getName(contact) || o("WAWebContactGetters").getVerifiedName(contact) && o("WAWebContactGetters").getVerifiedLevel(contact) !== 0 || o("WAWebContactGetters").getIsSupportAccount(contact)) {
                c = o("WAWebContactGetters").getIsSupportAccount(contact) ? o("WAWebFrontendContactGetters").getFormattedName(contact) : contact.name ?? contact.verifiedName;
            } else if (r("WAWebWid").isPSA(contact.id)) {
                c = "WhatsApp";
            } else if (isElevatedPushNamesEnabled) {
                let p;
                const f = o("WAWebContactGetters").getNotifyName(contact) ?? contact.pushname;
                const g = _(f);
                const h = (p = contact.id) != null && p.isLid() ? o("WAWebFrontendContactGetters").getUserDisplayNameForLid(contact) : o("WAWebWidFormat").widToFormattedUser(contact.id);
                c = s._("{pushname-label} {number-label}", [
                    s._param("pushname-label", g),
                    s._param("number-label", h)
                ]);
            } else {
                let y;
                c = (y = contact.id) != null && y.isLid() ? o("WAWebFrontendContactGetters").getUserDisplayNameForLid(contact) : o("WAWebWidFormat").widToFormattedUser(contact.id);
                const C = o("WAWebContactGetters").getNotifyName(contact);
                const b = C != null && C !== "" ? C : contact.pushname;
                c = `${c} ${b}`;
            }
        }
        return c;
    }
    function R(e) {
        return r("WAWebFbtIntlList")(o("WAWebAlbumMessageUtils").getAlbumPhotoAndVideoCountText(e.map((e)=>e.unsafe())), r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA).toString();
    }
    function L(e) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const r = t[0];
            const sender = o("WAWebMsgGetters").getSender(r);
            const contact = o("WAWebFrontendMsgGetters").getSenderObj(r.unsafe());
            if (sender != null) {
                const l = o("WAWebFrontendMsgGetters").getMaybeChat(r.unsafe());
                const isElevatedPushNamesEnabled = o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(l);
                const c = S({
                    contact,
                    isElevatedPushNamesEnabled,
                    sender
                });
                const d = t.map((e)=>o("WAWebReactionsCollection").ReactionsCollection.find(e.id));
                const m = yield (e || (e = n("Promise"))).all(d);
                const p = o("WAWebReactionsUtils").getReactionEmojisAndSum(m);
                if (t.length > 0 && o("WAWebFrontendMsgGetters").getAsAlbumAsset(t[0].unsafe())) {
                    const _ = s._("Media album");
                    const messageTextLocal = R(t);
                    let g = null;
                    if (p.numberOfSenderReactions > 0) {
                        g = I(p.numberOfSenderReactions);
                    }
                    return k({
                        authorName: c,
                        messageTypeString: _,
                        messageTextLocal,
                        replyMsgSummary: null,
                        time: null,
                        messageStatusText: null,
                        messageEditedText: null,
                        hasReactionText: g
                    });
                }
            }
        });
        return E.apply(this, arguments);
    }
    function k({ authorName, hasReactionText, messageEditedText, messageStatusText, messageTextLocal, messageTypeString, replyMsgSummary, time }) {
        return s._("{author-name} {message-type} {message-text} {reply-msg-summary} {time-sent} {message-status} {message-edited} {has-reaction}", [
            s._param("author-name", authorName),
            s._param("message-type", messageTypeString),
            s._param("message-text", messageTextLocal),
            s._param("reply-msg-summary", replyMsgSummary),
            s._param("time-sent", time),
            s._param("message-status", messageStatusText),
            s._param("message-edited", messageEditedText),
            s._param("has-reaction", hasReactionText)
        ]);
    }
    k.displayName = `${k.name} [from ${i.id}]`;
    function I(e) {
        if (e === 1) {
            return s._("has reaction");
        }
        return s._("has reactions");
    }
    function T({ ack, ariaLabelMessageType, asRevoked, isElevatedPushNamesEnabled, isSentByMe, messageDescription, numberReactions, senderContact, senderWid, shouldShowEditedIndicator, t: t_1 }) {
        const replyMsgSummary = b(ariaLabelMessageType.quotedMsg, isElevatedPushNamesEnabled);
        const _ = v(ariaLabelMessageType);
        const time = o("WAWebClock").Clock.timestampStr(t_1);
        const g = isSentByMe && !asRevoked;
        let h = null;
        let messageStatusText = null;
        let messageEditedText = null;
        if (g) {
            const R = o("WAWebStatusUtils").getMessageStatusLabel(ack);
            messageStatusText = R;
        }
        if (shouldShowEditedIndicator === true && !asRevoked) {
            messageEditedText = o("WAWebMessageMeta.react").getEditedLabel();
        }
        const L = S({
            contact: senderContact,
            hideYou: !!asRevoked,
            isElevatedPushNamesEnabled,
            sender: senderWid
        });
        if (numberReactions) {
            h = I(numberReactions);
        }
        return k({
            authorName: L,
            messageTypeString: _,
            messageTextLocal: messageDescription,
            replyMsgSummary,
            time,
            messageStatusText,
            messageEditedText,
            hasReactionText: h
        });
    }
    function D(e, t) {
        const n = document.createElement("div");
        n.style.position = "fixed";
        n.style.left = `${e}px`;
        n.style.top = `${t}px`;
        n.style.width = "0px";
        n.style.height = "0px";
        n.style.pointerEvents = "none";
        return n;
    }
    function x(e) {
        const window_innerWidth = window.innerWidth;
        const n = 300;
        const r = 90;
        const a = 4;
        const i = e.top >= r + a;
        const l = e.left + e.width / 2 >= n / 2;
        const s = window_innerWidth - (e.left + e.width / 2) >= n / 2;
        const u = (anchorY, dirY)=>{
            if (l && s) {
                return {
                    anchorX: e.left + e.width / 2,
                    anchorY,
                    dirX: o("WAWebDropdown.react").DirX.CENTER,
                    dirY
                };
            }
            if (l && !s) {
                return {
                    anchorX: e.right,
                    anchorY,
                    dirX: o("WAWebDropdown.react").DirX.LEFT,
                    dirY
                };
            }
            if (!l && s) {
                return {
                    anchorX: e.left,
                    anchorY,
                    dirX: o("WAWebDropdown.react").DirX.RIGHT,
                    dirY
                };
            }
            return {
                anchorX: e.left + e.width / 2,
                anchorY,
                dirX: o("WAWebDropdown.react").DirX.CENTER,
                dirY
            };
        };
        if (i) {
            return u(e.top - a, o("WAWebDropdown.react").DirY.TOP);
        }
        return u(e.bottom + a, o("WAWebDropdown.react").DirY.BOTTOM);
    }
    l.ETA_SUPPORTED_STATES = u;
    l.getMediaCheckBoxAriaLabel = d;
    l.getMediaAriaLabel = m;
    l.getAriaLabelForMaybeName = _;
    l.getStickerCustomLabel = f;
    l.getMessageTextLabel = C;
    l.getMessageTypeAriaLabel = v;
    l.getAuthorName = S;
    l.getLegacyAlbumRowAriaLabel = L;
    l.getMessageAriaLabel = T;
    l.createVirtualAnchor = D;
    l.calculateReactionTrayPosition = x;
}, 226);