__d("WAWebMusicUserPrefs", [
    "WATimeUtils",
    "WAWebAsISOCountryCode",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        const epoch = o("WATimeUtils").unixTime();
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").UserPrefs.MusicEligibleCountries, {
            countries: Array.from(e),
            epoch
        });
    }
    function s() {
        const e = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").UserPrefs.MusicEligibleCountries);
        if (e == null || typeof e !== "object") {
            return null;
        }
        const { countries, epoch } = e;
        if (!Array.isArray(countries) || typeof epoch !== "number" || o("WATimeUtils").unixTime() - epoch > o("WATimeUtils").WEEK_SECONDS) {
            return null;
        }
        return countries.reduce((acc, country)=>{
            if (typeof country !== "string") {
                return acc;
            }
            const n = o("WAWebAsISOCountryCode").asISOCountryCode(country);
            if (n != null) {
                acc.add(n);
            }
            return acc;
        }, new Set);
    }
    l.setMusicEligibleCountries = e;
    l.getMusicEligibleCountries = s;
}, 98);