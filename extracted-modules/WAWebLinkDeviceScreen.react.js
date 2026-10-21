__d("WAWebLinkDeviceScreen.react", [
    "Promise",
    "WAWebAndroidTabletVisitId",
    "WAWebAutoLogoutGating",
    "WAWebDesktopUpsellQRCodeSlimBanner.react",
    "WAWebDesktopUpsellStoreOpener",
    "WAWebEnvironment",
    "WAWebFlex.react",
    "WAWebL10N",
    "WAWebLandingFooter.react",
    "WAWebLandingHeader.react",
    "WAWebLandingPromoGating",
    "WAWebLinkDeviceAndroidTablet.react",
    "WAWebLinkDeviceAndroidTabletOverlayWam",
    "WAWebLinkDeviceAppleTouchScreen.react",
    "WAWebLinkDeviceMethod.react",
    "WAWebLinkDeviceScreenGatedUtils",
    "WAWebODS",
    "WAWebPathfinderScreenName",
    "WAWebRobotoVariableFontLoadable",
    "WAWebSmsRegistrationSendSmsCall",
    "WAWebUA",
    "WAWebWamEnumWebcNativeUpsellCtaSourceType",
    "asyncToGeneratorRuntime",
    "qex",
    "react",
    "react-compiler-runtime",
    "requireDeferred",
    "useWAWebAndroidTabletOverlayControlLogging",
    "useWAWebAndroidTabletOverlayEnabled",
    "useWAWebDesktopUpsellQRCodeBannerType",
    "useWAWebLinkDeviceAutoLogout",
    "useWAWebSmsRegistration"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useCallback: d, useEffect: m, useMemo: p, useState: _ } = c;
    const f = r("requireDeferred")("WAWebLinkDeviceAndroidTabletCountry").__setRef("WAWebLinkDeviceScreen.react");
    const g = r("requireDeferred")("WAWebLinkDeviceExperience").__setRef("WAWebLinkDeviceScreen.react");
    const h = r("requireDeferred")("WAWebLinkDeviceQplHelpLinkEvent").__setRef("WAWebLinkDeviceScreen.react");
    const y = r("requireDeferred")("WAWebPageLoadLogging").__setRef("WAWebLinkDeviceScreen.react");
    const C = r("requireDeferred")("useWAWebDesktopUpsellQplImpression").__setRef("WAWebLinkDeviceScreen.react");
    const b = {
        wrapper: {
            height: "x1dr59a3",
            overflowX: "xw2csxc",
            overflowY: "x1odjw0f",
            paddingTop: "xyinxu5",
            paddingInlineEnd: "xp48ta0",
            paddingBottom: "x1g2khh7",
            paddingInlineStart: "xtssl2i",
            minWidth: "xp9ttsr",
            alignItems: "x6s0dn4",
            boxSizing: "x9f619",
            color: "xowvryd",
            $$css: true
        },
        headerFooterContainer: {
            width: "xh8yej3",
            height: "xwzfr38",
            $$css: true
        },
        wrapperWeb: {
            background: "xe4h88v",
            $$css: true
        },
        wrapperWindows: {
            background: "xp8kixx",
            $$css: true
        },
        contentWindowM1: {
            width: "xy296fx x91od0",
            minWidth: "xbl0rts",
            paddingTop: "x4i7bpe xvl3i4w",
            paddingInlineEnd: "x15zmtp0 xfqsd3n",
            paddingBottom: "x1sgudl8 xzg3blf",
            paddingInlineStart: "x1oiqv2n x191sbug",
            borderStartStartRadius: "x1rsuxf0",
            borderStartEndRadius: "xcgujcq",
            borderEndEndRadius: "x1igtfuo",
            borderEndStartRadius: "x13up0n2",
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopColor: "xpypsur",
            borderInlineEndColor: "x1fe0zbt",
            borderBottomColor: "x249io5",
            borderInlineStartColor: "xtq6bvn",
            backgroundColor: "x12peec7",
            $$css: true
        },
        upsellBannerContainer: {
            display: "x1lliihq",
            width: "xh8yej3",
            $$css: true
        }
    };
    function v(t) {
        o("WAWebRobotoVariableFontLoadable").useApplyRobotoFont();
        const i = r("useWAWebAndroidTabletOverlayEnabled")();
        const { controlDetectionInfo: l, detectionFailed: s, detectionInfo: c, enabled: f, resolving: v } = i;
        m(function() {
            o("WAWebPathfinderScreenName").updateCurrentScreenName("link-device-landing");
        }, []);
        m(function() {
            const e = r("qex")._("5285");
            if (e === "control") {
                r("WAWebODS").incr("web.client.wa_logged_out_qe_universe_group_control");
            } else if (e === "test") {
                r("WAWebODS").incr("web.client.wa_logged_out_qe_universe_group_test");
            }
        }, []);
        m(function() {
            if (t.shouldEndPageLoadQpl !== false) {
                (e || (e = n("Promise"))).all([
                    y.load(),
                    g.load()
                ]).then((e)=>{
                    const n = e[0].endPageLoadQpl;
                    const o = e[1].getWebCompanionLinkDeviceExperienceId;
                    n(true, o(t.apiCmd), r("WAWebL10N").getLocale());
                });
            }
        }, void 0);
        const L = r("useWAWebLinkDeviceAutoLogout")();
        const { autoLogoutEnabled: E, autoLogoutIframe: k, autoLogoutIframeLoaded: I, handleAutoLogoutToggle: T } = L;
        const D = o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe() || E;
        const x = !o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe() && I;
        const $ = _(t.apiCmd);
        const P = $[0];
        const N = $[1];
        const M = _(true);
        const w = M[0];
        const A = M[1];
        const F = _(true);
        const O = F[0];
        const B = F[1];
        const W = _(o("WAWebUA").UA.isOculusBrowser);
        const q = W[0];
        const U = W[1];
        m(function() {
            N(t.apiCmd);
        }, [
            t.apiCmd
        ]);
        const V = o("useWAWebDesktopUpsellQRCodeBannerType").useWAWebDesktopUpsellQRCodeBannerType(P);
        const H = r("useWAWebSmsRegistration")();
        const G = p(function() {
            return {
                onAutoLogoutToggle: T,
                autoLogoutEnabled: D,
                apiCmd: P,
                setApiCmd: N,
                smsRegistration: H,
                isLinkingWithPhoneNumber: q,
                setIsLinkingWithPhoneNumber: U
            };
        }, [
            P,
            T,
            q,
            D,
            H
        ]);
        const z = d(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (o("WAWebLinkDeviceScreenGatedUtils").getOptimizedRegFromWebVariant() === "test") {
                N({
                    resultType: "WEB_REGISTRATION",
                    data: {
                        url: "/"
                    }
                });
            } else {
                window.open("https://faq.whatsapp.com/497209988909970", "_blank");
            }
            const e = yield h.load();
            const { WAWebLinkDeviceQplHelpLinkEvent: t, WebcPairingScreenLinkType: n } = e;
            yield t(n.GET_STARTED, P);
        }), []);
        const j = d((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const n = yield h.load();
                const { WAWebLinkDeviceQplHelpLinkEvent: r, WebcPairingScreenLinkType: o } = n;
                yield r(o.LANDING_PROMO_GET_STARTED, P);
                yield H.sendSms(e, t, void 0, {
                    skipContinueQpl: true
                });
            });
            return function(t, n) {
                return e.apply(this, arguments);
            };
        })(), [
            P,
            H
        ]);
        const K = p(function() {
            return babelHelpers.extends({}, H, {
                sendSms: j
            });
        }, [
            j,
            H
        ]);
        const Q = d(function() {
            S("close", P, c);
            A(false);
        }, [
            c,
            P
        ]);
        const X = d(function() {
            S("continue-to-web", P, c);
            A(false);
        }, [
            c,
            P
        ]);
        const Y = d(function() {
            S("screen-loaded", P, c);
        }, [
            c,
            P
        ]);
        const J = d(function() {
            S("download-app", P, c);
            o("WAWebDesktopUpsellStoreOpener").openExternalWhatsAppAndroidTabletDownloadUrl(o("WAWebAndroidTabletVisitId").getOrCreateAndroidTabletVisitId());
        }, [
            c,
            P
        ]);
        const Z = r("useWAWebAndroidTabletOverlayControlLogging")(l, s, P);
        if (x || v) {
            const Component = o("WAWebFlex.react").FlexColumn;
            return <Component align="center" xstyle={[
                b.wrapper,
                r("WAWebEnvironment").isWeb ? b.wrapperWeb : b.wrapperWindows
            ]}>{k}</Component>;
        }
        if (O && o("WAWebLinkDeviceScreenGatedUtils").isAppleTouchscreenOverlayEnabled()) {
            const Component = r("WAWebLinkDeviceAppleTouchScreen.react");
            return <Component onContinueToWeb={function() {
                h.load().then(({ WAWebLinkDeviceQplHelpLinkEvent: t, WebcPairingScreenLinkType: n })=>{
                    t(n.APPLE_TOUCHSCREEN_OVERLAY_CONTINUE_TO_WEB, P);
                });
                B(false);
            }} onOpenAppStore={function() {
                C.load().then(({ logDesktopUpsellQplEvent: t })=>{
                    t("click", o("WAWebWamEnumWebcNativeUpsellCtaSourceType").WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.LINK_DEVICE_APPLE_TOUCHSCREEN_OVERLAY, P);
                });
                o("WAWebDesktopUpsellStoreOpener").openExternalWhatsAppDesktopDownloadUrl({
                    ctaSource: o("WAWebWamEnumWebcNativeUpsellCtaSourceType").WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.LINK_DEVICE_APPLE_TOUCHSCREEN_OVERLAY,
                    isBetaUser: false
                });
            }}/>;
        }
        if (w && f) {
            const Component = r("WAWebLinkDeviceAndroidTablet.react");
            return <Component onClose={Q} onContinueToWeb={X} onImpression={Y} onOpenPlayStore={J}/>;
        }
        const ee = <R upsellBannerType={V} apiCmd={t.apiCmd}/>;
        const te = P?.resultType === "WEB_REGISTRATION" && o("WAWebLinkDeviceScreenGatedUtils").getOptimizedRegFromWebVariant() === "test" || P?.resultType === "WEB_REGISTRATION_CAMPAIGN";
        const ne = H.serverResponse?.status === o("WAWebSmsRegistrationSendSmsCall").WhatsappGrowthInvites_SignUpViaWebResponseStatus.SENT;
        const re = !te && !ne && (!o("WAWebLandingPromoGating").isLandingPromoEnabled() || !q);
        const Component = o("WAWebFlex.react").FlexItem;
        const Component_1 = o("WAWebFlex.react").FlexItem;
        const Component_2 = r("WAWebLandingFooter.react");
        const Component_3 = o("WAWebFlex.react").FlexItem;
        const Component_4 = o("WAWebFlex.react").FlexColumn;
        const Component_5 = o("WAWebFlex.react").FlexColumn;
        return <Component_5 align="center" xstyle={[
            b.wrapper,
            r("WAWebEnvironment").isWeb ? b.wrapperWeb : b.wrapperWindows
        ]}>{k}<Component xstyle={b.headerFooterContainer} shrink={0}>{u.jsx(r("WAWebLandingHeader.react"), {
            showAppDownloadButton: V === o("useWAWebDesktopUpsellQRCodeBannerType").WAWebDesktopUpsellQRCodeBannerType.NONE && !te,
            surface: "link-device-screen"
        })}</Component><Component_4 align="center" justify="center" grow={1} shrink={0} rowGap={16}>{ee}<div ref={Z} className="x1lliihq"><Component_1 align="center" justify="center" xstyle={b.contentWindowM1}>{u.jsx(r("WAWebLinkDeviceMethod.react"), babelHelpers.extends({}, G))}</Component_1></div><Component_3 shrink={0}>{re && <Component_2 isWebReg={te} onGetStartedNav={z} smsRegistration={K}/>}</Component_3></Component_4>{u.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: b.headerFooterContainer
        })}</Component_5>;
    }
    v.displayName = `${v.name} [from ${i.id}]`;
    function S(e, t, n) {
        o("WAWebLinkDeviceAndroidTabletOverlayWam").logAndroidTabletOverlayWamEvent(e);
        h.load().then(({ WAWebLinkDeviceQplHelpLinkEvent: o, WebcPairingScreenLinkType: a })=>{
            const i = e === "close" ? a.ANDROID_TABLET_OVERLAY_CLOSE : e === "continue-to-web" ? a.ANDROID_TABLET_OVERLAY_CONTINUE_TO_WEB : e === "download-app" ? a.ANDROID_TABLET_OVERLAY_DOWNLOAD_APP : e === "screen-loaded" ? a.ANDROID_TABLET_OVERLAY_SCREEN_LOADED : (()=>{
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
            })();
            o(i, t, void 0, n ?? void 0);
        });
        if (e === "screen-loaded" && n != null) {
            f.load().then(({ logAndroidTabletOverlayCountry: r })=>r(t, n));
        }
    }
    function R(e) {
        const t = o("react-compiler-runtime").c(3);
        const { apiCmd: n, upsellBannerType: a } = e;
        let i;
        if (t[0] !== n || t[1] !== a) {
            const l = [
                b.upsellBannerContainer
            ];
            i = a === o("useWAWebDesktopUpsellQRCodeBannerType").WAWebDesktopUpsellQRCodeBannerType.SLIM && <div className="x1lliihq xh8yej3">{u.jsx(r("WAWebDesktopUpsellQRCodeSlimBanner.react"), {
                apiCmd: n
            })}</div>;
            t[0] = n;
            t[1] = a;
            t[2] = i;
        } else {
            i = t[2];
        }
        return i;
    }
    l.default = v;
}, 98);