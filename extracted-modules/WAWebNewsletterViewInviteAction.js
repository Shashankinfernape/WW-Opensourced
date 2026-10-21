__d("WAWebNewsletterViewInviteAction", [
    "WALogger",
    "WAWebContactCollection",
    "WAWebLoadNewsletterPreviewChatAction",
    "WAWebModalManager",
    "WAWebNewsletterAcceptAdminInviteModal.react",
    "WAWebNewsletterCollection",
    "WAWebNewsletterRevokeInvitePopup.react",
    "WAWebPDFNModal.react",
    "WAWebWamoPDFNGatingUtils",
    "asyncToGeneratorRuntime",
    "err",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ expiration, invitee, isSentByMe, newsletterWid }) {
            let t;
            if (!(newsletterWid == null || expiration == null)) {
                const c = r("WAWebNewsletterCollection").get(newsletterWid);
                if (!isSentByMe) {
                    const d = o("WAWebWamoPDFNGatingUtils").hasAckedNewsletterAdminInviteNuxOrTos();
                    return o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebPDFNModal.react"), {
                        pdfnId: o("WAWebWamoPDFNGatingUtils").getNewsletterAdminInviteNuxOrTos(),
                        verifyTosAccepted: o("WAWebWamoPDFNGatingUtils").hasAckedNewsletterAdminInviteNuxOrTos,
                        runIfTosAccepted: function() {
                            return m(newsletterWid, expiration, d);
                        }
                    }));
                }
                const p = invitee != null ? o("WAWebContactCollection").ContactCollection.get(invitee) : null;
                if (c != null && (t = c?.newsletterMetadata?.iAmAdminOrOwner()) != null && t && p != null) {
                    o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebNewsletterRevokeInvitePopup.react").NewsletterRevokeInvitePopupWithNewsletterInformation, {
                        chat: c,
                        contact: p
                    }));
                }
            }
        });
        return d.apply(this, arguments);
    }
    function m(e, t, n) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, expiration, extendedNux) {
            try {
                const i = yield o("WAWebLoadNewsletterPreviewChatAction").loadNewsletterPreviewChat(t.toString());
                if (i == null) {
                    throw r("err")("Failed to retrieve newsletter");
                }
                o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebNewsletterAcceptAdminInviteModal.react"), {
                    chat: i,
                    expiration,
                    extendedNux
                }));
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[openNewsletterAndInviteModal] admin invite open failed ",
                    ""
                ])), error).tags("newsletter").sendLogs("newsletter-failed-to-open-newsletter-invite");
            }
        });
        return p.apply(this, arguments);
    }
    l.viewNewsletterInviteAction = c;
}, 98);