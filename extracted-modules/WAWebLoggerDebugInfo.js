__d("WAWebLoggerDebugInfo", [
    "WAWebABPropsSaga",
    "WAWebConnModel",
    "WAWebCrashlogConstants",
    "WAWebEnvironment",
    "WAWebHistorySyncLidChatGating",
    "WAWebL10N",
    "WAWebLid1X1MigrationGating",
    "WAWebReloadReason",
    "WAWebTasksDailyStatsTask",
    "WAWebUA",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebWam",
    "WAWebWamGlobals",
    "asyncToGeneratorRuntime",
    "gkx"
], function(t, n, r, o, a, i, l) {
    const e = new Map([
        [
            "appIsBetaRelease",
            "is-beta"
        ],
        [
            "appVersion",
            "version"
        ],
        [
            "browserVersion",
            "browser-version"
        ],
        [
            "deviceName",
            "os"
        ],
        [
            "mcc",
            "phone-mcc"
        ],
        [
            "mnc",
            "phone-mnc"
        ],
        [
            "webc_bucket",
            "exp-bucket"
        ],
        [
            "webcPhoneAppVersion",
            "phone-app-version"
        ],
        [
            "webcPhoneCharging",
            "is-phone-charging"
        ],
        [
            "webcPhoneDeviceManufacturer",
            "phone-manufacturer"
        ],
        [
            "webcPhoneDeviceModel",
            "phone-model"
        ],
        [
            "webcPhoneOsVersion",
            "phone-os-version"
        ],
        [
            "webcPhonePlatform",
            "phone-os"
        ],
        [
            "webcWebPlatform",
            "platform"
        ],
        [
            "webcProtoVersion",
            "protocol-version"
        ],
        [
            "deviceID",
            "device-id"
        ],
        [
            "webcWebArch",
            "device-arch"
        ],
        [
            "webcWebDeviceManufacturer",
            "device-manufacturer"
        ],
        [
            "webcWebDeviceModel",
            "device-model"
        ],
        [
            "webcWebOsReleaseNumber",
            "device-release"
        ],
        [
            "deviceVersion",
            "os-version"
        ],
        [
            "userAgent",
            "user-agent"
        ],
        [
            "mdEnabled",
            "md-enabled"
        ],
        [
            "hasMdCompanion",
            "has-md-companion"
        ],
        [
            "entityId",
            "entity id"
        ],
        [
            "isLidMigrated",
            "is_lid_migrated"
        ],
        [
            "isHistoryLidSession",
            "is_history_lid_session"
        ],
        [
            "lidCompletedMigrations",
            "lid_completed_migrations"
        ]
    ]);
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            o("WAWebWam").Wam.initialize();
            const t = babelHelpers.extends({}, o("WAWebWamGlobals").Global.all, {
                webcWebPlatform: o("WAWebCrashlogConstants").CLB_PLATFORM,
                webcPhonePlatform: o("WAWebConnModel").Conn.platform,
                webcProtoVersion: String(o("WAWebConnModel").Conn.protoVersion)
            });
            if (r("WAWebEnvironment").isWindows) {
                t.subplatform = o("WAWebCrashlogConstants").CLB_SUBPLATFORM;
            }
            if (r("gkx")("26259")) {
                t.releaseChannel = "intern";
            } else if (r("gkx")("26258")) {
                t.releaseChannel = "production";
            }
            const n = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
            if (n) {
                t.deviceID = n.toString();
            }
            const a = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
            if (r("gkx")("11584") && a) {
                t.saga_copy = o("WAWebABPropsSaga").getIsSagaV1Enabled().toString();
                t.pn = a.user.toString();
            }
            const i = {};
            for(const l in t){
                const s = t[l];
                if (s != null) {
                    i[l] = s;
                }
            }
            i.debugIsExternalBeta = yield o("WAWebUserPrefsGeneral").getWhatsAppWebExternalBetaJoinedIdb();
            i.isLidMigrated = o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated();
            i.isHistoryLidSession = o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat();
            const u = o("WAWebReloadReason").getLastReload();
            if (u != null) {
                i.lastReloadReason = u.reason;
                i.lastReloadAgeS = u.ageS;
                if (u.msg != null) {
                    i.lastReloadMsgCount = u.msg;
                }
                if (u.receipt != null) {
                    i.lastReloadReceiptCount = u.receipt;
                }
            }
            const d = yield o("WAWebTasksDailyStatsTask").getLidMigrationStatus();
            if (d.completedMigrations != null) {
                i.lidCompletedMigrations = d.completedMigrations;
            }
            if (e) {
                const { addLanguageFields, addUserAgentDetails, convertFields, entityId, supportTag, user_review_score } = e;
                if (supportTag != null) {
                    i.context = supportTag;
                }
                if (entityId != null) {
                    i.entityId = entityId;
                }
                if (user_review_score != null) {
                    i.user_review_score = user_review_score;
                }
                if (addUserAgentDetails === true) {
                    i.userAgent = o("WAWebUA").UA.parser.getUA();
                }
                if (addLanguageFields === true) {
                    i.lc = r("WAWebL10N").getRegion();
                    i.lg = r("WAWebL10N").getLanguage();
                }
                if (convertFields === true) {
                    const y = c(i);
                    return y;
                }
            }
            return i;
        });
        return u.apply(this, arguments);
    }
    function c(t) {
        const n = {};
        for (const [a, i] of Object.entries(t)){
            n[e.get(a) ?? a] = i;
        }
        return n;
    }
    l.getDebugInfo = s;
}, 98);