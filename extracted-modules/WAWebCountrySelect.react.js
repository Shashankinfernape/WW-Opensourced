__d("WAWebCountrySelect.react", [
    "fbt",
    "invariant",
    "WAIsoToCc",
    "WAWebCountriesNativeCountryNames",
    "WAWebEmoji",
    "WAWebEmoji.react",
    "WAWebPerformantSelect.react",
    "WAWebText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s, u) {
    let e;
    const c = e || (e = o("react"));
    const e_useMemo = e.useMemo;
    function m(e) {
        return e.toUpperCase().split("").map((e)=>String.fromCodePoint(127462 + e.charCodeAt(0) - 65)).join("");
    }
    function p({ countries }) {
        return countries.map(([t, n])=>{
            let a;
            if (r("WAWebCountriesNativeCountryNames")[t] != null && n !== r("WAWebCountriesNativeCountryNames")[t]) {
                a = r("WAWebCountriesNativeCountryNames")[t];
            }
            const i = m(t);
            const l = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(i);
            const d = r("WAIsoToCc")[t];
            if (d == null) {
                u(0, 75729, t);
            }
            const Component = o("WAWebText.react").WAWebTextMuted;
            const menuItem = {
                optionId: t,
                primary: n,
                secondary: a,
                ariaLabel: s._("Selected country: {country}. Click to select a different country.", [
                    s._param("country", n)
                ]),
                detailLeft: l != null ? c.jsx(r("WAWebEmoji.react"), {
                    DEPRECATED_className: "x1603h9y",
                    emoji: l,
                    selectable: false
                }) : <span/>,
                detailRight: <Component dir="ltr">+{d}</Component>,
                searchCriteria: [
                    n,
                    a,
                    t,
                    d.toString(),
                    i
                ].join(" ")
            };
            return {
                itemKey: menuItem.optionId,
                menuItem,
                height: menuItem.secondary != null ? 56 : 40
            };
        });
    }
    function _(e) {
        const t = o("react-compiler-runtime").c(14);
        const { countries, initialActiveOptionId, onChange, testid, theme, width } = e;
        const d = theme === "link-devices-screen" ? "forcedPrimary" : theme === "link-devices-screen-wds" ? "wdsContentDefault" : null;
        let m;
        if (t[0] !== countries) {
            m = p({
                countries
            });
            t[0] = countries;
            t[1] = m;
        } else {
            m = t[1];
        }
        const _ = m;
        let f;
        if (t[2] !== _ || t[3] !== d) {
            f = function(t) {
                const e = _.find((e)=>e.itemKey === t);
                if (e != null) {
                    const Component = o("WAWebText.react").WAWebTextMuted;
                    return <Component align="center" color={d} flex gap={8}>{e.menuItem.detailLeft} {e.menuItem.primary}</Component>;
                }
                return null;
            };
            t[2] = _;
            t[3] = d;
            t[4] = f;
        } else {
            f = t[4];
        }
        const customLabel = f;
        let defaultLabel;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            defaultLabel = s._("Select country");
            t[5] = defaultLabel;
        } else {
            defaultLabel = t[5];
        }
        const y = testid ?? "country-selector";
        let C;
        if (t[6] !== _ || t[7] !== customLabel || t[8] !== initialActiveOptionId || t[9] !== onChange || t[10] !== y || t[11] !== theme || t[12] !== width) {
            const Component = o("WAWebPerformantSelect.react").Select;
            C = <Component customLabel={customLabel} defaultLabel={defaultLabel} includeSearchInput initialSelection={initialActiveOptionId} items={_} menuMaxHeight={270} menuMinWidth={300} onChange={onChange} testid={y} theme={theme} width={width}/>;
            t[6] = _;
            t[7] = customLabel;
            t[8] = initialActiveOptionId;
            t[9] = onChange;
            t[10] = y;
            t[11] = theme;
            t[12] = width;
            t[13] = C;
        } else {
            C = t[13];
        }
        return C;
    }
    l.getCountryFlagEmoji = m;
    l.getCountryDropdownItems = p;
    l.CountrySelect = _;
}, 226);