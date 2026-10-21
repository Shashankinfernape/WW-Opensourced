__d("WAWebVoipContactUtils", [
    "WALogger",
    "WAWebApiContact",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (!t.isUserNotPSA()) {
                return true;
            }
            try {
                return !(yield o("WAWebApiContact").isAddressBookContact(o("WAWebWidToJid").widToUserJid(o("WAWebWidFactory").asUserWidOrThrow(t))));
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] isCallerNotContact failed; treat as non-contact"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("voip-is-caller-not-contact-fail");
                return true;
            }
        });
        return u.apply(this, arguments);
    }
    l.isCallerNotContact = s;
}, 98);