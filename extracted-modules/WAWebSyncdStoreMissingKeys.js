__d("WAWebSyncdStoreMissingKeys", [
    "Promise",
    "WALogger",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebGetMissingKey",
    "WAWebGetSyncKey",
    "WAWebRunInTransaction",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdGatingUtils",
    "WAWebSyncdMetricFatalError",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    let b;
    let v;
    let S;
    function R() {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const deviceIndexes = (yield o("WAWebBackendApi").frontendSendAndReceive("getDeviceFingerprint", {})).deviceIndexes;
            return o("WAWebRunInTransaction").runInTransaction({
                MissingKeyStore: true
            }, (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ MissingKeyStore }) {
                    const o = yield MissingKeyStore.getAll();
                    if (o.length === 0) {
                        return (v || (v = n("Promise"))).resolve();
                    }
                    o.forEach((t)=>{
                        const t_deviceResponses = t.deviceResponses;
                        t_deviceResponses.forEach((n, r)=>{
                            if (!deviceIndexes.includes(r)) {
                                t.deviceResponses.delete(r);
                            }
                        });
                    });
                    yield MissingKeyStore.bulkUpdate(o);
                    yield N({
                        MissingKeyStore
                    });
                });
                return function(e) {
                    return t.apply(this, arguments);
                };
            })());
        });
        return L.apply(this, arguments);
    }
    function E(t, r) {
        const a = [];
        const i = [];
        t.forEach((e)=>{
            const e_keyData = e.keyData;
            const n = o("WAWebSyncdCryptoUtils").syncKeyIdToHex(e.keyId);
            if (e_keyData) {
                a.push(n);
            } else {
                i.push(n);
            }
        });
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[syncd] updateMissingKeys dev=",
            " +keys=",
            " -keys=",
            ""
        ])), r, a, i);
        return o("WAWebRunInTransaction").runInTransaction({
            MissingKeyStore: true
        }, (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ MissingKeyStore }) {
                if (a.length > 0) {
                    yield MissingKeyStore.bulkRemove(a);
                    yield I({
                        MissingKeyStore
                    });
                }
                if (i.length > 0) {
                    const n = (yield MissingKeyStore.bulkGet(i)).filter(Boolean);
                    n.forEach((e)=>e.deviceResponses.set(r, false));
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd] updateMissingKeys begin dev=",
                        " keys=",
                        ""
                    ])), r, i);
                    yield MissingKeyStore.bulkUpdate(n);
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd] updateMissingKeys done dev=",
                        ""
                    ])), r);
                    yield N({
                        MissingKeyStore
                    });
                }
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })());
    }
    function k() {
        return o("WAWebRunInTransaction").runInTransaction({
            MissingKeyStore: true
        }, function({ MissingKeyStore }) {
            return I({
                MissingKeyStore
            });
        });
    }
    function I(e) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ MissingKeyStore }) {
            clearTimeout(S ?? undefined);
            S = null;
            const n = yield MissingKeyStore.getAll();
            if (n.length !== 0) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: _setMissingKeyTimeout: missing keys: ",
                    ""
                ])), n.map((e)=>o("WAWebSyncdCryptoUtils").syncKeyIdToHex(e.keyId)));
                const r = n.reduce((acc, item)=>{
                    if (acc.timestamp < item.timestamp) {
                        return acc;
                    }
                    return item;
                });
                const a = o("WAWebSyncdGatingUtils").getSyncdWaitForKeyTimeoutDays() * o("WATimeUtils").DAY_MILLISECONDS - (-r.timestamp + o("WATimeUtils").unixTimeMs());
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: earliest missing key: ",
                    ", timestamp=",
                    ", timeoutMs=",
                    ""
                ])), o("WAWebSyncdCryptoUtils").syncKeyIdToHex(r.keyId), r.timestamp, a);
                S = setTimeout(D, a);
            }
        });
        return T.apply(this, arguments);
    }
    function D() {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: _timeoutWhileWaitingForMissingKey"
            ])));
            if (!(yield $())) {
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: _timeoutWhileWaitingForMissingKey: no expired keys"
                ])));
                return;
            }
            o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.TIMEOUT_WHILE_WAITING_FOR_MISSING_KEY);
            o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: fatal error: timeout while waiting for missing key"
            ]))).sendLogs("syncd fatal error: timeout while waiting for missing key");
            o("WAWebBackendApi").frontendFireAndForget("handleSyncdFatal", {});
        });
        return x.apply(this, arguments);
    }
    function $() {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: check if has expired keys"
            ])));
            const e = (yield o("WAWebGetSyncKey").getAllSyncKeysInTransaction()).map((e)=>o("WAWebSyncdCryptoUtils").syncKeyIdToHex(e.keyId));
            o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: all keys: ",
                ""
            ])), e);
            const t = yield o("WAWebGetMissingKey").getAllMissingKeysInTransaction();
            o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: missing keys: ",
                ""
            ])), t.map((e)=>o("WAWebSyncdCryptoUtils").syncKeyIdToHex(e.keyId)));
            const n = t.filter((t)=>!e.includes(t.keyHex));
            o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: actually missing keys: ",
                ""
            ])), t.map((e)=>o("WAWebSyncdCryptoUtils").syncKeyIdToHex(e.keyId)));
            const r = n.filter((e)=>o("WAWebSyncdGatingUtils").getSyncdWaitForKeyTimeoutDays() * o("WATimeUtils").DAY_MILLISECONDS < o("WATimeUtils").unixTimeMs() - e.timestamp);
            o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: expired keys: ",
                ""
            ])), r.map((e)=>o("WAWebSyncdCryptoUtils").syncKeyIdToHex(e.keyId)));
            return r.length > 0;
        });
        return P.apply(this, arguments);
    }
    function N(e) {
        return M.apply(this, arguments);
    }
    function M() {
        M = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ MissingKeyStore }) {
            const n = yield MissingKeyStore.getAll();
            for (const r of n){
                let a = true;
                for (const i of r.deviceResponses.values()){
                    if (i == null) {
                        a = false;
                        break;
                    }
                }
                if (a) {
                    o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: fatal error: missing key on all clients"
                    ]))).sendLogs("syncd: fatal error: missing key on all clients");
                    o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_KEY_ON_ALL_CLIENTS);
                    yield o("WAPromiseDelays").delayMs(5000);
                    o("WAWebBackendApi").frontendFireAndForget("handleSyncdFatal", {});
                    return;
                }
            }
        });
        return M.apply(this, arguments);
    }
    function w(e, t) {
        return A.apply(this, arguments);
    }
    function A() {
        A = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = ()=>{
                const e = new Map;
                t.forEach((t)=>e.set(t, null));
                return e;
            };
            const r = e.map((keyId)=>({
                    keyHex: o("WAWebSyncdCryptoUtils").syncKeyIdToHex(keyId),
                    keyId,
                    timestamp: o("WATimeUtils").unixTimeMs(),
                    deviceResponses: n()
                }));
            yield o("WAWebGetMissingKey").bulkUpdateMissingKeysInTransaction(r);
            yield k();
        });
        return A.apply(this, arguments);
    }
    l.updateMissingKeyDevices = R;
    l.updateMissingKeys = E;
    l.setMissingKeyTimeoutInTransaction = k;
    l.hasExpiredKeys = $;
    l.addMissingKeys = w;
}, 98);