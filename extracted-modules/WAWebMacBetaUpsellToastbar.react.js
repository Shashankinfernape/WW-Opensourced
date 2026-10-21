__d("WAWebMacBetaUpsellToastbar.react", [
    "fbt",
    "WAWebDesktopUpsellStoreOpener",
    "WAWebFlex.react",
    "WAWebText.react",
    "WAWebToastbar.react",
    "WAWebUserPrefsStore",
    "WAWebWamEnumWebcNativeUpsellCtaEventType",
    "WAWebWamEnumWebcNativeUpsellCtaReleaseChannel",
    "WAWebWebcNativeUpsellCtaWamEvent",
    "WAWebWhatsAppAppIcon.react",
    "react",
    "react-compiler-runtime",
    "useWAWebDesktopUpsellWamImpression"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useCallback, useState } = c;
    const p = {
        wrapperXstyle: {
            insetInlineStart: "x1o0tod",
            left: null,
            right: null,
            justifyContent: "xlqzeqv",
            width: "xh8yej3",
            boxSizing: "x9f619",
            paddingInlineStart: "x13jy36j",
            paddingInlineEnd: "xziim83",
            paddingTop: "xz9dl7a",
            paddingBottom: "xsag5q8",
            $$css: true
        },
        childrenXStyle: {
            flexGrow: "x1iyjqo2",
            marginInlineStart: "x1lziwak",
            $$css: true
        },
        body: {
            columnGap: "x1vg3z9j",
            width: "xh8yej3",
            $$css: true
        },
        waIcon: {
            width: "x1useyqa",
            alignItems: "x6s0dn4",
            $$css: true
        },
        iconXstyle: {
            borderStartStartRadius: "xyi3aci",
            borderStartEndRadius: "xwf5gio",
            borderEndEndRadius: "x1p453bz",
            borderEndStartRadius: "x1suzm8a",
            $$css: true
        },
        dismissXstyle: {
            marginInlineEnd: "x14z9mp",
            $$css: true
        }
    };
    const _ = "mac_beta_upsell_dismiss";
    function f(e) {
        const t = o("react-compiler-runtime").c(15);
        const e_sourceType = e.sourceType;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = r("WAWebUserPrefsStore").getUser(_);
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = useState(a === true);
        const l = i[0];
        const c = i[1];
        let d;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            d = function() {
                r("WAWebUserPrefsStore").setUser(_, true);
                c(true);
            };
            t[1] = d;
        } else {
            d = t[1];
        }
        const f = d;
        let g;
        if (t[2] !== e_sourceType) {
            g = function() {
                new (o("WAWebWebcNativeUpsellCtaWamEvent")).WebcNativeUpsellCtaWamEvent({
                    webcNativeUpsellCtaEventType: o("WAWebWamEnumWebcNativeUpsellCtaEventType").WEBC_NATIVE_UPSELL_CTA_EVENT_TYPE.CTA_DISMISS,
                    webcNativeUpsellCtaSource: e_sourceType,
                    webcNativeUpsellCtaReleaseChannel: o("WAWebWamEnumWebcNativeUpsellCtaReleaseChannel").WEBC_NATIVE_UPSELL_CTA_RELEASE_CHANNEL.BETA,
                    webcNativeUpsellCtaIsBetaUser: true
                }).commit();
                f();
            };
            t[2] = e_sourceType;
            t[3] = g;
        } else {
            g = t[3];
        }
        const h = g;
        const y = !l;
        let C;
        if (t[4] !== e_sourceType || t[5] !== y) {
            C = {
                isCtaVisible: y,
                source: e_sourceType,
                isBeta: true,
                isBetaUser: true
            };
            t[4] = e_sourceType;
            t[5] = y;
            t[6] = C;
        } else {
            C = t[6];
        }
        o("useWAWebDesktopUpsellWamImpression").useWAWebDesktopUpsellWamImpression(C);
        if (l) {
            return null;
        }
        let b;
        if (t[7] !== e_sourceType) {
            b = function() {
                o("WAWebDesktopUpsellStoreOpener").openExternalWhatsAppDesktopDownloadUrl({
                    ctaSource: e_sourceType,
                    isBetaUpsell: true,
                    isBetaUser: true
                });
                window.setTimeout(function() {
                    f();
                }, 1000);
            };
            t[7] = e_sourceType;
            t[8] = b;
        } else {
            b = t[8];
        }
        let v;
        if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexColumn;
            v = <Component shrink={0} xstyle={p.waIcon}>{u.jsx(r("WAWebWhatsAppAppIcon.react"), {
                size: 32,
                xstyle: p.iconXstyle
            })}</Component>;
            t[9] = v;
        } else {
            v = t[9];
        }
        let S;
        if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebText.react").WAWebTextTitleRefreshed;
            const Component_1 = o("WAWebFlex.react").FlexRow;
            S = <Component_1><Component>{s._("Download the beta Mac app")}</Component></Component_1>;
            t[10] = S;
        } else {
            S = t[10];
        }
        let R;
        if (t[11] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebText.react").WAWebTextMutedRefreshed;
            const Component_1 = o("WAWebFlex.react").FlexRow;
            const Component_2 = o("WAWebFlex.react").FlexColumn;
            const Component_3 = o("WAWebFlex.react").FlexRow;
            R = <Component_3 xstyle={p.body} align="center">{v}<Component_2 grow={1} justify="center" align="start">{S}<Component_1><Component>{s._("Try new features and share feedback")}</Component></Component_1></Component_2></Component_3>;
            t[11] = R;
        } else {
            R = t[11];
        }
        let L;
        if (t[12] !== h || t[13] !== b) {
            const Component = r("WAWebToastbar.react");
            L = <Component onClick={b} dismissible onDismiss={h} alwaysShowDismissBtn dismissXstyle={p.dismissXstyle} wrapperXstyle={p.wrapperXstyle} childrenXStyle={p.childrenXStyle}>{R}</Component>;
            t[12] = h;
            t[13] = b;
            t[14] = L;
        } else {
            L = t[14];
        }
        return L;
    }
    l.default = f;
}, 226);