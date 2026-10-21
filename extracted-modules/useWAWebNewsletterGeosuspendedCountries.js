__d("useWAWebNewsletterGeosuspendedCountries", [
    "Promise",
    "WAWebCountriesUtils",
    "WAWebFrontendChatGetters",
    "WAWebNewsletterMetadataGetters",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebEventTargetValue",
    "useWAWebNewsletterMetadataValues"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const { useEffect, useState } = u;
    function useM(t) {
        let a;
        const i = o("react-compiler-runtime").c(7);
        const l = useState(null);
        const s = l[0];
        const u = l[1];
        let m;
        if (i[0] === Symbol.for("react.memo_cache_sentinel")) {
            m = [
                o("WAWebFrontendChatGetters").getNewsletterMetadata
            ];
            i[0] = m;
        } else {
            m = i[0];
        }
        const _ = o("useWAWebChatValues").useChatValues(t.id, m);
        const f = _[0];
        (a = o("useWAWebNewsletterMetadataValues").useOptionalNewsletterMetadataValues(f?.id, [
            o("WAWebNewsletterMetadataGetters").getMembershipType
        ], {
            isStrong: true
        })) != null;
        const g = f?.geosuspendedCountries;
        let h;
        if (i[1] === Symbol.for("react.memo_cache_sentinel")) {
            h = [
                "add",
                "remove",
                "reset",
                "change"
            ];
            i[1] = h;
        } else {
            h = i[1];
        }
        let y;
        if (i[2] !== g) {
            y = function() {
                return g?.toArray();
            };
            i[2] = g;
            i[3] = y;
        } else {
            y = i[3];
        }
        const C = r("useWAWebEventTargetValue")(g, h, y);
        let b;
        let v;
        if (i[4] !== C) {
            b = function() {
                const t = (()=>{
                    const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                        if (C != null) {
                            const t = yield (e || (e = n("Promise"))).all(C.map(p));
                            u(t);
                        }
                    });
                    function r() {
                        return t.apply(this, arguments);
                    }
                    return r;
                })();
                t();
            };
            v = [
                C
            ];
            i[4] = C;
            i[5] = b;
            i[6] = v;
        } else {
            b = i[5];
            v = i[6];
        }
        useEffect(b, v);
        return s;
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return {
                countryCode: e.id,
                countryName: (yield o("WAWebCountriesUtils").getCountryNameFromCountryCode(e.id)) ?? ""
            };
        });
        return _.apply(this, arguments);
    }
    l.useNewsletterGeosuspendedCountries = useM;
}, 98);