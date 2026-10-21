__d("WAWebCanonicalEntRecoveryWam", [
    "WAWebCanonicalEntRecoveryCompanionWamEvent",
    "WAWebCanonicalEntRecoveryCriticalEventWamEvent",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebUserPrefsCanonical",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumCanonicalEntEventMarker",
    "WAWebWamEnumCanonicalEntRecoveryCompanionEvent"
], function(t, n, r, o, a, i, l) {
    let e = "";
    let s = false;
    function u() {
        if (!s) {
            s = true;
            e = o("WAWebUserPrefsCanonical").getCanonicalRegistrationTraceId();
            if (e === "") {
                e = c();
                o("WAWebUserPrefsCanonical").setCanonicalRegistrationTraceId(e);
            }
        }
    }
    function c() {
        return r("WAWebPonyfillsCryptoRandomUUID")();
    }
    function d() {
        return r("WAWebPonyfillsCryptoRandomUUID")();
    }
    function m() {
        const e = o("WAWebUserPrefsMeUser").getMaybeMeDeviceId();
        if (e != null) {
            return String(e);
        }
        return "";
    }
    function p(t, n, r, a, i, l) {
        u();
        const s = new (o("WAWebCanonicalEntRecoveryCompanionWamEvent")).CanonicalEntRecoveryCompanionWamEvent({
            canonicalEntRecoveryCompanionEvent: t,
            canonicalEntEventCompanionMarker: n,
            canonicalEntRegistrationTraceId: e,
            canonicalEntRecoveryEventMetadata: JSON.stringify({
                purpose: r
            }),
            deviceId: m(),
            familyDeviceId: ""
        });
        if (a != null) {
            s.canonicalEntRequestId = a;
        }
        if (i != null) {
            s.canonicalEntFeatureName = i;
        }
        if (l != null) {
            s.canonicalEntRecoveryTimeoutSeconds = l;
        }
        s.commit();
    }
    function _() {
        e = c();
        o("WAWebUserPrefsCanonical").setCanonicalRegistrationTraceId(e);
        p(o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent").CANONICAL_ENT_RECOVERY_COMPANION_EVENT.COMPANION_REGISTERED, o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER.START, "registration");
    }
    function f() {
        p(o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent").CANONICAL_ENT_RECOVERY_COMPANION_EVENT.REQUEST_NONCE_FROM_PRIMARY, o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER.START, "recovery");
    }
    function g() {
        p(o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent").CANONICAL_ENT_RECOVERY_COMPANION_EVENT.RECEIVED_COMPANION_NONCE_FROM_PRIMARY, o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER.SUCCESS, "recovery");
    }
    function h(e, t) {
        p(o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent").CANONICAL_ENT_RECOVERY_COMPANION_EVENT.EXCHANGE_NONCE, o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER.START, e, t);
    }
    function y(e, t) {
        p(o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent").CANONICAL_ENT_RECOVERY_COMPANION_EVENT.EXCHANGE_NONCE, o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER.SUCCESS, e, t);
    }
    function C(e, t) {
        p(o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent").CANONICAL_ENT_RECOVERY_COMPANION_EVENT.EXCHANGE_NONCE, o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER.ERROR, e, t);
    }
    function b(e) {
        p(o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent").CANONICAL_ENT_RECOVERY_COMPANION_EVENT.CREDENTIALS_STORED, o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER.SUCCESS, e);
    }
    function v(t, n, r, a) {
        try {
            u();
            const i = new (o("WAWebCanonicalEntRecoveryCriticalEventWamEvent")).CanonicalEntRecoveryCriticalEventWamEvent({
                canonicalEntRecoveryCriticalEventName: t,
                canonicalEntRegistrationTraceId: e,
                deviceId: m(),
                familyDeviceId: ""
            });
            const l = {
                purpose: n
            };
            if (r != null) {
                l.error = r;
            }
            i.canonicalEntRecoveryCriticalEventMetadata = JSON.stringify(l);
            if (a != null) {
                i.canonicalEntRequestId = a;
            }
            i.commit();
        } catch (e) {}
    }
    l.generateRequestId = d;
    l.logCompanionRegistered = _;
    l.logRequestNonceFromPrimary = f;
    l.logReceivedNonceFromPrimary = g;
    l.logExchangeNonceStart = h;
    l.logExchangeNonceSuccess = y;
    l.logExchangeNonceError = C;
    l.logCredentialsStored = b;
    l.logCriticalRecoveryEvent = v;
}, 98);