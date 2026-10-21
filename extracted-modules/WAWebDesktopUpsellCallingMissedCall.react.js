__d("WAWebDesktopUpsellCallingMissedCall.react", [
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
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(22);
        const { isGroupCall, isMissedCall, userDesktopOs } = e;
        const l = isGroupCall === undefined ? false : isGroupCall;
        const s = isMissedCall === undefined ? true : isMissedCall;
        const MISSED_CALL_MODAL_2 = o("WAWebWamEnumWebcNativeUpsellCtaSourceType").WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.MISSED_CALL_MODAL_2;
        const p = o("useWAWebExternalBetaOptIn").useExternalBetaOptIn();
        const _ = p[0];
        const f = o("useWAWebExternalBetaOptIn").useMacBetaUpsellOnWeb();
        let g;
        if (t[0] !== _ || t[1] !== f) {
            g = {
                isCtaVisible: true,
                source: MISSED_CALL_MODAL_2,
                isBeta: f,
                isBetaUser: _
            };
            t[0] = _;
            t[1] = f;
            t[2] = g;
        } else {
            g = t[2];
        }
        o("useWAWebDesktopUpsellWamImpression").useWAWebDesktopUpsellWamImpression(g);
        let h;
        if (t[3] !== _ || t[4] !== f) {
            h = function() {
                new (o("WAWebWebcNativeUpsellCtaWamEvent")).WebcNativeUpsellCtaWamEvent({
                    webcNativeUpsellCtaEventType: o("WAWebWamEnumWebcNativeUpsellCtaEventType").WEBC_NATIVE_UPSELL_CTA_EVENT_TYPE.CTA_DISMISS,
                    webcNativeUpsellCtaSource: MISSED_CALL_MODAL_2,
                    webcNativeUpsellCtaReleaseChannel: f ? o("WAWebWamEnumWebcNativeUpsellCtaReleaseChannel").WEBC_NATIVE_UPSELL_CTA_RELEASE_CHANNEL.BETA : o("WAWebWamEnumWebcNativeUpsellCtaReleaseChannel").WEBC_NATIVE_UPSELL_CTA_RELEASE_CHANNEL.PRODUCTION,
                    webcNativeUpsellCtaIsBetaUser: _
                }).commit();
            };
            t[3] = _;
            t[4] = f;
            t[5] = h;
        } else {
            h = t[5];
        }
        r("useWAWebOnUnmount")(h);
        let y;
        if (t[6] !== l || t[7] !== f || t[8] !== userDesktopOs) {
            y = d(userDesktopOs, f, l);
            t[6] = l;
            t[7] = f;
            t[8] = userDesktopOs;
            t[9] = y;
        } else {
            y = t[9];
        }
        let C;
        if (t[10] !== l || t[11] !== s || t[12] !== f || t[13] !== userDesktopOs) {
            C = m({
                isGroupCall: l,
                isMissedCall: s,
                macBetaUpsell: f,
                userDesktopOs
            });
            t[10] = l;
            t[11] = s;
            t[12] = f;
            t[13] = userDesktopOs;
            t[14] = C;
        } else {
            C = t[14];
        }
        let b;
        if (t[15] !== _ || t[16] !== f) {
            b = function() {
                o("WAWebDesktopUpsellStoreOpener").openExternalWhatsAppDesktopDownloadUrl({
                    ctaSource: MISSED_CALL_MODAL_2,
                    isBetaUpsell: f,
                    isBetaUser: _
                });
            };
            t[15] = _;
            t[16] = f;
            t[17] = b;
        } else {
            b = t[17];
        }
        let v;
        if (t[18] !== y || t[19] !== C || t[20] !== b) {
            const Component = r("WAWebDesktopUpsellCallingPopover.react");
            v = <Component title={y} body={C} onClick={b}/>;
            t[18] = y;
            t[19] = C;
            t[20] = b;
            t[21] = v;
        } else {
            v = t[21];
        }
        return v;
    }
    function d(userDesktopOs, t, n) {
        if (userDesktopOs === o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS) {
            if (n) {
                return s._("Return group calls with the Windows app");
            }
            return s._("Return calls with the Windows app");
        }
        if (t) {
            if (n) {
                return s._("Return group calls with the beta Mac app");
            }
            return s._("Return calls with the beta Mac app");
        }
        if (n) {
            return s._("Return group calls with the Mac app");
        }
        return s._("Return calls with the Mac app");
    }
    function m({ isGroupCall, isMissedCall, macBetaUpsell, userDesktopOs }) {
        if (userDesktopOs === o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS) {
            if (isMissedCall) {
                if (isGroupCall) {
                    return s._("Download WhatsApp for Windows to start returning missed group calls.");
                }
                return s._("Download WhatsApp for Windows to start returning missed calls.");
            }
            if (isGroupCall) {
                return s._("Download WhatsApp for Windows to start returning group calls.");
            }
            return s._("Download WhatsApp for Windows to start returning calls.");
        }
        if (macBetaUpsell) {
            if (isMissedCall) {
                if (isGroupCall) {
                    return s._("Download the beta Mac app to start returning missed group calls.");
                }
                return s._("Download the beta Mac app to start returning missed calls.");
            }
            if (isGroupCall) {
                return s._("Download the beta Mac app to start returning group calls.");
            }
            return s._("Download the beta Mac app to start returning calls.");
        }
        if (isMissedCall) {
            if (isGroupCall) {
                return s._("Download WhatsApp for Mac to start returning missed group calls.");
            }
            return s._("Download WhatsApp for Mac to start returning missed calls.");
        }
        if (isGroupCall) {
            return s._("Download WhatsApp for Mac to start returning group calls.");
        }
        return s._("Download WhatsApp for Mac to start returning calls.");
    }
    l.default = c;
}, 226);