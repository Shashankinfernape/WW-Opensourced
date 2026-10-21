__d("WAWebHandleAdvKeyIndexResultApi", [
    "invariant",
    "WAJids",
    "WALogger",
    "WALongInt",
    "WAWebAdvExpectedTsApi",
    "WAWebBizCoexHostedAddVerification",
    "WAWebDeviceListPk",
    "WAWebHandleAdvDeviceNotificationUtils",
    "WAWebProtobufsAdv.pb",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = 99;
    function d(t, n, r, a, i, l, d, m, p) {
        if (l?.timestamp != null && r < l.timestamp) {
            return null;
        }
        const f = _(t, n, a, i, p);
        if (!f) {
            return null;
        }
        const f_rawId = f.rawId;
        const h = o("WALongInt").numberOrThrowIfTooLarge(f.timestamp);
        const f_accountType = f.accountType;
        if (f_accountType === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "handleKeyIndexResult: add to coex cache for ",
                ""
            ])), t?.toLogString());
            o("WAWebBizCoexHostedAddVerification").addToCoexHostedVerificationCache(t);
        }
        if (h !== r) {
            return null;
        }
        let clearRecord = false;
        let b = null;
        let v = n;
        if (l && !l.deleted) {
            if (v == null) {
                v = l.devices;
            }
            if (l.rawId !== f_rawId) {
                clearRecord = true;
            } else {
                b = l.devices;
            }
            const S = l.advAccountType != null && l.advAccountType !== f_accountType || l != null && f_accountType === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED && f_accountType !== l?.advAccountType;
            if (S) {
                clearRecord = true;
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[ADV] clear record: type mismatch ",
                    " for ",
                    ""
                ])), f_accountType, t?.toLogString());
            }
        } else {
            const R = f_accountType === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED && l?.deletedChangedToHost !== true;
            if (R) {
                clearRecord = true;
            }
        }
        const L = new Map;
        const E = new Set(f.validIndexes);
        const k = f.currentIndex || 0;
        if (v) {
            v.forEach((e)=>{
                const e_keyIndex = e.keyIndex;
                if (e_keyIndex != null && E.has(e_keyIndex)) {
                    if (e.id === c) {
                        if (e.isHosted !== true) {
                            s(0, 76137);
                        }
                    }
                    L.set(e.id, e_keyIndex);
                }
            });
        }
        if (b != null) {
            b.forEach((e)=>{
                if (e.keyIndex > k) {
                    L.set(e.id, e.keyIndex);
                }
            });
        }
        L.set(o("WAJids").DEFAULT_DEVICE_ID, 0);
        const I = Array.from(L.entries()).map(([t, n])=>{
            if (t === c) {
                return {
                    id: t,
                    keyIndex: n,
                    isHosted: true
                };
            }
            return {
                id: t,
                keyIndex: n
            };
        });
        const D = {
            id: o("WAWebDeviceListPk").createDeviceListPK(t),
            rawId: f_rawId,
            timestamp: h,
            validIndexes: Array.from(E),
            devices: I,
            currentIndex: f.currentIndex,
            deleted: false,
            advAccountType: f_accountType
        };
        if (!clearRecord && !o("WAWebAdvExpectedTsApi").shouldClearExpectedTs(h, m, l, d) && l && !l.deleted) {
            D.expectedTs = l.expectedTs;
            D.expectedTsLastDeviceJobTs = l.expectedTsLastDeviceJobTs;
            D.expectedTsUpdateTs = l.expectedTsUpdateTs;
        }
        if (f.identityUpdatePromise) {
            return {
                update: D,
                clearRecord,
                identityUpdatePromise: f.identityUpdatePromise
            };
        }
        return {
            update: D,
            clearRecord
        };
    }
    function m(e, t, n, r, o, a, i, l, s) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r, o, a, i, l, s) {
            return d(e, t, n, r, o, a, i, l, s);
        });
        return p.apply(this, arguments);
    }
    function _(e, t, n, r, a) {
        if (t != null && t.some((e)=>!!e.isHosted)) {
            return o("WAWebHandleAdvDeviceNotificationUtils").verifySKeyIndexWithAccSigKey(e, n);
        }
        if (a !== undefined) {
            return a;
        }
        if (r == null) {
            return null;
        }
        return o("WAWebHandleAdvDeviceNotificationUtils").decodeSignedKeyIndexBytes(r, n);
    }
    l.handleKeyIndexResultSync = d;
    l.handleKeyIndexResult = m;
}, 98);