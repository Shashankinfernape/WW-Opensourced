__d("WAWebPhoneNumberValidationUtils", [
    "WAIsoToCc",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = r("isStringNullOrEmpty")(e) ? null : r("WAIsoToCc")[e];
        if (n == null || t == null || !o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").isPhoneNumberValid(n, t)) {
            return null;
        }
        return `${n}${t}`;
    }
    l.getValidPhoneNumber = e;
}, 98);