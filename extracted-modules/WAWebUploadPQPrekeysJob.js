__d("WAWebUploadPQPrekeysJob", [
    "Promise",
    "WALogger",
    "WASignalKeys",
    "WASignalPQTypes",
    "WAWebABProps",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebKyberPreKeyStore",
    "WAWebPQGatingUtils",
    "WAWebReleaseToEventLoop",
    "WAWebSignalStoreApi",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "requireDeferred"
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
    const b = r("requireDeferred")("WAPQUploadPreKeysProtocol").__setRef("WAWebUploadPQPrekeysJob");
    const v = r("requireDeferred")("WASignalPQKeys").__setRef("WAWebUploadPQPrekeysJob");
    const S = 100;
    function R(e, t) {
        return (e + t) % o("WASignalPQTypes").PQ_PRE_KEY_NON_INCLUSIVE_UPPER_BORDER;
    }
    function L(e) {
        const name = r("getErrorSafe")(e).name;
        return name === "DbClosedOnTakeover" || name === "DbNotFoundOnTakeover" || name === "DbOnLogoutAbort";
    }
    function E(e) {
        return {
            keyId: e.id,
            keyPair: {
                pubKey: e.keyPair.publicKey.buffer,
                privKey: e.keyPair.secretKey.buffer
            },
            signature: e.signature.buffer,
            timestamp: e.timestamp,
            sentToServer: false
        };
    }
    function k(e) {
        return {
            keyId: e.id,
            keyPair: {
                pubKey: e.keyPair.publicKey.buffer,
                privKey: e.keyPair.secretKey.buffer
            },
            signature: e.signature.buffer,
            timestamp: e.timestamp
        };
    }
    function I(e, t, n) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, a) {
            try {
                yield (C || (C = n("Promise"))).all([].concat(e.map((e)=>o("WAWebKyberPreKeyStore").removeKyberPreKey(e.id)), [
                    o("WAWebKyberPreKeyStore").removeKyberLastResortKey(t.id)
                ]));
            } catch (error) {
                if (L(error)) {
                    return;
                }
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "generateAndUploadPQPreKeys: failed to remove initial SET PQ keys after ",
                    " failure"
                ])), a).catching(r("getErrorSafe")(error)).sendLogs("pq-prekeys-set-cleanup-failed");
            }
        });
        return T.apply(this, arguments);
    }
    function D() {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                if (!o("WAWebPQGatingUtils").isPqKeysUploadEnabled()) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "generateAndUploadPQPreKeys: PQ upload not enabled, skipping"
                    ])));
                    return;
                }
                const e = yield o("WAWebKyberPreKeyStore").isPQMigrated();
                if (e) {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "generateAndUploadPQPreKeys: already PQ migrated, skipping"
                    ])));
                    return;
                }
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "generateAndUploadPQPreKeys: starting PQ prekey generation/upload"
                ])));
                const t = yield o("WAWebSignalStoreApi").waSignalStore.getRegistrationInfo();
                if (t == null) {
                    o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "generateAndUploadPQPreKeys: no registration info available"
                    ])));
                    return;
                }
                const r = o("WASignalKeys").makeKeyPairFromArrayBuffers(t.identityKeyPair.pubKey, t.identityKeyPair.privKey);
                const a = yield (C || (C = n("Promise"))).all([
                    b.load(),
                    v.load()
                ]);
                const i = a[0].uploadPQPreKeysProtocol;
                const l = a[1];
                const { generateKyberLastResortKey, generateKyberPreKeys } = l;
                const g = Math.max(1, o("WAWebABProps").getABPropConfigValue("pq_batch_upload_size"));
                const h = o("WAWebABProps").getABPropConfigValue("pq_max_keys_on_server");
                const y = Number.isFinite(h) ? Math.min(Math.max(1, h), o("WASignalPQTypes").PQ_PRE_KEY_NON_INCLUSIVE_UPPER_BORDER - 1) : S;
                const L = yield o("WAWebKyberPreKeyStore").reserveKyberPreKeyIds(y + 1);
                const T = R(L, y);
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "generateAndUploadPQPreKeys: generating ",
                    " PQ prekeys starting at ID ",
                    ""
                ])), y, L);
                const D = yield generateKyberLastResortKey(T, r);
                const x = Math.min(g, y);
                yield o("WAWebReleaseToEventLoop").releaseToEventLoop();
                const P = yield generateKyberPreKeys(L, x, r);
                const M = k(D);
                try {
                    yield o("WAWebKyberPreKeyStore").saveKyberLastResortKey(M);
                    yield o("WAWebKyberPreKeyStore").saveKyberPreKeys(P.map(E));
                } catch (error) {
                    yield I(P, D, "storage");
                    throw error;
                }
                const w = yield i(P, D);
                if (!w.success) {
                    o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "generateAndUploadPQPreKeys: initial PQ prekey upload failed"
                    ]))).sendLogs("pq-prekeys-set-upload-failed");
                    yield I(P, D, "set");
                    return;
                }
                yield o("WAWebKyberPreKeyStore").setPQMigrated(true);
                yield o("WAWebKyberPreKeyStore").markKyberPreKeysAsSent(P.map((e)=>e.id));
                $(R(L, x), g, y - x, P.length, y, r);
            } catch (error) {
                N(error);
            }
        });
        return x.apply(this, arguments);
    }
    function $(e, t, n, r, o, a) {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r, a, i) {
            try {
                if (n > 0) {
                    yield o("WAWebEventsWaitForOfflineDeliveryEnd").waitForOfflineDeliveryEnd({
                        ignoreInit: true
                    });
                }
                const l = yield M(e, t, n, i);
                const s = r + l;
                if (s < a) {
                    o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "generateAndUploadPQPreKeys: PQ migration incomplete, ",
                        "/",
                        " prekeys uploaded"
                    ])), s, a).sendLogs("pq-prekeys-partial-upload");
                    return;
                }
                o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "generateAndUploadPQPreKeys: PQ migration complete, ",
                    " prekeys uploaded"
                ])), s);
            } catch (error) {
                N(error);
            }
        });
        return P.apply(this, arguments);
    }
    function N(error) {
        if (!L(error)) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "generateAndUploadPQPreKeys: error during PQ key generation/upload"
            ]))).catching(r("getErrorSafe")(error)).sendLogs("pq-prekeys-upload-failed");
        }
    }
    function M(e, t, n, r) {
        return w.apply(this, arguments);
    }
    function w() {
        w = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r, a) {
            const i = yield (C || (C = n("Promise"))).all([
                b.load(),
                v.load()
            ]);
            const addPQPreKeysProtocol = i[0].addPQPreKeysProtocol;
            const generateKyberPreKeys = i[1].generateKyberPreKeys;
            const u = Array.from({
                length: Math.ceil(r / t)
            }, function(e, n) {
                return n * t;
            });
            let c = 0;
            for (const d of u){
                yield o("WAWebReleaseToEventLoop").releaseToEventLoop();
                const m = Math.min(t, r - d);
                const p = R(e, d);
                const _ = yield generateKyberPreKeys(p, m, a);
                yield o("WAWebKyberPreKeyStore").saveKyberPreKeys(_.map(E));
                const f = yield addPQPreKeysProtocol(_);
                if (f.success) {
                    yield o("WAWebKyberPreKeyStore").markKyberPreKeysAsSent(_.map((e)=>e.id));
                    c += _.length;
                } else {
                    o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                        "generateAndUploadPQPreKeys: PQ prekey ADD upload failed"
                    ]))).sendLogs("pq-prekeys-add-upload-failed");
                    const g = yield (C || (C = n("Promise"))).allSettled(_.map((e)=>o("WAWebKyberPreKeyStore").removeKyberPreKey(e.id)));
                    if (g.some((e)=>e.status === "rejected")) {
                        o("WALogger").WARN(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                            "generateAndUploadPQPreKeys: failed to remove some rejected PQ prekeys"
                        ]))).sendLogs("pq-prekeys-add-cleanup-failed");
                    }
                    break;
                }
            }
            return c;
        });
        return w.apply(this, arguments);
    }
    l.generateAndUploadPQPreKeys = D;
}, 98);