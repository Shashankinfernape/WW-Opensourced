__d("useWAWebOwnMuseAgentContact", [
    "WAWebOwnMuseAgentContact",
    "react-compiler-runtime",
    "useWAWebAsync"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = [];
            e[0] = t;
        } else {
            t = e[0];
        }
        return r("useWAWebAsync")(o("WAWebOwnMuseAgentContact").fetchOwnMuseAgentContact, t).value;
    }
    l.default = e;
}, 98);