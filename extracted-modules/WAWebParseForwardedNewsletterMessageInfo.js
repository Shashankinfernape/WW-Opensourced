__d("WAWebParseForwardedNewsletterMessageInfo", [
    "WALogger",
    "WAWebChatEntryPoint",
    "WAWebDecodeJid",
    "WAWebProtobufsE2E.pb",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    let e;
    function s({ newsletterJid, newsletterName, profileName, serverMessageId }) {
        const i = o("WAWebDecodeJid").strictDecodeJid(newsletterJid);
        return {
            newsletterId: i != null ? o("WAWebWidFactory").asNewsletterWidOrThrow(i) : undefined,
            newsletterName,
            serverMessageId,
            profileName
        };
    }
    function u(t) {
        const r = t?.newsletter?.contentType;
        if (r == null) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Did not receive content type from newsletter annotation"
            ]))).tags("newsletter-logging").sendLogs("Missing content type in newsletter annotation");
            if (t?.newsletter?.serverMessageId == null) {
                return o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterLinkCard;
            }
            return o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterPostLinkCard;
        }
        if (r === o("WAWebProtobufsE2E.pb").ContextInfo$ForwardedNewsletterMessageInfo$ContentType.LINK_CARD) {
            if (t.shouldSkipConfirmation === true) {
                return o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterLinkCardButton;
            }
            return o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterLinkCard;
        }
        return o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterPostLinkCard;
    }
    l.parseForwardedNewsletterMessageInfo = s;
    l.getChatEntryPointFromNewsletterLinkAnnotation = u;
}, 98);