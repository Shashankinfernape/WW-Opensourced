__d("WAWebConnModel", [
    "WALogger",
    "WAWebABPropsCache",
    "WAWebBaseModel",
    "WAWebConnGetters",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebVoipBackendLoadable",
    "WAWebWamEnumPlatformType",
    "WAWebWamGlobals",
    "WAWebWebcRawPlatformsWamEvent",
    "asyncToGeneratorRuntime",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return e && o("WAWebWamEnumPlatformType").PLATFORM_TYPE[e.toUpperCase()] || o("WAWebWamEnumPlatformType").PLATFORM_TYPE.UNKNOWN;
    }
    const u = ((t)=>{
        function a(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.id = o("WAWebBaseModel").prop();
            e.ref = o("WAWebBaseModel").prop();
            e.refTTL = o("WAWebBaseModel").prop();
            e.refId = o("WAWebBaseModel").prop();
            e.wid = o("WAWebBaseModel").prop();
            e.connected = o("WAWebBaseModel").prop();
            e.protoVersion = o("WAWebBaseModel").prop();
            e.clientToken = o("WAWebBaseModel").prop();
            e.serverToken = o("WAWebBaseModel").prop();
            e.secret = o("WAWebBaseModel").prop();
            e.isResponse = o("WAWebBaseModel").prop();
            e.locales = o("WAWebBaseModel").prop();
            e.is24h = o("WAWebBaseModel").prop();
            e.platform = o("WAWebBaseModel").prop();
            e.phone = o("WAWebBaseModel").prop();
            e.tos = o("WAWebBaseModel").prop();
            e.smbTos = o("WAWebBaseModel").prop(0);
            e.pushname = o("WAWebBaseModel").prop();
            e.blockStoreAdds = o("WAWebBaseModel").session(false);
            e.meReadyTriggered = o("WAWebBaseModel").session(false);
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const i = a.prototype;
        i.initialize = function() {
            const e = this;
            o("WAWebBaseModel").BaseModel.prototype.initialize.call(this);
            this.listenTo(this, "change:phone", function() {
                c(e.phone);
            });
            this.listenTo(this, "change:platform", this.$ConnImpl$p_1);
            this.on("me_ready", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield o("WAWebABPropsCache").waitForABPropConfigsReady();
                yield o("WAWebVoipBackendLoadable").initializeVoipFromBootGate("me_ready");
            }));
        };
        i.delete = function() {
            o("WAWebUserPrefsGeneral").setPushname();
            this.clear();
            o("WAWebConnGetters").clearConnGetterCacheFor(this);
        };
        i.canSetMyPushname = function() {
            return !o("WAWebConnGetters").getIsSMB(this);
        };
        i.$ConnImpl$p_1 = function() {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Conn: platform change: ",
                ""
            ])), this.platform);
            if (this.platform) {
                o("WAWebWamGlobals").Global.set({
                    webcPhonePlatform: s(this.platform)
                });
            }
            if (r("gkx")("26259")) {
                new (o("WAWebWebcRawPlatformsWamEvent")).WebcRawPlatformsWamEvent({
                    webcRawPlatform: this.platform
                }).commit();
            }
        };
        i.shouldSaveToCache = function() {
            return !!o("WAWebUserPrefsMeUser").getMaybeMeDevicePn() && !!this.id;
        };
        return a;
    })(o("WAWebBaseModel").BaseModel);
    u.Proxy = "conn";
    function c(e = {}) {
        const l = e;
        let s = l.mcc;
        let u = l.mnc;
        if (typeof s === "string" && s !== "") {
            s = parseInt(s, 10);
        }
        if (typeof u === "string" && u !== "") {
            u = parseInt(u, 10);
        }
        o("WAWebWamGlobals").Global.set({
            mcc: s ?? null,
            mnc: u ?? null,
            webcPhoneDeviceManufacturer: e.device_manufacturer ?? null,
            webcPhoneDeviceModel: e.device_model ?? null,
            webcPhoneOsBuildNumber: e.os_build_number ?? null,
            webcPhoneOsVersion: e.os_version ?? null,
            webcPhoneAppVersion: e.wa_version ?? null
        });
    }
    const d = o("WAWebBaseModel").defineModel(u);
    const m = new d({
        id: "1"
    });
    l.Conn = m;
}, 98);