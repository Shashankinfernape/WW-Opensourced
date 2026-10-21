__d("WAWebCountriesUtils", [
    "WAWebLocaleModules",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const s = Object.freeze({
        META_RECOGNIZED: "META_RECOGNIZED",
        WHATSAPP_REGISTRATION: "WHATSAPP_REGISTRATION"
    });
    const u = {
        [s.META_RECOGNIZED]: [
            "AC",
            "CP",
            "DG",
            "EA",
            "EU",
            "EZ",
            "IC",
            "QO",
            "TA",
            "UN",
            "XA",
            "XB"
        ],
        [s.WHATSAPP_REGISTRATION]: [
            "AQ",
            "BV",
            "CP",
            "DG",
            "EA",
            "EH",
            "EU",
            "EZ",
            "GS",
            "HM",
            "IC",
            "PN",
            "QO",
            "TA",
            "TF",
            "UM",
            "UN",
            "XA",
            "XB",
            "ZZ"
        ]
    };
    function c(e, t, n) {
        if (!(e == null || e === "") && n != null && !(t && u[t].includes(e.toUpperCase()))) {
            return n[e.toUpperCase()];
        }
    }
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WAWebLocaleModules").getCountryData();
            return c(e, t, n);
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        if (e.countriesMap == null) {
            return [];
        }
        const t = Object.entries(e.countriesMap).filter(([n])=>!n.includes("@") && !u[e.filter].includes(n)).sort(([, n], t)=>{
            const r = t[1];
            return String(n).localeCompare(String(r));
        });
        if (e.prependWith != null) {
            t.unshift([
                e.prependWith[0],
                e.prependWith[1].toJSON()
            ]);
        }
        return t.map(([t, n])=>[
                t,
                n
            ]);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const countriesMap = yield o("WAWebLocaleModules").getCountryData();
            return p(babelHelpers.extends({}, e, {
                countriesMap
            }));
        });
        return f.apply(this, arguments);
    }
    l.COUNTRY_FILTER_TYPE = s;
    l.getCountryNameWithMap = c;
    l.getCountryNameFromCountryCode = d;
    l.getCountriesWithMap = p;
    l.getCountries = _;
}, 98);