__d("useWAWebDesktopUpsellWamImpression", [
    "WAWebWamEnumWebcNativeUpsellCtaEventType",
    "WAWebWamEnumWebcNativeUpsellCtaReleaseChannel",
    "WAWebWebcNativeUpsellCtaWamEvent",
    "react",
    "react-compiler-runtime",
    "useWAWebCallbackOnce"
], function(t, n, r, o, a, i, l) {
    let e;
    const useEffect = (e || (e = o("react"))).useEffect;
    function useU(e) {
        const t = o("react-compiler-runtime").c(9);
        const { isBeta, isBetaUser, isCtaVisible, qrScreenExperimentGroup, source } = e;
        let c;
        if (t[0] !== isBeta || t[1] !== isBetaUser || t[2] !== qrScreenExperimentGroup || t[3] !== source) {
            c = function() {
                new (o("WAWebWebcNativeUpsellCtaWamEvent")).WebcNativeUpsellCtaWamEvent({
                    webcNativeUpsellCtaEventType: o("WAWebWamEnumWebcNativeUpsellCtaEventType").WEBC_NATIVE_UPSELL_CTA_EVENT_TYPE.IMPRESSION,
                    webcNativeUpsellCtaSource: source,
                    webcNativeUpsellCtaQrScreenExperimentGroup: qrScreenExperimentGroup,
                    webcNativeUpsellCtaReleaseChannel: isBeta ? o("WAWebWamEnumWebcNativeUpsellCtaReleaseChannel").WEBC_NATIVE_UPSELL_CTA_RELEASE_CHANNEL.BETA : o("WAWebWamEnumWebcNativeUpsellCtaReleaseChannel").WEBC_NATIVE_UPSELL_CTA_RELEASE_CHANNEL.PRODUCTION,
                    webcNativeUpsellCtaIsBetaUser: isBetaUser
                }).commit();
            };
            t[0] = isBeta;
            t[1] = isBetaUser;
            t[2] = qrScreenExperimentGroup;
            t[3] = source;
            t[4] = c;
        } else {
            c = t[4];
        }
        const d = r("useWAWebCallbackOnce")(c);
        let m;
        let p;
        if (t[5] !== isCtaVisible || t[6] !== d) {
            m = function() {
                if (isCtaVisible) {
                    d();
                }
            };
            p = [
                d,
                isCtaVisible
            ];
            t[5] = isCtaVisible;
            t[6] = d;
            t[7] = m;
            t[8] = p;
        } else {
            m = t[7];
            p = t[8];
        }
        useEffect(m, p);
    }
    l.useWAWebDesktopUpsellWamImpression = useU;
}, 98);