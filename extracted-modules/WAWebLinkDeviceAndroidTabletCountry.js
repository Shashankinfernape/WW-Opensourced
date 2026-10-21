__d("WAWebLinkDeviceAndroidTabletCountry", [
    "Promise",
    "WALogger",
    "WASmaxMdGetCountryCodeRPC",
    "WAWebConnModel",
    "WAWebLinkDeviceQplHelpLinkEvent",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield d();
            if (n != null) {
                o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.ANDROID_TABLET_OVERLAY_COUNTRY, e, undefined, t, n);
            }
        });
        return c.apply(this, arguments);
    }
    function d() {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                yield p();
                const t = yield o("WASmaxMdGetCountryCodeRPC").sendGetCountryCodeRPC();
                if (t.name === "GetCountryCodeResponseGetCountryCodeResponse") {
                    return t.value.countryCodeIso;
                }
                return null;
            } catch (error) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[android-tablet-overlay] country lookup failed: ",
                    ""
                ])), error);
                return null;
            }
        });
        return m.apply(this, arguments);
    }
    function p() {
        if (o("WAWebConnModel").Conn.ref != null && o("WAWebConnModel").Conn.ref !== "") {
            return (s || (s = n("Promise"))).resolve();
        }
        return new (s || (s = n("Promise")))(function(e) {
            o("WAWebConnModel").Conn.once("change:ref", function() {
                return e();
            });
        });
    }
    l.logAndroidTabletOverlayCountry = u;
}, 98);