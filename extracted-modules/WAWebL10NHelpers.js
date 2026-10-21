__d("WAWebL10NHelpers", [
    "WAWebEnvironment"
], function(t, n, r, o, a, i, l) {
    function e(e = "") {
        return e.normalize("NFKD");
    }
    function s() {
        return r("WAWebEnvironment").isWindows === true;
    }
    l.normalizeForm = e;
    l.isLocalLanguageOverrideEnabled = s;
}, 98);