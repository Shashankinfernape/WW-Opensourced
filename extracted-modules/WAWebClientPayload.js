__d("WAWebClientPayload", [
    "WABase64",
    "WAByteArray",
    "WALogger",
    "WAMd5",
    "WAWebBackendApi",
    "WAWebBrowserInfo",
    "WAWebBuildConstants",
    "WAWebClientFeatureFlags",
    "WAWebClientPayloadReleaseChannel",
    "WAWebCompanionPlatformType",
    "WAWebEnvironment",
    "WAWebLid1X1MigrationGating",
    "WAWebProtobufsCompanionReg.pb",
    "WAWebProtobufsWa6.pb",
    "WAWebSyncdMdSyncFieldstatMeta",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebWamPlatform",
    "asyncToGeneratorRuntime",
    "encodeProtobuf",
    "gkx",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s = null;
    let u = 0;
    function c() {
        u++;
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE();
            const r = o("WAWebUserPrefsGeneral").getPushname();
            const a = babelHelpers.extends({}, (yield f(t)), {
                username: parseInt(n.user, 10),
                device: n.device ?? 0,
                lc: o("WAWebUserPrefsGeneral").getLoginCounter(),
                connectAttemptCount: u,
                lidDbMigrated: o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated(),
                pushName: r != null && r !== "" ? r : void 0
            }, s);
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[comms] getClientPayloadForLogin: connectAttemptCount=",
                ""
            ])), u).tags("launch-socket-chat");
            return o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufsWa6.pb").ClientPayloadSpec, a).readByteArrayView();
        });
        return m.apply(this, arguments);
    }
    function p(e, t, n) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = h();
            const a = yield y();
            const i = babelHelpers.extends({}, (yield f(n)), {
                devicePairingData: {
                    buildHash: r,
                    deviceProps: a,
                    eRegid: o("WAByteArray").intToBytes(4, e.registrationId),
                    eKeytype: o("WAByteArray").intToBytes(1, 5),
                    eIdent: e.identityKeyPair.pubKey,
                    eSkeyId: o("WAByteArray").intToBytes(3, t.keyId),
                    eSkeyVal: t.keyPair.pubKey,
                    eSkeySig: t.signature
                }
            });
            return o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufsWa6.pb").ClientPayloadSpec, i).readByteArrayView();
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return {
                passive: e?.passive ?? false,
                pull: e?.pull ?? false,
                connectType: o("WAWebProtobufsWa6.pb").ClientPayload$ConnectType.WIFI_UNKNOWN,
                connectReason: o("WAWebProtobufsWa6.pb").ClientPayload$ConnectReason.USER_ACTIVATED,
                userAgent: yield v(),
                webInfo: {
                    webSubPlatform: R()
                }
            };
        });
        return g.apply(this, arguments);
    }
    function h() {
        const e = o("WABase64").decodeB64(o("WAMd5").md5(o("WAWebBuildConstants").VERSION_BASE));
        const t = new Uint8Array(e);
        return t;
    }
    function y() {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = r("WAWebBrowserInfo")();
            let t;
            if (e.version && e.version !== "") {
                const n = e.version.split(".");
                if (n.length > 0 && e.version && /^[0-9\.]+$/.test(e.version)) {
                    t = {
                        primary: parseInt(n[0], 10),
                        secondary: n.length > 1 ? parseInt(n[1], 10) : void 0,
                        tertiary: n.length > 2 ? parseInt(n[2], 10) : void 0
                    };
                }
            }
            let a = {
                inlineInitialPayloadInE2EeMsg: true,
                supportBotUserAgentChatHistory: true,
                supportCagReactionsAndPolls: true,
                supportRecentSyncChunkMessageCountTuning: true,
                supportHostedGroupMsg: true,
                supportBizHostedMsg: true,
                supportFbidBotChatHistory: true,
                supportMessageAssociation: true,
                supportCallLogHistory: true,
                supportGroupHistory: r("gkx")("15338"),
                thumbnailSyncDaysLimit: r("justknobx")._("4736"),
                supportManusHistory: r("justknobx")._("2304"),
                supportHatchHistory: r("justknobx")._("2997"),
                supportedBotChannelFbids: []
            };
            const i = o("WAWebClientFeatureFlags").isFeatureEnabled("debug_1_year_history_sync");
            if (i) {
                a = babelHelpers.extends({}, a, {
                    fullSyncDaysLimit: 365
                });
            } else {
                const l = yield o("WAWebSyncdMdSyncFieldstatMeta").MdSyncFieldStatsMeta.getStorageEstimation();
                if (l.mdStorageQuotaBytes !== o("WAWebSyncdMdSyncFieldstatMeta").STORAGE_QUOTA_UNAVAILABLE) {
                    a = babelHelpers.extends({}, a, {
                        storageQuotaMb: Math.trunc(l.mdStorageQuotaBytes / 1024 / 1024)
                    });
                }
            }
            const s = r("WAWebEnvironment").isWindows && !r("justknobx")._("1836");
            if (s) {
                a.onDemandReady = true;
                a.completeOnDemandReady = true;
            }
            const u = {
                os: e.os,
                version: t,
                platformType: r("WAWebCompanionPlatformType")(),
                requireFullSync: i,
                historySyncConfig: a
            };
            const c = o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufsCompanionReg.pb").DevicePropsSpec, u).readByteArrayView();
            return c;
        });
        return C.apply(this, arguments);
    }
    function b(e) {
        s = e;
    }
    function v() {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebBackendApi").frontendSendAndReceive("getDeviceInfo", void 0);
            const t = {
                appVersion: {
                    primary: Number(o("WAWebBuildConstants").VERSION_PRIMARY),
                    secondary: Number(o("WAWebBuildConstants").VERSION_SECONDARY),
                    tertiary: Number(o("WAWebBuildConstants").VERSION_TERTIARY)
                },
                platform: o("WAWebProtobufsWa6.pb").ClientPayload$UserAgent$Platform.WEB,
                releaseChannel: yield o("WAWebClientPayloadReleaseChannel").getReleaseChannel(),
                mcc: e.mcc,
                mnc: e.mnc,
                osVersion: e.osVersion,
                manufacturer: e.manufacturer,
                device: e.device,
                osBuildNumber: e.osBuild,
                localeLanguageIso6391: e.lg,
                localeCountryIso31661Alpha2: e.lc
            };
            if (r("WAWebEnvironment").isWindows) {
                let n;
                t.appVersion = {
                    primary: Number((n = o("WAWebBuildConstants")).VERSION_PRIMARY),
                    secondary: Number(n.VERSION_SECONDARY),
                    tertiary: Number(n.VERSION_TERTIARY),
                    quaternary: Number(n.WINDOWS_BUILD)
                };
                if ((o("WAWebBuildConstants").WINDOWS_BUILD == null ? void 0 : o("WAWebBuildConstants").WINDOWS_BUILD.length) === 6) {
                    t.mcc = o("WAWebBuildConstants").WINDOWS_BUILD.substr(0, 3);
                    t.mnc = o("WAWebBuildConstants").WINDOWS_BUILD.substr(3, 3);
                }
            }
            return t;
        });
        return S.apply(this, arguments);
    }
    function R() {
        return ((e)=>{
            if (e === "WEB" || e === "PWA") {
                return o("WAWebProtobufsWa6.pb").ClientPayload$WebInfo$WebSubPlatform.WEB_BROWSER;
            }
            if (e === "DARWIN" || e === "DARWIN_BETA") {
                return o("WAWebProtobufsWa6.pb").ClientPayload$WebInfo$WebSubPlatform.DARWIN;
            }
            if (e === "MACSTORE") {
                return o("WAWebProtobufsWa6.pb").ClientPayload$WebInfo$WebSubPlatform.APP_STORE;
            }
            if (e === "WIN_HYBRID") {
                return o("WAWebProtobufsWa6.pb").ClientPayload$WebInfo$WebSubPlatform.WIN_HYBRID;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })(o("WAWebWamPlatform").getWamPlatform());
    }
    l.incrementSuccessfulLoginCounter = c;
    l.getClientPayloadForLogin = d;
    l.getClientPayloadForRegistration = p;
    l.setClientPayloadOverride = b;
}, 98);