__d("WAWebPhoneNumberCaptureFields.react", [
    "CometHeroHoldTrigger.react",
    "WAWebCountriesUtils",
    "WAWebCountryPhoneNumberInput.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebLinkDeviceFlagEmojiSetup",
    "WAWebSpinner.react",
    "WDSBanner.react",
    "WDSIconIcWarning.react",
    "gkx",
    "react",
    "useWAWebAsync",
    "useWAWebCountries"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = {
        error: {
            backgroundColor: "x1o4ak67",
            color: "xvwrcih",
            borderStartStartRadius: "xyi3aci",
            borderStartEndRadius: "xwf5gio",
            borderEndEndRadius: "x1p453bz",
            borderEndStartRadius: "x1suzm8a",
            marginBottom: "x1e56ztr",
            paddingTop: "x1xrf6ya",
            paddingInlineEnd: "xvtqlqk",
            paddingBottom: "xscbp6u",
            paddingInlineStart: "xdx6fka",
            $$css: true
        }
    };
    function c({ error: t, onBlur: n, onChangePhoneNumber: a, onChangeSelectedCountry: i, onFocus: l, onSubmit: c, phoneNumberWithoutCountryCode: d, selectedCountryId: m, showCountrySelect: _ = true, surface: g = "link-device-phone-number", theme: y = "default" }) {
        const C = r("useWAWebAsync")(r("WAWebLinkDeviceFlagEmojiSetup"), []);
        const b = o("useWAWebCountries").useCountries({
            filterType: o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.WHATSAPP_REGISTRATION
        });
        const { error: v, value: S } = b;
        if (S == null || v != null || C.loading || C.error) {
            const Component = o("WAWebFlex.react").FlexRow;
            return <Component justify="center">{s.jsx(r("CometHeroHoldTrigger.react"), {
                description: "WAWebPhoneNumberCaptureFields",
                hold: true
            })}{s.jsx(o("WAWebSpinner.react").Spinner, {})}</Component>;
        }
        let R;
        if (r("gkx")("26259")) {
            R = S;
        } else {
            R = S.filter(([t, n])=>t === "US");
        }
        const Component = r("WAWebCountryPhoneNumberInput.react");
        const Component_1 = o("WAWebFlex.react").FlexRow;
        return <><Component countries={R} shouldDisplayError={false} phoneNumberWithoutCountryCode={d} selectedCountryId={m} onChangePhoneNumber={a} onChangeSelectedCountry={i} onFocus={l} onBlur={n} showCountrySelect={_} surface={g} onSubmit={function() {
            if (c != null) {
                c();
            }
        }} error={t} theme={y}/>{t != null && (y === "wds" ? s.jsx(r("WDSBanner.react"), {
            type: "warning",
            icon: r("WDSIconIcWarning.react"),
            body: t ?? r("WAWebFbtCommon")("Try Again")
        }) : <Component_1 alignSelf="center" xstyle={u.error}>{t ?? r("WAWebFbtCommon")("Try Again")}</Component_1>)}</>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = c;
}, 98);