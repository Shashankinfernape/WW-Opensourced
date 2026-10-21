__d("WAWebDesktopUpsellQRCodeSlimBanner.react", [
    "WAWebDesktopUpsellCommonStrings",
    "WAWebFlex.react",
    "WAWebNativeAppDownloadButton.react",
    "WAWebWamEnumWebcNativeUpsellCtaSourceType",
    "WDSIllustrationWdsIllLaptopCalling.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        container: {
            width: "xy296fx x91od0",
            paddingTop: "x1p5oq8j x18w32sv",
            paddingInlineEnd: "x15zmtp0 xym2i8p",
            paddingBottom: "xwxc41k xk3sftt",
            paddingInlineStart: "x1oiqv2n x1i50ybd",
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
        bannerAltBtn: {
            display: "x1s85apg xe8os0b",
            width: "xd80u2d",
            $$css: true
        },
        bannerBtn: {
            display: "x1qh72ku",
            $$css: true
        },
        title: {
            fontSize: "x1c3i2sq",
            fontWeight: "xk50ysn",
            lineHeight: "x1o2sk6j",
            color: "xowvryd",
            $$css: true
        },
        subtitle: {
            color: "xowvryd",
            fontSize: "x1jchvi3",
            fontWeight: "xo1l8bm",
            lineHeight: "x1fc57z9",
            display: "x78zum5 x1qh72ku",
            $$css: true
        }
    };
    function c(e) {
        const t = o("react-compiler-runtime").c(10);
        const n = e.apiCmd;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexColumn;
            a = <Component shrink={0}>{s.jsx(r("WDSIllustrationWdsIllLaptopCalling.react"), {
                testid: "web-login-desktop-upsell-illustration"
            })}</Component>;
            t[0] = a;
        } else {
            a = t[0];
        }
        let i;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexRow;
            i = <Component xstyle={u.title}>{o("WAWebDesktopUpsellCommonStrings").getDesktopUpsellDownloadWhatsAppTitle()}</Component>;
            t[1] = i;
        } else {
            i = t[1];
        }
        let l;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexRow;
            l = <Component xstyle={u.subtitle}>{o("WAWebDesktopUpsellCommonStrings").getDesktopUpsellIntroPanelText()}</Component>;
            t[2] = l;
        } else {
            l = t[2];
        }
        let c;
        if (t[3] !== n) {
            const Component = o("WAWebFlex.react").FlexItem;
            const Component_1 = o("WAWebFlex.react").FlexColumn;
            c = <Component_1 grow={1} rowGap={4}>{i}{l}<Component shrink={0} xstyle={u.bannerAltBtn} align="center" justify="start">{s.jsx(r("WAWebNativeAppDownloadButton.react"), {
                sourceType: o("WAWebWamEnumWebcNativeUpsellCtaSourceType").WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.QR_SLIM_BANNER,
                inline: true,
                apiCmd: n
            })}</Component></Component_1>;
            t[3] = n;
            t[4] = c;
        } else {
            c = t[4];
        }
        let d;
        if (t[5] !== n) {
            const Component = o("WAWebFlex.react").FlexItem;
            d = <Component shrink={0} xstyle={u.bannerBtn}>{s.jsx(r("WAWebNativeAppDownloadButton.react"), {
                sourceType: o("WAWebWamEnumWebcNativeUpsellCtaSourceType").WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.QR_SLIM_BANNER,
                apiCmd: n
            })}</Component>;
            t[5] = n;
            t[6] = d;
        } else {
            d = t[6];
        }
        let m;
        if (t[7] !== c || t[8] !== d) {
            const Component = o("WAWebFlex.react").FlexRow;
            const Component_1 = o("WAWebFlex.react").FlexItem;
            m = <Component_1 align="center" justify="center" xstyle={u.container}><Component align="center" justify="center" columnGap={24}>{a}{c}{d}</Component></Component_1>;
            t[7] = c;
            t[8] = d;
            t[9] = m;
        } else {
            m = t[9];
        }
        return m;
    }
    l.default = c;
}, 98);