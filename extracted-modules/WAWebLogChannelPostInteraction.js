__d("WAWebLogChannelPostInteraction", [
    "WAWebABProps",
    "WAWebApiParseUtils",
    "WAWebChannelPostInteractionWamEvent",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebNewsletterLoggingUtils",
    "WAWebWamEnumChannelUserType"
], function(t, n, r, o, a, i, l) {
    const e = new Set([
        "api.whatsapp.com",
        "call.whatsapp.com",
        "chat.whatsapp.com"
    ]);
    const s = /^\/call\/(?:video|voice)\/\w+/i;
    function u({ interactionType, msg, rawUrl }) {
        if (c(rawUrl) && o("WAWebMsgGetters").getIsNewsletterMsg(msg)) {
            const l = msg.serverId;
            if (l != null && o("WAWebABProps").getABPropConfigValue("channel_post_interaction_logging_enabled")) {
                const s = o("WAWebFrontendMsgGetters").getChat(msg).id;
                new (o("WAWebChannelPostInteractionWamEvent")).ChannelPostInteractionWamEvent({
                    channelPostInteractionType: interactionType,
                    channelUserType: o("WAWebNewsletterLoggingUtils").getChannelUserTypeFromMembershipType(o("WAWebFrontendMsgGetters").getChat(msg)?.newsletterMetadata) ?? o("WAWebWamEnumChannelUserType").CHANNEL_USER_TYPE.GUEST,
                    cid: s.user,
                    postId: l.toString()
                }).commit();
            }
        }
    }
    function c(t) {
        if (t == null) {
            return false;
        }
        let n;
        try {
            n = new URL(t);
        } catch (e) {
            return false;
        }
        if (n.protocol !== "http:" && n.protocol !== "https:") {
            return false;
        }
        return !o("WAWebApiParseUtils").isWhatsappHost(n) && !e.has(n.hostname.toLowerCase()) && !d(n);
    }
    function d(e) {
        return e.hostname.toLowerCase() === "web.whatsapp.com" && s.test(e.pathname);
    }
    l.logChannelPostInteraction = u;
    l.isExternalWebLink = c;
}, 98);