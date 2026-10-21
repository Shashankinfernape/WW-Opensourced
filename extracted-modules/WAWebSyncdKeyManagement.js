__d("WAWebSyncdKeyManagement", [
    "WALogger",
    "WAPromiseQueue",
    "WAWebABProps",
    "WAWebGetSyncKey",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdKeyCallbacksApi",
    "WAWebSyncdKeyManagementUtils",
    "WAWebSyncdMetrics",
    "WAWebSyncdRotateKey",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = new (o("WAPromiseQueue")).PromiseQueue;
    function p(e = true) {
        return m.enqueue(function() {
            return _(e);
        });
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t = true) {
            const n = yield g();
            const a = yield o("WAWebSyncdKeyCallbacksApi").getDeviceFingerprint();
            let i = false;
            let l = false;
            if (n != null) {
                i = o("WAWebSyncdRotateKey").hasKeyExpired(n);
                l = o("WAWebSyncdRotateKey").hasADeviceBeenRemoved(n, a);
                if (!t || !i && !l) {
                    return {
                        keyId: n.keyId,
                        keyData: n.keyData
                    };
                }
            } else {
                throw r("err")("syncd: No sync key available");
            }
            const m = o("WAWebSyncdRotateKey").rotateKey(a, n);
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: rotating key id ",
                ""
            ])), o("WAWebSyncdCryptoUtils").syncKeyIdToHex(m.keyId));
            if (o("WAWebABProps").getABPropConfigValue("wa_web_enable_syncd_key_persistence_only_after_server_ack")) {
                yield o("WAWebSyncdKeyCallbacksApi").sendSyncdKeyRotation([
                    m
                ]);
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: key share ACK received, storing key id ",
                    ""
                ])), o("WAWebSyncdCryptoUtils").syncKeyIdToHex(m.keyId));
                yield o("WAWebGetSyncKey").setSyncKeyInTransaction(m);
            } else {
                yield o("WAWebGetSyncKey").setSyncKeyInTransaction(m);
                yield o("WAWebSyncdKeyCallbacksApi").sendSyncdKeyRotation([
                    m
                ]);
            }
            if (i) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: key rotation due to key expiry"
                ])));
                o("WAWebSyncdMetrics").reportSyncdKeyRotationEvent(o("WAWebSyncdMetrics").SyncdKeyRotationEventType.APP_STATE_SYNC_KEY_EXPIRY);
            }
            if (l) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: key rotation due to device removal"
                ])));
                o("WAWebSyncdMetrics").reportSyncdKeyRotationEvent(o("WAWebSyncdMetrics").SyncdKeyRotationEventType.DEVICE_DEREGISTERATION);
            }
            if (n == null) {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: key rotation due to no key present"
                ])));
                o("WAWebSyncdMetrics").reportSyncdKeyRotationEvent(o("WAWebSyncdMetrics").SyncdKeyRotationEventType.NO_KEYS);
            }
            return _(t);
        });
        return f.apply(this, arguments);
    }
    function g() {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebGetSyncKey").getAllSyncKeysInTransaction();
            if (e.length === 0) {
                return null;
            }
            const t = e.map((e)=>o("WAWebSyncdKeyManagementUtils").getKeyEpoch(e.keyId));
            const n = Math.max(...t);
            const r = e.filter((e)=>o("WAWebSyncdKeyManagementUtils").getKeyEpoch(e.keyId) === n);
            const a = r.map((e)=>o("WAWebSyncdKeyManagementUtils").getKeyDeviceId(e.keyId));
            const i = Math.min(...a);
            const l = a.indexOf(i);
            return r[l];
        });
        return h.apply(this, arguments);
    }
    l.getActiveKey = p;
    l.getNewestKeyPair = g;
}, 98);