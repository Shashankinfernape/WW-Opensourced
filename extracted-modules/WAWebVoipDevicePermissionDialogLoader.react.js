__d("WAWebVoipDevicePermissionDialogLoader.react", [
    "JSResourceForInteraction",
    "WALogger",
    "WAPromiseDelays",
    "WAWebKeyboardTabUtils",
    "WAWebVoipBrowserPermissionButtonGating",
    "WAWebVoipDevicePermissionDialogODS",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = 5000;
    const customSelector = 'microphone, camera, usermedia, button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])';
    let _ = false;
    let f = false;
    function g() {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = R();
            const t = e.getModuleIfRequired();
            if (t != null) {
                return t.WAWebVoipDevicePermissionDialog;
            }
            if (_) {
                return null;
            }
            try {
                const a = yield o("WAPromiseDelays").withTimeout(e.load(), m, function() {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [DevicePermissionDialog] loading timed out"
                    ])));
                    _ = true;
                    S();
                    return null;
                });
                return a?.WAWebVoipDevicePermissionDialog ?? null;
            } catch (error) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DevicePermissionDialog] loading failed"
                ]))).catching(r("getErrorSafe")(error));
                S();
                return null;
            }
        });
        return h.apply(this, arguments);
    }
    function y() {
        try {
            R().preload();
        } catch (error) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DevicePermissionDialog] preloading failed"
            ]))).catching(r("getErrorSafe")(error));
        }
    }
    function C() {
        if (o("WAWebVoipBrowserPermissionButtonGating").hasBrowserPermissionButton("microphone") || o("WAWebVoipBrowserPermissionButtonGating").hasBrowserPermissionButton("camera")) {
            y();
        }
    }
    function b() {
        _ = false;
        f = false;
    }
    function v(e, t, n) {
        e.openModal(d.jsx(t, babelHelpers.extends({}, n, {
            close: e.closeModal
        })), {
            focusType: {
                customSelector,
                type: o("WAWebKeyboardTabUtils").FocusType.CUSTOM_SELECTOR
            },
            transition: "none"
        });
        o("WAWebVoipDevicePermissionDialogODS").logCallPermissionDialog(n.action, "shown");
    }
    function S() {
        if (!f) {
            f = true;
            o("WAWebVoipDevicePermissionDialogODS").logCallPermissionDialogLoadFailed();
        }
    }
    function R() {
        return r("JSResourceForInteraction")("WAWebVoipDevicePermissionDialog.react").__setRef("WAWebVoipDevicePermissionDialogLoader.react");
    }
    l.loadDevicePermissionDialog = g;
    l.preloadDevicePermissionDialog = y;
    l.prefetchDevicePermissionDialogAtBoot = C;
    l.resetDevicePermissionDialogLoaderForTesting = b;
    l.openDevicePermissionDialog = v;
}, 98);