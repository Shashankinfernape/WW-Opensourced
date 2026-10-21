__d("WAWebDesktopUpsellCallingUnavailablePopover.react", [
    "fbt",
    "WAWebDesktopUpsellCallingPopover.react",
    "WAWebDesktopUpsellStoreOpener",
    "WAWebDesktopUpsellUtils",
    "WAWebWamEnumWebcNativeUpsellCtaEventType",
    "WAWebWamEnumWebcNativeUpsellCtaReleaseChannel",
    "WAWebWamEnumWebcNativeUpsellCtaSourceType",
    "WAWebWebcNativeUpsellCtaWamEvent",
    "react",
    "react-compiler-runtime",
    "useWAWebDesktopUpsellWamImpression",
    "useWAWebExternalBetaOptIn",
    "useWAWebOnUnmount"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(21);
        const { isGroupCall, userDesktopOs } = e;
        const i = isGroupCall === undefined ? false : isGroupCall;
        const CALL_BTN_MODAL_2 = o("WAWebWamEnumWebcNativeUpsellCtaSourceType").WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.CALL_BTN_MODAL_2;
        const s = o("useWAWebExternalBetaOptIn").useExternalBetaOptIn();
        const c = s[0];
        const p = o("useWAWebExternalBetaOptIn").useMacBetaUpsellOnWeb();
        let _;
        if (t[0] !== c || t[1] !== p) {
            _ = {
                isCtaVisible: true,
                source: CALL_BTN_MODAL_2,
                isBeta: p,
                isBetaUser: c
            };
            t[0] = c;
            t[1] = p;
            t[2] = _;
        } else {
            _ = t[2];
        }
        o("useWAWebDesktopUpsellWamImpression").useWAWebDesktopUpsellWamImpression(_);
        let f;
        if (t[3] !== c || t[4] !== p) {
            f = function() {
                new (o("WAWebWebcNativeUpsellCtaWamEvent")).WebcNativeUpsellCtaWamEvent({
                    webcNativeUpsellCtaEventType: o("WAWebWamEnumWebcNativeUpsellCtaEventType").WEBC_NATIVE_UPSELL_CTA_EVENT_TYPE.CTA_DISMISS,
                    webcNativeUpsellCtaSource: CALL_BTN_MODAL_2,
                    webcNativeUpsellCtaReleaseChannel: p ? o("WAWebWamEnumWebcNativeUpsellCtaReleaseChannel").WEBC_NATIVE_UPSELL_CTA_RELEASE_CHANNEL.BETA : o("WAWebWamEnumWebcNativeUpsellCtaReleaseChannel").WEBC_NATIVE_UPSELL_CTA_RELEASE_CHANNEL.PRODUCTION,
                    webcNativeUpsellCtaIsBetaUser: c
                }).commit();
            };
            t[3] = c;
            t[4] = p;
            t[5] = f;
        } else {
            f = t[5];
        }
        r("useWAWebOnUnmount")(f);
        let g;
        if (t[6] !== i || t[7] !== p || t[8] !== userDesktopOs) {
            g = d(userDesktopOs, p, i);
            t[6] = i;
            t[7] = p;
            t[8] = userDesktopOs;
            t[9] = g;
        } else {
            g = t[9];
        }
        let h;
        if (t[10] !== i || t[11] !== p || t[12] !== userDesktopOs) {
            h = m(userDesktopOs, p, i);
            t[10] = i;
            t[11] = p;
            t[12] = userDesktopOs;
            t[13] = h;
        } else {
            h = t[13];
        }
        let y;
        if (t[14] !== c || t[15] !== p) {
            y = function() {
                o("WAWebDesktopUpsellStoreOpener").openExternalWhatsAppDesktopDownloadUrl({
                    ctaSource: CALL_BTN_MODAL_2,
                    isBetaUpsell: p,
                    isBetaUser: c
                });
            };
            t[14] = c;
            t[15] = p;
            t[16] = y;
        } else {
            y = t[16];
        }
        let C;
        if (t[17] !== g || t[18] !== h || t[19] !== y) {
            const Component = r("WAWebDesktopUpsellCallingPopover.react");
            C = <Component title={g} body={h} onClick={y}/>;
            t[17] = g;
            t[18] = h;
            t[19] = y;
            t[20] = C;
        } else {
            C = t[20];
        }
        return C;
    }
    function d(userDesktopOs, t, n) {
        if (userDesktopOs === o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS) {
            if (n) {
                return s._("Make group calls with the Windows app");
            }
            return s._("Make calls with the Windows app");
        }
        if (t) {
            if (n) {
                return s._("Make group calls with the beta Mac app");
            }
            return s._("Make calls with the beta Mac app");
        }
        if (n) {
            return s._("Make group calls with the Mac app");
        }
        return s._("Make calls with the Mac app");
    }
    function m(userDesktopOs, t, n) {
        if (userDesktopOs === o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS) {
            if (n) {
                return s._("Download WhatsApp for Windows to start making group calls.");
            }
            return s._("Download WhatsApp for Windows to start making calls.");
        }
        if (t) {
            if (n) {
                return s._("Download the beta Mac app to start making group calls.");
            }
            return s._("Download the beta Mac app to start making calls.");
        }
        if (n) {
            return s._("Download WhatsApp for Mac to start making group calls.");
        }
        return s._("Download WhatsApp for Mac to start making calls.");
    }
    l.default = c;
}, 226);