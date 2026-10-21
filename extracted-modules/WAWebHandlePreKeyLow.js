__d("WAWebHandlePreKeyLow", [
    "Promise",
    "WADeprecatedWapParser",
    "WALogger",
    "WASignalKeys",
    "WAWap",
    "WAWebABProps",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebPQGatingUtils",
    "WAWebReleaseToEventLoop",
    "WAWebSignalStoreApi",
    "WAWebUploadPreKeysJob",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "requireDeferred"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    const _ = r("requireDeferred")("WAPQUploadPreKeysProtocol").__setRef("WAWebHandlePreKeyLow");
    const f = r("requireDeferred")("WASignalPQKeys").__setRef("WAWebHandlePreKeyLow");
    const g = r("requireDeferred")("WAWebKyberPreKeyStore").__setRef("WAWebHandlePreKeyLow");
    const h = new Set;
    const y = new (r("WADeprecatedWapParser"))("lowKeyParser", function(e) {
        e.assertTag("notification");
        e.assertAttr("type", "encrypt");
        e.assertFromServer();
        const t = e.maybeChild("count");
        const n = e.maybeChild("pq_count");
        if (t == null && n == null) {
            e.child("count");
        }
        return {
            hasLegacyCount: t != null,
            hasPqCount: n != null,
            stanzaId: e.attrString("id")
        };
    });
    function C(e, t) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const r = y.parse(t);
            if (r.error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "handlePreKeyLow: Parsing Error: ",
                    ""
                ])), r.error.toString());
                throw r.error;
            }
            const r_success = r.success;
            const i = o("WAWap").wap("ack", {
                to: o("WAWap").S_WHATSAPP_NET,
                id: o("WAWap").CUSTOM_STRING(r_success.stanzaId),
                class: "notification"
            });
            if (!r_success.hasLegacyCount || h.has(n)) {
                if (r_success.hasPqCount && o("WAWebPQGatingUtils").isPqKeysUploadEnabled()) {
                    S();
                }
                return i;
            }
            h.add(n);
            o("WAWebSignalStoreApi").waSignalStore.setServerHasPreKeys(false);
            yield o("WAWebEventsWaitForOfflineDeliveryEnd").waitForOfflineDeliveryEnd();
            return o("WAWebUploadPreKeysJob").uploadPreKeys().then(()=>{
                if (r_success.hasPqCount && o("WAWebPQGatingUtils").isPqKeysUploadEnabled()) {
                    S();
                }
                return i;
            }).finally(()=>void h.delete(n));
        });
        return b.apply(this, arguments);
    }
    let v = null;
    function S() {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (v == null) {
                v = L().finally(()=>{
                    v = null;
                });
            }
            return v;
        });
        return R.apply(this, arguments);
    }
    function L() {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                const e = yield o("WAWebSignalStoreApi").waSignalStore.getRegistrationInfo();
                if (e == null) {
                    return;
                }
                const t = o("WASignalKeys").makeKeyPairFromArrayBuffers(e.identityKeyPair.pubKey, e.identityKeyPair.privKey);
                const a = yield (p || (p = n("Promise"))).all([
                    _.load(),
                    f.load(),
                    g.load()
                ]);
                const i = a[0].addPQPreKeysProtocol;
                const l = a[1].generateKyberPreKeys;
                const h = a[2];
                const { markKyberPreKeysAsSent, removeKyberPreKey, reserveKyberPreKeyIds, saveKyberPreKeys } = h;
                const S = Math.max(1, o("WAWebABProps").getABPropConfigValue("pq_batch_upload_size"));
                const R = yield reserveKyberPreKeyIds(S);
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "replenishPQPreKeys: generating ",
                    " PQ prekeys starting at ID ",
                    ""
                ])), S, R);
                const L = yield l(R, S, t, o("WAWebReleaseToEventLoop").releaseToEventLoop);
                const E = L.map((e)=>({
                        keyId: e.id,
                        keyPair: {
                            pubKey: e.keyPair.publicKey.buffer,
                            privKey: e.keyPair.secretKey.buffer
                        },
                        signature: e.signature.buffer,
                        timestamp: e.timestamp,
                        sentToServer: false
                    }));
                yield saveKyberPreKeys(E);
                const k = yield i(L);
                if (k.success) {
                    yield markKyberPreKeysAsSent(L.map((e)=>e.id));
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "replenishPQPreKeys: uploaded ",
                        " PQ prekeys"
                    ])), L.length);
                } else {
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "replenishPQPreKeys: upload rejected: ",
                        " (",
                        ")"
                    ])), k.error.category, k.error.code).sendLogs("pq-replenish-upload-fail");
                    const I = yield (p || (p = n("Promise"))).allSettled(L.map((e)=>removeKyberPreKey(e.id)));
                    if (I.some((e)=>e.status === "rejected")) {
                        o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "replenishPQPreKeys: failed to remove some rejected PQ prekeys"
                        ]))).sendLogs("pq-replenish-cleanup-failed");
                    }
                }
            } catch (error) {
                o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "replenishPQPreKeys: error"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("pq-replenish-error");
            }
        });
        return E.apply(this, arguments);
    }
    l.default = C;
}, 98);