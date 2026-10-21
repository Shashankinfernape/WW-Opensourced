__d("WAWebPaymentsChatUtils", [
    "WAWebL10NCountryCodes",
    "WAWebLidMigrationUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        const n = o("WAWebLidMigrationUtils").toPn(e);
        const r = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(n?.user);
        return r === t;
    }
    l.doesUserHaveCountryPhoneNumber = e;
}, 98);