__d("WAWebMexNewsletterOwnerNotificationHandler", [
    "WAJids",
    "WALogger",
    "WAWebBackendApi",
    "WAWebJidToWid",
    "WAWebMexNewsletterParseUtils",
    "WAWebNewsletterAdminNotificationJob",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    function _(e, t) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            try {
                const a = n.xwa2_notify_newsletter_owner_on_metadata_update;
                const { actor, id, thread_metadata } = a;
                if (thread_metadata == null) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[mex-owner-update] no metadata changes found"
                    ]))).tags("mex", "newsletter").sendLogs("newsletter-mex-owner-metadata-notification-no-metadata-updates");
                    return;
                }
                yield g(id, thread_metadata, actor);
                const f = actor?.id;
                if (f == null) {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[mex-owner-update] no actor found"
                    ]))).tags("mex", "newsletter").sendLogs("newsletter-mex-owner-metadata-notification-no-actor");
                    return;
                }
                const updates = [];
                const { description, name, picture, preview, settings } = thread_metadata;
                if (picture != null || preview != null) {
                    updates.push({
                        item: "profile_picture"
                    });
                }
                if (name != null) {
                    const R = name.text;
                    if (R == null) {
                        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[mex-owner-update] name missing updated value"
                        ]))).tags("mex", "newsletter").sendLogs("newsletter-mex-owner-metadata-notification-no-updated-name-value");
                    } else {
                        updates.push({
                            item: "name",
                            value: R
                        });
                    }
                }
                if (description != null) {
                    const L = description.text;
                    if (L == null) {
                        o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[mex-owner-update] description missing updated value"
                        ]))).tags("mex", "newsletter").sendLogs("newsletter-mex-owner-metadata-notification-no-updated-description-value");
                    } else {
                        updates.push({
                            item: "description",
                            value: L
                        });
                    }
                }
                const E = settings?.reaction_codes;
                if (settings != null && E != null) {
                    const k = o("WAWebMexNewsletterParseUtils").toReactionCodesSettingMixin(E.value);
                    if (k == null) {
                        o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[mex-owner-update] reaction_codes missing value"
                        ]))).tags("mex", "newsletter").sendLogs("newsletter-mex-owner-metadata-notification-no-updated-reaction-codes-value");
                    } else {
                        updates.push({
                            item: "reaction_setting",
                            value: k
                        });
                    }
                }
                if (updates.length === 0) {
                    o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[mex-owner-update] no updates found"
                    ]))).tags("mex", "newsletter").sendLogs("newsletter-mex-owner-metadata-notification-no-updates");
                    return;
                }
                const I = o("WAJids").toNewsletterJid(id);
                const T = o("WAWebJidToWid").newsletterJidToWid(I);
                const D = o("WAWebWidFactory").createWid(f);
                const x = {
                    newsletterId: o("WAWebWidFactory").asNewsletterWidOrThrow(T),
                    actorId: o("WAWebWidFactory").asUserWidOrThrow(D),
                    updates
                };
                o("WAWebBackendApi").frontendFireAndForget("displayNewsletterMetadataUpdateNotification", {
                    notification: x
                });
            } catch (error) {
                o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex-owner-update] failed to handle owner notification"
                ]))).catching(r("getErrorSafe")(error)).tags("mex", "newsletter").sendLogs("newsletter-mex-owner-notification-failed");
            }
        });
        return f.apply(this, arguments);
    }
    function g(e, t, n) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            if (!(t.preview?.direct_path !== "" || n != null)) {
                const a = o("WAJids").toNewsletterJid(e);
                const i = o("WAWebJidToWid").newsletterJidToWid(a);
                yield o("WAWebNewsletterAdminNotificationJob").updateProfilePictureDeletionAlertState(a);
                o("WAWebBackendApi").frontendFireAndForget("updateProfilePictureDeletionAlertState", {
                    newsletterWid: o("WAWebWidFactory").asNewsletterWidOrThrow(i)
                });
            }
        });
        return h.apply(this, arguments);
    }
    l.mexHandleNewsletterOwnerNotification = _;
}, 98);