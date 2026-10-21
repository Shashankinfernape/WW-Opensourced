__d("WAWebUserPrefsMeUser", [
    "WABaseGlobals",
    "WALogger",
    "WAWebBeyondPhoneNumberGatingUtils",
    "WAWebGlobals",
    "WAWebMemoizeWithClearUtils",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebUserPrefsBase",
    "WAWebUserPrefsKeys",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "err",
    "gkx",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let s;
    let u;
    let c;
    function d() {
        if (o("WAWebRuntimeEnvironmentUtils").isWorker()) {
            return o("WAWebWidFactory").createWid(o("WAWebGlobals").getMyDeviceJid());
        }
        const e = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(o("WAWebUserPrefsKeys").KEYS.LAST_WID_MD);
        if (typeof e === "string" && r("WAWebWid").isWid(e)) {
            return o("WAWebWidFactory").createWid(e);
        }
    }
    function m(e = true) {
        const t = o("WAWebRuntimeEnvironmentUtils").isWorker() ? o("WAWebGlobals").getMyLidDeviceJid() : o("WAWebUserPrefsBase").userPreferencesStoreBase.get(o("WAWebUserPrefsKeys").KEYS.LID);
        const n = typeof t === "string" ? t : null;
        const a = r("WAWebWid").isWid(n);
        if (n == null || !a) {
            return null;
        }
        return o("WAWebWidFactory").createWid(n);
    }
    function p() {
        return r("nullthrows")(d(), "me");
    }
    function _() {
        return r("nullthrows")(m(), "meLid");
    }
    function f() {
        const e = m(false);
        if (e != null) {
            return e.getDeviceId();
        }
        const t = d();
        if (t != null) {
            return t.getDeviceId();
        }
        return null;
    }
    const g = o("WAWebMemoizeWithClearUtils").memoizeWithClear(function() {
        const e = d();
        if (e) {
            return o("WAWebWidFactory").asUserWidOrThrow(e);
        }
    });
    const h = g[0];
    const y = g[1];
    const C = o("WAWebMemoizeWithClearUtils").memoizeWithClear(function() {
        const e = m();
        if (e == null) {
            return null;
        }
        return o("WAWebWidFactory").asUserLidOrThrow(e);
    });
    const b = C[0];
    const v = C[1];
    function S() {
        return o("WAWebWidFactory").asUserWidOrThrow(p());
    }
    function R() {
        return r("nullthrows")(b(), "meLidUser");
    }
    function L() {
        if (o("WAWebBeyondPhoneNumberGatingUtils").removePnDependenciesEnabled()) {
            return R();
        }
        return S();
    }
    function E() {
        if (o("WAWebBeyondPhoneNumberGatingUtils").removePnDependenciesEnabled()) {
            return b() != null;
        }
        return h() != null;
    }
    function k() {
        if (o("WAWebBeyondPhoneNumberGatingUtils").removePnDependenciesEnabled()) {
            return _();
        }
        return p();
    }
    function I(e) {
        if (e.isLid()) {
            return R();
        }
        const t = h();
        if (t != null) {
            return t;
        }
        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "[getMeUserMatchingAddressingModeOrThrow] no matching self PN for given PN wid"
        ]))).sendLogs("no-matching-self-pn-for-given-pn-wid");
        throw r("err")("no matching self PN for given PN wid");
    }
    function T() {
        const e = _();
        return o("WAWebWidFactory").createDeviceWidFromUserAndDevice(e.user, e.server, 0);
    }
    function D() {
        return r("nullthrows")(N(), "meDisplayName");
    }
    function x() {
        return [
            _(),
            d()
        ].filter(Boolean);
    }
    function $(e) {
        y();
        o("WAWebUserPrefsBase").userPreferencesStoreBase.set(o("WAWebUserPrefsKeys").KEYS.LAST_WID_MD, e == null ? null : e.toString());
        o("WABaseGlobals").setMyJids(o("WAWebWidToJid").widToMyJids(e));
    }
    function P(e) {
        v();
        if (o("WAWebRuntimeEnvironmentUtils").isWorker()) {
            o("WAWebGlobals").setMyLidDeviceJid(e.toString());
        } else {
            o("WAWebUserPrefsBase").userPreferencesStoreBase.set(o("WAWebUserPrefsKeys").KEYS.LID, e.toString());
        }
    }
    function N() {
        if (o("WAWebRuntimeEnvironmentUtils").isWorker()) {
            o("WAWebGlobals").getMyDisplayName();
        }
        const e = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME);
        if (typeof e === "string") {
            return e;
        }
    }
    function M(e) {
        if (o("WAWebRuntimeEnvironmentUtils").isWorker()) {
            o("WAWebGlobals").setMyDisplayName(e);
        } else {
            o("WAWebUserPrefsBase").userPreferencesStoreBase.set(o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME, e);
        }
    }
    function w(e) {
        const t = e instanceof r("WAWebWid");
        if (!t) {
            if (r("gkx")("26258")) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "isWID: input exists but is not WID"
                ])));
            } else {
                let n = "";
                try {
                    n = JSON.stringify(e);
                } catch (e) {}
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "isWID: input exists but is not WID: ",
                    ", ",
                    ""
                ])), n, r("err")("").stack).sendLogs("WAWebUserPrefsMeUser-invalid-wid");
            }
        }
        return t;
    }
    function A(e) {
        if (e == null || !w(e)) {
            return false;
        }
        return O(e) || F(e);
    }
    function F(e) {
        const t = h();
        return t != null && e.isSameAccountAndAddressingMode(t);
    }
    function O(e) {
        const t = m();
        return t != null && e.isSameAccountAndAddressingMode(t);
    }
    function B(e) {
        if (e == null || !w(e)) {
            return false;
        }
        const t = d();
        if (t != null && e.equals(t)) {
            return true;
        }
        const n = m();
        return n != null && e.equals(n);
    }
    function W(e) {
        if (e == null || !w(e)) {
            return false;
        }
        const t = b();
        if (t != null && e.equals(t)) {
            return true;
        }
        const n = h();
        return n != null && e.equals(n);
    }
    function q(e) {
        return A(o("WAWebWidFactory").createWid(e));
    }
    function U() {
        let e = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(o("WAWebUserPrefsKeys").KEYS.UNKNOWN_ID);
        if (typeof e !== "string" || e === "") {
            e = `unknown-${Math.floor(Math.random() * 10000000000)}`;
            V(e);
        }
        return e;
    }
    function V(e) {
        return o("WAWebUserPrefsBase").userPreferencesStoreBase.set(o("WAWebUserPrefsKeys").KEYS.UNKNOWN_ID, e);
    }
    l.getMaybeMeDevicePn = d;
    l.getMaybeMeDeviceLid = m;
    l.getMeDevicePnOrThrow_DO_NOT_USE = p;
    l.getMeDeviceLidOrThrow = _;
    l.getMaybeMeDeviceId = f;
    l.getMaybeMePnUser = h;
    l.clearGetMaybeMePnUserCache = y;
    l.getMaybeMeLidUser = b;
    l.clearGetMaybeMeLidUserCache = v;
    l.getMePnUserOrThrow_DO_NOT_USE = S;
    l.getMeLidUserOrThrow = R;
    l.getMeUserOrThrow = L;
    l.isMeUserRestored = E;
    l.getMeDeviceOrThrow = k;
    l.getMeUserMatchingAddressingModeOrThrow = I;
    l.getMyPrimaryForOutgoingPeerMessage = T;
    l.getMeDisplayNameOrThrow = D;
    l.getMeDeviceWids = x;
    l.setMe = $;
    l.setMeLid = P;
    l.getMaybeMeDisplayName = N;
    l.setMeDisplayName = M;
    l.isMeAccount = A;
    l.isMePnUser = F;
    l.isMeDevice = B;
    l.isMePrimary = W;
    l.isSerializedWidMe = q;
    l.getUnknownId = U;
    l.setUnknownId = V;
}, 98);