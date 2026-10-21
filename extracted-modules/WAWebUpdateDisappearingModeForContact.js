__d("WAWebUpdateDisappearingModeForContact", [
    "WALogger",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebDBUpdateContactTable",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ contactId, newDuration, newEphemeralityDisabled, newSettingTimestamp }) {
            const l = o("WAWebWidFactory").createUserWidOrThrow(contactId.user, contactId.server);
            const s = yield o("WAWebApiContact").getContactRecord(l);
            if (s) {
                const u = c({
                    contact: s,
                    newDuration,
                    newEphemeralityDisabled,
                    newSettingTimestamp
                });
                if (u) {
                    const { contactChange, effectiveDuration, effectiveSettingTimestamp, ephemeralityDisabledInFrontend } = u;
                    yield o("WAWebDBUpdateContactTable").updateContactTable(l, contactChange);
                    o("WAWebBackendApi").frontendFireAndForget("updateDisappearingMode", {
                        disappearingModeDuration: effectiveDuration,
                        disappearingModeSettingTimestamp: effectiveSettingTimestamp,
                        contactId: l,
                        isEphemeralityDisabled: ephemeralityDisabledInFrontend
                    });
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "updateDisappearingMode: Contact=",
                        " updated, new duration=",
                        " t=",
                        "."
                    ])), l.toLogString(), effectiveDuration, effectiveSettingTimestamp).tags("DM", "DDM");
                }
            }
        });
        return u.apply(this, arguments);
    }
    function c({ contact, newDuration, newEphemeralityDisabled, newSettingTimestamp }) {
        const contact_disappearingModeSettingTimestamp = contact.disappearingModeSettingTimestamp;
        const l = contact_disappearingModeSettingTimestamp == null && newSettingTimestamp !== 0 || contact_disappearingModeSettingTimestamp != null && contact_disappearingModeSettingTimestamp < newSettingTimestamp;
        const contactChange = {};
        let contact_isEphemeralityDisabled = contact.isEphemeralityDisabled;
        let c = false;
        if (newEphemeralityDisabled === true && contact.isEphemeralityDisabled !== true) {
            contactChange.isEphemeralityDisabled = true;
            contact_isEphemeralityDisabled = true;
            c = true;
        } else if (newEphemeralityDisabled === false && contact.isEphemeralityDisabled != null) {
            contactChange.isEphemeralityDisabled = undefined;
            contact_isEphemeralityDisabled = undefined;
            c = true;
        }
        if (!l && !c) {
            return null;
        }
        if (l) {
            contactChange.disappearingModeDuration = newDuration;
            contactChange.disappearingModeSettingTimestamp = newSettingTimestamp;
        }
        const effectiveDuration = l ? newDuration : contact.disappearingModeDuration ?? 0;
        const effectiveSettingTimestamp = l ? newSettingTimestamp : contact_disappearingModeSettingTimestamp ?? 0;
        return {
            contactChange,
            ephemeralityDisabledInFrontend: contact_isEphemeralityDisabled,
            effectiveDuration,
            effectiveSettingTimestamp
        };
    }
    l.updateDisappearingModeForContact = s;
}, 98);