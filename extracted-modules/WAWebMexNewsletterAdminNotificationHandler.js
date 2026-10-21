__d("WAWebMexNewsletterAdminNotificationHandler", [
    "WALogger",
    "WAWebAsISOCountryCode",
    "WAWebBackendApi",
    "WAWebCommonNewsletterEnums",
    "WAWebJidToWid",
    "WAWebNewsletterAdminNotificationJob",
    "WAWebNewsletterHandleMessageDeliveryUpdateNotification",
    "WAWebNewsletterValidationUtils",
    "WAWebNux",
    "WAWebUserPrefsNuxPreferences",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, { xwa2_notify_newsletter_on_admin_metadata_update }) {
            const { admin_settings, id, messages, thread_metadata } = xwa2_notify_newsletter_on_admin_metadata_update;
            try {
                if (id == null) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[mex][newsletter] null id in admin_metadata_update"
                    ]))).tags("mex", "newsletter").sendLogs("newsletter-mex-admin-metadata-notification-unexpected-null-id");
                    return;
                }
                yield _(id, thread_metadata);
                yield g(id, messages);
                yield y(id, admin_settings);
            } catch (e) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex][newsletter] admin-metadata persist failed"
                ]))).tags("mex", "newsletter").sendLogs("mex-newsletter-admin-metadata-notification-db-fail");
            }
        });
        return p.apply(this, arguments);
    }
    function _(e, t) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t?.geo_states != null) {
                const n = t.geo_states;
                const r = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(e);
                const a = o("WAWebJidToWid").newsletterJidToWid(r);
                const i = n.reduce((acc, item)=>{
                    const r = item.country_code != null ? o("WAWebAsISOCountryCode").asISOCountryCode(item.country_code) : null;
                    if (r != null) {
                        if (o("WAWebCommonNewsletterEnums").NewsletterState.cast(item.state.type?.toLowerCase()) === o("WAWebCommonNewsletterEnums").NewsletterState.GeoSuspended) {
                            acc.countriesToAdd.push(r);
                        } else {
                            acc.countriesToRemove.push(r);
                        }
                    }
                    return acc;
                }, {
                    countriesToAdd: [],
                    countriesToRemove: []
                });
                const { countriesToAdd, countriesToRemove } = i;
                try {
                    if (countriesToAdd.length > 0) {
                        yield o("WAWebNewsletterAdminNotificationJob").updateGeosuspendedCountry({
                            countryCodes: countriesToAdd,
                            newsletterJid: r,
                            toAdd: true
                        });
                        o("WAWebBackendApi").frontendFireAndForget("updateGeosuspendedCountry", {
                            id: a,
                            countryCodes: countriesToAdd,
                            toAdd: true
                        });
                        const c = o("WAWebNux").getNewsletterAlertsBannerNuxKey(r);
                        o("WAWebUserPrefsNuxPreferences").resetNux(c);
                    }
                    if (countriesToRemove.length > 0) {
                        yield o("WAWebNewsletterAdminNotificationJob").updateGeosuspendedCountry({
                            countryCodes: countriesToRemove,
                            newsletterJid: r,
                            toAdd: false
                        });
                        o("WAWebBackendApi").frontendFireAndForget("updateGeosuspendedCountry", {
                            id: a,
                            countryCodes: countriesToRemove,
                            toAdd: false
                        });
                    }
                } catch (e) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[mex][newsletter] geosuspension persist failed"
                    ]))).tags("mex", "newsletter").sendLogs("mex-newsletter-admin-metadata-notification-geosuspension-db-fail");
                }
            }
        });
        return f.apply(this, arguments);
    }
    function g(e, t) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t != null) {
                try {
                    const n = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(e);
                    const a = t.edges.map(({ node })=>{
                        const code = node.message_delivery_update.issue.code;
                        let issueCode;
                        switch(code){
                            case "NEEDS_REVIEW":
                                {
                                    issueCode = 1;
                                    break;
                                }
                            case "NONE":
                                {
                                    issueCode = 0;
                                    break;
                                }
                            default:
                                throw r("err")(`Unexpected mex issue code: ${code}`);
                        }
                        return {
                            serverId: parseInt(node.server_id, 10),
                            issueCode
                        };
                    });
                    yield o("WAWebNewsletterHandleMessageDeliveryUpdateNotification").handleNewsletterMessageDeliveryUpdateNotificationImpl(n, a);
                } catch (e) {
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[mex][newsletter] hide-channel persist failed"
                    ]))).tags("mex", "newsletter").sendLogs("mex-newsletter-admin-metadata-notification-hidechannel-db-fail");
                }
            }
        });
        return h.apply(this, arguments);
    }
    function y(e, t) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const adminProfilesSettingEnabled = t?.admin_profiles_enabled;
            if (adminProfilesSettingEnabled != null) {
                try {
                    const r = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(e);
                    yield o("WAWebNewsletterAdminNotificationJob").updateNewsletterAdminProfileSettings(r, adminProfilesSettingEnabled);
                    const a = o("WAWebJidToWid").newsletterJidToWid(r);
                    o("WAWebBackendApi").frontendFireAndForget("updateNewsletterAdminProfileSetting", {
                        id: a,
                        adminProfilesSettingEnabled
                    });
                } catch (e) {
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[mex][newsletter] admin-profile-settings persist failed"
                    ]))).tags("mex", "newsletter").sendLogs("mex-newsletter-admin-metadata-notification-adminprofilesettings-db-fail");
                }
            }
        });
        return C.apply(this, arguments);
    }
    l.mexHandleNewsletterAdminNotification = m;
}, 98);