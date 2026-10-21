__d("WAWebShortcakeLinkingBridgeApi", [
    "WALogger",
    "WAWebAltDeviceLinkingApi",
    "WAWebLinkDeviceEvents",
    "WAWebPairingType"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = {
        passkeyPrologueRequest: function() {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake bridge: passkeyPrologueRequest"
            ])));
            o("WAWebAltDeviceLinkingApi").setPairingType(o("WAWebPairingType").PairingType.SHORTCAKE_PASSKEY);
            o("WAWebLinkDeviceEvents").WAWebLinkDeviceEvents.triggerPasskeyPrologueRequest();
        },
        shortcakePrologueSent: function() {
            o("WAWebLinkDeviceEvents").WAWebLinkDeviceEvents.triggerShortcakePrologueSent();
        },
        shortcakeVerificationCodeReady: function({ skipHandoffUx, verificationCode }) {
            o("WAWebLinkDeviceEvents").WAWebLinkDeviceEvents.triggerShortcakeVerificationCodeReady(verificationCode, skipHandoffUx);
        },
        shortcakeError: function({ reason }) {
            o("WAWebLinkDeviceEvents").WAWebLinkDeviceEvents.triggerShortcakeError(reason);
        }
    };
    l.ShortcakeLinkingBridgeApi = s;
}, 98);