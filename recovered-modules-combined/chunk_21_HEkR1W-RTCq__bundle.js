;
__d("VultureJSSampleRatesLoader", [
    "VultureJSSampleRates",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            return r("VultureJSSampleRates").sample_rates;
        });
        return s.apply(this, arguments);
    }
    l.loadSampleRates = e;
}, 98);
