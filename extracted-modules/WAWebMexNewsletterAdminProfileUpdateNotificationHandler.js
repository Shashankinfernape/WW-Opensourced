__d("WAWebMexNewsletterAdminProfileUpdateNotificationHandler", [
    "WALogger",
    "WAWebBackendApi",
    "WAWebJidToWid",
    "WAWebNewsletterAdminNotificationJob",
    "WAWebNewsletterValidationUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, { xwa2_notify_newsletter_on_admin_metadata_update }) {
            const { admin_profile, id } = xwa2_notify_newsletter_on_admin_metadata_update;
            try {
                if (id == null) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[mex][newsletter] null id in admin_metadata_update"
                    ]))).tags("mex", "newsletter").sendLogs("newsletter-mex-admin-metadata-notification-unexpected-null-id");
                    return;
                }
                const c = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(id);
                const adminProfile = admin_profile?.name == null ? null : {
                    id: admin_profile?.id,
                    name: admin_profile?.name,
                    pictureId: admin_profile?.picture?.id,
                    pictureDirectPath: admin_profile?.picture?.direct_path
                };
                yield o("WAWebNewsletterAdminNotificationJob").updateNewsletterAdminProfile(c, adminProfile);
                const m = o("WAWebJidToWid").newsletterJidToWid(c);
                o("WAWebBackendApi").frontendFireAndForget("updateNewsletterAdminProfile", {
                    id: m,
                    adminProfile
                });
            } catch (e) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex][newsletter] admin-metadata persist failed"
                ]))).tags("mex", "newsletter").sendLogs("mex-newsletter-admin-metadata-notification-db-fail");
            }
        });
        return c.apply(this, arguments);
    }
    l.mexHandleNewsletterAdminProfileUpdateNotification = u;
}, 98);