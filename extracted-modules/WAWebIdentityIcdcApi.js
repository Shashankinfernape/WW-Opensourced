__d("WAWebIdentityIcdcApi", [
    "WACryptoSha256",
    "WAJids",
    "WASignalOther",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiDeviceList",
    "WAWebCryptoCurve25519",
    "WAWebIdentityApiUtils",
    "WAWebProtobufsAdv.pb",
    "WAWebSignalProtocolStore",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    const e = 8;
    const s = 720 * 60 * 60;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebApiDeviceList").getDeviceRecord(e);
            if (!t || t.deleted) {
                return null;
            }
            return d(e, t);
        });
        return c.apply(this, arguments);
    }
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (!t || t.deleted) {
                return null;
            }
            const n = {
                keyHash: undefined,
                timestamp: undefined
            };
            const { advAccountType, devices, id, timestamp } = t;
            const u = devices.some((e)=>e.id !== o("WAJids").DEFAULT_DEVICE_ID);
            if (u) {
                const c = devices.map((e)=>[
                        e.keyIndex,
                        o("WAWebWidFactory").createDeviceWidFromDeviceListPk(id, e.id, e.isHosted)
                    ]);
                const d = [];
                let m = null;
                c.forEach(([t, n])=>{
                    if (o("WAWebUserPrefsMeUser").isMeDevice(n)) {
                        m = t;
                    } else {
                        d.push([
                            t,
                            n
                        ]);
                    }
                });
                const _ = yield o("WAWebIdentityApiUtils").getAllIdentityKeysBytes(d.map(([, t])=>t));
                const h = [];
                const y = [];
                _.forEach((e, t)=>{
                    if (e != null) {
                        h.push(e);
                        y.push(d[t][0]);
                    }
                });
                if (o("WAWebUserPrefsMeUser").isMeAccount(e)) {
                    const C = yield o("WAWebSignalProtocolStore").getSignalProtocolStore().getIdentityKeyPair();
                    if (!C) {
                        return null;
                    }
                    h.push(new Uint8Array(C.pubKey));
                    y.push(r("nullthrows")(m));
                }
                const b = f();
                n.keyHash = yield p(h.map((e)=>new Uint8Array(o("WAWebCryptoCurve25519").toCurveKeyPubKey(e.buffer))), b);
                if (y.length !== devices.length) {
                    n.keyIndexes = y;
                }
            }
            if (u || g(timestamp)) {
                n.timestamp = timestamp;
            }
            if (o("WAWebUserPrefsMeUser").isMeAccount(e) && (yield o("WAWebUserPrefsMultiDevice").getIsHostedMeAccount()) === true) {
                n.senderAccountType = o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED;
            }
            if (!o("WAWebUserPrefsMeUser").isMeAccount(e) && advAccountType === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED) {
                n.receiverAccountType = o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED;
            }
            return n;
        });
        return m.apply(this, arguments);
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WAWebIdentityApiUtils").identityKeysToBinary(e);
            const r = yield o("WACryptoSha256").sha256(n);
            const a = new Uint8Array(r);
            return o("WASignalOther").sliceBytes(a, 0, t);
        });
        return _.apply(this, arguments);
    }
    function f() {
        const t = o("WAWebABProps").getABPropConfigValue("md_icdc_hash_length");
        return Math.max(t, e);
    }
    function g(timestamp) {
        return o("WATimeUtils").unixTime() - timestamp < s;
    }
    l.getICDCMeta = u;
    l.getICDCMetaFromDeviceRecord = d;
    l.computeIdentityHash = p;
}, 98);