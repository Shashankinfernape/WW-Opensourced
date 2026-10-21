__d("WAWebLinkDevicePhoneNumber.react", [
    "fbt",
    "$InternalEnum",
    "WALogger",
    "WAWebAltDeviceLinkingIq",
    "WAWebAltDeviceLinkingQpl",
    "WAWebLinkDeviceAction",
    "WAWebLinkDeviceEvents",
    "WAWebLinkDevicePhoneNumberCodeScreen.react",
    "WAWebLinkDevicePhoneNumberEntryScreen.react",
    "WAWebModalSingleActionOpener",
    "WAWebNetworkStatus",
    "WAWebPairingType",
    "asyncToGeneratorRuntime",
    "cr:1064",
    "nullthrows",
    "react",
    "useWAWebListener",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "apiCmd"
    ];
    let u;
    let c;
    let d;
    let m;
    const p = m || (m = o("react"));
    const _ = m;
    const { useEffect: f, useState: g } = _;
    const h = n("$InternalEnum").Mirrored([
        "STEP1_PHONE_NUMBER_ENTRY",
        "STEP2_DISPLAY_CODE"
    ]);
    function y(t) {
        const a = g(h.STEP1_PHONE_NUMBER_ENTRY);
        const i = a[0];
        const l = a[1];
        const m = g(null);
        const _ = m[0];
        const y = m[1];
        const C = g(null);
        const b = C[0];
        const v = C[1];
        const S = g(false);
        const R = S[0];
        const L = S[1];
        const E = function() {
            return o("WAWebModalSingleActionOpener").openSingleActionModal({
                title: s._("Something went wrong"),
                body: s._("Please try again or link with the QR code."),
                okButtonTestid: "link_device_phone_number_error_ok_button",
                onDismiss: function() {
                    l(h.STEP1_PHONE_NUMBER_ENTRY);
                }
            });
        };
        const k = function() {
            return o("WAWebModalSingleActionOpener").openSingleActionModal({
                title: s._("Limited availability"),
                body: s._("This feature is not available to you yet. It's coming soon. Link with QR code instead."),
                buttonText: s._("Link with QR code"),
                okButtonTestid: "link_device_phone_number_feature_unavailable_qr_button",
                onDismiss: function() {
                    return t.onClickLinkWithQr();
                }
            });
        };
        const I = function() {
            return o("WAWebModalSingleActionOpener").openSingleActionModal({
                title: s._("Too many attempts"),
                body: s._("There were too many attempts to link a device. Please try again later."),
                okButtonTestid: "link_device_phone_number_rate_limit_qr_button",
                onDismiss: function() {
                    return t.onClickLinkWithQr();
                }
            });
        };
        const T = r("useWAWebStableCallback")((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                y(e);
                L(false);
                l(h.STEP2_DISPLAY_CODE);
                try {
                    if (r("WAWebNetworkStatus").online) {
                        const n = yield o("WAWebLinkDeviceAction").genLinkDeviceCodeForPhoneNumber(e, t);
                        v(n);
                    }
                } catch (e) {
                    o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker("gen_code_exception");
                    yield o("WAWebLinkDeviceAction").resetLinkDeviceState({
                        linkDeviceMethod: o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING
                    });
                    if (e instanceof o("WAWebAltDeviceLinkingIq").CompanionHelloError) {
                        o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[alt pairing] companion-hello err starting flow: ",
                            ""
                        ])), e);
                        switch(e.type?.name){
                            case "IQErrorFeatureNotAvailable":
                                l(h.STEP1_PHONE_NUMBER_ENTRY);
                                k();
                                return;
                            case "IQErrorRateOverlimit":
                                l(h.STEP1_PHONE_NUMBER_ENTRY);
                                I();
                                return;
                        }
                    }
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "alt pairing: unexpected error happened while starting flow: ",
                        ""
                    ])), e).sendLogs("alt pairing: unexpected error happened while starting flow");
                    E();
                }
            });
            return function(t, n) {
                return e.apply(this, arguments);
            };
        })());
        const D = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (!(i !== h.STEP2_DISPLAY_CODE || _ == null)) {
                    v(null);
                    o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker("refresh_code");
                    yield o("WAWebLinkDeviceAction").resetLinkDeviceState({
                        linkDeviceMethod: o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING
                    });
                    yield T(_, false);
                }
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        o("useWAWebListener").useListener(o("WAWebLinkDeviceEvents").WAWebLinkDeviceEvents, "link_device_events:refresh_alt_linking_code", D);
        o("useWAWebListener").useListener(r("WAWebNetworkStatus"), "change:online", function() {
            if (r("WAWebNetworkStatus").online) {
                D();
            } else {
                v(null);
            }
        });
        o("useWAWebListener").useListener(o("WAWebLinkDeviceEvents").WAWebLinkDeviceEvents, "link_device_events:error_alt_linking", E);
        f(function() {
            if (n("cr:1064") != null) {
                n("cr:1064").initialize();
            }
        }, []);
        if (_ == null && i !== h.STEP1_PHONE_NUMBER_ENTRY) {
            o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "[alt pairing] invalid state: null phone in code screen"
            ]))).sendLogs("alt pairing: null phone in code screen");
            l(h.STEP1_PHONE_NUMBER_ENTRY);
        }
        const Component = r("WAWebLinkDevicePhoneNumberCodeScreen.react");
        switch(i){
            case h.STEP1_PHONE_NUMBER_ENTRY:
                {
                    const x = t.apiCmd;
                    const $ = babelHelpers.objectWithoutPropertiesLoose(t, e);
                    return p.jsx(o("WAWebLinkDevicePhoneNumberEntryScreen.react").LinkWithPhoneNumberEntryScreen, babelHelpers.extends({
                        initialPhoneNumber: _,
                        showUpdatePrimaryAppBanner: R,
                        onSubmitPhoneNumber: function(t) {
                            return T(t, true);
                        }
                    }, $));
                }
            case h.STEP2_DISPLAY_CODE:
                return <Component code={b} phoneNumber={r("nullthrows")(_)} onClickEditPhoneNumber={n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    yield o("WAWebLinkDeviceAction").resetLinkDeviceState({
                        linkDeviceMethod: o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING
                    });
                    l(h.STEP1_PHONE_NUMBER_ENTRY);
                    v(null);
                })} onClickLinkWithQr={t.onClickLinkWithQr} apiCmd={t.apiCmd}/>;
        }
    }
    y.displayName = `${y.name} [from ${i.id}]`;
    l.default = y;
}, 226);