__d("WAWebMusicPlaybackUtils", [
    "WAWebABProps",
    "WAWebAsISOCountryCode",
    "WAWebL10NCountryCodes",
    "WAWebMusicEligibleCountriesProvider",
    "WAWebMusicParsingUtils",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        const n = u();
        return n != null && t.has(n) && !e.has(n);
    }
    function s({ countryBlocklist, isAvailableForConsumption }) {
        const r = u();
        if (!o("WAWebABProps").getABPropConfigValue("music_on_chats_geogating_enabled") || r == null || !o("WAWebMusicEligibleCountriesProvider").provideMusicEligibleCountries().has(r)) {
            return "country";
        }
        if (isAvailableForConsumption != null) {
            if (isAvailableForConsumption) {
                return null;
            }
            return "song";
        }
        if (countryBlocklist != null && o("WAWebMusicParsingUtils").mapToCountryCode(countryBlocklist).has(r)) {
            return "song";
        }
        return null;
    }
    function u() {
        const e = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
        if (e == null) {
            return null;
        }
        return o("WAWebAsISOCountryCode").asISOCountryCode(o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(e.user));
    }
    function c() {
        const e = u();
        if (e == null) {
            return null;
        }
        switch(e){
            case "AC":
                return "SH";
            default:
                return e;
        }
    }
    l.canPlaybackMusic = e;
    l.getMusicMessageUnplayableReason = s;
    l.getUserCountryCode = u;
    l.getUserCountryCodeForSNAPL = c;
}, 98);