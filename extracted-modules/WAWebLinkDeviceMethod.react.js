__d("WAWebLinkDeviceMethod.react", [
    "CometPlaceholder.react",
    "Promise",
    "WAWebAutoLogoutGating",
    "WAWebConnModel",
    "WAWebHybridRegGating",
    "WAWebLinkDeviceEvents",
    "WAWebLinkDeviceQrcodeLayout.react",
    "WAWebLinkDeviceScreenGatedUtils",
    "WAWebPairingType",
    "WAWebRegistrationCampaignConstants",
    "WAWebSmsRegistrationSendSmsCall",
    "WAWebUA",
    "asyncToGeneratorRuntime",
    "deferredLoadComponent",
    "react",
    "requireDeferred",
    "requireDeferredForDisplay",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useCallback: d, useEffect: m, useState: p } = c;
    const _ = r("requireDeferred")("WAWebLinkDeviceAction").__setRef("WAWebLinkDeviceMethod.react");
    const f = r("requireDeferred")("WAWebLinkDevicePhoneNumber.react").__setRef("WAWebLinkDeviceMethod.react");
    const g = r("requireDeferred")("WAWebQrDeviceLinkingQpl").__setRef("WAWebLinkDeviceMethod.react");
    const h = r("requireDeferred")("WAWebShortcakeLinkingAction").__setRef("WAWebLinkDeviceMethod.react");
    const Y1 = r("deferredLoadComponent")(r("requireDeferredForDisplay")("WAWebLinkDeviceQrcode.react").__setRef("WAWebLinkDeviceMethod.react"));
    const C = r("deferredLoadComponent")(r("requireDeferred")("WAWebShortcakePasskeyScreen.react").__setRef("WAWebLinkDeviceMethod.react"));
    const B1 = r("deferredLoadComponent")(f);
    const V1 = r("deferredLoadComponent")(r("requireDeferred")("WAWebSmsRegistrationConfirmation.react").__setRef("WAWebLinkDeviceMethod.react"));
    const S = r("deferredLoadComponent")(r("requireDeferred")("WAWebSmsRegistrationPhoneNumberInput.react").__setRef("WAWebLinkDeviceMethod.react"));
    const R = r("deferredLoadComponent")(r("requireDeferred")("WAWebWaComSignupSmsPhoneNumberInput.react").__setRef("WAWebLinkDeviceMethod.react"));
    function L({ apiCmd: l, autoLogoutEnabled: s, imperativeRef: c, isLinkingWithPhoneNumber: E = false, onAutoLogoutToggle: k, onBack: I, onContinue: T, setApiCmd: D, setIsLinkingWithPhoneNumber: x, smsRegistration: $ }) {
        const P = o("WAWebUA").UA.isOculusBrowser;
        const N = p(P);
        const M = N[0];
        const w = N[1];
        const A = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const r = yield (e || (e = n("Promise"))).all([
                    _.load()
                ]);
                const a = r[0].resetLinkDeviceState;
                yield a({
                    linkDeviceMethod: t ? o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING : o("WAWebPairingType").PairingType.QR_CODE
                });
                x?.(t);
            });
            return function(n) {
                return t.apply(this, arguments);
            };
        })();
        const F = p(false);
        const O = F[0];
        const B = F[1];
        o("useWAWebListener").useListener(o("WAWebLinkDeviceEvents").WAWebLinkDeviceEvents, "link_device_events:passkey_prologue_request", d(function() {
            B(true);
        }, []));
        const W = p(null);
        const q = W[0];
        const U = W[1];
        const V = p(function() {
            return f.getModuleIfRequireable() != null;
        });
        const H = V[0];
        const G = V[1];
        m(function() {
            if (!H) {
                const e = f.onReady(function() {
                    G(true);
                });
                return function() {
                    return e.remove();
                };
            }
        }, [
            H
        ]);
        o("useWAWebListener").useListener(o("WAWebConnModel").Conn, "change:ref", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (M && E) {
                const t = yield (e || (e = n("Promise"))).all([
                    _.load()
                ]);
                const r = t[0].resetLinkDeviceState;
                r({
                    linkDeviceMethod: o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING
                }).then(()=>w(false));
                return;
            }
            const a = yield _.load();
            const i = a.getPreselectedCountryCodeIso;
            const l = yield i();
            U(l);
        }), {
            once: true
        });
        if ($ != null && $.serverResponse?.status === o("WAWebSmsRegistrationSendSmsCall").WhatsappGrowthInvites_SignUpViaWebResponseStatus.SENT) {
            const { lastCountryId: z, lastPhoneNumber: j, reset: K, sendSms: Q, serverResponse: X } = $;
            const Component = r("CometPlaceholder.react");
            return <Component fallback=<div/> name="WAWebSmsRegistrationConfirmation"><V1 selectedCountryId={z} phoneNumberWithoutCountryCode={j} onBack={function() {
                if (I) {
                    I();
                    return;
                }
                K();
            }} onContinue={T} onRetry={n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield Q(z, j);
            })} providerNumber={X?.provider_number} theme={o("WAWebHybridRegGating").isHybridRegEnabled() ? "wds" : void 0}/></Component>;
        }
        if (O) {
            const Component = r("CometPlaceholder.react");
            return <Component fallback=<div/> name="WAWebShortcakePasskeyScreen"><C onCancel={n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                try {
                    const t = yield (e || (e = n("Promise"))).all([
                        h.load(),
                        _.load()
                    ]);
                    const r = t[0];
                    const a = t[1];
                    r.cancelShortcakePasskeyPairing();
                    yield a.resetLinkDeviceState({
                        linkDeviceMethod: o("WAWebPairingType").PairingType.QR_CODE
                    });
                } finally{
                    B(false);
                }
            })} onConfirmVerificationCode={n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = yield h.load();
                yield e.confirmShortcakeVerificationCode();
            })} onStartPasskeyPairing={n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = yield h.load();
                yield e.startShortcakePasskeyPairing();
            })}/></Component>;
        }
        if (l?.resultType === "WEB_REGISTRATION" && o("WAWebLinkDeviceScreenGatedUtils").getOptimizedRegFromWebVariant() === "test") {
            const Component = r("CometPlaceholder.react");
            return <Component fallback=<div/> name="WAWebSmsRegistrationPhoneNumberInput"><S imperativeRef={c} onBack={I} onContinue={T} setApiCmd={D}/></Component>;
        }
        if (l?.resultType === "WEB_REGISTRATION_CAMPAIGN") {
            if (l.data.phoneNumberWithoutCountryCode == null || l.data.group == null || l.data.group === o("WAWebRegistrationCampaignConstants").WHATSAPP_DOT_COM_REG_EXP_CONTROL) {
                const Component = r("CometPlaceholder.react");
                return <Component fallback=<div/> name="WAWebSmsRegistrationPhoneNumberInput"><S experimentBucket={l?.data?.group} imperativeRef={c} onBack={I} onContinue={T} setApiCmd={D}/></Component>;
            }
            const Component = r("CometPlaceholder.react");
            return <Component fallback=<div/> name="WAWebWaComSignupSmsPhoneNumberInput"><R setApiCmd={D} experimentBucket={l.data.group} phoneNumberWithoutCountryCodeFromQueryParams={l.data.phoneNumberWithoutCountryCode} providerNumberFromQueryParams={l.data.providerNumber}/></Component>;
        }
        if (E) {
            const Component = r("CometPlaceholder.react");
            return <Component fallback=<div/> name={i.id}><B1 apiCmd={l} initialCountryId={q} isLinkingPageLoading={M} onClickLinkWithQr={(()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    e?.preventDefault();
                    e?.stopPropagation();
                    yield A(false);
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()}/></Component>;
        }
        const J = !s || o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe();
        const Z = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                e?.preventDefault();
                e?.stopPropagation();
                g.onReady(function(e) {
                    return e.companionDeviceLinkingScreenQpl.switchToPhoneNumber();
                });
                yield A(true);
            });
            return function(n) {
                return e.apply(this, arguments);
            };
        })();
        const ee = H ? Z : null;
        const Component = o("WAWebLinkDeviceQrcodeLayout.react").WAWebLinkDeviceQrcodeLayout;
        const Component_1 = r("CometPlaceholder.react");
        return <Component_1 fallback=<Component apiCmd={l} autoLogoutEnabled={s} enabedAlternateDeviceLinking={J} onAutoLogoutToggle={k}>{u.jsx(o("WAWebLinkDeviceQrcodeLayout.react").QRSpinner, {})}</Component> name="WAWebLinkDeviceQrcode"><Y1 apiCmd={l} enabedAlternateDeviceLinking={J} onAutoLogoutToggle={k} autoLogoutEnabled={s} onClickLinkWithPhoneNumber={ee}/></Component_1>;
    }
    L.displayName = `${L.name} [from ${i.id}]`;
    l.default = L;
}, 98);