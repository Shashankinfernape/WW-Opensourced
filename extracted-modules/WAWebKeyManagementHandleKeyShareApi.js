__d("WAWebKeyManagementHandleKeyShareApi", [
    "Promise",
    "WAJids",
    "WALogger",
    "WALongInt",
    "WAWebSyncdCriticalBootstrapProcessingApi",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdFatal",
    "WAWebSyncdHandleKeyShare",
    "WAWebSyncdKeyManagementUtils",
    "WAWebSyncdKeyTypes",
    "WAWebSyncdUploadFatalErrorMetric",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumBootstrapAppStateDataStageCode",
    "WAWebWamEnumMdSyncdFatalErrorCode",
    "asyncToGeneratorRuntime",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    const g = 0;
    const h = 6;
    let y = (()=>{
        const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r) {
            o("WAWebSyncdCriticalBootstrapProcessingApi").logCriticalBootstrapStageIfNecessary(o("WAWebWamEnumBootstrapAppStateDataStageCode").BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.MISSING_KEYS_RECEIVED).catch(()=>{
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: failed to log critical bootstrap stage for key share"
                ]))).sendLogs("failed-to-log-critical-bootstrap-stage-for-key-share");
            });
            const a = r.getDeviceId();
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: handling key share from device ",
                " with ",
                " keys"
            ])), a, t.keys.length);
            const i = [];
            const t_keys = t.keys;
            if (!t_keys) {
                return (f || (f = n("Promise"))).resolve();
            }
            let _ = 0;
            let y = 0;
            let C = 0;
            const b = [];
            yield (f || (f = n("Promise"))).all(t_keys.map((e)=>{
                const n = e.keyId?.keyId;
                const e_keyData = e.keyData;
                const l = e_keyData?.keyData;
                const keyData = l == null ? null : o("WAWebSyncdKeyTypes").toSyncKeyData(l);
                if (!n) {
                    _++;
                    return;
                }
                const keyId = o("WAWebSyncdKeyTypes").toSyncKeyId(n);
                const p = o("WAWebSyncdCryptoUtils").syncKeyIdToHex(keyId);
                if (l != null) {
                    y++;
                } else {
                    C++;
                }
                if (b.length < 3) {
                    b.push(p);
                }
                if (n.byteLength !== h) {
                    o("WAWebSyncdUploadFatalErrorMetric").uploadFatalErrorMetric({
                        collection: null,
                        mdFatalErrorCode: o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.INVALID_KEY_SHARE_KEY_ID
                    });
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: fatal error: key share key id has invalid bytelength of ",
                        ""
                    ])), n.byteLength).sendLogs(`syncd: fatal error: key share key id has invalid bytelength of ${n.byteLength}`);
                    return o("WAWebSyncdFatal").handleFatalError();
                }
                if (e_keyData) {
                    const R = e_keyData.timestamp;
                    const currentIndex = e_keyData.fingerprint?.currentIndex;
                    const rawId = e_keyData.fingerprint?.rawId;
                    const deviceIndexes = e_keyData.fingerprint?.deviceIndexes;
                    if (!keyData || R == null || currentIndex == null || rawId == null || !deviceIndexes) {
                        if (a !== g) {
                            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                "syncd: fatal error: invalid key share key data (from companion)"
                            ]))).sendLogs("syncd: fatal error: invalid key share key data (from companion)");
                            return;
                        }
                        o("WAWebSyncdUploadFatalErrorMetric").uploadFatalErrorMetric({
                            collection: null,
                            mdFatalErrorCode: o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.INVALID_KEY_SHARE_KEY_DATA
                        });
                        o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "syncd: fatal error: invalid key share key data"
                        ]))).sendLogs("syncd: fatal error: invalid key share key data");
                        return o("WAWebSyncdFatal").handleFatalError();
                    }
                    const fullKey = {
                        keyId,
                        keyEpoch: o("WAWebSyncdKeyManagementUtils").getKeyEpoch(keyId),
                        keyData,
                        timestamp: o("WALongInt").numberOrThrowIfTooLarge(R),
                        fingerprint: {
                            rawId,
                            currentIndex,
                            deviceIndexes
                        }
                    };
                    i.push({
                        keyId,
                        fullKey
                    });
                } else {
                    i.push({
                        keyId,
                        fullKey: null
                    });
                }
            }));
            if (_ > 0) {
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: received ",
                    " keys with missing keyID from device ",
                    ""
                ])), _, a);
            }
            if (y > 0 || C > 0) {
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: received key share from device ",
                    ": ",
                    " with keyData, ",
                    " without keyData => ",
                    ""
                ])), a, y, C, b);
            }
            return o("WAWebSyncdHandleKeyShare").handleKeyShare(o("WAJids").interpretAsDeviceId(a), i);
        });
        return function(n, r) {
            return t.apply(this, arguments);
        };
    })();
    function C(e, t) {
        if (o("WAWebUserPrefsMeUser").isMeAccount(t)) {
            return y(e, t);
        }
        o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
            "syncd: key share wid error"
        ]))).sendLogs("syncd: key share wid error");
        return (f || (f = n("Promise"))).resolve();
    }
    function b(e) {
        if (!r("gkx")("26258")) {
            y = e(y);
        }
    }
    l.handleAppStateSyncKeyShare = C;
    l.setAppStateSyncKeyShareHandler = b;
}, 98);