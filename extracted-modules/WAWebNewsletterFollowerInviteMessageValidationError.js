__d("WAWebNewsletterFollowerInviteMessageValidationError", [
    "$InternalEnum",
    "WAWebHandleMsgError"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum")({
        MISSING_NEWSLETTER_JID: "newsletter_follower_invite_missing_newsletter_jid",
        MISSING_NEWSLETTER_NAME: "newsletter_follower_invite_missing_newsletter_name",
        INVALID_NEWSLETTER_JID: "newsletter_follower_invite_invalid_newsletter_jid"
    });
    const s = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.name = "NewsletterFollowerInviteMessageValidationError";
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebHandleMsgError").MessageValidationError);
    l.NewsletterFollowerInviteMessageValidationErrorCode = e;
    l.NewsletterFollowerInviteMessageValidationError = s;
}, 98);