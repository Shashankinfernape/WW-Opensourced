__d("WAWebRevokeNewsletterAdminInviteAction", [
    "WALogger",
    "WAWebChatGetters",
    "WAWebNewsletterRevokeAdminInviteJob",
    "WAWebNewsletterValidationUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            if (!o("WAWebChatGetters").getIsNewsletter(t)) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[revokeNewsletterAdminInvite] non-newsletter chat"
                ]))).tags("newsletter").sendLogs("revoke-admin-invite-on-non-newsletter");
                throw r("err")("revoke-admin-invite-on-non-newsletter");
            }
            if (!t?.newsletterMetadata?.iAmOwner()) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[revokeNewsletterAdminInvite] owner-only action"
                ]))).tags("newsletter").sendLogs("non-channel-owner-revoking-an-admin-invite");
                throw r("err")("non-channel-owner-revoking-an-admin-invite");
            }
            try {
                const l = o("WAWebWidFactory").asUserWidOrThrow(n.id);
                const c = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(t.id.toJid());
                t?.newsletterMetadata?.pendingAdmins?.remove(n.id);
                yield o("WAWebNewsletterRevokeAdminInviteJob").revokeNewsletterAdminInvite(c, l);
            } catch (error) {
                const d = r("getErrorSafe")(error);
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[revokeNewsletterAdminInvite] revoke failed"
                ]))).catching(d).tags("newsletter").sendLogs("revoke-admin-invite-on-newsletter-failed");
                throw d;
            }
        });
        return d.apply(this, arguments);
    }
    l.revokeNewsletterAdminInviteAction = c;
}, 98);