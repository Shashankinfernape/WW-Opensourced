__d("WAWebHandleDeviceSwitchingNotification", [
    "WADeprecatedWapParser",
    "WALogger",
    "WATimeUtils",
    "WAWap",
    "WAWebBackendApi",
    "WAWebUserPrefsMeUser",
    "WAWebWaOldCodeWamEvent",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = new (r("WADeprecatedWapParser"))("incomingDeviceSwitchingNotificationParser", function(e) {
        e.assertTag("notification");
        const t = e.attrString("id");
        const n = e.attrWapJid("from");
        const r = e.child("wa_old_registration");
        const o = r.attrString("code");
        const expiryTime = r.attrTime("expiry_t");
        const i = r.attrTime("ts");
        const l = r.attrString("device_id");
        return {
            stanzaId: t,
            from: n,
            code: o,
            expiryTime,
            ts: i,
            deviceId: l
        };
    });
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = u.parse(t);
            if (n.error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Parsing Error: ",
                    ""
                ])), n.error.toString());
                throw n.error;
            }
            const n_success = n.success;
            const a = o("WAWap").wap("ack", {
                id: o("WAWap").CUSTOM_STRING(n_success.stanzaId),
                class: "notification",
                type: "registration",
                to: n_success.from
            });
            const r_expiryTime = n_success.expiryTime;
            const l = o("WATimeUtils").unixTime();
            if (l > r_expiryTime) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "OTP code has expired, expiry time: ",
                    " and current time: ",
                    ""
                ])), r_expiryTime, l);
                return a;
            }
            const r_code = n_success.code;
            o("WAWebBackendApi").frontendFireAndForget("showDeviceSwitchOtp", {
                otpCode: r_code
            });
            const d = o("WAWebUserPrefsMeUser").getMeDeviceOrThrow().getDeviceId().toString();
            new (o("WAWebWaOldCodeWamEvent")).WaOldCodeWamEvent({
                deviceId: d
            }).commit();
            return a;
        });
        return d.apply(this, arguments);
    }
    l.default = c;
}, 98);