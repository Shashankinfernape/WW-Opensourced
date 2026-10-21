__d("WAWebUpdateTextStatusForContact", [
    "WALogger",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebDBUpdateContactTable",
    "WAWebTextStatusUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(source) {
        return source === "mex-notification" || source === "mex-notification-side-sub";
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ contactId, emoji, ephemeralDuration, newUpdateTime, source, textString }) {
            const c = o("WAWebWidFactory").createUserWidOrThrow(contactId.user, contactId.server);
            const m = yield o("WAWebApiContact").getContactRecord(c);
            if (!m) {
                if (s(source)) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[textStatus] notification ",
                        ": no contact for ",
                        ""
                    ])), source, c.toLogString()).sendLogs("text-status-notification-no-contact", {
                        sampling: 0.1
                    });
                }
                return;
            }
            const p = d({
                contact: m,
                emoji,
                ephemeralDuration,
                newUpdateTime,
                textString
            });
            if (p) {
                yield o("WAWebDBUpdateContactTable").updateContactTable(c, babelHelpers.extends({}, p));
                o("WAWebBackendApi").frontendFireAndForget("updateTextStatus", babelHelpers.extends({}, p, {
                    contactId: c
                }));
            }
        });
        return c.apply(this, arguments);
    }
    function d({ contact, emoji, ephemeralDuration, newUpdateTime, textString }) {
        const contact_textStatusLastUpdateTime = contact.textStatusLastUpdateTime;
        const s = newUpdateTime === o("WAWebTextStatusUtils").CLEAR_TEXT_STATUS_LAST_UPDATE_TIME_VAL || newUpdateTime === o("WAWebTextStatusUtils").TEXT_STATUS_NOT_AUTHORIZED || newUpdateTime === o("WAWebTextStatusUtils").TEXT_STATUS_NOT_FETCHED;
        if (newUpdateTime == null || contact_textStatusLastUpdateTime != null && !s && newUpdateTime < contact_textStatusLastUpdateTime) {
            return null;
        }
        const textStatusLastUpdateTime = o("WAWebTextStatusUtils").resolveTextStatusUpdateTime(newUpdateTime, contact_textStatusLastUpdateTime);
        let textStatusExpiryTs;
        if (ephemeralDuration != null && ephemeralDuration > 0 && !s) {
            textStatusExpiryTs = Number(newUpdateTime) + Number(ephemeralDuration);
        }
        return {
            textStatusString: textString,
            textStatusEmoji: emoji,
            textStatusEphemeralDuration: ephemeralDuration,
            textStatusLastUpdateTime,
            textStatusExpiryTs
        };
    }
    l.updateTextStatusForContact = u;
}, 98);