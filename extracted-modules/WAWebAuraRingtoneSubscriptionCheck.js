__d("WAWebAuraRingtoneSubscriptionCheck", [
    "WALogger",
    "WAWebAuraGating",
    "WAWebAuraRingtoneDownloader",
    "WAWebAuraRingtonePrefs",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    function u() {
        if (!r("WAWebAuraGating").isRingtonesBenefitActive()) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[aura_ringtones] Checking for premium ringtones to revert"
            ])));
            o("WAWebAuraRingtoneDownloader").clearRingtoneCache();
            const t = o("WAWebAuraRingtonePrefs").getSelectedRingtoneId();
            if (t !== o("WAWebAuraRingtonePrefs").DEFAULT_RINGTONE_ID && t !== o("WAWebAuraRingtonePrefs").NONE_RINGTONE_ID) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[aura_ringtones] Reverting premium ringtone to default"
                ])));
                o("WAWebAuraRingtonePrefs").resetToDefaultRingtone();
            }
        }
    }
    function c() {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (r("WAWebAuraGating").isRingtonesBenefitActive()) {
                yield o("WAWebAuraRingtoneDownloader").downloadPremiumRingtones();
            } else {
                u();
            }
        });
        return d.apply(this, arguments);
    }
    l.checkAndRevertPremiumRingtones = u;
    l.initSubscriptionCheck = c;
}, 98);