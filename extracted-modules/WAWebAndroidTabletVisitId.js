__d("WAWebAndroidTabletVisitId", [
    "WALogger",
    "WATimeUtils",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = 30 * o("WATimeUtils").DAY_MILLISECONDS;
    let d = null;
    function m() {
        if (d == null) {
            d = {
                id: _()
            };
        }
        return d.id;
    }
    function p() {
        return d?.id ?? f(o("WATimeUtils").unixTimeMs());
    }
    function _() {
        const e = o("WATimeUtils").unixTimeMs();
        const t = f(e);
        if (t != null) {
            return t;
        }
        const n = h();
        if (n != null) {
            g(n, e);
        }
        return n;
    }
    function f(t) {
        let n;
        try {
            n = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.WA_WEB_ANDROID_TABLET_VISIT_ID);
        } catch (t) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[android-tablet-interstitial] visit ID not read"
            ])));
            return null;
        }
        if (n == null || typeof n !== "object" || Array.isArray(n)) {
            return null;
        }
        const a = n;
        const { createdAtMs: i, id: l } = a;
        if (typeof l !== "number" || !Number.isSafeInteger(l) || l <= 0 || typeof i !== "number") {
            return null;
        }
        const s = t - i;
        if (s >= 0 && s < c) {
            return l;
        }
        return null;
    }
    function g(e, t) {
        try {
            r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.WA_WEB_ANDROID_TABLET_VISIT_ID, {
                id: e,
                createdAtMs: t
            }, {
                shouldWriteToIdb: false
            });
        } catch (e) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[android-tablet-interstitial] visit ID not saved"
            ])));
        }
    }
    function h() {
        try {
            const e = new Uint32Array(2);
            self.crypto.getRandomValues(e);
            return Math.max(1, e[1] % Math.pow(2, 21) * Math.pow(2, 32) + e[0]);
        } catch (e) {
            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[android-tablet-interstitial] visit ID not created"
            ])));
            return null;
        }
    }
    l.getOrCreateAndroidTabletVisitId = m;
    l.getExistingAndroidTabletVisitId = p;
}, 98);