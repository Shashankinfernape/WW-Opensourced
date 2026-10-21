__d("WAWebLandingHeader.react", [
    "WAWebEnvironment",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebNativeAppDownloadButton.react",
    "WAWebWaLogoIcon.react",
    "WAWebWaWordmarkIcon.react",
    "WAWebWamEnumWebcNativeUpsellCtaSourceType",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        paddingInlineEnd6: {
            paddingInlineEnd: "x1icxu4v",
            $$css: true
        }
    };
    const c = {
        brandColor: {
            color: "x1y4xi8",
            $$css: true
        },
        headerIcon: {
            marginTop: "x1rdy4ex",
            $$css: true
        },
        headerText: {
            marginInlineStart: "xe9ewy2",
            $$css: true
        }
    };
    function D8Component(e) {
        const t = o("react-compiler-runtime").c(4);
        const e_children = e.children;
        let r;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexItem;
            r = <Component grow={0} xstyle={[
                u.paddingInlineEnd6,
                c.headerIcon
            ]}>{s.jsx(o("WAWebWaLogoIcon.react").WaLogoIcon, {
                height: 30,
                iconXstyle: c.brandColor
            })}</Component>;
            t[0] = r;
        } else {
            r = t[0];
        }
        let a;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexItem;
            a = <Component grow={1} xstyle={c.headerText}>{s.jsx(o("WAWebWaWordmarkIcon.react").WaWordmarkIcon, {
                height: 20,
                iconXstyle: c.brandColor
            })}</Component>;
            t[1] = a;
        } else {
            a = t[1];
        }
        let i;
        if (t[2] !== e_children) {
            const Component = o("WAWebFlex.react").FlexRow;
            i = <Component align="center">{r}{a}{e_children}</Component>;
            t[2] = e_children;
            t[3] = i;
        } else {
            i = t[3];
        }
        return i;
    }
    function m({ showAppDownloadButton, surface }) {
        if (r("WAWebEnvironment").isWindows) {
            return <div className="x78zum5 x1okw0bk x6s0dn4 x1nhvcw1 x1p2m28r xse5ku5 x1rcfgkt x11t971q x1chd833 xvc5jky x1ojdt5g xdsw7e4 x1lbx5cb x1vy9x54 x6gp099 x1yualc3"/>;
        }
        const Component = o("WAWebFlex.react").FlexItem;
        switch(surface){
            case "link-device-screen":
                return <D8Component><Component grow={0}>{showAppDownloadButton && s.jsx(r("WAWebNativeAppDownloadButton.react"), {
                    sourceType: o("WAWebWamEnumWebcNativeUpsellCtaSourceType").WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.QR_DOWNLOAD_BUTTON
                })}</Component></D8Component>;
            case "lock-screen":
                return <D8Component/>;
            case "default":
            default:
                return <div className="x78zum5 x1okw0bk x6s0dn4 x1nhvcw1 x1p2m28r xse5ku5 x1rcfgkt x11t971q x1chd833 xvc5jky x1ojdt5g xdsw7e4 x1lbx5cb x1vy9x54 x6gp099 x1yualc3"><div className="x1rg5ohu xcev3uh x1f6kntn xk50ysn xggjnk3 x1awj2ng xtvhhri xxymvpz">{r("WAWebFbtCommon")("WhatsApp Web")}</div></div>;
        }
    }
    m.displayName = `${m.name} [from ${i.id}]`;
    l.default = m;
}, 98);