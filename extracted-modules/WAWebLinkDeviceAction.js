__d("WAWebLinkDeviceAction", [
    "WALogger",
    "WASmaxMdGetCountryCodeRPC",
    "WAWebAltDeviceLinkingApi",
    "WAWebBackendEventBus",
    "WAWebLinkDeviceEvents",
    "WAWebPairingType",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s() {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                const t = yield o("WASmaxMdGetCountryCodeRPC").sendGetCountryCodeRPC();
                return t.value.countryCodeIso;
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[alt-link] sendGetCountryCodeRPC failed: ",
                    ""
                ])), t).sendLogs("alt device linking: sendGetCountryCodeRPC failed");
            }
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            o("WAWebBackendEventBus").BackendEventBus.triggerRefreshQR();
            if (e.linkDeviceMethod === o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING) {
                yield o("WAWebAltDeviceLinkingApi").initializeAltDeviceLinking();
                o("WAWebAltDeviceLinkingApi").setPairingType(o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING);
            } else {
                yield o("WAWebAltDeviceLinkingApi").initializeQRLinking();
                o("WAWebAltDeviceLinkingApi").setPairingType(o("WAWebPairingType").PairingType.QR_CODE);
            }
        });
        return d.apply(this, arguments);
    }
    function m(e, t) {
        return o("WAWebAltDeviceLinkingApi").startAltLinkingFlow(e, t);
    }
    function p(e) {
        o("WAWebLinkDeviceEvents").WAWebLinkDeviceEvents.trigger("link_device_events:refresh_alt_linking_code");
    }
    function _(e) {
        o("WAWebLinkDeviceEvents").WAWebLinkDeviceEvents.trigger("link_device_events:force_manual_refresh");
    }
    function f() {
        o("WAWebLinkDeviceEvents").WAWebLinkDeviceEvents.trigger("link_device_events:error_alt_linking");
    }
    function g() {
        o("WAWebLinkDeviceEvents").WAWebLinkDeviceEvents.trigger("link_device_events:primary_hello_received");
    }
    l.getPreselectedCountryCodeIso = s;
    l.resetLinkDeviceState = c;
    l.genLinkDeviceCodeForPhoneNumber = m;
    l.refreshAltLinkingCode = p;
    l.forceManualRefresh = _;
    l.errorAltLinking = f;
    l.primaryHelloReceivedAltLinking = g;
}, 98);