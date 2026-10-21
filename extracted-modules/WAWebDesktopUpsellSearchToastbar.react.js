__d("WAWebDesktopUpsellSearchToastbar.react", [
    "fbt",
    "WAWebDesktopUpsellCommonStrings",
    "WAWebDesktopUpsellPlatformAwareHooks",
    "WAWebDesktopUpsellStoreOpener",
    "WAWebDesktopUpsellUtils",
    "WAWebDesktopUpsellWASquareIcon.react",
    "WAWebFlex.react",
    "WAWebText.react",
    "WAWebToastbar.react",
    "WAWebWamEnumWebcNativeUpsellCtaSourceType",
    "cr:23046",
    "react",
    "react-compiler-runtime",
    "useWAWebDesktopUpsellWamImpression",
    "useWAWebExternalBetaOptIn"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        textWrapper: {
            lineHeight: "xo5v014",
            $$css: true
        },
        toastbar: {
            justifyContent: "xl56j7k",
            $$css: true
        }
    };
    function d() {
        const e = o("react-compiler-runtime").c(17);
        const t = o("WAWebDesktopUpsellUtils").getUserDesktopOs();
        const a = o("WAWebDesktopUpsellPlatformAwareHooks").useWAWebDesktopUpsellPlatformCheck();
        let i;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = (n("cr:23046") == null ? undefined : n("cr:23046").isWindowsHybridEnabled()) ?? false;
            e[0] = i;
        } else {
            i = e[0];
        }
        const m = !i && a;
        const p = o("useWAWebExternalBetaOptIn").useExternalBetaOptIn();
        const isBetaUser = p[0];
        const f = o("useWAWebExternalBetaOptIn").useMacBetaUpsellOnWeb();
        const g = m === true;
        let h;
        if (e[1] !== isBetaUser || e[2] !== f || e[3] !== g) {
            h = {
                isCtaVisible: g,
                source: o("WAWebWamEnumWebcNativeUpsellCtaSourceType").WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.SEARCH_RESULTS,
                isBeta: f,
                isBetaUser
            };
            e[1] = isBetaUser;
            e[2] = f;
            e[3] = g;
            e[4] = h;
        } else {
            h = e[4];
        }
        o("useWAWebDesktopUpsellWamImpression").useWAWebDesktopUpsellWamImpression(h);
        if (m !== true || t == null) {
            return null;
        }
        let y;
        if (e[5] !== isBetaUser || e[6] !== f) {
            y = function() {
                o("WAWebDesktopUpsellStoreOpener").openExternalWhatsAppDesktopDownloadUrl({
                    ctaSource: o("WAWebWamEnumWebcNativeUpsellCtaSourceType").WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.SEARCH_RESULTS,
                    isBetaUpsell: f,
                    isBetaUser
                });
            };
            e[5] = isBetaUser;
            e[6] = f;
            e[7] = y;
        } else {
            y = e[7];
        }
        let C;
        if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
            C = u.jsx(r("WAWebDesktopUpsellWASquareIcon.react"), {});
            e[8] = C;
        } else {
            C = e[8];
        }
        let b;
        if (e[9] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebText.react").WAWebTextTitle;
            const Component_1 = o("WAWebFlex.react").FlexItem;
            b = <Component_1><Component as="span">{s._("See more chat history on the app")}</Component></Component_1>;
            e[9] = b;
        } else {
            b = e[9];
        }
        let v;
        if (e[10] !== f) {
            v = o("WAWebDesktopUpsellCommonStrings").getDesktopUpsellToastbarLabel(f);
            e[10] = f;
            e[11] = v;
        } else {
            v = e[11];
        }
        let S;
        if (e[12] !== v) {
            const Component = o("WAWebText.react").WAWebTextMuted;
            const Component_1 = o("WAWebFlex.react").FlexItem;
            const Component_2 = o("WAWebFlex.react").FlexColumn;
            S = <Component_2>{b}<Component_1 inline><Component as="span" xstyle={c.textWrapper}>{v}</Component></Component_1></Component_2>;
            e[12] = v;
            e[13] = S;
        } else {
            S = e[13];
        }
        let R;
        if (e[14] !== y || e[15] !== S) {
            const Component = r("WAWebToastbar.react");
            R = <Component onClick={y} wrapperXstyle={c.toastbar}>{C}{S}</Component>;
            e[14] = y;
            e[15] = S;
            e[16] = R;
        } else {
            R = e[16];
        }
        return R;
    }
    l.default = d;
}, 226);