__d("WAWebNewsletterAdminInviteMessageValidationError", [
    "$InternalEnum",
    "WAWebHandleMsgError"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum")({
        MISSING_NEWSLETTER_JID: "newsletter_admin_invite_missing_newsletter_jid",
        MISSING_NEWSLETTER_NAME: "newsletter_admin_invite_missing_newsletter_name",
        MISSING_INVITE_EXPIRATION: "newsletter_admin_invite_missing_invite_expiration",
        INVALID_NEWSLETTER_JID: "newsletter_admin_invite_invalid_newsletter_jid"
    });
    const s = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.name = "NewsletterAdminInviteMessageValidationError";
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebHandleMsgError").MessageValidationError);
    l.NewsletterAdminInviteMessageValidationErrorCode = e;
    l.NewsletterAdminInviteMessageValidationError = s;
}, 98);