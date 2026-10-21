__d("WAWebNativeAppDownloadButton.react", [
    "fbt",
    "WAWebClickable.react",
    "WAWebDesktopUpsellPlatformAwareHooks",
    "WAWebDesktopUpsellQRCodeBannerExperiment",
    "WAWebDesktopUpsellStoreOpener",
    "WAWebFlex.react",
    "WAWebLinkDeviceScreenPrimaryButton.react",
    "WAWebWamEnumWebcNativeUpsellCtaSourceType",
    "WDSIconIcChevronRight.react",
    "WDSIconIcDownload.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebDesktopUpsellQplImpression",
    "useWAWebDesktopUpsellWamImpression"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(20);
        const { apiCmd, inline, sourceType } = e;
        const c = inline === undefined ? false : inline;
        let d;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            d = o("WAWebDesktopUpsellQRCodeBannerExperiment").getWAWebDesktopUpsellQRCodeBannerExperiment();
            t[0] = d;
        } else {
            d = t[0];
        }
        const qrScreenExperimentGroup = d;
        const isCtaVisible = o("WAWebDesktopUpsellPlatformAwareHooks").useWAWebDesktopUpsellPlatformAwareOsVersionCheck();
        let _;
        if (t[1] !== apiCmd || t[2] !== sourceType) {
            _ = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    yield o("useWAWebDesktopUpsellQplImpression").logDesktopUpsellQplEvent("click", sourceType, apiCmd);
                    o("WAWebDesktopUpsellStoreOpener").openExternalWhatsAppDesktopDownloadUrl({
                        ctaSource: sourceType,
                        qrScreenExperimentGroup,
                        isBetaUser: false
                    });
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            t[1] = apiCmd;
            t[2] = sourceType;
            t[3] = _;
        } else {
            _ = t[3];
        }
        const f = _;
        let g;
        if (t[4] !== isCtaVisible || t[5] !== sourceType) {
            g = {
                source: sourceType,
                isCtaVisible,
                qrScreenExperimentGroup,
                isBeta: false,
                isBetaUser: false
            };
            t[4] = isCtaVisible;
            t[5] = sourceType;
            t[6] = g;
        } else {
            g = t[6];
        }
        o("useWAWebDesktopUpsellWamImpression").useWAWebDesktopUpsellWamImpression(g);
        if (!isCtaVisible) {
            return null;
        }
        let h;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            h = s._("Download");
            t[7] = h;
        } else {
            h = t[7];
        }
        let y = h;
        if (sourceType === o("WAWebWamEnumWebcNativeUpsellCtaSourceType").WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.QR_SLIM_BANNER && c) {
            let C;
            if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
                C = s._("Get the app");
                t[8] = C;
            } else {
                C = t[8];
            }
            y = C;
        }
        if (c) {
            let b;
            if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
                b = "xujl8zx x1vs5fdg xewurvo x3pynha xowvryd xk50ysn xcul1l7";
                t[9] = b;
            } else {
                b = t[9];
            }
            let v;
            if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
                v = u.jsx(r("WDSIconIcChevronRight.react"), {
                    width: 16,
                    height: 16
                });
                t[10] = v;
            } else {
                v = t[10];
            }
            let S;
            if (t[11] !== y) {
                const Component = o("WAWebFlex.react").FlexRow;
                S = <Component align="center" columnGap={4}>{y}{v}</Component>;
                t[11] = y;
                t[12] = S;
            } else {
                S = t[12];
            }
            let R;
            if (t[13] !== f || t[14] !== S) {
                const Component = o("WAWebClickable.react").Clickable;
                R = <Component as="span" dataTestId="download-native-client-button-inline" className={b} onClick={f}>{S}</Component>;
                t[13] = f;
                t[14] = S;
                t[15] = R;
            } else {
                R = t[15];
            }
            return R;
        }
        let icon;
        if (t[16] === Symbol.for("react.memo_cache_sentinel")) {
            icon = u.jsx(r("WDSIconIcDownload.react"), {
                width: 16,
                height: 16
            });
            t[16] = icon;
        } else {
            icon = t[16];
        }
        let E;
        if (t[17] !== y || t[18] !== f) {
            const Component = r("WAWebLinkDeviceScreenPrimaryButton.react");
            E = <Component icon={icon} onClick={f} text={y} testId="download-native-client-button"/>;
            t[17] = y;
            t[18] = f;
            t[19] = E;
        } else {
            E = t[19];
        }
        return E;
    }
    l.default = c;
}, 226);