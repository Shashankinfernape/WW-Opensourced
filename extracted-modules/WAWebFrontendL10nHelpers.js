__d("WAWebFrontendL10nHelpers", [
    "WALogger",
    "WATimeUtils",
    "WAWebAlarm",
    "WAWebL10NCookieUtils",
    "WAWebL10nGetRenderedLocale",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebURLUtils"
], function(t, n, r, o, a, i, l) {
    let e;
    let s = null;
    const u = "🌐";
    const c = "%F0%9F%8C%90";
    function d(t) {
        if (!o("WAWebRuntimeEnvironmentUtils").isWorker()) {
            if (s != null) {
                r("WAWebAlarm").clearTimeout(s);
            }
            o("WAWebL10NCookieUtils").setWAWebLocalePrefCookieValue(t);
            s = r("WAWebAlarm").setLocalTimeout(function() {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "l10n: renewing lang pref cookie TTL to: ",
                    ""
                ])), t);
                d(t);
            }, o("WATimeUtils").castUnixTimeToMillisTime(o("WATimeUtils").futureUnixTime(2 * o("WATimeUtils").WEEK_SECONDS)));
        }
    }
    function m() {
        if (!o("WAWebRuntimeEnvironmentUtils").isWorker()) {
            const e = o("WAWebL10NCookieUtils").getWAWebLocalePrefCookieValue();
            if (e == null) {
                d(o("WAWebL10nGetRenderedLocale").WAWebL10nGetRenderedLocale());
            } else {
                d(e);
            }
        }
    }
    function p() {
        if (!(o("WAWebRuntimeEnvironmentUtils").isWorker() || !r("WAWebURLUtils").canMuckHistory())) {
            const e = self.location.href;
            if (e.includes(`/${c}/`) || e.includes(`/${u}/`)) {
                window.history.replaceState({}, "", "/");
            }
            const t = new URL(e);
            if (t.searchParams.get("locale") != null) {
                t.searchParams.delete("locale");
                window.history.replaceState({}, "", t.href);
            }
        }
    }
    l.extendWAWebLocalePrefCookieTtl = m;
    l.mungeWAWebLocaleOverrideFromUrlIfNecessary = p;
}, 98);