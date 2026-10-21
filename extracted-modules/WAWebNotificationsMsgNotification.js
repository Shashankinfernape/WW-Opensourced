__d("WAWebNotificationsMsgNotification", [
    "fbt",
    "WAWebBotProfileCollection",
    "WAWebElevatedPushNamesFlag",
    "WAWebFrontendMsgGetters",
    "WAWebGetNotificationStrings",
    "WAWebGroupAgentAuthorName",
    "WAWebMsgGetters",
    "WAWebMsgModelUtils",
    "WAWebMsgNotificationPreview",
    "WAWebMsgType",
    "WAWebQuotedMsgModelUtils",
    "WAWebUA",
    "cr:4404"
], function(t, n, r, o, a, i, l, s) {
    const u = n("cr:4404") ?? {};
    const { getMessageNotificationFooter, getNotificationBodyForPreviewOff } = u;
    const m = new Set([
        o("WAWebMsgType").MSG_TYPE.ALBUM
    ]);
    function p(e) {
        if (!o("WAWebMsgGetters").getIsGroupMsg(e)) {
            return null;
        }
        let t = null;
        if (o("WAWebMsgGetters").getHasMentionOfMe(e)) {
            t = s._("Mentioned you").toString();
        }
        if (o("WAWebQuotedMsgModelUtils").isMyQuotedMsg(e)) {
            t = s._("Replied to you").toString();
        }
        if (o("WAWebMsgGetters").getHasMentionAll(e)) {
            t = s._("Mentioned all").toString();
        }
        return t;
    }
    function _(e, t) {
        const agentWid = o("WAWebMsgGetters").getSender(e);
        if (agentWid == null) {
            return null;
        }
        const a = o("WAWebBotProfileCollection").BotProfileCollection.get(agentWid);
        if (o("WAWebGroupAgentAuthorName").shouldUseGroupAgentAuthorName({
            agentWid,
            chat: t,
            product: a?.product,
            profileName: a?.name
        })) {
            return o("WAWebGroupAgentAuthorName").getGroupAgentAuthorName({
                agentWid,
                product: a?.product,
                profileName: a?.name,
                pushname: e.senderObj?.pushname
            });
        }
        return null;
    }
    function f(e) {
        let n = null;
        const r = o("WAWebFrontendMsgGetters").getChat(e);
        const a = o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(r);
        const i = o("WAWebMsgGetters").getNewsletterAdminProfile(e);
        let l;
        if (o("WAWebMsgGetters").getIsGroupMsg(e) || o("WAWebMsgGetters").getIsMetaBotInvokeResponse(e)) {
            l = _(e, r) ?? o("WAWebMsgModelUtils").getMsgDisplayName(e, {
                withPushName: a,
                withPushNameOnly: a,
                newPushNameFormatting: a,
                showVerifiedName: a
            });
        } else {
            if (i) {
                l = i.name;
            }
        }
        if (r.isLocked) {
            return {
                body: o("WAWebGetNotificationStrings").getPluralMessageNotificationBody(r.unreadCount).toString()
            };
        }
        if (e.type === o("WAWebMsgType").MSG_TYPE.CHAT && !o("WAWebMsgNotificationPreview").shouldShowMsgNotificationPreview(e)) {
            const f = getNotificationBodyForPreviewOff?.() ?? null;
            if (f != null) {
                n = f;
            } else if (o("WAWebMsgGetters").getIsGroupMsg(e)) {
                if (l != null) {
                    n = s._("Message from {name}", [
                        s._param("name", l)
                    ]);
                    l = undefined;
                } else {
                    n = s._("New message");
                }
            } else {
                n = o("WAWebGetNotificationStrings").getPluralMessageNotificationBody(r.unreadCount);
            }
        } else {
            if (e.type === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE && e.subtype === "sender_invite") {
                if (e.templateParams && e.templateParams[0] === "true") {
                    n = s._("Say hello on WhatsApp!");
                } else {
                    n = s._("Say hello!");
                }
            } else {
                n = o("WAWebGetNotificationStrings").getNotificationMessageBody(e);
            }
        }
        const g = getMessageNotificationFooter?.(r.unreadCount) ?? null;
        const h = p(e);
        if (h != null) {
            if (l != null) {
                l = `${h}: ${l}`;
            } else if (n != null) {
                n = s._("{mention-label}: {message-body}", [
                    s._param("mention-label", h),
                    s._param("message-body", n)
                ]);
            }
        }
        return babelHelpers.extends({
            body: n.toString(),
            author: l
        }, g != null && {
            footer: g.toString()
        });
    }
    function g() {
        return o("WAWebUA").UA.isBlink && o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC;
    }
    l.eligibleMessagesForNotificationRetriggering = m;
    l.getNotificationParts = f;
    l.shouldReplaceMsgNotificationManually = g;
}, 226);