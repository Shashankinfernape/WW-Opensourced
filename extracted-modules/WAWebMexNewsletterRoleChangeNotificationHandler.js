__d("WAWebMexNewsletterRoleChangeNotificationHandler", [
    "WALogger",
    "WAWebBackendApi",
    "WAWebMexNewsletterUtils",
    "WAWebNewsletterMetadataJob",
    "WAWebNewsletterStorageUtils",
    "WAWebNewsletterValidationUtils",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsNewsletter",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const a = n.xwa2_notify_newsletter_admin_promote != null ? "promote" : "demote";
            const i = n.xwa2_notify_newsletter_admin_promote ?? n.xwa2_notify_newsletter_admin_demote;
            if (i == null) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex][newsletter] admin-",
                    " failed: null payload"
                ])), a).tags("mex", "newsletter").sendLogs("mex-newsletternotification-role-change-fail");
                return;
            }
            try {
                const l = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(i.id);
                const u = i.user.id != null ? o("WAWebWidFactory").createUserWidOrThrow(i.user.id) : null;
                if (!u) {
                    return;
                }
                const c = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
                const newRole = o("WAWebMexNewsletterUtils").mapRoleToMembership(i.user_new_role);
                if (newRole == null) {
                    return;
                }
                if (u.equals(c)) {
                    yield o("WAWebNewsletterMetadataJob").updateNewsletterMetadata({
                        id: l,
                        membershipType: o("WAWebNewsletterStorageUtils").mapNewsletterMembershipTypeForStorage(newRole)
                    });
                    o("WAWebBackendApi").frontendFireAndForget("handleMyRoleChangeNotification", {
                        jid: l
                    });
                } else {
                    o("WAWebBackendApi").frontendFireAndForget("handleOtherUserRoleChangeNotification", {
                        jid: l,
                        userId: u,
                        newRole
                    });
                }
                yield o("WAWebUserPrefsNewsletter").flushCachedNewsletterSubscribers(l);
                o("WAWebBackendApi").frontendFireAndForget("displayRoleChangeDesktopNotification", {
                    notification: n
                });
            } catch (e) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex][newsletter] admin-",
                    " failed: jid parse err"
                ])), a).tags("mex", "newsletter").sendLogs(`mex-newsletternotification-role-change-fail-${a}`);
            }
        });
        return c.apply(this, arguments);
    }
    l.mexHandleNewsletterRoleChange = u;
}, 98);