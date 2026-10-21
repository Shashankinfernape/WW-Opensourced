__d("WAWebLoadNewsletterPreviewChatAction", [
    "WALogger",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterCollection",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterPreviewJob",
    "WAWebNewsletterRoleIdentifier",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletters][loadNewsletterPreviewChat] Start"
            ])));
            try {
                let a;
                let l;
                const p = o("WAWebNewsletterRoleIdentifier").getRoleByIdentifier(t);
                const _ = yield o("WAWebNewsletterPreviewJob").getNewsletterPreviewData(t, p, n);
                const { ids, newsletterMessages, newsletterMetadata, newsletterReactions, newsletterVotes } = _;
                if (newsletterMetadata == null) {
                    throw r("err")("Did not receive newsletter preview data");
                }
                const b = r("WAWebNewsletterCollection").get(newsletterMetadata.idJid);
                if (b != null && ((a = b.newsletterMetadata?.iAmAdminOrOwner()) != null && a || (l = b.newsletterMetadata?.iAmSubscriber()) != null && l)) {
                    return b;
                }
                const v = o("WAWebNewsletterModelUtils").mapPreviewNewsletterToMetadata(newsletterMetadata);
                const newsletter = o("WAWebNewsletterModelUtils").mapPreviewNewsletterToChat(newsletterMetadata);
                yield o("WAWebNewsletterPreviewJob").persistPreviewNewsletterInfoInDb(newsletter, v, newsletterMessages);
                const R = newsletterMetadata?.newsletterPictureMetadataMixin?.picture;
                const pic = R != null ? o("WAWebNewsletterModelUtils").mapPicturesToProfilePicThumb(newsletterMetadata.idJid, R) : null;
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletters][loadNewsletterPreviewChat] updating models"
                ])));
                const E = yield o("WAWebNewsletterBridgeApi").NewsletterBridgeApi.loadNewsletterPreviewChat({
                    metadata: v,
                    pic,
                    newsletter,
                    messages: newsletterMessages
                });
                yield o("WAWebNewsletterBridgeApi").NewsletterBridgeApi.updateNewsletterMessages({
                    ids,
                    reactions: newsletterReactions,
                    pollVotes: newsletterVotes
                });
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletters][loadNewsletterPreviewChat] End"
                ])));
                return E;
            } catch (error) {
                const k = error instanceof Error ? error : {};
                const { message, name } = k;
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter][loadNewsletterPreviewChat] preview failed ",
                    "-",
                    ""
                ])), name, message).tags("newsletter").sendLogs("newsletter-failed-to-retrieve-newsletter-preview-data");
                throw error;
            }
        });
        return m.apply(this, arguments);
    }
    l.loadNewsletterPreviewChat = d;
}, 98);