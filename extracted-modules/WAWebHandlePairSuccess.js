__d("WAWebHandlePairSuccess", [
    "invariant",
    "JSResourceForInteraction",
    "Promise",
    "WABase64",
    "WABinary",
    "WACryptoHmac",
    "WALogger",
    "WASmaxMdSetRegRPC",
    "WATimeUtils",
    "WAWebABPropsCache",
    "WAWebAdvSignatureApi",
    "WAWebAdvSignatureConstants",
    "WAWebAltDeviceLinkingApi",
    "WAWebAltDeviceLinkingQpl",
    "WAWebAppTracker",
    "WAWebBackendWorkerInitState",
    "WAWebBizAgentLoginState",
    "WAWebBizCoexGatingUtils",
    "WAWebBotBaseGating",
    "WAWebCompanionRegUtils",
    "WAWebConnModel",
    "WAWebCoreActionsODS",
    "WAWebCryptoCurve25519",
    "WAWebE2ETestPairingConstants",
    "WAWebEnvironment",
    "WAWebHandleCanonicalRegistration",
    "WAWebJidToWid",
    "WAWebLid11MigrationLifecycleWamEvent",
    "WAWebLid1X1MigrationGating",
    "WAWebLocalStorage",
    "WAWebLogoutReasonConstants",
    "WAWebMdClientSessionIdUtils",
    "WAWebMdSessionIdCache",
    "WAWebMobilePlatforms",
    "WAWebODS",
    "WAWebPairingType",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsAdv.pb",
    "WAWebProtobufsCompanionReg.pb",
    "WAWebQrDeviceLinkingQpl",
    "WAWebSignalCommonUtils",
    "WAWebSignalStoreApi",
    "WAWebSocketLogoutJob",
    "WAWebSubscriptionSource",
    "WAWebSubscriptions",
    "WAWebSyncdSnapshotRecoveryGatingUtils",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "WAWebUserPrefsTypes",
    "WAWebWamDeviceLinkReporter",
    "WAWebWamEnumMdLinkDeviceCompanionStage",
    "WAWebWamEnumMigrationStageEnum",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "cr:1064",
    "decodeProtobuf",
    "encodeProtobuf",
    "getErrorSafe",
    "gkx",
    "justknobx",
    "nullthrows"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    const h = r("JSResourceForInteraction")("WAWebReconcileBotSupportFields").__setRef("WAWebHandlePairSuccess");
    let y = false;
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (r("gkx")("26256")) {
                if (r("WAWebLocalStorage") != null) {
                    r("WAWebLocalStorage").removeItem(o("WAWebE2ETestPairingConstants").PAIRING_ATTEMPT_ONGOING_KEY);
                }
            }
            if (!(y || o("WAWebUserPrefsMultiDevice").isRegistered())) {
                y = true;
                const a = o("WATimeUtils").unixTimeWithoutClockSkewCorrection();
                let i = null;
                try {
                    i = o("WASmaxMdSetRegRPC").receiveSetRegRPC(t);
                } catch (t) {
                    const l = r("getErrorSafe")(t);
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Parsing Error"
                    ]))).catching(l);
                    y = false;
                    return (g || (g = n("Promise"))).reject(l);
                }
                const c = i;
                const { makeSetRegResponseClientResponse: d, makeSetRegResponseError: m, parsedRequest: p } = c;
                try {
                    o("WAWebCompanionRegUtils").resetCompanionReg();
                    yield o("WAWebUserPrefsMultiDevice").setPairingTimestamp(a);
                    o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.Registration);
                    if (o("WAWebAltDeviceLinkingApi").getPairingType() === o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING) {
                        o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker("alt_linking_pair_success");
                        o("WAWebAltDeviceLinkingQpl").endCurrentMarkerSuccess();
                    } else if (o("WAWebAltDeviceLinkingApi").getPairingType() === o("WAWebPairingType").PairingType.QR_CODE) {
                        o("WAWebQrDeviceLinkingQpl").companionDeviceLinkingScreenQpl.pairStarted();
                    }
                    const { pairSuccessClientProps: _, pairSuccessDeviceIdentityElementValue: f, pairSuccessDeviceJid: h, pairSuccessDeviceLid: C, pairSuccessEncryptionMetadata: b, pairSuccessPlatformName: S } = p;
                    o("WAWebConnModel").Conn.blockStoreAdds = false;
                    o("WAWebConnModel").Conn.platform = S;
                    yield o("WAWebMobilePlatforms").setMobilePlatform(S);
                    o("WAWebUserPrefsMeUser").setMe(o("WAWebJidToWid").deviceJidToDeviceWid(h));
                    o("WAWebUserPrefsMeUser").setMeLid(o("WAWebJidToWid").deviceJidToDeviceWid(C));
                    o("WAWebBackendWorkerInitState").resolveJidsReady();
                    if (_) {
                        yield v(_);
                    }
                    const R = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsAdv.pb").ADVSignedDeviceIdentityHMACSpec, f);
                    const { details: L, hmac: k } = R;
                    if (!(L != null && k != null)) {
                        s(0, 56299);
                    }
                    let I = new (o("WABinary")).Binary(L).readByteArrayView();
                    if (o("WAWebBizCoexGatingUtils").smbHostedPrimaryPairingAllowed() && R.accountType === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED) {
                        yield o("WAWebUserPrefsMultiDevice").setIsHostedMeAccount();
                        I = o("WABinary").Binary.build(o("WAWebAdvSignatureConstants").ADV_HOSTED_PREFIX_DEVICE_IDENTITY_ACCOUNT_SIGNATURE, r("nullthrows")(L)).readByteArrayView();
                    }
                    const T = yield o("WAWebAdvSignatureApi").getADVSecretKey();
                    const D = yield o("WACryptoHmac").hmacSha256(T, I);
                    const x = o("WABase64").encodeB64(D);
                    const $ = o("WABase64").encodeB64(k);
                    if (x !== $) {
                        o("WAWebCoreActionsODS").logPairError();
                        o("WAWebCoreActionsODS").logSessionForcedLogout();
                        o("WAWebCompanionRegUtils").logoutAfterValidationFail();
                        y = false;
                        o("WAWebQrDeviceLinkingQpl").companionDeviceLinkingScreenQpl.pairFailed();
                        return m();
                    }
                    const P = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsAdv.pb").ADVSignedDeviceIdentitySpec, L);
                    const N = P.accountSignatureKey;
                    if (N == null) {
                        s(0, 56344);
                    }
                    const M = P.accountSignature;
                    if (M == null) {
                        s(0, 56295);
                    }
                    const w = yield o("WAWebSignalStoreApi").waSignalStore.getRegistrationInfo();
                    if (w == null) {
                        s(0, 56296);
                    }
                    const A = yield o("WAWebWamDeviceLinkReporter").initDeviceLinkEvent(N, w.identityKeyPair.pubKey, a);
                    o("WAWebMdSessionIdCache").setMdSessionId(A);
                    const F = yield o("WAWebMdClientSessionIdUtils").genMdClientSessionId(N);
                    yield o("WAWebWamDeviceLinkReporter").setDeviceLinkPairStage(o("WAWebWamEnumMdLinkDeviceCompanionStage").MD_LINK_DEVICE_COMPANION_STAGE.PAIR_SUCCESS_RECEIVED);
                    o("WAWebCompanionRegUtils").initDevicePairingLatencyMeasurement();
                    const O = o("WAWebAdvSignatureApi").verifyDeviceIdentityAccountSignature(P, w.identityKeyPair.pubKey, null);
                    if (!O) {
                        o("WAWebCoreActionsODS").logPairError();
                        o("WAWebCoreActionsODS").logSessionForcedLogout();
                        yield o("WAWebWamDeviceLinkReporter").commitDeviceLinkEvent(401);
                        o("WAWebCompanionRegUtils").logoutAfterValidationFail();
                        y = false;
                        o("WAWebQrDeviceLinkingQpl").companionDeviceLinkingScreenQpl.pairFailed();
                        return m();
                    }
                    P.deviceSignature = yield o("WAWebAdvSignatureApi").generateDeviceSignature({
                        advSignedDeviceIdentity: P,
                        identityKeyPair: w.identityKeyPair,
                        primarySignatureKey: N
                    });
                    yield o("WAWebSignalStoreApi").waSignalStore.putIdentity(o("WAWebSignalCommonUtils").createSignalAddress(o("WAWebWidFactory").asUserWidOrThrow(o("WAWebJidToWid").deviceJidToDeviceWid(h))).toString(), o("WAWebSignalCommonUtils").bufferToStr(o("WAWebCryptoCurve25519").toSignalCurvePubKey(N)));
                    yield o("WAWebAdvSignatureApi").setADVSignedIdentity(P);
                    const B = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsAdv.pb").ADVDeviceIdentitySpec, P.details);
                    const W = B.keyIndex;
                    if (W == null) {
                        s(0, 56297);
                    }
                    P.accountSignatureKey = void 0;
                    const q = o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufsAdv.pb").ADVSignedDeviceIdentitySpec, P).readByteArrayView();
                    const U = d({
                        deviceIdentityElementValue: q,
                        deviceIdentityKeyIndex: W
                    });
                    if (r("WAWebEnvironment").isWindows) {
                        if (r("WAWebLocalStorage") != null) {
                            r("WAWebLocalStorage").setItem(o("WAWebUserPrefsKeys").KEYS.WINDOWS_PENDING_CLIENT_KEY_SETUP, "true");
                        }
                    }
                    yield o("WAWebWamDeviceLinkReporter").setDeviceLinkPairStage(o("WAWebWamEnumMdLinkDeviceCompanionStage").MD_LINK_DEVICE_COMPANION_STAGE.PAIR_DEVICE_SIGN_SENT);
                    const V = yield o("WAWebUserPrefsHistorySync").getInitialHistorySyncComplete();
                    if (V !== true) {
                        o("WAWebCompanionRegUtils").startInitialHistorySyncTimeout();
                    }
                    y = false;
                    o("WAWebBizAgentLoginState").setShouldLogAgentLogin({
                        loginTimestamp: a
                    });
                    o("WAWebQrDeviceLinkingQpl").companionDeviceLinkingScreenQpl.pairSuccess();
                    o("WAWebCoreActionsODS").logPairSuccess();
                    if (n("cr:1064") != null) {
                        n("cr:1064").setMdSessionId(A);
                    }
                    if (F != null) {
                        if (n("cr:1064") != null) {
                            n("cr:1064").setMdClientSessionId(F);
                        }
                    }
                    if (n("cr:1064") != null) {
                        n("cr:1064").trigger("post_pair_success");
                    }
                    yield o("WAWebHandleCanonicalRegistration").handleCanonicalRegistration(T, b, C);
                    E();
                    return U;
                } catch (e) {
                    const H = r("getErrorSafe")(e);
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "error in handlePairSuccess"
                    ]))).catching(H).verbose().sendLogs("error in handlePairSuccess");
                    o("WAWebCoreActionsODS").logPairError();
                    o("WAWebCoreActionsODS").logSessionForcedLogout();
                    o("WAWebQrDeviceLinkingQpl").companionDeviceLinkingScreenQpl.pairFailed();
                    yield o("WAWebWamDeviceLinkReporter").commitDeviceLinkEvent(-1);
                    yield o("WAWebSocketLogoutJob").socketLogout(o("WAWebLogoutReasonConstants").LogoutReason.UnknownCompanion);
                } finally{
                    o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.Registration);
                }
            }
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsCompanionReg.pb").ClientPairingPropsSpec, e.elementValue);
            const { isChatDbLidMigrated: n, isSyncdPureLidSession: a, isSyncdSnapshotRecoveryEnabled: i, subscriptionSyncPayload: l } = t;
            const s = n === true;
            if (!s) {
                o("WAWebCoreActionsODS").logPairError();
                o("WAWebCoreActionsODS").logSessionForcedLogout();
                yield o("WAWebSocketLogoutJob").socketLogout(o("WAWebLogoutReasonConstants").LogoutReason.LidMigrationUnmigratedPrimary);
            }
            if (s) {
                yield o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.setIsLidMigrated(true, o("WAWebUserPrefsTypes").LidMigrationSource.HISTORY, a);
                new (o("WAWebLid11MigrationLifecycleWamEvent")).Lid11MigrationLifecycleWamEvent({
                    migrationStage: o("WAWebWamEnumMigrationStageEnum").MIGRATION_STAGE_ENUM.COMPANION_MIGRATED_ON_NEW_PAIRING,
                    webClientDidPairingStanzaIndicated1x1MigrationThisSession: true,
                    isLocally1x1MigratedFromDb: o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()
                }).commit();
            }
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[syncd snapshot recovery] isSyncdSnapshotRecoveryEnabled: ",
                ""
            ])), i);
            yield o("WAWebSyncdSnapshotRecoveryGatingUtils").updatePrimaryDeviceSupportsSyncdRecovery(i === true);
            if (l != null) {
                r("WAWebODS").incr("web.app.subscription_sync.pairing.received");
                yield R(l);
            }
        });
        return S.apply(this, arguments);
    }
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (r("justknobx")._("3785") === true) {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[subscription sync] pairing payload skipped (killswitch enabled)"
                ])));
                r("WAWebODS").incr("web.app.subscription_sync.pairing.killswitch");
                return;
            }
            try {
                const a = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionValue$SubscriptionsSyncV2ActionSpec, e);
                const i = (a.subscriptions ?? []).map((e)=>({
                        id: e.id ?? "",
                        tier: e.tier,
                        status: e.status,
                        expirationDate: e.endTime != null ? Number(e.endTime) : null,
                        startTime: e.startTime != null ? Number(e.startTime) : null,
                        isPlatformChanged: e.isPlatformChanged,
                        source: e.source != null ? o("WAWebSubscriptionSource").SubscriptionSource.cast(e.source) : null,
                        creationTime: e.creationTime != null ? Number(e.creationTime) : null
                    }));
                const l = (a.paidFeature ?? []).map((e)=>({
                        name: e.name ?? "",
                        enabled: e.enabled ?? false,
                        expirationTime: e.expirationTime != null ? Number(e.expirationTime) : null,
                        limit: e.limit ?? null
                    }));
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[subscription sync] pairing payload: ",
                    " subscriptions, ",
                    " feature flags"
                ])), i.length, l.length);
                yield o("WAWebSubscriptions").applySubscriptionsAndFeatureFlags(i, l, "rewrite");
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[subscription sync] pairing payload applied successfully"
                ])));
                r("WAWebODS").incr("web.app.subscription_sync.pairing.success");
            } catch (e) {
                const s = r("getErrorSafe")(e);
                o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[subscription sync] failed to process pairing payload"
                ]))).catching(s);
                r("WAWebODS").incr("web.app.subscription_sync.pairing.error");
            }
        });
        return L.apply(this, arguments);
    }
    function E() {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                yield o("WAWebABPropsCache").waitForABPropConfigsReady();
                if (!o("WAWebBotBaseGating").is3pAgentProductEnabled()) {
                    return;
                }
                const e = yield h.load();
                const t = e.reconcileBotSupportFields;
                yield t();
            } catch (e) {
                o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[handlePairSuccess] 3p bot profile reconcile failed"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("sbp-pair-success-reconcile-error");
            }
        });
        return k.apply(this, arguments);
    }
    l.default = C;
}, 98);