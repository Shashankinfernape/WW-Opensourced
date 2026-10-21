__d("WAWebGetBusinessNameFromMsg", [
    "WAWebWidToFormattedNameOrNumber"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return e.templateParams[0]?.toString() ?? r("WAWebWidToFormattedNameOrNumber")(e.id.remote);
    }
    l.default = e;
}, 98);