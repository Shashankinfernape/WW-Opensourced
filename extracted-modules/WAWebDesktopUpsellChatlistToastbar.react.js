__d("WAWebDesktopUpsellChatlistToastbar.react", [
    "WAWebDesktopUpsellCommonStrings",
    "WAWebDesktopUpsellEvents",
    "WAWebDesktopUpsellPlatformAwareHooks",
    "WAWebDesktopUpsellStoreOpener",
    "WAWebDesktopUpsellUtils",
    "WAWebDesktopUpsellWASquareIcon.react",
    "WAWebMacBetaUpsellToastbar.react",
    "WAWebText.react",
    "WAWebToastbar.react",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "WAWebWamEnumWebcNativeUpsellCtaEventType",
    "WAWebWamEnumWebcNativeUpsellCtaReleaseChannel",
    "WAWebWamEnumWebcNativeUpsellCtaSourceType",
    "WAWebWebcNativeUpsellCtaWamEvent",
    "cr:23046",
    "react",
    "react-compiler-runtime",
    "useWAWebDesktopUpsellWamImpression",
    "useWAWebExternalBetaOptIn",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { startTransition, useState } = u;
    const m = {
        textWrapper: {
            lineHeight: "xo5v014",
            $$css: true
        }
    };
    function p() {
        const e = o("react-compiler-runtime").c(18);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = o("WAWebDesktopUpsellUtils").getUserDesktopOs();
            e[0] = t;
        } else {
            t = e[0];
        }
        const a = t;
        const i = o("WAWebDesktopUpsellPlatformAwareHooks").useWAWebDesktopUpsellPlatformCheck();
        let l;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            l = (n("cr:23046") == null ? undefined : n("cr:23046").isWindowsHybridEnabled()) ?? false;
            e[1] = l;
        } else {
            l = e[1];
        }
        const g = !l && i;
        const h = o("useWAWebExternalBetaOptIn").useExternalBetaOptIn();
        const y = h[0];
        const isBeta = o("useWAWebExternalBetaOptIn").useMacBetaUpsellOnWeb();
        const b = useState(true);
        const v = b[0];
        const S = b[1];
        let R;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            R = function(t) {
                startTransition(function() {
                    S(t.conversationPanelVisible);
                });
            };
            e[2] = R;
        } else {
            R = e[2];
        }
        o("useWAWebListener").useListener(o("WAWebDesktopUpsellEvents").WAWebDesktopUpsellEvents, "conversation_panel_ui_change", R);
        let L;
        if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
            L = _();
            e[3] = L;
        } else {
            L = e[3];
        }
        const k = g === true && a != null && !L && !isBeta;
        const BUTTERBAR = o("WAWebWamEnumWebcNativeUpsellCtaSourceType").WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.BUTTERBAR;
        const T = k && !isBeta;
        let D;
        if (e[4] !== y || e[5] !== isBeta || e[6] !== T) {
            D = {
                isCtaVisible: T,
                source: BUTTERBAR,
                isBeta,
                isBetaUser: y
            };
            e[4] = y;
            e[5] = isBeta;
            e[6] = T;
            e[7] = D;
        } else {
            D = e[7];
        }
        o("useWAWebDesktopUpsellWamImpression").useWAWebDesktopUpsellWamImpression(D);
        if (isBeta) {
            let x;
            if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
                x = s.jsx(r("WAWebMacBetaUpsellToastbar.react"), {
                    sourceType: BUTTERBAR
                });
                e[8] = x;
            } else {
                x = e[8];
            }
            return x;
        }
        if (!k) {
            return null;
        }
        const hidden = !v;
        let P;
        let N;
        if (e[9] !== y) {
            P = function() {
                o("WAWebDesktopUpsellStoreOpener").openExternalWhatsAppDesktopDownloadUrl({
                    ctaSource: BUTTERBAR,
                    isBetaUser: y
                });
            };
            N = function() {
                f();
                new (o("WAWebWebcNativeUpsellCtaWamEvent")).WebcNativeUpsellCtaWamEvent({
                    webcNativeUpsellCtaEventType: o("WAWebWamEnumWebcNativeUpsellCtaEventType").WEBC_NATIVE_UPSELL_CTA_EVENT_TYPE.CTA_DISMISS,
                    webcNativeUpsellCtaSource: BUTTERBAR,
                    webcNativeUpsellCtaReleaseChannel: o("WAWebWamEnumWebcNativeUpsellCtaReleaseChannel").WEBC_NATIVE_UPSELL_CTA_RELEASE_CHANNEL.PRODUCTION,
                    webcNativeUpsellCtaIsBetaUser: y
                }).commit();
            };
            e[9] = y;
            e[10] = P;
            e[11] = N;
        } else {
            P = e[10];
            N = e[11];
        }
        let M;
        if (e[12] === Symbol.for("react.memo_cache_sentinel")) {
            M = s.jsx(r("WAWebDesktopUpsellWASquareIcon.react"), {});
            e[12] = M;
        } else {
            M = e[12];
        }
        let w;
        if (e[13] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebText.react").WAWebTextTitle;
            w = <Component as="span" color="teal" xstyle={m.textWrapper}>{o("WAWebDesktopUpsellCommonStrings").getDesktopUpsellToastbarLabel(false)}</Component>;
            e[13] = w;
        } else {
            w = e[13];
        }
        let A;
        if (e[14] !== hidden || e[15] !== P || e[16] !== N) {
            const Component = r("WAWebToastbar.react");
            A = <Component hidden={hidden} dismissible onClick={P} onDismiss={N}>{M}{w}</Component>;
            e[14] = hidden;
            e[15] = P;
            e[16] = N;
            e[17] = A;
        } else {
            A = e[17];
        }
        return A;
    }
    function _() {
        const e = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.DESKTOP_UPSELL_USER_HAS_DISMISSED_CHATLIST_TOASTBAR);
        return !!e;
    }
    function f() {
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.DESKTOP_UPSELL_USER_HAS_DISMISSED_CHATLIST_TOASTBAR, true);
    }
    l.default = p;
}, 98);