__d("WAWebButterbar.react", [
    "WALogger",
    "WAWebBanner.react",
    "WAWebCheckCircleCropViewBox",
    "WAWebThemeContext",
    "WDSIconIcAlertWarning.react",
    "WDSIconIcCampaignMegaphone.react",
    "WDSIconIcCampaignMegaphoneFilled.react",
    "WDSIconIcCheckCircleFilled.react",
    "WDSIconIcFolder.react",
    "WDSIconIcReceipt.react",
    "WDSIconIcStoreFilled.react",
    "WDSIconIcWarning.react",
    "WDSIconWdsIcChat.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useEffect, useState } = c;
    function quickPromotion(e) {
        const t = o("react-compiler-runtime").c(2);
        let n;
        if (t[0] !== e) {
            n = u.jsx(r("WDSIconIcCampaignMegaphoneFilled.react"), babelHelpers.extends({
                height: 24,
                width: 24
            }, e, {
                testid: "business-advertise"
            }));
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        return n;
    }
    function brigadingNotification(e) {
        const t = o("react-compiler-runtime").c(2);
        let n;
        if (t[0] !== e) {
            n = u.jsx(r("WDSIconIcCheckCircleFilled.react"), babelHelpers.extends({
                viewBox: o("WAWebCheckCircleCropViewBox").CHECK_CIRCLE_FILLED_CROP_VIEWBOX
            }, e));
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        return n;
    }
    const f = {
        announcement: r("WDSIconIcAlertWarning.react"),
        fatal: r("WDSIconIcAlertWarning.react"),
        generalAlert: r("WDSIconIcAlertWarning.react"),
        nuxGreen: r("WDSIconIcStoreFilled.react"),
        nuxBlue: r("WDSIconIcFolder.react"),
        resumeProgress: r("WDSIconWdsIcChat.react"),
        invalidPoll: r("WDSIconIcWarning.react"),
        adActionInfo: r("WDSIconIcCampaignMegaphone.react"),
        adActionWarning: r("WDSIconIcWarning.react"),
        orderExpansion: r("WDSIconIcReceipt.react"),
        quickPromotion,
        brigadingWarning: r("WDSIconIcWarning.react"),
        brigadingNotification,
        reachoutTimelockedWarning: r("WDSIconIcAlertWarning.react")
    };
    function g(type) {
        switch(type){
            case "invalidPoll":
            case "fatal":
            case "generalAlert":
            case "brigadingWarning":
            case "reachoutTimelockedWarning":
                return "warning";
            default:
                return "default";
        }
    }
    function h(type) {
        return f[type];
    }
    function y(t) {
        const r = o("WAWebThemeContext").useIsDarkTheme();
        const a = useState(null);
        const customIcon = a[0];
        const l = a[1];
        const { action, customIcons, testid, textTestid } = t;
        useEffect(function() {
            if (customIcons == null) {
                l(null);
                return;
            }
            const t = r ? customIcons.iconDark : customIcons.iconLight;
            if (t == null) {
                l(null);
                return;
            }
            const customIcons_description = customIcons.description;
            let a;
            try {
                const i = new Blob([
                    t
                ]);
                a = window.URL.createObjectURL(i);
                l({
                    src: a,
                    altText: customIcons_description
                });
            } catch (t) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "ButterBar: Could not create a blob URL"
                ])));
            }
            return function() {
                if (a != null) {
                    window.URL.revokeObjectURL(a);
                }
            };
        }, [
            r,
            l,
            customIcons
        ]);
        const Component = o("WAWebBanner.react").WAWebBanner;
        return <Component type={g(t.type)} title={t.title} text={t.subtitleText ?? t.text} actionText={t.actionText} icon={customIcon ? {
            type: "custom",
            customIcon
        } : {
            icon: h(t.type)
        }} onClick={action} onDismiss={t.onDismiss} textTestid={textTestid} testid={testid}/>;
    }
    y.displayName = `${y.name} [from ${i.id}]`;
    l.default = y;
}, 98);