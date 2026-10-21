__d("WAWebKyberPreKeyStore", [
    "Promise",
    "WALogger",
    "WASignalPQTypes",
    "WAWebSignalConst",
    "WAWebSignalStorage",
    "WAWebSignalStorageUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = 1;
    function p(e, t) {
        if (e == null) {
            return t;
        }
        const e_value = e.value;
        if (typeof e_value === "number") {
            return e_value;
        }
        return t;
    }
    function _(e) {
        if (e == null) {
            return false;
        }
        return e.value === true;
    }
    function f() {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebSignalStorage").getMetaTable().get(o("WAWebSignalConst").META_KEYS.NEXT_KYBER_PK_ID);
            return p(e, m);
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return o("WAWebSignalStorageUtils").getStorage().lock([
                "signal-meta-store"
            ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const t = yield o("WAWebSignalStorage").getMetaTable().get(o("WAWebSignalConst").META_KEYS.NEXT_KYBER_PK_ID);
                const n = p(t, m);
                yield o("WAWebSignalStorage").getMetaTable().createOrReplace({
                    key: o("WAWebSignalConst").META_KEYS.NEXT_KYBER_PK_ID,
                    value: (n + e) % o("WASignalPQTypes").PQ_PRE_KEY_NON_INCLUSIVE_UPPER_BORDER
                });
                return n;
            }));
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (t.length !== 0) {
                yield o("WAWebSignalStorageUtils").getStorage().lock([
                    "kyber-prekey-store"
                ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    yield o("WAWebSignalStorage").getKyberPreKeyTable().bulkCreateOrReplace(t);
                }));
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "saveKyberPreKeys: saved ",
                    " keys"
                ])), t.length);
            }
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebSignalStorageUtils").getStorage().lock([
                "kyber-last-resort-key-store"
            ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield o("WAWebSignalStorage").getKyberLastResortKeyTable().createOrReplace(e);
            }));
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "saveKyberLastResortKey: saved key ID ",
                ""
            ])), e.keyId);
        });
        return S.apply(this, arguments);
    }
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return o("WAWebSignalStorage").getKyberPreKeyTable().get(e);
        });
        return L.apply(this, arguments);
    }
    function E() {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebSignalStorage").getKyberLastResortKeyTable().all();
            if (e.length === 0) {
                return null;
            }
            return e.reduce((acc, item)=>{
                if (item.keyId > acc.keyId) {
                    return item;
                }
                return acc;
            });
        });
        return k.apply(this, arguments);
    }
    function I() {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield (d || (d = n("Promise"))).all([
                o("WAWebSignalStorage").getKyberPreKeyTable().all(),
                o("WAWebSignalStorage").getKyberLastResortKeyTable().all()
            ]);
            const t = e[0];
            const r = e[1];
            return {
                kyberPreKeys: t.map((e)=>({
                        keyId: e.keyId,
                        publicKey: new Uint8Array(e.keyPair.pubKey)
                    })).sort((e, t)=>e.keyId - t.keyId),
                kyberLastResortKeys: r.map((e)=>({
                        keyId: e.keyId,
                        publicKey: new Uint8Array(e.keyPair.pubKey),
                        signature: new Uint8Array(e.signature)
                    })).sort((e, t)=>e.keyId - t.keyId)
            };
        });
        return T.apply(this, arguments);
    }
    function D(e) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebSignalStorage").getKyberPreKeyTable();
            yield (d || (d = n("Promise"))).all(e.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const n = yield t.get(e);
                    if (n != null) {
                        yield t.createOrReplace(babelHelpers.extends({}, n, {
                            sentToServer: true
                        }));
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "markKyberPreKeysAsSent: marked ",
                " keys as sent"
            ])), e.length);
        });
        return x.apply(this, arguments);
    }
    function $(e) {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebSignalStorage").getKyberLastResortKeyTable().remove(e);
        });
        return P.apply(this, arguments);
    }
    function N(e) {
        return M.apply(this, arguments);
    }
    function M() {
        M = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebSignalStorage").getKyberPreKeyTable().remove(e);
        });
        return M.apply(this, arguments);
    }
    function w() {
        return A.apply(this, arguments);
    }
    function A() {
        A = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield o("WAWebSignalStorageUtils").getStorage().lock([
                "signal-meta-store",
                "kyber-prekey-store",
                "kyber-last-resort-key-store"
            ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = yield (d || (d = n("Promise"))).all([
                    o("WAWebSignalStorage").getKyberPreKeyTable().all(),
                    o("WAWebSignalStorage").getKyberLastResortKeyTable().all()
                ]);
                const t = e[0];
                const r = e[1];
                yield d.all([].concat(t.map((e)=>o("WAWebSignalStorage").getKyberPreKeyTable().remove(e.keyId)), r.map((e)=>o("WAWebSignalStorage").getKyberLastResortKeyTable().remove(e.keyId)), [
                    o("WAWebSignalStorage").getMetaTable().createOrReplace({
                        key: o("WAWebSignalConst").META_KEYS.PQ_MIGRATED,
                        value: false
                    })
                ]));
            }));
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "clearKyberPreKeysAndMigrationState: cleared local PQ key state"
            ])));
        });
        return A.apply(this, arguments);
    }
    function F() {
        return O.apply(this, arguments);
    }
    function O() {
        O = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebSignalStorage").getMetaTable().get(o("WAWebSignalConst").META_KEYS.PQ_MIGRATED);
            const t = _(e);
            return t;
        });
        return O.apply(this, arguments);
    }
    function B(e) {
        return W.apply(this, arguments);
    }
    function W() {
        W = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebSignalStorage").getMetaTable().createOrReplace({
                key: o("WAWebSignalConst").META_KEYS.PQ_MIGRATED,
                value: e
            });
        });
        return W.apply(this, arguments);
    }
    l.getNextKyberPreKeyId = f;
    l.reserveKyberPreKeyIds = h;
    l.saveKyberPreKeys = C;
    l.saveKyberLastResortKey = v;
    l.loadKyberPreKey = R;
    l.loadLatestKyberLastResortKey = E;
    l.loadKyberKeysForDigest = I;
    l.markKyberPreKeysAsSent = D;
    l.removeKyberLastResortKey = $;
    l.removeKyberPreKey = N;
    l.clearKyberPreKeysAndMigrationState = w;
    l.isPQMigrated = F;
    l.setPQMigrated = B;
}, 98);