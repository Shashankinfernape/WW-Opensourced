__d("WAWebMexNewsletterUserSettingChangeHandler", [
    "WAJids",
    "WALogger",
    "WAWebCreateChat",
    "WAWebNewsletterMetadataQueryJob",
    "WAWebNewsletterMetadataUpdateUtils",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterUpdateNewslettersRecordsJob",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { xwa2_notify_newsletter_on_user_setting_change }) {
            const { id, setting } = xwa2_notify_newsletter_on_user_setting_change;
            if (id == null) {
                throw r("err")("unexpected null id in xwa2_notify_newsletter_on_user_setting_change");
            }
            if (setting == null) {
                throw r("err")("unexpected null setting in xwa2_notify_newsletter_on_user_setting_change");
            }
            return c(id, setting);
        });
        return u.apply(this, arguments);
    }
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const a = o("WAWebNewsletterMetadataQueryJob").emptyNewsletterMetadataType(o("WAJids").toNewsletterJid(t));
            const i = babelHelpers.extends({}, a, {
                newsletterUserSettingsMetadataMixin: [
                    {
                        type: n.type,
                        value: n.value
                    }
                ]
            });
            const l = o("WAWebNewsletterModelUtils").mapNewsletterToModels(i);
            const { chat, metadata, pic } = l;
            try {
                yield o("WAWebNewsletterUpdateNewslettersRecordsJob").updateNewsletterChatRecords([
                    o("WAWebCreateChat").createNewsletterObjectForStorage(chat)
                ]);
                yield o("WAWebNewsletterMetadataUpdateUtils").updateNewsletterMetadataAndPic(chat, metadata, pic);
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex][newsletter][notification][user-setting-change]"
                ]))).catching(r("getErrorSafe")(error)).tags("mex", "newsletter").sendLogs("mex-newsletter-notification-user-setting-change-fail");
            }
        });
        return d.apply(this, arguments);
    }
    l.mexHandleNewsletterUserSettingChange = s;
}, 98);